(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{286:function(t,a,e){"use strict";e.r(a);var i=e(0),n=e.n(i),s=e(4);function r(t,a,e,i,n,s,r){try{var c=t[s](r),o=c.value}catch(t){return void e(t)}c.done?a(o):Promise.resolve(o).then(i,n)}function c(t){return function(){var a=this,e=arguments;return new Promise((function(i,n){var s=t.apply(a,e);function c(t){r(s,i,n,c,o,"next",t)}function o(t){r(s,i,n,c,o,"throw",t)}c(void 0)}))}}function o(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,i)}return e}function l(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?o(Object(e),!0).forEach((function(a){d(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function d(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}var u={computed:l({},Object(s.d)("admin",["notifications","search","bell_notifications"])),components:{},created:function(){var t=this.$route.query.page;this.fetch(t)},watch:{search:function(t,a){this.fetch()},bell_notifications:function(t,a){this.fetch()}},methods:l(l({},Object(s.b)("admin",["getAll"])),{},{fetch:function(){var t=arguments,a=this;return c(n.a.mark((function e(){var i,s,r,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=t.length>0&&void 0!==t[0]?t[0]:1,s=a.$route.params.status,r={route:route("admin.notification.index"),mutation:"SET_NOTIFICATIONS",variable:"notifications",data:{page:i,status:s,search:a.search}},e.next=5,a.getAll(r);case 5:c=e.sent,c.data,1!=i?a.addRouteQuery({page:i}):a.addRouteQuery({});case 8:case"end":return e.stop()}}),e)})))()}})},f=e(1),v=Object(f.a)(u,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content-wrapper all-notifications"},[e("div",{staticClass:"content-body"},[e("section",{staticClass:"search view-cause",attrs:{id:"configuration"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{},[e("div",{staticClass:" pad-20"},[e("div",{staticClass:"card-content collapse show"},[e("div",{staticClass:"card-body card-dashboard"},[t._m(0),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"noti-inner-cards mb-3"},[t._l(t.notifications.data,(function(a){return e("div",{staticClass:"card"},[e("div",{staticClass:"noti-content"},[e("div",{staticClass:"media align-items-center d-flex"},[e("i",{staticClass:"fa fa-bell-o align-self-start",attrs:{"aria-hidden":"true"}}),t._v(" "),e("div",{staticClass:"media-body"},[e("h5",[t._v(t._s(a.data.title))]),t._v(" "),e("p",[t._v(t._s(t.formatDate(a.created_at)))]),t._v(" "),e("p",[t._v(t._s(t.formatDate(a.created_at,"hh:mm A")))])]),t._v(" "),e("div",{staticClass:"noti-right"},[e("router-link",{attrs:{to:a.data.route}},[t._v("View")])],1)])])])})),t._v(" "),e("no-record",{staticClass:"noti-inner-cards mb-3",attrs:{tag:"div",data:t.notifications.data}},[t._v("No Data Available")]),t._v(" "),e("pagination",{attrs:{data:t.notifications},on:{"pagination-change-page":t.fetch}})],2)])])])])])])])])])])])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("h1",{staticClass:"pull-left"},[this._v("Notifications")])])])}],!1,null,null,null);a.default=v.exports}}]);