@php
    {{ $title =  "Nicholas Rupert - Edit Profile Qa";
    }}
@endphp
@extends('backendpages.user.layouts.main')
@section('main-container')



<section class="view_profilewrp">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<div class="txtwrp">
					<h2>View Profile</h2>
				</div>
				<div class="mainbox">
					<div class="row">
						<div class="col-md-4">
							<div class="tabemain">
								<ul>
									<li class="current" data-targetit="tabs-info">Personal Information</li>
									<li data-targetit="tabs-resume">Resume</li>
									<li data-targetit="tabs-address">Address</li>
									<li data-targetit="tabs-job">Job Applied</li>
								</ul>
							</div>
						</div>
						<div class="col-md-8">						
							<ul class="tabs profile-info  tabs-info current">
								<li class="">
									<div class="maininfo">
										<div class="imgwrp">
											<img src="assets/images/avatar.jpg">
											<span>User Id:001</span>
										</div>
										<div class="row">
											<div class="col-md-6">
												<div class="infowrp">
													<ul>
														<li>First Name</li>
														<li>Last Name</li>
														<li>date of birth</li>
														<li>Email Address</li>
													</ul>
												</div>
											</div>
											<div class="col-md-6">
												<div class="nametxt">
													<ul>
														<li>Justin</li>
														<li>Martin</li>
														<li>Invalid date</li>
														<li>justinmartin990@hotmail.com</li>
													</ul>
												</div>
											</div>
										</div>
										<div class="btnwrp">
											<ul>
												<li>
													<a href="{{ url('edit-profile') }}">Edit</a>
												</li>
												<li>
													<a id="btnOpenForm" href="{{ url('reset') }}">Change Password</a>
												</li>
											</ul>
										</div>
									</div>
								</li>
							</ul>	
							<ul class="tabs profile-info tabs-resume">
								<li class="">
									<div class="maininfo">
										<div class="imgwrp">											
											<span>No Resume Found</span>
										</div>	
									</div>
								</li>
							</ul>
							<ul class="tabs profile-info  tabs-address">
								<li class="">
									<div class="maininfo">										
										<div class="row">
											<div class="col-md-3">
												<div class="infowrp text-left">
													<ul>
														<li>State</li>
														<li>City</li>
														<li>Post code</li>														
													</ul>
												</div>
											</div>
											<div class="col-md-6">
												<div class="nametxt">
													<ul>
														<li style="visibility: hidden;">Justin</li>
														<li>California</li>
														<li>12345</li>														
													</ul>
												</div>
											</div>
										</div>										
									</div>
								</li>
							</ul>
							<ul class="tabs profile-info  tabs-job">
								<li class="">
									<div class="maininfo">										
										<ul class="jobswrp">
											<li>Title</li>
											<li>Status</li>
											<li>Date</li>
										</ul>										
									</div>
								</li>
							</ul>					
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
    
    <form action="">
      <div class="form-group">
        <label for="">Current Password</label>
        <input type="text" placeholder="Enter Current Password" class="form-control" />
      </div>
      <div class="form-group">
        <label for="">New Password</label>
        <input class="form-control" placeholder="Enter New Password" type="text" />
      </div>
      <div class="form-group">
        <label for="">Re-Type Password</label>
        <input class="form-control" placeholder="Enter Re-Type Password" type="text" />
      </div>
      
      <button>Update</button>
    </form>
  </div>
</div>
@endsection