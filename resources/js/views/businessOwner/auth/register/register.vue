<template>
    <section class="register-section">
        <div class="container ">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-12 text-center">
                                    <p class="rcard-p">
                                        dont have an account? <a href="">Create now!</a>
                                    </p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">

                                    <!-- multistep form -->
                                    <ValidationObserver ref="observer" v-slot="{ invalid }">
                                        <form id="msform" ref="registerForm" @submit.prevent="Register()">

                                            <!-- progressbar -->
                                            <ul id="progressbar">
                                                <li class="active">Step</li>
                                                <li>Step</li>
                                                <li>Step</li>
                                                <li>Step</li>
                                            </ul>
                                            <!-- fieldsets -->

                                            <fieldset>
                                                <div class="row">
                                                    <div class="col-12 text-center">
                                                        <p class="reg-title">Personal Information</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-xl-6 col-lg-6 col-12">

                                                        <div class="form-group">
                                                        <label for="fName">First Name*</label>
                                                            <ValidationProvider name="First Name"
                                                            rules="required"
                                                            v-slot="{ errors }">

                                                            <input type="text" class="form-control reg-input"
                                                            id="fName"
                                                            placeholder="Enter First Name" name="first_name"
                                                            v-model="first_name">
                                                            <span class="text-danger">{{ errors[0] }}</span>
                                                        </ValidationProvider>
                                                    </div>

                                                </div>
                                                <div class="col-xl-6 col-lg-6 col-12">

                                                    <div class="form-group">
                                                        <label for="lName">Last Name*</label>
                                                        <ValidationProvider name="Last Name" rules="required"
                                                        v-slot="{ errors }">
                                                        <input type="text" class="form-control reg-input"
                                                        id="lName"
                                                        placeholder="Enter Last Name" name="last_name"
                                                        v-model="last_name">
                                                        <span class="text-danger">{{ errors[0] }}</span>
                                                    </ValidationProvider>
                                                </div>

                                            </div>
                                            <div class="col-xl-6 col-lg-6 col-12">

                                                <div class="form-group">
                                                    <label for="companyName">Company Name*</label>
                                                    <ValidationProvider name="Company Name" rules="required"
                                                    v-slot="{ errors }">
                                                    <input type="text" class="form-control reg-input"
                                                    id="companyName"
                                                    placeholder="Enter Company Name" name="company_name"
                                                    v-model="company_name">
                                                    <span class="text-danger">{{ errors[0] }}</span>
                                                </ValidationProvider>
                                            </div>

                                        </div>

                                        <div class="col-xl-6 col-lg-12">

                                            <div class="form-group">
                                                <label for="email">Email Address*</label>
                                                <ValidationProvider name="email"
                                                rules="required|email"
                                                v-slot="{errors}">
                                                <input type="email" class="form-control reg-input"
                                                id="email"
                                                placeholder="Enter Email Address" name="email"
                                                v-model="email">
                                                <span class="text-danger">{{ errors[0] }}</span>
                                            </ValidationProvider>
                                            <small> <span class="red">Note:</span>Prefer to use your
                                            professional email address </small>
                                        </div>

                                    </div>
                                    <div class="col-xl-6 col-lg-6 col-12">

                                        <div class="form-group pass-wrap">
                                            <label for="pass">Password*</label>
                                            <ValidationProvider name="password"
                                            rules="required|confirmed:confirmation"
                                            v-slot="{errors}">
                                            <input type="password" class="form-control reg-input"
                                            id="pass"
                                            placeholder="********" name="password"
                                            v-model="password">
                                            <button type="button" class="eye-pass fa fa-eye"
                                            @click="togglePasswordType(5)">
                                            <i class="" aria-hidden="true"></i>
                                        </button>
                                        <span class="text-danger">{{ errors[0] }}</span>
                                    </ValidationProvider>
                                </div>

                            </div>
                            <div class="col-xl-6 col-lg-6 col-12">
                                <div class="form-group pass-wrap">
                                    <label for="cpass">Confirm Password*</label>
                                    <ValidationProvider name="confirmation" rules="required"
                                    vid="confirmation" v-slot="{ errors }">
                                    <input type="password" class="form-control reg-input"
                                    id="cpass"
                                    placeholder="********" v-model="confirmation"
                                    name="confirmation">
                                    <button type="button" class="eye-pass fa fa-eye"
                                    @click="togglePasswordType(7)">
                                    <i class="" aria-hidden="true"></i>
                                </button>
                                <span class="text-danger">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                    </div>


                </div>

                <input type="button" name="next" class="next action-button"
                value="Continue"/>

            </fieldset>

            <fieldset>
                <div class="row">
                    <div class="col-12 text-center">
                        <p class="reg-title">Address Information</p>
                    </div>
                </div>
                <div class="row">

                    <div class="col-xl-6 col-lg-6 col-12">
                        <div class="form-group">
                            <label for="address">Address*</label>
                            <ValidationProvider name="address" rules="required"
                            v-slot="{ errors }">
                            <input type="text" class="form-control reg-input"
                            id="address"
                            placeholder="Enter Address"
                            v-model="address"
                            name="address">
                            <span class="text-danger">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-12">
                    <div class="form-group">
                        <label for="country">Country*</label>
                        <ValidationProvider name="country" rules="required"
                        v-slot="{ errors }">
                        <select class="form-control reg-input" id="country"
                        v-model="country" name="country">   
                        <option selected disabled>Enter Country</option>
                        <option value="usa">USA</option>
                        <option value="uk">UK</option>
                        <option value="new zealand">New Zealand</option>
                        <option value="ireland">Ireland</option>
                        <option>Australia</option>
                    </select>
                    <span class="text-danger">{{ errors[0] }}</span>
                </ValidationProvider>
            </div>
        </div>
        <!-- <div class="col-xl-4 col-lg-6 col-12">

            <div class="form-group">
                <label for="state">State*</label>
                <ValidationProvider name="state" rules="required"
                v-slot="{ errors }">
                <input type="text" class="form-control reg-input"
                id="state"
                placeholder="Enter State Name" v-model="state"
                name="state">
                <span class="text-danger">{{ errors[0] }}</span>
            </ValidationProvider>
        </div>

    </div> -->
    <div class="col-xl-4 col-lg-6 col-12">

        <div class="form-group">
            <label for="city">City*</label>
            <ValidationProvider name="city" rules="required"
            v-slot="{ errors }">
            <input type="text" class="form-control reg-input"
            id="city"
            placeholder="Enter city Name" v-model="city"
            name="city">
            <span class="text-danger">{{ errors[0] }}</span>
        </ValidationProvider>
    </div>

