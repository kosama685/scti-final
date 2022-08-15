<template>
	<li class="dropdown dropdown-notification nav-item"> <a class="nav-link nav-link-label " href="#" data-toggle="dropdown"><i class="fa fa-bell"><span class="badge badge-pill badge-default badge-danger badge-default badge-up">{{notification_count}}</span></i>
		</a>
		<ul class="dropdown-menu dropdown-menu-media dropdown-menu-right">
			<li class="dropdown-menu-header">
				<h6 class="dropdown-header m-0"> <span class="grey darken-2">Notifications</span> <span class="notification-tag badge badge-default bg-dark float-right m-0">{{notification_count}} New</span> </h6>
			</li>
			<li class="scrollable-container media-list ps-container ps-theme-dark ps-active-y" data-ps-id="cbae8718-1b84-97ac-6bfa-47d792d8ad89">
				<div v-for="notification in bell_notifications" class="media">
					<a href="javascript:void(0)">
						<i class="fas fa-bell"></i>
					</a>
					<div class="media-body">
						<router-link :to="notification.data.route">
							<p class="notification-text font-small-3 text-muted"><span>{{notification.data.title}}</span><br>{{formatDate(notification.created_at,'hh:mm A')}}<small class="float-right">{{formatDate(notification.created_at)}}</small></p>
						</router-link>
					</div>
					<a @click="markRead(notification.id)" href="javascript:void(0)"><i class="fa fa-eye"></i></a>
				</div>
			</li>
			<li class="dropdown-menu-footer"><router-link class="dropdown-item text-muted text-center" :to="{name : viewAllLink}">View all</router-link></li>
		</ul>
	</li>
</template>
<script>
import { mapState,mapActions} from 'vuex';
export default {
    props: {
        viewAllLink: {
            type: String, // String, Number, Boolean, Function, Object, Array
            required: false,
            default: 'admin.notifications.index'
        },
    },
	computed: {
		...mapState('admin', ['bell_notifications', 'notification_count']),
	},
	methods: {
		...mapActions('admin',['store']),
	  async markRead(id) {
	    let params = {
	    	route : route('admin.notification.markRead',{notification : id}),
	    	method : 'PUT',
	    	mutation : 'MARK_NOTIFICATION_READ',
	    	variable : 'notification',
	    };
	    let {data} = await this.store(params);
	    if(data.status){
	    	this.$snotify.success(data.msg);
	    }
	  }
	}
}

</script>
