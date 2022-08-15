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
                                        <div
                                            class="col-12 d-flex align-items-center justify-content-between flex-column flex-md-row ">
                                            <h1>
                                                <router-link :to="{name: ''}"><i class="fa fa-angle-left"></i>View
                                                    Profile
                                                </router-link>
                                            </h1>
                                            <p class="sts">Status: <span class="txt-green">Open</span></p>

                                        </div>

                                    </div>

                                    <div class="customer-top">
                                        <div class="row mb-2">
                                            <div class="col-md-6 col-12">
                                                <div class="media ">
                                                    <div class="media-body second-m">
                                                        <h5 class="mt-0">Job Name:
                                                            <span>{{ candidateDetailJob.job.job_title }}</span></h5>
                                                        <h5 class="mt-0">Job ID :<span>{{
                                                                candidateDetailJob.job.id
                                                            }}</span></h5>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                        <div class="row">
                                            <div class="col-12">
                                                <div class="media align-items-center">
                                                    <img :src="`${base_url}/assets/images/avatar.jpg`" class="img-fluid"
                                                         alt="">
                                                    <div class="media-body text-right user_id">
                                                        <h6 class="cs-id"> User ID: <span>{{
                                                                candidateProfile.id
                                                            }}</span></h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row user-desc">
                                            <div class="col-12">
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                    industry. Lorem Ipsum has been the industry's standard dummy text
                                                    ever since the when an unknown printer took a galley of type and
                                                    scrambled it to make a type specimen book. It has survived not only
                                                    five centuries, but also the leap into electronic typesetting,
                                                    remaining essentially unchanged.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-12">
                                            <div class="card collapse-icon accordion-icon-rotate user_prof_acc bg-qqq">
                                                <div id="headingCollapse11" class="card-header">
                                                    <a data-toggle="collapse" href="#collapse11" aria-expanded="true"
                                                       aria-controls="collapse11" class="card-title lead">Personal
                                                        Information</a>
                                                </div>
                                                <div id="collapse11" role="tabpanel" aria-labelledby="headingCollapse11"
                                                     class="collapse show bg-qqq">
                                                    <div class="card-content">
                                                        <div class="card-body mt-sm-0 mt-2">
                                                            <div class="row">
                                                                <div class="col-lg-4 col-md-4 col-12 t-c">
                                                                    <p class="fieldName gray-txt">First Name</p>
                                                                    <p class="fieldData">{{
                                                                            candidateProfile.first_name
                                                                        }}</p>
                                                                </div>
                                                                <div class="col-lg-4 col-md-4 col-12 t-c">
                                                                    <p class="fieldName gray-txt">Last Name</p>
                                                                    <p class="fieldData">{{
                                                                            candidateProfile.last_name
                                                                        }}</p>
                                                                </div>
                                                            </div>
                                                            <div class="row mt-md-1">
                                                                <div class="col-lg-4 col-md-4 col-12 t-c">
                                                                    <p class="fieldName gray-txt">Account Created</p>
                                                                    <p class="fieldData">{{
                                                                            formatDate(candidateProfile.created_at)
                                                                        }}</p>
                                                                </div>
                                                                <div class="col-lg-4 col-md-4 col-12 t-c">
                                                                    <p class="fieldName gray-txt">Phone Number</p>
                                                                    <p class="fieldData">{{
                                                                            candidateProfile.phone
                                                                        }}</p>
                                                                </div>
                                                            </div>
                                                            <div class="row mt-md-1">
                                                                <div class="col-lg-4 col-md-4 col-12 t-c">
                                                                    <p class="fieldName gray-txt">Email Address</p>
                                                                    <p class="fieldData">
                                                                    {{ candidateProfile.email }}</p>
                                                                </div>

                                                                <div class="col-lg-4 col-md-4 col-12 t-c">
                                                                    <p class="fieldName gray-txt">CV</p>
                                                                    <a target="_blank" :href="'latest_scti/public/images/users/'+candidateProfile.cv">CV</a>
                                                                    <!-- <a  @click="download_me()" target="_blank">Download Cv</a> -->
                                                                    <!-- <button @click="download_me()">Download</button> -->

                                                                </div>

                                                            </div>

                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="headingCollapse12" class="card-header">
                                                    <a data-toggle="collapse" href="#collapse12" aria-expanded="true"
                                                       aria-controls="collapse12" class="card-title lead ">Cover
                                                        Letter</a>
                                                </div>
                                                <div id="collapse12" role="tabpanel" aria-labelledby="headingCollapse12"
                                                     class="collapse show   bg-qqq" aria-expanded="true">
                                                    <div class="card-content">
                                                        <div class="card-body mt-sm-0 mt-2">

                                                            <div class="row">

                                                                <div class="col-lg-12 col-md-12 col-12">
                                                                    <p class="fieldData">Lorem ipsum dolor sit amet,
                                                                        consectetur adipisicing elit. Fugiat obcaecati
                                                                        ipsam sapiente voluptatem doloremque delectus
                                                                        deserunt quam nam quod maxime hic id dolorem
                                                                        similique et quis illo, debitis quos autem!
                                                                        Lorem ipsum dolor sit amet, consectetur
                                                                        adipisicing elit. Fugiat obcaecati ipsam
                                                                        sapiente voluptatem doloremque delectus deserunt
                                                                        quam nam quod maxime hic id dolorem similique et
                                                                        quis illo, debitis quos autem</p>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="headingCollapse13" class="card-header">
                                                    <a data-toggle="collapse" href="#collapse13" aria-expanded="true"
                                                       aria-controls="collapse13" class="card-title lead ">Smart Answers</a>
                                                </div>
                                                <div id="collapse13" role="tabpanel" aria-labelledby="headingCollapse13"
                                                     class="collapse show   bg-qqq" aria-expanded="true">
                                                    <div class="card-content">
                                                        <div class="card-body mt-sm-0 mt-2">
                                                            <div class="row">

                                                                <div class="col-lg-6 col-md-6 col-12 t-c">
                                                                    <p class="fieldData">Lorem ipsum dolor sit amet,
                                                                        consectetur adipisicing elit. Fugiat obcaecati
                                                                        ipsam sapiente voluptatem doloremque delectus
                                                                        deserunt quam nam quod maxime hic id dolorem
                                                                        similique et quis illo, debitis quos autem!
                                                                        Lorem ipsum dolor sit amet, consectetur
                                                                        adipisicing elit. Fugiat obcaecati ipsam
                                                                        sapiente voluptatem doloremque delectus deserunt
                                                                        quam nam quod maxime hic id dolorem similique et
                                                                        quis illo, debitis quos autem</p>

                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="headingCollapse17" class="card-header">
                                                    <a data-toggle="collapse" href="#collapse17" aria-expanded="true"
                                                       aria-controls="collapse17" class="card-title lead ">Smart Answers</a>
                                                </div>
                                                <div id="collapse13" role="tabpanel" aria-labelledby="headingCollapse17"
                                                     class="collapse show   bg-qqq" aria-expanded="true">
                                                    <div class="card-content">
                                                        <div class="card-body mt-sm-0 mt-2">
                                                            <div class="row">

                                                                <div class="col-lg-6 col-md-6 col-12 t-c">
                                                                    <p class="text-v" v-for="(item, index) in candidateDetailJob.job_smart_answer">
                                                                        Q  {{index+1}} : {{ item.question }}</br>                                                     
                                                                        Ans{{index+1}} : {{ item.answer }}
                                                                    </p>

                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>

                                                <div id="headingCollapse15" class="card-header">
                                                    <a data-toggle="collapse" href="#collapse15" aria-expanded="true"
                                                       aria-controls="collapse15" class="card-title lead ">My
                                                        Documents</a>
                                                </div>
                                                <div id="collapse15" role="tabpanel" aria-labelledby="headingCollapse15"
                                                     class="collapse show   bg-qqq" aria-expanded="true">
                                                    <div class="card-content">
                                                        <div class="card-body mt-sm-0 mt-2">
                                                            <div class="row">
                                                                <div class="col-12">
                                                                    <div class="wrap-doc">
