(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[102],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/pages/cvBiulder/view.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/user/pages/cvBiulder/view.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


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
var InnerPageFooter = function InnerPageFooter() {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../../components/InnerPageFooter.vue */ "./resources/js/views/user/components/InnerPageFooter.vue"));
};

var RegisterHeader = function RegisterHeader() {
  return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../../components/RegisterHeader.vue */ "./resources/js/views/user/components/RegisterHeader.vue"));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      cv: {}
    };
  },
  components: {
    InnerPageFooter: InnerPageFooter,
    RegisterHeader: RegisterHeader
  },
  created: function created() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.getProfile();

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    getProfile: function getProfile() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios.get('/api/user/cv');

              case 2:
                _this2.cv = _context2.sent.data.data;

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    deleteCv: function deleteCv() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var response, self;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return axios.get('/api/user/cv/delete');

              case 2:
                response = _context3.sent;

                if (response.data.data) {
                  _this3.$snotify.success(response.data.message);

                  self = _this3;
                  setTimeout(function () {
                    self.$router.push({
                      name: 'user.cvBiulder.create'
                    });
                  }, 1000);
                } else {
                  _this3.$snotify.error(response.data.message);
                }

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/pages/cvBiulder/view.vue?vue&type=template&id=68224914&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/user/pages/cvBiulder/view.vue?vue&type=template&id=68224914& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
              {
                staticClass:
                  "col-12 d-flex align-items-center justify-content-between top-head",
              },
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
                _c("p", { staticClass: "page-heading" }, [_vm._v("View CV")]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "trash-a",
                    attrs: {
                      "data-toggle": "modal",
                      "data-target": "#delete-cv",
                    },
                    on: {
                      click: function ($event) {
                        return _vm.deleteCv()
                      },
                    },
                  },
                  [
                    _c("i", {
                      staticClass: "fa fa-trash-o",
                      attrs: { "aria-hidden": "true" },
                    }),
                  ]
                ),
              ],
              1
            ),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row mt-2" }, [
            _c("div", { staticClass: "col-12" }, [
              _c("div", { staticClass: "card cv-create-card" }, [
                _vm._m(0),
                _vm._v(" "),
                _c("div", { staticClass: "card-body cv-card-body" }, [
                  _c("div", { staticClass: "form-row" }, [
                    _c("div", { staticClass: "col-lg-4 col-md-6 col-12" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { staticClass: "c-light" }, [
                          _vm._v("First Name"),
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "reg-p" }, [
                          _vm._v(_vm._s(_vm.cv.first_name)),
                        ]),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-lg-4 col-md-6 col-12" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { staticClass: "c-light" }, [
                          _vm._v("Last Name"),
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "reg-p" }, [
                          _vm._v(_vm._s(_vm.cv.last_name)),
                        ]),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-lg-4 col-md-6  col-12" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { staticClass: "c-light" }, [
                          _vm._v("Date Of Birth"),
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "reg-p" }, [
                          _vm._v(_vm._s(_vm.formatDate(_vm.cv.dob))),
                        ]),
                      ]),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-row" }, [
                    _c("div", { staticClass: "col-lg-4 col-md-6 col-12" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { staticClass: "c-light" }, [
                          _vm._v("Phone Number"),
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "reg-p" }, [
                          _vm._v(_vm._s(_vm.cv.phone_number)),
                        ]),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-lg-4 col-md-6 col-12" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { staticClass: "c-light" }, [
                          _vm._v("Email Address"),
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "reg-p" }, [
                          _vm._v(_vm._s(_vm.cv.email)),
                        ]),
                      ]),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-row" }, [
                    _c("div", { staticClass: "col-12" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { staticClass: "c-light" }, [
                          _vm._v("Profession"),
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "reg-p" }, [
                          _vm._v(_vm._s(_vm.cv.profession)),
                        ]),
                      ]),
                    ]),
                  ]),
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
                    _vm._l(_vm.cv.experience, function (experience) {
                      return _c(
                        "div",
                        { staticClass: "card-body cv-card-body" },
                        [
                          _c("div", { staticClass: "form-row" }, [
                            _c(
                              "div",
                              { staticClass: "col-lg-4 col-md-6 col-12" },
                              [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("label", { staticClass: "c-light" }, [
                                    _vm._v("Job Title"),
                                  ]),
                                  _vm._v(" "),
                                  _c("p", { staticClass: "reg-p" }, [
                                    _vm._v(_vm._s(experience.job_title)),
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
                                    _vm._v("Company Name"),
                                  ]),
                                  _vm._v(" "),
                                  _c("p", { staticClass: "reg-p" }, [
                                    _vm._v(_vm._s(experience.company_name)),
                                  ]),
                                ]),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-lg-4 col-md-6  col-12" },
                              [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("label", { staticClass: "c-light" }, [
                                    _vm._v("Job Type"),
                                  ]),
                                  _vm._v(" "),
                                  _c("p", { staticClass: "reg-p" }, [
                                    _vm._v(_vm._s(experience.job_type)),
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
                                    _vm._v("Start Date"),
                                  ]),
                                  _vm._v(" "),
                                  _c("p", { staticClass: "reg-p" }, [
                                    _vm._v(
                                      _vm._s(
                                        _vm.formatDate(experience.start_date)
                                      )
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
                                    _vm._v("End Date"),
                                  ]),
                                  _vm._v(" "),
                                  _c("p", { staticClass: "reg-p" }, [
                                    _vm._v(
                                      _vm._s(
                                        _vm.formatDate(experience.end_date)
                                      )
                                    ),
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
                                  _vm._v("Job Description"),
                                ]),
                                _vm._v(" "),
                                _c("p", { staticClass: "reg-p" }, [
                                  _vm._v(_vm._s(experience.description)),
                                ]),
                              ]),
                            ]),
                          ]),
                        ]
                      )
                    }),
                    0
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
                        "aria-labelledby": "card_two",
                        "data-parent": "#accordion",
                      },
                    },
                    _vm._l(_vm.cv.education, function (education) {
                      return _c(
                        "div",
                        { staticClass: "card-body cv-card-body" },
                        [
                          _c("div", { staticClass: "form-row" }, [
                            _c(
                              "div",
                              { staticClass: "col-lg-4 col-md-6 col-12" },
                              [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("label", { staticClass: "c-light" }, [
                                    _vm._v("Highest Degree"),
                                  ]),
                                  _vm._v(" "),
                                  _c("p", { staticClass: "reg-p" }, [
                                    _vm._v(_vm._s(education.degree)),
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
                                    _vm._v("Subject"),
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "tag-wrapper" }, [
                                    _c("span", { staticClass: "cv-tags" }, [
                                      _vm._v(_vm._s(education.subject)),
                                    ]),
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
                                    _vm._v("Institute Name"),
                                  ]),
                                  _vm._v(" "),
                                  _c("p", { staticClass: "reg-p" }, [
                                    _vm._v(_vm._s(education.institute_name)),
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
                                    _vm._v("Start Date"),
                                  ]),
                                  _vm._v(" "),
                                  _c("p", { staticClass: "reg-p" }, [
                                    _vm._v(
                                      _vm._s(
                                        _vm.formatDate(education.start_date)
                                      )
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
                                    _vm._v("End Date"),
                                  ]),
                                  _vm._v(" "),
                                  _c("p", { staticClass: "reg-p" }, [
                                    _vm._v(
                                      _vm._s(_vm.formatDate(education.end_date))
                                    ),
                                  ]),
                                ]),
                              ]
                            ),
                          ]),
                        ]
                      )
                    }),
                    0
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
                        "aria-labelledby": "card_three",
                        "data-parent": "#accordion",
                      },
                    },
                    [
                      _c("div", { staticClass: "card-body cv-card-body" }, [
                        _c("div", { staticClass: "form-row" }, [
                          _c("div", { staticClass: "col-xl-12" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", { staticClass: "c-light" }, [
                                _vm._v("Subject"),
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "tag-wrapper" }, [
                                _c("span", { staticClass: "cv-tags" }, [
                                  _vm._v(_vm._s(_vm.cv.interest_subject)),
                                ]),
                              ]),
                            ]),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-row" }, [
                          _c("div", { staticClass: "col-12" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", { staticClass: "c-light" }, [
                                _vm._v("Interest"),
                              ]),
                              _vm._v(" "),
                              _c("p", { staticClass: "reg-p" }, [
                                _vm._v(_vm._s(_vm.cv.interest_desc)),
                              ]),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-lg-12" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", { staticClass: "c-light" }, [
                                _vm._v("Language"),
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "tag-wrapper" }, [
                                _c("span", { staticClass: "lng-tag" }, [
                                  _vm._v(_vm._s(_vm.cv.lang)),
                                ]),
                              ]),
                            ]),
                          ]),
                        ]),
                      ]),
                    ]
                  ),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-row" }, [
                  _c("div", { staticClass: "col-12" }, [
                    _c(
                      "div",
                      { staticClass: "button_wrap text-center" },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "btn-cv bloo",
                            attrs: { to: { name: "user.cvBiulder.edit" } },
                          },
                          [_vm._v("Edit")]
                        ),
                      ],
                      1
                    ),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
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
        _c("p", [_vm._v("Experience Information")]),
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
          id: "card_two",
          "data-toggle": "collapse",
          "data-target": "#collapseTwo",
          "aria-expanded": "true",
          "aria-controls": "collapseTwo",
        },
      },
      [
        _c("p", [_vm._v("Educational Details")]),
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
          id: "card_three",
          "data-toggle": "collapse",
          "data-target": "#collapseThree",
          "aria-expanded": "true",
          "aria-controls": "collapseThree",
        },
      },
      [
        _c("p", [_vm._v("Interest & Skills")]),
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

/***/ "./resources/js/views/user/pages/cvBiulder/view.vue":
/*!**********************************************************!*\
  !*** ./resources/js/views/user/pages/cvBiulder/view.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_vue_vue_type_template_id_68224914___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.vue?vue&type=template&id=68224914& */ "./resources/js/views/user/pages/cvBiulder/view.vue?vue&type=template&id=68224914&");
/* harmony import */ var _view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.vue?vue&type=script&lang=js& */ "./resources/js/views/user/pages/cvBiulder/view.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _view_vue_vue_type_template_id_68224914___WEBPACK_IMPORTED_MODULE_0__["render"],
  _view_vue_vue_type_template_id_68224914___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/user/pages/cvBiulder/view.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/user/pages/cvBiulder/view.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/user/pages/cvBiulder/view.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./view.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/pages/cvBiulder/view.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/user/pages/cvBiulder/view.vue?vue&type=template&id=68224914&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/user/pages/cvBiulder/view.vue?vue&type=template&id=68224914& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_template_id_68224914___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./view.vue?vue&type=template&id=68224914& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/pages/cvBiulder/view.vue?vue&type=template&id=68224914&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_template_id_68224914___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_template_id_68224914___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);