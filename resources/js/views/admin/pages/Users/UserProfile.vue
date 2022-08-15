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
                                            <h1><router-link :to="{name: 'admin.users.index'}"><i class="fa fa-angle-left"></i>Users</router-link></h1>
                                        </div>
                                    </div>
                                    <div class="content-header">
                                        <h2>Profile</h2>
                                    </div>
                                    <div class="customer-top">
                                        <div class="row">
                                            <div class="col-12">
                                                <div class="media align-items-center">
                                                    <img :src="editProfile.image" class="img-fluid" alt="">
                                                    <div class="media-body text-right user_id">
                                                        <h6>User Id: {{editProfile.id}}</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row user-desc">
                                            <div class="col-12">
                                                <p>{{editProfile.about_yourself}}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row">
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
                                                                    <p class="fieldName">Full Name</p>
                                                                    <p class="fieldData">{{editProfile.name}}</p>
                                                                </div>
                                                                <!-- <div class="col-lg-4 col-md-4 col-12 t-c">
                                                                    <p class="fieldName">Last Name</p>
                                                                    <p class="fieldData">{{editProfile.about_yourself}}</p>
                                                                </div> -->
                                                            </div>
                                                            <div class="row mt-md-1">
                                                                <div class="col-lg-4 col-md-4 col-12 t-c">
                                                                    <p class="fieldName">Date Of Birth</p>
                                                                    <p class="fieldData">{{formatDate(editProfile.dob)}}</p>
                                                                </div>
                                                                <div class="col-lg-4 col-md-4 col-12 t-c">
                                                                    <p class="fieldName">Phone Number</p>
                                                                    <p class="fieldData">{{editProfile.phone}}</p>
                                                                </div>
                                                            </div>
                                                            <div class="row mt-md-1">
                                                                <div class="col-lg-4 col-md-4 col-12 t-c">
                                                                    <p class="fieldName">Email Address</p>
                                                                    <p class="fieldData">{{editProfile.email}}</p>
                                                                </div>


                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="headingCollapse12" class="card-header">
                                                    <a data-toggle="collapse" href="#collapse12" aria-expanded="true" aria-controls="collapse12" class="card-title lead ">Experience Information</a>
                                                </div>
                                                <div id="collapse12" role="tabpanel" aria-labelledby="headingCollapse12" class="collapse show" aria-expanded="true">
                                                    <div class="card-content">
                                                        <div class="card-body mt-sm-0 mt-2">
                                                            <div class="row">
                                                                <div class="col-lg-3 col-md-3 col-12 t-c">
                                                                    <p class="fieldName">Job Title</p>
                                                                </div>
                                                                <div class="col-lg-6 col-md-6 col-12 t-c">
                                                                    <p class="fieldData">{{editProfile.about_yourself}}</p>

                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-lg-3 col-md-3 col-12 t-c">
                                                                    <p class="fieldName">Company Name</p>
                                                                </div>
                                                                <div class="col-lg-6 col-md-6 col-12 t-c">
                                                                    <p class="fieldData">{{editProfile.about_yourself}}</p>

                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-lg-3 col-md-3 col-12 t-c">
                                                                    <p class="fieldName">Job Type</p>
                                                                </div>
                                                                <div class="col-lg-6 col-md-6 col-12 t-c">
                                                                    <p class="fieldData">{{editProfile.about_yourself}}</p>

                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-lg-3 col-md-3 col-12 t-c">
                                                                    <p class="fieldName">Start Date</p>
                                                                </div>
                                                                <div class="col-lg-6 col-md-6 col-12 t-c">
                                                                    <p class="fieldData">{{editProfile.about_yourself}}</p>

                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-lg-3 col-md-3 col-12 t-c">
                                                                    <p class="fieldName">End Date</p>
                                                                </div>
                                                                <div class="col-lg-6 col-md-6 col-12 t-c">
                                                                    <p class="fieldData">{{editProfile.about_yourself}}</p>

                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-lg-3 col-md-3 col-12 t-c">
                                                                    <p class="fieldName">Job Description</p>
                                                                </div>
                                                                <div class="col-lg-6 col-md-12 col-12">
                                                                    <p class="fieldData">{{editProfile.about_yourself}}</p>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="headingCollapse13" class="card-header">
                                                    <a data-toggle="collapse" href="#collapse13" aria-expanded="true" aria-controls="collapse13" class="card-title lead ">Education Details</a>
                                                </div>
                                                <div id="collapse13" role="tabpanel" aria-labelledby="headingCollapse13" class="collapse show" aria-expanded="true">
                                                    <div class="card-content">
                                                        <div class="card-body mt-sm-0 mt-2">
                                                            <div class="row">
                                                                <div class="col-lg-3 col-md-3 col-12 t-c">
                                                                    <p class="fieldName">Highest Degree</p>
                                                                </div>
                                                                <div class="col-lg-6 col-md-6 col-12 t-c">
                                                                    <p class="fieldData">{{editProfile.about_yourself}}</p>

                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-lg-3 col-md-3 col-12 t-c">
                                                                    <p class="fieldName">Subjects</p>
                                                                </div>
                                                                <div class="col-lg-6 col-md-6 col-12 t-c">
                                                                    <p class="fieldData">{{editProfile.about_yourself}}</p>

                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-lg-3 col-md-3 col-12 t-c">
                                                                    <p class="fieldName">Institute Name</p>
                                                                </div>
                                                                <div class="col-lg-6 col-md-6 col-12 t-c">
                                                                    <p class="fieldData">{{editProfile.about_yourself}}</p>

                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-lg-3 col-md-3 col-12 t-c">
                                                                    <p class="fieldName">Start Date</p>
                                                                </div>
                                                                <div class="col-lg-6 col-md-6 col-12 t-c">
                                                                    <p class="fieldData">{{editProfile.about_yourself}}</p>

                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-lg-3 col-md-3 col-12 t-c">
                                                                    <p class="fieldName">End Date</p>
                                                                </div>
                                                                <div class="col-lg-6 col-md-6 col-12 t-c">
                                                                    <p class="fieldData">{{editProfile.end_date}}</p>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="headingCollapse14" class="card-header">
                                                    <a data-toggle="collapse" href="#collapse14" aria-expanded="true" aria-controls="collapse14" class="card-title lead ">Interest</a>
                                                </div>
                                                <div id="collapse14" role="tabpanel" aria-labelledby="headingCollapse14" class="collapse show" aria-expanded="true">
                                                    <div class="card-content">
                                                        <div class="card-body mt-sm-0 mt-2">
                                                            <div class="row">
                                                                <div class="col-lg-12 col-md-12 col-12">
                                                                    <p class="fieldData">{{editProfile.interest}}

                                                                    </p>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- <div id="headingCollapse15" class="card-header">
                                                    <a data-toggle="collapse" href="#collapse14" aria-expanded="true" aria-controls="collapse14" class="card-title lead ">My Documents</a>
                                                </div>
                                                <div id="collapse15" role="tabpanel" aria-labelledby="headingCollapse15" class="collapse show" aria-expanded="true">
                                                    <div class="card-content">
                                                        <div class="card-body mt-sm-0 mt-2">
                                                            <div class="row">
                                                                <div class="col-12">
                                                                    <div class="wrap-doc">
                                                                        <div class="doc-item">
                                                                            Resume.pdf
                                                                            <a href="/assets/documents/users/Resume.pdf" download><i class="fa fa-download" aria-hidden="true"></i></a>
                                                                        </div>
                                                                        <div class="doc-item">
                                                                            Cerificate.pdf
                                                                            <a href="/assets/documents/users/Cerificate.pdf" download><i class="fa fa-download" aria-hidden="true"></i></a>

                                                                        </div>
                                                                        <div class="doc-item">
                                                                            Doc1.pdf
                                                                            <a href="/assets/documents/users/Doc1.pdf" download><i class="fa fa-download" aria-hidden="true"></i></a>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> -->
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
</div>
</template>

<script>
	export default{
		data() {
			return {
				editProfile: {}
			};
		},
		async created() {
			await this.getProfile();
		},
		methods: {
			async getProfile() {
				this.editProfile = (await axios.get(`/api/admin/getProfile/${this.$route.params.id}`)).data;
				console.log(this.editProfile.address);
			},
		}

	}


</script>
