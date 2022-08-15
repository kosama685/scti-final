(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[97],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/pages/TrainingPrograms/view.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/user/pages/TrainingPrograms/view.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
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
var InnerPageFooter = function InnerPageFooter() {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../../components/InnerPageFooter.vue */ "./resources/js/views/user/components/InnerPageFooter.vue"));
};

var RegisterHeader = function RegisterHeader() {
  return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../../components/RegisterHeader.vue */ "./resources/js/views/user/components/RegisterHeader.vue"));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      networktrainings: {},
      book_button: undefined,
      networkTrainingId: undefined
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
              return _this.getNetworkingProgram();

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  components: {
    InnerPageFooter: InnerPageFooter,
    RegisterHeader: RegisterHeader
  },
  methods: {
    getNetworkingProgram: function getNetworkingProgram() {
      var _arguments = arguments,
          _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var page, res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                page = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : 1;
                _this2.networkTrainingId = _this2.$route.params.id;
                _context2.next = 4;
                return axios.get('/api/user/network/training/getById/' + _this2.networkTrainingId);

              case 4:
                res = _context2.sent;
                _this2.networktrainings = res.data[0];
                _this2.networktrainings.register.length != 0 ? _this2.book_button = false : _this2.book_button = true;
                console.log(_this2.book_button);
                console.log(_this2.networktrainings);

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    bookNetworkTraining: function bookNetworkTraining() {
      var res = axios.get('/api/user/network/training/registerNetworkTraining/' + this.networkTrainingId);

      if (res) {
        this.book_button = false;
        this.$snotify.success('You have registered for this network training.');
      } else {
        this.$snotify.error('Some thing went wrong!');
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/pages/TrainingPrograms/view.vue?vue&type=template&id=738da7ca&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/user/pages/TrainingPrograms/view.vue?vue&type=template&id=738da7ca& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
    [
      _c("register-header"),
      _vm._v(" "),
      _c("section", { staticClass: "create-cv" }, [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row mt-5 mb-2" }, [
            _c(
              "div",
              { staticClass: "col-12 d-flex align-items-center job-head" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "back-a",
                    attrs: { to: { name: "user.trainingProgram.index" } },
                  },
                  [
                    _c("i", {
                      staticClass: "fa fa-arrow-left",
                      attrs: { "aria-hidden": "true" },
                    }),
                    _vm._v(" Back"),
                  ]
                ),
                _vm._v(" "),
                _c("p", { staticClass: "page-heading" }, [
                  _vm._v("View training program"),
                ]),
              ],
              1
            ),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row mt-2" }, [
            _c("div", { staticClass: "col-12" }, [
              _c("div", { staticClass: "card cv-create-card" }, [
                _vm._m(0),
                _vm._v(" "),
                _c("div", { staticClass: "card-body cv-card-body" }, [
                  _c("div", { staticClass: "form-row" }, [
                    _c("div", { staticClass: "col-lg-4 col-md-6 col-12" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { staticClass: "c-light" }, [
                          _vm._v("Training Program Name"),
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "reg-p" }, [
                          _vm._v(_vm._s(_vm.networktrainings.program_name)),
                        ]),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-lg-4 col-md-6 col-12" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { staticClass: "c-light" }, [
                          _vm._v("Time"),
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "reg-p" }, [
                          _vm._v(_vm._s(_vm.networktrainings.time)),
                        ]),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-lg-4 col-md-6 col-12" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { staticClass: "c-light" }, [
                          _vm._v("Date"),
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "reg-p" }, [
                          _vm._v(
                            _vm._s(_vm.formatDate(_vm.networktrainings.date))
                          ),
                        ]),
                      ]),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-row" }, [
                    _c("div", { staticClass: "col-lg-4 col-md-6 col-12" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { staticClass: "c-light" }, [
                          _vm._v("Charges"),
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "reg-p" }, [
                          _vm._v(_vm._s(_vm.networktrainings.charges) + " $ "),
                        ]),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-lg-4 col-md-6 col-12" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { staticClass: "c-light" }, [
                          _vm._v("Booked On"),
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "reg-p" }, [
                          _vm._v(
                            _vm._s(_vm.formatDate(_vm.networktrainings.date))
                          ),
                        ]),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-lg-4 col-md-6 col-12" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { staticClass: "c-light" }, [
                          _vm._v("Venue"),
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "reg-p" }, [
                          _vm._v(_vm._s(_vm.networktrainings.venue)),
                        ]),
                      ]),
                    ]),
                  ]),
                  _vm._v(" "),
                  _vm._m(1),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-row" }, [
                    _c("div", { staticClass: "col-lg-12" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { staticClass: "c-light" }, [
                          _vm._v("Description"),
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "reg-p" }, [
                          _vm._v(_vm._s(_vm.networktrainings.description)),
                        ]),
                      ]),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-row" }, [
                    _c("div", { staticClass: "col-12" }, [
                      _c("div", { staticClass: "button_wrap text-center" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn-cv bloo mr-0",
                            style: _vm.book_button ? "opacity:0" : "opacity:1",
                            on: { click: _vm.bookNetworkTraining },
                          },
                          [_vm._v("Book")]
                        ),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("inner-page-footer"),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header cv-header" }, [
      _c("p", [_vm._v("Personal Information")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-row" }, [
      _c("div", { staticClass: "col-lg-4 col-md-6 col-12" }, [
        _c("div", { staticClass: "form-group" }, [
          _c("label", { staticClass: "c-light" }, [_vm._v("Capacity")]),
          _vm._v(" "),
          _c("p", { staticClass: "reg-p" }, [_vm._v("300+")]),
        ]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/user/pages/TrainingPrograms/view.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/views/user/pages/TrainingPrograms/view.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_vue_vue_type_template_id_738da7ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.vue?vue&type=template&id=738da7ca& */ "./resources/js/views/user/pages/TrainingPrograms/view.vue?vue&type=template&id=738da7ca&");
/* harmony import */ var _view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.vue?vue&type=script&lang=js& */ "./resources/js/views/user/pages/TrainingPrograms/view.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _view_vue_vue_type_template_id_738da7ca___WEBPACK_IMPORTED_MODULE_0__["render"],
  _view_vue_vue_type_template_id_738da7ca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/user/pages/TrainingPrograms/view.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/user/pages/TrainingPrograms/view.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/user/pages/TrainingPrograms/view.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./view.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/pages/TrainingPrograms/view.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/user/pages/TrainingPrograms/view.vue?vue&type=template&id=738da7ca&":
/*!************************************************************************************************!*\
  !*** ./resources/js/views/user/pages/TrainingPrograms/view.vue?vue&type=template&id=738da7ca& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_template_id_738da7ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./view.vue?vue&type=template&id=738da7ca& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/pages/TrainingPrograms/view.vue?vue&type=template&id=738da7ca&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_template_id_738da7ca___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_template_id_738da7ca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);