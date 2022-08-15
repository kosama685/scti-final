(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[92],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/pages/Job/packageModel.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/user/pages/Job/packageModel.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['data'],
  data: function data() {
    return {
      question_1: '',
      question_2: '',
      question_3: ''
    };
  },
  created: function created() {
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    jobApply: function jobApply(e) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var fd, res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                fd = new FormData(_this.$refs.jobApplyForm);
                _context2.next = 3;
                return axios.post("api/user/jobwithquestion/".concat(_this.$route.params.id, "/user"), fd);

              case 3:
                res = _context2.sent;
                _this.applied = false;

                if (res.data.status == 'Failed') {
                  _this.$snotify.warning(res.data.message);
                } else {
                  $('#question').modal('hide');

                  _this.$snotify.success(res.data.message);
                }

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/pages/Job/packageModel.vue?vue&type=template&id=f6a6bd96&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/user/pages/Job/packageModel.vue?vue&type=template&id=f6a6bd96& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c(
      "div",
      {
        staticClass: "modal fade pro-modal change_package_modal",
        attrs: {
          id: "question",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "exampleModalCenterTitle",
          "aria-hidden": "true",
        },
      },
      [
        _c(
          "div",
          {
            staticClass: "modal-dialog modal-dialog-centered",
            attrs: { role: "document" },
          },
          [
            _c("div", { staticClass: "modal-content" }, [
              _vm._m(0),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    { staticClass: "col-12" },
                    [
                      _c(
                        "h3",
                        { staticClass: "heading-profession text-center" },
                        [_vm._v("Question")]
                      ),
                      _vm._v(" "),
                      _c("ValidationObserver", {
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function (ref) {
                              var handleSubmit = ref.handleSubmit
                              return [
                                _c(
                                  "form",
                                  {
                                    ref: "jobApplyForm",
                                    staticClass: "create-cv mb-0",
                                    attrs: { id: "msform" },
                                    on: {
                                      submit: function ($event) {
                                        $event.preventDefault()
                                        return handleSubmit(_vm.jobApply)
                                      },
                                    },
                                  },
                                  [
                                    _c(
                                      "div",
                                      { staticClass: "row mt-md-1" },
                                      _vm._l(_vm.data, function (item, index) {
                                        return _c(
                                          "div",
                                          {
                                            staticClass:
                                              "col-lg-12 col-md-12 col-12 t-c",
                                          },
                                          [
                                            _c(
                                              "label",
                                              { staticClass: "text-v" },
                                              [
                                                _vm._v(
                                                  "\n                                                Q" +
                                                    _vm._s(index + 1) +
                                                    " : " +
                                                    _vm._s(item.question) +
                                                    "\n                                            "
                                                ),
                                              ]
                                            ),
                                            _vm._v(" "),
                                            index == 0
                                              ? _c(
                                                  "div",
                                                  [
                                                    _c("ValidationProvider", {
                                                      attrs: {
                                                        name: "question_1",
                                                        rules: "required",
                                                      },
                                                      scopedSlots: _vm._u(
                                                        [
                                                          {
                                                            key: "default",
                                                            fn: function (ref) {
                                                              var errors =
                                                                ref.errors
                                                              return [
                                                                _c("input", {
                                                                  attrs: {
                                                                    type: "hidden",
                                                                    name: "questionId_1",
                                                                  },
                                                                  domProps: {
                                                                    value:
                                                                      item.id,
                                                                  },
                                                                }),
                                                                _vm._v(" "),
                                                                _c("textarea", {
                                                                  attrs: {
                                                                    name: "question_1",
                                                                    id: "",
                                                                    cols: "30",
                                                                    rows: "3",
                                                                  },
                                                                }),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "span",
                                                                  {
                                                                    staticClass:
                                                                      "text-danger",
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        errors[0]
                                                                      )
                                                                    ),
                                                                  ]
                                                                ),
                                                              ]
                                                            },
                                                          },
                                                        ],
                                                        null,
                                                        true
                                                      ),
                                                    }),
                                                  ],
                                                  1
                                                )
                                              : _vm._e(),
                                            _vm._v(" "),
                                            index == 1
                                              ? _c(
                                                  "div",
                                                  [
                                                    _c("ValidationProvider", {
                                                      attrs: {
                                                        name: "question_2",
                                                        rules: "required",
                                                      },
                                                      scopedSlots: _vm._u(
                                                        [
                                                          {
                                                            key: "default",
                                                            fn: function (ref) {
                                                              var errors =
                                                                ref.errors
                                                              return [
                                                                _c("input", {
                                                                  attrs: {
                                                                    type: "hidden",
                                                                    name: "questionId_2",
                                                                  },
                                                                  domProps: {
                                                                    value:
                                                                      item.id,
                                                                  },
                                                                }),
                                                                _vm._v(" "),
                                                                _c("textarea", {
                                                                  attrs: {
                                                                    name: "question_2",
                                                                    id: "",
                                                                    cols: "30",
                                                                    rows: "3",
                                                                  },
                                                                }),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "span",
                                                                  {
                                                                    staticClass:
                                                                      "text-danger",
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        errors[0]
                                                                      )
                                                                    ),
                                                                  ]
                                                                ),
                                                              ]
                                                            },
                                                          },
                                                        ],
                                                        null,
                                                        true
                                                      ),
                                                    }),
                                                  ],
                                                  1
                                                )
                                              : _vm._e(),
                                            _vm._v(" "),
                                            index == 2
                                              ? _c(
                                                  "div",
                                                  [
                                                    _c("ValidationProvider", {
                                                      attrs: {
                                                        name: "question_3",
                                                        rules: "required",
                                                      },
                                                      scopedSlots: _vm._u(
                                                        [
                                                          {
                                                            key: "default",
                                                            fn: function (ref) {
                                                              var errors =
                                                                ref.errors
                                                              return [
                                                                _c("input", {
                                                                  attrs: {
                                                                    type: "hidden",
                                                                    name: "questionId_3",
                                                                  },
                                                                  domProps: {
                                                                    value:
                                                                      item.id,
                                                                  },
                                                                }),
                                                                _vm._v(" "),
                                                                _c("textarea", {
                                                                  attrs: {
                                                                    name: "question_3",
                                                                    id: "",
                                                                    cols: "30",
                                                                    rows: "3",
                                                                  },
                                                                }),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "span",
                                                                  {
                                                                    staticClass:
                                                                      "text-danger",
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        errors[0]
                                                                      )
                                                                    ),
                                                                  ]
                                                                ),
                                                              ]
                                                            },
                                                          },
                                                        ],
                                                        null,
                                                        true
                                                      ),
                                                    }),
                                                  ],
                                                  1
                                                )
                                              : _vm._e(),
                                          ]
                                        )
                                      }),
                                      0
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "row mt-2" }, [
                                      _c(
                                        "div",
                                        { staticClass: "col-12 text-center" },
                                        [
                                          _c(
                                            "button",
                                            {
                                              staticClass:
                                                "btn-question-submit w-100",
                                              attrs: { type: "submit" },
                                            },
                                            [_vm._v("Send")]
                                          ),
                                        ]
                                      ),
                                    ]),
                                  ]
                                ),
                              ]
                            },
                          },
                        ]),
                      }),
                    ],
                    1
                  ),
                ]),
              ]),
            ]),
          ]
        ),
      ]
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close",
          },
        },
        [
          _c("span", { attrs: { "aria-hidden": "true" } }, [
            _c("i", { staticClass: "fa fa-times" }),
          ]),
        ]
      ),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/user/pages/Job/packageModel.vue":
