(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{245:function(t,e,a){"use strict";a.r(e);var s=a(0),r=a.n(s);function o(t,e,a,s,r,o,i){try{var n=t[o](i),l=n.value}catch(t){return void a(t)}n.done?e(l):Promise.resolve(l).then(s,r)}var i={data:function(){return{croppieImage:"",cropped:null,email:"",file:"",first_name:"",last_name:"",phone_number:"",address:"",country:"",state:"",city:"",zip_code:"",role:""}},components:{Questionaire:function(){return a.e(48).then(a.bind(null,310))}},methods:{croppie:function(t){var e=this,a=t.target.files||t.dataTransfer.files;if(a.length){var s=new FileReader;s.onload=function(t){e.$refs.croppieRef.bind({url:t.target.result})},$("#cropImagePop").modal("show"),s.readAsDataURL(a[0])}},crop:function(){var t=this;this.$refs.croppieRef.result({type:"base64",size:{width:150,height:200},format:"jpeg"},(function(e){t.cropped=t.croppieImage=e,$("#cropImagePop").modal("hide"),console.log(t.croppieImage)}))},createUser:function(t){var e,a=this;return(e=r.a.mark((function t(){var e,s,o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=new FormData(a.$refs.EditProfileForm),console.log(e),t.next=4,axios.post("/api/admin/user/create",e);case 4:(s=t.sent).data.data?(a.$snotify.success(s.data.message),o=a,setTimeout((function(){o.$router.push({name:"Users"})}),1e3)):a.$snotify.error(s.data.message);case 6:case"end":return t.stop()}}),t)})),function(){var t=this,a=arguments;return new Promise((function(s,r){var i=e.apply(t,a);function n(t){o(i,s,r,n,l,"next",t)}function l(t){o(i,s,r,n,l,"throw",t)}n(void 0)}))})()}}},n=a(1),l=Object(n.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content-wrapper"},[a("div",{staticClass:"content-body"},[a("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(e){var s=e.handleSubmit;return[a("form",{ref:"EditProfileForm",on:{submit:function(e){return e.preventDefault(),s(t.createUser)}}},[a("section",{staticClass:"search view-cause",attrs:{id:"configuration"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"card rounded pad-20"},[a("div",{staticClass:"card-content collapse show"},[a("div",{staticClass:"card-body  card-dashboard"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12 col-12"},[a("h1",{staticClass:"pull-left u-m"},[a("router-link",{staticClass:"arrow-left",attrs:{to:{name:"Users"}}},[a("i",{staticClass:"fa fa-chevron-left"})]),t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\tADD USER")],1)])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"profile-img text-center edit-profille-img"},[a("img",{staticClass:"img-profile",attrs:{src:t.cropped,alt:""}}),t._v(" "),a("button",{staticClass:"camera-btn",attrs:{name:"file"}},[a("i",{staticClass:"fa fa-camera"}),t._v(" "),a("input",{attrs:{type:"file",id:"upload",name:"file_photo"},on:{change:t.croppie}})])]),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"cropImagePop",tabindex:"-1",role:"dialog","aria-labelledby":"myModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])]),t._v(" "),a("h4",{staticClass:"modal-title",attrs:{id:"myModalLabel"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tEdit Photo")])]),t._v(" "),a("div",{staticClass:"modal-body"},[a("vue-croppie",{ref:"croppieRef",attrs:{enableOrientation:!0,boundary:{width:450,height:300}}})],1),t._v(" "),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-default",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),t._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{type:"button",id:"cropImageBtn"},on:{click:t.crop}},[t._v("Crop")])])])])])])]),t._v(" "),a("div",{staticClass:"add-user-wrapper"},[a("div",{staticClass:"personal-details-wrapper"},[a("h2",[t._v("Personal Details")]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6"},[a("ValidationProvider",{attrs:{name:"First Name",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors;return[a("label",{attrs:{for:""}},[t._v("First Name")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.first_name,expression:"first_name"}],staticClass:"input-fields-article w-100 form-control",attrs:{name:"first_name",type:"text",placeholder:"Enter First Name"},domProps:{value:t.first_name},on:{input:function(e){e.target.composing||(t.first_name=e.target.value)}}}),t._v(" "),a("span",{staticClass:"text-danger"},[t._v(t._s(s[0]))])]}}],null,!0)})],1),t._v(" "),a("div",{staticClass:"col-lg-6"},[a("ValidationProvider",{attrs:{name:"Last Name",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors;return[a("label",{attrs:{for:""}},[t._v("Last Name")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.last_name,expression:"last_name"}],staticClass:"input-fields-article w-100 form-control",attrs:{name:"last_name",type:"text",placeholder:"Enter Last Name"},domProps:{value:t.last_name},on:{input:function(e){e.target.composing||(t.last_name=e.target.value)}}}),t._v(" "),a("span",{staticClass:"text-danger"},[t._v(t._s(s[0]))])]}}],null,!0)})],1)]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6"},[a("ValidationProvider",{attrs:{name:"Phone Number",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors;return[a("label",{attrs:{for:""}},[t._v(" Phone Number")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.phone_number,expression:"phone_number"}],staticClass:"input-fields-article w-100 form-control",attrs:{name:"phone_number",type:"text",value:"test@gmail.com",placeholder:"Enter Phone Number"},domProps:{value:t.phone_number},on:{input:function(e){e.target.composing||(t.phone_number=e.target.value)}}}),t._v(" "),a("span",{staticClass:"text-danger"},[t._v(t._s(s[0]))])]}}],null,!0)})],1),t._v(" "),a("div",{staticClass:"col-lg-6"},[a("ValidationProvider",{attrs:{name:"Email",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors;return[a("label",{attrs:{for:""}},[t._v("Email")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"input-fields-article w-100 form-control",attrs:{name:"email",type:"text"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),a("span",{staticClass:"text-danger"},[t._v(t._s(s[0]))])]}}],null,!0)})],1)]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6"},[a("ValidationProvider",{attrs:{name:"password",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors;return[a("label",{attrs:{for:""}},[t._v(" Password")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input-fields-article w-100 form-control",attrs:{name:"password",type:"text",placeholder:"Enter password here"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),a("span",{staticClass:"text-danger"},[t._v(t._s(s[0]))])]}}],null,!0)})],1),t._v(" "),a("div",{staticClass:"col-lg-6"},[a("ValidationProvider",{attrs:{name:"confirm_password",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors;return[a("label",{attrs:{for:""}},[t._v(" Confirm Password")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.confirm_password,expression:"confirm_password"}],staticClass:"input-fields-article w-100 form-control",attrs:{name:"confirmed",type:"text",placeholder:"Retype Password Here"},domProps:{value:t.confirm_password},on:{input:function(e){e.target.composing||(t.confirm_password=e.target.value)}}}),t._v(" "),a("span",{staticClass:"text-danger"},[t._v(t._s(s[0]))])]}}],null,!0)}),t._v(" "),a("div",{staticClass:"eye-btn"},[a("i",{staticClass:"fa fa-eye-slash",attrs:{"aria-hidden":"true"}})])],1)])]),t._v(" "),a("div",{staticClass:"personal-details-wrapper"},[a("h2",[t._v("Address Details")]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6"},[a("ValidationProvider",{attrs:{name:"Address",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors;return[a("label",{attrs:{for:""}},[t._v(" Address")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.address,expression:"address"}],staticClass:"input-fields-article w-100 form-control",attrs:{name:"address",type:"text",placeholder:"Enter Address Here"},domProps:{value:t.address},on:{input:function(e){e.target.composing||(t.address=e.target.value)}}}),t._v(" "),a("span",{staticClass:"text-danger"},[t._v(t._s(s[0]))])]}}],null,!0)})],1),t._v(" "),a("div",{staticClass:"col-lg-6"},[a("ValidationProvider",{attrs:{name:"Country",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors;return[a("label",{attrs:{for:""}},[t._v(" Country")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.country,expression:"country"}],staticClass:"input-fields-article w-100 form-control",attrs:{name:"country",type:"text",placeholder:"Enter Country Here"},domProps:{value:t.country},on:{input:function(e){e.target.composing||(t.country=e.target.value)}}}),t._v(" "),a("span",{staticClass:"text-danger"},[t._v(t._s(s[0]))])]}}],null,!0)})],1)]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6"},[a("ValidationProvider",{attrs:{name:"State",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors;return[a("label",{attrs:{for:""}},[t._v(" State")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.state,expression:"state"}],staticClass:"input-fields-article w-100 form-control",attrs:{name:"state",type:"text",placeholder:"Enter state here"},domProps:{value:t.state},on:{input:function(e){e.target.composing||(t.state=e.target.value)}}}),t._v(" "),a("span",{staticClass:"text-danger"},[t._v(t._s(s[0]))])]}}],null,!0)})],1),t._v(" "),a("div",{staticClass:"col-lg-6"},[a("ValidationProvider",{attrs:{name:"City",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors;return[a("label",{attrs:{for:""}},[t._v(" City")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.city,expression:"city"}],staticClass:"input-fields-article w-100 form-control",attrs:{name:"city",type:"text",placeholder:"Enter city here"},domProps:{value:t.city},on:{input:function(e){e.target.composing||(t.city=e.target.value)}}}),t._v(" "),a("span",{staticClass:"text-danger"},[t._v(t._s(s[0]))])]}}],null,!0)})],1)]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6"},[a("ValidationProvider",{attrs:{name:"Post code",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors;return[a("label",{attrs:{for:""}},[t._v(" Post code")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.zip_code,expression:"zip_code"}],staticClass:"input-fields-article w-100 form-control",attrs:{name:"zip_code",type:"text",placeholder:"Enter Post code here"},domProps:{value:t.zip_code},on:{input:function(e){e.target.composing||(t.zip_code=e.target.value)}}}),t._v(" "),a("span",{staticClass:"text-danger"},[t._v(t._s(s[0]))])]}}],null,!0)}),t._v(" "),a("input",{attrs:{type:"hidden",name:"role",value:"2"}})],1)])]),t._v(" "),a("Questionaire"),t._v(" "),a("div",{staticClass:"cancel-and-update-button-wrapper text-center"},[a("button",{staticClass:"primary-button",attrs:{type:"submit"}},[t._v("Add")])])],1)])])])])])])])]}}])})],1)])}),[],!1,null,null,null);e.default=l.exports}}]);