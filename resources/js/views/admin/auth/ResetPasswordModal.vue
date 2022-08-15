<template>
	<div class="modal fade modal-3" id="password-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
				<div class="forget-pass">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
					<div class="modal-body">
						<h1>Password Recovery</h1>
						<ValidationObserver v-slot="{ handleSubmit }">
					<form ref="newPassword" @submit.prevent="handleSubmit(onSubmit)">
							<div class="row">
								<div class="col-12 form-group">
									<ValidationProvider name="Password" rules="required|confirmed:confirmation" v-slot="{errors}">
									<input name="password" v-model="password" type="password" spellcheck="true" class="form-control" placeholder="Enter New Password"></i>
									<button type="button" class="view-btn position-absolute"><i class="fa fa-eye"></i> </button>
									<span>{{errors[0]}}</span>
										</ValidationProvider>
								</div>
								<div class="col-12 form-group">
									<ValidationProvider name="confirmation" rules="required" vid="confirmation" v-slot="{ errors }">
									<input v-model="confirmation" type="password" spellcheck="true" class="form-control" placeholder="Retype Password"></i>
									<button type="button" class="view-btn position-absolute"><i class="fa fa-eye"></i> </button>
									<span>{{errors[0]}}</span>
										</ValidationProvider>
								</div>
								<div class="col-12">
									<button type="submit" class=" yel-btn"> Update </button>
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
					$('.modal-3').modal('hide');
					$('.modal-1').modal('hide');
					$('.modal-2').modal('hide');
					this.$snotify.success(response.data.msg,'Updated!');

				}else{
					this.$snotify.error(response.data.msg,'Oops!');
				}
			}
		}
	}

</script>
