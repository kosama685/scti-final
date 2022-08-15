<template>
	<div class="content-wrapper">
		<div class="content-body">
            <section id="configuration">
                <div class="row">
                    <div class="col-12">
                        <div class="card rounded pad-20">
                            <div class="card-content collapse show">
                                <ValidationObserver v-slot="{ handleSubmit }">
                                    <!-- <form ref="EditPackageForm" @submit.prevent="handleSubmit(editPackage)"> -->
                                <div class="card-body">

                                <div class="row align-items-center">
                                        <div class="col-md-6 col-12">
                                            <h1 class="m-0 ch"><router-link :to="{name: 'PackageManagement'}"><i class="fa fa-angle-left"></i>Package Management</router-link></h1>
                                        </div>
                                        <div class="col-md-6 col-12 text-right">

                                            <button v-if="isHidden" type="submit" @click="editPackage()" class="green-btn m-0 text-center e-bt">Update</button>

                                            <button v-if="!isHidden" type="submit" @click="editPackage_2()" class="green-btn m-0 text-center e-bt">Update</button>
                                        </div>
                                    </div>

                                    <nav>
                                        <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                            <a  v-on:click="isHidden = true" v-bind:class="userType == 0 ? 'nav-item nav-link ' : 'nav-item nav-link'" id="nav-user-tab" data-toggle="tab" href="#nav-user" role="tab" aria-controls="nav-user" aria-selected="true">Users</a>
                                            <a  v-on:click="isHidden = !isHidden"  v-bind:class="userType == 1 ? 'nav-item nav-link ' : 'nav-item nav-link'" id="nav-employer-tab" data-toggle="tab" href="#nav-employer" role="tab" aria-controls="nav-employer" aria-selected="false">Business Owners</a>
                                        </div>
                                    </nav>
                                    <div class="tab-content" id="nav-tabContent">

                                        <div class="tab-pane fade show active" id="nav-user" role="tabpanel" aria-labelledby="nav-user-tab">
                                            <div :key="index" class="card collapse-icon accordion-icon-rotate user_prof_acc" v-for="(pk,index) in packages">
                                                <div id="headingCollapse12" class="card-header">
                                                    <a data-toggle="collapse" href="#collapse12" aria-expanded="true" aria-controls="collapse12" class="card-title lead ">Package 0{{index}}</a>
                                                </div>
                                                <div id="collapse12" role="tabpanel" aria-labelledby="headingCollapse12" class="collapse show" aria-expanded="true">
                                                    <div class="card-content">
                                                        <div class="card-body mt-sm-0 mt-2">
                                                            <div class="row align-items-center">
                                                                <div class="col-lg-3 col-md-3 col-12 t-c">
                                                                    <p class="fieldName">Package Name</p>
                                                                </div>
                                                                <div class="col-lg-3 col-md-5 col-12 t-c">
                                                                    <ValidationProvider name="package_name" rules="required" v-slot="{errors}">
                                                                        <input type="text" class="form-control cat-input input-pckg" name="package_name[]" v-model="pk.package_name" >
                                                                        <span class="text-danger">{{errors[0]}}</span>
                                                                    </ValidationProvider>
                                                                </div>
                                                            </div>
                                                            <div class="row align-items-center mt-2">
                                                                <div class="col-lg-3 col-md-3 col-12 t-c">
                                                                    <p class="fieldName">Package Description</p>
                                                                </div>
                                                                <div class="col-lg-12 col-md-5 col-12 t-c">
                                                                    <ValidationProvider name="description" rules="required" v-slot="{errors}">
                                                                         <quill-editor class="form-control cat-input input-pckg" name="package_description[]" v-model="pk.description" ></quill-editor>
                                                                        <span class="text-danger">{{errors[0]}}</span>
                                                                    </ValidationProvider>
                                                                </div>
                                                            </div>
                                                            <div class="row align-items-center mt-2">
                                                                <div class="col-lg-3 col-md-3 col-12 t-c">
                                                                    <p class="fieldName">Charges</p>
                                                                </div>
                                                                <div class="col-lg-3 col-md-5 col-12 t-c ">
                                                                    <ValidationProvider name="charges" rules="required" v-slot="{errors}">
                                                                        <input type="text" class="form-control cat-input input-pckg" name="charges[]" v-model="pk.charges">
                                                                        <span class="text-danger">{{errors[0]}}</span>
                                                                    </ValidationProvider>

                                                                </div>
                                                            </div>
                                                            <div class="row align-items-center mt-2">
                                                                <div class="col-lg-3 col-md-3 col-12 t-c">
                                                                    <p class="fieldName">Durations</p>
                                                                </div>
                                                                <div class="col-lg-3 col-md-5 col-12 t-c ">
                                                                    <ValidationProvider name="duration" rules="required" v-slot="{errors}">
                                                                        <input type="number" class="form-control cat-input input-pckg" name="duration[]"  v-model="pk.duration" max="12" >
                                                                        <span class="text-danger">{{errors[0]}}</span>
                                                                    </ValidationProvider>

                                                                </div>
                                                            </div>
                                                            <!-- <div class="row align-items-center mt-2">
                                                                <div class="col-lg-3 col-md-3 col-12 t-c">
                                                                    <p class="fieldName">Jobs Limit</p>
                                                                </div>
                                                                <div class="col-lg-3 col-md-5 col-12 t-c ">
                                                                    <ValidationProvider name="question_limit" v-slot="{errors}">
                                                                        <input type="number" class="form-control cat-input input-pckg" name="question_limit[]"  v-model="pk.question_limit">
                                                                        <span class="text-danger">{{errors[0]}}</span>
                                                                    </ValidationProvider>

                                                                </div>
                                                            </div> -->
                                                            <ValidationProvider name="package_id" v-slot="{errors}">
                                                                <input type="hidden" name="package_id[]" v-model="pk.id">
                                                                <span class="text-danger">{{errors[0]}}</span>
                                                            </ValidationProvider>

                                                        </div>
                                                    </div>
                                                </div>

                                                </div>

                                        </div>

                                    </div>
                                </div>
                                    <!-- </form> -->
                                </ValidationObserver>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



			<!-- Basic form layout section start -->
