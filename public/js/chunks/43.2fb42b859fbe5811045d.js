(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{301:function(a,e,t){"use strict";t.r(e);var n={props:{sidebarItems:{type:Array,required:!0,default:null}},data:function(){return{clickedIndex:-1,sidebarItemsValue:this.sidebarItems}},methods:{showChildren:function(a){this.clickedIndex==a?this.clickedIndex=-1:this.clickedIndex=a}}},i=t(1),s=Object(i.a)(n,(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"main-menu menu-fixed menu-light menu-accordion",attrs:{"data-scroll-to-active":"true"}},[t("div",{staticClass:"main-menu-content"},[t("ul",{staticClass:"navigation navigation-main",attrs:{id:"main-menu-navigation","data-menu":"menu-navigation"}},a._l(a.sidebarItemsValue,(function(e,n){return t("li",{key:n,staticClass:"nav-item",class:{"has-sub":void 0!==e.children&&e.children.length>0,open:a.clickedIndex==n},on:{click:function(e){return a.showChildren(n)}}},[[void 0!==e.children&&e.children.length>0?t("a",{attrs:{href:"javascript:void(0)"}},[[void 0===e.imageIcon?t("i",{class:e.iconClasses,attrs:{"aria-hidden":"true"}}):t("img",{attrs:{draggable:"false",src:e.imageIcon}})],a._v("\n                        "+a._s(e.name)+"\n                    ")],2):t("router-link",{attrs:{to:{name:e.componentName,params:e.defaultParams},exact:""}},[[void 0===e.imageIcon?t("i",{class:e.iconClasses,attrs:{"aria-hidden":"true"}}):t("img",{attrs:{draggable:"false",src:e.imageIcon}})],a._v(" "),t("span",{staticClass:"menu-title",attrs:{"data-i18n":""}},[a._v(a._s(e.name))])],2)],a._v(" "),void 0!==e.children&&e.children.length>0?t("ul",{staticClass:"menu-content"},a._l(e.children,(function(n,i){return t("li",[t("router-link",{staticClass:"menu-item",attrs:{to:{name:n.componentName,params:n.defaultParams},exact:""}},[[void 0===e.imageIcon?t("i",{class:e.iconClasses,attrs:{"aria-hidden":"true"}}):t("img",{attrs:{draggable:"false",src:e.imageIcon}})],a._v(" "),t("span",{staticClass:"menu-title",attrs:{"data-i18n":""}},[a._v(a._s(n.name))])],2)],1)})),0):a._e()],2)})),0)])])}),[],!1,null,null,null);e.default=s.exports}}]);