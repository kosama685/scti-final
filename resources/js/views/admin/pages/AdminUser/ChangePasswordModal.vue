<template>
    <div class="modal fade another-modal updatePass-modal" tabindex="-1" role="dialog"
         aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>
                </button>
                <div class="payment-modal-main">
                    <div class="payment-modal-inner">

                        <div class="row">
                            <div class="col-12 text-center">
                                <h1 class="catHeader">Change Password</h1>
                            </div>
                        </div>
                        <ValidationObserver tag="div" v-slot="{handleSubmit}">
                            <form ref="changePassword" @submit.prevent="handleSubmit(onSubmit,$event)">
                                <div class="form-group row">
                                    <div class="col-sm-4">
                                        <label for="categoryName" class="col-form-label label-cat">Current Password
                                            <span class="requred">*</span></label>
                                    </div>
                                    <div class="col-sm-8 wrap-pm">
                                        <i class="fas fa-eye"></i>
                                        <ValidationProvider tag="div" name="Current Password" rules="required"
                                                            v-slot="{errors}">
                                            <input name="current_password" v-model="current_password" type="password"
                                                   class="form-control cat-input" placeholder="Enter Current Password">
                                            <div class="text-danger">{{ errors[0] }}</div>
                                        </ValidationProvider>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="col-sm-4">
                                        <label for="categoryName" class="col-form-label label-cat">New Password <span
                                            class="requred">*</span></label>
                                    </div>
                                    <div class="col-sm-8 wrap-pm">
                                        <i class="fas fa-eye"></i>
                                        <ValidationProvider tag="div" name="New Password"
                                                            rules="required|confirmed:confirmation" v-slot="{errors}">

                                            <input v-model="new_password" name="password" type="password"
                                                   class="form-control cat-input" placeholder="Enter New Password">
                                            <div class="text-danger">{{ errors[0] }}</div>
                                        </ValidationProvider>

                                    </div>
                                </div>

                                <div class="form-group row">
                                    <div class="col-sm-4">
                                        <label for="categoryName" class="col-form-label label-cat">Confirm Password
                                            <span class="requred">*</span></label>
                                    </div>
                                    <div class="col-sm-8 wrap-pm">
                                        <i class="fas fa-eye"></i>
                                        <ValidationProvider tag="div" name="confirmation" rules="required"
                                                            vid="confirmation" v-slot="{errors}">

                                            <input name="password_confirmation" v-model="confirmation" type="password"
                                                   class="form-control cat-input" placeholder="Enter Re-Type Password">
                                            <div class="text-danger">{{ errors[0] }}</div>
                                        </ValidationProvider>

                                    </div>
                                </div>


                                <div class="form-group row">
                                    <div class="col-12 text-center">

                                        <button type="submit" class="network-btn green-btn m-0">Update</button>
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
import $ from 'jquery'

export default {
    data() {
        return {
            confirmation: '',
            new_password: '',
            current_password: '',
        };
    },
    methods: {
        async onSubmit(e) {
            let fd = new FormData(this.$refs.changePassword);
            let response = await axios.post('api/admin/changePassword', fd);
            console.log(response);
            if (response.data.data) {
                var self = this;
                this.$snotify.success(response.data.message);
                window.$('.updatePass-modal').modal('hide');
                // this.$refs.changePassword.reset();
                this.forceRerender();

            } else {
                this.$snotify.error(response.data.message, 'Oops!');
            }
        },
        forceRerender() {
            this.$parent.componentKey += 1;
        }
    }
}

</script>
