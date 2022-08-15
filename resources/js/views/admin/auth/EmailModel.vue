<template>

	<div class="modal fade modal-1" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
				<div class="forget-pass">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
					<div class="modal-body">
						<h1>Password Recovery</h1>
						<ValidationObserver v-slot="{ handleSubmit }">
            			<form ref='forgotEmail' @submit.prevent="handleSubmit(submit)">
							<div class="row">
								<div class="col-12 form-group">
									<validationProvider name="Email Address" rules="required|email" v-slot="{ errors }">
										<input name="email" type="text" class="form-control" spellcheck="true" placeholder="Email" v-model="email" />
										<span class="text-danger">{{errors[0]}}</span>
									</validationProvider>
									<i class="fa fa-envelope"></i> </div>
									<div class="col-12">
										<button type="submit" class="yel-btn"  > Continue </button>
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
					email:'',
				};
			},
			methods: {
				async submit(e) {
					let fd = new FormData(this.$refs.forgotEmail);
					let response = await axios.post('/api/auth/send/email',fd);      
					if(response.data.data){
						localStorage.setItem('email',this.email);
						this.$snotify.success(response.data.message);
						$('.modal-2').modal('show');
						
					}else{
						this.$snotify.error(response.data.message);
					}
				}
			}
		}

	</script>