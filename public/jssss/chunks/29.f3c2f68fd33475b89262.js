(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{315:function(e,t,a){"use strict";a.r(t);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var i={props:{isCreate:{type:Boolean,required:!1,default:!1},propExperiences:{type:Array,required:!1,default:null}},data:function(){var e;return r(e={job_type:["Full Time","Part Time"],job_type_select:"",job_title:"",comp_name:""},"job_type_select",""),r(e,"exp_strt_date",""),r(e,"exp_end_date",""),r(e,"current_check",""),r(e,"description",""),r(e,"experiences",[]),r(e,"isHidden",!1),e},created:function(){this.isCreate?this.experiences.push(this.experienceObj()):this.experiences=this.propExperiences},watch:{propExperiences:{handler:function(e){this.experiences=e},immediate:!1}},mounted:function(){console.log("this.propEducations",this.experiences)},methods:{addExperience:function(){this.experiences.push(this.experienceObj())},experienceObj:function(){return{job_title:"",company_name:"",job_type:"",start_date:"",end_date:"",description:""}},removeValue:function(e){this.experiences.splice(e,1)}}},s=a(1),n=Object(s.a)(i,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._m(0),e._v(" "),a("div",{staticClass:"collapse show",attrs:{id:"collapseOne","aria-labelledby":"headingOne","data-parent":"#accordion"}},e._l(e.experiences,(function(t,r){return a("div",{key:r,staticClass:"card-body cv-card-body"},[a("button",{staticClass:"delete blue-btn float-right",attrs:{type:"button"},on:{click:function(t){return e.removeValue(r)}}},[a("i",{staticClass:"fa fa-trash",attrs:{"aria-hidden":"true"}})]),e._v(" "),a("div",{staticClass:"form-row"},[a("div",{staticClass:"col-xl-4 col-lg-6 col-12"},[a("div",{staticClass:"form-group"},[a("ValidationProvider",{attrs:{tag:"div",name:"job title",rules:"required",vid:"job_title"},scopedSlots:e._u([{key:"default",fn:function(r){var i=r.errors;return[a("label",{attrs:{for:"job-title"}},[e._v("Job Title")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.job_title,expression:"experience.job_title"}],staticClass:"form-control reg-input",attrs:{type:"text",id:"job-title",name:"job_title[]",placeholder:"Enter Job title"},domProps:{value:t.job_title},on:{input:function(a){a.target.composing||e.$set(t,"job_title",a.target.value)}}}),e._v(" "),a("div",{staticClass:"text-danger"},[e._v(e._s(i[0]))])]}}],null,!0)})],1)]),e._v(" "),a("div",{staticClass:"col-xl-4 col-lg-6 col-12"},[a("div",{staticClass:"form-group"},[a("ValidationProvider",{attrs:{tag:"div",name:"company name",rules:"required",vid:"comp_name"},scopedSlots:e._u([{key:"default",fn:function(r){var i=r.errors;return[a("label",{attrs:{for:"comp_name"}},[e._v("Company Name")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.company_name,expression:"experience.company_name"}],staticClass:"form-control reg-input",attrs:{type:"text",id:"comp_name",name:"company_name[]",placeholder:"Enter Company Name"},domProps:{value:t.company_name},on:{input:function(a){a.target.composing||e.$set(t,"company_name",a.target.value)}}}),e._v(" "),a("div",{staticClass:"text-danger"},[e._v(e._s(i[0]))])]}}],null,!0)})],1)]),e._v(" "),a("div",{staticClass:"col-xl-4 col-lg-12 col-12"},[a("div",{staticClass:"form-group"},[a("ValidationProvider",{attrs:{tag:"div",name:"job type",rules:"required",vid:"job_type"},scopedSlots:e._u([{key:"default",fn:function(r){var i=r.errors;return[a("label",{attrs:{for:""}},[e._v("Job Type")]),e._v(" "),a("v-select",{attrs:{placeholder:"Choose up to 3 books!",label:"title",name:"job_type[]",options:e.job_type},model:{value:t.job_type,callback:function(a){e.$set(t,"job_type",a)},expression:"experience.job_type"}}),e._v(" "),a("div",{staticClass:"text-danger"},[e._v(e._s(i[0]))])]}}],null,!0)})],1)])]),e._v(" "),a("div",{staticClass:"form-row"},[a("div",{staticClass:"col-lg-6 col-12"},[a("div",{staticClass:"form-group"},[a("ValidationProvider",{attrs:{tag:"div",name:"start date",rules:"required",vid:"strt_date"},scopedSlots:e._u([{key:"default",fn:function(r){var i=r.errors;return[a("label",{attrs:{for:"phone"}},[e._v("Start Date")]),e._v(" "),a("date-picker",{staticClass:"u-edit-txt",attrs:{id:"exp_strt_date",valueType:"format",name:"exp_strt_date[]"},model:{value:t.start_date,callback:function(a){e.$set(t,"start_date",a)},expression:"experience.start_date"}}),e._v(" "),a("div",{staticClass:"text-danger"},[e._v(e._s(i[0]))])]}}],null,!0)})],1)]),e._v(" "),a("div",{staticClass:"col-lg-6 col-12"},[a("div",{staticClass:"form-group"},[a("ValidationProvider",{attrs:{tag:"div",name:"end date",rules:"required",vid:"end_date"},scopedSlots:e._u([{key:"default",fn:function(r){var i=r.errors;return[e.isHidden?e._e():a("div",[a("label",{attrs:{for:"email"}},[e._v("End Date")]),e._v(" "),a("date-picker",{staticClass:"u-edit-txt",attrs:{id:"exp_end_date",valueType:"format",name:"exp_end_date[]"},model:{value:t.end_date,callback:function(a){e.$set(t,"end_date",a)},expression:"experience.end_date"}}),e._v(" "),a("div",{staticClass:"text-danger"},[e._v(e._s(i[0]))])],1)]}}],null,!0)}),e._v(" "),a("div",{staticClass:"form-check text-right"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.current_check,expression:"current_check"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"exampleCheck1"},domProps:{checked:Array.isArray(e.current_check)?e._i(e.current_check,null)>-1:e.current_check},on:{click:function(t){e.isHidden=!0},change:function(t){var a=e.current_check,r=t.target,i=!!r.checked;if(Array.isArray(a)){var s=e._i(a,null);r.checked?s<0&&(e.current_check=a.concat([null])):s>-1&&(e.current_check=a.slice(0,s).concat(a.slice(s+1)))}else e.current_check=i}}}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.current_check,expression:"current_check"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"exampleCheck1"},domProps:{checked:Array.isArray(e.current_check)?e._i(e.current_check,null)>-1:e.current_check},on:{click:function(t){e.isHidden=!e.isHidden},change:function(t){var a=e.current_check,r=t.target,i=!!r.checked;if(Array.isArray(a)){var s=e._i(a,null);r.checked?s<0&&(e.current_check=a.concat([null])):s>-1&&(e.current_check=a.slice(0,s).concat(a.slice(s+1)))}else e.current_check=i}}}),e._v(" "),a("label",{staticClass:"form-check-label",attrs:{for:"exampleCheck1"}},[e._v("I Currently Work Here")])])],1)])]),e._v(" "),a("div",{staticClass:"form-row"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"form-group"},[a("ValidationProvider",{attrs:{tag:"div",name:"description",rules:"required",vid:"description"},scopedSlots:e._u([{key:"default",fn:function(r){var i=r.errors;return[a("label",[e._v("Job Description")]),e._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"experience.description"}],attrs:{name:"description[]",id:"",cols:"30",rows:"10"},domProps:{value:t.description},on:{input:function(a){a.target.composing||e.$set(t,"description",a.target.value)}}}),e._v(" "),a("div",{staticClass:"text-danger"},[e._v(e._s(i[0]))])]}}],null,!0)})],1)])]),e._v(" "),a("div",{staticClass:"form-row"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"btn-wrap"},[r==e.experiences.length-1?a("button",{staticClass:"blue-btn",attrs:{type:"button"},on:{click:function(t){return e.addExperience()}}},[a("i",{staticClass:"fa fa-plus",attrs:{"aria-hidden":"true"}}),e._v(" "),a("span",[e._v("Add More")])]):e._e()])])])])})),0)])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"card-header cv-header br-0 ",attrs:{id:"headingOne","data-toggle":"collapse","data-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"}},[t("p",[this._v("Experience Information")]),this._v(" "),t("i",{staticClass:"fa fa-angle-down",attrs:{"aria-hidden":"true"}})])}],!1,null,null,null);t.default=n.exports}}]);