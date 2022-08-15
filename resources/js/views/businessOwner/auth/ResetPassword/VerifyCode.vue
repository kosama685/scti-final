<template>
    <div class="modal fade" id="verify-code" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
         aria-hidden="true">
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
                            <h4>Password Recovery</h4>
                        </div>
                    </div>
                    <div class="row mt-4">
                        <div class="col-12">
                            <ValidationObserver v-slot="{ handleSubmit }">
                                <form ref="validateCode" @submit.prevent="handleSubmit(onSubmit)">
                                    <div class="form-group mb-3">
                                        <label for="verification-code">Verfication Code*</label>
                                        <validationProvider name="code" rules="required" v-slot="{ errors }">

                                            <input type="number" name="code" v-model="code" class="form-control prof-input-login"
                                                   id="verification-code"
                                                   aria-describedby="emailHelp" placeholder="Enter verification code">
                                            <span class="text-danger">{{ errors[0] }}</span>
                                        </validationProvider>
                                    </div>
                                    <div class="form-row mb-3">
                                        <div class="col-12 text-right">
                                            <span class="forgot">Didnt recieve code? </span> <a :disabled="isSending" @click="onResend()"
                                                                                                class="small-link fp"
                                                                                                >{{isSending?'Resending Code':'Resend'}}</a>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="col-12 text-center">
                                            <button type="submit" class="btn-profBlue" >Continue</button>

                                        </div>
                                        <div class="col-12 text-center">
                                            <a href="" class="small-link"><i class="fa fa-arrow-left mr-2"
                                                                             aria-hidden="true"></i> back to Login</a>
                                        </div>
                                    </div>
                                </form>
                            </ValidationObserver>
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
            isSending: false,
            code: '',
            email: ''
        };
    },
    methods: {
        async onResend(e) {
            let fd = new FormData();
            fd.append('email', localStorage.getItem('email'));
            if (!this.isSending) {
                this.isSending = true;
                let response = await axios.post('/api/auth/verify/email', fd);
                if (response.data.data) {
                    let self = this;
                    this.isSending = false;
                    setTimeout(function () {
                        self.$snotify.success(response.data.msg);
                    }, 1000);
                } else {
                    this.$snotify.error(response.data.msg);
                }
            } else {

                this.$snotify.error('already sending', 'Please Wait!');
            }
        },
        async onSubmit(e) {
            let fd = new FormData(this.$refs.validateCode);
            let response = await axios.post('/api/auth/verify/code', fd);
            if (response.data.data) {
                localStorage.setItem('code', this.code);
                var self = this;
                 $('#new-password').modal('show');
                $('#verify-code').modal('hide');
                this.$snotify.success(response.data.message, 'Verified');

            } else {
                // $('#new-password').modal('show');
                // $('#verify-code').modal('hide');
                this.$snotify.error(response.data.message, 'Invalid Code');
            }
        }
    }
}

</script>