<!--                                                                        <div class="doc-item">-->
<!--                                                                            <a href="#">Resume.pdf </a>-->
<!--                                                                            <a href="#"><i class="fa fa-download"-->
<!--                                                                                           aria-hidden="true"></i></a>-->
<!--                                                                        </div>-->
<!--                                                                        <div class="doc-item">-->
<!--                                                                            <a href="#">Cerificate.pdf</a>-->
<!--                                                                            <a href="#"><i class="fa fa-download"-->
<!--                                                                                           aria-hidden="true"></i></a>-->

<!--                                                                        </div>-->
<!--                                                                        <div class="doc-item">-->
<!--                                                                            <a href="#">Doc1.pdf</a>-->
<!--                                                                            <a href="#"><i class="fa fa-download"-->
<!--                                                                                           aria-hidden="true"></i></a>-->

<!--                                                                        </div>-->
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-2">
                                                    <router-link class="candi-btn bluew"  :to="{name: 'businessOwner.chat.view', params:{id:this.candidate_id}}">Chat</router-link>	      
                                                    </div>
                                                    <!-- <div class="col-12  custo-padding"
                                                         v-if="candidateDetailJob.status == 'Applied'">
                                                        <a href="#" class="candi-btn red" data-toggle="modal"
                                                           data-target="#rejected">Reject</a>
                                                           <a href="#" class="candi-btn bluew" data-toggle="modal"
                                                           data-target="#interview">Interview</a>
                                                        <button @click="updateStatusCandidate"
                                                           class="candi-btn bluew ml-0 ml-md-2">Shortlist</button>
                                                    </div> -->
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <shortlist :user_id="user_id" :job_id="job_id"></shortlist>
        <interview :user_id="user_id" :job_id="job_id"></interview>
    </div>
