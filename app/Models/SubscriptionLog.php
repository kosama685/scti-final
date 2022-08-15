<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubscriptionLog extends Model
{
    use HasFactory;
     /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id',
        'package_id',
        'expiry_date',
        'charges',
        'status',
        'user_type',
    ];

    protected $with = ['Packages'];

    public function User()
    {
    	return $this->belongsTo(User::class,'user_id','id');
    }

    public function Packages()
    {
    	return $this->belongsTo(PackageManagment::class,'package_id','id');
    }
}
