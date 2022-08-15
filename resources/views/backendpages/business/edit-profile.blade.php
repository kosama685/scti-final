@php
    {{ $title =  "Nicholas Rupert - Edit Profile Qa";
    }}
@endphp
@extends('backendpages.business.layouts.main')
@section('main-container')



<section class="user-edit-profile">
  <div class="container-fluid">    
    <div class="row">
      <div class="col-md-10 offset-md-1">
        <div class="row">   
      <div class="col-md-12">
        <div class="row">
          <div class="col-md-4 my-auto">
            <div class="btnwrp">
              <a href="{{ url('business-dashboard') }}"><i class="fa fa-arrow-left" aria-hidden="true"></i> Back</a>
            </div>
          </div>
          <div class="col-md-7">
            <div class="txtmaindiv">
              <h2>Edit Profile</h2>
            </div>
          </div>
        </div>
        <div class="accordion">
          <div class="profile-img">
            <div class="imgdiv">
              <img src="assets/images/avatar.jpg">
              <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
                <main class="main_full">
                  <div class="container">
                    <div class="panel">
                      <div class="button_outer">
                        <div class="btn_upload">
                          <input type="file" id="upload_file" name="">
                        </div>
                      </div>
                    </div>
                    <div class="error_msg"></div>
                    <div class="uploaded_file_view" id="uploaded_view">               
                    </div>
                  </div>
                </main>
            </div>
            <div class="lablewrp">
              <textarea></textarea>
            </div>
          </div>
          <div class="quest-section active"> <a class="quest-title active" href="#accordion-1">Personal Information  /  User Id:001</a>
            <div id="accordion-1" class="quest-content open" style="display: block;">
              <div class="row bodrbtm">
                <div class="col-md-6">
                  <div class="formwrp">
                    <span>First Name</span>
                    <input type="" name="" placeholder="Enter First Name">
                  </div>
                </div> 
                <div class="col-md-6">
                  <div class="formwrp">
                    <span>Last Name</span>
                    <input type="" name="" placeholder="Enter Last Name">
                  </div>
                </div>  
                <div class="col-md-6">
                  <div class="formwrp">
                    <span>Date Of Birth</span>
                    <input type="date" name="" placeholder="Enter Date Of Birth">
                  </div>
                </div>  
                <div class="col-md-6">
                  <div class="formwrp">
                    <span>Email Address</span>
                    <input type="" name="" placeholder="Enter Email Address">
                  </div>
                </div>  
                <div class="col-md-6">
                  <div class="formwrp">
                    <span>Phone Number </span>
                    <input type="" name="" placeholder="Enter Phone Number ">
                  </div>
                </div>   
              </div>
            </div>
          </div>
          <div class="quest-section"> <a class="quest-title" href="#accordion-3">Interest</a>
            <div id="accordion-3" class="quest-content"  style="display: block;">
              <div class="row bodrbtm">
                <div class="col-md-12">
                  <div class="interestwrp">
                    <textarea>
                      
                    </textarea>
                  </div> 
                </div>             
              </div>
            </div>
          </div>
          <div class="quest-section"> <a class="quest-title" href="#accordion-4">Upload CV</a>
            <div id="accordion-4" class="quest-content"  style="display: block;">
              <div class="row bodrbtm">
                       <main class="main_full">
                  <div class="container">
                    <div class="panel">
                      <div class="button_outer">
                        <div class="btn_upload">
                          <input type="file" id="upload_file" name="">
                        </div>
                      </div>
                    </div>
                    <div class="error_msg"></div>
                    <div class="uploaded_file_view" id="uploaded_view">               
                    </div>
                  </div>
                </main>       
              </div>
            </div>
          </div>
       
          <div class="quest-section"> <a class="quest-title " href="#accordion-5">Address</a>
            <div id="accordion-5" class="quest-content"  style="display: block;">
             <div class="row bodrbtm">
                <div class="col-md-6">
                  <div class="formwrp">
                    <span>Address</span>
                    <input type="" name="" placeholder="Enter Address">
                  </div>
                </div> 
                <div class="col-md-6">
                  <div class="formwrp">
                    <span>Country</span>
                    <input type="" name="" placeholder="Enter Country">
                  </div>
                </div>  
                <div class="col-md-6">
                  <div class="formwrp">
                    <span>State</span>
                    <input type="date" name="" placeholder="Enter State">
                  </div>
                </div>  
                <div class="col-md-6">
                  <div class="formwrp">
                    <span>City</span>
                    <input type="" name="" placeholder="Enter City">
                  </div>
                </div>  
                <div class="col-md-6">
                  <div class="formwrp">
                    <span>Post Code </span>
                    <input type="" name="" placeholder="Enter Post Code #12345 ">
                  </div>
                </div> 
                <div class="col-md-12">
                  <div class="btnmain">                   
                    <input type="submit" value="Update">
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