(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[52],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/pages/Job/JobDetails.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/pages/Job/JobDetails.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      joblogs: {},
      search: '',
      employeeCount: 0,
      instituteCount: 0,
      entries: 10,
      status: 0,
      message: '',
      primaryKey: 0,
      successButtonText: '',
      institute: '',
      "package": '',
      from: '',
      to: '',
      hit_from: 'businessOwner'
    };
  },
  created: function created() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.getPaymentLogs();

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    getPaymentLogs: function getPaymentLogs() {
      var _arguments = arguments,
          _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var page, id, res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                page = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : 1;
                id = _this2.$route.params.id ? '/' + _this2.$route.params.id : '';
                _context2.next = 4;
                return axios.get("/api/admin/candidate/job" + id + "?page=" + page + '&entries=' + _this2.entries + '&to=' + _this2.to + '&from=' + _this2.from);

              case 4:
                res = _context2.sent;
                _this2.joblogs = res.data.data[0];
                console.log(_this2.joblogs);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/pages/Job/JobDetails.vue?vue&type=template&id=bbd45d7e&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/pages/Job/JobDetails.vue?vue&type=template&id=bbd45d7e& ***!
  \************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "content-wrapper" }, [
    _c("div", { staticClass: "content-body" }, [
      _c("section", { attrs: { id: "configuration" } }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-12" }, [
            _c("div", { staticClass: "card rounded pad-20" }, [
              _c("div", { staticClass: "card-content collapse show" }, [
                _c("div", { staticClass: "card-body" }, [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-12" }, [
                      _c(
                        "h1",
                        [
                          _c(
                            "router-link",
                            { attrs: { to: { name: "admin.job.index" } } },
                            [
                              _c("i", { staticClass: "fa fa-angle-left" }),
                              _vm._v("Job log")
                            ]
                          )
                        ],
                        1
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "customer-top" }, [
                    _c("div", { staticClass: "row align-items-center mb-4" }, [
                      _c("div", { staticClass: "col-6" }, [
                        _c("div", { staticClass: "media align-items-center" }, [
                          _c("img", {
                            staticClass: "img-fluid",
                            attrs: {
                              src: _vm.base_url + "/assets/images/avatar.jpg",
                              alt: ""
                            }
                          }),
                          _vm._v(" "),
                          _c("div", { staticClass: "media-body sub-p" }, [
                            _c("h6", { staticClass: "bo-name" }, [
                              _vm._v(_vm._s(_vm.joblogs.user.first_name))
                            ]),
                            _vm._v(" "),
                            _c("h6", { staticClass: "h6-bo" }, [
                              _vm._v(
                                "Business Owner Id: " +
                                  _vm._s(_vm.joblogs.user.id)
                              )
                            ])
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _vm._m(0)
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-12" }, [
                      _c(
                        "div",
                        {
                          staticClass:
                            "card collapse-icon accordion-icon-rotate user_prof_acc"
                        },
                        [
                          _vm._m(1),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "collapse show",
                              attrs: {
                                id: "collapse11",
                                role: "tabpanel",
                                "aria-labelledby": "headingCollapse11"
                              }
                            },
                            [
                              _c("div", { staticClass: "card-content" }, [
                                _c(
                                  "div",
                                  { staticClass: "card-body mt-sm-0 mt-2" },
                                  [
                                    _c("div", { staticClass: "row" }, [
                                      _vm._m(2),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "col-lg-6 col-md-6 col-12 t-c"
                                        },
                                        [
                                          _c(
                                            "p",
                                            { staticClass: "fieldData" },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.joblogs.category
                                                    .category_name
                                                )
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "row" }, [
                                      _vm._m(3),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "col-lg-6 col-md-6 col-12 t-c"
                                        },
                                        [
                                          _c(
                                            "p",
                                            { staticClass: "fieldData" },
                                            [
                                              _vm._v(
                                                _vm._s(_vm.joblogs.job_title)
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "row" }, [
                                      _vm._m(4),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "col-lg-6 col-md-6 col-12 t-c"
                                        },
                                        [
                                          _c(
                                            "p",
                                            { staticClass: "fieldData" },
                                            [
                                              _vm._v(
                                                _vm._s(_vm.joblogs.company_name)
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "row" }, [
                                      _vm._m(5),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "col-lg-6 col-md-6 col-12 t-c"
                                        },
                                        [
                                          _c(
                                            "p",
                                            { staticClass: "fieldData" },
                                            [_vm._v(_vm._s(_vm.joblogs.salary))]
                                          )
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "row" }, [
                                      _vm._m(6),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "col-lg-6 col-md-6 col-12 t-c"
                                        },
                                        [
                                          _c(
                                            "p",
                                            { staticClass: "fieldData" },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.formatDate(
                                                    _vm.joblogs.created_at
                                                  )
                                                )
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "row" }, [
                                      _vm._m(7),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "col-lg-6 col-md-6 col-12 t-c"
                                        },
                                        [
                                          _c(
                                            "p",
                                            { staticClass: "fieldData" },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.formatDate(
                                                    _vm.joblogs.apply_before
                                                  )
                                                )
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "row" }, [
                                      _vm._m(8),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "col-lg-6 col-md-6 col-12 t-c"
                                        },
                                        [
                                          _c(
                                            "p",
                                            { staticClass: "fieldData" },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.joblogs
                                                    .period_of_employment
                                                )
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "row" }, [
                                      _vm._m(9),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "col-lg-6 col-md-6 col-12 t-c"
                                        },
                                        [
                                          _c(
                                            "p",
                                            { staticClass: "fieldData" },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.joblogs.hours_of_work
                                                )
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ])
                                  ]
                                )
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _vm._m(10),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "collapse show",
                              attrs: {
                                id: "collapse12",
                                role: "tabpanel",
                                "aria-labelledby": "headingCollapse12",
                                "aria-expanded": "true"
                              }
                            },
                            [
                              _c("div", { staticClass: "card-content" }, [
                                _c(
                                  "div",
                                  { staticClass: "card-body mt-sm-0 mt-2" },
                                  [
                                    _c("div", { staticClass: "row" }, [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "col-lg-4 col-md-4 col-12 t-c"
                                        },
                                        [
                                          _c(
                                            "p",
                                            { staticClass: "fieldName" },
                                            [_vm._v("Address")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "p",
                                            { staticClass: "fieldData" },
                                            [
                                              _vm._v(
                                                _vm._s(_vm.joblogs.address) +
                                                  " "
                                              )
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "col-lg-4 col-md-4 col-12 t-c"
                                        },
                                        [
                                          _c(
                                            "p",
                                            { staticClass: "fieldName" },
                                            [_vm._v("Country")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "p",
                                            { staticClass: "fieldData" },
                                            [
                                              _vm._v(
                                                _vm._s(_vm.joblogs.country)
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "row mt-md-1" }, [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "col-lg-4 col-md-4 col-12 t-c"
                                        },
                                        [
                                          _c(
                                            "p",
                                            { staticClass: "fieldName" },
                                            [_vm._v("State")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "p",
                                            { staticClass: "fieldData" },
                                            [_vm._v(_vm._s(_vm.joblogs.state))]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "col-lg-4 col-md-4 col-12 t-c"
                                        },
                                        [
                                          _c(
                                            "p",
                                            { staticClass: "fieldName" },
                                            [_vm._v("City")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "p",
                                            { staticClass: "fieldData" },
                                            [_vm._v(_vm._s(_vm.joblogs.city))]
                                          )
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "row mt-md-1" }, [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "col-lg-4 col-md-4 col-12 t-c"
                                        },
                                        [
                                          _c(
                                            "p",
                                            { staticClass: "fieldName" },
                                            [_vm._v("Post code")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "p",
                                            { staticClass: "fieldData" },
                                            [
                                              _vm._v(
                                                _vm._s(_vm.joblogs.zip_code)
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ])
                                  ]
                                )
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _vm._m(11),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "collapse show",
                              attrs: {
                                id: "collapse13",
                                role: "tabpanel",
                                "aria-labelledby": "headingCollapse13",
                                "aria-expanded": "true"
                              }
                            },
                            [
                              _c("div", { staticClass: "card-content" }, [
                                _c(
                                  "div",
                                  { staticClass: "card-body mt-sm-0 mt-2" },
                                  [
                                    _c("div", { staticClass: "row mt-md-1" }, [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "col-lg-12 col-md-12 col-12 t-c"
                                        },
                                        [
                                          _c(
                                            "p",
                                            { staticClass: "fieldName" },
                                            [_vm._v("Job Description")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "p",
                                            { staticClass: "fieldData" },
                                            [
                                              _vm._v(
                                                _vm._s(_vm.joblogs.descriptions)
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ])
                                  ]
                                )
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _vm._m(12),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "collapse show",
                              attrs: {
                                id: "collapse14",
                                role: "tabpanel",
                                "aria-labelledby": "headingCollapse14",
                                "aria-expanded": "true"
                              }
                            },
                            [
                              _c("div", { staticClass: "card-content" }, [
                                _c(
                                  "div",
                                  { staticClass: "card-body mt-sm-0 mt-2" },
                                  [
                                    _c("div", { staticClass: "row" }, [
                                      _vm._m(13),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "col-lg-6 col-md-6 col-12 t-c"
                                        },
                                        [
                                          _c(
                                            "p",
                                            { staticClass: "fieldData" },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.joblogs
                                                    .years_of_experience
                                                )
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "row" }, [
                                      _vm._m(14),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "col-lg-6 col-md-6 col-12 t-c"
                                        },
                                        [
                                          _c(
                                            "p",
                                            { staticClass: "fieldData" },
                                            [_vm._v(_vm._s(_vm.joblogs.degree))]
                                          )
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "row" }, [
                                      _vm._m(15),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "col-lg-6 col-md-6 col-12 t-c"
                                        },
                                        [
                                          _c(
                                            "p",
                                            { staticClass: "fieldData" },
                                            [_vm._v(_vm._s(_vm.joblogs.skill))]
                                          )
                                        ]
                                      )
                                    ])
                                  ]
                                )
                              ])
                            ]
                          )
                        ]
                      )
                    ])
                  ])
                ])
              ])
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-6 text-right " }, [
      _c("p", { staticClass: "sts" }, [
        _vm._v("Status: "),
        _c("span", { staticClass: "txt-green" }, [_vm._v("Open")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "card-header", attrs: { id: "headingCollapse11" } },
      [
        _c(
          "a",
          {
            staticClass: "card-title lead",
            attrs: {
              "data-toggle": "collapse",
              href: "#collapse11",
              "aria-expanded": "true",
              "aria-controls": "collapse11"
            }
          },
          [_vm._v("Job Details")]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-3 col-md-3 col-12 t-c" }, [
      _c("p", { staticClass: "fieldName" }, [_vm._v("Job Category")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-3 col-md-3 col-12 t-c" }, [
      _c("p", { staticClass: "fieldName" }, [_vm._v("Job Name")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-3 col-md-3 col-12 t-c" }, [
      _c("p", { staticClass: "fieldName" }, [_vm._v("Company Name")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-3 col-md-3 col-12 t-c" }, [
      _c("p", { staticClass: "fieldName" }, [_vm._v("Salary")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-3 col-md-3 col-12 t-c" }, [
      _c("p", { staticClass: "fieldName" }, [_vm._v("Posted On")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-3 col-md-3 col-12 t-c" }, [
      _c("p", { staticClass: "fieldName" }, [_vm._v("Apply Before")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-3 col-md-3 col-12 t-c" }, [
      _c("p", { staticClass: "fieldName" }, [_vm._v("Period of employment")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-3 col-md-3 col-12 t-c" }, [
      _c("p", { staticClass: "fieldName" }, [_vm._v("Hours of work")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "card-header", attrs: { id: "headingCollapse12" } },
      [
        _c(
          "a",
          {
            staticClass: "card-title lead ",
            attrs: {
              "data-toggle": "collapse",
              href: "#collapse12",
              "aria-expanded": "true",
              "aria-controls": "collapse12"
            }
          },
          [_vm._v("Address Details")]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "card-header", attrs: { id: "headingCollapse13" } },
      [
        _c(
          "a",
          {
            staticClass: "card-title lead ",
            attrs: {
              "data-toggle": "collapse",
              href: "#collapse13",
              "aria-expanded": "true",
              "aria-controls": "collapse13"
            }
          },
          [_vm._v("Job Responsibilities")]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "card-header", attrs: { id: "headingCollapse14" } },
      [
        _c(
          "a",
          {
            staticClass: "card-title lead ",
            attrs: {
              "data-toggle": "collapse",
              href: "#collapse14",
              "aria-expanded": "true",
              "aria-controls": "collapse14"
            }
          },
          [_vm._v("Experience Information")]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-3 col-md-3 col-12 t-c" }, [
      _c("p", { staticClass: "fieldName" }, [
        _vm._v("Years of experience needed")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-3 col-md-3 col-12 t-c" }, [
      _c("p", { staticClass: "fieldName" }, [_vm._v("Degree Required")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-3 col-md-3 col-12 t-c" }, [
      _c("p", { staticClass: "fieldName" }, [_vm._v("Skills")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/admin/pages/Job/JobDetails.vue":
/*!***********************************************************!*\
  !*** ./resources/js/views/admin/pages/Job/JobDetails.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _JobDetails_vue_vue_type_template_id_bbd45d7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./JobDetails.vue?vue&type=template&id=bbd45d7e& */ "./resources/js/views/admin/pages/Job/JobDetails.vue?vue&type=template&id=bbd45d7e&");
/* harmony import */ var _JobDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./JobDetails.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/pages/Job/JobDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _JobDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _JobDetails_vue_vue_type_template_id_bbd45d7e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _JobDetails_vue_vue_type_template_id_bbd45d7e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/pages/Job/JobDetails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/pages/Job/JobDetails.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/admin/pages/Job/JobDetails.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_JobDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./JobDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/pages/Job/JobDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_JobDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/pages/Job/JobDetails.vue?vue&type=template&id=bbd45d7e&":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/admin/pages/Job/JobDetails.vue?vue&type=template&id=bbd45d7e& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_JobDetails_vue_vue_type_template_id_bbd45d7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./JobDetails.vue?vue&type=template&id=bbd45d7e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/pages/Job/JobDetails.vue?vue&type=template&id=bbd45d7e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_JobDetails_vue_vue_type_template_id_bbd45d7e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_JobDetails_vue_vue_type_template_id_bbd45d7e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);