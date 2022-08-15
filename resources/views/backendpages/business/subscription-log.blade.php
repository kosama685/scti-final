@php
    {{ $title =  "Nicholas Rupert - Edit Profile Qa";
    }}
@endphp
@extends('backendpages.business.layouts.main')
@section('main-container')


<section id="configuration" class="create-jobwrp">
  <div class="row">
    <div class="col-12">
      <div class="card rounded pad-20">
        <div class="card-content collapse show">
          <div class="card-body">
            <div class="row">
              <div class="col-12 text-center text-lg-left">
                <h1>Subscription Log</h1></div>
            </div>
            <div class="row mb-4 align-items-start">
              <div class="col-lg-6 col-md-12 col-12  my-2 my-lg-0">
                <div class="media ">
                  <div class="media-body sub-log-box mx-auto mx-lg-0">
                    <h5 class="mt-1">Package Selected <span>Champion</span></h5>
                    <div>
                      <h5 class="mt-1">Next Renewel Package <span>Elite</span></h5></div>
                    <div class="checkboxs mt-1">
                      <div class="checkbox d-inline-block mr-2">
                        <label> Auto Renew Subscription
                          <input type="checkbox"> <span class="checkmark"></span></label>
                      </div>
                    </div>
                    <div class="row mt-1">
                      <div class="col-12"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-12 col-12 text-center text-lg-right my-2 my-lg-0"><a href="#" data-toggle="modal" data-target="#change_package" class="btn-green-pckg px-2">Change Package For Next Renewel</a></div>
            </div>
            <div class="top mt-5">
              <div class="row">
                <div class="col-12">
                  <label for="">sort by :</label>
                </div>
              </div>
              <div class="row align-items-center">
                <div class="col-xl-2 col-md-4 col-sm-6 col-12 mb-2 mb-md-0">
                  <div class="mx-datepicker">
                    <div class="mx-input-wrapper">
                      <input name="date" type="date" autocomplete="off" placeholder="" class="mx-input"></div>
                  </div>
                </div>
                <div class="col-xl-2 col-md-4 col-sm-6 col-12">
                  <div class="mx-datepicker">
                    <div class="mx-input-wrapper">
                      <input name="date" type="date" autocomplete="off" placeholder="" class="mx-input"></div>
                  </div>
                </div>
                <div class="col-xl-2 col-md-4 col-sm-6 col-12 ">
                  <button type="button" class="green-btn"> apply/clear </button>
                </div>
              </div>
            </div>
            <div class="clearfix"></div>
            <div class="maain-tabble table-responsive">
              <div class="d-flex align-items-center col-md-12 col-sm-12">
                <div class="col-sm-12 col-md-6">
                  <div id="DataTables_Table_0_length" class="dataTables_length">
                    <label class="d-flex align-items-center">Show
                      <select name="entries" aria-controls="DataTables_Table_0" class="form-control form-control-sm w-50">
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                      </select> entries </label>
                  </div>
                </div>
                <div class="col-md-6 col-sm-12">
                  <div id="DataTables_Table_0_filter" class="dataTables_filter for-search">
                    <label>
                      <input spellcheck="true" type="search" placeholder="Search..." aria-controls="DataTables_Table_0" class="form-control form-control-sm">
                    </label>
                  </div>
                </div>
              </div>
              <table class="table table-striped table-bordered zero-configuration">
                <thead>
                  <tr>
                    <th>Subscription Date</th>
                    <th>Package Type</th>
                    <th>Last Renewal Date</th>
                    <th>Expire Date</th>
                    <th>Charges</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-green-200">
                    <td>17 February 2021</td>
                    <td>Champion</td>
                    <td>17 February 2021</td>
                    <td>19 March 2021</td>
                    <td>5000</td>
                    <td><span style="color: green;">Active</span></td>
                    <td><a href="{{ url('subscription-invoice') }}" class="dropdown-item"><i class="fa fa-eye"></i>View </a></td>
                  </tr>
                  <!---->
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



