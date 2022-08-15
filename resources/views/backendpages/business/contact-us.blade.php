
@php
    {{ $title =  "Nicholas Rupert - Edit Profile Qa";
    }}
@endphp
@extends('backendpages.business.layouts.main')
@section('main-container')



<section class="bottom-formwrp">
	<div class="container">
		<div class="row">			
			<div class="col-md-10 offset-md-1">
				<div class="formwrp">
					<h4>Contact Us</h4>
					<form>
						<div class="row">
							<div class="col-md-12">
								<div class="lablewrp">
									<input type="" name="" placeholder="Enter Your Name">
								</div>
							</div>
							<div class="col-md-6">
								<div class="lablewrp">
									<input type="" name="" placeholder="Enter Your Email">
								</div>
							</div>
							<div class="col-md-6">
								<div class="lablewrp">
									<input type="" name="" placeholder="Enter Your Subject">
								</div>
							</div>
							<div class="col-md-12">
								<div class="lablewrp">
									<select name="cars" id="cars">
									  <option value="volvo">Job Category</option>
									  <option value="saab">Saab</option>
									  <option value="mercedes">Mercedes</option>
									  <option value="audi">Audi</option>
									</select>
								</div>
							</div>
							<div class="col-md-12">
								<div class="lablewrp">
									<textarea placeholder="Enter Message Here..."></textarea>
								</div>
							</div>
							<div class="col-md-6">
								<div class="lablewrp">
									<input class="btnmain" type="Submit" value="Submit Now">
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</section>







@endsection