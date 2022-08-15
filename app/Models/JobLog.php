<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JobLog extends Model
{
    use HasFactory;

    protected $guarded = ['question'];

    protected $with = ['user','category'];
    protected $appends = ['status_count_applied', 'status_count_rejected', 'status_count_interested'];

    public function jobAppliedCandidate(){
        return $this->hasMany(JobAppliedCandidate::class,'job_id');
    }

    public function jobAppliedCandidateCheck()
    {
        return $this->hasMany(JobAppliedCandidate::class, 'job_id')->orwhere('status', 'Hired')->orwhere('status', 'Contacting')->orwhere('status', 'Interview')->orwhere('status', 'Interested');
    }

    public function jobAppliedCandidateApplied()
    {
        return $this->hasMany(JobAppliedCandidate::class, 'job_id')->where('status','Applied');
    }

    public function jobAppliedCandidateRejected()
    {
        return $this->hasMany(JobAppliedCandidate::class, 'job_id')->where('status', 'Rejected');
    }

    public function jobAppliedCandidateInterested()
    {
        return $this->hasMany(JobAppliedCandidate::class, 'job_id')->where('status', 'Interested');
    }

    public function jobBenefits()
    {
        return $this->hasMany(JobBenefits::class, 'job_id');
    }

    public function user()
    {
    	return $this->belongsTo(User::class,'user_id');
    }

    public function category()
    {
    	return $this->belongsTo(Category::class,'category_id');
    }

    public function getStatusCountAppliedAttribute()
    {
        return count($this->jobAppliedCandidateApplied);
    }

    public function getStatusCountRejectedAttribute()
    {
        return count($this->jobAppliedCandidateRejected);
    }

    public function getStatusCountInterestedAttribute()
    {
        return count($this->jobAppliedCandidateInterested);
    }

    //3-06-2022
    public function jobSmartQuestion(){
        return $this->hasMany(JobSmartQuestion::class, 'job_id');
    }

    public function getFileAttribute($value){
    if ($value) {
        return asset('uploads/jobs/video/' . $value);
    }
}

}
