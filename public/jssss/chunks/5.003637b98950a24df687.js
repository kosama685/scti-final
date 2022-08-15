(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/chat/ChatComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/user/chat/ChatComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
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
// const RegisterHeader = () => import('../../components/RegisterHeader.vue');
// const InnerPageFooter = () => import('../../components/InnerPageFooter.vue');
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {// RegisterHeader,
    // InnerPageFooter
  },
  data: function data() {
    return {
      baseUrl: window.base_url,
      user: window.user,
      soachat: window.soachat,
      ocs: window.ocs,
      init: 1,
      connection: null
    };
  },
  // created(){
  //     console.log("starting connection ");
  //     this.connection = new WebSocket("wss://echo.websocket.org");
  //     this.connection.onopen = function(event){
  //         console.log('new websocket',event);
  //         console.log("successfully connected to echo websocket connection")
  //     }
  //     this.connection.onmessage = function (event) {
  //         console.log('new websocket',event);
  //     }
  // },
  mounted: function mounted() {
    this.initSoachat(); // this.resetMessageCounter();
    //   // Allow window to listen for a postMessage
    // window.addEventListener("message", (event)=>{
    //      console.log(event);
    //       if(event.data.recipiant_id){
    //         axios.post('update-notification-count',{ receipant_id : event.data.recipiant_id, init : 0,});
    //     this.init = 0;
    //     }
    // });
  },
  methods: {
    resetMessageCounter: function resetMessageCounter() {
      axios.post('reset-notification-count', {
        receipant_id: user.uuid
      });
    },
    initSoachat: function initSoachat() {
      console.log("windowu user ", window.localStorage.uuid);
      this.ocs.init({
        appid: "f2fb81f306ba77c5fa902cdbe8a08a4c",
        appkey: "3273067e033b761ba36a31d13c1e2048",
        domain: "sctijobs.com",
        global: this.$route.params.id ? '0' : '1',
        id: window.localStorage.uuid,
        toid: this.$route.params.id ? this.$route.params.id : '',
        element: "#ocs-call-window",
        colorScheme: '0042B9'
      });
    }
  },
  watch: {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/chat/ChatComponent.vue?vue&type=template&id=1248d003&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/user/chat/ChatComponent.vue?vue&type=template&id=1248d003& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("section", { staticClass: "col-12" }, [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row", attrs: { id: "ocs-call-window" } })
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/user/chat/ChatComponent.vue":
/*!********************************************************!*\
  !*** ./resources/js/views/user/chat/ChatComponent.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChatComponent_vue_vue_type_template_id_1248d003___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChatComponent.vue?vue&type=template&id=1248d003& */ "./resources/js/views/user/chat/ChatComponent.vue?vue&type=template&id=1248d003&");
/* harmony import */ var _ChatComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatComponent.vue?vue&type=script&lang=js& */ "./resources/js/views/user/chat/ChatComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChatComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChatComponent_vue_vue_type_template_id_1248d003___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChatComponent_vue_vue_type_template_id_1248d003___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/user/chat/ChatComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/user/chat/ChatComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/user/chat/ChatComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/chat/ChatComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/user/chat/ChatComponent.vue?vue&type=template&id=1248d003&":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/user/chat/ChatComponent.vue?vue&type=template&id=1248d003& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatComponent_vue_vue_type_template_id_1248d003___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatComponent.vue?vue&type=template&id=1248d003& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/chat/ChatComponent.vue?vue&type=template&id=1248d003&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatComponent_vue_vue_type_template_id_1248d003___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatComponent_vue_vue_type_template_id_1248d003___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);