<!--			<section id="configuration" class="search view-cause">-->
<!--				<div class="row">-->
<!--					<div class="col-12">-->
<!--						<div class="card rounded pad-20">-->
<!--							<div class="card-content collapse show">-->
<!--								<div class="card-body  card-dashboard">-->
<!--									<div class="row">-->
<!--										<div class="col-md-12 col-12">-->
<!--											<h1 class="pull-left u-m">-->
<!--											Package Management</h1>-->
<!--										</div>-->
<!--									</div>-->
<!--									<div class="add-user-wrapper mt-5">-->
<!--										<ValidationObserver v-slot="{ handleSubmit }">-->
<!--											<form ref="EditPackageForm" @submit.prevent="handleSubmit(editPackage)">-->
<!--												<div :key="index" class="personal-details-wrapper" v-for="pk in packages">-->
<!--													<h2>Package 1</h2>-->

<!--													<div class="row">-->
<!--														<div class="col-lg-6">-->

<!--															<ValidationProvider name="package_name" rules="required" v-slot="{errors}">-->
<!--																<label for="">Package Name</label>-->
<!--																<input  name="package_name[]"  type="text" class="input-fields-article w-100 form-control"  v-model="pk.package_name" >-->
<!--																<span class="text-danger">{{errors[0]}}</span>-->
<!--															</ValidationProvider>-->
<!--														</div>-->
<!--														<div class="col-lg-6">-->
<!--															<ValidationProvider name="charges" rules="required" v-slot="{errors}">-->
<!--																<label for="">Charges</label>-->
<!--																<input  name="charges[]"  type="text" class="input-fields-article w-100 form-control"  v-model="pk.charges" >-->
<!--																<span class="text-danger">{{errors[0]}}</span>-->
<!--															</ValidationProvider>-->

<!--															<ValidationProvider name="package_id" v-slot="{errors}">-->
<!--																<input type="hidden" name="package_id[]" v-model="pk.id">-->
<!--																<span class="text-danger">{{errors[0]}}</span>-->
<!--															</ValidationProvider>-->
<!--														</div>-->
<!--													</div>-->



<!--												</div>-->
<!--&lt;!&ndash;												<div class="personal-details-wrapper">&ndash;&gt;-->
<!--&lt;!&ndash;													<h2>Package 2</h2>&ndash;&gt;-->

