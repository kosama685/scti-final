<template>
    <div>

	<router-view></router-view>
        <vue-snotify></vue-snotify>
    </div>

	<!-- <div :class="[{'register loginn':!isLoggedIn},{'':isLoggedIn}]">
	</div> -->
</template>
<script>
	export default{
		data () {
		  return {
		  };
		},
		created(){
		}
	}
</script>
