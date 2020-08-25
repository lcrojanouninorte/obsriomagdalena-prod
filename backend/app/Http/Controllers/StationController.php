<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

use App\Station;

use App\Log;

use App\File;

use Auth;

use DB;

use Storage;
use ImageOptimizer;
use Artisan;
use URL;
class StationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //retornar estaciones con archivos filtrados por tipo imagen o otro archivo
        $stations = Station::with("files")->get();
        $imagenes = Array("png","jpg","gif","tiff","bpm","svg","jpeg");

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
        }        
        return response()->json($stations,200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
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
        //
        $user = Auth::user();
        $this->validate($request, [
        'name' => 'required',
        'latitude' => 'required',
        'longitude' => 'required',
         ]);

        
        try {
            $station = [];
        //check if have file
        // DB::transaction(function () use ($request, $user,  $station) {
            $station = new Station;
                $log = new Log;
                $log->desc = "User ($user->id, $user->name): ADD ";
                $log->user_id = $user->id;
                $log->table = "stations";

            if($request->has('id')){
                $station =  Station::find($request->input('id'));
                $log->desc = "User ($user->id, $user->name): UPDATE ";
                
            }
            
            //add or update station
            $station->name = $request->input('name');
            $station->latitude = $request->input('latitude');
            $station->longitude = $request->input('longitude');
            $station->state = $request->input('state') || '0'; 

            if( $request->hasFile('file')){
                
                $image_file  =   $request->file('file');
                $destinationPath = "";
                $image_file_completeName = $image_file->getClientOriginalName();
                $destinationPath = "ICONOS";
                $path = $image_file->storeAs("ICONOS", $image_file_completeName, 'plataforma');
                $station->icon =   URL::to('/').'/assets/files/shares/plataforma/'.$path;
                //update file Type

                $disk = Storage::disk('plataforma')->path('/');
                $storedPath = str_replace("\\","\/", $disk.$path);
                ImageOptimizer::optimize($storedPath, $storedPath);
                Artisan::call('my_app:optimize_img 70x70 70 "'.$storedPath.'"');
            }
 

            if($station->save()){

                //uodate log
                $log->table_id = $station->id;
                $log->desc = $log->desc." station ($station->id, $station->name).";
                $log->save();


                
            }
       // });
        } catch (Exception $e) {
            return response()->error($e->getMessage());
        }
        return response()->success(compact('station'));
    }

    /**
     * POST files
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function uploadFiles(Request $request){
    //

    $user = Auth::user();
    $this->validate($request, [
    'files' => 'required',
    'columns' => 'required',
    'id' => 'required'
    ]);


    try {
        $station=[];
        $columns=[];
        $log = new Log;
        $log->desc = "User ($user->id, $user->name): ADD Files To ";
        $log->user_id = $user->id;
        $log->table = "FILES";
        $stationName = $request->input('name');
        $stationId = $request->input('id');
        if($request->hasFile('files')){
            $files  = $request->file('files');
            $destinationPath = "";
            $columns = $request->input('columns');
            foreach ($files as $key => $file) {
                $fileCompleteName = $file->getClientOriginalName();
                $fileName = explode(".", $fileCompleteName)[0];
                $extension = explode(".", $fileCompleteName)[1];
                $path = $file->storeAs(
                    $stationName."/".$columns["name"], 
                    $fileCompleteName, 
                    'plataforma');
                //TODO: if file with same name, copy and not overwrite
                $file = new File;
                $file->station_id = $stationId;
                $file->column_id = $columns["id"];
                $file->file_path =  URL::to('/').'/assets/files/shares/plataforma/'.$path;;
                $file->icon = $extension;
                $file->name = $fileName;
                $file->active = true;
           
                if($file->save()){
                    //uodate log
                    $log->table_id = $file->id;
                    $log->desc = $log->desc." FILES ($file->id, $file->name).";
                    
                }
            }
            $log->save();
        }else{
            return response()->json("Por favor agrega archivos", 500);
        }

        
    // });
    } catch (Exception $e) {
        return response()->error($e->getMessage());
    }

    $station =  Station::find($request->input('id'));
    return response()->success($station);
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
        //
        $user = Auth::user();
        $this->validate($request, [
        'id' => 'required',
        'state' => 'required',
         ]);
         
         try {
             $station =  Station::find($request->input('id'));
             $log = new Log;
             $log->user_id = $user->id;
             $log->table = "stations";
             $log->desc = "User ($user->id, $user->name): ";
             if($station->state != $request->input('state') ){
                $station->state = $request->input('state'); 
                $log->desc = "CHANGE VISIBILITY TO ". $station->state.", " ;
            }

            //Save file in files table, with station_id and column_id
            if($request->hasFile('files')){
                $log->desc = "User ADD FILES" ;

                $files  = $request->file('files');
                //desde el front, podemos relacionar con el index (en este caso es el key) el archivo y la columna
                foreach ($files as $key => $file) {
                    $destinationPath = "";
                    $fileCompleteName = $file->getClientOriginalName();
                    $fileName = explode(".", $fileCompleteName)[0];
                    $extension = explode(".", $fileCompleteName)[1];
                    $station->name = trim($station->name);

                    //Replace space in column name with _ and any accent to normal
                    $columns = $request->input('columns');
                    //recordar column[$key] es selacionado a files[$key]
                    $column = $columns[$key]; //Hicimos un mapping desde el front end se envia como llave el id de la columna
                    $column_name = $column["name"];
                    $unwanted_array = array(    'Š'=>'S', 'š'=>'s', 'Ž'=>'Z', 'ž'=>'z', 'À'=>'A', 'Á'=>'A', 'Â'=>'A', 'Ã'=>'A', 'Ä'=>'A', 'Å'=>'A', 'Æ'=>'A', 'Ç'=>'C', 'È'=>'E', 'É'=>'E',
                            'Ê'=>'E', 'Ë'=>'E', 'Ì'=>'I', 'Í'=>'I', 'Î'=>'I', 'Ï'=>'I', 'Ñ'=>'N', 'Ò'=>'O', 'Ó'=>'O', 'Ô'=>'O', 'Õ'=>'O', 'Ö'=>'O', 'Ø'=>'O', 'Ù'=>'U',
                            'Ú'=>'U', 'Û'=>'U', 'Ü'=>'U', 'Ý'=>'Y', 'Þ'=>'B', 'ß'=>'Ss', 'à'=>'a', 'á'=>'a', 'â'=>'a', 'ã'=>'a', 'ä'=>'a', 'å'=>'a', 'æ'=>'a', 'ç'=>'c',
                            'è'=>'e', 'é'=>'e', 'ê'=>'e', 'ë'=>'e', 'ì'=>'i', 'í'=>'i', 'î'=>'i', 'ï'=>'i', 'ð'=>'o', 'ñ'=>'n', 'ò'=>'o', 'ó'=>'o', 'ô'=>'o', 'õ'=>'o',
                            'ö'=>'o', 'ø'=>'o', 'ù'=>'u', 'ú'=>'u', 'û'=>'u', 'ý'=>'y', 'þ'=>'b', 'ÿ'=>'y' );
                    $column_name = strtr( $column_name, $unwanted_array );
                    $column_name = str_replace(' ', '_', $column_name);
                    $destinationPath = "$station->name/$column_name.$extension";

                    //save file of a station in a folder with the column name
                    $path = Storage::disk('plataforma')->put(
                        $destinationPath,
                        file_get_contents($file->getRealPath())
                    );
                    //se realiza un update de files table (column + station)
                    //buscar si ya existe un archivo:
                    $file_id = "";
                    if(array_key_exists("stations",$column)){
                        if(array_key_exists($station->id,$column["stations"])){//si la columna ya tiene archivo
                            $file_id = $column["stations"][$station->id]["file"]["id"];
                            $file = File::find($file_id);
                        }else{
                            $file = new File;
                        }
                    }else{
                        $file = new File;
                    }
                    $file->station_id = $station->id;
                    $file->column_id = $columns[$key]["id"];
                    $file->file_path = $destinationPath;
                    $file->icon = $extension;
                    $file->name = $fileName;
                    $file->active = true;
                    $file->save();
                    

                }
            }

            if($station->save()){

                //uodate log
                $log->table_id = $station->id;
                $log->desc = $log->desc." station ($station->id, $station->name).";
                $log->save();


                
            }
       // });
        } catch (Exception $e) {
            return response()->error($e->getMessage());
        }
        return response()->success(compact('station'));
        
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

        $station = Station::find($id);
        //Delete folder and files
        if($station->delete()){
            Storage::disk('plataforma')->deleteDirectory($station->name);
            $log = new Log;
            $log->desc = "($user->id, $user->name): DELETE station ($station->id, $station->name).";
            $log->user_id = $user->id;
            $log->table = "stations";
            $log->table_id = $station->id;
            $log->save();
        }

      

 
        return response()->success('success');
    }
}
