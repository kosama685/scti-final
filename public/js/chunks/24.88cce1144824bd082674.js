(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{237:function(t,e,s){"use strict";s.r(e);var a=s(0),o=s.n(a);function r(t,e,s,a,o,r,n){try{var i=t[r](n),l=i.value}catch(t){return void s(t)}i.done?e(l):Promise.resolve(l).then(a,o)}var n={data:function(){return{email:"",password:"",role:"businessOwner",base_url:window.base_url}},created:function(){var t=localStorage.getItem("access-token"),e=localStorage.getItem("userType"),s=window.localStorage.getItem("logoutItem");console.log(s),t&&"businessOwner"==e?(this.isSession=!0,this.$router.push({name:"businessOwner.dashboard"})):this.isSession=!1,"true"==s&&(window.localStorage.setItem("logoutItem",!1),this.loadOnce()),console.log(e)},components:{SendCode:function(){return s.e(72).then(s.bind(null,302))},VerifyCode:function(){return s.e(73).then(s.bind(null,303))},ChangePassword:function(){return s.e(71).then(s.bind(null,304))}},methods:{Login:function(t){var e,s=this;return(e=o.a.mark((function t(){var e,a,r,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return window.localStorage.setItem("loadedFirstTime",!0),(e=new FormData(s.$refs.LoginForm)).append("role",s.role),t.next=5,axios.post("/api/auth/login",e);case 5:(a=t.sent).data.data?(r=a.data.data,s.$snotify.success(a.data.message),localStorage.setItem("isLoggedIn","1"),localStorage.setItem("userType","businessOwner"),localStorage.setItem("access-token",r.token),localStorage.setItem("name",r.name),localStorage.setItem("image",r.image),n=s,window.axios.defaults.headers.common={Authorization:"Bearer ".concat(a.data.data.token)},setTimeout((function(){n.$router.push({name:"businessOwner.dashboard"})}),1e3)):s.$snotify.error(a.data.message);case 7:case"end":return t.stop()}}),t)})),function(){var t=this,s=arguments;return new Promise((function(a,o){var n=e.apply(t,s);function i(t){r(n,a,o,i,l,"next",t)}function l(t){r(n,a,o,i,l,"throw",t)}i(void 0)}))})()},loadOnce:function(){console.log("okayyyyyy"),location.reload()}}},i=s(1),l=Object(i.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-xl-6 col-md-12"},[s("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(e){var a=e.handleSubmit;return[s("form",{ref:"LoginForm",staticClass:"login-form",on:{submit:function(e){return e.preventDefault(),a(t.Login)}}},[s("div",{staticClass:"form-row mb-1"},[s("div",{staticClass:"col-12"},[s("h4",[t._v("Login to your account")])])]),t._v(" "),s("div",{staticClass:"form-group mb-1"},[s("label",{attrs:{for:"email-login"}},[t._v("Email address*")]),t._v(" "),s("ValidationProvider",{attrs:{name:"Email Address",rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors;return[s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control prof-input-login",attrs:{type:"email",id:"email-login","aria-describedby":"emailHelp",placeholder:"Enter email",name:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),s("span",{staticClass:"text-danger"},[t._v(t._s(a[0]))])]}}],null,!0)})],1),t._v(" "),s("div",{staticClass:"form-group mb-1 position-relative"},[s("label",{attrs:{for:"pass-login"}},[t._v("Password*")]),t._v(" "),s("ValidationProvider",{attrs:{rules:"required",name:"password"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors;return[s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control prof-input-login",attrs:{type:"password",id:"pass-login",placeholder:"*****",name:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),s("button",{staticClass:"eye-pass fa fa-eye",attrs:{type:"button"},on:{click:function(e){return t.togglePasswordType(1)}}},[s("i",{attrs:{"aria-hidden":"true"}})]),t._v(" "),s("span",{staticClass:"text-danger"},[t._v(t._s(a[0]))])]}}],null,!0)})],1),t._v(" "),s("div",{staticClass:"form-row mb-1"},[s("div",{staticClass:"col-12 text-right"},[s("a",{staticClass:"small-link",attrs:{href:"","data-toggle":"modal","data-target":"#password-recover"}},[t._v("forgot\n                            password?")])])]),t._v(" "),s("div",{staticClass:"form-row"},[s("div",{staticClass:"col-12 text-center"},[s("button",{staticClass:"btn-profBlue",attrs:{type:"submit"}},[t._v("Login")])]),t._v(" "),s("div",{staticClass:"col-12 text-center"},[s("router-link",{staticClass:"small-link",attrs:{to:{name:"user.users.index"}}},[s("i",{staticClass:"fa fa-arrow-left mr-2",attrs:{"aria-hidden":"true"}}),t._v("\n                            back to home page")])],1)])])]}}])})],1),t._v(" "),s("div",{staticClass:"col-xl-6 d-xl-block d-none"},[s("div",{staticClass:"wrap-right"},[s("img",{staticClass:"dots gray-dots",attrs:{src:t.base_url+"/assets/business/images/gray-dots.png",alt:""}}),t._v(" "),s("img",{staticClass:"dots black-dots",attrs:{src:t.base_url+"/assets/business/images/black-dots.png",alt:""}}),t._v(" "),s("img",{staticClass:"lady",attrs:{src:t.base_url+"/assets/business/images/Profession-net-03_10.png",alt:"",srcset:""}})])]),t._v(" "),s("SendCode"),t._v(" "),s("VerifyCode"),t._v(" "),s("ChangePassword")],1)}),[],!1,null,null,null);e.default=l.exports}}]);