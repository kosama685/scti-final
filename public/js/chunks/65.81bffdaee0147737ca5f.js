(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{285:function(a,e,t){"use strict";t.r(e);var s=t(0),n=t.n(s);function i(a,e,t,s,n,i,c){try{var r=a[i](c),o=r.value}catch(a){return void t(a)}r.done?e(o):Promise.resolve(o).then(s,n)}function c(a){return function(){var e=this,t=arguments;return new Promise((function(s,n){var c=a.apply(e,t);function r(a){i(c,s,n,r,o,"next",a)}function o(a){i(c,s,n,r,o,"throw",a)}r(void 0)}))}}function r(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}var o={data:function(){var a;return r(a={packages:{},package_name:"",charges:"",duration:"",package_description:"",package_id:"",userType:0,descriptions:[],packages_id:[]},"charges",[]),r(a,"package_name",[]),r(a,"duration",[]),r(a,"package_description",[]),r(a,"isHidden",!1),a},created:function(){var a=this;return c(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.getPackage();case 2:case"end":return e.stop()}}),e)})))()},methods:{getPackage:function(){var a=this;return c(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.userType=a.$route.params.id,e.next=3,axios.get("/api/admin/package/".concat(a.$route.params.id));case 3:a.packages=e.sent.data.data;case 4:case"end":return e.stop()}}),e)})))()},editPackage_2:function(){var a=this;return c(n.a.mark((function e(){var t,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("function 1"),t=new FormData(a.$refs.EditPackageForm),a.descriptions.push(a.packages[0].description),a.descriptions.push(a.packages[1].description),a.packages_id.push(a.packages[0].id),a.packages_id.push(a.packages[1].id),a.charges.push(a.packages[0].charges),a.charges.push(a.packages[1].charges),a.package_name.push(a.packages[0].package_name),a.package_name.push(a.packages[1].package_name),a.duration.push(a.packages[0].duration),a.duration.push(a.packages[1].duration),console.log("duratinos is",a.duration),console.log("Package name is ",a.package_name),t.append("packages_id",a.packages_id),t.append("package_name",a.package_name),t.append("charges",a.charges),t.append("duration",a.duration),t.append("package_description",a.descriptions),console.log("package_name is ",a.package_name),e.next=22,axios.post("/api/admin/package/update",t);case 22:s=e.sent,console.log(s),a.$snotify.success(s.data.message);case 25:case"end":return e.stop()}}),e)})))()},editPackage:function(){var a=this;return c(n.a.mark((function e(){var t,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("function 2"),t=new FormData(a.$refs.EditPackageForm),a.descriptions.push(a.packages[0].description),a.packages_id.push(a.packages[0].id),a.charges.push(a.packages[0].charges),a.package_name.push(a.packages[0].package_name),a.duration.push(a.packages[0].duration),a.descriptions.push(a.packages[1].description),a.packages_id.push(a.packages[1].id),a.charges.push(a.packages[1].charges),a.package_name.push(a.packages[1].package_name),a.duration.push(a.packages[1].duration),console.log("duratinos is",a.duration),t.append("packages_id",a.packages_id),t.append("package_name",a.package_name),t.append("charges",a.charges),t.append("duration",a.duration),t.append("package_description",a.descriptions),console.log("Duration is ",a.descriptions),e.next=21,axios.post("/api/admin/package/update",t);case 21:s=e.sent,console.log(s),a.$snotify.success(s.data.message);case 24:case"end":return e.stop()}}),e)})))()}}},d=t(1),l=Object(d.a)(o,(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"content-wrapper"},[t("div",{staticClass:"content-body"},[t("section",{attrs:{id:"configuration"}},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-12"},[t("div",{staticClass:"card rounded pad-20"},[t("div",{staticClass:"card-content collapse show"},[t("ValidationObserver",{scopedSlots:a._u([{key:"default",fn:function(e){e.handleSubmit;return[t("div",{staticClass:"card-body"},[t("div",{staticClass:"row align-items-center"},[t("div",{staticClass:"col-md-6 col-12"},[t("h1",{staticClass:"m-0 ch"},[t("router-link",{attrs:{to:{name:"PackageManagement"}}},[t("i",{staticClass:"fa fa-angle-left"}),a._v("Package Management")])],1)]),a._v(" "),t("div",{staticClass:"col-md-6 col-12 text-right"},[a.isHidden?t("button",{staticClass:"green-btn m-0 text-center e-bt",attrs:{type:"submit"},on:{click:function(e){return a.editPackage()}}},[a._v("Update")]):a._e(),a._v(" "),a.isHidden?a._e():t("button",{staticClass:"green-btn m-0 text-center e-bt",attrs:{type:"submit"},on:{click:function(e){return a.editPackage_2()}}},[a._v("Update")])])]),a._v(" "),t("nav",[t("div",{staticClass:"nav nav-tabs",attrs:{id:"nav-tab",role:"tablist"}},[t("a",{class:0==a.userType?"nav-item nav-link ":"nav-item nav-link",attrs:{id:"nav-user-tab","data-toggle":"tab",href:"#nav-user",role:"tab","aria-controls":"nav-user","aria-selected":"true"},on:{click:function(e){a.isHidden=!0}}},[a._v("Users")]),a._v(" "),t("a",{class:1==a.userType?"nav-item nav-link ":"nav-item nav-link",attrs:{id:"nav-employer-tab","data-toggle":"tab",href:"#nav-employer",role:"tab","aria-controls":"nav-employer","aria-selected":"false"},on:{click:function(e){a.isHidden=!a.isHidden}}},[a._v("Business Owners")])])]),a._v(" "),t("div",{staticClass:"tab-content",attrs:{id:"nav-tabContent"}},[t("div",{staticClass:"tab-pane fade show active",attrs:{id:"nav-user",role:"tabpanel","aria-labelledby":"nav-user-tab"}},a._l(a.packages,(function(e,s){return t("div",{key:s,staticClass:"card collapse-icon accordion-icon-rotate user_prof_acc"},[t("div",{staticClass:"card-header",attrs:{id:"headingCollapse12"}},[t("a",{staticClass:"card-title lead ",attrs:{"data-toggle":"collapse",href:"#collapse12","aria-expanded":"true","aria-controls":"collapse12"}},[a._v("Package 0"+a._s(s))])]),a._v(" "),t("div",{staticClass:"collapse show",attrs:{id:"collapse12",role:"tabpanel","aria-labelledby":"headingCollapse12","aria-expanded":"true"}},[t("div",{staticClass:"card-content"},[t("div",{staticClass:"card-body mt-sm-0 mt-2"},[t("div",{staticClass:"row align-items-center"},[t("div",{staticClass:"col-lg-3 col-md-3 col-12 t-c"},[t("p",{staticClass:"fieldName"},[a._v("Package Name")])]),a._v(" "),t("div",{staticClass:"col-lg-3 col-md-5 col-12 t-c"},[t("ValidationProvider",{attrs:{name:"package_name",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(s){var n=s.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:e.package_name,expression:"pk.package_name"}],staticClass:"form-control cat-input input-pckg",attrs:{type:"text",name:"package_name[]"},domProps:{value:e.package_name},on:{input:function(t){t.target.composing||a.$set(e,"package_name",t.target.value)}}}),a._v(" "),t("span",{staticClass:"text-danger"},[a._v(a._s(n[0]))])]}}],null,!0)})],1)]),a._v(" "),t("div",{staticClass:"row align-items-center mt-2"},[t("div",{staticClass:"col-lg-3 col-md-3 col-12 t-c"},[t("p",{staticClass:"fieldName"},[a._v("Package Description")])]),a._v(" "),t("div",{staticClass:"col-lg-12 col-md-5 col-12 t-c"},[t("ValidationProvider",{attrs:{name:"description",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(s){var n=s.errors;return[t("quill-editor",{staticClass:"form-control cat-input input-pckg",attrs:{name:"package_description[]"},model:{value:e.description,callback:function(t){a.$set(e,"description",t)},expression:"pk.description"}}),a._v(" "),t("span",{staticClass:"text-danger"},[a._v(a._s(n[0]))])]}}],null,!0)})],1)]),a._v(" "),t("div",{staticClass:"row align-items-center mt-2"},[t("div",{staticClass:"col-lg-3 col-md-3 col-12 t-c"},[t("p",{staticClass:"fieldName"},[a._v("Charges")])]),a._v(" "),t("div",{staticClass:"col-lg-3 col-md-5 col-12 t-c "},[t("ValidationProvider",{attrs:{name:"charges",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(s){var n=s.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:e.charges,expression:"pk.charges"}],staticClass:"form-control cat-input input-pckg",attrs:{type:"text",name:"charges[]"},domProps:{value:e.charges},on:{input:function(t){t.target.composing||a.$set(e,"charges",t.target.value)}}}),a._v(" "),t("span",{staticClass:"text-danger"},[a._v(a._s(n[0]))])]}}],null,!0)})],1)]),a._v(" "),t("div",{staticClass:"row align-items-center mt-2"},[t("div",{staticClass:"col-lg-3 col-md-3 col-12 t-c"},[t("p",{staticClass:"fieldName"},[a._v("Durations")])]),a._v(" "),t("div",{staticClass:"col-lg-3 col-md-5 col-12 t-c "},[t("ValidationProvider",{attrs:{name:"duration",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(s){var n=s.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:e.duration,expression:"pk.duration"}],staticClass:"form-control cat-input input-pckg",attrs:{type:"number",name:"duration[]",max:"12"},domProps:{value:e.duration},on:{input:function(t){t.target.composing||a.$set(e,"duration",t.target.value)}}}),a._v(" "),t("span",{staticClass:"text-danger"},[a._v(a._s(n[0]))])]}}],null,!0)})],1)]),a._v(" "),t("ValidationProvider",{attrs:{name:"package_id"},scopedSlots:a._u([{key:"default",fn:function(s){var n=s.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:e.id,expression:"pk.id"}],attrs:{type:"hidden",name:"package_id[]"},domProps:{value:e.id},on:{input:function(t){t.target.composing||a.$set(e,"id",t.target.value)}}}),a._v(" "),t("span",{staticClass:"text-danger"},[a._v(a._s(n[0]))])]}}],null,!0)})],1)])])])})),0)])])]}}])})],1)])])])])])])}),[],!1,null,null,null);e.default=l.exports}}]);