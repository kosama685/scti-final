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
                                            <h1><router-link :to="{name:'AdminHome'}"><i class="fa fa-angle-left"></i>Job Listing</router-link></h1>
                                        </div>
                                    </div>

                                    <div class="top mt-5">





                                        <div class="row">
                                            <div class="col-12">
                                                <label for="">sort by :</label>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-xl-2 col-md-4 col-sm-6 col-12">
                                                <date-picker v-model="from" valueType="format"></date-picker>
                                                <!-- <input type="text" id="datepicker-2" placeholder="From"> -->
                                            </div>
                                            <div class="col-xl-2 col-md-4 col-sm-6 col-12">
                                                <date-picker v-model="to" valueType="format"></date-picker>
                                            </div>
                                            <div class="col-xl-2 col-md-4 col-12">
                                                <button type="button" @click='getPaymentLogs()' class="green-btn w-100">apply/clear</button>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="clearfix"></div>
                                    <div class="maain-tabble table-responsive">
                                        <table class="table table-striped table-bordered zero-configuration">
                                            <thead>
                                                <tr>
                                                    <th>s.no</th>
                                                    <th>business owner ID</th>
                                                    <th>Job Id</th>
                                                    <th>Job title</th>
                                                    <th>Posted On</th>
                                                    <th>Apply Before</th>
                                                    <th>Status</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr :key="index" v-for="(joblog,index) in joblogs.data">
                                                    <td>{{index}}</td>
                                                    <td>{{ joblog.user_id }}</td>
                                                    <td>{{ joblog.id }}</td>
                                                    <td>{{ joblog.job_title }}</td>
                                                    <td>{{ formatDate(joblog.created_at) }}</td>
                                                    <td>{{ formatDate(joblog.apply_before) }}</td>
                                                    <td>{{(joblog.status) ? 'open' : 'closed'}}</td>
                                                    <td>
                                                        <div class="btn-group mr-1 mb-1">
                                                            <button type="button" class="btn btn-drop-table btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="fa fa-ellipsis-v"></i></button>
                                                            <div class="dropdown-menu" x-placement="bottom-start">
                                                                <router-link class="dropdown-item" :to="{name:'admin.job.candidate' , params : {id: joblog.id} }"><i class="fa fa-user-circle"></i>View Candidate</router-link>
                                                                <router-link class="dropdown-item" :to="{name: 'admin.job.show' , params: {id: joblog.id}}"><i class="fa fa-eye"></i>View </router-link>

                                                            </div>
                                                        </div>
                                                    </td>

                                                </tr>
                                                <tr v-if="typeof joblogs.data != 'undefined' && joblogs.data.length == 0">
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
            </section>
        </div>
    </div>
</template>
<script>
  export default{
    data() {
      return {
        joblogs: {},
        search: '',
        employeeCount: 0,
        instituteCount: 0,
        entries: 10,
        status: 0,
        message: '',
        primaryKey: 0,
        successButtonText: '',
        institute: '',
        package: '',
        from: '',
        to: '',
      };
    },
    async created() {
      await this.getPaymentLogs();
    },
    methods: {
      async getPaymentLogs(page = 1) {

        let id = (this.$route.params.id) ? '/'+this.$route.params.id : '';
        let res = (await axios.get(`/api/admin/joblog`+id+`?page=`+page+'&entries='+this.entries+'&to='+this.to+'&from='+this.from));
        this.joblogs = res.data;
        console.log(this.joblogs);
      }
    }
  }
</script>
