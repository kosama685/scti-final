<template>
    <div class="content-wrapper">
        <div class="content-body">
            <!-- Basic form layout section start -->
            <section id="configuration" class="search view-cause">
                <div class="row">
                    <div class="col-12">
                        <div class="card rounded pad-20">
                            <div class="card-content collapse show">
                                <div class="card-body  card-dashboard">
                                    <div class="row">
                                        <div class="col-md-6 col-12">
                                            <h1 class="pull-left u-m">Employer Listing </h1>
                                        </div>
                                        <div class="col-md-6">
                                            <router-link :to="{name: 'BlockedEmployees'}"
                                                         class="blockedd-button text-center pull-right d-inline-block">
                                                Blocked Employers
                                            </router-link>

                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="d-sm-flex">
                                                <div class="employer-card mb-2">
                                                    <div class="d-flex justify-content-around">
                                                        <div class="left">
                                                            <p class="mb-0">Total</p>
                                                            <p>Employers</p>
                                                        </div>
                                                        <div class="right">
                                                            <h3>{{employeeCount}}</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="employer-card  mb-2">
                                                    <div class="d-flex justify-content-around">
                                                        <div class="left">
                                                            <p class="mb-0">Total</p>
                                                            <p class="">Institution</p>
                                                        </div>
                                                        <div class="right">
                                                            <h3>{{instituteCount}}</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-12">
                                            <div class="pull-right blocked-user-and-add-wrapper">
                                                <div class="row">
                                                    <div class="col-lg-12 text-sm-right">
                                                        <select @change="getEmployees()" v-model="institute"
                                                                class="select-opt w-201 mr-2">
                                                            <option value="">Sort By Institution</option>
                                                            <option :key="index" v-for="(institute,index) in institutes"
                                                                    :value="institute.id">
                                                                {{institute.institute_name}}
                                                            </option>
                                                            <!-- 	<option value="0">Sort By Institution</option>
                                                                <option value="0">Sort By Institution</option>
                                                                <option value="0">Sort By Institution</option> -->

                                                        </select>
                                                    </div>
                                                    <div class="col-lg-12 text-sm-right">
                                                        <select @change="getEmployees()" v-model="package"
                                                                class="select-opt w-201 mr-2">
                                                            <option value="">Sort By Package</option>
                                                            <option :key="index" v-for="(pack,index) in packages"
                                                                    :value="pack.id">
                                                                {{pack.package_name}}
                                                            </option>

                                                        </select>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                    <!-- <div class="row mt-2 filter-main justify-content-between">
                                      <div class="col-12">
                                        <label>Sort By:</label>
                                      </div>
                                      <div class="col-lg-6 col-md-12 col-sm-12  form-group">
                                        <div class="row">

                                          <div class="col-lg-6 col-md-6 col-sm-6">
                                            <label for="">To:</label>
                                            <div class="input-date"><input id="select-date"></div>
                                          </div>
                                          <div class="col-lg-6 col-md-6 col-sm-6">
                                            <label for="">From:</label>
                                            <div class="input-date" ><input id="select-date2"> </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div> -->


                                    <div class="maain-tabble table-responsive">
                                        <table class="table table-striped table-bordered zero-configuration">
                                            <thead>
                                            <tr>
                                                <th>S.no</th>
                                                <th>Employer Id</th>
                                                <th>Employer name</th>
                                                <th>Institute name</th>
                                                <th>Email</th>
                                                <th>Registration Date</th>
                                                <th>Action</th>

                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr :key="index" v-for="(employee,index) in employees.data">
                                                <td>{{index}}</td>
                                                <td>{{employee.id}}</td>
                                                <td>{{employee.first_name +' ' +employee.last_name }}</td>
                                                <td>{{employee.institute.institute_name}}</td>
                                                <!-- <td><span data-toggle="popover" data-content="johny" class="circle" style="background: #f61454;">M</span>Mark William</td> -->

                                                <td>{{employee.email}}</td>
                                                <td>{{formatDate(employee.created_at)}}</td>

                                                <td>
                                                    <div class="btn-group mr-1 mb-1">
                                                        <button type="button" class="btn  btn-drop-table btn-sm"
                                                                data-toggle="dropdown" aria-haspopup="true"
                                                                aria-expanded="false"><i class="fa fa-ellipsis-v"></i>
                                                        </button>
                                                        <div class="dropdown-menu" x-placement="bottom-start"
                                                             style="position: absolute; transform: translate3d(4px, 23px, 0px); top: 0px; left: 0px; will-change: transform;">

                                                            <router-link class="dropdown-item"
                                                                         :to="{name : 'ViewEmployee',params: { id : employee.id } }">
                                                                <i class="fa fa-eye"></i>View Profile
                                                            </router-link>
                                                            <router-link class="dropdown-item"
                                                                         :to="{name : 'EditEmployee',params: { id : employee.id } }">
                                                                <i class="fa fa-pencil-square-o"></i>Edit
                                                            </router-link>
                                                            <router-link class="dropdown-item"
                                                                         :to="{name : 'SubscriptionLog',params: { id : employee.id } }">
                                                                <i class="fa fa fa-th-list"></i>Subscription Log
                                                            </router-link>
                                                            <!-- <a class="dropdown-item" href="a-employer-subscription-log.html"><i class="fa fa-th-list"></i>Subscription Log</a> -->
                                                            <a class="dropdown-item" href="a-employer-job-log.html"><i
                                                                class="fa fa-briefcase"></i>Job Log</a>

                                                            <a class="dropdown-item" data-toggle="modal"
                                                               href="#blockPopup"
                                                               @click="BlockPopup(employee)"><i class="fa fa-ban"></i>Block</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr v-if="typeof employees.data != 'undefined' && employees.data.length == 0">
                                                <td colspan="9">
                                                    No Data Available
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                        <template>
                                            <pagination class="float-right" :data="employees"
                                                        @pagination-change-page="getEmployees"></pagination>
                                        </template>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <block-popup @delete="blockUser" :successButtonText="successButtonText" :primary-key="primaryKey"
                     table="block-employee" :message="message"></block-popup>
    </div>
