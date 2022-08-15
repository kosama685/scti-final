
@extends('frontpages.layouts.main')

@php
{{ $title = "About Us";
$activeNav = "about-us";}}
@endphp

@section('main-container')
<section class="about-bannerwrp">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<div class="txtwrp">
					<h2>Meet The Team</h2>
				</div>
			</div>
			<div class="col-md-6">
				<div class="imgwrp">
					<h4>James Fabiyi</h4>
					<span>CEO and Co-Founder</span>
					<img src="assets/images/CEO-JFI.jpg">
				</div>
			</div>
			<div class="col-md-6">
				<div class="imgwrp">
					<h4>Rusharn Williamson</h4>
					<span>CEO and Co-Founder</span>
					<img src="assets/images/CEO-RWN.jpg">
				</div>
			</div>
			<div class="col-md-12">
				<div class="txtdiv">
					<p class="main-pera">James Fabiyi and Rusharn Williamson both science teachers in the UK, discovered SCTI Jobs in June 2020. The idea was birthed from the global pandemic which hindered opportunities despite many people being qualified when applying for roles in their respective fields. The gap between being qualified and securing the position ignited our thoughts into action, to create SCTI Jobs Net so that the success rate of obtaining job openings increased. We have partnered with several businesses and training providers; and as a result, increasing the success rate of getting the job applied for.</p>
					<p class="main-pera">After being inspired by the Black Lives Matter movement, James and Rusharn both had the same vision to allow black people to be exposed to the same opportunities as their counterparts. In order remove bias and to give all people equal prospects, we decided not to include the ethnicity, nationality or sexual orientation criteria in our online application.</p>
					<p class="main-pera">Through continuous professional development James and Rusharn are accredited recruitment consultants and both well equipped to deliver the highest level of consultancy to job seekers.</p>
				</div>
			</div>
		</div>
	</div>
</section>


 @endsection