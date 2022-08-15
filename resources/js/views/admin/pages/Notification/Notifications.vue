<template>
	<div class="content-wrapper all-notifications">
		<div class="content-body">
			<section id="configuration" class="search view-cause">
				<div class="row">
					<div class="col-12">
						<div class="">
							<div class=" pad-20">
								<div class="card-content collapse show">
									<div class="card-body card-dashboard">
										<div class="row">
											<div class="col-12">
												<h1 class="pull-left">Notifications</h1>
											</div>
										</div>
										<div class="row">
											<div class="col-12">
												<div class="noti-inner-cards mb-3">
													<div v-for="notification in notifications.data" class="card">
														<div class="noti-content">
															<div class="media align-items-center d-flex">
																<i class="fa fa-bell-o align-self-start" aria-hidden="true"></i>
																<div class="media-body">
																	<h5>{{notification.data.title}}</h5>
																	<p>{{formatDate(notification.created_at)}}</p>
																	<p>{{formatDate(notification.created_at,'hh:mm A')}}</p>
																</div>
																<div class="noti-right">
																	<router-link :to="notification.data.route">View</router-link>
																</div>
															</div>
														</div>
													</div>
													<no-record tag="div" :data="notifications.data" class="noti-inner-cards mb-3">No Data Available</no-record>
													<pagination :data="notifications" @pagination-change-page="fetch"></pagination>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	</div>
</template>
<script>
import { mapActions, mapState } from 'vuex';
// const EmployeeTable = ()=> import('./components/EmployeeTable.vue');
export default {
	computed: {
		...mapState('admin', ['notifications', 'search','bell_notifications']),
	},
	components: {
		// EmployeeTable,
	},
	created() {
		let { page } = this.$route.query;
		this.fetch(page);
	},
	watch: {
		search: function(val, oldVal) {
			this.fetch();
		},
		bell_notifications(val,oldVal){
			this.fetch();
		}

	},
	methods: {
		...mapActions('admin', ['getAll']),
		async fetch(page = 1) {
			let { status } = this.$route.params;
			let params = {
				route: route('admin.notification.index'),
				mutation: 'SET_NOTIFICATIONS',
				variable: 'notifications',
				data: {
					page,
					status,
					search: this.search,
				}
			};
			let { data } = await this.getAll(params);
			if (page != 1) {
				this.addRouteQuery({ page });
			} else {

				this.addRouteQuery({});
			}
		}
	}
}

</script>
