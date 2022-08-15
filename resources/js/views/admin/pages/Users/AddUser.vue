<template>
	<div class="content-wrapper">
		<div class="content-body">
			<!-- Basic form layout section start -->

			<ValidationObserver v-slot="{ handleSubmit }">
				<form ref="EditProfileForm" @submit.prevent="handleSubmit(createUser)">
					<section id="configuration" class="search view-cause">
						<div class="row">
							<div class="col-12">
								<div class="card rounded pad-20">
									<div class="card-content collapse show">
										<div class="card-body  card-dashboard">
											<div class="row">
												<div class="col-md-12 col-12">
													<h1 class="pull-left u-m">
														<router-link class="arrow-left" :to="{name: 'Users'}">
															<i class="fa fa-chevron-left"></i>
														</router-link>
													ADD USER</h1>
												</div>

											</div>
											<div class="row">
												<div class="col-lg-12">

													<div class="profile-img text-center edit-profille-img">
														<img :src="cropped" alt="" class="img-profile">
														<button name="file" class="camera-btn"><i class="fa fa-camera" ></i>  <input type="file" id="upload" name="file_photo" @change="croppie"></button>
													</div>


													<div class="modal fade" id="cropImagePop" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" >
														<div class="modal-dialog">
															<div class="modal-content">
																<div class="modal-header">
																	<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
																	<h4 class="modal-title" id="myModalLabel">
																	Edit Photo</h4>
																</div>
																<div class="modal-body">
																	<vue-croppie
																	ref="croppieRef"
																	:enableOrientation="true"
																	:boundary="{ width: 450, height: 300}"
																	>
																</vue-croppie>

															</div>
															<div class="modal-footer">
																<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
																<button type="button" id="cropImageBtn" class="btn btn-primary" @click="crop">Crop</button>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div class="add-user-wrapper">
											<div class="personal-details-wrapper">
												<h2>Personal Details</h2>
												<div class="row">
													<div class="col-lg-6">

														<ValidationProvider name="First Name" rules="required"   v-slot="{errors}">
															<label for="">First Name</label>
															<input name="first_name" v-model="first_name" type="text" class="input-fields-article w-100 form-control" placeholder="Enter First Name">
															<span class="text-danger">{{errors[0]}}</span>
														</ValidationProvider>



													</div>
													<div class="col-lg-6">
														<ValidationProvider name="Last Name" rules="required" v-slot="{errors}">
															<label for="">Last Name</label>
															<input  name="last_name" v-model="last_name"  type="text" class="input-fields-article w-100 form-control" placeholder="Enter Last Name">
															<span class="text-danger">{{errors[0]}}</span>
														</ValidationProvider>

													</div>
												</div>
												<div class="row">
													<div class="col-lg-6">
														<ValidationProvider name="Phone Number" rules="required" v-slot="{errors}">
															<label for=""> Phone Number</label>
															<input  name="phone_number" v-model="phone_number" type="text" value="test@gmail.com" class="input-fields-article w-100 form-control" placeholder="Enter Phone Number">
															<span class="text-danger">{{errors[0]}}</span>
														</ValidationProvider>

													</div>
													<div class="col-lg-6">
														<ValidationProvider name="Email" rules="required" v-slot="{errors}">
															<label for="">Email</label>
															<input  name="email" v-model="email" type="text" class="input-fields-article w-100 form-control"  >
															<span class="text-danger">{{errors[0]}}</span>
														</ValidationProvider>
													</div>
												</div>

												<div class="row">
													<div class="col-lg-6">

														<ValidationProvider name="password" rules="required" v-slot="{errors}">
															<label for=""> Password</label>
															<input name="password" v-model="password" type="text" class="input-fields-article w-100 form-control" placeholder="Enter password here">
															<span class="text-danger">{{errors[0]}}</span>
														</ValidationProvider>




													</div>
													<div class="col-lg-6">

														<ValidationProvider name="confirm_password" rules="required" v-slot="{errors}">
															<label for=""> Confirm Password</label>
															<input name="confirmed" v-model="confirm_password" type="text" class="input-fields-article w-100 form-control" placeholder="Retype Password Here">
															<span class="text-danger">{{errors[0]}}</span>
														</ValidationProvider>
														<div class="eye-btn">
															<i class="fa fa-eye-slash" aria-hidden="true"></i>
														</div>
													</div>
												</div>
											</div>
											<div class="personal-details-wrapper">
												<h2>Address Details</h2>
												<div class="row">
													<div class="col-lg-6">
														<ValidationProvider name="Address" rules="required" v-slot="{errors}">
															<label for=""> Address</label>
															<input  name="address" v-model="address" type="text" class="input-fields-article w-100 form-control" placeholder="Enter Address Here">
															<span class="text-danger">{{errors[0]}}</span>
														</ValidationProvider>

													</div>
													<div class="col-lg-6">
														<ValidationProvider name="Country" rules="required" v-slot="{errors}">
															<label for=""> Country</label>
															<input name="country" v-model="country" type="text" class="input-fields-article w-100 form-control" placeholder="Enter Country Here">
															<span class="text-danger">{{errors[0]}}</span>
														</ValidationProvider>

													</div>
												</div>
												<div class="row">
													<div class="col-lg-6">
														<ValidationProvider name="State" rules="required" v-slot="{errors}">
															<label for=""> State</label>
															<input  name="state" v-model="state" type="text" class="input-fields-article w-100 form-control" placeholder="Enter state here">
															<span class="text-danger">{{errors[0]}}</span>
														</ValidationProvider>


													</div>
													<div class="col-lg-6">
														<ValidationProvider name="City" rules="required" v-slot="{errors}">
															<label for=""> City</label>
															<input  name="city" v-model="city" type="text" class="input-fields-article w-100 form-control" placeholder="Enter city here">
															<span class="text-danger">{{errors[0]}}</span>
														</ValidationProvider>
													</div>
												</div>

												<div class="row">
													<div class="col-lg-6">
														<ValidationProvider name="Post code" rules="required" v-slot="{errors}">
															<label for=""> Post code</label>
															<input name="zip_code" v-model="zip_code" type="text" class="input-fields-article w-100 form-control" placeholder="Enter Post code here">
															<span class="text-danger">{{errors[0]}}</span>
														</ValidationProvider>

														<input type="hidden" name="role" value="2">
													</div>

												</div>
											</div>
											<Questionaire></Questionaire>

											<div class="cancel-and-update-button-wrapper text-center">
												<button type="submit" class="primary-button">Add</button>
											</div>


										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

			</form>
		</ValidationObserver>
	</div>
