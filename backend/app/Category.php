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

    public function parent()
    {
        return $this->hasOne(Category::class, "id", "category_id");


    }
    public function childrens()
    {
        return $this->hasMany(Category::class,  "category_id", "id");


    }

    public function user(){
        return $this->belongsTo('App\User');
    }
}
