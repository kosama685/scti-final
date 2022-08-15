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
                                <div class="row align-items-center">
                                        <div class="col-md-6 col-12">
                                            <h1 class="m-0 ch"><router-link :to="{name: 'AdminHome'}"><i class="fa fa-angle-left"></i>Package Management</router-link></h1>
                                        </div>
                                        <div class="col-md-6 col-12 text-right">
                                            <router-link :to="{name: 'admin.packages.edit', params:{id: this.user_type}}" class="green-btn m-0 text-center e-bt" data-toggle="modal" data-target=".addCategory-modal">Edit</router-link>
                                        </div>
                                    </div>

                                    <nav>
                                        <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                            <a @click="user_type = 0 ; getPackage()" class="nav-item nav-link active " id="nav-user-tab" data-toggle="tab" href="#nav-user" role="tab" aria-controls="nav-user" aria-selected="true">Users</a>
                                            <a @click="user_type = 1 ; getPackage()" class="nav-item nav-link " id="nav-employer-tab" data-toggle="tab" href="#nav-employer" role="tab" aria-controls="nav-employer" aria-selected="false">Business Owners</a>
                                        </div>
                                    </nav>
                                    <div class="tab-content" id="nav-tabContent">

                                        <div class="tab-pane fade show active" id="nav-user" role="tabpanel" aria-labelledby="nav-user-tab" >
                                            <div class="row" :key="index" v-for="(packagedata,index) in packages">
                                                <!-- {{packages}} -->

                                            <div class="card collapse-icon accordion-icon-rotate user_prof_acc" style="width: 100%">
                                                <div id="headingCollapse12" class="card-header">
                                                    <a data-toggle="collapse" href="#collapse12" aria-expanded="true" aria-controls="collapse12" class="card-title lead ">Package 0{{index}}</a>
                                                </div>
                                                <div id="collapse12" role="tabpanel" aria-labelledby="headingCollapse12" class="collapse show" aria-expanded="true">
                                                    <div class="card-content">
                                                        <div class="card-body mt-sm-0 mt-2">
                                                            <div class="row">
                                                                <div class="col-lg-3 col-md-3 col-12 t-c">
                                                                    <p class="fieldName">Package Name</p>
                                                                </div>
                                                                <div class="col-lg-6 col-md-6 col-12 t-c">
                                                                    <p class="fieldData">{{packagedata.package_name}}</p>

                                                                </div>
                                                            </div>
                                                             <div class="row">
                                                                <div class="col-lg-3 col-md-3 col-12 t-c">
                                                                    <p class="fieldName">Description</p>
                                                                </div>
                                                                <div class="col-lg-6 col-md-6 col-12 t-c">
                                                                    <p class="fieldData" v-html="packagedata.description"></p>

                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-lg-3 col-md-3 col-12 t-c">
                                                                    <p class="fieldName">Charges</p>
                                                                </div>
                                                                <div class="col-lg-6 col-md-6 col-12 t-c">
                                                                    <p class="fieldData">${{packagedata.charges}}</p>

                                                                </div>
                                                            </div>

                                                            <div class="row">
                                                                <div class="col-lg-3 col-md-3 col-12 t-c">
                                                                    <p class="fieldName">Durations</p>
                                                                </div>
                                                                <div class="col-lg-6 col-md-6 col-12 t-c">
                                                                    <p class="fieldData">{{packagedata.duration}}</p>

                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            </div>

                                        </div>
                                        <div class="tab-pane fade " id="nav-employer" role="tabpanel" aria-labelledby="nav-employer-tab">
                                             <div class="row" :key="index" v-for="(packagedata,index) in packages">
                                            <div class="card collapse-icon accordion-icon-rotate user_prof_acc" style="width: 100%">
                                                <div id="headingCollapse13" class="card-header">
                                                    <a data-toggle="collapse" href="#collapse13" aria-expanded="true" aria-controls="collapse13" class="card-title lead ">Project 01</a>
                                                </div>
                                                <div id="collapse13" role="tabpanel" aria-labelledby="headingCollapse13" class="collapse show" aria-expanded="true">
                                                    <div class="card-content">
                                                        <div class="card-body mt-sm-0 mt-2">
                                                            <div class="row">
                                                                <div class="col-lg-3 col-md-3 col-12 t-c">
                                                                    <p class="fieldName">Package Name</p>
                                                                </div>
                                                                <div class="col-lg-6 col-md-6 col-12 t-c">
                                                                    <p class="fieldData">{{packagedata.package_name}}</p>

                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-lg-3 col-md-3 col-12 t-c">
                                                                    <p class="fieldName">Description</p>
                                                                </div>
                                                                <div class="col-lg-6 col-md-6 col-12 t-c">
                                                                    <p class="fieldData" v-html="packagedata.description"></p>
                                                                </div>
                                                            </div>
                                                            <!-- <div class="row">
                                                                <div class="col-lg-3 col-md-3 col-12 t-c">
                                                                    <p class="fieldName">Duration</p>
                                                                </div>
                                                                <div class="col-lg-6 col-md-6 col-12 t-c">
                                                                    <p class="fieldData" v-html="packagedata.description"></p>
                                                                </div>
                                                            </div> -->
                                                            <div class="row">
                                                                <div class="col-lg-3 col-md-3 col-12 t-c">
                                                                    <p class="fieldName">Charges</p>
                                                                </div>
                                                                <div class="col-lg-6 col-md-6 col-12 t-c">
                                                                    <p class="fieldData">${{packagedata.charges}}</p>

                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-lg-3 col-md-3 col-12 t-c">
                                                                    <p class="fieldName">Duration</p>
                                                                </div>
                                                                <div class="col-lg-6 col-md-6 col-12 t-c">
                                                                    <p class="fieldData">{{packagedata.duration}}</p>

                                                                </div>
                                                            </div>

                                                            <div class="row">
                                                                <div class="col-lg-3 col-md-3 col-12 t-c">
                                                                    <p class="fieldName">Jobs Limit</p>
                                                                </div>
                                                                <div class="col-lg-6 col-md-6 col-12 t-c">
                                                                    
                                                                    <div v-if="packagedata.question_limit <= 15">
                                                                       <p class="fieldData">{{packagedata.question_limit}}</p>
                                                                    </div>
                                                                    <div v-if="packagedata.question_limit > 15">
                                                                        <h5 class="fieldData">Unlimited</h5>
                                                                    </div>
                                                                
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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

<script>
	export default{

		data() {
			return {
				packages: {},
                user_type: 0
			};
		},
		async created() {
			await this.getPackage();
		},
		methods: {
			async getPackage() {
				this.packages = (await axios.get('/api/admin/package?user_type='+this.user_type)).data.data;
				console.log(this.packages);


			},
		}
	}
</script>
