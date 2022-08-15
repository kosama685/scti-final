(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[70],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/businessOwner/components/TopNavbar.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/businessOwner/components/TopNavbar.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
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
var BellNotification = function BellNotification() {
  return __webpack_require__.e(/*! import() */ 13).then(__webpack_require__.bind(null, /*! @core/components/BellNotification.vue */ "./resources/js/coreFiles/components/BellNotification.vue"));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      name: '',
      image: '',
      editProfile: {}
    };
  },
  created: function created() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.getProfile();

              _this.name = localStorage.getItem('name');
              _this.image = localStorage.getItem('image');

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  components: {
    BellNotification: BellNotification
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
                localStorage.setItem('image', _this2.editProfile.image);
                console.log(_this2.editProfile);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
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
                    name: 'businessOwner.auth.login'
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/businessOwner/components/TopNavbar.vue?vue&type=template&id=c37a4632&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/businessOwner/components/TopNavbar.vue?vue&type=template&id=c37a4632& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
    "nav",
    {
      staticClass:
        "header-navbar navbar-expand-md navbar navbar-with-menu fixed-top navbar-light navbar-border"
    },
    [
      _c("div", { staticClass: "navbar-wrapper" }, [
        _c("div", { staticClass: "navbar-header" }, [
          _c("ul", { staticClass: "nav navbar-nav flex-row" }, [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "li",
              { staticClass: "nav-item" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "navbar-brand",
                    attrs: { to: { name: "public.dashboard" } }
                  },
                  [
                    _c("img", {
                      staticClass: "brand-logo",
                      attrs: {
                        alt: "stack public logo",
                        src: _vm.base_url + "/assets/images/logo.png"
                      }
                    })
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _vm._m(1)
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "navbar-container content" }, [
          _c(
            "div",
            {
              staticClass: "collapse navbar-collapse",
              attrs: { id: "navbar-mobile" }
            },
            [
              _c("ul", { staticClass: "nav navbar-nav mr-auto float-left" }, [
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "navbar-brand",
                        attrs: { to: { name: "businessOwner.dashboard" } }
                      },
                      [_vm._v("Dashboard")]
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
                        staticClass: "navbar-brand",
                        attrs: { to: { name: "businessOwner.jobs.create" } }
                      },
                      [_vm._v("Create Job")]
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
                        staticClass: "navbar-brand",
                        attrs: { to: { name: "businessOwner.jobs.index" } }
                      },
                      [_vm._v("My Jobs")]
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
                        staticClass: "navbar-brand",
                        attrs: {
                          to: { name: "businessOwner.subscriptions.index" }
                        }
                      },
                      [_vm._v("Subscribtion Log")]
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c(
                "ul",
                { staticClass: "nav navbar-nav float-right" },
                [
                  _c("bell-notification", {
                    attrs: { viewAllLink: "businessOwner.notifications.index" }
                  }),
                  _vm._v(" "),
                  _c("li", { staticClass: "dropdown dropdown-user nav-item" }, [
                    _c(
                      "a",
                      {
                        staticClass:
                          "dropdown-toggle nav-link dropdown-user-link",
                        attrs: { href: "#", "data-toggle": "dropdown" }
                      },
                      [
                        _c("span", { staticClass: "avatar avatar-online" }, [
                          _c("img", {
                            attrs: { src: _vm.editProfile.image, alt: "avatar" }
                          })
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "user-name" }, [
                          _vm._v(_vm._s(_vm.name))
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "dropdown-menu dropdown-menu-right" },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "dropdown-item",
                            attrs: {
                              "data-toggle": "modal",
                              to: { name: "business.users.profile" }
                            }
                          },
                          [
                            _c("i", { staticClass: "fa fa-user-circle" }),
                            _vm._v("Profile")
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "dropdown-divider" }),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass: "dropdown-item",
                            attrs: {
                              "data-toggle": "modal",
                              href: "#logoutmodal"
                            },
                            on: {
                              click: function($event) {
                                return _vm.logout()
                              }
                            }
                          },
                          [
                            _c("i", { staticClass: "fa fa-power-off" }),
                            _vm._v("Logout")
                          ]
                        )
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _vm._m(2)
                ],
                1
              )
            ]
          )
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "nav-item mobile-menu d-md-none mr-auto" }, [
      _c(
        "a",
        {
          staticClass: "nav-link nav-menu-main menu-toggle hidden-xs",
          attrs: { href: "#" }
        },
        [_c("i", { staticClass: "ft-menu font-large-1" })]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "nav-item d-md-none" }, [
      _c(
        "a",
        {
          staticClass: "nav-link open-navbar-container",
          attrs: { "data-toggle": "collapse", "data-target": "#navbar-mobile" }
        },
        [_c("i", { staticClass: "fa fa-ellipsis-v" })]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "nav-item d-none d-md-block" }, [
      _c(
        "a",
        {
          staticClass: "nav-link nav-menu-main menu-toggle hidden-xs",
          attrs: { href: "#" }
        },
        [_c("i", { staticClass: "ft-menu" })]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/businessOwner/components/TopNavbar.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/views/businessOwner/components/TopNavbar.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TopNavbar_vue_vue_type_template_id_c37a4632___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TopNavbar.vue?vue&type=template&id=c37a4632& */ "./resources/js/views/businessOwner/components/TopNavbar.vue?vue&type=template&id=c37a4632&");
/* harmony import */ var _TopNavbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TopNavbar.vue?vue&type=script&lang=js& */ "./resources/js/views/businessOwner/components/TopNavbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TopNavbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TopNavbar_vue_vue_type_template_id_c37a4632___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TopNavbar_vue_vue_type_template_id_c37a4632___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/businessOwner/components/TopNavbar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/businessOwner/components/TopNavbar.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/businessOwner/components/TopNavbar.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNavbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TopNavbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/businessOwner/components/TopNavbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNavbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/businessOwner/components/TopNavbar.vue?vue&type=template&id=c37a4632&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/views/businessOwner/components/TopNavbar.vue?vue&type=template&id=c37a4632& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNavbar_vue_vue_type_template_id_c37a4632___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TopNavbar.vue?vue&type=template&id=c37a4632& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/businessOwner/components/TopNavbar.vue?vue&type=template&id=c37a4632&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNavbar_vue_vue_type_template_id_c37a4632___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNavbar_vue_vue_type_template_id_c37a4632___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);