</template>
<script>
const BlockPopup = () => import('../../components/Block.vue');
export default {
    data() {
        return {
            employees: {},
            institutes: [],
            packages: {},
            statics: {},
            employeeCount: 0,
            instituteCount: 0,
            search: '',
            entries: 10,
            status: 0,
            message: '',
            primaryKey: 0,
            successButtonText: '',
            institute: '',
            package: '',
        };
    },
    components: {
        BlockPopup
    },
    async created() {
        await this.getEmployees();
        await this.getInstitute();
        await this.getPackages();
        await this.getStatics();
    },
    methods: {
        async getEmployees(page = 1) {
            let res = (await axios.get('/api/admin/employees?page=' + page + '&entries=' + this.entries + '&institute=' + this.institute + '&package=' + this.package));
            this.employees = res.data;
            console.log(this.employees);
        },
        async getInstitute() {
            let res = (await axios.get('/api/admin/institute'));
            this.institutes = res.data;
            console.log(this.institutes);
        },
        async getPackages() {
            let res = (await axios.get('/api/admin/package'));
            this.packages = res.data.data;
            console.log(this.packages);
        },
        async getStatics() {
            let res = (await axios.get('/api/admin/statics'));
            this.statics = res.data;
            this.employeeCount = this.statics.employeeCount;
            this.instituteCount = this.statics.instituteCount;
            console.log(this.statics);
        },
        BlockPopup(obj) {
            console.log(obj);
            this.primaryKey = obj.id;
            this.message = 'Are you sure! do you want to block this Employer ?';
            this.successButtonText = 'Yes';
        },
        blockUser(block) {
            let blockUserIndex = _.findIndex(this.employees.data, (o) => {
                return o.id == this.primaryKey
            });
            Vue.delete(this.employees.data, blockUserIndex);
            // Vue.set(this.articles.data, articleIndex, article);

        },
    }
}
</script>

