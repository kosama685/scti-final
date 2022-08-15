<template>
    <div>
        <full-page-header></full-page-header>
        <section class="main-banner">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-sm-12">
                        <div class="banner-content">
                            <h1>Find Your Next Opportunity Here…</h1>
                            <p>SCTI Jobs  connects people to job opportunities allowing all to achieve the next steps in their career. We bridge the gap between training providers and businesses.
                            </p>
                            <p>SCTI Jobs  offers bespoke consultation to support you in attaining the job you have been looking for.</p>
                            <!-- <a :href="`${base_url}/business/login`" class="px-3 mt-3 py-3 white-btn">Business Owner</a> -->
                        </div>

                    </div>
                    <div class="col-md-6 col-sm-12"></div>

                </div>
                <!--row end-->
            </div>
            <!--container end-->
        </section>



        <section class="latest-jobs">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="owl-carousel owl-theme services-carousel">
                            <div class="item w-100"  v-for="item in jobs">
                                <div class="job-card text-center bg-transparent">
                                    <h3 class="fw-bold mt-2">{{item.job_title}}</h3>
                                    <p>{{item.job_descriptions}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="upload-traning-sec">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-sm-12">
                        <img :src="`${base_url}/assets/user/images/Profession-net-03_19.png`" class="img-fluid" alt=""/>
                        <router-link :to="{name: 'user.auth.register'}" class="main-btn crt-profile-btn">Register</router-link>
                    </div>
                    <!--col left end-->

                    <div class="col-lg-6 col-sm-12">
                        <h2>Training and Networking</h2>
                        <p>Search and apply for bespoke training and networking events by registering at SCTI Jobs.</p>
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="boxs">
                                    <img :src="`${base_url}/assets/user/images/Profession-net-03_26.png`" alt=""/>
                                    <p>Register Your Account</p>
                                </div>
                            </div>

                            <div class="col-lg-4">
                                <div class="boxs">
                                    <img :src="`${base_url}/assets/user/images/Profession-net-03_28.png`" alt=""/>
                                    <p>Upload Your Resume</p>
                                </div>
                            </div>

                            <div class="col-lg-4">
                                <div class="boxs">
                                    <img :src="`${base_url}/assets/user/images/Profession-net-03_30.png`" alt=""/>
                                    <p>Apply For Dream Job</p>
                                </div>
                            </div>


                        </div>
                        <!--inner row end-->

                        <!-- <div class="text-center">
                            <a href="#" class="main-btn d-inline-block m-1">Uploade Vacancy</a>
                            <a href="#" class="main-btn d-inline-block m-1">Upload Your CV</a>
                        </div> -->

                    </div>
                    <!--col left end-->

                </div>
                <!--row end-->


            </div>
            <!--container end-->
        </section>
        <section class="why-chose-sec">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-sm-12">
                        <h2>Why Choose <br>
                        SCTI Jobs</h2>
                        <p>SCTI Jobs connects people to job opportunities allowing them to achieve the next steps in their career through bespoke consultation and on-going support. We provide the right candidates for organisations that are looking for vacancies to be filled.</p>
                        <ul>
                            <li>Partners with training providers and businesses.</li>
                            <li>Offer consultation throughout application and interview process.</li>
                            <li>Create your CV in under 10 minutes.</li>
                            <li>Access to current networking and training events.</li>
                            <li>Offer competitive subscription packages.</li>
                        </ul>

                    </div>
                    <!--left col end-->

                    <div class="col-lg-6 col-sm-12">
                        <div class="why-chose-sec-right">
                            <img :src="`${base_url}/../../assets/user/images/Profession-net-03_41.png`" class="img1" alt=""/>
                            <img :src="`${base_url}/../../assets/user/images/Profession-net-03_45.png`" class="img2" alt=""/>
                            <!-- <a href="#" class="main-btn">Upload Videos</a> -->
                        </div>

                    </div>
                    <!--right col end-->

                </div>
                <!--row end-->
            </div>
            <!--container end-->
        </section>

        <section class="details">
            <div class="container">
                <div class="col-lg-8 offset-lg-2">
                    <div class="ml-5 d-sm-flex justify-content-between flex-wrap">
                        <div class="mt-3">
                            <h3>{{this.job_count}}+</h3>
                            <p class="mt-3 text-right">Jobs available</p>
                        </div>
                        <!-- <div class="mt-3">
                            <h3>18K+</h3>
                            <p class="mt-3 text-right">Submitted CV</p>
                        </div> -->
                        <div class="mt-3">
                            <h3>28K+</h3>
                            <p class="mt-3 text-right">Training and Networking</p>
                        </div>
                        <div class="mt-3">
                            <h3>08K+</h3>
                            <p class="mt-3 text-right">Partners</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="chose-catgory-sec">
            <div class="container">
                <div class="row">
                    <!-- <div class="col-md-8 offset-md-2">
                        <h2>Choose Your Desire Category</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting dummy is to and dummy is to
                            is
                            to my scrambled it to make a type specimen book.</p>
                    </div>
                -->

            </div>
            <!--row end-->

            <!--owl carousel end-->

        </div>
        <!--container end-->
    </section>
    <!--chose catgory sec end-->

    <section class="upload-traning-sec questions pt-0 p-90">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-sm-12">
                    <h2>Have Any Questions</h2>
                    <!-- <form> -->
                        <div class="d-sm-flex">
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" v-model="contact.name" placeholder="Enter Your Name..."
                                aria-describedby="basic-addon2">
                                <div class="input-group-append">
                                    <span class="input-group-text" id="basic-addon2"><i
                                        class="fa fa-user"></i></span>
                                    </div>
                                </div>
                                <div class="input-group mb-3 ml-lg-4 ml-sm-2 ml-0">
                                    <input type="number" class="form-control" v-model="contact.phone" placeholder="Enter Your Number..."
                                    aria-describedby="basic-addon2">
                                    <div class="input-group-append">
                                        <span class="input-group-text" id="basic-addon2"><i
                                            class="fa fa-phone"></i></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" v-model="contact.email" placeholder="Enter Your Email..."
                                    aria-describedby="basic-addon2">
                                    <div class="input-group-append">
                                        <span class="input-group-text" id="basic-addon2"><i
                                            class="fa fa-envelope"></i></span>
                                        </div>
                                    </div>
                                    <select name="" id="">
                                        <option v-model="contact.category" v-for="category in categories" :value="category.category_name">{{category.category_name}}</option>
                                       
                                    </select>
                                    <div class="input-group mt-3">
                                        <textarea class="form-control" v-model="contact.message" placeholder="Enter Message Here..."
                                        aria-describedby="basic-addon2"></textarea>
                                        <div class="input-group-append">
                                            <span class="input-group-text" id="basic-addon2"><i
                                                class="fa fa-sticky-note"></i></span>
                                            </div>
                                        </div>
                                            <button type="button" class="px-3 mt-3 py-3 blue-btn" @click="contactForm()">Submit Now</button>
                                   
                                 <!--    </form> -->
                                </div>

                    <!-- <div class="col-lg-5 col-sm-12">
                        
                        <p>The filling in contact details is fine. These enquiries should be directly linked and sent to admin@professionnet.co.uk</p>
                        <p><span class="cyan">Phone:</span></p>
                        <h5 class="grey d-inline-block">123-456-7890</h5> <span class="cyan">Or</span>
                        <h5 class="grey">111-444-9999</h5>
                    </div> -->

                </div>


            </div>
        </section>
        <!---->


        <section class="newsletter">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-sm-12">
                        <h2>Subscribe For Updates</h2>
                        <p>subscribe for the latest updates on jobs, training and networking events.</p>
                    </div>
                        <div class="col-lg-6 col-sm-12">
                            <div class="newsletter-inner">
                                <input type="email" class="form-control"  v-model="email_c.subscribe_email" placeholder="Enter Your Email..."/>

                                <button class="sub-btn" @click="subscribeForm()">Subscribe</button>
                            </div>
                        </div>
                </div>
            </div>
        </section>

        <section class="job-seeker-sec">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 offset-md-2">
                        <h2>What Job Seekers Say About Us</h2>
                        
                    </div>

                </div>
                <div class="job-seeker-sec-inner">

                    <div class="job-box-usr">
                        <a href="#_"><img :src="`${base_url}/assets/user/images/globe-user_03.png`" alt=""/></a>
                        <div class="text-box">
                            <h5>Jac Jacson</h5>
                            <p>“Lorem Ipsum is simply dummy text of the
                                printing and typesetting dummy is and
                            it to make a type specimen book.”</p>
                        </div>
                    </div>

                    <div class="job-box-usr">
                        <a href="#_"><img :src="`${base_url}/assets/user/images/globe-user_03.png`" alt=""/></a>
                        <div class="text-box">
                            <h5>Jac Jacson</h5>
                            <p>“Lorem Ipsum is simply dummy text of the
                                printing and typesetting dummy is and
                            it to make a type specimen book.”</p>
                        </div>
                    </div>

                    <div class="job-box-usr">
                        <a href="#_"><img :src="`${base_url}/assets/user/images/globe-user_03.png`" alt=""/></a>
                        <div class="text-box">
                            <h5>Jac Jacson</h5>
                            <p>“Lorem Ipsum is simply dummy text of the
                                printing and typesetting dummy is and
                            it to make a type specimen book.”</p>
                        </div>
                    </div>

                    <div class="job-box-usr">
                        <a href="#_"><img :src="`${base_url}/assets/user/images/globe-user_03.png`" alt=""/></a>
                        <div class="text-box">
                            <h5>Jac Jacson</h5>
                            <p>“Lorem Ipsum is simply dummy text of the
                                printing and typesetting dummy is and
                            it to make a type specimen book.”</p>
                        </div>
                    </div>
                    <div class="job-box-usr">
                        <a href="#_"><img :src="`${base_url}/assets/user/images/globe-user_03.png`" alt=""/></a>
                        <div class="text-box">
                            <h5>Jac Jacson</h5>
                            <p>“Lorem Ipsum is simply dummy text of the
                                printing and typesetting dummy is and
                            it to make a type specimen book.”</p>
                        </div>
                    </div>
                    <div class="job-box-usr">
                        <a href="#_"><img :src="`${base_url}/assets/user/images/globe-user_03.png`" alt=""/></a>
                        <div class="text-box">
                            <h5>Jac Jacson</h5>
                            <p>“Lorem Ipsum is simply dummy text of the
                                printing and typesetting dummy is and
                            it to make a type specimen book.”</p>
                        </div>
                    </div>


                </div>
                <!--job seeker sec inner end-->


            </div>
            <!--container end-->
        </section>
        <full-page-footer></full-page-footer>
    </div>

</template>
<script>
    const FullPageFooter = () => import('../components/FullPageFooter.vue');
    const FullPageHeader = () => import('../components/FullPageHeader.vue');
    export default {
        data() {
            return{
                job_count: '',
                categories: {},
                jobs: {},
                contact:{
                    name: '',
                    email:'',
                    category: '',
                    message: '',
                    phone:'',
                },
                    email_c :{
                        subscribe_email : ''
                    }

            }
        },
        created() {
        },
        components: {
            FullPageFooter,
            FullPageHeader,
        },
        async created() {
            await this.getCategory();
            await this.jobsget();
            await this.jobs_count();
        },
        methods: {
            async getCategory() {
                this.categories = (await axios.get('/api/admin/category')).data.data;
            },

            async contactForm()
            {
                let response = (await axios.post('/api/admin/contactUs',this.contact)).data;
                console.log(response);
                this.$snotify.success(response.message);
            },

            async subscribeForm() {
                // var email = this.subscribe_email;
                
              let response = (await axios.post('/api/admin/subscribe',this.email_c)).data;
                this.$snotify.success(response.message);
            },
             async jobsget() {
                this.jobs = (await axios.get('/api/jobs')).data;
                // console.log("the jobs is" , this.jobs);
            },
             async jobs_count() {
                this.job_count = (await axios.get('/api/jobs/count')).data;
                console.log("the jobs count is" , this.job_count);
            }
        }
    }
</script>
