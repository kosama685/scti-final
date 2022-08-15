<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;
class JobAppliedCandidate extends Model
{
    use HasFactory;

    protected $guarded = [];


    public function user(){
        return $this->belongsTo(User::class,'user_id');
    }
    public function job(){
        return $this->belongsTo(JobLog::class,'job_id');
    }

    public function jobSmartAnswer(){
        return $this->hasMany(JobSmartAnswer::class,'job_id','job_id');
    }
}
