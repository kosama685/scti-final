(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{243:function(t,e,s){"use strict";s.r(e);var a=s(0),o=s.n(a);function r(t,e,s,a,o,r,n){try{var i=t[r](n),l=i.value}catch(t){return void s(t)}i.done?e(l):Promise.resolve(l).then(a,o)}var n={data:function(){return{password:"",confirmation:""}},created:function(){localStorage.getItem("email")||(this.$snotify.error("Please Follow step by step to change new password","Forbidden!"),this.$router.push({name:"ForgetCode"}))},methods:{onSubmit:function(t){var e,s=this;return(e=o.a.mark((function t(){var e,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(e=new FormData(s.$refs.newPassword)).append("code",localStorage.getItem("code")),t.next=4,axios.post("/api/auth/new-password",e);case 4:(a=t.sent).data.status?(localStorage.removeItem("code"),localStorage.removeItem("email"),s.$router.push({name:"Login"}),s.$snotify.success(a.data.msg,"Updated!")):s.$snotify.error(a.data.msg,"Oops!");case 6:case"end":return t.stop()}}),t)})),function(){var t=this,s=arguments;return new Promise((function(a,o){var n=e.apply(t,s);function i(t){r(n,a,o,i,l,"next",t)}function l(t){r(n,a,o,i,l,"throw",t)}i(void 0)}))})()}}},i=s(1),l=Object(i.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-2 col-xl-3"}),t._v(" "),s("div",{staticClass:"col-md-8 col-xl-6 col-12"},[s("div",{staticClass:"register-main"},[s("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(e){var a=e.handleSubmit;return[s("form",{ref:"newPassword",on:{submit:function(e){return e.preventDefault(),a(t.onSubmit)}}},[s("img",{staticClass:"img-full",attrs:{src:t.url("/assets/public-assets/images/logo.png"),alt:"logo"}}),t._v(" "),s("div",{staticClass:"form-main"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12 text-center"},[s("h1",[t._v("Forgot Password")])])]),t._v(" "),s("div",{staticClass:"fields"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("ValidationProvider",{attrs:{name:"Password",rules:"required|confirmed:confirmation"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors;return[s("i",{staticClass:"fa fa-envelope"}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{name:"password",type:"password",spellcheck:"true",placeholder:"Enter New Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),s("span",[t._v(t._s(a[0]))])]}}],null,!0)})],1),t._v(" "),s("div",{staticClass:"col-md-12"},[s("ValidationProvider",{attrs:{name:"confirmation",rules:"required",vid:"confirmation"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors;return[s("i",{staticClass:"fa fa-envelope"}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.confirmation,expression:"confirmation"}],staticClass:"form-control",attrs:{type:"password",spellcheck:"true",placeholder:"Retype Password"},domProps:{value:t.confirmation},on:{input:function(e){e.target.composing||(t.confirmation=e.target.value)}}}),t._v(" "),s("span",[t._v(t._s(a[0]))])]}}],null,!0)})],1)]),t._v(" "),s("button",{staticClass:"form-control continue-button",attrs:{type:"submit"}},[t._v("Save")]),t._v(" "),s("div",{staticClass:"new-user"},[s("router-link",{staticClass:"login back",attrs:{to:{name:"AdminHome"}}},[t._v("\n\t\t\t\t\t\t\t\tback to login")])],1)])])])]}}])})],1)]),t._v(" "),s("div",{staticClass:"col-md-2 col-xl-3"})])}),[],!1,null,null,null);e.default=l.exports}}]);