/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nbutton,\nform,\ninput,\nlabel {\n  font-family: \"Oxygen\", sans-serif;\n}\n\nbutton {\n  background: none;\n  color: blue;\n}\n\ninput {\n  background: none;\n  color: red;\n}\n\n.header {\n  color: white;\n  background-color: rgb(84, 76, 194);\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  padding: 2rem;\n}\n\n.tasks__container {\n  border: 2px solid black;\n  border-radius: 2rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 50vw;\n  height: 50vh;\n  position: relative;\n}\n.tasks__container__project {\n  display: flex;\n  align-self: flex-start;\n  width: 100%;\n  margin-bottom: 1rem;\n  align-self: flex-start;\n  justify-content: space-between;\n}\n.tasks__container__project h2 {\n  margin-top: 1rem;\n  margin-left: 2rem;\n}\n.tasks__container__project-options {\n  margin-right: 1.9rem;\n}\n.tasks__container__project-options .tasks__project--name {\n  margin: 1rem;\n  border-radius: 0.4rem;\n  padding: 0.1rem 0.4rem;\n}\n.tasks__container__project-options .tasks__project--delete {\n  padding: 0.1rem 1.4rem;\n  border-radius: 0.4rem;\n}\n.tasks__container--add {\n  margin-bottom: 1rem;\n  width: inherit;\n  display: flex;\n  justify-content: center;\n}\n.tasks__container--add input {\n  width: 85%;\n  margin-right: 1rem;\n  margin-left: 2rem;\n  padding: 0.2rem;\n  padding-left: 1rem;\n  border-radius: 0.5rem;\n}\n.tasks__container--add button {\n  min-width: 5.5rem;\n  border-radius: 0.5rem;\n  margin-right: 2rem;\n}\n.tasks__container--list {\n  width: inherit;\n  height: inherit;\n  display: flex;\n  flex-direction: column;\n  padding: 2.5rem;\n  overflow: auto;\n}\n.tasks__container--list li {\n  list-style: none;\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 1rem;\n  border-bottom: 2px solid black;\n  padding-bottom: 0.5rem;\n}\n.tasks__container--list li input {\n  border: 1px solid green;\n  align-self: center;\n  order: 1;\n}\n.tasks__container--list li label {\n  margin-left: 2rem;\n  flex: 1;\n}\n.tasks__container--list li button {\n  margin-left: 2rem;\n  order: 2;\n}\n.tasks__completed-count {\n  position: absolute;\n  bottom: -2rem;\n  right: 4rem;\n}\n\n@media only screen and (max-width: 780px) {\n  .tasks__container {\n    border: 2px solid black;\n    border-radius: 2rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 50vw;\n    height: 50vh;\n    position: relative;\n  }\n  .tasks__container__project {\n    flex-direction: column;\n    margin-left: 2rem;\n  }\n}\n.projects__container {\n  border: 1px solid black;\n  border-radius: 2rem;\n  margin-right: 2rem;\n  height: 50vh;\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  background-color: #d9d9d9;\n}\n.projects__container--add {\n  display: flex;\n  justify-content: space-between;\n  padding-bottom: 1rem;\n  margin-top: 0.5rem;\n  margin-bottom: 1rem;\n  border-bottom: 1px solid black;\n}\n.projects__container--add input {\n  margin-right: 1rem;\n  border-radius: 0.5rem;\n}\n.projects__container--add button {\n  min-width: fit-content;\n  border-radius: 0.5rem;\n  padding: 0.2rem;\n}\n.projects__container--list {\n  display: flex;\n  justify-content: center;\n  overflow: auto;\n}\n.projects__container--list ul {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n}\n.projects__container--list ul li {\n  display: block;\n  margin-bottom: 0.3rem;\n}\n.projects__container--list ul li input {\n  padding: 0.5rem 1rem;\n  width: 16.5rem;\n  border-radius: 2rem;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n}\n\n.main__container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  height: 80vh;\n}", "",{"version":3,"sources":["webpack://./src/styles/base/_reset.scss","webpack://./src/styles/main.scss","webpack://./src/styles/base/_fonts.scss","webpack://./src/styles/components/_buttons.scss","webpack://./src/styles/layout/_header.scss","webpack://./src/styles/layout/_tasks.scss","webpack://./src/styles/layout/_projects.scss","webpack://./src/styles/layout/_main.scss"],"names":[],"mappings":"AAAA;EACE,UAAA;EACA,SAAA;EACA,sBAAA;ACEF;;ACHA;;;;;;;;;;;EAWE,iCAAA;ADMF;;AEnBA;EACE,gBAAA;EACA,WAAA;AFsBF;;AEnBA;EACE,gBAAA;EACA,UAAA;AFsBF;;AG7BA;EACE,YAAA;EACA,kCAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,aAAA;AHgCF;;AIrCE;EACE,uBAAA;EACA,mBAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;AJwCJ;AItCI;EACE,aAAA;EACA,sBAAA;EACA,WAAA;EACA,mBAAA;EACA,sBAAA;EACA,8BAAA;AJwCN;AItCM;EACE,gBAAA;EACA,iBAAA;AJwCR;AIrCM;EACE,oBAAA;AJuCR;AIpCU;EACE,YAAA;EACA,qBAAA;EACA,sBAAA;AJsCZ;AIpCU;EACE,sBAAA;EACA,qBAAA;AJsCZ;AIhCI;EACE,mBAAA;EACA,cAAA;EACA,aAAA;EACA,uBAAA;AJkCN;AIhCM;EACE,UAAA;EACA,kBAAA;EACA,iBAAA;EACA,eAAA;EACA,kBAAA;EACA,qBAAA;AJkCR;AI/BM;EACE,iBAAA;EACA,qBAAA;EACA,kBAAA;AJiCR;AI7BI;EACE,cAAA;EACA,eAAA;EACA,aAAA;EACA,sBAAA;EACA,eAAA;EACA,cAAA;AJ+BN;AI5BM;EACE,gBAAA;EACA,aAAA;EACA,yBAAA;EACA,mBAAA;EACA,8BAAA;EACA,sBAAA;AJ8BR;AI5BQ;EACE,uBAAA;EACA,kBAAA;EACA,QAAA;AJ8BV;AI3BQ;EACE,iBAAA;EACA,OAAA;AJ6BV;AI1BQ;EACE,iBAAA;EACA,QAAA;AJ4BV;AItBE;EACE,kBAAA;EACA,aAAA;EACA,WAAA;AJwBJ;;AIpBA;EAEI;IACE,uBAAA;IACA,mBAAA;IACA,aAAA;IACA,sBAAA;IACA,mBAAA;IACA,WAAA;IACA,YAAA;IACA,kBAAA;EJsBJ;EIpBI;IACE,sBAAA;IACA,iBAAA;EJsBN;AACF;AK/IA;EACE,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,YAAA;EACA,aAAA;EACA,aAAA;EACA,sBAAA;EACA,yBAAA;ALiJF;AK/IE;EACE,aAAA;EACA,8BAAA;EACA,oBAAA;EACA,kBAAA;EACA,mBAAA;EACA,8BAAA;ALiJJ;AK/II;EACE,kBAAA;EACA,qBAAA;ALiJN;AK9II;EACE,sBAAA;EACA,qBAAA;EACA,eAAA;ALgJN;AK5IE;EAEE,aAAA;EACA,uBAAA;EACA,cAAA;AL6IJ;AK3II;EACE,gBAAA;EACA,aAAA;EACA,sBAAA;AL6IN;AK3IM;EACE,cAAA;EACA,qBAAA;AL6IR;AK3IQ;EACE,oBAAA;EACA,cAAA;EACA,mBAAA;AL6IV;;AM7LA;EACE,aAAA;EACA,sBAAA;EACA,eAAA;ANgMF;;AM5LE;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,eAAA;EAEA,YAAA;AN8LJ","sourcesContent":["* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n","@import url(\"https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap\");\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nbutton,\nform,\ninput,\nlabel {\n  font-family: \"Oxygen\", sans-serif;\n}\n\nbutton {\n  background: none;\n  color: blue;\n}\n\ninput {\n  background: none;\n  color: red;\n}\n\n.header {\n  color: white;\n  background-color: rgb(84, 76, 194);\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  padding: 2rem;\n}\n\n.tasks__container {\n  border: 2px solid black;\n  border-radius: 2rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 50vw;\n  height: 50vh;\n  position: relative;\n}\n.tasks__container__project {\n  display: flex;\n  align-self: flex-start;\n  width: 100%;\n  margin-bottom: 1rem;\n  align-self: flex-start;\n  justify-content: space-between;\n}\n.tasks__container__project h2 {\n  margin-top: 1rem;\n  margin-left: 2rem;\n}\n.tasks__container__project-options {\n  margin-right: 1.9rem;\n}\n.tasks__container__project-options .tasks__project--name {\n  margin: 1rem;\n  border-radius: 0.4rem;\n  padding: 0.1rem 0.4rem;\n}\n.tasks__container__project-options .tasks__project--delete {\n  padding: 0.1rem 1.4rem;\n  border-radius: 0.4rem;\n}\n.tasks__container--add {\n  margin-bottom: 1rem;\n  width: inherit;\n  display: flex;\n  justify-content: center;\n}\n.tasks__container--add input {\n  width: 85%;\n  margin-right: 1rem;\n  margin-left: 2rem;\n  padding: 0.2rem;\n  padding-left: 1rem;\n  border-radius: 0.5rem;\n}\n.tasks__container--add button {\n  min-width: 5.5rem;\n  border-radius: 0.5rem;\n  margin-right: 2rem;\n}\n.tasks__container--list {\n  width: inherit;\n  height: inherit;\n  display: flex;\n  flex-direction: column;\n  padding: 2.5rem;\n  overflow: auto;\n}\n.tasks__container--list li {\n  list-style: none;\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 1rem;\n  border-bottom: 2px solid black;\n  padding-bottom: 0.5rem;\n}\n.tasks__container--list li input {\n  border: 1px solid green;\n  align-self: center;\n  order: 1;\n}\n.tasks__container--list li label {\n  margin-left: 2rem;\n  flex: 1;\n}\n.tasks__container--list li button {\n  margin-left: 2rem;\n  order: 2;\n}\n.tasks__completed-count {\n  position: absolute;\n  bottom: -2rem;\n  right: 4rem;\n}\n\n@media only screen and (max-width: 780px) {\n  .tasks__container {\n    border: 2px solid black;\n    border-radius: 2rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 50vw;\n    height: 50vh;\n    position: relative;\n  }\n  .tasks__container__project {\n    flex-direction: column;\n    margin-left: 2rem;\n  }\n}\n.projects__container {\n  border: 1px solid black;\n  border-radius: 2rem;\n  margin-right: 2rem;\n  height: 50vh;\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  background-color: #d9d9d9;\n}\n.projects__container--add {\n  display: flex;\n  justify-content: space-between;\n  padding-bottom: 1rem;\n  margin-top: 0.5rem;\n  margin-bottom: 1rem;\n  border-bottom: 1px solid black;\n}\n.projects__container--add input {\n  margin-right: 1rem;\n  border-radius: 0.5rem;\n}\n.projects__container--add button {\n  min-width: fit-content;\n  border-radius: 0.5rem;\n  padding: 0.2rem;\n}\n.projects__container--list {\n  display: flex;\n  justify-content: center;\n  overflow: auto;\n}\n.projects__container--list ul {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n}\n.projects__container--list ul li {\n  display: block;\n  margin-bottom: 0.3rem;\n}\n.projects__container--list ul li input {\n  padding: 0.5rem 1rem;\n  width: 16.5rem;\n  border-radius: 2rem;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n}\n\n.main__container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  height: 80vh;\n}","@import url(\"https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap\");\n\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nbutton,\nform,\ninput,\nlabel {\n  font-family: \"Oxygen\", sans-serif;\n}\n","button {\n  background: none;\n  color: blue;\n}\n\ninput {\n  background: none;\n  color: red;\n}\n",".header {\n  color: white;\n  background-color: rgb(84, 76, 194);\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  padding: 2rem;\n}\n",".tasks {\n  &__container {\n    border: 2px solid black;\n    border-radius: 2rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 50vw;\n    height: 50vh;\n    position: relative;\n\n    &__project {\n      display: flex;\n      align-self: flex-start;\n      width: 100%;\n      margin-bottom: 1rem;\n      align-self: flex-start;\n      justify-content: space-between;\n\n      h2 {\n        margin-top: 1rem;\n        margin-left: 2rem;\n      }\n\n      &-options {\n        margin-right: 1.9rem;\n\n        .tasks__project {\n          &--name {\n            margin: 1rem;\n            border-radius: 0.4rem;\n            padding: 0.1rem 0.4rem;\n          }\n          &--delete {\n            padding: 0.1rem 1.4rem;\n            border-radius: 0.4rem;\n          }\n        }\n      }\n    }\n\n    &--add {\n      margin-bottom: 1rem;\n      width: inherit;\n      display: flex;\n      justify-content: center;\n\n      input {\n        width: 85%;\n        margin-right: 1rem;\n        margin-left: 2rem;\n        padding: 0.2rem;\n        padding-left: 1rem;\n        border-radius: 0.5rem;\n      }\n\n      button {\n        min-width: 5.5rem;\n        border-radius: 0.5rem;\n        margin-right: 2rem;\n      }\n    }\n\n    &--list {\n      width: inherit;\n      height: inherit;\n      display: flex;\n      flex-direction: column;\n      padding: 2.5rem;\n      overflow: auto;\n\n      //individual task\n      li {\n        list-style: none;\n        display: flex;\n        justify-content: flex-end;\n        margin-bottom: 1rem;\n        border-bottom: 2px solid black;\n        padding-bottom: 0.5rem;\n\n        input {\n          border: 1px solid green;\n          align-self: center;\n          order: 1;\n        }\n\n        label {\n          margin-left: 2rem;\n          flex: 1;\n        }\n\n        button {\n          margin-left: 2rem;\n          order: 2;\n        }\n      }\n    }\n  }\n\n  &__completed-count {\n    position: absolute;\n    bottom: -2rem;\n    right: 4rem;\n  }\n}\n\n@media only screen and (max-width: 780px) {\n  .tasks {\n    &__container {\n      border: 2px solid black;\n      border-radius: 2rem;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      width: 50vw;\n      height: 50vh;\n      position: relative;\n\n      &__project {\n        flex-direction: column;\n        margin-left: 2rem;\n      }\n    }\n  }\n}\n",".projects__container {\n  border: 1px solid black;\n  border-radius: 2rem;\n  margin-right: 2rem;\n  height: 50vh;\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  background-color: #d9d9d9;\n\n  &--add {\n    display: flex;\n    justify-content: space-between;\n    padding-bottom: 1rem;\n    margin-top: 0.5rem;\n    margin-bottom: 1rem;\n    border-bottom: 1px solid black;\n\n    input {\n      margin-right: 1rem;\n      border-radius: 0.5rem;\n    }\n\n    button {\n      min-width: fit-content;\n      border-radius: 0.5rem;\n      padding: 0.2rem;\n    }\n  }\n\n  &--list {\n    // border: 1px solid black;\n    display: flex;\n    justify-content: center;\n    overflow: auto;\n\n    ul {\n      list-style: none;\n      display: flex;\n      flex-direction: column;\n\n      li {\n        display: block;\n        margin-bottom: 0.3rem;\n\n        input {\n          padding: 0.5rem 1rem;\n          width: 16.5rem;\n          border-radius: 2rem;\n        }\n      }\n    }\n  }\n}\n","body {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n}\n\n.main {\n  &__container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap;\n    // border: 1px solid black;\n    height: 80vh;\n  }\n}\n\n@media only screen and (width: 780px) {\n  body {\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/script/projects/projects.js":
/*!*****************************************!*\
  !*** ./src/script/projects/projects.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project),
/* harmony export */   "projects": () => (/* binding */ projects)
/* harmony export */ });
/* harmony import */ var _tasks_tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tasks/tasks */ "./src/script/tasks/tasks.js");
/* harmony import */ var _projectsRender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectsRender */ "./src/script/projects/projectsRender.js");