</template>

<script>
// const ChatComponent = () => import('../../../user/chat/ChatComponent.vue');
import Shortlist from "./shortlist";
import Interview from "./interview";
export default {
    components: {Shortlist,Interview,
    // ChatComponent
    },
    data() {
        return {
            candidateProfile: {},
            candidateDetailJob: {},
            candidateCv: {},
            user_id: undefined,
            job_id: undefined,
            candidate_id:''
        };
    },
    async created() {
        this.user_id = this.$route.params.id;
        this.job_id = this.$route.params.job;
        await this.getProfile();
        await this.getCandidateDetailJob();
    },
    methods: {
        async getProfile() {
            this.candidateProfile = (await axios.get(`/api/admin/getProfile/${this.$route.params.id}`)).data;
            console.log('CV IS',this.candidateProfile.cv);
            this.candidate_id = this.candidateProfile.uuid;
            // console.log('uuid is',this.candidateProfile.uuid);
        },
        async getCandidateDetailJob() {
            this.candidateDetailJob = (await axios.get(`api/admin/job/${this.$route.params.job}/candidate/${this.$route.params.id}`)).data;
            console.log(this.candidateDetailJob);
        },
        async updateStatusCandidate() {
            let fd = new FormData(this.$refs.rejected);
            fd.append('user_id', this.user_id);
            fd.append('job_id', this.job_id);
            fd.append('status', 'Shortlist');
            let response = (await axios.post(`/api/admin/job/candidate/status/`, fd)).data;

            if (response.data) {
                this.$snotify.success(response.data.message);
                let self = this;
               this.$router.go();
            }

        },
        async download_me(){
            this.user_id = this.$route.params.id;
            this.candidateCv = (await axios.get(`api/cv_download/${this.user_id}`)).data;
            console.log("hir me");
            //  console.log('download me ',this.user_id);
        }
    }

}


</script>
