(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{268:function(t,n,i){"use strict";i.r(n);var e=i(0),a=i.n(e);function s(t,n,i,e,a,s,r){try{var c=t[s](r),o=c.value}catch(t){return void i(t)}c.done?n(o):Promise.resolve(o).then(e,a)}function r(t){return function(){var n=this,i=arguments;return new Promise((function(e,a){var r=t.apply(n,i);function c(t){s(r,e,a,c,o,"next",t)}function o(t){s(r,e,a,c,o,"throw",t)}c(void 0)}))}}var c={data:function(){return{notifications:{}}},components:{InnerPageFooter:function(){return i.e(0).then(i.bind(null,330))},RegisterHeader:function(){return i.e(1).then(i.bind(null,314))}},created:function(){var t=this;return r(a.a.mark((function n(){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.getNotification();case 2:case"end":return n.stop()}}),n)})))()},methods:{getNotification:function(){var t=this;return r(a.a.mark((function n(){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,axios.get("/api/admin/getNotification");case 2:t.notifications=n.sent.data;case 3:case"end":return n.stop()}}),n)})))()}}},o=i(1),u=Object(o.a)(c,(function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",[i("register-header"),t._v(" "),i("section",{staticClass:"user-home"},[i("div",{staticClass:"container"},[t._m(0),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[i("div",{staticClass:"card"},[i("div",{staticClass:"card-body "},t._l(t.notifications,(function(n){return i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[i("div",{staticClass:"notification__Wrapper shadow-sm"},[i("div",{staticClass:"left"},[i("i",{staticClass:"fa fa-bell-o",attrs:{"aria-hidden":"true"}}),t._v(" "),i("div",{staticClass:"inner"},[i("p",{staticClass:"notif__Title"},[t._v(t._s(n.title))]),t._v(" "),i("p",{staticClass:"notif__time"},[t._v(t._s(t.formatDate(n.created_at))+" | 10:30 AM")])])])])])])})),0)])])])])]),t._v(" "),i("inner-page-footer")],1)}),[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 text-center"},[n("p",{staticClass:"page-heading"},[this._v("Notifications")])])])}],!1,null,null,null);n.default=u.exports}}]);