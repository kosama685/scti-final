(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[90],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/pages/Job/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/user/pages/Job/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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
var InnerPageFooter = function InnerPageFooter() {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../../components/InnerPageFooter.vue */ "./resources/js/views/user/components/InnerPageFooter.vue"));
};

var RegisterHeader = function RegisterHeader() {
  return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../../components/RegisterHeader.vue */ "./resources/js/views/user/components/RegisterHeader.vue"));
};

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
      job_status: 'all'
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
              return _this.getJobLogs();

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    getJobLogs: function getJobLogs() {
      var _arguments = arguments,
          _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var page, res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                page = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : 1;
                _context2.next = 3;
                return axios.get("/api/user/jobs/" + _this2.job_status + "?page=" + page + '&entries=' + _this2.entries + '&to=' + _this2.to + '&from=' + _this2.from);

              case 3:
                res = _context2.sent;
                _this2.joblogs = res.data;
                console.log(_this2.joblogs);

              case 6:
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/pages/Job/index.vue?vue&type=template&id=115cf3e0&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/user/pages/Job/index.vue?vue&type=template&id=115cf3e0& ***!
  \******************************************************************************************************************************************************************************************************************/
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
      _c("section", { staticClass: "user-home" }, [
        _c("div", { staticClass: "container" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-12" }, [
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-body " }, [
                  _c("div", { staticClass: "row justify-content-end" }, [
                    _c("div", { staticClass: "col-lg-3 col-md-4 col-12" }, [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.job_status,
                              expression: "job_status"
                            }
                          ],
                          staticClass: "form-control reg-sel",
                          attrs: { id: "job_type", name: "job_status" },
                          on: {
                            change: [
                              function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.job_status = $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              },
                              _vm.getJobLogs
                            ]
                          }
                        },
                        [
                          _c("option", [_vm._v("Select One")]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "all" } }, [
                            _vm._v("All")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "applied" } }, [
                            _vm._v("Applied")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "rejected" } }, [
                            _vm._v("Rejected")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "shortlisted" } }, [
                            _vm._v("Shortlisted")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "closed" } }, [
                            _vm._v("Closed")
                          ])
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "top mt-2 mt-xl-5 mb-xl-0 mb-3" }, [
                    _vm._m(1),
                    _vm._v(" "),
                    _c("div", { staticClass: "row align-items-center" }, [
                      _c(
                        "div",
                        {
                          staticClass:
                            "col-xl-4 col-md-4 col-sm-6 col-12 mb-2 mb-md-0"
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c("label", { attrs: { for: "exp" } }, [
                                _vm._v("From")
                              ]),
                              _vm._v(" "),
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
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-xl-4 col-md-4 col-sm-6 col-12" },
                        [
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c("label", { attrs: { for: "exp" } }, [
                                _vm._v("To")
                              ]),
                              _vm._v(" "),
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
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-xl-4 col-md-4 col-sm-6 col-12 " },
                        [
                          _c(
                            "button",
                            {
                              staticClass: "green-btn btn-primary w-100",
                              attrs: { type: "button" },
                              on: {
                                click: function($event) {
                                  return _vm.getJobLogs()
                                }
                              }
                            },
                            [
                              _vm._v(
                                "apply/clear\n                                        "
                              )
                            ]
                          )
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-12 p-0" }, [
                      _c(
                        "div",
                        { staticClass: "maain-tabble table-responsive" },
                        [
                          _c(
                            "table",
                            { staticClass: "table zero-configuration" },
                            [
                              _vm._m(2),
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
                                      _c("td", [_vm._v(_vm._s(joblog.job_id))]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(_vm._s(joblog.job.job_title))
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
                                      _c("td", { staticClass: "green" }, [
                                        _vm._v(_vm._s(joblog.status))
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _c(
                                          "div",
                                          {
                                            staticClass: "btn-group mr-1 mb-1"
                                          },
                                          [
                                            _vm._m(3, true),
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
                                                        name: "user.job.show",
                                                        params: {
                                                          id: joblog.job_id
                                                        }
                                                      }
                                                    }
                                                  },
                                                  [
                                                    _c("i", {
                                                      staticClass: "fa fa-eye"
                                                    }),
                                                    _vm._v(
                                                      "View\n                                                            "
                                                    )
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
                                            "\n                                                    No Data Available\n                                                "
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
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-12 text-center" }, [
        _c("p", { staticClass: "page-heading" }, [_vm._v("My Jobs")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-lg-1 col-md-2 col-12 text-center" }, [
        _c("span", { staticClass: "data-span" }, [_vm._v("Sort By:")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("S.no")]),
        _vm._v(" "),
        _c("th", [_vm._v("Job Id")]),
        _vm._v(" "),
        _c("th", [_vm._v("Job Title")]),
        _vm._v(" "),
        _c("th", [_vm._v("Apply Date")]),
        _vm._v(" "),
        _c("th", [_vm._v("Stage")]),
        _vm._v(" "),
        _c("th", [_vm._v("action")])
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
        staticClass: "btn  btn-drop-table btn-sm",
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

/***/ "./resources/js/views/user/pages/Job/index.vue":
/*!*****************************************************!*\
  !*** ./resources/js/views/user/pages/Job/index.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_115cf3e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=115cf3e0& */ "./resources/js/views/user/pages/Job/index.vue?vue&type=template&id=115cf3e0&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/user/pages/Job/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_115cf3e0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_115cf3e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/user/pages/Job/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/user/pages/Job/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/user/pages/Job/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/pages/Job/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/user/pages/Job/index.vue?vue&type=template&id=115cf3e0&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/user/pages/Job/index.vue?vue&type=template&id=115cf3e0& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_115cf3e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=115cf3e0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/pages/Job/index.vue?vue&type=template&id=115cf3e0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_115cf3e0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_115cf3e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);