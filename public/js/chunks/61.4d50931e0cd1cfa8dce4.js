(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[61],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/pages/PackageManagement/EditPackageManagement.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/pages/PackageManagement/EditPackageManagement.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    var _ref;

    return _ref = {
      packages: {},
      package_name: '',
      charges: '',
      duration: '',
      package_description: '',
      package_id: '',
      userType: 0,
      descriptions: [],
      packages_id: []
    }, _defineProperty(_ref, "charges", []), _defineProperty(_ref, "package_name", []), _defineProperty(_ref, "duration", []), _defineProperty(_ref, "package_description", []), _defineProperty(_ref, "isHidden", false), _ref;
  },
  created: function created() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.getPackage();

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    getPackage: function getPackage() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.userType = _this2.$route.params.id; // console.log(this.userType);

                _context2.next = 3;
                return axios.get("/api/admin/package/".concat(_this2.$route.params.id));

              case 3:
                _this2.packages = _context2.sent.data.data;

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    editPackage_2: function editPackage_2() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var fd, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                console.log('function 1');
                fd = new FormData(_this3.$refs.EditPackageForm);

                _this3.descriptions.push(_this3.packages[0].description);

                _this3.descriptions.push(_this3.packages[1].description); // this.descriptions.push(this.packages[2].description);


                _this3.packages_id.push(_this3.packages[0].id);

                _this3.packages_id.push(_this3.packages[1].id); // this.packages_id.push(this.packages[2].id);


                _this3.charges.push(_this3.packages[0].charges);

                _this3.charges.push(_this3.packages[1].charges); // this.charges.push(this.packages[2].charges);


                _this3.package_name.push(_this3.packages[0].package_name);

                _this3.package_name.push(_this3.packages[1].package_name); // this.package_name.push(this.packages[2].package_name);


                _this3.duration.push(_this3.packages[0].duration);

                _this3.duration.push(_this3.packages[1].duration); // console.log(this.packages_id);


                console.log('duratinos is', _this3.duration);
                console.log("Package name is ", _this3.package_name);
                fd.append('packages_id', _this3.packages_id);
                fd.append('package_name', _this3.package_name);
                fd.append('charges', _this3.charges);
                fd.append('duration', _this3.duration);
                fd.append('package_description', _this3.descriptions);
                console.log("package_name is ", _this3.package_name);
                _context3.next = 22;
                return axios.post('/api/admin/package/update', fd);

              case 22:
                response = _context3.sent;
                console.log(response);

                _this3.$snotify.success(response.data.message);

              case 25:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    editPackage: function editPackage() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var fd, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                console.log('function 2'); // alert(this.duration);

                fd = new FormData(_this4.$refs.EditPackageForm);

                _this4.descriptions.push(_this4.packages[0].description);

                _this4.packages_id.push(_this4.packages[0].id);

                _this4.charges.push(_this4.packages[0].charges);

                _this4.package_name.push(_this4.packages[0].package_name);

                _this4.duration.push(_this4.packages[0].duration);

                _this4.descriptions.push(_this4.packages[1].description);

                _this4.packages_id.push(_this4.packages[1].id);

                _this4.charges.push(_this4.packages[1].charges);

                _this4.package_name.push(_this4.packages[1].package_name);

                _this4.duration.push(_this4.packages[1].duration);

                console.log('duratinos is', _this4.duration); // console.log(this.packages_id);
                // console.log("package name is ",this.package_name);

                fd.append('packages_id', _this4.packages_id);
                fd.append('package_name', _this4.package_name);
                fd.append('charges', _this4.charges);
                fd.append('duration', _this4.duration);
                fd.append('package_description', _this4.descriptions);
                console.log("Duration is ", _this4.descriptions);
                _context4.next = 21;
                return axios.post('/api/admin/package/update', fd);

              case 21:
                response = _context4.sent;
                console.log(response);

                _this4.$snotify.success(response.data.message);

              case 24:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/pages/PackageManagement/EditPackageManagement.vue?vue&type=template&id=1b264d42&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/pages/PackageManagement/EditPackageManagement.vue?vue&type=template&id=1b264d42& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "content-wrapper" }, [
    _c("div", { staticClass: "content-body" }, [
      _c("section", { attrs: { id: "configuration" } }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-12" }, [
            _c("div", { staticClass: "card rounded pad-20" }, [
              _c(
                "div",
                { staticClass: "card-content collapse show" },
                [
                  _c("ValidationObserver", {
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function (ref) {
                          var handleSubmit = ref.handleSubmit
                          return [
                            _c("div", { staticClass: "card-body" }, [
                              _c(
                                "div",
                                { staticClass: "row align-items-center" },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "col-md-6 col-12" },
                                    [
                                      _c(
                                        "h1",
                                        { staticClass: "m-0 ch" },
                                        [
                                          _c(
                                            "router-link",
                                            {
                                              attrs: {
                                                to: {
                                                  name: "PackageManagement",
                                                },
                                              },
                                            },
                                            [
                                              _c("i", {
                                                staticClass: "fa fa-angle-left",
                                              }),
                                              _vm._v("Package Management"),
                                            ]
                                          ),
                                        ],
                                        1
                                      ),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass: "col-md-6 col-12 text-right",
                                    },
                                    [
                                      _vm.isHidden
                                        ? _c(
                                            "button",
                                            {
                                              staticClass:
                                                "green-btn m-0 text-center e-bt",
                                              attrs: { type: "submit" },
                                              on: {
                                                click: function ($event) {
                                                  return _vm.editPackage()
                                                },
                                              },
                                            },
                                            [_vm._v("Update")]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      !_vm.isHidden
                                        ? _c(
                                            "button",
                                            {
                                              staticClass:
                                                "green-btn m-0 text-center e-bt",
                                              attrs: { type: "submit" },
                                              on: {
                                                click: function ($event) {
                                                  return _vm.editPackage_2()
                                                },
                                              },
                                            },
                                            [_vm._v("Update")]
                                          )
                                        : _vm._e(),
                                    ]
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c("nav", [
                                _c(
                                  "div",
                                  {
                                    staticClass: "nav nav-tabs",
                                    attrs: { id: "nav-tab", role: "tablist" },
                                  },
                                  [
                                    _c(
                                      "a",
                                      {
                                        class:
                                          _vm.userType == 0
                                            ? "nav-item nav-link "
                                            : "nav-item nav-link",
                                        attrs: {
                                          id: "nav-user-tab",
                                          "data-toggle": "tab",
                                          href: "#nav-user",
                                          role: "tab",
                                          "aria-controls": "nav-user",
                                          "aria-selected": "true",
                                        },
                                        on: {
                                          click: function ($event) {
                                            _vm.isHidden = true
                                          },
                                        },
                                      },
                                      [_vm._v("Users")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "a",
                                      {
                                        class:
                                          _vm.userType == 1
                                            ? "nav-item nav-link "
                                            : "nav-item nav-link",
                                        attrs: {
                                          id: "nav-employer-tab",
                                          "data-toggle": "tab",
                                          href: "#nav-employer",
                                          role: "tab",
                                          "aria-controls": "nav-employer",
                                          "aria-selected": "false",
                                        },
                                        on: {
                                          click: function ($event) {
                                            _vm.isHidden = !_vm.isHidden
                                          },
                                        },
                                      },
                                      [_vm._v("Business Owners")]
                                    ),
                                  ]
                                ),
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass: "tab-content",
                                  attrs: { id: "nav-tabContent" },
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass: "tab-pane fade show active",
                                      attrs: {
                                        id: "nav-user",
                                        role: "tabpanel",
                                        "aria-labelledby": "nav-user-tab",
                                      },
                                    },
                                    _vm._l(_vm.packages, function (pk, index) {
                                      return _c(
                                        "div",
                                        {
                                          key: index,
                                          staticClass:
                                            "card collapse-icon accordion-icon-rotate user_prof_acc",
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass: "card-header",
                                              attrs: {
                                                id: "headingCollapse12",
                                              },
                                            },
                                            [
                                              _c(
                                                "a",
                                                {
                                                  staticClass:
                                                    "card-title lead ",
                                                  attrs: {
                                                    "data-toggle": "collapse",
                                                    href: "#collapse12",
                                                    "aria-expanded": "true",
                                                    "aria-controls":
                                                      "collapse12",
                                                  },
                                                },
                                                [
                                                  _vm._v(
                                                    "Package 0" + _vm._s(index)
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass: "collapse show",
                                              attrs: {
                                                id: "collapse12",
                                                role: "tabpanel",
                                                "aria-labelledby":
                                                  "headingCollapse12",
                                                "aria-expanded": "true",
                                              },
                                            },
                                            [
                                              _c(
                                                "div",
                                                { staticClass: "card-content" },
                                                [
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "card-body mt-sm-0 mt-2",
                                                    },
                                                    [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "row align-items-center",
                                                        },
                                                        [
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "col-lg-3 col-md-3 col-12 t-c",
                                                            },
                                                            [
                                                              _c(
                                                                "p",
                                                                {
                                                                  staticClass:
                                                                    "fieldName",
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "Package Name"
                                                                  ),
                                                                ]
                                                              ),
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "col-lg-3 col-md-5 col-12 t-c",
                                                            },
                                                            [
                                                              _c(
                                                                "ValidationProvider",
                                                                {
                                                                  attrs: {
                                                                    name: "package_name",
                                                                    rules:
                                                                      "required",
                                                                  },
                                                                  scopedSlots:
                                                                    _vm._u(
                                                                      [
                                                                        {
                                                                          key: "default",
                                                                          fn: function (
                                                                            ref
                                                                          ) {
                                                                            var errors =
                                                                              ref.errors
                                                                            return [
                                                                              _c(
                                                                                "input",
                                                                                {
                                                                                  directives:
                                                                                    [
                                                                                      {
                                                                                        name: "model",
                                                                                        rawName:
                                                                                          "v-model",
                                                                                        value:
                                                                                          pk.package_name,
                                                                                        expression:
                                                                                          "pk.package_name",
                                                                                      },
                                                                                    ],
                                                                                  staticClass:
                                                                                    "form-control cat-input input-pckg",
                                                                                  attrs:
                                                                                    {
                                                                                      type: "text",
                                                                                      name: "package_name[]",
                                                                                    },
                                                                                  domProps:
                                                                                    {
                                                                                      value:
                                                                                        pk.package_name,
                                                                                    },
                                                                                  on: {
                                                                                    input:
                                                                                      function (
                                                                                        $event
                                                                                      ) {
                                                                                        if (
                                                                                          $event
                                                                                            .target
                                                                                            .composing
                                                                                        ) {
                                                                                          return
                                                                                        }
                                                                                        _vm.$set(
                                                                                          pk,
                                                                                          "package_name",
                                                                                          $event
                                                                                            .target
                                                                                            .value
                                                                                        )
                                                                                      },
                                                                                  },
                                                                                }
                                                                              ),
                                                                              _vm._v(
                                                                                " "
                                                                              ),
                                                                              _c(
                                                                                "span",
                                                                                {
                                                                                  staticClass:
                                                                                    "text-danger",
                                                                                },
                                                                                [
                                                                                  _vm._v(
                                                                                    _vm._s(
                                                                                      errors[0]
                                                                                    )
                                                                                  ),
                                                                                ]
                                                                              ),
                                                                            ]
                                                                          },
                                                                        },
                                                                      ],
                                                                      null,
                                                                      true
                                                                    ),
                                                                }
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "row align-items-center mt-2",
                                                        },
                                                        [
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "col-lg-3 col-md-3 col-12 t-c",
                                                            },
                                                            [
                                                              _c(
                                                                "p",
                                                                {
                                                                  staticClass:
                                                                    "fieldName",
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "Package Description"
                                                                  ),
                                                                ]
                                                              ),
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "col-lg-12 col-md-5 col-12 t-c",
                                                            },
                                                            [
                                                              _c(
                                                                "ValidationProvider",
                                                                {
                                                                  attrs: {
                                                                    name: "description",
                                                                    rules:
                                                                      "required",
                                                                  },
                                                                  scopedSlots:
                                                                    _vm._u(
                                                                      [
                                                                        {
                                                                          key: "default",
                                                                          fn: function (
                                                                            ref
                                                                          ) {
                                                                            var errors =
                                                                              ref.errors
                                                                            return [
                                                                              _c(
                                                                                "quill-editor",
                                                                                {
                                                                                  staticClass:
                                                                                    "form-control cat-input input-pckg",
                                                                                  attrs:
                                                                                    {
                                                                                      name: "package_description[]",
                                                                                    },
                                                                                  model:
                                                                                    {
                                                                                      value:
                                                                                        pk.description,
                                                                                      callback:
                                                                                        function (
                                                                                          $$v
                                                                                        ) {
                                                                                          _vm.$set(
                                                                                            pk,
                                                                                            "description",
                                                                                            $$v
                                                                                          )
                                                                                        },
                                                                                      expression:
                                                                                        "pk.description",
                                                                                    },
                                                                                }
                                                                              ),
                                                                              _vm._v(
                                                                                " "
                                                                              ),
                                                                              _c(
                                                                                "span",
                                                                                {
                                                                                  staticClass:
                                                                                    "text-danger",
                                                                                },
                                                                                [
                                                                                  _vm._v(
                                                                                    _vm._s(
                                                                                      errors[0]
                                                                                    )
                                                                                  ),
                                                                                ]
                                                                              ),
                                                                            ]
                                                                          },
                                                                        },
                                                                      ],
                                                                      null,
                                                                      true
                                                                    ),
                                                                }
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "row align-items-center mt-2",
                                                        },
                                                        [
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "col-lg-3 col-md-3 col-12 t-c",
                                                            },
                                                            [
                                                              _c(
                                                                "p",
                                                                {
                                                                  staticClass:
                                                                    "fieldName",
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "Charges"
                                                                  ),
                                                                ]
                                                              ),
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "col-lg-3 col-md-5 col-12 t-c ",
                                                            },
                                                            [
                                                              _c(
                                                                "ValidationProvider",
                                                                {
                                                                  attrs: {
                                                                    name: "charges",
                                                                    rules:
                                                                      "required",
                                                                  },
                                                                  scopedSlots:
                                                                    _vm._u(
                                                                      [
                                                                        {
                                                                          key: "default",
                                                                          fn: function (
                                                                            ref
                                                                          ) {
                                                                            var errors =
                                                                              ref.errors
                                                                            return [
                                                                              _c(
                                                                                "input",
                                                                                {
                                                                                  directives:
                                                                                    [
                                                                                      {
                                                                                        name: "model",
                                                                                        rawName:
                                                                                          "v-model",
                                                                                        value:
                                                                                          pk.charges,
                                                                                        expression:
                                                                                          "pk.charges",
                                                                                      },
                                                                                    ],
                                                                                  staticClass:
                                                                                    "form-control cat-input input-pckg",
                                                                                  attrs:
                                                                                    {
                                                                                      type: "text",
                                                                                      name: "charges[]",
                                                                                    },
                                                                                  domProps:
                                                                                    {
                                                                                      value:
                                                                                        pk.charges,
                                                                                    },
                                                                                  on: {
                                                                                    input:
                                                                                      function (
                                                                                        $event
                                                                                      ) {
                                                                                        if (
                                                                                          $event
                                                                                            .target
                                                                                            .composing
                                                                                        ) {
                                                                                          return
                                                                                        }
                                                                                        _vm.$set(
                                                                                          pk,
                                                                                          "charges",
                                                                                          $event
                                                                                            .target
                                                                                            .value
                                                                                        )
                                                                                      },
                                                                                  },
                                                                                }
                                                                              ),
                                                                              _vm._v(
                                                                                " "
                                                                              ),
                                                                              _c(
                                                                                "span",
                                                                                {
                                                                                  staticClass:
                                                                                    "text-danger",
                                                                                },
                                                                                [
                                                                                  _vm._v(
                                                                                    _vm._s(
                                                                                      errors[0]
                                                                                    )
                                                                                  ),
                                                                                ]
                                                                              ),
                                                                            ]
                                                                          },
                                                                        },
                                                                      ],
                                                                      null,
                                                                      true
                                                                    ),
                                                                }
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "row align-items-center mt-2",
                                                        },
                                                        [
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "col-lg-3 col-md-3 col-12 t-c",
                                                            },
                                                            [
                                                              _c(
                                                                "p",
                                                                {
                                                                  staticClass:
                                                                    "fieldName",
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "Durations"
                                                                  ),
                                                                ]
                                                              ),
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "col-lg-3 col-md-5 col-12 t-c ",
                                                            },
                                                            [
                                                              _c(
                                                                "ValidationProvider",
                                                                {
                                                                  attrs: {
                                                                    name: "duration",
                                                                    rules:
                                                                      "required",
                                                                  },
                                                                  scopedSlots:
                                                                    _vm._u(
                                                                      [
                                                                        {
                                                                          key: "default",
                                                                          fn: function (
                                                                            ref
                                                                          ) {
                                                                            var errors =
                                                                              ref.errors
                                                                            return [
                                                                              _c(
                                                                                "input",
                                                                                {
                                                                                  directives:
                                                                                    [
                                                                                      {
                                                                                        name: "model",
                                                                                        rawName:
                                                                                          "v-model",
                                                                                        value:
                                                                                          pk.duration,
                                                                                        expression:
                                                                                          "pk.duration",
                                                                                      },
                                                                                    ],
                                                                                  staticClass:
                                                                                    "form-control cat-input input-pckg",
                                                                                  attrs:
                                                                                    {
                                                                                      type: "number",
                                                                                      name: "duration[]",
                                                                                      max: "12",
                                                                                    },
                                                                                  domProps:
                                                                                    {
                                                                                      value:
                                                                                        pk.duration,
                                                                                    },
                                                                                  on: {
                                                                                    input:
                                                                                      function (
                                                                                        $event
                                                                                      ) {
                                                                                        if (
                                                                                          $event
                                                                                            .target
                                                                                            .composing
                                                                                        ) {
                                                                                          return
                                                                                        }
                                                                                        _vm.$set(
                                                                                          pk,
                                                                                          "duration",
                                                                                          $event
                                                                                            .target
                                                                                            .value
                                                                                        )
                                                                                      },
                                                                                  },
                                                                                }
                                                                              ),
                                                                              _vm._v(
                                                                                " "
                                                                              ),
                                                                              _c(
                                                                                "span",
                                                                                {
                                                                                  staticClass:
                                                                                    "text-danger",
                                                                                },
                                                                                [
                                                                                  _vm._v(
                                                                                    _vm._s(
                                                                                      errors[0]
                                                                                    )
                                                                                  ),
                                                                                ]
                                                                              ),
                                                                            ]
                                                                          },
                                                                        },
                                                                      ],
                                                                      null,
                                                                      true
                                                                    ),
                                                                }
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c("ValidationProvider", {
                                                        attrs: {
                                                          name: "package_id",
                                                        },
                                                        scopedSlots: _vm._u(
                                                          [
                                                            {
                                                              key: "default",
                                                              fn: function (
                                                                ref
                                                              ) {
                                                                var errors =
                                                                  ref.errors
                                                                return [
                                                                  _c("input", {
                                                                    directives:
                                                                      [
                                                                        {
                                                                          name: "model",
                                                                          rawName:
                                                                            "v-model",
                                                                          value:
                                                                            pk.id,
                                                                          expression:
                                                                            "pk.id",
                                                                        },
                                                                      ],
                                                                    attrs: {
                                                                      type: "hidden",
                                                                      name: "package_id[]",
                                                                    },
                                                                    domProps: {
                                                                      value:
                                                                        pk.id,
                                                                    },
                                                                    on: {
                                                                      input:
                                                                        function (
                                                                          $event
                                                                        ) {
                                                                          if (
                                                                            $event
                                                                              .target
                                                                              .composing
                                                                          ) {
                                                                            return
                                                                          }
                                                                          _vm.$set(
                                                                            pk,
                                                                            "id",
                                                                            $event
                                                                              .target
                                                                              .value
                                                                          )
                                                                        },
                                                                    },
                                                                  }),
                                                                  _vm._v(" "),
                                                                  _c(
                                                                    "span",
                                                                    {
                                                                      staticClass:
                                                                        "text-danger",
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        _vm._s(
                                                                          errors[0]
                                                                        )
                                                                      ),
                                                                    ]
                                                                  ),
                                                                ]
                                                              },
                                                            },
                                                          ],
                                                          null,
                                                          true
                                                        ),
                                                      }),
                                                    ],
                                                    1
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                        ]
                                      )
                                    }),
                                    0
                                  ),
                                ]
                              ),
                            ]),
                          ]
                        },
                      },
                    ]),
                  }),
                ],
                1
              ),
            ]),
          ]),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/admin/pages/PackageManagement/EditPackageManagement.vue":
/*!************************************************************************************!*\
  !*** ./resources/js/views/admin/pages/PackageManagement/EditPackageManagement.vue ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditPackageManagement_vue_vue_type_template_id_1b264d42___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditPackageManagement.vue?vue&type=template&id=1b264d42& */ "./resources/js/views/admin/pages/PackageManagement/EditPackageManagement.vue?vue&type=template&id=1b264d42&");
/* harmony import */ var _EditPackageManagement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditPackageManagement.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/pages/PackageManagement/EditPackageManagement.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditPackageManagement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditPackageManagement_vue_vue_type_template_id_1b264d42___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditPackageManagement_vue_vue_type_template_id_1b264d42___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/pages/PackageManagement/EditPackageManagement.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/pages/PackageManagement/EditPackageManagement.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/views/admin/pages/PackageManagement/EditPackageManagement.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditPackageManagement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditPackageManagement.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/pages/PackageManagement/EditPackageManagement.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditPackageManagement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/pages/PackageManagement/EditPackageManagement.vue?vue&type=template&id=1b264d42&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/views/admin/pages/PackageManagement/EditPackageManagement.vue?vue&type=template&id=1b264d42& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditPackageManagement_vue_vue_type_template_id_1b264d42___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditPackageManagement.vue?vue&type=template&id=1b264d42& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/pages/PackageManagement/EditPackageManagement.vue?vue&type=template&id=1b264d42&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditPackageManagement_vue_vue_type_template_id_1b264d42___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditPackageManagement_vue_vue_type_template_id_1b264d42___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);