(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{284:function(t,a,s){"use strict";s.r(a);var e=s(0),i=s.n(e);function c(t,a,s,e,i,c,l){try{var r=t[c](l),o=r.value}catch(t){return void s(t)}r.done?a(o):Promise.resolve(o).then(e,i)}function l(t){return function(){var a=this,s=arguments;return new Promise((function(e,i){var l=t.apply(a,s);function r(t){c(l,e,i,r,o,"next",t)}function o(t){c(l,e,i,r,o,"throw",t)}r(void 0)}))}}var r={data:function(){return{packages:{},user_type:0}},created:function(){var t=this;return l(i.a.mark((function a(){return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t.getPackage();case 2:case"end":return a.stop()}}),a)})))()},methods:{getPackage:function(){var t=this;return l(i.a.mark((function a(){return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,axios.get("/api/admin/package?user_type="+t.user_type);case 2:t.packages=a.sent.data.data,console.log(t.packages);case 4:case"end":return a.stop()}}),a)})))()}}},o=s(1),n=Object(o.a)(r,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content-wrapper"},[s("div",{staticClass:"content-body"},[s("section",{attrs:{id:"configuration"}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"card rounded pad-20"},[s("div",{staticClass:"card-content collapse show"},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"row align-items-center"},[s("div",{staticClass:"col-md-6 col-12"},[s("h1",{staticClass:"m-0 ch"},[s("router-link",{attrs:{to:{name:"AdminHome"}}},[s("i",{staticClass:"fa fa-angle-left"}),t._v("Package Management")])],1)]),t._v(" "),s("div",{staticClass:"col-md-6 col-12 text-right"},[s("router-link",{staticClass:"green-btn m-0 text-center e-bt",attrs:{to:{name:"admin.packages.edit",params:{id:this.user_type}},"data-toggle":"modal","data-target":".addCategory-modal"}},[t._v("Edit")])],1)]),t._v(" "),s("nav",[s("div",{staticClass:"nav nav-tabs",attrs:{id:"nav-tab",role:"tablist"}},[s("a",{staticClass:"nav-item nav-link active ",attrs:{id:"nav-user-tab","data-toggle":"tab",href:"#nav-user",role:"tab","aria-controls":"nav-user","aria-selected":"true"},on:{click:function(a){t.user_type=0,t.getPackage()}}},[t._v("Users")]),t._v(" "),s("a",{staticClass:"nav-item nav-link ",attrs:{id:"nav-employer-tab","data-toggle":"tab",href:"#nav-employer",role:"tab","aria-controls":"nav-employer","aria-selected":"false"},on:{click:function(a){t.user_type=1,t.getPackage()}}},[t._v("Business Owners")])])]),t._v(" "),s("div",{staticClass:"tab-content",attrs:{id:"nav-tabContent"}},[s("div",{staticClass:"tab-pane fade show active",attrs:{id:"nav-user",role:"tabpanel","aria-labelledby":"nav-user-tab"}},t._l(t.packages,(function(a,e){return s("div",{key:e,staticClass:"row"},[s("div",{staticClass:"card collapse-icon accordion-icon-rotate user_prof_acc",staticStyle:{width:"100%"}},[s("div",{staticClass:"card-header",attrs:{id:"headingCollapse12"}},[s("a",{staticClass:"card-title lead ",attrs:{"data-toggle":"collapse",href:"#collapse12","aria-expanded":"true","aria-controls":"collapse12"}},[t._v("Package 0"+t._s(e))])]),t._v(" "),s("div",{staticClass:"collapse show",attrs:{id:"collapse12",role:"tabpanel","aria-labelledby":"headingCollapse12","aria-expanded":"true"}},[s("div",{staticClass:"card-content"},[s("div",{staticClass:"card-body mt-sm-0 mt-2"},[s("div",{staticClass:"row"},[t._m(0,!0),t._v(" "),s("div",{staticClass:"col-lg-6 col-md-6 col-12 t-c"},[s("p",{staticClass:"fieldData"},[t._v(t._s(a.package_name))])])]),t._v(" "),s("div",{staticClass:"row"},[t._m(1,!0),t._v(" "),s("div",{staticClass:"col-lg-6 col-md-6 col-12 t-c"},[s("p",{staticClass:"fieldData",domProps:{innerHTML:t._s(a.description)}})])]),t._v(" "),s("div",{staticClass:"row"},[t._m(2,!0),t._v(" "),s("div",{staticClass:"col-lg-6 col-md-6 col-12 t-c"},[s("p",{staticClass:"fieldData"},[t._v("$"+t._s(a.charges))])])]),t._v(" "),s("div",{staticClass:"row"},[t._m(3,!0),t._v(" "),s("div",{staticClass:"col-lg-6 col-md-6 col-12 t-c"},[s("p",{staticClass:"fieldData"},[t._v(t._s(a.duration))])])])])])])])])})),0),t._v(" "),s("div",{staticClass:"tab-pane fade ",attrs:{id:"nav-employer",role:"tabpanel","aria-labelledby":"nav-employer-tab"}},t._l(t.packages,(function(a,e){return s("div",{key:e,staticClass:"row"},[s("div",{staticClass:"card collapse-icon accordion-icon-rotate user_prof_acc",staticStyle:{width:"100%"}},[t._m(4,!0),t._v(" "),s("div",{staticClass:"collapse show",attrs:{id:"collapse13",role:"tabpanel","aria-labelledby":"headingCollapse13","aria-expanded":"true"}},[s("div",{staticClass:"card-content"},[s("div",{staticClass:"card-body mt-sm-0 mt-2"},[s("div",{staticClass:"row"},[t._m(5,!0),t._v(" "),s("div",{staticClass:"col-lg-6 col-md-6 col-12 t-c"},[s("p",{staticClass:"fieldData"},[t._v(t._s(a.package_name))])])]),t._v(" "),s("div",{staticClass:"row"},[t._m(6,!0),t._v(" "),s("div",{staticClass:"col-lg-6 col-md-6 col-12 t-c"},[s("p",{staticClass:"fieldData",domProps:{innerHTML:t._s(a.description)}})])]),t._v(" "),s("div",{staticClass:"row"},[t._m(7,!0),t._v(" "),s("div",{staticClass:"col-lg-6 col-md-6 col-12 t-c"},[s("p",{staticClass:"fieldData"},[t._v("$"+t._s(a.charges))])])]),t._v(" "),s("div",{staticClass:"row"},[t._m(8,!0),t._v(" "),s("div",{staticClass:"col-lg-6 col-md-6 col-12 t-c"},[s("p",{staticClass:"fieldData"},[t._v(t._s(a.duration))])])]),t._v(" "),s("div",{staticClass:"row"},[t._m(9,!0),t._v(" "),s("div",{staticClass:"col-lg-6 col-md-6 col-12 t-c"},[a.question_limit<=15?s("div",[s("p",{staticClass:"fieldData"},[t._v(t._s(a.question_limit))])]):t._e(),t._v(" "),a.question_limit>15?s("div",[s("h5",{staticClass:"fieldData"},[t._v("Unlimited")])]):t._e()])])])])])])])})),0)])])])])])])])])])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"col-lg-3 col-md-3 col-12 t-c"},[a("p",{staticClass:"fieldName"},[this._v("Package Name")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"col-lg-3 col-md-3 col-12 t-c"},[a("p",{staticClass:"fieldName"},[this._v("Description")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"col-lg-3 col-md-3 col-12 t-c"},[a("p",{staticClass:"fieldName"},[this._v("Charges")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"col-lg-3 col-md-3 col-12 t-c"},[a("p",{staticClass:"fieldName"},[this._v("Durations")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"card-header",attrs:{id:"headingCollapse13"}},[a("a",{staticClass:"card-title lead ",attrs:{"data-toggle":"collapse",href:"#collapse13","aria-expanded":"true","aria-controls":"collapse13"}},[this._v("Project 01")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"col-lg-3 col-md-3 col-12 t-c"},[a("p",{staticClass:"fieldName"},[this._v("Package Name")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"col-lg-3 col-md-3 col-12 t-c"},[a("p",{staticClass:"fieldName"},[this._v("Description")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"col-lg-3 col-md-3 col-12 t-c"},[a("p",{staticClass:"fieldName"},[this._v("Charges")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"col-lg-3 col-md-3 col-12 t-c"},[a("p",{staticClass:"fieldName"},[this._v("Duration")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"col-lg-3 col-md-3 col-12 t-c"},[a("p",{staticClass:"fieldName"},[this._v("Jobs Limit")])])}],!1,null,null,null);a.default=n.exports}}]);