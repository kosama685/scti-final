

@extends('frontpages.layouts.main')

@php
{{ $title = "Home";
$activeNav = "Home";}}
@endphp

@section('main-container')

 
<section class="home-banrwrp">
	<div class="container">
		<div class="row">
			<div class="col-md-7">
				<div class="txtwrp">
					<h1>Find Your Job Favorite and Immediate…</h1>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting is industry. Lorem Ipsum has been the industry’s standard dummy and scrambled it to make a type specimen book.</p>
				</div>
			</div>
			<div class="col-md-5">
				<div class="imgwrp">
					<img src="{{ asset('assets/images/Group-12.png') }}">
				</div>
			</div>
		</div>
		<div class="formwrp">
			<form data-animation="fadeInUp" action="webpages/bannerFormController.php">    
			  <div class="lable">
			    <input class="fxtwrp" type="text"  placeholder="Job Title" required>
			  </div>
			  <div class="lable">
			    <input type="email"  placeholder="location"  required>
			  </div>
			  <div class="lable">
                <select name="cars" id="cars">
				  <option value="volvo">Job Category</option>
				  <option value="saab">Saab</option>
				  <option value="mercedes">Mercedes</option>
				  <option value="audi">Audi</option>
				</select>		
			  </div>			 
			  	<div class="lable">
			    <input value="Submit" class="btn submitbtn" type="submit" placeholder="Submit">
			  </div>			 
			</form>		
		</div>
	</div>
</section>

<section class="secend-wrp">
	<div class="container">
		<div class="row">
			<div class="col-md-6">
				<div class="imgwrp">
					<img src="{{ asset('assets/images/100-trusted.png') }}">
				</div>
			</div>
			<div class="col-md-6 my-auto">
				<div class="txtwrp">
					<h2 class="main-heading">Trusted & Popular <br> Job Portal</h2>
					<p class="main-pera">Lorem Ipsum is simply dummy text of the printing and typesetting dummy is to and scrambled it to make a type specimen book.</p>
					<ul>
						<li>
							<span>
								<img src="{{ asset('assets/images/L1.png') }}">
							</span>
							<p>Register Your Account</p>
						</li>
						<li>
							<span>
								<img src="{{ asset('assets/images/L0001.png') }}">
							</span>
							<p>Upload Your Resume</p>
						</li>
						<li>
							<span>
								<img src="{{ asset('assets/images/Forma-1.png') }}">
							</span>
							<p>Apply for Dream Job</p>
						</li>
					</ul>
				</div>
				<div class="btnwrp">
					<a class="btn-1" href="">Create Your Profile</a>
					<a class="btn-2" href="">Upload Your CV</a>
				</div>
			</div>
		</div>
	</div>
</section>


<section class="simplesection-wrp">
	<div class="container">
		<div class="row">
			<div class="col-md-6 my-auto">
				<div class="txtwrp">
					<h2 class="main-heading">Why Choose <br> SCTI Jobs</h2>
					<p class="main-pera">Lorem Ipsum is simply dummy text of the printing and typesetting dummy is to and scrambled it to make a type specimen book.</p>
					<ul>
						<li>Lorem Ipsum is simply dummy text of the printing and book.</li>
						<li>Lorem Ipsum is simply dummy text of the printing and book.</li>
						<li>Lorem Ipsum is simply dummy text of the printing and book.</li>
						<li>Lorem Ipsum is simply dummy text of the printing and book.</li>
					</ul>
				</div>
			</div>
			<div class="col-md-6">
				<div class="imgwrp">
					<img src="{{ asset('assets/images/awards-win.png') }}">
				</div>
			</div>
		</div>
	</div>
</section>



