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
                                    <div class="row align-items-center">
                                        <div class="col-md-6 col-12">
                                            <h1 class="m-0 ch"><router-link :to="{name: 'businessOwner.dashboard'}">My Jobs</router-link></h1>
                                        </div>
                                    </div>

                                    <div class="top mt-2 mt-xl-5 mb-xl-1 mb-3">
                                        <div class="row">
                                            <div class="col-12">
                                                <label for="">sort by :</label>
                                            </div>
                                        </div>
                                        <div class="row align-items-center">
                                            <div class="col-xl-2 col-md-4 col-sm-6 col-12 mb-2 mb-md-0">
                                                <date-picker v-model="from" valueType="format"></date-picker>
                                                <!-- <input type="text" id="datepicker-2" placeholder="From"> -->
                                            </div>
                                            <div class="col-xl-2 col-md-4 col-sm-6 col-12">
                                                <date-picker v-model="to" valueType="format"></date-picker>
                                            </div>
                                            <div class="col-xl-2 col-md-4 col-sm-6 col-12 ">
                                                <button type="button" @click='getJobLogs()' class="green-btn">apply/clear</button>
                                            </div>

                                        </div>
                                    </div>


                                    <div class="clearfix"></div>
                                    <div class="maain-tabble table-responsive">
                                        <table-search :showEntries="showEntries"></table-search>
                                        <table class="table table-striped table-bordered zero-configuration">
                                                <thead>
                                                <tr>
                                                    <th>s.no</th>
                                                    <th>Job ID</th>
                                                    <th>Job Title</th>
                                                    <th>Posted On</th>
                                                    <th>New Applicants</th>
                                                    <th>Interested</th>
                                                    <th>Rejected</th>
                                                    <th>Apply Before</th>
                                                    <th>Status</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr :key="index" v-for="(joblog,index) in joblogs.data" :class="[(joblog.status == 1) ? 'border-green-200' : '']">
                                                    <td>{{index}}</td>
                                                    <td>#{{ joblog.id }}</td>
                                                    <td>{{ joblog.job_title }}</td>
                                                    <td>{{ formatDate(joblog.created_at) }}</td>
                                                    <td >{{joblog.status_count_applied}}</td>
                                                    <td>{{joblog.status_count_interested}}</td>
                                                    <td>{{joblog.status_count_rejected}}</td>
                                                    <td>{{ formatDate(joblog.apply_before) }}</td>
                                                    <!-- <td>{{(joblog.status) ? 'open' : 'closed'}}</td> -->
                                                    <td v-if="joblog.status == 1">
                                                        <span style="color:green">open</span>
                                                    </td>
                                                    <td v-else-if ="joblog.status == 0">
                                                        <span style="color:red">closed</span>
                                                    </td>
                                                    <td v-else-if ="joblog.status == 2">
                                                        <span style="color:orange">paused</span>
                                                    </td>
                                                    <td>
                                                        <div class="btn-group mr-1 mb-1">
                                                            <button type="button" class="btn btn-drop-table btn-sm p-2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="fa fa-ellipsis-v"></i></button>
                                                            <div class="dropdown-menu" x-placement="bottom-start">
                                                                <router-link class="dropdown-item" :to="{name: 'businessOwner.jobs.candidate.index' , params : {id: joblog.id} }"><i class="fa fa-user-circle"></i>View Candidates</router-link>
                                                                <router-link class="dropdown-item" :to="{name: 'businessOwner.jobs.show' , params: {id: joblog.id}}"><i class="fa fa-eye"></i>View </router-link>
                                                                <router-link class="dropdown-item" :to="{name: 'businessOwner.jobs.editStatus', params: {id: joblog.id}}"><i class="fas fa-edit"></i>Edit Status</router-link>
                                                                <router-link class="dropdown-item" :to="{name: 'businessOwner.jobs.editJob', params: {id: joblog.id}}"><i class="fas fa-edit"></i>Edit Job</router-link>

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
                                    <div class="px-1">
                                        <div class="row">
                                            <div class="col-5 align-self-center">
                                                <div class="dataTables_info" v-if="joblogs && joblogs && joblogs.from" id="DataTables_Table_0_info" role="status" aria-live="polite">Showing {{ joblogs.from }} to {{ joblogs.to }} of {{ joblogs.total }} entries</div>
                                            </div>
                                            <div class="col-7">
                                                <div class="dataTables_paginate paging_simple_numbers" id="DataTables_Table_0_paginate">
                                                    <pagination :data="joblogs" @pagination-change-page="getJobLogs">
                                                        <span slot="prev-nav">&lt; Previous</span>
                                                        <span slot="next-nav">Next &gt;</span>
                                                    </pagination>
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
import { mapActions, mapState } from 'vuex';
  export default{
    data() {
      return {
        joblogs: {},
        showEntries: true,
        entries: 10,
        status: 0,
        message: '',
        primaryKey: 0,
        successButtonText: '',
        institute: '',
        package: '',
        from: '',
        to: '',
        hit_from: 'businessOwner',
      };
    },
    computed: {
        ...mapState('admin', ['properties','search']),
    },
      watch: {
        search: function(val, oldVal) {
            this.getJobLogs();
        },
          entries:function(val, oldVal){
            this.getJobLogs();
          }
    },
    async created() {
      await this.getJobLogs();
    },
    methods: {
      async getJobLogs(page = 1) {

        let res = (await axios.get(`/api/admin/joblog?hit_from=`+this.hit_from+`&page=`+page+'&entries='+this.entries+'&to='+this.to+'&from='+this.from+'&search='+this.search));
        this.joblogs = res.data;
        console.log(this.joblogs);
      },
        onChange(event) {
            this.getJobLogs();
        }

    }
  }
</script>
