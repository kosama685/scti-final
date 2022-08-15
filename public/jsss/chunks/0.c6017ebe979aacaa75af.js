(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/components/RegisterHeader.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/user/components/RegisterHeader.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      isSession: true,
      editProfile: {},
      notifications: {}
    };
  },
  created: function created() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var accesstoken, userType;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.getProfile();

            case 2:
              //await this.notifications();
              accesstoken = localStorage.getItem('access-token');
              userType = localStorage.getItem('userType');

              if (accesstoken && userType == 'user') {
                _this.isSession = false; // this.$router.push({name: 'user.users.dashboard'});
              } else {
                _this.isSession = true;
              }

              console.log(_this.isSession);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    getProfile: function getProfile() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios.get('/api/admin/getProfile');

              case 2:
                _this2.editProfile = _context2.sent.data.data;
                _context2.next = 5;
                return axios.get('/api/admin/getNotification');

              case 5:
                _this2.notifications = _context2.sent.data;

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    openCvBuilder: function openCvBuilder() {
      var packageBooleanTrial = localStorage.getItem('packageBooleanTrial');

      if (packageBooleanTrial == 1) {
        this.$snotify.error('You are in trial pacakge please update your package');
      } else {
        this.$router.push({
          name: 'user.cvBiulder.create'
        });
      }
    },
    logout: function logout() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var self;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                window.localStorage.setItem('logoutItem', true);
                _context3.next = 3;
                return axios.post('/api/admin/logout');

              case 3:
                localStorage.removeItem('isLoggedIn');
                localStorage.removeItem('userType');
                localStorage.removeItem('access-token');

                _this3.$snotify.success('Logout Successfully');

                self = _this3;
                setTimeout(function () {
                  self.$router.push({
                    name: 'user.auth.login'
                  });
                }, 2000);

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/components/RegisterHeader.vue?vue&type=template&id=a2350f78&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/user/components/RegisterHeader.vue?vue&type=template&id=a2350f78& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("header", { staticClass: "nav-user" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-12" }, [
            _c(
              "nav",
              { staticClass: "navbar navbar-expand-lg  navbar-light" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "navbar-brand d-lg-none",
                    attrs: {
                      target: "_self",
                      to: { name: "user.users.dashboard" }
                    }
                  },
                  [
                    _c("img", {
                      attrs: {
                        src: _vm.base_url + "/assets/user/images/logo.png"
                      }
                    })
                  ]
                ),
                _vm._v(" "),
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "navbar-collapse justify-content-between collapse",
                    attrs: { id: "navbarToggle" }
                  },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "navbar-brand d-none d-lg-block",
                        attrs: {
                          target: "_self",
                          to: { name: "user.users.dashboard" }
                        }
                      },
                      [
                        _c("img", {
                          attrs: {
                            src: _vm.base_url + "/assets/user/images/logo.png"
                          }
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _c("ul", { staticClass: "navbar-nav nav-margin-left" }, [
                      _c(
                        "li",
                        { staticClass: "nav-item" },
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "nav-link ",
                              attrs: { target: "_self", to: { name: "" } }
                            },
                            [
                              _vm._v("Career Center "),
                              _c("span", { staticClass: "sr-only" }, [
                                _vm._v("(current)")
                              ])
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "li",
                        { staticClass: "nav-item" },
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "nav-link ",
                              attrs: {
                                target: "_self",
                                to: { name: "user.users.dashboard" }
                              }
                            },
                            [
                              _vm._v("Browse Jobs "),
                              _c("span", { staticClass: "sr-only" }, [
                                _vm._v("(current)")
                              ])
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "li",
                        { staticClass: "nav-item" },
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "nav-link ",
                              attrs: {
                                target: "_self",
                                to: { name: "user.contact.index" }
                              }
                            },
                            [
                              _vm._v("Contact"),
                              _c("span", { staticClass: "sr-only" }, [
                                _vm._v("(current)")
                              ])
                            ]
                          )
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _vm.isSession
                      ? _c("ul", { staticClass: "navbar-nav f-m-s" }, [
                          _c(
                            "li",
                            { staticClass: "nav-item btn-right" },
                            [
                              _c(
                                "router-link",
                                {
                                  staticClass: "nav-link",
                                  attrs: { to: { name: "user.auth.login" } }
                                },
                                [
                                  _vm._v(
                                    "\n                                        Login\n                                    "
                                  )
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "li",
                            { staticClass: "nav-item btn-right" },
                            [
                              _c(
                                "router-link",
                                {
                                  staticClass: "nav-link",
                                  attrs: { to: { name: "user.auth.register" } }
                                },
                                [
                                  _vm._v(
                                    "\n                                        Register\n                                    "
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ])
                      : _c(
                          "ul",
                          {
                            staticClass:
                              "navbar-nav d-flex align-items-lg-center align-items-start justify-content-center"
                          },
                          [
                            _c(
                              "li",
                              {
                                staticClass:
                                  "dropdown dropdown-user nav-item user_dropdown "
                              },
                              [
                                _c(
                                  "a",
                                  {
                                    staticClass: "dropdown-item",
                                    attrs: {
                                      href: "",
                                      "data-toggle": "modal",
                                      "data-target": "#logout"
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.logout()
                                      }
                                    }
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "fa fa-arrow-circle-right",
                                      attrs: { "aria-hidden": "true" }
                                    }),
                                    _vm._v(" Logout")
                                  ]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "li",
                              {
                                staticClass:
                                  "nav-item d-lg-block d-none dropdown notifications"
                              },
                              [
                                _vm._m(1),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass: "dropdown-menu notif_dd",
                                    attrs: {
                                      "aria-labelledby": "dropdownMenuButton"
                                    }
                                  },
                                  [
                                    _vm.notifications.length != 0
                                      ? _c(
                                          "div",
                                          _vm._l(_vm.notifications, function(
                                            notification,
                                            index
                                          ) {
                                            return _c(
                                              "router-link",
                                              {
                                                key: index,
                                                staticClass: "dropdown-item",
                                                attrs: {
                                                  to: {
                                                    name:
                                                      "user.notification.index"
                                                  }
                                                }
                                              },
                                              [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "notificaiton-wrapper"
                                                  },
                                                  [
                                                    _c(
                                                      "div",
                                                      { staticClass: "top" },
                                                      [
                                                        _c("i", {
                                                          staticClass:
                                                            "fa fa-bell-o",
                                                          attrs: {
                                                            "aria-hidden":
                                                              "true"
                                                          }
                                                        }),
                                                        _vm._v(" "),
                                                        _c(
                                                          "p",
                                                          {
                                                            staticClass:
                                                              "notfTitle"
                                                          },
                                                          [
                                                            _vm._v(
                                                              _vm._s(
                                                                notification.title
                                                              )
                                                            )
                                                          ]
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "div",
                                                      { staticClass: "bottom" },
                                                      [
                                                        _c("span", [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.formatDate(
                                                                notification.created_at
                                                              )
                                                            ) + " | 10:30PM"
                                                          )
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("p", [
                                                          _vm._v("View all")
                                                        ])
                                                      ]
                                                    )
                                                  ]
                                                )
                                              ]
                                            )
                                          }),
                                          1
                                        )
                                      : _c("h4", [
                                          _vm._v("No notification found")
                                        ])
                                  ]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "li",
                              {
                                staticClass:
                                  "dropdown dropdown-user nav-item user_dropdown "
                              },
                              [
                                _c(
                                  "a",
                                  {
                                    staticClass:
                                      "dropdown-toggle nav-link dropdown-user-link",
                                    attrs: {
                                      href: "#",
                                      "data-toggle": "dropdown",
                                      "aria-expanded": "true"
                                    }
                                  },
                                  [
                                    _c(
                                      "span",
                                      { staticClass: "avatar avatar-online" },
                                      [
                                        _c("img", {
                                          staticClass: "avatar",
                                          attrs: {
                                            src: _vm.editProfile.image,
                                            alt: "avatar"
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "user-name" }, [
                                      _vm._v(_vm._s(_vm.editProfile.name) + " ")
                                    ])
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "dropdown-menu dropdown-menu-right user-dd "
                                  },
                                  [
                                    _c(
                                      "router-link",
                                      {
                                        staticClass: "dropdown-item",
                                        attrs: {
                                          to: { name: "user.users.view" }
                                        }
                                      },
                                      [
                                        _c("i", {
                                          staticClass: "fa fa-user-circle",
                                          attrs: { "aria-hidden": "true" }
                                        }),
                                        _vm._v(
                                          "My Profile\n                                        "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "router-link",
                                      {
                                        staticClass: "dropdown-item",
                                        attrs: {
                                          to: { name: "user.users.dashboard" }
                                        }
                                      },
                                      [
                                        _c("i", {
                                          staticClass: "fa fa-user-circle",
                                          attrs: { "aria-hidden": "true" }
                                        }),
                                        _vm._v(
                                          " Browse Jobs\n                                        "
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                )
                              ]
                            )
                          ]
                        )
                  ],
                  1
                )
              ],
              1
            )
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("section", { staticClass: "nav-bg" })
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "navbar-toggler collapsed",
        attrs: {
          type: "button",
          "data-toggle": "collapse",
          "data-target": "#navbarToggle",
          "aria-controls": "navbarToggle",
          "aria-expanded": "false",
          "aria-label": "Toggle navigation"
        }
      },
      [_c("span", { staticClass: "navbar-toggler-icon" })]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: " dropdown-toggle",
        attrs: {
          href: "",
          "data-toggle": "dropdown",
          "aria-haspopup": "true",
          "aria-expanded": "false"
        }
      },
      [_c("i", { staticClass: "fa fa-bell", attrs: { "aria-hidden": "true" } })]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/user/components/RegisterHeader.vue":
/*!***************************************************************!*\
  !*** ./resources/js/views/user/components/RegisterHeader.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RegisterHeader_vue_vue_type_template_id_a2350f78___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegisterHeader.vue?vue&type=template&id=a2350f78& */ "./resources/js/views/user/components/RegisterHeader.vue?vue&type=template&id=a2350f78&");
/* harmony import */ var _RegisterHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegisterHeader.vue?vue&type=script&lang=js& */ "./resources/js/views/user/components/RegisterHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RegisterHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RegisterHeader_vue_vue_type_template_id_a2350f78___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RegisterHeader_vue_vue_type_template_id_a2350f78___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/user/components/RegisterHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/user/components/RegisterHeader.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/user/components/RegisterHeader.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./RegisterHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/components/RegisterHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/user/components/RegisterHeader.vue?vue&type=template&id=a2350f78&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/views/user/components/RegisterHeader.vue?vue&type=template&id=a2350f78& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterHeader_vue_vue_type_template_id_a2350f78___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./RegisterHeader.vue?vue&type=template&id=a2350f78& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/components/RegisterHeader.vue?vue&type=template&id=a2350f78&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterHeader_vue_vue_type_template_id_a2350f78___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterHeader_vue_vue_type_template_id_a2350f78___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);