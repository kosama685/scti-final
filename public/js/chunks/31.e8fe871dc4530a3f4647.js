(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/auth/Register.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/user/auth/Register.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


var _data$created$watch$c;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

var RegisterHeader = function RegisterHeader() {
  return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../components/RegisterHeader.vue */ "./resources/js/views/user/components/RegisterHeader.vue"));
};

/* harmony default export */ __webpack_exports__["default"] = (_data$created$watch$c = {
  data: function data() {
    return {
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      confirmation: '',
      address: '',
      dob: '',
      about_yourself: '',
      country: '',
      city: '',
      state: '',
      zip_code: '',
      card_holder_name: '',
      cvv: '',
      expiry_date: '',
      card_number: '',
      role: 'user',
      user_type: 0,
      packages: {},
      freeTrialObject: 0,
      base_url: window.base_url
    };
  },
  created: function created() {},
  watch: {
    'card_number': function card_number(val, oldVal) {
      val = val.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1-').trim('-').slice(0, 19);
      this.card_number = val;
      /*if (val.length == 21) {
          this.form.card_number = oldVal;
      } else {
          // adding spaces
      }*/
    }
  }
}, _defineProperty(_data$created$watch$c, "created", function created() {
  this.getPackages();
}), _defineProperty(_data$created$watch$c, "components", {
  InnerPageFooter: InnerPageFooter,
  RegisterHeader: RegisterHeader
}), _defineProperty(_data$created$watch$c, "methods", {
  freeTrial: function freeTrial() {
    this.freeTrialObject = 1;
  },
  updatedFreeTrial: function updatedFreeTrial() {
    this.freeTrialObject = 0;
  },
  Register: function Register() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var isValid, fd, response, self;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.$refs.observer.validate();

            case 2:
              isValid = _context.sent;
              console.log(isValid); //const  isValid = false;

              if (isValid) {
                _context.next = 8;
                break;
              }

              _this.$snotify.error("Field Occur please go back to check", 'error');

              _context.next = 16;
              break;

            case 8:
              fd = new FormData(_this.$refs.registerForm);
              fd.append('role', _this.role);
              fd.append('freeTrial', _this.freeTrialObject);
              _context.next = 13;
              return axios.post('/api/auth/register_web', fd);

            case 13:
              response = _context.sent;
              console.log(response);

              if (response.data.data) {
                _this.$snotify.success(response.data.message);

                self = _this;
                setTimeout(function () {
                  self.$router.push({
                    name: 'user.auth.login'
                  });
                }, 1000);
              } else {
                _this.$snotify.error(response.data.message);
              }

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  getPackages: function getPackages() {
    var _this2 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return axios.get('/api/user/package?user_type=' + _this2.user_type);

            case 2:
              response = _context2.sent;
              console.log(response);
              _this2.packages = response.data.data;

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  }
}), _data$created$watch$c);

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/auth/Register.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/user/auth/Register.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.mx-input{\n    border: 2px solid #ebe6e6;\n    margin-bottom: 10px;\n    width: 100%;\n    box-sizing: border-box;\n    line-height: 25px;\n    font-size: 15px;\n    color: #c9c8c8;\n    height: 50px;\n    border-radius: 5px 25px 0px 5px;\n    box-shadow: 0px 0px 8px -2px rgb(0 0 0 / 15%);\n    font-family: 'Jost';\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/auth/Register.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/user/auth/Register.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/auth/Register.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/auth/Register.vue?vue&type=template&id=bea86776&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/user/auth/Register.vue?vue&type=template&id=bea86776& ***!
  \****************************************************************************************************************************************************************************************************************/
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
      _c("section", { staticClass: "register-section" }, [
        _c("div", { staticClass: "container " }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-12" }, [
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-body" }, [
                  _vm._m(0),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      { staticClass: "col-12" },
                      [
                        _c("ValidationObserver", {
                          ref: "observer",
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(ref) {
                                var invalid = ref.invalid
                                return [
                                  _c(
                                    "form",
                                    {
                                      ref: "registerForm",
                                      attrs: { id: "msform" },
                                      on: {
                                        submit: function($event) {
                                          $event.preventDefault()
                                          return _vm.Register()
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "ul",
                                        { attrs: { id: "progressbar" } },
                                        [
                                          _c("li", { staticClass: "active" }, [
                                            _vm._v("Step")
                                          ]),
                                          _vm._v(" "),
                                          _c("li", [_vm._v("Step")])
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("fieldset", [
                                        _c("div", { staticClass: "row" }, [
                                          _c(
                                            "div",
                                            {
                                              staticClass: "col-12 text-center"
                                            },
                                            [
                                              _c(
                                                "p",
                                                { staticClass: "reg-title" },
                                                [_vm._v("Personal Information")]
                                              )
                                            ]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("div", { staticClass: "row" }, [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "col-xl-4 col-lg-4 col-12"
                                            },
                                            [
                                              _c(
                                                "div",
                                                { staticClass: "form-group" },
                                                [
                                                  _c(
                                                    "label",
                                                    { attrs: { for: "fName" } },
                                                    [_vm._v("First Name*")]
                                                  ),
                                                  _vm._v(" "),
                                                  _c("ValidationProvider", {
                                                    attrs: {
                                                      name: "First Name",
                                                      rules: "required"
                                                    },
                                                    scopedSlots: _vm._u(
                                                      [
                                                        {
                                                          key: "default",
                                                          fn: function(ref) {
                                                            var errors =
                                                              ref.errors
                                                            return [
                                                              _c("input", {
                                                                directives: [
                                                                  {
                                                                    name:
                                                                      "model",
                                                                    rawName:
                                                                      "v-model",
                                                                    value:
                                                                      _vm.first_name,
                                                                    expression:
                                                                      "first_name"
                                                                  }
                                                                ],
                                                                staticClass:
                                                                  "form-control reg-input",
                                                                attrs: {
                                                                  type: "text",
                                                                  id: "fName",
                                                                  placeholder:
                                                                    "Enter First Name",
                                                                  name:
                                                                    "first_name"
                                                                },
                                                                domProps: {
                                                                  value:
                                                                    _vm.first_name
                                                                },
                                                                on: {
                                                                  input: function(
                                                                    $event
                                                                  ) {
                                                                    if (
                                                                      $event
                                                                        .target
                                                                        .composing
                                                                    ) {
                                                                      return
                                                                    }
                                                                    _vm.first_name =
                                                                      $event.target.value
                                                                  }
                                                                }
                                                              }),
                                                              _vm._v(" "),
                                                              _c(
                                                                "span",
                                                                {
                                                                  staticClass:
                                                                    "text-danger"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      errors[0]
                                                                    )
                                                                  )
                                                                ]
                                                              )
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
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "col-xl-4 col-lg-4 col-12"
                                            },
                                            [
                                              _c(
                                                "div",
                                                { staticClass: "form-group" },
                                                [
                                                  _c(
                                                    "label",
                                                    { attrs: { for: "lName" } },
                                                    [_vm._v("Last Name*")]
                                                  ),
                                                  _vm._v(" "),
                                                  _c("ValidationProvider", {
                                                    attrs: {
                                                      name: "Last Name",
                                                      rules: "required"
                                                    },
                                                    scopedSlots: _vm._u(
                                                      [
                                                        {
                                                          key: "default",
                                                          fn: function(ref) {
                                                            var errors =
                                                              ref.errors
                                                            return [
                                                              _c("input", {
                                                                directives: [
                                                                  {
                                                                    name:
                                                                      "model",
                                                                    rawName:
                                                                      "v-model",
                                                                    value:
                                                                      _vm.last_name,
                                                                    expression:
                                                                      "last_name"
                                                                  }
                                                                ],
                                                                staticClass:
                                                                  "form-control reg-input",
                                                                attrs: {
                                                                  type: "text",
                                                                  id: "lName",
                                                                  placeholder:
                                                                    "Enter Last Name",
                                                                  name:
                                                                    "last_name"
                                                                },
                                                                domProps: {
                                                                  value:
                                                                    _vm.last_name
                                                                },
                                                                on: {
                                                                  input: function(
                                                                    $event
                                                                  ) {
                                                                    if (
                                                                      $event
                                                                        .target
                                                                        .composing
                                                                    ) {
                                                                      return
                                                                    }
                                                                    _vm.last_name =
                                                                      $event.target.value
                                                                  }
                                                                }
                                                              }),
                                                              _vm._v(" "),
                                                              _c(
                                                                "span",
                                                                {
                                                                  staticClass:
                                                                    "text-danger"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      errors[0]
                                                                    )
                                                                  )
                                                                ]
                                                              )
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
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass: "col-xl-4 col-lg-12"
                                            },
                                            [
                                              _c(
                                                "div",
                                                { staticClass: "form-group" },
                                                [
                                                  _c(
                                                    "label",
                                                    { attrs: { for: "email" } },
                                                    [_vm._v("Email Address")]
                                                  ),
                                                  _vm._v(" "),
                                                  _c("ValidationProvider", {
                                                    attrs: {
                                                      name: "email",
                                                      rules: "required|email"
                                                    },
                                                    scopedSlots: _vm._u(
                                                      [
                                                        {
                                                          key: "default",
                                                          fn: function(ref) {
                                                            var errors =
                                                              ref.errors
                                                            return [
                                                              _c("input", {
                                                                directives: [
                                                                  {
                                                                    name:
                                                                      "model",
                                                                    rawName:
                                                                      "v-model",
                                                                    value:
                                                                      _vm.email,
                                                                    expression:
                                                                      "email"
                                                                  }
                                                                ],
                                                                staticClass:
                                                                  "form-control reg-input",
                                                                attrs: {
                                                                  type: "email",
                                                                  id: "email",
                                                                  placeholder:
                                                                    "Enter email address",
                                                                  name: "email"
                                                                },
                                                                domProps: {
                                                                  value:
                                                                    _vm.email
                                                                },
                                                                on: {
                                                                  input: function(
                                                                    $event
                                                                  ) {
                                                                    if (
                                                                      $event
                                                                        .target
                                                                        .composing
                                                                    ) {
                                                                      return
                                                                    }
                                                                    _vm.email =
                                                                      $event.target.value
                                                                  }
                                                                }
                                                              }),
                                                              _vm._v(" "),
                                                              _c(
                                                                "span",
                                                                {
                                                                  staticClass:
                                                                    "text-danger"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      errors[0]
                                                                    )
                                                                  )
                                                                ]
                                                              )
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
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "col-xl-4 col-lg-4 col-12"
                                            },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "form-group pass-wrap"
                                                },
                                                [
                                                  _c(
                                                    "label",
                                                    { attrs: { for: "pass" } },
                                                    [_vm._v("Password*")]
                                                  ),
                                                  _vm._v(" "),
                                                  _c("ValidationProvider", {
                                                    attrs: {
                                                      name: "password",
                                                      rules:
                                                        "required|min:6|confirmed:confirmation"
                                                    },
                                                    scopedSlots: _vm._u(
                                                      [
                                                        {
                                                          key: "default",
                                                          fn: function(ref) {
                                                            var errors =
                                                              ref.errors
                                                            return [
                                                              _c("input", {
                                                                directives: [
                                                                  {
                                                                    name:
                                                                      "model",
                                                                    rawName:
                                                                      "v-model",
                                                                    value:
                                                                      _vm.password,
                                                                    expression:
                                                                      "password"
                                                                  }
                                                                ],
                                                                staticClass:
                                                                  "form-control reg-input",
                                                                attrs: {
                                                                  type:
                                                                    "password",
                                                                  id: "pass",
                                                                  placeholder:
                                                                    "********",
                                                                  name:
                                                                    "password"
                                                                },
                                                                domProps: {
                                                                  value:
                                                                    _vm.password
                                                                },
                                                                on: {
                                                                  input: function(
                                                                    $event
                                                                  ) {
                                                                    if (
                                                                      $event
                                                                        .target
                                                                        .composing
                                                                    ) {
                                                                      return
                                                                    }
                                                                    _vm.password =
                                                                      $event.target.value
                                                                  }
                                                                }
                                                              }),
                                                              _vm._v(" "),
                                                              _c(
                                                                "button",
                                                                {
                                                                  staticClass:
                                                                    "eye-pass fa fa-eye",
                                                                  attrs: {
                                                                    type:
                                                                      "button"
                                                                  },
                                                                  on: {
                                                                    click: function(
                                                                      $event
                                                                    ) {
                                                                      return _vm.togglePasswordType(
                                                                        8
                                                                      )
                                                                    }
                                                                  }
                                                                },
                                                                [
                                                                  _c("i", {
                                                                    attrs: {
                                                                      "aria-hidden":
                                                                        "true"
                                                                    }
                                                                  })
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "span",
                                                                {
                                                                  staticClass:
                                                                    "text-danger"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      errors[0]
                                                                    )
                                                                  )
                                                                ]
                                                              )
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
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "col-xl-4 col-lg-4 col-12"
                                            },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "form-group pass-wrap"
                                                },
                                                [
                                                  _c(
                                                    "label",
                                                    { attrs: { for: "cpass" } },
                                                    [
                                                      _vm._v(
                                                        "Confirm Password*"
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c("ValidationProvider", {
                                                    attrs: {
                                                      name: "confirmation",
                                                      rules: "required|min:6",
                                                      vid: "confirmation"
                                                    },
                                                    scopedSlots: _vm._u(
                                                      [
                                                        {
                                                          key: "default",
                                                          fn: function(ref) {
                                                            var errors =
                                                              ref.errors
                                                            return [
                                                              _c("input", {
                                                                directives: [
                                                                  {
                                                                    name:
                                                                      "model",
                                                                    rawName:
                                                                      "v-model",
                                                                    value:
                                                                      _vm.confirmation,
                                                                    expression:
                                                                      "confirmation"
                                                                  }
                                                                ],
                                                                staticClass:
                                                                  "form-control reg-input",
                                                                attrs: {
                                                                  type:
                                                                    "password",
                                                                  id: "cpass",
                                                                  placeholder:
                                                                    "********",
                                                                  name:
                                                                    "confirmation"
                                                                },
                                                                domProps: {
                                                                  value:
                                                                    _vm.confirmation
                                                                },
                                                                on: {
                                                                  input: function(
                                                                    $event
                                                                  ) {
                                                                    if (
                                                                      $event
                                                                        .target
                                                                        .composing
                                                                    ) {
                                                                      return
                                                                    }
                                                                    _vm.confirmation =
                                                                      $event.target.value
                                                                  }
                                                                }
                                                              }),
                                                              _vm._v(" "),
                                                              _c(
                                                                "button",
                                                                {
                                                                  staticClass:
                                                                    "eye-pass fa fa-eye",
                                                                  attrs: {
                                                                    type:
                                                                      "button"
                                                                  },
                                                                  on: {
                                                                    click: function(
                                                                      $event
                                                                    ) {
                                                                      return _vm.togglePasswordType(
                                                                        8
                                                                      )
                                                                    }
                                                                  }
                                                                },
                                                                [
                                                                  _c("i", {
                                                                    attrs: {
                                                                      "aria-hidden":
                                                                        "true"
                                                                    }
                                                                  })
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "span",
                                                                {
                                                                  staticClass:
                                                                    "text-danger"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      errors[0]
                                                                    )
                                                                  )
                                                                ]
                                                              )
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
                                            ]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "span",
                                          {
                                            staticClass: "next action-button",
                                            attrs: { name: "next" }
                                          },
                                          [_vm._v("Continue")]
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("fieldset", [
                                        _c("div", { staticClass: "row" }, [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "col-xl-6 col-lg-6 col-12"
                                            },
                                            [
                                              _c(
                                                "div",
                                                { staticClass: "form-group" },
                                                [
                                                  _c(
                                                    "label",
                                                    {
                                                      attrs: { for: "address" }
                                                    },
                                                    [_vm._v("Address*")]
                                                  ),
                                                  _vm._v(" "),
                                                  _c("ValidationProvider", {
                                                    attrs: {
                                                      name: "address",
                                                      rules: "required"
                                                    },
                                                    scopedSlots: _vm._u(
                                                      [
                                                        {
                                                          key: "default",
                                                          fn: function(ref) {
                                                            var errors =
                                                              ref.errors
                                                            return [
                                                              _c("input", {
                                                                directives: [
                                                                  {
                                                                    name:
                                                                      "model",
                                                                    rawName:
                                                                      "v-model",
                                                                    value:
                                                                      _vm.address,
                                                                    expression:
                                                                      "address"
                                                                  }
                                                                ],
                                                                staticClass:
                                                                  "form-control reg-input",
                                                                attrs: {
                                                                  type: "text",
                                                                  id: "address",
                                                                  placeholder:
                                                                    "Enter Address",
                                                                  name:
                                                                    "address"
                                                                },
                                                                domProps: {
                                                                  value:
                                                                    _vm.address
                                                                },
                                                                on: {
                                                                  input: function(
                                                                    $event
                                                                  ) {
                                                                    if (
                                                                      $event
                                                                        .target
                                                                        .composing
                                                                    ) {
                                                                      return
                                                                    }
                                                                    _vm.address =
                                                                      $event.target.value
                                                                  }
                                                                }
                                                              }),
                                                              _vm._v(" "),
                                                              _c(
                                                                "span",
                                                                {
                                                                  staticClass:
                                                                    "text-danger"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      errors[0]
                                                                    )
                                                                  )
                                                                ]
                                                              )
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
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "col-xl-6 col-lg-6 col-12"
                                            },
                                            [
                                              _c(
                                                "div",
                                                { staticClass: "form-group" },
                                                [
                                                  _c(
                                                    "label",
                                                    {
                                                      attrs: { for: "country" }
                                                    },
                                                    [_vm._v("Country*")]
                                                  ),
                                                  _vm._v(" "),
                                                  _c("ValidationProvider", {
                                                    attrs: {
                                                      name: "country",
                                                      rules: "required"
                                                    },
                                                    scopedSlots: _vm._u(
                                                      [
                                                        {
                                                          key: "default",
                                                          fn: function(ref) {
                                                            var errors =
                                                              ref.errors
                                                            return [
                                                              _c(
                                                                "select",
                                                                {
                                                                  directives: [
                                                                    {
                                                                      name:
                                                                        "model",
                                                                      rawName:
                                                                        "v-model",
                                                                      value:
                                                                        _vm.country,
                                                                      expression:
                                                                        "country"
                                                                    }
                                                                  ],
                                                                  staticClass:
                                                                    "form-control reg-input",
                                                                  attrs: {
                                                                    id:
                                                                      "country",
                                                                    name:
                                                                      "country"
                                                                  },
                                                                  on: {
                                                                    change: function(
                                                                      $event
                                                                    ) {
                                                                      var $$selectedVal = Array.prototype.filter
                                                                        .call(
                                                                          $event
                                                                            .target
                                                                            .options,
                                                                          function(
                                                                            o
                                                                          ) {
                                                                            return o.selected
                                                                          }
                                                                        )
                                                                        .map(
                                                                          function(
                                                                            o
                                                                          ) {
                                                                            var val =
                                                                              "_value" in
                                                                              o
                                                                                ? o._value
                                                                                : o.value
                                                                            return val
                                                                          }
                                                                        )
                                                                      _vm.country = $event
                                                                        .target
                                                                        .multiple
                                                                        ? $$selectedVal
                                                                        : $$selectedVal[0]
                                                                    }
                                                                  }
                                                                },
                                                                [
                                                                  _c(
                                                                    "option",
                                                                    {
                                                                      attrs: {
                                                                        selected:
                                                                          "",
                                                                        disabled:
                                                                          ""
                                                                      }
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "Enter Country"
                                                                      )
                                                                    ]
                                                                  ),
                                                                  _vm._v(" "),
                                                                  _c(
                                                                    "option",
                                                                    {
                                                                      attrs: {
                                                                        value:
                                                                          "usa"
                                                                      }
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "USA"
                                                                      )
                                                                    ]
                                                                  ),
                                                                  _vm._v(" "),
                                                                  _c(
                                                                    "option",
                                                                    {
                                                                      attrs: {
                                                                        value:
                                                                          "uk"
                                                                      }
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "UK"
                                                                      )
                                                                    ]
                                                                  ),
                                                                  _vm._v(" "),
                                                                  _c(
                                                                    "option",
                                                                    {
                                                                      attrs: {
                                                                        value:
                                                                          "new zealand"
                                                                      }
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "New Zealand"
                                                                      )
                                                                    ]
                                                                  ),
                                                                  _vm._v(" "),
                                                                  _c(
                                                                    "option",
                                                                    {
                                                                      attrs: {
                                                                        value:
                                                                          "ireland"
                                                                      }
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "Ireland"
                                                                      )
                                                                    ]
                                                                  ),
                                                                  _vm._v(" "),
                                                                  _c("option", [
                                                                    _vm._v(
                                                                      "Australia"
                                                                    )
                                                                  ])
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "span",
                                                                {
                                                                  staticClass:
                                                                    "text-danger"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      errors[0]
                                                                    )
                                                                  )
                                                                ]
                                                              )
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
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "col-xl-4 col-lg-6 col-12"
                                            },
                                            [
                                              _c(
                                                "div",
                                                { staticClass: "form-group" },
                                                [
                                                  _c(
                                                    "label",
                                                    { attrs: { for: "city" } },
                                                    [_vm._v("City*")]
                                                  ),
                                                  _vm._v(" "),
                                                  _c("ValidationProvider", {
                                                    attrs: {
                                                      name: "city",
                                                      rules: "required"
                                                    },
                                                    scopedSlots: _vm._u(
                                                      [
                                                        {
                                                          key: "default",
                                                          fn: function(ref) {
                                                            var errors =
                                                              ref.errors
                                                            return [
                                                              _c("input", {
                                                                directives: [
                                                                  {
                                                                    name:
                                                                      "model",
                                                                    rawName:
                                                                      "v-model",
                                                                    value:
                                                                      _vm.city,
                                                                    expression:
                                                                      "city"
                                                                  }
                                                                ],
                                                                staticClass:
                                                                  "form-control reg-input",
                                                                attrs: {
                                                                  type: "text",
                                                                  id: "city",
                                                                  placeholder:
                                                                    "Enter city Name",
                                                                  name: "city"
                                                                },
                                                                domProps: {
                                                                  value:
                                                                    _vm.city
                                                                },
                                                                on: {
                                                                  input: function(
                                                                    $event
                                                                  ) {
                                                                    if (
                                                                      $event
                                                                        .target
                                                                        .composing
                                                                    ) {
                                                                      return
                                                                    }
                                                                    _vm.city =
                                                                      $event.target.value
                                                                  }
                                                                }
                                                              }),
                                                              _vm._v(" "),
                                                              _c(
                                                                "span",
                                                                {
                                                                  staticClass:
                                                                    "text-danger"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      errors[0]
                                                                    )
                                                                  )
                                                                ]
                                                              )
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
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "col-xl-4 col-lg-12 col-12"
                                            },
                                            [
                                              _c(
                                                "div",
                                                { staticClass: "form-group" },
                                                [
                                                  _c(
                                                    "label",
                                                    {
                                                      attrs: { for: "zipCode" }
                                                    },
                                                    [_vm._v("EIR Code*")]
                                                  ),
                                                  _vm._v(" "),
                                                  _c("ValidationProvider", {
                                                    attrs: {
                                                      name: "post code",
                                                      rules: "required"
                                                    },
                                                    scopedSlots: _vm._u(
                                                      [
                                                        {
                                                          key: "default",
                                                          fn: function(ref) {
                                                            var errors =
                                                              ref.errors
                                                            return [
                                                              _c("input", {
                                                                directives: [
                                                                  {
                                                                    name:
                                                                      "model",
                                                                    rawName:
                                                                      "v-model",
                                                                    value:
                                                                      _vm.zip_code,
                                                                    expression:
                                                                      "zip_code"
                                                                  }
                                                                ],
                                                                staticClass:
                                                                  "form-control reg-input",
                                                                attrs: {
                                                                  type: "text",
                                                                  id: "zipCode",
                                                                  placeholder:
                                                                    "Enter EIR code",
                                                                  name:
                                                                    "zip_code"
                                                                },
                                                                domProps: {
                                                                  value:
                                                                    _vm.zip_code
                                                                },
                                                                on: {
                                                                  input: function(
                                                                    $event
                                                                  ) {
                                                                    if (
                                                                      $event
                                                                        .target
                                                                        .composing
                                                                    ) {
                                                                      return
                                                                    }
                                                                    _vm.zip_code =
                                                                      $event.target.value
                                                                  }
                                                                }
                                                              }),
                                                              _vm._v(" "),
                                                              _c(
                                                                "span",
                                                                {
                                                                  staticClass:
                                                                    "text-danger"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      errors[0]
                                                                    )
                                                                  )
                                                                ]
                                                              )
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
                                            ]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("input", {
                                          staticClass: "previous action-button",
                                          attrs: {
                                            type: "button",
                                            name: "previous",
                                            value: "Previous"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "button",
                                          {
                                            staticClass: " action-button",
                                            attrs: { type: "submit" }
                                          },
                                          [_vm._v("Sign Up")]
                                        )
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
      _c("div", { staticClass: "col-12 text-center" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/user/auth/Register.vue":
/*!***************************************************!*\
  !*** ./resources/js/views/user/auth/Register.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Register_vue_vue_type_template_id_bea86776___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=bea86776& */ "./resources/js/views/user/auth/Register.vue?vue&type=template&id=bea86776&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/views/user/auth/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Register_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Register.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/user/auth/Register.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_bea86776___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Register_vue_vue_type_template_id_bea86776___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/user/auth/Register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/user/auth/Register.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/user/auth/Register.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/auth/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/user/auth/Register.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/user/auth/Register.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/auth/Register.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/user/auth/Register.vue?vue&type=template&id=bea86776&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/user/auth/Register.vue?vue&type=template&id=bea86776& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_bea86776___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=template&id=bea86776& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/auth/Register.vue?vue&type=template&id=bea86776&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_bea86776___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_bea86776___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);