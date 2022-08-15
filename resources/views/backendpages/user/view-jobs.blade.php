
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
        <div class="row">
          <div class="col-md-4 my-auto">
            <div class="btnwrp">
              <a href="{{ url('dashboard') }}"><i class="fa fa-arrow-left" aria-hidden="true"></i> Back</a>
            </div>
          </div>
          <div class="col-md-7">
            <div class="txtmaindiv">
              <h2>View Job</h2>
            </div>
          </div>
        </div>
        <div class="accordion">
          <div class="quest-section active"> <a class="quest-title active" href="#accordion-1">Personal Information</a>
            <div id="accordion-1" class="quest-content open" style="display: block;">
              <div class="row bodrbtm">
              	<div class="col-md-4">
              		<div class="inner-main">
              			<ul>
              				<li>
              					<p>Job Category</p>
              					<span>jay</span>
              				</li>
              				<li>
              					<p>Company Name</p>
              					<span>Business Owner</span>
              				</li>
              				<li>
              					<p>Posted On</p>
              					<span>12 February 2021</span>
              				</li>
              				<li>
              					<p>Period Employment</p>
              					<span>Contract Based</span>
              				</li>
              			</ul>
              		</div>
              	</div>  
              	<div class="col-md-4">
              		<div class="inner-main">
              			<ul>
              				<li>
              					<p>Job Name</p>
              					<span>Nostrud maiores ex e</span>
              				</li>
              				<li>
              					<p>Salary Range</p>
              					<span>€ 111</span>
              				</li>
              				<li>
              					<p>Apply Before</p>
              					<span>14 February 2017</span>
              				</li>
              				<li>
              					<p>Remote</p>
              					<span>No</span>
              				</li>
              			</ul>
              		</div>
              	</div>   
              	<div class="col-md-4">
              		<div class="inner-main">
              			<ul>
              				<li style="visibility: hidden;">
              					<p>Job Name</p>
              					<span>Nostrud maiores ex e</span>
              				</li>
              				<li style="visibility: hidden;">
              					<p>Salary Range</p>
              					<span>€ 111</span>
              				</li>
              				<li>
              					<p>Employee Benefits</p>
              					
              				</li>
              				<li>
              					<p>Company Info</p>
              					<p><a href="{{ url('company_info') }}">Link</a></p>
              				</li>
              			</ul>
              		</div>
              	</div>         
              </div>
            </div>
          </div>
                
        
          <div class="quest-section"> <a class="quest-title" href="#accordion-3">Address Details</a>
            <div id="accordion-3" class="quest-content"  style="display: block;">
              <div class="row bodrbtm">
               <div class="col-md-4">
              		<div class="inner-main">
              			<ul>
              				<li>
              					<p>Address Details</p>
              					<span>Aut minima tenetur c</span>
              				</li>
              				<li>
              					<p>State</p>
              					<span>Vitae autem qui aspe</span>
              				</li>
              				<li>
              					<p>Post Code</p>
              					<span>22316</span>
              				</li>              				
              			</ul>
              		</div>
              	</div>  
              	<div class="col-md-4">
              		<div class="inner-main">
              			<ul>
              				<li>
              					<p>Country	</p>
              					<span>Occaecat obcaecati i</span>
              				</li>
              				<li>
              					<p>City</p>
              					<span>Aliquip totam ration</span>
              				</li>              				           				
              			</ul>
              		</div>
              	</div>                
              </div>
            </div>
          </div>
          <div class="quest-section"> <a class="quest-title" href="#accordion-4">Job Responsibilities</a>
            <div id="accordion-4" class="quest-content"  style="display: block;">
              <div class="row bodrbtm">
               <div class="col-md-4">
              		<div class="inner-main">
              			<ul>
              				<li>
              					<p>Job Description</p>
              					<span>Dolor excepteur dolo</span>
              				</li>              				             				             				
              			</ul>
              		</div>
              	</div>              
              </div>
            </div>
          </div>
       
          <div class="quest-section"> <a class="quest-title " href="#accordion-5">Experience Information</a>
            <div id="accordion-5" class="quest-content"  style="display: block;">
              <div class="row bodrbtm">
                <div class="col-md-4">
              		<div class="inner-main">
              			<ul>
              				<li>
              					<p>Years Of Experience Needed</p>
              					<span>5-10 Years</span>
              				</li>
              				<li>
              					<p>Skills</p>
              					<span>Est doloribus reicie</span>
              				</li>          				             				
              			</ul>
              		</div>
              	</div>  
              	<div class="col-md-5">
              		<div class="inner-main">
              			<ul>
              				<li>
              					<p>Degree Requirements</p>
              					<span>Secondary School or Job Specific Training</span>
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