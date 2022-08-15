<template>
    <div>
        <!-- Change Package Modal -->
        <ValidationObserver v-slot="{ handleSubmit }">
            <form class="create-job" ref="updatePackage"
                  @submit.prevent="handleSubmit(updatePackage)">
                  <div class="modal fade pro-modal change_package_modal" id="change_package" tabindex="-1" role="dialog"
                     aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                     <div class="modal-dialog modal-dialog-centered my-1" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true"><i class="fas fa-times"></i></span>
                                </button>
                            </div>
                            <div class="modal-body px-1 py-1">
                                <div class="price-chart d-flex">
                                    <div class="attr-col">
                                        <ul>
                                            <li class="first">Change Package</li>
                                            <li>User</li>
                                            <li>Job Posting Engine</li>
                                            <li>Smart Questions</li>
                                            <li>Applicant tracking</li>
                                            <li>Launch Success Manager</li>
                                            <li>Candidate Messenger</li>
                                            <!-- <li>Integrated Scheduling</li> -->
                                            <li>Account Manager</li>
                                            <li class="last">Monthly Emaail Compaign</li>
                                            <li class="last">Social Media Promotion</li>
                                        </ul>
                                    </div>
                                    <div class="pt-table">
                                        <div class="pt-body">
                                            <ul class="pt-rows mb-0">
                                                <li class="title">
                                                    <div class="package-name text-center" v-for="(pk, index) in packages" :key="index">
                                                        <label class="container-pckg_change text-center" >
                                                            <div v-if="pk.question_limit <= 15">
                                                                <h5 style="color:white">1-{{ pk.question_limit }}</h5>
                                                            </div>
                                                            <div v-if="pk.question_limit > 15">
                                                                <h5 style="color:white">Unlimited</h5>
                                                            </div>
                                                            <input type="radio" name="package" v-model="pk.id" :value="pk.id">
                                                            <span class="checkmark-pckg_change"></span>
                                                            <h3  style="color:white">{{ pk.package_name }}</h3>
                                                            <h4  style="color:white">$ {{pk.charges}}</h4>
                                                        </label>
                                                    </div>
                                                    <!-- <div class="package-name text-center">
                                                        <h4>1-5</h4>
                                                        <h3>Champion</h3>
                                                        <h4>$ 110</h4>
                                                    </div>
                                                    <div class="package-name text-center">
                                                        <h4>1-5</h4>
                                                        <h3>Elite</h3>
                                                        <h4>$ 80</h4>
                                                    </div> -->
                                                </li>
                                                <li class="first"><span> <i class="fa fa-check"></i> </span><span><i class="fa fa-check"></i></span><span><i class="fa fa-check"></i></span></li>
                                                <li><span class="pt-yes"><i class="fa fa-check"></i></span><span class="pt-yes"><i class="fa fa-check"></i></span><span class="pt-yes"><i class="fa fa-check"></i></span></li>
                                                <li><span class="pt-no"><i class="fa fa-check"></i></span><span class="pt-yes"><i class="fa fa-check"></i></span><span class="pt-yes"><i class="fa fa-check"></i></span></li>
                                                <li><span class="pt-no"><i class="fa fa-check"></i></span><span class="pt-no"><i class="fa fa-check"></i></span><span class="pt-no"><i class="fa fa-check"></i></span></li>
                                                <li><span class="pt-no"></span><span><i class="fa fa-check"></i></span><span><i class="fa fa-check"></i></span></li>
                                                <li><span class="pt-yes"></span><span class="pt-yes"><i class="fa fa-check"></i></span><span class="pt-yes"><i class="fa fa-check"></i></span></li>
                                                <!-- <li><span class="pt-no"></span><span class="pt-yes"><i class="fa fa-check"></i></span><span class="pt-yes"><i class="fa fa-check"></i></span></li> -->
                                                <li><span class="pt-yes"></span><span class="pt-yes"></span><span class="pt-yes"><i class="fa fa-check"></i></span></li>
                                                <li><span class="pt-no"></span><span class="pt-yes"></span><span class="pt-yes"><i class="fa fa-check"></i></span></li>
                                                    <li><span class="pt-no"></span><span class="pt-yes"></span><span class="pt-yes"><i class="fa fa-check"></i></span></li> 
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-2">
                                    <div class="col-12 text-center">
                                        <a href="#" data-dismiss="modal" data-toggle="modal"
                                            data-target="#payment_package" class="btn-blue">Update</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                     </div>
                  </div>
                <!-- <div class="modal fade pro-modal change_package_modal" id="change_package" tabindex="-1" role="dialog"
                     aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true"><i class="fas fa-times"></i></span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div class="row">
                                    <div class="col-12 text-center">
                                        <img src="images/pckg-icon.png" alt="">
                                        <h3 class="heading-profession">Change Package</h3>


                                        <div class="row mt-2 justify-content-center">
                                            <div
                                                class="col-md-10 d-flex justify-content-center flex-column flex-md-row align-items-center">
                                                <label class="container-pckg_change" v-for="pk in packages">

                                                        <input type="radio" name="package" v-model="pk.id" :value="pk.id">
                                                        <span class="checkmark-pckg_change"></span>
                                                        <i>{{ pk.package_name }}</i>
                                                    <div class="row mt-2">
                                                    <div class="col-12 text-center">
                                                        <span class="gray">Amount:</span>
                                                        <span class="amount">${{pk.charges}}</span>
                                                    </div>
                                                </div>
                                                </label>

                                            </div>

                                        </div>

                                        <div class="row mt-2">
                                            <div class="col-12 text-center">
                                                <a href="#" data-dismiss="modal" data-toggle="modal"
                                                   data-target="#payment_package" class="btn-blue">Update</a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div> -->
                <!-- Payment Modal -->
                <div class="modal fade pro-modal change_package_modal" id="payment_package" tabindex="-1" role="dialog"
                     aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true"><i class="fas fa-times"></i></span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div class="row">
                                    <div class="col-12">
                                        <h3 class="heading-profession text-center">Payment</h3>


                                        <div class="row mb-2">
                                            <div class="col-12 t-c">
                                                <ValidationProvider name="Card holder name"
                                                                    rules="required"
                                                                    v-slot="{ errors }">
                                                    <p class="fieldName">Card Holder Name*</p>
                                                    <input type="text" name="card_holder_name"
                                                           v-model="card_holder_name" class="u-edit-txt payment-inp"
                                                           placeholder='Please Enter Card Holder Name'>

                                                    <span class="text-danger">{{
                                                            errors[0]
                                                        }}</span>
                                                </ValidationProvider>
                                            </div>
                                        </div>
                                        <div class="row mb-2">
                                            <div class="col-12 t-c">
                                                <ValidationProvider name="card number"
                                                                    rules="required"
                                                                    v-slot="{ errors }">
                                                    <p class="fieldName">Card Number*</p>
                                                    <input type="tel" name="card_number" v-model="card_number"
                                                           class="u-edit-txt payment-inp"
                                                           placeholder='Please Enter Card Number'>
                                                    <span class="text-danger">{{
                                                            errors[0]
                                                        }}</span>
                                                </ValidationProvider>
                                            </div>
                                        </div>
                                        <div class="row mb-2">
                                            <div class="col-12 t-c">
                                                <ValidationProvider name="cvv code"
                                                                    rules="required"
                                                                    v-slot="{ errors }">
                                                    <p class="fieldName">CVV Code*</p>
                                                    <input type="number" name="cvv" v-model="cvv"
                                                           rules="required|min:3|max:4"
                                                           class="u-edit-txt payment-inp"
                                                           placeholder='Please Enter Card CVV Code'>
                                                    <span class="text-danger">{{
                                                            errors[0]
                                                        }}</span>
                                                </ValidationProvider>
                                            </div>
                                        </div>
                                        <div class="row mb-2">
                                            <div class="col-12 t-c">
                                                <ValidationProvider name="expiry date" rules="required" v-slot="{ errors }">
                                                    <p class="fieldName">Expiry Date*</p>
                                                       <input type="text" name="expiry_date" v-model="expiry_date" class="form-control" id="expiry"
                                                        aria-describedby="emailHelp" placeholder="Enter Expiry">
                                                    <!-- <date-picker v-model="expiry_date" valueType="format"
                                                                 class=" reg-input"></date-picker> -->
                                                    <span class="text-danger">{{
                                                            errors[0]
                                                        }}</span>
                                                </ValidationProvider>
                                            </div>
                                        </div>
                                        <div class="row mt-2">
                                            <div class="col-12 text-center">
                                                <button type="submit" class="btn-blue w-100">Pay</button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </form>
        </ValidationObserver>
        <!-- Payment succes Modal -->
        <div class="modal fade pro-modal" id="payment_success" tabindex="-1" role="dialog"
             aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"><i class="fas fa-times"></i></span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-12 text-center">
                                <img src="images/check.png" alt="">
                                <h3 class="heading-profession">Payment Successfully</h3>
                                <p class="para-profession">Your payment has been completed successfully</p>
                                <a href="#" data-dismiss="modal" data-toggle="modal" data-target="#payment_failed"
                                   class="btn-prof">Got it</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <!-- Payment failed Modal -->
        <div class="modal fade pro-modal" id="payment_failed" tabindex="-1" role="dialog"
             aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"><i class="fas fa-times"></i></span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-12 text-center">
                                <img src="images/error_modal.png" alt="">
                                <h3 class="heading-profession">Payment Error</h3>
                                <p class="para-profession">Your payment was not completed successfully</p>
                                <a href="#" data-dismiss="modal" data-target="#package-apply" data-toggle="modal"
                                   class="btn-prof">Got it</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>


        <!-- Package Change Modal -->
        <div class="modal fade pro-modal" id="package-apply" tabindex="-1" role="dialog"
             aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"><i class="fas fa-times"></i></span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-12 text-center">
                                <img src="images/pckg-icon.png" alt="">
                                <h3 class="heading-profession">Change Package</h3>
                                <p class="para-profession">Your seleted package would be applied on next renewal</p>
                                <a href="#" data-dismiss="modal" class="btn-prof">Got it</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            package: '',
            card_holder_name: '',
            cvv: '',
            expiry_date: '',
            card_number: '',
            packages: {},
            previous: {},
        }
    },
    async created() {
        await this.getPackage();
     await   this.previous_package();
    },
    watch: {
            'card_number': function(val, oldVal) {
                val = val.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1-').trim('-').slice(0, 19);
                this.card_number = val;
            /*if (val.length == 21) {
                this.form.card_number = oldVal;
            } else {
                // adding spaces
            }*/
        },
        'expiry_date': function(val, oldVal) {
            val = val.replace(/[^\dA-Z]/g, '').replace(/(.{2})/g, '$1/').trim('/').slice(0, 5);
            this.expiry_date = val;
            /*if (val.length == 21) {
                this.form.card_number = oldVal;
            } else {
                // adding spaces
            }*/
        },

    },
    methods: {
        async updatePackage() {
            let fd = new FormData(this.$refs.updatePackage);
            let response = await axios.post('/api/admin/subscriptions/updateUserPackage', fd);
            console.log(response);
            if (response.data.data) {
                this.$snotify.success(response.data.message)
                let self = this;
                $('#payment_package').modal('hide');
                setTimeout(function () {
                    location.reload();
                    // self.$router.push({name: 'businessOwner.auth.login'});
                }, 1000);
            } else {
                this.$snotify.error(response.data.message);
            }
        },
        async getPackage() {
            this.packages = (await axios.get('/api/admin/package?user_type=1')).data.data;
            // console.log("my package is ",this.packages);
        },
       async  previous_package() {
            // let res = await axios.get('/api/admin/test');
            this.previous = (await axios.get('/api/admin/previousPackage')).data.data;
            console.log("my previous package is ",this.previous);
        },
    }
}

</script>
