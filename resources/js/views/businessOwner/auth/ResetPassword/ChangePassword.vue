<template>
    <div class="modal fade" id="new-password" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
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
                                <form ref="newPassword" @submit.prevent="handleSubmit(onSubmit)">
                                    <div class="form-group mb-3 position-relative">
                                        <label for="pass-login">New Password*</label>
                                        <ValidationProvider name="Password" rules="required|confirmed:confirmation"
                                                            v-slot="{errors}">

                                            <input type="password" class="form-control prof-input-login" id="pass-login"
                                                   placeholder="*****" name="password" v-model="password" >
                                            <button type="button" class="eye-pass fa fa-eye" @click="togglePasswordType(0)">
                                                <i class="" aria-hidden="true"></i>
                                            </button>
                                            <span class="text-danger">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <div class="form-group mb-3 position-relative">
                                        <label for="pass-login">Re-Type Password*</label>
                                        <ValidationProvider name="confirmation" rules="required" vid="confirmation"
                                                            v-slot="{ errors }">

                                            <input type="password" class="form-control prof-input-login" id="pass-login"
                                                   placeholder="*****" v-model="confirmation" >
                                            <button type="button" class="eye-pass fa fa-eye" @click="togglePasswordType(2)">
                                                <i class="" aria-hidden="true"></i>
                                            </button>
                                            <span>{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <div class="form-row">
                                        <div class="col-12 text-center">
                                            <button type="submit" class="btn-profBlue">Update</button>

                                        </div>
                                        <div class="col-12 text-center">
                                            <a href="" class="small-link" data-dismiss="modal"><i
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
		data () {
			return {
				password:'',
				confirmation : '',
			};
		},
		methods: {
			async onSubmit(e) {
				let fd = new FormData(this.$refs.newPassword);
				fd.append('code',localStorage.getItem('code'));
				let response = await axios.post('/api/auth/new-password',fd);
				if(response.data.status){
					localStorage.removeItem('code');
					localStorage.removeItem('email');
					var self = this;
					$('#new-password').modal('hide');
					this.$snotify.success(response.data.msg,'Updated!');

				}else{
					this.$snotify.error(response.data.msg,'Oops!');
				}
			}
		}
	}

</script>
