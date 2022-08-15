<template>
    <div class="modal fade" id="password-recover" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
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
                                <form ref='forgotEmail' @submit.prevent="handleSubmit(submit)">
                                    <div class="form-group mb-3">
                                        <label for="email-recover">Email Address*</label>
                                        <validationProvider name="Email Address" rules="required|email"
                                                            v-slot="{ errors }">
                                            <input type="email" class="form-control prof-input-login" name="email"
                                                   v-model="email" id="email-recover" aria-describedby="emailHelp"
                                                   placeholder="Enter Email Address">
                                            <span class="text-danger">{{ errors[0] }}</span>
                                        </validationProvider>
                                    </div>
                                    <div class="form-row">
                                        <div class="col-12 text-center">
                                            <button class="btn-profBlue" type="submit">Continue</button>

                                        </div>
                                        <div class="col-12 text-center">
                                            <a href="" class="small-link" data-dismiss="modal" aria-label="Close"><i
                                                class="fa fa-arrow-left mr-2" aria-hidden="true"></i> back to Login</a>
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
            email: '',
        };
    },
    methods: {
        async submit(e) {
            let fd = new FormData(this.$refs.forgotEmail);
            let response = await axios.post('/api/auth/send/email', fd);
            if (response.data.data) {
                localStorage.setItem('email', this.email);
                this.$snotify.success(response.data.message);
                $('#verify-code').modal('show');
                $('#password-recover').modal('hide');

            } else {
                // $('#password-recover').modal('hide');
                //  $('#verify-code').modal('show');
                this.$snotify.error(response.data.message);
            }
        }
    }
}

</script>
