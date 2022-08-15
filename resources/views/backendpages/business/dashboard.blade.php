
@php
    {{ $title =  "Nicholas Rupert - Edit Profile Qa";
    }}
@endphp
@extends('backendpages.business.layouts.main')
@section('main-container')



<section class="bussness-dashboard">
	<div class="container-fluid">
		<div class="row">
			<div class="col-md-10 offset-md-1">
				<div class="mainwrp">
					<div class="row">
						<div class="col-md-12">
							<div class="toptxt">
								<h2>BUSINESS OWNER DASHBOARD</h2>
								<ul>
									<li>
										<div class="topbox-txt">
											<div class="imgwrp">
												<img src="assets/images/d-1.png">
											</div>
											<div class="img-txt">
												<h4>TOTAL ACTIVE <br> JOB</h4>
											</div>
											<h3>47</h3>
										</div>
									</li>
									<li>
										<div class="topbox-txt">
											<div class="imgwrp">
												<img src="assets/images/d-1.png">
											</div>
											<div class="img-txt">
												<h4>TOTAL ACTIVE <br> JOB</h4>
											</div>
											<h3>11</h3>
										</div>
									</li>
								</ul>
								<a class="btn-1" href="{{ url('create-jobs') }}">Create Job</a>
							</div>
							  <div class="maain-tabble table-responsive">
						      <table class="table table-striped table-bordered zero-configuration">
						          <thead>
						              <tr>
						                  <th>s.no</th>
						                  <th>Job Title</th>
						                  <th>Date Posted</th>
						                  <th>New Applicants</th>
						                  <th>Interested</th>
						                  <th>Rejected</th>
						                  <th>Status</th>
						                  <th>Action</th>
						              </tr>
						          </thead>
						          <tbody>
						              <tr class="border-green-200">
						                  <td>0</td>
						                  <td>asd</td>
						                  <td>14 July 2022</td>
						                  <td>0</td>
						                  <td>0</td>
						                  <td>0</td>
						                  <td><span style="color: green;">open</span></td>
						                  <td>
						                      <div class="btn-group mr-1 mb-1">
						                          <button type="button" data-toggle="dropdown" class="btn btn-drop-table btn-sm"><i class="fa fa-ellipsis-v"></i></button>
						                          <div x-placement="bottom-start" class="dropdown-menu">
						                              <a href="" class="dropdown-item"><i class="fa fa-user-circle"></i>View Candidates</a>
						                              <a href="" class="dropdown-item"><i class="fa fa-eye"></i>View Job</a>
						                              <a href="" class="dropdown-item"><i class="fa fa-file-text" aria-hidden="true"></i></i>Edit Job Status</a>
						                              <a href="" class="dropdown-item"><i class="fa fa-file-text" aria-hidden="true"></i></i>Edit Job</a>
						                          </div>
						                      </div>
						                  </td>
						              </tr>
						              <tr class="border-green-200">
						                  <td>1</td>
						                  <td>abc</td>
						                  <td>04 July 2022</td>
						                  <td>0</td>
						                  <td>0</td>
						                  <td>0</td>
						                  <td><span style="color: green;">open</span></td>
						                  <td>
						                      <div class="btn-group mr-1 mb-1">
						                          <button type="button" data-toggle="dropdown" class="btn btn-drop-table btn-sm"><i class="fa fa-ellipsis-v"></i></button>
						                          <div x-placement="bottom-start" class="dropdown-menu">
						                              <a href="" class="dropdown-item"><i class="fa fa-user-circle"></i>View Candidates</a>
						                              <a href="" class="dropdown-item"><i class="fa fa-eye"></i>View Job</a>
						                              <a href="" class="dropdown-item"><i class="fa fa-file-text" aria-hidden="true"></i></i>Edit Job Status</a>
						                              <a href="" class="dropdown-item"><i class="fa fa-file-text" aria-hidden="true"></i></i>Edit Job</a>
						                          </div>
						                      </div>
						                  </td>
						              </tr>
						              <tr class="">
						                  <td>2</td>
						                  <td>wqe</td>
						                  <td>29 April 2022</td>
						                  <td>0</td>
						                  <td>0</td>
						                  <td>0</td>
						                  <td><span style="color: red;">closed</span></td>
						                  <td>
						                      <div class="btn-group mr-1 mb-1">
						                          <button type="button" data-toggle="dropdown" class="btn btn-drop-table btn-sm"><i class="fa fa-ellipsis-v"></i></button>
						                          <div x-placement="bottom-start" class="dropdown-menu">
						                              <a href="" class="dropdown-item"><i class="fa fa-user-circle"></i>View Candidates</a>
						                              <a href="" class="dropdown-item"><i class="fa fa-eye"></i>View Job</a>
						                              <a href="" class="dropdown-item"><i class="fa fa-file-text" aria-hidden="true"></i></i>Edit Job Status</a>
						                              <a href="" class="dropdown-item"><i class="fa fa-file-text" aria-hidden="true"></i></i>Edit Job</a>
						                          </div>
						                      </div>
						                  </td>
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
	</div>
</section>







@endsection