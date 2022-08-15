<template>
    <div class="content-wrapper">
        <div class="content-body">
            <!-- Basic form layout section start -->
            <section id="configuration">
                <div class="row">
                    <div class="col-12">
                        <div class="card rounded pad-20">
                            <div class="card-content collapse show">
                                <ValidationObserver v-slot="{ handleSubmit }">
                                    <form ref="EditProfileForm" @submit.prevent="handleSubmit(EditProfile)">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-12">
                                                    <h1>
                                                        <router-link :to="{name: 'AdminProfile'}"><i
                                                            class="fa fa-angle-left"></i>Profile
                                                        </router-link>
                                                    </h1>
                                                </div>
                                            </div>
                                            <div class="content-header">
                                                <h2>Edit Profile</h2>
                                            </div>
                                            <div class="customer-top">

                                                <div class="row">
                                                    <div class="col-12">
                                                        <div class="media align-items-center">
                                                            <div class="profile-img text-center edit-profille-img">
                                                                <img :src="cropped" alt="" class="img-profile">
                                                                <label for="picture" style="    margin-left: -47px;position: absolute;top: 89px;background: #000;padding: 7px;border-radius: 50%;">
                                                            <i class="fa fa-camera profile-pic-icon"></i>
                                                        </label>
                                                        <div class="d-none">
                                                            <input type="file" name="file_photo" accept=".gif,.jpg,.png,.tif|image/*"
                                                            id="picture" @change="croppie" >
                                                        </div>

                                                                <!-- <button type="button" name="file"><input type="file"name="file_photo" @change="croppie">
                                                                   <span class="position-absolute">change Image</span>
                                                                </button> -->
                                                            </div>
                                                            <br/>


                                                            <div class="modal fade" id="cropImagePop" tabindex="-1"
                                                                 role="dialog" aria-labelledby="myModalLabel"
                                                                 aria-hidden="true">
                                                                <div class="modal-dialog">
                                                                    <div class="modal-content">
                                                                        <div class="modal-header">
                                                                            <button type="button" class="close"
                                                                                    data-dismiss="modal"
                                                                                    aria-label="Close"><span
                                                                                aria-hidden="true">&times;</span>
                                                                            </button>
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
                                                                            <button type="button"
                                                                                    class="btn btn-default"
                                                                                    data-dismiss="modal">Close
                                                                            </button>
                                                                            <button type="button" id="cropImageBtn"
                                                                                    class="btn btn-primary"
                                                                                    @click="crop">Crop
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <!--                                                            <img :src="url('/images/users/')+editProfile.image" alt=""-->
                                                            <!--                                                                 class="img-profile">-->
                                                            <div class="media-body edit-u">
                                                                <a href="" data-toggle="modal"
                                                                   data-target="#changepassword">Change Password</a>
                                                                <!--                                                                <a href="">Change Image</a>-->
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                            <div class="row mt-4">
                                                <div class="col-12">
                                                    <div class="card collapse-icon accordion-icon-rotate user_prof_acc">
                                                        <div id="headingCollapse11" class="card-header">
                                                            <a data-toggle="collapse" href="#collapse11"
                                                               aria-expanded="true" aria-controls="collapse11"
                                                               class="card-title lead">Personal Information</a>
                                                        </div>
                                                        <div id="collapse11" role="tabpanel"
                                                             aria-labelledby="headingCollapse11" class="collapse show">
                                                            <div class="card-content">
                                                                <div class="card-body mt-sm-0 mt-2">
                                                                    <div class="row">
                                                                        <div class="col-lg-4 col-md-4 col-12 t-c">
                                                                            <p class="fieldName">First Name</p>
                                                                            <input type="text" class="u-edit-txt"
                                                                                   v-model="editProfile.first_name"
                                                                                   name="first_name">
                                                                        </div>
                                                                        <div class="col-lg-4 col-md-4 col-12 t-c">
                                                                            <p class="fieldName">Last Name</p>
                                                                            <input type="text" name="last_name"
                                                                                   class="u-edit-txt"
                                                                                   v-model="editProfile.last_name">
                                                                        </div>
                                                                    </div>
                                                                    <div class="row mt-md-1">
                                                                        <div class="col-lg-4 col-md-4 col-12 t-c">
                                                                            <p class="fieldName">Email Address</p>
                                                                            <input type="email" name="email"
                                                                                   class="u-edit-txt" disabled
                                                                                   v-model="editProfile.email">
                                                                        </div>

                                                                        <div class="col-lg-4 col-md-4 col-12 t-c">
                                                                            <p class="fieldName">Phone Number</p>
                                                                            <input type="text" name="phone"
                                                                                   class="u-edit-txt"
                                                                                   v-model="editProfile.phone">
                                                                        </div>
                                                                    </div>
                                                                    <div class="row mt-md-1 c-m-2">

                                                                        <!--                                                                 <div class="col-lg-4 col-md-4 col-12 t-c">-->
                                                                        <!--                                                                    <p class="fieldName">Date Of Birth</p>-->
                                                                        <!--                                                                    <input type="text" name="dob" class="u-edit-txt" value="mm/dd/yy">-->
                                                                        <!--                                                                </div>-->

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="headingCollapse12" class="card-header">
                                                            <a data-toggle="collapse" href="#collapse12"
                                                               aria-expanded="true" aria-controls="collapse12"
                                                               class="card-title lead ">Address Details</a>
                                                        </div>
                                                        <div id="collapse12" role="tabpanel"
                                                             aria-labelledby="headingCollapse12" class="collapse show"
                                                             aria-expanded="true">
                                                            <div class="card-content">
                                                                <div class="card-body mt-sm-0 mt-2">
                                                                    <div class="row">
                                                                        <div class="col-lg-4 col-md-4 col-12 t-c">
                                                                            <p class="fieldName">Address</p>
                                                                            <VueGooglePlaces
                                                                                api-key="AIzaSyAHPUufTlBkF5NfBT3uhS9K4BbW2N-mkb4"
                                                                                :enableGeolocation="true"
                                                                                :enableGeocode="true"
                                                                                version="3.36"
                                                                                placeholder="Input your place"
                                                                                @placechanged="onPlaceChanged"
                                                                                @noresult="onNoResult"
                                                                                class="public-chlng-fit-top-input"/>
                                                                            <input type="text" id="autocomplete"
                                                                                   onfocus="geolocate()" name="address"
                                                                                   class="u-edit-txt"
                                                                                   v-model="editProfile.address">
                                                                        </div>
                                                                        <div class="col-lg-4 col-md-4 col-12 t-c">
                                                                            <p class="fieldName">Country</p>
                                                                            <input type="text" id="country"
                                                                                   name="country"
                                                                                   class="u-edit-txt"
                                                                                   v-model="editProfile.country">
                                                                        </div>
                                                                    </div>
                                                                    <div class="row mt-md-1">
                                                                        <div class="col-lg-4 col-md-4 col-12 t-c">
                                                                            <p class="fieldName">State</p>
                                                                            <input type="text" name="state"
                                                                                   id="administrative_area_level_1"
                                                                                   class="u-edit-txt"
                                                                                   v-model="editProfile.state">
                                                                        </div>
                                                                        <div class="col-lg-4 col-md-4 col-12 t-c">
                                                                            <p class="fieldName">City</p>
                                                                            <input type="text" name="city" id="locality"
                                                                                   class="u-edit-txt"
                                                                                   v-model="editProfile.city">
                                                                        </div>
                                                                    </div>
                                                                    <div class="row mt-md-1 c-m-2">
                                                                        <div class="col-lg-4 col-md-4 col-12 t-c">
                                                                            <p class="fieldName">Post code</p>
                                                                            <input type="text" name="zip_code"
                                                                                   id="postal_code"
                                                                                   class="u-edit-txt"
                                                                                   v-model="editProfile.zip_code">
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
                                                    <button type="submit" class="green-btn">Update</button>
                                                </div>
                                            </div>


                                        </div>
                                    </form>
                                </ValidationObserver>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <change-password-modal></change-password-modal>
        </div>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex';
