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
                                            <h1><a href="users-listing.php"><i class="fa fa-angle-left"></i>Users</a></h1>
                                        </div>
                                    </div>
                                    <div class="content-header">
                                        <h2>Profile</h2>
                                    </div>
                                    <div class="customer-top">
                                        <div class="row">
                                            <div class="col-12 text-right user_id">
                                                <h6>User Id: 001</h6>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-12">
                                                <div class="media align-items-center">
                                                    <img :src="url('/assets/images/avatar.jpg')" class="img-fluid" alt="">
                                                    <div class="media-body edit-u">
<!--                                                        <a href="">Change Password</a>-->
<!--                                                        <a href="">Change Image</a>-->
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row user-desc">
                                            <div class="col-12">
                                                <textarea class="edit-u-ta" name="edit-bio" rows="4" cols="50">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet quasi saepe quos qui aspernatur rerum dolorum eius sapiente placeat. Quam mollitia et excepturi, voluptatibus ullam omnis id incidunt iste non.
                                                </textarea>
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
                                                                    <p class="fieldName">First Name</p>
                                                                    <input type="text" name="fname" class="u-edit-txt" value="James">
                                                                </div>
                                                                <div class="col-lg-4 col-md-4 col-12 t-c">
                                                                    <p class="fieldName">Last Name</p>
                                                                    <input type="text" name="lname" class="u-edit-txt" value="Walker">
                                                                </div>
                                                            </div>
                                                            <div class="row mt-md-1">
                                                                <div class="col-lg-4 col-md-4 col-12 t-c">
                                                                    <p class="fieldName">Date Of Birth</p>
                                                                    <input type="text" name="dob" class="u-edit-txt" value="mm/dd/yy">
                                                                </div>
                                                                <div class="col-lg-4 col-md-4 col-12 t-c">
                                                                    <p class="fieldName">Phone Number</p>
                                                                    <input type="text" name="cnum" class="u-edit-txt" value="+012 345 7896">
                                                                </div>
                                                            </div>
                                                            <div class="row mt-md-1 c-m-2">
                                                                <div class="col-lg-4 col-md-4 col-12 t-c">
                                                                    <p class="fieldName">Email Address</p>
                                                                    <input type="email" name="email" class="u-edit-txt" value="jb@test.com">
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
                                                            <div class="row align-items-center">
                                                                <div class="col-lg-3 col-md-3 col-12 t-c">
                                                                    <p class="fieldName">Job Title</p>
                                                                </div>
                                                                <div class="col-lg-6 col-md-6 col-12 t-c">
                                                                    <input type="text" name="fname" class="u-edit-txt mb-2 uedit-w" value="CEO">

                                                                </div>
                                                            </div>
                                                            <div class="row align-items-center">
                                                                <div class="col-lg-3 col-md-3 col-12 t-c">
                                                                    <p class="fieldName">Company Name</p>
                                                                </div>
                                                                <div class="col-lg-6 col-md-6 col-12 t-c">
                                                                    <input type="text" name="fname" class="u-edit-txt mb-2 uedit-w" value="XYZ Company">
                                                                </div>
                                                            </div>
                                                            <div class="row align-items-center">
                                                                <div class="col-lg-3 col-md-3 col-12 t-c">
                                                                    <p class="fieldName">Job Type</p>
                                                                </div>
                                                                <div class="col-lg-6 col-md-6 col-12 t-c">
                                                                    <div class="form-group">
                                                                        <select class="form-control uedit-w eu-select" id="exampleFormControlSelect1">
                                                                            <option>1</option>
                                                                            <option>2</option>
                                                                            <option>3</option>
                                                                            <option>4</option>
                                                                            <option>5</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="row align-items-center">
                                                                <div class="col-lg-3 col-md-3 col-12 t-c">
                                                                    <p class="fieldName">Start Date</p>
                                                                </div>
                                                                <div class="col-lg-6 col-md-6 col-12 t-c date-wrapper">
                                                                    <input type="text" id="datepicker-2" class="uedit-w" placeholder="From">
                                                                </div>
                                                            </div>
                                                            <div class="row align-items-center">
                                                                <div class="col-lg-3 col-md-3 col-12 t-c">
                                                                    <p class="fieldName">End Date</p>
                                                                </div>
                                                                <div class="col-lg-6 col-md-6 col-12 t-c date-wrapper">
                                                                    <input type="text" id="datepicker-3" class="uedit-w" placeholder="From">
                                                                </div>
                                                            </div>
                                                            <div class="row align-items-center">
                                                                <div class="col-lg-3 col-md-3 col-12 t-c">
                                                                    <p class="fieldName">Job Description</p>
                                                                </div>
                                                                <div class="col-lg-6 col-md-12 col-12">
                                                                    <textarea class="edit-u-ta" name="edit-bio" rows="4" cols="50">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet quasi saepe quos qui aspernatur rerum dolorum eius sapiente placeat. Quam mollitia et excepturi, voluptatibus ullam omnis id incidunt iste non.
                                                                </textarea>
                                                                </div>
                                                                <div class="col-md-6 col-12 offset-md-3">
                                                                    <a href="#" class="green-btn mob-r">Add More</a>

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
                                                                    <input type="text" name="degree" class="u-edit-txt mb-2 uedit-w" value="XYZ degree">
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-lg-3 col-md-3 col-12 t-c">
                                                                    <p class="fieldName">Subjects</p>
                                                                </div>
                                                                <div class="col-lg-6 col-md-6 col-12 t-c sub-wrap">
                                                                    <select class="subject-select" name="subjects[]" multiple="multiple" style="width: 50%;">
                                                                        <option value="AL">Subject 1</option>
                                                                        <option value="WY">Subject 2</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-lg-3 col-md-3 col-12 t-c">
                                                                    <p class="fieldName">Institute Name</p>
                                                                </div>
                                                                <div class="col-lg-6 col-md-6 col-12 t-c">
                                                                    <input type="text" name="institute" class="u-edit-txt mb-2 uedit-w" value="XYZ Institute">
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-lg-3 col-md-3 col-12 t-c">
                                                                    <p class="fieldName">Start Date</p>
                                                                </div>
                                                                <div class="col-lg-6 col-md-6 col-12 t-c date-wrapper">
                                                                    <input type="text" id="datepicker-4" class="uedit-w" placeholder="From">

                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-lg-3 col-md-3 col-12 t-c">
                                                                    <p class="fieldName">End Date</p>
                                                                </div>
                                                                <div class="col-lg-6 col-md-6 col-12 t-c  date-wrapper">
                                                                    <input type="text" id="datepicker-5" class="uedit-w" placeholder="From">
                                                                </div>
                                                                <div class="col-12 offset-md-3 mt-1">
                                                                    <div class="form-check">
                                                                        <input type="checkbox" class="form-check-input ue-check" id="exampleCheck1">
                                                                        <label class="form-check-label" for="exampleCheck1">I currently work here</label>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-6 col-12 offset-md-3">
                                                                    <a href="#" class="green-btn mob-r">Add More</a>

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
                                                                    <textarea class="edit-u-ta" name="edit-bio" rows="4" cols="50">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet quasi saepe quos qui aspernatur rerum dolorum eius sapiente placeat. Quam mollitia et excepturi, voluptatibus ullam omnis id incidunt iste non.
                                                </textarea>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="headingCollapse15" class="card-header">
                                                    <a data-toggle="collapse" href="#collapse14" aria-expanded="true" aria-controls="collapse14" class="card-title lead ">My Documents</a>
                                                </div>
                                                <div id="collapse15" role="tabpanel" aria-labelledby="headingCollapse15" class="collapse show" aria-expanded="true">
                                                    <div class="card-content">
                                                        <div class="card-body mt-sm-0 mt-2">
                                                            <div class="row">
                                                                <div class="col-12">
                                                                    <div class="wrap-doc">
                                                                        <div class="doc-item">
                                                                            <a href="#">Resume.pdf </a>
                                                                            <div class="wrap-links">
                                                                                <a href="#"><i class="fa fa-download" aria-hidden="true"></i></a>
                                                                                <a href=""><i class="fa fa-trash" aria-hidden="true"></i></a>
                                                                            </div>

                                                                        </div>
                                                                        <div class="doc-item">
                                                                            <a href="#">Cerificate.pdf</a>
                                                                            <div class="wrap-links">
                                                                                <a href="#"><i class="fa fa-download" aria-hidden="true"></i></a>
                                                                                <a href=""><i class="fa fa-trash" aria-hidden="true"></i></a>
                                                                            </div>

                                                                        </div>
                                                                        <div class="doc-item">
                                                                            <a href="#">Doc1.pdf</a>
                                                                            <div class="wrap-links">
                                                                                <a href="#"><i class="fa fa-download" aria-hidden="true"></i></a>
                                                                                <a href=""><i class="fa fa-trash" aria-hidden="true"></i></a>
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

                                    <div class="row">
                                        <div class="col-12">
                                            <a href="#" class="green-btn">Update</a>
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
import countries from '../../../../coreFiles/jsons/countries.json';
import states from '../../../../coreFiles/jsons/states.json';
import cities from '../../../../coreFiles/jsons/cities.json';
export default {
    inject: ['formatDate'],
    data() {
        return {
            first_name: '',
            last_name: '',
            dob: '',
            phone: '',
            date: '',
            month: '',
            year: '',
            country: '',
            gender: '',
            email: '',
            address: '',
            state: '',
            city: '',
            zipcode: '',
            password: '',
            confirmation: '',
            countries: [],
            states: [],
            cities: [],
            user: [],
        };
    },
    async created() {
        this.countries = countries.countries;
        this.user = await this.getUser();
        this.date = this.user.date;
        this.updateCountryStates()
        this.updateStateCities();
    },
    methods: {
        async getUser() {
            let response = await axios.post(`/api/admin/edit/user/${this.$route.params.id}`);
            return response.data;
        },
        async EditUser(e) {

            let fd = new FormData(this.$refs.editUserForm);
            fd.append('id', this.$route.params.id);
            let response = await axios.post('/api/admin/update-user', fd);
            if (response.data.status) {
                this.$snotify.success(response.data.message);
                // this.$refs.editUserForm.reset();
                this.$router.push({ name: 'Users' });
            } else {
                this.$snotify.error(response.data.message);
            }
        },
        updateCountryStates(id) {
            let filteredStates = _.filter(states.states, (obj) => { return obj.country_id == this.user.country });
            this.states = filteredStates;
        },
        updateStateCities(id) {
            let filteredCites = _.filter(cities.cities, (obj) => { return obj.state_id == this.user.state });
            this.cities = filteredCites;
        }
    }
}

</script>
