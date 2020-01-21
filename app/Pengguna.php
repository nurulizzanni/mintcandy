<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pengguna extends Model
{
    protected $table = 'pengguna';
    protected $fillable =['first_name', 'last_name', 'gender','short_des','avatar' ,'user_id'];

    public function getAvatar()
    {
        if(!$this->avatar){
            return asset('images/default.jpg');
        }
        return asset('images/'.$this->avatar);
    }

    public function test()
    {
        return $this->belongsToMany(Test::class)->withPivot(['nilai'])->withTimeStamps();
    }

}
