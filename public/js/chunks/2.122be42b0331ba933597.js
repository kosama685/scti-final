(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/components/FullPageFooter.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/user/components/FullPageFooter.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      categories: {}
    };
  },
  created: function created() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.getCategory();

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    getCategory: function getCategory() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios.get('/api/admin/category');

              case 2:
                _this2.categories = _context2.sent.data.data;

              case 3:
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/components/FullPageFooter.vue?vue&type=template&id=7cbfcca6&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/user/components/FullPageFooter.vue?vue&type=template&id=7cbfcca6& ***!
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
  return _c("section", { staticClass: "footer" }, [
    _c("div", { staticClass: "container-fluid p-0" }, [
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          {
            staticClass:
              "col-lg-4 col-md-12 col-12 d-flex justify-content-end position-relative"
          },
          [
            _c("div", { staticClass: "footer-left-wrap" }, [
              _c("img", {
                staticClass: "footer_logo",
                attrs: {
                  src: _vm.base_url + "/assets/user/images/footer-logo.png",
                  alt: ""
                }
              }),
              _vm._v(" "),
              _vm._m(0)
            ]),
            _vm._v(" "),
            _c("img", {
              staticClass: "dots d1",
              attrs: {
                src: _vm.base_url + "/assets/user/images/black-dots.png",
                alt: "",
                srcset: ""
              }
            }),
            _vm._v(" "),
            _c("img", {
              staticClass: "dots d2",
              attrs: {
                src: _vm.base_url + "/assets/user/images/gray-dots.png",
                alt: "",
                srcset: ""
              }
            })
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-8 col-md-12 col-12" }, [
          _c("div", { staticClass: "footer-wrapper" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-6 col-12" }, [
                _c("p", { staticClass: "footer_title" }, [
                  _vm._v(
                    "\n                                Quick Links\n                            "
                  )
                ]),
                _vm._v(" "),
                _c("ul", { staticClass: "footer_links" }, [
                  _c(
                    "li",
                    [
                      _c(
                        "router-link",
                        { attrs: { to: { name: "user.users.index" } } },
                        [_vm._v("Home")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    [
                      _c(
                        "router-link",
                        { attrs: { to: { name: "user.about.index" } } },
                        [_vm._v("About Us")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    [
                      _c(
                        "router-link",
                        { attrs: { to: { name: "user.about.privacy" } } },
                        [_vm._v("Privacy Policy")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    [
                      _c(
                        "router-link",
                        { attrs: { to: { name: "user.about.chain" } } },
                        [_vm._v("Supply chain")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    [
                      _c(
                        "router-link",
                        {
                          attrs: { to: { name: "user.about.termConditions" } }
                        },
                        [_vm._v("Term and conditions")]
                      )
                    ],
                    1
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _vm._m(1),
            _vm._v(" "),
            _vm._m(2)
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
    return _c("ul", { staticClass: "social_links" }, [
      _c("li", [
        _c(
          "a",
          { attrs: { href: "https://www.facebook.com/ProfessionNet/" } },
          [
            _c("i", {
              staticClass: "fa fa-facebook",
              attrs: { "aria-hidden": "true" }
            })
          ]
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { attrs: { href: "https://twitter.com/ProfessionNet" } }, [
          _c("i", {
            staticClass: "fa fa-twitter",
            attrs: { "aria-hidden": "true" }
          })
        ])
      ]),
      _vm._v(" "),
      _c("li", [
        _c(
          "a",
          { attrs: { href: "https://www.instagram.com/professionnetuk/" } },
          [
            _c("i", {
              staticClass: "fa fa-instagram",
              attrs: { "aria-hidden": "true" }
            })
          ]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-12" }, [
        _c("div", { staticClass: "separator-1" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-12" }, [
        _c("p", { staticClass: "copyright" }, [
          _vm._v("Copyright @ 2020 SCTI Jobs. All rights reserved.")
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/user/components/FullPageFooter.vue":
/*!***************************************************************!*\
  !*** ./resources/js/views/user/components/FullPageFooter.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FullPageFooter_vue_vue_type_template_id_7cbfcca6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FullPageFooter.vue?vue&type=template&id=7cbfcca6& */ "./resources/js/views/user/components/FullPageFooter.vue?vue&type=template&id=7cbfcca6&");
/* harmony import */ var _FullPageFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FullPageFooter.vue?vue&type=script&lang=js& */ "./resources/js/views/user/components/FullPageFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FullPageFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FullPageFooter_vue_vue_type_template_id_7cbfcca6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FullPageFooter_vue_vue_type_template_id_7cbfcca6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/user/components/FullPageFooter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/user/components/FullPageFooter.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/user/components/FullPageFooter.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FullPageFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FullPageFooter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/components/FullPageFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FullPageFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/user/components/FullPageFooter.vue?vue&type=template&id=7cbfcca6&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/views/user/components/FullPageFooter.vue?vue&type=template&id=7cbfcca6& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FullPageFooter_vue_vue_type_template_id_7cbfcca6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FullPageFooter.vue?vue&type=template&id=7cbfcca6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/components/FullPageFooter.vue?vue&type=template&id=7cbfcca6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FullPageFooter_vue_vue_type_template_id_7cbfcca6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FullPageFooter_vue_vue_type_template_id_7cbfcca6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);