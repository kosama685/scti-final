(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/pages/cvBiulder/components/experience.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/user/pages/cvBiulder/components/experience.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
var questionItem = 0;
var questionairesType = [{
  "name": "Input",
  "key": "input"
}, {
  "name": "Input",
  "key": "input"
}, {
  "name": "Date",
  "key": "date"
}, {
  "name": "Date",
  "key": "date"
}, {
  "name": "Input",
  "key": "input"
}];
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    isCreate: {
      type: Boolean,
      // String, Number, Boolean, Function, Object, Array
      required: false,
      "default": false
    },
    propExperiences: {
      type: Array,
      required: false,
      "default": null
    }
  },
  data: function data() {
    var _ref;

    return _ref = {
      job_type: ['Full Time', 'Part Time'],
      job_type_select: '',
      job_title: '',
      comp_name: ''
    }, _defineProperty(_ref, "job_type_select", ''), _defineProperty(_ref, "exp_strt_date", ''), _defineProperty(_ref, "exp_end_date", ''), _defineProperty(_ref, "current_check", ''), _defineProperty(_ref, "description", ''), _defineProperty(_ref, "experiences", []), _defineProperty(_ref, "isHidden", false), _ref;
  },
  created: function created() {
    if (!this.isCreate) {
      this.experiences = this.propExperiences;
    } else {
      this.experiences.push(this.experienceObj());
    }
  },
  watch: {
    propExperiences: {
      handler: function handler(val) {
        this.experiences = val;
      },
      immediate: false
    }
  },
  mounted: function mounted() {
    console.log("this.propEducations", this.experiences);
  },
  methods: {
    addExperience: function addExperience() {
      //alert(this.experiences.length);
      this.experiences.push(this.experienceObj());
    },
    experienceObj: function experienceObj() {
      return {
        job_title: '',
        company_name: '',
        job_type: '',
        start_date: '',
        end_date: '',
        description: ''
      };
    },
    removeValue: function removeValue(valueIndex) {
      this.experiences.splice(valueIndex, 1);
    } // currently_work() {
    // 	exp_end_date
    // }

  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/pages/cvBiulder/components/experience.vue?vue&type=template&id=8b414cb8&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/user/pages/cvBiulder/components/experience.vue?vue&type=template&id=8b414cb8& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _vm._m(0),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "collapse show",
        attrs: {
          id: "collapseOne",
          "aria-labelledby": "headingOne",
          "data-parent": "#accordion"
        }
      },
      _vm._l(_vm.experiences, function(experience, experienceIndex) {
        return _c(
          "div",
          { key: experienceIndex, staticClass: "card-body cv-card-body" },
          [
            _c(
              "button",
              {
                staticClass: "delete blue-btn float-right",
                attrs: { type: "button" },
                on: {
                  click: function($event) {
                    return _vm.removeValue(experienceIndex)
                  }
                }
              },
              [
                _c("i", {
                  staticClass: "fa fa-trash",
                  attrs: { "aria-hidden": "true" }
                })
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "form-row" }, [
              _c("div", { staticClass: "col-xl-4 col-lg-6 col-12" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("ValidationProvider", {
                      attrs: {
                        tag: "div",
                        name: "job title",
                        rules: "required",
                        vid: "job_title"
                      },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "default",
                            fn: function(ref) {
                              var errors = ref.errors
                              return [
                                _c("label", { attrs: { for: "job-title" } }, [
                                  _vm._v("Job Title")
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: experience.job_title,
                                      expression: "experience.job_title"
                                    }
                                  ],
                                  staticClass: "form-control reg-input",
                                  attrs: {
                                    type: "text",
                                    id: "job-title",
                                    name: "job_title[]",
                                    placeholder: "Enter Job title"
                                  },
                                  domProps: { value: experience.job_title },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        experience,
                                        "job_title",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("div", { staticClass: "text-danger" }, [
                                  _vm._v(_vm._s(errors[0]))
                                ])
                              ]
                            }
                          }
                        ],
                        null,
                        true
                      )
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-xl-4 col-lg-6 col-12" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("ValidationProvider", {
                      attrs: {
                        tag: "div",
                        name: "company name",
                        rules: "required",
                        vid: "comp_name"
                      },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "default",
                            fn: function(ref) {
                              var errors = ref.errors
                              return [
                                _c("label", { attrs: { for: "comp_name" } }, [
                                  _vm._v("Company Name")
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: experience.company_name,
                                      expression: "experience.company_name"
                                    }
                                  ],
                                  staticClass: "form-control reg-input",
                                  attrs: {
                                    type: "text",
                                    id: "comp_name",
                                    name: "company_name[]",
                                    placeholder: "Enter Company Name"
                                  },
                                  domProps: { value: experience.company_name },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        experience,
                                        "company_name",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("div", { staticClass: "text-danger" }, [
                                  _vm._v(_vm._s(errors[0]))
                                ])
                              ]
                            }
                          }
                        ],
                        null,
                        true
                      )
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-xl-4 col-lg-12 col-12" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("ValidationProvider", {
                      attrs: {
                        tag: "div",
                        name: "job type",
                        rules: "required",
                        vid: "job_type"
                      },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "default",
                            fn: function(ref) {
                              var errors = ref.errors
                              return [
                                _c("label", { attrs: { for: "" } }, [
                                  _vm._v("Job Type")
                                ]),
                                _vm._v(" "),
                                _c("v-select", {
                                  attrs: {
                                    placeholder: "Choose up to 3 books!",
                                    label: "title",
                                    name: "job_type[]",
                                    options: _vm.job_type
                                  },
                                  model: {
                                    value: experience.job_type,
                                    callback: function($$v) {
                                      _vm.$set(experience, "job_type", $$v)
                                    },
                                    expression: "experience.job_type"
                                  }
                                }),
                                _vm._v(" "),
                                _c("div", { staticClass: "text-danger" }, [
                                  _vm._v(_vm._s(errors[0]))
                                ])
                              ]
                            }
                          }
                        ],
                        null,
                        true
                      )
                    })
                  ],
                  1
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-row" }, [
              _c("div", { staticClass: "col-lg-6 col-12" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("ValidationProvider", {
                      attrs: {
                        tag: "div",
                        name: "start date",
                        rules: "required",
                        vid: "strt_date"
                      },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "default",
                            fn: function(ref) {
                              var errors = ref.errors
                              return [
                                _c("label", { attrs: { for: "phone" } }, [
                                  _vm._v("Start Date")
                                ]),
                                _vm._v(" "),
                                _c("date-picker", {
                                  staticClass: "u-edit-txt",
                                  attrs: {
                                    id: "exp_strt_date",
                                    valueType: "format",
                                    name: "exp_strt_date[]"
                                  },
                                  model: {
                                    value: experience.start_date,
                                    callback: function($$v) {
                                      _vm.$set(experience, "start_date", $$v)
                                    },
                                    expression: "experience.start_date"
                                  }
                                }),
                                _vm._v(" "),
                                _c("div", { staticClass: "text-danger" }, [
                                  _vm._v(_vm._s(errors[0]))
                                ])
                              ]
                            }
                          }
                        ],
                        null,
                        true
                      )
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-6 col-12" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("ValidationProvider", {
                      attrs: {
                        tag: "div",
                        name: "end date",
                        rules: "required",
                        vid: "end_date"
                      },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "default",
                            fn: function(ref) {
                              var errors = ref.errors
                              return [
                                !_vm.isHidden
                                  ? _c(
                                      "div",
                                      [
                                        _c(
                                          "label",
                                          { attrs: { for: "email" } },
                                          [_vm._v("End Date")]
                                        ),
                                        _vm._v(" "),
                                        _c("date-picker", {
                                          staticClass: "u-edit-txt",
                                          attrs: {
                                            id: "exp_end_date",
                                            valueType: "format",
                                            name: "exp_end_date[]"
                                          },
                                          model: {
                                            value: experience.end_date,
                                            callback: function($$v) {
                                              _vm.$set(
                                                experience,
                                                "end_date",
                                                $$v
                                              )
                                            },
                                            expression: "experience.end_date"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "text-danger" },
                                          [_vm._v(_vm._s(errors[0]))]
                                        )
                                      ],
                                      1
                                    )
                                  : _vm._e()
                              ]
                            }
                          }
                        ],
                        null,
                        true
                      )
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-check text-right" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.current_check,
                            expression: "current_check"
                          }
                        ],
                        staticClass: "form-check-input",
                        attrs: { type: "checkbox", id: "exampleCheck1" },
                        domProps: {
                          checked: Array.isArray(_vm.current_check)
                            ? _vm._i(_vm.current_check, null) > -1
                            : _vm.current_check
                        },
                        on: {
                          click: function($event) {
                            _vm.isHidden = true
                          },
                          change: function($event) {
                            var $$a = _vm.current_check,
                              $$el = $event.target,
                              $$c = $$el.checked ? true : false
                            if (Array.isArray($$a)) {
                              var $$v = null,
                                $$i = _vm._i($$a, $$v)
                              if ($$el.checked) {
                                $$i < 0 &&
                                  (_vm.current_check = $$a.concat([$$v]))
                              } else {
                                $$i > -1 &&
                                  (_vm.current_check = $$a
                                    .slice(0, $$i)
                                    .concat($$a.slice($$i + 1)))
                              }
                            } else {
                              _vm.current_check = $$c
                            }
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.current_check,
                            expression: "current_check"
                          }
                        ],
                        staticClass: "form-check-input",
                        attrs: { type: "checkbox", id: "exampleCheck1" },
                        domProps: {
                          checked: Array.isArray(_vm.current_check)
                            ? _vm._i(_vm.current_check, null) > -1
                            : _vm.current_check
                        },
                        on: {
                          click: function($event) {
                            _vm.isHidden = !_vm.isHidden
                          },
                          change: function($event) {
                            var $$a = _vm.current_check,
                              $$el = $event.target,
                              $$c = $$el.checked ? true : false
                            if (Array.isArray($$a)) {
                              var $$v = null,
                                $$i = _vm._i($$a, $$v)
                              if ($$el.checked) {
                                $$i < 0 &&
                                  (_vm.current_check = $$a.concat([$$v]))
                              } else {
                                $$i > -1 &&
                                  (_vm.current_check = $$a
                                    .slice(0, $$i)
                                    .concat($$a.slice($$i + 1)))
                              }
                            } else {
                              _vm.current_check = $$c
                            }
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "label",
                        {
                          staticClass: "form-check-label",
                          attrs: { for: "exampleCheck1" }
                        },
                        [_vm._v("I Currently Work Here")]
                      )
                    ])
                  ],
                  1
                )
              ])
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
                        name: "description",
                        rules: "required",
                        vid: "description"
                      },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "default",
                            fn: function(ref) {
                              var errors = ref.errors
                              return [
                                _c("label", [_vm._v("Job Description")]),
                                _vm._v(" "),
                                _c("textarea", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: experience.description,
                                      expression: "experience.description"
                                    }
                                  ],
                                  attrs: {
                                    name: "description[]",
                                    id: "",
                                    cols: "30",
                                    rows: "10"
                                  },
                                  domProps: { value: experience.description },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        experience,
                                        "description",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("div", { staticClass: "text-danger" }, [
                                  _vm._v(_vm._s(errors[0]))
                                ])
                              ]
                            }
                          }
                        ],
                        null,
                        true
                      )
                    })
                  ],
                  1
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-row" }, [
              _c("div", { staticClass: "col-12" }, [
                _c("div", { staticClass: "btn-wrap" }, [
                  experienceIndex == _vm.experiences.length - 1
                    ? _c(
                        "button",
                        {
                          staticClass: "blue-btn",
                          attrs: { type: "button" },
                          on: {
                            click: function($event) {
                              return _vm.addExperience()
                            }
                          }
                        },
                        [
                          _c("i", {
                            staticClass: "fa fa-plus",
                            attrs: { "aria-hidden": "true" }
                          }),
                          _vm._v(" "),
                          _c("span", [_vm._v("Add More")])
                        ]
                      )
                    : _vm._e()
                ])
              ])
            ])
          ]
        )
      }),
      0
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "card-header cv-header br-0 ",
        attrs: {
          id: "headingOne",
          "data-toggle": "collapse",
          "data-target": "#collapseOne",
          "aria-expanded": "true",
          "aria-controls": "collapseOne"
        }
      },
      [
        _c("p", [_vm._v("Experience Information")]),
        _vm._v(" "),
        _c("i", {
          staticClass: "fa fa-angle-down",
          attrs: { "aria-hidden": "true" }
        })
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/user/pages/cvBiulder/components/experience.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/views/user/pages/cvBiulder/components/experience.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _experience_vue_vue_type_template_id_8b414cb8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./experience.vue?vue&type=template&id=8b414cb8& */ "./resources/js/views/user/pages/cvBiulder/components/experience.vue?vue&type=template&id=8b414cb8&");
/* harmony import */ var _experience_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./experience.vue?vue&type=script&lang=js& */ "./resources/js/views/user/pages/cvBiulder/components/experience.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _experience_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _experience_vue_vue_type_template_id_8b414cb8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _experience_vue_vue_type_template_id_8b414cb8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/user/pages/cvBiulder/components/experience.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/user/pages/cvBiulder/components/experience.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/views/user/pages/cvBiulder/components/experience.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_experience_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./experience.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/pages/cvBiulder/components/experience.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_experience_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/user/pages/cvBiulder/components/experience.vue?vue&type=template&id=8b414cb8&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/views/user/pages/cvBiulder/components/experience.vue?vue&type=template&id=8b414cb8& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_experience_vue_vue_type_template_id_8b414cb8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./experience.vue?vue&type=template&id=8b414cb8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/pages/cvBiulder/components/experience.vue?vue&type=template&id=8b414cb8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_experience_vue_vue_type_template_id_8b414cb8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_experience_vue_vue_type_template_id_8b414cb8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);