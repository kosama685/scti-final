(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{276:function(t,a,s){"use strict";s.r(a);var e=s(0),o=s.n(e);function n(t,a,s,e,o,n,r){try{var i=t[n](r),c=i.value}catch(t){return void s(t)}i.done?a(c):Promise.resolve(c).then(e,o)}function r(t){return function(){var a=this,s=arguments;return new Promise((function(e,o){var r=t.apply(a,s);function i(t){n(r,e,o,i,c,"next",t)}function c(t){n(r,e,o,i,c,"throw",t)}i(void 0)}))}}var i={data:function(){return{joblogs:{},search:"",employeeCount:0,instituteCount:0,entries:10,status:0,message:"",primaryKey:0,successButtonText:"",institute:"",package:"",from:"",to:""}},created:function(){var t=this;return r(o.a.mark((function a(){return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t.getPaymentLogs();case 2:case"end":return a.stop()}}),a)})))()},methods:{getPaymentLogs:function(){var t=arguments,a=this;return r(o.a.mark((function s(){var e,n,r;return o.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return e=t.length>0&&void 0!==t[0]?t[0]:1,n=a.$route.params.id?"/"+a.$route.params.id:"",s.next=4,axios.get("/api/admin/joblog"+n+"?page="+e+"&entries="+a.entries+"&to="+a.to+"&from="+a.from);case 4:r=s.sent,a.joblogs=r.data,console.log(a.joblogs);case 7:case"end":return s.stop()}}),s)})))()}}},c=s(1),l=Object(c.a)(i,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content-wrapper"},[s("div",{staticClass:"content-body"},[s("section",{attrs:{id:"configuration"}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"card rounded pad-20"},[s("div",{staticClass:"card-content collapse show"},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("h1",[s("router-link",{attrs:{to:{name:"AdminHome"}}},[s("i",{staticClass:"fa fa-angle-left"}),t._v("Job Listing")])],1)])]),t._v(" "),s("div",{staticClass:"top mt-5"},[t._m(0),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-xl-2 col-md-4 col-sm-6 col-12"},[s("date-picker",{attrs:{valueType:"format"},model:{value:t.from,callback:function(a){t.from=a},expression:"from"}})],1),t._v(" "),s("div",{staticClass:"col-xl-2 col-md-4 col-sm-6 col-12"},[s("date-picker",{attrs:{valueType:"format"},model:{value:t.to,callback:function(a){t.to=a},expression:"to"}})],1),t._v(" "),s("div",{staticClass:"col-xl-2 col-md-4 col-12"},[s("button",{staticClass:"green-btn w-100",attrs:{type:"button"},on:{click:function(a){return t.getPaymentLogs()}}},[t._v("apply/clear")])])])]),t._v(" "),s("div",{staticClass:"clearfix"}),t._v(" "),s("div",{staticClass:"maain-tabble table-responsive"},[s("table",{staticClass:"table table-striped table-bordered zero-configuration"},[t._m(1),t._v(" "),s("tbody",[t._l(t.joblogs.data,(function(a,e){return s("tr",{key:e},[s("td",[t._v(t._s(e))]),t._v(" "),s("td",[t._v(t._s(a.user_id))]),t._v(" "),s("td",[t._v(t._s(a.id))]),t._v(" "),s("td",[t._v(t._s(a.job_title))]),t._v(" "),s("td",[t._v(t._s(t.formatDate(a.created_at)))]),t._v(" "),s("td",[t._v(t._s(t.formatDate(a.apply_before)))]),t._v(" "),s("td",[t._v(t._s(a.status?"open":"closed"))]),t._v(" "),s("td",[s("div",{staticClass:"btn-group mr-1 mb-1"},[t._m(2,!0),t._v(" "),s("div",{staticClass:"dropdown-menu",attrs:{"x-placement":"bottom-start"}},[s("router-link",{staticClass:"dropdown-item",attrs:{to:{name:"admin.job.candidate",params:{id:a.id}}}},[s("i",{staticClass:"fa fa-user-circle"}),t._v("View Candidate")]),t._v(" "),s("router-link",{staticClass:"dropdown-item",attrs:{to:{name:"admin.job.show",params:{id:a.id}}}},[s("i",{staticClass:"fa fa-eye"}),t._v("View ")])],1)])])])})),t._v(" "),void 0!==t.joblogs.data&&0==t.joblogs.data.length?s("tr",[s("td",{attrs:{colspan:"8"}},[t._v("\n                                                      No Data Available\n                                                    ")])]):t._e()],2)])])])])])])])])])])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("label",{attrs:{for:""}},[this._v("sort by :")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("thead",[s("tr",[s("th",[t._v("s.no")]),t._v(" "),s("th",[t._v("business owner ID")]),t._v(" "),s("th",[t._v("Job Id")]),t._v(" "),s("th",[t._v("Job title")]),t._v(" "),s("th",[t._v("Posted On")]),t._v(" "),s("th",[t._v("Apply Before")]),t._v(" "),s("th",[t._v("Status")]),t._v(" "),s("th",[t._v("Action")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("button",{staticClass:"btn btn-drop-table btn-sm",attrs:{type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[a("i",{staticClass:"fa fa-ellipsis-v"})])}],!1,null,null,null);a.default=l.exports}}]);