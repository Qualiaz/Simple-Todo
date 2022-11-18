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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nbutton,\nform,\ninput,\nlabel {\n  font-family: \"Oxygen\", sans-serif;\n  color: white;\n}\n\nbutton,\ninput {\n  background: none;\n  border: 1px solid #fff;\n}\n\n.header {\n  color: white;\n  background-color: rgb(33, 33, 34);\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  padding: 2rem;\n}\n\n.tasks__container {\n  border: 2px solid #fff;\n  border-radius: 2rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 50vw;\n  height: 50vh;\n  position: relative;\n}\n.tasks__container__project {\n  display: flex;\n  align-self: flex-start;\n  width: 100%;\n  margin-bottom: 1rem;\n  align-self: flex-start;\n  justify-content: space-between;\n}\n.tasks__container__project h2 {\n  margin-top: 1rem;\n  margin-left: 1rem;\n}\n.tasks__container__project-options {\n  margin-right: 1.9rem;\n}\n.tasks__container__project-options .tasks__project--name {\n  margin: 1rem;\n  border-radius: 0.4rem;\n  padding: 0.1rem 0.4rem;\n}\n.tasks__container__project-options .tasks__project--delete {\n  padding: 0.1rem 1.4rem;\n  border-radius: 0.4rem;\n}\n.tasks__container--add {\n  margin-bottom: 1rem;\n  width: inherit;\n  display: flex;\n  justify-content: center;\n}\n.tasks__container--add input {\n  width: 85%;\n  margin-right: 1rem;\n  margin-left: 2rem;\n  padding: 0.2rem;\n  padding-left: 1rem;\n  border-radius: 0.5rem;\n}\n.tasks__container--add button {\n  min-width: 5.5rem;\n  border-radius: 0.5rem;\n  margin-right: 2rem;\n}\n.tasks__container--list {\n  width: inherit;\n  height: inherit;\n  display: flex;\n  flex-direction: column;\n  padding: 2.5rem;\n  overflow: auto;\n}\n.tasks__container--list li {\n  list-style: none;\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 1rem;\n  border-bottom: 2px solid #fff;\n  padding-bottom: 0.5rem;\n}\n.tasks__container--list li .projects__input {\n  border: 1px solid green;\n  align-self: center;\n  order: 1;\n}\n.tasks__container--list li label {\n  margin-left: 2rem;\n  flex: 1;\n}\n.tasks__container--list li button {\n  margin-left: 1rem;\n  order: 2;\n  border-radius: 1rem;\n  padding: 0 0.2rem;\n}\n.tasks__completed-count {\n  position: absolute;\n  bottom: -2rem;\n  right: 4rem;\n}\n\n@media only screen and (max-width: 780px) {\n  .tasks__container {\n    width: 80vw;\n    height: 50vh;\n    position: relative;\n    min-width: 300px;\n    order: 1;\n  }\n  .tasks__container__project {\n    flex-direction: column;\n    margin-left: 2rem;\n  }\n}\n.projects__container {\n  border: 2px solid white;\n  border-radius: 2rem;\n  margin-right: 2rem;\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n}\n.projects__container--add {\n  display: flex;\n  justify-content: space-between;\n  padding-bottom: 1rem;\n  margin-top: 0.5rem;\n  margin-bottom: 1rem;\n  border-bottom: 1px solid #fff;\n}\n.projects__container--add input {\n  margin-right: 1rem;\n  border-radius: 0.5rem;\n}\n.projects__container--add button {\n  min-width: fit-content;\n  border-radius: 0.5rem;\n  padding: 0.2rem;\n}\n.projects__container--list {\n  display: flex;\n  justify-content: center;\n  overflow: auto;\n}\n.projects__container--list ul {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n}\n.projects__container--list ul li {\n  display: block;\n  margin-bottom: 0.3rem;\n}\n.projects__container--list ul li input {\n  padding: 0.5rem 1rem;\n  width: 16.5rem;\n  border-radius: 2rem;\n}\n\n@media only screen and (max-width: 780px) {\n  .projects__container {\n    border-radius: 2rem;\n    order: 2;\n    margin-top: 2rem;\n    margin-right: 0px;\n    margin-bottom: 2rem;\n    padding: 1rem;\n  }\n}\nbody {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  background-color: rgb(38, 38, 41);\n}\n\n.main__container {\n  display: flex;\n  justify-content: center;\n  align-items: start;\n  flex-wrap: wrap;\n  margin-top: 2rem;\n  height: 80vh;\n}\n\n@media only screen and (max-width: 780px) {\n  .main__container {\n    gap: 1rem;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/base/_reset.scss","webpack://./src/styles/main.scss","webpack://./src/styles/base/_fonts.scss","webpack://./src/styles/components/_buttons.scss","webpack://./src/styles/layout/_header.scss","webpack://./src/styles/layout/_tasks.scss","webpack://./src/styles/layout/_projects.scss","webpack://./src/styles/layout/_main.scss"],"names":[],"mappings":"AAAA;EACE,UAAA;EACA,SAAA;EACA,sBAAA;ACEF;;ACHA;;;;;;;;;;;EAWE,iCAAA;EACA,YAAA;ADMF;;AEpBA;;EAEE,gBAAA;EAEA,sBAAA;AFsBF;;AG1BA;EACE,YAAA;EACA,iCAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,aAAA;AH6BF;;AIlCE;EACE,sBAAA;EACA,mBAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;AJqCJ;AInCI;EACE,aAAA;EACA,sBAAA;EACA,WAAA;EACA,mBAAA;EACA,sBAAA;EACA,8BAAA;AJqCN;AInCM;EACE,gBAAA;EACA,iBAAA;AJqCR;AIlCM;EACE,oBAAA;AJoCR;AIjCU;EACE,YAAA;EACA,qBAAA;EACA,sBAAA;AJmCZ;AIjCU;EACE,sBAAA;EACA,qBAAA;AJmCZ;AI7BI;EACE,mBAAA;EACA,cAAA;EACA,aAAA;EACA,uBAAA;AJ+BN;AI7BM;EACE,UAAA;EACA,kBAAA;EACA,iBAAA;EACA,eAAA;EACA,kBAAA;EACA,qBAAA;AJ+BR;AI5BM;EACE,iBAAA;EACA,qBAAA;EACA,kBAAA;AJ8BR;AI1BI;EACE,cAAA;EACA,eAAA;EACA,aAAA;EACA,sBAAA;EACA,eAAA;EACA,cAAA;AJ4BN;AIzBM;EACE,gBAAA;EACA,aAAA;EACA,yBAAA;EACA,mBAAA;EACA,6BAAA;EACA,sBAAA;AJ2BR;AIzBQ;EACE,uBAAA;EACA,kBAAA;EACA,QAAA;AJ2BV;AIxBQ;EACE,iBAAA;EACA,OAAA;AJ0BV;AIvBQ;EACE,iBAAA;EACA,QAAA;EACA,mBAAA;EACA,iBAAA;AJyBV;AInBE;EACE,kBAAA;EACA,aAAA;EACA,WAAA;AJqBJ;;AIjBA;EAEI;IACE,WAAA;IACA,YAAA;IACA,kBAAA;IAEA,gBAAA;IACA,QAAA;EJkBJ;EIhBI;IACE,sBAAA;IACA,iBAAA;EJkBN;AACF;AK3IA;EACE,uBAAA;EACA,mBAAA;EACA,kBAAA;EAEA,aAAA;EACA,aAAA;EACA,sBAAA;AL4IF;AK1IE;EACE,aAAA;EACA,8BAAA;EACA,oBAAA;EACA,kBAAA;EACA,mBAAA;EACA,6BAAA;AL4IJ;AK1II;EACE,kBAAA;EACA,qBAAA;AL4IN;AKzII;EACE,sBAAA;EACA,qBAAA;EACA,eAAA;AL2IN;AKvIE;EAEE,aAAA;EACA,uBAAA;EACA,cAAA;ALwIJ;AKtII;EACE,gBAAA;EACA,aAAA;EACA,sBAAA;ALwIN;AKtIM;EACE,cAAA;EACA,qBAAA;ALwIR;AKtIQ;EACE,oBAAA;EACA,cAAA;EACA,mBAAA;ALwIV;;AKlIA;EACE;IACE,mBAAA;IACA,QAAA;IACA,gBAAA;IACA,iBAAA;IACA,mBAAA;IACA,aAAA;ELqIF;AACF;AMlMA;EACE,aAAA;EACA,sBAAA;EACA,eAAA;EACA,iCAAA;ANoMF;;AMhME;EACE,aAAA;EACA,uBAAA;EACA,kBAAA;EACA,eAAA;EACA,gBAAA;EAEA,YAAA;ANkMJ;;AM9LA;EAEI;IACE,SAAA;ENgMJ;AACF","sourcesContent":["* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n","@import url(\"https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap\");\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nbutton,\nform,\ninput,\nlabel {\n  font-family: \"Oxygen\", sans-serif;\n  color: white;\n}\n\nbutton,\ninput {\n  background: none;\n  border: 1px solid #fff;\n}\n\n.header {\n  color: white;\n  background-color: rgb(33, 33, 34);\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  padding: 2rem;\n}\n\n.tasks__container {\n  border: 2px solid #fff;\n  border-radius: 2rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 50vw;\n  height: 50vh;\n  position: relative;\n}\n.tasks__container__project {\n  display: flex;\n  align-self: flex-start;\n  width: 100%;\n  margin-bottom: 1rem;\n  align-self: flex-start;\n  justify-content: space-between;\n}\n.tasks__container__project h2 {\n  margin-top: 1rem;\n  margin-left: 1rem;\n}\n.tasks__container__project-options {\n  margin-right: 1.9rem;\n}\n.tasks__container__project-options .tasks__project--name {\n  margin: 1rem;\n  border-radius: 0.4rem;\n  padding: 0.1rem 0.4rem;\n}\n.tasks__container__project-options .tasks__project--delete {\n  padding: 0.1rem 1.4rem;\n  border-radius: 0.4rem;\n}\n.tasks__container--add {\n  margin-bottom: 1rem;\n  width: inherit;\n  display: flex;\n  justify-content: center;\n}\n.tasks__container--add input {\n  width: 85%;\n  margin-right: 1rem;\n  margin-left: 2rem;\n  padding: 0.2rem;\n  padding-left: 1rem;\n  border-radius: 0.5rem;\n}\n.tasks__container--add button {\n  min-width: 5.5rem;\n  border-radius: 0.5rem;\n  margin-right: 2rem;\n}\n.tasks__container--list {\n  width: inherit;\n  height: inherit;\n  display: flex;\n  flex-direction: column;\n  padding: 2.5rem;\n  overflow: auto;\n}\n.tasks__container--list li {\n  list-style: none;\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 1rem;\n  border-bottom: 2px solid #fff;\n  padding-bottom: 0.5rem;\n}\n.tasks__container--list li .projects__input {\n  border: 1px solid green;\n  align-self: center;\n  order: 1;\n}\n.tasks__container--list li label {\n  margin-left: 2rem;\n  flex: 1;\n}\n.tasks__container--list li button {\n  margin-left: 1rem;\n  order: 2;\n  border-radius: 1rem;\n  padding: 0 0.2rem;\n}\n.tasks__completed-count {\n  position: absolute;\n  bottom: -2rem;\n  right: 4rem;\n}\n\n@media only screen and (max-width: 780px) {\n  .tasks__container {\n    width: 80vw;\n    height: 50vh;\n    position: relative;\n    min-width: 300px;\n    order: 1;\n  }\n  .tasks__container__project {\n    flex-direction: column;\n    margin-left: 2rem;\n  }\n}\n.projects__container {\n  border: 2px solid white;\n  border-radius: 2rem;\n  margin-right: 2rem;\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n}\n.projects__container--add {\n  display: flex;\n  justify-content: space-between;\n  padding-bottom: 1rem;\n  margin-top: 0.5rem;\n  margin-bottom: 1rem;\n  border-bottom: 1px solid #fff;\n}\n.projects__container--add input {\n  margin-right: 1rem;\n  border-radius: 0.5rem;\n}\n.projects__container--add button {\n  min-width: fit-content;\n  border-radius: 0.5rem;\n  padding: 0.2rem;\n}\n.projects__container--list {\n  display: flex;\n  justify-content: center;\n  overflow: auto;\n}\n.projects__container--list ul {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n}\n.projects__container--list ul li {\n  display: block;\n  margin-bottom: 0.3rem;\n}\n.projects__container--list ul li input {\n  padding: 0.5rem 1rem;\n  width: 16.5rem;\n  border-radius: 2rem;\n}\n\n@media only screen and (max-width: 780px) {\n  .projects__container {\n    border-radius: 2rem;\n    order: 2;\n    margin-top: 2rem;\n    margin-right: 0px;\n    margin-bottom: 2rem;\n    padding: 1rem;\n  }\n}\nbody {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  background-color: rgb(38, 38, 41);\n}\n\n.main__container {\n  display: flex;\n  justify-content: center;\n  align-items: start;\n  flex-wrap: wrap;\n  margin-top: 2rem;\n  height: 80vh;\n}\n\n@media only screen and (max-width: 780px) {\n  .main__container {\n    gap: 1rem;\n  }\n}","@import url(\"https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap\");\n\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nbutton,\nform,\ninput,\nlabel {\n  font-family: \"Oxygen\", sans-serif;\n  color: white;\n}\n","button,\ninput {\n  background: none;\n  //   color: blue;\n  border: 1px solid #fff;\n}\n",".header {\n  color: white;\n  background-color: rgb(33, 33, 34);\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  padding: 2rem;\n}\n",".tasks {\n  &__container {\n    border: 2px solid #fff;\n    border-radius: 2rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 50vw;\n    height: 50vh;\n    position: relative;\n\n    &__project {\n      display: flex;\n      align-self: flex-start;\n      width: 100%;\n      margin-bottom: 1rem;\n      align-self: flex-start;\n      justify-content: space-between;\n\n      h2 {\n        margin-top: 1rem;\n        margin-left: 1rem;\n      }\n\n      &-options {\n        margin-right: 1.9rem;\n\n        .tasks__project {\n          &--name {\n            margin: 1rem;\n            border-radius: 0.4rem;\n            padding: 0.1rem 0.4rem;\n          }\n          &--delete {\n            padding: 0.1rem 1.4rem;\n            border-radius: 0.4rem;\n          }\n        }\n      }\n    }\n\n    &--add {\n      margin-bottom: 1rem;\n      width: inherit;\n      display: flex;\n      justify-content: center;\n\n      input {\n        width: 85%;\n        margin-right: 1rem;\n        margin-left: 2rem;\n        padding: 0.2rem;\n        padding-left: 1rem;\n        border-radius: 0.5rem;\n      }\n\n      button {\n        min-width: 5.5rem;\n        border-radius: 0.5rem;\n        margin-right: 2rem;\n      }\n    }\n\n    &--list {\n      width: inherit;\n      height: inherit;\n      display: flex;\n      flex-direction: column;\n      padding: 2.5rem;\n      overflow: auto;\n\n      //individual task\n      li {\n        list-style: none;\n        display: flex;\n        justify-content: flex-end;\n        margin-bottom: 1rem;\n        border-bottom: 2px solid #fff;\n        padding-bottom: 0.5rem;\n\n        .projects__input {\n          border: 1px solid green;\n          align-self: center;\n          order: 1;\n        }\n\n        label {\n          margin-left: 2rem;\n          flex: 1;\n        }\n\n        button {\n          margin-left: 1rem;\n          order: 2;\n          border-radius: 1rem;\n          padding: 0 0.2rem;\n        }\n      }\n    }\n  }\n\n  &__completed-count {\n    position: absolute;\n    bottom: -2rem;\n    right: 4rem;\n  }\n}\n\n@media only screen and (max-width: 780px) {\n  .tasks {\n    &__container {\n      width: 80vw;\n      height: 50vh;\n      position: relative;\n      // margin-top: 2rem;\n      min-width: 300px;\n      order: 1;\n\n      &__project {\n        flex-direction: column;\n        margin-left: 2rem;\n      }\n    }\n  }\n}\n",".projects__container {\n  border: 2px solid white;\n  border-radius: 2rem;\n  margin-right: 2rem;\n  // height: 50vh;\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n\n  &--add {\n    display: flex;\n    justify-content: space-between;\n    padding-bottom: 1rem;\n    margin-top: 0.5rem;\n    margin-bottom: 1rem;\n    border-bottom: 1px solid #fff;\n\n    input {\n      margin-right: 1rem;\n      border-radius: 0.5rem;\n    }\n\n    button {\n      min-width: fit-content;\n      border-radius: 0.5rem;\n      padding: 0.2rem;\n    }\n  }\n\n  &--list {\n    // border: 1px solid black;\n    display: flex;\n    justify-content: center;\n    overflow: auto;\n\n    ul {\n      list-style: none;\n      display: flex;\n      flex-direction: column;\n\n      li {\n        display: block;\n        margin-bottom: 0.3rem;\n\n        input {\n          padding: 0.5rem 1rem;\n          width: 16.5rem;\n          border-radius: 2rem;\n        }\n      }\n    }\n  }\n}\n@media only screen and (max-width: 780px) {\n  .projects__container {\n    border-radius: 2rem;\n    order: 2;\n    margin-top: 2rem;\n    margin-right: 0px;\n    margin-bottom: 2rem;\n    padding: 1rem;\n  }\n}\n","body {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  background-color: rgb(38, 38, 41);\n}\n\n.main {\n  &__container {\n    display: flex;\n    justify-content: center;\n    align-items: start;\n    flex-wrap: wrap;\n    margin-top: 2rem;\n    // border: 1px solid black;\n    height: 80vh;\n  }\n}\n\n@media only screen and (max-width: 780px) {\n  .main {\n    &__container {\n      gap: 1rem;\n    }\n  }\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLE1BQU0sK0VBQXlCO0FBQy9CLDJCQUEyQiwwREFBTyxDQUFDLHdFQUFrQjtBQUNyRCxJQUFJLHdFQUFrQjtBQUN0QixJQUFJOztBQUVKLEVBQUUsd0VBQWM7QUFDaEIsQ0FBQzs7QUFFRCxrQkFBa0IsMERBQU87QUFDekI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDBFQUFzQjtBQUMxQjtBQUNBLElBQUksZ0VBQWdCO0FBQ3BCO0FBQ0E7QUFDQSxRQUFRLDZFQUF5QjtBQUNqQyxRQUFRLDhEQUFXO0FBQ25CO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLDJFQUEyQjtBQUMzQixzQkFBc0Isa0VBQWtCO0FBQ3hDLEVBQUUsOERBQVc7QUFDYixFQUFFLGtFQUFrQjtBQUNwQixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSw2RUFBeUI7QUFDL0I7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw4REFBVztBQUNmO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLG1GQUFtQztBQUNuQztBQUNBLE1BQU0sK0RBQWU7QUFDckIsMkJBQTJCLDBEQUFPO0FBQ2xDOztBQUVBO0FBQ0EsZ0JBQWdCLDJEQUFXOztBQUUzQixFQUFFLDhEQUFXO0FBQ2IsRUFBRSx3RUFBYztBQUNoQixDQUFDOztBQUVEO0FBQ0EsdUZBQXVDO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQSxJQUFJOztBQUVKLEVBQUUsOERBQVc7QUFDYixFQUFFLHdFQUFjO0FBQ2hCLENBQUM7O0FBRUQsNkVBQXlCO0FBQ3pCLHdFQUFjO0FBQ2QsOERBQVc7QUFDWCwwRUFBc0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGVzL21haW4uc2Nzcz82OWM3Iiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zY3JpcHQvcHJvamVjdHMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zY3JpcHQvcHJvamVjdHMvcHJvamVjdHNSZW5kZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zY3JpcHQvdGFza3MvdGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zY3JpcHQvdGFza3MvdGFza3NSZW5kZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zY3JpcHQvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3h5Z2VuOndnaHRAMzAwOzQwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxucCxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5idXR0b24sXFxuZm9ybSxcXG5pbnB1dCxcXG5sYWJlbCB7XFxuICBmb250LWZhbWlseTogXFxcIk94eWdlblxcXCIsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmJ1dHRvbixcXG5pbnB1dCB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzMsIDMzLCAzNCk7XFxuICB3aWR0aDogMTAwdnc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAycmVtO1xcbn1cXG5cXG4udGFza3NfX2NvbnRhaW5lciB7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA1MHZ3O1xcbiAgaGVpZ2h0OiA1MHZoO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4udGFza3NfX2NvbnRhaW5lcl9fcHJvamVjdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi50YXNrc19fY29udGFpbmVyX19wcm9qZWN0IGgyIHtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXG59XFxuLnRhc2tzX19jb250YWluZXJfX3Byb2plY3Qtb3B0aW9ucyB7XFxuICBtYXJnaW4tcmlnaHQ6IDEuOXJlbTtcXG59XFxuLnRhc2tzX19jb250YWluZXJfX3Byb2plY3Qtb3B0aW9ucyAudGFza3NfX3Byb2plY3QtLW5hbWUge1xcbiAgbWFyZ2luOiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xcbiAgcGFkZGluZzogMC4xcmVtIDAuNHJlbTtcXG59XFxuLnRhc2tzX19jb250YWluZXJfX3Byb2plY3Qtb3B0aW9ucyAudGFza3NfX3Byb2plY3QtLWRlbGV0ZSB7XFxuICBwYWRkaW5nOiAwLjFyZW0gMS40cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xcbn1cXG4udGFza3NfX2NvbnRhaW5lci0tYWRkIHtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICB3aWR0aDogaW5oZXJpdDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLnRhc2tzX19jb250YWluZXItLWFkZCBpbnB1dCB7XFxuICB3aWR0aDogODUlO1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XFxuICBwYWRkaW5nOiAwLjJyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxufVxcbi50YXNrc19fY29udGFpbmVyLS1hZGQgYnV0dG9uIHtcXG4gIG1pbi13aWR0aDogNS41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcbn1cXG4udGFza3NfX2NvbnRhaW5lci0tbGlzdCB7XFxuICB3aWR0aDogaW5oZXJpdDtcXG4gIGhlaWdodDogaW5oZXJpdDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMi41cmVtO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcbi50YXNrc19fY29udGFpbmVyLS1saXN0IGxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2ZmZjtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XFxufVxcbi50YXNrc19fY29udGFpbmVyLS1saXN0IGxpIC5wcm9qZWN0c19faW5wdXQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBvcmRlcjogMTtcXG59XFxuLnRhc2tzX19jb250YWluZXItLWxpc3QgbGkgbGFiZWwge1xcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XFxuICBmbGV4OiAxO1xcbn1cXG4udGFza3NfX2NvbnRhaW5lci0tbGlzdCBsaSBidXR0b24ge1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICBvcmRlcjogMjtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBwYWRkaW5nOiAwIDAuMnJlbTtcXG59XFxuLnRhc2tzX19jb21wbGV0ZWQtY291bnQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAtMnJlbTtcXG4gIHJpZ2h0OiA0cmVtO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc4MHB4KSB7XFxuICAudGFza3NfX2NvbnRhaW5lciB7XFxuICAgIHdpZHRoOiA4MHZ3O1xcbiAgICBoZWlnaHQ6IDUwdmg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWluLXdpZHRoOiAzMDBweDtcXG4gICAgb3JkZXI6IDE7XFxuICB9XFxuICAudGFza3NfX2NvbnRhaW5lcl9fcHJvamVjdCB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xcbiAgfVxcbn1cXG4ucHJvamVjdHNfX2NvbnRhaW5lciB7XFxuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5wcm9qZWN0c19fY29udGFpbmVyLS1hZGQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xcbn1cXG4ucHJvamVjdHNfX2NvbnRhaW5lci0tYWRkIGlucHV0IHtcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG59XFxuLnByb2plY3RzX19jb250YWluZXItLWFkZCBidXR0b24ge1xcbiAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIHBhZGRpbmc6IDAuMnJlbTtcXG59XFxuLnByb2plY3RzX19jb250YWluZXItLWxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcbi5wcm9qZWN0c19fY29udGFpbmVyLS1saXN0IHVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLnByb2plY3RzX19jb250YWluZXItLWxpc3QgdWwgbGkge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tYm90dG9tOiAwLjNyZW07XFxufVxcbi5wcm9qZWN0c19fY29udGFpbmVyLS1saXN0IHVsIGxpIGlucHV0IHtcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgd2lkdGg6IDE2LjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc4MHB4KSB7XFxuICAucHJvamVjdHNfX2NvbnRhaW5lciB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICAgIG9yZGVyOiAyO1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gIH1cXG59XFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzOCwgMzgsIDQxKTtcXG59XFxuXFxuLm1haW5fX2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgaGVpZ2h0OiA4MHZoO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc4MHB4KSB7XFxuICAubWFpbl9fY29udGFpbmVyIHtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2Jhc2UvX3Jlc2V0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2Jhc2UvX2ZvbnRzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvY29tcG9uZW50cy9fYnV0dG9ucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2xheW91dC9faGVhZGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbGF5b3V0L190YXNrcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2xheW91dC9fcHJvamVjdHMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9sYXlvdXQvX21haW4uc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFVBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7QUNFRjs7QUNIQTs7Ozs7Ozs7Ozs7RUFXRSxpQ0FBQTtFQUNBLFlBQUE7QURNRjs7QUVwQkE7O0VBRUUsZ0JBQUE7RUFFQSxzQkFBQTtBRnNCRjs7QUcxQkE7RUFDRSxZQUFBO0VBQ0EsaUNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBSDZCRjs7QUlsQ0U7RUFDRSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FKcUNKO0FJbkNJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBSnFDTjtBSW5DTTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUpxQ1I7QUlsQ007RUFDRSxvQkFBQTtBSm9DUjtBSWpDVTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0FKbUNaO0FJakNVO0VBQ0Usc0JBQUE7RUFDQSxxQkFBQTtBSm1DWjtBSTdCSTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBSitCTjtBSTdCTTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUorQlI7QUk1Qk07RUFDRSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUo4QlI7QUkxQkk7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FKNEJOO0FJekJNO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0Esc0JBQUE7QUoyQlI7QUl6QlE7RUFDRSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBSjJCVjtBSXhCUTtFQUNFLGlCQUFBO0VBQ0EsT0FBQTtBSjBCVjtBSXZCUTtFQUNFLGlCQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUp5QlY7QUluQkU7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FKcUJKOztBSWpCQTtFQUVJO0lBQ0UsV0FBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtJQUVBLGdCQUFBO0lBQ0EsUUFBQTtFSmtCSjtFSWhCSTtJQUNFLHNCQUFBO0lBQ0EsaUJBQUE7RUprQk47QUFDRjtBSzNJQTtFQUNFLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUVBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUw0SUY7QUsxSUU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBTDRJSjtBSzFJSTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7QUw0SU47QUt6SUk7RUFDRSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBTDJJTjtBS3ZJRTtFQUVFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUx3SUo7QUt0SUk7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBTHdJTjtBS3RJTTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBTHdJUjtBS3RJUTtFQUNFLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FMd0lWOztBS2xJQTtFQUNFO0lBQ0UsbUJBQUE7SUFDQSxRQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtJQUNBLG1CQUFBO0lBQ0EsYUFBQTtFTHFJRjtBQUNGO0FNbE1BO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0FOb01GOztBTWhNRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBRUEsWUFBQTtBTmtNSjs7QU05TEE7RUFFSTtJQUNFLFNBQUE7RU5nTUo7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cIixcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU94eWdlbjp3Z2h0QDMwMDs0MDA7NzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcbioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbnAsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxuYnV0dG9uLFxcbmZvcm0sXFxuaW5wdXQsXFxubGFiZWwge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPeHlnZW5cXFwiLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5idXR0b24sXFxuaW5wdXQge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMzLCAzMywgMzQpO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMnJlbTtcXG59XFxuXFxuLnRhc2tzX19jb250YWluZXIge1xcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogNTB2dztcXG4gIGhlaWdodDogNTB2aDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnRhc2tzX19jb250YWluZXJfX3Byb2plY3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4udGFza3NfX2NvbnRhaW5lcl9fcHJvamVjdCBoMiB7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxufVxcbi50YXNrc19fY29udGFpbmVyX19wcm9qZWN0LW9wdGlvbnMge1xcbiAgbWFyZ2luLXJpZ2h0OiAxLjlyZW07XFxufVxcbi50YXNrc19fY29udGFpbmVyX19wcm9qZWN0LW9wdGlvbnMgLnRhc2tzX19wcm9qZWN0LS1uYW1lIHtcXG4gIG1hcmdpbjogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcXG4gIHBhZGRpbmc6IDAuMXJlbSAwLjRyZW07XFxufVxcbi50YXNrc19fY29udGFpbmVyX19wcm9qZWN0LW9wdGlvbnMgLnRhc2tzX19wcm9qZWN0LS1kZWxldGUge1xcbiAgcGFkZGluZzogMC4xcmVtIDEuNHJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcXG59XFxuLnRhc2tzX19jb250YWluZXItLWFkZCB7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgd2lkdGg6IGluaGVyaXQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi50YXNrc19fY29udGFpbmVyLS1hZGQgaW5wdXQge1xcbiAgd2lkdGg6IDg1JTtcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xcbiAgcGFkZGluZzogMC4ycmVtO1xcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbn1cXG4udGFza3NfX2NvbnRhaW5lci0tYWRkIGJ1dHRvbiB7XFxuICBtaW4td2lkdGg6IDUuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIG1hcmdpbi1yaWdodDogMnJlbTtcXG59XFxuLnRhc2tzX19jb250YWluZXItLWxpc3Qge1xcbiAgd2lkdGg6IGluaGVyaXQ7XFxuICBoZWlnaHQ6IGluaGVyaXQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDIuNXJlbTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG4udGFza3NfX2NvbnRhaW5lci0tbGlzdCBsaSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmZmY7XFxuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xcbn1cXG4udGFza3NfX2NvbnRhaW5lci0tbGlzdCBsaSAucHJvamVjdHNfX2lucHV0IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgb3JkZXI6IDE7XFxufVxcbi50YXNrc19fY29udGFpbmVyLS1saXN0IGxpIGxhYmVsIHtcXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xcbiAgZmxleDogMTtcXG59XFxuLnRhc2tzX19jb250YWluZXItLWxpc3QgbGkgYnV0dG9uIHtcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbiAgb3JkZXI6IDI7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgcGFkZGluZzogMCAwLjJyZW07XFxufVxcbi50YXNrc19fY29tcGxldGVkLWNvdW50IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogLTJyZW07XFxuICByaWdodDogNHJlbTtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3ODBweCkge1xcbiAgLnRhc2tzX19jb250YWluZXIge1xcbiAgICB3aWR0aDogODB2dztcXG4gICAgaGVpZ2h0OiA1MHZoO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1pbi13aWR0aDogMzAwcHg7XFxuICAgIG9yZGVyOiAxO1xcbiAgfVxcbiAgLnRhc2tzX19jb250YWluZXJfX3Byb2plY3Qge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcXG4gIH1cXG59XFxuLnByb2plY3RzX19jb250YWluZXIge1xcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4ucHJvamVjdHNfX2NvbnRhaW5lci0tYWRkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcXG59XFxuLnByb2plY3RzX19jb250YWluZXItLWFkZCBpbnB1dCB7XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxufVxcbi5wcm9qZWN0c19fY29udGFpbmVyLS1hZGQgYnV0dG9uIHtcXG4gIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBwYWRkaW5nOiAwLjJyZW07XFxufVxcbi5wcm9qZWN0c19fY29udGFpbmVyLS1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG4ucHJvamVjdHNfX2NvbnRhaW5lci0tbGlzdCB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5wcm9qZWN0c19fY29udGFpbmVyLS1saXN0IHVsIGxpIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLWJvdHRvbTogMC4zcmVtO1xcbn1cXG4ucHJvamVjdHNfX2NvbnRhaW5lci0tbGlzdCB1bCBsaSBpbnB1dCB7XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gIHdpZHRoOiAxNi41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3ODBweCkge1xcbiAgLnByb2plY3RzX19jb250YWluZXIge1xcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgICBvcmRlcjogMjtcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICB9XFxufVxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzgsIDM4LCA0MSk7XFxufVxcblxcbi5tYWluX19jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG4gIGhlaWdodDogODB2aDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3ODBweCkge1xcbiAgLm1haW5fX2NvbnRhaW5lciB7XFxuICAgIGdhcDogMXJlbTtcXG4gIH1cXG59XCIsXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PeHlnZW46d2dodEAzMDA7NDAwOzcwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG5wLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbmJ1dHRvbixcXG5mb3JtLFxcbmlucHV0LFxcbmxhYmVsIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3h5Z2VuXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXCIsXCJidXR0b24sXFxuaW5wdXQge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIC8vICAgY29sb3I6IGJsdWU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xcbn1cXG5cIixcIi5oZWFkZXIge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMzLCAzMywgMzQpO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMnJlbTtcXG59XFxuXCIsXCIudGFza3Mge1xcbiAgJl9fY29udGFpbmVyIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDUwdnc7XFxuICAgIGhlaWdodDogNTB2aDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgICAmX19wcm9qZWN0IHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gICAgICBoMiB7XFxuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICAgICAgfVxcblxcbiAgICAgICYtb3B0aW9ucyB7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEuOXJlbTtcXG5cXG4gICAgICAgIC50YXNrc19fcHJvamVjdCB7XFxuICAgICAgICAgICYtLW5hbWUge1xcbiAgICAgICAgICAgIG1hcmdpbjogMXJlbTtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjRyZW07XFxuICAgICAgICAgICAgcGFkZGluZzogMC4xcmVtIDAuNHJlbTtcXG4gICAgICAgICAgfVxcbiAgICAgICAgICAmLS1kZWxldGUge1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuMXJlbSAxLjRyZW07XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgICYtLWFkZCB7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgICB3aWR0aDogaW5oZXJpdDtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgICAgIGlucHV0IHtcXG4gICAgICAgIHdpZHRoOiA4NSU7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICAgICAgICBtYXJnaW4tbGVmdDogMnJlbTtcXG4gICAgICAgIHBhZGRpbmc6IDAuMnJlbTtcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgICB9XFxuXFxuICAgICAgYnV0dG9uIHtcXG4gICAgICAgIG1pbi13aWR0aDogNS41cmVtO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmLS1saXN0IHtcXG4gICAgICB3aWR0aDogaW5oZXJpdDtcXG4gICAgICBoZWlnaHQ6IGluaGVyaXQ7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIHBhZGRpbmc6IDIuNXJlbTtcXG4gICAgICBvdmVyZmxvdzogYXV0bztcXG5cXG4gICAgICAvL2luZGl2aWR1YWwgdGFza1xcbiAgICAgIGxpIHtcXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2ZmZjtcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XFxuXFxuICAgICAgICAucHJvamVjdHNfX2lucHV0IHtcXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XFxuICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgICAgICAgb3JkZXI6IDE7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBsYWJlbCB7XFxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xcbiAgICAgICAgICBmbGV4OiAxO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgYnV0dG9uIHtcXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICAgICAgICAgIG9yZGVyOiAyO1xcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICAgICAgICBwYWRkaW5nOiAwIDAuMnJlbTtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG5cXG4gICZfX2NvbXBsZXRlZC1jb3VudCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAtMnJlbTtcXG4gICAgcmlnaHQ6IDRyZW07XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzgwcHgpIHtcXG4gIC50YXNrcyB7XFxuICAgICZfX2NvbnRhaW5lciB7XFxuICAgICAgd2lkdGg6IDgwdnc7XFxuICAgICAgaGVpZ2h0OiA1MHZoO1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAvLyBtYXJnaW4tdG9wOiAycmVtO1xcbiAgICAgIG1pbi13aWR0aDogMzAwcHg7XFxuICAgICAgb3JkZXI6IDE7XFxuXFxuICAgICAgJl9fcHJvamVjdCB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDJyZW07XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblwiLFwiLnByb2plY3RzX19jb250YWluZXIge1xcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcbiAgLy8gaGVpZ2h0OiA1MHZoO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgJi0tYWRkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcXG5cXG4gICAgaW5wdXQge1xcbiAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG4gICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgIH1cXG5cXG4gICAgYnV0dG9uIHtcXG4gICAgICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgICBwYWRkaW5nOiAwLjJyZW07XFxuICAgIH1cXG4gIH1cXG5cXG4gICYtLWxpc3Qge1xcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcblxcbiAgICB1bCB7XFxuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAgICAgbGkge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjNyZW07XFxuXFxuICAgICAgICBpbnB1dCB7XFxuICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgICAgICAgICB3aWR0aDogMTYuNXJlbTtcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3ODBweCkge1xcbiAgLnByb2plY3RzX19jb250YWluZXIge1xcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgICBvcmRlcjogMjtcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICB9XFxufVxcblwiLFwiYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzOCwgMzgsIDQxKTtcXG59XFxuXFxuLm1haW4ge1xcbiAgJl9fY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgaGVpZ2h0OiA4MHZoO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc4MHB4KSB7XFxuICAubWFpbiB7XFxuICAgICZfX2NvbnRhaW5lciB7XFxuICAgICAgZ2FwOiAxcmVtO1xcbiAgICB9XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJcInVzZSBzdHJpY3RcIjtcbmltcG9ydCBUYXNrIGZyb20gXCIuLi90YXNrcy90YXNrc1wiO1xuaW1wb3J0IHByb2plY3RzUmVuZGVyIGZyb20gXCIuL3Byb2plY3RzUmVuZGVyXCI7XG5cbmV4cG9ydCBjb25zdCBwcm9qZWN0cyA9IFtdO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gIHN0YXRpYyBjb3VudCA9IDA7XG5cbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50YXNrcyA9IFtdO1xuICAgIHRoaXMuY29tcGxldGVkVGFza3MgPSBbXTtcblxuICAgIFByb2plY3QuY291bnQgKz0gMTtcbiAgICB0aGlzLmlkID0gYHAtJHtQcm9qZWN0LmNvdW50fWA7XG5cbiAgICBwcm9qZWN0cy5wdXNoKHRoaXMpO1xuICB9XG5cbiAgYWRkVGFzayhuYW1lKSB7XG4gICAgY29uc3QgbmV3VGFzayA9IG5ldyBUYXNrKG5hbWUsIHRoaXMpO1xuICAgIHRoaXMudGFza3MucHVzaChuZXdUYXNrKTtcbiAgfVxuXG4gIGNvbXBsZXRlVGFzayhpZCkge1xuICAgIHRoaXMudGFza3MuZm9yRWFjaCgodGFzaywgaSwgYXJyKSA9PiB7XG4gICAgICBpZiAodGFzay5pZCA9PT0gaWQpIHtcbiAgICAgICAgbGV0IGNvbXBsZXRlZFRhc2sgPSBhcnIuc3BsaWNlKGksIDEpO1xuICAgICAgICB0aGlzLmNvbXBsZXRlZFRhc2tzLnB1c2goLi4uY29tcGxldGVkVGFzayk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBkZWxldGVUYXNrKGlkKSB7XG4gICAgdGhpcy50YXNrcy5mb3JFYWNoKCh0YXNrLCBpLCBhcnIpID0+IHtcbiAgICAgIGlmICh0YXNrLmlkID09PSBpZCkgYXJyLnNwbGljZShpLCAxKTtcbiAgICB9KTtcbiAgfVxuXG4gIGRlbGV0ZSgpIHtcbiAgICBwcm9qZWN0cy5mb3JFYWNoKChlLCBpLCBhcnIpID0+IHtcbiAgICAgIGUuaWQgPT09IHRoaXMuaWQgPyBhcnIuc3BsaWNlKGksIDEpIDogbnVsbDtcbiAgICB9KTtcbiAgfVxuXG4gIGNoYW5nZU5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdHNcIjtcbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcblxuY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbl9fY29udGFpbmVyXCIpO1xuXG5jb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHNfX2NvbnRhaW5lclwiKTtcbmNvbnN0IHByb2plY3RzQ29udGFpbmVyQWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnByb2plY3RzQ29udGFpbmVyQWRkLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicHJvamVjdHNfX2NvbnRhaW5lci0tYWRkXCIpO1xuZXhwb3J0IGNvbnN0IGlucHV0UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbmlucHV0UHJvamVjdC5zZXRBdHRyaWJ1dGUoXCJtaW5cIiwgNSk7XG5pbnB1dFByb2plY3Quc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwcm9qZWN0c19faW5wdXRcIik7XG5leHBvcnQgY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5hZGRQcm9qZWN0QnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicHJvamVjdHNfX2FkZFwiKTtcbmFkZFByb2plY3RCdG4udGV4dENvbnRlbnQgPSBcIkFkZCBQcm9qZWN0XCI7XG5cbm1haW5Db250YWluZXIucHJlcGVuZChwcm9qZWN0c0NvbnRhaW5lcik7XG5wcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0c0NvbnRhaW5lckFkZCk7XG5wcm9qZWN0c0NvbnRhaW5lckFkZC5hcHBlbmRDaGlsZChpbnB1dFByb2plY3QpO1xucHJvamVjdHNDb250YWluZXJBZGQuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEJ0bik7XG5cbmNvbnN0IHByb2plY3RzQ29udGFpbmVyTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5wcm9qZWN0c0NvbnRhaW5lckxpc3Quc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwcm9qZWN0c19fY29udGFpbmVyLS1saXN0XCIpO1xucHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdHNDb250YWluZXJMaXN0KTtcbmNvbnN0IHByb2plY3RzTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbnByb2plY3RzQ29udGFpbmVyTGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0c0xpc3QpO1xuXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRQcm9qZWN0UmVuZGVyKGlkKSB7XG4vLyAgIGNvbnN0IHByb2plY3RMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbi8vICAgcHJvamVjdHNMaXN0LmFwcGVuZENoaWxkKHByb2plY3RMaSk7XG5cbi8vICAgY29uc3QgcHJvamVjdEJ0bk5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4vLyAgIHByb2plY3RCdG5OYW1lLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG4vLyAgIHByb2plY3RCdG5OYW1lLnNldEF0dHJpYnV0ZShcImlkXCIsIGlkKTtcbi8vICAgcHJvamVjdEJ0bk5hbWUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwcm9qZWN0c19fYnV0dG9uXCIpO1xuLy8gICBwcm9qZWN0TGkuYXBwZW5kQ2hpbGQocHJvamVjdEJ0bk5hbWUpO1xuLy8gICBwcm9qZWN0QnRuTmFtZS52YWx1ZSA9IGlucHV0UHJvamVjdC52YWx1ZTtcbi8vICAgaW5wdXRQcm9qZWN0LnZhbHVlID0gXCJcIjtcblxuLy8gICByZXR1cm4gcHJvamVjdEJ0bk5hbWU7XG4vLyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0c1JlbmRlcigpIHtcbiAgcHJvamVjdHNMaXN0LnRleHRDb250ZW50ID0gXCJcIjtcbiAgcHJvamVjdHMuZm9yRWFjaCgoZSkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBwcm9qZWN0c0xpc3QuYXBwZW5kQ2hpbGQocHJvamVjdExpKTtcblxuICAgIGNvbnN0IHByb2plY3RCdG5OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHByb2plY3RCdG5OYW1lLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG4gICAgcHJvamVjdEJ0bk5hbWUuc2V0QXR0cmlidXRlKFwiaWRcIiwgZS5pZCk7XG4gICAgcHJvamVjdEJ0bk5hbWUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwcm9qZWN0c19fYnV0dG9uXCIpO1xuICAgIHByb2plY3RCdG5OYW1lLnZhbHVlID0gZS5uYW1lO1xuXG4gICAgLy8gY29uc3QgcHJvamVjdEJ0bkRlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgLy8gcHJvamVjdEJ0bkRlbGV0ZS50ZXh0Q29udGVudCA9IFwiRFwiO1xuXG4gICAgcHJvamVjdExpLmFwcGVuZENoaWxkKHByb2plY3RCdG5OYW1lKTtcbiAgICAvLyBwcm9qZWN0TGkuYXBwZW5kQ2hpbGQocHJvamVjdEJ0bkRlbGV0ZSk7XG5cbiAgICByZXR1cm4gZS5pZDtcbiAgfSk7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuLi9wcm9qZWN0cy9wcm9qZWN0c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcbiAgc3RhdGljIGNvdW50ID0gMDtcbiAgY29uc3RydWN0b3IobmFtZSwgcHJvamVjdCkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5wcm9qZWN0QXNzb2NpYXRlZCA9IHByb2plY3Q7XG4gICAgVGFzay5jb3VudCArPSAxO1xuICAgIHRoaXMuaWQgPSBgdC0ke1Rhc2suY291bnR9YDtcbiAgfVxufVxuXG4vLyB3aGVuIHVzZXIgY2xpY2tzIHRhc2tzLCBvcGVuIHNldHRpbmdzXG4vLyB0YXNrIHNldHRpbmdzIC0+IGRlbGV0ZSwgY29tcGxldGUsIGNoYW5nZSBjb2xvciwgY2hhbmdlIG5hbWVcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgdGFza3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzX19jb250YWluZXJcIik7XG5cbi8vIHRhc2tzIGNvdW50ZXJcbmNvbnN0IHRhc2tzQ29tcGxldGVkQ291bnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xudGFza3NDb21wbGV0ZWRDb3VudGVyLnRleHRDb250ZW50ID0gXCJDb21wbGV0ZWQgdGFza3M6IFwiO1xudGFza3NDb21wbGV0ZWRDb3VudGVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGFza3NfX2NvbXBsZXRlZC1jb3VudFwiKTtcbnRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tzQ29tcGxldGVkQ291bnRlcik7XG5cbi8vUHJvamVjdCBOYW1lXG5jb25zdCB0YXNrc0NvbnRhaW5lclByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbi8vcHJldHRpZXItaWdub3JlXG50YXNrc0NvbnRhaW5lclByb2plY3ROYW1lLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsXCJ0YXNrc19fY29udGFpbmVyX19wcm9qZWN0XCIpO1xudGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza3NDb250YWluZXJQcm9qZWN0TmFtZSk7XG5jb25zdCB0YXNrc1Byb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuXG4vLyBwcm9qZWN0IG9wdGlvbnMgZGl2XG5jb25zdCB0YXNrc1Byb2plY3RPcHRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnRhc2tzUHJvamVjdE9wdGlvbnMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrc1Byb2plY3RPcHRpb25zXCIpO1xudGFza3NQcm9qZWN0T3B0aW9ucy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRhc2tzX19jb250YWluZXJfX3Byb2plY3Qtb3B0aW9uc1wiKTtcblxuLy8gcHJvamVjdCBkZWxldGUgYnRuXG5leHBvcnQgY29uc3QgdGFza3NQcm9qZWN0RGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbnRhc2tzUHJvamVjdERlbGV0ZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRlbGV0ZVByb2plY3RCdG5cIik7XG50YXNrc1Byb2plY3REZWxldGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0YXNrc19fcHJvamVjdC0tZGVsZXRlXCIpO1xudGFza3NQcm9qZWN0RGVsZXRlLnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcblxuLy8gcHJvamVjdCBjaGFuZ2UgbmFtZSBidG5cbmV4cG9ydCBjb25zdCB0YXNrc1Byb2plY3RDaGFuZ2VOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbnRhc2tzUHJvamVjdENoYW5nZU5hbWUudGV4dENvbnRlbnQgPSBcIkNoYW5nZSBuYW1lXCI7XG50YXNrc1Byb2plY3RDaGFuZ2VOYW1lLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY2hhbmdlUHJvamVjdE5hbWVcIik7XG50YXNrc1Byb2plY3RDaGFuZ2VOYW1lLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGFza3NfX3Byb2plY3QtLW5hbWVcIik7XG5cbnRhc2tzUHJvamVjdE9wdGlvbnMuYXBwZW5kQ2hpbGQodGFza3NQcm9qZWN0Q2hhbmdlTmFtZSk7XG50YXNrc1Byb2plY3RPcHRpb25zLmFwcGVuZENoaWxkKHRhc2tzUHJvamVjdERlbGV0ZSk7XG5cbnRhc2tzQ29udGFpbmVyUHJvamVjdE5hbWUuYXBwZW5kQ2hpbGQodGFza3NQcm9qZWN0TmFtZSk7XG50YXNrc0NvbnRhaW5lclByb2plY3ROYW1lLmFwcGVuZENoaWxkKHRhc2tzUHJvamVjdE9wdGlvbnMpO1xuXG4vLyBBREQgQ09OVEFJTkVSXG5jb25zdCB0YXNrc0FkZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG50YXNrc0FkZENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRhc2tzX19jb250YWluZXItLWFkZFwiKTtcbnRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tzQWRkQ29udGFpbmVyKTtcblxuZXhwb3J0IGNvbnN0IGFkZFRhc2tJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbmV4cG9ydCBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbmFkZFRhc2tCdG4udGV4dENvbnRlbnQgPSBcIkFkZCB0YXNrXCI7XG5cbmNvbnN0IHRhc2tzQ29udGFpbmVyTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbnRhc2tzQ29udGFpbmVyTGlzdC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRhc2tzX19jb250YWluZXItLWxpc3RcIik7XG50YXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrc0NvbnRhaW5lckxpc3QpO1xuXG4vLyBUYXNrIEFkZCBDb250YWluZXJcbmxldCB0YXNrQWRkQ29udGFpbmVyRGlzcGxheSA9IGZhbHNlO1xuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclRhc2tBZGRDb250YWluZXIoKSB7XG4gIGlmICghdGFza0FkZENvbnRhaW5lckRpc3BsYXkpIHtcbiAgICB0YXNrc0FkZENvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUYXNrSW5wdXQpO1xuICAgIHRhc2tzQWRkQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRhc2tCdG4pO1xuXG4gICAgdGFza0FkZENvbnRhaW5lckRpc3BsYXkgPSB0cnVlO1xuICB9XG59XG5cbi8vQ29tcGxldGVkIFRhc2tzXG5leHBvcnQgZnVuY3Rpb24gY29tcGxldGVkVGFza3NDb3VudFJlbmRlcihwcm9qZWN0KSB7XG4gIGNvbnN0IGNvdW50ID0gcHJvamVjdC5jb21wbGV0ZWRUYXNrcy5sZW5ndGg7XG4gIHRhc2tzQ29tcGxldGVkQ291bnRlci50ZXh0Q29udGVudCA9IGBDb21wbGV0ZWQgdGFza3M6ICR7Y291bnR9YDtcbn1cbi8vVGFza3NcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRhc2tzUmVuZGVyKHByb2plY3QpIHtcbiAgdGFza3NQcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgdGFza3NDb250YWluZXJMaXN0LnRleHRDb250ZW50ID0gXCJcIjtcblxuICBwcm9qZWN0LnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICBjb25zdCB0YXNrTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgdGFza0xpLnNldEF0dHJpYnV0ZShcImlkXCIsIHRhc2suaWQpO1xuICAgIHRhc2tzQ29udGFpbmVyTGlzdC5hcHBlbmRDaGlsZCh0YXNrTGkpO1xuXG4gICAgY29uc3QgY2hlY2tCb3hUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNvbnN0IGxhYmVsVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBjb25zdCBidG5EZWxldGVUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidG5EZWxldGVUYXNrLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIGAke3Rhc2suaWR9LWRlbGV0ZWApO1xuICAgIGNoZWNrQm94VGFzay5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG4gICAgY2hlY2tCb3hUYXNrLnNldEF0dHJpYnV0ZShcImlkXCIsIGAke3Rhc2suaWR9LWNwYCk7XG4gICAgY2hlY2tCb3hUYXNrLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIHRhc2submFtZSk7XG4gICAgY2hlY2tCb3hUYXNrLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgdGFzay5uYW1lKTtcbiAgICBsYWJlbFRhc2suc2V0QXR0cmlidXRlKFwiZm9yXCIsIHRhc2submFtZSk7XG4gICAgbGFiZWxUYXNrLnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCBcInRydWVcIik7XG4gICAgbGFiZWxUYXNrLnRleHRDb250ZW50ID0gdGFzay5uYW1lO1xuICAgIGJ0bkRlbGV0ZVRhc2sudGV4dENvbnRlbnQgPSBcIkRcIjtcbiAgICB0YXNrTGkuYXBwZW5kQ2hpbGQoY2hlY2tCb3hUYXNrKTtcbiAgICB0YXNrTGkuYXBwZW5kQ2hpbGQobGFiZWxUYXNrKTtcbiAgICB0YXNrTGkuYXBwZW5kQ2hpbGQoYnRuRGVsZXRlVGFzayk7XG4gIH0pO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCIuLi9zdHlsZXMvbWFpbi5zY3NzXCI7XG5cbmltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2tzL3Rhc2tzXCI7XG5pbXBvcnQgdGFza3NSZW5kZXIsIHsgdGFza3NDb250YWluZXIgfSBmcm9tIFwiLi90YXNrcy90YXNrc1JlbmRlclwiO1xuaW1wb3J0IHtcbiAgcmVuZGVyVGFza0FkZENvbnRhaW5lcixcbiAgY29tcGxldGVkVGFza3NDb3VudFJlbmRlcixcbiAgYWRkVGFza0J0bixcbiAgYWRkVGFza0lucHV0LFxuICB0YXNrc1Byb2plY3REZWxldGUsXG4gIHRhc2tzUHJvamVjdENoYW5nZU5hbWUsXG59IGZyb20gXCIuL3Rhc2tzL3Rhc2tzUmVuZGVyXCI7XG5cbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RzL3Byb2plY3RzXCI7XG4vLyBpbXBvcnQgYWRkUHJvamVjdFJlbmRlciBmcm9tIFwiLi9wcm9qZWN0cy9wcm9qZWN0c1JlbmRlclwiO1xuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0cy9wcm9qZWN0c1wiO1xuaW1wb3J0IHtcbiAgcHJvamVjdHNSZW5kZXIsXG4gIGlucHV0UHJvamVjdCxcbiAgYWRkUHJvamVjdEJ0bixcbn0gZnJvbSBcIi4vcHJvamVjdHMvcHJvamVjdHNSZW5kZXJcIjtcblxuLy8gbWFpbiBjb250YWluZXIgc2VsZWN0aW9uXG5jb25zdCBtYWluRE9NID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluX19jb250YWluZXJcIik7XG5cbmxldCBjdXJyUHJvamVjdDtcbi8vIENyZWF0ZSBwcm9qZWN0XG5hZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIC8vIGNvbnN0IHByb2plY3RSZW5kZXIgPSBhZGRQcm9qZWN0UmVuZGVyKG5ld1Byb2plY3QuaWQpO1xuICAvLyBwcm9qZWN0UmVuZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAvLyBpZiAocHJvamVjdFJlbmRlci5pZCA9PT0gbmV3UHJvamVjdC5pZCkge1xuICAvLyBuZXdQcm9qZWN0LnJlbmRlclRhc2tzKClcbiAgLy8gfVxuICAvLyB9KTtcbiAgaWYgKGlucHV0UHJvamVjdC52YWx1ZS5sZW5ndGggPiAyKSB7XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KGlucHV0UHJvamVjdC52YWx1ZSk7XG4gICAgaW5wdXRQcm9qZWN0LnZhbHVlID0gXCJcIjtcbiAgfSBlbHNlIGFsZXJ0KFwiWW91IG5lZWQgdG8gYWRkIGEgbWluaW11bSBvZiAzIGNoYXJhY3RlcnNcIik7XG5cbiAgcHJvamVjdHNSZW5kZXIoKTtcbn0pO1xuXG5jb25zdCBwcm9qMSA9IG5ldyBQcm9qZWN0KFwiV29ya291dFwiKTtcbnByb2oxLmFkZFRhc2soXCJSdW4gMmttXCIpO1xuY3VyclByb2plY3QgPSBwcm9qMTtcblxuLy8gUmVuZGVyIHRhc2tzIHdoZW4gdXNlciBjbGlja3MgcHJvamVjdCBidG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicHJvamVjdHNfX2J1dHRvblwiKSkge1xuICAgIHJlbmRlclRhc2tBZGRDb250YWluZXIoKTtcbiAgICBjb25zdCBkb21Qcm9qZWN0SWQgPSBlLnRhcmdldC5pZDtcbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBpZiAocHJvamVjdC5pZCA9PT0gZG9tUHJvamVjdElkKSB7XG4gICAgICAgIGN1cnJQcm9qZWN0ID0gcHJvamVjdDtcbiAgICAgICAgY29tcGxldGVkVGFza3NDb3VudFJlbmRlcihjdXJyUHJvamVjdCk7XG4gICAgICAgIHRhc2tzUmVuZGVyKGN1cnJQcm9qZWN0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufSk7XG5cbi8vIGFkZCB0YXNrIHRvIHByb2plY3RcbmFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGN1cnJQcm9qZWN0LmFkZFRhc2soYWRkVGFza0lucHV0LnZhbHVlKTtcbiAgdGFza3NSZW5kZXIoY3VyclByb2plY3QpO1xuICBhZGRUYXNrSW5wdXQudmFsdWUgPSBcIlwiO1xufSk7XG5cbi8vIGNvbXBsZXRlIHRhc2tcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBpZiAoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwidHlwZVwiKSA9PT0gXCJjaGVja2JveFwiKSB7XG4gICAgY29uc3QgY2hlY2tib3hUYXNrID0gZS50YXJnZXQ7XG4gICAgY29uc3QgdGFza0xpID0gY2hlY2tib3hUYXNrLnBhcmVudEVsZW1lbnQ7XG4gICAgaWYgKGNoZWNrYm94VGFzay5jaGVja2VkKSB7XG4gICAgICBjdXJyUHJvamVjdC5jb21wbGV0ZVRhc2sodGFza0xpLmlkKTtcbiAgICAgIGNvbXBsZXRlZFRhc2tzQ291bnRSZW5kZXIoY3VyclByb2plY3QpO1xuICAgICAgdGFza0xpLnJlbW92ZSgpO1xuICAgIH1cbiAgfVxufSk7XG5cbi8vIGRlbGV0ZSB0YXNrXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgaWYgKGUudGFyZ2V0LnRleHRDb250ZW50ID09PSBcIkRcIikge1xuICAgIGN1cnJQcm9qZWN0LmRlbGV0ZVRhc2soZS50YXJnZXQucGFyZW50RWxlbWVudC5pZCk7XG4gICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcbiAgICB0YXNrc1JlbmRlcihjdXJyUHJvamVjdCk7XG4gIH1cbn0pO1xuXG4vLyBkZWxldGUgcHJvamVjdFxudGFza3NQcm9qZWN0RGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAvLyBhZGQgZGVmYXVsdCBwcm9qZWN0IGluIGNhc2UgaXMgdGhlIGxhc3QgcHJvamVjdCB5b3UgZGVsZXRlXG4gIGlmIChwcm9qZWN0cy5sZW5ndGggPT09IDEpIHtcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QoXCJTdGFydCBQcm9qZWN0XCIpO1xuICB9XG5cbiAgY3VyclByb2plY3QuZGVsZXRlKCk7XG4gIGN1cnJQcm9qZWN0ID0gcHJvamVjdHNbMF07XG5cbiAgdGFza3NSZW5kZXIoY3VyclByb2plY3QpO1xuICBwcm9qZWN0c1JlbmRlcigpO1xufSk7XG5cbi8vIGNoYW5nZSBwcm9qZWN0IG5hbWVcbnRhc2tzUHJvamVjdENoYW5nZU5hbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGNvbnN0IG5ld05hbWUgPSBwcm9tcHQoXCJDaGFuZ2UgdGhlIG5hbWUgdG86XCIpO1xuXG4gIGlmIChuZXdOYW1lLmxlbmd0aCA+IDIpIHtcbiAgICBjdXJyUHJvamVjdC5jaGFuZ2VOYW1lKG5ld05hbWUpO1xuICB9IGVsc2UgYWxlcnQoXCJOYW1lIG11c3QgY29udGFpbiBtaW5pbXVtIG9mIDMgY2hhcmFjdGVyc1wiKTtcblxuICB0YXNrc1JlbmRlcihjdXJyUHJvamVjdCk7XG4gIHByb2plY3RzUmVuZGVyKCk7XG59KTtcblxuY29tcGxldGVkVGFza3NDb3VudFJlbmRlcihwcm9qMSk7XG5wcm9qZWN0c1JlbmRlcigpO1xudGFza3NSZW5kZXIocHJvajEpO1xucmVuZGVyVGFza0FkZENvbnRhaW5lcigpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9