(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[42],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/auth/CheckCodeModal.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/auth/CheckCodeModal.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      isSending: false,
      code: '',
      email: ''
    };
  },
  methods: {
    onResend: function onResend(e) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var fd, response, self;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                fd = new FormData();
                fd.append('email', localStorage.getItem('email'));

                if (_this.isSending) {
                  _context.next = 10;
                  break;
                }

                _this.isSending = true;
                _context.next = 6;
                return axios.post('/api/auth/verify/email', fd);

              case 6:
                response = _context.sent;

                if (response.data.data) {
                  self = _this;
                  _this.isSending = false;
                  setTimeout(function () {
                    self.$snotify.success(response.data.msg);
                  }, 1000);
                } else {
                  _this.$snotify.error(response.data.msg);
                }

                _context.next = 11;
                break;

              case 10:
                _this.$snotify.error('already sending', 'Please Wait!');

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    onSubmit: function onSubmit(e) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var fd, response, self;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                fd = new FormData(_this2.$refs.validateCode);
                _context2.next = 3;
                return axios.post('/api/auth/verify/code', fd);

              case 3:
                response = _context2.sent;

                if (response.data.data) {
                  localStorage.setItem('code', _this2.code);
                  self = _this2;
                  $('.modal-3').modal('show');

                  _this2.$snotify.success(response.data.message, 'Verified');
                } else {
                  _this2.$snotify.error(response.data.message, 'Invalid Code');
                }

              case 5:
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/auth/CheckCodeModal.vue?vue&type=template&id=06ec11d0&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/auth/CheckCodeModal.vue?vue&type=template&id=06ec11d0& ***!
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
    {
      staticClass: "modal fade modal-2",
      attrs: {
        id: "exampleModal",
        tabindex: "-1",
        role: "dialog",
        "aria-labelledby": "exampleModalLabel",
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
            _c("div", { staticClass: "forget-pass" }, [
              _vm._m(0),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "modal-body" },
                [
                  _c("h1", [_vm._v("Password Recovery")]),
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
                                ref: "validateCode",
                                on: {
                                  submit: function ($event) {
                                    $event.preventDefault()
                                    return handleSubmit(_vm.onSubmit)
                                  },
                                },
                              },
                              [
                                _c("div", { staticClass: "row" }, [
                                  _c(
                                    "div",
                                    { staticClass: "col-12 form-group" },
                                    [
                                      _c("validationProvider", {
                                        attrs: {
                                          name: "code",
                                          rules: "required",
                                        },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "default",
                                              fn: function (ref) {
                                                var errors = ref.errors
                                                return [
                                                  _c("input", {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value: _vm.code,
                                                        expression: "code",
                                                      },
                                                    ],
                                                    staticClass: "form-control",
                                                    attrs: {
                                                      name: "code",
                                                      type: "text",
                                                      spellcheck: "true",
                                                      placeholder:
                                                        "Enter Verification Code",
                                                    },
                                                    domProps: {
                                                      value: _vm.code,
                                                    },
                                                    on: {
                                                      input: function ($event) {
                                                        if (
                                                          $event.target
                                                            .composing
                                                        ) {
                                                          return
                                                        }
                                                        _vm.code =
                                                          $event.target.value
                                                      },
                                                    },
                                                  }),
                                                  _vm._v(" "),
                                                  _c("i", {
                                                    staticClass:
                                                      "fas fa-pencil-alt",
                                                  }),
                                                  _vm._v(" "),
                                                  _c("span", [
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
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "col-12 text-right" },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass:
                                            "pull-right resend-code code-txt",
                                          attrs: { disabled: _vm.isSending },
                                          on: {
                                            click: function ($event) {
                                              return _vm.onResend()
                                            },
                                          },
                                        },
                                        [
                                          _vm._v(
                                            "\n                                     " +
                                              _vm._s(
                                                _vm.isSending
                                                  ? "Resending Code"
                                                  : "Resend"
                                              )
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-12" }, [
                                    _c(
                                      "button",
                                      {
                                        staticClass: "yel-btn",
                                        attrs: { type: "submit" },
                                      },
                                      [_vm._v(" Continue ")]
                                    ),
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "a",
                                    {
                                      staticClass: "bcktologin",
                                      attrs: {
                                        href: "#",
                                        "data-dismiss": "modal",
                                        "aria-label": "Close",
                                      },
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "fa fa-arrow-left",
                                      }),
                                      _vm._v(" back to login"),
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
        ]
      ),
    ]
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "close",
        attrs: {
          type: "button",
          "data-dismiss": "modal",
          "aria-label": "Close",
        },
      },
      [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
    )
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/admin/auth/CheckCodeModal.vue":
/*!**********************************************************!*\
  !*** ./resources/js/views/admin/auth/CheckCodeModal.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CheckCodeModal_vue_vue_type_template_id_06ec11d0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CheckCodeModal.vue?vue&type=template&id=06ec11d0& */ "./resources/js/views/admin/auth/CheckCodeModal.vue?vue&type=template&id=06ec11d0&");
/* harmony import */ var _CheckCodeModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CheckCodeModal.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/auth/CheckCodeModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CheckCodeModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CheckCodeModal_vue_vue_type_template_id_06ec11d0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CheckCodeModal_vue_vue_type_template_id_06ec11d0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/auth/CheckCodeModal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/auth/CheckCodeModal.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/admin/auth/CheckCodeModal.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckCodeModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CheckCodeModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/auth/CheckCodeModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckCodeModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/auth/CheckCodeModal.vue?vue&type=template&id=06ec11d0&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/admin/auth/CheckCodeModal.vue?vue&type=template&id=06ec11d0& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckCodeModal_vue_vue_type_template_id_06ec11d0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CheckCodeModal.vue?vue&type=template&id=06ec11d0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/auth/CheckCodeModal.vue?vue&type=template&id=06ec11d0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckCodeModal_vue_vue_type_template_id_06ec11d0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckCodeModal_vue_vue_type_template_id_06ec11d0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);