<template>
    <div class="content-wrapper">
        <div class="content-body">
            <!-- Basic form layout section start -->
            <section id="configuration">
                <div class="row">
                    <div class="col-12">
                        <div class="">
                            <div class="card-content collapse show">

                                <div class="card-dashboard p-0">
<!--                                    <div class="row">-->
<!--                                        <div class="col-12 ">-->
<!--                                            <div class="eroor_wrapper">-->
<!--                                                <p><i class="fas fa-exclamation-triangle mr-2"></i> Your-->
<!--                                                    subscription package will be expired in 3 days! </p>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->

                                    <div class="cd-inner">
                                        <div class="row">
                                            <div class="col-12">
                                                <!-- <h1>Welcome Back   {{this.user_name}}</h1> -->
                                                <h1>business owner dashboard</h1>
                                            </div>
                                        </div>

                                         <div class="row">
                                            <div class="col-xl-4 col-md-4 col-12 mx-auto">
                                                <div class="box up-box">
                                                    <div class="media align-items-center">
                                                        <img :src="`${base_url}/assets/business/images/d-1.png`"
                                                             class="img-fluid" alt="">
                                                        <div class="media-body">
                                                            <h3>Total Active <br>Job</h3>
                                                        </div>
                                                        <h2>{{ totalJob }}</h2>
                                                    </div>
                                                </div>
                                            </div>
                                             <div class="col-xl-4 col-md-4 col-12 mx-auto">
                                                <div class="box up-box">
                                                    <div class="media align-items-center">
                                                        <img :src="`${base_url}/assets/business/images/d-1.png`"
                                                             class="img-fluid" alt="">
                                                        <div class="media-body">
                                                            <h3>Total New <br>Applicants</h3>
                                                        </div>
                                                        <h2>{{ jobApplied }}</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                           

                                        <div class="row">
                                            <div class="col-12 mx-auto text-center">

                                               <router-link  :to="{name: 'businessOwner.jobs.create'}"  class="btn-green-pckg px-4">
                                                    <!-- <i class="fa fa-arrow-circle-left"></i> -->
                                                Create Job</router-link>

                                                <!-- <a href="#" class="btn-green-outline px-3 mx-3" data-toggle='modal'
                                               data-target="#change_package">Update My Package</a> -->
                                            </div>
                                            <!-- <div class="col-lg-6 col-md-12 col-12 text-center  my-2 my-lg-0">
                                            
                                                <router-link  :to="{name: 'businessOwner.subscriptions.index'}"  class="btn-green-pckg">
                                                Update My Package</router-link>
                                            </div> -->
                                        </div>
                                            <br>
                                         <div class="row">
                                            <div class="col-12  text-center">
                                            <h2>All Jobs</h2>
                                            </div>
                                            </div>

                                         <div class="clearfix"></div>
                                    <div class="maain-tabble table-responsive">
                                        <table class="table table-striped table-bordered zero-configuration">
                                                <thead>
                                                <tr>
                                                    <th>s.no</th>
                                                    <th>Job Title</th>
                                                    <th>Date Posted</th>
                                                    <th>New Applicants</th>
                                                    <th>Interested</th>
                                                    <th>Rejected</th>
                                                    <!-- <th>Apply Before</th> -->
                                                    <th>Status</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                             <tbody>
                                                <tr :key="index" v-for="(joblog,index) in joblogs.data" :class="[(joblog.status == 1) ? 'border-green-200' : '']">
                                                    <td>{{index}}</td>
                                                    <td>{{ joblog.job_title }}</td>
                                                    <td>{{ formatDate(joblog.created_at) }}</td>
                                                    <td >{{joblog.status_count_applied}}</td>
                                                    <td>{{joblog.status_count_interested}}</td>
                                                    <td>{{joblog.status_count_rejected}}</td>
                                                    <!-- <td>{{ formatDate(joblog.apply_before) }}</td> -->
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
                                                            <button type="button" class="btn btn-drop-table btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="fa fa-ellipsis-v"></i></button>
                                                            <div class="dropdown-menu" x-placement="bottom-start">
                                                                <router-link class="dropdown-item" :to="{name: 'businessOwner.jobs.candidate.index' , params : {id: joblog.id} }"><i class="fa fa-user-circle"></i>View Candidates</router-link>
                                                                <router-link class="dropdown-item" :to="{name: 'businessOwner.jobs.show' , params: {id: joblog.id}}"><i class="fa fa-eye"></i>View Job</router-link>
                                                                <router-link class="dropdown-item" :to="{name: 'businessOwner.jobs.editStatus', params: {id: joblog.id}}"><i class="fas fa-edit"></i>Edit Job Status</router-link>
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
                                        <!-- <div class="row">
                                            <div class="col-12 col-xl-12 d-flex w-100">
                                                <div class="box">
                                                    <div class="text-center">
                                                        <h6 class="qs">QUICK STATS</h6>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-6 col-12 text-center">
                                                            <div class="c100 p80 big light-bloo"><span>80$</span>
                                                                <div class="slice">
                                                                    <div class="bar"></div>
                                                                    <div class="fill"></div>
                                                                </div>
                                                            </div>
                                                            <h6 class="h6-cir">Average Job Created / Month</h6>
                                                        </div>
                                                        <div class="col-md-6 col-12 text-center">
                                                            <div class="c100 p75 big bloo"><span>75$</span>
                                                                <div class="slice">
                                                                    <div class="bar"></div>
                                                                    <div class="fill"></div>
                                                                </div>
                                                            </div>
                                                            <h6 class="h6-cir">Average Job Created / Year</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> -->
                                       

                                        <!-- <div class="chart-bar box bottom">
                                            <div class="row">
                                                <div class="col-12 col-lg-7 text-right ">
                                                    <h2>Jobs Created Per Month</h2>
                                                </div>
                                                <div class="col-12 col-lg-5 text-right">
                                                    <select v-model="selectedYear">
                                                        <option v-for="year in years" :value="year">{{ year }}</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-12">
                                                    <div class="chart-main position-relative">

                                                        <div class="row">
                                                            <div class="col-xl-1 col-12">
                                                                <h4 class="basic-txt">Jobs</h4>
                                                            </div>
                                                            <div class="col-12 col-xl-11">
                                                                <bar-chart v-if="loaded" chart:render="check"
                                                                           :chartData="chartData"
                                                                           :options="options"></bar-chart>
                                                            </div>
                                                            <div class="col-12 text-align-center">
                                                                <h4 class="m_tag">Months</h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div> -->

                                        <!-- <div class="row mt-5">
                                            <div class="col-12">
                                                <h4 class="act_h">Activity log</h4>
                                            </div>
                                            <div class="col-12 mt-5">
                                                <div class="maain-tabble table-responsive dash-table">
                                                    <table
                                                        class="table table-striped table-bordered zero-configuration">
                                                        <thead>
                                                        <tr>
                                                            <th>Activity</th>
                                                            <th>Date</th>
                                                            <th>Time</th>

                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr v-for="notificationLog in notificationLogs">
                                                            <td>Lorem ipsum, dolor sit amet consectetur adipisicing
                                                                elit. Ullam adipisci iusto assumenda impedit enim
                                                                inventore harum
                                                            </td>
                                                            <td>Sep 2, 2020</td>
                                                            <td>10:50 Am</td>

                                                        </tr>
                                                        <tr v-if="typeof notificationLogs != 'undefined' && notificationLogs.length == 0">
                                                    <td colspan="8">
                                                      No Data Available
                                                    </td>
                                                  </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>


                                        </div> -->

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
            <package-model></package-model>
    </div>
    
