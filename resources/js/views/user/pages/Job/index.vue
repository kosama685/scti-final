<template>
    <div>
        <register-header></register-header>
        <section class="user-home">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                        <p class="page-heading">My Jobs</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-body ">
                                <div class="row justify-content-end">
                                    <div class="col-lg-3 col-md-4 col-12">
                                        <select @change="getJobLogs" class="form-control reg-sel" id="job_type"
                                                name="job_status" v-model="job_status">
                                            <option>Select One</option>
                                            <option value="all">All</option>
                                            <option value="applied">Applied</option>
                                            <option value="rejected">Rejected</option>
                                            <option value="shortlisted">Shortlisted</option>
                                            <option value="closed">Closed</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="top mt-2 mt-xl-5 mb-xl-0 mb-3">
                                    <div class="row">
                                        <div class="col-lg-1 col-md-2 col-12 text-center">
                                        <span class="data-span">Sort By:</span>
                                    </div>
                                    </div>


                                    <div class="row align-items-center">
                                        <div class="col-xl-4 col-md-4 col-sm-6 col-12 mb-2 mb-md-0">
                                            <div class="form-group">
                                                <label for="exp">From</label>
                                                <date-picker v-model="from" valueType="format"></date-picker>

                                            </div>
                                        </div>
                                        <div class="col-xl-4 col-md-4 col-sm-6 col-12">
                                            <div class="form-group">
                                                <label for="exp">To</label>
                                                <date-picker v-model="to" valueType="format"></date-picker>
                                            </div>
                                        </div>
                                        <div class="col-xl-4 col-md-4 col-sm-6 col-12 ">
                                            <button type="button" @click='getJobLogs()' class="green-btn btn-primary w-100">apply/clear
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12 p-0">
                                        <div class="maain-tabble table-responsive">
                                            <table class="table zero-configuration">
                                                <thead>
                                                <tr>
                                                    <th>S.no</th>
                                                    <th>Job Id</th>
                                                    <th>Job Title</th>
                                                    <th>Apply Date</th>
                                                    <th>Stage</th>
                                                    <th>action</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr :key="index" v-for="(joblog,index) in joblogs.data">
                                                    <td>{{ index }}</td>
                                                    <td>{{ joblog.job_id }}</td>
                                                    <td>{{ joblog.job.job_title }}</td>
                                                    <td>{{ formatDate(joblog.created_at) }}</td>
                                                    <!-- <td class="green">{{ joblog.status }}</td> -->
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
                                                            <button type="button" class="btn  btn-drop-table btn-sm"
                                                                    data-toggle="dropdown" aria-haspopup="true"
                                                                    aria-expanded="false"><i
                                                                class="fa fa-ellipsis-v"></i>
                                                            </button>
                                                            <div class="dropdown-menu" x-placement="bottom-start">
                                                                <router-link
                                                                    class="dropdown-item" :to="{name: 'user.job.show',params:{id: joblog.job_id}}"><i
                                                                    class="fa fa-eye"></i>View
                                                                </router-link>
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
                </div>
            </div>
        </section>
        <inner-page-footer></inner-page-footer>
    </div>
</template>
<script>
const InnerPageFooter = () => import('../../components/InnerPageFooter.vue');
const RegisterHeader = () => import('../../components/RegisterHeader.vue');

export default {
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
            job_status: 'all'
        };
    },
    components: {
        InnerPageFooter,
        RegisterHeader,
    },
    async created() {
        await this.getJobLogs();
    },
    methods: {
        async getJobLogs(page = 1) {

            let res = (await axios.get(`/api/user/jobs/` + this.job_status + `?page=` + page + '&entries=' + this.entries + '&to=' + this.to + '&from=' + this.from));
            this.joblogs = res.data;
            console.log(this.joblogs);
        }
    }
}
</script>
