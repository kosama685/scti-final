<template>
    <div>
        <full-page-header></full-page-header>
        <section class="login-section">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-md-12">
                        <ValidationObserver v-slot="{ handleSubmit }">
                            <form class="login-form" ref="LoginForm" @submit.prevent="handleSubmit(Login)">
                                <div class="form-row mb-3">
                                    <div class="col-12">
                                        <h4>Login to your account</h4>
                                    </div>
                                </div>

                                <div class="form-group mb-3">
                                    <ValidationProvider name="Email Address" rules="required|email" v-slot="{ errors }">

                                        <label for="email-login">Email address</label>
                                        <input type="email" class="form-control prof-input-login" id="email-login"
                                               aria-describedby="emailHelp" placeholder="Enter Email Address" name="email" v-model="email">
                                        <span class="text-danger">{{ errors[0] }}</span>
                                    </ValidationProvider>
                                </div>

                                <div class="form-group mb-3 position-relative">
                                    <ValidationProvider rules="required" name="password" v-slot="{errors}">

                                        <label for="pass-login">Password</label>
                                        <input type="password" class="form-control prof-input-login" id="pass-login"
                                               placeholder="Enter Password" v-model="password" name="password">
                                        <button type="button" class="eye-pass fa fa-eye" @click="togglePasswordType(1)">
                                            <i class="" aria-hidden="true"></i>
                                        </button>
                                        <span class="text-danger">{{ errors[0] }}</span>
                                    </ValidationProvider>
                                </div>
                                <div class="form-row mb-3">
                                    <div class="col-12 text-right">
                                        <a href="" class="small-link" data-toggle='modal'
                                           data-target='#password-recover'>forgot
                                            password?</a>
                                    </div>
                                </div>

                                <div class="form-row">
                                    <div class="col-12 text-center">
                                        <button type="submit" class="btn-profBlue">Login</button>

                                    </div>
                                    <div class="col-12 text-center">
                                        <a href="" class="small-link"><i class="fa fa-arrow-left mr-2"
                                                                         aria-hidden="true"></i> back to home page</a>
                                    </div>
                                </div>
                            </form>
                        </ValidationObserver>
                    </div>
                    <div class="col-xl-6 d-xl-block d-none">

                        <div class="wrap-right">
                            <img :src="`${base_url}/assets/user/images/gray-dots.png`" class="dots gray-dots" alt="">
                            <img :src="`${base_url}/assets/user/images/black-dots.png`" class="dots black-dots" alt="">
                            <img :src="`${base_url}/assets/user/images/Profession-net-03_10.png`" class="lady" alt=""
                                 srcset="">
                        </div>


                    </div>
                </div>
            </div>

        </section>
        <inner-page-footer></inner-page-footer>
        <SendCode></SendCode>
        <VerifyCode></VerifyCode>
        <ChangePassword></ChangePassword>
    </div>

</template>
<script>
const InnerPageFooter = () => import('../components/InnerPageFooter.vue');
const FullPageHeader = () => import('../components/FullPageHeader.vue');
const SendCode = () => import('./ResetPassword/SendCode.vue');
const VerifyCode = () => import('./ResetPassword/VerifyCode');
const ChangePassword = () => import('./ResetPassword/ChangePassword.vue');

export default {
    data() {
        return {
            email: '',
            password: '',
            role: 'user',
            base_url: window.base_url
        };
    },
    created() {
        let accesstoken = localStorage.getItem('access-token');
        let userType = localStorage.getItem('userType');
        let logoutCheck = window.localStorage.getItem('logoutItem');
        console.log(logoutCheck);
        if (accesstoken && userType == 'user') {
            this.isSession = true;
            this.$router.push({name: 'user.users.dashboard'});
        } else {
            this.isSession = false;
        }

        if (logoutCheck == 'true') {
            window.localStorage.setItem('logoutItem', false);
            this.loadOnce();

        }
        console.log(userType);
    },
    components: {
        InnerPageFooter,
        FullPageHeader,
        SendCode,
        VerifyCode,
        ChangePassword
    },
    methods: {
        async Login(e) {
            window.localStorage.setItem('loadedFirstTime', true);
            let fd = new FormData(this.$refs.LoginForm);
            fd.append('role', this.role);
            let response = await axios.post('/api/auth/login', fd);
            if (response.data.data) {
                let data = response.data.data;
                this.$snotify.success(response.data.message)
                localStorage.setItem('isLoggedIn', '1');
                localStorage.setItem('userType', 'user');
                localStorage.setItem('access-token', data.token);
                localStorage.setItem('name', data.name);
                localStorage.setItem('image', data.image);
                localStorage.setItem('userId', data.id);
                let self = this;
                window.axios.defaults.headers.common = {'Authorization': `Bearer ${response.data.data.token}`}
                setTimeout(function () {
                    self.$router.push({name: 'user.users.view'});
                }, 1000);
            } else {
                this.$snotify.error(response.data.message);
            }
        },
        loadOnce: function () {
            console.log("okayyyyyy");
            location.reload();
        }
    }
}
</script>
