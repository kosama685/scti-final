(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{242:function(t,e,a){"use strict";a.r(e);var s=a(0),n=a.n(s);function i(t,e,a,s,n,i,o){try{var r=t[i](o),c=r.value}catch(t){return void a(t)}r.done?e(c):Promise.resolve(c).then(s,n)}function o(t){return function(){var e=this,a=arguments;return new Promise((function(s,n){var o=t.apply(e,a);function r(t){i(o,s,n,r,c,"next",t)}function c(t){i(o,s,n,r,c,"throw",t)}r(void 0)}))}}var r={data:function(){return{isSending:!1,code:"",email:""}},methods:{onResend:function(t){var e=this;return o(n.a.mark((function t(){var a,s,i;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((a=new FormData).append("email",localStorage.getItem("email")),e.isSending){t.next=10;break}return e.isSending=!0,t.next=6,axios.post("/api/auth/send/email",a);case 6:(s=t.sent).data.data?(i=e,e.isSending=!1,setTimeout((function(){i.$snotify.success(s.data.msg)}),1e3)):e.$snotify.error(s.data.msg),t.next=11;break;case 10:e.$snotify.error("already sending","Please Wait!");case 11:case"end":return t.stop()}}),t)})))()},onSubmit:function(t){var e=this;return o(n.a.mark((function t(){var a,s;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=new FormData(e.$refs.validateCode),t.next=3,axios.post("/api/auth/verify/code",a);case 3:(s=t.sent).data.data?(localStorage.setItem("code",e.code),e,e.$router.push({name:"NewPassword"}),e.$snotify.success(s.data.message,"Verified")):e.$snotify.error(s.data.message,"Invalid Code");case 5:case"end":return t.stop()}}),t)})))()}}},c=a(1),l=Object(c.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-2 col-xl-3"}),t._v(" "),a("div",{staticClass:"col-md-8 col-xl-6 col-12"},[a("div",{staticClass:"register-main"},[a("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(e){var s=e.handleSubmit;return[a("form",{ref:"validateCode",on:{submit:function(e){return e.preventDefault(),s(t.onSubmit)}}},[a("img",{staticClass:"img-full my-2",attrs:{src:t.url("assets/public-assets/images/logo.png"),alt:"logo"}}),t._v(" "),a("div",{staticClass:"form-main my-3"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12 text-left"},[a("h1",[t._v("Password Recovery")])])]),t._v(" "),a("div",{staticClass:"fields"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("validationProvider",{attrs:{name:"code",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors;return[a("i",{staticClass:"fa fa-lock",attrs:{"aria-hidden":"true"}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],staticClass:"form-control",attrs:{name:"code",type:"text",spellcheck:"true",placeholder:"Enter Verification Code"},domProps:{value:t.code},on:{input:function(e){e.target.composing||(t.code=e.target.value)}}}),t._v(" "),a("span",[t._v(t._s(s[0]))])]}}],null,!0)})],1)]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("a",{staticClass:"pull-right resend-code",attrs:{disabled:t.isSending},on:{click:function(e){return t.onResend()}}},[t._v("\n                 "+t._s(t.isSending?"Resending Code":"Resend"))])])]),t._v(" "),a("button",{staticClass:"form-control continue-button",attrs:{type:"submit"}},[t._v("continue")]),t._v(" "),a("div",{staticClass:"new-user my-2"},[a("router-link",{staticClass:"login form-control backto-login",attrs:{to:{name:"AdminHome"}}},[a("i",{staticClass:"fa fa-arrow-circle-left"}),t._v("\n              back to login")])],1)])])])]}}])})],1)]),t._v(" "),a("div",{staticClass:"col-md-2 col-xl-3"})])}),[],!1,null,null,null);e.default=l.exports}}]);