<!--&lt;!&ndash;													<div class="row">&ndash;&gt;-->
<!--&lt;!&ndash;														<div class="col-lg-6">&ndash;&gt;-->
<!--&lt;!&ndash;															<ValidationProvider name="package_name" rules="required" v-slot="{errors}">&ndash;&gt;-->
<!--&lt;!&ndash;																<label for="">Package Name</label>&ndash;&gt;-->
<!--&lt;!&ndash;																<input  name="package_name[]"  type="text" class="input-fields-article w-100 form-control" v-model="packages[1].package_name" >&ndash;&gt;-->
<!--&lt;!&ndash;																<span class="text-danger">{{errors[0]}}</span>&ndash;&gt;-->
<!--&lt;!&ndash;															</ValidationProvider>    &ndash;&gt;-->

<!--&lt;!&ndash;														</div>&ndash;&gt;-->
<!--&lt;!&ndash;														<div class="col-lg-6">&ndash;&gt;-->
<!--&lt;!&ndash;															<ValidationProvider name="charges" rules="required" v-slot="{errors}">&ndash;&gt;-->
<!--&lt;!&ndash;																<label for="">Charges</label>&ndash;&gt;-->
<!--&lt;!&ndash;																<input  name="charges[]"  type="text" class="input-fields-article w-100 form-control"  v-model="packages[1].charges" >&ndash;&gt;-->
<!--&lt;!&ndash;																<span class="text-danger">{{errors[0]}}</span>&ndash;&gt;-->
<!--&lt;!&ndash;															</ValidationProvider>&ndash;&gt;-->
<!--&lt;!&ndash;															<ValidationProvider name="package_id" v-slot="{errors}">&ndash;&gt;-->
<!--&lt;!&ndash;																<input type="hidden" name="package_id[]" v-model="packages[1].id">&ndash;&gt;-->
<!--&lt;!&ndash;																<span class="text-danger">{{errors[0]}}</span>&ndash;&gt;-->
<!--&lt;!&ndash;															</ValidationProvider>&ndash;&gt;-->
<!--&lt;!&ndash;															&ndash;&gt;-->
<!--&lt;!&ndash;														</div>&ndash;&gt;-->
<!--&lt;!&ndash;													</div>&ndash;&gt;-->



<!--&lt;!&ndash;												</div>&ndash;&gt;-->

<!--&lt;!&ndash;												<div class="personal-details-wrapper">&ndash;&gt;-->
<!--&lt;!&ndash;													<h2>Package 3</h2>&ndash;&gt;-->

<!--&lt;!&ndash;													<div class="row">&ndash;&gt;-->
<!--&lt;!&ndash;														<div class="col-lg-6">&ndash;&gt;-->
<!--&lt;!&ndash;															<ValidationProvider name="package_name" rules="required" v-slot="{errors}">&ndash;&gt;-->
<!--&lt;!&ndash;																<label for="">Package Name</label>&ndash;&gt;-->
<!--&lt;!&ndash;																<input  name="package_name[]"  type="text" class="input-fields-article w-100 form-control"  v-model="packages[2].package_name" >&ndash;&gt;-->
<!--&lt;!&ndash;																<span class="text-danger">{{errors[0]}}</span>&ndash;&gt;-->
<!--&lt;!&ndash;															</ValidationProvider>    &ndash;&gt;-->

<!--&lt;!&ndash;														</div>&ndash;&gt;-->
<!--&lt;!&ndash;														<div class="col-lg-6">&ndash;&gt;-->

<!--&lt;!&ndash;															<ValidationProvider name="charges" rules="required" v-slot="{errors}">&ndash;&gt;-->
<!--&lt;!&ndash;																<label for="">Charges</label>&ndash;&gt;-->
<!--&lt;!&ndash;																<input  name="charges[]"  type="text" class="input-fields-article w-100 form-control"  v-model="packages[2].charges" >&ndash;&gt;-->
<!--&lt;!&ndash;																<span class="text-danger">{{errors[0]}}</span>&ndash;&gt;-->
<!--&lt;!&ndash;															</ValidationProvider>&ndash;&gt;-->
<!--&lt;!&ndash;															<ValidationProvider name="package_id" v-slot="{errors}">&ndash;&gt;-->
<!--&lt;!&ndash;																<input type="hidden" name="package_id[]" v-model="packages[2].id">&ndash;&gt;-->
<!--&lt;!&ndash;																<span class="text-danger">{{errors[0]}}</span>&ndash;&gt;-->
<!--&lt;!&ndash;															</ValidationProvider>&ndash;&gt;-->

