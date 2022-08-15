@php
    {{ $title =  "Nicholas Rupert - Edit Profile Qa";
    }}
@endphp
@extends('backendpages.business.layouts.main')
@section('main-container')

<section class="login_bnerwrp">
	<div class="container">
		<div class="row">
			<div class="col-md-7">
				<div class="login-fromwrp">
					<form>
						<h2 class="main-heading">Login To Your Account</h2>
						<div class="lablewrp">
							<span>Email address</span>
							<input type="" name="" placeholder="Enter Email address">
							<i class="fa fa-envelope-o" aria-hidden="true"></i>
						</div>
						<div class="lablewrp">
							<span>Password</span>
							<input type="" name="" placeholder="Enter Password">
							<i class="fa fa-eye-slash" aria-hidden="true"></i>
						</div>
						<div class="lablewrp">
							<a href="javascript:;">Forgot Password?</a>
						</div>
						<div class="btnform">
							<!-- <input type="submit" value="Login"> -->
							<a class="btn-1" href="{{ url('business-dashboard') }}">login</a>
						</div>
						<a href="{{ url('home') }}"><i class="fa fa-arrow-left" aria-hidden="true"></i> Back To Home Page</a>
					</form>
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








@endsection