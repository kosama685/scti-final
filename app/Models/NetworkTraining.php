<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NetworkTraining extends Model
{
    use HasFactory;
      protected $guarded = [];

      public function register()
      {
          return $this->hasMany(RegisterNetworkingTrainingUser::class,'network_training_id');
      }
}
