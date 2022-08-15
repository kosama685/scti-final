<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JobSmartQuestion extends Model
{
    use HasFactory;

    protected $guarded = [];
    
    protected $table = 'job_smart_questions';
}