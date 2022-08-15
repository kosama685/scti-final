<template>
    <div>
        <register-header></register-header>
        <section class="create-cv">

            <div class="container">
                <div class="row mt-5 mb-2">
                    <div class="col-12 d-flex align-items-center  top-head">
                        <router-link :to="{name: 'user.users.view'}" class="back-a"><i class="fa fa-arrow-left" aria-hidden="true"></i> Back</router-link>
                        <p class="page-heading mx-auto">Edit Profile</p>

                    </div>
                </div>
                <div class="row mt-2">
                    <div class="col-12">
                        <ValidationObserver v-slot="{ handleSubmit }">
                            <form ref="EditProfileForm" @submit.prevent="handleSubmit(EditProfile)" id="msform" class="create-cv edit-profile">

                                <div class="card cv-create-card user-card">
                                    <div class="user-top">
                                        <div class="row">
                                            <div class="col-12 text-center">
                                                <div class="profile-picture-div edit-prof">
                                                    <div class="profile-banner-wrap">
                                                        <img :src="cropped" class="avatar avatar-big" alt="">
                                                    </div>
                                                    <!-- <img :src="cropped" alt="" class="img-profile"> -->
                                                    <div class="media-body edit-u">
                                                        <label for="picture">
                                                            <i class="fa fa-camera profile-pic-icon"></i>
                                                        </label>
                                                        <div class="d-none">
                                                            <input type="file" name="file_photo" accept=".gif,.jpg,.png,.tif|image/*"
                                                            id="picture" @change="croppie">
                                                        </div>
                                                        <!-- <button type="button" name="file" class="camera-btn" onclick="document.getElementById('upload').click()">  <input type="file" id="upload"  name="file_photo" @change="croppie"><i class="fa fa-camera"></i></button>
                                                        <a href=""></a> -->

                                                        <div class="modal fade" id="cropImagePop" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" >
                                                          <div class="modal-dialog">
                                                            <div class="modal-content">
                                                              <div class="modal-header">
                                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                                                <h4 class="modal-title" id="myModalLabel">
                                                                Edit Photo</h4>
                                                            </div>
                                                            <div class="modal-body">
                                                                <vue-croppie
                                                                ref="croppieRef"
                                                                :enableOrientation="true"
                                                                :boundary="{ width: 450, height: 300}"
                                                                >
                                                            </vue-croppie>

                                                        </div>
                                                        <div class="modal-footer">
                                                          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                                          <button type="button" id="cropImageBtn" class="btn btn-primary" @click="crop">Crop</button>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>





                                  </div>
                              </div>
                              <div class="col-12 mt-4">
                                <textarea name="about_yourself" v-model="editProfile.about_yourself" cols="30" rows="10" spellcheck="false">{{editProfile.about_yourself}}</textarea>
                            </div>
                        </div>

                    </div>


                    <div class="card-header cv-header br-0 usr_p">
                        <p>Personal Information</p>
                        <p>User Id:001</p>
                    </div>
                    <div class="card-body cv-card-body">
                        <div class="form-row">
                            <div class="col-lg-6 col-md-6 col-12">

                                <div class="form-group">
                                    <label class="c-light">First Name</label>
                                    <input type="text" class="form-control reg-input" v-model="editProfile.first_name" name="first_name"
                                    value="Mark">
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-12">
                                <div class="form-group">
                                    <label class="c-light">Last Name</label>
                                    <input type="text" class="form-control reg-input" v-model="editProfile.last_name" name="last_name"
                                    value="Carson">
                                </div>
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="col-lg-6 col-md-6 col-12">
                                <div class="form-group">
                                    <label class="c-light">date of birth</label>
                                    <date-picker type="text" v-model="editProfile.dob" name="dob"  id="dob-picker"
                                    placeholder="mm/dd/yyyy"></date-picker>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-12">
                            <div class="form-group">
                                    <label class="c-light">Email Address</label>
                                    <p class="reg-p e-padding">{{ editProfile.email }}</p>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-12">
                                <div class="form-group">
                                    <label class="c-light">Phone Number</label>

                                    <input type="text" name="phone" v-model="editProfile.phone">
                                </div>
                            </div>
                        </div>
                        <!-- <div class="form-row">
                            <div class="col-12">
                                <div class="usr-wrap">
                                    <a href="" class="usr-a cv">View CV</a>
                                    <a href="" class="usr-a edit">edit CV</a>
                                </div>
                            </div>
                        </div> -->
                    </div>

                    <div id="accordion">
                        <div class="card-header cv-header br-0 " id="headingOne" data-toggle="collapse"
                        data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <p>Interest</p>
                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                    </div>

                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
                    data-parent="#accordion">
                    <div class="card-body cv-card-body">
                        <div class="form-row">
                            <div class="col-12">
                                <div class="form-group m-0">
                                    <textarea name="interest" v-model="editProfile.interest" cols="30" rows="10"
                                    spellcheck="false">{{editProfile.interest}}</textarea>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


                <!-- <div class="card-header cv-header br-0 " id="card_two" data-toggle="collapse"
                data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                <p>My Documents</p>
                <i class="fa fa-angle-down" aria-hidden="true"></i>
                </div>

        <div id="collapseTwo" class="collapse show" aria-labelledby="card_two"
            data-parent="#accordion">
            <div class="card-body cv-card-body">

                <div class="row">

                    <div class="col-lg-4 col-md-4 col-12">
                        <div class="dl_wrapper">
                            <label>Degree</label>
                            <div class="inner-wrapper">
                                <a href="">
                                    <img :src="`${base_url}/assets/user/images/download.png`" alt="" srcset="">
                                    <p>Download <br> File</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-12">
                        <div class="dl_wrapper">
                            <label>Certification</label>
                            <div class="inner-wrapper">
                                <a href="">
                                    <img :src="`${base_url}/assets/user/images/download.png`" alt="" srcset="">
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
                                    <img :src="`${base_url}/assets/user/images/download.png`" alt="" srcset="">
                                    <p>Download <br>File</p>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="form-row mt-4">
                    <div class="col-12">
                        <div class="usr-wrap">
                            <a href="" class="usr-a cv">Update</a>
                        </div>
                    </div>
                </div>

            </div>
        </div> -->

         <div class="card-header cv-header br-0 " id="card_two" data-toggle="collapse"
                data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                <p>Upload CV</p>
                <i class="fa fa-angle-down" aria-hidden="true"></i>
                </div>

        <div id="collapseTwo" class="collapse show" aria-labelledby="card_two"
            data-parent="#accordion">
            <div class="card-body cv-card-body">

                <div class="row">

                    <div class="col-lg-4 col-md-4 col-12">
                        <div class="dl_wrapper">
                            <label>Upload CV</label>
                            <div class="">
                                <a href="">
                                    <input type="file" name="cv"  :v-model="editProfile.cv"  accept=".gif,.jpg,.png,.tif|image/*">
                                    <!-- <img :src="`${base_url}/assets/user/images/download.png`" alt="" srcset=""> -->
                                    <!-- <p>Upload <br> CV</p> -->
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
                <!-- <div class="form-row mt-4">
                    <div class="col-12">
                        <div class="usr-wrap">
                            <span >Update</span>
                        </div>
                    </div>
                </div> -->

            </div>
        </div>



        <div class="card-header cv-header br-0 " id="card_three" data-toggle="collapse"
        data-target="#collapseThree" aria-expanded="true"
        aria-controls="collapseThree">
        <p>Address</p>
        <i class="fa fa-angle-down" aria-hidden="true"></i>
    </div>
    <div id="collapseThree" class="collapse show" aria-labelledby="card_three"
    data-parent="#accordion">
    <div class="card-body cv-card-body">
        <div class="form-row">
            <div class="col-lg-6 col-md-6 col-12">

                <div class="form-group">
                    <label class="c-light">Address</label>
                    <input type="text" class="form-control reg-input" name="address" v-model="editProfile.address"
                    value="Carson">





                </div>
            </div>
            <div class="col-lg-6 col-md-6 col-12">
                <div class="form-group">
                    <label class="c-light">Country</label>
                    <input type="text" v-model="editProfile.country" class="form-control reg-input" name="country"
                    value="Carson">

                </div>
            </div>
        </div>
        <div class="form-row">
            <div class="col-lg-6 col-md-6 col-12">

                <div class="form-group">
                    <label class="c-light">State</label>
                    <input type="text" v-model="editProfile.state" class="form-control reg-input" name="state"
                    value="Carson">

                </div>
            </div>
            <div class="col-lg-6 col-md-6 col-12">
                <div class="form-group">
                    <label class="c-light">City</label>
                    <input type="text" v-model="editProfile.city" class="form-control reg-input" name="city"
                    value="Carson">

                </div>
            </div>
        </div>
        <div class="form-row">
            <div class="col-lg-6 col-md-6 col-12">

                <div class="form-group">
                    <label class="c-light">Post code</label>
                    <input type="text" v-model="editProfile.zip_code" class="form-control reg-input" name="zip_code"
                    value="Carson">

                </div>
            </div>

        </div>
        <div class="row">
            <div class="col-12">
                <button type="submit" class="green-btn blue-btn">Update</button>
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

