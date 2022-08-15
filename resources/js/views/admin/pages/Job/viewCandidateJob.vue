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
                                            <h1><router-link :to="{name: 'admin.job.index'}"><i class="fa fa-angle-left"></i>Job log</router-link></h1>
                                        </div>

                                    </div>
                                    <div class="customer-top">
                                        <div class="row mb-4">
                                            <div class="col-6">
                                                <div class="media">
                                                    <img :src="`${base_url}/assets/images/avatar.jpg`" class="img-fluid" alt="">
                                                    <div class="media-body media_margin">
                                                        <h6 class="bo-name">John Smith</h6>
                                                        <h6 class="h6-bo">Business Owner Id: {{ candidates[0].user_id }}</h6>
                                                        <div class="media ">
                                                            <div class="media-body second-m">
                                                                <h5 class="mt-0">Job Name: <span>{{ candidates[0].job_title }}</span></h5>
                                                                <h5 class="mt-0">Job ID :{{ candidates[0].id }}</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    </div>

                                    <div class="row offset-lg-1 align-items-center">

                                        <div class="col-lg-4 col-md-4 col-12 d-flex">
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
                                            <div class="form-group show-candidate ml-4">
                                                <p>Enteries</p>
                                                <select class="form-control show-enteries" @change="getCandidatesOfJob()" v-model="entries" >
                                                    <option value="10">Filter By</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div class="col-12 mt-5">
                                            <div class="row">
                                                <div class="col-xl-6 col-md-12 col-12" :key="index" v-for="(candidate, index) in candidates[0].job_applied_candidate">
                                                    <div class="card_wrap_job">
                                                        <div class="media">
                                                            <img :src="`${base_url}/assets/images/`+candidate.user.image" class="img-fluid" alt="">
                                                            <div class="media-body cn_margin">
                                                                <h6 class="cs-name">{{ candidate.user.name }}  <span class="cand-status-green">{{candidate.status}}</span></h6>
                                                                <h6 class="cs-id"> Owner Id: {{ candidates[0].id }}</h6>
                                                                <router-link :to="{name: 'admin.users.profile',params: {id: candidate.user.id}}" class="cs-prof">View profile</router-link>
                                                            </div>
                                                        </div>
                                                    </div>
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
    </div>
</template>
<script>
  export default{
    data() {
      return {
        candidates: {},
        search: '',
        entries: 10,
      };
    },
    async created() {
      await this.getCandidatesOfJob();
    },
    methods: {
      async getCandidatesOfJob(page = 1) {

        let id = (this.$route.params.id) ? '/'+this.$route.params.id : '';
        let res = (await axios.get(`/api/admin/candidate/job`+id+`?page=`+page+'&entries='+this.entries));
        this.candidates = res.data.data;
        console.log(this.candidates);
      }
    }
  }
</script>