const projects = [];
class Project {
  static count = 0;

  constructor(name) {
    this.name = name;
    this.tasks = [];
    this.completedTasks = [];

    Project.count += 1;
    this.id = `p-${Project.count}`;

    projects.push(this);
  }

  addTask(name) {
    const newTask = new _tasks_tasks__WEBPACK_IMPORTED_MODULE_0__["default"](name, this);
    this.tasks.push(newTask);
  }

  completeTask(id) {
    this.tasks.forEach((task, i, arr) => {
      if (task.id === id) {
        let completedTask = arr.splice(i, 1);
        this.completedTasks.push(...completedTask);
      }
    });
  }

  deleteTask(id) {
    this.tasks.forEach((task, i, arr) => {
      if (task.id === id) arr.splice(i, 1);
    });
  }

  delete() {
    projects.forEach((e, i, arr) => {
      e.id === this.id ? arr.splice(i, 1) : null;
    });
  }

  changeName(name) {
    this.name = name;
  }
}


/***/ }),

/***/ "./src/script/projects/projectsRender.js":
/*!***********************************************!*\
  !*** ./src/script/projects/projectsRender.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProjectBtn": () => (/* binding */ addProjectBtn),
/* harmony export */   "inputProject": () => (/* binding */ inputProject),
/* harmony export */   "projectsRender": () => (/* binding */ projectsRender)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/script/projects/projects.js");




const mainContainer = document.querySelector(".main__container");

const projectsContainer = document.querySelector(".projects__container");
const projectsContainerAdd = document.createElement("div");
projectsContainerAdd.setAttribute("class", "projects__container--add");
const inputProject = document.createElement("input");
inputProject.setAttribute("min", 5);
inputProject.setAttribute("class", "projects__input");
const addProjectBtn = document.createElement("button");
addProjectBtn.setAttribute("class", "projects__add");
addProjectBtn.textContent = "Add Project";

mainContainer.prepend(projectsContainer);
projectsContainer.appendChild(projectsContainerAdd);
projectsContainerAdd.appendChild(inputProject);
projectsContainerAdd.appendChild(addProjectBtn);

const projectsContainerList = document.createElement("div");
projectsContainerList.setAttribute("class", "projects__container--list");
projectsContainer.appendChild(projectsContainerList);
const projectsList = document.createElement("ul");
projectsContainerList.appendChild(projectsList);

// export default function addProjectRender(id) {
//   const projectLi = document.createElement("li");
//   projectsList.appendChild(projectLi);

//   const projectBtnName = document.createElement("input");
//   projectBtnName.setAttribute("type", "button");
//   projectBtnName.setAttribute("id", id);
//   projectBtnName.setAttribute("class", "projects__button");
//   projectLi.appendChild(projectBtnName);
//   projectBtnName.value = inputProject.value;
//   inputProject.value = "";

//   return projectBtnName;
// }

function projectsRender() {
  projectsList.textContent = "";
  _projects__WEBPACK_IMPORTED_MODULE_0__.projects.forEach((e) => {
    const projectLi = document.createElement("li");
    projectsList.appendChild(projectLi);

    const projectBtnName = document.createElement("input");
    projectBtnName.setAttribute("type", "button");
    projectBtnName.setAttribute("id", e.id);
    projectBtnName.setAttribute("class", "projects__button");
    projectBtnName.value = e.name;

    // const projectBtnDelete = document.createElement("button");
    // projectBtnDelete.textContent = "D";

    projectLi.appendChild(projectBtnName);
    // projectLi.appendChild(projectBtnDelete);

    return e.id;
  });
}


/***/ }),

/***/ "./src/script/tasks/tasks.js":
/*!***********************************!*\
  !*** ./src/script/tasks/tasks.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
/* harmony import */ var _projects_projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../projects/projects */ "./src/script/projects/projects.js");



class Task {
  static count = 0;
  constructor(name, project) {
    this.name = name;
    this.projectAssociated = project;
    Task.count += 1;
    this.id = `t-${Task.count}`;
  }
}

// when user clicks tasks, open settings
// task settings -> delete, complete, change color, change name


/***/ }),

/***/ "./src/script/tasks/tasksRender.js":
/*!*****************************************!*\
  !*** ./src/script/tasks/tasksRender.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTaskBtn": () => (/* binding */ addTaskBtn),
/* harmony export */   "addTaskInput": () => (/* binding */ addTaskInput),
/* harmony export */   "completedTasksCountRender": () => (/* binding */ completedTasksCountRender),
/* harmony export */   "default": () => (/* binding */ tasksRender),
/* harmony export */   "renderTaskAddContainer": () => (/* binding */ renderTaskAddContainer),
/* harmony export */   "tasksContainer": () => (/* binding */ tasksContainer),
/* harmony export */   "tasksProjectChangeName": () => (/* binding */ tasksProjectChangeName),
/* harmony export */   "tasksProjectDelete": () => (/* binding */ tasksProjectDelete)
/* harmony export */ });


const tasksContainer = document.querySelector(".tasks__container");

