(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[72],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/businessOwner/pages/Jobs/create.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/businessOwner/pages/Jobs/create.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      category_id: undefined,
      job_title: '',
      company_name: '',
      salary_range: '',
      apply_before: '',
      period_of_employment: '',
      hours_of_work: '',
      address: '',
      country: '',
      state: '',
      city: '',
      zip_code: '',
      job_descriptions: '',
      years_of_experience: '',
      degree: '',
      skill: '',
      remote: '',
      fileUpload: '',
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
    JobCreate: function JobCreate(e) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var fd, response, data, self;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                fd = new FormData(_this2.$refs.JobCreateForm);
                fd.append('apply_before', _this2.apply_before);
                fd.append('remote', _this2.remote);
                fd["delete"]('date');
                _context2.next = 6;
                return axios.post('/api/admin/jobs/create', fd);

              case 6:
                response = _context2.sent;

                if (response.data.data) {
                  data = response.data;
                  console.log(data.message);

                  _this2.$snotify.success(data.message);

                  self = _this2;
                  setTimeout(function () {
                    self.$router.push({
                      name: 'businessOwner.jobs.index'
                    });
                  }, 1000);
                } else {
                  _this2.$snotify.error(response.data.data.message);
                }

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    getCategory: function getCategory() {
      var _arguments = arguments,
          _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var page, res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                page = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : 1;
                _context3.next = 3;
                return axios.get('/api/admin/category?status=1');

              case 3:
                res = _context3.sent;
                _this3.categories = res.data;
                console.log(_this3.categories);

              case 6:
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/businessOwner/pages/Jobs/create.vue?vue&type=template&id=3387e0ff&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/businessOwner/pages/Jobs/create.vue?vue&type=template&id=3387e0ff& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "content-wrapper" }, [
    _c("div", { staticClass: "content-body" }, [
      _c("section", { attrs: { id: "configuration" } }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-12" }, [
            _c("div", { staticClass: "card rounded pad-20" }, [
              _c("div", { staticClass: "card-content collapse show" }, [
                _c(
                  "div",
                  { staticClass: "card-body" },
                  [
                    _vm._m(0),
                    _vm._v(" "),
                    _c("ValidationObserver", {
                      scopedSlots: _vm._u([
                        {
                          key: "default",
                          fn: function(ref) {
                            var handleSubmit = ref.handleSubmit
                            return [
                              _c(
                                "form",
                                {
                                  ref: "JobCreateForm",
                                  staticClass: "create-job",
                                  on: {
                                    submit: function($event) {
                                      $event.preventDefault()
                                      return handleSubmit(_vm.JobCreate)
                                    }
                                  }
                                },
                                [
                                  _c("div", { staticClass: "row mt-2" }, [
                                    _c("div", { staticClass: "col-12" }, [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "card card-createjobs collapse-icon accordion-icon-rotate user_prof_acc bg-qqq"
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass: "card-header",
                                              attrs: { id: "headingCollapse11" }
                                            },
                                            [
                                              _c(
                                                "h3",
                                                {
                                                  staticClass: "card-title lead"
                                                },
                                                [_vm._v("Job Details")]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "collapse show  bg-qqq",
                                              attrs: {
                                                id: "collapse11",
                                                role: "tabpanel",
                                                "aria-labelledby":
                                                  "headingCollapse11"
                                              }
                                            },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass: "card-content "
                                                },
                                                [
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "card-body mt-sm-0 mt-2"
                                                    },
                                                    [
                                                      _c(
                                                        "div",
                                                        { staticClass: "row" },
                                                        [
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "col-xl-3 col-lg-4 col-md-6 col-12 t-c"
                                                            },
                                                            [
                                                              _c(
                                                                "p",
                                                                {
                                                                  staticClass:
                                                                    "fieldName"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "Job Title*"
                                                                  )
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "ValidationProvider",
                                                                {
                                                                  attrs: {
                                                                    name:
                                                                      "Job Name",
                                                                    rules:
                                                                      "required"
                                                                  },
                                                                  scopedSlots: _vm._u(
                                                                    [
                                                                      {
                                                                        key:
                                                                          "default",
                                                                        fn: function(
                                                                          ref
                                                                        ) {
                                                                          var errors =
                                                                            ref.errors
                                                                          return [
                                                                            _c(
                                                                              "input",
                                                                              {
                                                                                directives: [
                                                                                  {
                                                                                    name:
                                                                                      "model",
                                                                                    rawName:
                                                                                      "v-model",
                                                                                    value:
                                                                                      _vm.job_title,
                                                                                    expression:
                                                                                      "job_title"
                                                                                  }
                                                                                ],
                                                                                staticClass:
                                                                                  "u-edit-txt",
                                                                                attrs: {
                                                                                  type:
                                                                                    "text",
                                                                                  name:
                                                                                    "job_title",
                                                                                  placeholder:
                                                                                    "Job Title"
                                                                                },
                                                                                domProps: {
                                                                                  value:
                                                                                    _vm.job_title
                                                                                },
                                                                                on: {
                                                                                  input: function(
                                                                                    $event
                                                                                  ) {
                                                                                    if (
                                                                                      $event
                                                                                        .target
                                                                                        .composing
                                                                                    ) {
                                                                                      return
                                                                                    }
                                                                                    _vm.job_title =
                                                                                      $event.target.value
                                                                                  }
                                                                                }
                                                                              }
                                                                            ),
                                                                            _vm._v(
                                                                              " "
                                                                            ),
                                                                            _c(
                                                                              "span",
                                                                              {
                                                                                staticClass:
                                                                                  "text-danger"
                                                                              },
                                                                              [
                                                                                _vm._v(
                                                                                  _vm._s(
                                                                                    errors[0]
                                                                                  )
                                                                                )
                                                                              ]
                                                                            )
                                                                          ]
                                                                        }
                                                                      }
                                                                    ],
                                                                    null,
                                                                    true
                                                                  )
                                                                }
                                                              )
                                                            ],
                                                            1
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "row mt-0 mt-lg-3"
                                                        },
                                                        [
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "col-xl-3 col-lg-4 col-md-6 col-12 t-c"
                                                            },
                                                            [
                                                              _c(
                                                                "p",
                                                                {
                                                                  staticClass:
                                                                    "fieldName"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "Company Name*"
                                                                  )
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "ValidationProvider",
                                                                {
                                                                  attrs: {
                                                                    name:
                                                                      "Company Name",
                                                                    rules:
                                                                      "required"
                                                                  },
                                                                  scopedSlots: _vm._u(
                                                                    [
                                                                      {
                                                                        key:
                                                                          "default",
                                                                        fn: function(
                                                                          ref
                                                                        ) {
                                                                          var errors =
                                                                            ref.errors
                                                                          return [
                                                                            _c(
                                                                              "input",
                                                                              {
                                                                                directives: [
                                                                                  {
                                                                                    name:
                                                                                      "model",
                                                                                    rawName:
                                                                                      "v-model",
                                                                                    value:
                                                                                      _vm.company_name,
                                                                                    expression:
                                                                                      "company_name"
                                                                                  }
                                                                                ],
                                                                                staticClass:
                                                                                  "u-edit-txt",
                                                                                attrs: {
                                                                                  type:
                                                                                    "text",
                                                                                  name:
                                                                                    "company_name",
                                                                                  placeholder:
                                                                                    "Company Name"
                                                                                },
                                                                                domProps: {
                                                                                  value:
                                                                                    _vm.company_name
                                                                                },
                                                                                on: {
                                                                                  input: function(
                                                                                    $event
                                                                                  ) {
                                                                                    if (
                                                                                      $event
                                                                                        .target
                                                                                        .composing
                                                                                    ) {
                                                                                      return
                                                                                    }
                                                                                    _vm.company_name =
                                                                                      $event.target.value
                                                                                  }
                                                                                }
                                                                              }
                                                                            ),
                                                                            _vm._v(
                                                                              " "
                                                                            ),
                                                                            _c(
                                                                              "span",
                                                                              {
                                                                                staticClass:
                                                                                  "text-danger"
                                                                              },
                                                                              [
                                                                                _vm._v(
                                                                                  _vm._s(
                                                                                    errors[0]
                                                                                  )
                                                                                )
                                                                              ]
                                                                            )
                                                                          ]
                                                                        }
                                                                      }
                                                                    ],
                                                                    null,
                                                                    true
                                                                  )
                                                                }
                                                              )
                                                            ],
                                                            1
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "col-xl-3 col-lg-4 col-md-6 col-12 t-c"
                                                            },
                                                            [
                                                              _c(
                                                                "p",
                                                                {
                                                                  staticClass:
                                                                    "fieldName"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "Salary Range"
                                                                  )
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "ValidationProvider",
                                                                {
                                                                  attrs: {
                                                                    name:
                                                                      "Salary Range"
                                                                  },
                                                                  scopedSlots: _vm._u(
                                                                    [
                                                                      {
                                                                        key:
                                                                          "default",
                                                                        fn: function(
                                                                          ref
                                                                        ) {
                                                                          var errors =
                                                                            ref.errors
                                                                          return [
                                                                            _c(
                                                                              "input",
                                                                              {
                                                                                directives: [
                                                                                  {
                                                                                    name:
                                                                                      "model",
                                                                                    rawName:
                                                                                      "v-model",
                                                                                    value:
                                                                                      _vm.salary_range,
                                                                                    expression:
                                                                                      "salary_range"
                                                                                  }
                                                                                ],
                                                                                staticClass:
                                                                                  "u-edit-txt",
                                                                                attrs: {
                                                                                  type:
                                                                                    "text",
                                                                                  name:
                                                                                    "salary_range",
                                                                                  placeholder:
                                                                                    "�123 - �124"
                                                                                },
                                                                                domProps: {
                                                                                  value:
                                                                                    _vm.salary_range
                                                                                },
                                                                                on: {
                                                                                  input: function(
                                                                                    $event
                                                                                  ) {
                                                                                    if (
                                                                                      $event
                                                                                        .target
                                                                                        .composing
                                                                                    ) {
                                                                                      return
                                                                                    }
                                                                                    _vm.salary_range =
                                                                                      $event.target.value
                                                                                  }
                                                                                }
                                                                              }
                                                                            ),
                                                                            _vm._v(
                                                                              " "
                                                                            ),
                                                                            _c(
                                                                              "span",
                                                                              {
                                                                                staticClass:
                                                                                  "text-danger"
                                                                              },
                                                                              [
                                                                                _vm._v(
                                                                                  _vm._s(
                                                                                    errors[0]
                                                                                  )
                                                                                )
                                                                              ]
                                                                            )
                                                                          ]
                                                                        }
                                                                      }
                                                                    ],
                                                                    null,
                                                                    true
                                                                  )
                                                                }
                                                              )
                                                            ],
                                                            1
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "col-xl-3 col-lg-4 col-md-6 col-12 t-c"
                                                            },
                                                            [
                                                              _c(
                                                                "p",
                                                                {
                                                                  staticClass:
                                                                    "fieldName"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "Apply Before*"
                                                                  )
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "ValidationProvider",
                                                                {
                                                                  attrs: {
                                                                    name:
                                                                      "Apply Before",
                                                                    rules:
                                                                      "required"
                                                                  },
                                                                  scopedSlots: _vm._u(
                                                                    [
                                                                      {
                                                                        key:
                                                                          "default",
                                                                        fn: function(
                                                                          ref
                                                                        ) {
                                                                          var errors =
                                                                            ref.errors
                                                                          return [
                                                                            _c(
                                                                              "date-picker",
                                                                              {
                                                                                staticClass:
                                                                                  "u-edit-txt",
                                                                                attrs: {
                                                                                  id:
                                                                                    "apply-before",
                                                                                  valueType:
                                                                                    "format"
                                                                                },
                                                                                model: {
                                                                                  value:
                                                                                    _vm.apply_before,
                                                                                  callback: function(
                                                                                    $$v
                                                                                  ) {
                                                                                    _vm.apply_before = $$v
                                                                                  },
                                                                                  expression:
                                                                                    "apply_before"
                                                                                }
                                                                              }
                                                                            ),
                                                                            _vm._v(
                                                                              " "
                                                                            ),
                                                                            _c(
                                                                              "span",
                                                                              {
                                                                                staticClass:
                                                                                  "text-danger"
                                                                              },
                                                                              [
                                                                                _vm._v(
                                                                                  _vm._s(
                                                                                    errors[0]
                                                                                  )
                                                                                )
                                                                              ]
                                                                            )
                                                                          ]
                                                                        }
                                                                      }
                                                                    ],
                                                                    null,
                                                                    true
                                                                  )
                                                                }
                                                              )
                                                            ],
                                                            1
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "row mt-0 mt-lg-3"
                                                        },
                                                        [
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "col-xl-3 col-lg-4 col-md-6 col-12 t-c"
                                                            },
                                                            [
                                                              _c(
                                                                "p",
                                                                {
                                                                  staticClass:
                                                                    "fieldName"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "Type *"
                                                                  )
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "ValidationProvider",
                                                                {
                                                                  attrs: {
                                                                    name:
                                                                      "Period of Employment",
                                                                    rules:
                                                                      "required"
                                                                  },
                                                                  scopedSlots: _vm._u(
                                                                    [
                                                                      {
                                                                        key:
                                                                          "default",
                                                                        fn: function(
                                                                          ref
                                                                        ) {
                                                                          var errors =
                                                                            ref.errors
                                                                          return [
                                                                            _c(
                                                                              "select",
                                                                              {
                                                                                directives: [
                                                                                  {
                                                                                    name:
                                                                                      "model",
                                                                                    rawName:
                                                                                      "v-model",
                                                                                    value:
                                                                                      _vm.period_of_employment,
                                                                                    expression:
                                                                                      "period_of_employment"
                                                                                  }
                                                                                ],
                                                                                staticClass:
                                                                                  "job-cat",
                                                                                attrs: {
                                                                                  name:
                                                                                    "period_of_employment",
                                                                                  id:
                                                                                    ""
                                                                                },
                                                                                on: {
                                                                                  change: function(
                                                                                    $event
                                                                                  ) {
                                                                                    var $$selectedVal = Array.prototype.filter
                                                                                      .call(
                                                                                        $event
                                                                                          .target
                                                                                          .options,
                                                                                        function(
                                                                                          o
                                                                                        ) {
                                                                                          return o.selected
                                                                                        }
                                                                                      )
                                                                                      .map(
                                                                                        function(
                                                                                          o
                                                                                        ) {
                                                                                          var val =
                                                                                            "_value" in
                                                                                            o
                                                                                              ? o._value
                                                                                              : o.value
                                                                                          return val
                                                                                        }
                                                                                      )
                                                                                    _vm.period_of_employment = $event
                                                                                      .target
                                                                                      .multiple
                                                                                      ? $$selectedVal
                                                                                      : $$selectedVal[0]
                                                                                  }
                                                                                }
                                                                              },
                                                                              [
                                                                                _c(
                                                                                  "option",
                                                                                  {
                                                                                    attrs: {
                                                                                      value:
                                                                                        "",
                                                                                      selected:
                                                                                        "",
                                                                                      disabled:
                                                                                        ""
                                                                                    }
                                                                                  },
                                                                                  [
                                                                                    _vm._v(
                                                                                      "\n                                                                                    Select\n                                                                                "
                                                                                    )
                                                                                  ]
                                                                                ),
                                                                                _vm._v(
                                                                                  " "
                                                                                ),
                                                                                _c(
                                                                                  "option",
                                                                                  {
                                                                                    attrs: {
                                                                                      value:
                                                                                        "Permanent"
                                                                                    }
                                                                                  },
                                                                                  [
                                                                                    _vm._v(
                                                                                      "Permanent\n                                                                                "
                                                                                    )
                                                                                  ]
                                                                                ),
                                                                                _vm._v(
                                                                                  " "
                                                                                ),
                                                                                _c(
                                                                                  "option",
                                                                                  {
                                                                                    attrs: {
                                                                                      value:
                                                                                        "Contract Based"
                                                                                    }
                                                                                  },
                                                                                  [
                                                                                    _vm._v(
                                                                                      "\n                                                                                    Contract\n                                                                                    Based\n                                                                                "
                                                                                    )
                                                                                  ]
                                                                                ),
                                                                                _vm._v(
                                                                                  " "
                                                                                ),
                                                                                _c(
                                                                                  "option",
                                                                                  {
                                                                                    attrs: {
                                                                                      value:
                                                                                        "parttime"
                                                                                    }
                                                                                  },
                                                                                  [
                                                                                    _vm._v(
                                                                                      "Part Time\n                                                                                "
                                                                                    )
                                                                                  ]
                                                                                )
                                                                              ]
                                                                            ),
                                                                            _vm._v(
                                                                              " "
                                                                            ),
                                                                            _c(
                                                                              "span",
                                                                              {
                                                                                staticClass:
                                                                                  "text-danger"
                                                                              },
                                                                              [
                                                                                _vm._v(
                                                                                  _vm._s(
                                                                                    errors[0]
                                                                                  )
                                                                                )
                                                                              ]
                                                                            )
                                                                          ]
                                                                        }
                                                                      }
                                                                    ],
                                                                    null,
                                                                    true
                                                                  )
                                                                }
                                                              )
                                                            ],
                                                            1
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "col-xl-3 col-lg-4 col-md-6 col-12 t-c"
                                                            },
                                                            [
                                                              _c(
                                                                "p",
                                                                {
                                                                  staticClass:
                                                                    "fieldName"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "Remote"
                                                                  )
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c("input", {
                                                                directives: [
                                                                  {
                                                                    name:
                                                                      "model",
                                                                    rawName:
                                                                      "v-model",
                                                                    value:
                                                                      _vm.remote,
                                                                    expression:
                                                                      "remote"
                                                                  }
                                                                ],
                                                                attrs: {
                                                                  type:
                                                                    "checkbox",
                                                                  name: "remote"
                                                                },
                                                                domProps: {
                                                                  checked: Array.isArray(
                                                                    _vm.remote
                                                                  )
                                                                    ? _vm._i(
                                                                        _vm.remote,
                                                                        null
                                                                      ) > -1
                                                                    : _vm.remote
                                                                },
                                                                on: {
                                                                  change: function(
                                                                    $event
                                                                  ) {
                                                                    var $$a =
                                                                        _vm.remote,
                                                                      $$el =
                                                                        $event.target,
                                                                      $$c = $$el.checked
                                                                        ? true
                                                                        : false
                                                                    if (
                                                                      Array.isArray(
                                                                        $$a
                                                                      )
                                                                    ) {
                                                                      var $$v = null,
                                                                        $$i = _vm._i(
                                                                          $$a,
                                                                          $$v
                                                                        )
                                                                      if (
                                                                        $$el.checked
                                                                      ) {
                                                                        $$i <
                                                                          0 &&
                                                                          (_vm.remote = $$a.concat(
                                                                            [
                                                                              $$v
                                                                            ]
                                                                          ))
                                                                      } else {
                                                                        $$i >
                                                                          -1 &&
                                                                          (_vm.remote = $$a
                                                                            .slice(
                                                                              0,
                                                                              $$i
                                                                            )
                                                                            .concat(
                                                                              $$a.slice(
                                                                                $$i +
                                                                                  1
                                                                              )
                                                                            ))
                                                                      }
                                                                    } else {
                                                                      _vm.remote = $$c
                                                                    }
                                                                  }
                                                                }
                                                              })
                                                            ]
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  )
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass: "card-header",
                                              attrs: { id: "headingCollapse12" }
                                            },
                                            [
                                              _c(
                                                "h3",
                                                {
                                                  staticClass:
                                                    "card-title lead "
                                                },
                                                [_vm._v("Job Location")]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "collapse show  bg-qqq",
                                              attrs: {
                                                id: "collapse12",
                                                role: "tabpanel",
                                                "aria-labelledby":
                                                  "headingCollapse12"
                                              }
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
                                                        "card-body mt-sm-0 mt-2"
                                                    },
                                                    [
                                                      _c(
                                                        "div",
                                                        { staticClass: "row" },
                                                        [
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "col-xl-3 col-lg-4 col-md-6 col-12 t-c"
                                                            },
                                                            [
                                                              _c(
                                                                "p",
                                                                {
                                                                  staticClass:
                                                                    "fieldName"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "Address*"
                                                                  )
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "ValidationProvider",
                                                                {
                                                                  attrs: {
                                                                    name:
                                                                      "Address",
                                                                    rules:
                                                                      "required"
                                                                  },
                                                                  scopedSlots: _vm._u(
                                                                    [
                                                                      {
                                                                        key:
                                                                          "default",
                                                                        fn: function(
                                                                          ref
                                                                        ) {
                                                                          var errors =
                                                                            ref.errors
                                                                          return [
                                                                            _c(
                                                                              "input",
                                                                              {
                                                                                directives: [
                                                                                  {
                                                                                    name:
                                                                                      "model",
                                                                                    rawName:
                                                                                      "v-model",
                                                                                    value:
                                                                                      _vm.address,
                                                                                    expression:
                                                                                      "address"
                                                                                  }
                                                                                ],
                                                                                staticClass:
                                                                                  "u-edit-txt",
                                                                                attrs: {
                                                                                  type:
                                                                                    "text",
                                                                                  name:
                                                                                    "address",
                                                                                  value:
                                                                                    "Abc street"
                                                                                },
                                                                                domProps: {
                                                                                  value:
                                                                                    _vm.address
                                                                                },
                                                                                on: {
                                                                                  input: function(
                                                                                    $event
                                                                                  ) {
                                                                                    if (
                                                                                      $event
                                                                                        .target
                                                                                        .composing
                                                                                    ) {
                                                                                      return
                                                                                    }
                                                                                    _vm.address =
                                                                                      $event.target.value
                                                                                  }
                                                                                }
                                                                              }
                                                                            ),
                                                                            _vm._v(
                                                                              " "
                                                                            ),
                                                                            _c(
                                                                              "span",
                                                                              {
                                                                                staticClass:
                                                                                  "text-danger"
                                                                              },
                                                                              [
                                                                                _vm._v(
                                                                                  _vm._s(
                                                                                    errors[0]
                                                                                  )
                                                                                )
                                                                              ]
                                                                            )
                                                                          ]
                                                                        }
                                                                      }
                                                                    ],
                                                                    null,
                                                                    true
                                                                  )
                                                                }
                                                              )
                                                            ],
                                                            1
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "col-xl-3 col-lg-4 col-md-6 col-12 t-c"
                                                            },
                                                            [
                                                              _c(
                                                                "p",
                                                                {
                                                                  staticClass:
                                                                    "fieldName"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "Country*"
                                                                  )
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "ValidationProvider",
                                                                {
                                                                  attrs: {
                                                                    name:
                                                                      "Country",
                                                                    rules:
                                                                      "required"
                                                                  },
                                                                  scopedSlots: _vm._u(
                                                                    [
                                                                      {
                                                                        key:
                                                                          "default",
                                                                        fn: function(
                                                                          ref
                                                                        ) {
                                                                          var errors =
                                                                            ref.errors
                                                                          return [
                                                                            _c(
                                                                              "input",
                                                                              {
                                                                                directives: [
                                                                                  {
                                                                                    name:
                                                                                      "model",
                                                                                    rawName:
                                                                                      "v-model",
                                                                                    value:
                                                                                      _vm.country,
                                                                                    expression:
                                                                                      "country"
                                                                                  }
                                                                                ],
                                                                                staticClass:
                                                                                  "u-edit-txt",
                                                                                attrs: {
                                                                                  type:
                                                                                    "text",
                                                                                  name:
                                                                                    "country",
                                                                                  value:
                                                                                    "Abc Country"
                                                                                },
                                                                                domProps: {
                                                                                  value:
                                                                                    _vm.country
                                                                                },
                                                                                on: {
                                                                                  input: function(
                                                                                    $event
                                                                                  ) {
                                                                                    if (
                                                                                      $event
                                                                                        .target
                                                                                        .composing
                                                                                    ) {
                                                                                      return
                                                                                    }
                                                                                    _vm.country =
                                                                                      $event.target.value
                                                                                  }
                                                                                }
                                                                              }
                                                                            ),
                                                                            _vm._v(
                                                                              " "
                                                                            ),
                                                                            _c(
                                                                              "span",
                                                                              {
                                                                                staticClass:
                                                                                  "text-danger"
                                                                              },
                                                                              [
                                                                                _vm._v(
                                                                                  _vm._s(
                                                                                    errors[0]
                                                                                  )
                                                                                )
                                                                              ]
                                                                            )
                                                                          ]
                                                                        }
                                                                      }
                                                                    ],
                                                                    null,
                                                                    true
                                                                  )
                                                                }
                                                              )
                                                            ],
                                                            1
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "row mt-md-1"
                                                        },
                                                        [
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "col-xl-3 col-lg-4 col-md-6 col-12 t-c"
                                                            },
                                                            [
                                                              _c(
                                                                "p",
                                                                {
                                                                  staticClass:
                                                                    "fieldName"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "State"
                                                                  )
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "ValidationProvider",
                                                                {
                                                                  attrs: {
                                                                    name:
                                                                      "State",
                                                                    rules:
                                                                      "required"
                                                                  },
                                                                  scopedSlots: _vm._u(
                                                                    [
                                                                      {
                                                                        key:
                                                                          "default",
                                                                        fn: function(
                                                                          ref
                                                                        ) {
                                                                          var errors =
                                                                            ref.errors
                                                                          return [
                                                                            _c(
                                                                              "input",
                                                                              {
                                                                                directives: [
                                                                                  {
                                                                                    name:
                                                                                      "model",
                                                                                    rawName:
                                                                                      "v-model",
                                                                                    value:
                                                                                      _vm.state,
                                                                                    expression:
                                                                                      "state"
                                                                                  }
                                                                                ],
                                                                                staticClass:
                                                                                  "u-edit-txt",
                                                                                attrs: {
                                                                                  type:
                                                                                    "text",
                                                                                  name:
                                                                                    "state",
                                                                                  value:
                                                                                    "abc state"
                                                                                },
                                                                                domProps: {
                                                                                  value:
                                                                                    _vm.state
                                                                                },
                                                                                on: {
                                                                                  input: function(
                                                                                    $event
                                                                                  ) {
                                                                                    if (
                                                                                      $event
                                                                                        .target
                                                                                        .composing
                                                                                    ) {
                                                                                      return
                                                                                    }
                                                                                    _vm.state =
                                                                                      $event.target.value
                                                                                  }
                                                                                }
                                                                              }
                                                                            ),
                                                                            _vm._v(
                                                                              " "
                                                                            ),
                                                                            _c(
                                                                              "span",
                                                                              {
                                                                                staticClass:
                                                                                  "text-danger"
                                                                              },
                                                                              [
                                                                                _vm._v(
                                                                                  _vm._s(
                                                                                    errors[0]
                                                                                  )
                                                                                )
                                                                              ]
                                                                            )
                                                                          ]
                                                                        }
                                                                      }
                                                                    ],
                                                                    null,
                                                                    true
                                                                  )
                                                                }
                                                              )
                                                            ],
                                                            1
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "col-xl-3 col-lg-4 col-md-6 col-12 t-c"
                                                            },
                                                            [
                                                              _c(
                                                                "p",
                                                                {
                                                                  staticClass:
                                                                    "fieldName"
                                                                },
                                                                [_vm._v("City")]
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "ValidationProvider",
                                                                {
                                                                  attrs: {
                                                                    name:
                                                                      "City",
                                                                    rules:
                                                                      "required"
                                                                  },
                                                                  scopedSlots: _vm._u(
                                                                    [
                                                                      {
                                                                        key:
                                                                          "default",
                                                                        fn: function(
                                                                          ref
                                                                        ) {
                                                                          var errors =
                                                                            ref.errors
                                                                          return [
                                                                            _c(
                                                                              "input",
                                                                              {
                                                                                directives: [
                                                                                  {
                                                                                    name:
                                                                                      "model",
                                                                                    rawName:
                                                                                      "v-model",
                                                                                    value:
                                                                                      _vm.city,
                                                                                    expression:
                                                                                      "city"
                                                                                  }
                                                                                ],
                                                                                staticClass:
                                                                                  "u-edit-txt",
                                                                                attrs: {
                                                                                  type:
                                                                                    "text",
                                                                                  name:
                                                                                    "city",
                                                                                  value:
                                                                                    "abc city"
                                                                                },
                                                                                domProps: {
                                                                                  value:
                                                                                    _vm.city
                                                                                },
                                                                                on: {
                                                                                  input: function(
                                                                                    $event
                                                                                  ) {
                                                                                    if (
                                                                                      $event
                                                                                        .target
                                                                                        .composing
                                                                                    ) {
                                                                                      return
                                                                                    }
                                                                                    _vm.city =
                                                                                      $event.target.value
                                                                                  }
                                                                                }
                                                                              }
                                                                            ),
                                                                            _vm._v(
                                                                              " "
                                                                            ),
                                                                            _c(
                                                                              "span",
                                                                              {
                                                                                staticClass:
                                                                                  "text-danger"
                                                                              },
                                                                              [
                                                                                _vm._v(
                                                                                  _vm._s(
                                                                                    errors[0]
                                                                                  )
                                                                                )
                                                                              ]
                                                                            )
                                                                          ]
                                                                        }
                                                                      }
                                                                    ],
                                                                    null,
                                                                    true
                                                                  )
                                                                }
                                                              )
                                                            ],
                                                            1
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "col-xl-3 col-lg-4 col-md-6 col-12 t-c"
                                                            },
                                                            [
                                                              _c(
                                                                "p",
                                                                {
                                                                  staticClass:
                                                                    "fieldName"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "Post code"
                                                                  )
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "ValidationProvider",
                                                                {
                                                                  attrs: {
                                                                    name:
                                                                      "Post code",
                                                                    rules:
                                                                      "required"
                                                                  },
                                                                  scopedSlots: _vm._u(
                                                                    [
                                                                      {
                                                                        key:
                                                                          "default",
                                                                        fn: function(
                                                                          ref
                                                                        ) {
                                                                          var errors =
                                                                            ref.errors
                                                                          return [
                                                                            _c(
                                                                              "input",
                                                                              {
                                                                                directives: [
                                                                                  {
                                                                                    name:
                                                                                      "model",
                                                                                    rawName:
                                                                                      "v-model",
                                                                                    value:
                                                                                      _vm.zip_code,
                                                                                    expression:
                                                                                      "zip_code"
                                                                                  }
                                                                                ],
                                                                                staticClass:
                                                                                  "u-edit-txt",
                                                                                attrs: {
                                                                                  type:
                                                                                    "number",
                                                                                  name:
                                                                                    "zip_code",
                                                                                  value:
                                                                                    "10001"
                                                                                },
                                                                                domProps: {
                                                                                  value:
                                                                                    _vm.zip_code
                                                                                },
                                                                                on: {
                                                                                  input: function(
                                                                                    $event
                                                                                  ) {
                                                                                    if (
                                                                                      $event
                                                                                        .target
                                                                                        .composing
                                                                                    ) {
                                                                                      return
                                                                                    }
                                                                                    _vm.zip_code =
                                                                                      $event.target.value
                                                                                  }
                                                                                }
                                                                              }
                                                                            ),
                                                                            _vm._v(
                                                                              " "
                                                                            ),
                                                                            _c(
                                                                              "span",
                                                                              {
                                                                                staticClass:
                                                                                  "text-danger"
                                                                              },
                                                                              [
                                                                                _vm._v(
                                                                                  _vm._s(
                                                                                    errors[0]
                                                                                  )
                                                                                )
                                                                              ]
                                                                            )
                                                                          ]
                                                                        }
                                                                      }
                                                                    ],
                                                                    null,
                                                                    true
                                                                  )
                                                                }
                                                              )
                                                            ],
                                                            1
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  )
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass: "card-header",
                                              attrs: { id: "headingCollapse13" }
                                            },
                                            [
                                              _c(
                                                "h3",
                                                {
                                                  staticClass:
                                                    "card-title lead "
                                                },
                                                [_vm._v("Job responsibilities")]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "collapse show  bg-qqq",
                                              attrs: {
                                                id: "collapse13",
                                                role: "tabpanel",
                                                "aria-labelledby":
                                                  "headingCollapse13"
                                              }
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
                                                        "card-body mt-sm-0 mt-2"
                                                    },
                                                    [
                                                      _c(
                                                        "div",
                                                        { staticClass: "row" },
                                                        [
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "col-xl-12 t-c"
                                                            },
                                                            [
                                                              _c(
                                                                "p",
                                                                {
                                                                  staticClass:
                                                                    "fieldName"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "Job Description*"
                                                                  )
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "ValidationProvider",
                                                                {
                                                                  attrs: {
                                                                    name:
                                                                      "Job Descriptions",
                                                                    rules:
                                                                      "required"
                                                                  },
                                                                  scopedSlots: _vm._u(
                                                                    [
                                                                      {
                                                                        key:
                                                                          "default",
                                                                        fn: function(
                                                                          ref
                                                                        ) {
                                                                          var errors =
                                                                            ref.errors
                                                                          return [
                                                                            _c(
                                                                              "textarea",
                                                                              {
                                                                                directives: [
                                                                                  {
                                                                                    name:
                                                                                      "model",
                                                                                    rawName:
                                                                                      "v-model",
                                                                                    value:
                                                                                      _vm.job_descriptions,
                                                                                    expression:
                                                                                      "job_descriptions"
                                                                                  }
                                                                                ],
                                                                                staticClass:
                                                                                  "u-edit-txt",
                                                                                attrs: {
                                                                                  name:
                                                                                    "job_descriptions",
                                                                                  cols:
                                                                                    "30",
                                                                                  rows:
                                                                                    "10"
                                                                                },
                                                                                domProps: {
                                                                                  value:
                                                                                    _vm.job_descriptions
                                                                                },
                                                                                on: {
                                                                                  input: function(
                                                                                    $event
                                                                                  ) {
                                                                                    if (
                                                                                      $event
                                                                                        .target
                                                                                        .composing
                                                                                    ) {
                                                                                      return
                                                                                    }
                                                                                    _vm.job_descriptions =
                                                                                      $event.target.value
                                                                                  }
                                                                                }
                                                                              },
                                                                              [
                                                                                _vm._v(
                                                                                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro veritatis repudiandae dolores. Ut, adipisci, error sequi pariatur expedita doloribus necessitatibus quod repellendus repudiandae quo nisi harum rerum a exercitationem natus."
                                                                                )
                                                                              ]
                                                                            ),
                                                                            _vm._v(
                                                                              " "
                                                                            ),
                                                                            _c(
                                                                              "span",
                                                                              {
                                                                                staticClass:
                                                                                  "text-danger"
                                                                              },
                                                                              [
                                                                                _vm._v(
                                                                                  _vm._s(
                                                                                    errors[0]
                                                                                  )
                                                                                )
                                                                              ]
                                                                            )
                                                                          ]
                                                                        }
                                                                      }
                                                                    ],
                                                                    null,
                                                                    true
                                                                  )
                                                                }
                                                              )
                                                            ],
                                                            1
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  )
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass: "card-header",
                                              attrs: { id: "headingCollapse14" }
                                            },
                                            [
                                              _c(
                                                "h3",
                                                {
                                                  staticClass:
                                                    "card-title lead "
                                                },
                                                [
                                                  _vm._v(
                                                    "Experience Information"
                                                  )
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "collapse show  bg-qqq",
                                              attrs: {
                                                id: "collapse14",
                                                role: "tabpanel",
                                                "aria-labelledby":
                                                  "headingCollapse14"
                                              }
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
                                                        "card-body mt-sm-0 mt-2"
                                                    },
                                                    [
                                                      _c(
                                                        "div",
                                                        { staticClass: "row" },
                                                        [
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "col-xl-3 col-lg-4 col-md-6 col-12 t-c"
                                                            },
                                                            [
                                                              _c(
                                                                "p",
                                                                {
                                                                  staticClass:
                                                                    "fieldName"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "Years Of experience\n                                                                            Needed*"
                                                                  )
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "ValidationProvider",
                                                                {
                                                                  attrs: {
                                                                    name:
                                                                      "Years Of experience",
                                                                    rules:
                                                                      "required"
                                                                  },
                                                                  scopedSlots: _vm._u(
                                                                    [
                                                                      {
                                                                        key:
                                                                          "default",
                                                                        fn: function(
                                                                          ref
                                                                        ) {
                                                                          var errors =
                                                                            ref.errors
                                                                          return [
                                                                            _c(
                                                                              "select",
                                                                              {
                                                                                directives: [
                                                                                  {
                                                                                    name:
                                                                                      "model",
                                                                                    rawName:
                                                                                      "v-model",
                                                                                    value:
                                                                                      _vm.years_of_experience,
                                                                                    expression:
                                                                                      "years_of_experience"
                                                                                  }
                                                                                ],
                                                                                staticClass:
                                                                                  "job-cat",
                                                                                attrs: {
                                                                                  name:
                                                                                    "years_of_experience"
                                                                                },
                                                                                on: {
                                                                                  change: function(
                                                                                    $event
                                                                                  ) {
                                                                                    var $$selectedVal = Array.prototype.filter
                                                                                      .call(
                                                                                        $event
                                                                                          .target
                                                                                          .options,
                                                                                        function(
                                                                                          o
                                                                                        ) {
                                                                                          return o.selected
                                                                                        }
                                                                                      )
                                                                                      .map(
                                                                                        function(
                                                                                          o
                                                                                        ) {
                                                                                          var val =
                                                                                            "_value" in
                                                                                            o
                                                                                              ? o._value
                                                                                              : o.value
                                                                                          return val
                                                                                        }
                                                                                      )
                                                                                    _vm.years_of_experience = $event
                                                                                      .target
                                                                                      .multiple
                                                                                      ? $$selectedVal
                                                                                      : $$selectedVal[0]
                                                                                  }
                                                                                }
                                                                              },
                                                                              [
                                                                                _c(
                                                                                  "option",
                                                                                  {
                                                                                    attrs: {
                                                                                      value:
                                                                                        ""
                                                                                    }
                                                                                  },
                                                                                  [
                                                                                    _vm._v(
                                                                                      "Student Placement\n                                                                                "
                                                                                    )
                                                                                  ]
                                                                                ),
                                                                                _vm._v(
                                                                                  " "
                                                                                ),
                                                                                _c(
                                                                                  "option",
                                                                                  {
                                                                                    attrs: {
                                                                                      value:
                                                                                        "1 Year or Less"
                                                                                    }
                                                                                  },
                                                                                  [
                                                                                    _vm._v(
                                                                                      "1\n                                                                                    Year or\n                                                                                    Less\n                                                                                "
                                                                                    )
                                                                                  ]
                                                                                ),
                                                                                _vm._v(
                                                                                  " "
                                                                                ),
                                                                                _c(
                                                                                  "option",
                                                                                  {
                                                                                    attrs: {
                                                                                      value:
                                                                                        "1-2 Years"
                                                                                    }
                                                                                  },
                                                                                  [
                                                                                    _vm._v(
                                                                                      "1-2 Years\n                                                                                "
                                                                                    )
                                                                                  ]
                                                                                ),
                                                                                _vm._v(
                                                                                  " "
                                                                                ),
                                                                                _c(
                                                                                  "option",
                                                                                  {
                                                                                    attrs: {
                                                                                      value:
                                                                                        "2-5 Years"
                                                                                    }
                                                                                  },
                                                                                  [
                                                                                    _vm._v(
                                                                                      "2-5 Years\n                                                                                "
                                                                                    )
                                                                                  ]
                                                                                ),
                                                                                _vm._v(
                                                                                  " "
                                                                                ),
                                                                                _c(
                                                                                  "option",
                                                                                  {
                                                                                    attrs: {
                                                                                      value:
                                                                                        "5-10 Years"
                                                                                    }
                                                                                  },
                                                                                  [
                                                                                    _vm._v(
                                                                                      "5-10\n                                                                                    Years\n                                                                                "
                                                                                    )
                                                                                  ]
                                                                                ),
                                                                                _vm._v(
                                                                                  " "
                                                                                ),
                                                                                _c(
                                                                                  "option",
                                                                                  {
                                                                                    attrs: {
                                                                                      value:
                                                                                        "10+ Years"
                                                                                    }
                                                                                  },
                                                                                  [
                                                                                    _vm._v(
                                                                                      "10+ Years\n                                                                                "
                                                                                    )
                                                                                  ]
                                                                                )
                                                                              ]
                                                                            ),
                                                                            _vm._v(
                                                                              " "
                                                                            ),
                                                                            _c(
                                                                              "span",
                                                                              {
                                                                                staticClass:
                                                                                  "text-danger"
                                                                              },
                                                                              [
                                                                                _vm._v(
                                                                                  _vm._s(
                                                                                    errors[0]
                                                                                  )
                                                                                )
                                                                              ]
                                                                            )
                                                                          ]
                                                                        }
                                                                      }
                                                                    ],
                                                                    null,
                                                                    true
                                                                  )
                                                                }
                                                              )
                                                            ],
                                                            1
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "col-xl-3 col-lg-4 col-md-6 col-12 t-c"
                                                            },
                                                            [
                                                              _c(
                                                                "p",
                                                                {
                                                                  staticClass:
                                                                    "fieldName"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "Degree\n                                                                            Requirements*"
                                                                  )
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "ValidationProvider",
                                                                {
                                                                  attrs: {
                                                                    name:
                                                                      "Degree",
                                                                    rules:
                                                                      "required"
                                                                  },
                                                                  scopedSlots: _vm._u(
                                                                    [
                                                                      {
                                                                        key:
                                                                          "default",
                                                                        fn: function(
                                                                          ref
                                                                        ) {
                                                                          var errors =
                                                                            ref.errors
                                                                          return [
                                                                            _c(
                                                                              "select",
                                                                              {
                                                                                directives: [
                                                                                  {
                                                                                    name:
                                                                                      "model",
                                                                                    rawName:
                                                                                      "v-model",
                                                                                    value:
                                                                                      _vm.degree,
                                                                                    expression:
                                                                                      "degree"
                                                                                  }
                                                                                ],
                                                                                staticClass:
                                                                                  "job-cat",
                                                                                attrs: {
                                                                                  name:
                                                                                    "degree"
                                                                                },
                                                                                on: {
                                                                                  change: function(
                                                                                    $event
                                                                                  ) {
                                                                                    var $$selectedVal = Array.prototype.filter
                                                                                      .call(
                                                                                        $event
                                                                                          .target
                                                                                          .options,
                                                                                        function(
                                                                                          o
                                                                                        ) {
                                                                                          return o.selected
                                                                                        }
                                                                                      )
                                                                                      .map(
                                                                                        function(
                                                                                          o
                                                                                        ) {
                                                                                          var val =
                                                                                            "_value" in
                                                                                            o
                                                                                              ? o._value
                                                                                              : o.value
                                                                                          return val
                                                                                        }
                                                                                      )
                                                                                    _vm.degree = $event
                                                                                      .target
                                                                                      .multiple
                                                                                      ? $$selectedVal
                                                                                      : $$selectedVal[0]
                                                                                  }
                                                                                }
                                                                              },
                                                                              [
                                                                                _c(
                                                                                  "option",
                                                                                  {
                                                                                    attrs: {
                                                                                      value:
                                                                                        "",
                                                                                      selected:
                                                                                        "",
                                                                                      disabled:
                                                                                        ""
                                                                                    }
                                                                                  },
                                                                                  [
                                                                                    _vm._v(
                                                                                      "\n                                                                                    Select\n                                                                                "
                                                                                    )
                                                                                  ]
                                                                                ),
                                                                                _vm._v(
                                                                                  " "
                                                                                ),
                                                                                _c(
                                                                                  "option",
                                                                                  {
                                                                                    attrs: {
                                                                                      value:
                                                                                        "University"
                                                                                    }
                                                                                  },
                                                                                  [
                                                                                    _vm._v(
                                                                                      "\n                                                                                    University\n                                                                                "
                                                                                    )
                                                                                  ]
                                                                                ),
                                                                                _vm._v(
                                                                                  " "
                                                                                ),
                                                                                _c(
                                                                                  "option",
                                                                                  {
                                                                                    attrs: {
                                                                                      value:
                                                                                        "College"
                                                                                    }
                                                                                  },
                                                                                  [
                                                                                    _vm._v(
                                                                                      "College\n                                                                                "
                                                                                    )
                                                                                  ]
                                                                                ),
                                                                                _vm._v(
                                                                                  " "
                                                                                ),
                                                                                _c(
                                                                                  "option",
                                                                                  {
                                                                                    attrs: {
                                                                                      value:
                                                                                        "Secondary School or Job\n                                                                                Specific Training"
                                                                                    }
                                                                                  },
                                                                                  [
                                                                                    _vm._v(
                                                                                      "Secondary School\n                                                                                    or Job\n                                                                                    Specific Training\n                                                                                "
                                                                                    )
                                                                                  ]
                                                                                ),
                                                                                _vm._v(
                                                                                  " "
                                                                                ),
                                                                                _c(
                                                                                  "option",
                                                                                  {
                                                                                    attrs: {
                                                                                      value:
                                                                                        "No Education Required"
                                                                                    }
                                                                                  },
                                                                                  [
                                                                                    _vm._v(
                                                                                      "No\n                                                                                    Education Required\n                                                                                "
                                                                                    )
                                                                                  ]
                                                                                )
                                                                              ]
                                                                            ),
                                                                            _vm._v(
                                                                              " "
                                                                            ),
                                                                            _c(
                                                                              "span",
                                                                              {
                                                                                staticClass:
                                                                                  "text-danger"
                                                                              },
                                                                              [
                                                                                _vm._v(
                                                                                  _vm._s(
                                                                                    errors[0]
                                                                                  )
                                                                                )
                                                                              ]
                                                                            )
                                                                          ]
                                                                        }
                                                                      }
                                                                    ],
                                                                    null,
                                                                    true
                                                                  )
                                                                }
                                                              )
                                                            ],
                                                            1
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "row mt-md-1"
                                                        },
                                                        [
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "col-xl-6 col-lg-6 col-md-6 col-12 t-c"
                                                            },
                                                            [
                                                              _c(
                                                                "p",
                                                                {
                                                                  staticClass:
                                                                    "fieldName"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "Skills*"
                                                                  )
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "ValidationProvider",
                                                                {
                                                                  attrs: {
                                                                    name:
                                                                      "Skill"
                                                                  },
                                                                  scopedSlots: _vm._u(
                                                                    [
                                                                      {
                                                                        key:
                                                                          "default",
                                                                        fn: function(
                                                                          ref
                                                                        ) {
                                                                          var errors =
                                                                            ref.errors
                                                                          return [
                                                                            _c(
                                                                              "textarea",
                                                                              {
                                                                                directives: [
                                                                                  {
                                                                                    name:
                                                                                      "model",
                                                                                    rawName:
                                                                                      "v-model",
                                                                                    value:
                                                                                      _vm.skill,
                                                                                    expression:
                                                                                      "skill"
                                                                                  }
                                                                                ],
                                                                                staticClass:
                                                                                  "u-edit-txt",
                                                                                attrs: {
                                                                                  name:
                                                                                    "skill",
                                                                                  cols:
                                                                                    "30",
                                                                                  rows:
                                                                                    "10"
                                                                                },
                                                                                domProps: {
                                                                                  value:
                                                                                    _vm.skill
                                                                                },
                                                                                on: {
                                                                                  input: function(
                                                                                    $event
                                                                                  ) {
                                                                                    if (
                                                                                      $event
                                                                                        .target
                                                                                        .composing
                                                                                    ) {
                                                                                      return
                                                                                    }
                                                                                    _vm.skill =
                                                                                      $event.target.value
                                                                                  }
                                                                                }
                                                                              },
                                                                              [
                                                                                _vm._v(
                                                                                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro veritatis repudiandae dolores. Ut, adipisci, error sequi pariatur expedita doloribus necessitatibus quod repellendus repudiandae quo nisi harum rerum a exercitationem natus."
                                                                                )
                                                                              ]
                                                                            ),
                                                                            _vm._v(
                                                                              " "
                                                                            ),
                                                                            _c(
                                                                              "span",
                                                                              {
                                                                                staticClass:
                                                                                  "text-danger"
                                                                              },
                                                                              [
                                                                                _vm._v(
                                                                                  _vm._s(
                                                                                    errors[0]
                                                                                  )
                                                                                )
                                                                              ]
                                                                            )
                                                                          ]
                                                                        }
                                                                      }
                                                                    ],
                                                                    null,
                                                                    true
                                                                  )
                                                                }
                                                              )
                                                            ],
                                                            1
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  )
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("div", { staticClass: "row" }, [
                                            _c(
                                              "div",
                                              { staticClass: "col-12" },
                                              [
                                                _c(
                                                  "button",
                                                  {
                                                    staticClass:
                                                      "green-btn ml-2",
                                                    attrs: { type: "submit" }
                                                  },
                                                  [
                                                    _vm._v(
                                                      "Create\n                                                            "
                                                    )
                                                  ]
                                                )
                                              ]
                                            )
                                          ])
                                        ]
                                      )
                                    ])
                                  ])
                                ]
                              )
                            ]
                          }
                        }
                      ])
                    })
                  ],
                  1
                )
              ])
            ])
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
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-12" }, [
        _c("h1", [
          _c("a", { attrs: { href: "users-listing.php" } }, [
            _vm._v("Create Job")
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/businessOwner/pages/Jobs/create.vue":
/*!****************************************************************!*\
  !*** ./resources/js/views/businessOwner/pages/Jobs/create.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_vue_vue_type_template_id_3387e0ff___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=3387e0ff& */ "./resources/js/views/businessOwner/pages/Jobs/create.vue?vue&type=template&id=3387e0ff&");
/* harmony import */ var _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js& */ "./resources/js/views/businessOwner/pages/Jobs/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _create_vue_vue_type_template_id_3387e0ff___WEBPACK_IMPORTED_MODULE_0__["render"],
  _create_vue_vue_type_template_id_3387e0ff___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/businessOwner/pages/Jobs/create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/businessOwner/pages/Jobs/create.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/businessOwner/pages/Jobs/create.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/businessOwner/pages/Jobs/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/businessOwner/pages/Jobs/create.vue?vue&type=template&id=3387e0ff&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/views/businessOwner/pages/Jobs/create.vue?vue&type=template&id=3387e0ff& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_3387e0ff___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=template&id=3387e0ff& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/businessOwner/pages/Jobs/create.vue?vue&type=template&id=3387e0ff&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_3387e0ff___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_3387e0ff___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);