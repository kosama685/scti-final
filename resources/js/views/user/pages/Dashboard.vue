<template>
    <div>
        <register-header></register-header>
        <div class="expiry-alert" v-if="packageBooleanTrial == 1">
            <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
            <p>Your are in trial version. Please update your package! </p>
        </div>
        <!-- <div class="expiry-alert">
            <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
            <p>Your Subscription Package has expired </p>
        </div> -->

        <section class="user-home">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-12">

                                        <form action="" class="form-filter">
                                            <div class="form-row align-items-end">
                                                <div class="col-xl-3 col-lg-4 col-md-6 col-12">
                                                    <div class="form-group">
                                                        <label for="fName">Title</label>
                                                        <input type="text" v-model="title" class="form-control fil-input" id="title"
                                                        placeholder="Enter Title">
                                                    </div>
                                                </div>
                                                <div class="col-xl-3 col-lg-4 col-md-6 col-12">
                                                    <div class="form-group">
                                                        <label for="fName">City</label>
                                                        <input type="text" v-model="city" class="form-control fil-input" id="city"
                                                        placeholder="Enter City">
                                                    </div>
                                                </div>
                                                <div class="col-xl-3 col-lg-4 col-md-6 col-12">
                                                    <div class="form-group">
                                                        <label for="salary">Salary (Min)</label>
                                                        <input type="number" v-model="salary" class="form-control fil-input" id="salary"
                                                        placeholder="Enter salary">
                                                    </div>
                                                </div>
                                                <div class="col-xl-3 col-lg-4 col-md-6 col-12">
                                                    <div class="form-group">
                                                        <input @click="getJobLogs()" type="button" class="search-job" value="Search">

                                                    </div>

                                                </div>

                                            </div>

                                        </form>

                                    </div>
                                </div>

                                <div class="row align-items-end">
                                    <div class="col-lg-9 col-md-8 col-12">

                                        <div class="u_wrap">
                                            <span>Sort By:</span>
                                            <div class="inner">
                                                <div class="form-group m-0">
                                                    <label for="from-date">From</label>
                                                    <date-picker
                                                    id="from"
                                                    class="u-edit-txt"
                                                    valueType="format"
                                                    v-model="from"
                                                    ></date-picker>
                                                </div>
                                            </div>
                                            <div class="inner">
                                                <div class="form-group m-0">
                                                    <label for="from-date">To</label>
                                                    <date-picker
                                                    id="to"
                                                    class="u-edit-txt"
                                                    valueType="format"
                                                    v-model="to"
                                                    ></date-picker>
                                                </div>
                                            </div>

                                        </div>


                                    </div>
                                    <div class="col-lg-3 col-md-4 col-12">
                                       <button @click="clearSearch()" type="button" class="search-job" value="Search">Clear Search</button>
                                       <a href="#" class="filter-by" data-toggle="modal" data-target='#filter-popup'><i
                                        class="fa fa-filter" aria-hidden="true"></i> Filter By <i
                                        class="fa fa-caret-down" aria-hidden="true"></i></a>
                                    </div>
                                </div>

                                <div class="row mt-4">

                                    <div class="col-lg-6 col-md-6 col-12" :key="index" v-for="(job,index) in joblogs.data">
                                        <div class="comp-card">

                                            <div class="drop-wrap">
                                                <div class="dropdown">
                                                    <p class="dropdown-toggle" data-toggle="dropdown"
                                                    aria-haspopup="true" aria-expanded="false">
                                                    <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                                                </p>
                                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                    <router-link class="dropdown-item" :to="{name: 'user.job.show',params:{id: job.id}}"><i class="fa fa-eye" aria-hidden="true"></i>
                                                    View</router-link>

                                                </div>
                                            </div>
                                        </div>


                                       <router-link  :to="{name: 'user.job.show',params:{id: job.id}}">  
                                           <img :src="`${base_url}/assets/user/images/company-1.png`" alt="">
                                        </router-link>
                                        <p class="company-title">{{job.job_title}}</p>
                                        <div class="inner-card">
                                            <div class="row">
                                                <div class="col-lg-6 col-md-12 ">
                                                    <p><i class="fa fa-calendar" aria-hidden="true"></i> {{formatDate(job.apply_before)}}
                                                    </p>

                                                </div>
                                                <div class="col-lg-6 col-md-12 ">
                                                    <p><i class="fa fa-map-marker" aria-hidden="true"></i>{{job.state}}, {{job.city}}</p>
                                                </div>
                                                <div class="col-12">
                                                    <p><i class="fa fa-euro" aria-hidden="true"></i>{{job.salary_range}}</p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-if="typeof joblogs.data != 'undefined' && joblogs.data.length == 0">

                                        <h2 >NO JOB AVAILABLE</h2>
                                    </div>
                                </div>



                            </div>

                            <pagination :data="streams" :limit="1" @pagination-change-page="getStream">
                                <span slot="prev-nav">&lt; Previous</span>
                                <span slot="next-nav">Next &gt;</span>
                            </pagination>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Modal 1 -->
    <div class="modal fade" id="system_message" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content recovery">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">

                <div class="row">
                    <div class="col-12 text-center">
                        <h4>System Message</h4>
                        <p class="system-msg">Thanks for joining the platform</p>
                        <a href="#" data-dismiss="modal" aria-label="Close" class="btn-sys">got it</a>
                    </div>
                </div>


            </div>

        </div>
    </div>
