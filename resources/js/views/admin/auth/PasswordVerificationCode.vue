<template>
      <div class="row">
        <div class="col-md-2 col-xl-3"></div>
        <div class="col-md-8 col-xl-6 col-12">
          <div class="register-main">
           <ValidationObserver v-slot="{ handleSubmit }">
            <form ref="validateCode" @submit.prevent="handleSubmit(onSubmit)">
              <img :src="url('assets/public-assets/images/logo.png')" class="img-full my-2" alt="logo">
              <div class="form-main my-3">
                <div class="row">
                  <div class="col-md-12 text-left">
                   <h1>Password Recovery</h1>
                 </div>
               </div>

               <!--fields start here-->

               <div class="fields">
                 <div class="row">
                  <div class="col-md-12">
                    <validationProvider name="code" rules="required"  v-slot="{ errors }">
                      <i class="fa fa-lock" aria-hidden="true"></i><input name="code" v-model="code" type="text" spellcheck="true" class="form-control" placeholder="Enter Verification Code">
                      <span>{{errors[0]}}</span>
                    </validationProvider>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <a :disabled="isSending" @click="onResend()" class="pull-right resend-code">
                    {{isSending?'Resending Code':'Resend'}}</a>
                  </div>
                </div>
                <button type="submit" class="form-control continue-button">continue</button>
                <div class="new-user my-2">

                  <router-link :to="{name: 'AdminHome'}" class="login form-control backto-login">
                   <i class="fa fa-arrow-circle-left"></i>
                 back to login</router-link></div>
               </div>
               <!--fields end here-->
             </div>
           </form>
         </ValidationObserver>
       </div>

     </div>
     <div class="col-md-2 col-xl-3"></div>
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
                let response = await axios.post('/api/auth/send/email',fd); 
                if(response.data.data){
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
                this.$router.push({name : 'NewPassword'});
                this.$snotify.success(response.data.message,'Verified');

            }else{
                this.$snotify.error(response.data.message,'Invalid Code');
            }
        }
    }
}

</script>
