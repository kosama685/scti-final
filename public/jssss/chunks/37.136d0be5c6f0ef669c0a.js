(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{11:function(t,e,a){"use strict";e.a=["January","February","March","April","May","June","July","August","September","October","November","December"]},234:function(t,e,a){"use strict";a.r(e);var s,r,n=a(0),o=a.n(n),i=a(4),c={extends:a(7).a,props:["chartData","options"],data:function(){return{}},mounted:function(){this.renderChart(this.chartData,this.options)},watch:{"chartData.datasets.0.data":function(){this.renderChart(this.chartData,this.options)}}},l=a(11);function d(t,e,a,s,r,n,o){try{var i=t[n](o),c=i.value}catch(t){return void a(t)}i.done?e(c):Promise.resolve(c).then(s,r)}function u(t){return function(){var e=this,a=arguments;return new Promise((function(s,r){var n=t.apply(e,a);function o(t){d(n,s,r,o,i,"next",t)}function i(t){d(n,s,r,o,i,"throw",t)}o(void 0)}))}}function b(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function v(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?b(Object(a),!0).forEach((function(e){h(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function h(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function p(t){return function(t){if(Array.isArray(t))return f(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);"Object"===a&&t.constructor&&(a=t.constructor.name);if("Map"===a||"Set"===a)return Array.from(t);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return f(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,s=new Array(e);a<e;a++)s[a]=t[a];return s}var _=(h(r={components:{BarChart:c,PackageModel:function(){return a.e(26).then(a.bind(null,323))}},data:function(){return{selectedYear:"2021",months:[],totalJob:0,joblogs:{},notificationLogs:{},loaded:!0,dashboard:{},user_name:"",loadedPage:!0,jobApplied:"",chartData:{labels:l.a,datasets:[{label:"Jobs Created Per Month",data:[],backgroundColor:["#23c0e9"],borderColor:["#23c0e9"],borderWidth:.5,minBarLength:2}]},options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}},chartOptionsBar:{xAxis:{data:p(l.a)},yAxis:{type:"value"},series:[{type:"bar",data:[10,10]}]}}},computed:v(v({},Object(i.d)("admin",["home"])),{},{years:function(){for(var t=new Date,e=t.getFullYear(),a=new Date(t.setFullYear(t.getFullYear()-5)).getFullYear(),s=[],r=e;r>=a;r--)s.push(r);return s}}),watch:{},created:function(){var t=this;return u(o.a.mark((function e(){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getJobLogs();case 2:return t,a=window.localStorage.getItem("loadedFirstTime"),console.log(a),e.next=7,t.getDashboardStatics();case 7:"true"==a&&(window.localStorage.setItem("loadedFirstTime",!1),t.loadOnce());case 8:case"end":return e.stop()}}),e)})))()},beforeMount:function(){}},"watch",(h(s={search:function(t,e){this.fetch()},selectedYear:function(){this.getDashboardStatics()},chartData:function(t){alert()}},"search",(function(t,e){this.getJobLogs()})),h(s,"entries",(function(t,e){this.getJobLogs()})),s)),h(r,"methods",v(v({},Object(i.b)("admin",["getAll"])),{},{check:function(){alert()},loadOnce:function(){location.reload()},getDashboardStatics:function(){var t=this;return u(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,axios.get("/api/admin/dashboardStatic?year="+t.selectedYear);case 2:t.dashboard=e.sent.data,t.chartData.datasets[0].data=t.dashboard.graphdata,t.totalJob=t.dashboard.job_count,t.jobApplied=t.dashboard.job_applied,t.notificationLogs=t.dashboard.notificationLog,t.user_name=t.dashboard.user_name,localStorage.setItem("uuid",t.dashboard.uuid),console.log("user name is",t.user_name);case 10:case"end":return e.stop()}}),e)})))()},getJobLogs:function(){var t=arguments,e=this;return u(o.a.mark((function a(){var s;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.length>0&&void 0!==t[0]?t[0]:1,a.next=3,axios.get("/api/admin/index_job");case 3:s=a.sent,e.joblogs=s,console.log("data is",e.joblogs);case 6:case"end":return a.stop()}}),a)})))()},onChange:function(t){this.getJobLogs()}})),r),m=a(1),g=Object(m.a)(_,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content-wrapper"},[a("div",{staticClass:"content-body"},[a("section",{attrs:{id:"configuration"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("div",{},[a("div",{staticClass:"card-content collapse show"},[a("div",{staticClass:"card-dashboard p-0"},[a("div",{staticClass:"cd-inner"},[t._m(0),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-4 col-md-4 col-12 mx-auto"},[a("div",{staticClass:"box up-box"},[a("div",{staticClass:"media align-items-center"},[a("img",{staticClass:"img-fluid",attrs:{src:t.base_url+"/assets/business/images/d-1.png",alt:""}}),t._v(" "),t._m(1),t._v(" "),a("h2",[t._v(t._s(t.totalJob))])])])]),t._v(" "),a("div",{staticClass:"col-xl-4 col-md-4 col-12 mx-auto"},[a("div",{staticClass:"box up-box"},[a("div",{staticClass:"media align-items-center"},[a("img",{staticClass:"img-fluid",attrs:{src:t.base_url+"/assets/business/images/d-1.png",alt:""}}),t._v(" "),t._m(2),t._v(" "),a("h2",[t._v(t._s(t.jobApplied))])])])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 mx-auto text-center"},[a("router-link",{staticClass:"btn-green-pckg px-4",attrs:{to:{name:"businessOwner.jobs.index"}}},[t._v("\n                                                View All Jobs")]),t._v(" "),a("a",{staticClass:"btn-green-outline px-3 mx-3",attrs:{href:"#","data-toggle":"modal","data-target":"#change_package"}},[t._v("Update My Package")])],1)]),t._v(" "),a("div",{staticClass:"clearfix"}),t._v(" "),a("div",{staticClass:"maain-tabble table-responsive"},[a("table",{staticClass:"table table-striped table-bordered zero-configuration"},[t._m(3),t._v(" "),a("tbody",[t._l(t.joblogs.data,(function(e,s){return a("tr",{key:s},[a("td",[t._v(t._s(s))]),t._v(" "),a("td",[t._v(t._s(e.job_title))]),t._v(" "),a("td",[t._v(t._s(t.formatDate(e.created_at)))]),t._v(" "),a("td",[t._v(t._s(e.status_count_applied))]),t._v(" "),a("td",[t._v(t._s(e.status_count_interested))]),t._v(" "),a("td",[t._v(t._s(e.status_count_rejected))]),t._v(" "),a("td",[t._v(t._s(e.status?"open":"closed"))]),t._v(" "),a("td",[a("div",{staticClass:"btn-group mr-1 mb-1"},[t._m(4,!0),t._v(" "),a("div",{staticClass:"dropdown-menu",attrs:{"x-placement":"bottom-start"}},[a("router-link",{staticClass:"dropdown-item",attrs:{to:{name:"businessOwner.jobs.candidate.index",params:{id:e.id}}}},[a("i",{staticClass:"fa fa-user-circle"}),t._v("View Candidate")]),t._v(" "),a("router-link",{staticClass:"dropdown-item",attrs:{to:{name:"businessOwner.jobs.show",params:{id:e.id}}}},[a("i",{staticClass:"fa fa-eye"}),t._v("View ")]),t._v(" "),a("router-link",{staticClass:"dropdown-item",attrs:{to:{name:"businessOwner.jobs.editStatus",params:{id:e.id}}}},[a("i",{staticClass:"fas fa-edit"}),t._v("Edit Status")])],1)])])])})),t._v(" "),void 0!==t.joblogs.data&&0==t.joblogs.data.length?a("tr",[a("td",{attrs:{colspan:"8"}},[t._v("\n                                                      No Data Available\n                                                    ")])]):t._e()],2)])])])])])])])])])]),t._v(" "),a("package-model")],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("h1",[this._v("business owner dashboard")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"media-body"},[e("h3",[this._v("Total Actively "),e("br"),this._v("Job")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"media-body"},[e("h3",[this._v("Number Of "),e("br"),this._v("Applicants")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("s.no")]),t._v(" "),a("th",[t._v("Job Title")]),t._v(" "),a("th",[t._v("Date Posted")]),t._v(" "),a("th",[t._v("New Applicants")]),t._v(" "),a("th",[t._v("Interested")]),t._v(" "),a("th",[t._v("Rejected")]),t._v(" "),a("th",[t._v("Status")]),t._v(" "),a("th",[t._v("Action")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"btn btn-drop-table btn-sm",attrs:{type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[e("i",{staticClass:"fa fa-ellipsis-v"})])}],!1,null,null,null);e.default=g.exports}}]);