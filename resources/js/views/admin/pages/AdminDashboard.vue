<template>
	<!--    <style>
      .container {
      width: 700px ;
      margin-left: auto ;
      margin-right: auto ;
      padding-top: 10%;
      }
  </style> -->
  <div class="content-wrapper">
  	<div class="content-body">
  		<!-- Basic form layout section start -->
  		<section id="configuration">
  			<div class="row">
  				<div class="col-12">
  					<div class="">
  						<div class="card-content collapse show">
  							<div class="card-dashboard">
  								<div class="row">
  									<div class="col-12">
  										<h1>public dashboard</h1>
  									</div>
  								</div>
  								<div class="row justify-content-center">
  									<div class="col-xl-6 col-12 d-flex w-100  ">
  										<div class="box up-box">
  											<div class="media align-items-center">
  												<img :src="`${base_url}/assets/images/d-1.png`" class="img-fluid" alt="">
  												<div class="media-body">
  													<h3>Registered <br>Users</h3>
  												</div>
  												<h2>{{totalRegisterUser}}</h2>
  											</div>
  										</div>
  									</div>
  									<div class="col-xl-6 col-12 d-flex w-100 ">
  										<div class="box up-box">
  											<div class="media align-items-center">
  												<img :src="`${base_url}/assets/images/d-2.png`" class="img-fluid" alt="">
  												<div class="media-body">
  													<h3>Registered <br>Business <br>Owners</h3>
  												</div>
  												<h2>{{totalRegisterBusiness}}</h2>
  											</div>
  										</div>
  									</div>

  								</div>

  								<div class="row">
  									<div class="col-12 col-xl-12 d-flex w-100">
  										<div class="box">
  											<div class="text-center">
  												<h6 class="qs">Quick Stats</h6>
  											</div>
  											<div class="row">
  												<div class="col-md-6 col-12 text-center">
  													<div class="c100 p80 big light-bloo"> <span>{{revenue_per_month}} $</span>
  														<div class="slice">
  															<div class="bar"></div>
  															<div class="fill"></div>
  														</div>
  													</div>
  													<h6 class="h6-cir">Average Users/ Month</h6>
  												</div>
  												<div class="col-md-6 col-12 text-center">
  													<div class="c100 p75 big bloo"> <span>{{revenue_per_year}} $ </span>
  														<div class="slice">
  															<div class="bar"></div>
  															<div class="fill"></div>
  														</div>
  													</div>
  													<h6 class="h6-cir">Average Users/ Year</h6>
  												</div>
  											</div>
  										</div>
  									</div>
  								</div>

  								<div class="chart-bar box bottom">
  									<div class="row">
  										<div class="col-12 col-lg-6 ">
  											<h2>Revenue Generated Per Year</h2>
  										</div>
  										<div class="col-12 col-lg-6 text-right">
  											<select v-model="selectedYear">
  												<option v-for="year in years" :value="year">{{ year }}</option>
  											</select>
  										</div>
  									</div>
  									<div class="row">
  										<div class="col-12">
  											<div class="chart-main position-relative">

  												<div class="row">
  													<div class="col-xl-1 col-12">
  														<h4 class="basic-txt">Revenue</h4>
  													</div>
  													<div class="col-12 col-xl-11">
  														<bar-chart  chart:render="check"
  														:chartData="chartData"
  														:options="options"></bar-chart>
  													</div>
  													<div class="col-12 text-align-center">
  														<h4 class="m_tag">Months</h4>
  													</div>
  												</div>
  											</div>
  										</div>
  									</div>

  								</div>

  								<div class="row mt-5">
  									<div class="col-12">
  										<h4 class="act_h">Latest Notifications</h4>
  									</div>
  									<div class="col-12 mt-5">
  										<div class="maain-tabble table-responsive dash-table">
  											<table class="table table-striped table-bordered zero-configuration">
  												<thead>
  													<tr>
  														<th>Body</th>
  														<th>Title</th>
  														<!-- <th>Time</th> -->

  													</tr>
  												</thead>
  												<tbody>
  													 <tr v-for="notificationLog in notificationLogs">
  														<td>{{notificationLog.body}}</td>
  														<td>{{notificationLog.title}}</td>
  														<!-- <td>{{)}}</td> -->

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
  			</div>
  		</section>
  	</div>
  </div>
