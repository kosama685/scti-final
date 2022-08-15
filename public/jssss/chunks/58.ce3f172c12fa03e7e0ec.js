(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[58],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/pages/NetworkTraining/ViewNetworkTraining.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/pages/NetworkTraining/ViewNetworkTraining.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
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
  props: {
    editnetworktrainings: {
      type: Object,
      required: true
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/pages/NetworkTraining/ViewNetworkTraining.vue?vue&type=template&id=2006213c&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/pages/NetworkTraining/ViewNetworkTraining.vue?vue&type=template&id=2006213c& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
    {
      staticClass: "modal fade another-modal view-modal",
      attrs: {
        tabindex: "-1",
        role: "dialog",
        "aria-labelledby": "myLargeModalLabel",
        "aria-hidden": "true"
      }
    },
    [
      _c("div", { staticClass: "modal-dialog modal-lg" }, [
        _c("div", { staticClass: "modal-content" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "payment-modal-main vm-padding" }, [
            _c("div", { staticClass: "payment-modal-inner " }, [
              _vm._m(1),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-12" }, [
                  _c("p", { staticClass: "vm-text" }, [
                    _vm._v(
                      "Training Program " +
                        _vm._s(_vm.editnetworktrainings.program_name)
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-12 d-flex c-f-vm" }, [
                  _c("p", { staticClass: "vm-text" }, [
                    _vm._v("Time: "),
                    _c("span", [_vm._v(_vm._s(_vm.editnetworktrainings.time))])
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "vm-text ml-3" }, [
                    _vm._v("Date: "),
                    _c("span", [
                      _vm._v(
                        _vm._s(_vm.formatDate(_vm.editnetworktrainings.date))
                      )
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-12" }, [
                  _c("p", { staticClass: "vm-text" }, [
                    _vm._v("Charges: "),
                    _c("span", [
                      _vm._v("$" + _vm._s(_vm.editnetworktrainings.charges))
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-12" }, [
                  _c("p", { staticClass: "vm-text" }, [
                    _vm._v("Venue: "),
                    _c("span", [_vm._v(_vm._s(_vm.editnetworktrainings.venue))])
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "description-vm" }, [
                    _vm._v("Description:"),
                    _c("span", [
                      _vm._v(_vm._s(_vm.editnetworktrainings.description))
                    ])
                  ])
                ])
              ])
            ])
          ])
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
    return _c(
      "button",
      {
        staticClass: "close",
        attrs: {
          type: "button",
          "data-dismiss": "modal",
          "aria-label": "Close"
        }
      },
      [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-12 text-center" }, [
        _c("h1", { staticClass: "catHeader m-0" }, [_vm._v("View")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/admin/pages/NetworkTraining/ViewNetworkTraining.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/views/admin/pages/NetworkTraining/ViewNetworkTraining.vue ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ViewNetworkTraining_vue_vue_type_template_id_2006213c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ViewNetworkTraining.vue?vue&type=template&id=2006213c& */ "./resources/js/views/admin/pages/NetworkTraining/ViewNetworkTraining.vue?vue&type=template&id=2006213c&");
/* harmony import */ var _ViewNetworkTraining_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ViewNetworkTraining.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/pages/NetworkTraining/ViewNetworkTraining.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ViewNetworkTraining_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ViewNetworkTraining_vue_vue_type_template_id_2006213c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ViewNetworkTraining_vue_vue_type_template_id_2006213c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/pages/NetworkTraining/ViewNetworkTraining.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/pages/NetworkTraining/ViewNetworkTraining.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/views/admin/pages/NetworkTraining/ViewNetworkTraining.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewNetworkTraining_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ViewNetworkTraining.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/pages/NetworkTraining/ViewNetworkTraining.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewNetworkTraining_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/pages/NetworkTraining/ViewNetworkTraining.vue?vue&type=template&id=2006213c&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/views/admin/pages/NetworkTraining/ViewNetworkTraining.vue?vue&type=template&id=2006213c& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewNetworkTraining_vue_vue_type_template_id_2006213c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ViewNetworkTraining.vue?vue&type=template&id=2006213c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/pages/NetworkTraining/ViewNetworkTraining.vue?vue&type=template&id=2006213c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewNetworkTraining_vue_vue_type_template_id_2006213c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewNetworkTraining_vue_vue_type_template_id_2006213c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);