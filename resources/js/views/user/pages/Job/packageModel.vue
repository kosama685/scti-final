<template>
    <div>
        <!-- Question Modal -->
        <div class="modal fade pro-modal change_package_modal" id="question" tabindex="-1" role="dialog"
                aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"><i class="fa fa-times"></i></span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-12">
                                <h3 class="heading-profession text-center">Question</h3>
                                 <ValidationObserver v-slot="{ handleSubmit }">
                                    <form ref="jobApplyForm" @submit.prevent="handleSubmit(jobApply)" id="msform" class="create-cv mb-0">
                                        <div class="row mt-md-1">
                                            <div class="col-lg-12 col-md-12 col-12 t-c" v-for="(item, index) in data">
                                                <label class="text-v">
                                                    Q{{index+1}} : {{ item.question }}
                                                </label>
                                                <div v-if="index ==  0">
                                                   <ValidationProvider name="question_1" rules="required" v-slot="{ errors }">
                                                   <input type="hidden" :value="item.id" name="questionId_1"/>
                                                   <textarea name="question_1" id="" cols="30" rows="3"></textarea>
                                                   <span class="text-danger">{{errors[0]}}</span>
                                                   </ValidationProvider>
                                                </div>
                                                <div v-if="index ==  1">
                                                   <ValidationProvider name="question_2" rules="required" v-slot="{ errors }">
                                                   <input type="hidden" :value="item.id" name="questionId_2"/>
                                                   <textarea name="question_2" id="" cols="30" rows="3"></textarea>
                                                   <span class="text-danger">{{errors[0]}}</span>
                                                   </ValidationProvider>
                                                </div>
                                                <div v-if="index ==  2">
                                                   <ValidationProvider name="question_3" rules="required" v-slot="{ errors }">
                                                   <input type="hidden" :value="item.id" name="questionId_3"/>
                                                   <textarea name="question_3" id="" cols="30" rows="3"></textarea>
                                                   <span class="text-danger">{{errors[0]}}</span>
                                                   </ValidationProvider>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mt-2">
                                            <div class="col-12 text-center">
                                                <button type="submit" class="btn-question-submit w-100">Send</button>
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
    </div>
</template>
<script>
    export default {
        props:['data'],
        data() {
            return {
                question_1 :'',
                question_2 :'',
                question_3 :''
            }
        },
        async created() {
           
        },
        methods: {
             async jobApply(e) {
                let fd = new FormData(this.$refs.jobApplyForm);
                let res = await axios.post(`api/user/jobwithquestion/${this.$route.params.id}/user`, fd);
                
                this.applied = false;
                if(res.data.status=='Failed'){
                    
                    this.$snotify.warning(res.data.message);
                }else{
                    $('#question').modal('hide');
                    this.$snotify.success(res.data.message);
                }

             } 
        }
    }
</script>
