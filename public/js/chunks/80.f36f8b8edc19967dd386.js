(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{289:function(t,s,a){"use strict";a.r(s);var l=a(0),e=a.n(l);function o(t,s,a,l,e,o,c){try{var i=t[o](c),r=i.value}catch(t){return void a(t)}i.done?s(r):Promise.resolve(r).then(l,e)}function c(t){return function(){var s=this,a=arguments;return new Promise((function(l,e){var c=t.apply(s,a);function i(t){o(c,l,e,i,r,"next",t)}function r(t){o(c,l,e,i,r,"throw",t)}i(void 0)}))}}var i={data:function(){return{joblogs:{},search:"",employeeCount:0,instituteCount:0,entries:10,status:0,message:"",primaryKey:0,successButtonText:"",institute:"",package:"",from:"",to:"",hit_from:"businessOwner"}},created:function(){var t=this;return c(e.a.mark((function s(){return e.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,t.getPaymentLogs();case 2:case"end":return s.stop()}}),s)})))()},methods:{getPaymentLogs:function(){var t=arguments,s=this;return c(e.a.mark((function a(){var l,o,c;return e.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return l=t.length>0&&void 0!==t[0]?t[0]:1,o=s.$route.params.id?"/"+s.$route.params.id:"",a.next=4,axios.get("/api/admin/candidate/job"+o+"?page="+l+"&entries="+s.entries+"&to="+s.to+"&from="+s.from);case 4:c=a.sent,s.joblogs=c.data.data[0],console.log(s.joblogs);case 7:case"end":return a.stop()}}),a)})))()}}},r=a(1),d=Object(r.a)(i,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content-wrapper"},[a("div",{staticClass:"content-body"},[a("section",{attrs:{id:"configuration"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"card rounded pad-20"},[a("div",{staticClass:"card-content collapse show"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 d-flex align-items-center justify-content-between flex-column flex-md-row "},[a("h1",[a("router-link",{attrs:{to:{name:"businessOwner.jobs.index"}}},[a("i",{staticClass:"fa fa-angle-left"}),t._v("View Jobs")])],1),t._v(" "),t._m(0)])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"card collapse-icon accordion-icon-rotate user_prof_acc user_jobs_acc"},[t._m(1),t._v(" "),a("div",{staticClass:"collapse show",attrs:{id:"collapse11",role:"tabpanel","aria-labelledby":"headingCollapse11"}},[a("div",{staticClass:"card-content"},[a("div",{staticClass:"card-body mt-sm-0 mt-2"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-3 col-lg-4 col-md-6 col-12 t-c"},[a("p",{staticClass:"fieldName-p"},[t._v("Job Category")]),t._v(" "),a("p",{staticClass:"text-v"},[t._v(t._s(t.joblogs.category.category_name))])]),t._v(" "),a("div",{staticClass:"col-xl-3 col-lg-4 col-md-6 col-12 t-c"},[a("p",{staticClass:"fieldName-p"},[t._v("Job Name")]),t._v(" "),a("p",{staticClass:"text-v"},[t._v(t._s(t.joblogs.job_title))])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-3 col-lg-4 col-md-6 col-12 t-c"},[a("p",{staticClass:"fieldName-p"},[t._v("Company Name")]),t._v(" "),a("p",{staticClass:"text-v"},[t._v(t._s(t.joblogs.company_name))])]),t._v(" "),a("div",{staticClass:"col-xl-3 col-lg-4 col-md-6 col-12 t-c"},[a("p",{staticClass:"fieldName-p"},[t._v("Salary Range")]),t._v(" "),a("p",{staticClass:"text-v"},[t._v(t._s(t.joblogs.salary_range))])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-3 col-lg-4 col-md-6 col-12 t-c"},[a("p",{staticClass:"fieldName-p"},[t._v("Posted On")]),t._v(" "),a("p",{staticClass:"text-v"},[t._v(t._s(t.joblogs.created_at))])]),t._v(" "),a("div",{staticClass:"col-xl-3 col-lg-4 col-md-6 col-12 t-c"},[a("p",{staticClass:"fieldName-p"},[t._v("Apply Before")]),t._v(" "),a("p",{staticClass:"text-v"},[t._v(t._s(t.joblogs.apply_before))])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-3 col-lg-4 col-md-6 col-12 t-c"},[a("p",{staticClass:"fieldName-p"},[t._v("Period Of Employment")]),t._v(" "),a("p",{staticClass:"text-v"},[t._v(t._s(t.joblogs.period_of_employment)+"\n                                                                ")])]),t._v(" "),a("div",{staticClass:"col-xl-3 col-lg-4 col-md-6 col-12 t-c"},[a("p",{staticClass:"fieldName-p"},[t._v("Remote")]),t._v(" "),a("p",{staticClass:"text-v"},[t._v(t._s("true"==t.joblogs.remote?"Yes":"No"))])]),t._v(" "),a("div",{staticClass:"col-xl-3 col-lg-4 col-md-6 col-12 t-c"},[a("p",{staticClass:"fieldName-p"},[t._v("Hours of work")]),t._v(" "),a("p",{staticClass:"text-v"},[t._v(t._s(t.joblogs.hours_of_work))])])]),t._v(" "),""!=t.joblogs.file?a("div",{staticClass:"row c-m-v"},[a("div",{staticClass:"col-lg-6 col-md-6 col-12 p-0"},[a("video",{staticClass:"job-video",attrs:{width:"100%",height:"100%",controls:"",src:t.joblogs.file}},[a("source",{attrs:{src:"movie.mp4",type:"video/mp4"}}),t._v(" "),a("source",{attrs:{src:"movie.ogg",type:"video/ogg"}}),t._v("\n                                                                    Your browser does not support the video tag.\n                                                                ")])])]):t._e()])])]),t._v(" "),t._m(2),t._v(" "),a("div",{staticClass:"collapse show",attrs:{id:"collapse12",role:"tabpanel","aria-labelledby":"headingCollapse12","aria-expanded":"true"}},[a("div",{staticClass:"card-content"},[a("div",{staticClass:"card-body mt-sm-0 mt-2"},[a("div",{staticClass:"card-body mt-sm-0 mt-2"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-3 col-lg-4 col-md-6 col-12 t-c"},[a("p",{staticClass:"fieldName-p"},[t._v("Address")]),t._v(" "),a("p",{staticClass:"text-v"},[t._v(t._s(t.joblogs.address))])]),t._v(" "),a("div",{staticClass:"col-xl-3 col-lg-4 col-md-6 col-12 t-c"},[a("p",{staticClass:"fieldName-p"},[t._v("Country")]),t._v(" "),a("p",{staticClass:"text-v"},[t._v(t._s(t.joblogs.country)+" ")])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-3 col-lg-4 col-md-6 col-12 t-c"},[a("p",{staticClass:"fieldName-p"},[t._v("State")]),t._v(" "),a("p",{staticClass:"text-v"},[t._v(t._s(t.joblogs.state)+" ")])]),t._v(" "),a("div",{staticClass:"col-xl-3 col-lg-4 col-md-6 col-12 t-c"},[a("p",{staticClass:"fieldName-p"},[t._v("City")]),t._v(" "),a("p",{staticClass:"text-v"},[t._v(t._s(t.joblogs.city)+" ")])]),t._v(" "),a("div",{staticClass:"col-xl-3 col-lg-4 col-md-6 col-12 t-c"},[a("p",{staticClass:"fieldName-p"},[t._v("Post code")]),t._v(" "),a("p",{staticClass:"text-v"},[t._v(t._s(t.joblogs.zip_code)+" ")])]),t._v(" "),a("div",{staticClass:"col-lg-4 col-md-4 col-12"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"fieldName-p"},[t._v("Employee\n                                                                            Benefits")]),t._v(" "),a("br"),t._v(" "),t._l(t.joblogs.job_benefits,(function(s,l){return a("p",{staticClass:"text-v"},[t._v("\n                                                                            "+t._s(s.employee_benefits))])}))],2)])])])])])]),t._v(" "),t._m(3),t._v(" "),a("div",{staticClass:"collapse show",attrs:{id:"collapse13",role:"tabpanel","aria-labelledby":"headingCollapse13","aria-expanded":"true"}},[a("div",{staticClass:"card-content"},[a("div",{staticClass:"card-body mt-sm-0 mt-2"},[a("div",{staticClass:"row mt-md-1"},[a("div",{staticClass:"col-lg-12 col-md-12 col-12 t-c"},[a("p",{staticClass:"fieldName-p"},[t._v("Job Description")]),t._v(" "),a("p",{staticClass:"text-v"},[t._v(t._s(t.joblogs.job_descriptions))])])])])])]),t._v(" "),t._m(4),t._v(" "),a("div",{staticClass:"collapse show",attrs:{id:"collapse14",role:"tabpanel","aria-labelledby":"headingCollapse14","aria-expanded":"true"}},[a("div",{staticClass:"card-content"},[a("div",{staticClass:"card-body mt-sm-0 mt-2"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-3 col-lg-4 col-md-6 col-12 t-c"},[a("p",{staticClass:"fieldName-p"},[t._v("Years of experience\n                                                                    needed")]),t._v(" "),a("p",{staticClass:"text-v"},[t._v(t._s(t.joblogs.years_of_experience)+"\n                                                                ")])]),t._v(" "),a("div",{staticClass:"col-xl-3 col-lg-4 col-md-6 col-12 t-c"},[a("p",{staticClass:"fieldName-p"},[t._v("Degree Requirements")]),t._v(" "),a("p",{staticClass:"text-v"},[t._v(t._s(t.joblogs.degree)+" ")])])]),t._v(" "),a("div",{staticClass:"row mt-md-1"},[a("div",{staticClass:"col-lg-12 col-md-12 col-12 t-c"},[a("p",{staticClass:"fieldName-p"},[t._v("Skills")]),t._v(" "),a("p",{staticClass:"text-v"},[t._v(t._s(t.joblogs.skill))])])])])])]),t._v(" "),t._m(5),t._v(" "),a("div",{staticClass:"collapse show",attrs:{id:"collapse17",role:"tabpanel","aria-labelledby":"headingCollapse13","aria-expanded":"true"}},[a("div",{staticClass:"card-content"},[a("div",{staticClass:"card-body mt-sm-0 mt-2"},[a("div",{staticClass:"row mt-md-1"},[a("div",{staticClass:"col-lg-12 col-md-12 col-12 t-c"},t._l(t.joblogs.job_smart_question,(function(s,l){return a("p",{staticClass:"text-v"},[t._v("\n                                                                    Q"+t._s(l+1)+" : "+t._s(s.question)+"\n                                                                ")])})),0)])])])])])])])])])])])])])])])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("p",{staticClass:"sts"},[this._v("Status: "),s("span",{staticClass:"txt-green"},[this._v("Open")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"card-header",attrs:{id:"headingCollapse11"}},[s("a",{staticClass:"card-title lead",attrs:{"data-toggle":"collapse",href:"#collapse11","aria-expanded":"true","aria-controls":"collapse11"}},[this._v("Job Details\n                                                ")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"card-header",attrs:{id:"headingCollapse12"}},[s("a",{staticClass:"card-title lead ",attrs:{"data-toggle":"collapse",href:"#collapse12","aria-expanded":"true","aria-controls":"collapse12"}},[this._v("Address\n                                                    Details")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"card-header",attrs:{id:"headingCollapse13"}},[s("a",{staticClass:"card-title lead ",attrs:{"data-toggle":"collapse",href:"#collapse13","aria-expanded":"true","aria-controls":"collapse13"}},[this._v("Job\n                                                    Responsibilities")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"card-header",attrs:{id:"headingCollapse14"}},[s("a",{staticClass:"card-title lead ",attrs:{"data-toggle":"collapse",href:"#collapse14","aria-expanded":"true","aria-controls":"collapse14"}},[this._v("Experience\n                                                    Information")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"card-header",attrs:{id:"headingCollapse17"}},[s("a",{staticClass:"card-title lead ",attrs:{"data-toggle":"collapse",href:"#collapse17","aria-expanded":"true","aria-controls":"collapse17"}},[this._v("Smart Questions")])])}],!1,null,null,null);s.default=d.exports}}]);