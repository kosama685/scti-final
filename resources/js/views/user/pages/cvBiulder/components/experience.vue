<template>
	<div>
		
<div class="card-header cv-header br-0 " id="headingOne" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <p>Experience Information</p>
                                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                                </div>
	<div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion" >
		<div class="card-body cv-card-body" :key="experienceIndex" v-for="(experience,experienceIndex) in experiences">
			<button type="button" @click="removeValue(experienceIndex)" class="delete blue-btn float-right"><i class="fa fa-trash" aria-hidden="true"></i></button>
			<div class="form-row">
				<div class="col-xl-4 col-lg-6 col-12">

					<div class="form-group">
						<ValidationProvider tag="div" name="job title" rules="required" vid="job_title" v-slot="{errors}">
							<label for="job-title">Job Title</label>
							<input type="text" class="form-control reg-input" id="job-title" name="job_title[]" v-model="experience.job_title" placeholder="Enter Job title">
							<div class="text-danger">{{errors[0]}}</div>
                        </ValidationProvider>
					</div>

				</div>
				<div class="col-xl-4 col-lg-6 col-12">

					<div class="form-group">
						<ValidationProvider tag="div" name="company name" rules="required" vid="comp_name" v-slot="{errors}">
						<label for="comp_name">Company Name</label>
						<input type="text" class="form-control reg-input" id="comp_name"  v-model="experience.company_name" name="company_name[]" placeholder="Enter Company Name">
							<div class="text-danger">{{errors[0]}}</div>
                        </ValidationProvider>
					</div>

				</div>
				<div class="col-xl-4 col-lg-12 col-12">
					<div class="form-group">
						<ValidationProvider tag="div" name="job type" rules="required" vid="job_type" v-slot="{errors}">
						<label for="">Job Type</label>
						<v-select
						placeholder="Choose up to 3 books!"
						label="title"
						name="job_type[]"
						v-model="experience.job_type"
						:options="job_type"
						/>
						<div class="text-danger">{{errors[0]}}</div>
                        </ValidationProvider>
					</div>
				</div>
			</div>

			<div class="form-row">
				<div class="col-lg-6 col-12">
					<div class="form-group">
						<ValidationProvider tag="div" name="start date" rules="required" vid="strt_date" v-slot="{errors}">
						<label for="phone">Start Date</label>
						<date-picker
						id="exp_strt_date"
						class="u-edit-txt"
						valueType="format"
						name="exp_strt_date[]"
						v-model="experience.start_date"
						></date-picker>
						<div class="text-danger">{{errors[0]}}</div>
                        </ValidationProvider>
					</div>
				</div>
				<div class="col-lg-6 col-12">
					<div class="form-group">
						<ValidationProvider tag="div" name="end date" rules="required" vid="end_date" v-slot="{errors}">
						<div v-if="!isHidden">

						<label for="email">End Date</label>
						<date-picker
						id="exp_end_date"
						class="u-edit-txt"
						valueType="format"
						name="exp_end_date[]"
						v-model="experience.end_date"
						></date-picker>
						<div class="text-danger">{{errors[0]}}</div>
						</div>
                        </ValidationProvider>
						<div class="form-check text-right">
							<input type="checkbox" class="form-check-input" v-model="current_check" id="exampleCheck1" v-on:click="isHidden = true">
							<input type="checkbox" class="form-check-input" v-model="current_check" id="exampleCheck1" v-on:click="isHidden = !isHidden">
							<label class="form-check-label"  for="exampleCheck1">I Currently Work Here</label>
						</div>
					</div>
				</div>
			</div>
			<div class="form-row">
				<div class="col-12">
					<div class="form-group">
						<ValidationProvider tag="div" name="description" rules="required" vid="description" v-slot="{errors}">
						<label>Job Description</label>
						<textarea name="description[]" v-model="experience.description" id="" cols="30" rows="10"></textarea>
						<div class="text-danger">{{errors[0]}}</div>
                        </ValidationProvider>
					</div>
				</div>
			</div>
			<div class="form-row">
				<div class="col-12">
					<div class="btn-wrap">
						<button type="button" v-if="experienceIndex == (experiences.length - 1)" @click="addExperience()" class="blue-btn"><i class="fa fa-plus" aria-hidden="true"></i> <span>Add More</span> </button>
					</div>
				</div>
			</div>
		</div>
	</div>
		</div>
</template>
<script>
let questionItem = 0;
	const questionairesType = [{"name": "Input","key" : "input"},{"name": "Input","key" : "input"},{"name": "Date","key": "date",},{"name": "Date","key": "date",},{"name": "Input","key" : "input"}];
	export default {
		props: {
			isCreate: {
	       		type: Boolean, // String, Number, Boolean, Function, Object, Array
	       		required: false,
	       		default: false
	   		},
	   		propExperiences: {
		       	type: Array,
		       	required: false,
		       	default: null,
	   		},
		},
		data() {
			return {
				job_type: ['Full Time','Part Time'],
				job_type_select: '',
				job_title:'',
                comp_name:'',
                job_type_select:'',
                exp_strt_date:'',
                exp_end_date:'',
                current_check:'',
                description:'',
                experiences:[],
				isHidden: false

			};
		},
		created() {
			if(!this.isCreate){
				this.experiences = this.propExperiences;
			}else{
				this.experiences.push(this.experienceObj());
			}
		},
		watch: {
        propExperiences: {
            handler: function(val) {
            		this.experiences = val; 
            },
            immediate : false,
        }
    },
    mounted() {
        console.log("this.propEducations", this.experiences);
    },
		methods: {
			addExperience: function () {
				//alert(this.experiences.length);
				this.experiences.push(this.experienceObj());
			},
			experienceObj() {
				return { job_title: '',company_name: '',job_type: '',  start_date:'', end_date:'',description:'' };
			},
			removeValue: function (valueIndex) {
				this.experiences.splice(valueIndex, 1);
			},
			// currently_work() {
			// 	exp_end_date
			// }

		}
	};
</script>