<!--&lt;!&ndash;														</div>&ndash;&gt;-->
<!--&lt;!&ndash;													</div>&ndash;&gt;-->



<!--&lt;!&ndash;												</div>&ndash;&gt;-->
<!--												<div class="row">-->
<!--													<div class="col-lg-12 text-center">-->
<!--														<button type="submit" href="" class="primary-button text-center">Update</button>-->
<!--													</div>-->
<!--												</div>-->
<!--											</form>-->
<!--										</ValidationObserver>-->
<!--									</div>-->




<!--								</div>-->
<!--							</div>-->
<!--						</div>-->
<!--					</div>-->

<!--				</div>-->
<!--			</section>-->
		</div>
	</div>
</template>

<script>
	export default{

		data() {
			return {
				packages: {},
				package_name: '',
				charges: '',
                duration: '',
                package_description: '',
				package_id: '',
                userType: 0,
                descriptions:[],
                packages_id:[],
                charges:[],
                package_name:[],
                duration:[],
                package_description:[],
                isHidden: false
			};
		},
		async created() {
			await this.getPackage();
            // await this.editPackage();
		},
		methods: {
			async getPackage() {
			    this.userType = this.$route.params.id;
			    // console.log(this.userType);
				this.packages = (await axios.get(`/api/admin/package/${this.$route.params.id}`)).data.data;
				// console.log(this.packages);
			},
			async editPackage_2(){
                console.log('function 1');
                let fd = new FormData(this.$refs.EditPackageForm);

                this.descriptions.push(this.packages[0].description);
                this.descriptions.push(this.packages[1].description);
                // this.descriptions.push(this.packages[2].description);
                this.packages_id.push(this.packages[0].id);
                this.packages_id.push(this.packages[1].id);
                // this.packages_id.push(this.packages[2].id);
                this.charges.push(this.packages[0].charges);
                this.charges.push(this.packages[1].charges);
                // this.charges.push(this.packages[2].charges);
                this.package_name.push(this.packages[0].package_name);
                this.package_name.push(this.packages[1].package_name);
                // this.package_name.push(this.packages[2].package_name);
                this.duration.push(this.packages[0].duration);
                this.duration.push(this.packages[1].duration);
                // console.log(this.packages_id);
                console.log('duratinos is',this.duration);
                console.log("Package name is ",this.package_name);
                fd.append('packages_id',this.packages_id);                
                fd.append('package_name',this.package_name);                
                fd.append('charges',this.charges);
                fd.append('duration',this.duration);
                fd.append('package_description',this.descriptions);
                console.log("package_name is ",this.package_name);
				let response = await axios.post('/api/admin/package/update', fd);
                console.log(response);
                this.$snotify.success(response.data.message)
			},

            async editPackage(){
                console.log('function 2');
                // alert(this.duration);
                let fd = new FormData(this.$refs.EditPackageForm);
                this.descriptions.push(this.packages[0].description);
                this.packages_id.push(this.packages[0].id);
                this.charges.push(this.packages[0].charges);
                this.package_name.push(this.packages[0].package_name);
                this.duration.push(this.packages[0].duration);      
                 this.descriptions.push(this.packages[1].description);
                this.packages_id.push(this.packages[1].id);
                this.charges.push(this.packages[1].charges);
                this.package_name.push(this.packages[1].package_name);
                this.duration.push(this.packages[1].duration);
                
                console.log('duratinos is',this.duration);
                // console.log(this.packages_id);
                // console.log("package name is ",this.package_name);
                fd.append('packages_id',this.packages_id);                
                fd.append('package_name',this.package_name);                
                fd.append('charges',this.charges);
                fd.append('duration',this.duration);
                fd.append('package_description',this.descriptions);
                console.log("Duration is ",this.descriptions);
				let response = await axios.post('/api/admin/package/update', fd);
                console.log(response);
                this.$snotify.success(response.data.message)
            },
		}
	}
</script>
