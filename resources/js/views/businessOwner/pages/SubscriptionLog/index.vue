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
                                        <div class="col-12 text-center text-lg-left">
                                            <h1>Subscription Log</h1>
                                        </div>
                                    </div>
                                    <div class="row mb-4 align-items-start">
                                        <div class="col-lg-6 col-md-12 col-12  my-2 my-lg-0">
                                            <div class="media ">
                                                <div class="media-body sub-log-box mx-auto mx-lg-0">
                                                    <h5 class="mt-1">Package Selected <span>{{ packageName }}</span></h5>
                                                    <div v-if="packageName == 'Starter'">
                                                        <h5 class="mt-1">Next Renewel Package<span>Champion</span></h5>
                                                    </div>
                                                    <div v-else-if ="packageName == 'Champion'">
                                                        <h5 class="mt-1">Next Renewel Package <span>Elite</span></h5>
                                                    </div>
                                                    <div v-else-if ="packageName == 'Elite'">
                                                        <h5 class="mt-1">Next Renewel Package <span>No Package Required</span></h5>
                                                    </div>
                                                    <div class="checkboxs mt-1">
                                                        <div class="checkbox d-inline-block mr-2">
                                                            <label class=""> Auto Renew Subscription
                                                                <input type="checkbox">
                                                                <span class="checkmark"></span>
                                                            </label>
                                                        </div>
                                                    </div>
<!--                                                    <h5 class="mt-1">Next Renewal Package <span>Gold Package</span></h5>-->
                                                    <div class="row mt-1">
                                                        <div class="col-12">
                                                            <!-- <label class="container-renew">Auto Renew Subscription-->
                                                            <!--  <input type="checkbox" checked="checked">-->
                                                            <!--   <span class="checkmark-renew"></span>-->
                                                            <!--  </label>-->
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-12 col-12 text-center text-lg-right my-2 my-lg-0">
                                            <a href="#" class="btn-green-pckg px-2" data-toggle='modal'
                                               data-target="#change_package">Change Package For Next Renewel</a>
                                        </div>


                                    </div>

                                    <div class="top mt-5">
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
                                                <button type="button" @click='getUserSubscriptions()' class="green-btn">
                                                    apply/clear
                                                </button>
                                            </div>

                                        </div>
                                    </div>


                                    <div class="clearfix"></div>
                                    <div class="maain-tabble table-responsive">
                                        <table-search :showEntries="showEntries"></table-search>
                                        <table class="table table-striped table-bordered zero-configuration">
                                            <thead>
                                            <tr>
                                                <!-- <th>s.no</th> -->
                                                <th>Subscription Date</th>
                                                <th>Package Type</th>
                                                <th>Last Renewal Date</th>
                                                <th>Expire Date</th>
                                                <th>Charges</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr :key="index" v-for="(subscriptionsLog,index) in subscriptionsLogs" :class="[(subscriptionsLog.status == 1) ? 'border-green-200' : '']">
                                                <!-- <td>{{index}}</td> -->
                                                <td>{{ formatDate(subscriptionsLog.created_at) }}</td>
                                                <td>{{ subscriptionsLog.packages.package_name }}</td>
                                                <td>{{ formatDate(subscriptionsLog.created_at) }}</td>
                                                <td>{{ formatDate(subscriptionsLog.expiry_date) }}</td>
                                                <td>{{ subscriptionsLog.charges }}</td>
                                                <!-- <td>{{ (subscriptionsLog.status == 1) ? 'Active' : 'Inactive'}}</td> -->
                                                 <td v-if="subscriptionsLog.status == 1">
                                                        <span style="color:green">Active</span>
                                                    </td>
                                                    <td v-else-if ="subscriptionsLog.status == 0">
                                                        <span style="color:red">Inactive</span>
                                                    </td>
                                                <td>
                                                <router-link class="dropdown-item" :to="{name: 'businessOwner.subscriptions.invoice' , params: {id: subscriptionsLog.id}}"><i class="fa fa-eye"></i>View </router-link>
                                                </td>
                                                <!-- "`${base_url}/assets/images/avatar.jpg`" -->
                                                <!-- <td><a :href="'sctijobs//'+subscriptionsLog.id">View</a></td> -->
                                            </tr>
                                             <tr v-if="typeof subscriptionsLogs != 'undefined' && subscriptionsLogs.length == 0">
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
        <package-model></package-model>
    </div>
</template>
<script>
const PackageModel = () => import('./packageModel');
export default {
    data() {
        return {
            to: '',
            showEntries: true,
            entries: 10,
            from: '',
            subscriptionsLogs: '',
            packageName:''
        };
    },
    components: {
        PackageModel
    },
    async created(){
       await this.getUserSubscriptions();
    },
    methods: {
        async getUserSubscriptions(page = 1) {
            if(this.to == null){
                this.to ='';
                this.from = '';
            }
            let res = (await axios.get(`/api/admin/subscriptions/users/package?to=`+this.to+'&from='+this.from));
            this.subscriptionsLogs = res.data.data;
            this.packageName = this.subscriptionsLogs[0].packages.package_name;
            console.log(this.subscriptionsLogs);
        },
    }
}
</script>
