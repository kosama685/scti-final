@php
    {{ $title =  "Nicholas Rupert - Edit Profile Qa";
    }}
@endphp
@extends('backendpages.business.layouts.main')
@section('main-container')




<section id="configuration"  class="create-jobwrp">
  <div class="row">
    <div class="col-12">
      <div class="card rounded pad-20">
        <div class="card-content collapse show">
          <div class="card-body">
            <div class="row">
              <div class="col-12">
                <h1><i></i>View Invoice</h1></div>
            </div>
            <div class="customer-top">
              <div class="row mb-4">
                <div class="col-6">
                  <div class="media">
                    <div class="media-body media_margin">
                      <h6 class="bo-name">Test Test</h6></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row offset-lg-1 align-items-center">
              <div class="col-md-4">
                <h3 for="">Subscription Date</h3> <span for="">17 February 2021</span></div>
              <div class="col-md-4">
                <h3 for="">Package Type</h3>
                <label for="">Champion</label>
              </div>
              <div class="col-md-4">
                <h3 for="">Last Renewal Date</h3>
                <label for="">17 February 2021</label>
              </div>
              <div class="col-md-4">
                <h3 for="">Expire Date</h3>
                <label for="">19 March 2021</label>
              </div>
              <div class="col-md-4">
                <h3 for="">Charges</h3>
                <label for="">5000</label>
              </div>
              <div class="col-md-4">
                <h3 for="">Status</h3>
                <label for="">Inactive</label>
              </div> <a class="btn-green-pckg">Download Invoice</a></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

@endsection