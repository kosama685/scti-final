<template>
	<div>
		<register-header></register-header>

		<section class="create-cv">

			<div class="container">
				<div class="row mt-5 mb-2">
					<div class="col-12 d-flex align-items-center justify-content-between top-head">
						<router-link :to="{name: 'user.users.dashboard'}" class="back-a"><i class="fa fa-arrow-left" aria-hidden="true"></i> Back</router-link>
						<p class="page-heading">View CV</p>
						<button @click="deleteCv()" class="trash-a" data-toggle="modal" data-target="#delete-cv"><i class="fa fa-trash-o" aria-hidden="true"></i></button>

					</div>
				</div>
				<div class="row mt-2">
					<div class="col-12">

						<div class="card cv-create-card">

							<div class="card-header cv-header">
								<p>Personal Information</p>
							</div>
							<div class="card-body cv-card-body">

								<div class="form-row">
									<div class="col-lg-4 col-md-6 col-12">

										<div class="form-group">
											<label class="c-light">First Name</label>
											<p class="reg-p">{{cv.first_name}}</p>
										</div>

									</div>
									<div class="col-lg-4 col-md-6 col-12">

										<div class="form-group">
											<label class="c-light">Last Name</label>
											<p class="reg-p">{{cv.last_name}}</p>

										</div>

									</div>
									<div class="col-lg-4 col-md-6  col-12">
										<div class="form-group">
											<label class="c-light">Date Of Birth</label>
											<p class="reg-p">{{formatDate(cv.dob)}}</p>

										</div>
									</div>
								</div>

								<div class="form-row">
									<div class="col-lg-4 col-md-6 col-12">
										<div class="form-group">
											<label class="c-light">Phone Number</label>
											<p class="reg-p">{{cv.phone_number}}</p>

										</div>
									</div>
									<div class="col-lg-4 col-md-6 col-12">
										<div class="form-group">
											<label class="c-light">Email Address</label>
											<p class="reg-p">{{cv.email}}</p>

										</div>
									</div>
								</div>
								<div class="form-row">
									<div class="col-12">
										<div class="form-group">
											<label class="c-light">Profession</label>
											<p class="reg-p">{{cv.profession}}</p>
										</div>
									</div>
								</div>
							</div>

							<div id="accordion">
								<div class="card-header cv-header br-0 " id="headingOne" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
									<p>Experience Information</p>
									<i class="fa fa-angle-down" aria-hidden="true"></i>
								</div>

								<div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
									<div class="card-body cv-card-body" v-for="experience in cv.experience">

										<div class="form-row">
											<div class="col-lg-4 col-md-6 col-12">

												<div class="form-group">
													<label class="c-light">Job Title</label>
													<p class="reg-p">{{experience.job_title}}</p>
												</div>

											</div>
											<div class="col-lg-4 col-md-6 col-12">

												<div class="form-group">
													<label class="c-light">Company Name</label>
													<p class="reg-p">{{experience.company_name}}</p>
												</div>

											</div>
											<div class="col-lg-4 col-md-6  col-12">
												<div class="form-group">
													<label class="c-light">Job Type</label>
													<p class="reg-p">{{experience.job_type}}</p>
												</div>
											</div>
										</div>

										<div class="form-row">
											<div class="col-lg-4 col-md-6 col-12">
												<div class="form-group">
													<label class="c-light">Start Date</label>
													<p class="reg-p">{{formatDate(experience.start_date)}}</p>
												</div>
											</div>
											<div class="col-lg-4 col-md-6 col-12">
												<div class="form-group">
													<label class="c-light">End Date</label>
													<p class="reg-p">{{formatDate(experience.end_date)}}</p>
												</div>
											</div>
										</div>
										<div class="form-row">
											<div class="col-12">
												<div class="form-group">
													<label class="c-light">Job Description</label>
													<p class="reg-p">{{experience.description}}</p>
												</div>
											</div>
										</div>

									</div>
								</div>







								<div class="card-header cv-header br-0 " id="card_two" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
									<p>Educational Details</p>
									<i class="fa fa-angle-down" aria-hidden="true"></i>
								</div>

								<div id="collapseTwo" class="collapse show" aria-labelledby="card_two" data-parent="#accordion">
									<div class="card-body cv-card-body" v-for="education in cv.education">

										<div class="form-row">
											<div class="col-lg-4 col-md-6 col-12">

												<div class="form-group">
													<label class="c-light">Highest Degree</label>
													<p class="reg-p">{{education.degree}}</p>
												</div>

											</div>
											<div class="col-lg-4 col-md-6 col-12">

												<div class="form-group">
													<label class="c-light">Subject</label>
													<div class="tag-wrapper">
														<span class="cv-tags">{{education.subject}}</span>
													</div>
												</div>

											</div>
											<div class="col-lg-4 col-md-6 col-12">
												<div class="form-group">
													<label class="c-light">Institute Name</label>
													<p class="reg-p">{{education.institute_name}}</p>
												</div>
											</div>
										</div>

										<div class="form-row">
											<div class="col-lg-4 col-md-6 col-12">
												<div class="form-group">
													<label class="c-light">Start Date</label>
													<p class="reg-p">{{formatDate(education.start_date)}}</p>
												</div>
											</div>
											<div class="col-lg-4 col-md-6 col-12">
												<div class="form-group">
													<label class="c-light">End Date</label>
													<p class="reg-p">{{formatDate(education.end_date)}}</p>

												</div>
											</div>
										</div>


									</div>
								</div>





								<div class="card-header cv-header br-0 " id="card_three" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
									<p>Interest & Skills</p>
									<i class="fa fa-angle-down" aria-hidden="true"></i>
								</div>

								<div id="collapseThree" class="collapse show" aria-labelledby="card_three" data-parent="#accordion">
									<div class="card-body cv-card-body">

										<div class="form-row">
											<div class="col-xl-12">

												<div class="form-group">
													<label class="c-light">Subject</label>
													<div class="tag-wrapper">
														<span class="cv-tags">{{cv.interest_subject}}</span>
													
													</div>

												</div>

											</div>

										</div>

										<div class="form-row">
											<div class="col-12">
												<div class="form-group">
													<label class="c-light">Interest</label>
													<p class="reg-p">{{cv.interest_desc}}</p>
												</div>
											</div>
											<div class="col-lg-12">
												<div class="form-group">
													<label class="c-light">Language</label>
													<div class="tag-wrapper">
														<span class="lng-tag">{{cv.lang}}</span>                                                </div>

													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="form-row">
									<div class="col-12">
										<div class="button_wrap text-center">
											<router-link :to="{name : 'user.cvBiulder.edit'}" class="btn-cv bloo">Edit</router-link>
										</div>
									</div>
								</div>
							</div>
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
		export default {
			data() {
				return {
					cv: {}
				};
			},
			components: {
				InnerPageFooter,
				RegisterHeader,
			},
			async created() {
				await this.getProfile();
			},
			methods: {
				async getProfile() {
					this.cv = (await axios.get('/api/user/cv')).data.data;
				},
				async deleteCv(){
				let response = await axios.get('/api/user/cv/delete');
                if (response.data.data) {
                    this.$snotify.success(response.data.message)
                    let self = this;
                    setTimeout(function () {
                        self.$router.push({name: 'user.cvBiulder.create'});
                    }, 1000);
                } else {
                    this.$snotify.error(response.data.message)

                }
				}
			}

		};
	</script>