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
                                        <h1 class="m-0 ch"><router-link :to="{name:'AdminHome'}"><i class="fa fa-angle-left"></i>Category Management</router-link></h1>
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
                                                <th>Category ID</th>
                                                <th>Category Name</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                           <tr :key="index" v-for="(category,index) in categories.data">
                                                <td>0{{index}}</td>
                                                <td>#{{category.id}}</td>
                                                <td>{{category.category_name}} </td>
                                                <td>{{(category.status) ? 'Active' : 'In-Active'}}</td>
                                                <td>
                                                    <div class="btn-group mr-1 mb-1">
                                                        <button type="button" class="btn btn-drop-table btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="fa fa-ellipsis-v"></i></button>
                                                        <div class="dropdown-menu" x-placement="bottom-start">
                                                            <a class="dropdown-item" @click="EditCategory(category)" data-toggle="modal" data-target=".updateCategory-modal"><i class="fa fa-edit"></i>Edit</a>

                                                        </div>
                                                    </div>
                                                </td>

                                            </tr>

                                               <tr v-if="typeof categories.data != 'undefined' && categories.data.length == 0">
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
        <add-category-modal></add-category-modal>
        <edit-category-modal :category="category"></edit-category-modal>
    </div>
</div>
</template>
<script type="text/javascript">
    const AddCategoryModal = () => import('./AddCategoryModal.vue');
    const EditCategoryModal = () => import('./EditCategoryModal.vue');

    export default{
        data() {
          return {
             categories: {},
             entries: 10,
             category: {},
             from:'',
             to:''
          };
      },
      components: {
          AddCategoryModal,
          EditCategoryModal
      },
      async created() {
        await this.getCategory();

      },
      methods:{
        async getCategory(page = 1) {
        let res = (await axios.get('/api/admin/category?page='+page+'&entries='+this.entries+'&from='+this.from+'&to='+this.to));
        this.categories = res.data;
        console.log(this.categories);
      },
       EditCategory(obj) {
        console.log(obj);
        this.category = obj;
      },
      }
  };
</script>
