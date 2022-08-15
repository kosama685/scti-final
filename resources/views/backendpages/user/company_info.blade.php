@php
    {{ $title =  "dashboard";
    }}
@endphp
@extends('backendpages.user.layouts.main')
@section('main-container')



<section class="view-jobs-wrp">
  <div class="container">    
    <div class="row">   
      <div class="col-md-12">
        <div class="accordion">
          <div class="quest-section active"> <a class="quest-title active" href="#accordion-1">Personal Information</a>
            <div id="accordion-1" class="quest-content open" style="display: block;">
              <div class="row bodrbtm">
              	<div class="col-md-5">
              		<div class="inner-main">
              			<ul>
              				<li>
              					<p>Company Name</p>
              					<span>Business Owner</span>
              				</li>
              				<li>
              					<p>Company Address</p>
              					<span>A-21 saleem housing Society Malir Halt Karach</span>
              				</li>
              				<li>
              					<p>Company Vision</p>              					
              				</li>              				
              			</ul>
              		</div>
              	</div>  
              	<div class="col-md-4">
              		<div class="inner-main">
              			<ul>
              				<li>
              					<p>Company Email</p>
              					<span>test1@gmail.com</span>
              				</li>
              				<li>
              					<p>Company Bio</p>
              				
              				</li>
              				<li>
              					<p>No Of Employees</p>
              					<span>Invalid date</span>
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
</section>





<script type="text/javascript">
$(document).ready(function(){
  $("#drp1").click(function(){
    $(".drop1").slideToggle();
  });
  $("#drp2").click(function(){
    $(".drop2").slideToggle();
  });
  $("#drp3").click(function(){
    $(".drop3").slideToggle();
  });
  $("#drp4").click(function(){
    $(".drop4").slideToggle();
  });
});
</script>
@endsection