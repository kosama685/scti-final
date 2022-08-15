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
                                            <h1 class="m-0 ch"><router-link :to="{name:'AdminHome'}"><i class="fa fa-angle-left"></i>Payment Logs</router-link></h1>
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
                                            </div>
                                            <div class="col-xl-2 col-md-4 col-sm-6 col-12">
                                                <date-picker v-model="to" valueType="format"></date-picker>
                                            </div>
                                            <div class="col-xl-2 col-md-4 col-12">
                                                <button @click='getPaymentLogs()' type="button" class="green-btn w-100">apply/clear</button>
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
                                                    <th>Program ID</th>
                                                    <th>Program Title</th>
                                                    <th>Booking Date</th>
                                                    <th>Charges</th>
                                                    <th>Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr :key="index" v-for="(paymentLog,index) in paymentLogs.data">
                                                    <td>{{ index }}</td>
                                                    <td>{{ paymentLog.user_id }}</td>
                                                    <td>{{ paymentLog.program.id }}</td>
                                                    <td>{{ paymentLog.program.program_name }} </td>
                                                    <td>{{ formatDate(paymentLog.created_at) }}</td>
                                                    <td>{{ paymentLog.charges }}</td>
                                                    <td>{{ (paymentLog.status) ? 'Paid' : 'Un-paid' }}</td>

                                                </tr>
                                                <tr v-if="typeof paymentLogs.data != 'undefined' && paymentLogs.data.length == 0">
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
    inject: ['formatDate'],
    data() {
      return {
        paymentLogs: {},
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
        let res = (await axios.get(`/api/public/paymentlog`+id+`?page=`+page+'&entries='+this.entries+'&to='+this.to+'&from='+this.from));
        this.paymentLogs = res.data;
        console.log(this.paymentLogs);
      }
    }
  }
</script>
