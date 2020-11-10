<?php

namespace App\Http\Controllers;

use App\People;
use App\Log;
use Illuminate\Http\Request;
use DB;

use Auth;
use Storage;
use ImageOptimizer;
use Artisan;
use URL;
class PeopleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // 
        $people = People::get()->groupBy('tag');
        return response()->success(compact('people'));

    }
    public function colabs()
    {
        // 
        $people = People::where('tag',"=", 0)->get();
        return response()->json($people, 200);

    }
    public function dirs()
    {
        // 
        $people = People::where('tag','!=', 0)->orderBy('order')->get();
        return response()->json($people, 200);

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

        //
        $this->validate($request, [
            'name'     => 'required',
            'tag'     => 'required',
            'title'     => 'required',
            

        ]);
        $user = Auth::user();
        // Start transaction
        DB::beginTransaction();
        try {
            $people = new People;
            
             
            
            $log = new Log;
            $log->user_id = $user->id;
            $log->table = "people";

            //add or update layer
            if($request->has('id') && $request->input('id') != "null"  && $request->input('id') != ""){
                $people =  People::find($request->input('id'));
                $log->desc = "User ($user->id, $user->name): UPDATE  ";
               
            }else{
                $log->desc = "User ($user->id, $user->name): ADD  ";
            }
            $people->name     =$request->input('name');
            $people->title      = $request->input('title');
            $people->tag      = $request->input('tag');
            $people->rg     =$request->input('rg');
            $people->order = $request->input('order');
         
            if($request->hasFile('file') ){
                $file = $request->file('file');
                $destinationPath ="@People/"; //./relative to mapbox
                $path = $this->storeFile($file,  $destinationPath);
                //Resize and improve png:

             //   return response()->json($path , 500) ;
                ImageOptimizer::optimize($path->full, $path->full);
                Artisan::call('my_app:optimize_img 100x100 80 "'.$path->full.'"');
                $people->avatar = URL::to('/').'/assets/files/shares/plataforma/'. $path->relative;
                $people->icon = $people->avatar;
            }
            DB::commit();
           if($people->save()){
           

               $log->table_id = $people->id;
               $log->desc = $log->desc." People ($people->id, $people->name).";
               $log->save();

               return response()->json($people,200);
           }
           return response()->json($people,500);
           
           
        }catch (\Exception $e) {
            DB::rollback();
            throw $e;
            return response()->json($e->getErrors(),500);
        } catch (\Throwable $e) {
            DB::rollback();
            throw $e;
            return response()->json($e->getErrors(),500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\People  $people
     * @return \Illuminate\Http\Response
     */
    public function show(People $people)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\People  $people
     * @return \Illuminate\Http\Response
     */
    public function edit(People $people)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\People  $people
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, People $people)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\People  $people
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        
        //Limit delete of role if no one have it.
        $person = People::find($id);
        if($person->delete()){
                return response()->json("OK",200);
            } else {
                return response()->json("No se pudo eliminar",500);
            }
        
        
    }

    public function storeFile($file, $destinationPath){
        $fileCompleteName = $file->getClientOriginalName();
        $fileName = pathinfo($fileCompleteName, PATHINFO_FILENAME);
        $extension = pathinfo($fileCompleteName, PATHINFO_EXTENSION);
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
}