</div>
<!-- Modal 2 -->
<div class="modal fade" id="expired_message" tabindex="-1" role="dialog"
aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content recovery">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">

            <div class="row">
                <div class="col-12 text-center">
                    <h4>Package Expired</h4>
                    <p class="system-msg">Please Renew Your Package To Continue
                    Using Services</p>
                    <a href="#" data-dismiss="modal" aria-label="Close" class="btn-sys">got it</a>
                </div>
            </div>


        </div>

    </div>
</div>
</div>
<!-- Modal 3 -->
<div class="modal fade" id="training-popup" tabindex="-1" role="dialog"
aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content recovery">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">

            <div class="row">
                <div class="col-12 text-center">
                    <h4>System Message</h4>
                    <p class="system-msg">New Training Prgram Has Been Scheduled</p>
                    <div class="row">
                        <div class="col-md-6 col-12">
                            <a href="#" data-dismiss="modal" aria-label="Close" class="btn-sys w-100">View
                            Program</a>

                        </div>
                        <div class="col-md-6 col-12">
                            <a href="#" data-dismiss="modal" aria-label="Close"
                            class="btn-sys btn-grey w-100">Close</a>

                        </div>
                    </div>
                </div>
            </div>


        </div>

    </div>
</div>
</div>

<!-- Modal Filter -->
<div class="modal fade" id="filter-popup" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
aria-hidden="true">
<div class="modal-dialog modal-dialog-centered modal-xl" role="document">
    <div class="modal-content recovery">
        <div class="modal-header">
            <div class="row">
                <div class="col-12">

                    <p>
                        <i class="fa fa-filter" aria-hidden="true"></i> Filter By <i
                        class="fa fa-caret-down" aria-hidden="true"></i>
                    </p>
                </div>
            </div>
        </div>
        <div class="modal-body">

            <div class="row">
                <div class="col-12">
                    <div class="filter-wrapper">

                        <div class="w-1">
                            <div class="card text-white mb-3">
                                <div class="card-header filter-h">Experience</div>
                                <div class="card-body filter-body">
                                    <div class="checks-wrap">
                                        <label class="container-filter">Fresh Graduates
                                            <input type="radio"  v-model="year_of_expereince" value="year_of_expereince"    name="year_of_expereince" checked="checked">
                                            <span class="checkmark-filter"></span>
                                        </label>
                                    </div>
                                    <div class="checks-wrap">
                                        <label class="container-filter">1 Year or less
                                            <input type="radio"  v-model="year_of_expereince" value= "year_of_expereince"   name="year_of_expereince">
                                            <span class="checkmark-filter"></span>
                                        </label>
                                    </div>
                                    <div class="checks-wrap">
                                        <label class="container-filter">1-2 Years
                                            <input type="radio"  v-model="year_of_expereince" value="year_of_expereince"   name="year_of_expereince">
                                            <span class="checkmark-filter"></span>
                                        </label>
                                    </div>
                                    <div class="checks-wrap">
                                        <label class="container-filter">2-5 Years
                                            <input type="radio"  v-model="year_of_expereince" value= "year_of_expereince"   name="year_of_expereince">
                                            <span class="checkmark-filter"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="card text-white mb-3">
                                <div class="card-header filter-h">Education Training</div>
                                <div class="card-body filter-body">
                                    <div class="checks-wrap">
                                        <label class="container-filter">University
                                            <input type="radio"  v-model="education_training" value="University"  name="education_training">
                                            <span class="checkmark-filter"></span>
                                        </label>
                                    </div>
                                    <div class="checks-wrap">
                                        <label class="container-filter">College or apperenticeship
                                            <input type="radio"  v-model="education_training" value="College"  name="education_training">
                                            <span class="checkmark-filter"></span>
                                        </label>
                                    </div>
                                    <div class="checks-wrap">
                                        <label class="container-filter">Secondary School or
                                            Job Specific Training
                                            <input type="radio" v-model="education_training" value="Secondary School or Job Specific Training"  name="education_training">
                                            <span class="checkmark-filter"></span>
                                        </label>
                                    </div>
                                    <div class="checks-wrap">
                                        <label class="container-filter">No education required
                                            <input type="radio"  v-model="education_training" value="No Education Required"  name="education_training">
                                            <span class="checkmark-filter"></span>
                                        </label>
                                    </div>


                                </div>
                            </div>
                        </div>
                        <div class="w-2">
                            <div class="card text-white mb-3">
                                <div class="card-header filter-h">Category</div>
                                <div class="card-body filter-body">
                                    <div class="checks-wrap" v-for="category_data in categories.data">
                                        <label class="container-filter">{{category_data.category_name}}
                                            <input type="radio"  v-model="category" :value="category_data.id"  name="category">
                                            <span class="checkmark-filter"></span>
                                        </label>
                                    </div>
                                    <!-- <div class="checks-wrap">
                                        <label class="container-filter">Bussiness, Finance
                                            <input type="radio"  v-model="category" value="category"  name="category">
                                            <span class="checkmark-filter"></span>
                                        </label>
                                    </div>
                                    <div class="checks-wrap">
                                        <label class="container-filter">Natural & Applied science
                                            <input type="radio"  v-model="category" value="category"  name="category">
                                            <span class="checkmark-filter"></span>
                                        </label>
                                    </div>
                                    <div class="checks-wrap">
                                        <label class="container-filter">Health Occupations
                                            <input type="radio"  v-model="category" value="category"  name="category">
                                            <span class="checkmark-filter"></span>
                                        </label>
                                    </div>
                                    <div class="checks-wrap">
                                        <label class="container-filter">Education, Law, Social And Community
                                            <input type="radio"  v-model="category" value="category"  name="category">
                                            <span class="checkmark-filter"></span>
                                        </label>
                                    </div>
                                    <div class="checks-wrap">
                                        <label class="container-filter">Art, Culture, Recreation And Sport
                                            <input type="radio"  v-model="category" value="category"  name="category">
                                            <span class="checkmark-filter"></span>
                                        </label>
                                    </div>
                                    <div class="checks-wrap">
                                        <label class="container-filter">Sales And Service
                                            <input type="radio"  v-model="category" value="category"  name="category">
                                            <span class="checkmark-filter"></span>
                                        </label>
                                    </div>
                                    <div class="checks-wrap">
                                        <label class="container-filter">Trades, Transport, Equipment
                                            Operators Etc
                                            <input type="radio"  v-model="category" value="category"  name="category">
                                            <span class="checkmark-filter"></span>
                                        </label>
                                    </div>
                                    <div class="checks-wrap">
                                        <label class="container-filter">Natural Resources, Agriculture Etc
                                            <input type="radio"  v-model="category" value="category"  name="category">
                                            <span class="checkmark-filter"></span>
                                        </label>
                                    </div>
                                    <div class="checks-wrap">
                                        <label class="container-filter">Manufacturing And Utilities
                                            <input type="radio"  v-model="category" value="category"  name="category">
                                            <span class="checkmark-filter"></span>
                                        </label>
                                    </div> -->
                                </div>
                            </div>
                        </div>
                        <div class="w-1">
                            <div class="card text-white mb-3">
                                <div class="card-header filter-h">Period of employment</div>
                                <div class="card-body filter-body">
                                    <div class="checks-wrap">
                                        <label class="container-filter">Permanent
                                            <input type="radio"  v-model="period_of_employment" value="Permanent"  name="period_of_employment">
                                            <span class="checkmark-filter"></span>
                                        </label>
                                    </div>
                                    <div class="checks-wrap">
                                        <label class="container-filter">Contract Based
                                            <input type="radio"  v-model= "period_of_employment" value="Contract Based"name="period_of_employment">
                                            <span class="checkmark-filter"></span>
                                        </label>
                                    </div>
                                    <div class="checks-wrap">
                                        <label class="container-filter">Seasonal
                                            <input type="radio"  v-model= "period_of_employment" value="Seasonal" name="period_of_employment">
                                            <span class="checkmark-filter"></span>
                                        </label>
                                    </div>
                                    <div class="checks-wrap">
                                        <label class="container-filter">Casual
                                            <input type="radio"  v-model= "period_of_employment" value="Casual" name="period_of_employment">
                                            <span class="checkmark-filter"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="card text-white mb-3">
                                <div class="card-header filter-h">hours of work</div>
                                <div class="card-body filter-body">
                                    <div class="checks-wrap">
                                        <label class="container-filter">Full time
                                            <input type="radio" v-model='hours_of_work'value="Full Time" name="hours_of_work">
                                            <span class="checkmark-filter" ></span>
                                        </label>
                                    </div>
                                    <div class="checks-wrap">
                                        <label class="container-filter">Part time
                                            <input type="radio" v-model="hours_of_work" value="Part Time" name="hours_of_work">
                                            <span class="checkmark-filter"></span>
                                        </label>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="row break">
                            <div class="col-12 text-center">
                                <button type="button" @click="getJobLogs()" data-dismiss="modal" aria-label="Close"
                                class="btn-sys">Apply</button>
                            </div>
                        </div>


                    </div>
                </div>
            </div>


        </div>

    </div>