</template>

<script>
const PackageModel = () => import('./SubscriptionLog/packageModel');
import {mapActions, mapState} from 'vuex';
// const EmployeeTable = ()=> import('./components/EmployeeTable.vue');
import BarChart from './BarChart'

import allMonths from '@core/months.js';
// console.log(allMonths);
// register component to use
export default {
    components: {
        BarChart,
        PackageModel
    },
    data() {
        return {
            selectedYear: '2021',
            months: [],
            totalJob: 0,
            joblogs: {},
            notificationLogs: {},
            loaded: true,
            dashboard: {},
            user_name:'',
            loadedPage: true,
            jobApplied:'',
            chartData: {
                labels: allMonths,
                datasets: [{
                    label: 'Jobs Created Per Month',
                    data: [],
                    backgroundColor: [
                        '#23c0e9',
                    ],
                    borderColor: [
                        '#23c0e9',
                    ],
                    borderWidth: 0.5,
                    minBarLength: 2,
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            },
            chartOptionsBar: {
                xAxis: {
                    data: [...allMonths],
                },
                yAxis: {
                    type: 'value',
                },
                series: [{
                    type: 'bar',
                    data: [10, 10],
                }]
            }
        };
    },
    computed: {
        ...mapState('admin', ['home']),

        years: () => {
            let today = new Date();
            let currentYear = today.getFullYear();
            let last10Years = new Date(today.setFullYear(today.getFullYear() - 5)).getFullYear();
            let years = [];
            for (var i = currentYear; i >= last10Years; i--) {
                years.push(i);
            }
            return years;
        },
    },
     watch: {
       
    },
    async created() {
        await this.getJobLogs();
        let self = this;
        let loadedPage = window.localStorage.getItem('loadedFirstTime');
        console.log(loadedPage);
        await this.getDashboardStatics();
        if (loadedPage == 'true') {
            window.localStorage.setItem('loadedFirstTime', false);
            this.loadOnce();

        }
    },
    beforeMount() {

        // console.log(this.home);
    },
    watch: {
        search(val, oldVal) {
            this.fetch();
        },
        selectedYear() {
            this.getDashboardStatics();
        },
        chartData(val) {
            alert();
        },
         search: function(val, oldVal) {
            this.getJobLogs();
        },
          entries:function(val, oldVal){
            this.getJobLogs();
          }
    },
    methods: {
        ...mapActions('admin', ['getAll']),
        check() {
            alert();
        },

        loadOnce: function () {
            location.reload();
        },
        async getDashboardStatics() {
            this.dashboard = (await axios.get(`/api/admin/dashboardStatic?year=` + this.selectedYear)).data;
            this.chartData.datasets[0].data = this.dashboard.graphdata;
            this.totalJob = this.dashboard.job_count;
            this.jobApplied = this.dashboard.job_applied;
            this.notificationLogs = this.dashboard.notificationLog;
            this.user_name = this.dashboard.user_name;
            localStorage.setItem('uuid',this.dashboard.uuid);
            console.log("user name is",this.user_name);
        },
        async getJobLogs(page = 1) {

        let res = (await axios.get(`/api/admin/index_job`));
        this.joblogs = res;
        console.log('data is',this.joblogs);
      },
        onChange(event) {
            this.getJobLogs();
        }
        // async fetch() {
        //     this.loaded = false;
        //     let params = {
        //         route: route('admin.home'),
        //         mutation: 'SET_HOME_DATA',
        //         variable: 'data',
        //         data: {
        //             search: this.search,
        //             year: this.selectedYear,
        //         }
        //     };
        //     let { data } = await this.getAll(params);
        //     this.months = data.data.months;
        //     this.loaded = true;
        //     this.chartData.datasets[0].data = this.months;
        //     return data;
        // },
    }
}

</script>

