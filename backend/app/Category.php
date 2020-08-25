<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    //
    public function layers()
    {
        return $this->hasMany(Layer::class);


    }

    public function user(){
        return $this->belongsTo('App\User');
    }
}
