<template>
	<div>
		<register-header></register-header>
		<section class="create-cv">
			<div class="container">
				<div class="row mt-5 mb-2">
					<div class="col-12 d-flex align-items-center job-head">
						<router-link :to="{name: 'user.users.dashboard'}" class="back-a"><i class="fa fa-arrow-left" aria-hidden="true"></i> Back</router-link>
						<p class="page-heading">View Job</p>

					</div>
				</div>
				<div class="row mt-2">
					<div class="col-12">
						<form id="msform" action="" class="create-cv">
							<div class="card cv-create-card">

								<div class="card-header cv-header">
									<p>Personal Information</p>
								</div>
								<div class="card-body cv-card-body">

									<div class="form-row">
										<div class="col-lg-4 col-md-6 col-12">

											<div class="form-group">
												<label class="c-light">Job Category</label>
												<p class="reg-p">{{joblogs.category.category_name}}</p>
											</div>

										</div>
										<div class="col-lg-4 col-md-6 col-12" >

											<div class="form-group">
												<label class="c-light">Job Name</label>
												<p class="reg-p">{{joblogs.job_title}}</p>

											</div>

											

										</div>
									</div>

									<div class="form-row">
										<div class="col-lg-4 col-md-6 col-12">
											<div class="form-group">
												<label class="c-light">Company Name</label>
												<p class="reg-p">{{joblogs.user.name}}</p>

											</div>
										</div>
										<div class="col-lg-4 col-md-6 col-12">
											<div class="form-group">
												<label class="c-light">Salary Range</label>
												<p class="reg-p"><i class="fa fa-euro"></i> {{joblogs.salary_range}}</p>
											</div>
										</div>
									</div>

									<div class="form-row">
										<div class="col-lg-4 col-md-6 col-12">
											<div class="form-group">
												<label class="c-light">Posted On</label>
												<p class="reg-p">{{formatDate(joblogs.created_at)}}</p>

											</div>
										</div>
										<div class="col-lg-4 col-md-6 col-12">
											<div class="form-group">
												<label class="c-light">Apply Before</label>
												<p class="reg-p">{{formatDate(joblogs.apply_before)}}</p>

											</div>
										</div>

										<div class="col-lg-4 col-md-4 col-12">
											<div class="form-group">
												<label class="c-light">Employee Benefits</label>
												<br>
												<p class="reg-p" v-for="(item,index) in joblogs.job_benefits">{{item.employee_benefits}}</p>	
											</div>
										</div>
									</div>

									<div class="form-row">
										<div class="col-lg-4 col-md-6 col-12">
											<div class="form-group">
												<label class="c-light">Period Employment</label>
												<p class="reg-p">{{joblogs.period_of_employment}}</p>

											</div>
										</div>
										<div class="col-lg-4 col-md-4 col-12">
											<div class="form-group">
												<label class="c-light">Remote</label>
												<p class="reg-p">{{(joblogs.remote=='true') ? 'Yes' : 'No'}}</p>

											</div>
										</div>
										<div class="col-lg-4 col-md-4 col-12">
											<div class="form-group">
												<label class="c-light">Company Info</label>
												<br>
												<router-link :to="{name: 'user.job.company_info'}" class="back-a"><i class="" aria-hidden="true"></i> Link</router-link>
											</div>
										</div>
									</div>
									<div class="form-row" v-if="joblogs.file != null">
										<div class="col-lg-6 col-md-6 col-12">
												<video width="100%" height="100%" controls
														class="job-video" :src="joblogs.file">
													<source src="movie.mp4" type="video/mp4">
													<source src="movie.ogg" type="video/ogg">
													Your browser does not support the video tag.
												</video>
											</div>
										</div>

									</div>

									<div id="accordion">
										<div class="card-header cv-header br-0 " id="headingOne" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
											<p>Address Details</p>
											<i class="fa fa-angle-down" aria-hidden="true"></i>
										</div>

										<div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
											<div class="card-body cv-card-body">
												<div class="form-row">
													<div class="col-lg-4 col-md-6 col-12">

														<div class="form-group">
															<label class="c-light">Address Details</label>
															<p class="reg-p">{{joblogs.address}}</p>
														</div>

													</div>
													<div class="col-lg-4 col-md-6 col-12">

														<div class="form-group">
															<label class="c-light">Country</label>
															<p class="reg-p">{{joblogs.country}}</p>

														</div>

													</div>
												</div>

												<div class="form-row">
													<div class="col-lg-4 col-md-6 col-12">
														<div class="form-group">
															<label class="c-light">State</label>
															<p class="reg-p">{{joblogs.state}}</p>

														</div>
													</div>
													<div class="col-lg-4 col-md-6 col-12">
														<div class="form-group">
															<label class="c-light">City</label>
															<p class="reg-p">{{joblogs.city}}</p>

														</div>
													</div>
												</div>
												<div class="form-row">
													<div class="col-lg-4 col-md-6 col-12">
														<div class="form-group">
															<label class="c-light">Post code</label>
															<p class="reg-p">{{joblogs.zip_code}}</p>

														</div>
													</div>

												</div>

											</div>
										</div>

										<div class="card-header cv-header br-0 " id="headingTwo" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
											<p>Job Responsibilities</p>
											<i class="fa fa-angle-down" aria-hidden="true"></i>
										</div>

										<div id="collapseTwo" class="collapse show" aria-labelledby="headingTwo" data-parent="#accordion">
											<div class="card-body cv-card-body">
												<div class="form-row">
													<div class="col-12">
														<div class="form-group">
															<label class="c-light">Job Description</label>
															<p class="reg-p">{{joblogs.job_descriptions}}</p>
														</div>
													</div>
												</div>
											</div>
										</div>

										<div class="card-header cv-header br-0 " id="headingThree" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
											<p>Experience Information</p>
											<i class="fa fa-angle-down" aria-hidden="true"></i>
										</div>

										<div id="collapseThree" class="collapse show" aria-labelledby="headingThree" data-parent="#accordion">
											<div class="card-body cv-card-body">
												<div class="form-row">
													<div class="col-lg-4 col-md-6 col-12">

														<div class="form-group">
															<label class="c-light">Years of Experience Needed</label>
															<p class="reg-p">{{joblogs.years_of_experience}}</p>
														</div>

													</div>
													<div class="col-lg-4 col-md-6 col-12">

														<div class="form-group">
															<label class="c-light">Degree Requirements</label>
															<p class="reg-p">{{joblogs.degree}}</p>

														</div>

													</div>
												</div>
												<div class="form-row">
													<div class="col-12">

														<div class="form-group">
															<label class="c-light">Skills</label>
															<p class="reg-p">{{joblogs.skill}}</p>
														</div>

													</div>
												</div>
											</div>

										</div>
									</div>



								</div>

									<router-link class="btn-cv bloo mr-0"  :to="{name: 'user.chat.view', params:{id:this.job_user_id}}">Chat</router-link>																						
								<div class="form-row" v-if="packageBooleanTrial">
									<div class="col-12">
										<div class="button_wrap">
											<button type="button"  :style="applied ? `display:block` : `display:none`" class="btn-cv bloo mr-0" data-toggle="modal" data-target="#question">Apply</button>
										</div>
									</div>
								</div>
								<div class="row" v-else>
									<div class="col-12">
									<div class="expiry-alert" v-if="!packageBooleanTrial">
										<i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
										<p>Your are in trial version. Please update your package for apply to any job! </p>
									</div>
								</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
			<package-model :data="joblogs.job_smart_question"></package-model>
			<inner-page-footer></inner-page-footer>
		</div>
	</template>

	
	<script>

		
		const InnerPageFooter = () => import('../../components/InnerPageFooter.vue');
		const RegisterHeader = () => import('../../components/RegisterHeader.vue');
		const ChatComponent = () => import('../../chat/ChatComponent.vue');
		const PackageModel = () => import('./packageModel');
		export default {
			created() {
			},
			components: {
				InnerPageFooter,
				RegisterHeader,
				ChatComponent,
				PackageModel
			},
			data() {
				return {
					joblogs: {},
					applied: true,
					user_id : '',
					job_user_id : '',
					packageBooleanTrial: 0,
				}
			},
			async created() {
				await this.getJobLogs();
				await this.checkAppliedJob();
				this.packageBooleanTrial = localStorage.getItem('packageBooleanTrial');
			},
			methods: {
				async getJobLogs() {
					let res = (await axios.get(`api/admin/candidate/job/${this.$route.params.id}`));
					this.joblogs = res.data.data[0];
					console.log("jobslog is",this.joblogs);
					this.user_id = this.joblogs.user_id; 
					this.job_user_id = this.joblogs.user.uuid;

					this.$snotify.success('Job fetch successfully');
				},
				async appliedJob(){
					let res = (await axios.get(`api/user/job/${this.$route.params.id}/user`));
				
					this.applied = false;
					if(res.data.status=='Failed'){
							
						this.$snotify.warning(res.data.message);
					}else{
						this.$snotify.success(res.data.message);
					}
				},
				async chat_start(){
					
					console.log(this.user_id);					
					console.log(this.job_user_id);					
					let res = (await axios.get(`api/user/job_chat/${this.job_user_id}`));

				},
				async checkAppliedJob(){
					let res = (await axios.get(`api/admin/job/${this.$route.params.id}/candidate/user`));
					if(res.data){
						this.applied = false;
					};
					// this.$snotify.success(res.data.message);
				},

			}

		}

	</script>