(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{309:function(t,e,a){"use strict";a.r(e);var s=a(0),r=a.n(s);function i(t,e,a,s,r,i,n){try{var c=t[i](n),l=c.value}catch(t){return void a(t)}c.done?e(l):Promise.resolve(l).then(s,r)}function n(t){return function(){var e=this,a=arguments;return new Promise((function(s,r){var n=t.apply(e,a);function c(t){i(n,s,r,c,l,"next",t)}function l(t){i(n,s,r,c,l,"throw",t)}c(void 0)}))}}var c={inject:["formatDate"],data:function(){return{questionaires:{},answers:{}}},created:function(){var t=this;return n(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getQuestionaire();case 2:case"end":return e.stop()}}),e)})))()},methods:{getQuestionaire:function(){var t=this;return n(r.a.mark((function e(){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,axios.get("/api/public/getQuestionaire");case 2:a=e.sent,t.questionaires=a.data;case 4:case"end":return e.stop()}}),e)})))()}}},l=a(1),o=Object(l.a)(c,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"personal-details-wrapper career-details-wrapper mt-5"},[a("h2",[t._v("Career Details")]),t._v(" "),t._l(t.questionaires.data,(function(e,s){return a("div",{key:s,staticClass:"row"},[a("div",{staticClass:"col-lg-9"},[a("p",[a("strong",{staticClass:"pr-2"},[t._v("Q"+t._s(s+1)+":")]),t._v(" "+t._s(e.questions)+" ")]),t._v(" "),"checkbox"==e.answer_type?a("div",{staticClass:"row"},t._l(JSON.parse(e.answers),(function(s,r){return a("div",{key:r,staticClass:"d-flex justify-content-between"},[a("div",{staticClass:"remember-sec-wrapper register-main px-0"},[a("ValidationProvider",{attrs:{tag:"div",name:"Check Box"},scopedSlots:t._u([{key:"default",fn:function(r){var i=r.errors;return[a("label",{staticClass:"check"},[t._v(t._s(s)+"\n\t\t\t\t\t\t\t\t"),a("input",{attrs:{spellcheck:"true",name:"value_"+e.id+"[]",type:"checkbox"},domProps:{value:s}}),t._v(" "),a("span",{staticClass:"checkmark"})]),t._v(" "),a("div",{staticClass:"text-danger"},[t._v(t._s(i[0]))])]}}],null,!0)})],1)])})),0):"radio"==e.answer_type?a("div",{staticClass:"row"},t._l(JSON.parse(e.answers),(function(s,r){return a("div",{key:r,staticClass:"d-flex justify-content-between round-checkbox"},[a("div",{staticClass:"remember-sec-wrapper px-0"},[a("ValidationProvider",{attrs:{tag:"div",name:"Check Box"},scopedSlots:t._u([{key:"default",fn:function(r){var i=r.errors;return[a("label",{staticClass:"check"},[t._v(t._s(s)+"\n\t\t\t\t\t\t\t"),a("input",{attrs:{spellcheck:"true",name:"value_"+e.id+"[]",type:"checkbox"},domProps:{value:s}}),t._v(" "),a("span",{staticClass:"checkmark"})]),t._v(" "),a("div",{staticClass:"text-danger"},[t._v(t._s(i[0]))])]}}],null,!0)})],1)])})),0):"textarea"==e.answer_type?a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-8"},[a("div",{staticClass:"remember-sec-wrapper px-0"},[a("ValidationProvider",{attrs:{tag:"div",name:"Check Box"},scopedSlots:t._u([{key:"default",fn:function(s){var r=s.errors;return[a("textarea",{staticClass:"w-100 ans-sec",attrs:{name:"value_"+e.id+"[]"}}),t._v(" "),a("div",{staticClass:"text-danger"},[t._v(t._s(r[0]))])]}}],null,!0)})],1)])]):"dropdown"==e.answer_type?a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"remember-sec-wrapper px-0"},[a("ValidationProvider",{attrs:{tag:"div",name:"Check Box"},scopedSlots:t._u([{key:"default",fn:function(s){var r=s.errors;return[a("select",{staticClass:"select-opt w-100",attrs:{name:"value_"+e.id+"[]",id:""}},t._l(JSON.parse(e.answers),(function(e,s){return a("option",{key:s,domProps:{value:e}},[t._v(t._s(e))])})),0),t._v(" "),a("div",{staticClass:"text-danger"},[t._v(t._s(r[0]))])]}}],null,!0)})],1)])]):"file"==e.answer_type?a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"remember-sec-wrapper px-0"},[a("ValidationProvider",{attrs:{tag:"div",name:"Check Box"},scopedSlots:t._u([{key:"default",fn:function(s){var r=s.errors;return[a("input",{attrs:{type:"file",name:"file",name:"value_"+e.id+"[]"}}),t._v(" "),a("div",{staticClass:"text-danger"},[t._v(t._s(r[0]))])]}}],null,!0)})],1)])]):"date"==e.answer_type?a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-8"},[a("div",{staticClass:"remember-sec-wrapper px-0"},[a("ValidationProvider",{attrs:{tag:"div",name:"Check Box"},scopedSlots:t._u([{key:"default",fn:function(s){var r=s.errors;return[a("input",{attrs:{type:"date",name:"value_"+e.id+"[]"}}),t._v(" "),a("div",{staticClass:"text-danger"},[t._v(t._s(r[0]))])]}}],null,!0)})],1)])]):"time"==e.answer_type?a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-8"},[a("div",{staticClass:"remember-sec-wrapper px-0"},[a("ValidationProvider",{attrs:{tag:"div",name:"Check Box"},scopedSlots:t._u([{key:"default",fn:function(s){var r=s.errors;return[a("input",{attrs:{type:"time",name:"value_"+e.id+"[]"}}),t._v(" "),a("div",{staticClass:"text-danger"},[t._v(t._s(r[0]))])]}}],null,!0)})],1)])]):t._e()])])}))],2)}),[],!1,null,null,null);e.default=o.exports}}]);