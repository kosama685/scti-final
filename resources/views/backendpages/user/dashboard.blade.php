
@php
    {{ $title =  "dashboard";
    }}
@endphp
@extends('backendpages.user.layouts.main')
@section('main-container')

<div class="container">



    <section class="dashboard-bnrwrp">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="maindesh-wrp">
                    <div class="top-formwrp">
                        <form>
                            <div class="row">
                                <div class="col-md-3">
                                    <div class="lablewrp">
                                        <span>Title</span>
                                        <input type="" name="" placeholder="Enter Title">
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="lablewrp">
                                        <span>City</span>
                                        <input type="" name="" placeholder="Enter City">
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="lablewrp">
                                        <span>Salary (Min)</span>
                                        <input type="" name="" placeholder="Enter Salary">
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="lablewrp">
                                        <span style="visibility: hidden;">City</span>
                                        <input class="btnmain" type="submit" value="Search">
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="sec-form">
                                <form>                                  
                                    <div class="row">
                                        <div class="col-md-2 p-0 my-auto">
                                            <h4>Sort By:</h4>
                                        </div>
                                        <div class="col-md-4">
                                             <div class="lablewrp">
                                                <span>From</span>
                                                <input type="date">
                                             </div>
                                        </div>
                                        <div class="col-md-5 my-auto">
                                             <div class="lablewrp">
                                                <span>To</span>
                                                <input type="date">
                                             </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="twobtn">
                                <ul>
                                    <li>
                                        <a href="javascript:;">Clear Search</a>
                                    </li>
                                    <li>
                                        <a style="background: #999999;" href="javascript:;"><i class="fa fa-filter" aria-hidden="true"></i> Filter By <i class="fa fa-caret-down" aria-hidden="true"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="maininner">
                                <div class="threedotswrp">
                                    <a href="javascript:;"><i aria-hidden="true" class="fa fa-ellipsis-v"></i></a>
                                    <ul class="dropwrp">
                                        <li>
                                            <a href="{{ url('view-jobs') }}"><i aria-hidden="true" class="fa fa-eye"></i> View</a>
                                        </li>
                                    </ul>
                                </div>
                                <a href="{{ url('view-jobs') }}"><img src="assets/images/company-1.png"></a>
                                <p>Nostrud maiores ex e</p>
                                <div class="row">
                                    <div class="col-md-7">
                                        <div class="inerwrpp">
                                            <ul>
                                                <li>
                                                    <i aria-hidden="true" class="fa fa-calendar"></i> 14 February 2017
                                                </li>
                                                <li>
                                                    <i aria-hidden="true" class="fa fa-euro"></i> 111
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-md-5">
                                        <div class="inerwrpp">
                                            <ul>                    
                                                <li>
                                                    <i aria-hidden="true" class="fa fa-map-marker"></i>Vitae autem qu aspe, Aliquip totam ration
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="maininner">
                                <div class="threedotswrp">
                                    <a href="javascript:;"><i aria-hidden="true" class="fa fa-ellipsis-v"></i></a>
                                    <ul class="dropwrp">
                                        <li>
                                            <a href="{{ url('view-jobs') }}"><i aria-hidden="true" class="fa fa-eye"></i> View</a>
                                        </li>
                                    </ul>
                                </div>
                                <a href="{{ url('view-jobs') }}"><img src="assets/images/company-1.png"></a>
                                <p>Teacher</p>
                                <div class="row">
                                    <div class="col-md-7">
                                        <div class="inerwrpp">
                                            <ul>
                                                <li>
                                                    <i aria-hidden="true" class="fa fa-calendar"></i> 30 April 2021
                                                </li>
                                                <li>
                                                    <i aria-hidden="true" class="fa fa-euro"></i> 1000-2000
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-md-5">
                                        <div class="inerwrpp">
                                            <ul>                                                
                                                <li>
                                                    <i aria-hidden="true" class="fa fa-map-marker"></i> london, London
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="maininner">
                                <div class="threedotswrp">
                                    <a href="javascript:;"><i aria-hidden="true" class="fa fa-ellipsis-v"></i></a>
                                    <ul class="dropwrp">
                                        <li>
                                            <a href="{{ url('view-jobs') }}"><i aria-hidden="true" class="fa fa-eye"></i> View</a>
                                        </li>
                                    </ul>
                                </div>
                                <a href="{{ url('view-jobs') }}"><img src="assets/images/company-1.png"></a>
                                <p>Explicabo Distincti</p>
                                <div class="row">
                                    <div class="col-md-7">
                                        <div class="inerwrpp">
                                            <ul>
                                                <li>
                                                    <i aria-hidden="true" class="fa fa-calendar"></i> 22 April 2021
                                                </li>
                                                <li>
                                                    <i aria-hidden="true" class="fa fa-euro"></i> Veritatis incidunt
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-md-5">
                                        <div class="inerwrpp">
                                            <ul>                                                
                                                <li>
                                                    <i aria-hidden="true" class="fa fa-map-marker"></i> Sint et sed illo ali, Et quis tempore del
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="maininner">
                                <div class="threedotswrp">
                                    <a href="javascript:;"><i aria-hidden="true" class="fa fa-ellipsis-v"></i></a>
                                    <ul class="dropwrp">
                                        <li>
                                            <a href="{{ url('view-jobs') }}"><i aria-hidden="true" class="fa fa-eye"></i> View</a>
                                        </li>
                                    </ul>
                                </div>
                                <a href="{{ url('view-jobs') }}"><img src="assets/images/company-1.png"></a>
                                <p>Teacher</p>
                                <div class="row">
                                    <div class="col-md-7">
                                        <div class="inerwrpp">
                                            <ul>
                                                <li>
                                                    <i aria-hidden="true" class="fa fa-calendar"></i> 30 April 2021
                                                </li>
                                                <li>
                                                    <i aria-hidden="true" class="fa fa-euro"></i> 1000-2000
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-md-5">
                                        <div class="inerwrpp">
                                            <ul>                                                
                                                <li>
                                                    <i aria-hidden="true" class="fa fa-map-marker"></i> london, London
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="maininner">
                                <div class="threedotswrp">
                                    <a href="javascript:;"><i aria-hidden="true" class="fa fa-ellipsis-v"></i></a>
                                    <ul class="dropwrp">
                                        <li>
                                            <a href="{{ url('view-jobs') }}"><i aria-hidden="true" class="fa fa-eye"></i> View</a>
                                        </li>
                                    </ul>
                                </div>
                                <a href="{{ url('view-jobs') }}"><img src="assets/images/company-1.png"></a>
                                <p>SQA Trainee</p>
                                <div class="row">
                                    <div class="col-md-7">
                                        <div class="inerwrpp">
                                            <ul>
                                                <li>
                                                    <i aria-hidden="true" class="fa fa-calendar"></i> 25 June 2021
                                                </li>
                                                <li>
                                                    <i aria-hidden="true" class="fa fa-euro"></i> 15k
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-md-5">
                                        <div class="inerwrpp">
                                            <ul>                                                
                                                <li>
                                                    <i aria-hidden="true" class="fa fa-map-marker"></i> Chattanuga, Tennesse
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="maininner">
                                <div class="threedotswrp">
                                    <a href="javascript:;"><i aria-hidden="true" class="fa fa-ellipsis-v"></i></a>
                                    <ul class="dropwrp">
                                        <li>
                                            <a href="{{ url('view-jobs') }}"><i aria-hidden="true" class="fa fa-eye"></i> View</a>
                                        </li>
                                    </ul>
                                </div>
                                <a href="{{ url('view-jobs') }}"><img src="assets/images/company-1.png"></a>
                                <p>Proident incidunt</p>
                                <div class="row">
                                    <div class="col-md-7">
                                        <div class="inerwrpp">
                                            <ul>
                                                <li>
                                                    <i aria-hidden="true" class="fa fa-calendar"></i> 10 February 2022
                                                </li>
                                                <li>
                                                    <i aria-hidden="true" class="fa fa-euro"></i>Qui ut ut omnis libe
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-md-5">
                                        <div class="inerwrpp">
                                            <ul>                                                
                                                <li>
                                                    <i aria-hidden="true" class="fa fa-map-marker"></i> Delectus assumenda, Quasi mollitia labor
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="maininner">
                                <div class="threedotswrp">
                                    <a href="javascript:;"><i aria-hidden="true" class="fa fa-ellipsis-v"></i></a>
                                    <ul class="dropwrp">
                                        <li>
                                            <a href="{{ url('view-jobs') }}"><i aria-hidden="true" class="fa fa-eye"></i> View</a>
                                        </li>
                                    </ul>
                                </div>
                                <a href="{{ url('view-jobs') }}"><img src="assets/images/company-1.png"></a>
                                <p>Soluta assumenda fug</p>
                                <div class="row">
                                    <div class="col-md-7">
                                        <div class="inerwrpp">
                                            <ul>
                                                <li>
                                                    <i aria-hidden="true" class="fa fa-calendar"></i> 16 February 2022
                                                </li>
                                                <li>
                                                    <i aria-hidden="true" class="fa fa-euro"></i>Fugiat beatae repudi
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-md-5">
                                        <div class="inerwrpp">
                                            <ul>                                                
                                                <li>
                                                    <i aria-hidden="true" class="fa fa-map-marker"></i> Eius occaecat sed mo, Delectus officia cu
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="maininner">
                                <div class="threedotswrp">
                                    <a href="javascript:;"><i aria-hidden="true" class="fa fa-ellipsis-v"></i></a>
                                    <ul class="dropwrp">
                                        <li>
                                            <a href="{{ url('view-jobs') }}"><i aria-hidden="true" class="fa fa-eye"></i> View</a>
                                        </li>
                                    </ul>
                                </div>
                                <a href="{{ url('view-jobs') }}"><img src="assets/images/company-1.png"></a>
                                <p>Do placeat cupidita</p>
                                <div class="row">
                                    <div class="col-md-7">
                                        <div class="inerwrpp">
                                            <ul>
                                                <li>
                                                    <i aria-hidden="true" class="fa fa-calendar"></i> 16 February 2022
                                                </li>
                                                <li>
                                                    <i aria-hidden="true" class="fa fa-euro"></i>Nesciunt ad eum qua
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-md-5">
                                        <div class="inerwrpp">
                                            <ul>                                                
                                                <li>
                                                    <i aria-hidden="true" class="fa fa-map-marker"></i> Ex fuga Laboris mod, Non libero inventore
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="maininner">
                                <div class="threedotswrp">
                                    <a href="javascript:;"><i aria-hidden="true" class="fa fa-ellipsis-v"></i></a>
                                    <ul class="dropwrp">
                                        <li>
                                            <a href="{{ url('view-jobs') }}"><i aria-hidden="true" class="fa fa-eye"></i> View</a>
                                        </li>
                                    </ul>
                                </div>
                                <a href="{{ url('view-jobs') }}"><img src="assets/images/company-1.png"></a>
                                <p>Voluptatibus aliqua</p>
                                <div class="row">
                                    <div class="col-md-7">
                                        <div class="inerwrpp">
                                            <ul>
                                                <li>
                                                    <i aria-hidden="true" class="fa fa-calendar"></i> 24 February 2022
                                                </li>
                                                <li>
                                                    <i aria-hidden="true" class="fa fa-euro"></i>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-md-5">
                                        <div class="inerwrpp">
                                            <ul>                                                
                                                <li>
                                                    <i aria-hidden="true" class="fa fa-map-marker"></i> Dicta dignissimos am, Non optio quisquam
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="maininner">
                                <div class="threedotswrp">
                                    <a href="javascript:;"><i aria-hidden="true" class="fa fa-ellipsis-v"></i></a>
                                    <ul class="dropwrp">
                                        <li>
                                            <a href="{{ url('view-jobs') }}"><i aria-hidden="true" class="fa fa-eye"></i> View</a>
                                        </li>
                                    </ul>
                                </div>
                                <a href="{{ url('view-jobs') }}"><img src="assets/images/company-1.png"></a>
                                <p>Qui autem animi mol</p>
                                <div class="row">
                                    <div class="col-md-7">
                                        <div class="inerwrpp">
                                            <ul>
                                                <li>
                                                    <i aria-hidden="true" class="fa fa-calendar"></i> 25 February 2022
                                                </li>
                                                <li>
                                                    <i aria-hidden="true" class="fa fa-euro"></i>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-md-5">
                                        <div class="inerwrpp">
                                            <ul>                                                
                                                <li>
                                                    <i aria-hidden="true" class="fa fa-map-marker"></i> Eum fugit aut dolor, Porro nisi suscipit
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<div class="form-popup-bg">
  <div class="form-container">
    <button id="btnCloseForm" class="close-button">X</button>
    <h1>Change Password</h1>
     <form>
<!--     


                     
      <div class="form-group">
          <label for="">New Password</label>
     <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="new-password">

                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror

<!--         
        <label for="">New Password</label>
        <input class="form-control" placeholder="Enter New Password" type="text" /> -->
      </div>
      <div class="form-group">
        <label for="">Re-Type Password</label>
         <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required autocomplete="new-password">
<!--         <input class="form-control" placeholder="Enter Re-Type Password" type="text" /> -->
      </div>
        <button type="submit" class="btn btn-primary">
                                    {{ __('Reset Password') }}
                                </button>
 <!--      <button>Update</button> -->
    </form>
  </div>
</div>
 <!--    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Dashboard') }}</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    {{ __('You are logged in!') }}
                </div>
            </div>
        </div>
    </div> -->
</div>

<script src="{{ asset('assets/js/mlib.js') }}"></script> 
<script src="{{ asset('assets/js/html5.js') }}"></script> 
<script src="{{ asset('assets/js/functions.js') }}"></script> 
@endsection
