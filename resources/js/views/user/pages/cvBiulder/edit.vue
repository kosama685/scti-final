<template>
	<div>
		<register-header></register-header>
		<section class="create-cv">

			<div class="container">
				<div class="row mt-5 mb-2">
					<div class="col-12 d-flex align-items-center justify-content-between top-head">
						<router-link :to='{name: "user.cvBiulder.view"}' class="back-a"><i class="fa fa-arrow-left" aria-hidden="true"></i> Back</router-link>
						<p class="page-heading">Edit CV</p>
						<!-- <a href="" class="trash-a" data-toggle="modal" data-target="#delete-cv"><i class="fa fa-trash-o" aria-hidden="true"></i></a> -->

					</div>
				</div>
				<div class="row mt-2">
					<div class="col-12">
						<form id="msform" :action="download_base_url" class="create-cv">
							<div class="card cv-create-card">

								<div class="card-header cv-header">
									<p>Personal Information</p>
								</div>
								<div class="card-body cv-card-body">

									<div class="form-row">
										<div class="col-xl-4 col-lg-6 col-12">

											<div class="form-group">
												<label for="fName">First Name</label>
												<input type="text" class="form-control reg-input" id="fName" v-model="cv.first_name" placeholder="Enter First Name">
											</div>

										</div>
										<div class="col-xl-4 col-lg-6 col-12">

											<div class="form-group">
												<label for="lName">Last Name</label>
												<input type="text" class="form-control reg-input" id="lName" v-model="cv.last_name" placeholder="Enter Last Name">
											</div>

										</div>
										<div class="col-xl-4 col-lg-12 col-12">
										<br>
											<div class="form-group">
												<label for="dob-picker">Date Of Birth</label>
												<input type="date" v-model="cv.dob" name="dob" >	
												<!-- <input type="date" id="strt_date" class="u-edit-txt" valueType="format"  v-model="cv.dob" name="dob"> -->
												 <!-- <date-picker id="strt_date"  valueType="format"  v-model="cv.dob" name="dob"  ></date-picker> -->
												<!-- <input type="text" class="form-control reg-input" id="dob-picker" v-model="cv.dob" placeholder="Enter Date Of Birth"> -->
											</div>
										</div>
									</div>

									<div class="form-row">
										<div class="col-lg-6 col-12">
											<div class="form-group">
												<label for="phone">Phone Number</label>
												<input type="text" class="form-control reg-input" id="phone" v-model="cv.phone_number" placeholder="Enter Phone Number">
											</div>
										</div>
										<div class="col-lg-6 col-12">
											<div class="form-group">
												<label for="email">Email Address</label>
												<input type="text" class="form-control reg-input" id="email" v-model="cv.email" placeholder="Enter Email Address">
											</div>
										</div>
									</div>
									<div class="form-row">
										<div class="col-12">
											<div class="form-group">
												<label>Profession</label>
												<textarea name="" id="" cols="30" rows="10" v-model="cv.profession"></textarea>
											</div>
										</div>
									</div>
								</div>

								<div id="accordion">

									 <experience-component ref="experience"  :propExperiences="cv.experience"></experience-component>
									
									<education-component ref="education" :prop-educations="cv.education"></education-component>
								

									<div class="card-header cv-header br-0 " id="card_three" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
										<p>Interest & Skills</p>
										<i class="fa fa-angle-down" aria-hidden="true"></i>
									</div>

									<div id="collapseThree" class="collapse show" aria-labelledby="card_three" data-parent="#accordion">
										<div class="card-body cv-card-body">

											<div class="form-row">
												<div class="col-xl-12">

													<div class="form-group">
														<label for="sub_interest">Skill</label>
														<select id="sub_interest" class="form-control reg-input" v-model="cv.interest_subject" name="sub[]" multiple="multiple">
															<option value="AL">Painting</option>
															<option value="WY">Reading</option>
														</select>
														<!-- <input type="text" class="form-control reg-input" id="sub" placeholder="Enter Company Name"> -->
													</div>

												</div>

											</div>

											<div class="form-row">
												<div class="col-12">
													<div class="form-group">
														<label>Interest</label>
														<textarea name="" id="" cols="30" rows="10"></textarea>
													</div>
												</div>
												<!-- <div class="col-lg-12">
													<div class="form-group">
														<label for="lang">Language</label>
														<input type="text" v-model="cv.lang" class="form-control reg-input" id="lang">

													</div>
												</div> -->
											</div>
										</div>
									</div>
								</div>
								<div class="form-row">
									<div class="col-12">
										<div class="button_wrap">
											<!-- <a href="view-cv.php" class="btn-cv gray">Preview</a>
											<a href="cv-template.php" class="btn-cv black">Change Template</a> -->
											<button type="button" @click="EditProfile()" class="btn-cv bloo blue-btn">Save & Download</button>
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
	const ExperienceComponent = () => import('./components/experience.vue');
    const EducationComponent = () => import('./components/education.vue');
	export default {
		data() {
			return {
				download_base_url : null,
				cv: {},
				institute_name: '',
				subjects: '',
				interest_subjects: ['Painting','Reading'],
				selected_institute: '',
				selected: [],
				interest_selected: [],
			};
		},
		components: {
			InnerPageFooter,
			RegisterHeader,
			ExperienceComponent,
            EducationComponent,
		},
		async created() {
			this.download_base_url = `${window.base_url}/api/user/cv/update`;
			await this.getProfile();
		},
		methods: {
			async getProfile() {
				this.cv = (await axios.get('/api/user/cv')).data.data;
			},
			async download(){
            let userId = localStorage.getItem('userId');
            let urlPath = `${window.base_url}/api/user/downloadReume/${userId}`;
            //alert(urlPath); 
            let form = document.createElement('form');
            form.setAttribute('method','GET');
            form.setAttribute('action', urlPath);
            document.body.appendChild(form);
            form.submit();
            // await axios.post(route('web.resume.download',template),{is_saved : 1});
          },
			async EditProfile() {
                // let fd = new FormData(this.$refs.EditProfileForm);
                // console.log();
                // fd.append('interest_selected',this.interest_selected);
                // fd.append('experiences',JSON.stringify(this.$refs.experience.experiences));
                // fd.append('educations',JSON.stringify(this.$refs.education.educations));
                /*let form = document.createElement('form');
                form.setAttribute('action', `${window.base_url}/api/user/cv/update`);
	            document.body.appendChild(form);
	            form.submit();*/
                 let response = await axios.post('/api/user/cv/update', this.cv);
                if (response.data.data) {
                    this.$snotify.success(response.data.message)
                    let self = this;
                    this.download();
                    setTimeout(function () {
                        self.$router.push({name: 'user.cvBiulder.view'});
                    }, 1000);

                } else {
                    this.$snotify.error(response.data.message)

                }
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
<style type="text/css">
.vs__selected{
    background-color: #e2e2e2;
    border: 1px solid transparent;
    border-radius: 10px 10px 0px 10px;
    cursor: default;
    float: left;
    margin-right: 5px;
    margin-top: 5px;
    padding: 0 5px;
    color: #5c5e5f;
    font-family: 'Jost';
    margin-right: 15px;
    position: relative;
}
.vs--searchable .vs__dropdown-toggle{
    border: 2px solid #ebe6e6;
    margin-bottom: 10px;
    width: 100%;
    box-sizing: border-box;
    line-height: 25px;
    font-size: 15px;
    color: #c9c8c8;
    height: 50px;
    border-radius: 5px 25px 0px 5px;
    -webkit-box-shadow: 0px 0px 12px 1px rgb(0 0 0 / 15%);
    -moz-box-shadow: 0px 0px 12px 1px rgba(0, 0, 0, 0.15);
    box-shadow: 0px 0px 8px -2px rgb(0 0 0 / 15%);
    font-family: 'Jost';
}
.vs__deselect{
    position: absolute;
    top: -4px;
    right: -10px;
    background: #ff0000;
    fill: #fff !important;
    border-radius: 50%;
    width: 14px;
    height: 14px;
    display: flex !important;
    justify-content: center;
    align-items: center;
    padding: 0px;
    font-size: 12px;
    margin: 0px !important;
    padding-bottom: 2px;
}
.mx-input{
    border: 2px solid #ebe6e6;
    margin-bottom: 10px;
    width: 100%;
    box-sizing: border-box;
    line-height: 25px;
    font-size: 15px;
    color: #c9c8c8;
    height: 50px;
    border-radius: 5px 25px 0px 5px;
    -webkit-box-shadow: 0px 0px 12px 1px rgb(0 0 0 / 15%);
    -moz-box-shadow: 0px 0px 12px 1px rgba(0, 0, 0, 0.15);
    box-shadow: 0px 0px 8px -2px rgb(0 0 0 / 15%);
    font-family: 'Jost';
}
</style>