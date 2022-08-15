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
                                            @submit.prevent="handleSubmit(JobCreate)">

                                            <div class="row">
                                                <div class="col-12">
                                                    <div class="card collapse-icon accordion-icon-rotate user_prof_acc user_jobs_acc">
                                                        <div id="headingCollapse11" class="card-header">
                                                            <a data-toggle="collapse" href="#collapse11" aria-expanded="true"
                                                                aria-controls="collapse11" class="card-title lead">Job Details
                                                            </a>
                                                        </div>
                                                        <div id="collapse11" role="tabpanel"
                                                            aria-labelledby="headingCollapse11"
                                                            class="collapse show  bg-qqq">
                                                            <div class="card-content ">
                                                                <div class="card-body mt-sm-0 mt-2">
                                                                    <div class="row">
                                                                        <div
                                                                            class="col-xl-3 col-lg-4 col-md-6 col-12 t-c">
                                                                            <p class="fieldName">Job Category*</p>
                                                                            <ValidationProvider name="Job Category"
                                                                                                rules="required"
                                                                                                v-slot="{ errors }">

                                                                                <select name="category_id"
                                                                                        v-model="category_id"
                                                                                        class="job-cat bg-glass">
                                                                                    <option v-for="(category,index) in categories.data" :value="category.id">{{category.category_name}}
                                                                                    </option>

                                                                                </select>
                                                                                <span class="text-danger">{{
                                                                                        errors[0]
                                                                                    }}</span>
                                                                            </ValidationProvider>
                                                                        </div>
                                                                        <div
                                                                            class="col-xl-3 col-lg-4 col-md-6 col-12 t-c">
                                                                            <p class="fieldName">Job Title*</p>
                                                                            <ValidationProvider name="Job Name"
                                                                                rules="required" v-slot="{ errors }">
                                                                                <input type="text" name="job_title"
                                                                                    class="u-edit-txt"
                                                                                    placeholder="Job Title"
                                                                                    v-model="job_title">
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
                                                                                rules="required" v-slot="{ errors }">
                                                                                <input type="text" name="company_name"
                                                                                    class="u-edit-txt"
                                                                                    placeholder="Company Name"
                                                                                    v-model="company_name">
                                                                                <span class="text-danger">{{ errors[0]
                                                                                }}</span>
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
                                                                                rules="required" v-slot="{ errors }">
                                                                                <date-picker id="apply-before"
                                                                                    class="u-edit-txt"
                                                                                    valueType="format"
                                                                                    v-model="apply_before">
                                                                                </date-picker>

                                                                                <span class="text-danger">{{ errors[0]
                                                                                }}</span>
                                                                            </ValidationProvider>
                                                                        </div>
                                                                    </div>
                                                                    <div class="row mt-0 mt-lg-3">
                                                                        <div
                                                                            class="col-xl-3 col-lg-4 col-md-6 col-12 t-c">
                                                                            <p class="fieldName">Period Of Employment *</p>
                                                                            <ValidationProvider
                                                                                name="Period of Employment"
                                                                                rules="required" v-slot="{ errors }">
                                                                                <select name="period_of_employment"
                                                                                    v-model="period_of_employment" id=""
                                                                                    class="job-cat">
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
                                                                                <span class="text-danger">{{ errors[0]
                                                                                }}</span>
                                                                            </ValidationProvider>
                                                                        </div>

                                                                        <!-- <div
                                                                            class="col-xl-3 col-lg-4 col-md-6 col-12 t-c">
                                                                            <p class="fieldName">Remote</p>
                                                                            <input type="checkbox" name="remote"
                                                                                v-model="remote"> -->
                                                                            <!-- <ValidationProvider
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
                                                                                    <option value="Seasonal">Seasonal
                                                                                    </option>
                                                                                    <option value="Casual">Casual
                                                                                    </option>
                                                                                </select>
                                                                                <span
                                                                                    class="text-danger">{{ errors[0] }}</span>
                                                                            </ValidationProvider> -->
                                                                        <!-- </div> -->
                                                                        <div
                                                                            class="col-xl-3 col-lg-4 col-md-6 col-12 t-c">
                                                                            <p class="fieldName">Hours Of Work*</p>
                                                                            <ValidationProvider name="Hours Of Work"
                                                                                                rules="required"
                                                                                                v-slot="{ errors }">
                                                                                <select name="hours_of_work"
                                                                                        v-model="hours_of_work"
                                                                                        class="job-cat bg-glass">
                                                                                    <option value="" selected disabled>
                                                                                        Select
                                                                                    </option>
                                                                                    <option value="Full Time">Full Time
                                                                                    </option>
                                                                                    <option value="Part Time">Part Time
                                                                                    </option>

                                                                                </select>
                                                                                <span
                                                                                    class="text-danger">{{ errors[0] }}</span>
                                                                            </ValidationProvider>
                                                                        </div>
                                                                    </div>
                                                                     
                                                                    <div class="row my-2">
                                                                        <div class="col-12 text-center text-md-left">
                                                                            <video id="video-preview" controls v-show="file != ''"/>
                                                                        </div>
                                                                        <div class="col-12 text-center text-md-left">
                                                                            <label>Upload Video
                                                                                <input name="file" type="file" accept="video/*" @change="handleFileUpload( $event )"/>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div id="headingCollapse12" class="card-header">
                                                            <a data-toggle="collapse" href="#collapse11" aria-expanded="true"
                                                                aria-controls="collapse11" class="card-title lead">Address Details
                                                            </a>
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
                                                                                rules="required" v-slot="{ errors }">
                                                                                <input type="text" name="address"
                                                                                    v-model="address" class="u-edit-txt"
                                                                                    value="Abc street">
                                                                                <span class="text-danger">{{ errors[0]
                                                                                }}</span>
                                                                            </ValidationProvider>
                                                                        </div>
                                                                        <div class="col-xl-3 col-lg-4 col-md-6 col-12 t-c">
                                                                            <p class="fieldName">County*</p>
                                                                            <ValidationProvider name="Country"
                                                                                rules="required" v-slot="{ errors }">
                                                                                <select name="country" v-model="country"
                                                                                    class="job-cat">
                                                                                    <option value="Galway">Galway
                                                                                    </option>
                                                                                    <option value="Leitrim">Leitrim
                                                                                    </option>
                                                                                    <option value="Mayo">Mayo</option>
                                                                                    <option value="Roscommon">Roscommon
                                                                                    </option>
                                                                                    <option value="Sligo">Sligo</option>
                                                                                    <option value="Carlow">Carlow
                                                                                    </option>
                                                                                    <option value="Dublin">Dublin
                                                                                    </option>
                                                                                    <option value="Kildare">Kildare
                                                                                    </option>
                                                                                    <option value="Kilkenny">Kilkenny
                                                                                    </option>
                                                                                    <option value="Laois">Laois</option>
                                                                                    <option value="Longford">Longford
                                                                                    </option>
                                                                                    <option value="Louth">Louth</option>
                                                                                    <option value="Meath">Meath</option>
                                                                                    <option value="Offaly">Offaly
                                                                                    </option>
                                                                                    <option value="Westmeath">Westmeath
                                                                                    </option>
                                                                                    <option value="Wexford">Wexford
                                                                                    </option>
                                                                                    <option value="Wicklow">Wicklow
                                                                                    </option>
                                                                                    <option value="Clare">Clare</option>
                                                                                    <option value="Cork">Cork</option>
                                                                                    <option value="Kerry">Kerry</option>
                                                                                    <option value="Limerick">Limerick
                                                                                    </option>
                                                                                    <option value="Tipperary">Tipperary
                                                                                    </option>
                                                                                    <option value="Waterford">Waterford
                                                                                    </option>
                                                                                    <option value="Cavan">Cavan</option>
                                                                                    <option value="Donegal">Donegal
                                                                                    </option>
                                                                                    <option value="Monaghan">Monaghan
                                                                                    </option>
                                                                                    <option value="Antrim">Antrim
                                                                                    </option>
                                                                                    <option value="Armagh">Armagh
                                                                                    </option>
                                                                                    <option value="Fermanagh">Fermanagh
                                                                                    </option>
                                                                                    <option value="Down">Down</option>
                                                                                    <option value="Londonderry">
                                                                                        Londonderry</option>
                                                                                    <option value="Tyrone">Tyrone
                                                                                    </option>
                                                                                </select>

                                                                                <!-- <input type="text" name="country"
                                                                                       v-model="country"
                                                                                       class="u-edit-txt"
                                                                                       value="Abc Country"> -->
                                                                                <span class="text-danger">{{ errors[0]
                                                                                }}</span>
                                                                            </ValidationProvider>
                                                                        </div>
                                                                    </div>
                                                                    <div class="row mt-md-1">
                                                                        <div
                                                                            class="col-xl-3 col-lg-4 col-md-6 col-12 t-c">
                                                                            <p class="fieldName">State</p>
                                                                            <ValidationProvider name="State"
                                                                                                rules="required"
                                                                                                v-slot="{ errors }">
                                                                                <input type="text" name="state"
                                                                                       class="u-edit-txt"
                                                                                       value="abc state" v-model="state" >
                                                                                <span
                                                                                    class="text-danger">{{ errors[0] }}</span>
                                                                            </ValidationProvider>
                                                                        </div>
                                                                        <div
                                                                            class="col-xl-3 col-lg-4 col-md-6 col-12 t-c">
                                                                            <p class="fieldName">City</p>
                                                                            <ValidationProvider name="City"
                                                                                rules="required" v-slot="{ errors }">
                                                                                <input type="text" name="city"
                                                                                    v-model="city" class="u-edit-txt"
                                                                                    value="abc city">
                                                                                <span class="text-danger">{{ errors[0]
                                                                                }}</span>
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
                                                                                <span class="text-danger">{{ errors[0]
                                                                                }}</span>
                                                                            </ValidationProvider>
                                                                        </div>

                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div id="headingCollapse13" class="card-header">
                                                            <a data-toggle="collapse" href="#collapse11" aria-expanded="true"
                                                                aria-controls="collapse11" class="card-title lead">Job responsibilities
                                                            </a>
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
                                                                                rules="required" v-slot="{ errors }">
                                                                                <textarea name="job_descriptions"
                                                                                    v-model="job_descriptions"
                                                                                    class="u-edit-txt" cols="30"
                                                                                    rows="10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro veritatis repudiandae dolores. Ut, adipisci, error sequi pariatur expedita doloribus necessitatibus quod repellendus repudiandae quo nisi harum rerum a exercitationem natus.</textarea>
                                                                                <span class="text-danger">{{ errors[0]
                                                                                }}</span>
                                                                            </ValidationProvider>
                                                                        </div>
                                                                        <div class="col-xl-3 col-lg-4 col-md-6 col-12 t-c">
                                                                            <h4 class="fieldName">Employee Benefits</h4>
                                                                            <div class="d-flex align-items-center flex-wrap" >
                                                                                <div class="d-flex align-items-center mr-2" v-for="(item, index) in employee_benefits.data" :key="index" inline>
                                                                                    <input type="checkbox" :value="item.name" class="mr-1" v-model="employee_check" >{{ item.name }}
                                                                                </div>
                                                                            </div>
                                                                            <!-- <input type="checkbox" v-for="(item,index) in employee_benefits.data"  :value="item.id"  name="employee_benefits" v-model="employee_benefits"> -->

                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div id="headingCollapse14" class="card-header">
                                                            <a data-toggle="collapse" href="#collapse11" aria-expanded="true"
                                                                aria-controls="collapse11" class="card-title lead">Experience Information
                                                            </a>
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
                                                                                rules="required" v-slot="{ errors }">
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
                                                                                <span class="text-danger">{{ errors[0]
                                                                                }}</span>
                                                                            </ValidationProvider>
                                                                        </div>
                                                                        <div
                                                                            class="col-xl-3 col-lg-4 col-md-6 col-12 t-c">
                                                                            <p class="fieldName">Degree
                                                                                Requirements*</p>
                                                                            <ValidationProvider name="Degree"
                                                                                rules="required" v-slot="{ errors }">
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
                                                                                <span class="text-danger">{{ errors[0]
                                                                                }}</span>
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
                                                                                    class="u-edit-txt" cols="30"
                                                                                    rows="10"
                                                                                    required>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro veritatis repudiandae dolores. Ut, adipisci, error sequi pariatur expedita doloribus necessitatibus quod repellendus repudiandae quo nisi harum rerum a exercitationem natus.</textarea>
                                                                                <span class="text-danger">{{ errors[0]
                                                                                }}</span>
                                                                            </ValidationProvider>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                        
                                                        <div id="headingCollapse15" class="card-header">
                                                            <a data-toggle="collapse" href="#collapse15" aria-expanded="true"
                                                                aria-controls="collapse15" class="card-title lead">Smart Questions
                                                            </a>
                                                        </div>
                                                        <div id="collapse15" role="tabpanel"
                                                            aria-labelledby="headingCollapse15"
                                                            class="collapse show  bg-qqq">
                                                            <div class="card-content">
                                                                <div class="card-body mt-sm-0 mt-2">
                                                                    <div class="row">
                                                                        <div class="col-xl-8 col-lg-8 col-md-8 col-* t-c" v-for="(input,k) in inputs" :key="k">
                                                                            <ValidationProvider name="question" v-slot="{ errors }">
                                                                                <input type="text" name="question[]" v-model="input.question" class="u-edit-txt" required>
                                                                               
                                                                                <span class="text-danger">{{ errors[0] }}</span>
                                                                            </ValidationProvider>
                                                                             <span>
                                                                                    <i class="fas fa-minus-circle float-right text-danger m-1" @click="remove(k)" v-show="k || ( !k && inputs.length > 1)">Remove</i>
                                                                                    <i class="fas fa-plus-circle float-right text-green mt-1" @click="add(k)" v-show="k == inputs.length-1 && k != 2">Add More</i>
                                                                                </span>
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <p>Only add three Questions</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="card-content bg-qqq">
                                                            <div class="card-body mt-sm-0 mt-2">
                                                                <div class="row">
                                                                    <div class="col-12">
                                                                        <button type="submit" class="green-btn ml-2">Create
                                                                        </button>
                                                                    </div>
                                                                </div>
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
            file: '',
            categories: {},
            employee_benefits: {},
            employee_check: [],
            inputs: [{
                question: '',
            }]
        }

    },
    async created() {
        await this.getCategory();
        await this.getEmployeeBenefits();

    },
    methods: {
        async JobCreate(e) {
            let fd = new FormData(this.$refs.JobCreateForm);
            fd.append('apply_before', this.apply_before);
            fd.append('employee_benefits', this.employee_check);
            // console.log("check is",this.employee_check);
            fd.append('remote', this.remote);
            fd.delete('date');
            let response = await axios.post('/api/admin/jobs/create', fd);
            console.log(response.data.code);
            if (response.data.code != 422) {
                let data = response.data;
                this.$snotify.success(data.message)
                let self = this;
                setTimeout(function () {
                    self.$router.push({ name: 'businessOwner.jobs.index' });
                }, 1000);
            } else {
                this.$snotify.error(response.data.message);
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
            console.log("Employee Benefits is", this.employee_benefits);
        },
        handleFileUpload( event ){
            this.file = event.target.files[0];
            this.previewVideo();
        },
        previewVideo(){
            let video = document.getElementById('video-preview');
            let reader = new FileReader();

            reader.readAsDataURL( this.file );
            reader.addEventListener('load', function(){
                video.src = reader.result;
            });
        },
        add () {
            this.inputs.push({
                question: ''
            })
        },
        remove (index) {
            this.inputs.splice(index, 1)
        }
    }
}

</script>
