<?php

namespace App\Http\Controllers;
use App\File;
use Illuminate\Http\Request;
use Auth;
use App\Log;
use Storage;
use URL;
use \wapmorgan\UnifiedArchive\UnifiedArchive;
use ImageOptimizer;
use Artisan;
class FileController extends Controller
{
    //

    public function  deleteFile($id){
        $user = Auth::user();
        $log = new Log;
        $log->user_id = $user->id;
        $log->table = "files";

        $file = File::where("id","=",$id)->first();
        // TODO: Delete folder and files
        if($file->delete()){
            $log = new Log;
            $log->desc = "($user->id, $user->name): DELETE file ($file->id, $file->name).";
            $log->user_id = $user->id;
            $log->table = "files";
            $log->table_id = $file->id;
            $log->save();
        }

      

 
        return response()->success('success');
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function updateFile(Request $request)
    {
        $user = Auth::user();
        $this->validate($request, [
        'id' => 'required',
       // 'file' => 'required',
        

         ]);

       
         try {
            $file = [];
            $file = File::where('id', "=",  $request->input('id'))->first();

                $log = new Log;
                $log->desc = "User ($user->id, $user->name): Update  ";
                $log->user_id = $user->id;
                $log->table = "files";
          // Set file
          if($request->hasFile('file') ){
            $fileConv = $request->file('file');
            $var = $file->columns->name;
            $station = $file->stations->name;
            $image_file_completeName = $fileConv->getClientOriginalName();
            $fileName = pathinfo($image_file_completeName, PATHINFO_FILENAME);
            $extension = pathinfo($image_file_completeName, PATHINFO_EXTENSION);


            $destinationPath ="$station/$var";
            $path = $fileConv->storeAs($destinationPath, $image_file_completeName, 'plataforma');
            $file->file_path =   URL::to('/').'/assets/files/shares/plataforma/'.$path;
            $file->icon = $extension;
            $file->title = $request->input("title");
                $file->desc = $request->input("desc");
            //ImageOptimizer::optimize($file->file_path,$file->file_path);
           /* Artisan::call('my_app:optimize_img 400x400 90 "'.$path->full.'"');*/
            
         }else{
            if($request->has('id')){
            
              $columns =  $request->input('columns');
                $file =  File::find($request->input('id'));
                $file->title = $request->input("title");
                $file->desc = $request->input("desc");
                $file->active = true;
            
                }else{

                    return response()->json("Por favor agrega archivos", 500);
                }
         }

        if($file->save()){
            $log->table_id = $file->id;
            $log->desc = $log->desc." Layer ($file->id, $file->name).";
            $log->save();    return response()->json($file,200);

        }

    } catch (Exception $e) {
        return response()->error(  
        "Error Type: "  . $e->getErrorType()
        . "\nMessage: " . $e->getMessage()
        . "\nDetails: " . $e->getDetails()
    );

}
    }
    
}
