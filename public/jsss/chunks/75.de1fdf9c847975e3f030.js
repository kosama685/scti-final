(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[75],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/businessOwner/pages/Jobs/editStatus.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/businessOwner/pages/Jobs/editStatus.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      job_status: '',
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
    },
    statusUpdate: function statusUpdate() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var id, fd, res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                id = _this3.$route.params.id;
                fd = new FormData();
                fd.append('job_status', _this3.joblogs.status);
                _context3.next = 5;
                return axios.post("/api/admin/job/" + id, fd);

              case 5:
                res = _context3.sent.data;

                _this3.$snotify.success(res.message);

              case 7:
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/businessOwner/pages/Jobs/editStatus.vue?vue&type=template&id=4b2e85c2&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/businessOwner/pages/Jobs/editStatus.vue?vue&type=template&id=4b2e85c2& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
                    _c(
                      "div",
                      {
                        staticClass:
                          "col-12 d-flex align-items-center justify-content-between flex-column flex-md-row "
                      },
                      [
                        _c(
                          "h1",
                          [
                            _c(
                              "router-link",
                              {
                                attrs: {
                                  to: { name: "businessOwner.jobs.index" }
                                }
                              },
                              [
                                _c("i", { staticClass: "fa fa-angle-left" }),
                                _vm._v("View Jobs")
                              ]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "wrprz" }, [
                          _c("p", { staticClass: "sts" }, [_vm._v("Status:")]),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.joblogs.status,
                                  expression: "joblogs.status"
                                }
                              ],
                              staticClass: "job-cat",
                              on: {
                                change: [
                                  function($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call($event.target.options, function(o) {
                                        return o.selected
                                      })
                                      .map(function(o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.$set(
                                      _vm.joblogs,
                                      "status",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  },
                                  _vm.statusUpdate
                                ]
                              }
                            },
                            [
                              _c(
                                "option",
                                {
                                  staticClass: "txt-green",
                                  attrs: { value: "1" }
                                },
                                [_vm._v("Open")]
                              ),
                              _vm._v(" "),
                              _c(
                                "option",
                                {
                                  staticClass: "txt-red",
                                  attrs: { value: "0" }
                                },
                                [_vm._v("Closed")]
                              )
                            ]
                          )
                        ])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row mt-4 mt-md-0" }, [
                    _c("div", { staticClass: "col-12" }, [
                      _c(
                        "div",
                        {
                          staticClass:
                            "card collapse-icon accordion-icon-rotate user_prof_acc"
                        },
                        [
                          _vm._m(0),
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
                                      _vm._m(1),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "col-xl-3 col-lg-4 col-md-6 col-12 t-c"
                                        },
                                        [
                                          _c(
                                            "p",
                                            { staticClass: "fieldName-p" },
                                            [_vm._v("Job Name")]
                                          ),
                                          _vm._v(" "),
                                          _c("p", { staticClass: "text-v" }, [
                                            _vm._v(
                                              _vm._s(_vm.joblogs.job_title)
                                            )
                                          ])
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "row" }, [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "col-xl-3 col-lg-4 col-md-6 col-12 t-c"
                                        },
                                        [
                                          _c(
                                            "p",
                                            { staticClass: "fieldName-p" },
                                            [_vm._v("Company Name")]
                                          ),
                                          _vm._v(" "),
                                          _c("p", { staticClass: "text-v" }, [
                                            _vm._v(
                                              _vm._s(_vm.joblogs.company_name)
                                            )
                                          ])
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "col-xl-3 col-lg-4 col-md-6 col-12 t-c"
                                        },
                                        [
                                          _c(
                                            "p",
                                            { staticClass: "fieldName-p" },
                                            [_vm._v("Salary Range")]
                                          ),
                                          _vm._v(" "),
                                          _c("p", { staticClass: "text-v" }, [
                                            _vm._v(
                                              _vm._s(_vm.joblogs.salary_range)
                                            )
                                          ])
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "row" }, [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "col-xl-3 col-lg-4 col-md-6 col-12 t-c"
                                        },
                                        [
                                          _c(
                                            "p",
                                            { staticClass: "fieldName-p" },
                                            [_vm._v("Posted On")]
                                          ),
                                          _vm._v(" "),
                                          _c("p", { staticClass: "text-v" }, [
                                            _vm._v(
                                              _vm._s(_vm.joblogs.created_at)
                                            )
                                          ])
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "col-xl-3 col-lg-4 col-md-6 col-12 t-c"
                                        },
                                        [
                                          _c(
                                            "p",
                                            { staticClass: "fieldName-p" },
                                            [_vm._v("Apply Before")]
                                          ),
                                          _vm._v(" "),
                                          _c("p", { staticClass: "text-v" }, [
                                            _vm._v(
                                              _vm._s(_vm.joblogs.apply_before)
                                            )
                                          ])
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "row" }, [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "col-xl-3 col-lg-4 col-md-6 col-12 t-c"
                                        },
                                        [
                                          _c(
                                            "p",
                                            { staticClass: "fieldName-p" },
                                            [_vm._v("Period Of Employment")]
                                          ),
                                          _vm._v(" "),
                                          _c("p", { staticClass: "text-v" }, [
                                            _vm._v(
                                              "\n                                                                    " +
                                                _vm._s(
                                                  _vm.joblogs
                                                    .period_of_employment
                                                )
                                            )
                                          ])
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "col-xl-3 col-lg-4 col-md-6 col-12 t-c"
                                        },
                                        [
                                          _c(
                                            "p",
                                            { staticClass: "fieldName-p" },
                                            [_vm._v("Hours of work")]
                                          ),
                                          _vm._v(" "),
                                          _c("p", { staticClass: "text-v" }, [
                                            _vm._v(
                                              _vm._s(_vm.joblogs.hours_of_work)
                                            )
                                          ])
                                        ]
                                      )
                                    ])
                                  ]
                                )
                              ])
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
                                    _c(
                                      "div",
                                      { staticClass: "card-body mt-sm-0 mt-2" },
                                      [
                                        _c("div", { staticClass: "row" }, [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "col-xl-3 col-lg-4 col-md-6 col-12 t-c"
                                            },
                                            [
                                              _c(
                                                "p",
                                                { staticClass: "fieldName-p" },
                                                [_vm._v("Address")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "p",
                                                { staticClass: "text-v" },
                                                [
                                                  _vm._v(
                                                    _vm._s(_vm.joblogs.address)
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
                                                "col-xl-3 col-lg-4 col-md-6 col-12 t-c"
                                            },
                                            [
                                              _c(
                                                "p",
                                                { staticClass: "fieldName-p" },
                                                [_vm._v("Country")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "p",
                                                { staticClass: "text-v" },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.joblogs.country
                                                    ) + " "
                                                  )
                                                ]
                                              )
                                            ]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("div", { staticClass: "row" }, [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "col-xl-3 col-lg-4 col-md-6 col-12 t-c"
                                            },
                                            [
                                              _c(
                                                "p",
                                                { staticClass: "fieldName-p" },
                                                [_vm._v("State")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "p",
                                                { staticClass: "text-v" },
                                                [
                                                  _vm._v(
                                                    _vm._s(_vm.joblogs.state) +
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
                                                "col-xl-3 col-lg-4 col-md-6 col-12 t-c"
                                            },
                                            [
                                              _c(
                                                "p",
                                                { staticClass: "fieldName-p" },
                                                [_vm._v("City")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "p",
                                                { staticClass: "text-v" },
                                                [
                                                  _vm._v(
                                                    _vm._s(_vm.joblogs.city) +
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
                                                "col-xl-3 col-lg-4 col-md-6 col-12 t-c"
                                            },
                                            [
                                              _c(
                                                "p",
                                                { staticClass: "fieldName-p" },
                                                [_vm._v("Post code")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "p",
                                                { staticClass: "text-v" },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.joblogs.zip_code
                                                    ) + " "
                                                  )
                                                ]
                                              )
                                            ]
                                          )
                                        ])
                                      ]
                                    )
                                  ]
                                )
                              ])
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
                                            { staticClass: "fieldName-p" },
                                            [_vm._v("Job Description")]
                                          ),
                                          _vm._v(" "),
                                          _c("p", { staticClass: "text-v" }, [
                                            _vm._v(
                                              _vm._s(
                                                _vm.joblogs.job_descriptions
                                              )
                                            )
                                          ])
                                        ]
                                      )
                                    ])
                                  ]
                                )
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _vm._m(4),
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
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "col-xl-3 col-lg-4 col-md-6 col-12 t-c"
                                        },
                                        [
                                          _c(
                                            "p",
                                            { staticClass: "fieldName-p" },
                                            [
                                              _vm._v(
                                                "Years of experience\n                                                                    needed"
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("p", { staticClass: "text-v" }, [
                                            _vm._v(
                                              "\n                                                                    " +
                                                _vm._s(
                                                  _vm.joblogs
                                                    .years_of_experience
                                                )
                                            )
                                          ])
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "col-xl-3 col-lg-4 col-md-6 col-12 t-c"
                                        },
                                        [
                                          _c(
                                            "p",
                                            { staticClass: "fieldName-p" },
                                            [_vm._v("Degree Requirements")]
                                          ),
                                          _vm._v(" "),
                                          _c("p", { staticClass: "text-v" }, [
                                            _vm._v(
                                              _vm._s(_vm.joblogs.degree) + " "
                                            )
                                          ])
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
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
                                            { staticClass: "fieldName-p" },
                                            [_vm._v("Skills")]
                                          ),
                                          _vm._v(" "),
                                          _c("p", { staticClass: "text-v" }, [
                                            _vm._v(_vm._s(_vm.joblogs.skill))
                                          ])
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
          [
            _vm._v(
              "Job\n                                                    Details"
            )
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-xl-3 col-lg-4 col-md-6 col-12 t-c" }, [
      _c("p", { staticClass: "fieldName-p" }, [_vm._v("Job Category")]),
      _vm._v(" "),
      _c("p", { staticClass: "text-v" }, [_vm._v("Abc Category")])
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
          [
            _vm._v(
              "Address\n                                                    Details"
            )
          ]
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
          [
            _vm._v(
              "Job\n                                                    Responsibilities"
            )
          ]
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
          [
            _vm._v(
              "Experience\n                                                    Information"
            )
          ]
        )
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/businessOwner/pages/Jobs/editStatus.vue":
/*!********************************************************************!*\
  !*** ./resources/js/views/businessOwner/pages/Jobs/editStatus.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editStatus_vue_vue_type_template_id_4b2e85c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editStatus.vue?vue&type=template&id=4b2e85c2& */ "./resources/js/views/businessOwner/pages/Jobs/editStatus.vue?vue&type=template&id=4b2e85c2&");
/* harmony import */ var _editStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editStatus.vue?vue&type=script&lang=js& */ "./resources/js/views/businessOwner/pages/Jobs/editStatus.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _editStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _editStatus_vue_vue_type_template_id_4b2e85c2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _editStatus_vue_vue_type_template_id_4b2e85c2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/businessOwner/pages/Jobs/editStatus.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/businessOwner/pages/Jobs/editStatus.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/views/businessOwner/pages/Jobs/editStatus.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_editStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./editStatus.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/businessOwner/pages/Jobs/editStatus.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_editStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/businessOwner/pages/Jobs/editStatus.vue?vue&type=template&id=4b2e85c2&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/views/businessOwner/pages/Jobs/editStatus.vue?vue&type=template&id=4b2e85c2& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editStatus_vue_vue_type_template_id_4b2e85c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./editStatus.vue?vue&type=template&id=4b2e85c2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/businessOwner/pages/Jobs/editStatus.vue?vue&type=template&id=4b2e85c2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editStatus_vue_vue_type_template_id_4b2e85c2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editStatus_vue_vue_type_template_id_4b2e85c2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);