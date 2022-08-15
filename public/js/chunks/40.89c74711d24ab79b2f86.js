(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[40],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/coreFiles/components/Sidebar/Sidebar.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/coreFiles/components/Sidebar/Sidebar.vue?vue&type=script&lang=js& ***!
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
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    sidebarItems: {
      type: Array,
      required: true,
      "default": null
    }
  },
  data: function data() {
    return {
      clickedIndex: -1,
      sidebarItemsValue: this.sidebarItems
    };
  },
  methods: {
    showChildren: function showChildren(index) {
      if (this.clickedIndex == index) {
        this.clickedIndex = -1;
      } else {
        this.clickedIndex = index;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/coreFiles/components/Sidebar/Sidebar.vue?vue&type=template&id=9468ba76&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/coreFiles/components/Sidebar/Sidebar.vue?vue&type=template&id=9468ba76& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
      staticClass: "main-menu menu-fixed menu-light menu-accordion",
      attrs: { "data-scroll-to-active": "true" },
    },
    [
      _c("div", { staticClass: "main-menu-content" }, [
        _c(
          "ul",
          {
            staticClass: "navigation navigation-main",
            attrs: {
              id: "main-menu-navigation",
              "data-menu": "menu-navigation",
            },
          },
          _vm._l(_vm.sidebarItemsValue, function (item, index) {
            return _c(
              "li",
              {
                key: index,
                staticClass: "nav-item",
                class: {
                  "has-sub":
                    typeof item.children != "undefined" &&
                    item.children.length > 0,
                  open: _vm.clickedIndex == index,
                },
                on: {
                  click: function ($event) {
                    return _vm.showChildren(index)
                  },
                },
              },
              [
                [
                  typeof item.children != "undefined" &&
                  item.children.length > 0
                    ? _c(
                        "a",
                        { attrs: { href: "javascript:void(0)" } },
                        [
                          [
                            typeof item.imageIcon == "undefined"
                              ? _c("i", {
                                  class: item.iconClasses,
                                  attrs: { "aria-hidden": "true" },
                                })
                              : _c("img", {
                                  attrs: {
                                    draggable: "false",
                                    src: item.imageIcon,
                                  },
                                }),
                          ],
                          _vm._v(
                            "\n                        " +
                              _vm._s(item.name) +
                              "\n                    "
                          ),
                        ],
                        2
                      )
                    : _c(
                        "router-link",
                        {
                          attrs: {
                            to: {
                              name: item.componentName,
                              params: item.defaultParams,
                            },
                            exact: "",
                          },
                        },
                        [
                          [
                            typeof item.imageIcon == "undefined"
                              ? _c("i", {
                                  class: item.iconClasses,
                                  attrs: { "aria-hidden": "true" },
                                })
                              : _c("img", {
                                  attrs: {
                                    draggable: "false",
                                    src: item.imageIcon,
                                  },
                                }),
                          ],
                          _vm._v(" "),
                          _c(
                            "span",
                            {
                              staticClass: "menu-title",
                              attrs: { "data-i18n": "" },
                            },
                            [_vm._v(_vm._s(item.name))]
                          ),
                        ],
                        2
                      ),
                ],
                _vm._v(" "),
                typeof item.children != "undefined" && item.children.length > 0
                  ? _c(
                      "ul",
                      { staticClass: "menu-content" },
                      _vm._l(item.children, function (child, childIndex) {
                        return _c(
                          "li",
                          [
                            _c(
                              "router-link",
                              {
                                staticClass: "menu-item",
                                attrs: {
                                  to: {
                                    name: child.componentName,
                                    params: child.defaultParams,
                                  },
                                  exact: "",
                                },
                              },
                              [
                                [
                                  typeof item.imageIcon == "undefined"
                                    ? _c("i", {
                                        class: item.iconClasses,
                                        attrs: { "aria-hidden": "true" },
                                      })
                                    : _c("img", {
                                        attrs: {
                                          draggable: "false",
                                          src: item.imageIcon,
                                        },
                                      }),
                                ],
                                _vm._v(" "),
                                _c(
                                  "span",
                                  {
                                    staticClass: "menu-title",
                                    attrs: { "data-i18n": "" },
                                  },
                                  [_vm._v(_vm._s(child.name))]
                                ),
                              ],
                              2
                            ),
                          ],
                          1
                        )
                      }),
                      0
                    )
                  : _vm._e(),
              ],
              2
            )
          }),
          0
        ),
      ]),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/coreFiles/components/Sidebar/Sidebar.vue":
/*!***************************************************************!*\
  !*** ./resources/js/coreFiles/components/Sidebar/Sidebar.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Sidebar_vue_vue_type_template_id_9468ba76___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=template&id=9468ba76& */ "./resources/js/coreFiles/components/Sidebar/Sidebar.vue?vue&type=template&id=9468ba76&");
/* harmony import */ var _Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=script&lang=js& */ "./resources/js/coreFiles/components/Sidebar/Sidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Sidebar_vue_vue_type_template_id_9468ba76___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Sidebar_vue_vue_type_template_id_9468ba76___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/coreFiles/components/Sidebar/Sidebar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/coreFiles/components/Sidebar/Sidebar.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/coreFiles/components/Sidebar/Sidebar.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Sidebar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/coreFiles/components/Sidebar/Sidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/coreFiles/components/Sidebar/Sidebar.vue?vue&type=template&id=9468ba76&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/coreFiles/components/Sidebar/Sidebar.vue?vue&type=template&id=9468ba76& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_9468ba76___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Sidebar.vue?vue&type=template&id=9468ba76& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/coreFiles/components/Sidebar/Sidebar.vue?vue&type=template&id=9468ba76&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_9468ba76___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_9468ba76___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);