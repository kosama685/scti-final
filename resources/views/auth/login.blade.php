


@php
    {{ $title =  "Nicholas Rupert - Edit Profile Qa";
    }}
@endphp
@extends('backendpages.layouts.main')
@section('main-container')
<style type="text/css">
    
    .tab:not(:target) {
  display: none;
}

.tab:last-child {
  display: block;
}

.tab:target ~ .tab:last-child {
  display: none;
}
ul.nav.nav-tabs a{
        text-align: center;
    display: block;
    color: #8bc34a;
    font-weight: 600;
}


ul.nav.nav-tabs {
    position: absolute;
    bottom: 5%;
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    flex-wrap: wrap;
    align-content: space-around;
    justify-content: space-between;
    width: 81%;
    border: none;
}
nav.navbar.navbar-expand-md.navbar-light.bg-white.shadow-sm {
    display: none;
}
.pt-4, .py-4 {
    padding-top: 0!important;
}
.login_bnerwrp .login-fromwrp {
position: unset !important;
}
</style>

<section class="login_bnerwrp">
    <div class="container">
        <div class="row">
            <div class="col-md-7">


  <div id="tab3" class="tab">
    <ul class="nav nav-tabs">
      <li><a href="#tab1">Login</a></li>
      <li><a href="#tab2">Register</a></li>
    </ul>

  
  </div>

  <div id="tab2" class="tab">
    <ul class="nav nav-tabs">
      <li id="tab1"><a href="#tab1">Login</a></li>
     
    
    </ul>

    
       <div class="login-fromwrp">
           <form method="POST" action="{{ route('register') }}">
                        @csrf
                        <h2 class="main-heading">Register To Your Account</h2>
                        <div class="lablewrp">
                            <span>Name</span>

                             
                                <input id="name" type="text" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ old('name') }}" required autocomplete="name" autofocus>

                                @error('name')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                          <!--   <input type="" name="" placeholder="Enter Email address"> -->
                           
                        </div>
                               <div class="lablewrp">
                            <span>Email</span>

                             
                               <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email">

                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                           
                        </div>
                        <div class="lablewrp">
                            <span>Password</span>
                           <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="new-password">

                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            <!-- <input type="" name="" placeholder="Enter Password"> -->
                          
                        </div>
                            <div class="lablewrp">
                            <span>Confirm Password</span>
                           <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required autocomplete="new-password">

                              
                          
                        </div>
                        <div class="lablewrp">
                            <!-- <a href="javascript:;">Forgot Password?</a> -->
                        </div>
                        <div class="btnform">
                          <button type="submit" class="btn btn-primary">
                                    {{ __('Register') }}
                                </button>
                                 
                        
                        </div>
                        <a href="{{ url('/welcome') }}"><i class="fa fa-arrow-left" aria-hidden="true"></i> Back To Home Page</a>
                    </form>
                </div>

  </div>

  <div id="tab1" class="tab">
    <ul class="nav nav-tabs">
   
      <li><a href="#tab2">Register</a></li>
     
    </ul>

    
       <div class="login-fromwrp">
            <form method="POST" action="{{ route('login') }}">
                        @csrf

                        <h2 class="main-heading">Login To Your Account</h2>
                        <div class="lablewrp">
                            <span>Email address</span>

                               <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>
 <i class="fa fa-envelope-o" aria-hidden="true"></i>
                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                          <!--   <input type="" name="" placeholder="Enter Email address"> -->
                           
                        </div>
                        <div class="lablewrp">
                            <span>Password</span>
                            <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">
  <i class="fa fa-eye-slash" aria-hidden="true"></i>
                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            <!-- <input type="" name="" placeholder="Enter Password"> -->
                          
                        </div>
                        <div class="lablewrp">
                            <!-- <a href="javascript:;">Forgot Password?</a> -->
                        </div>
                        <div class="btnform">
                            <button type="submit" class="btn btn-primary">
                                    {{ __('Login') }}
                                </button>
                                   @if (Route::has('password.request'))
                                    <a class="btn btn-link" href="{{ route('password.request') }}">
                                        {{ __('Forgot Your Password?') }}
                                    </a>
                                @endif
                            <!-- <input type="submit" value="Login"> -->
                         <!--    <a class="btn-1" href="<?php //echo $path;?>user/view-profile">login</a> -->
                        </div>
                        <a href="{{ url('/welcome') }}"><i class="fa fa-arrow-left" aria-hidden="true"></i> Back To Home Page</a>
                    </form>
                </div>
  </div>





         
            </div>
            <div class="col-md-5">
                <div class="imgwrp">
                    <img src="assets/images/Group-12.png">
                </div>
            </div>
        </div>
    </div>
</section>

     <!--    <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Login') }}</div>

                <div class="card-body">
                    <form method="POST" action="{{ route('login') }}">
                        @csrf

                        <div class="row mb-3">
                            <label for="email" class="col-md-4 col-form-label text-md-end">{{ __('Email Address') }}</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>

                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="password" class="col-md-4 col-form-label text-md-end">{{ __('Password') }}</label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">

                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="row mb-3">
                            <div class="col-md-6 offset-md-4">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>

                                    <label class="form-check-label" for="remember">
                                        {{ __('Remember Me') }}
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="row mb-0">
                            <div class="col-md-8 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    {{ __('Login') }}
                                </button>

                                @if (Route::has('password.request'))
                                    <a class="btn btn-link" href="{{ route('password.request') }}">
                                        {{ __('Forgot Your Password?') }}
                                    </a>
                                @endif
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div> -->

@endsection
