<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Layer;

use Auth;
use App\Category;
use App\Log;
use DB;
use Avatar;
use Storage;
use URL;
use \wapmorgan\UnifiedArchive\UnifiedArchive;
use ImageOptimizer;
use Artisan;


class LayerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $layers = Layer::get()->groupBy('category_id');

       
        
        return response()->success(compact('layers'));

    }
    
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $user = Auth::user();
        $this->validate($request, [
        'name' => 'required',
        'category_id' => 'required',
        'sourceType' => 'required',

         ]);

        try {
            $layer = [];
            $layer = new Layer;
                $log = new Log;
                $log->desc = "User ($user->id, $user->name): ADD  ";
                $log->user_id = $user->id;
                $log->table = "layers";
            //update layer
            if($request->has('id') && $request->input('id') != ''){
                $layer =  Layer::find($request->input('id'));
                $log->desc = "User ($user->id, $user->name): UPDATE  ";
                $layer->state =  (int) $request->input('state') ;
                $layer->type =  $request->input('type') ;
                $layer->name = trim($request->input('name'));
                $layer->category_id = $request->input('category_id');
                $layer->sourceType = $request->input('sourceType');
                $layer->icon = "layer.svg";
                $layer->desc = trim($request->input('desc'));
            }

            //Si es una nueva capa Id antes de salvar
            if(!$layer->id){
                $tempId =  $this->getNextId('layers');
                $layer->id = $tempId;
                $layer->name = trim($request->input('name'));
                $layer->category_id = $request->input('category_id');
                $layer->state = false;
                $layer->sourceType = $request->input('sourceType');
                $layer->icon = "layer.svg";
                $layer->desc = trim($request->input('desc'));
                $layer->type =  $request->input('type') ;
            }

            // Set Convention
            if($request->hasFile('fileConv') ){
                $fileConv = $request->file('fileConv');
                $category = Category::find($layer->category_id);
               // $cat_name = $category->name;
               // $layer_name = $layer->name;
               // $destinationPath ="LAYERS/$cat_name/$layer_name/"; //./relative to mapbox
                $destinationPath ="LAYERS/$layer->id/"; //./relative to mapbox
                $path = $this->storeFile($fileConv,  $destinationPath);
                //Resize and improve png:
                ImageOptimizer::optimize($path->full, $path->full);
                Artisan::call('my_app:optimize_img 400x400 90 "'.$path->full.'"');
                $layer->convention = URL::to('/').'/assets/files/shares/plataforma/'. $path->relative;
            }
            //get file and destination path
            $glSource = (object) [
                "id"    => 'Source'.$layer->id,
                "type"  => "geojson",
             
            ];

            // Dos casos, con archivo o desde urls.
            $type = explode(".", $layer->sourceType)[0];

            if($request->hasFile('file') ){
                //Crear glLayer y glSource para no sobrecargar al cliente
                //TODO: otra opciones es convertir (sld o qml a MBstyle)->gllayer y (Shapefile a Geojson)>glsource
                //GLSOURCE
                
                $destinationPath = "";
                $file = null;
                $file  = $request->file('file');
                $category = Category::find($layer->category_id);
                
               /* 
               // changed to only id, to put complex names
                $cat_name = $category->name;
                $layer_name = $layer->name;
                $destinationPath = "LAYERS/$cat_name/$layer_name/"; //./relative to mapbox
                */
                $destinationPath ="LAYERS/$layer->id/";
                $jsonString =""; //Contiene datos de cada feature para luego dar estilos
                
                switch ($type) { 
                // si es geojson, se debe construir el stilo
                // si es qgis, el estilo será tomado de los archivos subidos.
                    case 'geojson': // Archivo .geojson local
                        $path = $this->storeFile($file,  $destinationPath);
                        $layer->source =  $path->fileName;
                        $glSource->data = URL::to('/').'/assets/files/shares/plataforma/'.$path->relative;
                        $jsonString = file_get_contents($path->full);
                        $layer->glSource = json_encode($glSource,JSON_UNESCAPED_SLASHES);
                        $layer->glLayers =  $this->getMBStyle($jsonString,$layer);
                        break;
                    case 'qgis2web': 
                        // Archivo .rar local
                        // TODO:
                        // por el momento solo se debe agregar elleno sencillo
                        // subir max_execution_time
                        // instalar binarios png y magick image
                        
                        $storedZip = $this->storeFile($file,  $destinationPath);
                        $qgis2web = $this->qgis2web($storedZip, $layer->id);
                        //return response()->json($qgis2web);
                        $glSource = $qgis2web->glSource;
                        $layer->source = $qgis2web->source;
                        $layer->glSource = json_encode($glSource,JSON_UNESCAPED_SLASHES);
                        $layer->glLayers =  json_encode($qgis2web->glLayers, JSON_UNESCAPED_SLASHES);
                        break;        
                    default:
                        return response()->error($layer, 500);
                        break;
                }
            }else{
                //No dependen de archivo, se deben construir los estilos base     
                if(!isset($layer->source) || $layer->source != $request->input('source')){
                    switch ($type) { 
                        case 'url': // Archivo .geojson desde una url
                            $layer->source = $request->input('source'); 
                            $glSource->data = $layer->source;
                            $jsonString = file_get_contents($request->input('source'));
                            $layer->glSource = json_encode($glSource,JSON_UNESCAPED_SLASHES);
                            $layer->glLayers = $this->getMBStyle($jsonString,$layer);    
                                break;
                        case 'api_icons': // Api con al menos lat lon y data
                        case 'api':
                            $layer->source = $request->input('url'); 
                            $glSource->data = $this->ApitoGeoJSON($layer->source);
                            $jsonString = json_encode($glSource->data);
                            $layer->glSource = json_encode($glSource,JSON_UNESCAPED_SLASHES);
                            $layer->glLayers = $this->getMBStyle($jsonString,$layer);
                            break;
                        default:
                            //return response()->json($layer, 500);
                            break;
                    }
                }
                 
               

            }


            if($layer->save()){
                $layer->layer_id = $layer->id;
                $log->table_id = $layer->id;
                $log->desc = $log->desc." Layer ($layer->id, $layer->name).";
                $log->save();
            }

 
        } catch (Exception $e) {
                return response()->error(  
                "Error Type: "  . $e->getErrorType()
                . "\nMessage: " . $e->getMessage()
                . "\nDetails: " . $e->getDetails()
            );
        }
        
        return response()->success(compact('layer'));

    }
    
    public function  getMBStyle($jsonString, $layer){
        

            //GLLAYERS creación de estilos
            // TODO: crear un solo estilo estandar. 
            // permitir crear estilos para cada source
            //Buscamos caso estandar: features->geometry->type en el geojson obtenido
            $geoJson = json_decode($jsonString, true);
            $geoTypes = [];
            $geoLayers = [];
                foreach ($geoJson['features']  as $key => $feature) {
                    if( $feature["geometry"] != null){

                        
                        if($feature["geometry"]["type"] == "GeometryCollection") {
                            //pero puede ser caso especial de geometries
                            foreach ($feature["geometry"]['geometries']  as $key => $geometry) {
                                $layerStyle = $this->getGeoTypesStyles($geometry, $layer, $feature);
                                if(!in_array($geometry["type"], $geoTypes) ){
                                    array_push($geoTypes,$geometry["type"]);
                                    array_push($geoLayers,$layerStyle);
                                }
                            }
                        }else{

                            if(!in_array($feature["geometry"]["type"], $geoTypes) ){
                                $layerStyle = $this->getGeoTypesStyles($feature["geometry"], $layer,$feature);
    
                                array_push($geoTypes,$feature["geometry"]["type"]);
                                array_push($geoLayers,$layerStyle);
                            }
                        }
                    }
                }
             return   json_encode($geoLayers, JSON_UNESCAPED_SLASHES); 
           
        
    }

    public function qgis2web($filePath, $layer_id){
        // 1. Descompress file
        $archive = UnifiedArchive::open($filePath->full);
        
        // 2 . Get Style.js
        $styleFile = $this->getFile('style.js', $archive);

        // 3. fix json to estract source and layers.
        $styleFile = str_replace('var styleJSON = ', '', $styleFile);
        $styleFile =trim(preg_replace('/\s+/', ' ', $styleFile));;
        $styleFile = str_replace('\"', '"', $styleFile);
        $styleFile = str_replace('\'', '"', $styleFile);
        $styleFile = str_replace('], }', ']}', $styleFile);
        

        // 3.1 check if Raster or Data
        preg_match_all('/json_\w++/',$styleFile,$sourceVar); //Check if existe json_regx
       // return $sourceVar[0]:
        if(count($sourceVar[0])>0){ 
            // DATA GeoJSON
            // 3.2 Get source file in /data/source[0].js and replace var ... = with empty
            $srcVarName = str_replace('json_', '', $sourceVar[0][0]);  //delete json_ at beginin
            
            // 3.3 open and fix geojson
            $geojsonFile = $this->getFile($srcVarName.'.js', $archive);
            $geojsonFile = str_replace('var '.$sourceVar[0][0].' = '  , '', $geojsonFile); //Delete var ... =
            
            // 3.4 Store edited geojson:
            $storePath = $filePath->base.$srcVarName.'.js';
            Storage::disk('plataforma')->put($storePath, $geojsonFile);
            $styleFile = json_decode(str_replace($sourceVar[0][0], '"'. URL::to('/').'/assets/files/shares/plataforma/'.$storePath.'"', $styleFile));       
        } else { 
            // RASTER
            //1. get png inside data/source.png
            $styleFile = json_decode( $styleFile);
            $srcVarName = key(get_object_vars( $styleFile->sources));
            
            //Resize and improve png:
            $pngPath= $this->getFile($srcVarName.'.png', $archive,  $filePath->base);
            ImageOptimizer::optimize($pngPath->full, $pngPath->full);
            Artisan::call('my_app:optimize_img 4000x4000 98 "'.$pngPath->full.'"');
                
            //set image as source
            $styleFile->sources->$srcVarName->url = URL::to('/').'/assets/files/shares/plataforma/'.$pngPath->relative;
            $storePath = $styleFile->sources->$srcVarName->url;
            
            //fix lat long in source TODO: check if always happen
            $coordinates = $styleFile->sources->$srcVarName->coordinates;
            $styleFile->sources->$srcVarName->coordinates = array_reverse( $coordinates);
        }

        //4. Add unic identifiers to soruces and layers
        //add unic id to source and layers:
        $styleFile->sources->$srcVarName->id = $srcVarName.$layer_id;
        $glLayers = $styleFile->layers;

        foreach ( $styleFile->layers as $key => $layer) {
            $layer->id .= $layer_id;
            $layer->{'layer_id'} = $layer_id;
            if(isset($layer->source) ){
                $layer->source .= $layer_id;
            }else{
                unset($styleFile->layers[$key]);
            }
            // For layer visibility in a
            $layout =  [ //Crear layout generic:
                "visibility" => "visible"
            ];
            $layer->layout = $layout;
            
            // Know fixes:
            if(isset($layer->layout->{'text-size'}) ){
                $layer->layout->{'text-size'} = (float) $layer->layout->{'text-size'};
            }
            if($layer->type == "fill"){
                if(!isset($layer->paint->{'fill-color'})){
                    $layer->paint->{'fill-color'} = '#fff';
                    $layer->paint->{'fill-opacity'} = 0.7;
                    $layer->paint->{'fill-outline-color'} ="#000";
                }
            }
        } 
           

            //Delete zip file
            Storage::disk('plataforma')->delete($filePath->relative);
      
            return (object) array(
                "glLayers" =>array_values($styleFile->layers),
                "glSource" => $styleFile->sources->$srcVarName,
                "source" => $storePath,
            );
       
        
    }   

    protected function getFile($fileName,  $archive, $storePath = NULL)
    {   
        $files_list = $archive->getFileNames(); 
        $index = $this->searchFileIndex($fileName, $files_list);
        $filePath =  $files_list[$index];
        if ($archive->isFileExists($filePath)) {
            if( $storePath == NULL){
                return $archive->getFileContent($filePath);
            } else {
                $extractTo = Storage::disk('plataforma')->path('/').$storePath;
                if($archive->extractFiles($extractTo, $filePath)>0){
                    return (object) array(
                        "full" => str_replace("\\","\/", $extractTo.$filePath),
                        "relative" =>  $storePath.$filePath,
                        "base" => $storePath,
                        "disk" => Storage::disk('plataforma')->path('/'));
                }
            }
         }
        return null;
    }

    function searchFileIndex($keyword, $arrayToSearch){
        foreach($arrayToSearch as $key => $arrayItem){
            if( stristr( $arrayItem, $keyword ) ){
                return $key;
            }
        }
    }
    
    public function storeFile($file, $destinationPath){
        $fileCompleteName = $file->getClientOriginalName();
        $fileName = explode(".", $fileCompleteName)[0];
        $extension = explode(".", $fileCompleteName)[1];
        $fileCompleteName = preg_replace('/\s/', '_', $fileCompleteName  );
        $fileCompleteName = preg_replace('/[()]/', '', $fileCompleteName);

        
        $file_saved = Storage::disk('plataforma')->put(
            $destinationPath.$fileCompleteName,
            file_get_contents($file->getRealPath())
        );
        return (object) array(
            "base"=>$destinationPath, 
            "fileName" => $fileCompleteName,
            "relative" => $destinationPath.$fileCompleteName,
            "full" =>str_replace("\\","\/", Storage::disk('plataforma')->path('/').$destinationPath.$fileCompleteName));

    }

    public function convert($from, $to)
    {
        $command = 'magick convert '
            . $from
            .' '
            . '-resize 5000x5000'
            .' '
            . '-sampling-factor 4:2:0 -strip -quality 80'
            .' '
            . $to;
        return `$command`;
    }

    public function ApitoGeoJSON($url){
        try {

            //NOTAS: se define como latitud: lat, longituf: lon
            //converrit cualquier variante en lat lon
            $unwanted_array = array("latitud"=>"lat", "Latitud"=>"lat",
                                    "latitude"=>"lat", "Latitude"=>"lat", 
                                    "longitud"=>"lon", "Longitud"=>"lon", 
                                    "longitude"=>"lon", "Longitude"=>"lon",
                                    "Long"=>"lon", "long"=>"lon");
            $json = file_get_contents($url);
            $original_data = json_decode(strtr( $json, $unwanted_array ), true);
            $features = array();
            foreach($original_data as $key => $items) { 
                $feature =  (object) [
                    "type" => "Feature",
                    "geometry" => [
                        "type" => "Point", 
                        "coordinates" => [0 => (float)$items["lon"],
                                          1 => (float)$items["lat"]
                        ]
                    ]
                ];
                //Convertir los demas elementos en array de propiedades
                foreach($items as $key => $item) { 
                    $feature->properties[$key] = $item;  
                 }   
                $features[] =  $feature;
            };
            $allfeatures = array("type" => "FeatureCollection", "features" => $features);
            return $allfeatures;
        } catch (\Throwable $th) {
            return response()->error(  
                 "\nMessage: " . $th->getMessage()
             );
        }

    
    }

    public function getGeoTypesStyles($geometry, $layer,$feature){

        //background, fill, line, symbol, raster, circle, fill-extrusion, heatmap, hillshade.//https://docs.mapbox.com/mapbox-gl-js/style-spec/#layers    
        $geoStyles =[];
        $geoType = $geometry["type"];
        switch ($geoType) {
            case "MultiPoint":
            case "Point": 
                    $style =  (object) [ //Basic
                        "layer_id" => $layer->id,
                        "id" => "Layer".$geoType.$layer->id,
                        "source"  =>"Source".$layer->id,
                        "filter"  => ["==", "\$type", 'Point']
                    ];
                        if(!array_key_exists("properties",$feature)){//Agrecar propieties al feature si no lo tiene, 
                        $feature["properties"] = ["name"=>"point"];
                    }
                    $layout =  [ //Crear layout generic:
                        "visibility" => "visible"
                    ];

                    //Puede ser heatmap, tiempo real, o tiempo real con icono
                    if(strpos($layer->sourceType, 'heatmap') === false){ 
                        if(strpos($layer->sourceType, 'realtime_icons') !== false){
                            $style->type ="symbol";
                            if(array_key_exists("icon", $feature["properties"])){ //Debe tener un icono (url)
                                $layout["icon-size"] = 0.25;
                                $layout["icon-image"] = "{icon}";
                                $layout["text-field"] = "{name}";
                            }else{
                                //error
                            }
                        }else{
                            //Puede ser punto estatico o realtime sin icono
                            $style->type="circle";
                            $style->paint = [
                                'circle-radius'=> 5,
                                'circle-color'=> '#088',
                                'circle-opacity'=> 0.7,
                                'circle-stroke-width'=> 2,
                                'circle-stroke-color'=> '#887'
                            ];
                        
                        }
                    }else{

                        //get popierty for heatmap, is in the las position
                        //estrutura: type.heatmap.prop
                        $prop = explode(".",$layer->sourceType)[2];
                        $style->type ="heatmap";
                        $style->maxzoom =2;
                        $style->paint = [
                            // Increase the heatmap weight based on frequency and property magnitude
                            "heatmap-weight"=> [
                                "interpolate",
                                ["linear"],
                                ["get", "mag"],
                                0, 0,
                                6, 1
                            ],
                        // Increase the heatmap color weight weight by zoom level
                            // heatmap-intensity is a multiplier on top of heatmap-weight
                            "heatmap-intensity" => [
                                "interpolate",
                                ["linear"],
                                ["zoom"],
                                0, 1,
                                9, 3
                            ],
                                // Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
                                // Begin color ramp at 0-stop with a 0-transparancy color
                                // to create a blur-like effect.
                                "heatmap-color" => [
                                    "interpolate",
                                    ["linear"],
                                    ["heatmap-density"],
                                    0, "rgba(33,102,172,0)",
                                    0.2, "rgb(103,169,207)",
                                    0.4, "rgb(209,229,240)",
                                    0.6, "rgb(253,219,199)",
                                    0.8, "rgb(239,138,98)",
                                    1, "rgb(178,24,43)"
                                ],
                                // Adjust the heatmap radius by zoom level
                                "heatmap-radius" => [
                                    "interpolate",
                                    ["linear"],
                                    ["zoom"],
                                    0, 2,
                                    9, 20
                                ],
                                // Transition from heatmap to circle layer by zoom level
                                "heatmap-opacity" => [
                                    "interpolate",
                                    ["linear"],
                                    ["zoom"],
                                    7, 1,
                                    9, 0
                                ],
                        ];
                    }
                    $style->layout=$layout;
                    return $style;
                break;
                
            case "MultiLineString":
            case "LineString":
                return  [
                        "layer_id" => $layer->id,
                        "id" => "Layer".$geoType.$layer->id,
                        "source"  =>"Source".$layer->id,
                        "type" => "line",
                        "paint" => [
                            "line-color" => "#BF93E4",
                            "line-width" => 2
                        ],
                        "layout" => [
                            "line-join"=> "round",
                            "line-cap"=> "round",
                            "visibility"=> "visible"
                        ],
                        "filter"  => ["==", "\$type", "LineString"] //Revisar si incluir multiline string
                    ];
                break;
                      
            case "MultiPolygon":
            case "Polygon":
            //LinearRing 
                return  [                        
                    "layer_id" => $layer->id,
                    "id" => "Layer".$geoType.$layer->id,
                    "source"  =>"Source".$layer->id,
                    "type" => "fill",
                    "paint" => [
                        "fill-color" => "#088",
                        "fill-outline-color" =>"#883",
                        "fill-opacity"=> 0.6,
                    ],
                    "layout" => [
                        "visibility"=> "visible"
                    ],
                "filter"  => ["==", "\$type", "Polygon"]
            ];
                break;
            default:
                # code...
                break;
        }          
    }

    public function getNextId($tableName)
    {
        $statement = DB::select("SHOW TABLE STATUS LIKE '$tableName'");
        return $statement[0]->Auto_increment;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {

        $layer = Layer::find($id);
        return response()->success($layer);
        //
             /*
          CODIGO PARA UNZIP Y ENCONTRAR UN ARCHIVO ZIP RAP COMPRIMIDO
                    //PASO 2: Unzip
                    $output=""; 
                    $return="";
                    $pid ="";
                    $storage_path = Storage::disk('plataforma')->getAdapter()->getPathPrefix();
                    $final_path = $storage_path.$destinationPath;
                    switch ($extension && $file_saved) {
                        case 'zip':
                        $pid = exec("unzip -o $final_path/$fileName.$extension -d $final_path", $output, $return);
                        if (!$return) {
                            exec("kill -9 $pid");
                        }
                            break;
                        case 'rar':
                        exec("unrar x $final_path -d $final_path");
                            break;                 
                        default:
                            # code...
                            break;
                    }
                     
                    //Paso 3: convert to geoJson
                    // list all filenames in given path
                    $allFiles = Storage::disk('plataforma')->files($destinationPath);
                    // filter the ones that match the filename.* 
                    $matchingFiles = preg_grep('/^.*\.shp$/', $allFiles);
                    // iterate through files and echo their content
                    //solo  el primer archivo
                    

                    foreach ($matchingFiles as $path) {
                        
                        $shape_file_path = $path;
                      
                    }
                    */
 
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //

        $user = Auth::user();
        $layer = Layer::find($id);
        
        $layer->glLayers =  $request->input('glLayers');
        //Delete folder and files
        if($layer->save()){
            $log = new Log;
            $log->desc = "($user->id, $user->name): Update layer ($layer->id, $layer->name).";
            $log->user_id = $user->id;
            $log->table = "layers";
            $log->table_id = $layer->id;
            $log->save();
            return response()->json($layer,200);

        }
        
    }
    public function updateState(Request $request, $id)
    {
        //

        $user = Auth::user();
        $layer = Layer::find($id);
        
        //return response()->json($request->input('state'),500);

        $layer->state =  $request->input('state');
        //Delete folder and files
        if($layer->save()){
            $log = new Log;
            $log->desc = "($user->id, $user->name): Update Visibility ($layer->id, $layer->name).";
            $log->user_id = $user->id;
            $log->table = "layers";
            $log->table_id = $layer->id;
            $log->save();
            return response()->json($layer,200);

        }
        
    }
    public function updateExclusions(Request $request, $id)
    {
        //

        $user = Auth::user();
        $layer = Layer::find($id);
        $new_exclusion = $request->input('exclusions');
        $old_exclusion =  json_decode($layer->exclusions);
        $old_exclusion = $old_exclusion? $old_exclusion : [];

        // 1. find diff from old to new ex
        $ex_diff = array_merge(array_diff($new_exclusion, $old_exclusion), array_diff($old_exclusion, $new_exclusion));
      
        // 2. Update other layers mutual exlusion
        foreach ($ex_diff as $key => $ex) {
            // finad each layer, and toggle exclusion
            $layer_to_exclude = Layer::find($ex);
            $lte_ex = json_decode($layer_to_exclude->exclusions);
            $lte_ex = $lte_ex ? $lte_ex : [];
            

            $index = array_search($layer->id,$lte_ex);

            if($index !== false){
                array_splice($lte_ex, $index, 1);
            }else{
                array_push( $lte_ex, $layer->id);
            }
            $layer_to_exclude->exclusions = json_encode($lte_ex);
            $layer_to_exclude->save();
        }
        

        $layer->exclusions =  json_encode($request->input('exclusions'));
        //Delete folder and files
        if($layer->save()){
            $log = new Log;
            $log->desc = "($user->id, $user->name): Update exclusions ($layer->id, $layer->name).";
            $log->user_id = $user->id;
            $log->table = "layers";
            $log->table_id = $layer->id;
            $log->save();
            return response()->json($layer,200);

        }
        
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
  
        $user = Auth::user();

        $layer = Layer::find($id);
        //Di categoria es 1, es decir sensor en tiempo real no borrar, 
        
        //Delete folder and files
        if($layer->delete()){
            $log = new Log;
            $log->desc = "($user->id, $user->name): DELETE layer ($layer->id, $layer->name).";
            $log->user_id = $user->id;
            $log->table = "layers";
            $log->table_id = $layer->id;
            $log->save();
        }

    
 
        return response()->success('success');
    }
}
