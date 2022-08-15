<template>
<div class="modal fade another-modal view-modal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
                    <div class="payment-modal-main vm-padding">
                        <div class="payment-modal-inner ">

                            <div class="row">
                                <div class="col-12 text-center">
                                    <h1 class="catHeader m-0">View</h1>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <p class="vm-text">Training Program {{editnetworktrainings.program_name}}</p>
                                </div>
                                <div class="col-12 d-flex c-f-vm">
                                    <p class="vm-text">Time: <span>{{editnetworktrainings.time}}</span></p>
                                    <p class="vm-text ml-3">Date: <span>{{formatDate(editnetworktrainings.date)}}</span></p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                <p class="vm-text">Charges: <span>${{editnetworktrainings.charges}}</span></p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                <p class="vm-text">Venue: <span>{{editnetworktrainings.venue}}</span></p>
                                <p class="description-vm">Description:<span>{{editnetworktrainings.description}}</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
	export default {
	props: {
		editnetworktrainings:{
		  type: Object,
	       required : true,
		}
	}
}
</script>
