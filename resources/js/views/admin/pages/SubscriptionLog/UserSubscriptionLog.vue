<template>
	<div class="content-wrapper">
		<div class="content-body">
			<!-- Basic form layout section start -->
			<section id="configuration">
				<div class="row">
					<div class="col-12">
						<div class="card rounded pad-20">
							<div class="card-content collapse show">
								<div class="card-body">
									<div class="row">
										<div class="col-12">
											<!-- <h1><a href="users-listing.php"><i class="fa fa-angle-left"></i>Users</a></h1> -->
										</div>
									</div>
									<div class="content-header">
										<h2>Subscription Log</h2>
									</div>

									<div class="top mt-5">

										<div class="row ">
											<div class="col-12">
												<div class="media align-items-center">
													<img :src="subscriptionLog.image" class="img-fluid" alt="">
													<div class="media-body sub-p">
														<h6 class="green">{{subscriptionLog.name}}</h6>
														<h6>User Id: {{subscriptionLog.id}}</h6>
													</div>
												</div>
											</div>
										</div>
										<div class="row mt-4">
											<div class="col-lg-3 col-md-3 col-12 t-c">
												<p class="fieldName">Package Selected</p>
											</div>
											<div class="col-lg-6 col-md-6 col-12 t-c">
												<p class="fieldData">{{(subscriptionLog.subscription_log) ? subscriptionLog.subscription_log[0].packages.package_name : '-'}}</p>

											</div>
										</div>
										<div class="row">
											<div class="col-lg-3 col-md-3 col-12 t-c">
												<p class="fieldName">Subscription Date</p>
											</div>
											<div class="col-lg-6 col-md-6 col-12 t-c">
												<p class="fieldData">{{(subscriptionLog.subscription_log) ? formatDate(subscriptionLog.subscription_log[0].created_at) : '-'}}</p>

											</div>
										</div>
										<div class="row">
											<div class="col-lg-3 col-md-3 col-12 t-c">
												<p class="fieldName">Expired Date</p>
											</div>
											<div class="col-lg-6 col-md-6 col-12 t-c">
												<p class="fieldData">{{(subscriptionLog.subscription_log) ? formatDate(subscriptionLog.expiry_date) : '-'}}</p>

											</div>
										</div>
                                        <!-- <div class="row mb-4">
                                            <div class="col-lg-3 col-md-3 col-12 t-c">
                                                <p class="fieldName">Next Renewal Package</p>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-12 t-c">
                                                <p class="fieldData">Super</p>

                                            </div>
                                        </div> -->


                                        <div class="row">
                                        	<div class="col-12">
                                        		<label for="">sort by :</label>
                                        	</div>
                                        </div>
                                        <div class="row">
                                        	<div class="col-xl-2 col-md-4 col-sm-6 col-12">
												 <date-picker v-model="from" name="from" valueType="format"></date-picker>
                                        		<!-- <input type="text" id="datepicker-2" placeholder="From"> -->
                                        	</div>
                                        	<div class="col-xl-2 col-md-4 col-sm-6 col-12">
												 <date-picker v-model="to" name="to" valueType="format"></date-picker>
                                        		<!-- <input type="text" id="datepicker-3" placeholder="To"> -->
                                        	</div>
                                        	<div class="col-xl-2 col-md-4 col-12">
                                        		<!-- <button type="button" class="green-btn w-100">apply/clear</button> -->
												<button @click='getUserDetail()' type="button" class="green-btn w-100">
                                                    apply/clear
                                                </button>
                                        	</div>
                                        </div>
                                    </div>


                                    <div class="clearfix"></div>
                                    <div class="maain-tabble table-responsive">
                                    	<table class="table table-striped table-bordered zero-configuration">
                                    		<thead>
                                    			<tr>
                                    				<!-- <th>s.no</th> -->
                                    				<th>Subscription Date</th>
                                    				<th>Package Type</th>
                                    				<th>Last Renewal Date</th>
                                    				<th>Expire Date</th>
                                    				<th>Charges</th>
                                    				<th>Status</th>
                                    			</tr>
                                    		</thead>
                                    		<tbody>
                                    			<tr v-for="subscription in subscriptionLog.subscription_log">
                                    				<!-- <td>01</td> -->
                                    				<td>{{formatDate(subscription.created_at)}}</td>
                                    				<td>{{subscriptionLog.name}}</td>
                                    				<td>{{subscription.packages.package_name}}</td>
                                    				<td>{{formatDate(subscription.expiry_date)}}</td>
                                    				<td>{{subscription.charges}}</td>
                                    				<td>{{(subscription.active) ? 'active': 'In-active'}}</td>

                                    			</tr>
                                    			<tr v-if="typeof subscriptionLog.subscription_log == 'undefined' || subscriptionLog.subscription_log.length == 0">
                                    				<td colspan="8">
                                    					No Data Available
                                    				</td>
                                    			</tr>
                                    		</tbody>
											<!-- <tbody>
                                    			<tr v-for="subscription in subscriptionLogfilter.subscription_log">
                                    				<td>01</td>
                                    				<td>{{formatDate(subscription.created_at)}}</td>
                                    				<td>{{subscriptionLogfilter.name}}</td>
                                    				<td>{{subscription.packages.package_name}}</td>
                                    				<td>{{formatDate(subscription.expiry_date)}}</td>
                                    				<td>{{subscription.charges}}</td>
                                    				<td>{{(subscription.active) ? 'active': 'In-active'}}</td>

                                    			</tr>
                                    			<tr v-if="typeof subscriptionLogfilter.subscription_log == 'undefined' || subscriptionLogfilter.subscription_log.length == 0">
                                    				<td colspan="8">
                                    					No Data Available
                                    				</td>
                                    			</tr>
                                    		</tbody> -->
                                    	</table>
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
<script>
	export default{
		data() {
			return {
				subscriptionLog: {},
				// subscriptionLogfilter: {},
				from : '',
				to : '',
			};
		},
		async created() {
			await this.getProfile();
			//  await this.getUserDetail();
		},
		methods: {
			async getProfile() {
				this.subscriptionLog = (await axios.get(`/api/admin/getProfile/${this.$route.params.id}`)).data;
				console.log(this.$route.params.id);
			},

			

		// 	   async getUsers(page = 1) {
        //     let res = (await axios.get('/api/admin/getUser?page=' + page + '&entries=' + this.entries + '&from=' + this.from + '&to=' + this.to + "&user_role=" + this.user_role));
        //     console.log(res.data);
        //     this.users = res.data;
        //     console.log(this.users.data);
        // },
		}

	};


</script>