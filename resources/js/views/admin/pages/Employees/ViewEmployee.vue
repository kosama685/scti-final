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
												<router-link class="arrow-left" :to="{name: 'Employees'}">
						                          <i class="fa fa-chevron-left"></i>
						                       </router-link>
											Profile</h1>
										</div>

									</div>
									<div class="row">
										<div class="col-lg-12">
											<div class="profile-img text-center edit-profille-img">
												<img :src="url('/images/users/')+editProfile.image" alt="" class="img-profile">
												<p>User Id: <span class="id"> {{editProfile.id}} </span> <span class="px-2"> | </span> Registration Date: <span class="date"> {{formatDate(editProfile.created_at)}}</span>  </p>
											</div>
										</div>
									</div>
									<div class="add-user-wrapper">
										<div class="personal-details-wrapper">
											<h2>Personal Details</h2>

											<div class="row">
												<div class="col-lg-6">
													<label for="#">
														<!-- <i class="fa fa-id-card" aria-hidden="true"></i> -->
													First Name</label>
													<input type="text" class="w-100 d-block form-control disabled-input-fields" :value="editProfile.first_name" placeholder="Peter" disabled>

												</div>
												<div class="col-lg-6">
													<label for="#">Last Name</label>
													<input class="w-100 d-block form-control disabled-input-fields" type="text" placeholder="Parker" :value="editProfile.last_name" disabled>

												</div>
											</div>
											<div class="row">
												<div class="col-lg-6">
													<label for="#">
														<!-- <i class="fa fa-phone"></i> -->
													Phone Number</label>
													<input class="w-100 d-block form-control disabled-input-fields" type="number" placeholder="+834 3834 8383" :value="editProfile.phone" disabled>


												</div>
												<div class="col-lg-6">
													<label for="#">
														<!-- <i class="fa fa-envelope"></i> -->
													Email </label>
													<input class="w-100 d-block form-control disabled-input-fields" type="email" placeholder="peter.parker@gmailcom" :value="editProfile.email" disabled>
												</div>
											</div>


										</div>
										<div class="personal-details-wrapper">
											<h2>Address Details</h2>

											<div class="row">
												<div class="col-lg-6">
													<label for="#">
														<!-- <i class="fa fa-id-card" aria-hidden="true"></i> -->
													Address</label>
													<input type="text" class="w-100 d-block form-control disabled-input-fields" placeholder="-" :value="editProfile.address" disabled>

												</div>
												<div class="col-lg-6">
													<label for="#">Country</label>
													<input class="w-100 d-block form-control disabled-input-fields" type="text" placeholder="-" :value="editProfile.country" disabled>

												</div>
											</div>
											<div class="row">
												<div class="col-lg-6">
													<label for="#">
														<!-- <i class="fa fa-phone"></i> -->
													State</label>
													<input class="w-100 d-block form-control disabled-input-fields" type="text" placeholder="-" :value="editProfile.state" disabled>


												</div>
												<div class="col-lg-6">
													<label for="#">
														<!-- <i class="fa fa-envelope"></i> -->
													City </label>
													<input class="w-100 d-block form-control disabled-input-fields" type="text" placeholder="-" :value="editProfile.city" disabled>
												</div>
											</div>

											<div class="row">
												<div class="col-lg-6">
													<label for="#">
														<!-- <i class="fa fa-phone"></i> -->
													Post code</label>
													<input class="w-100 d-block form-control disabled-input-fields" type="number" placeholder="-" :value="editProfile.zip_code" disabled>


												</div>

											</div>
										</div>
									</div>


								</form>

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
		inject: ['formatDate'],
		data() {
			return {
				editProfile: {}
			};
		},
		async created() {
			await this.getEmployee();
		},
		methods: {
			async getEmployee() {
				this.editProfile = (await axios.get(`/api/admin/getEmployee/${this.$route.params.id}`)).data;
				//console.log(this.editProfile.address);
			},
		}

	}


</script>
