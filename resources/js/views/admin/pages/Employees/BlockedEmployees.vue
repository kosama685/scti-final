<template>
	<div class="content-wrapper">
		<div class="content-body">
			<!-- Basic form layout section start -->
			<section id="configuration" class="search view-cause">
				<div class="row">
					<div class="col-12">
						<div class="card rounded pad-20">
							<div class="card-content collapse show">
								<div class="card-body  card-dashboard">
									<div class="row">
										<div class="col-md-12 col-12">
											<h1 class="pull-left u-m">
												<router-link class="arrow-left" :to="{name: 'Employees'}">
													<i class="fa fa-chevron-left"></i>
												</router-link>
												Blocked Employers
											</h1>
										</div>
									</div>
									<div class="row">
										<div class="maain-tabble table-responsive mt-5">
											<table class="table table-striped table-bordered zero-configuration">
												<thead>
													<tr>
														<th>S.no</th>
														<th>Employer Id</th>
														<th>Employer name</th>
														<th>Email</th>
														<th>Registration Date</th>
														<th>Action</th>

													</tr>
												</thead>
												<tbody>
													<tr :key="index" v-for="(employee,index) in employees.data">
														<td>{{index}}</td>
														<td>{{employee.id}}</td>
														<td>{{employee.first_name +' ' +employee.last_name  }}</td>
														<td>{{employee.email}}</td>
														<td>{{formatDate(employee.created_at)}}</td>
														<td>
															<div class="btn-group mr-1 mb-1">
																<button type="button" class="btn  btn-drop-table btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="fa fa-ellipsis-v"></i></button>
																<div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(4px, 23px, 0px); top: 0px; left: 0px; will-change: transform;">
																	<router-link class="dropdown-item" :to="{name : 'ViewEmployee',params: { id : employee.id } }"><i class="fa fa-eye"></i>View Profile</router-link>
																	<a class="dropdown-item" href="a-subscription-log.html"><i class="fa fa-th-list"></i>Subscription Log</a>
																	<a class="dropdown-item" href="a-employer-job-log.html"><i class="fa fa-briefcase"></i>Job Log</a>

																	<a class="dropdown-item" data-toggle="modal" href="#blockPopup"
																	@click="BlockPopup(employee)"><i class="fa fa-undo"></i>UN Block</a>
																</div>
															</div>
														</td>
													</tr>
													<tr v-if="typeof employees.data != 'undefined' && employees.data.length == 0">
														<td colspan="9">
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
				</div>
			</section>
		</div>
		<block-popup @delete="blockedEmployee" :successButtonText="successButtonText" :primary-key="primaryKey" table="unblock-employee" :message="message"></block-popup>
	</div>
</template>
<script>
	const BlockPopup = () => import('../../components/Block.vue');
	export default{
		inject: ['formatDate'],
		data() {
			return {
				employees: {},
				search: '',
				entries: 10,
				status: 0,
				message: '',
				primaryKey: 0,
				successButtonText: '',
			};
		},
		components: {
			BlockPopup
		},
		async created() {
			await this.getBlockedEmployees();
		},
		methods: {
			async getBlockedEmployees(page = 1) {
				let res = (await axios.get('/api/admin/blockedEmployee?page='+page+'&entries='+this.entries));
				this.employees = res.data
				console.log(this.employees);
			},

			BlockPopup(obj) {
				console.log(obj);
				this.primaryKey = obj.id;
				this.message = 'Are you sure! do you want to Un-block this User ?';
				this.successButtonText = 'Yes';
			},
			blockedEmployee(block) {
				let blockUserIndex = _.findIndex(this.employees.data, (o) => { return o.id == this.primaryKey });
				Vue.delete(this.employees.data, blockUserIndex);
            // Vue.set(this.articles.data, articleIndex, article);
        },
    }
}
</script>