const ChangePasswordModal = () => import('../../components/ChangePassword.vue');
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
            zip_code: '',
            editProfile: {},
            componentForm: {
                locality: 'long_name',
                administrative_area_level_1: 'short_name',
                country: 'long_name',
                postal_code: 'short_name'
            },


        };
    },
     computed: {
        ...mapState('admin', ['profile','admin']),
    },
    async created() {
        await this.fetch();
        this.cropped = this.editProfile.image;
    },
    methods: {
        ...mapActions('admin', ['getAll']),
        async fetch() {
                let {type, status} = this.$route.params;
                let params = {
                    route: 'api/admin/getProfile',
                    mutation: 'SET_PROFILE',
                    variable: 'data',
                };
                let {data} = await this.getAll(params);
                console.log(data);
                this.editProfile = data.data;

              

                    this.addRouteQuery({});

            },

        // async getProfile() {
        //     let res = (await axios.get('/api/admin/getProfile'));
        //     this.editProfile = res.data;
        //     localStorage.setItem('image', this.editProfile.image);
        //     console.log(this.editProfile);
        // },
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

            let fd = new FormData(this.$refs.EditProfileForm);
            console.log(fd);
            let response = await axios.post('/api/admin/profile', fd);
            if (response.data.data) {
                this.$snotify.success(response.data.message)
                let self = this;
                setTimeout(function () {
                    self.$router.push({name: 'admin.users.admin.profile'});
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
};
</script>
