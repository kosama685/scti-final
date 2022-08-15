(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[73],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/businessOwner/pages/Jobs/Candidates/profile.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/businessOwner/pages/Jobs/Candidates/profile.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shortlist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shortlist */ "./resources/js/views/businessOwner/pages/Jobs/Candidates/shortlist.vue");
/* harmony import */ var _interview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interview */ "./resources/js/views/businessOwner/pages/Jobs/Candidates/interview.vue");


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
// const ChatComponent = () => import('../../../user/chat/ChatComponent.vue');


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Shortlist: _shortlist__WEBPACK_IMPORTED_MODULE_1__["default"],
    Interview: _interview__WEBPACK_IMPORTED_MODULE_2__["default"] // ChatComponent

  },
  data: function data() {
    return {
      candidateProfile: {},
      candidateDetailJob: {},
      candidateCv: {},
      user_id: undefined,
      job_id: undefined,
      candidate_id: ''
    };
  },
  created: function created() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.user_id = _this.$route.params.id;
              _this.job_id = _this.$route.params.job;
              _context.next = 4;
              return _this.getProfile();

            case 4:
              _context.next = 6;
              return _this.getCandidateDetailJob();

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    getProfile: function getProfile() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios.get("/api/admin/getProfile/".concat(_this2.$route.params.id));

              case 2:
                _this2.candidateProfile = _context2.sent.data;
                console.log('CV IS', _this2.candidateProfile.cv);
                _this2.candidate_id = _this2.candidateProfile.uuid; // console.log('uuid is',this.candidateProfile.uuid);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    getCandidateDetailJob: function getCandidateDetailJob() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return axios.get("api/admin/job/".concat(_this3.$route.params.job, "/candidate/").concat(_this3.$route.params.id));

              case 2:
                _this3.candidateDetailJob = _context3.sent.data;
                console.log(_this3.candidateDetailJob);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    updateStatusCandidate: function updateStatusCandidate() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var fd, response, self;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                fd = new FormData(_this4.$refs.rejected);
                fd.append('user_id', _this4.user_id);
                fd.append('job_id', _this4.job_id);
                fd.append('status', 'Shortlist');
                _context4.next = 6;
                return axios.post("/api/admin/job/candidate/status/", fd);

              case 6:
                response = _context4.sent.data;

                if (response.data) {
                  _this4.$snotify.success(response.data.message);

                  self = _this4;

                  _this4.$router.go();
                }

              case 8:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    download_me: function download_me() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _this5.user_id = _this5.$route.params.id;
                _context5.next = 3;
                return axios.get("api/cv_download/".concat(_this5.user_id));

              case 3:
                _this5.candidateCv = _context5.sent.data;
                console.log("hir me"); //  console.log('download me ',this.user_id);

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/businessOwner/pages/Jobs/Candidates/profile.vue?vue&type=template&id=1ce68e8d&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/businessOwner/pages/Jobs/Candidates/profile.vue?vue&type=template&id=1ce68e8d& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "content-wrapper" },
    [
      _c("div", { staticClass: "content-body" }, [
        _c("section", { attrs: { id: "configuration" } }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-12" }, [
              _c("div", { staticClass: "card rounded pad-20" }, [
                _c("div", { staticClass: "card-content collapse show" }, [
                  _c("div", { staticClass: "card-body" }, [
                    _c("div", { staticClass: "row" }, [
                      _c(
                        "div",
                        {
                          staticClass:
                            "col-12 d-flex align-items-center justify-content-between flex-column flex-md-row ",
                        },
                        [
                          _c(
                            "h1",
                            [
                              _c(
                                "router-link",
                                { attrs: { to: { name: "" } } },
                                [
                                  _c("i", { staticClass: "fa fa-angle-left" }),
                                  _vm._v(
                                    "View\n                                                    Profile\n                                                "
                                  ),
                                ]
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm._m(0),
                        ]
                      ),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "customer-top" }, [
                      _c("div", { staticClass: "row mb-2" }, [
                        _c("div", { staticClass: "col-md-6 col-12" }, [
                          _c("div", { staticClass: "media " }, [
                            _c("div", { staticClass: "media-body second-m" }, [
                              _c("h5", { staticClass: "mt-0" }, [
                                _vm._v(
                                  "Job Name:\n                                                            "
                                ),
                                _c("span", [
                                  _vm._v(
                                    _vm._s(_vm.candidateDetailJob.job.job_title)
                                  ),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("h5", { staticClass: "mt-0" }, [
                                _vm._v("Job ID :"),
                                _c("span", [
                                  _vm._v(_vm._s(_vm.candidateDetailJob.job.id)),
                                ]),
                              ]),
                            ]),
                          ]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-12" }, [
                          _c(
                            "div",
                            { staticClass: "media align-items-center" },
                            [
                              _c("img", {
                                staticClass: "img-fluid",
                                attrs: {
                                  src:
                                    _vm.base_url + "/assets/images/avatar.jpg",
                                  alt: "",
                                },
                              }),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass: "media-body text-right user_id",
                                },
                                [
                                  _c("h6", { staticClass: "cs-id" }, [
                                    _vm._v(" User ID: "),
                                    _c("span", [
                                      _vm._v(_vm._s(_vm.candidateProfile.id)),
                                    ]),
                                  ]),
                                ]
                              ),
                            ]
                          ),
                        ]),
                      ]),
                      _vm._v(" "),
                      _vm._m(1),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-12" }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "card collapse-icon accordion-icon-rotate user_prof_acc bg-qqq",
                          },
                          [
                            _vm._m(2),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "collapse show bg-qqq",
                                attrs: {
                                  id: "collapse11",
                                  role: "tabpanel",
                                  "aria-labelledby": "headingCollapse11",
                                },
                              },
                              [
                                _c("div", { staticClass: "card-content" }, [
                                  _c(
                                    "div",
                                    { staticClass: "card-body mt-sm-0 mt-2" },
                                    [
                                      _c("div", { staticClass: "row" }, [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "col-lg-4 col-md-4 col-12 t-c",
                                          },
                                          [
                                            _c(
                                              "p",
                                              {
                                                staticClass:
                                                  "fieldName gray-txt",
                                              },
                                              [_vm._v("First Name")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "p",
                                              { staticClass: "fieldData" },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.candidateProfile
                                                      .first_name
                                                  )
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
                                              "col-lg-4 col-md-4 col-12 t-c",
                                          },
                                          [
                                            _c(
                                              "p",
                                              {
                                                staticClass:
                                                  "fieldName gray-txt",
                                              },
                                              [_vm._v("Last Name")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "p",
                                              { staticClass: "fieldData" },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.candidateProfile
                                                      .last_name
                                                  )
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "row mt-md-1" },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "col-lg-4 col-md-4 col-12 t-c",
                                            },
                                            [
                                              _c(
                                                "p",
                                                {
                                                  staticClass:
                                                    "fieldName gray-txt",
                                                },
                                                [_vm._v("Account Created")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "p",
                                                { staticClass: "fieldData" },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.formatDate(
                                                        _vm.candidateProfile
                                                          .created_at
                                                      )
                                                    )
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
                                                "col-lg-4 col-md-4 col-12 t-c",
                                            },
                                            [
                                              _c(
                                                "p",
                                                {
                                                  staticClass:
                                                    "fieldName gray-txt",
                                                },
                                                [_vm._v("Phone Number")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "p",
                                                { staticClass: "fieldData" },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.candidateProfile.phone
                                                    )
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "row mt-md-1" },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "col-lg-4 col-md-4 col-12 t-c",
                                            },
                                            [
                                              _c(
                                                "p",
                                                {
                                                  staticClass:
                                                    "fieldName gray-txt",
                                                },
                                                [_vm._v("Email Address")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "p",
                                                { staticClass: "fieldData" },
                                                [
                                                  _vm._v(
                                                    "\n                                                                    " +
                                                      _vm._s(
                                                        _vm.candidateProfile
                                                          .email
                                                      )
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
                                                "col-lg-4 col-md-4 col-12 t-c",
                                            },
                                            [
                                              _c(
                                                "p",
                                                {
                                                  staticClass:
                                                    "fieldName gray-txt",
                                                },
                                                [_vm._v("CV")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "a",
                                                {
                                                  attrs: {
                                                    target: "_blank",
                                                    href:
                                                      "latest_scti/public/images/users/" +
                                                      _vm.candidateProfile.cv,
                                                  },
                                                },
                                                [_vm._v("CV")]
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                                ]),
                              ]
                            ),
                            _vm._v(" "),
                            _vm._m(3),
                            _vm._v(" "),
                            _vm._m(4),
                            _vm._v(" "),
                            _vm._m(5),
                            _vm._v(" "),
                            _vm._m(6),
                            _vm._v(" "),
                            _vm._m(7),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "collapse show   bg-qqq",
                                attrs: {
                                  id: "collapse13",
                                  role: "tabpanel",
                                  "aria-labelledby": "headingCollapse17",
                                  "aria-expanded": "true",
                                },
                              },
                              [
                                _c("div", { staticClass: "card-content" }, [
                                  _c(
                                    "div",
                                    { staticClass: "card-body mt-sm-0 mt-2" },
                                    [
                                      _c("div", { staticClass: "row" }, [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "col-lg-6 col-md-6 col-12 t-c",
                                          },
                                          _vm._l(
                                            _vm.candidateDetailJob
                                              .job_smart_answer,
                                            function (item, index) {
                                              return _c(
                                                "p",
                                                { staticClass: "text-v" },
                                                [
                                                  _vm._v(
                                                    "\n                                                                        Q  " +
                                                      _vm._s(index + 1) +
                                                      " : " +
                                                      _vm._s(item.question)
                                                  ),
                                                  _c("br"),
                                                  _vm._v(
                                                    "                                                     \n                                                                        Ans" +
                                                      _vm._s(index + 1) +
                                                      " : " +
                                                      _vm._s(item.answer) +
                                                      "\n                                                                    "
                                                  ),
                                                ]
                                              )
                                            }
                                          ),
                                          0
                                        ),
                                      ]),
                                    ]
                                  ),
                                ]),
                              ]
                            ),
                            _vm._v(" "),
                            _vm._m(8),
                            _vm._v(" "),
                            _vm._m(9),
                            _vm._v(" "),
                            _c("div", { staticClass: "row" }, [
                              _c(
                                "div",
                                { staticClass: "col-2" },
                                [
                                  _c(
                                    "router-link",
                                    {
                                      staticClass: "candi-btn bluew",
                                      attrs: {
                                        to: {
                                          name: "businessOwner.chat.view",
                                          params: { id: this.candidate_id },
                                        },
                                      },
                                    },
                                    [_vm._v("Chat")]
                                  ),
                                ],
                                1
                              ),
                            ]),
                          ]
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
      _c("shortlist", { attrs: { user_id: _vm.user_id, job_id: _vm.job_id } }),
      _vm._v(" "),
      _c("interview", { attrs: { user_id: _vm.user_id, job_id: _vm.job_id } }),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "sts" }, [
      _vm._v("Status: "),
      _c("span", { staticClass: "txt-green" }, [_vm._v("Open")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row user-desc" }, [
      _c("div", { staticClass: "col-12" }, [
        _c("p", [
          _vm._v(
            "Lorem Ipsum is simply dummy text of the printing and typesetting\n                                                    industry. Lorem Ipsum has been the industry's standard dummy text\n                                                    ever since the when an unknown printer took a galley of type and\n                                                    scrambled it to make a type specimen book. It has survived not only\n                                                    five centuries, but also the leap into electronic typesetting,\n                                                    remaining essentially unchanged."
          ),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "card-header", attrs: { id: "headingCollapse11" } },
      [
        _c(
          "a",
          {
            staticClass: "card-title lead",
            attrs: {
              "data-toggle": "collapse",
              href: "#collapse11",
              "aria-expanded": "true",
              "aria-controls": "collapse11",
            },
          },
          [
            _vm._v(
              "Personal\n                                                        Information"
            ),
          ]
        ),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "card-header", attrs: { id: "headingCollapse12" } },
      [
        _c(
          "a",
          {
            staticClass: "card-title lead ",
            attrs: {
              "data-toggle": "collapse",
              href: "#collapse12",
              "aria-expanded": "true",
              "aria-controls": "collapse12",
            },
          },
          [
            _vm._v(
              "Cover\n                                                        Letter"
            ),
          ]
        ),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "collapse show   bg-qqq",
        attrs: {
          id: "collapse12",
          role: "tabpanel",
          "aria-labelledby": "headingCollapse12",
          "aria-expanded": "true",
        },
      },
      [
        _c("div", { staticClass: "card-content" }, [
          _c("div", { staticClass: "card-body mt-sm-0 mt-2" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-lg-12 col-md-12 col-12" }, [
                _c("p", { staticClass: "fieldData" }, [
                  _vm._v(
                    "Lorem ipsum dolor sit amet,\n                                                                        consectetur adipisicing elit. Fugiat obcaecati\n                                                                        ipsam sapiente voluptatem doloremque delectus\n                                                                        deserunt quam nam quod maxime hic id dolorem\n                                                                        similique et quis illo, debitis quos autem!\n                                                                        Lorem ipsum dolor sit amet, consectetur\n                                                                        adipisicing elit. Fugiat obcaecati ipsam\n                                                                        sapiente voluptatem doloremque delectus deserunt\n                                                                        quam nam quod maxime hic id dolorem similique et\n                                                                        quis illo, debitis quos autem"
                  ),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "card-header", attrs: { id: "headingCollapse13" } },
      [
        _c(
          "a",
          {
            staticClass: "card-title lead ",
            attrs: {
              "data-toggle": "collapse",
              href: "#collapse13",
              "aria-expanded": "true",
              "aria-controls": "collapse13",
            },
          },
          [_vm._v("Smart Answers")]
        ),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "collapse show   bg-qqq",
        attrs: {
          id: "collapse13",
          role: "tabpanel",
          "aria-labelledby": "headingCollapse13",
          "aria-expanded": "true",
        },
      },
      [
        _c("div", { staticClass: "card-content" }, [
          _c("div", { staticClass: "card-body mt-sm-0 mt-2" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-lg-6 col-md-6 col-12 t-c" }, [
                _c("p", { staticClass: "fieldData" }, [
                  _vm._v(
                    "Lorem ipsum dolor sit amet,\n                                                                        consectetur adipisicing elit. Fugiat obcaecati\n                                                                        ipsam sapiente voluptatem doloremque delectus\n                                                                        deserunt quam nam quod maxime hic id dolorem\n                                                                        similique et quis illo, debitis quos autem!\n                                                                        Lorem ipsum dolor sit amet, consectetur\n                                                                        adipisicing elit. Fugiat obcaecati ipsam\n                                                                        sapiente voluptatem doloremque delectus deserunt\n                                                                        quam nam quod maxime hic id dolorem similique et\n                                                                        quis illo, debitis quos autem"
                  ),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "card-header", attrs: { id: "headingCollapse17" } },
      [
        _c(
          "a",
          {
            staticClass: "card-title lead ",
            attrs: {
              "data-toggle": "collapse",
              href: "#collapse17",
              "aria-expanded": "true",
              "aria-controls": "collapse17",
            },
          },
          [_vm._v("Smart Answers")]
        ),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "card-header", attrs: { id: "headingCollapse15" } },
      [
        _c(
          "a",
          {
            staticClass: "card-title lead ",
            attrs: {
              "data-toggle": "collapse",
              href: "#collapse15",
              "aria-expanded": "true",
              "aria-controls": "collapse15",
            },
          },
          [
            _vm._v(
              "My\n                                                        Documents"
            ),
          ]
        ),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "collapse show   bg-qqq",
        attrs: {
          id: "collapse15",
          role: "tabpanel",
          "aria-labelledby": "headingCollapse15",
          "aria-expanded": "true",
        },
      },
      [
        _c("div", { staticClass: "card-content" }, [
          _c("div", { staticClass: "card-body mt-sm-0 mt-2" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-12" }, [
                _c("div", { staticClass: "wrap-doc" }),
              ]),
            ]),
          ]),
        ]),
      ]
    )
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/businessOwner/pages/Jobs/Candidates/profile.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/views/businessOwner/pages/Jobs/Candidates/profile.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _profile_vue_vue_type_template_id_1ce68e8d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.vue?vue&type=template&id=1ce68e8d& */ "./resources/js/views/businessOwner/pages/Jobs/Candidates/profile.vue?vue&type=template&id=1ce68e8d&");
/* harmony import */ var _profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.vue?vue&type=script&lang=js& */ "./resources/js/views/businessOwner/pages/Jobs/Candidates/profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _profile_vue_vue_type_template_id_1ce68e8d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _profile_vue_vue_type_template_id_1ce68e8d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/businessOwner/pages/Jobs/Candidates/profile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/businessOwner/pages/Jobs/Candidates/profile.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/views/businessOwner/pages/Jobs/Candidates/profile.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./profile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/businessOwner/pages/Jobs/Candidates/profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/businessOwner/pages/Jobs/Candidates/profile.vue?vue&type=template&id=1ce68e8d&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/views/businessOwner/pages/Jobs/Candidates/profile.vue?vue&type=template&id=1ce68e8d& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_template_id_1ce68e8d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./profile.vue?vue&type=template&id=1ce68e8d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/businessOwner/pages/Jobs/Candidates/profile.vue?vue&type=template&id=1ce68e8d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_template_id_1ce68e8d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_template_id_1ce68e8d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);