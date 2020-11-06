<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Spatie\Permission\Models\Permission;
use Auth;
class Layer extends Model
{
    //
    public function category(){
        return $this->belongsTo('App\Category');
    }
    public function state(){
        return $this->isFixed;
    }

    public function scopePublics($query){
        //return al if user is have access, else return only public layers.
        if (Auth::check()) {
            //there is a user logged in, now  get the id
             $user =   Auth::user();
            if($user->can('Manage Layers')) {
                  return $query;
            }
        } 

        // Is user has no permission, return only public layers.
        return $query->where('isPublic', '=', 1);




    }
}
