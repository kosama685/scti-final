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
                      <h1 class="m-0 ch"><router-link :to="{name :'admin.dashboard'}"><i class="fa fa-angle-left"></i>Network & Training</router-link></h1>
                    </div>
                    <div class="col-md-6 col-12 text-right">
                      <a href="" class="green-btn m-0 text-center" data-toggle="modal" data-target=".addCategory-modal">Add New</a>
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
                        <button type="button" @click='getCategory()' class="green-btn w-100">apply/clear</button>
                      </div>
                    </div>
                  </div>


                  <div class="clearfix"></div>
                  <div class="maain-tabble table-responsive">
                    <table class="table table-striped table-bordered zero-configuration">
                      <thead>
                        <tr>
                          <th>s.no</th>
                          <th>Program ID</th>
                          <th>Program Title</th>
                          <th>Date</th>
                          <th>Time</th>
                          <th>Charges</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr :key="index" v-for="(networktraining,index) in networktrainings.data">
                          <td>0{{index}}</td>
                          <td>{{networktraining.id}}</td>
                          <td>{{networktraining.program_name}} </td>
                          <td>{{formatDate(networktraining.date)}}</td>
                          <td>{{networktraining.time}}</td>
                          <td>${{networktraining.charges}}</td>
                          <td>
                            <div class="btn-group mr-1 mb-1">
                              <button type="button" class="btn btn-drop-table btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="fa fa-ellipsis-v"></i></button>
                              <div class="dropdown-menu" x-placement="bottom-start">
                                <a class="dropdown-item" @click="EditNetworkTraining(networktraining)" data-toggle="modal" data-target=".updateCategory-modal"><i class="fa fa-edit"></i>Edit</a>
                                <a class="dropdown-item" @click="ViewNetworkTraining(networktraining)" data-toggle="modal" data-target=".view-modal"><i class="fa fa-eye"></i>View</a>

                              </div>
                            </div>
                          </td>

                        </tr>
                        <tr v-if="typeof networktrainings.data != 'undefined' && networktrainings.data.length == 0">
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
      <add-network-training></add-network-training>
      <edit-network-training :editnetworktrainings="editnetworktrainings"></edit-network-training>
      <view-network-training :editnetworktrainings="editnetworktrainings"></view-network-training>
    </div>
  </div>
</template>
<script>

  const AddNetworkTraining = () => import('./AddNetworkingTraining.vue');
  const EditNetworkTraining = () => import('./EditNetworkTraining.vue');
  const ViewNetworkTraining = () => import('./ViewNetworkTraining.vue');
  export default{
    data() {
      return {
       networktrainings: {},
       editnetworktrainings: {},
       entries: 10,
       from: '',
       to: '',
     };
   },
   components: {
    AddNetworkTraining,
    EditNetworkTraining,
    ViewNetworkTraining,

  },
  async created() {
    await this.getCategory();

  },
  methods:{
    async getCategory(page = 1) {
      let res = (await axios.get('/api/admin/networktraining?page='+page+'&entries='+this.entries+'&from='+this.from+'&to='+this.to));
      this.networktrainings = res.data;
      console.log(this.networktrainings);
    },
    EditNetworkTraining(obj) {
      console.log(obj);
      this.editnetworktrainings = obj;
    },
    ViewNetworkTraining(obj) {
      console.log(obj);
      this.editnetworktrainings = obj;
    },
  }
}
</script>
