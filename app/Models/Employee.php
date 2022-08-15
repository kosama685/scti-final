<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    use HasFactory;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'first_name',
        'last_name',
        'phone',
        'address',
        'email',
        'phone',
        'country',
        'state',
        'city',
        'zip_code',
        'institute_id',
        'package_id',
        'block_status'
    ];

    public function Institute()
    {
        return $this->belongsTo(InstituteManagment::class,'institute_id','id');
    }

    public function countEmployee(Employee $employee)
    {
        return $employee->count();
    }



}
