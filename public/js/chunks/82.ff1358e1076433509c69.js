(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{297:function(t,e,a){"use strict";a.r(e);var s=a(0),i=a.n(s),r=a(14),n=a.n(r);function c(t,e,a,s,i,r,n){try{var c=t[r](n),o=c.value}catch(t){return void a(t)}c.done?e(o):Promise.resolve(o).then(s,i)}function o(t){return function(){var e=this,a=arguments;return new Promise((function(s,i){var r=t.apply(e,a);function n(t){c(r,s,i,n,o,"next",t)}function o(t){c(r,s,i,n,o,"throw",t)}n(void 0)}))}}var v={data:function(){return{invoice_preview:{},search:"",entries:10}},created:function(){var t=this;return o(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.invoice();case 2:case"end":return e.stop()}}),e)})))()},methods:{invoice:function(){var t=this;return o(i.a.mark((function e(){var a,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.$route.params.id,e.next=3,n.a.get("/api/admin/invoice/"+a);case 3:s=e.sent,t.invoice_preview=s.data,console.log(t.invoice_preview);case 6:case"end":return e.stop()}}),e)})))()},download:function(){var t=this;return o(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.a.get("/api/admin/downloadbusinessinvoice/"+t.$route.params.id,{responseType:"arraybuffer"}).then((function(t){var e=window.URL.createObjectURL(new Blob([t.data])),a=document.createElement("a");a.href=e,a.setAttribute("download","Invoice.pdf"),document.body.appendChild(a),a.click()}));case 2:e.sent;case 3:case"end":return e.stop()}}),e)})))()}}},d=a(1),l=Object(d.a)(v,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content-wrapper"},[a("div",{staticClass:"content-body"},[a("section",{attrs:{id:"configuration"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"card rounded pad-20"},[a("div",{staticClass:"card-content collapse show"},[a("div",{staticClass:"card-body"},[t._m(0),t._v(" "),a("div",{staticClass:"customer-top"},[a("div",{staticClass:"row mb-4"},[a("div",{staticClass:"col-6"},[a("div",{staticClass:"media"},[a("div",{staticClass:"media-body media_margin"},[a("h6",{staticClass:"bo-name"},[t._v(t._s(t.invoice_preview.user.first_name)+" "+t._s(t.invoice_preview.user.last_name))])])])])])]),t._v(" "),a("div",{staticClass:"row offset-lg-1 align-items-center"},[a("div",{staticClass:"col-md-4"},[a("h3",{attrs:{for:""}},[t._v("Subscription Date")]),t._v(" "),a("span",{attrs:{for:""}},[t._v(t._s(t.formatDate(t.invoice_preview.created_at)))])]),t._v(" "),a("div",{staticClass:"col-md-4"},[a("h3",{attrs:{for:""}},[t._v("Package Type")]),t._v(" "),a("label",{attrs:{for:""}},[t._v(t._s(t.invoice_preview.packages.package_name))])]),t._v(" "),a("div",{staticClass:"col-md-4"},[a("h3",{attrs:{for:""}},[t._v("Last Renewal Date")]),t._v(" "),a("label",{attrs:{for:""}},[t._v(t._s(t.formatDate(t.invoice_preview.created_at)))])]),t._v(" "),a("div",{staticClass:"col-md-4"},[a("h3",{attrs:{for:""}},[t._v("Expire Date")]),t._v(" "),a("label",{attrs:{for:""}},[t._v(t._s(t.formatDate(t.invoice_preview.expiry_date)))])]),t._v(" "),a("div",{staticClass:"col-md-4"},[a("h3",{attrs:{for:""}},[t._v("Charges")]),t._v(" "),a("label",{attrs:{for:""}},[t._v(t._s(t.invoice_preview.charges))])]),t._v(" "),a("div",{staticClass:"col-md-4"},[a("h3",{attrs:{for:""}},[t._v("Status")]),t._v(" "),a("label",{attrs:{for:""}},[t._v(t._s(1==t.invoice_preview.user.status?"Active":"Inactive"))])]),t._v(" "),a("a",{staticClass:"btn-green-pckg",on:{click:function(e){return t.download()}}},[t._v("Download Invoice")])])])])])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("h1",[e("i",{}),this._v("View Invoice")])])])}],!1,null,null,null);e.default=l.exports}}]);