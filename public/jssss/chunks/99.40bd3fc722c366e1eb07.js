(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[99],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/pages/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/user/pages/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


var _data$created$compone;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
var FullPageFooter = function FullPageFooter() {
  return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../components/FullPageFooter.vue */ "./resources/js/views/user/components/FullPageFooter.vue"));
};

var FullPageHeader = function FullPageHeader() {
  return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ../components/FullPageHeader.vue */ "./resources/js/views/user/components/FullPageHeader.vue"));
};

/* harmony default export */ __webpack_exports__["default"] = (_data$created$compone = {
  data: function data() {
    return {
      job_count: '',
      categories: {},
      jobs: {},
      contact: {
        name: '',
        email: '',
        category: '',
        message: '',
        phone: ''
      },
      email_c: {
        subscribe_email: ''
      }
    };
  },
  created: function created() {},
  components: {
    FullPageFooter: FullPageFooter,
    FullPageHeader: FullPageHeader
  }
}, _defineProperty(_data$created$compone, "created", function created() {
  var _this = this;

  return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _this.getCategory();

          case 2:
            _context.next = 4;
            return _this.jobsget();

          case 4:
            _context.next = 6;
            return _this.jobs_count();

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }))();
}), _defineProperty(_data$created$compone, "methods", {
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
  },
  contactForm: function contactForm() {
    var _this3 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return axios.post('/api/admin/contactUs', _this3.contact);

            case 2:
              response = _context3.sent.data;
              console.log(response);

              _this3.$snotify.success(response.message);

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },
  subscribeForm: function subscribeForm() {
    var _this4 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return axios.post('/api/admin/subscribe', _this4.email_c);

            case 2:
              response = _context4.sent.data;

              _this4.$snotify.success(response.message);

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }))();
  },
  jobsget: function jobsget() {
    var _this5 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return axios.get('/api/jobs');

            case 2:
              _this5.jobs = _context5.sent.data;

            case 3:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }))();
  },
  jobs_count: function jobs_count() {
    var _this6 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return axios.get('/api/jobs/count');

            case 2:
              _this6.job_count = _context6.sent.data;
              console.log("the jobs count is", _this6.job_count);

            case 4:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }))();
  }
}), _data$created$compone);

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/pages/index.vue?vue&type=template&id=71f04a02&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/user/pages/index.vue?vue&type=template&id=71f04a02& ***!
  \**************************************************************************************************************************************************************************************************************/
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
      _c("full-page-header"),
      _vm._v(" "),
      _c("section", { staticClass: "main-banner" }, [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-6 col-sm-12" }, [
              _c("div", { staticClass: "banner-content" }, [
                _c("h1", [_vm._v("Find Your Next Opportunity Here…")]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "SCTI Jobs  connects people to job opportunities allowing all to achieve the next steps in their career. We bridge the gap between training providers and businesses.\n                        "
                  )
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "SCTI Jobs  offers bespoke consultation to support you in attaining the job you have been looking for."
                  )
                ]),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "px-3 mt-3 py-3 white-btn",
                    attrs: { href: _vm.base_url + "/business/login" }
                  },
                  [_vm._v("Business Owner")]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-6 col-sm-12" })
          ])
        ])
      ]),
      _vm._v(" "),
      _c("section", { staticClass: "latest-jobs" }, [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-12" }, [
              _c(
                "div",
                { staticClass: "owl-carousel owl-theme services-carousel" },
                _vm._l(_vm.jobs, function(item) {
                  return _c("div", { staticClass: "item w-100" }, [
                    _c(
                      "div",
                      { staticClass: "job-card text-center bg-transparent" },
                      [
                        _c("h3", { staticClass: "fw-bold mt-2" }, [
                          _vm._v(_vm._s(item.job_title))
                        ]),
                        _vm._v(" "),
                        _c("p", [_vm._v(_vm._s(item.job_descriptions))])
                      ]
                    )
                  ])
                }),
                0
              )
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("section", { staticClass: "upload-traning-sec" }, [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col-lg-6 col-sm-12" },
              [
                _c("img", {
                  staticClass: "img-fluid",
                  attrs: {
                    src:
                      _vm.base_url +
                      "/assets/user/images/Profession-net-03_19.png",
                    alt: ""
                  }
                }),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "main-btn crt-profile-btn",
                    attrs: { to: { name: "user.auth.register" } }
                  },
                  [_vm._v("Register")]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-6 col-sm-12" }, [
              _c("h2", [_vm._v("Training and Networking")]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "Search and apply for bespoke training and networking events by registering at SCTI Jobs."
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-lg-4" }, [
                  _c("div", { staticClass: "boxs" }, [
                    _c("img", {
                      attrs: {
                        src:
                          _vm.base_url +
                          "/assets/user/images/Profession-net-03_26.png",
                        alt: ""
                      }
                    }),
                    _vm._v(" "),
                    _c("p", [_vm._v("Register Your Account")])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-4" }, [
                  _c("div", { staticClass: "boxs" }, [
                    _c("img", {
                      attrs: {
                        src:
                          _vm.base_url +
                          "/assets/user/images/Profession-net-03_28.png",
                        alt: ""
                      }
                    }),
                    _vm._v(" "),
                    _c("p", [_vm._v("Upload Your Resume")])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-4" }, [
                  _c("div", { staticClass: "boxs" }, [
                    _c("img", {
                      attrs: {
                        src:
                          _vm.base_url +
                          "/assets/user/images/Profession-net-03_30.png",
                        alt: ""
                      }
                    }),
                    _vm._v(" "),
                    _c("p", [_vm._v("Apply For Dream Job")])
                  ])
                ])
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("section", { staticClass: "why-chose-sec" }, [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-6 col-sm-12" }, [
              _c("div", { staticClass: "why-chose-sec-right" }, [
                _c("img", {
                  staticClass: "img1",
                  attrs: {
                    src:
                      _vm.base_url +
                      "/../../assets/user/images/Profession-net-03_41.png",
                    alt: ""
                  }
                }),
                _vm._v(" "),
                _c("img", {
                  staticClass: "img2",
                  attrs: {
                    src:
                      _vm.base_url +
                      "/../../assets/user/images/Profession-net-03_45.png",
                    alt: ""
                  }
                })
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("section", { staticClass: "details" }, [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "col-lg-8 offset-lg-2" }, [
            _c(
              "div",
              {
                staticClass: "ml-5 d-sm-flex justify-content-between flex-wrap"
              },
              [
                _c("div", { staticClass: "mt-3" }, [
                  _c("h3", [_vm._v(_vm._s(this.job_count) + "+")]),
                  _vm._v(" "),
                  _c("p", { staticClass: "mt-3 text-right" }, [
                    _vm._v("Jobs available")
                  ])
                ]),
                _vm._v(" "),
                _vm._m(1),
                _vm._v(" "),
                _vm._m(2)
              ]
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _vm._m(3),
      _vm._v(" "),
      _c("section", { staticClass: "upload-traning-sec questions pt-0 p-90" }, [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-lg-12 col-sm-12" }, [
              _c("h2", [_vm._v("Have Any Questions")]),
              _vm._v(" "),
              _c("div", { staticClass: "d-sm-flex" }, [
                _c("div", { staticClass: "input-group mb-3" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.contact.name,
                        expression: "contact.name"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      placeholder: "Enter Your Name...",
                      "aria-describedby": "basic-addon2"
                    },
                    domProps: { value: _vm.contact.name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.contact, "name", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm._m(4)
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "input-group mb-3 ml-lg-4 ml-sm-2 ml-0" },
                  [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.contact.phone,
                          expression: "contact.phone"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        placeholder: "Enter Your Number...",
                        "aria-describedby": "basic-addon2"
                      },
                      domProps: { value: _vm.contact.phone },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.contact, "phone", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm._m(5)
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "input-group mb-3" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.contact.email,
                      expression: "contact.email"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    placeholder: "Enter Your Email...",
                    "aria-describedby": "basic-addon2"
                  },
                  domProps: { value: _vm.contact.email },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.contact, "email", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _vm._m(6)
              ]),
              _vm._v(" "),
              _c(
                "select",
                { attrs: { name: "", id: "" } },
                _vm._l(_vm.categories, function(category) {
                  return _c(
                    "option",
                    {
                      domProps: { value: category.category_name },
                      model: {
                        value: _vm.contact.category,
                        callback: function($$v) {
                          _vm.$set(_vm.contact, "category", $$v)
                        },
                        expression: "contact.category"
                      }
                    },
                    [_vm._v(_vm._s(category.category_name))]
                  )
                }),
                0
              ),
              _vm._v(" "),
              _c("div", { staticClass: "input-group mt-3" }, [
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.contact.message,
                      expression: "contact.message"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    placeholder: "Enter Message Here...",
                    "aria-describedby": "basic-addon2"
                  },
                  domProps: { value: _vm.contact.message },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.contact, "message", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _vm._m(7)
              ]),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "px-3 mt-3 py-3 blue-btn",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      return _vm.contactForm()
                    }
                  }
                },
                [_vm._v("Submit Now")]
              )
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("section", { staticClass: "newsletter" }, [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row" }, [
            _vm._m(8),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-6 col-sm-12" }, [
              _c("div", { staticClass: "newsletter-inner" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.email_c.subscribe_email,
                      expression: "email_c.subscribe_email"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "email", placeholder: "Enter Your Email..." },
                  domProps: { value: _vm.email_c.subscribe_email },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.email_c,
                        "subscribe_email",
                        $event.target.value
                      )
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "sub-btn",
                    on: {
                      click: function($event) {
                        return _vm.subscribeForm()
                      }
                    }
                  },
                  [_vm._v("Subscribe")]
                )
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("section", { staticClass: "job-seeker-sec" }, [
        _c("div", { staticClass: "container" }, [
          _vm._m(9),
          _vm._v(" "),
          _c("div", { staticClass: "job-seeker-sec-inner" }, [
            _c("div", { staticClass: "job-box-usr" }, [
              _c("a", { attrs: { href: "#_" } }, [
                _c("img", {
                  attrs: {
                    src: _vm.base_url + "/assets/user/images/globe-user_03.png",
                    alt: ""
                  }
                })
              ]),
              _vm._v(" "),
              _vm._m(10)
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "job-box-usr" }, [
              _c("a", { attrs: { href: "#_" } }, [
                _c("img", {
                  attrs: {
                    src: _vm.base_url + "/assets/user/images/globe-user_03.png",
                    alt: ""
                  }
                })
              ]),
              _vm._v(" "),
              _vm._m(11)
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "job-box-usr" }, [
              _c("a", { attrs: { href: "#_" } }, [
                _c("img", {
                  attrs: {
                    src: _vm.base_url + "/assets/user/images/globe-user_03.png",
                    alt: ""
                  }
                })
              ]),
              _vm._v(" "),
              _vm._m(12)
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "job-box-usr" }, [
              _c("a", { attrs: { href: "#_" } }, [
                _c("img", {
                  attrs: {
                    src: _vm.base_url + "/assets/user/images/globe-user_03.png",
                    alt: ""
                  }
                })
              ]),
              _vm._v(" "),
              _vm._m(13)
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "job-box-usr" }, [
              _c("a", { attrs: { href: "#_" } }, [
                _c("img", {
                  attrs: {
                    src: _vm.base_url + "/assets/user/images/globe-user_03.png",
                    alt: ""
                  }
                })
              ]),
              _vm._v(" "),
              _vm._m(14)
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "job-box-usr" }, [
              _c("a", { attrs: { href: "#_" } }, [
                _c("img", {
                  attrs: {
                    src: _vm.base_url + "/assets/user/images/globe-user_03.png",
                    alt: ""
                  }
                })
              ]),
              _vm._v(" "),
              _vm._m(15)
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("full-page-footer")
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-6 col-sm-12" }, [
      _c("h2", [
        _vm._v("Why Choose "),
        _c("br"),
        _vm._v("\n                    SCTI Jobs")
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "SCTI Jobs connects people to job opportunities allowing them to achieve the next steps in their career through bespoke consultation and on-going support. We provide the right candidates for organisations that are looking for vacancies to be filled."
        )
      ]),
      _vm._v(" "),
      _c("ul", [
        _c("li", [_vm._v("Partners with training providers and businesses.")]),
        _vm._v(" "),
        _c("li", [
          _vm._v(
            "Offer consultation throughout application and interview process."
          )
        ]),
        _vm._v(" "),
        _c("li", [_vm._v("Create your CV in under 10 minutes.")]),
        _vm._v(" "),
        _c("li", [_vm._v("Access to current networking and training events.")]),
        _vm._v(" "),
        _c("li", [_vm._v("Offer competitive subscription packages.")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mt-3" }, [
      _c("h3", [_vm._v("28K+")]),
      _vm._v(" "),
      _c("p", { staticClass: "mt-3 text-right" }, [
        _vm._v("Training and Networking")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mt-3" }, [
      _c("h3", [_vm._v("08K+")]),
      _vm._v(" "),
      _c("p", { staticClass: "mt-3 text-right" }, [_vm._v("Partners")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "chose-catgory-sec" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-append" }, [
      _c(
        "span",
        { staticClass: "input-group-text", attrs: { id: "basic-addon2" } },
        [_c("i", { staticClass: "fa fa-user" })]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-append" }, [
      _c(
        "span",
        { staticClass: "input-group-text", attrs: { id: "basic-addon2" } },
        [_c("i", { staticClass: "fa fa-phone" })]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-append" }, [
      _c(
        "span",
        { staticClass: "input-group-text", attrs: { id: "basic-addon2" } },
        [_c("i", { staticClass: "fa fa-envelope" })]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-append" }, [
      _c(
        "span",
        { staticClass: "input-group-text", attrs: { id: "basic-addon2" } },
        [_c("i", { staticClass: "fa fa-sticky-note" })]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-6 col-sm-12" }, [
      _c("h2", [_vm._v("Subscribe For Updates")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "subscribe for the latest updates on jobs, training and networking events."
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-8 offset-md-2" }, [
        _c("h2", [_vm._v("What Job Seekers Say About Us")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-box" }, [
      _c("h5", [_vm._v("Jac Jacson")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "“Lorem Ipsum is simply dummy text of the\n                            printing and typesetting dummy is and\n                        it to make a type specimen book.”"
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-box" }, [
      _c("h5", [_vm._v("Jac Jacson")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "“Lorem Ipsum is simply dummy text of the\n                            printing and typesetting dummy is and\n                        it to make a type specimen book.”"
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-box" }, [
      _c("h5", [_vm._v("Jac Jacson")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "“Lorem Ipsum is simply dummy text of the\n                            printing and typesetting dummy is and\n                        it to make a type specimen book.”"
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-box" }, [
      _c("h5", [_vm._v("Jac Jacson")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "“Lorem Ipsum is simply dummy text of the\n                            printing and typesetting dummy is and\n                        it to make a type specimen book.”"
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-box" }, [
      _c("h5", [_vm._v("Jac Jacson")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "“Lorem Ipsum is simply dummy text of the\n                            printing and typesetting dummy is and\n                        it to make a type specimen book.”"
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-box" }, [
      _c("h5", [_vm._v("Jac Jacson")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "“Lorem Ipsum is simply dummy text of the\n                            printing and typesetting dummy is and\n                        it to make a type specimen book.”"
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/user/pages/index.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/user/pages/index.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_71f04a02___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=71f04a02& */ "./resources/js/views/user/pages/index.vue?vue&type=template&id=71f04a02&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/user/pages/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_71f04a02___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_71f04a02___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/user/pages/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/user/pages/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/user/pages/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/pages/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/user/pages/index.vue?vue&type=template&id=71f04a02&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/user/pages/index.vue?vue&type=template&id=71f04a02& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_71f04a02___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=71f04a02& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/pages/index.vue?vue&type=template&id=71f04a02&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_71f04a02___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_71f04a02___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);