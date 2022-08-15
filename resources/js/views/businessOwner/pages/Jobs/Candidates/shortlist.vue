<template>
    <div class="modal fade pro-modal" id="rejected" tabindex="-1" role="dialog"
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
                            <h3 class="heading-profession text-center">Rejection Template</h3>
                            <ValidationObserver v-slot="{ handleSubmit }">
                                <form class="mt-2" ref="rejected"
                                      @submit.prevent="handleSubmit(updateStatusCandidate)">

                                    <div class="row">
                                        <div class="col-12">
                                            <p class="para-profession">Subject</p>
                                            <input name="email_subject" v-model="email_subject" class="u-edit-txt">

                                        </div>
                                        <div class="col-12">
                                            <p class="para-profession">Body</p>
                                            <textarea name="email_body" v-model="email_body" id="" class="u-edit-txt" cols="30" rows="10"></textarea>

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
          rejected_reason: '',
          email_subject: '',
          email_body: '',
      }
    },
    methods: {
        async updateStatusCandidate() {
            let fd = new FormData(this.$refs.rejected);
            fd.append('user_id',this.user_id);
            fd.append('job_id',this.job_id);
            fd.append('status','Rejected');
            let response = (await axios.post(`/api/admin/job/candidate/status/`,fd)).data;

            if(response.data){
                this.$snotify.success('Email has been sent successfully.', 'Success');
                this.email_subject = '';
                this.email_body = '';
                $('#rejected').modal('hide');
            }

        }
    }

}


</script>