</section>
<inner-page-footer></inner-page-footer>
</div>
</template>
<script>
    const InnerPageFooter = () => import('../../components/InnerPageFooter.vue');
    const RegisterHeader = () => import('../../components/RegisterHeader.vue');

    export default {
        data() {
            return {
                croppieImage: '',
                cropped: null,
                email: '',
                file: '',
                first_name: '',
                last_name: '',
                phone: '',
                address: '',
                country: '',
                state: '',
                city: '',
                cv: '',
                zip_code: '',
                file_photo:'',
                about_yourself:'',
                interest: '',
                editProfile: {},
                componentForm: {
                    locality: 'long_name',
                    administrative_area_level_1: 'short_name',
                    country: 'long_name',
                    postal_code: 'short_name'
                },


            };
        },
        async created() {
            await this.getProfile();
            this.cropped = this.editProfile.image;
        },
        components: {
            InnerPageFooter,
            RegisterHeader,
        },
        methods: {
        
            async getProfile() {
                let res = (await axios.get('/api/admin/getProfile'));
                this.editProfile = res.data.data;
                localStorage.setItem('image', this.editProfile.image);
                console.log(this.editProfile);
            },
            croppie(e) {
                var files = e.target.files || e.dataTransfer.files;
                if (!files.length) return;

                var reader = new FileReader();
                reader.onload = e => {
                    this.$refs.croppieRef.bind({
                        url: e.target.result
                    });
                };
                $('#cropImagePop').modal('show');
                reader.readAsDataURL(files[0]);
            },
            crop() {
            // Options can be updated.
            // Current option will return a base64 version of the uploaded image with a size of 600px X 450px.
            let options = {
                type: 'base64',
                size: {width: 150, height: 200},
                format: 'jpeg'
            };
            this.$refs.croppieRef.result(options, output => {
                this.cropped = this.croppieImage = output;
                $('#cropImagePop').modal('hide');
                console.log(this.croppieImage);
            });
        },
        async EditProfile(e) {

                // console.log(this.file_photo);
                // console.log(this.cv);
            let fd = new FormData(this.$refs.EditProfileForm);

            let response = await axios.post('/api/admin/profile', fd);
            if (response.data.data) {
                console.log(response.data);
                this.$snotify.success(response.data.message)
                let self = this;
                setTimeout(function () {
                    self.$router.push({name: 'user.users.view'});
                }, 1000);
            } else {
                this.$snotify.error(response.data.message)

            }
        },
        onPlaceChanged(place) {
            const fields = {
                locality: 'city',
                administrative_area_level_1: 'state',
                country: 'country',
                postal_code: 'postal_code'
            };

            for (var i = 0; i < place.place.address_components.length; i++) {
                var addressType = place.place.address_components[i].types[0];

                if (this.componentForm[addressType])
                    this.form[fields[addressType]] = place.place.address_components[i][this.componentForm[addressType]];
            }
        },
        onNoResult() {
            console.log('no result place');
        },
    }
}
</script>

<style type="text/css">
    
.mx-input{
    border: 2px solid #ebe6e6;
    margin-bottom: 10px;
    width: 100%;
    box-sizing: border-box;
    line-height: 25px;
    font-size: 15px;
    color: #c9c8c8;
    height: 50px;
    border-radius: 5px 25px 0px 5px;
    box-shadow: 0px 0px 8px -2px rgb(0 0 0 / 15%);
    font-family: 'Jost';
}   
</style>
