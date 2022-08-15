<template>
    <div>
        <register-header></register-header>

        <section class="create-cv">
            <div class="container">
                <div class="row mt-5 mb-2">
                    <div class="col-12 d-flex align-items-center job-head">
                        <router-link :to="{name:'user.trainingProgram.index'}" class="back-a"><i class="fa fa-arrow-left"
                                                                              aria-hidden="true"></i> Back</router-link>
                        <p class="page-heading">View training program</p>

                    </div>
                </div>
                <div class="row mt-2">
                    <div class="col-12">
                        <div class="card cv-create-card">

                            <div class="card-header cv-header">
                                <p>Personal Information</p>
                            </div>
                            <div class="card-body cv-card-body">

                                <div class="form-row">
                                    <div class="col-lg-4 col-md-6 col-12">

                                        <div class="form-group">
                                            <label class="c-light">Training Program Name</label>
                                            <p class="reg-p">{{ networktrainings.program_name }}</p>
                                        </div>

                                    </div>
                                    <div class="col-lg-4 col-md-6 col-12">

                                        <div class="form-group">
                                            <label class="c-light">Time</label>
                                            <p class="reg-p">{{ networktrainings.time }}</p>

                                        </div>

                                    </div>
                                    <div class="col-lg-4 col-md-6 col-12">

                                        <div class="form-group">
                                            <label class="c-light">Date</label>
                                            <p class="reg-p">{{ formatDate(networktrainings.date) }}</p>

                                        </div>

                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="col-lg-4 col-md-6 col-12">

                                        <div class="form-group">
                                            <label class="c-light">Charges</label>
                                            <p class="reg-p">{{ networktrainings.charges }} $ </p>
                                        </div>

                                    </div>
                                    <div class="col-lg-4 col-md-6 col-12">

                                        <div class="form-group">
                                            <label class="c-light">Booked On</label>
                                            <p class="reg-p">{{ formatDate(networktrainings.date) }}</p>

                                        </div>

                                    </div>
                                    <div class="col-lg-4 col-md-6 col-12">

                                        <div class="form-group">
                                            <label class="c-light">Venue</label>
                                            <p class="reg-p">{{ networktrainings.venue }}</p>

                                        </div>

                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="col-lg-4 col-md-6 col-12">

                                        <div class="form-group">
                                            <label class="c-light">Capacity</label>
                                            <p class="reg-p">300+</p>
                                        </div>

                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="col-lg-12">

                                        <div class="form-group">
                                            <label class="c-light">Description</label>
                                            <p class="reg-p">{{ networktrainings.description }}</p>
                                        </div>

                                    </div>
                                </div>


                                <div class="form-row">
                                    <div class="col-12">
                                        <div class="button_wrap text-center">
                                            <button @click="bookNetworkTraining" class="btn-cv bloo mr-0" :style="book_button ? `opacity:0` : `opacity:1`" >Book</button>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>


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
            networktrainings: {},
            book_button: undefined,
            networkTrainingId: undefined
        };
    },
   async created() {
        await this.getNetworkingProgram();

    },
    components: {
        InnerPageFooter,
        RegisterHeader,
    },
    methods: {
        async getNetworkingProgram(page = 1) {
            this.networkTrainingId = this.$route.params.id;
            let res = (await axios.get('/api/user/network/training/getById/'+this.networkTrainingId));
            this.networktrainings = res.data[0];
            (this.networktrainings.register.length != 0) ? this.book_button = false : this.book_button = true;
            console.log(this.book_button);
            console.log(this.networktrainings);
        },
        bookNetworkTraining()
        {
            let res = axios.get('/api/user/network/training/registerNetworkTraining/'+this.networkTrainingId);
            if(res)
            {
                this.book_button = false;
                 this.$snotify.success('You have registered for this network training.')

            }else{
                this.$snotify.error('Some thing went wrong!')
            }
        }

    }
}
</script>