<form class="create-job">
  <div id="change_package" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" class="modal fade pro-modal change_package_modal" style="display: none;" aria-hidden="true">
    <div role="document" class="modal-dialog modal-dialog-centered my-1">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" data-dismiss="modal" aria-label="Close" class="close"><span aria-hidden="true"><i class="fa fa-close"></i></span></button>
        </div>
        <div class="modal-body px-1 py-1">
          <div class="price-chart d-flex">
            <div class="attr-col">
              <ul>
                <li class="first">Change Package</li>
                <li>User</li>
                <li>Job Posting Engine</li>
                <li>Smart Questions</li>
                <li>Applicant tracking</li>
                <li>Launch Success Manager</li>
                <li>Candidate Messenger</li>
                <li>Account Manager</li>
                <li class="last">Monthly Emaail Compaign</li>
                <li class="last">Social Media Promotion</li>
              </ul>
            </div>
            <div class="pt-table">
              <div class="pt-body">
                <ul class="pt-rows mb-0">
                  <li class="title">
                    <div class="package-name text-center">
                      <label class="container-pckg_change text-center">
                        <div>
                          <h5 style="color: white;">1-5</h5></div>
                        <!---->
                        <input type="radio" name="package" value="1"> <span class="checkmark-pckg_change"></span>
                        <h3 style="color: white;">Starter</h3>
                        <h4 style="color: white;">$ 80</h4></label>
                    </div>
                    <div class="package-name text-center">
                      <label class="container-pckg_change text-center">
                        <div>
                          <h5 style="color: white;">1-15</h5></div>
                        <!---->
                        <input type="radio" name="package" value="2"> <span class="checkmark-pckg_change"></span>
                        <h3 style="color: white;">Champion</h3>
                        <h4 style="color: white;">$ 110</h4></label>
                    </div>
                    <div class="package-name text-center">
                      <label class="container-pckg_change text-center">
                        <!---->
                        <div>
                          <h5 style="color: white;">Unlimited</h5></div>
                        <input type="radio" name="package" value="5"> <span class="checkmark-pckg_change"></span>
                        <h3 style="color: white;">Elite</h3>
                        <h4 style="color: white;">$ 155</h4></label>
                    </div>
                  </li>
                  <li class="first"><span><i class="fa fa-check"></i></span><span><i class="fa fa-check"></i></span><span><i class="fa fa-check"></i></span></li>
                  <li><span class="pt-yes"><i class="fa fa-check"></i></span><span class="pt-yes"><i class="fa fa-check"></i></span><span class="pt-yes"><i class="fa fa-check"></i></span></li>
                  <li><span class="pt-no"><i class="fa fa-check"></i></span><span class="pt-yes"><i class="fa fa-check"></i></span><span class="pt-yes"><i class="fa fa-check"></i></span></li>
                  <li><span class="pt-no"><i class="fa fa-check"></i></span><span class="pt-no"><i class="fa fa-check"></i></span><span class="pt-no"><i class="fa fa-check"></i></span></li>
                  <li><span class="pt-no"></span><span><i class="fa fa-check"></i></span><span><i class="fa fa-check"></i></span></li>
                  <li><span class="pt-yes"></span><span class="pt-yes"><i class="fa fa-check"></i></span><span class="pt-yes"><i class="fa fa-check"></i></span></li>
                  <li><span class="pt-yes"></span><span class="pt-yes"></span><span class="pt-yes"><i class="fa fa-check"></i></span></li>
                  <li><span class="pt-no"></span><span class="pt-yes"></span><span class="pt-yes"><i class="fa fa-check"></i></span></li>
                  <li><span class="pt-no"></span><span class="pt-yes"></span><span class="pt-yes"><i class="fa fa-check"></i></span></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="row mt-2">
            <div class="col-12 text-center"><a href="#" data-dismiss="modal" data-toggle="modal" data-target="#payment_package" class="btn-blue">Update</a></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="payment_package" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" class="modal fade pro-modal change_package_modal">
    <div role="document" class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" data-dismiss="modal" aria-label="Close" class="close"><span aria-hidden="true"><i class="fas fa-times"></i></span></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-12">
              <h3 class="heading-profession text-center">Payment</h3>
              <div class="row mb-2">
                <div class="col-12 t-c"><span><p class="fieldName">Card Holder Name*</p> <input type="text" name="card_holder_name" placeholder="Please Enter Card Holder Name" class="u-edit-txt payment-inp"> <span class="text-danger"></span></span>
                </div>
              </div>
              <div class="row mb-2">
                <div class="col-12 t-c"><span><p class="fieldName">Card Number*</p> <input type="tel" name="card_number" placeholder="Please Enter Card Number" class="u-edit-txt payment-inp"> <span class="text-danger"></span></span>
                </div>
              </div>
              <div class="row mb-2">
                <div class="col-12 t-c"><span><p class="fieldName">CVV Code*</p> <input type="number" name="cvv" rules="required|min:3|max:4" placeholder="Please Enter Card CVV Code" class="u-edit-txt payment-inp"> <span class="text-danger"></span></span>
                </div>
              </div>
              <div class="row mb-2">
                <div class="col-12 t-c"><span><p class="fieldName">Expiry Date*</p> <input type="text" name="expiry_date" id="expiry" aria-describedby="emailHelp" placeholder="Enter Expiry" class="form-control"> <span class="text-danger"></span></span>
                </div>
              </div>
              <div class="row mt-2">
                <div class="col-12 text-center">
                  <button type="submit" class="btn-blue w-100">Pay</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</form>



@endsection