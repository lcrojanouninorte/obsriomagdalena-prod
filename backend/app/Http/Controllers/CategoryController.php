<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

use App\Layer;

use App\Station;

use App\Category;

use App\Log;

use Auth;

use DB;

use Avatar;
// import the Avatar class
 



class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
      
        $categories = Category::with("childrens.childrens.childrens")->orderBy('id', 'DESC')->orderBy("id")->get();
      
       
      
        return response()->json($categories, 200);

    }
    public function stations()
    {    
        // will create or update a layer, based on stations types.

        //retornar estaciones con archivos filtrados por tipo imagen o otro archivo
        $stations_types = Station::with("files")->get()->groupBy('type');
        $imagenes = Array("png","jpg","gif","tiff","bpm","svg","jpeg");
        $response = [];
        foreach ($stations_types as $key => $stations) {
            $stations_source = (object)[
                'source_name' => $key,
                'glSource' => [],
                'glLayers' => [],
                'data' => []
            ];
            $glSource =  (object) [
                'id' => $key,
                'type' => 'geojson',
                'data' =>  (object)[
                  'type' => 'FeatureCollection',
                  'features'=> []
                ],
            ];
            $glLayers = (object)[
                'id'=>  $key,
                'type'=> 'symbol',
                'source'=> $key,
                'paint'=> (object) [
                    "icon-opacity"=> 0.8
                ],
                'layout'=> (object) [
                    'icon-image'=> '{icon}',
                    'icon-size'=> 0.7,
                    'visibility'=> 'visible',
                    'text-anchor'=> 'left',
                    'text-offset'=> [1,0],
                    'text-field'=> '{name}',
                   
                    'text-optional' => true,
                    'icon-allow-overlap' => false
                ],
            ];
            $features =[];
            foreach ($stations as $key => $station) {
                $imgFiles = [];
                $otherFiles = [];
                foreach ($station->files as $key => $file) {
                    if(in_array(strtolower($file->icon), $imagenes)){
                        $imgFiles[] = $file;                    
                    }else{
                        $otherFiles[] = $file;
                       
                    }
                }
                $station->imgFiles = $imgFiles;
                $station->otherFiles = $otherFiles;
                if($station->state == true){

                    // GeoJson
                    array_push($features, (object) [
                          'type'=> 'Feature',
                          'geometry'=>  (object)[
                            'type'=> 'Point',
                            'coordinates' => [$station->longitude, $station->latitude],
                          ],
                          'properties'=>  (object) [
                            'id'=> $station->id,
                            'icon' => $station->icon,
                            'name'=> $station->name,
                            'type'=> 'stations',
                          ]
                    ]);
                }

            }
            $glSource->data->features = $features;
            $stations_source->glSource = $glSource;
            $stations_source->glLayers = $glLayers;
            $stations_source->data = $stations;
            // Create or update Especial category for stations            
            $category = Category::where("name", "=", "Estaciones")->first();
            if($category == null){
                $category = new Category;
                $category->name = "Estaciones";
            } 
            $category->public_desc = "Estaciones ";
            $category->admin_desc = "Categoria Especial para Estaciones";
            $category->state = 1;
            $category->icon = "https://www.gravatar.com/avatar/dddc2d4ccab2b69066444945?d=identicon&r=g&s=48";
            $category->type = "checkbox"; 
            if(!$category->save()){
                return false;
            }

            // Check if layer exist, if not, create
            $layer = Layer::where("source", "=", $stations_source->source_name)->first();
            if($layer == null){
                $layer = new Layer;
            } 
            $layer->category_id = $category->id; // todo CHECK CATEGORY
            $layer->name = $stations_source->source_name;
            $layer->source = $stations_source->source_name;
            $layer->sourceType = "stations";
            $layer->icon = "layer.svg";
            $layer->isFixed = 1;
            $layer->glSource = json_encode($stations_source->glSource);
            
            $layer->desc = "Estaciones ";
            $layer->convention =  null;
            $layer->type = "points";
            $layer->exclusions = "[]";
            if(!$layer->save()){
                return false;
            }else{
                $stations_source->glLayers->layer_id = $layer->id;
                $layer->glLayers = json_encode([$stations_source->glLayers]);
                $layer->save();
            }
          
        }
        return true;
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
      
        
        //
        
        $user = Auth::user();
        $this->validate($request, [
        'name' => 'required',
        //'type' => 'required',
        'state' => 'required',
        'public_desc' => 'required',
        'category_id' => 'required',
         ]);



        try {
            $category = [];
        //check if have file
        // DB::transaction(function () use ($request, $user,  $category) {
            $category = new Category;
            $log = new Log;
            $log->desc = "User ($user->id, $user->name): ADD  ";
            $log->user_id = $user->id;
            $log->table = "categories";

            if($request->has('id') && $request->input('id') != ''){
                $category =  Category::find($request->input('id'));
                $log->desc = "User ($user->id, $user->name): UPDATE  ";
            }
            //add or update category
            $category->name = trim($request->input('name'));
            $category->state = $request->input('state');
            $category->public_desc =$request->input('public_desc');
            $category->admin_desc = "default";
            $category->type = $request->input('type');
            if($request->input('category_id') != "0"){
                $category->category_id = $request->input('category_id');
            }else{
                $category->category_id = null;
            }
         

            $img = Avatar::create($category->name.'@obsriomagdalena.com')
                            ->toGravatar(['d' => 'identicon', 'r' => 'g', 's' => 48]);
            // Output: http://gravatar.com/avatar/0dcae7d6d76f9a3b14588e9671c45879?d=identicon&r=pg&s=100
            $category->icon = $img;
            
            if($category->save()){
                $log->table_id = $category->id;
                $log->desc = $log->desc." Category ($category->id, $category->name).";
                $log->save();
            }
       // });
        } catch (Exception $e) {
            return response()->error($e->getMessage(), 500);
        }
        return response()->success($category);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
       try{ 
        /*if($id==1){
            return response()->error("No es posible eliminar la categoria de sensores en tiempo real");
        }*/
        $user = Auth::user();

        $category = Category::find($id);
        //Di categoria es 1, es decir sensor en tiempo real no borrar, 
        
        //Delete folder and files
        if($category->delete()){
            $log = new Log;
            $log->desc = "($user->id, $user->name): DELETE category ($category->id, $category->name).";
            $log->user_id = $user->id;
            $log->table = "categorys";
            $log->table_id = $category->id;
            $log->save();
        }

    } catch (Exception $e) {
        return response()->error($e->getMessage(), 500);
    }
  
        return response()->success('success');
    }
}
