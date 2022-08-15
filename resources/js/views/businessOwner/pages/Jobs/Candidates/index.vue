<template>
    <div class="content-wrapper">
        <div class="content-body">
            <!-- Basic form layout section start -->
            <section id="configuration">
                <div class="row">
                    <div class="col-12">
                        <div class="card rounded pad-20">
                            <div class="card-content collapse show">
                                <div class="card-body">

                                    <div class="row">
                                        <div class="col-12">
                                            <h1>
                                                <router-link :to="{name: 'businessOwner.jobs.index'}"><i class="fa fa-angle-left"></i>Active Candidates
                                                </router-link>
                                            </h1>
                                        </div>

                                    </div>
                                    <!-- <div class="customer-top">
                                        <div class="row mb-4">
                                            <div class="col-6">
                                                <div class="media">
                                                    <img :src="`${base_url}/assets/images/avatar.jpg`" class="img-fluid"
                                                         alt="">
                                                    <div class="media-body media_margin">
                                                        <h6 class="bo-name">John Smith</h6>
                                                        <h6 class="h6-bo">Business Owner Id:
                                                            {{ candidates[0].user_id }} </h6>
                                                        <div class="media ">
                                                            <div class="media-body second-m">
                                                                <h5 class="mt-0">Job Name:
                                                                    <span>{{ candidates[0].job_title }}</span>
                                                                </h5>
                                                                <h5 class="mt-0">Job ID :{{ candidates[0].id }}</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    </div> -->

                                    <div class="row align-items-center">

                                        <!--div class="col-lg-4 col-md-4 col-12 d-flex"-->
                                            <!--                                            <div class="form-group show-candidate">-->
                                            <!--                                                <p>Show</p>-->
                                            <!--                                                <select class="form-control show-cand" id="show-candidates">-->
                                            <!--                                                    <option>1</option>-->
                                            <!--                                                    <option>2</option>-->
                                            <!--                                                    <option>3</option>-->
                                            <!--                                                    <option>4</option>-->
                                            <!--                                                    <option>5</option>-->
                                            <!--                                                </select>-->
                                            <!--                                            </div>-->
                                            <!-- <div class="form-group show-candidate ml-4">
                                                <p>Enteries</p>
                                                <select class="form-control show-enteries"
                                                        @change="getCandidatesOfJob()" v-model="entries">
                                                    <option value="10">Filter By</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                </select>
                                            </div> -->
                                        <!--/--div -->

                                        <!-- <h4>New Candidate</h4> -->
                                        

                                        <div class="col-12 mt-2">
                                            <div id="job_accordion">
                                                <div class="card collapse-icon accordion-icon-rotate user_prof_acc user_jobs_acc pb-2 mb-2">
                                                    <div class="card-header">
                                                        <a data-toggle="collapse" href="#new_collapse" aria-expanded="true" aria-controls="new" class="card-title lead">New</a>
                                                    </div>
                                                    <div id="new_collapse" role="tabpanel" aria-labelledby="new" class="collapse show">
                                                        <div class="card-content">
                                                            <div class="card-body mt-sm-0 mt-2 row">
                                                                <div  v-if="candidates[0].job_applied_candidate_applied != null" 
                                                                    class="col-12 col-md-6 col-lg-4 col-xl-3 mb-2 mb-xl-0" :key="index"
                                                                    v-for="(candidate, index) in candidates[0].job_applied_candidate_applied">
                                                                    <div class="card_wrap_job p-2 mb-0">
                                                                        <div class="media d-block">
                                                                            <div class="text-right">
                                                                                <div class="btn-group mr-0 mb-0">
                                                                                    <button type="button" class="btn btn-drop-table btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="fa fa-ellipsis-v"></i></button>
                                                                                    <div class="dropdown-menu" x-placement="bottom-start">
                                                                                            <a @click="updateStatusCandidate(candidate.user_id)"
                                                                                                class="dropdown-item">Interested</a>

                                                                                            <a @click="updateStatusCandidateRejected(candidate.user_id)" 
                                                                                                class="dropdown-item">Reject</a>
                                                                                    </div>
                                                                                    <shortlist :user_id="candidate.user_id" :job_id="candidate.job_id"></shortlist>
                                                                                </div>
                                                                            </div>
                                                                            
                                                                    <!-- {{candidates[0].user.image}} -->
                                                                            <!-- <img
                                                                                :src="`${base_url}/assets/images/`+candidates[0].user.image"
                                                                                class="img-fluid" alt=""> -->
                                                                            <div class="media-body cn_margin mt-0">
                                                                                <h5 class="cs-name">{{ candidates[0].user.name }} </h5>

                                                                                <h6 class="apply-date">{{ candidate.status }}</h6>

                                                                                <!-- <h6 class="cs-id"> Owner Id: {{
                                                                                        candidate.user_id

                                                                                    }}</h6> -->

                                                                                <router-link
                                                                                    :to="{name: 'businessOwner.jobs.candidate.profile',params: {id: candidate.user_id,job:candidates[0].id}}"
                                                                                    class="cs-prof">View profile
                                                                                </router-link>

                                                                                <!-- <br>  -->

                                                                            </div>
                                                                        
                                                                            <!-- <div class="media-body cn_margin">
                                                                                <p class="fieldName gray-txt">Resume</p>
                                                                                <a target="_blank" :href="'latest_scti/public/images/users/'+candidates[0].user.cv">View</a>
                                                                                <button @click="download(candidates[0].user.cv)" :href="'latest_scti/public/images/users/'+candidates[0].user.cv">Download</button>
                                                                            </div>  -->
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div v-else>
                                                                    <h3>No candidate Applied!</h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div class="card collapse-icon accordion-icon-rotate user_prof_acc user_jobs_acc pb-2 mb-2">
                                                    <div class="card-header">
                                                        <a data-toggle="collapse" href="#interested_collapse" aria-expanded="true" aria-controls="interested" class="card-title lead">Interested</a>
                                                    </div>


                                                    <div id="interested_collapse" role="tabpanel" aria-labelledby="interested" class="collapse show">
                                                        <div class="card-content">
                                                            <div class="card-body mt-sm-0 mt-2 row">
                                                                <div v-if="interest_candidates[0].job_applied_candidate_check != null" 
                                                                    class="col-12 col-md-6 col-lg-4 col-xl-3 mb-2 mb-xl-0" :key="index"
                                                                    v-for="(candidate_item, index) in interest_candidates[0].job_applied_candidate_check">
                                                                    <div class="card_wrap_job p-2 mb-0">
                                                                        <div class="media d-block">
                                                                            <div class="text-right">
                                                                                <div class="btn-group mr-0 mb-0">
                                                                                    <button type="button" class="btn btn-drop-table btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="fa fa-ellipsis-v"></i></button>
                                                                                    <div class="dropdown-menu" x-placement="bottom-start">
                                                                                        <a href="#" class="dropdown-item" data-toggle="modal"
                                                                                        data-target="#interview">Interview Scheduled</a>
                                                                                        <a @click="updateStatusCandidateContact(candidate_item.user_id)"
                                                                                            class="dropdown-item">Contacting</a>
                                                                                        <a @click="updateStatusCandidateHired(candidate_item.user_id)"
                                                                                            class="dropdown-item">Hired</a>
                                                                                    </div>  
                                                                                    <interview :user_id="candidate_item.user_id" :job_id="candidate_item.job_id"></interview>                                                            
                                                                                    <!-- <shortlist :user_id="candidate_item.user_id" :job_id="candidate_item.job_id"></shortlist> -->
                                                                                </div>
                                                                            </div>
                                                                        <!-- {{interest_candidates[0].user.image}} -->
                                                                            <!-- <img
                                                                                :src="`${base_url}/assets/images/`+interest_candidates[0].user.image"
                                                                                class="img-fluid" alt=""> -->
                                                                            <div class="media-body cn_margin mt-0">
                                                                                <h5 class="cs-name">{{ interest_candidates[0].user.name }} </h5>
                                                                                <h6
                                                                                    class="apply-date">{{ candidate_item.status }}</h6>
                                                                                <!-- <h6 class="cs-id"> Owner Id: {{
                                                                                        candidate_item.user_id

                                                                                    }}</h6> -->
                                                                                <router-link
                                                                                    :to="{name: 'businessOwner.jobs.candidate.profile',params: {id: candidate_item.user_id,job:interest_candidates[0].id}}"
                                                                                    class="cs-prof">View profile
                                                                                </router-link>

                                                                                <!-- <br>  -->

                                                                            </div>
                                                                        
                                                                            <!-- <div class="media-body cn_margin">
                                                                                <p class="fieldName gray-txt">Resume</p>
                                                                                <a target="_blank" :href="'latest_scti/public/images/users/'+interest_candidates[0].user.cv">View</a>
                                                                                <button @click="download(interest_candidates[0].user.cv)" :href="'latest_scti/public/images/users/'+interest_candidates[0].user.cv">Download</button>
                                                                            </div>  -->
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div v-else>
                                                                    <h3>No candidate Applied!</h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card collapse-icon accordion-icon-rotate user_prof_acc user_jobs_acc pb-2 mb-2">
                                                    <div class="card-header">
                                                        <a data-toggle="collapse" href="#rejected_collapse" aria-expanded="true" aria-controls="rejected" class="card-title lead">Rejected</a>
                                                    </div>
                                                    <div id="rejected_collapse" role="tabpanel" aria-labelledby="rejected" class="collapse show">
                                                        <div class="card-content">
                                                            <div class="card-body mt-sm-0 mt-2 row">
                                                                <div v-if="reject_candidates[0].job_applied_candidate_rejected != null" 
                                                                    class="col-12 col-md-6 col-lg-4 col-xl-3 mb-2 mb-xl-0" :key="index"
                                                                    v-for="(candidate_item, index) in reject_candidates[0].job_applied_candidate_rejected">
                                                                        <div class="card_wrap_job p-2 mb-0">
                                                                            <div class="media d-block">
                                                                                <div class="text-right">
                                                                                    <div class="btn-group mr-0 mb-0">
                                                                                        <button type="button" class="btn btn-drop-table btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="fa fa-ellipsis-v"></i></button>
                                                                                        <div class="dropdown-menu" x-placement="bottom-start">
                                                                                                <!-- <button @click="updateStatusCandidate(candidate_item.user_id)"
                                                                                                    class="candi-btn bluew ml-0 ml-md-2">Create New</button> -->

                                                                                            <a  @click="SendDefaultRejectionEmailToCandidate(candidate_item.user_id, candidate_item.job_id)" class="dropdown-item">Send Template</a>
                                                                                            <a href="#" class="dropdown-item" data-toggle="modal"
                                                                                                data-target="#rejected">Create New</a>

                                                                                        </div>
                                                                                        <shortlist :user_id="candidate_item.user_id" :job_id="candidate_item.job_id"></shortlist>
                                                                                    </div>
                                                                                </div>
                                                                                
                                                                            <!-- {{reject_candidates[0].user.image}} -->
                                                                                <!-- <img
                                                                                    :src="`${base_url}/assets/images/`+reject_candidates[0].user.image"
                                                                                    class="img-fluid" alt=""> -->
                                                                                <div class="media-body cn_margin mt-0">
                                                                                    <h5 class="cs-name">{{ reject_candidates[0].user.name }}</h5>
                                                                                    <h6 class="apply-date">{{ candidate_item.status }}</h6>
                                                                                    <!-- <h6 class="cs-id"> Owner Id: {{
                                                                                            candidate_item.user_id

                                                                                        }}</h6> -->

                                                                                    <router-link
                                                                                        :to="{name: 'businessOwner.jobs.candidate.profile',params: {id: candidate_item.user_id,job:reject_candidates[0].id}}"
                                                                                        class="cs-prof">View profile
                                                                                    </router-link>

                                                                                    <!-- <br>  -->

                                                                                </div>
                                                                                <!-- <div class="media-body cn_margin">
                                                                                    <p class="fieldName gray-txt">Resume</p>
                                                                                    <a target="_blank" :href="'latest_scti/public/images/users/'+reject_candidates[0].user.cv">View</a>
                                                                                    <button @click="download(reject_candidates[0].user.cv)" :href="'latest_scti/public/images/users/'+reject_candidates[0].user.cv">Download</button>
                                                                                </div>  -->
                                                                            </div>
                                                                        </div>
                                                                </div>
                                                                <div v-else>
                                                                    <h3>No candidate Applied!</h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Interviews  -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>