</template>
<script>
import { Bar } from 'vue-chartjs'
import LineChart from '../components/eChart.js';
import {mapActions, mapState} from 'vuex';
// const EmployeeTable = ()=> import('./components/EmployeeTable.vue');
import BarChart from './BarChart'

import allMonths from '@core/months.js';

export default {
        // extends: Bar,
        components: {
        	BarChart
        },
        data(){	
        	return {
        		selectedYear: '2021',
        		datacollection: null,
        		totalRegisterUser: 0,
				revenue_per_month: '',
				revenue_per_year: '',
        		totalRegisterBusiness: 0,
        		notificationLogs: {},
        		dashboard: {},
        		selectedYear: (new Date()).getFullYear(),
        		base_url: window.base_url,
        		isLoading: true,
        		data: { available_years:[] },
        		chartData: {
        			labels: allMonths,
        			datasets: [{
        				label: 'Jobs Created Per Month',
        				data: [],
        				backgroundColor: [
        				'#23c0e9',
        				],
        				borderColor: [
        				'#23c0e9',
        				],
        				borderWidth: 0.5,
        				minBarLength: 2,
        			}]
        		},
        		options: {
        			scales: {
        				yAxes: [{
        					ticks: {
        						beginAtZero: true
        					}
        				}]
        			}
        		},
        		chartOptionsBar: {
        			xAxis: {
        				data: [...allMonths],
        			},
        			yAxis: {
        				type: 'value',
        			},
        			series: [{
        				type: 'bar',
        				data: [10, 10],
        			}]
        		}
        	}
        },
        async created() {

        	await this.getDashboardStatics();
        	let self = this;
        	let loadedPage = window.localStorage.getItem('loadedFirstTime');
        	console.log(loadedPage);
        	if(loadedPage == 'true'){
        		window.localStorage.setItem('loadedFirstTime',false);
        		this.loadOnce();

        	}
        },
        computed: {
        	...mapState('admin', ['home']),

        	years: () => {
        		let today = new Date();
        		let currentYear = today.getFullYear();
        		let last10Years = new Date(today.setFullYear(today.getFullYear() - 5)).getFullYear();
        		let years = [];
        		for (var i = currentYear; i >= last10Years; i--) {
        			years.push(i);
        		}
        		return years;
        	},
        },
        methods: {

        	async getDashboardStatics() {
        		this.dashboard = (await axios.get(`/api/admin/adminDashboardStatic?year=` + this.selectedYear)).data;
        		this.chartData.datasets[0].data = this.dashboard.graphdata;
        		this.totalRegisterUser = this.dashboard.totalRegisterUser;
				this.revenue_per_month = this.dashboard.revenue_per_month;
				this.revenue_per_year = this.dashboard.revenue_per_year;
        		this.totalRegisterBusiness = this.dashboard.totalRegisterBusiness;
        		this.totalJob = this.dashboard.totalJob;
        		this.notificationLogs = this.dashboard.notificationLog;
        	},
        	// loadUserChartData(){
        	// 	this.polar.series = [];
        	// 	this.polar.series.push({
        	// 		name: 'Precipitation',
        	// 		type: 'bar',
        	// 		data: data.data.users_chart_data
        	// 	})
        	// },

        	ordinal_suffix_of(i) {
        		const j = i % 10,
        		k = i % 100;
        		let suffix = "th";
        		if (j === 1 && k !== 11) {
        			suffix = "st";
        		}
        		if (j === 2 && k !== 12) {
        			suffix = "nd";
        		}
        		if (j === 3 && k !== 13) {
        			suffix =  "rd";
        		}

        		return suffix;
        	}
        },
        watch: {
        	selectedYear() {
        		this.getDashboardStatics();
        	},
        	chartData(val) {
        		alert();
        	}
        }
    };
    
    </script>

    <style>
    .echarts {
    	width: 100%;
    	/*height: 250px;*/
    	height: 100%;
    }

    .small {
    	max-width: 100%;
    	margin:  150px auto;
    }
    </style>
