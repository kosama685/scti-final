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
            <div class="row align-items-center">
              <div class="col-md-6 col-12">
                <h1 class="m-0 ch"><a href="{{ url('business-dashboard') }}" class="">My Jobs</a></h1></div>
            </div>
            <div class="top mt-2 mt-xl-5 mb-xl-1 mb-3">
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
                  <button type="button" class="green-btn">apply/clear</button>
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
                    <th>s.no</th>
                    <th>Job ID</th>
                    <th>Job Title</th>
                    <th>Posted On</th>
                    <th>New Applicants</th>
                    <th>Interested</th>
                    <th>Rejected</th>
                    <th>Apply Before</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="">
                    <td>0</td>
                    <td>#32</td>
                    <td>wqe</td>
                    <td>29 April 2022</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>14 April 2022</td>
                    <td><span style="color: red;">closed</span></td>
                    <td>
                      <div class="btn-group mr-1 mb-1">
                        <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="btn btn-drop-table btn-sm p-2"><i class="fa fa-ellipsis-v"></i></button>
                        <div x-placement="bottom-start" class="dropdown-menu"><a href="/latest_scti/business/candidates/job/32" class="dropdown-item"><i class="fa fa-user-circle"></i>View Candidates</a> <a href="/latest_scti/business/jobs/show/32" class="dropdown-item"><i class="fa fa-eye"></i>View </a> <a href="/latest_scti/business/jobs/32" class="dropdown-item"><i class="fas fa-edit"></i>Edit Status</a> <a href="/latest_scti/business/jobs/edit/32" class="dropdown-item"><i class="fas fa-edit"></i>Edit Job</a></div>
                      </div>
                    </td>
                  </tr>
                  <tr class="border-green-200">
                    <td>1</td>
                    <td>#60</td>
                    <td>abc</td>
                    <td>04 July 2022</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>05 July 2022</td>
                    <td><span style="color: green;">open</span></td>
                    <td>
                      <div class="btn-group mr-1 mb-1">
                        <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="btn btn-drop-table btn-sm p-2"><i class="fa fa-ellipsis-v"></i></button>
                        <div x-placement="bottom-start" class="dropdown-menu"><a href="/latest_scti/business/candidates/job/60" class="dropdown-item"><i class="fa fa-user-circle"></i>View Candidates</a> <a href="/latest_scti/business/jobs/show/60" class="dropdown-item"><i class="fa fa-eye"></i>View </a> <a href="/latest_scti/business/jobs/60" class="dropdown-item"><i class="fas fa-edit"></i>Edit Status</a> <a href="/latest_scti/business/jobs/edit/60" class="dropdown-item"><i class="fas fa-edit"></i>Edit Job</a></div>
                      </div>
                    </td>
                  </tr>
                  <tr class="border-green-200">
                    <td>2</td>
                    <td>#61</td>
                    <td>asd</td>
                    <td>14 July 2022</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>26 July 2022</td>
                    <td><span style="color: green;">open</span></td>
                    <td>
                      <div class="btn-group mr-1 mb-1">
                        <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="btn btn-drop-table btn-sm p-2"><i class="fa fa-ellipsis-v"></i></button>
                        <div x-placement="bottom-start" class="dropdown-menu"><a href="/latest_scti/business/candidates/job/61" class="dropdown-item"><i class="fa fa-user-circle"></i>View Candidates</a> <a href="/latest_scti/business/jobs/show/61" class="dropdown-item"><i class="fa fa-eye"></i>View </a> <a href="/latest_scti/business/jobs/61" class="dropdown-item"><i class="fas fa-edit"></i>Edit Status</a> <a href="/latest_scti/business/jobs/edit/61" class="dropdown-item"><i class="fas fa-edit"></i>Edit Job</a></div>
                      </div>
                    </td>
                  </tr>
                  <!---->
                </tbody>
              </table>
            </div>
            <div class="px-1">
              <div class="row">
                <div class="col-5 align-self-center">
                  <div id="DataTables_Table_0_info" role="status" aria-live="polite" class="dataTables_info">Showing 1 to 3 of 3 entries</div>
                </div>
                <div class="col-7">
                  <div id="DataTables_Table_0_paginate" class="dataTables_paginate paging_simple_numbers">
                    <!---->
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



@endsection