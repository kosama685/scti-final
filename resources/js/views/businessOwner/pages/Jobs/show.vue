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
                                        <div
                                            class="col-12 d-flex align-items-center justify-content-between flex-column flex-md-row ">
                                            <h1>
                                                <router-link :to="{ name: 'businessOwner.jobs.index' }"><i
                                                        class="fa fa-angle-left"></i>View Jobs</router-link>
                                            </h1>
                                            <p class="sts">Status: <span class="txt-green">Open</span></p>

                                        </div>

                                    </div>
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="card collapse-icon accordion-icon-rotate user_prof_acc user_jobs_acc">
                                                <div id="headingCollapse11" class="card-header">
                                                    <a data-toggle="collapse" href="#collapse11" aria-expanded="true"
                                                        aria-controls="collapse11" class="card-title lead">Job Details
                                                    </a>
                                                </div>
                                                <div id="collapse11" role="tabpanel" aria-labelledby="headingCollapse11"
                                                    class="collapse show">
                                                    <div class="card-content">
                                                        <div class="card-body mt-sm-0 mt-2">
                                                            <div class="row">
                                                                <div class="col-xl-3 col-lg-4 col-md-6 col-12 t-c">
                                                                    <p class="fieldName-p">Job Category</p>
                                                                    <p class="text-v">{{ joblogs.category.category_name }}</p>
                                                                </div>
                                                                <div class="col-xl-3 col-lg-4 col-md-6 col-12 t-c">
                                                                    <p class="fieldName-p">Job Name</p>
                                                                    <p class="text-v">{{ joblogs.job_title }}</p>

                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-xl-3 col-lg-4 col-md-6 col-12 t-c">
                                                                    <p class="fieldName-p">Company Name</p>
                                                                    <p class="text-v">{{ joblogs.company_name }}</p>
                                                                </div>
                                                                <div class="col-xl-3 col-lg-4 col-md-6 col-12 t-c">
                                                                    <p class="fieldName-p">Salary Range</p>
                                                                    <p class="text-v">{{ joblogs.salary_range }}</p>

                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-xl-3 col-lg-4 col-md-6 col-12 t-c">
                                                                    <p class="fieldName-p">Posted On</p>
                                                                    <p class="text-v">{{ joblogs.created_at }}</p>
                                                                </div>
                                                                <div class="col-xl-3 col-lg-4 col-md-6 col-12 t-c">
                                                                    <p class="fieldName-p">Apply Before</p>
                                                                    <p class="text-v">{{ joblogs.apply_before }}</p>

                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-xl-3 col-lg-4 col-md-6 col-12 t-c">
                                                                    <p class="fieldName-p">Period Of Employment</p>
                                                                    <p class="text-v">{{ joblogs.period_of_employment }}
                                                                    </p>
                                                                </div>

                                                                <div class="col-xl-3 col-lg-4 col-md-6 col-12 t-c">
                                                                    <p class="fieldName-p">Remote</p>
                                                                    <p class="text-v">{{ (joblogs.remote == 'true') ? 'Yes'
                                                                            : 'No'
                                                                    }}</p>
                                                                </div>
                                                                <div class="col-xl-3 col-lg-4 col-md-6 col-12 t-c">
                                                                    <p class="fieldName-p">Hours of work</p>
                                                                    <p class="text-v">{{joblogs.hours_of_work}}</p>

                                                                </div>
                                                            </div>


                                                            <div class="row c-m-v" v-if="joblogs.file != ''">
                                                                <div class="col-lg-6 col-md-6 col-12 p-0">
                                                                    <video width="100%" height="100%" controls
                                                                           class="job-video" :src="joblogs.file">
                                                                        <source src="movie.mp4" type="video/mp4">
                                                                        <source src="movie.ogg" type="video/ogg">
                                                                        Your browser does not support the video tag.
                                                                    </video>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="headingCollapse12" class="card-header">
                                                    <a data-toggle="collapse" href="#collapse12" aria-expanded="true"
                                                        aria-controls="collapse12" class="card-title lead ">Address
                                                        Details</a>
                                                </div>
                                                <div id="collapse12" role="tabpanel" aria-labelledby="headingCollapse12"
                                                    class="collapse show" aria-expanded="true">
                                                    <div class="card-content">
                                                        <div class="card-body mt-sm-0 mt-2">

                                                            <div class="card-body mt-sm-0 mt-2">
                                                                <div class="row">
                                                                    <div class="col-xl-3 col-lg-4 col-md-6 col-12 t-c">
                                                                        <p class="fieldName-p">Address</p>
                                                                        <p class="text-v">{{ joblogs.address }}</p>
                                                                    </div>
                                                                    <div class="col-xl-3 col-lg-4 col-md-6 col-12 t-c">
                                                                        <p class="fieldName-p">Country</p>
                                                                        <p class="text-v">{{ joblogs.country }} </p>

                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col-xl-3 col-lg-4 col-md-6 col-12 t-c">
                                                                        <p class="fieldName-p">State</p>
                                                                        <p class="text-v">{{joblogs.state}} </p>
                                                                    </div>
                                                                    <div class="col-xl-3 col-lg-4 col-md-6 col-12 t-c">
                                                                        <p class="fieldName-p">City</p>
                                                                        <p class="text-v">{{ joblogs.city }} </p>

                                                                    </div>
                                                                    <div class="col-xl-3 col-lg-4 col-md-6 col-12 t-c">
                                                                        <p class="fieldName-p">Post code</p>
                                                                        <p class="text-v">{{ joblogs.zip_code }} </p>
                                                                    </div>

                                                                    <div class="col-lg-4 col-md-4 col-12">
                                                                        <div class="form-group">
                                                                            <label class="fieldName-p">Employee
                                                                                Benefits</label>
                                                                            <br>
                                                                            <p class="text-v"
                                                                                v-for="(item, index) in joblogs.job_benefits">
                                                                                {{ item.employee_benefits }}</p>
                                                                        </div>
                                                                    </div>
                                                                </div>


                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div id="headingCollapse13" class="card-header">
                                                    <a data-toggle="collapse" href="#collapse13" aria-expanded="true"
                                                        aria-controls="collapse13" class="card-title lead ">Job
                                                        Responsibilities</a>
                                                </div>
                                                <div id="collapse13" role="tabpanel" aria-labelledby="headingCollapse13"
                                                    class="collapse show" aria-expanded="true">
                                                    <div class="card-content">
                                                        <div class="card-body mt-sm-0 mt-2">

                                                            <div class="row mt-md-1">
                                                                <div class="col-lg-12 col-md-12 col-12 t-c">
                                                                    <p class="fieldName-p">Job Description</p>
                                                                    <p class="text-v">{{ joblogs.job_descriptions }}</p>
                                                                </div>


                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div id="headingCollapse14" class="card-header">
                                                    <a data-toggle="collapse" href="#collapse14" aria-expanded="true"
                                                        aria-controls="collapse14" class="card-title lead ">Experience
                                                        Information</a>
                                                </div>
                                                <div id="collapse14" role="tabpanel" aria-labelledby="headingCollapse14"
                                                    class="collapse show" aria-expanded="true">
                                                    <div class="card-content">
                                                        <div class="card-body mt-sm-0 mt-2">
                                                            <div class="row">
                                                                <div class="col-xl-3 col-lg-4 col-md-6 col-12 t-c">
                                                                    <p class="fieldName-p">Years of experience
                                                                        needed</p>
                                                                    <p class="text-v">{{ joblogs.years_of_experience }}
                                                                    </p>
                                                                </div>
                                                                <div class="col-xl-3 col-lg-4 col-md-6 col-12 t-c">
                                                                    <p class="fieldName-p">Degree Requirements</p>
                                                                    <p class="text-v">{{ joblogs.degree }} </p>

                                                                </div>
                                                            </div>
                                                            <div class="row mt-md-1">
                                                                <div class="col-lg-12 col-md-12 col-12 t-c">
                                                                    <p class="fieldName-p">Skills</p>
                                                                    <p class="text-v">{{ joblogs.skill }}</p>
                                                                </div>


                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>

                                                <div id="headingCollapse17" class="card-header">
                                                    <a data-toggle="collapse" href="#collapse17" aria-expanded="true"
                                                        aria-controls="collapse17" class="card-title lead ">Smart Questions</a>
                                                </div>
                                                <div id="collapse17" role="tabpanel" aria-labelledby="headingCollapse13"
                                                    class="collapse show" aria-expanded="true">
                                                    <div class="card-content">
                                                        <div class="card-body mt-sm-0 mt-2">

                                                            <div class="row mt-md-1">
                                                                <div class="col-lg-12 col-md-12 col-12 t-c">
                                                                    <p class="text-v" v-for="(item, index) in joblogs.job_smart_question">
                                                                        Q{{index+1}} : {{ item.question }}
                                                                    </p>
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
export default {
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
            let id = (this.$route.params.id) ? '/' + this.$route.params.id : '';
            let res = (await axios.get(`/api/admin/candidate/job` + id + `?page=` + page + '&entries=' + this.entries + '&to=' + this.to + '&from=' + this.from));
            this.joblogs = res.data.data[0];
            console.log(this.joblogs);
        }
    }
}
</script>
