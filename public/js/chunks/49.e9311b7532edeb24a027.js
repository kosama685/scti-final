(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{299:function(t,a,e){"use strict";e.r(a);var n=e(0),r=e.n(n),s=e(4);function i(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function o(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?i(Object(e),!0).forEach((function(a){l(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function l(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function c(t,a,e,n,r,s,i){try{var o=t[s](i),l=o.value}catch(t){return void e(t)}o.done?a(l):Promise.resolve(l).then(n,r)}function u(t){return function(){var a=this,e=arguments;return new Promise((function(n,r){var s=t.apply(a,e);function i(t){c(s,n,r,i,o,"next",t)}function o(t){c(s,n,r,i,o,"throw",t)}i(void 0)}))}}var d={data:function(){return{name:"",image:"",editProfile:{}}},created:function(){var t=this;return u(r.a.mark((function a(){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:t.fetch(),t.name=editProfile.name,t.image=editProfile.image;case 3:case"end":return a.stop()}}),a)})))()},computed:o({},Object(s.d)("admin",["profile","admin"])),components:{BellNotification:function(){return e.e(14).then(e.bind(null,325))}},methods:o(o({},Object(s.b)("admin",["getAll"])),{},{fetch:function(){var t=this;return u(r.a.mark((function a(){var e,n,s,i;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return e=t.$route.params,e.type,e.status,n={route:"api/admin/getProfile",mutation:"SET_PROFILE",variable:"data"},a.next=4,t.getAll(n);case 4:s=a.sent,i=s.data,console.log(i),t.editProfile=i.data,t.addRouteQuery({});case 9:case"end":return a.stop()}}),a)})))()},logout:function(){var t=this;return u(r.a.mark((function a(){var e;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return window.localStorage.setItem("logoutItem",!0),a.next=3,axios.post("/api/admin/logout");case 3:localStorage.removeItem("isLoggedIn"),localStorage.removeItem("userType"),localStorage.removeItem("access-token"),t.$snotify.success("Logout Successfully"),e=t,setTimeout((function(){e.$router.push({name:"admin.auth.login"})}),2e3);case 9:case"end":return a.stop()}}),a)})))()}})},v=e(1),m=Object(v.a)(d,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nav",{staticClass:"header-navbar navbar-expand-md navbar navbar-with-menu fixed-top navbar-light navbar-border"},[e("div",{staticClass:"navbar-wrapper"},[e("div",{staticClass:"navbar-header"},[e("ul",{staticClass:"nav navbar-nav flex-row"},[t._m(0),t._v(" "),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"public.dashboard"}}},[e("img",{staticClass:"brand-logo",attrs:{alt:"stack public logo",src:t.base_url+"/assets/images/logo.png"}})])],1),t._v(" "),t._m(1)])]),t._v(" "),e("div",{staticClass:"navbar-container content"},[e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbar-mobile"}},[e("ul",{staticClass:"nav navbar-nav mr-auto float-left"}),t._v(" "),e("ul",{staticClass:"nav navbar-nav float-right"},[e("li",{staticClass:"dropdown dropdown-user nav-item"},[e("a",{staticClass:"dropdown-toggle nav-link dropdown-user-link",attrs:{href:"#","data-toggle":"dropdown"}},[e("span",{staticClass:"avatar avatar-online"},[e("img",{attrs:{src:t.profile.image,alt:"avatar"}})]),t._v(" "),e("span",{staticClass:"user-name"},[t._v(t._s(t.profile.name))])]),t._v(" "),e("div",{staticClass:"dropdown-menu dropdown-menu-right"},[e("router-link",{staticClass:"dropdown-item",attrs:{"data-toggle":"modal",to:{name:"admin.users.admin.profile"}}},[e("i",{staticClass:"fa fa-user-circle"}),t._v("Profile")]),t._v(" "),e("div",{staticClass:"dropdown-divider"}),t._v(" "),e("a",{staticClass:"dropdown-item",attrs:{"data-toggle":"modal",href:"#logoutmodal"},on:{click:function(a){return t.logout()}}},[e("i",{staticClass:"fa fa-power-off"}),t._v("Logout")])],1)]),t._v(" "),t._m(2)])])])])])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("li",{staticClass:"nav-item mobile-menu d-md-none mr-auto"},[a("a",{staticClass:"nav-link nav-menu-main menu-toggle hidden-xs",attrs:{href:"#"}},[a("i",{staticClass:"ft-menu font-large-1"})])])},function(){var t=this.$createElement,a=this._self._c||t;return a("li",{staticClass:"nav-item d-md-none"},[a("a",{staticClass:"nav-link open-navbar-container",attrs:{"data-toggle":"collapse","data-target":"#navbar-mobile"}},[a("i",{staticClass:"fa fa-ellipsis-v"})])])},function(){var t=this.$createElement,a=this._self._c||t;return a("li",{staticClass:"nav-item d-none d-md-block"},[a("a",{staticClass:"nav-link nav-menu-main menu-toggle hidden-xs",attrs:{href:"#"}},[a("i",{staticClass:"ft-menu"})])])}],!1,null,null,null);a.default=m.exports}}]);