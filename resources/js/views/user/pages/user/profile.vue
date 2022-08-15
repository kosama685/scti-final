<template>
    <div>
        <register-header></register-header>
        <section class="create-cv">
            <div class="container">
                <div class="row mt-5 mb-2">
                    <div class="col-12 d-flex align-items-center justify-content-center top-head">
                        <p class="page-heading">My Profile</p>
                    </div>
                </div>
                <div class="row mt-2">
                    <div class="col-12">
                        <div class="card cv-create-card user-card rounded-0"> 
                            <div class="row">
                                <div class="col-lg-4">
                                    <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                    <a class="nav-link active" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-home" aria-selected="true">Personal Information</a>
                                    <a class="nav-link" id="v-pills-resume-tab" data-toggle="pill" href="#v-pills-resume" role="tab" aria-controls="v-pills-profile" aria-selected="false">Resume</a>
                                    <a class="nav-link" id="v-pills-address-tab" data-toggle="pill" href="#v-pills-address" role="tab" aria-controls="v-pills-messages" aria-selected="false">Address</a>
                                    <a class="nav-link" id="v-pills-jobs-tab" data-toggle="pill" href="#v-pills-jobs" role="tab" aria-controls="v-pills-settings" aria-selected="false">Job Applied</a>
                                    </div>
                                </div>
                                <div class="col-lg-8">
                                    <div class="tab-content" id="v-pills-tabContent">
                                        <div class="tab-pane fade show active" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                            <div class="card border-0 bg-transparent w-100">
                                                <div class="card-body card-profile rounded-20 text-center">
                                                    <div class="profile-img text-center m-auto m-md-2 mb-lg-3">
                                                        <img :src="editProfile.image" alt="" class="user-avatar">
                                                        <p>User Id:001</p>
                                                    </div>

                                                    <div class="row justify-content-center text-center">
                                                        <div class="col-lg-6">
                                                        <label class="c-light">First Name</label>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <p class="reg-p">{{editProfile.first_name}}</p>
                                                        </div>
                                                    </div>
                                                    <div class="row justify-content-center text-center">
                                                        <div class="col-lg-6">
                                                            <label class="c-light">Last Name</label>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <p class="reg-p">{{editProfile.last_name}}</p>
                                                        </div>
                                                    </div>
                                                    <div class="row justify-content-center text-center">
                                                        <div class="col-lg-6">
                                                            <label class="c-light">date of birth</label>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <p class="reg-p">{{ formatDate(editProfile.dob)}}</p>
                                                        </div>
                                                    </div>
                                                    <div class="row justify-content-center text-center">
                                                        <div class="col-lg-6">
                                                            <label class="c-light">Email Address</label>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <p class="reg-p">{{editProfile.email}}</p>  
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-12 text-center mt-3">
                                                        <router-link :to="{name: 'user.users.edit',params: {id: editProfile.id}}" class="btn-edit mr-lg-2">Edit</router-link>
                                                            <a href="#" data-toggle="modal" class="btn-pass ml-lg-2" data-target="#change_password">Change Password</a>
                                                        </div>
                                                    </div>


                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade p-4" id="v-pills-resume" role="tabpanel" aria-labelledby="v-pills-resume-tab">
                                            <div v-if="editProfile.cv" class="justify-content-center text-center">
                                            <a  target="_blank" v-bind:href="`${base_url}/public/images/users/`+editProfile.cv">Resume</a>
                                            </div>
                                            <div v-else>
                                                No Resume Found
                                            </div>
                                        </div>
                                        <div class="tab-pane fade p-4" id="v-pills-address" role="tabpanel" aria-labelledby="v-pills-address-tab">
                                            
                                            <div class="row mb-2">
                                                <div class="col-lg-6 col-xl-4 mb-2 mb-lg-0">
                                                    <label class="c-light">State</label>
                                                </div>
                                                <div class="col-lg-6 col-xl-4">
                                                    <p class="reg-p">{{editProfile.state}}</p>
                                                </div>
                                            </div>
                                            <div class="row mb-2">
                                                <div class="col-lg-6 col-xl-4 mb-2 mb-lg-0">
                                                    <label class="c-light">City</label>
                                                </div>
                                                <div class="col-lg-6 col-xl-4">
                                                    <p class="reg-p">{{editProfile.city}}</p>
                                                </div>
                                            </div>
                                            <div class="row mb-2">
                                                <div class="col-lg-6 col-xl-4 mb-2 mb-lg-0">
                                                    <label class="c-light">Post code</label>
                                                </div>
                                                <div class="col-lg-6 col-xl-4">
                                                    <p class="reg-p">{{editProfile.zip_code}}</p>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="tab-pane fade p-4" id="v-pills-jobs" role="tabpanel" aria-labelledby="v-pills-jobs-tab">
                                            <table class="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th>Title</th>
                                                    <th>Status</th>
                                                    <th>Date</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="item in editProfile.applied_jobs" :key="item">
                                                    <td>{{item.job.job_title}}</td>
                                                    <td>{{item.job.user.last_subscription_log.package_id == '4' ? item.status : '--' }}</td>
                                                    <td>{{new Date(item.created_at).toLocaleString()}}</td>
                                                </tr>
                                            </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- <div class="user-top">
                                <router-link :to="{name: 'user.users.edit',params: {id: editProfile.id}}" class="edit_prof">Edit</router-link>
                                <div class="row">
                                    <div class="col-12 text-center">
                                        <img :src="editProfile.image" alt=""
                                             class="user-avatar">
                                        <a href="#" data-toggle="modal" data-target="#change_password">Change
                                            Password</a>
                                        <p class="bio">{{editProfile.about_yourself}}</p>
                                    </div>
                                </div>
                            </div> -->
                            <!-- <div class="card-header cv-header br-0 usr_p">
                                <p>Personal Information</p>
                                <p>User Id:001</p>
                            </div> -->
                            <!-- <div class="card-body cv-card-body"> -->
                                <!-- <div class="form-row">
                                    <div class="col-lg-4 col-md-6 col-12">

                                        <div class="form-group">
                                            <label class="c-light">First Name</label>
                                            <p class="reg-p">{{editProfile.first_name}}</p>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6 col-12">
                                        <div class="form-group">
                                            <label class="c-light">Last Name</label>
                                            <p class="reg-p">{{editProfile.last_name}}</p>
                                        </div>
                                    </div>
                                </div> -->
                                <!-- <div class="form-row">
                                    <div class="col-lg-4 col-md-6 col-12">
                                        <div class="form-group">
                                            <label class="c-light">date of birth</label>
                                            <p class="reg-p">{{ formatDate(editProfile.dob)}}</p>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6 col-12">
                                        <div class="form-group">
                                            <label class="c-light">Email Address</label>
                                            <p class="reg-p">{{editProfile.email}}</p>
                                        </div>
                                    </div>
                                </div> -->
                              <!--  <div class="form-row">
                                    <div class="col-12">
                                         <div class="usr-wrap">
                                            <router-link :to="{name: 'user.cvBiulder.view'}" class="usr-a cv">View CV</router-link>
                                            <router-link :to="{name: 'user.cvBiulder.edit'}" class="usr-a edit">edit CV</router-link>
                                        </div> 
                                    </div>
                                </div>-->
                            <!-- </div> -->

                            <div id="accordion">
                                <!-- <div class="card-header cv-header br-0 " id="headingOne" data-toggle="collapse"
                                     data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <p>Interest</p>
                                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                                </div>

                                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
                                     data-parent="#accordion">
                                    <div class="card-body cv-card-body">
                                        <div class="form-row">
                                            <div class="col-12">
                                                <div class="form-group">
                                                    <p class="reg-p">{{(editProfile.interest) ? editProfile.interest : 'No Interest found' }}</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div> -->

                                 <!-- <div class="card-header cv-header br-0 " id="headingOne" data-toggle="collapse"
                                     data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <p>Resume</p>
                                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                                </div>

                                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
                                     data-parent="#accordion">
                                    <div class="card-body cv-card-body">
                                        <div class="form-row">
                                            <div class="col-12">
                                                <div class="form-group">
                                                    <img :src="`${base_url}/assets/images/CEO-JFI.jpg`"  -->
                                                    <!-- <div v-if="editProfile.cv">
                                                    <a target="_blank" v-bind:href="`${base_url}/public/images/users/`+editProfile.cv">Resume</a>
                                                    </div>
                                                    <div v-else>
                                                        No Resume Found
                                                    </div> -->
                                                    <!-- <span>{{(editProfile.cv) ? (editProfile.cv) : 'No Cv' }}</span> -->
                                                    <!-- <a href="{{editProfile.interest}}"></a> -->

                                                <!-- </div>
                                            </div>
                                        </div>

                                    </div>
                                </div> -->

