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
}
