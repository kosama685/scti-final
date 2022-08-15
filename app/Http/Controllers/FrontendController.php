<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FrontendController extends Controller
{
    public function index(){
        return view('frontpages.index');
    }

    public function about_us(){
        return view('frontpages.about-us');
    }


    public function faqs(){
        return view('frontpages.faqs');
    }

    public function contact(){
        return view('frontpages.contact');
    }
 public function login(){
        return view('backendpages.user.login');
    }
     public function business_login(){
        return view('backendpages.business.business-login');
    }
}
