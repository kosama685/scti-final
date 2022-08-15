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
                                            <h1><a href="users-listing.php">Create Job</a></h1>
                                        </div>
                                    </div>

                                    <ValidationObserver v-slot="{ handleSubmit }">
                                        <form class="create-job" ref="JobCreateForm"
                                              @submit.prevent="handleSubmit(jobUpdate)">

                                            <div class="row mt-2">
                                                <div class="col-12">
                                                    <div
                                                        class="card card-createjobs collapse-icon accordion-icon-rotate user_prof_acc bg-qqq">
                                                        <div id="headingCollapse11" class="card-header">
                                                            <h3 class="card-title lead">Job Details</h3>
                                                        </div>
                                                        <div id="collapse11" role="tabpanel"
                                                             aria-labelledby="headingCollapse11"
                                                             class="collapse show  bg-qqq">
                                                            <div class="card-content ">
                                                                <div class="card-body mt-sm-0 mt-2">
                                                                    <div class="row">
                                                                    
                                                                        <div
                                                                            class="col-xl-3 col-lg-4 col-md-6 col-12 t-c">
                                                                            
                                                                            <p class="fieldName">Job Title*</p>
                                                                            <ValidationProvider name="Job Name"
                                                                                                rules="required"
                                                                                                v-slot="{ errors }">
                                                                                <input type="text" name="job_title"
                                                                                       class="u-edit-txt"
                                                                                       placeholder="Job Title"
                                                                                       v-model="job_title"

                                                                                       >
                                                                                <span class="text-danger">{{
                                                                                        errors[0]
                                                                                    }}</span>
                                                                            </ValidationProvider>
                                                                        </div>
                                                                    </div>

                                                                    <div class="row mt-0 mt-lg-3">
                                                                        <div
                                                                            class="col-xl-3 col-lg-4 col-md-6 col-12 t-c">
                                                                            <p class="fieldName">Company Name*</p>
                                                                            <ValidationProvider name="Company Name"
                                                                                                rules="required"
                                                                                                v-slot="{ errors }">
                                                                                <input type="text" name="company_name"
                                                                                       class="u-edit-txt"
                                                                                       placeholder="Company Name"
                                                                                       v-model="company_name">
                                                                                <span
                                                                                    class="text-danger">{{ errors[0] }}</span>
                                                                            </ValidationProvider>

                                                                        </div>
                                                                        <div
                                                                            class="col-xl-3 col-lg-4 col-md-6 col-12 t-c">
                                                                            <p class="fieldName">Salary Range</p>
                                                                        <input type="text" name="salary_range"
                                                                                       v-model="salary_range"
                                                                                       class="u-edit-txt"
                                                                                       pattern="[0-9]{0,9}-[0-9]{0,9}"
                                                                                       placeholder="€123 - €124">
                                                                                
                                                                        </div>
                                                                        <div
                                                                            class="col-xl-3 col-lg-4 col-md-6 col-12 t-c">
                                                                            <p class="fieldName">Apply Before*</p>
                                                                            <ValidationProvider name="Apply Before"
                                                                                                rules="required"
                                                                                                v-slot="{ errors }">
                                                                                <date-picker
                                                                                             id="apply-before"
                                                                                             class="u-edit-txt"
                                                                                             valueType="format"
                                                                                              v-model="apply_before"
                                                                                            ></date-picker>

                                                                                <span
                                                                                    class="text-danger">{{ errors[0] }}</span>
                                                                            </ValidationProvider>
                                                                        </div>
                                                                    </div>
                                                                    <div class="row mt-0 mt-lg-3">
                                                                        <div
                                                                            class="col-xl-3 col-lg-4 col-md-6 col-12 t-c">
                                                                            <p class="fieldName">Type *</p>
                                                                            <ValidationProvider
                                                                                name="Period of Employment"
                                                                                rules="required"
                                                                                v-slot="{ errors }">
                                                                                <select name="period_of_employment"
                                                                                        v-model="period_of_employment"
                                                                                        id="" class="job-cat">
                                                                                    <option value="" selected disabled>
                                                                                        Select
                                                                                    </option>
                                                                                    <option value="Permanent">Permanent
                                                                                    </option>
                                                                                    <option value="Contract Based">
                                                                                        Contract
                                                                                        Based
                                                                                    </option>
                                                                                    <option value="parttime">Part Time
                                                                                    </option>
                                                                                </select>
                                                                                <span
                                                                                    class="text-danger">{{ errors[0] }}</span>
                                                                            </ValidationProvider>
                                                                        </div>

                                                                        <div
                                                                            class="col-xl-3 col-lg-4 col-md-6 col-12 t-c">
                                                                            <p class="fieldName">Remote</p>
                                                                            <input type="checkbox"  name="remote" v-model="remote">
                                                                         
                                                                        </div>
                                                                      
                                                                    </div>
                                                                   
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div id="headingCollapse12" class="card-header">
                                                            <h3 class="card-title lead ">Job Location</h3>
                                                        </div>
                                                        <div id="collapse12" role="tabpanel"
                                                             aria-labelledby="headingCollapse12"
                                                             class="collapse show  bg-qqq">
                                                            <div class="card-content">
                                                                <div class="card-body mt-sm-0 mt-2">
                                                                    <div class="row">
                                                                        <div
                                                                            class="col-xl-3 col-lg-4 col-md-6 col-12 t-c">
                                                                            <p class="fieldName">Address*</p>
                                                                            <ValidationProvider name="Address"
                                                                                                rules="required"
                                                                                                v-slot="{ errors }">
                                                                                <input type="text" name="address"
                                                                                       v-model="address"
                                                                                       class="u-edit-txt"
                                                                                       value="Abc street">
                                                                                <span
                                                                                    class="text-danger">{{ errors[0] }}</span>
                                                                            </ValidationProvider>
                                                                        </div>
                                                                        <div
                                                                            class="col-xl-3 col-lg-4 col-md-6 col-12 t-c">
                                                                            <p class="fieldName">County*</p>
                                                                            <ValidationProvider name="Country"
                                                                                                rules="required"
                                                                                                v-slot="{ errors }">
                                                                            <select name="country" v-model="country" class="form-control">
                                                                                <option value="Galway">Galway</option>
                                                                                <option value="Leitrim">Leitrim</option>  
                                                                                <option value="Mayo">Mayo</option>
                                                                                <option value="Roscommon">Roscommon</option>  
                                                                                <option value="Sligo">Sligo</option>
                                                                                <option value="Carlow">Carlow</option>  
                                                                                <option value="Dublin">Dublin</option>
                                                                                <option value="Kildare">Kildare</option>  
                                                                                <option value="Kilkenny">Kilkenny</option>
                                                                                <option value="Laois">Laois</option>  
                                                                                <option value="Longford">Longford</option>
                                                                                <option value="Louth">Louth</option>  
                                                                                <option value="Meath">Meath</option>
                                                                                <option value="Offaly">Offaly</option>  
                                                                                <option value="Westmeath">Westmeath</option>
                                                                                <option value="Wexford">Wexford</option>  
                                                                                <option value="Wicklow">Wicklow</option>
                                                                                <option value="Clare">Clare</option>  
                                                                                <option value="Cork">Cork</option>
                                                                                <option value="Kerry">Kerry</option>  
                                                                                <option value="Limerick">Limerick</option>
                                                                                <option value="Tipperary">Tipperary</option>  
                                                                                <option value="Waterford">Waterford</option>  
                                                                                <option value="Cavan">Cavan</option>  
                                                                                <option value="Donegal">Donegal</option>  
                                                                                <option value="Monaghan">Monaghan</option>  
                                                                                <option value="Antrim">Antrim</option>  
                                                                                <option value="Armagh">Armagh</option>  
                                                                                <option value="Fermanagh">Fermanagh</option>  
                                                                                <option value="Down">Down</option>  
                                                                                <option value="Londonderry">Londonderry</option>  
                                                                                <option value="Tyrone">Tyrone</option>  
                                                                                </select>
                                                                               
                                                                                <span
                                                                                    class="text-danger">{{ errors[0] }}</span>
                                                                            </ValidationProvider>
                                                                        </div>
                                                                    </div>
                                                                    <div class="row mt-md-1">
                                                                      
                                                                        <div
                                                                            class="col-xl-3 col-lg-4 col-md-6 col-12 t-c">
                                                                            <p class="fieldName">City</p>
                                                                            <ValidationProvider name="City"
                                                                                                rules="required"
                                                                                                v-slot="{ errors }">
                                                                                <input type="text" name="city"
                                                                                       v-model="city"
                                                                                       class="u-edit-txt"
                                                                                       value="abc city">
                                                                                <span
                                                                                    class="text-danger">{{ errors[0] }}</span>
                                                                            </ValidationProvider>
                                                                        </div>
                                                                        <div
                                                                            class="col-xl-3 col-lg-4 col-md-6 col-12 t-c">
                                                                            <p class="fieldName">Post code</p>
                                                                            <ValidationProvider name="Post code"
                                                                                                
                                                                                                v-slot="{ errors }">
                                                                                <input type="number" name="zip_code"
                                                                                       v-model="zip_code"
                                                                                       class="u-edit-txt" value="10001">
                                                                                <span
                                                                                    class="text-danger">{{ errors[0] }}</span>
                                                                            </ValidationProvider>
                                                                        </div>

                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div id="headingCollapse13" class="card-header">
                                                            <h3 class="card-title lead ">Job responsibilities</h3>
                                                        </div>
                                                        <div id="collapse13" role="tabpanel"
                                                             aria-labelledby="headingCollapse13"
                                                             class="collapse show  bg-qqq">
                                                            <div class="card-content">
                                                                <div class="card-body mt-sm-0 mt-2">
                                                                    <div class="row">
                                                                        <div class="col-xl-12 t-c">
                                                                            <p class="fieldName">Job Description*</p>
                                                                            <ValidationProvider name="Job Descriptions"
                                                                                                rules="required"
                                                                                                v-slot="{ errors }">
                                                                            <textarea name="job_descriptions"
                                                                                      v-model="job_descriptions"
                                                                                      class="u-edit-txt"
                                                                                      cols="30" rows="10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro veritatis repudiandae dolores. Ut, adipisci, error sequi pariatur expedita doloribus necessitatibus quod repellendus repudiandae quo nisi harum rerum a exercitationem natus.</textarea>
                                                                                <span
                                                                                    class="text-danger">{{ errors[0] }}</span>
                                                                            </ValidationProvider>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                         <!-- <div class="col-xl-3 col-lg-4 col-md-6 col-12 t-c">
                                                            <h4 class="fieldName">Employee Benefits</h4>
                                                            <div v-for="(item,index) in employee_benefits.data" :key="index">

                                                                <input type="checkbox"  :value="item.name" v-model="employee_check"   > {{item.name}}
                                                            </div>                                                            
                                                        </div> -->

                                                        <div id="headingCollapse14" class="card-header">
                                                            <h3 class="card-title lead ">Experience Information</h3>
                                                        </div>
                                                        <div id="collapse14" role="tabpanel"
                                                             aria-labelledby="headingCollapse14"
                                                             class="collapse show  bg-qqq">
                                                            <div class="card-content">
                                                                <div class="card-body mt-sm-0 mt-2">
                                                                    <div class="row">
                                                                        <div
                                                                            class="col-xl-3 col-lg-4 col-md-6 col-12 t-c">
                                                                            <p class="fieldName">Years Of experience
                                                                                Needed*</p>
                                                                            <ValidationProvider
                                                                                name="Years Of experience"
                                                                                rules="required"
                                                                                v-slot="{ errors }">
                                                                                <select name="years_of_experience"
                                                                                        v-model="years_of_experience"
                                                                                        class="job-cat">
                                                                                    <option value="">Student Placement
                                                                                    </option>
                                                                                    <option value="1 Year or Less">1
                                                                                        Year or
                                                                                        Less
                                                                                    </option>
                                                                                    <option value="1-2 Years">1-2 Years
                                                                                    </option>
                                                                                    <option value="2-5 Years">2-5 Years
                                                                                    </option>
                                                                                    <option value="5-10 Years">5-10
                                                                                        Years
                                                                                    </option>
                                                                                    <option value="10+ Years">10+ Years
                                                                                    </option>
                                                                                </select>
                                                                                <span
                                                                                    class="text-danger">{{ errors[0] }}</span>
                                                                            </ValidationProvider>
                                                                        </div>
                                                                        <div
                                                                            class="col-xl-3 col-lg-4 col-md-6 col-12 t-c">
                                                                            <p class="fieldName">Degree
                                                                                Requirements*</p>
                                                                            <ValidationProvider name="Degree"
                                                                                                rules="required"
                                                                                                v-slot="{ errors }">
                                                                                <select name="degree" v-model="degree"
                                                                                        class="job-cat">
                                                                                    <option value="" selected disabled>
                                                                                        Select
                                                                                    </option>
                                                                                    <option value="University">
                                                                                        University
                                                                                    </option>
                                                                                    <option value="College">College
                                                                                    </option>
                                                                                    <option value="Secondary School or Job
                                                                                    Specific Training">Secondary School
                                                                                        or Job
                                                                                        Specific Training
                                                                                    </option>
                                                                                    <option
                                                                                        value="No Education Required">No
                                                                                        Education Required
                                                                                    </option>
                                                                                </select>
                                                                                <span
                                                                                    class="text-danger">{{ errors[0] }}</span>
                                                                            </ValidationProvider>
                                                                        </div>
                                                                    </div>
                                                                    <div class="row mt-md-1">
                                                                        <div
                                                                            class="col-xl-6 col-lg-6 col-md-6 col-12 t-c">
                                                                            <p class="fieldName">Skills*</p>
                                                                            <ValidationProvider name="Skill"
                                                                                                v-slot="{ errors }">
                                                                            <textarea name="skill" v-model="skill"
                                                                                      class="u-edit-txt"
                                                                                      cols="30" rows="10" required>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro veritatis repudiandae dolores. Ut, adipisci, error sequi pariatur expedita doloribus necessitatibus quod repellendus repudiandae quo nisi harum rerum a exercitationem natus.</textarea>
                                                                                <span
                                                                                    class="text-danger">{{ errors[0] }}</span>
                                                                            </ValidationProvider>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-12">
                                                                <button type="submit" class="green-btn ml-2"
                                                                        >Update
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </ValidationObserver>
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
            category_id: undefined,
            job_title: '',
            company_name: '',
            salary_range: '',
            apply_before: '',
            period_of_employment: '',
            hours_of_work: '',
            address: '',
            country: '',
            state: '',
            city: '',
            zip_code: '',
            job_descriptions: '',
            years_of_experience: '',
            degree: '',
            skill: '',
            remote: '',
            fileUpload: '',
            categories: {},
            employee_benefits: {},
            employee_check:[]
        }

    },
     async created() {
        await this.getCategory();
        await this.getEmployeeBenefits();
        await this.getPaymentLogs();

      },
    methods: {
        async jobUpdate(e) {
            let id = this.$route.params.id;
           let fd = new FormData(this.$refs.JobCreateForm);
           fd.append('apply_before',this.apply_before);
            fd.append('employee_benefits',this.employee_check);
            fd.append('remote',this.remote);
            fd.delete('date');
            let response = (await axios.post(`/api/admin/job_update/` + id,fd)).data;

            if (response) {
                  let self = this;
                setTimeout(function () {
                    self.$router.push({name: 'businessOwner.jobs.index'});
                }, 1000);
            } else {
                   this.$snotify.error(response.data.data.message);
            }
        },
        
        async getCategory(page = 1) {
            let res = (await axios.get('/api/admin/category?status=1'));
            this.categories = res.data;
            console.log(this.categories);
        },
         async getEmployeeBenefits() {
            let res = (await axios.get('/api/admin/getEmployeeBenefits'));
            this.employee_benefits = res.data;
            console.log("Employee Benefits is",this.employee_benefits);
        },
        async getPaymentLogs(page = 1) {

        let id = (this.$route.params.id) ? '/'+this.$route.params.id : '';

        let res = (await axios.get(`/api/admin/candidate/job`+id));
        this.joblogs = res.data.data[0];
        this.job_title=this.joblogs.job_title;
        this.company_name=this.joblogs.company_name;
        this.salary_range=this.joblogs.salary_range;
        this.period_of_employment=this.joblogs.period_of_employment;
        this.address=this.joblogs.address;
        this.country=this.joblogs.country;
        this.city=this.joblogs.city;
        this.zip_code=this.joblogs.zip_code;
        this.job_descriptions=this.joblogs.job_descriptions;
        this.years_of_experience=this.joblogs.job_descriptions;
        this.degree=this.joblogs.degree;
        this.skill=this.joblogs.skill;
        
        console.log("job log is",this.joblogs);
        //  job_title: '',
        //     company_name: '',
        //     salary_range: '',
        //     apply_before: '',
        //     period_of_employment: '',
        //     hours_of_work: '',
        //     address: '',
        //     country: '',
        //     state: '',
        //     city: '',
        //     zip_code: '',
        //     job_descriptions: '',
        //     years_of_experience: '',
        //     degree: '',
        //     skill: '',
        //     remote: '',
      }
    }
}

</script>
