<template>
	<div>
		<register-header></register-header>
		<section class="create-cv">
			<div class="container">
				<div class="row mt-5 mb-2">
					<div class="col-12 d-flex align-items-center job-head">
						<router-link :to="{name: 'user.job.show'}" class="back-a"><i class="fa fa-arrow-left" aria-hidden="true"></i> Back</router-link>
						<p class="page-heading">Company Info</p>

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
												<label class="c-light">Company Name</label>
												<p class="reg-p">{{joblogs.user.name}}</p>
												<!-- <p class="reg-p">{{joblogs.category.category_name}}</p> -->
											</div>

										</div>
										<div class="col-lg-4 col-md-6 col-12">

											<div class="form-group">
												<label class="c-light">Company Email</label>
												<p class="reg-p">{{joblogs.user.email}}</p>

											</div>

										</div>
									</div>

									<div class="form-row">
										<div class="col-lg-4 col-md-6 col-12">
											<div class="form-group">
												<label class="c-light">Company Address</label>
												<p class="reg-p">{{joblogs.user.address}}</p>

											</div>
										</div>
										<div class="col-lg-4 col-md-6 col-12">
											<div class="form-group">
												<label class="c-light">Company Bio</label>
												<p class="reg-p"><i class=""></i> {{joblogs.user.bio}}</p>
											</div>
										</div>
									</div>

									<div class="form-row">
										<div class="col-lg-4 col-md-6 col-12">
											<div class="form-group">
												<label class="c-light">Company Vision</label>
												<p class="reg-p">{{joblogs.user.vision}}</p>

											</div>
										</div>
										<div class="col-lg-4 col-md-6 col-12">
											<div class="form-group">
												<label class="c-light">No Of Employees</label>
												<p class="reg-p">{{formatDate(joblogs.user.no_of_employees)}}</p>

											</div>
										</div>
									</div>
								
								</div>




							</div>

								
						</form>
						</div>
					</div>
				</div>
			</section>



			<inner-page-footer></inner-page-footer>
		</div>
	</template>

	
	<script>

		
		const InnerPageFooter = () => import('../../components/InnerPageFooter.vue');
		const RegisterHeader = () => import('../../components/RegisterHeader.vue');
		const ChatComponent = () => import('../../chat/ChatComponent.vue');
		export default {
			created() {
			},
			components: {
				InnerPageFooter,
				RegisterHeader,
				ChatComponent
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
					console.log(this.joblogs);
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