// tasks counter
const tasksCompletedCounter = document.createElement("p");
tasksCompletedCounter.textContent = "Completed tasks: ";
tasksCompletedCounter.setAttribute("class", "tasks__completed-count");
tasksContainer.appendChild(tasksCompletedCounter);

//Project Name
const tasksContainerProjectName = document.createElement("div");
//prettier-ignore
tasksContainerProjectName.setAttribute("class","tasks__container__project");
tasksContainer.appendChild(tasksContainerProjectName);
const tasksProjectName = document.createElement("h2");

// project options div
const tasksProjectOptions = document.createElement("div");
tasksProjectOptions.setAttribute("id", "tasksProjectOptions");
tasksProjectOptions.setAttribute("class", "tasks__container__project-options");

// project delete btn
const tasksProjectDelete = document.createElement("button");
tasksProjectDelete.setAttribute("id", "deleteProjectBtn");
tasksProjectDelete.setAttribute("class", "tasks__project--delete");
tasksProjectDelete.textContent = "Delete";

// project change name btn
const tasksProjectChangeName = document.createElement("button");
tasksProjectChangeName.textContent = "Change name";
tasksProjectChangeName.setAttribute("id", "changeProjectName");
tasksProjectChangeName.setAttribute("class", "tasks__project--name");

tasksProjectOptions.appendChild(tasksProjectChangeName);
tasksProjectOptions.appendChild(tasksProjectDelete);

tasksContainerProjectName.appendChild(tasksProjectName);
tasksContainerProjectName.appendChild(tasksProjectOptions);

// ADD CONTAINER
const tasksAddContainer = document.createElement("div");
tasksAddContainer.setAttribute("class", "tasks__container--add");
tasksContainer.appendChild(tasksAddContainer);

const addTaskInput = document.createElement("input");
const addTaskBtn = document.createElement("button");
addTaskBtn.textContent = "Add task";

const tasksContainerList = document.createElement("ul");
tasksContainerList.setAttribute("class", "tasks__container--list");
tasksContainer.appendChild(tasksContainerList);

// Task Add Container
let taskAddContainerDisplay = false;
function renderTaskAddContainer() {
  if (!taskAddContainerDisplay) {
    tasksAddContainer.appendChild(addTaskInput);
    tasksAddContainer.appendChild(addTaskBtn);

    taskAddContainerDisplay = true;
  }
}

//Completed Tasks
function completedTasksCountRender(project) {
  const count = project.completedTasks.length;
  tasksCompletedCounter.textContent = `Completed tasks: ${count}`;
}
//Tasks
function tasksRender(project) {
  tasksProjectName.textContent = project.name;
  tasksContainerList.textContent = "";

  project.tasks.forEach((task) => {
    const taskLi = document.createElement("li");
    taskLi.setAttribute("id", task.id);
    tasksContainerList.appendChild(taskLi);

    const checkBoxTask = document.createElement("input");
    const labelTask = document.createElement("label");
    const btnDeleteTask = document.createElement("button");
    btnDeleteTask.setAttribute("class", `${task.id}-delete`);
    checkBoxTask.setAttribute("type", "checkbox");
    checkBoxTask.setAttribute("id", `${task.id}-cp`);
    checkBoxTask.setAttribute("value", task.name);
    checkBoxTask.setAttribute("name", task.name);
    labelTask.setAttribute("for", task.name);
    labelTask.setAttribute("contenteditable", "true");
    labelTask.textContent = task.name;
    btnDeleteTask.textContent = "D";
    taskLi.appendChild(checkBoxTask);
    taskLi.appendChild(labelTask);
    taskLi.appendChild(btnDeleteTask);
  });
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************!*\
  !*** ./src/script/app.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _tasks_tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks/tasks */ "./src/script/tasks/tasks.js");
/* harmony import */ var _tasks_tasksRender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks/tasksRender */ "./src/script/tasks/tasksRender.js");
/* harmony import */ var _projects_projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects/projects */ "./src/script/projects/projects.js");
/* harmony import */ var _projects_projectsRender__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects/projectsRender */ "./src/script/projects/projectsRender.js");









// import addProjectRender from "./projects/projectsRender";



// main container selection
const mainDOM = document.querySelector(".main__container");

let currProject;
// Create project
_projects_projectsRender__WEBPACK_IMPORTED_MODULE_4__.addProjectBtn.addEventListener("click", () => {
  // const projectRender = addProjectRender(newProject.id);
  // projectRender.addEventListener("click", (e) => {
  // if (projectRender.id === newProject.id) {
  // newProject.renderTasks()
  // }
  // });
  if (_projects_projectsRender__WEBPACK_IMPORTED_MODULE_4__.inputProject.value.length > 2) {
    const newProject = new _projects_projects__WEBPACK_IMPORTED_MODULE_3__["default"](_projects_projectsRender__WEBPACK_IMPORTED_MODULE_4__.inputProject.value);
    _projects_projectsRender__WEBPACK_IMPORTED_MODULE_4__.inputProject.value = "";
  } else alert("You need to add a minimum of 3 characters");

  (0,_projects_projectsRender__WEBPACK_IMPORTED_MODULE_4__.projectsRender)();
});

const proj1 = new _projects_projects__WEBPACK_IMPORTED_MODULE_3__["default"]("Workout");
proj1.addTask("Run 2km");
currProject = proj1;

// Render tasks when user clicks project btn
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("projects__button")) {
    (0,_tasks_tasksRender__WEBPACK_IMPORTED_MODULE_2__.renderTaskAddContainer)();
    const domProjectId = e.target.id;
    _projects_projects__WEBPACK_IMPORTED_MODULE_3__.projects.forEach((project) => {
      if (project.id === domProjectId) {
        currProject = project;
        (0,_tasks_tasksRender__WEBPACK_IMPORTED_MODULE_2__.completedTasksCountRender)(currProject);
        (0,_tasks_tasksRender__WEBPACK_IMPORTED_MODULE_2__["default"])(currProject);
      }
    });
  }
});

// add task to project
_tasks_tasksRender__WEBPACK_IMPORTED_MODULE_2__.addTaskBtn.addEventListener("click", (e) => {
  currProject.addTask(_tasks_tasksRender__WEBPACK_IMPORTED_MODULE_2__.addTaskInput.value);
  (0,_tasks_tasksRender__WEBPACK_IMPORTED_MODULE_2__["default"])(currProject);
  _tasks_tasksRender__WEBPACK_IMPORTED_MODULE_2__.addTaskInput.value = "";
});

// complete task
document.addEventListener("click", (e) => {
  if (e.target.getAttribute("type") === "checkbox") {
    const checkboxTask = e.target;
    const taskLi = checkboxTask.parentElement;
    if (checkboxTask.checked) {
      currProject.completeTask(taskLi.id);
      (0,_tasks_tasksRender__WEBPACK_IMPORTED_MODULE_2__.completedTasksCountRender)(currProject);
      taskLi.remove();
    }
  }
});

// delete task
document.addEventListener("click", (e) => {
  if (e.target.textContent === "D") {
    currProject.deleteTask(e.target.parentElement.id);
    e.target.parentElement.remove();
    (0,_tasks_tasksRender__WEBPACK_IMPORTED_MODULE_2__["default"])(currProject);
  }
});

// delete project
_tasks_tasksRender__WEBPACK_IMPORTED_MODULE_2__.tasksProjectDelete.addEventListener("click", (e) => {
  // add default project in case is the last project you delete
  if (_projects_projects__WEBPACK_IMPORTED_MODULE_3__.projects.length === 1) {
    const newProject = new _projects_projects__WEBPACK_IMPORTED_MODULE_3__["default"]("Start Project");
  }

  currProject.delete();
  currProject = _projects_projects__WEBPACK_IMPORTED_MODULE_3__.projects[0];

  (0,_tasks_tasksRender__WEBPACK_IMPORTED_MODULE_2__["default"])(currProject);
  (0,_projects_projectsRender__WEBPACK_IMPORTED_MODULE_4__.projectsRender)();
});

// change project name
_tasks_tasksRender__WEBPACK_IMPORTED_MODULE_2__.tasksProjectChangeName.addEventListener("click", (e) => {
  const newName = prompt("Change the name to:");

  if (newName.length > 2) {
    currProject.changeName(newName);
  } else alert("Name must contain minimum of 3 characters");

  (0,_tasks_tasksRender__WEBPACK_IMPORTED_MODULE_2__["default"])(currProject);
  (0,_projects_projectsRender__WEBPACK_IMPORTED_MODULE_4__.projectsRender)();
});

