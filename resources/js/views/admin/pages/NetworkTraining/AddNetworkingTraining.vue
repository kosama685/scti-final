<template>
    <!--activeModal -->
   <div class="modal fade another-modal addCategory-modal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
                    <div class="payment-modal-main">
                        <div class="payment-modal-inner">

                            <div class="row">
                                <div class="col-12 text-center">
                                    <h1 class="catHeader">Add</h1>
                                </div>
                            </div>
                            <ValidationObserver tag="div" v-slot="{handleSubmit}">
                            <form ref="addNetowkTraining" @submit.prevent="handleSubmit(addNetowkTraining,$event)">

                                <div class="form-group row">
                                    <div class="col-sm-4">
                                        <label for="categoryName" class="col-form-label label-cat">Program Name</label>

                                    </div>
                                    <div class="col-sm-8">
                                        <ValidationProvider tag="div" name="program_name" rules="required" vid="program_name" v-slot="{errors}">
                                        <input type="text" class="form-control cat-input" v-model="program_name" name="program_name" id="program_name" placeholder="Enter Category Name">
                                        <div class="text-danger">{{errors[0]}}</div>
                                        </ValidationProvider>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="col-sm-4">
                                        <label for="status" class="col-form-label label-cat">Time</label>

                                    </div>
                                    <div class="col-sm-8">
                                        <ValidationProvider tag="div" name="time" rules="required" vid="time" v-slot="{errors}">
                                        <input type="time" class="form-control cat-input" id="time" name="time" v-model='time' placeholder="Enter Time">
                                        <div class="text-danger">{{errors[0]}}</div>
                                        </ValidationProvider>

                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="col-sm-4">
                                        <label for="status" class="col-form-label label-cat">Date</label>

                                    </div>
                                    <div class="col-sm-8">
                                        <ValidationProvider tag="div" name="date" rules="required" vid="date" v-slot="{errors}">
                                            <date-picker v-model="date" valueType="format"></date-picker>

                                        <div class="text-danger">{{errors[0]}}</div>
                                    </ValidationProvider>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="col-sm-4">
                                        <label for="status" class="col-form-label label-cat">Charges</label>

                                    </div>
                                    <div class="col-sm-8">
                                        <ValidationProvider tag="div" name="charges" rules="required" vid="charges" v-slot="{errors}">
                                        <input type="number" class="form-control cat-input" name="charges" id="charges" placeholder="Enter Charges" v-model='charges'>
                                        <div class="text-danger">{{errors[0]}}</div>
                                    </ValidationProvider>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="col-sm-4">
                                        <label for="status" class="col-form-label label-cat">Venue</label>

                                    </div>
                                    <div class="col-sm-8">
                                        <ValidationProvider tag="div" name="venue" rules="required" vid="venue" v-slot="{errors}">
                                        <input type="text" class="form-control cat-input" id="venue" placeholder="Enter Venue" name="venue" v-model='venue'>
                                        <div class="text-danger">{{errors[0]}}</div>
                                    </ValidationProvider>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="col-sm-4">
                                        <label for="status" class="col-form-label label-cat">Description</label>

                                    </div>
                                    <div class="col-sm-8">
                                        <ValidationProvider tag="div" name="description" rules="required" vid="description" v-slot="{errors}">
                                            <textarea id="train_desc" class="train_textArea" name="description" rows="4" v-model='description'></textarea>
                                            <div class="text-danger">{{errors[0]}}</div>
                                        </ValidationProvider>
                                    </div>
                                </div>




                                <div class="form-group row">
                                    <div class="col-12 text-center">

                                        <button type="submit" class="network-btn green-btn m-0">Add</button>
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
     data() {
          return {
            category_name: '',
            status: '',
             to: '',
             date:'',
             time: '',
             description:'',
             venue:'',
             program_name:'',
             charges:''
          };
      },
    methods: {
       async addNetowkTraining() {
        let fd = new FormData(this.$refs.addNetowkTraining);
        console.log(fd);

        let response = await axios.post(`/api/admin/networktraining/create`,fd);
        this.$snotify.success(response.data.message);
        window.$('.addCategory-modal').modal('hide');
        window.location.reload();
      }
    }
}
</script>
