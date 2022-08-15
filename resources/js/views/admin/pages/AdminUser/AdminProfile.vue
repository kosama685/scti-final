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
                                            <h1><router-link :to="{name: 'public.dashboard'}"><i class="fa fa-angle-left"></i>Profile</router-link></h1>
                                        </div>
                                    </div>
                                    <div class="content-header">
                                        <h2>View Profile</h2>
                                    </div>
                                    <div class="customer-top">

                                        <div class="row">
                                            <div class="col-12">
                                                <div class="media align-items-center">
                                                    <img :src="editProfile.image" class="img-fluid" alt="">
                                                    <!-- <div class="media-body edit-u">
                                                        <a href="" data-toggle="modal" data-target=".updatePass-modal">Change Password</a>
                                                        <a href="">Change Image</a>
                                                    </div> -->
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="row mt-4">
                                        <div class="col-12">
                                            <div class="card collapse-icon accordion-icon-rotate user_prof_acc">
                                                <div id="headingCollapse11" class="card-header">
                                                    <a data-toggle="collapse" href="#collapse11" aria-expanded="true" aria-controls="collapse11" class="card-title lead">Personal Information</a>
                                                </div>
                                                <div id="collapse11" role="tabpanel" aria-labelledby="headingCollapse11" class="collapse show">
                                                    <div class="card-content">
                                                        <div class="card-body mt-sm-0 mt-2">
                                                            <div class="row">
                                                                <div class="col-lg-4 col-md-4 col-12 t-c">
                                                                    <p class="fieldName">First Name</p>
                                                                    <input type="text" name="fname" class="u-edit-txt" :value="editProfile.first_name" disabled>
                                                                </div>
                                                                <div class="col-lg-4 col-md-4 col-12 t-c">
                                                                    <p class="fieldName">Last Name</p>
                                                                    <input type="text" name="lname" class="u-edit-txt" :value="editProfile.last_name" disabled>
                                                                </div>
                                                            </div>
                                                            <div class="row mt-md-1">
<!--                                                                <div class="col-lg-4 col-md-4 col-12 t-c">-->
<!--                                                                    <p class="fieldName">Date Of Birth</p>-->
<!--                                                                    <input type="text" name="dob" class="u-edit-txt" :value="editProfile.dob" disabled>-->
<!--                                                                </div>-->
                                                                <div class="col-lg-4 col-md-4 col-12 t-c">
                                                                    <p class="fieldName">Phone Number</p>
                                                                    <input type="text" name="cnum" class="u-edit-txt" :value="editProfile.phone">
                                                                </div>

                                                                <div class="col-lg-4 col-md-4 col-12 t-c">
                                                                    <p class="fieldName">Email Address</p>
                                                                    <input type="email" name="email" class="u-edit-txt" :value="editProfile.email" disabled>
                                                                </div>


                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="headingCollapse12" class="card-header">
                                                    <a data-toggle="collapse" href="#collapse12" aria-expanded="true" aria-controls="collapse12" class="card-title lead ">Address Details</a>
                                                </div>
                                                <div id="collapse12" role="tabpanel" aria-labelledby="headingCollapse12" class="collapse show" aria-expanded="true">
                                                    <div class="card-content">
                                                        <div class="card-body mt-sm-0 mt-2">
                                                            <div class="row">
                                                                <div class="col-lg-4 col-md-4 col-12 t-c">
                                                                    <p class="fieldName">Address</p>
                                                                    <input type="text" name="fname" class="u-edit-txt" :value="editProfile.address" disabled>
                                                                </div>
                                                                <div class="col-lg-4 col-md-4 col-12 t-c">
                                                                    <p class="fieldName">Country</p>
                                                                    <input type="text" name="lname" class="u-edit-txt" :value="editProfile.country" disabled>
                                                                </div>
                                                            </div>
                                                            <div class="row mt-md-1">
                                                                <div class="col-lg-4 col-md-4 col-12 t-c">
                                                                    <p class="fieldName">State</p>
                                                                    <input type="text" name="dob" class="u-edit-txt" :value="editProfile.state" disabled>
                                                                </div>
                                                                <div class="col-lg-4 col-md-4 col-12 t-c">
                                                                    <p class="fieldName">City</p>
                                                                    <input type="text" name="cnum" class="u-edit-txt" :value="editProfile.city" disabled>
                                                                </div>
                                                            </div>
                                                            <div class="row mt-md-1 c-m-2">
                                                                <div class="col-lg-4 col-md-4 col-12 t-c">
                                                                    <p class="fieldName">Post code</p>
                                                                    <input type="email" name="email" class="u-edit-txt" :value="editProfile.zip_code" disabled>
                                                                </div>


                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-12">
                                        	<router-link :to="{name: 'admin.users.editProfile'}" class="green-btn">Edit Profile</router-link>

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

<script>
    import {mapActions, mapState} from 'vuex';
	export default{

		data() {
			return {
				editProfile: {}
			};
		},
		async created() {
			await this.fetch();
		},
         computed: {
        ...mapState('admin', ['profile','admin']),
    },
		methods: {
            ...mapActions('admin', ['getAll']),
        async fetch() {
                let {type, status} = this.$route.params;
                let params = {
                    route: 'api/admin/getProfile',
                    mutation: 'SET_PROFILE',
                    variable: 'data',
                };
                let {data} = await this.getAll(params);
                console.log(data);
                this.editProfile = data.data;

              

                    this.addRouteQuery({});

            },
			// async getProfile() {
			// 	this.editProfile = (await axios.get('/api/admin/getProfile')).data.data;
			// 	localStorage.setItem('image',this.editProfile.image);
			// 	console.log(this.editProfile);
			// },
		}

	}


</script>
