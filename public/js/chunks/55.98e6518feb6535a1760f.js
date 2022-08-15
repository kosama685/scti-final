(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[55],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/pages/Job/viewCandidateJob.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/pages/Job/viewCandidateJob.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      candidates: {},
      search: '',
      entries: 10
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
              return _this.getCandidatesOfJob();

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    getCandidatesOfJob: function getCandidatesOfJob() {
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
                return axios.get("/api/admin/candidate/job" + id + "?page=" + page + '&entries=' + _this2.entries);

              case 4:
                res = _context2.sent;
                _this2.candidates = res.data.data;
                console.log(_this2.candidates);

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/pages/Job/viewCandidateJob.vue?vue&type=template&id=51bd1fdb&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/pages/Job/viewCandidateJob.vue?vue&type=template&id=51bd1fdb& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
                    _c("div", { staticClass: "row mb-4" }, [
                      _c("div", { staticClass: "col-6" }, [
                        _c("div", { staticClass: "media" }, [
                          _c("img", {
                            staticClass: "img-fluid",
                            attrs: {
                              src: _vm.base_url + "/assets/images/avatar.jpg",
                              alt: ""
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "media-body media_margin" },
                            [
                              _c("h6", { staticClass: "bo-name" }, [
                                _vm._v("John Smith")
                              ]),
                              _vm._v(" "),
                              _c("h6", { staticClass: "h6-bo" }, [
                                _vm._v(
                                  "Business Owner Id: " +
                                    _vm._s(_vm.candidates[0].user_id)
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "media " }, [
                                _c(
                                  "div",
                                  { staticClass: "media-body second-m" },
                                  [
                                    _c("h5", { staticClass: "mt-0" }, [
                                      _vm._v("Job Name: "),
                                      _c("span", [
                                        _vm._v(
                                          _vm._s(_vm.candidates[0].job_title)
                                        )
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("h5", { staticClass: "mt-0" }, [
                                      _vm._v(
                                        "Job ID :" +
                                          _vm._s(_vm.candidates[0].id)
                                      )
                                    ])
                                  ]
                                )
                              ])
                            ]
                          )
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "row offset-lg-1 align-items-center" },
                    [
                      _c(
                        "div",
                        { staticClass: "col-lg-4 col-md-4 col-12 d-flex" },
                        [
                          _c(
                            "div",
                            { staticClass: "form-group show-candidate ml-4" },
                            [
                              _c("p", [_vm._v("Enteries")]),
                              _vm._v(" "),
                              _c(
                                "select",
                                {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.entries,
                                      expression: "entries"
                                    }
                                  ],
                                  staticClass: "form-control show-enteries",
                                  on: {
                                    change: [
                                      function($event) {
                                        var $$selectedVal = Array.prototype.filter
                                          .call($event.target.options, function(
                                            o
                                          ) {
                                            return o.selected
                                          })
                                          .map(function(o) {
                                            var val =
                                              "_value" in o ? o._value : o.value
                                            return val
                                          })
                                        _vm.entries = $event.target.multiple
                                          ? $$selectedVal
                                          : $$selectedVal[0]
                                      },
                                      function($event) {
                                        return _vm.getCandidatesOfJob()
                                      }
                                    ]
                                  }
                                },
                                [
                                  _c("option", { attrs: { value: "10" } }, [
                                    _vm._v("Filter By")
                                  ]),
                                  _vm._v(" "),
                                  _c("option", { attrs: { value: "2" } }, [
                                    _vm._v("2")
                                  ]),
                                  _vm._v(" "),
                                  _c("option", { attrs: { value: "3" } }, [
                                    _vm._v("3")
                                  ]),
                                  _vm._v(" "),
                                  _c("option", { attrs: { value: "4" } }, [
                                    _vm._v("4")
                                  ]),
                                  _vm._v(" "),
                                  _c("option", { attrs: { value: "5" } }, [
                                    _vm._v("5")
                                  ])
                                ]
                              )
                            ]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-12 mt-5" }, [
                        _c(
                          "div",
                          { staticClass: "row" },
                          _vm._l(
                            _vm.candidates[0].job_applied_candidate,
                            function(candidate, index) {
                              return _c(
                                "div",
                                {
                                  key: index,
                                  staticClass: "col-xl-6 col-md-12 col-12"
                                },
                                [
                                  _c("div", { staticClass: "card_wrap_job" }, [
                                    _c("div", { staticClass: "media" }, [
                                      _c("img", {
                                        staticClass: "img-fluid",
                                        attrs: {
                                          src:
                                            _vm.base_url +
                                            "/assets/images/" +
                                            candidate.user.image,
                                          alt: ""
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "media-body cn_margin" },
                                        [
                                          _c("h6", { staticClass: "cs-name" }, [
                                            _vm._v(
                                              _vm._s(candidate.user.name) + "  "
                                            ),
                                            _c(
                                              "span",
                                              {
                                                staticClass: "cand-status-green"
                                              },
                                              [_vm._v(_vm._s(candidate.status))]
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("h6", { staticClass: "cs-id" }, [
                                            _vm._v(
                                              " Owner Id: " +
                                                _vm._s(_vm.candidates[0].id)
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c(
                                            "router-link",
                                            {
                                              staticClass: "cs-prof",
                                              attrs: {
                                                to: {
                                                  name: "admin.users.profile",
                                                  params: {
                                                    id: candidate.user.id
                                                  }
                                                }
                                              }
                                            },
                                            [_vm._v("View profile")]
                                          )
                                        ],
                                        1
                                      )
                                    ])
                                  ])
                                ]
                              )
                            }
                          ),
                          0
                        )
                      ])
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/admin/pages/Job/viewCandidateJob.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/views/admin/pages/Job/viewCandidateJob.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _viewCandidateJob_vue_vue_type_template_id_51bd1fdb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewCandidateJob.vue?vue&type=template&id=51bd1fdb& */ "./resources/js/views/admin/pages/Job/viewCandidateJob.vue?vue&type=template&id=51bd1fdb&");
/* harmony import */ var _viewCandidateJob_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./viewCandidateJob.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/pages/Job/viewCandidateJob.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _viewCandidateJob_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _viewCandidateJob_vue_vue_type_template_id_51bd1fdb___WEBPACK_IMPORTED_MODULE_0__["render"],
  _viewCandidateJob_vue_vue_type_template_id_51bd1fdb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/pages/Job/viewCandidateJob.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/pages/Job/viewCandidateJob.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/admin/pages/Job/viewCandidateJob.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_viewCandidateJob_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./viewCandidateJob.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/pages/Job/viewCandidateJob.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_viewCandidateJob_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/pages/Job/viewCandidateJob.vue?vue&type=template&id=51bd1fdb&":
/*!************************************************************************************************!*\
  !*** ./resources/js/views/admin/pages/Job/viewCandidateJob.vue?vue&type=template&id=51bd1fdb& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_viewCandidateJob_vue_vue_type_template_id_51bd1fdb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./viewCandidateJob.vue?vue&type=template&id=51bd1fdb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/pages/Job/viewCandidateJob.vue?vue&type=template&id=51bd1fdb&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_viewCandidateJob_vue_vue_type_template_id_51bd1fdb___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_viewCandidateJob_vue_vue_type_template_id_51bd1fdb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);