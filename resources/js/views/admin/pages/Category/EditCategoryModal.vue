<template>
<div class="modal fade another-modal updateCategory-modal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lgg">
                <div class="modal-content">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
                    <div class="payment-modal-main">
                        <div class="payment-modal-inner">

                            <div class="row">
                                <div class="col-12 text-center">
                                    <h1 class="catHeader">Update Category</h1>
                                </div>
                            </div>
                            <ValidationObserver tag="div" v-slot="{handleSubmit}">
                            <form ref="addCategory" @submit.prevent="handleSubmit(addCategory,$event)">
                                <div class="form-group row">
                                    <div class="col-sm-4">
                                        <label for="categoryName" class="col-form-label label-cat">Category Name*</label>

                                    </div>
                                    <div class="col-sm-8">
                                    	 <ValidationProvider tag="div" name="category_name" rules="required" vid="category_name" v-slot="{errors}">
                                        <input type="text" class="form-control cat-input" v-model="category.category_name" name="category_name" id="category_name" placeholder="Enter Category Name">
                                         <div class="text-danger">{{errors[0]}}</div>
                                        </ValidationProvider>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="col-sm-4">
                                        <label for="status" class="col-form-label label-cat">Status*</label>

                                    </div>
                                    <div class="col-sm-8">
                                    	<ValidationProvider tag="div" name="status"  vid="status" v-slot="{errors}">
                                        <select name="status" class="sel-cat" id="status">
                                            <option value="1">Active</option>
                                            <option value="0">InActive</option>
                                        </select>
                                         <div class="text-danger">{{errors[0]}}</div>
                                        </ValidationProvider>
                                    </div>
                                </div>
                                <ValidationProvider tag="div" name="id" vid="id" v-slot="{errors}">
                                      <input type="hidden" name="id" v-model="category.id">
                                         <div class="text-danger">{{errors[0]}}</div>
                                        </ValidationProvider>



                                <div class="form-group row">
                                    <div class="col-12 text-center">

                                        <button type="submit" class="green-btn m-0">Update Category</button>
                                    </div>

                                </div>
                            </form>
                            </ValidationObserver>

                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
export default {
	props: {
		category:{
		  type: Object,
	       required : true,
		}
	},
     data() {
          return {
            category_name: '',
            status: '',
            id: '',
          };
      },
    methods: {
       async addCategory() {
        let fd = new FormData(this.$refs.addCategory);
        console.log(fd);
        let response = await axios.post(`/api/admin/category/update`,fd);
        this.$snotify.success(response.data.message);
        window.$('.updateCategory-modal').modal('hide');
        window.location.reload();
      }
    }
};
</script>
