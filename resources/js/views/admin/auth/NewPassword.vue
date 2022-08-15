<template>
	<div class="row">
		<div class="col-md-2 col-xl-3"></div>
		<div class="col-md-8 col-xl-6 col-12">
			<div class="register-main">
				<ValidationObserver v-slot="{ handleSubmit }">
					<form ref="newPassword" @submit.prevent="handleSubmit(onSubmit)">
						<img :src="url('/assets/public-assets/images/logo.png')" class="img-full" alt="logo">
						<div class="form-main">
							<div class="row">
								<div class="col-md-12 text-center">
									<h1>Forgot Password</h1>
								</div>
							</div>
							<!--fields start here-->
							<div class="fields">
								<div class="row">
									<div class="col-md-12">
										<ValidationProvider name="Password" rules="required|confirmed:confirmation" v-slot="{errors}">
											<i class="fa fa-envelope"></i><input name="password" v-model="password" type="password" spellcheck="true" class="form-control" placeholder="Enter New Password">
											<span>{{errors[0]}}</span>
										</ValidationProvider>
									</div>
									<div class="col-md-12">
										<ValidationProvider name="confirmation" rules="required" vid="confirmation" v-slot="{ errors }">
											<i class="fa fa-envelope"></i><input v-model="confirmation" type="password" spellcheck="true" class="form-control" placeholder="Retype Password">
											<span>{{errors[0]}}</span>
										</ValidationProvider>
									</div>
								</div>
								<button type="submit" class="form-control continue-button">Save</button>
								<div class="new-user">
									<router-link :to="{name: 'AdminHome'}" class="login back">
										<!-- <i class="fa fa-long-arrow-left"></i> -->
									back to login</router-link>
								</div>
							</div>
							<!--fields end here-->
						</div>
					</form>
				</ValidationObserver>
			</div>
		</div>
		<div class="col-md-2 col-xl-3"></div>
	</div>
	<!--register page end here-->
</template>
<script>
	export default {
		data () {
			return {
				password:'',
				confirmation : '',
			};
		},
		created() {
			let email = localStorage.getItem('email');
			if (!email) {
				this.$snotify.error('Please Follow step by step to change new password', 'Forbidden!');
				this.$router.push({ name: 'ForgetCode' });
			}
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
					this.$router.push({name : 'Login'});
					this.$snotify.success(response.data.msg,'Updated!');

				}else{
					this.$snotify.error(response.data.msg,'Oops!');
				}
			}
		}
	}

</script>