</div>
</div>
<inner-page-footer></inner-page-footer>
</div>
</template>
<script>
    const InnerPageFooter = () => import('../components/InnerPageFooter.vue');
    const RegisterHeader = () => import('../components/RegisterHeader.vue');
    export default {
        created() {
        },
        components: {
            InnerPageFooter,
            RegisterHeader,
        },
        data() {
            return {
                joblogs: {},
                search: '',
                title:'',
                city: '',
                salary: '',
                hours_of_work: '',
                year_of_expereince: '',
                education_training: '',
                category: '',
                period_of_employment: '',
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
                job_status: 'all',
                categories: {},
                userPackage: '',
                packageBooleanTrial: 0
            };
        },
        components: {
            InnerPageFooter,
            RegisterHeader,
        },
        async created() {
            await this.getJobLogs();
            await this.getCategory();
            await this.getSubscriptionPackage();
        },
        methods: {
            async getJobLogs(page = 1) {

                let res = (await axios.get(`/api/admin/joblog?page=` + page + '&entries=' + this.entries + '&to=' + this.to + '&from=' + this.from+ '&title=' + this.title+ '&city=' + this.city+ '&hours_of_work=' + this.hours_of_work + '&education_training=' + this.education_training+ '&category=' + this.category+ '&period_of_employment=' + this.period_of_employment+ '&year_of_expereince=' + this.year_of_expereince+"&salary="+this.salary));
                this.joblogs = res.data;
                console.log(this.joblogs);
            },
            async getCategory(page = 1) {
                let res = (await axios.get('/api/admin/category?page='+page+'&entries='+this.entries+'&from='+this.from+'&to='+this.to));
                this.categories = res.data;
                console.log(this.categories);
            },
            async getSubscriptionPackage() {
                let res = (await axios.get('/api/admin/subscriptions/users/package'));
                this.userPackage = res.data;
                if(this.userPackage.data[0].packages.package_name == 'Free Trial')
                {
                    localStorage.setItem('packageBooleanTrial', '1');
                }else{
                    localStorage.setItem('packageBooleanTrial', '0');

                }
                 this.packageBooleanTrial = localStorage.getItem('packageBooleanTrial');
                console.log(this.userPackage);
            },
            clearSearch(){
                this.title = '';
                this.city = '';
                this.hours_of_work = '';
                this.education_training = '';
                this.category = '';
                this.period_of_employment = '';
                this.year_of_expereince = '';
                this.salary = '';
                this.getJobLogs();
            }


        }
    };
</script>
