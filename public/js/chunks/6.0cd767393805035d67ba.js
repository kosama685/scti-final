(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Layouts/Admin/Master.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Layouts/Admin/Master.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views_admin_components_sideBarItems_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../views/admin/components/sideBarItems.js */ "./resources/js/views/admin/components/sideBarItems.js");
//
//
//
//
//
//
//
//
//
//
//
//
//


var TopNavbar = function TopNavbar() {
  return __webpack_require__.e(/*! import() */ 46).then(__webpack_require__.bind(null, /*! ../../views/admin/components/TopNavbar.vue */ "./resources/js/views/admin/components/TopNavbar.vue"));
};

var Sidebar = function Sidebar() {
  return __webpack_require__.e(/*! import() */ 40).then(__webpack_require__.bind(null, /*! ../../coreFiles/components/Sidebar/Sidebar.vue */ "./resources/js/coreFiles/components/Sidebar/Sidebar.vue"));
};

var ChangePassword = function ChangePassword() {
  return Promise.all(/*! import() */[__webpack_require__.e(9), __webpack_require__.e(7)]).then(__webpack_require__.bind(null, /*! ../../views/admin/components/ChangePassword.vue */ "./resources/js/views/admin/components/ChangePassword.vue"));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      componentKey: 0,
      sidebarItems: _views_admin_components_sideBarItems_js__WEBPACK_IMPORTED_MODULE_0__["default"]
    };
  },
  components: {
    TopNavbar: TopNavbar,
    Sidebar: Sidebar,
    ChangePassword: ChangePassword
  } // created(){
  //     window.location.reload();
  // }

});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Layouts/Admin/Master.vue?vue&type=template&id=aff3de74&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Layouts/Admin/Master.vue?vue&type=template&id=aff3de74& ***!
  \************************************************************************************************************************************************************************************************************/
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
      _c("top-navbar"),
      _vm._v(" "),
      _c("sidebar", { attrs: { sidebarItems: _vm.sidebarItems } }),
      _vm._v(" "),
      _c("change-password", { key: _vm.componentKey }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "app-content content dashboard" },
        [
          _c(
            "transition",
            { attrs: { name: "fade" } },
            [_c("router-view", { key: _vm.$route.fullPath })],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Layouts/Admin/Master.vue":
/*!***********************************************!*\
  !*** ./resources/js/Layouts/Admin/Master.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Master_vue_vue_type_template_id_aff3de74___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Master.vue?vue&type=template&id=aff3de74& */ "./resources/js/Layouts/Admin/Master.vue?vue&type=template&id=aff3de74&");
/* harmony import */ var _Master_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Master.vue?vue&type=script&lang=js& */ "./resources/js/Layouts/Admin/Master.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Master_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Master_vue_vue_type_template_id_aff3de74___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Master_vue_vue_type_template_id_aff3de74___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Layouts/Admin/Master.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Layouts/Admin/Master.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/Layouts/Admin/Master.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Master_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Master.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Layouts/Admin/Master.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Master_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Layouts/Admin/Master.vue?vue&type=template&id=aff3de74&":
/*!******************************************************************************!*\
  !*** ./resources/js/Layouts/Admin/Master.vue?vue&type=template&id=aff3de74& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Master_vue_vue_type_template_id_aff3de74___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Master.vue?vue&type=template&id=aff3de74& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Layouts/Admin/Master.vue?vue&type=template&id=aff3de74&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Master_vue_vue_type_template_id_aff3de74___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Master_vue_vue_type_template_id_aff3de74___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/admin/components/sideBarItems.js":
/*!*************************************************************!*\
  !*** ./resources/js/views/admin/components/sideBarItems.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var sidebarItems = [{
  componentName: 'admin.dashboard',
  iconClasses: 'fa fa-home',
  name: 'Dashboard'
}, {
  componentName: 'AdminHome',
  iconClasses: 'fa fa-user-circle',
  name: 'User Management',
  children: [{
    componentName: 'admin.users.index',
    iconClasses: '',
    name: 'User Listing'
  }, {
    componentName: 'admin.users.business.index',
    iconClasses: '',
    name: 'Business Owner Listing'
  }]
}, {
  componentName: 'admin.job.index',
  iconClasses: 'fa fa-clipboard-list',
  name: 'Job Listing'
}, {
  componentName: 'admin.category.index',
  iconClasses: 'fa fa-clone',
  name: 'Category Management'
}, //  {
//     componentName: 'admin.networkTraining.index',
//     iconClasses: 'fa fa-credit-card',
//     name: 'Network & Training',
// },
{
  componentName: 'admin.subscriptions.index',
  iconClasses: 'fa fa-th-list',
  name: 'Subscription Log'
}, {
  componentName: 'admin.packages.index',
  iconClasses: 'fa fa-window-maximize',
  name: 'Package Management'
}, // {
// 	componentName : 'PaymentLog',
// 	iconClasses : 'fa fa-question-circle',
// 	name : 'Payment Log',
// },
{
  componentName: 'admin.feedback.index',
  iconClasses: 'fa fa-comment',
  name: 'Feedback'
}];
/* harmony default export */ __webpack_exports__["default"] = (sidebarItems);

/***/ })

}]);