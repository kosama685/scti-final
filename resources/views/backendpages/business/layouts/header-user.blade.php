<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>
<link rel="stylesheet" href="{{ asset('assets/css/m-style.css') }}">
<link rel="stylesheet" href="{{ asset('assets/css/style.css') }}">
<link rel="stylesheet" href="{{ asset('assets/css/newcss.css') }}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">



<link rel="stylesheet" href="{{ asset('assets/css/jquery.fancybox.min.css') }}">

<link rel="stylesheet" href="{{ asset('assets/css/variables.css') }}">
<link rel="stylesheet" href="{{ asset('assets/css/xicon.css') }}">
<link rel="stylesheet" href="{{ asset('assets/css/slick.css') }}">

<link rel="stylesheet" href="{{ asset('assets/css/mobile-nav.css') }}">

<link rel="stylesheet" href="{{ asset('assets/css/intlTelInput.css') }}">
<link rel="stylesheet" href="{{ asset('assets/css/bootstrap.css') }}">
<link rel="stylesheet" href="{{ asset('assets/css/animate.css') }}">

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

        <!-- Styles -->
       
       
    </head>
    <body class="antialiased">
   <!--      <div class="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center py-4 sm:pt-0">
            @if (Route::has('login'))
                <div class="hidden fixed top-0 right-0 px-6 py-4 sm:block">
                    @auth
                        <a href="{{ url('/welcome') }}" class="text-sm text-gray-700 dark:text-gray-500 underline">Home</a>
                    @else
                        <a href="{{ route('login') }}" class="text-sm text-gray-700 dark:text-gray-500 underline">Log in</a>

                        @if (Route::has('register'))
                            <a href="{{ route('register') }}" class="ml-4 text-sm text-gray-700 dark:text-gray-500 underline">Register</a>
                        @endif
                    @endauth
                </div>
            @endif -->

        



<header>
  <div class="container">

    <div class="row">
      <div class="col-md-2">
        <div class="logowrp">
          <a href="{{ url('/') }}">
         <!--    <img class="wht-logo" src="<?php //echo $basesurl;?>images/logo.png"> -->
            <img class="drk-logo" src="assets/images/drank-logo.png">
          </a>
        </div>
      </div>
      <div class="col-md-5 my-auto">
        <div class="navwrp">
          <ul>
            
            <li>
              <a href="{{ url('view-profile') }}">Career Center</a>
            </li>
            <li>
              <a href="{{ url('dashboard') }}">Browse Jobs </a>
            </li>
            <li>
              <a href="{{ url('contact') }}">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-5 my-auto">
        <div class="main-user-btn">
          <ul >
            <li>
              
        <!--       <a href="{{ route('login') }}"><i class="fa fa-arrow-circle-right" aria-hidden="true"></i> Logout</a> -->
            </li>
            <li>
              <a href="javascript:;"><i class="fa fa-bell" aria-hidden="true"></i></a>
            </li>
            <li>
              <a id="pro-drop" href="javascript:;"><img src="assets/images/avatar.jpg">Justin Martin <i class="fa fa-angle-down" aria-hidden="true"></i></a>
              <ul class="user-pro-drp pro-mnu-drop">
                <li>
                  <a href="{{ url('view-profile') }}"><i class="fa fa-user" aria-hidden="true"></i> My Profile</a>
                </li>
                <li>
                  <a href="{{ url('dashboard') }}"><i class="fa fa-user" aria-hidden="true"></i> Browse Job</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>




  </div>
</header>