<!-- 
                                <div class="card-header cv-header br-0 " id="card_two" data-toggle="collapse"
                                     data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                    <p>My Documents</p>
                                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                                </div> -->

                                <!-- <div id="collapseTwo" class="collapse show" aria-labelledby="card_two"
                                     data-parent="#accordion">
                                    <div class="card-body cv-card-body">

                                        <div class="row">

                                            <div class="col-lg-4 col-md-4 col-12">
                                                <div class="dl_wrapper">
                                                    <label>Resumes</label>
                                                    <div class="inner-wrapper">
                                                        <button type="button" @click="download()" >
                                                            <img :src="`${base_url}/assets/user/images/download.png`"
                                                                 alt="" srcset="">
                                                            <p>Download <br> File</p>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div> 
                                            <div class="col-lg-4 col-md-4 col-12">
                                                <div class="dl_wrapper">
                                                    <label>Certification</label>
                                                    <div class="inner-wrapper">
                                                        <a href="">
                                                            <img :src="`${base_url}/assets/user/images/download.png`"
                                                                 alt="" srcset="">
                                                            <p>Download <br>File</p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-12">
                                                <div class="dl_wrapper">
                                                    <label>PDF</label>
                                                    <div class="inner-wrapper">
                                                        <a href="">
                                                            <img :src="`${base_url}/assets/user/images/download.png`"
                                                                 alt="" srcset="">
                                                            <p>Download <br>File</p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div> -->


                                <!-- <div class="card-header cv-header br-0 " id="card_three" data-toggle="collapse"
                                     data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                    <p>Address    </p>
                                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                                </div> -->
                                <!-- <div id="collapseThree" class="collapse show" aria-labelledby="card_three"
                                     data-parent="#accordion">
                                    <div class="card-body cv-card-body">
                                        <div class="form-row">
                                            <div class="col-lg-4 col-md-6 col-12">

                                                <div class="form-group">
                                                    <label class="c-light">Address</label>
                                                    <p class="reg-p">{{editProfile.address}}</p>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-6 col-12">
                                                <div class="form-group">
                                                    <label class="c-light">Country</label>
                                                    <p class="reg-p">{{editProfile.country}}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="col-lg-4 col-md-6 col-12">

                                                <div class="form-group">
                                                    <label class="c-light">State</label>
                                                    <p class="reg-p">{{editProfile.state}}</p>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-6 col-12">
                                                <div class="form-group">
                                                    <label class="c-light">City</label>
                                                    <p class="reg-p">{{editProfile.city}}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="col-lg-4 col-md-6 col-12">

                                                <div class="form-group">
                                                    <label class="c-light">Post code</label>
                                                    <p class="reg-p">{{editProfile.zip_code}}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> -->
                                 <!-- <div class="card-header cv-header br-0 " id="card_three" data-toggle="collapse"
                                     data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                    <p>Job Applied</p>
                                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                                </div> -->
                                <div id="collapseThree" class="collapse show" aria-labelledby="card_three" data-parent="#accordion">

                                    <!-- <div class="container">

                                     <div class="col-lg-12 col-md-12 col-12">

                                    <table >
                                        <thead>
                                            <tr>
                                                <th>Title</th>
                                                <th>Status</th>
                                                <th>Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="item in editProfile.applied_jobs" :key="item">
                                                <td>{{item.job.job_title}}</td>
                                                <td>{{item.status}}</td>
                                                
                                                <td>{{new Date(item.created_at).toLocaleString()}}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                     </div>
                                    </div> -->

                                    <!-- <div class="card-body cv-card-body">
                                        <div class="form-row">
                                            <div class="col-lg-4 col-md-6 col-12">

                                                <div class="form-group">
                                                    <label class="c-light">Address</label>
                                                    <p class="reg-p">{{editProfile.address}}</p>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-6 col-12">
                                                <div class="form-group">
                                                    <label class="c-light">Country</label>
                                                    <p class="reg-p">{{editProfile.country}}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="col-lg-4 col-md-6 col-12">

                                                <div class="form-group">
                                                    <label class="c-light">State</label>
                                                    <p class="reg-p">{{editProfile.state}}</p>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-6 col-12">
                                                <div class="form-group">
                                                    <label class="c-light">City</label>
                                                    <p class="reg-p">{{editProfile.city}}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="col-lg-4 col-md-6 col-12">

                                                <div class="form-group">
                                                    <label class="c-light">Post code</label>
                                                    <p class="reg-p">{{editProfile.zip_code}}</p>
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

        </section>

        <!-- modal 3 -->
        <div class="modal fade" id="change_password" tabindex="-1" role="dialog"
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
                                <h4>Change Password</h4>
                            </div>
                        </div>
                        <div class="row mt-4">
                            <div class="col-12">
                                <form action=""  @submit.prevent="passwordUpdate">
                                    <div class="form-group mb-3 position-relative">
                                        <label for="pass-login">Current Password</label>
                                        <input type="password" class="form-control prof-input-login" id="pass-login" v-model="current_password" name="current_password"
                                               placeholder="Enter Current Password">
                                        <button type="button" class="eye-pass fa fa-eye" @click="togglePasswordType(1)">
                                            <i class="" aria-hidden="true"></i>
                                        </button>
                                    </div>
                                    <div class="form-group mb-3 position-relative">
                                        <label for="pass-login">New Password</label>
                                        <input type="password" class="form-control prof-input-login" id="pass-login" v-model="new_password" name="new_password"
                                               placeholder="Enter New Password">
                                        <button type="button" class="eye-pass fa fa-eye" @click="togglePasswordType(1)">
                                            <i class="" aria-hidden="true"></i>
                                        </button>

                                        <!-- <button class="eye-pass">
                                            <i class="fa fa-eye" aria-hidden="true"></i>
                                        </button> -->
                                    </div>
                                    <div class="form-group mb-3 position-relative">
                                        <label for="pass-login">Re-Type Password</label>
                                        <input type="password" class="form-control prof-input-login" id="pass-login" v-model="re_password" name="re_password"
                                               placeholder="Enter Re-Type Password">
                                       <button type="button" class="eye-pass fa fa-eye" @click="togglePasswordType(1)">
                                            <i class="" aria-hidden="true"></i>
                                        </button>
                                    </div>
                                    <div class="form-row">
                                        <div class="col-12 text-center">
                                            <button type="submit" class="btn-profBlue"
                                                    >Update
                                            </button>
                                        </div>

                                    </div>
                                </form>
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
const InnerPageFooter = () => import('../../components/InnerPageFooter.vue');
const RegisterHeader = () => import('../../components/RegisterHeader.vue');

