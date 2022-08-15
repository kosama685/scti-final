<template>
    <div class="modal fade pro-modal" id="interview" tabindex="-1" role="dialog"
         aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><i class="fas fa-times"></i></span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-12 ">
                            <h3 class="heading-profession text-center">Schedule Interview</h3>
                            <ValidationObserver v-slot="{ handleSubmit }">
                                <form class="mt-2" ref="rejected"
                                      @submit.prevent="handleSubmit(updateStatusCandidate)">

                                    <div class="row">
                                        <div class="col-12">
                                            <p class="para-profession">Date</p>
                                            <input type="date" v-model="interview_date" name="interview_date" class="u-edit-txt" >
                                            <p class="para-profession">Timing </p>
                                            <input type="time" v-model="interview_timing" name="interview_timing" class="u-edit-txt" >
                                            <textarea name="interview_message" v-model="interview_message" id="" class="u-edit-txt" cols="30" rows="10">
                                            </textarea>

                                        </div>
                                        <div class="col-12 text-center">
                                            <button type="submit" class="candi-btn bluew ">Submit</button>
                                            <!-- <button type="submit" class="candi-btn bluew" data-dismiss="modal">Submit</button> -->
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
    props: {
        user_id: {
            type: String,
            required: true,
            default: undefined,
        },
        job_id: {
            type: String, // String, Number, Boolean, Function, Object, Array
            required: true,
            default: undefined
        },
    },
    data(){
      return {
        //   rejected_reason: '',
        interview_message: '',
        interview_timing: '',
        interview_date: ''
      }
    },
    methods: {
        async updateStatusCandidate() {
            // console.log("message is ",this.interview_message);
            // console.log("timing  is ",this.interview_timing);
            // console.log("date is ",this.interview_date);
            let fd = new FormData(this.$refs.rejected);
            fd.append('user_id',this.user_id);
            // fd.append('date',this.interview_date);
            // fd.append('time',this.interview_timing);
            // fd.append('message',this.interview_message);
            fd.append('job_id',this.job_id);
            fd.append('status','Interview');
            let response = (await axios.post(`/api/admin/job/candidate/status/`,fd)).data;

            if(response.data){
                this.$snotify.success(response.data.message);
                let self = this;
               this.$router.go();
            }

        }
    }

}


</script>
