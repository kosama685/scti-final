(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[93],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/pages/Job/show.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/user/pages/Job/show.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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

var PackageModel = function PackageModel() {
  return __webpack_require__.e(/*! import() */ 92).then(__webpack_require__.bind(null, /*! ./packageModel */ "./resources/js/views/user/pages/Job/packageModel.vue"));
};

/* harmony default export */ __webpack_exports__["default"] = (_created$components$d = {
  created: function created() {},
  components: {
    InnerPageFooter: InnerPageFooter,
    RegisterHeader: RegisterHeader,
    ChatComponent: ChatComponent,
    PackageModel: PackageModel
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
              console.log("jobslog is", _this2.joblogs);
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
  chat_start: function chat_start() {
    var _this4 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
      var res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              console.log(_this4.user_id);
              console.log(_this4.job_user_id);
              _context4.next = 4;
              return axios.get("api/user/job_chat/".concat(_this4.job_user_id));

            case 4:
              res = _context4.sent;

            case 5:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }))();
  },
  checkAppliedJob: function checkAppliedJob() {
    var _this5 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
      var res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return axios.get("api/admin/job/".concat(_this5.$route.params.id, "/candidate/user"));

            case 2:
              res = _context5.sent;

              if (res.data) {
                _this5.applied = false;
              }

              ; // this.$snotify.success(res.data.message);

            case 5:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }))();
  }
}), _created$components$d);

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/pages/Job/show.vue?vue&type=template&id=ec2b52a2&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/user/pages/Job/show.vue?vue&type=template&id=ec2b52a2& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
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
                    attrs: { to: { name: "user.users.dashboard" } },
                  },
                  [
                    _c("i", {
                      staticClass: "fa fa-arrow-left",
                      attrs: { "aria-hidden": "true" },
                    }),
                    _vm._v(" Back"),
                  ]
                ),
                _vm._v(" "),
                _c("p", { staticClass: "page-heading" }, [_vm._v("View Job")]),
              ],
              1
            ),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row mt-2" }, [
            _c("div", { staticClass: "col-12" }, [
              _c(
                "form",
                {
                  staticClass: "create-cv",
                  attrs: { id: "msform", action: "" },
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
                              _vm._v("Job Category"),
                            ]),
                            _vm._v(" "),
                            _c("p", { staticClass: "reg-p" }, [
                              _vm._v(
                                _vm._s(_vm.joblogs.category.category_name)
                              ),
                            ]),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-lg-4 col-md-6 col-12" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", { staticClass: "c-light" }, [
                              _vm._v("Job Name"),
                            ]),
                            _vm._v(" "),
                            _c("p", { staticClass: "reg-p" }, [
                              _vm._v(_vm._s(_vm.joblogs.job_title)),
                            ]),
                          ]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-row" }, [
                        _c("div", { staticClass: "col-lg-4 col-md-6 col-12" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", { staticClass: "c-light" }, [
                              _vm._v("Company Name"),
                            ]),
                            _vm._v(" "),
                            _c("p", { staticClass: "reg-p" }, [
                              _vm._v(_vm._s(_vm.joblogs.user.name)),
                            ]),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-lg-4 col-md-6 col-12" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", { staticClass: "c-light" }, [
                              _vm._v("Salary Range"),
                            ]),
                            _vm._v(" "),
                            _c("p", { staticClass: "reg-p" }, [
                              _c("i", { staticClass: "fa fa-euro" }),
                              _vm._v(" " + _vm._s(_vm.joblogs.salary_range)),
                            ]),
                          ]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-row" }, [
                        _c("div", { staticClass: "col-lg-4 col-md-6 col-12" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", { staticClass: "c-light" }, [
                              _vm._v("Posted On"),
                            ]),
                            _vm._v(" "),
                            _c("p", { staticClass: "reg-p" }, [
                              _vm._v(
                                _vm._s(_vm.formatDate(_vm.joblogs.created_at))
                              ),
                            ]),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-lg-4 col-md-6 col-12" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", { staticClass: "c-light" }, [
                              _vm._v("Apply Before"),
                            ]),
                            _vm._v(" "),
                            _c("p", { staticClass: "reg-p" }, [
                              _vm._v(
                                _vm._s(_vm.formatDate(_vm.joblogs.apply_before))
                              ),
                            ]),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-lg-4 col-md-4 col-12" }, [
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c("label", { staticClass: "c-light" }, [
                                _vm._v("Employee Benefits"),
                              ]),
                              _vm._v(" "),
                              _c("br"),
                              _vm._v(" "),
                              _vm._l(
                                _vm.joblogs.job_benefits,
                                function (item, index) {
                                  return _c("p", { staticClass: "reg-p" }, [
                                    _vm._v(_vm._s(item.employee_benefits)),
                                  ])
                                }
                              ),
                            ],
                            2
                          ),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-row" }, [
                        _c("div", { staticClass: "col-lg-4 col-md-6 col-12" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", { staticClass: "c-light" }, [
                              _vm._v("Period Employment"),
                            ]),
                            _vm._v(" "),
                            _c("p", { staticClass: "reg-p" }, [
                              _vm._v(_vm._s(_vm.joblogs.period_of_employment)),
                            ]),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-lg-4 col-md-4 col-12" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", { staticClass: "c-light" }, [
                              _vm._v("Remote"),
                            ]),
                            _vm._v(" "),
                            _c("p", { staticClass: "reg-p" }, [
                              _vm._v(
                                _vm._s(
                                  _vm.joblogs.remote == "true" ? "Yes" : "No"
                                )
                              ),
                            ]),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-lg-4 col-md-4 col-12" }, [
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c("label", { staticClass: "c-light" }, [
                                _vm._v("Company Info"),
                              ]),
                              _vm._v(" "),
                              _c("br"),
                              _vm._v(" "),
                              _c(
                                "router-link",
                                {
                                  staticClass: "back-a",
                                  attrs: {
                                    to: { name: "user.job.company_info" },
                                  },
                                },
                                [
                                  _c("i", { attrs: { "aria-hidden": "true" } }),
                                  _vm._v(" Link"),
                                ]
                              ),
                            ],
                            1
                          ),
                        ]),
                      ]),
                      _vm._v(" "),
                      _vm.joblogs.file != null
                        ? _c("div", { staticClass: "form-row" }, [
                            _c(
                              "div",
                              { staticClass: "col-lg-6 col-md-6 col-12" },
                              [
                                _c(
                                  "video",
                                  {
                                    staticClass: "job-video",
                                    attrs: {
                                      width: "100%",
                                      height: "100%",
                                      controls: "",
                                      src: _vm.joblogs.file,
                                    },
                                  },
                                  [
                                    _c("source", {
                                      attrs: {
                                        src: "movie.mp4",
                                        type: "video/mp4",
                                      },
                                    }),
                                    _vm._v(" "),
                                    _c("source", {
                                      attrs: {
                                        src: "movie.ogg",
                                        type: "video/ogg",
                                      },
                                    }),
                                    _vm._v(
                                      "\n\t\t\t\t\t\t\t\t\t\t\t\tYour browser does not support the video tag.\n\t\t\t\t\t\t\t\t\t\t\t"
                                    ),
                                  ]
                                ),
                              ]
                            ),
                          ])
                        : _vm._e(),
                    ]),
                    _vm._v(" "),
                    _c("div", { attrs: { id: "accordion" } }, [
                      _vm._m(1),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "collapse show",
                          attrs: {
                            id: "collapseOne",
                            "aria-labelledby": "headingOne",
                            "data-parent": "#accordion",
                          },
                        },
                        [
                          _c("div", { staticClass: "card-body cv-card-body" }, [
                            _c("div", { staticClass: "form-row" }, [
                              _c(
                                "div",
                                { staticClass: "col-lg-4 col-md-6 col-12" },
                                [
                                  _c("div", { staticClass: "form-group" }, [
                                    _c("label", { staticClass: "c-light" }, [
                                      _vm._v("Address Details"),
                                    ]),
                                    _vm._v(" "),
                                    _c("p", { staticClass: "reg-p" }, [
                                      _vm._v(_vm._s(_vm.joblogs.address)),
                                    ]),
                                  ]),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "col-lg-4 col-md-6 col-12" },
                                [
                                  _c("div", { staticClass: "form-group" }, [
                                    _c("label", { staticClass: "c-light" }, [
                                      _vm._v("Country"),
                                    ]),
                                    _vm._v(" "),
                                    _c("p", { staticClass: "reg-p" }, [
                                      _vm._v(_vm._s(_vm.joblogs.country)),
                                    ]),
                                  ]),
                                ]
                              ),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-row" }, [
                              _c(
                                "div",
                                { staticClass: "col-lg-4 col-md-6 col-12" },
                                [
                                  _c("div", { staticClass: "form-group" }, [
                                    _c("label", { staticClass: "c-light" }, [
                                      _vm._v("State"),
                                    ]),
                                    _vm._v(" "),
                                    _c("p", { staticClass: "reg-p" }, [
                                      _vm._v(_vm._s(_vm.joblogs.state)),
                                    ]),
                                  ]),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "col-lg-4 col-md-6 col-12" },
                                [
                                  _c("div", { staticClass: "form-group" }, [
                                    _c("label", { staticClass: "c-light" }, [
                                      _vm._v("City"),
                                    ]),
                                    _vm._v(" "),
                                    _c("p", { staticClass: "reg-p" }, [
                                      _vm._v(_vm._s(_vm.joblogs.city)),
                                    ]),
                                  ]),
                                ]
                              ),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-row" }, [
                              _c(
                                "div",
                                { staticClass: "col-lg-4 col-md-6 col-12" },
                                [
                                  _c("div", { staticClass: "form-group" }, [
                                    _c("label", { staticClass: "c-light" }, [
                                      _vm._v("Post code"),
                                    ]),
                                    _vm._v(" "),
                                    _c("p", { staticClass: "reg-p" }, [
                                      _vm._v(_vm._s(_vm.joblogs.zip_code)),
                                    ]),
                                  ]),
                                ]
                              ),
                            ]),
                          ]),
                        ]
                      ),
                      _vm._v(" "),
                      _vm._m(2),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "collapse show",
                          attrs: {
                            id: "collapseTwo",
                            "aria-labelledby": "headingTwo",
                            "data-parent": "#accordion",
                          },
                        },
                        [
                          _c("div", { staticClass: "card-body cv-card-body" }, [
                            _c("div", { staticClass: "form-row" }, [
                              _c("div", { staticClass: "col-12" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("label", { staticClass: "c-light" }, [
                                    _vm._v("Job Description"),
                                  ]),
                                  _vm._v(" "),
                                  _c("p", { staticClass: "reg-p" }, [
                                    _vm._v(
                                      _vm._s(_vm.joblogs.job_descriptions)
                                    ),
                                  ]),
                                ]),
                              ]),
                            ]),
                          ]),
                        ]
                      ),
                      _vm._v(" "),
                      _vm._m(3),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "collapse show",
                          attrs: {
                            id: "collapseThree",
                            "aria-labelledby": "headingThree",
                            "data-parent": "#accordion",
                          },
                        },
                        [
                          _c("div", { staticClass: "card-body cv-card-body" }, [
                            _c("div", { staticClass: "form-row" }, [
                              _c(
                                "div",
                                { staticClass: "col-lg-4 col-md-6 col-12" },
                                [
                                  _c("div", { staticClass: "form-group" }, [
                                    _c("label", { staticClass: "c-light" }, [
                                      _vm._v("Years of Experience Needed"),
                                    ]),
                                    _vm._v(" "),
                                    _c("p", { staticClass: "reg-p" }, [
                                      _vm._v(
                                        _vm._s(_vm.joblogs.years_of_experience)
                                      ),
                                    ]),
                                  ]),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "col-lg-4 col-md-6 col-12" },
                                [
                                  _c("div", { staticClass: "form-group" }, [
                                    _c("label", { staticClass: "c-light" }, [
                                      _vm._v("Degree Requirements"),
                                    ]),
                                    _vm._v(" "),
                                    _c("p", { staticClass: "reg-p" }, [
                                      _vm._v(_vm._s(_vm.joblogs.degree)),
                                    ]),
                                  ]),
                                ]
                              ),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-row" }, [
                              _c("div", { staticClass: "col-12" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("label", { staticClass: "c-light" }, [
                                    _vm._v("Skills"),
                                  ]),
                                  _vm._v(" "),
                                  _c("p", { staticClass: "reg-p" }, [
                                    _vm._v(_vm._s(_vm.joblogs.skill)),
                                  ]),
                                ]),
                              ]),
                            ]),
                          ]),
                        ]
                      ),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      staticClass: "btn-cv bloo mr-0",
                      attrs: {
                        to: {
                          name: "user.chat.view",
                          params: { id: this.job_user_id },
                        },
                      },
                    },
                    [_vm._v("Chat")]
                  ),
                  _vm._v(" "),
                  _vm.packageBooleanTrial
                    ? _c("div", { staticClass: "form-row" }, [
                        _c("div", { staticClass: "col-12" }, [
                          _c("div", { staticClass: "button_wrap" }, [
                            _c(
                              "button",
                              {
                                staticClass: "btn-cv bloo mr-0",
                                style: _vm.applied
                                  ? "display:block"
                                  : "display:none",
                                attrs: {
                                  type: "button",
                                  "data-toggle": "modal",
                                  "data-target": "#question",
                                },
                              },
                              [_vm._v("Apply")]
                            ),
                          ]),
                        ]),
                      ])
                    : _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-12" }, [
                          !_vm.packageBooleanTrial
                            ? _c("div", { staticClass: "expiry-alert" }, [
                                _c("i", {
                                  staticClass: "fa fa-exclamation-triangle",
                                  attrs: { "aria-hidden": "true" },
                                }),
                                _vm._v(" "),
                                _c("p", [
                                  _vm._v(
                                    "Your are in trial version. Please update your package for apply to any job! "
                                  ),
                                ]),
                              ])
                            : _vm._e(),
                        ]),
                      ]),
                ],
                1
              ),
            ]),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("package-model", { attrs: { data: _vm.joblogs.job_smart_question } }),
      _vm._v(" "),
      _c("inner-page-footer"),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header cv-header" }, [
      _c("p", [_vm._v("Personal Information")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "card-header cv-header br-0 ",
        attrs: {
          id: "headingOne",
          "data-toggle": "collapse",
          "data-target": "#collapseOne",
          "aria-expanded": "true",
          "aria-controls": "collapseOne",
        },
      },
      [
        _c("p", [_vm._v("Address Details")]),
        _vm._v(" "),
        _c("i", {
          staticClass: "fa fa-angle-down",
          attrs: { "aria-hidden": "true" },
        }),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "card-header cv-header br-0 ",
        attrs: {
          id: "headingTwo",
          "data-toggle": "collapse",
          "data-target": "#collapseTwo",
          "aria-expanded": "true",
          "aria-controls": "collapseTwo",
        },
      },
      [
        _c("p", [_vm._v("Job Responsibilities")]),
        _vm._v(" "),
        _c("i", {
          staticClass: "fa fa-angle-down",
          attrs: { "aria-hidden": "true" },
        }),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "card-header cv-header br-0 ",
        attrs: {
          id: "headingThree",
          "data-toggle": "collapse",
          "data-target": "#collapseThree",
          "aria-expanded": "true",
          "aria-controls": "collapseThree",
        },
      },
      [
        _c("p", [_vm._v("Experience Information")]),
        _vm._v(" "),
        _c("i", {
          staticClass: "fa fa-angle-down",
          attrs: { "aria-hidden": "true" },
        }),
      ]
    )
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/user/pages/Job/show.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/user/pages/Job/show.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _show_vue_vue_type_template_id_ec2b52a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show.vue?vue&type=template&id=ec2b52a2& */ "./resources/js/views/user/pages/Job/show.vue?vue&type=template&id=ec2b52a2&");
/* harmony import */ var _show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show.vue?vue&type=script&lang=js& */ "./resources/js/views/user/pages/Job/show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _show_vue_vue_type_template_id_ec2b52a2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _show_vue_vue_type_template_id_ec2b52a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/user/pages/Job/show.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/user/pages/Job/show.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/user/pages/Job/show.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/pages/Job/show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/user/pages/Job/show.vue?vue&type=template&id=ec2b52a2&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/user/pages/Job/show.vue?vue&type=template&id=ec2b52a2& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_ec2b52a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./show.vue?vue&type=template&id=ec2b52a2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/pages/Job/show.vue?vue&type=template&id=ec2b52a2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_ec2b52a2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_ec2b52a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);