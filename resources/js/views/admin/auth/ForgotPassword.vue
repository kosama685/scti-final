<template>
  <div class="row">
    <div class="col-md-2 col-xl-3"></div>
    <div class="col-md-8 col-xl-6 col-12">
      <div class="register-main">
          <img :src="url('/assets/images/logo.png')" class="img-full my-2" alt="logo">
          <div class="form-main my-3">
            <div class="row">
              <div class="col-md-12">
               <h1>Password Recovery</h1>
             </div>
           </div> 
           <!--fields start here-->  
           <ValidationObserver v-slot="{ handleSubmit }">
            <form ref='forgotEmail' @submit.prevent="handleSubmit(submit)">
             <div class="fields">
              <div class="row">

                <div class="col-md-12">
                  <validationProvider name="Email Address" rules="required|email" v-slot="{ errors }">
                    <i class="fa fa-envelope"></i><input name="email" v-model="email" type="email" spellcheck="true" class="form-control" placeholder="Enter Email Address">
                    <span class="text-danger">{{errors[0]}}</span>
                  </validationProvider>
                </div> 
              </div>
              <button type="submit" class="form-control continue-button">continue</button>
              <!-- <button type="submit" class="form-control continue-button"></button> -->
              <div class="new-user my-2">

                <router-link :to="{name: 'AdminHome'}" class="login form-control backto-login">
                 <i class="fa fa-arrow-circle-left"></i>
               back to login</router-link></div>
             </div> 
           </form>
         </ValidationObserver>
         <!--fields end here--> 
       </div>
   </div>
 </div>
 <div class="col-md-2 col-xl-3"></div>
</div>
</template>
<script>
export default {
    data () {
      return {
        email:'',
      };
    },
    methods: {
      async submit(e) {
            let fd = new FormData(this.$refs.forgotEmail);
            let response = await axios.post('/api/auth/send/email',fd);      
            if(response.data.data){
                localStorage.setItem('email',this.email);
                this.$router.push({ name: 'ForgetCode' });
                this.$snotify.success(response.data.message);
            }else{
                this.$snotify.error(response.data.message);
            }
      }
    }
}

</script>