<script>
import Shortlist from "./shortlist";
import Interview from "./interview";
export default {
        components: {
            Shortlist,
            Interview,
    // ChatComponent
    },
    data() {
        return {
            candidates: {},
            reject_candidates: {},
            interest_candidates: {},
            search: '',
            entries: 10,
            check:''
            
        };
    },
    async created() {
        await this.getCandidatesOfJobNew();
        await this.getCandidatesOfJobInterested();
        await this.getCandidatesOfJobRejected();
    },
    methods: {
        async getCandidatesOfJobNew(page = 1) {
            let id = (this.$route.params.id) ? '/' + this.$route.params.id : '';
            let res = (await axios.get(`/api/admin/new_candidate/job` + id + `?page=` + page + '&entries=' + this.entries));
            this.candidates = res.data.data;
            console.log('new is',this.candidates);
        },
         async getCandidatesOfJobInterested(page = 1) {

            let id = (this.$route.params.id) ? '/' + this.$route.params.id : '';
            let res = (await axios.get(`/api/admin/interested_candidate/job` + id + `?page=` + page + '&entries=' + this.entries));
            this.interest_candidates = res.data.data;
             console.log('interest is',this.interest_candidates);
        },
         async getCandidatesOfJobRejected(page = 1) {

            let id = (this.$route.params.id) ? '/' + this.$route.params.id : '';
            let res = (await axios.get(`/api/admin/rejected_candidate/job` + id + `?page=` + page + '&entries=' + this.entries));
            this.reject_candidates = res.data.data;
            console.log('reject is',this.reject_candidates);
            
        },
         async download(cv){    
            //  alert(cv);
            let response = await axios.get(`/api/admin/cv/`+cv, {responseType: 'blob'})
          .then((response) => {
              console.log(response.data.type);
            //   console.log(response);
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'file.'+response.data.type); //or any other extension
            document.body.appendChild(link);
            link.click();
    });
        },
         async updateStatusCandidate(user_id) {

             
            this.job_id = this.$route.params.id;
            let fd = new FormData(this.$refs.rejected);
            this.status = 'Interested';
            fd.append('user_id', user_id);
            fd.append('job_id', this.job_id);
            fd.append('status', 'Interested');
            let response = (await axios.get(`api/admin/job/update_candidate/${user_id}/${this.job_id}/${this.status}`)).data;

            if (response.data) {
                this.getCandidatesOfJobNew();
                this.getCandidatesOfJobInterested();
            }
        },
        async updateStatusCandidateRejected(user_id) {
             
            this.job_id = this.$route.params.id;
            let fd = new FormData(this.$refs.rejected);
            this.status = 'Rejected';
            fd.append('user_id', user_id);
            fd.append('job_id', this.job_id);
            fd.append('status', 'Rejected');
            let response = (await axios.get(`api/admin/job/update_candidate/${user_id}/${this.job_id}/${this.status}`)).data;
            if (response.data) {
                this.getCandidatesOfJobNew();
                this.getCandidatesOfJobRejected();

            }
        },
        async updateStatusCandidateHired(user_id) {
            
            this.job_id = this.$route.params.id;
            let fd = new FormData(this.$refs.rejected);
            fd.append('user_id', user_id);
            fd.append('job_id', this.job_id);
            fd.append('status', 'Hired');
            var status = 'Hired';
            let response = (await axios.get(`api/admin/job/update_candidate/${user_id}/${this.job_id}/${status}`)).data;
            if (response) {
                console.log(response);
            }
        },
        async updateStatusCandidateContact(user_id) {

            this.job_id = this.$route.params.id;
            let fd = new FormData(this.$refs.rejected);
            fd.append('user_id', user_id);
            fd.append('job_id', this.job_id);
            fd.append('status', 'Contacting');
            var status = 'Contacting';
            let response = (await axios.get(`api/admin/job/update_candidate/${user_id}/${this.job_id}/${status}`)).data;
            if (response) {
                console.log(response);
            }
        },


        async SendDefaultRejectionEmailToCandidate(user_id, job_id) {
            let fd = new FormData();
            fd.append('user_id',user_id);
            fd.append('job_id',job_id);
            fd.append('status','Rejected');
            let response = (await axios.post(`/api/admin/job/candidate/status/`,fd)).data;

            if(response.data){
                this.$snotify.success('Email has been sent successfully.', 'Success');
                // this.email_subject = '';
                // this.email_body = '';
                // $('#rejected').modal('hide');
            }

        }

    }
}
</script>