</div>
<div class="col-xl-4 col-lg-12 col-12">
    <div class="form-group">
        <label for="zipCode">EIR Code*</label>
        <ValidationProvider name="Post code" rules="required"
        v-slot="{ errors }">
        <input type="text" class="form-control reg-input"
        id="zipCode"
        placeholder="Enter EIR code" v-model="zip_code"
        name="zip_code">
        <span class="text-danger">{{ errors[0] }}</span>
    </ValidationProvider>
</div>
</div>
</div>


<input type="button" name="previous" class="previous action-button"
value="Previous"/>
<input type="button" name="next" class="next action-button"
value="Next"/>


</fieldset>
<fieldset>
    <div class="row">
        <div class="col-12 text-center">
            <p class="reg-title">Select Packages</p>
            <p class="reg sub">choose your subscription</p>
        </div>
    </div>
    <!-- <div class="row packages mt-4"> -->
 


            <div class="row packages mt-4">
                <div class="col-xl-4 col-lg-6 col-12" v-for="(pk,index) in packages">
                    <div class="pckg_wrapper">
                        <p class="pckg-title">
                        {{pk.package_name}}
                        </p>
                        <img src="images/pckg-icon.png" alt="">
                        <p class="pckg_price"><sup>$</sup> {{pk.charges}} </p>
                        <p class="pckg_meta"> This package includes </p>
                        <div class="descriptions">
                        <p class="fieldData" v-html="pk.description"></p>
                        </div>
                        <!-- <ul class="pckg_items">
                            <li>CV maker</li>
                            <li>Send CV to Companies</li>
                            <li>See upto 5 businesses that have viewed your
                                profile
                            </li>
                            <li>1 recruitment consultancy session</li>
                            <li>Notification of networking CPD events</li>
                        </ul> -->
                        <label class="check-container">Select Package
                            <input type="radio" :value="pk.id" name="radio" v-model="package_id">
                            <span class="check-checkmark"></span>
                        </label>
                    </div>
                </div>
            </div>
     
    <!-- </div> -->
    <div class="row mt-4">
        <div class="col-12 text-center">
            <p class="rcard-p">
                want to try for free? <label class="check-container">
                    <input type="radio"  name="radio">
                    <span class="check-checkmark"></span>
                </label>  <button @click="freeTrial()" type="submit">Click here!</button>
            </p>
        </div>
    </div>

    <input type="button" name="previous" class="previous action-button"
    value="Previous"/>
    <input type="button" name="next" class="next action-button"
    value="Continue"/>