/*!************************************************************!*\
  !*** ./resources/js/views/user/pages/Job/packageModel.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _packageModel_vue_vue_type_template_id_f6a6bd96___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./packageModel.vue?vue&type=template&id=f6a6bd96& */ "./resources/js/views/user/pages/Job/packageModel.vue?vue&type=template&id=f6a6bd96&");
/* harmony import */ var _packageModel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./packageModel.vue?vue&type=script&lang=js& */ "./resources/js/views/user/pages/Job/packageModel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _packageModel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _packageModel_vue_vue_type_template_id_f6a6bd96___WEBPACK_IMPORTED_MODULE_0__["render"],
  _packageModel_vue_vue_type_template_id_f6a6bd96___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/user/pages/Job/packageModel.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/user/pages/Job/packageModel.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/user/pages/Job/packageModel.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_packageModel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./packageModel.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/pages/Job/packageModel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_packageModel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/user/pages/Job/packageModel.vue?vue&type=template&id=f6a6bd96&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/user/pages/Job/packageModel.vue?vue&type=template&id=f6a6bd96& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_packageModel_vue_vue_type_template_id_f6a6bd96___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./packageModel.vue?vue&type=template&id=f6a6bd96& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/pages/Job/packageModel.vue?vue&type=template&id=f6a6bd96&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_packageModel_vue_vue_type_template_id_f6a6bd96___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_packageModel_vue_vue_type_template_id_f6a6bd96___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);