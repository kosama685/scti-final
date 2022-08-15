<template>
	<div class="content-wrapper">
		<div class="content-body"> 
			<!-- Basic form layout section start -->
			<section id="configuration" class="search view-cause">
				<div class="row">
					<div class="col-12">
						<div class="card rounded pad-20">
							<div class="card-content collapse show">
								<div class="card-body  card-dashboard">
									<div class="row">
										<div class="col-md-12 col-12">
											<h1 class="pull-left u-m">
												<a class="arrow-left" href="a-user-listing.html">
													<i class="fa fa-chevron-left"></i>
												</a>
											Users</h1>
										</div>
										
									</div>
									
                  <!-- <div class="row mt-2 filter-main justify-content-between">
                    <div class="col-12">
                      <label>Sort By:</label>
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-12  form-group">
                      <div class="row">
                        
                        <div class="col-lg-6 col-md-6 col-sm-6">
                          <label for="">To:</label>
                          <div class="input-date"><input id="select-date"></div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6">
                          <label for="">From:</label>
                          <div class="input-date" ><input id="select-date2"> </div>
                        </div>
                      </div>
                    </div>
                    
                </div> -->
                <ul class="nav nav-tabs  tabs-wrapper">
                	<li class="nav-item">
                		<a class="nav-link border-top-0 border-left-0 border-right-0 active" data-toggle="tab" href="#received">Recieved</a>
                	</li>
                	<li class="nav-item">
                		<a class="nav-link border-top-0 border-left-0 border-right-0" data-toggle="tab" href="#rejected">Rejected</a>
                	</li>
                	
                </ul>
                <div class="tab-content" id="myTabContent">

                	<div class="tab-pane fade show active" id="received" role="tabpanel" aria-labelledby="home-tab">
                		<h2 class="v-c">Verification Requests</h2>
                		<div class="maain-tabble table-responsive">
                			<table class="table table-striped table-bordered zero-configuration">
                				<thead>
                					<tr>
                						<th>S.no</th>
                						<th>Verification Request Id</th>
                						<th>Username</th>
                						<th>Email</th>
                						
                						<th>Action</th>
                						
                					</tr>
                				</thead>
                				<tbody>
                					<tr>
                						<td>01</td>
                						<td>2131</td>
                						<td>John Williams</td>
                						<!-- <td><span data-toggle="popover" data-content="johny" class="circle" style="background: #f61454;">M</span>Mark William</td> -->

                						<td>john.william@gmail.com</td>
                						
                						
                						<td>
                							<div class="btn-group mr-1 mb-1">
                								<button type="button" class="btn  btn-drop-table btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="fa fa-ellipsis-v"></i></button>
                								<div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(4px, 23px, 0px); top: 0px; left: 0px; will-change: transform;">
                									<a class="dropdown-item" href="a-view-user-verification.html"><i class="fa fa-eye"></i>View</a>
                									
                								</div>
                							</div>
                						</td>
                					</tr>
                					
                					<tr>
                						<td>01</td>
                						<td>2131</td>
                						<td>John Williams</td>
                						<!-- <td><span data-toggle="popover" data-content="johny" class="circle" style="background: #f61454;">M</span>Mark William</td> -->
                						
                						<td>john.william@gmail.com</td>
                						
                						
                						<td>
                							<div class="btn-group mr-1 mb-1">
                								<button type="button" class="btn  btn-drop-table btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="fa fa-ellipsis-v"></i></button>
                								<div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(4px, 23px, 0px); top: 0px; left: 0px; will-change: transform;">
                									<a class="dropdown-item" href="a-view-user-verification.html"><i class="fa fa-eye"></i>View</a>
                								</div>
                							</div>
                						</td>
                					</tr>
                					<tr>
                						<td>01</td>
                						<td>2131</td>
                						<td>John Williams</td>
                						<!-- <td><span data-toggle="popover" data-content="johny" class="circle" style="background: #f61454;">M</span>Mark William</td> -->
                						
                						<td>john.william@gmail.com</td>
                						
                						
                						<td>
                							<div class="btn-group mr-1 mb-1">
                								<button type="button" class="btn  btn-drop-table btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="fa fa-ellipsis-v"></i></button>
                								<div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(4px, 23px, 0px); top: 0px; left: 0px; will-change: transform;">
                									<a class="dropdown-item" href="a-view-user-verification.html"><i class="fa fa-eye"></i>View</a>
                								</div>
                							</div>
                						</td>
                					</tr>
                					

                				</tbody>
                				
                			</table>
                			
                		</div>
                	</div>
                	<div class="tab-pane fade" id="rejected" role="tabpanel" aria-labelledby="home-tab">
                		<h2 class="v-c">Verification Requests</h2>
                		<div class="maain-tabble table-responsive">
                			<table class="table table-striped table-bordered zero-configuration">
                				<thead>
                					<tr>
                						<th>S.no</th>
                						<th>Verification Request Id</th>
                						<th>Username</th>
                						<th>Email</th>
                						
                						<th>Action</th>
                						
                					</tr>
                				</thead>
                				<tbody>
                					<tr>
                						<td>01</td>
                						<td>2131</td>
                						<td>John Williams</td>
                						<!-- <td><span data-toggle="popover" data-content="johny" class="circle" style="background: #f61454;">M</span>Mark William</td> -->

                						<td>john.william@gmail.com</td>
                						
                						
                						<td>
                							<div class="btn-group mr-1 mb-1">
                								<button type="button" class="btn  btn-drop-table btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="fa fa-ellipsis-v"></i></button>
                								<div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(4px, 23px, 0px); top: 0px; left: 0px; will-change: transform;">
                									<a class="dropdown-item" href="a-view-rejected-user.html"><i class="fa fa-eye"></i>View</a>
                									
                								</div>
                							</div>
                						</td>
                					</tr>
                					
                					<tr>
                						<td>01</td>
                						<td>2131</td>
                						<td>John Williams</td>
                						<!-- <td><span data-toggle="popover" data-content="johny" class="circle" style="background: #f61454;">M</span>Mark William</td> -->

                						<td>john.william@gmail.com</td>
                						
                						
                						<td>
                							<div class="btn-group mr-1 mb-1">
                								<button type="button" class="btn  btn-drop-table btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="fa fa-ellipsis-v"></i></button>
                								<div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(4px, 23px, 0px); top: 0px; left: 0px; will-change: transform;">
                									<a class="dropdown-item" href="a-view-rejected-user.html"><i class="fa fa-eye"></i>View</a>
                								</div>
                							</div>
                						</td>
                					</tr>
                					<tr>
                						<td>01</td>
                						<td>2131</td>
                						<td>John Williams</td>
                						<!-- <td><span data-toggle="popover" data-content="johny" class="circle" style="background: #f61454;">M</span>Mark William</td> -->

                						<td>john.william@gmail.com</td>
                						
                						
                						<td>
                							<div class="btn-group mr-1 mb-1">
                								<button type="button" class="btn  btn-drop-table btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="fa fa-ellipsis-v"></i></button>
                								<div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(4px, 23px, 0px); top: 0px; left: 0px; will-change: transform;">
                									<a class="dropdown-item" href="a-view-rejected-user.html"><i class="fa fa-eye"></i>View</a>
                								</div>
                							</div>
                						</td>
                					</tr>
                					

                				</tbody>
                				
                			</table>
                			
                		</div>
                	</div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</section>
</div>
</div>
</template>