export default {
    data() {
        return {
            editProfile: {},
            applied:'',
            current_password: '',
            new_password:'',
            re_password:''
        };
    },
    components: {
        InnerPageFooter,
        RegisterHeader,
    },
    async created() {
        await this.getProfile();
    },
    methods: {
          async passwordUpdate(e) {

            let fd = new FormData(this.$refs.passwordUpdate);
            fd.append('current_password',this.current_password);
            fd.append('new_password',this.new_password);

            let response = await axios.post('/api/user/password_update', fd);
            // console.log(respo)
            if (response.data.data) {
                let data = response.data;
                console.log(data.message);
                this.$snotify.success(data.message)
            } else {
                this.$snotify.error(response.data.message);
            }
        },
        async getProfile() {
            this.editProfile = (await axios.get('/api/admin/getProfile')).data.data;
            localStorage.setItem('image', this.editProfile.image);
            localStorage.setItem('uuid', this.editProfile.uuid);
            console.log('profile is ',this.editProfile);
            this.applied = this.editProfile.applied_jobs;
        },
        async download(){
            let userId = localStorage.getItem('userId');
            let urlPath = `${window.base_url}/api/user/downloadReume/${userId}`;
            //alert(urlPath); 
            let form = document.createElement('form');
            form.setAttribute('method','GET');
            form.setAttribute('action', urlPath);
            document.body.appendChild(form);
            form.submit();
            // await axios.post(route('web.resume.download',template),{is_saved : 1});
          },
    }

}
</script>
