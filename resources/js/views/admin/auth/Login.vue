<template>

    <div class="login-inner">
        <div class="row">
            <div class="col-lg-6 col-12">
                <div class="left"><img :src="`${base_url}/assets/images/login-left.jpg`" class="img-fluid" alt="">
                </div>
            </div>
            <div class="col-lg-6 col-12 ">
                <div class="right">
                    <img :src="`${base_url}/assets/images/logo.png`" class="img-full" alt="logo">
                    <div class="form-main public-login ">
                        <h1>Login To Your Account</h1>
                        <!--fields start here-->
                        <ValidationObserver v-slot="{ handleSubmit }">
                            <form ref="LoginForm" @submit.prevent="handleSubmit(Login)">

                                <div class="row">
                                    <div class="col-12 form-group mb-2">
                                        <ValidationProvider name="Email Address" rules="required|email"
                                                            v-slot="{ errors }">
                                            <input name="email" type="email" class="form-control" spellcheck="true"
                                                   placeholder="Email" v-model="email">
                                            <i class="fa fa-envelope"></i>
                                            <span class="text-danger">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>

                                    <div class="col-12 form-group position-relative mb-2">
                                        <ValidationProvider rules="required" name="password" v-slot="{errors}">
                                            <input :type="passwordEye" v-model="password" name="password" spellcheck="true"
                                                   class="form-control" placeholder="Password"><i
                                            class="fa fa-lock"></i>
                                            <button type="button" class="view-btn position-absolute"><i class="fa  enter-icon right-icon cursor-pointer" @click="togglePasswordEye('passwordEye','passwordClass')" :class="passwordClass" aria-hidden="true"></i>
                                            </button>
                                            <span class="text-danger">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <div class="col-md-12">
                                        <ValidationProvider name="role" v-slot="{errors}">
                                            <input name="role" v-model="role" type="hidden" spellcheck="true"
                                                   class="form-control" placeholder="Password" value="public">
                                            <span class="text-danger">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-between">
                                    <div class="">
                                        <label class="login-check">Remember me
                                            <span class="checkmark"></span>
                                            <input spellcheck="true" type="checkbox" checked="checked">
                                        </label>
                                    </div>
                                    <div class="forgot-password-wrapper">
                                        <a class="forgot" data-toggle="modal" data-target="#exampleModalCenter">Forgot
                                            Password?</a>
                                    </div>
                                </div>

                                <button type="submit" class="yel-btn">Login</button>

                                <div class="new-user">

                                    <router-link :to="{name:'AdminHome'}" class="bcktologin">
                                        <i class="fas fa-arrow-left"></i>
                                        back to Website
                                    </router-link>
                                </div>
                                <!--fields end here-->

                            </form>
                        </ValidationObserver>
                    </div>
                </div>
            </div>
            <div class="col-md-2 col-xl-3"></div>
            <email-model></email-model>
            <check-code-modal></check-code-modal>
            <reset-password-modal></reset-password-modal>
        </div>
    </div>

</template>

<script>
const EmailModel = () => import('./EmailModel.vue');
const CheckCodeModal = () => import('./CheckCodeModal.vue');
const ResetPasswordModal = () => import('./ResetPasswordModal.vue');
export default {
    data() {
        return {
            passwordClass : 'fa-eye',
            passwordEye: 'password',
            email: '',
            password: '',
            role: 'admin',
            base_url: window.base_url
        };
    },
    created() {
        let accesstoken = localStorage.getItem('access-token');
        let userType = localStorage.getItem('userType');
        if (accesstoken && userType == 'admin') {
            this.isSession = true;
            this.$router.push({name: 'admin.dashboard'});
        } else {
            this.isSession = false;
        }

        console.log(userType);
    },
    components: {
        EmailModel,
        CheckCodeModal,
        ResetPasswordModal
    },
    methods: {
        togglePasswordEye(passwordVar,classVar){
           this[passwordVar] = this[passwordVar] == 'password'?"text": "password";
           this[classVar] = this[passwordVar] == 'password'?"fa-eye": "fa-eye-slash";
       },

        async Login(e) {
            window.localStorage.setItem('loadedFirstTime',true);
            let fd = new FormData(this.$refs.LoginForm);
            let response = await axios.post('/api/auth/login', fd);
            if (response.data.data) {
                let data = response.data.data;
                this.$snotify.success(response.data.message)
                localStorage.setItem('isLoggedIn', '1');
                localStorage.setItem('userType', 'admin');
                localStorage.setItem('access-token', data.token);
                localStorage.setItem('name', data.name);
                localStorage.setItem('image', data.image);
                let self = this;
                window.axios.defaults.headers.common = {'Authorization': `Bearer ${response.data.data.token}`}
                setTimeout(function () {
                    self.$router.push({name: 'admin.dashboard'});
                }, 1000);
            } else {
                this.$snotify.error(response.data.message);
            }
        }
    }
}

</script>
