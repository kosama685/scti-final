(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/pages/AdminDashboard.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/pages/AdminDashboard.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");
/* harmony import */ var _components_eChart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/eChart.js */ "./resources/js/views/admin/components/eChart.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _BarChart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BarChart */ "./resources/js/views/admin/pages/BarChart.js");
/* harmony import */ var _core_months_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/months.js */ "./resources/js/coreFiles/months.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

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


 // const EmployeeTable = ()=> import('./components/EmployeeTable.vue');



/* harmony default export */ __webpack_exports__["default"] = ({
  // extends: Bar,
  components: {
    BarChart: _BarChart__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    var _ref;

    return _ref = {
      selectedYear: '2021',
      datacollection: null,
      totalRegisterUser: 0,
      revenue_per_month: '',
      revenue_per_year: '',
      totalRegisterBusiness: 0,
      notificationLogs: {},
      dashboard: {}
    }, _defineProperty(_ref, "selectedYear", new Date().getFullYear()), _defineProperty(_ref, "base_url", window.base_url), _defineProperty(_ref, "isLoading", true), _defineProperty(_ref, "data", {
      available_years: []
    }), _defineProperty(_ref, "chartData", {
      labels: _core_months_js__WEBPACK_IMPORTED_MODULE_5__["default"],
      datasets: [{
        label: 'Jobs Created Per Month',
        data: [],
        backgroundColor: ['#23c0e9'],
        borderColor: ['#23c0e9'],
        borderWidth: 0.5,
        minBarLength: 2
      }]
    }), _defineProperty(_ref, "options", {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }), _defineProperty(_ref, "chartOptionsBar", {
      xAxis: {
        data: _toConsumableArray(_core_months_js__WEBPACK_IMPORTED_MODULE_5__["default"])
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        type: 'bar',
        data: [10, 10]
      }]
    }), _ref;
  },
  created: function created() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var self, loadedPage;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.getDashboardStatics();

            case 2:
              self = _this;
              loadedPage = window.localStorage.getItem('loadedFirstTime');
              console.log(loadedPage);

              if (loadedPage == 'true') {
                window.localStorage.setItem('loadedFirstTime', false);

                _this.loadOnce();
              }

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapState"])('admin', ['home'])), {}, {
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
  methods: {
    getDashboardStatics: function getDashboardStatics() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios.get("/api/admin/adminDashboardStatic?year=" + _this2.selectedYear);

              case 2:
                _this2.dashboard = _context2.sent.data;
                _this2.chartData.datasets[0].data = _this2.dashboard.graphdata;
                _this2.totalRegisterUser = _this2.dashboard.totalRegisterUser;
                _this2.revenue_per_month = _this2.dashboard.revenue_per_month;
                _this2.revenue_per_year = _this2.dashboard.revenue_per_year;
                _this2.totalRegisterBusiness = _this2.dashboard.totalRegisterBusiness;
                _this2.totalJob = _this2.dashboard.totalJob;
                _this2.notificationLogs = _this2.dashboard.notificationLog;

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    // loadUserChartData(){
    // 	this.polar.series = [];
    // 	this.polar.series.push({
    // 		name: 'Precipitation',
    // 		type: 'bar',
    // 		data: data.data.users_chart_data
    // 	})
    // },
    ordinal_suffix_of: function ordinal_suffix_of(i) {
      var j = i % 10,
          k = i % 100;
      var suffix = "th";

      if (j === 1 && k !== 11) {
        suffix = "st";
      }

      if (j === 2 && k !== 12) {
        suffix = "nd";
      }

      if (j === 3 && k !== 13) {
        suffix = "rd";
      }

      return suffix;
    }
  },
  watch: {
    selectedYear: function selectedYear() {
      this.getDashboardStatics();
    },
    chartData: function chartData(val) {
      alert();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/pages/AdminDashboard.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/pages/AdminDashboard.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.echarts {\n\twidth: 100%;\n\t/*height: 250px;*/\n\theight: 100%;\n}\n.small {\n\tmax-width: 100%;\n\tmargin:  150px auto;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/pages/AdminDashboard.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/pages/AdminDashboard.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminDashboard.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/pages/AdminDashboard.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/pages/AdminDashboard.vue?vue&type=template&id=5e9d9e62&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/pages/AdminDashboard.vue?vue&type=template&id=5e9d9e62& ***!
  \************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "content-wrapper" }, [
    _c("div", { staticClass: "content-body" }, [
      _c("section", { attrs: { id: "configuration" } }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-12" }, [
            _c("div", {}, [
              _c("div", { staticClass: "card-content collapse show" }, [
                _c("div", { staticClass: "card-dashboard" }, [
                  _vm._m(0),
                  _vm._v(" "),
                  _c("div", { staticClass: "row justify-content-center" }, [
                    _c(
                      "div",
                      { staticClass: "col-xl-6 col-12 d-flex w-100  " },
                      [
                        _c("div", { staticClass: "box up-box" }, [
                          _c(
                            "div",
                            { staticClass: "media align-items-center" },
                            [
                              _c("img", {
                                staticClass: "img-fluid",
                                attrs: {
                                  src: _vm.base_url + "/assets/images/d-1.png",
                                  alt: "",
                                },
                              }),
                              _vm._v(" "),
                              _vm._m(1),
                              _vm._v(" "),
                              _c("h2", [_vm._v(_vm._s(_vm.totalRegisterUser))]),
                            ]
                          ),
                        ]),
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-xl-6 col-12 d-flex w-100 " },
                      [
                        _c("div", { staticClass: "box up-box" }, [
                          _c(
                            "div",
                            { staticClass: "media align-items-center" },
                            [
                              _c("img", {
                                staticClass: "img-fluid",
                                attrs: {
                                  src: _vm.base_url + "/assets/images/d-2.png",
                                  alt: "",
                                },
                              }),
                              _vm._v(" "),
                              _vm._m(2),
                              _vm._v(" "),
                              _c("h2", [
                                _vm._v(_vm._s(_vm.totalRegisterBusiness)),
                              ]),
                            ]
                          ),
                        ]),
                      ]
                    ),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      { staticClass: "col-12 col-xl-12 d-flex w-100" },
                      [
                        _c("div", { staticClass: "box" }, [
                          _vm._m(3),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              { staticClass: "col-md-6 col-12 text-center" },
                              [
                                _c(
                                  "div",
                                  { staticClass: "c100 p80 big light-bloo" },
                                  [
                                    _c("span", [
                                      _vm._v(
                                        _vm._s(_vm.revenue_per_month) + " $"
                                      ),
                                    ]),
                                    _vm._v(" "),
                                    _vm._m(4),
                                  ]
                                ),
                                _vm._v(" "),
                                _c("h6", { staticClass: "h6-cir" }, [
                                  _vm._v("Average Users/ Month"),
                                ]),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-md-6 col-12 text-center" },
                              [
                                _c(
                                  "div",
                                  { staticClass: "c100 p75 big bloo" },
                                  [
                                    _c("span", [
                                      _vm._v(
                                        _vm._s(_vm.revenue_per_year) + " $ "
                                      ),
                                    ]),
                                    _vm._v(" "),
                                    _vm._m(5),
                                  ]
                                ),
                                _vm._v(" "),
                                _c("h6", { staticClass: "h6-cir" }, [
                                  _vm._v("Average Users/ Year"),
                                ]),
                              ]
                            ),
                          ]),
                        ]),
                      ]
                    ),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "chart-bar box bottom" }, [
                    _c("div", { staticClass: "row" }, [
                      _vm._m(6),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-12 col-lg-6 text-right" }, [
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.selectedYear,
                                expression: "selectedYear",
                              },
                            ],
                            on: {
                              change: function ($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function (o) {
                                    return o.selected
                                  })
                                  .map(function (o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.selectedYear = $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              },
                            },
                          },
                          _vm._l(_vm.years, function (year) {
                            return _c("option", { domProps: { value: year } }, [
                              _vm._v(_vm._s(year)),
                            ])
                          }),
                          0
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-12" }, [
                        _c(
                          "div",
                          { staticClass: "chart-main position-relative" },
                          [
                            _c("div", { staticClass: "row" }, [
                              _vm._m(7),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "col-12 col-xl-11" },
                                [
                                  _c("bar-chart", {
                                    attrs: {
                                      "chart:render": "check",
                                      chartData: _vm.chartData,
                                      options: _vm.options,
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _vm._m(8),
                            ]),
                          ]
                        ),
                      ]),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row mt-5" }, [
                    _vm._m(9),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mt-5" }, [
                      _c(
                        "div",
                        {
                          staticClass:
                            "maain-tabble table-responsive dash-table",
                        },
                        [
                          _c(
                            "table",
                            {
                              staticClass:
                                "table table-striped table-bordered zero-configuration",
                            },
                            [
                              _vm._m(10),
                              _vm._v(" "),
                              _c(
                                "tbody",
                                _vm._l(
                                  _vm.notificationLogs,
                                  function (notificationLog) {
                                    return _c("tr", [
                                      _c("td", [
                                        _vm._v(_vm._s(notificationLog.body)),
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(_vm._s(notificationLog.title)),
                                      ]),
                                    ])
                                  }
                                ),
                                0
                              ),
                            ]
                          ),
                        ]
                      ),
                    ]),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-12" }, [
        _c("h1", [_vm._v("public dashboard")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "media-body" }, [
      _c("h3", [_vm._v("Registered "), _c("br"), _vm._v("Users")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "media-body" }, [
      _c("h3", [
        _vm._v("Registered "),
        _c("br"),
        _vm._v("Business "),
        _c("br"),
        _vm._v("Owners"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center" }, [
      _c("h6", { staticClass: "qs" }, [_vm._v("Quick Stats")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "slice" }, [
      _c("div", { staticClass: "bar" }),
      _vm._v(" "),
      _c("div", { staticClass: "fill" }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "slice" }, [
      _c("div", { staticClass: "bar" }),
      _vm._v(" "),
      _c("div", { staticClass: "fill" }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12 col-lg-6 " }, [
      _c("h2", [_vm._v("Revenue Generated Per Year")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-xl-1 col-12" }, [
      _c("h4", { staticClass: "basic-txt" }, [_vm._v("Revenue")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12 text-align-center" }, [
      _c("h4", { staticClass: "m_tag" }, [_vm._v("Months")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12" }, [
      _c("h4", { staticClass: "act_h" }, [_vm._v("Latest Notifications")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Body")]),
        _vm._v(" "),
        _c("th", [_vm._v("Title")]),
      ]),
    ])
  },
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

/***/ "./resources/js/views/admin/components/eChart.js":
/*!*******************************************************!*\
  !*** ./resources/js/views/admin/components/eChart.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");

var reactiveProp = vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["mixins"].reactiveProp;
/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Bar"],
  mixins: [reactiveProp],
  props: ['options'],
  mounted: function mounted() {
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    this.renderChart(this.chartData, this.options);
  }
});

/***/ }),

/***/ "./resources/js/views/admin/pages/AdminDashboard.vue":
/*!***********************************************************!*\
  !*** ./resources/js/views/admin/pages/AdminDashboard.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AdminDashboard_vue_vue_type_template_id_5e9d9e62___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminDashboard.vue?vue&type=template&id=5e9d9e62& */ "./resources/js/views/admin/pages/AdminDashboard.vue?vue&type=template&id=5e9d9e62&");
/* harmony import */ var _AdminDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminDashboard.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/pages/AdminDashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AdminDashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AdminDashboard.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/admin/pages/AdminDashboard.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AdminDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdminDashboard_vue_vue_type_template_id_5e9d9e62___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AdminDashboard_vue_vue_type_template_id_5e9d9e62___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/pages/AdminDashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/pages/AdminDashboard.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/admin/pages/AdminDashboard.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminDashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/pages/AdminDashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/pages/AdminDashboard.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/admin/pages/AdminDashboard.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminDashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminDashboard.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/pages/AdminDashboard.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminDashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminDashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminDashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminDashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/admin/pages/AdminDashboard.vue?vue&type=template&id=5e9d9e62&":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/admin/pages/AdminDashboard.vue?vue&type=template&id=5e9d9e62& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminDashboard_vue_vue_type_template_id_5e9d9e62___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminDashboard.vue?vue&type=template&id=5e9d9e62& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/pages/AdminDashboard.vue?vue&type=template&id=5e9d9e62&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminDashboard_vue_vue_type_template_id_5e9d9e62___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminDashboard_vue_vue_type_template_id_5e9d9e62___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/admin/pages/BarChart.js":
/*!****************************************************!*\
  !*** ./resources/js/views/admin/pages/BarChart.js ***!
  \****************************************************/
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

/***/ })

}]);