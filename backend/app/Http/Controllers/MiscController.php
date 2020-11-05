<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MiscController extends Controller
{
    //

    //Create to manage index.html and route cache, given that route:cache only 
    //works with controller routers
    public function angularIndex(){
        View::addExtension('html','php'); 
        return view('index'); 
    }
     /**
     * Serve the angular application.
     *
     * @return JSON
     */
    public function serveApp()
    {
        return view('index');
    }

    /**
     * Page for unsupported browsers.
     *
     * @return JSON
     */
    public function unsupported()
    {
        return view('unsupported_browser');
    }

    public function restartTileserver(){
     
        exec("docker stop tileserver-gl ");
        sleep(5);
        $ex["md"] = ' \n COMAND: docker  run --rm --name tileserver-gl -v "'.config('obs.DOCKER_TILESERVER_PATH').'":/createlab -p 8080:80 klokantech/tileserver-gl --verbose --config /createlab/tileserver-gl-config-colombia.json |at now \n' ;
        $ex["res"] = json_encode( exec('docker  run --rm --name tileserver-gl -v "'.config('obs.DOCKER_TILESERVER_PATH').'":/createlab -p 8080:80 klokantech/tileserver-gl --verbose --config /createlab/tileserver-gl-config-colombia.json |at now',$output));
        
        $ex["output"] = json_encode($output) ;
        return response()->json($ex,200);
    }
}
