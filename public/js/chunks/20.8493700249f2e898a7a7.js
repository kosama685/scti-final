(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{273:function(t,e,a){"use strict";a.r(e);var i=a(0),s=a.n(i),o=a(4);function r(t,e,a,i,s,o,r){try{var l=t[o](r),n=l.value}catch(t){return void a(t)}l.done?e(n):Promise.resolve(n).then(i,s)}function l(t){return function(){var e=this,a=arguments;return new Promise((function(i,s){var o=t.apply(e,a);function l(t){r(o,i,s,l,n,"next",t)}function n(t){r(o,i,s,l,n,"throw",t)}l(void 0)}))}}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){d(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var p={data:function(){return{croppieImage:"",cropped:null,email:"",file:"",first_name:"",last_name:"",phone:"",address:"",country:"",state:"",city:"",zip_code:"",editProfile:{},componentForm:{locality:"long_name",administrative_area_level_1:"short_name",country:"long_name",postal_code:"short_name"}}},computed:c({},Object(o.d)("admin",["profile","admin"])),created:function(){var t=this;return l(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetch();case 2:t.cropped=t.editProfile.image;case 3:case"end":return e.stop()}}),e)})))()},methods:c(c({},Object(o.b)("admin",["getAll"])),{},{fetch:function(){var t=this;return l(s.a.mark((function e(){var a,i,o,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.$route.params,a.type,a.status,i={route:"api/admin/getProfile",mutation:"SET_PROFILE",variable:"data"},e.next=4,t.getAll(i);case 4:o=e.sent,r=o.data,console.log(r),t.editProfile=r.data,t.addRouteQuery({});case 9:case"end":return e.stop()}}),e)})))()},croppie:function(t){var e=this,a=t.target.files||t.dataTransfer.files;if(a.length){var i=new FileReader;i.onload=function(t){e.$refs.croppieRef.bind({url:t.target.result})},$("#cropImagePop").modal("show"),i.readAsDataURL(a[0])}},crop:function(){var t=this;this.$refs.croppieRef.result({type:"base64",size:{width:150,height:200},format:"jpeg"},(function(e){t.cropped=t.croppieImage=e,$("#cropImagePop").modal("hide"),console.log(t.croppieImage)}))},EditProfile:function(t){var e=this;return l(s.a.mark((function t(){var a,i,o;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=new FormData(e.$refs.EditProfileForm),console.log(a),t.next=4,axios.post("/api/admin/profile",a);case 4:(i=t.sent).data.data?(e.$snotify.success(i.data.message),o=e,setTimeout((function(){o.$router.push({name:"admin.users.admin.profile"})}),1e3)):e.$snotify.error(i.data.message);case 6:case"end":return t.stop()}}),t)})))()},onPlaceChanged:function(t){for(var e={locality:"city",administrative_area_level_1:"state",country:"country",postal_code:"postal_code"},a=0;a<t.place.address_components.length;a++){var i=t.place.address_components[a].types[0];this.componentForm[i]&&(this.form[e[i]]=t.place.address_components[a][this.componentForm[i]])}},onNoResult:function(){console.log("no result place")}})},m=a(1),u=Object(m.a)(p,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content-wrapper"},[a("div",{staticClass:"content-body"},[a("section",{attrs:{id:"configuration"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"card rounded pad-20"},[a("div",{staticClass:"card-content collapse show"},[a("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(e){var i=e.handleSubmit;return[a("form",{ref:"EditProfileForm",on:{submit:function(e){return e.preventDefault(),i(t.EditProfile)}}},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("h1",[a("router-link",{attrs:{to:{name:"AdminProfile"}}},[a("i",{staticClass:"fa fa-angle-left"}),t._v("Profile\n                                                    ")])],1)])]),t._v(" "),a("div",{staticClass:"content-header"},[a("h2",[t._v("Edit Profile")])]),t._v(" "),a("div",{staticClass:"customer-top"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"media align-items-center"},[a("div",{staticClass:"profile-img text-center edit-profille-img"},[a("img",{staticClass:"img-profile",attrs:{src:t.cropped,alt:""}}),t._v(" "),a("label",{staticStyle:{"margin-left":"-47px",position:"absolute",top:"89px",background:"#000",padding:"7px","border-radius":"50%"},attrs:{for:"picture"}},[a("i",{staticClass:"fa fa-camera profile-pic-icon"})]),t._v(" "),a("div",{staticClass:"d-none"},[a("input",{attrs:{type:"file",name:"file_photo",accept:".gif,.jpg,.png,.tif|image/*",id:"picture"},on:{change:t.croppie}})])]),t._v(" "),a("br"),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"cropImagePop",tabindex:"-1",role:"dialog","aria-labelledby":"myModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])]),t._v(" "),a("h4",{staticClass:"modal-title",attrs:{id:"myModalLabel"}},[t._v("\n                                                                            Edit Photo")])]),t._v(" "),a("div",{staticClass:"modal-body"},[a("vue-croppie",{ref:"croppieRef",attrs:{enableOrientation:!0,boundary:{width:450,height:300}}})],1),t._v(" "),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-default",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close\n                                                                        ")]),t._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{type:"button",id:"cropImageBtn"},on:{click:t.crop}},[t._v("Crop\n                                                                        ")])])])])]),t._v(" "),a("div",{staticClass:"media-body edit-u"},[a("a",{attrs:{href:"","data-toggle":"modal","data-target":"#changepassword"}},[t._v("Change Password")])])])])])]),t._v(" "),a("div",{staticClass:"row mt-4"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"card collapse-icon accordion-icon-rotate user_prof_acc"},[a("div",{staticClass:"card-header",attrs:{id:"headingCollapse11"}},[a("a",{staticClass:"card-title lead",attrs:{"data-toggle":"collapse",href:"#collapse11","aria-expanded":"true","aria-controls":"collapse11"}},[t._v("Personal Information")])]),t._v(" "),a("div",{staticClass:"collapse show",attrs:{id:"collapse11",role:"tabpanel","aria-labelledby":"headingCollapse11"}},[a("div",{staticClass:"card-content"},[a("div",{staticClass:"card-body mt-sm-0 mt-2"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-4 col-md-4 col-12 t-c"},[a("p",{staticClass:"fieldName"},[t._v("First Name")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.editProfile.first_name,expression:"editProfile.first_name"}],staticClass:"u-edit-txt",attrs:{type:"text",name:"first_name"},domProps:{value:t.editProfile.first_name},on:{input:function(e){e.target.composing||t.$set(t.editProfile,"first_name",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"col-lg-4 col-md-4 col-12 t-c"},[a("p",{staticClass:"fieldName"},[t._v("Last Name")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.editProfile.last_name,expression:"editProfile.last_name"}],staticClass:"u-edit-txt",attrs:{type:"text",name:"last_name"},domProps:{value:t.editProfile.last_name},on:{input:function(e){e.target.composing||t.$set(t.editProfile,"last_name",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"row mt-md-1"},[a("div",{staticClass:"col-lg-4 col-md-4 col-12 t-c"},[a("p",{staticClass:"fieldName"},[t._v("Email Address")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.editProfile.email,expression:"editProfile.email"}],staticClass:"u-edit-txt",attrs:{type:"email",name:"email",disabled:""},domProps:{value:t.editProfile.email},on:{input:function(e){e.target.composing||t.$set(t.editProfile,"email",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"col-lg-4 col-md-4 col-12 t-c"},[a("p",{staticClass:"fieldName"},[t._v("Phone Number")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.editProfile.phone,expression:"editProfile.phone"}],staticClass:"u-edit-txt",attrs:{type:"text",name:"phone"},domProps:{value:t.editProfile.phone},on:{input:function(e){e.target.composing||t.$set(t.editProfile,"phone",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"row mt-md-1 c-m-2"})])])]),t._v(" "),a("div",{staticClass:"card-header",attrs:{id:"headingCollapse12"}},[a("a",{staticClass:"card-title lead ",attrs:{"data-toggle":"collapse",href:"#collapse12","aria-expanded":"true","aria-controls":"collapse12"}},[t._v("Address Details")])]),t._v(" "),a("div",{staticClass:"collapse show",attrs:{id:"collapse12",role:"tabpanel","aria-labelledby":"headingCollapse12","aria-expanded":"true"}},[a("div",{staticClass:"card-content"},[a("div",{staticClass:"card-body mt-sm-0 mt-2"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-4 col-md-4 col-12 t-c"},[a("p",{staticClass:"fieldName"},[t._v("Address")]),t._v(" "),a("VueGooglePlaces",{staticClass:"public-chlng-fit-top-input",attrs:{"api-key":"AIzaSyAHPUufTlBkF5NfBT3uhS9K4BbW2N-mkb4",enableGeolocation:!0,enableGeocode:!0,version:"3.36",placeholder:"Input your place"},on:{placechanged:t.onPlaceChanged,noresult:t.onNoResult}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.editProfile.address,expression:"editProfile.address"}],staticClass:"u-edit-txt",attrs:{type:"text",id:"autocomplete",onfocus:"geolocate()",name:"address"},domProps:{value:t.editProfile.address},on:{input:function(e){e.target.composing||t.$set(t.editProfile,"address",e.target.value)}}})],1),t._v(" "),a("div",{staticClass:"col-lg-4 col-md-4 col-12 t-c"},[a("p",{staticClass:"fieldName"},[t._v("Country")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.editProfile.country,expression:"editProfile.country"}],staticClass:"u-edit-txt",attrs:{type:"text",id:"country",name:"country"},domProps:{value:t.editProfile.country},on:{input:function(e){e.target.composing||t.$set(t.editProfile,"country",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"row mt-md-1"},[a("div",{staticClass:"col-lg-4 col-md-4 col-12 t-c"},[a("p",{staticClass:"fieldName"},[t._v("State")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.editProfile.state,expression:"editProfile.state"}],staticClass:"u-edit-txt",attrs:{type:"text",name:"state",id:"administrative_area_level_1"},domProps:{value:t.editProfile.state},on:{input:function(e){e.target.composing||t.$set(t.editProfile,"state",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"col-lg-4 col-md-4 col-12 t-c"},[a("p",{staticClass:"fieldName"},[t._v("City")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.editProfile.city,expression:"editProfile.city"}],staticClass:"u-edit-txt",attrs:{type:"text",name:"city",id:"locality"},domProps:{value:t.editProfile.city},on:{input:function(e){e.target.composing||t.$set(t.editProfile,"city",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"row mt-md-1 c-m-2"},[a("div",{staticClass:"col-lg-4 col-md-4 col-12 t-c"},[a("p",{staticClass:"fieldName"},[t._v("Post code")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.editProfile.zip_code,expression:"editProfile.zip_code"}],staticClass:"u-edit-txt",attrs:{type:"text",name:"zip_code",id:"postal_code"},domProps:{value:t.editProfile.zip_code},on:{input:function(e){e.target.composing||t.$set(t.editProfile,"zip_code",e.target.value)}}})])])])])])])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("button",{staticClass:"green-btn",attrs:{type:"submit"}},[t._v("Update")])])])])])]}}])})],1)])])])]),t._v(" "),a("change-password-modal")],1)])}),[],!1,null,null,null);e.default=u.exports}}]);