(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{293:function(t,a,s){"use strict";s.r(a);var e=s(0),i=s.n(e);function l(t,a,s,e,i,l,c){try{var o=t[l](c),d=o.value}catch(t){return void s(t)}o.done?a(d):Promise.resolve(d).then(e,i)}function c(t){return function(){var a=this,s=arguments;return new Promise((function(e,i){var c=t.apply(a,s);function o(t){l(c,e,i,o,d,"next",t)}function d(t){l(c,e,i,o,d,"throw",t)}o(void 0)}))}}var o={data:function(){return{editProfile:{}}},created:function(){var t=this;return c(i.a.mark((function a(){return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t.getProfile();case 2:case"end":return a.stop()}}),a)})))()},methods:{getProfile:function(){var t=this;return c(i.a.mark((function a(){return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,axios.get("/api/admin/getProfile");case 2:t.editProfile=a.sent.data.data,localStorage.setItem("image",t.editProfile.image),console.log("edit profile is",t.editProfile.data.first_name);case 5:case"end":return a.stop()}}),a)})))()}}},d=s(1),r=Object(d.a)(o,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content-wrapper"},[s("div",{staticClass:"content-body"},[s("section",{attrs:{id:"configuration"}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"card rounded pad-20"},[s("div",{staticClass:"card-content collapse show"},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("h1",[s("router-link",{attrs:{to:{name:"public.dashboard"}}},[s("i",{staticClass:"fa fa-angle-left"}),t._v("Profile")])],1)])]),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"customer-top"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"media align-items-center"},[s("img",{staticClass:"img-fluid",attrs:{src:t.editProfile.image,alt:""}})])])])]),t._v(" "),s("div",{staticClass:"row mt-4"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"card collapse-icon accordion-icon-rotate user_prof_acc"},[t._m(1),t._v(" "),s("div",{staticClass:"collapse show",attrs:{id:"collapse11",role:"tabpanel","aria-labelledby":"headingCollapse11"}},[s("div",{staticClass:"card-content"},[s("div",{staticClass:"card-body mt-sm-0 mt-2"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-4 col-md-4 col-12 t-c"},[s("p",{staticClass:"fieldName"},[t._v("First Name")]),t._v(" "),s("input",{staticClass:"u-edit-txt",attrs:{type:"text",name:"fname",disabled:""},domProps:{value:t.editProfile.first_name}})]),t._v(" "),s("div",{staticClass:"col-lg-4 col-md-4 col-12 t-c"},[s("p",{staticClass:"fieldName"},[t._v("Last Name")]),t._v(" "),s("input",{staticClass:"u-edit-txt",attrs:{type:"text",name:"lname",disabled:""},domProps:{value:t.editProfile.last_name}})])]),t._v(" "),s("div",{staticClass:"row mt-md-1"},[s("div",{staticClass:"col-lg-4 col-md-4 col-12 t-c"},[s("p",{staticClass:"fieldName"},[t._v("Phone Number")]),t._v(" "),s("input",{staticClass:"u-edit-txt",attrs:{type:"text",name:"cnum"},domProps:{value:"+44"+t.editProfile.phone}})]),t._v(" "),s("div",{staticClass:"col-lg-4 col-md-4 col-12 t-c"},[s("p",{staticClass:"fieldName"},[t._v("Email Address")]),t._v(" "),s("input",{staticClass:"u-edit-txt",attrs:{type:"email",name:"email",disabled:""},domProps:{value:t.editProfile.email}})])])])])]),t._v(" "),t._m(2),t._v(" "),s("div",{staticClass:"collapse show",attrs:{id:"collapse12",role:"tabpanel","aria-labelledby":"headingCollapse12","aria-expanded":"true"}},[s("div",{staticClass:"card-content"},[s("div",{staticClass:"card-body mt-sm-0 mt-2"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-4 col-md-4 col-12 t-c"},[s("p",{staticClass:"fieldName"},[t._v("Address")]),t._v(" "),s("input",{staticClass:"u-edit-txt",attrs:{type:"text",name:"fname",disabled:""},domProps:{value:t.editProfile.address}})]),t._v(" "),s("div",{staticClass:"col-lg-4 col-md-4 col-12 t-c"},[s("p",{staticClass:"fieldName"},[t._v("Country")]),t._v(" "),s("input",{staticClass:"u-edit-txt",attrs:{type:"text",name:"lname",disabled:""},domProps:{value:t.editProfile.country}})])]),t._v(" "),s("div",{staticClass:"row mt-md-1"},[s("div",{staticClass:"col-lg-4 col-md-4 col-12 t-c"},[s("p",{staticClass:"fieldName"},[t._v("State")]),t._v(" "),s("input",{staticClass:"u-edit-txt",attrs:{type:"text",name:"dob",disabled:""},domProps:{value:t.editProfile.state}})]),t._v(" "),s("div",{staticClass:"col-lg-4 col-md-4 col-12 t-c"},[s("p",{staticClass:"fieldName"},[t._v("City")]),t._v(" "),s("input",{staticClass:"u-edit-txt",attrs:{type:"text",name:"cnum",disabled:""},domProps:{value:t.editProfile.city}})])]),t._v(" "),s("div",{staticClass:"row mt-md-1 c-m-2"},[s("div",{staticClass:"col-lg-4 col-md-4 col-12 t-c"},[s("p",{staticClass:"fieldName"},[t._v("Post code")]),t._v(" "),s("input",{staticClass:"u-edit-txt",attrs:{type:"email",name:"email",disabled:""},domProps:{value:t.editProfile.zip_code}})])])])])]),t._v(" "),t._m(3),t._v(" "),s("div",{staticClass:"collapse show",attrs:{id:"collapse12",role:"tabpanel","aria-labelledby":"headingCollapse19","aria-expanded":"true"}},[s("div",{staticClass:"card-content"},[s("div",{staticClass:"card-body mt-sm-0 mt-2"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-4 col-md-4 col-12 t-c"},[s("p",{staticClass:"fieldName"},[t._v("Company Bio")]),t._v(" "),s("input",{staticClass:"u-edit-txt",attrs:{type:"text",name:"bio",disabled:""},domProps:{value:t.editProfile.bio}})]),t._v(" "),s("div",{staticClass:"col-lg-4 col-md-4 col-12 t-c"},[s("p",{staticClass:"fieldName"},[t._v("Aim And Vision")]),t._v(" "),s("input",{staticClass:"u-edit-txt",attrs:{type:"text",name:"vision",disabled:""},domProps:{value:t.editProfile.vision}})])]),t._v(" "),s("div",{staticClass:"row mt-md-1"},[s("div",{staticClass:"col-lg-4 col-md-4 col-12 t-c"},[s("p",{staticClass:"fieldName"},[t._v("No Of Employees")]),t._v(" "),s("input",{staticClass:"u-edit-txt",attrs:{type:"text",name:"no_of_employees",disabled:""},domProps:{value:t.editProfile.no_of_employees}})])])])])])])])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("router-link",{staticClass:"green-btn",attrs:{to:{name:"business.users.editProfile"}}},[t._v("Edit Profile")])],1)])])])])])])])])])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"content-header"},[a("h2",[this._v("View Profile")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"card-header",attrs:{id:"headingCollapse11"}},[a("a",{staticClass:"card-title lead",attrs:{"data-toggle":"collapse",href:"#collapse11","aria-expanded":"true","aria-controls":"collapse11"}},[this._v("Personal Information")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"card-header",attrs:{id:"headingCollapse12"}},[a("a",{staticClass:"card-title lead ",attrs:{"data-toggle":"collapse",href:"#collapse12","aria-expanded":"true","aria-controls":"collapse12"}},[this._v("Address Details")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"card-header",attrs:{id:"headingCollapse19"}},[a("a",{staticClass:"card-title lead ",attrs:{"data-toggle":"collapse",href:"#collapse12","aria-expanded":"true","aria-controls":"collapse12"}},[this._v("Company Aim And Vision")])])}],!1,null,null,null);a.default=r.exports}}]);