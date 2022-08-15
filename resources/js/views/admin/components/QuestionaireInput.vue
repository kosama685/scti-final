<template>
	<div class="row">
		<div class="col-lg-6">
			<label for="#">
			Value</label>
			<input class="w-100 d-block form-control input-edit-job-details-fields" type="number" :name="'value_'+inputQuestionValue+'[]'" placeholder="Enter Value">
		</div>
	</div>
</template>

<script type="text/javascript">
	
	export default{
		props: {
			inputQuestionValue : {
				type: Number,
				required : true,
			},
		},
	}
</script>