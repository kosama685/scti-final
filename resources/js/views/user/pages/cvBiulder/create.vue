<template>
    <div>
       <register-header></register-header>

       <section class="create-cv">

        <div class="container">
            <div class="row mt-5 mb-2">
                <div class="col-12 text-center">
                    <p class="page-heading">Create CV</p>
                </div>
            </div>
            <div class="row mt-2">
                <div class="col-12">
                    <ValidationObserver v-slot="{ handleSubmit }">
                        <form ref="EditProfileForm" @submit.prevent="handleSubmit(EditProfile)" id="msform" class="create-cv">
                            <div class="card cv-create-card">

                                <div class="card-header cv-header">
                                    <p>Personal Information</p>
                                </div>
                                <div class="card-body cv-card-body">

                                    <div class="form-row">
                                        <div class="col-xl-4 col-lg-6 col-12">

                                            <div class="form-group">
                                                <ValidationProvider tag="div" name="first name" rules="required" vid="first_name" v-slot="{errors}">

                                                    <label for="fName">First Name</label>
                                                    <input type="text" class="form-control reg-input" id="fName" name="first_name" v-model="first_name" placeholder="Enter First Name">
                                                    <div class="text-danger">{{errors[0]}}</div>
                                                </ValidationProvider>
                                            </div>

                                        </div>
                                        <div class="col-xl-4 col-lg-6 col-12">

                                            <div class="form-group">
                                               <ValidationProvider tag="div" name="last name" rules="required" vid="last_name" v-slot="{errors}">
                                                <label for="lName">Last Name</label>
                                                <input type="text" class="form-control reg-input" id="lName" name="last_name" v-model="last_name" placeholder="Enter Last Name">
                                                <div class="text-danger">{{errors[0]}}</div>
                                            </ValidationProvider>
                                        </div>

                                    </div>
                                    <div class="col-xl-4 col-lg-12 col-12">
                                        <div class="form-group">
                                            <ValidationProvider tag="div" name="dob" rules="required" vid="dob" v-slot="{errors}">
                                                <label for="dob-picker" class="d-block">Date Of Birth</label>
                                                <!-- <date-picker  v-model="dob" name="dob"  ></date-picker> -->
                                                <input type="date" v-model="dob" name="dob" >	

                                                <!-- <input type="text"  id="dob-picker"  placeholder="Enter Date Of Birth"> -->
                                                <div class="text-danger">{{errors[0]}}</div>
                                            </ValidationProvider>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-row">
                                    <div class="col-lg-6 col-12">
                                        <div class="form-group">
                                            <ValidationProvider tag="div" name="phone number" rules="required" vid="phone_number" v-slot="{errors}">
                                                <label for="phone">Phone Number</label>
                                                <input type="number" class="form-control reg-input" id="phone" name="phone_number" v-model="phone_number" placeholder="Enter Phone Number" value="+44">
                                                <div class="text-danger">{{errors[0]}}</div>
                                            </ValidationProvider>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-12">
                                        <div class="form-group">
                                            <ValidationProvider tag="div" name="email" rules="required" vid="email" v-slot="{errors}">
                                                <label for="email">Email Address</label>
                                                <input type="text" class="form-control reg-input" id="email" name="email" v-model="email" placeholder="Enter Email Address">
                                                <div class="text-danger">{{errors[0]}}</div>
                                            </ValidationProvider>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="col-12">
                                        <div class="form-group">
                                            <ValidationProvider tag="div" name="profession" rules="required" vid="profession" v-slot="{errors}">
                                                <label>Profession</label>
                                                <textarea name="profession" id="" cols="30" rows="10" v-model="profession"></textarea>
                                                <div class="text-danger">{{errors[0]}}</div>
                                            </ValidationProvider>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="accordion">


                                <experience-component ref="experience" :isCreate="true"></experience-component>

                                

                                <education-component ref="education" :isCreate="true"></education-component>

                                <div class="card-header cv-header br-0 " id="card_three" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                    <p>Interest & Skills</p>
                                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                                </div>
                                <div id="collapseThree" class="collapse show" aria-labelledby="card_three" data-parent="#accordion">
                                    <div class="card-body cv-card-body">

                                        <div class="form-row">
                                            <div class="col-xl-12">

                                                <div class="form-group">
                                                    <ValidationProvider tag="div" name="subject" rules="required" vid="interest" v-slot="{errors}">
                                                        <label for="sub_interest">Skill</label>
                                                        <v-select
                                                        multiple
                                                        placeholder="Choose up skill!"
                                                        label="title"
                                                        name="interest_subjects"
                                                        v-model="interest_selected"
                                                        :options="interest_subjects"
                                                        />
                                                        <div class="text-danger">{{errors[0]}}</div>
                                                    </ValidationProvider>

                                                </div>

                                            </div>

                                        </div>

                                        <div class="form-row">
                                            <div class="col-12">
                                                <div class="form-group">
                                                    <ValidationProvider tag="div" name="interest" rules="required" vid="interest" v-slot="{errors}">
                                                        <label>Interest</label>
                                                        <textarea name="interest" v-model="interest" id="" cols="30" rows="10"></textarea>
                                                        <div class="text-danger">{{errors[0]}}</div>
                                                    </ValidationProvider>
                                                </div>
                                            </div>
                                            <!-- <div class="col-lg-12">
                                                <div class="form-group">
                                                    <ValidationProvider tag="div" name="language" rules="required" vid="language" v-slot="{errors}">
                                                        <label for="lang">Language</label>
                                                        <input type="text" name="language" v-model="language" class="form-control reg-input" id="lang">
                                                        <div class="text-danger">{{errors[0]}}</div>
                                                    </ValidationProvider>

                                                </div>
                                            </div> -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="col-12">
                                    <div class="button_wrap">
                                       <!--  <router-link :to="{name: 'user.cvBiulder.view'}" class="btn-cv gray">Preview</router-link> -->
                                        <button type="submit" class="btn-cv bloo blue-btn">Save & Download</button>
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
    const ExperienceComponent = () => import('./components/experience.vue');
    const EducationComponent = () => import('./components/education.vue');
    export default {
        data() {
            return {
                subjects: ['English','Physics','Chemistry','Maths','Latin'],
                interest_subjects: ['Painting','Reading'],
                selected: [],
                interest_selected: [],
                first_name:'',
                last_name:'',
                dob:'',
                phone_number:'',
                email:'',
                profession:'',
                interest:'',
                language:'',
                cv: null
            };
        },
        components: {
            InnerPageFooter,
            RegisterHeader,
            ExperienceComponent,
            EducationComponent,
        },
        async created() {
            await this.getCv();
            if(this.cv != null)
            {
                this.$router.push({name: 'user.cvBiulder.view'});
            }
        },
        methods: {
            async EditProfile(e) {
                let fd = new FormData(this.$refs.EditProfileForm);
                console.log();
                fd.append('interest_selected',this.interest_selected);
                fd.append('experiences',JSON.stringify(this.$refs.experience.experiences));
                fd.append('educations',JSON.stringify(this.$refs.education.educations));
                 let response = await axios.post('/api/user/cvBuilder', fd);
                if (response.data.data) {
                    this.$snotify.success(response.data.message)
                    this.download();
                    let self = this;
                    setTimeout(function () {
                        self.$router.push({name: 'user.cvBiulder.view'});
                    }, 1000);
                } else {
                    this.$snotify.error(response.data.message)

                }
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
            async getCv() {
                    this.cv = (await axios.get('/api/user/cv')).data.data;
                },

        }
    };
</script>

<style type="text/css">
.vs__selected{
    background-color: #e2e2e2;
    border: 1px solid transparent;
    border-radius: 10px 10px 0px 10px;
    cursor: default;
    float: left;
    margin-right: 5px;
    margin-top: 5px;
    padding: 0 5px;
    color: #5c5e5f;
    font-family: 'Jost';
    margin-right: 15px;
    position: relative;
}
.vs--searchable .vs__dropdown-toggle{
    border: 2px solid #ebe6e6;
    margin-bottom: 10px;
    width: 100%;
    box-sizing: border-box;
    line-height: 25px;
    font-size: 15px;
    color: #c9c8c8;
    height: 50px;
    border-radius: 5px 25px 0px 5px;
    -webkit-box-shadow: 0px 0px 12px 1px rgb(0 0 0 / 15%);
    -moz-box-shadow: 0px 0px 12px 1px rgba(0, 0, 0, 0.15);
    box-shadow: 0px 0px 8px -2px rgb(0 0 0 / 15%);
    font-family: 'Jost';
}
.vs__deselect{
    position: absolute;
    top: -4px;
    right: -10px;
    background: #ff0000;
    fill: #fff !important;
    border-radius: 50%;
    width: 14px;
    height: 14px;
    display: flex !important;
    justify-content: center;
    align-items: center;
    padding: 0px;
    font-size: 12px;
    margin: 0px !important;
    padding-bottom: 2px;
}
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
    -webkit-box-shadow: 0px 0px 12px 1px rgb(0 0 0 / 15%);
    -moz-box-shadow: 0px 0px 12px 1px rgba(0, 0, 0, 0.15);
    box-shadow: 0px 0px 8px -2px rgb(0 0 0 / 15%);
    font-family: 'Jost';
}
</style>