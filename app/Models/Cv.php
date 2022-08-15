<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cv extends Model
{
    use HasFactory;
    protected $guarded = [];

    protected $with = ['education','experience','user'];


    public function education()
    {
    	return $this->hasMany(UserEducation::class,'cvs_id');
    }

    public function experience()
    {
    	return $this->hasMany(UserExperience::class,'cvs_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class,'user_id');
    }
}
