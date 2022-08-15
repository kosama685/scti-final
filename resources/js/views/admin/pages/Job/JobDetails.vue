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
                                            <h1><router-link :to="{name: 'admin.job.index'}"><i class="fa fa-angle-left"></i>Job log</router-link></h1>
                                        </div>

                                    </div>
                                    <div class="customer-top">
                                        <div class="row align-items-center mb-4">
                                            <div class="col-6">
                                                <div class="media align-items-center">
                                                    <img :src="`${base_url}/assets/images/avatar.jpg`" class="img-fluid" alt="">
                                                    <div class="media-body sub-p">
                                                        <h6 class="bo-name">{{joblogs.user.first_name}}</h6>
                                                        <h6 class="h6-bo">Business Owner Id: {{joblogs.user.id}}</h6>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-6 text-right ">
                                                <p class="sts">Status: <span class="txt-green">Open</span></p>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="row">
                                        <div class="col-12">
                                            <div class="card collapse-icon accordion-icon-rotate user_prof_acc">
                                                <div id="headingCollapse11" class="card-header">
                                                    <a data-toggle="collapse" href="#collapse11" aria-expanded="true" aria-controls="collapse11" class="card-title lead">Job Details</a>
                                                </div>
                                                <div id="collapse11" role="tabpanel" aria-labelledby="headingCollapse11" class="collapse show">
                                                    <div class="card-content">
                                                        <div class="card-body mt-sm-0 mt-2">
                                                            <div class="row">
                                                                <div class="col-lg-3 col-md-3 col-12 t-c">
                                                                    <p class="fieldName">Job Category</p>
                                                                </div>
                                                                <div class="col-lg-6 col-md-6 col-12 t-c">
                                                                    <p class="fieldData">{{joblogs.category.category_name}}</p>

                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-lg-3 col-md-3 col-12 t-c">
                                                                    <p class="fieldName">Job Name</p>
                                                                </div>
                                                                <div class="col-lg-6 col-md-6 col-12 t-c">
                                                                    <p class="fieldData">{{joblogs.job_title}}</p>

                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-lg-3 col-md-3 col-12 t-c">
                                                                    <p class="fieldName">Company Name</p>
                                                                </div>
                                                                <div class="col-lg-6 col-md-6 col-12 t-c">
                                                                    <p class="fieldData">{{joblogs.company_name}}</p>

                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-lg-3 col-md-3 col-12 t-c">
                                                                    <p class="fieldName">Salary</p>
                                                                </div>
                                                                <div class="col-lg-6 col-md-6 col-12 t-c">
                                                                    <p class="fieldData">{{joblogs.salary}}</p>

                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-lg-3 col-md-3 col-12 t-c">
                                                                    <p class="fieldName">Posted On</p>
                                                                </div>
                                                                <div class="col-lg-6 col-md-6 col-12 t-c">
                                                                    <p class="fieldData">{{formatDate(joblogs.created_at)}}</p>

                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-lg-3 col-md-3 col-12 t-c">
                                                                    <p class="fieldName">Apply Before</p>
                                                                </div>
                                                                <div class="col-lg-6 col-md-6 col-12 t-c">
                                                                    <p class="fieldData">{{formatDate(joblogs.apply_before)}}</p>

                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-lg-3 col-md-3 col-12 t-c">
                                                                    <p class="fieldName">Period of employment</p>
                                                                </div>
                                                                <div class="col-lg-6 col-md-6 col-12 t-c">
                                                                    <p class="fieldData">{{joblogs.period_of_employment}}</p>

                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-lg-3 col-md-3 col-12 t-c">
                                                                    <p class="fieldName">Hours of work</p>
                                                                </div>
                                                                <div class="col-lg-6 col-md-6 col-12 t-c">
                                                                    <p class="fieldData">{{joblogs.hours_of_work}}</p>

                                                                </div>
                                                            </div>

<!--                                                            <div class="row c-m-v">-->
<!--                                                                <div class="col-lg-6 col-md-6 col-12">-->
<!--                                                                    <video width="100%" height="100%" controls class="job-video">-->
<!--                                                                        <source src="movie.mp4" type="video/mp4">-->
<!--                                                                        <source src="movie.ogg" type="video/ogg">-->
<!--                                                                        Your browser does not support the video tag.-->
<!--                                                                    </video>-->

