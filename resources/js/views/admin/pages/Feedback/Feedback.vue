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
                                            <h1 class="">Feedback</h1>
                                        </div>
                                    </div>

                                   <!--  <nav>
                                        <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                            <a class="nav-item nav-link active " id="nav-user-tab" data-toggle="tab"
                                               href="#nav-user" role="tab" aria-controls="nav-user"
                                               aria-selected="true">Users</a>
                                            <a class="nav-item nav-link " id="nav-employer-tab" data-toggle="tab"
                                               href="#nav-employer" role="tab" aria-controls="nav-employer"
                                               aria-selected="false">Business Owners</a>
                                        </div>
                                    </nav> -->
                                    <div class="tab-content" id="nav-tabContent">
                                        <div class="tab-pane fade show active" id="nav-user" role="tabpanel"
                                             aria-labelledby="nav-user-tab">

                                            <div class="top mt-0 mt-md-5">
                                                <div class="row">
                                                    <div class="col-12">
                                                        <label for="">sort by :</label>
                                                    </div>
                                                </div>
                                                <div class="row align-items-center">
                                                    <div class="col-xl-2 col-md-4 col-sm-6 col-12 mb-2 mb-md-0">
                                                        <date-picker v-model="from" placeholder="from"
                                                                     valueType="format"></date-picker>
                                                    </div>
                                                    <div class="col-xl-2 col-md-4 col-sm-6 col-12">
                                                        <date-picker v-model="to" placeholder="to"
                                                                     valueType="format"></date-picker>
                                                    </div>
                                                    <div class="col-xl-2 col-md-4 col-12">
                                                        <button @click="getSubscriptions()" class="green-btn w-100">
                                                            apply/clear
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="clearfix"></div>
                                            <div class="maain-tabble table-responsive">
                                                <table class="table table-striped table-bordered zero-configuration">
                                                    <thead>
                                                    <tr>
                                                        <th>s.no</th>
                                                        <th>Full Name</th>
                                                        <th>Email address</th>
                                                        <th>Message</th>
                                                        <th>Date</th>
                                                        <!-- <th>Action</th> -->
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr :key="index" v-for="(feedback,index) in feedbacks.data">
                                                        <td>{{index+1}}</td>
                                                        <td>{{feedback.name}}</td>
                                                        <td>{{feedback.email}}</td>
                                                        <td>{{feedback.message}}</td>
                                                        <td>{{formatDate(feedback.created_at)}}</td>
                                                       <!--  <td>
                                                            <div class="btn-group mr-1 mb-1">
                                                                <button type="button" class="btn btn-drop-table btn-sm"
                                                                        data-toggle="dropdown" aria-haspopup="true"
                                                                        aria-expanded="false"><i
                                                                    class="fa fa-ellipsis-v"></i></button>
                                                                <div class="dropdown-menu" x-placement="bottom-start">
                                                                    <router-link class="dropdown-item"
                                                                                 :to="{name:'ViewUserFeedback'}"><i
                                                                        class="fa fa-eye"></i>View
                                                                    </router-link>
                                                                    <router-link class="dropdown-item"
                                                                                 :to="{name: 'Feedback'}"
                                                                                 data-toggle="modal"
                                                                                 data-target=".delFed-modal"><i
                                                                        class="fa fa-trash"></i>Delete
                                                                    </router-link>

                                                                </div>
                                                            </div>
                                                        </td> -->
                                                    </tr>
                                                    <tr v-if="typeof feedbacks != 'undefined' && feedbacks.data.length == 0">
                                                    <td colspan="8">
                                                      No Data Available
                                                    </td>
                                                  </tr>
                                                    </tbody>
                                                </table>
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
        feedbacks: {},
        entries: 10,
        from: '',
        to: '',
      };
    },
    async created() {
      await this.getFeedback();
    },
    methods: {
      async getFeedback(page = 1) {

        // let id = (this.$route.params.id) ? '/'+this.$route.params.id : '';
        let res = (await axios.get(`/api/admin/feedback?page=`+page+'&entries='+this.entries+'&to='+this.to+'&from='+this.from));
        this.feedbacks = res.data;
        console.log(this.feedbacks);
      }
    }
  }
</script>