(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/auth/NewPassword.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/auth/NewPassword.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      password: '',
      confirmation: ''
    };
  },
  created: function created() {
    var email = localStorage.getItem('email');

    if (!email) {
      this.$snotify.error('Please Follow step by step to change new password', 'Forbidden!');
      this.$router.push({
        name: 'ForgetCode'
      });
    }
  },
  methods: {
    onSubmit: function onSubmit(e) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var fd, response, self;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                fd = new FormData(_this.$refs.newPassword);
                fd.append('code', localStorage.getItem('code'));
                _context.next = 4;
                return axios.post('/api/auth/new-password', fd);

              case 4:
                response = _context.sent;

                if (response.data.status) {
                  localStorage.removeItem('code');
                  localStorage.removeItem('email');
                  self = _this;

                  _this.$router.push({
                    name: 'Login'
                  });

                  _this.$snotify.success(response.data.msg, 'Updated!');
                } else {
                  _this.$snotify.error(response.data.msg, 'Oops!');
                }

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/auth/NewPassword.vue?vue&type=template&id=56ec8a5a&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/auth/NewPassword.vue?vue&type=template&id=56ec8a5a& ***!
  \********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-md-2 col-xl-3" }),
    _vm._v(" "),
    _c("div", { staticClass: "col-md-8 col-xl-6 col-12" }, [
      _c(
        "div",
        { staticClass: "register-main" },
        [
          _c("ValidationObserver", {
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(ref) {
                  var handleSubmit = ref.handleSubmit
                  return [
                    _c(
                      "form",
                      {
                        ref: "newPassword",
                        on: {
                          submit: function($event) {
                            $event.preventDefault()
                            return handleSubmit(_vm.onSubmit)
                          }
                        }
                      },
                      [
                        _c("img", {
                          staticClass: "img-full",
                          attrs: {
                            src: _vm.url(
                              "/assets/public-assets/images/logo.png"
                            ),
                            alt: "logo"
                          }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-main" }, [
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              { staticClass: "col-md-12 text-center" },
                              [_c("h1", [_vm._v("Forgot Password")])]
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "fields" }, [
                            _c("div", { staticClass: "row" }, [
                              _c(
                                "div",
                                { staticClass: "col-md-12" },
                                [
                                  _c("ValidationProvider", {
                                    attrs: {
                                      name: "Password",
                                      rules: "required|confirmed:confirmation"
                                    },
                                    scopedSlots: _vm._u(
                                      [
                                        {
                                          key: "default",
                                          fn: function(ref) {
                                            var errors = ref.errors
                                            return [
                                              _c("i", {
                                                staticClass: "fa fa-envelope"
                                              }),
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value: _vm.password,
                                                    expression: "password"
                                                  }
                                                ],
                                                staticClass: "form-control",
                                                attrs: {
                                                  name: "password",
                                                  type: "password",
                                                  spellcheck: "true",
                                                  placeholder:
                                                    "Enter New Password"
                                                },
                                                domProps: {
                                                  value: _vm.password
                                                },
                                                on: {
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.password =
                                                      $event.target.value
                                                  }
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c("span", [
                                                _vm._v(_vm._s(errors[0]))
                                              ])
                                            ]
                                          }
                                        }
                                      ],
                                      null,
                                      true
                                    )
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "col-md-12" },
                                [
                                  _c("ValidationProvider", {
                                    attrs: {
                                      name: "confirmation",
                                      rules: "required",
                                      vid: "confirmation"
                                    },
                                    scopedSlots: _vm._u(
                                      [
                                        {
                                          key: "default",
                                          fn: function(ref) {
                                            var errors = ref.errors
                                            return [
                                              _c("i", {
                                                staticClass: "fa fa-envelope"
                                              }),
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value: _vm.confirmation,
                                                    expression: "confirmation"
                                                  }
                                                ],
                                                staticClass: "form-control",
                                                attrs: {
                                                  type: "password",
                                                  spellcheck: "true",
                                                  placeholder: "Retype Password"
                                                },
                                                domProps: {
                                                  value: _vm.confirmation
                                                },
                                                on: {
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.confirmation =
                                                      $event.target.value
                                                  }
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c("span", [
                                                _vm._v(_vm._s(errors[0]))
                                              ])
                                            ]
                                          }
                                        }
                                      ],
                                      null,
                                      true
                                    )
                                  })
                                ],
                                1
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "form-control continue-button",
                                attrs: { type: "submit" }
                              },
                              [_vm._v("Save")]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "new-user" },
                              [
                                _c(
                                  "router-link",
                                  {
                                    staticClass: "login back",
                                    attrs: { to: { name: "AdminHome" } }
                                  },
                                  [_vm._v("\n\t\t\t\t\t\t\t\tback to login")]
                                )
                              ],
                              1
                            )
                          ])
                        ])
                      ]
                    )
                  ]
                }
              }
            ])
          })
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-md-2 col-xl-3" })
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/admin/auth/NewPassword.vue":
/*!*******************************************************!*\
  !*** ./resources/js/views/admin/auth/NewPassword.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NewPassword_vue_vue_type_template_id_56ec8a5a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewPassword.vue?vue&type=template&id=56ec8a5a& */ "./resources/js/views/admin/auth/NewPassword.vue?vue&type=template&id=56ec8a5a&");
/* harmony import */ var _NewPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewPassword.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/auth/NewPassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NewPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NewPassword_vue_vue_type_template_id_56ec8a5a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NewPassword_vue_vue_type_template_id_56ec8a5a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/auth/NewPassword.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/auth/NewPassword.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/admin/auth/NewPassword.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./NewPassword.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/auth/NewPassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/auth/NewPassword.vue?vue&type=template&id=56ec8a5a&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/admin/auth/NewPassword.vue?vue&type=template&id=56ec8a5a& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewPassword_vue_vue_type_template_id_56ec8a5a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./NewPassword.vue?vue&type=template&id=56ec8a5a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/auth/NewPassword.vue?vue&type=template&id=56ec8a5a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewPassword_vue_vue_type_template_id_56ec8a5a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewPassword_vue_vue_type_template_id_56ec8a5a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);