</fieldset>

<fieldset>
    <div class="row">
        <div class="col-12 text-center">
            <p class="reg-title">Card Details</p>
        </div>
    </div>

    <div class="row">
        <div class="col-xl-6 col-md-6 col-12">

            <div class="form-group">
                <label for="holderName">Card Holder Name*</label>
                <ValidationProvider name="card holder name" rules="required"
                v-slot="{ errors }">
                <input type="text"
                class="input-lg form-control cc-number reg-input"
                id="holderName" placeholder="Enter Name"
                name="card_holder_name"
                v-model="card_holder_name">
                <span class="text-danger">{{ errors[0] }}</span>
            </ValidationProvider>
        </div>

    </div>
    <div class="col-xl-6 col-md-6 col-12">

        <div class="form-group">
            <label for="cc-number">Card Number*</label>
            <ValidationProvider vid="card_number" name="card number" rules="required"
            v-slot="{ errors }">
            <input class="form-control reg-input"
            id="cc-number" type="tel"
            placeholder="•••• •••• •••• ••••"
            v-model="card_number" name="card_number" @keyup.8="atBackPress()">
            <span class="text-danger">{{ errors[0] }}</span>
        </ValidationProvider>
    </div>

</div>
<div class="col-xl-6 col-md-6 col-12">

    <div class="form-group">
        <label for="cvv">CVV Code*</label>
        <ValidationProvider name="cvv" rules="required|min:3|max:4"
        v-slot="{ errors }">
        <input type="number" class="form-control reg-input"
        id="cvv"
        placeholder="Enter CVV Code" v-model="cvv"
        name="cvv">
        <span class="text-danger">{{ errors[0] }}</span>
    </ValidationProvider>
</div>

</div>
<div class="col-xl-6 col-md-6 col-12">

    <div class="form-group">
        <label>Expire Month/Year*</label>
        <ValidationProvider name="expiry date" rules="required"
        v-slot="{ errors }">
        <input type="text" name="expiry_date" v-model="expiry_date" class="form-control" id="expiry" aria-describedby="emailHelp" placeholder="Enter Expiry">
        <span class="text-danger">{{ errors[0] }}</span>
    </ValidationProvider>
</div>

</div>
</div>


<input type="button" name="previous" class="previous action-button"
value="Previous"/>
<!-- <input type="submit" name="submit" class="submit action-button" value="Sign Up" /> -->
<button type="submit" class=" action-button">Sign Up</button>

</fieldset>


</form>
</ValidationObserver>
</div>
</div>


</div>
</div>
</div>
</div>
</div>
</section>
</template>

<script>

    export default {
        data() {
            return {
                email: '',
                password: '',
                first_name: '',
                last_name: '',
                company_name: '',
                confirmation: '',
                address: '',
                country: '',
                city: '',
                state: '',
                zip_code: '',
                card_holder_name: '',
                cvv: '',
                expiry_date: '',
                card_number: '',
                user_type: 1,
                packages:{},
                 freeTrialObject: 0,
                role: 'businessOwner',
                base_url: window.base_url,
                package_id:''
            };
        },
        created(){
        this.getPackages();
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
        freeTrial(){
            this.freeTrialObject = 1;
        },
        updatedFreeTrial(){
            this.freeTrialObject = 0;
        },
        atBackPress(){
            this.card_number = '';
        },

        async getPackages(){
            let response = await axios.get('/api/user/package?user_type='+this.user_type);
            console.log(response);
            this.packages = response.data.data;
        },
        async Register() {
           const isValid = await this.$refs.observer.validate();
           console.log(isValid);
           //const  isValid = false;
           if (!isValid && this.freeTrialObject) {
            this.$snotify.error("Field Occur please go back to check",'error');
        }else{
            let fd = new FormData(this.$refs.registerForm);
            fd.append('role',this.role);
            fd.append('freeTrial',this.freeTrialObject);
            fd.append('package_id',this.package_id);
            let response = await axios.post('/api/auth/register', fd);
            console.log(response);
            if (response.data.data) {
                this.$snotify.success(response.data.message)
                let self = this;
                setTimeout(function () {
                    self.$router.push({name: 'businessOwner.auth.login'});
                }, 1000);
            } else {
                this.$snotify.error(response.data.message);
            }
        }
    }
}
}
</script>

