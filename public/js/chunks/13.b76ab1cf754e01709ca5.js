(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/coreFiles/components/BellNotification.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/coreFiles/components/BellNotification.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    viewAllLink: {
      type: String,
      // String, Number, Boolean, Function, Object, Array
      required: false,
      "default": 'admin.notifications.index'
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])('admin', ['bell_notifications', 'notification_count'])),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])('admin', ['store'])), {}, {
    markRead: function markRead(id) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var params, _yield$_this$store, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                params = {
                  route: route('admin.notification.markRead', {
                    notification: id
                  }),
                  method: 'PUT',
                  mutation: 'MARK_NOTIFICATION_READ',
                  variable: 'notification'
                };
                _context.next = 3;
                return _this.store(params);

              case 3:
                _yield$_this$store = _context.sent;
                data = _yield$_this$store.data;

                if (data.status) {
                  _this.$snotify.success(data.msg);
                }

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/coreFiles/components/BellNotification.vue?vue&type=template&id=1c9b5882&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/coreFiles/components/BellNotification.vue?vue&type=template&id=1c9b5882& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
  return _c("li", { staticClass: "dropdown dropdown-notification nav-item" }, [
    _c(
      "a",
      {
        staticClass: "nav-link nav-link-label ",
        attrs: { href: "#", "data-toggle": "dropdown" },
      },
      [
        _c("i", { staticClass: "fa fa-bell" }, [
          _c(
            "span",
            {
              staticClass:
                "badge badge-pill badge-default badge-danger badge-default badge-up",
            },
            [_vm._v(_vm._s(_vm.notification_count))]
          ),
        ]),
      ]
    ),
    _vm._v(" "),
    _c(
      "ul",
      { staticClass: "dropdown-menu dropdown-menu-media dropdown-menu-right" },
      [
        _c("li", { staticClass: "dropdown-menu-header" }, [
          _c("h6", { staticClass: "dropdown-header m-0" }, [
            _c("span", { staticClass: "grey darken-2" }, [
              _vm._v("Notifications"),
            ]),
            _vm._v(" "),
            _c(
              "span",
              {
                staticClass:
                  "notification-tag badge badge-default bg-dark float-right m-0",
              },
              [_vm._v(_vm._s(_vm.notification_count) + " New")]
            ),
          ]),
        ]),
        _vm._v(" "),
        _c(
          "li",
          {
            staticClass:
              "scrollable-container media-list ps-container ps-theme-dark ps-active-y",
            attrs: { "data-ps-id": "cbae8718-1b84-97ac-6bfa-47d792d8ad89" },
          },
          _vm._l(_vm.bell_notifications, function (notification) {
            return _c("div", { staticClass: "media" }, [
              _vm._m(0, true),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "media-body" },
                [
                  _c(
                    "router-link",
                    { attrs: { to: notification.data.route } },
                    [
                      _c(
                        "p",
                        {
                          staticClass:
                            "notification-text font-small-3 text-muted",
                        },
                        [
                          _c("span", [_vm._v(_vm._s(notification.data.title))]),
                          _c("br"),
                          _vm._v(
                            _vm._s(
                              _vm.formatDate(notification.created_at, "hh:mm A")
                            )
                          ),
                          _c("small", { staticClass: "float-right" }, [
                            _vm._v(
                              _vm._s(_vm.formatDate(notification.created_at))
                            ),
                          ]),
                        ]
                      ),
                    ]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "a",
                {
                  attrs: { href: "javascript:void(0)" },
                  on: {
                    click: function ($event) {
                      return _vm.markRead(notification.id)
                    },
                  },
                },
                [_c("i", { staticClass: "fa fa-eye" })]
              ),
            ])
          }),
          0
        ),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "dropdown-menu-footer" },
          [
            _c(
              "router-link",
              {
                staticClass: "dropdown-item text-muted text-center",
                attrs: { to: { name: _vm.viewAllLink } },
              },
              [_vm._v("View all")]
            ),
          ],
          1
        ),
      ]
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { attrs: { href: "javascript:void(0)" } }, [
      _c("i", { staticClass: "fas fa-bell" }),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/coreFiles/components/BellNotification.vue":
/*!****************************************************************!*\
  !*** ./resources/js/coreFiles/components/BellNotification.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BellNotification_vue_vue_type_template_id_1c9b5882___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BellNotification.vue?vue&type=template&id=1c9b5882& */ "./resources/js/coreFiles/components/BellNotification.vue?vue&type=template&id=1c9b5882&");
/* harmony import */ var _BellNotification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BellNotification.vue?vue&type=script&lang=js& */ "./resources/js/coreFiles/components/BellNotification.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BellNotification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BellNotification_vue_vue_type_template_id_1c9b5882___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BellNotification_vue_vue_type_template_id_1c9b5882___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/coreFiles/components/BellNotification.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/coreFiles/components/BellNotification.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/coreFiles/components/BellNotification.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BellNotification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./BellNotification.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/coreFiles/components/BellNotification.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BellNotification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/coreFiles/components/BellNotification.vue?vue&type=template&id=1c9b5882&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/coreFiles/components/BellNotification.vue?vue&type=template&id=1c9b5882& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BellNotification_vue_vue_type_template_id_1c9b5882___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./BellNotification.vue?vue&type=template&id=1c9b5882& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/coreFiles/components/BellNotification.vue?vue&type=template&id=1c9b5882&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BellNotification_vue_vue_type_template_id_1c9b5882___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BellNotification_vue_vue_type_template_id_1c9b5882___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);