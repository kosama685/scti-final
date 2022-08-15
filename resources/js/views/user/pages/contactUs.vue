<template>
	<div>
		<full-page-header></full-page-header>
		<section class="nav-bg"></section>
		<section class="create-cv">

			<div class="container">
				<div class="row mt-5 mb-2">
					<div class="col-12 d-flex align-items-center  top-head">
						<!-- <a href="" class="back-a"><i class="fa fa-arrow-left" aria-hidden="true"></i> Back</a> -->
						<p class="page-heading mx-auto">Contact Us</p>
					</div>
				</div>
				<div class="row mt-2">
					<div class="col-12">
						<form id="msform" action="" class="create-cv edit-profile">
							<div class="card cv-create-card user-card">
								<div class="card-body cv-card-body">
									<div class="form-row">
										<div class="col-lg-12 col-md-12 col-12">

											<div class="form-group">
												<label class="c-light">Full Name</label>
												<input type="text" v-model="contact.name" class="form-control reg-input" id="fName" value="Mark" placeholder="Enter FullName">
											</div>
										</div>
										
									</div>
									<div class="form-row">
										<div class="col-lg-6 col-md-6 col-12">

											<div class="form-group">
												<label class="c-light">Email</label>
												<input type="email" v-model="contact.email" class="form-control reg-input" id="fName" value="" placeholder="Enter Email Address">
											</div>
										</div>
										<div class="col-lg-6 col-md-6 col-12">
											<div class="form-group">
												<label class="c-light">Subject</label>
												<input type="text" class="form-control reg-input" id="fName" placeholder="Enter Subject">
											</div>
										</div>
									</div>

									<div class="form-row">
										<div class="col-12">
											<div class="form-group">
												<label class="c-light">Message</label>
												<textarea name="" id="" v-model="contact.message" cols="30" rows="10" spellcheck="false" placeholder="Enter Message"></textarea>
											</div>
										</div>
									</div>
									<div class="form-row">
										<div class="col-12 text-center">
											<button type="button" class="btn-contact" @click="contactForm()">Submit</button>
										</div>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>

		</section>
		<full-page-footer></full-page-footer>
	</div>
</template>

<script>
	const FullPageHeader = () => import('../components/RegisterHeader.vue');
	const FullPageFooter = () => import('../components/FullPageFooter.vue');
	export default {
		 data() {
            return{
                contact:{
                    name: '',
                    email:'',
                    category: '',
                    message: '',
                    phone:''
                }
            }
        },
		created() {
		},
		components: {
			FullPageFooter,
			FullPageHeader,
		},
		methods: {

            async contactForm()
            {
                let response = (await axios.post('/api/admin/contactUs',this.contact)).data;
                console.log(response);
                this.$snotify.success(response.message);
                this.$router.reload();
            }
        }
	}
</script>