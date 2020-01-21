<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Kaunselor extends Model
{
    protected $table ='kaunselor';
    protected $fillable = ['name','phone'];

    public function test()
    {
        return $this->hasMany(Test::class);
    }
}