(0,_tasks_tasksRender__WEBPACK_IMPORTED_MODULE_2__.completedTasksCountRender)(proj1);
(0,_projects_projectsRender__WEBPACK_IMPORTED_MODULE_4__.projectsRender)();
(0,_tasks_tasksRender__WEBPACK_IMPORTED_MODULE_2__["default"])(proj1);
(0,_tasks_tasksRender__WEBPACK_IMPORTED_MODULE_2__.renderTaskAddContainer)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YsK0dBQStHLElBQUksa0JBQWtCO0FBQ3JJO0FBQ0EsNkNBQTZDLGVBQWUsY0FBYywyQkFBMkIsR0FBRyxxRUFBcUUsd0NBQXdDLEdBQUcsWUFBWSxxQkFBcUIsZ0JBQWdCLEdBQUcsV0FBVyxxQkFBcUIsZUFBZSxHQUFHLGFBQWEsaUJBQWlCLHVDQUF1QyxpQkFBaUIsa0JBQWtCLDRCQUE0QixrQkFBa0IsR0FBRyx1QkFBdUIsNEJBQTRCLHdCQUF3QixrQkFBa0IsMkJBQTJCLHdCQUF3QixnQkFBZ0IsaUJBQWlCLHVCQUF1QixHQUFHLDhCQUE4QixrQkFBa0IsMkJBQTJCLGdCQUFnQix3QkFBd0IsMkJBQTJCLG1DQUFtQyxHQUFHLGlDQUFpQyxxQkFBcUIsc0JBQXNCLEdBQUcsc0NBQXNDLHlCQUF5QixHQUFHLDREQUE0RCxpQkFBaUIsMEJBQTBCLDJCQUEyQixHQUFHLDhEQUE4RCwyQkFBMkIsMEJBQTBCLEdBQUcsMEJBQTBCLHdCQUF3QixtQkFBbUIsa0JBQWtCLDRCQUE0QixHQUFHLGdDQUFnQyxlQUFlLHVCQUF1QixzQkFBc0Isb0JBQW9CLHVCQUF1QiwwQkFBMEIsR0FBRyxpQ0FBaUMsc0JBQXNCLDBCQUEwQix1QkFBdUIsR0FBRywyQkFBMkIsbUJBQW1CLG9CQUFvQixrQkFBa0IsMkJBQTJCLG9CQUFvQixtQkFBbUIsR0FBRyw4QkFBOEIscUJBQXFCLGtCQUFrQiw4QkFBOEIsd0JBQXdCLG1DQUFtQywyQkFBMkIsR0FBRyxvQ0FBb0MsNEJBQTRCLHVCQUF1QixhQUFhLEdBQUcsb0NBQW9DLHNCQUFzQixZQUFZLEdBQUcscUNBQXFDLHNCQUFzQixhQUFhLEdBQUcsMkJBQTJCLHVCQUF1QixrQkFBa0IsZ0JBQWdCLEdBQUcsK0NBQStDLHVCQUF1Qiw4QkFBOEIsMEJBQTBCLG9CQUFvQiw2QkFBNkIsMEJBQTBCLGtCQUFrQixtQkFBbUIseUJBQXlCLEtBQUssZ0NBQWdDLDZCQUE2Qix3QkFBd0IsS0FBSyxHQUFHLHdCQUF3Qiw0QkFBNEIsd0JBQXdCLHVCQUF1QixpQkFBaUIsa0JBQWtCLGtCQUFrQiwyQkFBMkIsOEJBQThCLEdBQUcsNkJBQTZCLGtCQUFrQixtQ0FBbUMseUJBQXlCLHVCQUF1Qix3QkFBd0IsbUNBQW1DLEdBQUcsbUNBQW1DLHVCQUF1QiwwQkFBMEIsR0FBRyxvQ0FBb0MsMkJBQTJCLDBCQUEwQixvQkFBb0IsR0FBRyw4QkFBOEIsa0JBQWtCLDRCQUE0QixtQkFBbUIsR0FBRyxpQ0FBaUMscUJBQXFCLGtCQUFrQiwyQkFBMkIsR0FBRyxvQ0FBb0MsbUJBQW1CLDBCQUEwQixHQUFHLDBDQUEwQyx5QkFBeUIsbUJBQW1CLHdCQUF3QixHQUFHLFVBQVUsa0JBQWtCLDJCQUEyQixvQkFBb0IsR0FBRyxzQkFBc0Isa0JBQWtCLDRCQUE0Qix3QkFBd0Isb0JBQW9CLGlCQUFpQixHQUFHLE9BQU8sZ1pBQWdaLFVBQVUsVUFBVSxXQUFXLE1BQU0sZUFBZSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsT0FBTyxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLDZCQUE2QixlQUFlLGNBQWMsMkJBQTJCLEdBQUcsNEVBQTRFLElBQUksb0JBQW9CLEtBQUssZUFBZSxjQUFjLDJCQUEyQixHQUFHLHFFQUFxRSx3Q0FBd0MsR0FBRyxZQUFZLHFCQUFxQixnQkFBZ0IsR0FBRyxXQUFXLHFCQUFxQixlQUFlLEdBQUcsYUFBYSxpQkFBaUIsdUNBQXVDLGlCQUFpQixrQkFBa0IsNEJBQTRCLGtCQUFrQixHQUFHLHVCQUF1Qiw0QkFBNEIsd0JBQXdCLGtCQUFrQiwyQkFBMkIsd0JBQXdCLGdCQUFnQixpQkFBaUIsdUJBQXVCLEdBQUcsOEJBQThCLGtCQUFrQiwyQkFBMkIsZ0JBQWdCLHdCQUF3QiwyQkFBMkIsbUNBQW1DLEdBQUcsaUNBQWlDLHFCQUFxQixzQkFBc0IsR0FBRyxzQ0FBc0MseUJBQXlCLEdBQUcsNERBQTRELGlCQUFpQiwwQkFBMEIsMkJBQTJCLEdBQUcsOERBQThELDJCQUEyQiwwQkFBMEIsR0FBRywwQkFBMEIsd0JBQXdCLG1CQUFtQixrQkFBa0IsNEJBQTRCLEdBQUcsZ0NBQWdDLGVBQWUsdUJBQXVCLHNCQUFzQixvQkFBb0IsdUJBQXVCLDBCQUEwQixHQUFHLGlDQUFpQyxzQkFBc0IsMEJBQTBCLHVCQUF1QixHQUFHLDJCQUEyQixtQkFBbUIsb0JBQW9CLGtCQUFrQiwyQkFBMkIsb0JBQW9CLG1CQUFtQixHQUFHLDhCQUE4QixxQkFBcUIsa0JBQWtCLDhCQUE4Qix3QkFBd0IsbUNBQW1DLDJCQUEyQixHQUFHLG9DQUFvQyw0QkFBNEIsdUJBQXVCLGFBQWEsR0FBRyxvQ0FBb0Msc0JBQXNCLFlBQVksR0FBRyxxQ0FBcUMsc0JBQXNCLGFBQWEsR0FBRywyQkFBMkIsdUJBQXVCLGtCQUFrQixnQkFBZ0IsR0FBRywrQ0FBK0MsdUJBQXVCLDhCQUE4QiwwQkFBMEIsb0JBQW9CLDZCQUE2QiwwQkFBMEIsa0JBQWtCLG1CQUFtQix5QkFBeUIsS0FBSyxnQ0FBZ0MsNkJBQTZCLHdCQUF3QixLQUFLLEdBQUcsd0JBQXdCLDRCQUE0Qix3QkFBd0IsdUJBQXVCLGlCQUFpQixrQkFBa0Isa0JBQWtCLDJCQUEyQiw4QkFBOEIsR0FBRyw2QkFBNkIsa0JBQWtCLG1DQUFtQyx5QkFBeUIsdUJBQXVCLHdCQUF3QixtQ0FBbUMsR0FBRyxtQ0FBbUMsdUJBQXVCLDBCQUEwQixHQUFHLG9DQUFvQywyQkFBMkIsMEJBQTBCLG9CQUFvQixHQUFHLDhCQUE4QixrQkFBa0IsNEJBQTRCLG1CQUFtQixHQUFHLGlDQUFpQyxxQkFBcUIsa0JBQWtCLDJCQUEyQixHQUFHLG9DQUFvQyxtQkFBbUIsMEJBQTBCLEdBQUcsMENBQTBDLHlCQUF5QixtQkFBbUIsd0JBQXdCLEdBQUcsVUFBVSxrQkFBa0IsMkJBQTJCLG9CQUFvQixHQUFHLHNCQUFzQixrQkFBa0IsNEJBQTRCLHdCQUF3QixvQkFBb0IsaUJBQWlCLEdBQUcsMEVBQTBFLElBQUksb0JBQW9CLHFFQUFxRSx3Q0FBd0MsR0FBRyxhQUFhLHFCQUFxQixnQkFBZ0IsR0FBRyxXQUFXLHFCQUFxQixlQUFlLEdBQUcsY0FBYyxpQkFBaUIsdUNBQXVDLGlCQUFpQixrQkFBa0IsNEJBQTRCLGtCQUFrQixHQUFHLGFBQWEsa0JBQWtCLDhCQUE4QiwwQkFBMEIsb0JBQW9CLDZCQUE2QiwwQkFBMEIsa0JBQWtCLG1CQUFtQix5QkFBeUIsb0JBQW9CLHNCQUFzQiwrQkFBK0Isb0JBQW9CLDRCQUE0QiwrQkFBK0IsdUNBQXVDLGNBQWMsMkJBQTJCLDRCQUE0QixTQUFTLHFCQUFxQiwrQkFBK0IsNkJBQTZCLHFCQUFxQiwyQkFBMkIsb0NBQW9DLHFDQUFxQyxhQUFhLHVCQUF1QixxQ0FBcUMsb0NBQW9DLGFBQWEsV0FBVyxTQUFTLE9BQU8sZ0JBQWdCLDRCQUE0Qix1QkFBdUIsc0JBQXNCLGdDQUFnQyxpQkFBaUIscUJBQXFCLDZCQUE2Qiw0QkFBNEIsMEJBQTBCLDZCQUE2QixnQ0FBZ0MsU0FBUyxrQkFBa0IsNEJBQTRCLGdDQUFnQyw2QkFBNkIsU0FBUyxPQUFPLGlCQUFpQix1QkFBdUIsd0JBQXdCLHNCQUFzQiwrQkFBK0Isd0JBQXdCLHVCQUF1Qix1Q0FBdUMsMkJBQTJCLHdCQUF3QixvQ0FBb0MsOEJBQThCLHlDQUF5QyxpQ0FBaUMsbUJBQW1CLG9DQUFvQywrQkFBK0IscUJBQXFCLFdBQVcsbUJBQW1CLDhCQUE4QixvQkFBb0IsV0FBVyxvQkFBb0IsOEJBQThCLHFCQUFxQixXQUFXLFNBQVMsT0FBTyxLQUFLLDBCQUEwQix5QkFBeUIsb0JBQW9CLGtCQUFrQixLQUFLLEdBQUcsK0NBQStDLFlBQVksb0JBQW9CLGdDQUFnQyw0QkFBNEIsc0JBQXNCLCtCQUErQiw0QkFBNEIsb0JBQW9CLHFCQUFxQiwyQkFBMkIsc0JBQXNCLGlDQUFpQyw0QkFBNEIsU0FBUyxPQUFPLEtBQUssR0FBRywyQkFBMkIsNEJBQTRCLHdCQUF3Qix1QkFBdUIsaUJBQWlCLGtCQUFrQixrQkFBa0IsMkJBQTJCLDhCQUE4QixjQUFjLG9CQUFvQixxQ0FBcUMsMkJBQTJCLHlCQUF5QiwwQkFBMEIscUNBQXFDLGVBQWUsMkJBQTJCLDhCQUE4QixPQUFPLGdCQUFnQiwrQkFBK0IsOEJBQThCLHdCQUF3QixPQUFPLEtBQUssZUFBZSxpQ0FBaUMsb0JBQW9CLDhCQUE4QixxQkFBcUIsWUFBWSx5QkFBeUIsc0JBQXNCLCtCQUErQixjQUFjLHlCQUF5QixnQ0FBZ0MsbUJBQW1CLGlDQUFpQywyQkFBMkIsZ0NBQWdDLFdBQVcsU0FBUyxPQUFPLEtBQUssR0FBRyxXQUFXLGtCQUFrQiwyQkFBMkIsb0JBQW9CLEdBQUcsV0FBVyxrQkFBa0Isb0JBQW9CLDhCQUE4QiwwQkFBMEIsc0JBQXNCLGlDQUFpQyxtQkFBbUIsS0FBSyxHQUFHLDJDQUEyQyxVQUFVLEtBQUssR0FBRyxxQkFBcUI7QUFDajliO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBaUo7QUFDako7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQywySEFBTzs7OztBQUkyRjtBQUNuSCxPQUFPLGlFQUFlLDJIQUFPLElBQUksa0lBQWMsR0FBRyxrSUFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZmE7QUFDcUI7QUFDWTs7QUFFdkM7QUFDUTtBQUNmOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLGNBQWM7O0FBRWpDO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0Isb0RBQUk7QUFDNUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaERhO0FBQ29CO0FBQ0s7O0FBRXRDOztBQUVBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVPO0FBQ1A7QUFDQSxFQUFFLHVEQUFnQjtBQUNsQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7O0FDOURhO0FBQzhCOztBQUU1QjtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsV0FBVztBQUM5QjtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkYTs7QUFFTjs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ087QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ0E7QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNPO0FBQ1A7QUFDQSwwREFBMEQsTUFBTTtBQUNoRTtBQUNBO0FBQ2U7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxRQUFRO0FBQ25EO0FBQ0EsdUNBQXVDLFFBQVE7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7O1VDL0ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTmE7O0FBRWdCOztBQUVJO0FBQ2lDO0FBUXJDOztBQUVhO0FBQzFDO0FBQytDO0FBS1o7O0FBRW5DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9GQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLE1BQU0sK0VBQXlCO0FBQy9CLDJCQUEyQiwwREFBTyxDQUFDLHdFQUFrQjtBQUNyRCxJQUFJLHdFQUFrQjtBQUN0QixJQUFJOztBQUVKLEVBQUUsd0VBQWM7QUFDaEIsQ0FBQzs7QUFFRCxrQkFBa0IsMERBQU87QUFDekI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDBFQUFzQjtBQUMxQjtBQUNBLElBQUksZ0VBQWdCO0FBQ3BCO0FBQ0E7QUFDQSxRQUFRLDZFQUF5QjtBQUNqQyxRQUFRLDhEQUFXO0FBQ25CO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLDJFQUEyQjtBQUMzQixzQkFBc0Isa0VBQWtCO0FBQ3hDLEVBQUUsOERBQVc7QUFDYixFQUFFLGtFQUFrQjtBQUNwQixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSw2RUFBeUI7QUFDL0I7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw4REFBVztBQUNmO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLG1GQUFtQztBQUNuQztBQUNBLE1BQU0sK0RBQWU7QUFDckIsMkJBQTJCLDBEQUFPO0FBQ2xDOztBQUVBO0FBQ0EsZ0JBQWdCLDJEQUFXOztBQUUzQixFQUFFLDhEQUFXO0FBQ2IsRUFBRSx3RUFBYztBQUNoQixDQUFDOztBQUVEO0FBQ0EsdUZBQXVDO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQSxJQUFJOztBQUVKLEVBQUUsOERBQVc7QUFDYixFQUFFLHdFQUFjO0FBQ2hCLENBQUM7O0FBRUQsNkVBQXlCO0FBQ3pCLHdFQUFjO0FBQ2QsOERBQVc7QUFDWCwwRUFBc0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGVzL21haW4uc2Nzcz82OWM3Iiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zY3JpcHQvcHJvamVjdHMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zY3JpcHQvcHJvamVjdHMvcHJvamVjdHNSZW5kZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zY3JpcHQvdGFza3MvdGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zY3JpcHQvdGFza3MvdGFza3NSZW5kZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zY3JpcHQvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3h5Z2VuOndnaHRAMzAwOzQwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxucCxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5idXR0b24sXFxuZm9ybSxcXG5pbnB1dCxcXG5sYWJlbCB7XFxuICBmb250LWZhbWlseTogXFxcIk94eWdlblxcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgY29sb3I6IGJsdWU7XFxufVxcblxcbmlucHV0IHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig4NCwgNzYsIDE5NCk7XFxuICB3aWR0aDogMTAwdnc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAycmVtO1xcbn1cXG5cXG4udGFza3NfX2NvbnRhaW5lciB7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogNTB2dztcXG4gIGhlaWdodDogNTB2aDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnRhc2tzX19jb250YWluZXJfX3Byb2plY3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4udGFza3NfX2NvbnRhaW5lcl9fcHJvamVjdCBoMiB7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XFxufVxcbi50YXNrc19fY29udGFpbmVyX19wcm9qZWN0LW9wdGlvbnMge1xcbiAgbWFyZ2luLXJpZ2h0OiAxLjlyZW07XFxufVxcbi50YXNrc19fY29udGFpbmVyX19wcm9qZWN0LW9wdGlvbnMgLnRhc2tzX19wcm9qZWN0LS1uYW1lIHtcXG4gIG1hcmdpbjogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcXG4gIHBhZGRpbmc6IDAuMXJlbSAwLjRyZW07XFxufVxcbi50YXNrc19fY29udGFpbmVyX19wcm9qZWN0LW9wdGlvbnMgLnRhc2tzX19wcm9qZWN0LS1kZWxldGUge1xcbiAgcGFkZGluZzogMC4xcmVtIDEuNHJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcXG59XFxuLnRhc2tzX19jb250YWluZXItLWFkZCB7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgd2lkdGg6IGluaGVyaXQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi50YXNrc19fY29udGFpbmVyLS1hZGQgaW5wdXQge1xcbiAgd2lkdGg6IDg1JTtcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xcbiAgcGFkZGluZzogMC4ycmVtO1xcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbn1cXG4udGFza3NfX2NvbnRhaW5lci0tYWRkIGJ1dHRvbiB7XFxuICBtaW4td2lkdGg6IDUuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIG1hcmdpbi1yaWdodDogMnJlbTtcXG59XFxuLnRhc2tzX19jb250YWluZXItLWxpc3Qge1xcbiAgd2lkdGg6IGluaGVyaXQ7XFxuICBoZWlnaHQ6IGluaGVyaXQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDIuNXJlbTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG4udGFza3NfX2NvbnRhaW5lci0tbGlzdCBsaSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcXG59XFxuLnRhc2tzX19jb250YWluZXItLWxpc3QgbGkgaW5wdXQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBvcmRlcjogMTtcXG59XFxuLnRhc2tzX19jb250YWluZXItLWxpc3QgbGkgbGFiZWwge1xcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XFxuICBmbGV4OiAxO1xcbn1cXG4udGFza3NfX2NvbnRhaW5lci0tbGlzdCBsaSBidXR0b24ge1xcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XFxuICBvcmRlcjogMjtcXG59XFxuLnRhc2tzX19jb21wbGV0ZWQtY291bnQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAtMnJlbTtcXG4gIHJpZ2h0OiA0cmVtO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc4MHB4KSB7XFxuICAudGFza3NfX2NvbnRhaW5lciB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogNTB2dztcXG4gICAgaGVpZ2h0OiA1MHZoO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB9XFxuICAudGFza3NfX2NvbnRhaW5lcl9fcHJvamVjdCB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xcbiAgfVxcbn1cXG4ucHJvamVjdHNfX2NvbnRhaW5lciB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxuICBoZWlnaHQ6IDUwdmg7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDlkOWQ5O1xcbn1cXG4ucHJvamVjdHNfX2NvbnRhaW5lci0tYWRkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxufVxcbi5wcm9qZWN0c19fY29udGFpbmVyLS1hZGQgaW5wdXQge1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbn1cXG4ucHJvamVjdHNfX2NvbnRhaW5lci0tYWRkIGJ1dHRvbiB7XFxuICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgcGFkZGluZzogMC4ycmVtO1xcbn1cXG4ucHJvamVjdHNfX2NvbnRhaW5lci0tbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuLnByb2plY3RzX19jb250YWluZXItLWxpc3QgdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4ucHJvamVjdHNfX2NvbnRhaW5lci0tbGlzdCB1bCBsaSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbi1ib3R0b206IDAuM3JlbTtcXG59XFxuLnByb2plY3RzX19jb250YWluZXItLWxpc3QgdWwgbGkgaW5wdXQge1xcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICB3aWR0aDogMTYuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5tYWluX19jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGhlaWdodDogODB2aDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9iYXNlL19yZXNldC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL21haW4uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9iYXNlL19mb250cy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2NvbXBvbmVudHMvX2J1dHRvbnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9sYXlvdXQvX2hlYWRlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2xheW91dC9fdGFza3Muc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9sYXlvdXQvX3Byb2plY3RzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbGF5b3V0L19tYWluLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0FDRUY7O0FDSEE7Ozs7Ozs7Ozs7O0VBV0UsaUNBQUE7QURNRjs7QUVuQkE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUZzQkY7O0FFbkJBO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0FGc0JGOztBRzdCQTtFQUNFLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FIZ0NGOztBSXJDRTtFQUNFLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUp3Q0o7QUl0Q0k7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FKd0NOO0FJdENNO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBSndDUjtBSXJDTTtFQUNFLG9CQUFBO0FKdUNSO0FJcENVO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUpzQ1o7QUlwQ1U7RUFDRSxzQkFBQTtFQUNBLHFCQUFBO0FKc0NaO0FJaENJO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FKa0NOO0FJaENNO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBSmtDUjtBSS9CTTtFQUNFLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBSmlDUjtBSTdCSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUorQk47QUk1Qk07RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtBSjhCUjtBSTVCUTtFQUNFLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FKOEJWO0FJM0JRO0VBQ0UsaUJBQUE7RUFDQSxPQUFBO0FKNkJWO0FJMUJRO0VBQ0UsaUJBQUE7RUFDQSxRQUFBO0FKNEJWO0FJdEJFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBSndCSjs7QUlwQkE7RUFFSTtJQUNFLHVCQUFBO0lBQ0EsbUJBQUE7SUFDQSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSxtQkFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7RUpzQko7RUlwQkk7SUFDRSxzQkFBQTtJQUNBLGlCQUFBO0VKc0JOO0FBQ0Y7QUsvSUE7RUFDRSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0FMaUpGO0FLL0lFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUxpSko7QUsvSUk7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0FMaUpOO0FLOUlJO0VBQ0Usc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUxnSk47QUs1SUU7RUFFRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FMNklKO0FLM0lJO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUw2SU47QUszSU07RUFDRSxjQUFBO0VBQ0EscUJBQUE7QUw2SVI7QUszSVE7RUFDRSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBTDZJVjs7QU03TEE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FOZ01GOztBTTVMRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUVBLFlBQUE7QU44TEpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXCIsXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PeHlnZW46d2dodEAzMDA7NDAwOzcwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG4qIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5wLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbmJ1dHRvbixcXG5mb3JtLFxcbmlucHV0LFxcbmxhYmVsIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3h5Z2VuXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBjb2xvcjogYmx1ZTtcXG59XFxuXFxuaW5wdXQge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg0LCA3NiwgMTk0KTtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDJyZW07XFxufVxcblxcbi50YXNrc19fY29udGFpbmVyIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA1MHZ3O1xcbiAgaGVpZ2h0OiA1MHZoO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4udGFza3NfX2NvbnRhaW5lcl9fcHJvamVjdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi50YXNrc19fY29udGFpbmVyX19wcm9qZWN0IGgyIHtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBtYXJnaW4tbGVmdDogMnJlbTtcXG59XFxuLnRhc2tzX19jb250YWluZXJfX3Byb2plY3Qtb3B0aW9ucyB7XFxuICBtYXJnaW4tcmlnaHQ6IDEuOXJlbTtcXG59XFxuLnRhc2tzX19jb250YWluZXJfX3Byb2plY3Qtb3B0aW9ucyAudGFza3NfX3Byb2plY3QtLW5hbWUge1xcbiAgbWFyZ2luOiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xcbiAgcGFkZGluZzogMC4xcmVtIDAuNHJlbTtcXG59XFxuLnRhc2tzX19jb250YWluZXJfX3Byb2plY3Qtb3B0aW9ucyAudGFza3NfX3Byb2plY3QtLWRlbGV0ZSB7XFxuICBwYWRkaW5nOiAwLjFyZW0gMS40cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xcbn1cXG4udGFza3NfX2NvbnRhaW5lci0tYWRkIHtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICB3aWR0aDogaW5oZXJpdDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLnRhc2tzX19jb250YWluZXItLWFkZCBpbnB1dCB7XFxuICB3aWR0aDogODUlO1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XFxuICBwYWRkaW5nOiAwLjJyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxufVxcbi50YXNrc19fY29udGFpbmVyLS1hZGQgYnV0dG9uIHtcXG4gIG1pbi13aWR0aDogNS41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcbn1cXG4udGFza3NfX2NvbnRhaW5lci0tbGlzdCB7XFxuICB3aWR0aDogaW5oZXJpdDtcXG4gIGhlaWdodDogaW5oZXJpdDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMi41cmVtO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcbi50YXNrc19fY29udGFpbmVyLS1saXN0IGxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xcbn1cXG4udGFza3NfX2NvbnRhaW5lci0tbGlzdCBsaSBpbnB1dCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIG9yZGVyOiAxO1xcbn1cXG4udGFza3NfX2NvbnRhaW5lci0tbGlzdCBsaSBsYWJlbCB7XFxuICBtYXJnaW4tbGVmdDogMnJlbTtcXG4gIGZsZXg6IDE7XFxufVxcbi50YXNrc19fY29udGFpbmVyLS1saXN0IGxpIGJ1dHRvbiB7XFxuICBtYXJnaW4tbGVmdDogMnJlbTtcXG4gIG9yZGVyOiAyO1xcbn1cXG4udGFza3NfX2NvbXBsZXRlZC1jb3VudCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IC0ycmVtO1xcbiAgcmlnaHQ6IDRyZW07XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzgwcHgpIHtcXG4gIC50YXNrc19fY29udGFpbmVyIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA1MHZ3O1xcbiAgICBoZWlnaHQ6IDUwdmg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIH1cXG4gIC50YXNrc19fY29udGFpbmVyX19wcm9qZWN0IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XFxuICB9XFxufVxcbi5wcm9qZWN0c19fY29udGFpbmVyIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gIG1hcmdpbi1yaWdodDogMnJlbTtcXG4gIGhlaWdodDogNTB2aDtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkOWQ5ZDk7XFxufVxcbi5wcm9qZWN0c19fY29udGFpbmVyLS1hZGQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG59XFxuLnByb2plY3RzX19jb250YWluZXItLWFkZCBpbnB1dCB7XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxufVxcbi5wcm9qZWN0c19fY29udGFpbmVyLS1hZGQgYnV0dG9uIHtcXG4gIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBwYWRkaW5nOiAwLjJyZW07XFxufVxcbi5wcm9qZWN0c19fY29udGFpbmVyLS1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG4ucHJvamVjdHNfX2NvbnRhaW5lci0tbGlzdCB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5wcm9qZWN0c19fY29udGFpbmVyLS1saXN0IHVsIGxpIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLWJvdHRvbTogMC4zcmVtO1xcbn1cXG4ucHJvamVjdHNfX2NvbnRhaW5lci0tbGlzdCB1bCBsaSBpbnB1dCB7XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gIHdpZHRoOiAxNi41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLm1haW5fX2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgaGVpZ2h0OiA4MHZoO1xcbn1cIixcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU94eWdlbjp3Z2h0QDMwMDs0MDA7NzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbnAsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxuYnV0dG9uLFxcbmZvcm0sXFxuaW5wdXQsXFxubGFiZWwge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPeHlnZW5cXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cIixcImJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgY29sb3I6IGJsdWU7XFxufVxcblxcbmlucHV0IHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cIixcIi5oZWFkZXIge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg0LCA3NiwgMTk0KTtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDJyZW07XFxufVxcblwiLFwiLnRhc2tzIHtcXG4gICZfX2NvbnRhaW5lciB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogNTB2dztcXG4gICAgaGVpZ2h0OiA1MHZoO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAgICZfX3Byb2plY3Qge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcbiAgICAgIGgyIHtcXG4gICAgICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgICAgICBtYXJnaW4tbGVmdDogMnJlbTtcXG4gICAgICB9XFxuXFxuICAgICAgJi1vcHRpb25zIHtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMS45cmVtO1xcblxcbiAgICAgICAgLnRhc2tzX19wcm9qZWN0IHtcXG4gICAgICAgICAgJi0tbmFtZSB7XFxuICAgICAgICAgICAgbWFyZ2luOiAxcmVtO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjFyZW0gMC40cmVtO1xcbiAgICAgICAgICB9XFxuICAgICAgICAgICYtLWRlbGV0ZSB7XFxuICAgICAgICAgICAgcGFkZGluZzogMC4xcmVtIDEuNHJlbTtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjRyZW07XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgJi0tYWRkIHtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICAgIHdpZHRoOiBpbmhlcml0O1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgICAgaW5wdXQge1xcbiAgICAgICAgd2lkdGg6IDg1JTtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xcbiAgICAgICAgcGFkZGluZzogMC4ycmVtO1xcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICAgIH1cXG5cXG4gICAgICBidXR0b24ge1xcbiAgICAgICAgbWluLXdpZHRoOiA1LjVyZW07XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgICYtLWxpc3Qge1xcbiAgICAgIHdpZHRoOiBpbmhlcml0O1xcbiAgICAgIGhlaWdodDogaW5oZXJpdDtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgcGFkZGluZzogMi41cmVtO1xcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xcblxcbiAgICAgIC8vaW5kaXZpZHVhbCB0YXNrXFxuICAgICAgbGkge1xcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XFxuXFxuICAgICAgICBpbnB1dCB7XFxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xcbiAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgICAgICAgIG9yZGVyOiAxO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgbGFiZWwge1xcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMnJlbTtcXG4gICAgICAgICAgZmxleDogMTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIGJ1dHRvbiB7XFxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xcbiAgICAgICAgICBvcmRlcjogMjtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG5cXG4gICZfX2NvbXBsZXRlZC1jb3VudCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAtMnJlbTtcXG4gICAgcmlnaHQ6IDRyZW07XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzgwcHgpIHtcXG4gIC50YXNrcyB7XFxuICAgICZfX2NvbnRhaW5lciB7XFxuICAgICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICB3aWR0aDogNTB2dztcXG4gICAgICBoZWlnaHQ6IDUwdmg7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgICAgICZfX3Byb2plY3Qge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cIixcIi5wcm9qZWN0c19fY29udGFpbmVyIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gIG1hcmdpbi1yaWdodDogMnJlbTtcXG4gIGhlaWdodDogNTB2aDtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkOWQ5ZDk7XFxuXFxuICAmLS1hZGQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG5cXG4gICAgaW5wdXQge1xcbiAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG4gICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgIH1cXG5cXG4gICAgYnV0dG9uIHtcXG4gICAgICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgICBwYWRkaW5nOiAwLjJyZW07XFxuICAgIH1cXG4gIH1cXG5cXG4gICYtLWxpc3Qge1xcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcblxcbiAgICB1bCB7XFxuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAgICAgbGkge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjNyZW07XFxuXFxuICAgICAgICBpbnB1dCB7XFxuICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgICAgICAgICB3aWR0aDogMTYuNXJlbTtcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXCIsXCJib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4ubWFpbiB7XFxuICAmX19jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgaGVpZ2h0OiA4MHZoO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kICh3aWR0aDogNzgwcHgpIHtcXG4gIGJvZHkge1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5pbXBvcnQgVGFzayBmcm9tIFwiLi4vdGFza3MvdGFza3NcIjtcbmltcG9ydCBwcm9qZWN0c1JlbmRlciBmcm9tIFwiLi9wcm9qZWN0c1JlbmRlclwiO1xuXG5leHBvcnQgY29uc3QgcHJvamVjdHMgPSBbXTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICBzdGF0aWMgY291bnQgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudGFza3MgPSBbXTtcbiAgICB0aGlzLmNvbXBsZXRlZFRhc2tzID0gW107XG5cbiAgICBQcm9qZWN0LmNvdW50ICs9IDE7XG4gICAgdGhpcy5pZCA9IGBwLSR7UHJvamVjdC5jb3VudH1gO1xuXG4gICAgcHJvamVjdHMucHVzaCh0aGlzKTtcbiAgfVxuXG4gIGFkZFRhc2sobmFtZSkge1xuICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVGFzayhuYW1lLCB0aGlzKTtcbiAgICB0aGlzLnRhc2tzLnB1c2gobmV3VGFzayk7XG4gIH1cblxuICBjb21wbGV0ZVRhc2soaWQpIHtcbiAgICB0aGlzLnRhc2tzLmZvckVhY2goKHRhc2ssIGksIGFycikgPT4ge1xuICAgICAgaWYgKHRhc2suaWQgPT09IGlkKSB7XG4gICAgICAgIGxldCBjb21wbGV0ZWRUYXNrID0gYXJyLnNwbGljZShpLCAxKTtcbiAgICAgICAgdGhpcy5jb21wbGV0ZWRUYXNrcy5wdXNoKC4uLmNvbXBsZXRlZFRhc2spO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZGVsZXRlVGFzayhpZCkge1xuICAgIHRoaXMudGFza3MuZm9yRWFjaCgodGFzaywgaSwgYXJyKSA9PiB7XG4gICAgICBpZiAodGFzay5pZCA9PT0gaWQpIGFyci5zcGxpY2UoaSwgMSk7XG4gICAgfSk7XG4gIH1cblxuICBkZWxldGUoKSB7XG4gICAgcHJvamVjdHMuZm9yRWFjaCgoZSwgaSwgYXJyKSA9PiB7XG4gICAgICBlLmlkID09PSB0aGlzLmlkID8gYXJyLnNwbGljZShpLCAxKSA6IG51bGw7XG4gICAgfSk7XG4gIH1cblxuICBjaGFuZ2VOYW1lKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RzXCI7XG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RzXCI7XG5cbmNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5fX2NvbnRhaW5lclwiKTtcblxuY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzX19jb250YWluZXJcIik7XG5jb25zdCBwcm9qZWN0c0NvbnRhaW5lckFkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5wcm9qZWN0c0NvbnRhaW5lckFkZC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInByb2plY3RzX19jb250YWluZXItLWFkZFwiKTtcbmV4cG9ydCBjb25zdCBpbnB1dFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5pbnB1dFByb2plY3Quc2V0QXR0cmlidXRlKFwibWluXCIsIDUpO1xuaW5wdXRQcm9qZWN0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicHJvamVjdHNfX2lucHV0XCIpO1xuZXhwb3J0IGNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuYWRkUHJvamVjdEJ0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInByb2plY3RzX19hZGRcIik7XG5hZGRQcm9qZWN0QnRuLnRleHRDb250ZW50ID0gXCJBZGQgUHJvamVjdFwiO1xuXG5tYWluQ29udGFpbmVyLnByZXBlbmQocHJvamVjdHNDb250YWluZXIpO1xucHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdHNDb250YWluZXJBZGQpO1xucHJvamVjdHNDb250YWluZXJBZGQuYXBwZW5kQ2hpbGQoaW5wdXRQcm9qZWN0KTtcbnByb2plY3RzQ29udGFpbmVyQWRkLmFwcGVuZENoaWxkKGFkZFByb2plY3RCdG4pO1xuXG5jb25zdCBwcm9qZWN0c0NvbnRhaW5lckxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xucHJvamVjdHNDb250YWluZXJMaXN0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicHJvamVjdHNfX2NvbnRhaW5lci0tbGlzdFwiKTtcbnByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RzQ29udGFpbmVyTGlzdCk7XG5jb25zdCBwcm9qZWN0c0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG5wcm9qZWN0c0NvbnRhaW5lckxpc3QuYXBwZW5kQ2hpbGQocHJvamVjdHNMaXN0KTtcblxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkUHJvamVjdFJlbmRlcihpZCkge1xuLy8gICBjb25zdCBwcm9qZWN0TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4vLyAgIHByb2plY3RzTGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0TGkpO1xuXG4vLyAgIGNvbnN0IHByb2plY3RCdG5OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuLy8gICBwcm9qZWN0QnRuTmFtZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuLy8gICBwcm9qZWN0QnRuTmFtZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZCk7XG4vLyAgIHByb2plY3RCdG5OYW1lLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicHJvamVjdHNfX2J1dHRvblwiKTtcbi8vICAgcHJvamVjdExpLmFwcGVuZENoaWxkKHByb2plY3RCdG5OYW1lKTtcbi8vICAgcHJvamVjdEJ0bk5hbWUudmFsdWUgPSBpbnB1dFByb2plY3QudmFsdWU7XG4vLyAgIGlucHV0UHJvamVjdC52YWx1ZSA9IFwiXCI7XG5cbi8vICAgcmV0dXJuIHByb2plY3RCdG5OYW1lO1xuLy8gfVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdHNSZW5kZXIoKSB7XG4gIHByb2plY3RzTGlzdC50ZXh0Q29udGVudCA9IFwiXCI7XG4gIHByb2plY3RzLmZvckVhY2goKGUpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgcHJvamVjdHNMaXN0LmFwcGVuZENoaWxkKHByb2plY3RMaSk7XG5cbiAgICBjb25zdCBwcm9qZWN0QnRuTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBwcm9qZWN0QnRuTmFtZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuICAgIHByb2plY3RCdG5OYW1lLnNldEF0dHJpYnV0ZShcImlkXCIsIGUuaWQpO1xuICAgIHByb2plY3RCdG5OYW1lLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicHJvamVjdHNfX2J1dHRvblwiKTtcbiAgICBwcm9qZWN0QnRuTmFtZS52YWx1ZSA9IGUubmFtZTtcblxuICAgIC8vIGNvbnN0IHByb2plY3RCdG5EZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIC8vIHByb2plY3RCdG5EZWxldGUudGV4dENvbnRlbnQgPSBcIkRcIjtcblxuICAgIHByb2plY3RMaS5hcHBlbmRDaGlsZChwcm9qZWN0QnRuTmFtZSk7XG4gICAgLy8gcHJvamVjdExpLmFwcGVuZENoaWxkKHByb2plY3RCdG5EZWxldGUpO1xuXG4gICAgcmV0dXJuIGUuaWQ7XG4gIH0pO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi4vcHJvamVjdHMvcHJvamVjdHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XG4gIHN0YXRpYyBjb3VudCA9IDA7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIHByb2plY3QpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMucHJvamVjdEFzc29jaWF0ZWQgPSBwcm9qZWN0O1xuICAgIFRhc2suY291bnQgKz0gMTtcbiAgICB0aGlzLmlkID0gYHQtJHtUYXNrLmNvdW50fWA7XG4gIH1cbn1cblxuLy8gd2hlbiB1c2VyIGNsaWNrcyB0YXNrcywgb3BlbiBzZXR0aW5nc1xuLy8gdGFzayBzZXR0aW5ncyAtPiBkZWxldGUsIGNvbXBsZXRlLCBjaGFuZ2UgY29sb3IsIGNoYW5nZSBuYW1lXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IHRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrc19fY29udGFpbmVyXCIpO1xuXG4vLyB0YXNrcyBjb3VudGVyXG5jb25zdCB0YXNrc0NvbXBsZXRlZENvdW50ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbnRhc2tzQ29tcGxldGVkQ291bnRlci50ZXh0Q29udGVudCA9IFwiQ29tcGxldGVkIHRhc2tzOiBcIjtcbnRhc2tzQ29tcGxldGVkQ291bnRlci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRhc2tzX19jb21wbGV0ZWQtY291bnRcIik7XG50YXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrc0NvbXBsZXRlZENvdW50ZXIpO1xuXG4vL1Byb2plY3QgTmFtZVxuY29uc3QgdGFza3NDb250YWluZXJQcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4vL3ByZXR0aWVyLWlnbm9yZVxudGFza3NDb250YWluZXJQcm9qZWN0TmFtZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLFwidGFza3NfX2NvbnRhaW5lcl9fcHJvamVjdFwiKTtcbnRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tzQ29udGFpbmVyUHJvamVjdE5hbWUpO1xuY29uc3QgdGFza3NQcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcblxuLy8gcHJvamVjdCBvcHRpb25zIGRpdlxuY29uc3QgdGFza3NQcm9qZWN0T3B0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG50YXNrc1Byb2plY3RPcHRpb25zLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFza3NQcm9qZWN0T3B0aW9uc1wiKTtcbnRhc2tzUHJvamVjdE9wdGlvbnMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0YXNrc19fY29udGFpbmVyX19wcm9qZWN0LW9wdGlvbnNcIik7XG5cbi8vIHByb2plY3QgZGVsZXRlIGJ0blxuZXhwb3J0IGNvbnN0IHRhc2tzUHJvamVjdERlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG50YXNrc1Byb2plY3REZWxldGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkZWxldGVQcm9qZWN0QnRuXCIpO1xudGFza3NQcm9qZWN0RGVsZXRlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGFza3NfX3Byb2plY3QtLWRlbGV0ZVwiKTtcbnRhc2tzUHJvamVjdERlbGV0ZS50ZXh0Q29udGVudCA9IFwiRGVsZXRlXCI7XG5cbi8vIHByb2plY3QgY2hhbmdlIG5hbWUgYnRuXG5leHBvcnQgY29uc3QgdGFza3NQcm9qZWN0Q2hhbmdlTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG50YXNrc1Byb2plY3RDaGFuZ2VOYW1lLnRleHRDb250ZW50ID0gXCJDaGFuZ2UgbmFtZVwiO1xudGFza3NQcm9qZWN0Q2hhbmdlTmFtZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNoYW5nZVByb2plY3ROYW1lXCIpO1xudGFza3NQcm9qZWN0Q2hhbmdlTmFtZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRhc2tzX19wcm9qZWN0LS1uYW1lXCIpO1xuXG50YXNrc1Byb2plY3RPcHRpb25zLmFwcGVuZENoaWxkKHRhc2tzUHJvamVjdENoYW5nZU5hbWUpO1xudGFza3NQcm9qZWN0T3B0aW9ucy5hcHBlbmRDaGlsZCh0YXNrc1Byb2plY3REZWxldGUpO1xuXG50YXNrc0NvbnRhaW5lclByb2plY3ROYW1lLmFwcGVuZENoaWxkKHRhc2tzUHJvamVjdE5hbWUpO1xudGFza3NDb250YWluZXJQcm9qZWN0TmFtZS5hcHBlbmRDaGlsZCh0YXNrc1Byb2plY3RPcHRpb25zKTtcblxuLy8gQUREIENPTlRBSU5FUlxuY29uc3QgdGFza3NBZGRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xudGFza3NBZGRDb250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0YXNrc19fY29udGFpbmVyLS1hZGRcIik7XG50YXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrc0FkZENvbnRhaW5lcik7XG5cbmV4cG9ydCBjb25zdCBhZGRUYXNrSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5leHBvcnQgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5hZGRUYXNrQnRuLnRleHRDb250ZW50ID0gXCJBZGQgdGFza1wiO1xuXG5jb25zdCB0YXNrc0NvbnRhaW5lckxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG50YXNrc0NvbnRhaW5lckxpc3Quc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0YXNrc19fY29udGFpbmVyLS1saXN0XCIpO1xudGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza3NDb250YWluZXJMaXN0KTtcblxuLy8gVGFzayBBZGQgQ29udGFpbmVyXG5sZXQgdGFza0FkZENvbnRhaW5lckRpc3BsYXkgPSBmYWxzZTtcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJUYXNrQWRkQ29udGFpbmVyKCkge1xuICBpZiAoIXRhc2tBZGRDb250YWluZXJEaXNwbGF5KSB7XG4gICAgdGFza3NBZGRDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVGFza0lucHV0KTtcbiAgICB0YXNrc0FkZENvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUYXNrQnRuKTtcblxuICAgIHRhc2tBZGRDb250YWluZXJEaXNwbGF5ID0gdHJ1ZTtcbiAgfVxufVxuXG4vL0NvbXBsZXRlZCBUYXNrc1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXBsZXRlZFRhc2tzQ291bnRSZW5kZXIocHJvamVjdCkge1xuICBjb25zdCBjb3VudCA9IHByb2plY3QuY29tcGxldGVkVGFza3MubGVuZ3RoO1xuICB0YXNrc0NvbXBsZXRlZENvdW50ZXIudGV4dENvbnRlbnQgPSBgQ29tcGxldGVkIHRhc2tzOiAke2NvdW50fWA7XG59XG4vL1Rhc2tzXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0YXNrc1JlbmRlcihwcm9qZWN0KSB7XG4gIHRhc2tzUHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gIHRhc2tzQ29udGFpbmVyTGlzdC50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgcHJvamVjdC50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgY29uc3QgdGFza0xpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIHRhc2tMaS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCB0YXNrLmlkKTtcbiAgICB0YXNrc0NvbnRhaW5lckxpc3QuYXBwZW5kQ2hpbGQodGFza0xpKTtcblxuICAgIGNvbnN0IGNoZWNrQm94VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjb25zdCBsYWJlbFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgY29uc3QgYnRuRGVsZXRlVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnRuRGVsZXRlVGFzay5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBgJHt0YXNrLmlkfS1kZWxldGVgKTtcbiAgICBjaGVja0JveFRhc2suc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuICAgIGNoZWNrQm94VGFzay5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgJHt0YXNrLmlkfS1jcGApO1xuICAgIGNoZWNrQm94VGFzay5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCB0YXNrLm5hbWUpO1xuICAgIGNoZWNrQm94VGFzay5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIHRhc2submFtZSk7XG4gICAgbGFiZWxUYXNrLnNldEF0dHJpYnV0ZShcImZvclwiLCB0YXNrLm5hbWUpO1xuICAgIGxhYmVsVGFzay5zZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgXCJ0cnVlXCIpO1xuICAgIGxhYmVsVGFzay50ZXh0Q29udGVudCA9IHRhc2submFtZTtcbiAgICBidG5EZWxldGVUYXNrLnRleHRDb250ZW50ID0gXCJEXCI7XG4gICAgdGFza0xpLmFwcGVuZENoaWxkKGNoZWNrQm94VGFzayk7XG4gICAgdGFza0xpLmFwcGVuZENoaWxkKGxhYmVsVGFzayk7XG4gICAgdGFza0xpLmFwcGVuZENoaWxkKGJ0bkRlbGV0ZVRhc2spO1xuICB9KTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFwiLi4vc3R5bGVzL21haW4uc2Nzc1wiO1xuXG5pbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrcy90YXNrc1wiO1xuaW1wb3J0IHRhc2tzUmVuZGVyLCB7IHRhc2tzQ29udGFpbmVyIH0gZnJvbSBcIi4vdGFza3MvdGFza3NSZW5kZXJcIjtcbmltcG9ydCB7XG4gIHJlbmRlclRhc2tBZGRDb250YWluZXIsXG4gIGNvbXBsZXRlZFRhc2tzQ291bnRSZW5kZXIsXG4gIGFkZFRhc2tCdG4sXG4gIGFkZFRhc2tJbnB1dCxcbiAgdGFza3NQcm9qZWN0RGVsZXRlLFxuICB0YXNrc1Byb2plY3RDaGFuZ2VOYW1lLFxufSBmcm9tIFwiLi90YXNrcy90YXNrc1JlbmRlclwiO1xuXG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0cy9wcm9qZWN0c1wiO1xuLy8gaW1wb3J0IGFkZFByb2plY3RSZW5kZXIgZnJvbSBcIi4vcHJvamVjdHMvcHJvamVjdHNSZW5kZXJcIjtcbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdHMvcHJvamVjdHNcIjtcbmltcG9ydCB7XG4gIHByb2plY3RzUmVuZGVyLFxuICBpbnB1dFByb2plY3QsXG4gIGFkZFByb2plY3RCdG4sXG59IGZyb20gXCIuL3Byb2plY3RzL3Byb2plY3RzUmVuZGVyXCI7XG5cbi8vIG1haW4gY29udGFpbmVyIHNlbGVjdGlvblxuY29uc3QgbWFpbkRPTSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbl9fY29udGFpbmVyXCIpO1xuXG5sZXQgY3VyclByb2plY3Q7XG4vLyBDcmVhdGUgcHJvamVjdFxuYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAvLyBjb25zdCBwcm9qZWN0UmVuZGVyID0gYWRkUHJvamVjdFJlbmRlcihuZXdQcm9qZWN0LmlkKTtcbiAgLy8gcHJvamVjdFJlbmRlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgLy8gaWYgKHByb2plY3RSZW5kZXIuaWQgPT09IG5ld1Byb2plY3QuaWQpIHtcbiAgLy8gbmV3UHJvamVjdC5yZW5kZXJUYXNrcygpXG4gIC8vIH1cbiAgLy8gfSk7XG4gIGlmIChpbnB1dFByb2plY3QudmFsdWUubGVuZ3RoID4gMikge1xuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChpbnB1dFByb2plY3QudmFsdWUpO1xuICAgIGlucHV0UHJvamVjdC52YWx1ZSA9IFwiXCI7XG4gIH0gZWxzZSBhbGVydChcIllvdSBuZWVkIHRvIGFkZCBhIG1pbmltdW0gb2YgMyBjaGFyYWN0ZXJzXCIpO1xuXG4gIHByb2plY3RzUmVuZGVyKCk7XG59KTtcblxuY29uc3QgcHJvajEgPSBuZXcgUHJvamVjdChcIldvcmtvdXRcIik7XG5wcm9qMS5hZGRUYXNrKFwiUnVuIDJrbVwiKTtcbmN1cnJQcm9qZWN0ID0gcHJvajE7XG5cbi8vIFJlbmRlciB0YXNrcyB3aGVuIHVzZXIgY2xpY2tzIHByb2plY3QgYnRuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInByb2plY3RzX19idXR0b25cIikpIHtcbiAgICByZW5kZXJUYXNrQWRkQ29udGFpbmVyKCk7XG4gICAgY29uc3QgZG9tUHJvamVjdElkID0gZS50YXJnZXQuaWQ7XG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgaWYgKHByb2plY3QuaWQgPT09IGRvbVByb2plY3RJZCkge1xuICAgICAgICBjdXJyUHJvamVjdCA9IHByb2plY3Q7XG4gICAgICAgIGNvbXBsZXRlZFRhc2tzQ291bnRSZW5kZXIoY3VyclByb2plY3QpO1xuICAgICAgICB0YXNrc1JlbmRlcihjdXJyUHJvamVjdCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn0pO1xuXG4vLyBhZGQgdGFzayB0byBwcm9qZWN0XG5hZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBjdXJyUHJvamVjdC5hZGRUYXNrKGFkZFRhc2tJbnB1dC52YWx1ZSk7XG4gIHRhc2tzUmVuZGVyKGN1cnJQcm9qZWN0KTtcbiAgYWRkVGFza0lucHV0LnZhbHVlID0gXCJcIjtcbn0pO1xuXG4vLyBjb21wbGV0ZSB0YXNrXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgaWYgKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcInR5cGVcIikgPT09IFwiY2hlY2tib3hcIikge1xuICAgIGNvbnN0IGNoZWNrYm94VGFzayA9IGUudGFyZ2V0O1xuICAgIGNvbnN0IHRhc2tMaSA9IGNoZWNrYm94VGFzay5wYXJlbnRFbGVtZW50O1xuICAgIGlmIChjaGVja2JveFRhc2suY2hlY2tlZCkge1xuICAgICAgY3VyclByb2plY3QuY29tcGxldGVUYXNrKHRhc2tMaS5pZCk7XG4gICAgICBjb21wbGV0ZWRUYXNrc0NvdW50UmVuZGVyKGN1cnJQcm9qZWN0KTtcbiAgICAgIHRhc2tMaS5yZW1vdmUoKTtcbiAgICB9XG4gIH1cbn0pO1xuXG4vLyBkZWxldGUgdGFza1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGlmIChlLnRhcmdldC50ZXh0Q29udGVudCA9PT0gXCJEXCIpIHtcbiAgICBjdXJyUHJvamVjdC5kZWxldGVUYXNrKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuaWQpO1xuICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgdGFza3NSZW5kZXIoY3VyclByb2plY3QpO1xuICB9XG59KTtcblxuLy8gZGVsZXRlIHByb2plY3RcbnRhc2tzUHJvamVjdERlbGV0ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgLy8gYWRkIGRlZmF1bHQgcHJvamVjdCBpbiBjYXNlIGlzIHRoZSBsYXN0IHByb2plY3QgeW91IGRlbGV0ZVxuICBpZiAocHJvamVjdHMubGVuZ3RoID09PSAxKSB7XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KFwiU3RhcnQgUHJvamVjdFwiKTtcbiAgfVxuXG4gIGN1cnJQcm9qZWN0LmRlbGV0ZSgpO1xuICBjdXJyUHJvamVjdCA9IHByb2plY3RzWzBdO1xuXG4gIHRhc2tzUmVuZGVyKGN1cnJQcm9qZWN0KTtcbiAgcHJvamVjdHNSZW5kZXIoKTtcbn0pO1xuXG4vLyBjaGFuZ2UgcHJvamVjdCBuYW1lXG50YXNrc1Byb2plY3RDaGFuZ2VOYW1lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBjb25zdCBuZXdOYW1lID0gcHJvbXB0KFwiQ2hhbmdlIHRoZSBuYW1lIHRvOlwiKTtcblxuICBpZiAobmV3TmFtZS5sZW5ndGggPiAyKSB7XG4gICAgY3VyclByb2plY3QuY2hhbmdlTmFtZShuZXdOYW1lKTtcbiAgfSBlbHNlIGFsZXJ0KFwiTmFtZSBtdXN0IGNvbnRhaW4gbWluaW11bSBvZiAzIGNoYXJhY3RlcnNcIik7XG5cbiAgdGFza3NSZW5kZXIoY3VyclByb2plY3QpO1xuICBwcm9qZWN0c1JlbmRlcigpO1xufSk7XG5cbmNvbXBsZXRlZFRhc2tzQ291bnRSZW5kZXIocHJvajEpO1xucHJvamVjdHNSZW5kZXIoKTtcbnRhc2tzUmVuZGVyKHByb2oxKTtcbnJlbmRlclRhc2tBZGRDb250YWluZXIoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==