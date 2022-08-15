<template>
    <div>
        <div class="card-header cv-header br-0 " id="headingTwo" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
            <p>Educational Details</p>
            <i class="fa fa-angle-down" aria-hidden="true"></i>
        </div>
        <div id="collapseTwo" class="collapse show" aria-labelledby="card_two" data-parent="#accordion1">
            <div class="card-body cv-card-body" :key="educationIndex" v-for="(education,educationIndex) in educations">
                <button type="button" @click="removeValue(educationIndex)" class="delete blue-btn float-right" ><i class="fa fa-trash" aria-hidden="true"></i></button>
                <div class="form-row">
                    <div class="col-xl-4 col-lg-6 col-12">
                        <div class="form-group">
                            <ValidationProvider tag="div" name="degree" rules="required" vid="degree" v-slot="{errors}">
                                <label for="degree">Highest Degree</label>
                                <input type="text" class="form-control reg-input" id="degree" v-model="education.degree" name="degree[]" placeholder="Enter Job title">
                                <div class="text-danger">{{errors[0]}}</div>
                            </ValidationProvider>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-6 col-12">
                        <div class="form-group">
                            <ValidationProvider tag="div" name="educcation subject" rules="required" vid="education_subject" v-slot="{errors}">
                                <label for="sub">Subject</label>
                                <input type="text" class="form-control reg-input" id="degree" v-model="education.subject" name="education_subject[]" placeholder="Enter subject">
                               <!--  <v-select multiple placeholder="Choose up subject!" label="title" name="education_subject[]" v-model="education.subjects" :options="subjects" /> -->
                                <div class="text-danger">{{errors[0]}}</div>
                            </ValidationProvider>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-12 col-12">
                        <div class="form-group">
                            <ValidationProvider tag="div" name="institute name" rules="required" vid="institute_name" v-slot="{errors}">
                                <label for="">Institute Name</label>
                                 <input type="text" class="form-control reg-input" id="degree" v-model="education.institute_name" name="institute_name[]" placeholder="Enter institute name">
                                <!-- <v-select placeholder="Choose up institute name!" label="title" name="institute_name[]" v-model="education.institute_name" :options="institute_name" /> -->
                                <div class="text-danger">{{errors[0]}}</div>
                            </ValidationProvider>
                        </div>
                    </div>
                </div>
                <div class="form-row">
                    <div class="col-lg-6 col-12">
                        <div class="form-group">
                            <ValidationProvider tag="div" name="start date" rules="required" vid="strt_date_edu" v-slot="{errors}">
                                <label for="phone">Start Date</label>
                                <date-picker id="strt_date" class="u-edit-txt" valueType="format" name="stu_strt_date[]" v-model="education.start_date"></date-picker>
                                <div class="text-danger">{{errors[0]}}</div>
                            </ValidationProvider>
                        </div>
                    </div>
                    <div class="col-lg-6 col-12">
                        <div class="form-group">
                            <ValidationProvider tag="div" name="end date" rules="required" vid="end_date_edu" v-slot="{errors}">
                                <label for="email">End Date</label>
                                <date-picker id="strt_date" class="u-edit-txt" valueType="format" name="stu_end_date[]" v-model="education.end_date" v-on:selected="dateSelectedInChild"></date-picker>
                                <div class="text-danger">{{errors[0]}}</div>
                            </ValidationProvider>
                        </div>
                    </div>
                </div>
                <div class="form-row">
                    <div class="col-12">
                        <div class="btn-wrap">
                            <button type="button" v-if="educationIndex == (educations.length - 1)" @click="addEducation()" class="blue-btn"><i class="fa fa-plus" aria-hidden="true"></i> <span>Add More</span> </button>
                            <!-- <button type="button" @click="addEducation()" :style="educations.length == 1 ? 'display: block' : 'display:none'"><i class="fa fa-plus" aria-hidden="true" ></i> <span>Add More</span> </button> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
let questionItem = 0;
const questionairesType = [{ "name": "Input", "key": "input" }, { "name": "Dropdown", "key": "dropdown" }, { "name": "Dropdown", "key": "dropdown" }, { "name": "Date", "key": "date", }, { "name": "Date", "key": "date", }];

export default {
    props: {
        isCreate: {
            type: Boolean, // String, Number, Boolean, Function, Object, Array
            required: false,
            default: false
        },
        propEducations: {
            type: Array,
            required: false,
            default: () => [],
        },
    },
    data() {
        return {
            subjects: '',
            institute_name: '',
            selected: [],
            degree: '',
            selected: '',
            selected_institute: '',
            educations: [],
        };
    },
    created() {
        if (!this.isCreate) {
            this.educations = this.propEducations;
        } else {

            this.educations.push(this.educationObj());
        }

    },
    watch: {
        propEducations: {
            handler: function(val) {
            		this.educations = val; 
            },
            immediate : false,
        }
    },
    mounted() {
        console.log("this.propEducations", this.propEducations);
    },
    methods: {
        dateSelectedInChild(selectedDate) {
            console.log(this.educations);
        },
        addEducation: function() {
            //alert(this.educations.length);
            this.educations.push(this.educationObj());
        },
        educationObj() {
            return { degree: '', subjects: '', institute_name: '', start_date: '', end_date: '' };
        },
        removeValue: function(valueIndex) {
            this.educations.splice(valueIndex, 1);
        },

    }
};

</script>