</div>
</template>


<script>
	  const Questionaire = () => import('../../components/Questionaire.vue');
	export default {
		data() {
			return {
				croppieImage: '',
				cropped: null,
				email:'',
				file: '',
				first_name:'',
				last_name: '',
				phone_number: '',
				address: '',
				country: '',
				state: '',
				city: '',
				zip_code: '',
				role: '',

			};
		},
    	components: {
        	Questionaire
    	},
		methods: {
			croppie (e) {
				var files = e.target.files || e.dataTransfer.files;
				if (!files.length) return;

				var reader = new FileReader();
				reader.onload = e => {
					this.$refs.croppieRef.bind({
						url: e.target.result
					});
				};
				$('#cropImagePop').modal('show');
				reader.readAsDataURL(files[0]);
			},
			crop() {
      // Options can be updated.
      // Current option will return a base64 version of the uploaded image with a size of 600px X 450px.
      let options = {
      	type: 'base64',
      	size: { width: 150, height: 200 },
      	format: 'jpeg'
      };
      this.$refs.croppieRef.result(options, output => {
      	this.cropped = this.croppieImage = output;
      	$('#cropImagePop').modal('hide');
      	console.log(this.croppieImage);
      });
  },
  async createUser(e){
  	let fd = new FormData(this.$refs.EditProfileForm);
  	console.log(fd);
  	let response = await axios.post('/api/admin/user/create', fd);
  	if(response.data.data){
  		this.$snotify.success(response.data.message)
  		let self = this;
  		setTimeout(function(){
  			self.$router.push({name : 'Users'});
  		},1000);
  	}else{
  		this.$snotify.error(response.data.message)

  	}
  }




}
};
</script>