<!--                                                                </div>-->
<!--                                                            </div>-->
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
                                                                    <p class="fieldData">{{joblogs.address}} </p>
                                                                </div>
                                                                <div class="col-lg-4 col-md-4 col-12 t-c">
                                                                    <p class="fieldName">Country</p>
                                                                    <p class="fieldData">{{joblogs.country}}</p>
                                                                </div>
                                                            </div>
                                                            <div class="row mt-md-1">
                                                                <div class="col-lg-4 col-md-4 col-12 t-c">
                                                                    <p class="fieldName">State</p>
                                                                    <p class="fieldData">{{joblogs.state}}</p>
                                                                </div>
                                                                <div class="col-lg-4 col-md-4 col-12 t-c">
                                                                    <p class="fieldName">City</p>
                                                                    <p class="fieldData">{{joblogs.city}}</p>
                                                                </div>
                                                            </div>
                                                            <div class="row mt-md-1">
                                                                <div class="col-lg-4 col-md-4 col-12 t-c">
                                                                    <p class="fieldName">Post code</p>
                                                                    <p class="fieldData">{{joblogs.zip_code}}</p>
                                                                </div>


                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div id="headingCollapse13" class="card-header">
                                                    <a data-toggle="collapse" href="#collapse13" aria-expanded="true" aria-controls="collapse13" class="card-title lead ">Job Responsibilities</a>
                                                </div>
                                                <div id="collapse13" role="tabpanel" aria-labelledby="headingCollapse13" class="collapse show" aria-expanded="true">
                                                    <div class="card-content">
                                                        <div class="card-body mt-sm-0 mt-2">

                                                            <div class="row mt-md-1">
                                                                <div class="col-lg-12 col-md-12 col-12 t-c">
                                                                    <p class="fieldName">Job Description</p>
                                                                    <p class="fieldData">{{joblogs.descriptions}}</p>
                                                                </div>


                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div id="headingCollapse14" class="card-header">
                                                    <a data-toggle="collapse" href="#collapse14" aria-expanded="true" aria-controls="collapse14" class="card-title lead ">Experience Information</a>
                                                </div>
                                                <div id="collapse14" role="tabpanel" aria-labelledby="headingCollapse14" class="collapse show" aria-expanded="true">
                                                    <div class="card-content">
                                                        <div class="card-body mt-sm-0 mt-2">
                                                            <div class="row">
                                                                <div class="col-lg-3 col-md-3 col-12 t-c">
                                                                    <p class="fieldName">Years of experience needed</p>
                                                                </div>
                                                                <div class="col-lg-6 col-md-6 col-12 t-c">
                                                                    <p class="fieldData">{{joblogs.years_of_experience}}</p>

                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-lg-3 col-md-3 col-12 t-c">
                                                                    <p class="fieldName">Degree Required</p>
                                                                </div>
                                                                <div class="col-lg-6 col-md-6 col-12 t-c">
                                                                    <p class="fieldData">{{joblogs.degree}}</p>

                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-lg-3 col-md-3 col-12 t-c">
                                                                    <p class="fieldName">Skills</p>
                                                                </div>
                                                                <div class="col-lg-6 col-md-6 col-12 t-c">
                                                                    <p class="fieldData">{{joblogs.skill}}</p>

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
        joblogs: {},
        search: '',
        employeeCount: 0,
        instituteCount: 0,
        entries: 10,
        status: 0,
        message: '',
        primaryKey: 0,
        successButtonText: '',
        institute: '',
        package: '',
        from: '',
        to: '',
        hit_from: 'businessOwner',
      };
    },
    async created() {
      await this.getPaymentLogs();
    },
    methods: {
      async getPaymentLogs(page = 1) {
        let id = (this.$route.params.id) ? '/'+this.$route.params.id : '';
        let res = (await axios.get(`/api/admin/candidate/job`+id+`?page=`+page+'&entries='+this.entries+'&to='+this.to+'&from='+this.from));
        this.joblogs = res.data.data[0];
        console.log(this.joblogs);
      }
    }
  }
</script>
