(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[89],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/pages/Job/company_info.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/user/pages/Job/company_info.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


var _created$components$d;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var InnerPageFooter = function InnerPageFooter() {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../../components/InnerPageFooter.vue */ "./resources/js/views/user/components/InnerPageFooter.vue"));
};

var RegisterHeader = function RegisterHeader() {
  return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../../components/RegisterHeader.vue */ "./resources/js/views/user/components/RegisterHeader.vue"));
};

var ChatComponent = function ChatComponent() {
  return __webpack_require__.e(/*! import() */ 5).then(__webpack_require__.bind(null, /*! ../../chat/ChatComponent.vue */ "./resources/js/views/user/chat/ChatComponent.vue"));
};

/* harmony default export */ __webpack_exports__["default"] = (_created$components$d = {
  created: function created() {},
  components: {
    InnerPageFooter: InnerPageFooter,
    RegisterHeader: RegisterHeader,
    ChatComponent: ChatComponent
  },
  data: function data() {
    return {
      joblogs: {},
      applied: true,
      user_id: '',
      job_user_id: '',
      packageBooleanTrial: 0
    };
  }
}, _defineProperty(_created$components$d, "created", function created() {
  var _this = this;

  return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _this.getJobLogs();

          case 2:
            _context.next = 4;
            return _this.checkAppliedJob();

          case 4:
            _this.packageBooleanTrial = localStorage.getItem('packageBooleanTrial');

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }))();
}), _defineProperty(_created$components$d, "methods", {
  getJobLogs: function getJobLogs() {
    var _this2 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return axios.get("api/admin/candidate/job/".concat(_this2.$route.params.id));

            case 2:
              res = _context2.sent;
              _this2.joblogs = res.data.data[0];
              console.log(_this2.joblogs);
              _this2.user_id = _this2.joblogs.user_id;
              _this2.job_user_id = _this2.joblogs.user.uuid;

              _this2.$snotify.success('Job fetch successfully');

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  appliedJob: function appliedJob() {
    var _this3 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
      var res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return axios.get("api/user/job/".concat(_this3.$route.params.id, "/user"));

            case 2:
              res = _context3.sent;
              _this3.applied = false;

              if (res.data.status == 'Failed') {
                _this3.$snotify.warning(res.data.message);
              } else {
                _this3.$snotify.success(res.data.message);
              }

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },
  checkAppliedJob: function checkAppliedJob() {
    var _this4 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
      var res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return axios.get("api/admin/job/".concat(_this4.$route.params.id, "/candidate/user"));

            case 2:
              res = _context4.sent;

              if (res.data) {
                _this4.applied = false;
              }

              ; // this.$snotify.success(res.data.message);

            case 5:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }))();
  }
}), _created$components$d);

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/pages/Job/company_info.vue?vue&type=template&id=a43dd13c&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/user/pages/Job/company_info.vue?vue&type=template&id=a43dd13c& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("register-header"),
      _vm._v(" "),
      _c("section", { staticClass: "create-cv" }, [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row mt-5 mb-2" }, [
            _c(
              "div",
              { staticClass: "col-12 d-flex align-items-center job-head" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "back-a",
                    attrs: { to: { name: "user.job.show" } }
                  },
                  [
                    _c("i", {
                      staticClass: "fa fa-arrow-left",
                      attrs: { "aria-hidden": "true" }
                    }),
                    _vm._v(" Back")
                  ]
                ),
                _vm._v(" "),
                _c("p", { staticClass: "page-heading" }, [
                  _vm._v("Company Info")
                ])
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row mt-2" }, [
            _c("div", { staticClass: "col-12" }, [
              _c(
                "form",
                {
                  staticClass: "create-cv",
                  attrs: { id: "msform", action: "" }
                },
                [
                  _c("div", { staticClass: "card cv-create-card" }, [
                    _vm._m(0),
                    _vm._v(" "),
                    _c("div", { staticClass: "card-body cv-card-body" }, [
                      _c("div", { staticClass: "form-row" }, [
                        _c("div", { staticClass: "col-lg-4 col-md-6 col-12" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", { staticClass: "c-light" }, [
                              _vm._v("Company Name")
                            ]),
                            _vm._v(" "),
                            _c("p", { staticClass: "reg-p" }, [
                              _vm._v(_vm._s(_vm.joblogs.user.name))
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-lg-4 col-md-6 col-12" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", { staticClass: "c-light" }, [
                              _vm._v("Company Email")
                            ]),
                            _vm._v(" "),
                            _c("p", { staticClass: "reg-p" }, [
                              _vm._v(_vm._s(_vm.joblogs.user.email))
                            ])
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-row" }, [
                        _c("div", { staticClass: "col-lg-4 col-md-6 col-12" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", { staticClass: "c-light" }, [
                              _vm._v("Company Address")
                            ]),
                            _vm._v(" "),
                            _c("p", { staticClass: "reg-p" }, [
                              _vm._v(_vm._s(_vm.joblogs.user.address))
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-lg-4 col-md-6 col-12" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", { staticClass: "c-light" }, [
                              _vm._v("Company Bio")
                            ]),
                            _vm._v(" "),
                            _c("p", { staticClass: "reg-p" }, [
                              _c("i", {}),
                              _vm._v(" " + _vm._s(_vm.joblogs.user.bio))
                            ])
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-row" }, [
                        _c("div", { staticClass: "col-lg-4 col-md-6 col-12" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", { staticClass: "c-light" }, [
                              _vm._v("Company Vision")
                            ]),
                            _vm._v(" "),
                            _c("p", { staticClass: "reg-p" }, [
                              _vm._v(_vm._s(_vm.joblogs.user.vision))
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-lg-4 col-md-6 col-12" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", { staticClass: "c-light" }, [
                              _vm._v("No Of Employees")
                            ]),
                            _vm._v(" "),
                            _c("p", { staticClass: "reg-p" }, [
                              _vm._v(
                                _vm._s(
                                  _vm.formatDate(
                                    _vm.joblogs.user.no_of_employees
                                  )
                                )
                              )
                            ])
                          ])
                        ])
                      ])
                    ])
                  ])
                ]
              )
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("inner-page-footer")
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header cv-header" }, [
      _c("p", [_vm._v("Personal Information")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/user/pages/Job/company_info.vue":
/*!************************************************************!*\
  !*** ./resources/js/views/user/pages/Job/company_info.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _company_info_vue_vue_type_template_id_a43dd13c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./company_info.vue?vue&type=template&id=a43dd13c& */ "./resources/js/views/user/pages/Job/company_info.vue?vue&type=template&id=a43dd13c&");
/* harmony import */ var _company_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./company_info.vue?vue&type=script&lang=js& */ "./resources/js/views/user/pages/Job/company_info.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _company_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _company_info_vue_vue_type_template_id_a43dd13c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _company_info_vue_vue_type_template_id_a43dd13c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/user/pages/Job/company_info.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/user/pages/Job/company_info.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/user/pages/Job/company_info.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_company_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./company_info.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/pages/Job/company_info.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_company_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/user/pages/Job/company_info.vue?vue&type=template&id=a43dd13c&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/user/pages/Job/company_info.vue?vue&type=template&id=a43dd13c& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_company_info_vue_vue_type_template_id_a43dd13c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./company_info.vue?vue&type=template&id=a43dd13c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/pages/Job/company_info.vue?vue&type=template&id=a43dd13c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_company_info_vue_vue_type_template_id_a43dd13c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_company_info_vue_vue_type_template_id_a43dd13c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);