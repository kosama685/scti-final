<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;
use Webpatser\Uuid\Uuid;
use Illuminate\Database\Eloquent\SoftDeletes;
use jeremykenedy\LaravelRoles\Traits\HasRoleAndPermission;

class User extends Authenticatable
{
    use Notifiable,HasFactory, HasApiTokens, HasRoleAndPermission, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'first_name',
        'last_name',
        'phone',
        'address' ,
        'email'   ,
        'country' ,
        'state'   ,
        'city'    ,
        'zip_code',
        'name',
        'email',
        'password',
        'about_yourself',
        'dob',
        'image',
        'interest',
        'created_at',
        'cv',
        'uuid'
    ];


    protected $with = ['subscriptionLog'];
    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
        'deleted_at',
        'email_verified_at',
        'updated_at'
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public static function boot()
    {
        parent::boot();
        self::creating(function ($model) {
            $model->uuid = (string) Uuid::generate(4);
        });
    }


    public function getImageAttribute($value){
        return asset("/images/users/{$value}");
    }

        /**
         * Get the user associated with the User
         *
         * @return \Illuminate\Database\Eloquent\Relations\HasOne
         */
        public function role()
        {
            return $this->hasOne(User::class, 'foreign_key', 'local_key');
        }    

    public function subscriptionLog()
    {
        return $this->hasMany(SubscriptionLog::class,'user_id','id');
    }


    public function lastSubscriptionLog()

    {
        return $this->hasOne(SubscriptionLog::class, 'user_id', 'id')->latest();
    }


    /**
     * Get all of the comments for the User
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function applied_jobs()
    {
        return $this->hasMany(JobAppliedCandidate::class, 'user_id', 'id');
    }
}