<section class="counter-section">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<div class="counterwrp">
					<ul>
						<li>
							<h2>14K+</h2>
							<p>Job Available</p>
						</li>
						<li>
							<h2>18K+</h2>
							<p>Submitted CV</p>
						</li>
						<li>
							<h2>28K+</h2>
							<p>Registerd Member</p>
						</li>
						<li>
							<h2>08K+</h2>
							<p>Company</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="clients-secwrp">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<div class="txtwrp">
					<h2 class="main-heading">What say Job Seeker About Us</h2>
					<p class="main-pera">Lorem Ipsum is simply dummy text of the printing and typesetting dummy is to and dummy is to is to my scrambled it to make a type specimen book.</p>
				</div>
				<div class="mapwrp">
					<img class="map-img" src="{{ asset('assets/images/Vector-Smart-Object.png') }}">
					<div class="client-wrp box-1 wow zoomIn" data-wow-duration="1s" data-wow-delay="0.2s">
						<img src="assets/images/Group-19.png">
						<div class="txtdiv">
							<h4>Jac Jacson</h4>
							<p>“Lorem Ipsum is simply dummy text of the printing and typesetting dummy is and it to make a type specimen book.”</p>
						</div>
					</div>
					<div class="client-wrp box-2 wow zoomIn" data-wow-duration="1s" data-wow-delay="0.9s">
			 	<img src="assets/images/Group-16.png"> 
						<div class="txtdiv">
							<h4>Jac Jacson</h4>
							<p>“Lorem Ipsum is simply dummy text of the printing and typesetting dummy is and it to make a type specimen book.”</p>
						</div>
					</div>
					<div class="client-wrp box-3 wow zoomIn" data-wow-duration="1s" data-wow-delay="1.2s">
						<img src="assets/images/Group-15.png">
						<div class="txtdiv">
							<h4>Jac Jacson</h4>
							<p>“Lorem Ipsum is simply dummy text of the printing and typesetting dummy is and it to make a type specimen book.”</p>
						</div>
					</div>
					<div class="client-wrp box-4 wow zoomIn" data-wow-duration="1s" data-wow-delay="1s">
						<img src="assets/images/Group-14.png">
						<div class="txtdiv">
							<h4>Jac Jacson</h4>
							<p>“Lorem Ipsum is simply dummy text of the printing and typesetting dummy is and it to make a type specimen book.”</p>
						</div>
					</div>
					<div class="client-wrp box-5 wow zoomIn" data-wow-duration="1s" data-wow-delay="0.7s">
						<img src="assets/images/Group-18.png">
						<div class="txtdiv">
							<h4>Jac Jacson</h4>
							<p>“Lorem Ipsum is simply dummy text of the printing and typesetting dummy is and it to make a type specimen book.”</p>
						</div>
					</div>
					<div class="client-wrp box-6 wow zoomIn" data-wow-duration="1s" data-wow-delay="1.4s">
						<img src="assets/images/Group-17.png">
						<div class="txtdiv">
							<h4>Jac Jacson</h4>
							<p>“Lorem Ipsum is simply dummy text of the printing and typesetting dummy is and it to make a type specimen book.”</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>




<section class="news-letter-wrp">
	<div class="container">
		<div class="row">
			<div class="col-md-6">
				<div class="txtwrp">
					<h2 class="main-heading">Subscribe Newsletter</h2>
					<p class="main-pera">Lorem dummy is scrambled to make a type specimen book.</p>
				</div>
			</div>
			<div class="col-md-6 my-auto">
				<div class="formwrp">
					<form>
						<div class="lablewrp">
							<input type="" placeholder="Enter Your Email">
						</div>
						<div class="btnwrp">
							<input type="submit" value="Subscribe">
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</section>



<section class="bottom-formwrp">
	<div class="container">
		<div class="row">
			<div class="col-md-5">
				<div class="txtwrp">
					<h2 class="main-heading">Have a any Questions</h2>
					<p class="main-pera">Lorem Ipsum is simply dummy text of the printing and to and scrambled it to make a type specimen book.</p>
					<span>Phone:</span>
					<h4><a href="javascript:;">123-456-789</a></h4>
					<h3><a href="javascript:;">111-444-9999</a></h3>
				</div>
			</div>
			<div class="col-md-7">
				<div class="formwrp">
					<form>
						<div class="row">
							<div class="col-md-6">
								<div class="lablewrp">
									<input type="" name="" placeholder="Enter Your Name">
								</div>
							</div>
							<div class="col-md-6">
								<div class="lablewrp">
									<input type="" name="" placeholder="Enter Your Number">
								</div>
							</div>
							<div class="col-md-12">
								<div class="lablewrp">
									<input type="" name="" placeholder="Enter Your Email">
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



<section class="category-secwrp">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<div class="txtwrp">
					<h2 class="main-heading">Choose Your Desire Category</h2>
					<p class="main-pera">Lorem Ipsum is simply dummy text of the printing and typesetting dummy is to and dummy is to is to my scrambled it to make a type specimen book.</p>
				</div>
				<div class="mainboxwrp">
					<ul class="category-slider">
						<li>
							<div class="boxwrp">
								<div class="topbox">
									<h2>01</h2>
								</div>
								<div class="txtdiv">
									<h4>Technical <br>Support</h4>
								</div>
							</div>
						</li>
						<li>
							<div class="boxwrp">
								<div class="topbox">
									<h2>02</h2>
								</div>
								<div class="txtdiv">
									<h4>Business <br>Development</h4>
								</div>
							</div>
						</li>
						<li>
							<div class="boxwrp">
								<div class="topbox">
									<h2>03</h2>
								</div>
								<div class="txtdiv">
									<h4>Real Estate <br>Business</h4>
								</div>
							</div>
						</li>
						<li>
							<div class="boxwrp">
								<div class="topbox">
									<h2>04</h2>
								</div>
								<div class="txtdiv">
									<h4>Finance & Banking <br>Service</h4>
								</div>
							</div>
						</li>
						<li>
							<div class="boxwrp">
								<div class="topbox">
									<h2>01</h2>
								</div>
								<div class="txtdiv">
									<h4>Technical <br>Support</h4>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>

 @endsection
    
