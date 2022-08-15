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
                    <h1 class="">Subscription Log</h1>
                  </div>
                </div>

                <nav>
                  <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <a @click="user_type = 0 ; getSubscriptions()" class="nav-item nav-link active " id="nav-user-tab" data-toggle="tab" href="#nav-user" role="tab" aria-controls="nav-user" aria-selected="true">Users</a>
                    <a @click="user_type = 1 ; getSubscriptions()"  class="nav-item nav-link " id="nav-employer-tab" data-toggle="tab" href="#nav-employer" role="tab" aria-controls="nav-employer" aria-selected="false">Business Owners</a>
                  </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                  <div class="tab-pane fade show active" id="nav-user" role="tabpanel" aria-labelledby="nav-user-tab">

                    <div class="top mt-0 mt-md-5">
                      <div class="row">
                        <div class="col-12">
                          <label for="">sort by :</label>
                        </div>
                      </div>
                      <div class="row align-items-center">
                        <div class="col-xl-2 col-md-4 col-sm-6 col-12 mb-2 mb-md-0">
                          <date-picker v-model="from_user" placeholder="from" valueType="format"></date-picker>
                        </div>
                        <div class="col-xl-2 col-md-4 col-sm-6 col-12">
                         <date-picker v-model="to_user" placeholder="to" valueType="format"></date-picker>
                       </div>
                       <div class="col-xl-2 col-md-4 col-12">
                        <button @click="getSubscriptions()" type="button" class="green-btn w-100">apply/clear</button>
                      </div>
                    </div>
                  </div>

                  <div class="clearfix"></div>
                  <div class="maain-tabble table-responsive">
                    <table class="table table-striped table-bordered zero-configuration">
                      <thead>
                        <tr>
                          <th>s.no</th>
                          <th>User ID</th>
                          <th>Subscription Date</th>
                          <th>Package Name</th>
                          <th>Last Renewal Date</th>
                          <th>Expiry Date</th>
                          <th>Charges</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                       <tr :key="index" v-for="(subscription,index) in subscriptions.data">
                        <td>0{{index}}</td>
                        <td>{{subscription.user_id}}</td>
                        <td>{{formatDate(subscription.created_at)}}</td>
                        <td>{{subscription.packages.package_name}}</td>
                        <td>{{formatDate(subscription.created_at)}}</td>
                        <td>{{formatDate(subscription.expiry_date)}}</td>
                        <td>${{subscription.charges}}</td>
                        <td>Active</td>

                      </tr>
                      <tr v-if="typeof subscriptions.data != 'undefined' && subscriptions.data.length == 0">
                        <td colspan="8">
                          No Data Available
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

              </div>
              <div class="tab-pane fade " id="nav-employer" role="tabpanel" aria-labelledby="nav-employer-tab">

                <div class="top mt-0 mt-md-5">
                  <div class="row">
                    <div class="col-12">
                      <label for="">sort by :</label>
                    </div>
                  </div>
                  <div class="row align-items-center">
                    <div class="col-xl-2 col-md-4 col-sm-6 col-12 mb-2 mb-md-0">
                      <date-picker v-model="from_business_user" placeholder="from" valueType="format"></date-picker>
                    </div>
                    <div class="col-xl-2 col-md-4 col-sm-6 col-12">
                     <date-picker v-model="to_business_user" placeholder="to" valueType="format"></date-picker>
                   </div>
                   <div class="col-xl-2 col-md-4 col-12">
                    <button @click="getSubscriptions()"  class="green-btn w-100">apply/clear</button>
                  </div>
                </div>
              </div>

              <div class="clearfix"></div>
              <div class="maain-tabble table-responsive">
                <table class="table table-striped table-bordered zero-configuration">
                  <thead>
                    <tr>
                      <th>s.no</th>
                      <th>Business Owner ID</th>
                      <th>Subscription Date</th>
                      <th>Package Date</th>
                      <th>Last Renewal Date</th>
                      <th>Expiry Date</th>
                      <th>Charges</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                     <tr :key="index" v-for="(subscription,index) in subscriptions.data">
                        <td>0{{index}}</td>
                        <td>{{subscription.user_id}}</td>
                        <td>{{formatDate(subscription.created_at)}}</td>
                        <td>{{subscription.packages.package_name}}</td>
                        <td>{{formatDate(subscription.created_at)}}</td>
                        <td>{{formatDate(subscription.expiry_date)}}</td>
                        <td>${{subscription.charges}}</td>
                        <td>Active</td>

                      </tr>
                      <tr v-if="typeof subscriptions.data != 'undefined' && subscriptions.data.length == 0">
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
    inject: ['formatDate'],
    data() {
      return {
        subscriptions: {},
        institutes: [],
        packages: {},
        statics: {},
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
        from_user: '',
        to_user: '',
        from_business_user: '',
        to_business_user: '',
        user_type: 0,
      };
    },
    async created() {
      await this.getSubscriptions();
      // await this.getInstitute();
      // await this.getPackages();
      // await this.getStatics();
    },
    methods: {
      async getSubscriptions(page = 1) {

        let id = (this.$route.params.id) ? '/'+this.$route.params.id : '';
        let res = (await axios.get(`/api/admin/subscriptions`+id+`?page=`+page+'&entries='+this.entries+'&to_user='+this.to_user+'&from_user='+this.from_user+'&to_business_user='+this.to_business_user+'&from_business_user='+this.from_business_user+'&user_type='+this.user_type));
        this.subscriptions = res.data;
        console.log(this.subscriptions);
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
    }
  }
</script>
