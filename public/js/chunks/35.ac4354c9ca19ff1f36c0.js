(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/businessOwner/pages/BusinessDashboard.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/businessOwner/pages/BusinessDashboard.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _BarChart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BarChart */ "./resources/js/views/businessOwner/pages/BarChart.js");
/* harmony import */ var _core_months_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/months.js */ "./resources/js/coreFiles/months.js");


var _watch, _components$data$comp;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var PackageModel = function PackageModel() {
  return __webpack_require__.e(/*! import() */ 24).then(__webpack_require__.bind(null, /*! ./SubscriptionLog/packageModel */ "./resources/js/views/businessOwner/pages/SubscriptionLog/packageModel.vue"));
};

 // const EmployeeTable = ()=> import('./components/EmployeeTable.vue');


 // console.log(allMonths);
// register component to use

/* harmony default export */ __webpack_exports__["default"] = (_components$data$comp = {
  components: {
    BarChart: _BarChart__WEBPACK_IMPORTED_MODULE_2__["default"],
    PackageModel: PackageModel
  },
  data: function data() {
    return {
      selectedYear: '2021',
      months: [],
      totalJob: 0,
      joblogs: {},
      notificationLogs: {},
      loaded: true,
      dashboard: {},
      user_name: '',
      loadedPage: true,
      jobApplied: '',
      chartData: {
        labels: _core_months_js__WEBPACK_IMPORTED_MODULE_3__["default"],
        datasets: [{
          label: 'Jobs Created Per Month',
          data: [],
          backgroundColor: ['#23c0e9'],
          borderColor: ['#23c0e9'],
          borderWidth: 0.5,
          minBarLength: 2
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      },
      chartOptionsBar: {
        xAxis: {
          data: _toConsumableArray(_core_months_js__WEBPACK_IMPORTED_MODULE_3__["default"])
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          type: 'bar',
          data: [10, 10]
        }]
      }
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])('admin', ['home'])), {}, {
    years: function years() {
      var today = new Date();
      var currentYear = today.getFullYear();
      var last10Years = new Date(today.setFullYear(today.getFullYear() - 5)).getFullYear();
      var years = [];

      for (var i = currentYear; i >= last10Years; i--) {
        years.push(i);
      }

      return years;
    }
  }),
  watch: {},
  created: function created() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var self, loadedPage;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.getJobLogs();

            case 2:
              self = _this;
              loadedPage = window.localStorage.getItem('loadedFirstTime');
              console.log(loadedPage);
              _context.next = 7;
              return _this.getDashboardStatics();

            case 7:
              if (loadedPage == 'true') {
                window.localStorage.setItem('loadedFirstTime', false);

                _this.loadOnce();
              }

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  beforeMount: function beforeMount() {// console.log(this.home);
  }
}, _defineProperty(_components$data$comp, "watch", (_watch = {
  search: function search(val, oldVal) {
    this.fetch();
  },
  selectedYear: function selectedYear() {
    this.getDashboardStatics();
  },
  chartData: function chartData(val) {
    alert();
  }
}, _defineProperty(_watch, "search", function search(val, oldVal) {
  this.getJobLogs();
}), _defineProperty(_watch, "entries", function entries(val, oldVal) {
  this.getJobLogs();
}), _watch)), _defineProperty(_components$data$comp, "methods", _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])('admin', ['getAll'])), {}, {
  check: function check() {
    alert();
  },
  loadOnce: function loadOnce() {
    location.reload();
  },
  getDashboardStatics: function getDashboardStatics() {
    var _this2 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return axios.get("/api/admin/dashboardStatic?year=" + _this2.selectedYear);

            case 2:
              _this2.dashboard = _context2.sent.data;
              _this2.chartData.datasets[0].data = _this2.dashboard.graphdata;
              _this2.totalJob = _this2.dashboard.job_count;
              _this2.jobApplied = _this2.dashboard.job_applied;
              _this2.notificationLogs = _this2.dashboard.notificationLog;
              _this2.user_name = _this2.dashboard.user_name;
              localStorage.setItem('uuid', _this2.dashboard.uuid);
              console.log("user name is", _this2.user_name);

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  getJobLogs: function getJobLogs() {
    var _arguments = arguments,
        _this3 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
      var page, res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              page = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : 1;
              _context3.next = 3;
              return axios.get("/api/admin/index_job");

            case 3:
              res = _context3.sent;
              _this3.joblogs = res;
              console.log('data is', _this3.joblogs);

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },
  onChange: function onChange(event) {
    this.getJobLogs();
  } // async fetch() {
  //     this.loaded = false;
  //     let params = {
  //         route: route('admin.home'),
  //         mutation: 'SET_HOME_DATA',
  //         variable: 'data',
  //         data: {
  //             search: this.search,
  //             year: this.selectedYear,
  //         }
  //     };
  //     let { data } = await this.getAll(params);
  //     this.months = data.data.months;
  //     this.loaded = true;
  //     this.chartData.datasets[0].data = this.months;
  //     return data;
  // },

})), _components$data$comp);

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/businessOwner/pages/BusinessDashboard.vue?vue&type=template&id=fbec6444&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/businessOwner/pages/BusinessDashboard.vue?vue&type=template&id=fbec6444& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "content-wrapper" },
    [
      _c("div", { staticClass: "content-body" }, [
        _c("section", { attrs: { id: "configuration" } }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-12" }, [
              _c("div", {}, [
                _c("div", { staticClass: "card-content collapse show" }, [
                  _c("div", { staticClass: "card-dashboard p-0" }, [
                    _c("div", { staticClass: "cd-inner" }, [
                      _vm._m(0),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c(
                          "div",
                          { staticClass: "col-xl-4 col-md-4 col-12 mx-auto" },
                          [
                            _c("div", { staticClass: "box up-box" }, [
                              _c(
                                "div",
                                { staticClass: "media align-items-center" },
                                [
                                  _c("img", {
                                    staticClass: "img-fluid",
                                    attrs: {
                                      src:
                                        _vm.base_url +
                                        "/assets/business/images/d-1.png",
                                      alt: ""
                                    }
                                  }),
                                  _vm._v(" "),
                                  _vm._m(1),
                                  _vm._v(" "),
                                  _c("h2", [_vm._v(_vm._s(_vm.totalJob))])
                                ]
                              )
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-xl-4 col-md-4 col-12 mx-auto" },
                          [
                            _c("div", { staticClass: "box up-box" }, [
                              _c(
                                "div",
                                { staticClass: "media align-items-center" },
                                [
                                  _c("img", {
                                    staticClass: "img-fluid",
                                    attrs: {
                                      src:
                                        _vm.base_url +
                                        "/assets/business/images/d-1.png",
                                      alt: ""
                                    }
                                  }),
                                  _vm._v(" "),
                                  _vm._m(2),
                                  _vm._v(" "),
                                  _c("h2", [_vm._v(_vm._s(_vm.jobApplied))])
                                ]
                              )
                            ])
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c(
                          "div",
                          { staticClass: "col-12 mx-auto text-center" },
                          [
                            _c(
                              "router-link",
                              {
                                staticClass: "btn-green-pckg px-4",
                                attrs: {
                                  to: { name: "businessOwner.jobs.index" }
                                }
                              },
                              [
                                _vm._v(
                                  "\n                                                View All Jobs"
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                staticClass: "btn-green-outline px-3 mx-3",
                                attrs: {
                                  href: "#",
                                  "data-toggle": "modal",
                                  "data-target": "#change_package"
                                }
                              },
                              [_vm._v("Update My Package")]
                            )
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(" "),
                      _vm._m(3),
                      _vm._v(" "),
                      _c("div", { staticClass: "clearfix" }),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "maain-tabble table-responsive" },
                        [
                          _c(
                            "table",
                            {
                              staticClass:
                                "table table-striped table-bordered zero-configuration"
                            },
                            [
                              _vm._m(4),
                              _vm._v(" "),
                              _c(
                                "tbody",
                                [
                                  _vm._l(_vm.joblogs.data, function(
                                    joblog,
                                    index
                                  ) {
                                    return _c("tr", { key: index }, [
                                      _c("td", [_vm._v(_vm._s(index))]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(_vm._s(joblog.job_title))
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          _vm._s(
                                            _vm.formatDate(joblog.created_at)
                                          )
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          _vm._s(joblog.status_count_applied)
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          _vm._s(joblog.status_count_interested)
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          _vm._s(joblog.status_count_rejected)
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          _vm._s(
                                            joblog.status ? "open" : "closed"
                                          )
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _c(
                                          "div",
                                          {
                                            staticClass: "btn-group mr-1 mb-1"
                                          },
                                          [
                                            _vm._m(5, true),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              {
                                                staticClass: "dropdown-menu",
                                                attrs: {
                                                  "x-placement": "bottom-start"
                                                }
                                              },
                                              [
                                                _c(
                                                  "router-link",
                                                  {
                                                    staticClass:
                                                      "dropdown-item",
                                                    attrs: {
                                                      to: {
                                                        name:
                                                          "businessOwner.jobs.candidate.index",
                                                        params: {
                                                          id: joblog.id
                                                        }
                                                      }
                                                    }
                                                  },
                                                  [
                                                    _c("i", {
                                                      staticClass:
                                                        "fa fa-user-circle"
                                                    }),
                                                    _vm._v("View Candidates")
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "router-link",
                                                  {
                                                    staticClass:
                                                      "dropdown-item",
                                                    attrs: {
                                                      to: {
                                                        name:
                                                          "businessOwner.jobs.show",
                                                        params: {
                                                          id: joblog.id
                                                        }
                                                      }
                                                    }
                                                  },
                                                  [
                                                    _c("i", {
                                                      staticClass: "fa fa-eye"
                                                    }),
                                                    _vm._v("View Job")
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "router-link",
                                                  {
                                                    staticClass:
                                                      "dropdown-item",
                                                    attrs: {
                                                      to: {
                                                        name:
                                                          "businessOwner.jobs.editStatus",
                                                        params: {
                                                          id: joblog.id
                                                        }
                                                      }
                                                    }
                                                  },
                                                  [
                                                    _c("i", {
                                                      staticClass: "fas fa-edit"
                                                    }),
                                                    _vm._v("Edit Job Status")
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "router-link",
                                                  {
                                                    staticClass:
                                                      "dropdown-item",
                                                    attrs: {
                                                      to: {
                                                        name:
                                                          "businessOwner.jobs.editJob",
                                                        params: {
                                                          id: joblog.id
                                                        }
                                                      }
                                                    }
                                                  },
                                                  [
                                                    _c("i", {
                                                      staticClass: "fas fa-edit"
                                                    }),
                                                    _vm._v("Edit Job")
                                                  ]
                                                )
                                              ],
                                              1
                                            )
                                          ]
                                        )
                                      ])
                                    ])
                                  }),
                                  _vm._v(" "),
                                  typeof _vm.joblogs.data != "undefined" &&
                                  _vm.joblogs.data.length == 0
                                    ? _c("tr", [
                                        _c("td", { attrs: { colspan: "8" } }, [
                                          _vm._v(
                                            "\n                                                      No Data Available\n                                                    "
                                          )
                                        ])
                                      ])
                                    : _vm._e()
                                ],
                                2
                              )
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
      ]),
      _vm._v(" "),
      _c("package-model")
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-12" }, [
        _c("h1", [_vm._v("business owner dashboard")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "media-body" }, [
      _c("h3", [_vm._v("Total Active "), _c("br"), _vm._v("Job")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "media-body" }, [
      _c("h3", [_vm._v("Total New "), _c("br"), _vm._v("Applicants")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-12  text-center" }, [
        _c("h2", [_vm._v("All Jobs")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("s.no")]),
        _vm._v(" "),
        _c("th", [_vm._v("Job Title")]),
        _vm._v(" "),
        _c("th", [_vm._v("Date Posted")]),
        _vm._v(" "),
        _c("th", [_vm._v("New Applicants")]),
        _vm._v(" "),
        _c("th", [_vm._v("Interested")]),
        _vm._v(" "),
        _c("th", [_vm._v("Rejected")]),
        _vm._v(" "),
        _c("th", [_vm._v("Status")]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "btn btn-drop-table btn-sm",
        attrs: {
          type: "button",
          "data-toggle": "dropdown",
          "aria-haspopup": "true",
          "aria-expanded": "false"
        }
      },
      [_c("i", { staticClass: "fa fa-ellipsis-v" })]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/coreFiles/months.js":
/*!******************************************!*\
  !*** ./resources/js/coreFiles/months.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
/* harmony default export */ __webpack_exports__["default"] = (months);

/***/ }),

/***/ "./resources/js/views/businessOwner/pages/BarChart.js":
/*!************************************************************!*\
  !*** ./resources/js/views/businessOwner/pages/BarChart.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Bar"],
  props: ['chartData', 'options'],
  data: function data() {
    return {};
  },
  mounted: function mounted() {
    this.renderChart(this.chartData, this.options);
  },
  watch: {
    "chartData.datasets.0.data": function chartDataDatasets0Data() {
      this.renderChart(this.chartData, this.options);
    }
  }
});

/***/ }),

/***/ "./resources/js/views/businessOwner/pages/BusinessDashboard.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/views/businessOwner/pages/BusinessDashboard.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BusinessDashboard_vue_vue_type_template_id_fbec6444___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BusinessDashboard.vue?vue&type=template&id=fbec6444& */ "./resources/js/views/businessOwner/pages/BusinessDashboard.vue?vue&type=template&id=fbec6444&");
/* harmony import */ var _BusinessDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BusinessDashboard.vue?vue&type=script&lang=js& */ "./resources/js/views/businessOwner/pages/BusinessDashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BusinessDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BusinessDashboard_vue_vue_type_template_id_fbec6444___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BusinessDashboard_vue_vue_type_template_id_fbec6444___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/businessOwner/pages/BusinessDashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/businessOwner/pages/BusinessDashboard.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/views/businessOwner/pages/BusinessDashboard.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BusinessDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./BusinessDashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/businessOwner/pages/BusinessDashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BusinessDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/businessOwner/pages/BusinessDashboard.vue?vue&type=template&id=fbec6444&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/views/businessOwner/pages/BusinessDashboard.vue?vue&type=template&id=fbec6444& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BusinessDashboard_vue_vue_type_template_id_fbec6444___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./BusinessDashboard.vue?vue&type=template&id=fbec6444& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/businessOwner/pages/BusinessDashboard.vue?vue&type=template&id=fbec6444&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BusinessDashboard_vue_vue_type_template_id_fbec6444___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BusinessDashboard_vue_vue_type_template_id_fbec6444___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);