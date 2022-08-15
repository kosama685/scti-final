(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[54],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/pages/Job/job.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/pages/Job/job.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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
      to: ''
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
                return axios.get("/api/admin/joblog" + id + "?page=" + page + '&entries=' + _this2.entries + '&to=' + _this2.to + '&from=' + _this2.from);

              case 4:
                res = _context2.sent;
                _this2.joblogs = res.data;
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/pages/Job/job.vue?vue&type=template&id=6282bf11&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/pages/Job/job.vue?vue&type=template&id=6282bf11& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
                            { attrs: { to: { name: "AdminHome" } } },
                            [
                              _c("i", { staticClass: "fa fa-angle-left" }),
                              _vm._v("Job Listing")
                            ]
                          )
                        ],
                        1
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "top mt-5" }, [
                    _vm._m(0),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c(
                        "div",
                        { staticClass: "col-xl-2 col-md-4 col-sm-6 col-12" },
                        [
                          _c("date-picker", {
                            attrs: { valueType: "format" },
                            model: {
                              value: _vm.from,
                              callback: function($$v) {
                                _vm.from = $$v
                              },
                              expression: "from"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-xl-2 col-md-4 col-sm-6 col-12" },
                        [
                          _c("date-picker", {
                            attrs: { valueType: "format" },
                            model: {
                              value: _vm.to,
                              callback: function($$v) {
                                _vm.to = $$v
                              },
                              expression: "to"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-xl-2 col-md-4 col-12" }, [
                        _c(
                          "button",
                          {
                            staticClass: "green-btn w-100",
                            attrs: { type: "button" },
                            on: {
                              click: function($event) {
                                return _vm.getPaymentLogs()
                              }
                            }
                          },
                          [_vm._v("apply/clear")]
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "clearfix" }),
                  _vm._v(" "),
                  _c("div", { staticClass: "maain-tabble table-responsive" }, [
                    _c(
                      "table",
                      {
                        staticClass:
                          "table table-striped table-bordered zero-configuration"
                      },
                      [
                        _vm._m(1),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          [
                            _vm._l(_vm.joblogs.data, function(joblog, index) {
                              return _c("tr", { key: index }, [
                                _c("td", [_vm._v(_vm._s(index))]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(joblog.user_id))]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(joblog.id))]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(joblog.job_title))]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    _vm._s(_vm.formatDate(joblog.created_at))
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    _vm._s(_vm.formatDate(joblog.apply_before))
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    _vm._s(joblog.status ? "open" : "closed")
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _c(
                                    "div",
                                    { staticClass: "btn-group mr-1 mb-1" },
                                    [
                                      _vm._m(2, true),
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
                                              staticClass: "dropdown-item",
                                              attrs: {
                                                to: {
                                                  name: "admin.job.candidate",
                                                  params: { id: joblog.id }
                                                }
                                              }
                                            },
                                            [
                                              _c("i", {
                                                staticClass: "fa fa-user-circle"
                                              }),
                                              _vm._v("View Candidate")
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "router-link",
                                            {
                                              staticClass: "dropdown-item",
                                              attrs: {
                                                to: {
                                                  name: "admin.job.show",
                                                  params: { id: joblog.id }
                                                }
                                              }
                                            },
                                            [
                                              _c("i", {
                                                staticClass: "fa fa-eye"
                                              }),
                                              _vm._v("View ")
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
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-12" }, [
        _c("label", { attrs: { for: "" } }, [_vm._v("sort by :")])
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
        _c("th", [_vm._v("business owner ID")]),
        _vm._v(" "),
        _c("th", [_vm._v("Job Id")]),
        _vm._v(" "),
        _c("th", [_vm._v("Job title")]),
        _vm._v(" "),
        _c("th", [_vm._v("Posted On")]),
        _vm._v(" "),
        _c("th", [_vm._v("Apply Before")]),
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

/***/ "./resources/js/views/admin/pages/Job/job.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/admin/pages/Job/job.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _job_vue_vue_type_template_id_6282bf11___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./job.vue?vue&type=template&id=6282bf11& */ "./resources/js/views/admin/pages/Job/job.vue?vue&type=template&id=6282bf11&");
/* harmony import */ var _job_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./job.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/pages/Job/job.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _job_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _job_vue_vue_type_template_id_6282bf11___WEBPACK_IMPORTED_MODULE_0__["render"],
  _job_vue_vue_type_template_id_6282bf11___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/pages/Job/job.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/pages/Job/job.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/admin/pages/Job/job.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_job_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./job.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/pages/Job/job.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_job_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/pages/Job/job.vue?vue&type=template&id=6282bf11&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/admin/pages/Job/job.vue?vue&type=template&id=6282bf11& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_job_vue_vue_type_template_id_6282bf11___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./job.vue?vue&type=template&id=6282bf11& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/pages/Job/job.vue?vue&type=template&id=6282bf11&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_job_vue_vue_type_template_id_6282bf11___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_job_vue_vue_type_template_id_6282bf11___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);