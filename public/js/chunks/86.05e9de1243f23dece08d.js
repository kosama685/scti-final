(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{247:function(t,e,a){"use strict";a.r(e);var s=a(0),o=a.n(s);function r(t,e,a,s,o,r,n){try{var i=t[r](n),l=i.value}catch(t){return void a(t)}i.done?e(l):Promise.resolve(l).then(s,o)}var n={data:function(){return{email:"",password:"",role:"user",base_url:window.base_url}},created:function(){var t=localStorage.getItem("access-token"),e=localStorage.getItem("userType"),a=window.localStorage.getItem("logoutItem");console.log(a),t&&"user"==e?(this.isSession=!0,this.$router.push({name:"user.users.dashboard"})):this.isSession=!1,"true"==a&&(window.localStorage.setItem("logoutItem",!1),this.loadOnce()),console.log(e)},components:{InnerPageFooter:function(){return a.e(0).then(a.bind(null,330))},FullPageHeader:function(){return a.e(3).then(a.bind(null,310))},SendCode:function(){return a.e(88).then(a.bind(null,311))},VerifyCode:function(){return a.e(89).then(a.bind(null,312))},ChangePassword:function(){return a.e(87).then(a.bind(null,313))}},methods:{Login:function(t){var e,a=this;return(e=o.a.mark((function t(){var e,s,r,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return window.localStorage.setItem("loadedFirstTime",!0),(e=new FormData(a.$refs.LoginForm)).append("role",a.role),t.next=5,axios.post("/api/auth/login",e);case 5:(s=t.sent).data.data?(r=s.data.data,a.$snotify.success(s.data.message),localStorage.setItem("isLoggedIn","1"),localStorage.setItem("userType","user"),localStorage.setItem("access-token",r.token),localStorage.setItem("name",r.name),localStorage.setItem("image",r.image),localStorage.setItem("userId",r.id),n=a,window.axios.defaults.headers.common={Authorization:"Bearer ".concat(s.data.data.token)},setTimeout((function(){n.$router.push({name:"user.users.view"})}),1e3)):a.$snotify.error(s.data.message);case 7:case"end":return t.stop()}}),t)})),function(){var t=this,a=arguments;return new Promise((function(s,o){var n=e.apply(t,a);function i(t){r(n,s,o,i,l,"next",t)}function l(t){r(n,s,o,i,l,"throw",t)}i(void 0)}))})()},loadOnce:function(){console.log("okayyyyyy"),location.reload()}}},i=a(1),l=Object(i.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("full-page-header"),t._v(" "),a("section",{staticClass:"login-section"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-6 col-md-12"},[a("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(e){var s=e.handleSubmit;return[a("form",{ref:"LoginForm",staticClass:"login-form",on:{submit:function(e){return e.preventDefault(),s(t.Login)}}},[a("div",{staticClass:"form-row mb-3"},[a("div",{staticClass:"col-12"},[a("h4",[t._v("Login to your account")])])]),t._v(" "),a("div",{staticClass:"form-group mb-3"},[a("ValidationProvider",{attrs:{name:"Email Address",rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors;return[a("label",{attrs:{for:"email-login"}},[t._v("Email address")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control prof-input-login",attrs:{type:"email",id:"email-login","aria-describedby":"emailHelp",placeholder:"Enter Email Address",name:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),a("span",{staticClass:"text-danger"},[t._v(t._s(s[0]))])]}}],null,!0)})],1),t._v(" "),a("div",{staticClass:"form-group mb-3 position-relative"},[a("ValidationProvider",{attrs:{rules:"required",name:"password"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors;return[a("label",{attrs:{for:"pass-login"}},[t._v("Password")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control prof-input-login",attrs:{type:"password",id:"pass-login",placeholder:"Enter Password",name:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),a("button",{staticClass:"eye-pass fa fa-eye",attrs:{type:"button"},on:{click:function(e){return t.togglePasswordType(1)}}},[a("i",{attrs:{"aria-hidden":"true"}})]),t._v(" "),a("span",{staticClass:"text-danger"},[t._v(t._s(s[0]))])]}}],null,!0)})],1),t._v(" "),a("div",{staticClass:"form-row mb-3"},[a("div",{staticClass:"col-12 text-right"},[a("a",{staticClass:"small-link",attrs:{href:"","data-toggle":"modal","data-target":"#password-recover"}},[t._v("forgot\n                                        password?")])])]),t._v(" "),a("div",{staticClass:"form-row"},[a("div",{staticClass:"col-12 text-center"},[a("button",{staticClass:"btn-profBlue",attrs:{type:"submit"}},[t._v("Login")])]),t._v(" "),a("div",{staticClass:"col-12 text-center"},[a("a",{staticClass:"small-link",attrs:{href:""}},[a("i",{staticClass:"fa fa-arrow-left mr-2",attrs:{"aria-hidden":"true"}}),t._v(" back to home page")])])])])]}}])})],1),t._v(" "),a("div",{staticClass:"col-xl-6 d-xl-block d-none"},[a("div",{staticClass:"wrap-right"},[a("img",{staticClass:"dots gray-dots",attrs:{src:t.base_url+"/assets/user/images/gray-dots.png",alt:""}}),t._v(" "),a("img",{staticClass:"dots black-dots",attrs:{src:t.base_url+"/assets/user/images/black-dots.png",alt:""}}),t._v(" "),a("img",{staticClass:"lady",attrs:{src:t.base_url+"/assets/user/images/Profession-net-03_10.png",alt:"",srcset:""}})])])])])]),t._v(" "),a("inner-page-footer"),t._v(" "),a("SendCode"),t._v(" "),a("VerifyCode"),t._v(" "),a("ChangePassword")],1)}),[],!1,null,null,null);e.default=l.exports}}]);