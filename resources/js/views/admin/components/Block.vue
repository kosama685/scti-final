<template>
    <!--activeModal -->
    <div class="modal fade modal-custom" id="blockPopup" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
    	 <div class="modal-dialog modal-lgg">
    	<div class="modal-content">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
                    <div class="payment-modal-main">
                        <div class="payment-modal-inner">
                            <img :src="`${base_url}/assets/images/check.png`" class="img-fluid" alt="">
                            <h1>Confirmation</h1>

                                <div class="row">
                                    <div class="col-12">
										<p class="blocked-text">{{message}}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12 text-center blk-btn-wrp">
                                        <a @click="blockUser" class="blocked-button green-btn">{{successButtonText}}</a>
                                        <a href="#" class="grey-btn" data-dismiss="modal" aria-label="Close">No</a>
                                        <!-- <button type="submit" class="green-btn" data-dismiss="modal" aria-label="Close">View List </button> -->
                                    </div>
                                </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
       <!--  <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <i class="fa fa-times-circle"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="blocked-modal-main-wrapper text-center">
                        <div class="img-wrapper text-center">
                            <img :src="'/assets/images/blockeduser.png'" alt="">
                            <p>{{message}}</p>
                        </div>
                        <a @click="blockUser" class="blocked-button go-live-btn">{{successButtonText}}</a>
                        <a href="javascript:void(0)" data-dismiss="modal" class="cancel-button">No</a>
                    </div>
                </div>
            </div>
        </div> -->

</template>
<script>
export default {
	props: {
	  message : {
	    type: String,
	    required: true,
	    default : 'Are you sure! do you want to block this users ?',
	  },
	  primaryKey : {
	    required : true,
	  },
	  table : {
	    type: String,
	    required : true,
	  },
	  successButtonText : {
	  	type : String,
	  	default : 'Yes',
	  }
	},
	methods: {
	   async blockUser() {
	    let response = await axios.post(`/api/admin/${this.table}`,{id : this.primaryKey});
	    this.$snotify.success(response.data.message);
	    window.$('#blockPopup').modal('hide');
	    this.$emit('delete');
	  }
	}
}

</script>
