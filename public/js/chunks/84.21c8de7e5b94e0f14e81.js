(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[84],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/auth/Login.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/user/auth/Login.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
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
var InnerPageFooter = function InnerPageFooter() {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../components/InnerPageFooter.vue */ "./resources/js/views/user/components/InnerPageFooter.vue"));
};

var FullPageHeader = function FullPageHeader() {
  return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ../components/FullPageHeader.vue */ "./resources/js/views/user/components/FullPageHeader.vue"));
};

var SendCode = function SendCode() {
  return __webpack_require__.e(/*! import() */ 86).then(__webpack_require__.bind(null, /*! ./ResetPassword/SendCode.vue */ "./resources/js/views/user/auth/ResetPassword/SendCode.vue"));
};

var VerifyCode = function VerifyCode() {
  return __webpack_require__.e(/*! import() */ 87).then(__webpack_require__.bind(null, /*! ./ResetPassword/VerifyCode */ "./resources/js/views/user/auth/ResetPassword/VerifyCode.vue"));
};

var ChangePassword = function ChangePassword() {
  return __webpack_require__.e(/*! import() */ 85).then(__webpack_require__.bind(null, /*! ./ResetPassword/ChangePassword.vue */ "./resources/js/views/user/auth/ResetPassword/ChangePassword.vue"));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      email: '',
      password: '',
      role: 'user',
      base_url: window.base_url
    };
  },
  created: function created() {
    var accesstoken = localStorage.getItem('access-token');
    var userType = localStorage.getItem('userType');
    var logoutCheck = window.localStorage.getItem('logoutItem');
    console.log(logoutCheck);

    if (accesstoken && userType == 'user') {
      this.isSession = true;
      this.$router.push({
        name: 'user.users.dashboard'
      });
    } else {
      this.isSession = false;
    }

    if (logoutCheck == 'true') {
      window.localStorage.setItem('logoutItem', false);
      this.loadOnce();
    }

    console.log(userType);
  },
  components: {
    InnerPageFooter: InnerPageFooter,
    FullPageHeader: FullPageHeader,
    SendCode: SendCode,
    VerifyCode: VerifyCode,
    ChangePassword: ChangePassword
  },
  methods: {
    Login: function Login(e) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var fd, response, data, self;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                window.localStorage.setItem('loadedFirstTime', true);
                fd = new FormData(_this.$refs.LoginForm);
                fd.append('role', _this.role);
                _context.next = 5;
                return axios.post('/api/auth/login', fd);

              case 5:
                response = _context.sent;

                if (response.data.data) {
                  data = response.data.data;

                  _this.$snotify.success(response.data.message);

                  localStorage.setItem('isLoggedIn', '1');
                  localStorage.setItem('userType', 'user');
                  localStorage.setItem('access-token', data.token);
                  localStorage.setItem('name', data.name);
                  localStorage.setItem('image', data.image);
                  localStorage.setItem('userId', data.id);
                  self = _this;
                  window.axios.defaults.headers.common = {
                    'Authorization': "Bearer ".concat(response.data.data.token)
                  };
                  setTimeout(function () {
                    self.$router.push({
                      name: 'user.users.view'
                    });
                  }, 1000);
                } else {
                  _this.$snotify.error(response.data.message);
                }

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    loadOnce: function loadOnce() {
      console.log("okayyyyyy");
      location.reload();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/auth/Login.vue?vue&type=template&id=6559a592&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/user/auth/Login.vue?vue&type=template&id=6559a592& ***!
  \*************************************************************************************************************************************************************************************************************/
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
    [
      _c("full-page-header"),
      _vm._v(" "),
      _c("section", { staticClass: "login-section" }, [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col-xl-6 col-md-12" },
              [
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
                              ref: "LoginForm",
                              staticClass: "login-form",
                              on: {
                                submit: function ($event) {
                                  $event.preventDefault()
                                  return handleSubmit(_vm.Login)
                                },
                              },
                            },
                            [
                              _c("div", { staticClass: "form-row mb-3" }, [
                                _c("div", { staticClass: "col-12" }, [
                                  _c("h4", [_vm._v("Login to your account")]),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "form-group mb-3" },
                                [
                                  _c("ValidationProvider", {
                                    attrs: {
                                      name: "Email Address",
                                      rules: "required|email",
                                    },
                                    scopedSlots: _vm._u(
                                      [
                                        {
                                          key: "default",
                                          fn: function (ref) {
                                            var errors = ref.errors
                                            return [
                                              _c(
                                                "label",
                                                {
                                                  attrs: { for: "email-login" },
                                                },
                                                [_vm._v("Email address")]
                                              ),
                                              _vm._v(" "),
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value: _vm.email,
                                                    expression: "email",
                                                  },
                                                ],
                                                staticClass:
                                                  "form-control prof-input-login",
                                                attrs: {
                                                  type: "email",
                                                  id: "email-login",
                                                  "aria-describedby":
                                                    "emailHelp",
                                                  placeholder:
                                                    "Enter Email Address",
                                                  name: "email",
                                                },
                                                domProps: { value: _vm.email },
                                                on: {
                                                  input: function ($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.email =
                                                      $event.target.value
                                                  },
                                                },
                                              }),
                                              _vm._v(" "),
                                              _c(
                                                "span",
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
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "form-group mb-3 position-relative",
                                },
                                [
                                  _c("ValidationProvider", {
                                    attrs: {
                                      rules: "required",
                                      name: "password",
                                    },
                                    scopedSlots: _vm._u(
                                      [
                                        {
                                          key: "default",
                                          fn: function (ref) {
                                            var errors = ref.errors
                                            return [
                                              _c(
                                                "label",
                                                {
                                                  attrs: { for: "pass-login" },
                                                },
                                                [_vm._v("Password")]
                                              ),
                                              _vm._v(" "),
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value: _vm.password,
                                                    expression: "password",
                                                  },
                                                ],
                                                staticClass:
                                                  "form-control prof-input-login",
                                                attrs: {
                                                  type: "password",
                                                  id: "pass-login",
                                                  placeholder: "Enter Password",
                                                  name: "password",
                                                },
                                                domProps: {
                                                  value: _vm.password,
                                                },
                                                on: {
                                                  input: function ($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.password =
                                                      $event.target.value
                                                  },
                                                },
                                              }),
                                              _vm._v(" "),
                                              _c(
                                                "button",
                                                {
                                                  staticClass:
                                                    "eye-pass fa fa-eye",
                                                  attrs: { type: "button" },
                                                  on: {
                                                    click: function ($event) {
                                                      return _vm.togglePasswordType(
                                                        1
                                                      )
                                                    },
                                                  },
                                                },
                                                [
                                                  _c("i", {
                                                    attrs: {
                                                      "aria-hidden": "true",
                                                    },
                                                  }),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "span",
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
                              _vm._v(" "),
                              _c("div", { staticClass: "form-row mb-3" }, [
                                _c(
                                  "div",
                                  { staticClass: "col-12 text-right" },
                                  [
                                    _c(
                                      "a",
                                      {
                                        staticClass: "small-link",
                                        attrs: {
                                          href: "",
                                          "data-toggle": "modal",
                                          "data-target": "#password-recover",
                                        },
                                      },
                                      [
                                        _vm._v(
                                          "forgot\n                                        password?"
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "form-row" }, [
                                _c(
                                  "div",
                                  { staticClass: "col-12 text-center" },
                                  [
                                    _c(
                                      "button",
                                      {
                                        staticClass: "btn-profBlue",
                                        attrs: { type: "submit" },
                                      },
                                      [_vm._v("Login")]
                                    ),
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "col-12 text-center" },
                                  [
                                    _c(
                                      "a",
                                      {
                                        staticClass: "small-link",
                                        attrs: { href: "" },
                                      },
                                      [
                                        _c("i", {
                                          staticClass: "fa fa-arrow-left mr-2",
                                          attrs: { "aria-hidden": "true" },
                                        }),
                                        _vm._v(" back to home page"),
                                      ]
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
            _vm._v(" "),
            _c("div", { staticClass: "col-xl-6 d-xl-block d-none" }, [
              _c("div", { staticClass: "wrap-right" }, [
                _c("img", {
                  staticClass: "dots gray-dots",
                  attrs: {
                    src: _vm.base_url + "/assets/user/images/gray-dots.png",
                    alt: "",
                  },
                }),
                _vm._v(" "),
                _c("img", {
                  staticClass: "dots black-dots",
                  attrs: {
                    src: _vm.base_url + "/assets/user/images/black-dots.png",
                    alt: "",
                  },
                }),
                _vm._v(" "),
                _c("img", {
                  staticClass: "lady",
                  attrs: {
                    src:
                      _vm.base_url +
                      "/assets/user/images/Profession-net-03_10.png",
                    alt: "",
                    srcset: "",
                  },
                }),
              ]),
            ]),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("inner-page-footer"),
      _vm._v(" "),
      _c("SendCode"),
      _vm._v(" "),
      _c("VerifyCode"),
      _vm._v(" "),
      _c("ChangePassword"),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/user/auth/Login.vue":
/*!************************************************!*\
  !*** ./resources/js/views/user/auth/Login.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login_vue_vue_type_template_id_6559a592___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=6559a592& */ "./resources/js/views/user/auth/Login.vue?vue&type=template&id=6559a592&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "./resources/js/views/user/auth/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_6559a592___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Login_vue_vue_type_template_id_6559a592___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/user/auth/Login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/user/auth/Login.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/user/auth/Login.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/auth/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/user/auth/Login.vue?vue&type=template&id=6559a592&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/user/auth/Login.vue?vue&type=template&id=6559a592& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_6559a592___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=template&id=6559a592& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/auth/Login.vue?vue&type=template&id=6559a592&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_6559a592___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_6559a592___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);