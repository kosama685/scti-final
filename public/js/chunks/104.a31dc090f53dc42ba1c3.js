(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{266:function(t,a,s){"use strict";s.r(a);var e=s(0),i=s.n(e);function c(t,a,s,e,i,c,l){try{var r=t[c](l),o=r.value}catch(t){return void s(t)}r.done?a(o):Promise.resolve(o).then(e,i)}function l(t){return function(){var a=this,s=arguments;return new Promise((function(e,i){var l=t.apply(a,s);function r(t){c(l,e,i,r,o,"next",t)}function o(t){c(l,e,i,r,o,"throw",t)}r(void 0)}))}}var r={data:function(){return{cv:{}}},components:{InnerPageFooter:function(){return s.e(0).then(s.bind(null,331))},RegisterHeader:function(){return s.e(1).then(s.bind(null,315))}},created:function(){var t=this;return l(i.a.mark((function a(){return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t.getProfile();case 2:case"end":return a.stop()}}),a)})))()},methods:{getProfile:function(){var t=this;return l(i.a.mark((function a(){return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,axios.get("/api/user/cv");case 2:t.cv=a.sent.data.data;case 3:case"end":return a.stop()}}),a)})))()},deleteCv:function(){var t=this;return l(i.a.mark((function a(){var s,e;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,axios.get("/api/user/cv/delete");case 2:(s=a.sent).data.data?(t.$snotify.success(s.data.message),e=t,setTimeout((function(){e.$router.push({name:"user.cvBiulder.create"})}),1e3)):t.$snotify.error(s.data.message);case 4:case"end":return a.stop()}}),a)})))()}}},o=s(1),v=Object(o.a)(r,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("register-header"),t._v(" "),s("section",{staticClass:"create-cv"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row mt-5 mb-2"},[s("div",{staticClass:"col-12 d-flex align-items-center justify-content-between top-head"},[s("router-link",{staticClass:"back-a",attrs:{to:{name:"user.users.dashboard"}}},[s("i",{staticClass:"fa fa-arrow-left",attrs:{"aria-hidden":"true"}}),t._v(" Back")]),t._v(" "),s("p",{staticClass:"page-heading"},[t._v("View CV")]),t._v(" "),s("button",{staticClass:"trash-a",attrs:{"data-toggle":"modal","data-target":"#delete-cv"},on:{click:function(a){return t.deleteCv()}}},[s("i",{staticClass:"fa fa-trash-o",attrs:{"aria-hidden":"true"}})])],1)]),t._v(" "),s("div",{staticClass:"row mt-2"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"card cv-create-card"},[t._m(0),t._v(" "),s("div",{staticClass:"card-body cv-card-body"},[s("div",{staticClass:"form-row"},[s("div",{staticClass:"col-lg-4 col-md-6 col-12"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"c-light"},[t._v("First Name")]),t._v(" "),s("p",{staticClass:"reg-p"},[t._v(t._s(t.cv.first_name))])])]),t._v(" "),s("div",{staticClass:"col-lg-4 col-md-6 col-12"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"c-light"},[t._v("Last Name")]),t._v(" "),s("p",{staticClass:"reg-p"},[t._v(t._s(t.cv.last_name))])])]),t._v(" "),s("div",{staticClass:"col-lg-4 col-md-6  col-12"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"c-light"},[t._v("Date Of Birth")]),t._v(" "),s("p",{staticClass:"reg-p"},[t._v(t._s(t.formatDate(t.cv.dob)))])])])]),t._v(" "),s("div",{staticClass:"form-row"},[s("div",{staticClass:"col-lg-4 col-md-6 col-12"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"c-light"},[t._v("Phone Number")]),t._v(" "),s("p",{staticClass:"reg-p"},[t._v(t._s(t.cv.phone_number))])])]),t._v(" "),s("div",{staticClass:"col-lg-4 col-md-6 col-12"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"c-light"},[t._v("Email Address")]),t._v(" "),s("p",{staticClass:"reg-p"},[t._v(t._s(t.cv.email))])])])]),t._v(" "),s("div",{staticClass:"form-row"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"c-light"},[t._v("Profession")]),t._v(" "),s("p",{staticClass:"reg-p"},[t._v(t._s(t.cv.profession))])])])])]),t._v(" "),s("div",{attrs:{id:"accordion"}},[t._m(1),t._v(" "),s("div",{staticClass:"collapse show",attrs:{id:"collapseOne","aria-labelledby":"headingOne","data-parent":"#accordion"}},t._l(t.cv.experience,(function(a){return s("div",{staticClass:"card-body cv-card-body"},[s("div",{staticClass:"form-row"},[s("div",{staticClass:"col-lg-4 col-md-6 col-12"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"c-light"},[t._v("Job Title")]),t._v(" "),s("p",{staticClass:"reg-p"},[t._v(t._s(a.job_title))])])]),t._v(" "),s("div",{staticClass:"col-lg-4 col-md-6 col-12"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"c-light"},[t._v("Company Name")]),t._v(" "),s("p",{staticClass:"reg-p"},[t._v(t._s(a.company_name))])])]),t._v(" "),s("div",{staticClass:"col-lg-4 col-md-6  col-12"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"c-light"},[t._v("Job Type")]),t._v(" "),s("p",{staticClass:"reg-p"},[t._v(t._s(a.job_type))])])])]),t._v(" "),s("div",{staticClass:"form-row"},[s("div",{staticClass:"col-lg-4 col-md-6 col-12"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"c-light"},[t._v("Start Date")]),t._v(" "),s("p",{staticClass:"reg-p"},[t._v(t._s(t.formatDate(a.start_date)))])])]),t._v(" "),s("div",{staticClass:"col-lg-4 col-md-6 col-12"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"c-light"},[t._v("End Date")]),t._v(" "),s("p",{staticClass:"reg-p"},[t._v(t._s(t.formatDate(a.end_date)))])])])]),t._v(" "),s("div",{staticClass:"form-row"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"c-light"},[t._v("Job Description")]),t._v(" "),s("p",{staticClass:"reg-p"},[t._v(t._s(a.description))])])])])])})),0),t._v(" "),t._m(2),t._v(" "),s("div",{staticClass:"collapse show",attrs:{id:"collapseTwo","aria-labelledby":"card_two","data-parent":"#accordion"}},t._l(t.cv.education,(function(a){return s("div",{staticClass:"card-body cv-card-body"},[s("div",{staticClass:"form-row"},[s("div",{staticClass:"col-lg-4 col-md-6 col-12"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"c-light"},[t._v("Highest Degree")]),t._v(" "),s("p",{staticClass:"reg-p"},[t._v(t._s(a.degree))])])]),t._v(" "),s("div",{staticClass:"col-lg-4 col-md-6 col-12"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"c-light"},[t._v("Subject")]),t._v(" "),s("div",{staticClass:"tag-wrapper"},[s("span",{staticClass:"cv-tags"},[t._v(t._s(a.subject))])])])]),t._v(" "),s("div",{staticClass:"col-lg-4 col-md-6 col-12"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"c-light"},[t._v("Institute Name")]),t._v(" "),s("p",{staticClass:"reg-p"},[t._v(t._s(a.institute_name))])])])]),t._v(" "),s("div",{staticClass:"form-row"},[s("div",{staticClass:"col-lg-4 col-md-6 col-12"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"c-light"},[t._v("Start Date")]),t._v(" "),s("p",{staticClass:"reg-p"},[t._v(t._s(t.formatDate(a.start_date)))])])]),t._v(" "),s("div",{staticClass:"col-lg-4 col-md-6 col-12"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"c-light"},[t._v("End Date")]),t._v(" "),s("p",{staticClass:"reg-p"},[t._v(t._s(t.formatDate(a.end_date)))])])])])])})),0),t._v(" "),t._m(3),t._v(" "),s("div",{staticClass:"collapse show",attrs:{id:"collapseThree","aria-labelledby":"card_three","data-parent":"#accordion"}},[s("div",{staticClass:"card-body cv-card-body"},[s("div",{staticClass:"form-row"},[s("div",{staticClass:"col-xl-12"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"c-light"},[t._v("Subject")]),t._v(" "),s("div",{staticClass:"tag-wrapper"},[s("span",{staticClass:"cv-tags"},[t._v(t._s(t.cv.interest_subject))])])])])]),t._v(" "),s("div",{staticClass:"form-row"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"c-light"},[t._v("Interest")]),t._v(" "),s("p",{staticClass:"reg-p"},[t._v(t._s(t.cv.interest_desc))])])]),t._v(" "),s("div",{staticClass:"col-lg-12"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"c-light"},[t._v("Language")]),t._v(" "),s("div",{staticClass:"tag-wrapper"},[s("span",{staticClass:"lng-tag"},[t._v(t._s(t.cv.lang))])])])])])])])]),t._v(" "),s("div",{staticClass:"form-row"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"button_wrap text-center"},[s("router-link",{staticClass:"btn-cv bloo",attrs:{to:{name:"user.cvBiulder.edit"}}},[t._v("Edit")])],1)])])])])])])]),t._v(" "),s("inner-page-footer")],1)}),[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"card-header cv-header"},[a("p",[this._v("Personal Information")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"card-header cv-header br-0 ",attrs:{id:"headingOne","data-toggle":"collapse","data-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"}},[a("p",[this._v("Experience Information")]),this._v(" "),a("i",{staticClass:"fa fa-angle-down",attrs:{"aria-hidden":"true"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"card-header cv-header br-0 ",attrs:{id:"card_two","data-toggle":"collapse","data-target":"#collapseTwo","aria-expanded":"true","aria-controls":"collapseTwo"}},[a("p",[this._v("Educational Details")]),this._v(" "),a("i",{staticClass:"fa fa-angle-down",attrs:{"aria-hidden":"true"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"card-header cv-header br-0 ",attrs:{id:"card_three","data-toggle":"collapse","data-target":"#collapseThree","aria-expanded":"true","aria-controls":"collapseThree"}},[a("p",[this._v("Interest & Skills")]),this._v(" "),a("i",{staticClass:"fa fa-angle-down",attrs:{"aria-hidden":"true"}})])}],!1,null,null,null);a.default=v.exports}}]);