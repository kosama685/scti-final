(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[32],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/pages/cvBiulder/create.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/user/pages/cvBiulder/create.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
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
var InnerPageFooter = function InnerPageFooter() {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../../components/InnerPageFooter.vue */ "./resources/js/views/user/components/InnerPageFooter.vue"));
};

var RegisterHeader = function RegisterHeader() {
  return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../../components/RegisterHeader.vue */ "./resources/js/views/user/components/RegisterHeader.vue"));
};

var ExperienceComponent = function ExperienceComponent() {
  return __webpack_require__.e(/*! import() */ 27).then(__webpack_require__.bind(null, /*! ./components/experience.vue */ "./resources/js/views/user/pages/cvBiulder/components/experience.vue"));
};

var EducationComponent = function EducationComponent() {
  return __webpack_require__.e(/*! import() */ 26).then(__webpack_require__.bind(null, /*! ./components/education.vue */ "./resources/js/views/user/pages/cvBiulder/components/education.vue"));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      subjects: ['English', 'Physics', 'Chemistry', 'Maths', 'Latin'],
      interest_subjects: ['Painting', 'Reading'],
      selected: [],
      interest_selected: [],
      first_name: '',
      last_name: '',
      dob: '',
      phone_number: '',
      email: '',
      profession: '',
      interest: '',
      language: '',
      cv: null
    };
  },
  components: {
    InnerPageFooter: InnerPageFooter,
    RegisterHeader: RegisterHeader,
    ExperienceComponent: ExperienceComponent,
    EducationComponent: EducationComponent
  },
  created: function created() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.getCv();

            case 2:
              if (_this.cv != null) {
                _this.$router.push({
                  name: 'user.cvBiulder.view'
                });
              }

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    EditProfile: function EditProfile(e) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var fd, response, self;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                fd = new FormData(_this2.$refs.EditProfileForm);
                console.log();
                fd.append('interest_selected', _this2.interest_selected);
                fd.append('experiences', JSON.stringify(_this2.$refs.experience.experiences));
                fd.append('educations', JSON.stringify(_this2.$refs.education.educations));
                _context2.next = 7;
                return axios.post('/api/user/cvBuilder', fd);

              case 7:
                response = _context2.sent;

                if (response.data.data) {
                  _this2.$snotify.success(response.data.message);

                  _this2.download();

                  self = _this2;
                  setTimeout(function () {
                    self.$router.push({
                      name: 'user.cvBiulder.view'
                    });
                  }, 1000);
                } else {
                  _this2.$snotify.error(response.data.message);
                }

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    download: function download() {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var userId, urlPath, form;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                userId = localStorage.getItem('userId');
                urlPath = "".concat(window.base_url, "/api/user/downloadReume/").concat(userId); //alert(urlPath); 

                form = document.createElement('form');
                form.setAttribute('method', 'GET');
                form.setAttribute('action', urlPath);
                document.body.appendChild(form);
                form.submit(); // await axios.post(route('web.resume.download',template),{is_saved : 1});

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    getCv: function getCv() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return axios.get('/api/user/cv');

              case 2:
                _this3.cv = _context4.sent.data.data;

              case 3:
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/pages/cvBiulder/create.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/user/pages/cvBiulder/create.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.vs__selected{\n    background-color: #e2e2e2;\n    border: 1px solid transparent;\n    border-radius: 10px 10px 0px 10px;\n    cursor: default;\n    float: left;\n    margin-right: 5px;\n    margin-top: 5px;\n    padding: 0 5px;\n    color: #5c5e5f;\n    font-family: 'Jost';\n    margin-right: 15px;\n    position: relative;\n}\n.vs--searchable .vs__dropdown-toggle{\n    border: 2px solid #ebe6e6;\n    margin-bottom: 10px;\n    width: 100%;\n    box-sizing: border-box;\n    line-height: 25px;\n    font-size: 15px;\n    color: #c9c8c8;\n    height: 50px;\n    border-radius: 5px 25px 0px 5px;\n    box-shadow: 0px 0px 8px -2px rgb(0 0 0 / 15%);\n    font-family: 'Jost';\n}\n.vs__deselect{\n    position: absolute;\n    top: -4px;\n    right: -10px;\n    background: #ff0000;\n    fill: #fff !important;\n    border-radius: 50%;\n    width: 14px;\n    height: 14px;\n    display: flex !important;\n    justify-content: center;\n    align-items: center;\n    padding: 0px;\n    font-size: 12px;\n    margin: 0px !important;\n    padding-bottom: 2px;\n}\n.mx-input{\n    border: 2px solid #ebe6e6;\n    margin-bottom: 10px;\n    width: 100%;\n    box-sizing: border-box;\n    line-height: 25px;\n    font-size: 15px;\n    color: #c9c8c8;\n    height: 50px;\n    border-radius: 5px 25px 0px 5px;\n    box-shadow: 0px 0px 8px -2px rgb(0 0 0 / 15%);\n    font-family: 'Jost';\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/pages/cvBiulder/create.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/user/pages/cvBiulder/create.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/pages/cvBiulder/create.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/pages/cvBiulder/create.vue?vue&type=template&id=2f791baa&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/user/pages/cvBiulder/create.vue?vue&type=template&id=2f791baa& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "row mt-2" }, [
            _c(
              "div",
              { staticClass: "col-12" },
              [
                _c("ValidationObserver", {
                  scopedSlots: _vm._u([
                    {
                      key: "default",
                      fn: function (ref) {
                        var handleSubmit = ref.handleSubmit
                        return [
                          _c(
                            "form",
                            {
                              ref: "EditProfileForm",
                              staticClass: "create-cv",
                              attrs: { id: "msform" },
                              on: {
                                submit: function ($event) {
                                  $event.preventDefault()
                                  return handleSubmit(_vm.EditProfile)
                                },
                              },
                            },
                            [
                              _c(
                                "div",
                                { staticClass: "card cv-create-card" },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "card-header cv-header" },
                                    [_c("p", [_vm._v("Personal Information")])]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "card-body cv-card-body" },
                                    [
                                      _c("div", { staticClass: "form-row" }, [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "col-xl-4 col-lg-6 col-12",
                                          },
                                          [
                                            _c(
                                              "div",
                                              { staticClass: "form-group" },
                                              [
                                                _c("ValidationProvider", {
                                                  attrs: {
                                                    tag: "div",
                                                    name: "first name",
                                                    rules: "required",
                                                    vid: "first_name",
                                                  },
                                                  scopedSlots: _vm._u(
                                                    [
                                                      {
                                                        key: "default",
                                                        fn: function (ref) {
                                                          var errors =
                                                            ref.errors
                                                          return [
                                                            _c(
                                                              "label",
                                                              {
                                                                attrs: {
                                                                  for: "fName",
                                                                },
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "First Name"
                                                                ),
                                                              ]
                                                            ),
                                                            _vm._v(" "),
                                                            _c("input", {
                                                              directives: [
                                                                {
                                                                  name: "model",
                                                                  rawName:
                                                                    "v-model",
                                                                  value:
                                                                    _vm.first_name,
                                                                  expression:
                                                                    "first_name",
                                                                },
                                                              ],
                                                              staticClass:
                                                                "form-control reg-input",
                                                              attrs: {
                                                                type: "text",
                                                                id: "fName",
                                                                name: "first_name",
                                                                placeholder:
                                                                  "Enter First Name",
                                                              },
                                                              domProps: {
                                                                value:
                                                                  _vm.first_name,
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
                                                                    _vm.first_name =
                                                                      $event.target.value
                                                                  },
                                                              },
                                                            }),
                                                            _vm._v(" "),
                                                            _c(
                                                              "div",
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
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "col-xl-4 col-lg-6 col-12",
                                          },
                                          [
                                            _c(
                                              "div",
                                              { staticClass: "form-group" },
                                              [
                                                _c("ValidationProvider", {
                                                  attrs: {
                                                    tag: "div",
                                                    name: "last name",
                                                    rules: "required",
                                                    vid: "last_name",
                                                  },
                                                  scopedSlots: _vm._u(
                                                    [
                                                      {
                                                        key: "default",
                                                        fn: function (ref) {
                                                          var errors =
                                                            ref.errors
                                                          return [
                                                            _c(
                                                              "label",
                                                              {
                                                                attrs: {
                                                                  for: "lName",
                                                                },
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "Last Name"
                                                                ),
                                                              ]
                                                            ),
                                                            _vm._v(" "),
                                                            _c("input", {
                                                              directives: [
                                                                {
                                                                  name: "model",
                                                                  rawName:
                                                                    "v-model",
                                                                  value:
                                                                    _vm.last_name,
                                                                  expression:
                                                                    "last_name",
                                                                },
                                                              ],
                                                              staticClass:
                                                                "form-control reg-input",
                                                              attrs: {
                                                                type: "text",
                                                                id: "lName",
                                                                name: "last_name",
                                                                placeholder:
                                                                  "Enter Last Name",
                                                              },
                                                              domProps: {
                                                                value:
                                                                  _vm.last_name,
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
                                                                    _vm.last_name =
                                                                      $event.target.value
                                                                  },
                                                              },
                                                            }),
                                                            _vm._v(" "),
                                                            _c(
                                                              "div",
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
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "col-xl-4 col-lg-12 col-12",
                                          },
                                          [
                                            _c(
                                              "div",
                                              { staticClass: "form-group" },
                                              [
                                                _c("ValidationProvider", {
                                                  attrs: {
                                                    tag: "div",
                                                    name: "dob",
                                                    rules: "required",
                                                    vid: "dob",
                                                  },
                                                  scopedSlots: _vm._u(
                                                    [
                                                      {
                                                        key: "default",
                                                        fn: function (ref) {
                                                          var errors =
                                                            ref.errors
                                                          return [
                                                            _c(
                                                              "label",
                                                              {
                                                                staticClass:
                                                                  "d-block",
                                                                attrs: {
                                                                  for: "dob-picker",
                                                                },
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "Date Of Birth"
                                                                ),
                                                              ]
                                                            ),
                                                            _vm._v(" "),
                                                            _c("input", {
                                                              directives: [
                                                                {
                                                                  name: "model",
                                                                  rawName:
                                                                    "v-model",
                                                                  value:
                                                                    _vm.dob,
                                                                  expression:
                                                                    "dob",
                                                                },
                                                              ],
                                                              attrs: {
                                                                type: "date",
                                                                name: "dob",
                                                              },
                                                              domProps: {
                                                                value: _vm.dob,
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
                                                                    _vm.dob =
                                                                      $event.target.value
                                                                  },
                                                              },
                                                            }),
                                                            _vm._v(" "),
                                                            _c(
                                                              "div",
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
                                      ]),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "form-row" }, [
                                        _c(
                                          "div",
                                          { staticClass: "col-lg-6 col-12" },
                                          [
                                            _c(
                                              "div",
                                              { staticClass: "form-group" },
                                              [
                                                _c("ValidationProvider", {
                                                  attrs: {
                                                    tag: "div",
                                                    name: "phone number",
                                                    rules: "required",
                                                    vid: "phone_number",
                                                  },
                                                  scopedSlots: _vm._u(
                                                    [
                                                      {
                                                        key: "default",
                                                        fn: function (ref) {
                                                          var errors =
                                                            ref.errors
                                                          return [
                                                            _c(
                                                              "label",
                                                              {
                                                                attrs: {
                                                                  for: "phone",
                                                                },
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "Phone Number"
                                                                ),
                                                              ]
                                                            ),
                                                            _vm._v(" "),
                                                            _c("input", {
                                                              directives: [
                                                                {
                                                                  name: "model",
                                                                  rawName:
                                                                    "v-model",
                                                                  value:
                                                                    _vm.phone_number,
                                                                  expression:
                                                                    "phone_number",
                                                                },
                                                              ],
                                                              staticClass:
                                                                "form-control reg-input",
                                                              attrs: {
                                                                type: "number",
                                                                id: "phone",
                                                                name: "phone_number",
                                                                placeholder:
                                                                  "Enter Phone Number",
                                                                value: "+44",
                                                              },
                                                              domProps: {
                                                                value:
                                                                  _vm.phone_number,
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
                                                                    _vm.phone_number =
                                                                      $event.target.value
                                                                  },
                                                              },
                                                            }),
                                                            _vm._v(" "),
                                                            _c(
                                                              "div",
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
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "col-lg-6 col-12" },
                                          [
                                            _c(
                                              "div",
                                              { staticClass: "form-group" },
                                              [
                                                _c("ValidationProvider", {
                                                  attrs: {
                                                    tag: "div",
                                                    name: "email",
                                                    rules: "required",
                                                    vid: "email",
                                                  },
                                                  scopedSlots: _vm._u(
                                                    [
                                                      {
                                                        key: "default",
                                                        fn: function (ref) {
                                                          var errors =
                                                            ref.errors
                                                          return [
                                                            _c(
                                                              "label",
                                                              {
                                                                attrs: {
                                                                  for: "email",
                                                                },
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "Email Address"
                                                                ),
                                                              ]
                                                            ),
                                                            _vm._v(" "),
                                                            _c("input", {
                                                              directives: [
                                                                {
                                                                  name: "model",
                                                                  rawName:
                                                                    "v-model",
                                                                  value:
                                                                    _vm.email,
                                                                  expression:
                                                                    "email",
                                                                },
                                                              ],
                                                              staticClass:
                                                                "form-control reg-input",
                                                              attrs: {
                                                                type: "text",
                                                                id: "email",
                                                                name: "email",
                                                                placeholder:
                                                                  "Enter Email Address",
                                                              },
                                                              domProps: {
                                                                value:
                                                                  _vm.email,
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
                                                                    _vm.email =
                                                                      $event.target.value
                                                                  },
                                                              },
                                                            }),
                                                            _vm._v(" "),
                                                            _c(
                                                              "div",
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
                                      ]),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "form-row" }, [
                                        _c("div", { staticClass: "col-12" }, [
                                          _c(
                                            "div",
                                            { staticClass: "form-group" },
                                            [
                                              _c("ValidationProvider", {
                                                attrs: {
                                                  tag: "div",
                                                  name: "profession",
                                                  rules: "required",
                                                  vid: "profession",
                                                },
                                                scopedSlots: _vm._u(
                                                  [
                                                    {
                                                      key: "default",
                                                      fn: function (ref) {
                                                        var errors = ref.errors
                                                        return [
                                                          _c("label", [
                                                            _vm._v(
                                                              "Profession"
                                                            ),
                                                          ]),
                                                          _vm._v(" "),
                                                          _c("textarea", {
                                                            directives: [
                                                              {
                                                                name: "model",
                                                                rawName:
                                                                  "v-model",
                                                                value:
                                                                  _vm.profession,
                                                                expression:
                                                                  "profession",
                                                              },
                                                            ],
                                                            attrs: {
                                                              name: "profession",
                                                              id: "",
                                                              cols: "30",
                                                              rows: "10",
                                                            },
                                                            domProps: {
                                                              value:
                                                                _vm.profession,
                                                            },
                                                            on: {
                                                              input: function (
                                                                $event
                                                              ) {
                                                                if (
                                                                  $event.target
                                                                    .composing
                                                                ) {
                                                                  return
                                                                }
                                                                _vm.profession =
                                                                  $event.target.value
                                                              },
                                                            },
                                                          }),
                                                          _vm._v(" "),
                                                          _c(
                                                            "div",
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
                                        ]),
                                      ]),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { attrs: { id: "accordion" } },
                                    [
                                      _c("experience-component", {
                                        ref: "experience",
                                        attrs: { isCreate: true },
                                      }),
                                      _vm._v(" "),
                                      _c("education-component", {
                                        ref: "education",
                                        attrs: { isCreate: true },
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "card-header cv-header br-0 ",
                                          attrs: {
                                            id: "card_three",
                                            "data-toggle": "collapse",
                                            "data-target": "#collapseThree",
                                            "aria-expanded": "true",
                                            "aria-controls": "collapseThree",
                                          },
                                        },
                                        [
                                          _c("p", [
                                            _vm._v("Interest & Skills"),
                                          ]),
                                          _vm._v(" "),
                                          _c("i", {
                                            staticClass: "fa fa-angle-down",
                                            attrs: { "aria-hidden": "true" },
                                          }),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass: "collapse show",
                                          attrs: {
                                            id: "collapseThree",
                                            "aria-labelledby": "card_three",
                                            "data-parent": "#accordion",
                                          },
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "card-body cv-card-body",
                                            },
                                            [
                                              _c(
                                                "div",
                                                { staticClass: "form-row" },
                                                [
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass: "col-xl-12",
                                                    },
                                                    [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "form-group",
                                                        },
                                                        [
                                                          _c(
                                                            "ValidationProvider",
                                                            {
                                                              attrs: {
                                                                tag: "div",
                                                                name: "subject",
                                                                rules:
                                                                  "required",
                                                                vid: "interest",
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
                                                                            "label",
                                                                            {
                                                                              attrs:
                                                                                {
                                                                                  for: "sub_interest",
                                                                                },
                                                                            },
                                                                            [
                                                                              _vm._v(
                                                                                "Skill"
                                                                              ),
                                                                            ]
                                                                          ),
                                                                          _vm._v(
                                                                            " "
                                                                          ),
                                                                          _c(
                                                                            "v-select",
                                                                            {
                                                                              attrs:
                                                                                {
                                                                                  multiple:
                                                                                    "",
                                                                                  placeholder:
                                                                                    "Choose up skill!",
                                                                                  label:
                                                                                    "title",
                                                                                  name: "interest_subjects",
                                                                                  options:
                                                                                    _vm.interest_subjects,
                                                                                },
                                                                              model:
                                                                                {
                                                                                  value:
                                                                                    _vm.interest_selected,
                                                                                  callback:
                                                                                    function (
                                                                                      $$v
                                                                                    ) {
                                                                                      _vm.interest_selected =
                                                                                        $$v
                                                                                    },
                                                                                  expression:
                                                                                    "interest_selected",
                                                                                },
                                                                            }
                                                                          ),
                                                                          _vm._v(
                                                                            " "
                                                                          ),
                                                                          _c(
                                                                            "div",
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
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                { staticClass: "form-row" },
                                                [
                                                  _c(
                                                    "div",
                                                    { staticClass: "col-12" },
                                                    [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "form-group",
                                                        },
                                                        [
                                                          _c(
                                                            "ValidationProvider",
                                                            {
                                                              attrs: {
                                                                tag: "div",
                                                                name: "interest",
                                                                rules:
                                                                  "required",
                                                                vid: "interest",
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
                                                                            "label",
                                                                            [
                                                                              _vm._v(
                                                                                "Interest"
                                                                              ),
                                                                            ]
                                                                          ),
                                                                          _vm._v(
                                                                            " "
                                                                          ),
                                                                          _c(
                                                                            "textarea",
                                                                            {
                                                                              directives:
                                                                                [
                                                                                  {
                                                                                    name: "model",
                                                                                    rawName:
                                                                                      "v-model",
                                                                                    value:
                                                                                      _vm.interest,
                                                                                    expression:
                                                                                      "interest",
                                                                                  },
                                                                                ],
                                                                              attrs:
                                                                                {
                                                                                  name: "interest",
                                                                                  id: "",
                                                                                  cols: "30",
                                                                                  rows: "10",
                                                                                },
                                                                              domProps:
                                                                                {
                                                                                  value:
                                                                                    _vm.interest,
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
                                                                                    _vm.interest =
                                                                                      $event.target.value
                                                                                  },
                                                                              },
                                                                            }
                                                                          ),
                                                                          _vm._v(
                                                                            " "
                                                                          ),
                                                                          _c(
                                                                            "div",
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
                                                ]
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-row" }, [
                                    _c("div", { staticClass: "col-12" }, [
                                      _c(
                                        "div",
                                        { staticClass: "button_wrap" },
                                        [
                                          _c(
                                            "button",
                                            {
                                              staticClass:
                                                "btn-cv bloo blue-btn",
                                              attrs: { type: "submit" },
                                            },
                                            [_vm._v("Save & Download")]
                                          ),
                                        ]
                                      ),
                                    ]),
                                  ]),
                                ]
                              ),
                            ]
                          ),
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
    return _c("div", { staticClass: "row mt-5 mb-2" }, [
      _c("div", { staticClass: "col-12 text-center" }, [
        _c("p", { staticClass: "page-heading" }, [_vm._v("Create CV")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/user/pages/cvBiulder/create.vue":
/*!************************************************************!*\
  !*** ./resources/js/views/user/pages/cvBiulder/create.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_vue_vue_type_template_id_2f791baa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=2f791baa& */ "./resources/js/views/user/pages/cvBiulder/create.vue?vue&type=template&id=2f791baa&");
/* harmony import */ var _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js& */ "./resources/js/views/user/pages/cvBiulder/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/user/pages/cvBiulder/create.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _create_vue_vue_type_template_id_2f791baa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _create_vue_vue_type_template_id_2f791baa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/user/pages/cvBiulder/create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/user/pages/cvBiulder/create.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/user/pages/cvBiulder/create.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/pages/cvBiulder/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/user/pages/cvBiulder/create.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/views/user/pages/cvBiulder/create.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/pages/cvBiulder/create.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/user/pages/cvBiulder/create.vue?vue&type=template&id=2f791baa&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/user/pages/cvBiulder/create.vue?vue&type=template&id=2f791baa& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_2f791baa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=template&id=2f791baa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/pages/cvBiulder/create.vue?vue&type=template&id=2f791baa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_2f791baa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_2f791baa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);