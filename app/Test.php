<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Test extends Model
{
    protected $table ='test';
    protected $fillable =['code', 'name', 'nilai'];

    public function pengguna()
    {
        return $this->belongsToMany(Pengguna::class)->withPivot(['nilai']);;
    }

    public function kaunselor()
    {
        return $this->belongsTo(Kaunselor::class);
    }
}
