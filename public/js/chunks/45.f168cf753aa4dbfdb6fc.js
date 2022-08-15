(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[45],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/components/Questionaire.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/components/Questionaire.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  inject: ['formatDate'],
  data: function data() {
    return {
      questionaires: {},
      answers: {}
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
              return _this.getQuestionaire();

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    getQuestionaire: function getQuestionaire() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios.get('/api/public/getQuestionaire');

              case 2:
                res = _context2.sent;
                _this2.questionaires = res.data; //console.log(JSON.parse(JSON.stringify(this.questionaires.data[0].answers)));

              case 4:
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/components/Questionaire.vue?vue&type=template&id=7a1c9f8b&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/components/Questionaire.vue?vue&type=template&id=7a1c9f8b& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "personal-details-wrapper career-details-wrapper mt-5" },
    [
      _c("h2", [_vm._v("Career Details")]),
      _vm._v(" "),
      _vm._l(_vm.questionaires.data, function (questionnaire, index) {
        return _c("div", { key: index, staticClass: "row" }, [
          _c("div", { staticClass: "col-lg-9" }, [
            _c("p", [
              _c("strong", { staticClass: "pr-2" }, [
                _vm._v("Q" + _vm._s(index + 1) + ":"),
              ]),
              _vm._v(" " + _vm._s(questionnaire.questions) + " "),
            ]),
            _vm._v(" "),
            questionnaire.answer_type == "checkbox"
              ? _c(
                  "div",
                  { staticClass: "row" },
                  _vm._l(
                    JSON.parse(questionnaire.answers),
                    function (answer, index) {
                      return _c(
                        "div",
                        {
                          key: index,
                          staticClass: "d-flex justify-content-between",
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass:
                                "remember-sec-wrapper register-main px-0",
                            },
                            [
                              _c("ValidationProvider", {
                                attrs: { tag: "div", name: "Check Box" },
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "default",
                                      fn: function (ref) {
                                        var errors = ref.errors
                                        return [
                                          _c(
                                            "label",
                                            { staticClass: "check" },
                                            [
                                              _vm._v(
                                                _vm._s(answer) +
                                                  "\n\t\t\t\t\t\t\t\t"
                                              ),
                                              _c("input", {
                                                attrs: {
                                                  spellcheck: "true",
                                                  name:
                                                    "value_" +
                                                    questionnaire.id +
                                                    "[]",
                                                  type: "checkbox",
                                                },
                                                domProps: { value: answer },
                                              }),
                                              _vm._v(" "),
                                              _c("span", {
                                                staticClass: "checkmark",
                                              }),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "text-danger" },
                                            [_vm._v(_vm._s(errors[0]))]
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
                          ),
                        ]
                      )
                    }
                  ),
                  0
                )
              : questionnaire.answer_type == "radio"
              ? _c(
                  "div",
                  { staticClass: "row" },
                  _vm._l(
                    JSON.parse(questionnaire.answers),
                    function (answer, index) {
                      return _c(
                        "div",
                        {
                          key: index,
                          staticClass:
                            "d-flex justify-content-between round-checkbox",
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "remember-sec-wrapper px-0" },
                            [
                              _c("ValidationProvider", {
                                attrs: { tag: "div", name: "Check Box" },
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "default",
                                      fn: function (ref) {
                                        var errors = ref.errors
                                        return [
                                          _c(
                                            "label",
                                            { staticClass: "check" },
                                            [
                                              _vm._v(
                                                _vm._s(answer) +
                                                  "\n\t\t\t\t\t\t\t"
                                              ),
                                              _c("input", {
                                                attrs: {
                                                  spellcheck: "true",
                                                  name:
                                                    "value_" +
                                                    questionnaire.id +
                                                    "[]",
                                                  type: "checkbox",
                                                },
                                                domProps: { value: answer },
                                              }),
                                              _vm._v(" "),
                                              _c("span", {
                                                staticClass: "checkmark",
                                              }),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "text-danger" },
                                            [_vm._v(_vm._s(errors[0]))]
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
                          ),
                        ]
                      )
                    }
                  ),
                  0
                )
              : questionnaire.answer_type == "textarea"
              ? _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-lg-8" }, [
                    _c(
                      "div",
                      { staticClass: "remember-sec-wrapper px-0" },
                      [
                        _c("ValidationProvider", {
                          attrs: { tag: "div", name: "Check Box" },
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "default",
                                fn: function (ref) {
                                  var errors = ref.errors
                                  return [
                                    _c("textarea", {
                                      staticClass: "w-100 ans-sec",
                                      attrs: {
                                        name:
                                          "value_" + questionnaire.id + "[]",
                                      },
                                    }),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "text-danger" }, [
                                      _vm._v(_vm._s(errors[0])),
                                    ]),
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
                    ),
                  ]),
                ])
              : questionnaire.answer_type == "dropdown"
              ? _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-lg-6" }, [
                    _c(
                      "div",
                      { staticClass: "remember-sec-wrapper px-0" },
                      [
                        _c("ValidationProvider", {
                          attrs: { tag: "div", name: "Check Box" },
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "default",
                                fn: function (ref) {
                                  var errors = ref.errors
                                  return [
                                    _c(
                                      "select",
                                      {
                                        staticClass: "select-opt w-100",
                                        attrs: {
                                          name:
                                            "value_" + questionnaire.id + "[]",
                                          id: "",
                                        },
                                      },
                                      _vm._l(
                                        JSON.parse(questionnaire.answers),
                                        function (answer, index) {
                                          return _c(
                                            "option",
                                            {
                                              key: index,
                                              domProps: { value: answer },
                                            },
                                            [_vm._v(_vm._s(answer))]
                                          )
                                        }
                                      ),
                                      0
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "text-danger" }, [
                                      _vm._v(_vm._s(errors[0])),
                                    ]),
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
                    ),
                  ]),
                ])
              : questionnaire.answer_type == "file"
              ? _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-lg-6" }, [
                    _c(
                      "div",
                      { staticClass: "remember-sec-wrapper px-0" },
                      [
                        _c("ValidationProvider", {
                          attrs: { tag: "div", name: "Check Box" },
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "default",
                                fn: function (ref) {
                                  var errors = ref.errors
                                  return [
                                    _c("input", {
                                      attrs: {
                                        type: "file",
                                        name: "file",
                                        name:
                                          "value_" + questionnaire.id + "[]",
                                      },
                                    }),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "text-danger" }, [
                                      _vm._v(_vm._s(errors[0])),
                                    ]),
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
                    ),
                  ]),
                ])
              : questionnaire.answer_type == "date"
              ? _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-lg-8" }, [
                    _c(
                      "div",
                      { staticClass: "remember-sec-wrapper px-0" },
                      [
                        _c("ValidationProvider", {
                          attrs: { tag: "div", name: "Check Box" },
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "default",
                                fn: function (ref) {
                                  var errors = ref.errors
                                  return [
                                    _c("input", {
                                      attrs: {
                                        type: "date",
                                        name:
                                          "value_" + questionnaire.id + "[]",
                                      },
                                    }),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "text-danger" }, [
                                      _vm._v(_vm._s(errors[0])),
                                    ]),
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
                    ),
                  ]),
                ])
              : questionnaire.answer_type == "time"
              ? _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-lg-8" }, [
                    _c(
                      "div",
                      { staticClass: "remember-sec-wrapper px-0" },
                      [
                        _c("ValidationProvider", {
                          attrs: { tag: "div", name: "Check Box" },
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "default",
                                fn: function (ref) {
                                  var errors = ref.errors
                                  return [
                                    _c("input", {
                                      attrs: {
                                        type: "time",
                                        name:
                                          "value_" + questionnaire.id + "[]",
                                      },
                                    }),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "text-danger" }, [
                                      _vm._v(_vm._s(errors[0])),
                                    ]),
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
                    ),
                  ]),
                ])
              : _vm._e(),
          ]),
        ])
      }),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/admin/components/Questionaire.vue":
/*!**************************************************************!*\
  !*** ./resources/js/views/admin/components/Questionaire.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Questionaire_vue_vue_type_template_id_7a1c9f8b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Questionaire.vue?vue&type=template&id=7a1c9f8b& */ "./resources/js/views/admin/components/Questionaire.vue?vue&type=template&id=7a1c9f8b&");
/* harmony import */ var _Questionaire_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Questionaire.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/components/Questionaire.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Questionaire_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Questionaire_vue_vue_type_template_id_7a1c9f8b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Questionaire_vue_vue_type_template_id_7a1c9f8b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/components/Questionaire.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/components/Questionaire.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/admin/components/Questionaire.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Questionaire_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Questionaire.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/components/Questionaire.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Questionaire_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/components/Questionaire.vue?vue&type=template&id=7a1c9f8b&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/views/admin/components/Questionaire.vue?vue&type=template&id=7a1c9f8b& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Questionaire_vue_vue_type_template_id_7a1c9f8b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Questionaire.vue?vue&type=template&id=7a1c9f8b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/components/Questionaire.vue?vue&type=template&id=7a1c9f8b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Questionaire_vue_vue_type_template_id_7a1c9f8b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Questionaire_vue_vue_type_template_id_7a1c9f8b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);