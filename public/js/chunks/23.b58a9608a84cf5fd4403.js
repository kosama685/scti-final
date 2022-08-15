(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/businessOwner/auth/register/register.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/businessOwner/auth/register/register.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      company_name: '',
      confirmation: '',
      address: '',
      country: '',
      city: '',
      state: '',
      zip_code: '',
      card_holder_name: '',
      cvv: '',
      expiry_date: '',
      card_number: '',
      user_type: 1,
      packages: {},
      freeTrialObject: 0,
      role: 'businessOwner',
      base_url: window.base_url,
      package_id: ''
    };
  },
  created: function created() {
    this.getPackages();
  },
  watch: {
    'card_number': function card_number(val, oldVal) {
      val = val.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1-').trim('-').slice(0, 19);
      this.card_number = val;
      /*if (val.length == 21) {
          this.form.card_number = oldVal;
      } else {
          // adding spaces
      }*/
    },
    'expiry_date': function expiry_date(val, oldVal) {
      val = val.replace(/[^\dA-Z]/g, '').replace(/(.{2})/g, '$1/').trim('/').slice(0, 5);
      this.expiry_date = val;
      /*if (val.length == 21) {
          this.form.card_number = oldVal;
      } else {
          // adding spaces
      }*/
    }
  },
  methods: {
    freeTrial: function freeTrial() {
      this.freeTrialObject = 1;
    },
    updatedFreeTrial: function updatedFreeTrial() {
      this.freeTrialObject = 0;
    },
    atBackPress: function atBackPress() {
      this.card_number = '';
    },
    getPackages: function getPackages() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.get('/api/user/package?user_type=' + _this.user_type);

              case 2:
                response = _context.sent;
                console.log(response);
                _this.packages = response.data.data;

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    Register: function Register() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var isValid, fd, response, self;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this2.$refs.observer.validate();

              case 2:
                isValid = _context2.sent;
                console.log(isValid); //const  isValid = false;

                if (!(!isValid && _this2.freeTrialObject)) {
                  _context2.next = 8;
                  break;
                }

                _this2.$snotify.error("Field Occur please go back to check", 'error');

                _context2.next = 17;
                break;

              case 8:
                fd = new FormData(_this2.$refs.registerForm);
                fd.append('role', _this2.role);
                fd.append('freeTrial', _this2.freeTrialObject);
                fd.append('package_id', _this2.package_id);
                _context2.next = 14;
                return axios.post('/api/auth/register', fd);

              case 14:
                response = _context2.sent;
                console.log(response);

                if (response.data.data) {
                  _this2.$snotify.success(response.data.message);

                  self = _this2;
                  setTimeout(function () {
                    self.$router.push({
                      name: 'businessOwner.auth.login'
                    });
                  }, 1000);
                } else {
                  _this2.$snotify.error(response.data.message);
                }

              case 17:
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/businessOwner/auth/register/register.vue?vue&type=template&id=556f2823&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/businessOwner/auth/register/register.vue?vue&type=template&id=556f2823& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
  return _c("section", { staticClass: "register-section" }, [
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
                          fn: function (ref) {
                            var invalid = ref.invalid
                            return [
                              _c(
                                "form",
                                {
                                  ref: "registerForm",
                                  attrs: { id: "msform" },
                                  on: {
                                    submit: function ($event) {
                                      $event.preventDefault()
                                      return _vm.Register()
                                    },
                                  },
                                },
                                [
                                  _c("ul", { attrs: { id: "progressbar" } }, [
                                    _c("li", { staticClass: "active" }, [
                                      _vm._v("Step"),
                                    ]),
                                    _vm._v(" "),
                                    _c("li", [_vm._v("Step")]),
                                    _vm._v(" "),
                                    _c("li", [_vm._v("Step")]),
                                    _vm._v(" "),
                                    _c("li", [_vm._v("Step")]),
                                  ]),
                                  _vm._v(" "),
                                  _c("fieldset", [
                                    _c("div", { staticClass: "row" }, [
                                      _c(
                                        "div",
                                        { staticClass: "col-12 text-center" },
                                        [
                                          _c(
                                            "p",
                                            { staticClass: "reg-title" },
                                            [_vm._v("Personal Information")]
                                          ),
                                        ]
                                      ),
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "row" }, [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "col-xl-6 col-lg-6 col-12",
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
                                                                rawName:
                                                                  "v-model",
                                                                value:
                                                                  _vm.first_name,
                                                                expression:
                                                                  "first_name",
                                                              },
                                                            ],
                                                            staticClass:
                                                              "form-control reg-input",
                                                            attrs: {
                                                              type: "text",
                                                              id: "fName",
                                                              placeholder:
                                                                "Enter First Name",
                                                              name: "first_name",
                                                            },
                                                            domProps: {
                                                              value:
                                                                _vm.first_name,
                                                            },
                                                            on: {
                                                              input: function (
                                                                $event
                                                              ) {
                                                                if (
                                                                  $event.target
                                                                    .composing
                                                                ) {
                                                                  return
                                                                }
                                                                _vm.first_name =
                                                                  $event.target.value
                                                              },
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
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "col-xl-6 col-lg-6 col-12",
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
                                                                rawName:
                                                                  "v-model",
                                                                value:
                                                                  _vm.last_name,
                                                                expression:
                                                                  "last_name",
                                                              },
                                                            ],
                                                            staticClass:
                                                              "form-control reg-input",
                                                            attrs: {
                                                              type: "text",
                                                              id: "lName",
                                                              placeholder:
                                                                "Enter Last Name",
                                                              name: "last_name",
                                                            },
                                                            domProps: {
                                                              value:
                                                                _vm.last_name,
                                                            },
                                                            on: {
                                                              input: function (
                                                                $event
                                                              ) {
                                                                if (
                                                                  $event.target
                                                                    .composing
                                                                ) {
                                                                  return
                                                                }
                                                                _vm.last_name =
                                                                  $event.target.value
                                                              },
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
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "col-xl-6 col-lg-6 col-12",
                                        },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "form-group" },
                                            [
                                              _c(
                                                "label",
                                                {
                                                  attrs: { for: "companyName" },
                                                },
                                                [_vm._v("Company Name*")]
                                              ),
                                              _vm._v(" "),
                                              _c("ValidationProvider", {
                                                attrs: {
                                                  name: "Company Name",
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
                                                                rawName:
                                                                  "v-model",
                                                                value:
                                                                  _vm.company_name,
                                                                expression:
                                                                  "company_name",
                                                              },
                                                            ],
                                                            staticClass:
                                                              "form-control reg-input",
                                                            attrs: {
                                                              type: "text",
                                                              id: "companyName",
                                                              placeholder:
                                                                "Enter Company Name",
                                                              name: "company_name",
                                                            },
                                                            domProps: {
                                                              value:
                                                                _vm.company_name,
                                                            },
                                                            on: {
                                                              input: function (
                                                                $event
                                                              ) {
                                                                if (
                                                                  $event.target
                                                                    .composing
                                                                ) {
                                                                  return
                                                                }
                                                                _vm.company_name =
                                                                  $event.target.value
                                                              },
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
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "col-xl-6 col-lg-12" },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "form-group" },
                                            [
                                              _c(
                                                "label",
                                                { attrs: { for: "email" } },
                                                [_vm._v("Email Address*")]
                                              ),
                                              _vm._v(" "),
                                              _c("ValidationProvider", {
                                                attrs: {
                                                  name: "email",
                                                  rules: "required|email",
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
                                                                rawName:
                                                                  "v-model",
                                                                value:
                                                                  _vm.email,
                                                                expression:
                                                                  "email",
                                                              },
                                                            ],
                                                            staticClass:
                                                              "form-control reg-input",
                                                            attrs: {
                                                              type: "email",
                                                              id: "email",
                                                              placeholder:
                                                                "Enter Email Address",
                                                              name: "email",
                                                            },
                                                            domProps: {
                                                              value: _vm.email,
                                                            },
                                                            on: {
                                                              input: function (
                                                                $event
                                                              ) {
                                                                if (
                                                                  $event.target
                                                                    .composing
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
                                              _vm._v(" "),
                                              _c("small", [
                                                _c(
                                                  "span",
                                                  { staticClass: "red" },
                                                  [_vm._v("Note:")]
                                                ),
                                                _vm._v(
                                                  "Prefer to use your\n                                            professional email address "
                                                ),
                                              ]),
                                            ],
                                            1
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "col-xl-6 col-lg-6 col-12",
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "form-group pass-wrap",
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
                                                    "required|confirmed:confirmation",
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
                                                                rawName:
                                                                  "v-model",
                                                                value:
                                                                  _vm.password,
                                                                expression:
                                                                  "password",
                                                              },
                                                            ],
                                                            staticClass:
                                                              "form-control reg-input",
                                                            attrs: {
                                                              type: "password",
                                                              id: "pass",
                                                              placeholder:
                                                                "********",
                                                              name: "password",
                                                            },
                                                            domProps: {
                                                              value:
                                                                _vm.password,
                                                            },
                                                            on: {
                                                              input: function (
                                                                $event
                                                              ) {
                                                                if (
                                                                  $event.target
                                                                    .composing
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
                                                              attrs: {
                                                                type: "button",
                                                              },
                                                              on: {
                                                                click:
                                                                  function (
                                                                    $event
                                                                  ) {
                                                                    return _vm.togglePasswordType(
                                                                      5
                                                                    )
                                                                  },
                                                              },
                                                            },
                                                            [
                                                              _c("i", {
                                                                attrs: {
                                                                  "aria-hidden":
                                                                    "true",
                                                                },
                                                              }),
                                                            ]
                                                          ),
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
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "col-xl-6 col-lg-6 col-12",
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "form-group pass-wrap",
                                            },
                                            [
                                              _c(
                                                "label",
                                                { attrs: { for: "cpass" } },
                                                [_vm._v("Confirm Password*")]
                                              ),
                                              _vm._v(" "),
                                              _c("ValidationProvider", {
                                                attrs: {
                                                  name: "confirmation",
                                                  rules: "required",
                                                  vid: "confirmation",
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
                                                                rawName:
                                                                  "v-model",
                                                                value:
                                                                  _vm.confirmation,
                                                                expression:
                                                                  "confirmation",
                                                              },
                                                            ],
                                                            staticClass:
                                                              "form-control reg-input",
                                                            attrs: {
                                                              type: "password",
                                                              id: "cpass",
                                                              placeholder:
                                                                "********",
                                                              name: "confirmation",
                                                            },
                                                            domProps: {
                                                              value:
                                                                _vm.confirmation,
                                                            },
                                                            on: {
                                                              input: function (
                                                                $event
                                                              ) {
                                                                if (
                                                                  $event.target
                                                                    .composing
                                                                ) {
                                                                  return
                                                                }
                                                                _vm.confirmation =
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
                                                              attrs: {
                                                                type: "button",
                                                              },
                                                              on: {
                                                                click:
                                                                  function (
                                                                    $event
                                                                  ) {
                                                                    return _vm.togglePasswordType(
                                                                      7
                                                                    )
                                                                  },
                                                              },
                                                            },
                                                            [
                                                              _c("i", {
                                                                attrs: {
                                                                  "aria-hidden":
                                                                    "true",
                                                                },
                                                              }),
                                                            ]
                                                          ),
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
                                          ),
                                        ]
                                      ),
                                    ]),
                                    _vm._v(" "),
                                    _c("input", {
                                      staticClass: "next action-button",
                                      attrs: {
                                        type: "button",
                                        name: "next",
                                        value: "Continue",
                                      },
                                    }),
                                  ]),
                                  _vm._v(" "),
                                  _c("fieldset", [
                                    _c("div", { staticClass: "row" }, [
                                      _c(
                                        "div",
                                        { staticClass: "col-12 text-center" },
                                        [
                                          _c(
                                            "p",
                                            { staticClass: "reg-title" },
                                            [_vm._v("Address Information")]
                                          ),
                                        ]
                                      ),
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "row" }, [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "col-xl-6 col-lg-6 col-12",
                                        },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "form-group" },
                                            [
                                              _c(
                                                "label",
                                                { attrs: { for: "address" } },
                                                [_vm._v("Address*")]
                                              ),
                                              _vm._v(" "),
                                              _c("ValidationProvider", {
                                                attrs: {
                                                  name: "address",
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
                                                                rawName:
                                                                  "v-model",
                                                                value:
                                                                  _vm.address,
                                                                expression:
                                                                  "address",
                                                              },
                                                            ],
                                                            staticClass:
                                                              "form-control reg-input",
                                                            attrs: {
                                                              type: "text",
                                                              id: "address",
                                                              placeholder:
                                                                "Enter Address",
                                                              name: "address",
                                                            },
                                                            domProps: {
                                                              value:
                                                                _vm.address,
                                                            },
                                                            on: {
                                                              input: function (
                                                                $event
                                                              ) {
                                                                if (
                                                                  $event.target
                                                                    .composing
                                                                ) {
                                                                  return
                                                                }
                                                                _vm.address =
                                                                  $event.target.value
                                                              },
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
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "col-xl-6 col-lg-6 col-12",
                                        },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "form-group" },
                                            [
                                              _c(
                                                "label",
                                                { attrs: { for: "country" } },
                                                [_vm._v("Country*")]
                                              ),
                                              _vm._v(" "),
                                              _c("ValidationProvider", {
                                                attrs: {
                                                  name: "country",
                                                  rules: "required",
                                                },
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
                                                              directives: [
                                                                {
                                                                  name: "model",
                                                                  rawName:
                                                                    "v-model",
                                                                  value:
                                                                    _vm.country,
                                                                  expression:
                                                                    "country",
                                                                },
                                                              ],
                                                              staticClass:
                                                                "form-control reg-input",
                                                              attrs: {
                                                                id: "country",
                                                                name: "country",
                                                              },
                                                              on: {
                                                                change:
                                                                  function (
                                                                    $event
                                                                  ) {
                                                                    var $$selectedVal =
                                                                      Array.prototype.filter
                                                                        .call(
                                                                          $event
                                                                            .target
                                                                            .options,
                                                                          function (
                                                                            o
                                                                          ) {
                                                                            return o.selected
                                                                          }
                                                                        )
                                                                        .map(
                                                                          function (
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
                                                                    _vm.country =
                                                                      $event
                                                                        .target
                                                                        .multiple
                                                                        ? $$selectedVal
                                                                        : $$selectedVal[0]
                                                                  },
                                                              },
                                                            },
                                                            [
                                                              _c(
                                                                "option",
                                                                {
                                                                  attrs: {
                                                                    selected:
                                                                      "",
                                                                    disabled:
                                                                      "",
                                                                  },
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "Enter Country"
                                                                  ),
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "option",
                                                                {
                                                                  attrs: {
                                                                    value:
                                                                      "usa",
                                                                  },
                                                                },
                                                                [_vm._v("USA")]
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "option",
                                                                {
                                                                  attrs: {
                                                                    value: "uk",
                                                                  },
                                                                },
                                                                [_vm._v("UK")]
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "option",
                                                                {
                                                                  attrs: {
                                                                    value:
                                                                      "new zealand",
                                                                  },
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "New Zealand"
                                                                  ),
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "option",
                                                                {
                                                                  attrs: {
                                                                    value:
                                                                      "ireland",
                                                                  },
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "Ireland"
                                                                  ),
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c("option", [
                                                                _vm._v(
                                                                  "Australia"
                                                                ),
                                                              ]),
                                                            ]
                                                          ),
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
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "col-xl-4 col-lg-6 col-12",
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
                                                                rawName:
                                                                  "v-model",
                                                                value: _vm.city,
                                                                expression:
                                                                  "city",
                                                              },
                                                            ],
                                                            staticClass:
                                                              "form-control reg-input",
                                                            attrs: {
                                                              type: "text",
                                                              id: "city",
                                                              placeholder:
                                                                "Enter city Name",
                                                              name: "city",
                                                            },
                                                            domProps: {
                                                              value: _vm.city,
                                                            },
                                                            on: {
                                                              input: function (
                                                                $event
                                                              ) {
                                                                if (
                                                                  $event.target
                                                                    .composing
                                                                ) {
                                                                  return
                                                                }
                                                                _vm.city =
                                                                  $event.target.value
                                                              },
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
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "col-xl-4 col-lg-12 col-12",
                                        },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "form-group" },
                                            [
                                              _c(
                                                "label",
                                                { attrs: { for: "zipCode" } },
                                                [_vm._v("EIR Code*")]
                                              ),
                                              _vm._v(" "),
                                              _c("ValidationProvider", {
                                                attrs: {
                                                  name: "Post code",
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
                                                                rawName:
                                                                  "v-model",
                                                                value:
                                                                  _vm.zip_code,
                                                                expression:
                                                                  "zip_code",
                                                              },
                                                            ],
                                                            staticClass:
                                                              "form-control reg-input",
                                                            attrs: {
                                                              type: "text",
                                                              id: "zipCode",
                                                              placeholder:
                                                                "Enter EIR code",
                                                              name: "zip_code",
                                                            },
                                                            domProps: {
                                                              value:
                                                                _vm.zip_code,
                                                            },
                                                            on: {
                                                              input: function (
                                                                $event
                                                              ) {
                                                                if (
                                                                  $event.target
                                                                    .composing
                                                                ) {
                                                                  return
                                                                }
                                                                _vm.zip_code =
                                                                  $event.target.value
                                                              },
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
                                          ),
                                        ]
                                      ),
                                    ]),
                                    _vm._v(" "),
                                    _c("input", {
                                      staticClass: "previous action-button",
                                      attrs: {
                                        type: "button",
                                        name: "previous",
                                        value: "Previous",
                                      },
                                    }),
                                    _vm._v(" "),
                                    _c("input", {
                                      staticClass: "next action-button",
                                      attrs: {
                                        type: "button",
                                        name: "next",
                                        value: "Next",
                                      },
                                    }),
                                  ]),
                                  _vm._v(" "),
                                  _c("fieldset", [
                                    _c("div", { staticClass: "row" }, [
                                      _c(
                                        "div",
                                        { staticClass: "col-12 text-center" },
                                        [
                                          _c(
                                            "p",
                                            { staticClass: "reg-title" },
                                            [_vm._v("Select Packages")]
                                          ),
                                          _vm._v(" "),
                                          _c("p", { staticClass: "reg sub" }, [
                                            _vm._v("choose your subscription"),
                                          ]),
                                        ]
                                      ),
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "row packages mt-4" },
                                      _vm._l(
                                        _vm.packages,
                                        function (pk, index) {
                                          return _c(
                                            "div",
                                            {
                                              staticClass:
                                                "col-xl-4 col-lg-6 col-12",
                                            },
                                            [
                                              _c(
                                                "div",
                                                { staticClass: "pckg_wrapper" },
                                                [
                                                  _c(
                                                    "p",
                                                    {
                                                      staticClass: "pckg-title",
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                        " +
                                                          _vm._s(
                                                            pk.package_name
                                                          ) +
                                                          "\n                        "
                                                      ),
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c("img", {
                                                    attrs: {
                                                      src: "images/pckg-icon.png",
                                                      alt: "",
                                                    },
                                                  }),
                                                  _vm._v(" "),
                                                  _c(
                                                    "p",
                                                    {
                                                      staticClass: "pckg_price",
                                                    },
                                                    [
                                                      _c("sup", [_vm._v("$")]),
                                                      _vm._v(
                                                        " " +
                                                          _vm._s(pk.charges) +
                                                          " "
                                                      ),
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "p",
                                                    {
                                                      staticClass: "pckg_meta",
                                                    },
                                                    [
                                                      _vm._v(
                                                        " This package includes "
                                                      ),
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "descriptions",
                                                    },
                                                    [
                                                      _c("p", {
                                                        staticClass:
                                                          "fieldData",
                                                        domProps: {
                                                          innerHTML: _vm._s(
                                                            pk.description
                                                          ),
                                                        },
                                                      }),
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "label",
                                                    {
                                                      staticClass:
                                                        "check-container",
                                                    },
                                                    [
                                                      _vm._v(
                                                        "Select Package\n                            "
                                                      ),
                                                      _c("input", {
                                                        directives: [
                                                          {
                                                            name: "model",
                                                            rawName: "v-model",
                                                            value:
                                                              _vm.package_id,
                                                            expression:
                                                              "package_id",
                                                          },
                                                        ],
                                                        attrs: {
                                                          type: "radio",
                                                          name: "radio",
                                                        },
                                                        domProps: {
                                                          value: pk.id,
                                                          checked: _vm._q(
                                                            _vm.package_id,
                                                            pk.id
                                                          ),
                                                        },
                                                        on: {
                                                          change: function (
                                                            $event
                                                          ) {
                                                            _vm.package_id =
                                                              pk.id
                                                          },
                                                        },
                                                      }),
                                                      _vm._v(" "),
                                                      _c("span", {
                                                        staticClass:
                                                          "check-checkmark",
                                                      }),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                            ]
                                          )
                                        }
                                      ),
                                      0
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "row mt-4" }, [
                                      _c(
                                        "div",
                                        { staticClass: "col-12 text-center" },
                                        [
                                          _c("p", { staticClass: "rcard-p" }, [
                                            _vm._v(
                                              "\n                want to try for free? "
                                            ),
                                            _c(
                                              "label",
                                              {
                                                staticClass: "check-container",
                                              },
                                              [
                                                _c("input", {
                                                  attrs: {
                                                    type: "radio",
                                                    name: "radio",
                                                  },
                                                }),
                                                _vm._v(" "),
                                                _c("span", {
                                                  staticClass:
                                                    "check-checkmark",
                                                }),
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "button",
                                              {
                                                attrs: { type: "submit" },
                                                on: {
                                                  click: function ($event) {
                                                    return _vm.freeTrial()
                                                  },
                                                },
                                              },
                                              [_vm._v("Click here!")]
                                            ),
                                          ]),
                                        ]
                                      ),
                                    ]),
                                    _vm._v(" "),
                                    _c("input", {
                                      staticClass: "previous action-button",
                                      attrs: {
                                        type: "button",
                                        name: "previous",
                                        value: "Previous",
                                      },
                                    }),
                                    _vm._v(" "),
                                    _c("input", {
                                      staticClass: "next action-button",
                                      attrs: {
                                        type: "button",
                                        name: "next",
                                        value: "Continue",
                                      },
                                    }),
                                  ]),
                                  _vm._v(" "),
                                  _c("fieldset", [
                                    _c("div", { staticClass: "row" }, [
                                      _c(
                                        "div",
                                        { staticClass: "col-12 text-center" },
                                        [
                                          _c(
                                            "p",
                                            { staticClass: "reg-title" },
                                            [_vm._v("Card Details")]
                                          ),
                                        ]
                                      ),
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "row" }, [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "col-xl-6 col-md-6 col-12",
                                        },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "form-group" },
                                            [
                                              _c(
                                                "label",
                                                {
                                                  attrs: { for: "holderName" },
                                                },
                                                [_vm._v("Card Holder Name*")]
                                              ),
                                              _vm._v(" "),
                                              _c("ValidationProvider", {
                                                attrs: {
                                                  name: "card holder name",
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
                                                                rawName:
                                                                  "v-model",
                                                                value:
                                                                  _vm.card_holder_name,
                                                                expression:
                                                                  "card_holder_name",
                                                              },
                                                            ],
                                                            staticClass:
                                                              "input-lg form-control cc-number reg-input",
                                                            attrs: {
                                                              type: "text",
                                                              id: "holderName",
                                                              placeholder:
                                                                "Enter Name",
                                                              name: "card_holder_name",
                                                            },
                                                            domProps: {
                                                              value:
                                                                _vm.card_holder_name,
                                                            },
                                                            on: {
                                                              input: function (
                                                                $event
                                                              ) {
                                                                if (
                                                                  $event.target
                                                                    .composing
                                                                ) {
                                                                  return
                                                                }
                                                                _vm.card_holder_name =
                                                                  $event.target.value
                                                              },
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
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "col-xl-6 col-md-6 col-12",
                                        },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "form-group" },
                                            [
                                              _c(
                                                "label",
                                                { attrs: { for: "cc-number" } },
                                                [_vm._v("Card Number*")]
                                              ),
                                              _vm._v(" "),
                                              _c("ValidationProvider", {
                                                attrs: {
                                                  vid: "card_number",
                                                  name: "card number",
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
                                                                rawName:
                                                                  "v-model",
                                                                value:
                                                                  _vm.card_number,
                                                                expression:
                                                                  "card_number",
                                                              },
                                                            ],
                                                            staticClass:
                                                              "form-control reg-input",
                                                            attrs: {
                                                              id: "cc-number",
                                                              type: "tel",
                                                              placeholder:
                                                                "•••• •••• •••• ••••",
                                                              name: "card_number",
                                                            },
                                                            domProps: {
                                                              value:
                                                                _vm.card_number,
                                                            },
                                                            on: {
                                                              keyup: function (
                                                                $event
                                                              ) {
                                                                if (
                                                                  !$event.type.indexOf(
                                                                    "key"
                                                                  ) &&
                                                                  $event.keyCode !==
                                                                    8
                                                                ) {
                                                                  return null
                                                                }
                                                                return _vm.atBackPress()
                                                              },
                                                              input: function (
                                                                $event
                                                              ) {
                                                                if (
                                                                  $event.target
                                                                    .composing
                                                                ) {
                                                                  return
                                                                }
                                                                _vm.card_number =
                                                                  $event.target.value
                                                              },
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
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "col-xl-6 col-md-6 col-12",
                                        },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "form-group" },
                                            [
                                              _c(
                                                "label",
                                                { attrs: { for: "cvv" } },
                                                [_vm._v("CVV Code*")]
                                              ),
                                              _vm._v(" "),
                                              _c("ValidationProvider", {
                                                attrs: {
                                                  name: "cvv",
                                                  rules: "required|min:3|max:4",
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
                                                                rawName:
                                                                  "v-model",
                                                                value: _vm.cvv,
                                                                expression:
                                                                  "cvv",
                                                              },
                                                            ],
                                                            staticClass:
                                                              "form-control reg-input",
                                                            attrs: {
                                                              type: "number",
                                                              id: "cvv",
                                                              placeholder:
                                                                "Enter CVV Code",
                                                              name: "cvv",
                                                            },
                                                            domProps: {
                                                              value: _vm.cvv,
                                                            },
                                                            on: {
                                                              input: function (
                                                                $event
                                                              ) {
                                                                if (
                                                                  $event.target
                                                                    .composing
                                                                ) {
                                                                  return
                                                                }
                                                                _vm.cvv =
                                                                  $event.target.value
                                                              },
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
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "col-xl-6 col-md-6 col-12",
                                        },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "form-group" },
                                            [
                                              _c("label", [
                                                _vm._v("Expire Month/Year*"),
                                              ]),
                                              _vm._v(" "),
                                              _c("ValidationProvider", {
                                                attrs: {
                                                  name: "expiry date",
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
                                                                rawName:
                                                                  "v-model",
                                                                value:
                                                                  _vm.expiry_date,
                                                                expression:
                                                                  "expiry_date",
                                                              },
                                                            ],
                                                            staticClass:
                                                              "form-control",
                                                            attrs: {
                                                              type: "text",
                                                              name: "expiry_date",
                                                              id: "expiry",
                                                              "aria-describedby":
                                                                "emailHelp",
                                                              placeholder:
                                                                "Enter Expiry",
                                                            },
                                                            domProps: {
                                                              value:
                                                                _vm.expiry_date,
                                                            },
                                                            on: {
                                                              input: function (
                                                                $event
                                                              ) {
                                                                if (
                                                                  $event.target
                                                                    .composing
                                                                ) {
                                                                  return
                                                                }
                                                                _vm.expiry_date =
                                                                  $event.target.value
                                                              },
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
                                          ),
                                        ]
                                      ),
                                    ]),
                                    _vm._v(" "),
                                    _c("input", {
                                      staticClass: "previous action-button",
                                      attrs: {
                                        type: "button",
                                        name: "previous",
                                        value: "Previous",
                                      },
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "button",
                                      {
                                        staticClass: " action-button",
                                        attrs: { type: "submit" },
                                      },
                                      [_vm._v("Sign Up")]
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
      _c("div", { staticClass: "col-12 text-center" }, [
        _c("p", { staticClass: "rcard-p" }, [
          _vm._v(
            "\n                                        dont have an account? "
          ),
          _c("a", { attrs: { href: "" } }, [_vm._v("Create now!")]),
        ]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/businessOwner/auth/register/register.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/views/businessOwner/auth/register/register.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _register_vue_vue_type_template_id_556f2823___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.vue?vue&type=template&id=556f2823& */ "./resources/js/views/businessOwner/auth/register/register.vue?vue&type=template&id=556f2823&");
/* harmony import */ var _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.vue?vue&type=script&lang=js& */ "./resources/js/views/businessOwner/auth/register/register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _register_vue_vue_type_template_id_556f2823___WEBPACK_IMPORTED_MODULE_0__["render"],
  _register_vue_vue_type_template_id_556f2823___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/businessOwner/auth/register/register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/businessOwner/auth/register/register.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/views/businessOwner/auth/register/register.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/businessOwner/auth/register/register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/businessOwner/auth/register/register.vue?vue&type=template&id=556f2823&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/views/businessOwner/auth/register/register.vue?vue&type=template&id=556f2823& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_556f2823___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./register.vue?vue&type=template&id=556f2823& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/businessOwner/auth/register/register.vue?vue&type=template&id=556f2823&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_556f2823___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_556f2823___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);