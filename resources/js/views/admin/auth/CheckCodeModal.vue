<template>
    <div class="modal fade modal-2" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="forget-pass">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
                    <div class="modal-body">
                        <h1>Password Recovery</h1>
                        <ValidationObserver v-slot="{ handleSubmit }">
                            <form ref="validateCode" @submit.prevent="handleSubmit(onSubmit)">
                                <div class="row">
                                    <div class="col-12 form-group">
                                        <validationProvider name="code" rules="required"  v-slot="{ errors }">
                                            <input name="code" v-model="code" type="text" spellcheck="true" class="form-control" placeholder="Enter Verification Code">
                                            <i class="fas fa-pencil-alt"></i>
                                            <span>{{errors[0]}}</span>
                                        </validationProvider>
                                    </div>
                                    <div class="col-12 text-right">
                                     <a :disabled="isSending" @click="onResend()" class="pull-right resend-code code-txt">
                                     {{isSending?'Resending Code':'Resend'}}</a>
                                 </div>
                                 <div class="col-12">
                                    <button type="submit" class="yel-btn"> Continue </button>
                                </div>
                                <a href="#"  class="bcktologin" data-dismiss="modal" aria-label="Close"><i class="fa fa-arrow-left"></i> back to login</a>

                            </div>
                        </form>
                    </ValidationObserver>
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
                code : '',
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
                        setTimeout(function() {
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
                let response = await axios.post('/api/auth/verify/code',fd);
                if(response.data.data){
                    localStorage.setItem('code', this.code);
                    var self = this;
                    $('.modal-3').modal('show');

                    this.$snotify.success(response.data.message,'Verified');

                }else{
                    this.$snotify.error(response.data.message,'Invalid Code');
                }
            }
        }
    }

</script>