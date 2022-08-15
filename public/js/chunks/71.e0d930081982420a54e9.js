(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[71],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/businessOwner/pages/Jobs/Candidates/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/businessOwner/pages/Jobs/Candidates/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
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
//
//
//
//
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
  components: {
    Shortlist: _shortlist__WEBPACK_IMPORTED_MODULE_1__["default"],
    Interview: _interview__WEBPACK_IMPORTED_MODULE_2__["default"] // ChatComponent

  },
  data: function data() {
    return {
      candidates: {},
      reject_candidates: {},
      interest_candidates: {},
      search: '',
      entries: 10,
      check: ''
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
              return _this.getCandidatesOfJobNew();

            case 2:
              _context.next = 4;
              return _this.getCandidatesOfJobInterested();

            case 4:
              _context.next = 6;
              return _this.getCandidatesOfJobRejected();

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    getCandidatesOfJobNew: function getCandidatesOfJobNew() {
      var _arguments = arguments,
          _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var page, id, res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                page = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : 1;
                id = _this2.$route.params.id ? '/' + _this2.$route.params.id : '';
                _context2.next = 4;
                return axios.get("/api/admin/new_candidate/job" + id + "?page=" + page + '&entries=' + _this2.entries);

              case 4:
                res = _context2.sent;
                _this2.candidates = res.data.data;
                console.log('new is', _this2.candidates);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    getCandidatesOfJobInterested: function getCandidatesOfJobInterested() {
      var _arguments2 = arguments,
          _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var page, id, res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                page = _arguments2.length > 0 && _arguments2[0] !== undefined ? _arguments2[0] : 1;
                id = _this3.$route.params.id ? '/' + _this3.$route.params.id : '';
                _context3.next = 4;
                return axios.get("/api/admin/interested_candidate/job" + id + "?page=" + page + '&entries=' + _this3.entries);

              case 4:
                res = _context3.sent;
                _this3.interest_candidates = res.data.data;
                console.log('interest is', _this3.interest_candidates);

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    getCandidatesOfJobRejected: function getCandidatesOfJobRejected() {
      var _arguments3 = arguments,
          _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var page, id, res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                page = _arguments3.length > 0 && _arguments3[0] !== undefined ? _arguments3[0] : 1;
                id = _this4.$route.params.id ? '/' + _this4.$route.params.id : '';
                _context4.next = 4;
                return axios.get("/api/admin/rejected_candidate/job" + id + "?page=" + page + '&entries=' + _this4.entries);

              case 4:
                res = _context4.sent;
                _this4.reject_candidates = res.data.data;
                console.log('reject is', _this4.reject_candidates);

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    download: function download(cv) {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return axios.get("/api/admin/cv/" + cv, {
                  responseType: 'blob'
                }).then(function (response) {
                  console.log(response.data.type); //   console.log(response);

                  var url = window.URL.createObjectURL(new Blob([response.data]));
                  var link = document.createElement('a');
                  link.href = url;
                  link.setAttribute('download', 'file.' + response.data.type); //or any other extension

                  document.body.appendChild(link);
                  link.click();
                });

              case 2:
                response = _context5.sent;

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    updateStatusCandidate: function updateStatusCandidate(user_id) {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        var fd, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _this5.job_id = _this5.$route.params.id;
                fd = new FormData(_this5.$refs.rejected);
                _this5.status = 'Interested';
                fd.append('user_id', user_id);
                fd.append('job_id', _this5.job_id);
                fd.append('status', 'Interested');
                _context6.next = 8;
                return axios.get("api/admin/job/update_candidate/".concat(user_id, "/").concat(_this5.job_id, "/").concat(_this5.status));

              case 8:
                response = _context6.sent.data;

                if (response.data) {
                  _this5.getCandidatesOfJobNew();

                  _this5.getCandidatesOfJobInterested();
                }

              case 10:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    updateStatusCandidateRejected: function updateStatusCandidateRejected(user_id) {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
        var fd, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _this6.job_id = _this6.$route.params.id;
                fd = new FormData(_this6.$refs.rejected);
                _this6.status = 'Rejected';
                fd.append('user_id', user_id);
                fd.append('job_id', _this6.job_id);
                fd.append('status', 'Rejected');
                _context7.next = 8;
                return axios.get("api/admin/job/update_candidate/".concat(user_id, "/").concat(_this6.job_id, "/").concat(_this6.status));

              case 8:
                response = _context7.sent.data;

                if (response.data) {
                  _this6.getCandidatesOfJobNew();

                  _this6.getCandidatesOfJobRejected();
                }

              case 10:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }))();
    },
    updateStatusCandidateHired: function updateStatusCandidateHired(user_id) {
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8() {
        var fd, status, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _this7.job_id = _this7.$route.params.id;
                fd = new FormData(_this7.$refs.rejected);
                fd.append('user_id', user_id);
                fd.append('job_id', _this7.job_id);
                fd.append('status', 'Hired');
                status = 'Hired';
                _context8.next = 8;
                return axios.get("api/admin/job/update_candidate/".concat(user_id, "/").concat(_this7.job_id, "/").concat(status));

              case 8:
                response = _context8.sent.data;

                if (response) {
                  console.log(response);
                }

              case 10:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }))();
    },
    updateStatusCandidateContact: function updateStatusCandidateContact(user_id) {
      var _this8 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9() {
        var fd, status, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _this8.job_id = _this8.$route.params.id;
                fd = new FormData(_this8.$refs.rejected);
                fd.append('user_id', user_id);
                fd.append('job_id', _this8.job_id);
                fd.append('status', 'Contacting');
                status = 'Contacting';
                _context9.next = 8;
                return axios.get("api/admin/job/update_candidate/".concat(user_id, "/").concat(_this8.job_id, "/").concat(status));

              case 8:
                response = _context9.sent.data;

                if (response) {
                  console.log(response);
                }

              case 10:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }))();
    },
    SendDefaultRejectionEmailToCandidate: function SendDefaultRejectionEmailToCandidate(user_id, job_id) {
      var _this9 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10() {
        var fd, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                fd = new FormData();
                fd.append('user_id', user_id);
                fd.append('job_id', job_id);
                fd.append('status', 'Rejected');
                _context10.next = 6;
                return axios.post("/api/admin/job/candidate/status/", fd);

              case 6:
                response = _context10.sent.data;

                if (response.data) {
                  _this9.$snotify.success('Email has been sent successfully.', 'Success'); // this.email_subject = '';
                  // this.email_body = '';
                  // $('#rejected').modal('hide');

                }

              case 8:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/businessOwner/pages/Jobs/Candidates/index.vue?vue&type=template&id=696a9794&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/businessOwner/pages/Jobs/Candidates/index.vue?vue&type=template&id=696a9794& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
                _c("div", { staticClass: "card-body" }, [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-12" }, [
                      _c(
                        "h1",
                        [
                          _c(
                            "router-link",
                            {
                              attrs: {
                                to: { name: "businessOwner.jobs.index" }
                              }
                            },
                            [
                              _c("i", { staticClass: "fa fa-angle-left" }),
                              _vm._v(
                                "Active Candidates\n                                            "
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row align-items-center" }, [
                    _c("div", { staticClass: "col-12 mt-2" }, [
                      _c("div", { attrs: { id: "job_accordion" } }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "card collapse-icon accordion-icon-rotate user_prof_acc user_jobs_acc pb-2 mb-2"
                          },
                          [
                            _vm._m(0),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "collapse show",
                                attrs: {
                                  id: "new_collapse",
                                  role: "tabpanel",
                                  "aria-labelledby": "new"
                                }
                              },
                              [
                                _c("div", { staticClass: "card-content" }, [
                                  _c(
                                    "div",
                                    {
                                      staticClass: "card-body mt-sm-0 mt-2 row"
                                    },
                                    _vm._l(
                                      _vm.candidates[0]
                                        .job_applied_candidate_applied,
                                      function(candidate, index) {
                                        return _vm.candidates[0]
                                          .job_applied_candidate_applied != null
                                          ? _c(
                                              "div",
                                              {
                                                key: index,
                                                staticClass:
                                                  "col-12 col-md-6 col-lg-4 col-xl-3 mb-2 mb-xl-0"
                                              },
                                              [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "card_wrap_job p-2 mb-0"
                                                  },
                                                  [
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "media d-block"
                                                      },
                                                      [
                                                        _c(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "text-right"
                                                          },
                                                          [
                                                            _c(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "btn-group mr-0 mb-0"
                                                              },
                                                              [
                                                                _vm._m(1, true),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "dropdown-menu",
                                                                    attrs: {
                                                                      "x-placement":
                                                                        "bottom-start"
                                                                    }
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "a",
                                                                      {
                                                                        staticClass:
                                                                          "dropdown-item",
                                                                        on: {
                                                                          click: function(
                                                                            $event
                                                                          ) {
                                                                            return _vm.updateStatusCandidate(
                                                                              candidate.user_id
                                                                            )
                                                                          }
                                                                        }
                                                                      },
                                                                      [
                                                                        _vm._v(
                                                                          "Interested"
                                                                        )
                                                                      ]
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "a",
                                                                      {
                                                                        staticClass:
                                                                          "dropdown-item",
                                                                        on: {
                                                                          click: function(
                                                                            $event
                                                                          ) {
                                                                            return _vm.updateStatusCandidateRejected(
                                                                              candidate.user_id
                                                                            )
                                                                          }
                                                                        }
                                                                      },
                                                                      [
                                                                        _vm._v(
                                                                          "Reject"
                                                                        )
                                                                      ]
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "shortlist",
                                                                  {
                                                                    attrs: {
                                                                      user_id:
                                                                        candidate.user_id,
                                                                      job_id:
                                                                        candidate.job_id
                                                                    }
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
                                                              "media-body cn_margin mt-0"
                                                          },
                                                          [
                                                            _c(
                                                              "h5",
                                                              {
                                                                staticClass:
                                                                  "cs-name"
                                                              },
                                                              [
                                                                _vm._v(
                                                                  _vm._s(
                                                                    _vm
                                                                      .candidates[0]
                                                                      .user.name
                                                                  ) + " "
                                                                )
                                                              ]
                                                            ),
                                                            _vm._v(" "),
                                                            _c(
                                                              "h6",
                                                              {
                                                                staticClass:
                                                                  "apply-date"
                                                              },
                                                              [
                                                                _vm._v(
                                                                  _vm._s(
                                                                    candidate.status
                                                                  )
                                                                )
                                                              ]
                                                            ),
                                                            _vm._v(" "),
                                                            _c(
                                                              "router-link",
                                                              {
                                                                staticClass:
                                                                  "cs-prof",
                                                                attrs: {
                                                                  to: {
                                                                    name:
                                                                      "businessOwner.jobs.candidate.profile",
                                                                    params: {
                                                                      id:
                                                                        candidate.user_id,
                                                                      job:
                                                                        _vm
                                                                          .candidates[0]
                                                                          .id
                                                                    }
                                                                  }
                                                                }
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "View profile\n                                                                            "
                                                                )
                                                              ]
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
                                          : _c("div", [
                                              _c("h3", [
                                                _vm._v("No candidate Applied!")
                                              ])
                                            ])
                                      }
                                    ),
                                    0
                                  )
                                ])
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "card collapse-icon accordion-icon-rotate user_prof_acc user_jobs_acc pb-2 mb-2"
                          },
                          [
                            _vm._m(2),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "collapse show",
                                attrs: {
                                  id: "interested_collapse",
                                  role: "tabpanel",
                                  "aria-labelledby": "interested"
                                }
                              },
                              [
                                _c("div", { staticClass: "card-content" }, [
                                  _c(
                                    "div",
                                    {
                                      staticClass: "card-body mt-sm-0 mt-2 row"
                                    },
                                    _vm._l(
                                      _vm.interest_candidates[0]
                                        .job_applied_candidate_check,
                                      function(candidate_item, index) {
                                        return _vm.interest_candidates[0]
                                          .job_applied_candidate_check != null
                                          ? _c(
                                              "div",
                                              {
                                                key: index,
                                                staticClass:
                                                  "col-12 col-md-6 col-lg-4 col-xl-3 mb-2 mb-xl-0"
                                              },
                                              [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "card_wrap_job p-2 mb-0"
                                                  },
                                                  [
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "media d-block"
                                                      },
                                                      [
                                                        _c(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "text-right"
                                                          },
                                                          [
                                                            _c(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "btn-group mr-0 mb-0"
                                                              },
                                                              [
                                                                _vm._m(3, true),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "dropdown-menu",
                                                                    attrs: {
                                                                      "x-placement":
                                                                        "bottom-start"
                                                                    }
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "a",
                                                                      {
                                                                        staticClass:
                                                                          "dropdown-item",
                                                                        attrs: {
                                                                          href:
                                                                            "#",
                                                                          "data-toggle":
                                                                            "modal",
                                                                          "data-target":
                                                                            "#interview"
                                                                        }
                                                                      },
                                                                      [
                                                                        _vm._v(
                                                                          "Interview Scheduled"
                                                                        )
                                                                      ]
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "a",
                                                                      {
                                                                        staticClass:
                                                                          "dropdown-item",
                                                                        on: {
                                                                          click: function(
                                                                            $event
                                                                          ) {
                                                                            return _vm.updateStatusCandidateContact(
                                                                              candidate_item.user_id
                                                                            )
                                                                          }
                                                                        }
                                                                      },
                                                                      [
                                                                        _vm._v(
                                                                          "Contacting"
                                                                        )
                                                                      ]
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "a",
                                                                      {
                                                                        staticClass:
                                                                          "dropdown-item",
                                                                        on: {
                                                                          click: function(
                                                                            $event
                                                                          ) {
                                                                            return _vm.updateStatusCandidateHired(
                                                                              candidate_item.user_id
                                                                            )
                                                                          }
                                                                        }
                                                                      },
                                                                      [
                                                                        _vm._v(
                                                                          "Hired"
                                                                        )
                                                                      ]
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "interview",
                                                                  {
                                                                    attrs: {
                                                                      user_id:
                                                                        candidate_item.user_id,
                                                                      job_id:
                                                                        candidate_item.job_id
                                                                    }
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
                                                              "media-body cn_margin mt-0"
                                                          },
                                                          [
                                                            _c(
                                                              "h5",
                                                              {
                                                                staticClass:
                                                                  "cs-name"
                                                              },
                                                              [
                                                                _vm._v(
                                                                  _vm._s(
                                                                    _vm
                                                                      .interest_candidates[0]
                                                                      .user.name
                                                                  ) + " "
                                                                )
                                                              ]
                                                            ),
                                                            _vm._v(" "),
                                                            _c(
                                                              "h6",
                                                              {
                                                                staticClass:
                                                                  "apply-date"
                                                              },
                                                              [
                                                                _vm._v(
                                                                  _vm._s(
                                                                    candidate_item.status
                                                                  )
                                                                )
                                                              ]
                                                            ),
                                                            _vm._v(" "),
                                                            _c(
                                                              "router-link",
                                                              {
                                                                staticClass:
                                                                  "cs-prof",
                                                                attrs: {
                                                                  to: {
                                                                    name:
                                                                      "businessOwner.jobs.candidate.profile",
                                                                    params: {
                                                                      id:
                                                                        candidate_item.user_id,
                                                                      job:
                                                                        _vm
                                                                          .interest_candidates[0]
                                                                          .id
                                                                    }
                                                                  }
                                                                }
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "View profile\n                                                                            "
                                                                )
                                                              ]
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
                                          : _c("div", [
                                              _c("h3", [
                                                _vm._v("No candidate Applied!")
                                              ])
                                            ])
                                      }
                                    ),
                                    0
                                  )
                                ])
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "card collapse-icon accordion-icon-rotate user_prof_acc user_jobs_acc pb-2 mb-2"
                          },
                          [
                            _vm._m(4),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "collapse show",
                                attrs: {
                                  id: "rejected_collapse",
                                  role: "tabpanel",
                                  "aria-labelledby": "rejected"
                                }
                              },
                              [
                                _c("div", { staticClass: "card-content" }, [
                                  _c(
                                    "div",
                                    {
                                      staticClass: "card-body mt-sm-0 mt-2 row"
                                    },
                                    _vm._l(
                                      _vm.reject_candidates[0]
                                        .job_applied_candidate_rejected,
                                      function(candidate_item, index) {
                                        return _vm.reject_candidates[0]
                                          .job_applied_candidate_rejected !=
                                          null
                                          ? _c(
                                              "div",
                                              {
                                                key: index,
                                                staticClass:
                                                  "col-12 col-md-6 col-lg-4 col-xl-3 mb-2 mb-xl-0"
                                              },
                                              [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "card_wrap_job p-2 mb-0"
                                                  },
                                                  [
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "media d-block"
                                                      },
                                                      [
                                                        _c(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "text-right"
                                                          },
                                                          [
                                                            _c(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "btn-group mr-0 mb-0"
                                                              },
                                                              [
                                                                _vm._m(5, true),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "dropdown-menu",
                                                                    attrs: {
                                                                      "x-placement":
                                                                        "bottom-start"
                                                                    }
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "a",
                                                                      {
                                                                        staticClass:
                                                                          "dropdown-item",
                                                                        on: {
                                                                          click: function(
                                                                            $event
                                                                          ) {
                                                                            return _vm.SendDefaultRejectionEmailToCandidate(
                                                                              candidate_item.user_id,
                                                                              candidate_item.job_id
                                                                            )
                                                                          }
                                                                        }
                                                                      },
                                                                      [
                                                                        _vm._v(
                                                                          "Send Template"
                                                                        )
                                                                      ]
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "a",
                                                                      {
                                                                        staticClass:
                                                                          "dropdown-item",
                                                                        attrs: {
                                                                          href:
                                                                            "#",
                                                                          "data-toggle":
                                                                            "modal",
                                                                          "data-target":
                                                                            "#rejected"
                                                                        }
                                                                      },
                                                                      [
                                                                        _vm._v(
                                                                          "Create New"
                                                                        )
                                                                      ]
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "shortlist",
                                                                  {
                                                                    attrs: {
                                                                      user_id:
                                                                        candidate_item.user_id,
                                                                      job_id:
                                                                        candidate_item.job_id
                                                                    }
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
                                                              "media-body cn_margin mt-0"
                                                          },
                                                          [
                                                            _c(
                                                              "h5",
                                                              {
                                                                staticClass:
                                                                  "cs-name"
                                                              },
                                                              [
                                                                _vm._v(
                                                                  _vm._s(
                                                                    _vm
                                                                      .reject_candidates[0]
                                                                      .user.name
                                                                  )
                                                                )
                                                              ]
                                                            ),
                                                            _vm._v(" "),
                                                            _c(
                                                              "h6",
                                                              {
                                                                staticClass:
                                                                  "apply-date"
                                                              },
                                                              [
                                                                _vm._v(
                                                                  _vm._s(
                                                                    candidate_item.status
                                                                  )
                                                                )
                                                              ]
                                                            ),
                                                            _vm._v(" "),
                                                            _c(
                                                              "router-link",
                                                              {
                                                                staticClass:
                                                                  "cs-prof",
                                                                attrs: {
                                                                  to: {
                                                                    name:
                                                                      "businessOwner.jobs.candidate.profile",
                                                                    params: {
                                                                      id:
                                                                        candidate_item.user_id,
                                                                      job:
                                                                        _vm
                                                                          .reject_candidates[0]
                                                                          .id
                                                                    }
                                                                  }
                                                                }
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "View profile\n                                                                                "
                                                                )
                                                              ]
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
                                          : _c("div", [
                                              _c("h3", [
                                                _vm._v("No candidate Applied!")
                                              ])
                                            ])
                                      }
                                    ),
                                    0
                                  )
                                ])
                              ]
                            )
                          ]
                        )
                      ])
                    ])
                  ])
                ])
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
    return _c("div", { staticClass: "card-header" }, [
      _c(
        "a",
        {
          staticClass: "card-title lead",
          attrs: {
            "data-toggle": "collapse",
            href: "#new_collapse",
            "aria-expanded": "true",
            "aria-controls": "new"
          }
        },
        [_vm._v("New")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "btn btn-drop-table btn-sm",
        attrs: {
          type: "button",
          "data-toggle": "dropdown",
          "aria-haspopup": "true",
          "aria-expanded": "false"
        }
      },
      [_c("i", { staticClass: "fa fa-ellipsis-v" })]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c(
        "a",
        {
          staticClass: "card-title lead",
          attrs: {
            "data-toggle": "collapse",
            href: "#interested_collapse",
            "aria-expanded": "true",
            "aria-controls": "interested"
          }
        },
        [_vm._v("Interested")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "btn btn-drop-table btn-sm",
        attrs: {
          type: "button",
          "data-toggle": "dropdown",
          "aria-haspopup": "true",
          "aria-expanded": "false"
        }
      },
      [_c("i", { staticClass: "fa fa-ellipsis-v" })]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c(
        "a",
        {
          staticClass: "card-title lead",
          attrs: {
            "data-toggle": "collapse",
            href: "#rejected_collapse",
            "aria-expanded": "true",
            "aria-controls": "rejected"
          }
        },
        [_vm._v("Rejected")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "btn btn-drop-table btn-sm",
        attrs: {
          type: "button",
          "data-toggle": "dropdown",
          "aria-haspopup": "true",
          "aria-expanded": "false"
        }
      },
      [_c("i", { staticClass: "fa fa-ellipsis-v" })]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/businessOwner/pages/Jobs/Candidates/index.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/views/businessOwner/pages/Jobs/Candidates/index.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_696a9794___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=696a9794& */ "./resources/js/views/businessOwner/pages/Jobs/Candidates/index.vue?vue&type=template&id=696a9794&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/businessOwner/pages/Jobs/Candidates/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_696a9794___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_696a9794___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/businessOwner/pages/Jobs/Candidates/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/businessOwner/pages/Jobs/Candidates/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/views/businessOwner/pages/Jobs/Candidates/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/businessOwner/pages/Jobs/Candidates/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/businessOwner/pages/Jobs/Candidates/index.vue?vue&type=template&id=696a9794&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/views/businessOwner/pages/Jobs/Candidates/index.vue?vue&type=template&id=696a9794& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_696a9794___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=696a9794& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/businessOwner/pages/Jobs/Candidates/index.vue?vue&type=template&id=696a9794&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_696a9794___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_696a9794___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);