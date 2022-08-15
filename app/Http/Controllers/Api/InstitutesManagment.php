<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

//Models
use App\Models\InstituteManagment;

//Libraries
use App\Http\Controllers\Api\BaseController;

class InstitutesManagment extends BaseController
{
    //
     public function index()
    {
    	return InstituteManagment::all();
    }
}
