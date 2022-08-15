(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/components/FullPageHeader.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/user/components/FullPageHeader.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    return {};
  },
  computed: {
    currentRouteName: function currentRouteName() {
      return this.$route.name; //  console.log(this.$route.name);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/components/FullPageHeader.vue?vue&type=template&id=3a5b04c2&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/user/components/FullPageHeader.vue?vue&type=template&id=3a5b04c2& ***!
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
  return _c("header", { staticClass: "nav-home" }, [
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-12" }, [
          _c("nav", { staticClass: "navbar navbar-expand-lg  navbar-light" }, [
            _c(
              "a",
              {
                staticClass: "navbar-brand d-lg-none",
                attrs: { target: "_self", href: "/" }
              },
              [
                _c("img", {
                  attrs: { src: _vm.base_url + "/images/thumbnail.png" }
                })
              ]
            ),
            _vm._v(" "),
            _vm._m(0),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "navbar-collapse justify-content-between collapse",
                attrs: { id: "navbarToggle" }
              },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "navbar-brand d-none d-lg-block",
                    attrs: { to: "" }
                  },
                  [
                    _c("img", {
                      attrs: { src: _vm.base_url + "/images/thumbnail.png" }
                    })
                  ]
                ),
                _vm._v(" "),
                _c("ul", { staticClass: "navbar-nav" }, [
                  _c(
                    "li",
                    { staticClass: "nav-item" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "nav-link  ",
                          class:
                            _vm.currentRouteName == "user.users.index"
                              ? "active"
                              : "",
                          attrs: {
                            target: "_self",
                            to: { name: "user.users.index" }
                          }
                        },
                        [
                          _vm._v("Home"),
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
                          class:
                            _vm.currentRouteName == "user.about.index"
                              ? "active"
                              : "",
                          attrs: { to: { name: "user.about.index" } }
                        },
                        [_vm._v("About Us ")]
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
                          staticClass: "nav-link",
                          class:
                            _vm.currentRouteName == "user.faq.index"
                              ? "active"
                              : "",
                          attrs: { to: { name: "user.faq.index" } }
                        },
                        [_vm._v("FAQs")]
                      )
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("ul", { staticClass: "navbar-nav" }, [
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
                        [_vm._v("\n                                Login")]
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
                        [_vm._v("\n                                Register")]
                      )
                    ],
                    1
                  )
                ])
              ],
              1
            )
          ])
        ])
      ])
    ])
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
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/user/components/FullPageHeader.vue":
/*!***************************************************************!*\
  !*** ./resources/js/views/user/components/FullPageHeader.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FullPageHeader_vue_vue_type_template_id_3a5b04c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FullPageHeader.vue?vue&type=template&id=3a5b04c2& */ "./resources/js/views/user/components/FullPageHeader.vue?vue&type=template&id=3a5b04c2&");
/* harmony import */ var _FullPageHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FullPageHeader.vue?vue&type=script&lang=js& */ "./resources/js/views/user/components/FullPageHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FullPageHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FullPageHeader_vue_vue_type_template_id_3a5b04c2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FullPageHeader_vue_vue_type_template_id_3a5b04c2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/user/components/FullPageHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/user/components/FullPageHeader.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/user/components/FullPageHeader.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FullPageHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FullPageHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/components/FullPageHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FullPageHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/user/components/FullPageHeader.vue?vue&type=template&id=3a5b04c2&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/views/user/components/FullPageHeader.vue?vue&type=template&id=3a5b04c2& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FullPageHeader_vue_vue_type_template_id_3a5b04c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FullPageHeader.vue?vue&type=template&id=3a5b04c2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/components/FullPageHeader.vue?vue&type=template&id=3a5b04c2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FullPageHeader_vue_vue_type_template_id_3a5b04c2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FullPageHeader_vue_vue_type_template_id_3a5b04c2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);