/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./solution/styles.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./solution/styles.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! milky-way-2695569_960_720.jpg */ "./solution/milky-way-2695569_960_720.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Gemunu+Libre:wght@300&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body{\r\n    font-family: 'Gemunu Libre', sans-serif;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    color: rgb(167, 56, 56);\r\n}\r\nsection::-webkit-scrollbar{\r\n    width: 5px;\r\n    height: 5px;\r\n}\r\nsection::-webkit-scrollbar-thumb{\r\n    background-color: black;\r\n}\r\nsection::-webkit-scrollbar-track{\r\n    background-color: none;\r\n}\r\n\r\nh1{\r\n    text-align: center;\r\n}\r\nul{\r\n  list-style: none;  \r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: flex-start;\r\n}\r\nli{\r\n    min-width: 180px;\r\n    width: fit-content;\r\n    height: 15px;\r\n    padding: 4px;\r\n    margin-top: 5px;\r\n    margin-left: 0;\r\n    margin-right: 0;\r\n    border: solid 1px black;\r\n    border-radius: 8%;\r\n}\r\nsection {\r\n    background-color: rgba(240, 240, 240, 0.7);\r\n    border-radius: 8%;\r\n    overflow: scroll;\r\n}\r\nh2{\r\n    text-align: center;\r\n}\r\n.api-buttons{\r\n   display: flex;\r\n   justify-content: end;\r\n}\r\n#search{\r\n    display: flex;\r\n    justify-content: center;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-bottom: 50px;\r\n}\r\n\r\n.main-div{\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n.task-section, .recycle-bin{\r\n    width: 300px;\r\n    height: 300px;\r\n    border: 1px solid;\r\n    margin: 10px;\r\n}\r\n\r\n.task-section input{\r\n    width: 150px;\r\n    margin-top: 10px;\r\n}\r\n\r\n.task-section h2{\r\n    margin-top: 0;\r\n}\r\n.dragging{\r\n    opacity: 0.5;\r\n}\r\n\r\ninput{\r\n    border: none;\r\n    appearance: none;\r\n    background-color: rgb(240,240,240);\r\n    height:30px;\r\n    width: 200px;\r\n    border-radius: 3px;\r\n    outline: none;\r\n    margin:0;\r\n}\r\n\r\n.search-bar{\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    position: relative;\r\n    width: 220px;\r\n    height: 30px;\r\n}\r\n#search{\r\n    display: inline;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: white;\r\n}\r\n.search-bar label{\r\n    content: \"\";\r\n    position: absolute;\r\n    left: 0px;\r\n    bottom: 0px;\r\n    height: 100%;\r\n    width: 100%;\r\n    pointer-events: none;\r\n    border-bottom: solid 1px black;\r\n    transition: all 0.3s ease;\r\n}\r\n\r\n.placeholder{\r\n    position: absolute;\r\n    bottom: 5px;\r\n    left: 0%;\r\n    transition: all 0.3s ease;\r\n}\r\n\r\n.api-button,.add-task{\r\n   width: 70px;\r\n   height: 35px;\r\n   color: white;\r\n   background-color: teal;\r\n   border-radius: 4px;\r\n   transition: ease-out 0.3s;\r\n   outline: none;\r\n   box-shadow: inset 0 0 0 0 yellow;\r\n}\r\n\r\n.api-button:hover{\r\n    box-shadow: inset 70px 0 0 0 yellow;\r\n}\r\n\r\n.add-task{\r\n    width: 55px;\r\n    height: 28px;\r\n    color: white;\r\n    background-color: rgb(128, 0, 70);\r\n    border-radius: 4px;\r\n    transition: ease-out 0.3s;\r\n    outline: none;\r\n    box-shadow: inset 0 0 0 0 yellow;\r\n}\r\n\r\n.add-task:hover{\r\n    box-shadow: inset 70px 0 0 0 rgb(7, 148, 190);\r\n}\r\n\r\n\r\n\r\n.loader {\r\n  border: 16px solid #f3f3f3; /* Light grey */\r\n  border-top: 16px solid #3498db; /* Blue */\r\n  border-radius: 50%;\r\n  width: 30px;\r\n  height: 30px;\r\n  animation: spin 2s linear infinite;\r\n}\r\n\r\n@keyframes spin {\r\n  0% { transform: rotate(0deg); }\r\n  100% { transform: rotate(360deg); }\r\n}\r\n\r\n#new-theme-btn{\r\n    display: flex;\r\n    justify-self: center;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n\r\n\r\n#new-theme-btn{\r\n    font-size: 20px;\r\n    font-weight: 200;\r\n    letter-spacing: 1px;\r\n    padding: 13px 50px 13px;\r\n    outline: 0;\r\n    border: 1px solid black;\r\n    cursor: pointer;\r\n    position: relative;\r\n    background-color: rgba(0, 0, 0, 0);\r\n  }\r\n  \r\n  #new-theme-btn::after {\r\n    content: \"\";\r\n    background-color: #ffe54c;\r\n    width: 100%;\r\n    z-index: -1;\r\n    position: absolute;\r\n    height: 100%;\r\n    top: 7px;\r\n    left: 7px;\r\n    transition: 0.2s;\r\n  }\r\n  \r\n  #new-theme-btn::after {\r\n    top: 0px;\r\n    left: 0px;\r\n  }\r\n\r\n  #show-recycle {\r\n    width: 220px;\r\n    height: 50px;\r\n    border: none;\r\n    outline: none;\r\n    color: #fff;\r\n    background: #111;\r\n    cursor: pointer;\r\n    position: relative;\r\n    z-index: 0;\r\n    border-radius: 10px;\r\n}\r\n\r\n.sort-az{\r\n    display: inline;\r\n    width: 100px;\r\n    height: 20px;\r\n    line-height: 20px;\r\n    font-size: 12px;\r\n    text-decoration: none;\r\n    color: #333;\r\n    border: 2px solid #333;\r\n    letter-spacing: 2px;\r\n    text-align: center;\r\n    position: relative;\r\n  }\r\n\r\n\r\n\r\n  .delete-button{\r\n    display:inline-block;\r\n    padding:0.7em 1.4em;\r\n    margin:0 0.3em 0.3em 0;\r\n    border-radius:0.15em;\r\n    font-size: 12px;\r\n    box-sizing: border-box;\r\n    text-decoration:none;\r\n    font-family:'Roboto',sans-serif;\r\n    text-transform:uppercase;\r\n    font-weight:400;\r\n    color:#FFFFFF;\r\n    background-color:#cf2008;\r\n    box-shadow:inset 0 -0.6em 0 -0.35em rgba(0,0,0,0.17);\r\n    text-align:center;\r\n    position:relative;\r\n    }\r\n\r\n    .delete-button:active{\r\n        top:0.1em;\r\n        }\r\n        @media all and (max-width:30em){\r\n         .delete-button{\r\n        display:block;\r\n        margin:0.4em auto;\r\n        }\r\n    }\r\n\r\n    #to-do-section{\r\n        color: rgb(35, 5, 83);\r\n        background-color: rgba(50, 256, 50, 0.6);\r\n    }\r\n    #in-progress-section{\r\n        color: rgb(109, 2, 2);\r\n        background-color: rgba(50, 50, 256, 0.6);\r\n    }\r\n    #done-section{\r\n        color: rgb(70, 82, 3);\r\n        background-color: rgba(256, 50, 50, 0.6);\r\n    }", "",{"version":3,"sources":["webpack://./solution/styles.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Gemunu+Libre:wght@300&display=swap');\r\n\r\nbody{\r\n    font-family: 'Gemunu Libre', sans-serif;\r\n    background-image: url(milky-way-2695569_960_720.jpg);\r\n    color: rgb(167, 56, 56);\r\n}\r\nsection::-webkit-scrollbar{\r\n    width: 5px;\r\n    height: 5px;\r\n}\r\nsection::-webkit-scrollbar-thumb{\r\n    background-color: black;\r\n}\r\nsection::-webkit-scrollbar-track{\r\n    background-color: none;\r\n}\r\n\r\nh1{\r\n    text-align: center;\r\n}\r\nul{\r\n  list-style: none;  \r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: flex-start;\r\n}\r\nli{\r\n    min-width: 180px;\r\n    width: fit-content;\r\n    height: 15px;\r\n    padding: 4px;\r\n    margin-top: 5px;\r\n    margin-left: 0;\r\n    margin-right: 0;\r\n    border: solid 1px black;\r\n    border-radius: 8%;\r\n}\r\nsection {\r\n    background-color: rgba(240, 240, 240, 0.7);\r\n    border-radius: 8%;\r\n    overflow: scroll;\r\n}\r\nh2{\r\n    text-align: center;\r\n}\r\n.api-buttons{\r\n   display: flex;\r\n   justify-content: end;\r\n}\r\n#search{\r\n    display: flex;\r\n    justify-content: center;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-bottom: 50px;\r\n}\r\n\r\n.main-div{\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n.task-section, .recycle-bin{\r\n    width: 300px;\r\n    height: 300px;\r\n    border: 1px solid;\r\n    margin: 10px;\r\n}\r\n\r\n.task-section input{\r\n    width: 150px;\r\n    margin-top: 10px;\r\n}\r\n\r\n.task-section h2{\r\n    margin-top: 0;\r\n}\r\n.dragging{\r\n    opacity: 0.5;\r\n}\r\n\r\ninput{\r\n    border: none;\r\n    appearance: none;\r\n    background-color: rgb(240,240,240);\r\n    height:30px;\r\n    width: 200px;\r\n    border-radius: 3px;\r\n    outline: none;\r\n    margin:0;\r\n}\r\n\r\n.search-bar{\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    position: relative;\r\n    width: 220px;\r\n    height: 30px;\r\n}\r\n#search{\r\n    display: inline;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: white;\r\n}\r\n.search-bar label{\r\n    content: \"\";\r\n    position: absolute;\r\n    left: 0px;\r\n    bottom: 0px;\r\n    height: 100%;\r\n    width: 100%;\r\n    pointer-events: none;\r\n    border-bottom: solid 1px black;\r\n    transition: all 0.3s ease;\r\n}\r\n\r\n.placeholder{\r\n    position: absolute;\r\n    bottom: 5px;\r\n    left: 0%;\r\n    transition: all 0.3s ease;\r\n}\r\n\r\n.api-button,.add-task{\r\n   width: 70px;\r\n   height: 35px;\r\n   color: white;\r\n   background-color: teal;\r\n   border-radius: 4px;\r\n   transition: ease-out 0.3s;\r\n   outline: none;\r\n   box-shadow: inset 0 0 0 0 yellow;\r\n}\r\n\r\n.api-button:hover{\r\n    box-shadow: inset 70px 0 0 0 yellow;\r\n}\r\n\r\n.add-task{\r\n    width: 55px;\r\n    height: 28px;\r\n    color: white;\r\n    background-color: rgb(128, 0, 70);\r\n    border-radius: 4px;\r\n    transition: ease-out 0.3s;\r\n    outline: none;\r\n    box-shadow: inset 0 0 0 0 yellow;\r\n}\r\n\r\n.add-task:hover{\r\n    box-shadow: inset 70px 0 0 0 rgb(7, 148, 190);\r\n}\r\n\r\n\r\n\r\n.loader {\r\n  border: 16px solid #f3f3f3; /* Light grey */\r\n  border-top: 16px solid #3498db; /* Blue */\r\n  border-radius: 50%;\r\n  width: 30px;\r\n  height: 30px;\r\n  animation: spin 2s linear infinite;\r\n}\r\n\r\n@keyframes spin {\r\n  0% { transform: rotate(0deg); }\r\n  100% { transform: rotate(360deg); }\r\n}\r\n\r\n#new-theme-btn{\r\n    display: flex;\r\n    justify-self: center;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n\r\n\r\n#new-theme-btn{\r\n    font-size: 20px;\r\n    font-weight: 200;\r\n    letter-spacing: 1px;\r\n    padding: 13px 50px 13px;\r\n    outline: 0;\r\n    border: 1px solid black;\r\n    cursor: pointer;\r\n    position: relative;\r\n    background-color: rgba(0, 0, 0, 0);\r\n  }\r\n  \r\n  #new-theme-btn::after {\r\n    content: \"\";\r\n    background-color: #ffe54c;\r\n    width: 100%;\r\n    z-index: -1;\r\n    position: absolute;\r\n    height: 100%;\r\n    top: 7px;\r\n    left: 7px;\r\n    transition: 0.2s;\r\n  }\r\n  \r\n  #new-theme-btn::after {\r\n    top: 0px;\r\n    left: 0px;\r\n  }\r\n\r\n  #show-recycle {\r\n    width: 220px;\r\n    height: 50px;\r\n    border: none;\r\n    outline: none;\r\n    color: #fff;\r\n    background: #111;\r\n    cursor: pointer;\r\n    position: relative;\r\n    z-index: 0;\r\n    border-radius: 10px;\r\n}\r\n\r\n.sort-az{\r\n    display: inline;\r\n    width: 100px;\r\n    height: 20px;\r\n    line-height: 20px;\r\n    font-size: 12px;\r\n    text-decoration: none;\r\n    color: #333;\r\n    border: 2px solid #333;\r\n    letter-spacing: 2px;\r\n    text-align: center;\r\n    position: relative;\r\n  }\r\n\r\n\r\n\r\n  .delete-button{\r\n    display:inline-block;\r\n    padding:0.7em 1.4em;\r\n    margin:0 0.3em 0.3em 0;\r\n    border-radius:0.15em;\r\n    font-size: 12px;\r\n    box-sizing: border-box;\r\n    text-decoration:none;\r\n    font-family:'Roboto',sans-serif;\r\n    text-transform:uppercase;\r\n    font-weight:400;\r\n    color:#FFFFFF;\r\n    background-color:#cf2008;\r\n    box-shadow:inset 0 -0.6em 0 -0.35em rgba(0,0,0,0.17);\r\n    text-align:center;\r\n    position:relative;\r\n    }\r\n\r\n    .delete-button:active{\r\n        top:0.1em;\r\n        }\r\n        @media all and (max-width:30em){\r\n         .delete-button{\r\n        display:block;\r\n        margin:0.4em auto;\r\n        }\r\n    }\r\n\r\n    #to-do-section{\r\n        color: rgb(35, 5, 83);\r\n        background-color: rgba(50, 256, 50, 0.6);\r\n    }\r\n    #in-progress-section{\r\n        color: rgb(109, 2, 2);\r\n        background-color: rgba(50, 50, 256, 0.6);\r\n    }\r\n    #done-section{\r\n        color: rgb(70, 82, 3);\r\n        background-color: rgba(256, 50, 50, 0.6);\r\n    }"],"sourceRoot":""}]);
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
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
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

/***/ "./solution/styles.css":
/*!*****************************!*\
  !*** ./solution/styles.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./solution/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./solution/create element function.js":
/*!*********************************************!*\
  !*** ./solution/create element function.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createElement)
/* harmony export */ });
// create Element function
function createElement (tagName, children = [], classes = [], attributes = {}) {
  const newEl = document.createElement(tagName);
  children.forEach((kid) => {
    let child = kid;
    if (typeof (child) === 'string') {
      child = document.createTextNode(child);
    }
    newEl.append(child);
  });
  classes.forEach((cls) => {
    newEl.classList.add(cls);
  });
  Object.entries(attributes).forEach((attr) => {
    newEl.setAttribute(attr[0], attr[1]);
  });
  return newEl;
}


/***/ }),

/***/ "./solution/global variables for index.js":
/*!************************************************!*\
  !*** ./solution/global variables for index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskDiv": () => (/* binding */ taskDiv),
/* harmony export */   "searchBar": () => (/* binding */ searchBar),
/* harmony export */   "saveButton": () => (/* binding */ saveButton),
/* harmony export */   "loadButton": () => (/* binding */ loadButton),
/* harmony export */   "showRecycleBin": () => (/* binding */ showRecycleBin),
/* harmony export */   "loader": () => (/* binding */ loader),
/* harmony export */   "recycleBin": () => (/* binding */ recycleBin),
/* harmony export */   "toDoContainer": () => (/* binding */ toDoContainer),
/* harmony export */   "inProgressContainer": () => (/* binding */ inProgressContainer),
/* harmony export */   "doneContainer": () => (/* binding */ doneContainer),
/* harmony export */   "taskEnumeratorArray": () => (/* binding */ taskEnumeratorArray)
/* harmony export */ });
// setting global variables for the document elements
const taskDiv = document.getElementById('tasks-div');
const searchBar = document.getElementById('search');
const saveButton = document.getElementById('save-button');
const loadButton = document.getElementById('load-button');
const showRecycleBin = document.getElementById('show-recycle');
const loader = document.querySelector('.api-buttons').lastElementChild;
const recycleBin = document.querySelector('.recycle-bin');
const toDoContainer = document.getElementById('to-do-container');
const inProgressContainer = document.getElementById('in-progress-container');
const doneContainer = document.getElementById('done-container');
const taskEnumeratorArray = Array.from(document.getElementsByClassName('task-enumerator'));


/***/ }),

/***/ "./solution/list counter for index.js":
/*!********************************************!*\
  !*** ./solution/list counter for index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ listCounter)
/* harmony export */ });
/* harmony import */ var _global_variables_for_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global variables for index */ "./solution/global variables for index.js");

// total list item counter function
function listCounter () {
  _global_variables_for_index__WEBPACK_IMPORTED_MODULE_0__.taskEnumeratorArray.forEach((taskEnumerator) => {
    const taskEnum = taskEnumerator;
    const listofEnumerator = taskEnum.parentElement.lastElementChild.firstElementChild.children;
    const totalTasks = Array.from(listofEnumerator).length;
    taskEnum.textContent = `total: ${totalTasks}`;
  });
}


/***/ }),

/***/ "./solution/localStorage.js":
/*!**********************************!*\
  !*** ./solution/localStorage.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadLocalStorageAtBeginning": () => (/* binding */ loadLocalStorageAtBeginning),
/* harmony export */   "localStorageObjectForUpdate": () => (/* binding */ localStorageObjectForUpdate),
/* harmony export */   "deleteAll": () => (/* binding */ deleteAll),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "appendToContainer": () => (/* binding */ appendToContainer),
/* harmony export */   "innerLocalStorageSave": () => (/* binding */ innerLocalStorageSave),
/* harmony export */   "loadLocalStorageToDom": () => (/* binding */ loadLocalStorageToDom),
/* harmony export */   "toDoTasksUl": () => (/* binding */ toDoTasksUl),
/* harmony export */   "inProgressTasksUl": () => (/* binding */ inProgressTasksUl),
/* harmony export */   "doneTasksUl": () => (/* binding */ doneTasksUl),
/* harmony export */   "deletedTasksUl": () => (/* binding */ deletedTasksUl),
/* harmony export */   "localStorageSave": () => (/* binding */ localStorageSave)
/* harmony export */ });
/* harmony import */ var _global_variables_for_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global variables for index */ "./solution/global variables for index.js");
/* harmony import */ var _list_counter_for_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list counter for index */ "./solution/list counter for index.js");
/* harmony import */ var _create_element_function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create element function */ "./solution/create element function.js");



/* local storage  */
// initilizes the local storage object
function loadLocalStorageAtBeginning () {
  if (!localStorage.tasks || localStorage.tasks.length === 0) {
    localStorage.setItem('tasks', JSON.stringify({
      todo: [],
      'in-progress': [],
      done: [],
      deleted: []
    }));
  }
}
// object for saving to local storage
const localStorageObjectForUpdate = JSON.parse(localStorage.tasks);
// local storage save function

// local storage clear button lisener
function deleteAll (e) {
  const { target } = e;
  if (target.className === 'delete-button') {
    localStorage.setItem('tasks', JSON.stringify({
      todo: [],
      'in-progress': [],
      done: [],
      deleted: []
    }));
    window.location.reload();
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteAll);

// localstorage loading after refresh
function appendToContainer (containerPr, ul) {
  const container = containerPr;
  if (localStorageObjectForUpdate[ul][0] == null) {
    container.innerHTML = '';
  } else {
    const currentUl = localStorageObjectForUpdate[ul][0];
    container.innerHTML = currentUl;
  }
}
// inner local storage save
function innerLocalStorageSave (listName, ul) {
  localStorageObjectForUpdate[listName][0] = ul.outerHTML;
}

// localstorage loading after refresh

function loadLocalStorageToDom () {
  if (localStorageObjectForUpdate.todo[0] != null || localStorageObjectForUpdate['in-progress'][0] != null || localStorageObjectForUpdate.done[0] != null || localStorageObjectForUpdate.deleted[0] != null) {
    appendToContainer(_global_variables_for_index__WEBPACK_IMPORTED_MODULE_0__.toDoContainer, 'todo');
    appendToContainer(_global_variables_for_index__WEBPACK_IMPORTED_MODULE_0__.inProgressContainer, 'in-progress');
    appendToContainer(_global_variables_for_index__WEBPACK_IMPORTED_MODULE_0__.doneContainer, 'done');
    appendToContainer(_global_variables_for_index__WEBPACK_IMPORTED_MODULE_0__.recycleBin, 'deleted');
    (0,_list_counter_for_index__WEBPACK_IMPORTED_MODULE_1__["default"])();
  } else {
    const toDoTasksUlinner = (0,_create_element_function__WEBPACK_IMPORTED_MODULE_2__["default"])('ul', [], ['to-do-tasks'], {});
    const inProgressTasksUlinner = (0,_create_element_function__WEBPACK_IMPORTED_MODULE_2__["default"])('ul', [], ['in-progress-tasks'], {});
    const doneTasksUlinner = (0,_create_element_function__WEBPACK_IMPORTED_MODULE_2__["default"])('ul', [], ['done-tasks'], {});
    const deletedTasksUlinner = (0,_create_element_function__WEBPACK_IMPORTED_MODULE_2__["default"])('ul', [], ['recycle-Ul'], {});
    _global_variables_for_index__WEBPACK_IMPORTED_MODULE_0__.toDoContainer.appendChild(toDoTasksUlinner);
    _global_variables_for_index__WEBPACK_IMPORTED_MODULE_0__.inProgressContainer.appendChild(inProgressTasksUlinner);
    _global_variables_for_index__WEBPACK_IMPORTED_MODULE_0__.doneContainer.appendChild(doneTasksUlinner);
    _global_variables_for_index__WEBPACK_IMPORTED_MODULE_0__.recycleBin.appendChild(deletedTasksUlinner);
    (0,_list_counter_for_index__WEBPACK_IMPORTED_MODULE_1__["default"])();
  }
}
const toDoTasksUl = [];
const inProgressTasksUl = [];
const doneTasksUl = [];
const deletedTasksUl = [];

function localStorageSave () {
  innerLocalStorageSave('todo', ...toDoTasksUl);
  innerLocalStorageSave('in-progress', ...inProgressTasksUl);
  innerLocalStorageSave('done', ...doneTasksUl);
  innerLocalStorageSave('deleted', ...deletedTasksUl);
  localStorage.setItem('tasks', JSON.stringify(localStorageObjectForUpdate));
}


/***/ }),

/***/ "./solution/searchbar functionality.js":
/*!*********************************************!*\
  !*** ./solution/searchbar functionality.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hideTask": () => (/* binding */ hideTask),
/* harmony export */   "searchTask": () => (/* binding */ searchTask)
/* harmony export */ });
/* harmony import */ var _global_variables_for_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global variables for index */ "./solution/global variables for index.js");

/* search bar */

// search bar functions
function hideTask (tasksList, value) {
  tasksList.forEach((liPr) => {
    const li = liPr;
    li.hidden = false;
    if (!li.textContent.toLowerCase().includes(value.toLowerCase())) {
      li.hidden = true;
    }
  });
}

function searchTask (e) {
  const { value } = e.target;
  const taskArray = Array.from(document.getElementsByTagName('li'));
  hideTask(taskArray, value);
}

_global_variables_for_index__WEBPACK_IMPORTED_MODULE_0__.searchBar.addEventListener('focus', () => {
  const placeholder = document.querySelector('.placeholder');
  const label = document.querySelector('.placeholder-label');
  placeholder.style = 'transform: translateY(-150%); color:blue; font-size:12px';
  label.style = 'border-bottom: solid 3px blue;';
});
_global_variables_for_index__WEBPACK_IMPORTED_MODULE_0__.searchBar.addEventListener('blur', () => {
  if (_global_variables_for_index__WEBPACK_IMPORTED_MODULE_0__.searchBar.value === '') {
    const placeholder = document.querySelector('.placeholder');
    const label = document.querySelector('.placeholder-label');
    placeholder.style = 'transform: translateY(0%); color:black; font-size:16px';
    label.style = 'border-bottom: solid 1px black;';
  }
});


/***/ }),

/***/ "./solution/tasks event listeners.js":
/*!*******************************************!*\
  !*** ./solution/tasks event listeners.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gainFocus": () => (/* binding */ gainFocus),
/* harmony export */   "dragItem": () => (/* binding */ dragItem),
/* harmony export */   "checkListAtAlt": () => (/* binding */ checkListAtAlt)
/* harmony export */ });
// gaining focus function
function gainFocus (e) {
  const { target } = e;
  if (target.tagName === 'LI') {
    target.setAttribute('contenteditable', 'true');
    target.style.backgroundColor = 'rgba(50,50,200,0.5)';
  }
}

// dragItem function
function dragItem (e) {
  e.target.classList.add('dragging');
}

function checkListAtAlt (eventKey, target, keyNum, ulToInsert) {
  if (eventKey.toString() === keyNum.toString()) {
    ulToInsert.insertBefore(target, ulToInsert.firstChild);
  }
}


/***/ }),

/***/ "./solution/milky-way-2695569_960_720.jpg":
/*!************************************************!*\
  !*** ./solution/milky-way-2695569_960_720.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "74653ab6b71a9ba27aed.jpg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************!*\
  !*** ./solution/index.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./solution/styles.css");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorage */ "./solution/localStorage.js");
/* harmony import */ var _tasks_event_listeners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks event listeners */ "./solution/tasks event listeners.js");
/* harmony import */ var _searchbar_functionality__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./searchbar functionality */ "./solution/searchbar functionality.js");
/* harmony import */ var _global_variables_for_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./global variables for index */ "./solution/global variables for index.js");
/* harmony import */ var _list_counter_for_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list counter for index */ "./solution/list counter for index.js");
/* harmony import */ var _create_element_function__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create element function */ "./solution/create element function.js");







/* local storage  */

// initilizes the local storage object
(0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.loadLocalStorageAtBeginning)();
// object for saving to local storage

// local storage save function
// function localStorageSave () {
//   innerLocalStorageSave('todo', ...toDoTasksUl);
//   innerLocalStorageSave('in-progress', ...inProgressTasksUl);
//   innerLocalStorageSave('done', ...doneTasksUl);
//   innerLocalStorageSave('deleted', ...deletedTasksUl);
//   localStorage.setItem('tasks', JSON.stringify(localStorageObjectForUpdate));
// }

/* dom manipulation */

// setting global variables for the document elements

// localstorage loading after refresh
(0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.loadLocalStorageToDom)();
// sets the lists objects for updating
_localStorage__WEBPACK_IMPORTED_MODULE_1__.toDoTasksUl[0] = _global_variables_for_index__WEBPACK_IMPORTED_MODULE_4__.toDoContainer.firstChild;
_localStorage__WEBPACK_IMPORTED_MODULE_1__.inProgressTasksUl[0] = _global_variables_for_index__WEBPACK_IMPORTED_MODULE_4__.inProgressContainer.firstChild;
_localStorage__WEBPACK_IMPORTED_MODULE_1__.doneTasksUl[0] = _global_variables_for_index__WEBPACK_IMPORTED_MODULE_4__.doneContainer.firstChild;
_localStorage__WEBPACK_IMPORTED_MODULE_1__.deletedTasksUl[0] = _global_variables_for_index__WEBPACK_IMPORTED_MODULE_4__.recycleBin.firstChild;

/** event listeners**/

/* tasks */

// double click functionality

// gaining focus function

// getting out of focus after blur
function saveValueBlur (e) {
  const { target } = e;
  if (target.tagName !== 'LI') {
    return;
  }
  target.setAttribute('contenteditable', 'false');
  target.style.backgroundColor = 'rgba(0,0,0,0)';
  (0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.localStorageSave)();
  (0,_list_counter_for_index__WEBPACK_IMPORTED_MODULE_5__["default"])();
}
//

// hover + alt + 1/2/3 functionality

function hoverReplace (e) {
  const { target } = e;
  function innerKeyReplace (ev) {
    if (ev.altKey) {
      (0,_tasks_event_listeners__WEBPACK_IMPORTED_MODULE_2__.checkListAtAlt)(ev.key, target, 1, _localStorage__WEBPACK_IMPORTED_MODULE_1__.toDoTasksUl[0]);
      (0,_tasks_event_listeners__WEBPACK_IMPORTED_MODULE_2__.checkListAtAlt)(ev.key, target, 2, _localStorage__WEBPACK_IMPORTED_MODULE_1__.inProgressTasksUl[0]);
      (0,_tasks_event_listeners__WEBPACK_IMPORTED_MODULE_2__.checkListAtAlt)(ev.key, target, 3, _localStorage__WEBPACK_IMPORTED_MODULE_1__.doneTasksUl[0]);
    }
    // local storage insertion
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.localStorageSave)();
    (0,_list_counter_for_index__WEBPACK_IMPORTED_MODULE_5__["default"])();
  }
  target.addEventListener('mouseleave', () => {
    window.removeEventListener('keydown', innerKeyReplace);
  });
  window.addEventListener('keydown', innerKeyReplace);
}
// add addHoverReplace
function addHoverReplace (e) {
  if (e.target.tagName !== 'LI') {
    return;
  }
  e.target.addEventListener('mouseenter', hoverReplace);
}

// dragItem function

function endDrag (e) {
  e.target.classList.remove('dragging');
  (0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.localStorageSave)();
  (0,_list_counter_for_index__WEBPACK_IMPORTED_MODULE_5__["default"])();
}
// adding event listeners for dragNdrop
Array.from(document.querySelectorAll('.task')).forEach((li) => {
  li.addEventListener('dragstart', _tasks_event_listeners__WEBPACK_IMPORTED_MODULE_2__.dragItem);
  li.addEventListener('dragend', endDrag);
});

// adding the drop event to the sections
const sections = Array.from(document.querySelectorAll('section'));
sections.forEach((section) => {
  section.addEventListener('dragover', (e) => {
    const afterElement = elementAfterDragging(section, e.clientY);
    if (afterElement == null) {
      section.lastElementChild.firstElementChild.appendChild(document.querySelector('.dragging'));
    } else {
      section.lastElementChild.firstElementChild.insertBefore(document.querySelector('.dragging'), afterElement);
    }
  });
});
// controls what li to switch
function elementAfterDragging (container, y) {
  const draggableElements = [...container.querySelectorAll('[draggable = true]:not(.dragging)')];
  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect();
    const offset = y - box.top - box.height / 2;
    if (offset < 0 && offset > closest.offset) {
      return { offset, element: child };
    }
    return closest;
  }, { offset: Number.NEGATIVE_INFINITY }).element;
}

/* lists */

// adding event listeners to the body
document.body.addEventListener('mouseover', addHoverReplace);
document.body.addEventListener('dblclick', _tasks_event_listeners__WEBPACK_IMPORTED_MODULE_2__.gainFocus);
document.body.addEventListener('focusout', saveValueBlur);
document.body.addEventListener('contextmenu', removeLi);
document.addEventListener('click', sortAz);
document.body.addEventListener('click', _localStorage__WEBPACK_IMPORTED_MODULE_1__.deleteAll);

// total list item counter function

// adding a list item functionality

// inner add task function
function innerAddTaskToul (targetPr) {
  const target = targetPr;
  const newTask = (0,_create_element_function__WEBPACK_IMPORTED_MODULE_6__["default"])('li', [`${target.previousElementSibling.value}`], ['task'], { draggable: 'true' });
  const inseter = target.nextElementSibling.firstChild.firstChild;
  target.nextElementSibling.firstChild.insertBefore(newTask, inseter);
  // local storage insertion
  (0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.localStorageSave)();
  // individual eventListeners for drag and Drop
  newTask.addEventListener('dragstart', _tasks_event_listeners__WEBPACK_IMPORTED_MODULE_2__.dragItem);
  newTask.addEventListener('dragend', endDrag);
  target.previousElementSibling.value = '';
  (0,_list_counter_for_index__WEBPACK_IMPORTED_MODULE_5__["default"])();
}
// add task function
function addTask (e) {
  const { target } = e;
  if (target.className === 'add-task') {
    const inputText = target.previousElementSibling.value;
    if (inputText === '') {
      alert("You haven't entered any text");
    } else {
      innerAddTaskToul(target);
    }
  }
}
_global_variables_for_index__WEBPACK_IMPORTED_MODULE_4__.taskDiv.addEventListener('click', addTask);
/*
// create Element function

/* search bar */

// search bar functions

// search bar animations
//
_global_variables_for_index__WEBPACK_IMPORTED_MODULE_4__.searchBar.addEventListener('keyup', _searchbar_functionality__WEBPACK_IMPORTED_MODULE_3__.searchTask);

// game trigger event
let asCounter = 0;
document.addEventListener('keydown', (e) => {
  if (e.key === 'a') {
    asCounter += 1;
    if (asCounter === 100) {
      window.location.href = './htmlgame.html';
    }
  }
});

// change theme event
const themeButton = document.getElementById('new-theme-btn');
const cssLink = document.head.querySelector('link');
themeButton.addEventListener('click', (e) => {
  if (cssLink.href === 'http://127.0.0.1:5500/solution/styles.css' || cssLink.href === './styles.css') {
    cssLink.setAttribute('href', './cssFornewTheme.css');
  } else {
    cssLink.setAttribute('href', './styles.css');
  }
});

// right click for erasing li function
function removeLi (e) {
  if (e.target.tagName === 'LI') {
    e.preventDefault();
    _localStorage__WEBPACK_IMPORTED_MODULE_1__.deletedTasksUl[0].appendChild(e.target);
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.localStorageSave)();
    (0,_list_counter_for_index__WEBPACK_IMPORTED_MODULE_5__["default"])();
  }
}
// recycle bin button event listener
_global_variables_for_index__WEBPACK_IMPORTED_MODULE_4__.showRecycleBin.addEventListener('click', (e) => {
  _global_variables_for_index__WEBPACK_IMPORTED_MODULE_4__.recycleBin.hidden = !_global_variables_for_index__WEBPACK_IMPORTED_MODULE_4__.recycleBin.hidden;
});

// sort LI alphabetically
let azCounter = 1;

function sortAzUp (target) {
  Array.from(target.parentElement.lastElementChild.firstElementChild.children).sort((a, b) => {
    if (a.textContent > b.textContent) {
      target.parentElement.lastElementChild.firstElementChild.insertBefore(a, b);
      return 1;
    }
    if (b.textContent < a.textContent) {
      target.parentElement.insertBefor(b, a);
      return -1;
    }
    target.parentElement.lastElementChild.firstElementChild.insertBefore(a, b);
    return 0;
  });
}
function sortAzDown (target) {
  Array.from(target.parentElement.lastElementChild.firstElementChild.children).sort((a, b) => {
    if (a.textContent < b.textContent) {
      target.parentElement.lastElementChild.firstElementChild.insertBefore(a, b);
      return 1;
    }
    if (b.textContent > a.textContent) {
      target.parentElement.insertBefor(b, a);
      return -1;
    }
    target.parentElement.lastElementChild.firstElementChild.insertBefore(a, b);
    return 0;
  });
}

function innerSortAz (counter, target) {
  if (counter % 2 === 0) {
    sortAzUp(target);
  } else {
    sortAzDown(target);
  }
}

function sortAz (e) {
  const { target } = e;
  if (target.className !== 'sort-az') {
    return;
  }
  innerSortAz(azCounter, target);
  azCounter += 1;
}

/* Api Functions */

// API functions
async function saveApi () {
  _global_variables_for_index__WEBPACK_IMPORTED_MODULE_4__.loader.classList.add('loader');
  await fetch('https://json-bins.herokuapp.com/bin/614adb6c4021ac0e6c080c15', {
    method: 'PUT',
    headers: {
      Accept: 'application/json', 'Content-Type': 'application/json'
    },
    // body: JSON.stringify({'tasks':{'todo':[], 'in-progress': [], 'done' : []} // resets the API
    body: JSON.stringify({ tasks: { todo: [_localStorage__WEBPACK_IMPORTED_MODULE_1__.toDoTasksUl[0].outerHTML], 'in-progress': [_localStorage__WEBPACK_IMPORTED_MODULE_1__.inProgressTasksUl[0].outerHTML], done: [_localStorage__WEBPACK_IMPORTED_MODULE_1__.doneTasksUl[0].outerHTML] } })
  }).then((response) => { if (response.status > 400) { alert("i'm a teapot"); } });
  _global_variables_for_index__WEBPACK_IMPORTED_MODULE_4__.loader.classList.remove('loader');
}

// load API function
async function loadApi () {
  _global_variables_for_index__WEBPACK_IMPORTED_MODULE_4__.loader.classList.add('loader');
  await fetch('https://json-bins.herokuapp.com/bin/614adb6c4021ac0e6c080c15').then(response => response.json())
    .then((data) => {
      _global_variables_for_index__WEBPACK_IMPORTED_MODULE_4__.loader.classList.remove('loader');
      const toDoTasksUlAPI = data.tasks.todo[0];
      const inProgressTasksUlAPI = data.tasks['in-progress'][0];
      const doneTasksUlAPI = data.tasks.done[0];

      function loadTasksFromApi (taskList, sectionPr) {
        const section = sectionPr;
        if (taskList === undefined) {
          section.innerHTML = '';
        } else {
          section.innerHTML = taskList;
        }
      }
      loadTasksFromApi(toDoTasksUlAPI, _global_variables_for_index__WEBPACK_IMPORTED_MODULE_4__.toDoContainer);
      loadTasksFromApi(inProgressTasksUlAPI, _global_variables_for_index__WEBPACK_IMPORTED_MODULE_4__.inProgressContainer);
      loadTasksFromApi(doneTasksUlAPI, _global_variables_for_index__WEBPACK_IMPORTED_MODULE_4__.doneContainer);

      _localStorage__WEBPACK_IMPORTED_MODULE_1__.toDoTasksUl[0] = _global_variables_for_index__WEBPACK_IMPORTED_MODULE_4__.toDoContainer.firstChild;
      _localStorage__WEBPACK_IMPORTED_MODULE_1__.inProgressTasksUl[0] = _global_variables_for_index__WEBPACK_IMPORTED_MODULE_4__.inProgressContainer.firstChild;
      _localStorage__WEBPACK_IMPORTED_MODULE_1__.doneTasksUl[0] = _global_variables_for_index__WEBPACK_IMPORTED_MODULE_4__.doneContainer.firstChild;
      // saving changes to local storage
      (0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.localStorageSave)();
      (0,_list_counter_for_index__WEBPACK_IMPORTED_MODULE_5__["default"])();

      // resetting the individual dargNdrop eventListeners
      Array.from(document.querySelectorAll('.task')).forEach((li) => {
        li.addEventListener('dragstart', _tasks_event_listeners__WEBPACK_IMPORTED_MODULE_2__.dragItem);
        li.addEventListener('dragend', endDrag);
      });
    });
}
// adding the event listeners to the load and save buttons
_global_variables_for_index__WEBPACK_IMPORTED_MODULE_4__.saveButton.addEventListener('click', saveApi);
_global_variables_for_index__WEBPACK_IMPORTED_MODULE_4__.loadButton.addEventListener('click', loadApi);
//

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTZCLGtDQUFrQyxxREFBcUQsU0FBUyxzQkFBc0Isa0NBQWtDLHFEQUFxRCxTQUFTLE9BQU8sc0ZBQXNGLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksU0FBUyxLQUFLLHNCQUFzQix1QkFBdUIsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssc0JBQXNCLHVCQUF1QixPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxTQUFTLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZ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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVLFNBQVM7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxFQUFFLDZFQUFvQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCw2QkFBNkIsU0FBUywyQ0FBMkM7QUFDakYsMkJBQTJCLFNBQVMsT0FBTyxtRUFBd0IsbUJBQW1CLHlFQUE4QixVQUFVLG1FQUF3QixLQUFLO0FBQzNKLEdBQUcsdUJBQXVCLDZCQUE2QiwwQkFBMEI7QUFDakYsRUFBRSxnRkFBdUI7QUFDekI7O0FBRUE7QUFDQTtBQUNBLEVBQUUsNkVBQW9CO0FBQ3RCO0FBQ0E7QUFDQSxNQUFNLGdGQUF1QjtBQUM3QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLHNFQUFhO0FBQ3BELDZDQUE2Qyw0RUFBbUI7QUFDaEUsdUNBQXVDLHNFQUFhOztBQUVwRCxNQUFNLHlEQUFjLEdBQUcsaUZBQXdCO0FBQy9DLE1BQU0sK0RBQW9CLEdBQUcsdUZBQThCO0FBQzNELE1BQU0seURBQWMsR0FBRyxpRkFBd0I7QUFDL0M7QUFDQSxNQUFNLCtEQUFnQjtBQUN0QixNQUFNLG1FQUFXOztBQUVqQjtBQUNBO0FBQ0EseUNBQXlDLDREQUFRO0FBQ2pEO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0Esb0ZBQTJCO0FBQzNCLG9GQUEyQjtBQUMzQiIsInNvdXJjZXMiOlsid2VicGFjazovL2ZpbmFsLy4vc29sdXRpb24vc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9maW5hbC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZmluYWwvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2ZpbmFsLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZmluYWwvLi9zb2x1dGlvbi9zdHlsZXMuY3NzPzU5Y2YiLCJ3ZWJwYWNrOi8vZmluYWwvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZmluYWwvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2ZpbmFsLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2ZpbmFsLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2ZpbmFsLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZmluYWwvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9maW5hbC8uL3NvbHV0aW9uL2NyZWF0ZSBlbGVtZW50IGZ1bmN0aW9uLmpzIiwid2VicGFjazovL2ZpbmFsLy4vc29sdXRpb24vZ2xvYmFsIHZhcmlhYmxlcyBmb3IgaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmluYWwvLi9zb2x1dGlvbi9saXN0IGNvdW50ZXIgZm9yIGluZGV4LmpzIiwid2VicGFjazovL2ZpbmFsLy4vc29sdXRpb24vbG9jYWxTdG9yYWdlLmpzIiwid2VicGFjazovL2ZpbmFsLy4vc29sdXRpb24vc2VhcmNoYmFyIGZ1bmN0aW9uYWxpdHkuanMiLCJ3ZWJwYWNrOi8vZmluYWwvLi9zb2x1dGlvbi90YXNrcyBldmVudCBsaXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vZmluYWwvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZmluYWwvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZmluYWwvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2ZpbmFsL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vZmluYWwvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9maW5hbC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2ZpbmFsL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2ZpbmFsL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2ZpbmFsLy4vc29sdXRpb24vaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIm1pbGt5LXdheS0yNjk1NTY5Xzk2MF83MjAuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1HZW11bnUrTGlicmU6d2dodEAzMDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHl7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnR2VtdW51IExpYnJlJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG4gICAgY29sb3I6IHJnYigxNjcsIDU2LCA1Nik7XFxyXFxufVxcclxcbnNlY3Rpb246Oi13ZWJraXQtc2Nyb2xsYmFye1xcclxcbiAgICB3aWR0aDogNXB4O1xcclxcbiAgICBoZWlnaHQ6IDVweDtcXHJcXG59XFxyXFxuc2VjdGlvbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWJ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5zZWN0aW9uOjotd2Via2l0LXNjcm9sbGJhci10cmFja3tcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaDF7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxudWx7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lOyAgXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5saXtcXHJcXG4gICAgbWluLXdpZHRoOiAxODBweDtcXHJcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgICBoZWlnaHQ6IDE1cHg7XFxyXFxuICAgIHBhZGRpbmc6IDRweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogMDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xcclxcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOCU7XFxyXFxufVxcclxcbnNlY3Rpb24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMjQwLCAyNDAsIDAuNyk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDglO1xcclxcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcclxcbn1cXHJcXG5oMntcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4uYXBpLWJ1dHRvbnN7XFxyXFxuICAgZGlzcGxheTogZmxleDtcXHJcXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXHJcXG59XFxyXFxuI3NlYXJjaHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWRpdntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcbi50YXNrLXNlY3Rpb24sIC5yZWN5Y2xlLWJpbntcXHJcXG4gICAgd2lkdGg6IDMwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDMwMHB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcXHJcXG4gICAgbWFyZ2luOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1zZWN0aW9uIGlucHV0e1xcclxcbiAgICB3aWR0aDogMTUwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrLXNlY3Rpb24gaDJ7XFxyXFxuICAgIG1hcmdpbi10b3A6IDA7XFxyXFxufVxcclxcbi5kcmFnZ2luZ3tcXHJcXG4gICAgb3BhY2l0eTogMC41O1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLDI0MCwyNDApO1xcclxcbiAgICBoZWlnaHQ6MzBweDtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIG1hcmdpbjowO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLWJhcntcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB3aWR0aDogMjIwcHg7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG59XFxyXFxuI3NlYXJjaHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuLnNlYXJjaC1iYXIgbGFiZWx7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGxlZnQ6IDBweDtcXHJcXG4gICAgYm90dG9tOiAwcHg7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggYmxhY2s7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi5wbGFjZWhvbGRlcntcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBib3R0b206IDVweDtcXHJcXG4gICAgbGVmdDogMCU7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi5hcGktYnV0dG9uLC5hZGQtdGFza3tcXHJcXG4gICB3aWR0aDogNzBweDtcXHJcXG4gICBoZWlnaHQ6IDM1cHg7XFxyXFxuICAgY29sb3I6IHdoaXRlO1xcclxcbiAgIGJhY2tncm91bmQtY29sb3I6IHRlYWw7XFxyXFxuICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgIHRyYW5zaXRpb246IGVhc2Utb3V0IDAuM3M7XFxyXFxuICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAwIHllbGxvdztcXHJcXG59XFxyXFxuXFxyXFxuLmFwaS1idXR0b246aG92ZXJ7XFxyXFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDcwcHggMCAwIDAgeWVsbG93O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXRhc2t7XFxyXFxuICAgIHdpZHRoOiA1NXB4O1xcclxcbiAgICBoZWlnaHQ6IDI4cHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyOCwgMCwgNzApO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgIHRyYW5zaXRpb246IGVhc2Utb3V0IDAuM3M7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDAgeWVsbG93O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXRhc2s6aG92ZXJ7XFxyXFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDcwcHggMCAwIDAgcmdiKDcsIDE0OCwgMTkwKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLmxvYWRlciB7XFxyXFxuICBib3JkZXI6IDE2cHggc29saWQgI2YzZjNmMzsgLyogTGlnaHQgZ3JleSAqL1xcclxcbiAgYm9yZGVyLXRvcDogMTZweCBzb2xpZCAjMzQ5OGRiOyAvKiBCbHVlICovXFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICB3aWR0aDogMzBweDtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG4gIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgc3BpbiB7XFxyXFxuICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XFxyXFxuICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxcclxcbn1cXHJcXG5cXHJcXG4jbmV3LXRoZW1lLWJ0bntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbiNuZXctdGhlbWUtYnRue1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxyXFxuICAgIHBhZGRpbmc6IDEzcHggNTBweCAxM3B4O1xcclxcbiAgICBvdXRsaW5lOiAwO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gICNuZXctdGhlbWUtYnRuOjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlNTRjO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgei1pbmRleDogLTE7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB0b3A6IDdweDtcXHJcXG4gICAgbGVmdDogN3B4O1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAjbmV3LXRoZW1lLWJ0bjo6YWZ0ZXIge1xcclxcbiAgICB0b3A6IDBweDtcXHJcXG4gICAgbGVmdDogMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgI3Nob3ctcmVjeWNsZSB7XFxyXFxuICAgIHdpZHRoOiAyMjBweDtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMTExO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgei1pbmRleDogMDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNvcnQtYXp7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZTtcXHJcXG4gICAgd2lkdGg6IDEwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xcclxcbiAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY29sb3I6ICMzMzM7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMzMzM7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgfVxcclxcblxcclxcblxcclxcblxcclxcbiAgLmRlbGV0ZS1idXR0b257XFxyXFxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xcclxcbiAgICBwYWRkaW5nOjAuN2VtIDEuNGVtO1xcclxcbiAgICBtYXJnaW46MCAwLjNlbSAwLjNlbSAwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOjAuMTVlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcXHJcXG4gICAgZm9udC1mYW1pbHk6J1JvYm90bycsc2Fucy1zZXJpZjtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1xcclxcbiAgICBmb250LXdlaWdodDo0MDA7XFxyXFxuICAgIGNvbG9yOiNGRkZGRkY7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6I2NmMjAwODtcXHJcXG4gICAgYm94LXNoYWRvdzppbnNldCAwIC0wLjZlbSAwIC0wLjM1ZW0gcmdiYSgwLDAsMCwwLjE3KTtcXHJcXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5kZWxldGUtYnV0dG9uOmFjdGl2ZXtcXHJcXG4gICAgICAgIHRvcDowLjFlbTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIEBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6MzBlbSl7XFxyXFxuICAgICAgICDigIMuZGVsZXRlLWJ1dHRvbntcXHJcXG4gICAgICAgIGRpc3BsYXk6YmxvY2s7XFxyXFxuICAgICAgICBtYXJnaW46MC40ZW0gYXV0bztcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjdG8tZG8tc2VjdGlvbntcXHJcXG4gICAgICAgIGNvbG9yOiByZ2IoMzUsIDUsIDgzKTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTAsIDI1NiwgNTAsIDAuNik7XFxyXFxuICAgIH1cXHJcXG4gICAgI2luLXByb2dyZXNzLXNlY3Rpb257XFxyXFxuICAgICAgICBjb2xvcjogcmdiKDEwOSwgMiwgMik7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUwLCA1MCwgMjU2LCAwLjYpO1xcclxcbiAgICB9XFxyXFxuICAgICNkb25lLXNlY3Rpb257XFxyXFxuICAgICAgICBjb2xvcjogcmdiKDcwLCA4MiwgMyk7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NiwgNTAsIDUwLCAwLjYpO1xcclxcbiAgICB9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc29sdXRpb24vc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLHVDQUF1QztJQUN2Qyx5REFBb0Q7SUFDcEQsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsV0FBVztBQUNmO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLHVCQUF1QjtBQUN6QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7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b0I7SUFDcEIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsK0JBQStCO0lBQy9CLHdCQUF3QjtJQUN4QixlQUFlO0lBQ2YsYUFBYTtJQUNiLHdCQUF3QjtJQUN4QixvREFBb0Q7SUFDcEQsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQjs7SUFFQTtRQUNJLFNBQVM7UUFDVDtRQUNBO1FBQ0E7UUFDQSxhQUFhO1FBQ2IsaUJBQWlCO1FBQ2pCO0lBQ0o7O0lBRUE7UUFDSSxxQkFBcUI7UUFDckIsd0NBQXdDO0lBQzVDO0lBQ0E7UUFDSSxxQkFBcUI7UUFDckIsd0NBQXdDO0lBQzVDO0lBQ0E7UUFDSSxxQkFBcUI7UUFDckIsd0NBQXdDO0lBQzVDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUdlbXVudStMaWJyZTp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG5ib2R5e1xcclxcbiAgICBmb250LWZhbWlseTogJ0dlbXVudSBMaWJyZScsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChtaWxreS13YXktMjY5NTU2OV85NjBfNzIwLmpwZyk7XFxyXFxuICAgIGNvbG9yOiByZ2IoMTY3LCA1NiwgNTYpO1xcclxcbn1cXHJcXG5zZWN0aW9uOjotd2Via2l0LXNjcm9sbGJhcntcXHJcXG4gICAgd2lkdGg6IDVweDtcXHJcXG4gICAgaGVpZ2h0OiA1cHg7XFxyXFxufVxcclxcbnNlY3Rpb246Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1ie1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuc2VjdGlvbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2t7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmgxe1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbnVse1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTsgIFxcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG59XFxyXFxubGl7XFxyXFxuICAgIG1pbi13aWR0aDogMTgwcHg7XFxyXFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gICAgaGVpZ2h0OiAxNXB4O1xcclxcbiAgICBwYWRkaW5nOiA0cHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDVweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMDtcXHJcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDglO1xcclxcbn1cXHJcXG5zZWN0aW9uIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDI0MCwgMjQwLCAwLjcpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA4JTtcXHJcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXHJcXG59XFxyXFxuaDJ7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLmFwaS1idXR0b25ze1xcclxcbiAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxyXFxufVxcclxcbiNzZWFyY2h7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1kaXZ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG4udGFzay1zZWN0aW9uLCAucmVjeWNsZS1iaW57XFxyXFxuICAgIHdpZHRoOiAzMDBweDtcXHJcXG4gICAgaGVpZ2h0OiAzMDBweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XFxyXFxuICAgIG1hcmdpbjogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stc2VjdGlvbiBpbnB1dHtcXHJcXG4gICAgd2lkdGg6IDE1MHB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1zZWN0aW9uIGgye1xcclxcbiAgICBtYXJnaW4tdG9wOiAwO1xcclxcbn1cXHJcXG4uZHJhZ2dpbmd7XFxyXFxuICAgIG9wYWNpdHk6IDAuNTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXR7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwyNDAsMjQwKTtcXHJcXG4gICAgaGVpZ2h0OjMwcHg7XFxyXFxuICAgIHdpZHRoOiAyMDBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBtYXJnaW46MDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1iYXJ7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgd2lkdGg6IDIyMHB4O1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxufVxcclxcbiNzZWFyY2h7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxufVxcclxcbi5zZWFyY2gtYmFyIGxhYmVse1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBsZWZ0OiAwcHg7XFxyXFxuICAgIGJvdHRvbTogMHB4O1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IGJsYWNrO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4ucGxhY2Vob2xkZXJ7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgYm90dG9tOiA1cHg7XFxyXFxuICAgIGxlZnQ6IDAlO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4uYXBpLWJ1dHRvbiwuYWRkLXRhc2t7XFxyXFxuICAgd2lkdGg6IDcwcHg7XFxyXFxuICAgaGVpZ2h0OiAzNXB4O1xcclxcbiAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiB0ZWFsO1xcclxcbiAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICB0cmFuc2l0aW9uOiBlYXNlLW91dCAwLjNzO1xcclxcbiAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMCB5ZWxsb3c7XFxyXFxufVxcclxcblxcclxcbi5hcGktYnV0dG9uOmhvdmVye1xcclxcbiAgICBib3gtc2hhZG93OiBpbnNldCA3MHB4IDAgMCAwIHllbGxvdztcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC10YXNre1xcclxcbiAgICB3aWR0aDogNTVweDtcXHJcXG4gICAgaGVpZ2h0OiAyOHB4O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjgsIDAsIDcwKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiBlYXNlLW91dCAwLjNzO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAwIHllbGxvdztcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC10YXNrOmhvdmVye1xcclxcbiAgICBib3gtc2hhZG93OiBpbnNldCA3MHB4IDAgMCAwIHJnYig3LCAxNDgsIDE5MCk7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi5sb2FkZXIge1xcclxcbiAgYm9yZGVyOiAxNnB4IHNvbGlkICNmM2YzZjM7IC8qIExpZ2h0IGdyZXkgKi9cXHJcXG4gIGJvcmRlci10b3A6IDE2cHggc29saWQgIzM0OThkYjsgLyogQmx1ZSAqL1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgd2lkdGg6IDMwcHg7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxuICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHNwaW4ge1xcclxcbiAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxcclxcbiAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cXHJcXG59XFxyXFxuXFxyXFxuI25ldy10aGVtZS1idG57XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4jbmV3LXRoZW1lLWJ0bntcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICBmb250LXdlaWdodDogMjAwO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcclxcbiAgICBwYWRkaW5nOiAxM3B4IDUwcHggMTNweDtcXHJcXG4gICAgb3V0bGluZTogMDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAjbmV3LXRoZW1lLWJ0bjo6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZTU0YztcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHotaW5kZXg6IC0xO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgdG9wOiA3cHg7XFxyXFxuICAgIGxlZnQ6IDdweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4ycztcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgI25ldy10aGVtZS1idG46OmFmdGVyIHtcXHJcXG4gICAgdG9wOiAwcHg7XFxyXFxuICAgIGxlZnQ6IDBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNzaG93LXJlY3ljbGUge1xcclxcbiAgICB3aWR0aDogMjIwcHg7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgYmFja2dyb3VuZDogIzExMTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHotaW5kZXg6IDA7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5zb3J0LWF6e1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxyXFxuICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMjBweDtcXHJcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGNvbG9yOiAjMzMzO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMzMzO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4gIC5kZWxldGUtYnV0dG9ue1xcclxcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcXHJcXG4gICAgcGFkZGluZzowLjdlbSAxLjRlbTtcXHJcXG4gICAgbWFyZ2luOjAgMC4zZW0gMC4zZW0gMDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czowLjE1ZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XFxyXFxuICAgIGZvbnQtZmFtaWx5OidSb2JvdG8nLHNhbnMtc2VyaWY7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6NDAwO1xcclxcbiAgICBjb2xvcjojRkZGRkZGO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNjZjIwMDg7XFxyXFxuICAgIGJveC1zaGFkb3c6aW5zZXQgMCAtMC42ZW0gMCAtMC4zNWVtIHJnYmEoMCwwLDAsMC4xNyk7XFxyXFxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xcclxcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZGVsZXRlLWJ1dHRvbjphY3RpdmV7XFxyXFxuICAgICAgICB0b3A6MC4xZW07XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICBAbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOjMwZW0pe1xcclxcbiAgICAgICAg4oCDLmRlbGV0ZS1idXR0b257XFxyXFxuICAgICAgICBkaXNwbGF5OmJsb2NrO1xcclxcbiAgICAgICAgbWFyZ2luOjAuNGVtIGF1dG87XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI3RvLWRvLXNlY3Rpb257XFxyXFxuICAgICAgICBjb2xvcjogcmdiKDM1LCA1LCA4Myk7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUwLCAyNTYsIDUwLCAwLjYpO1xcclxcbiAgICB9XFxyXFxuICAgICNpbi1wcm9ncmVzcy1zZWN0aW9ue1xcclxcbiAgICAgICAgY29sb3I6IHJnYigxMDksIDIsIDIpO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1MCwgNTAsIDI1NiwgMC42KTtcXHJcXG4gICAgfVxcclxcbiAgICAjZG9uZS1zZWN0aW9ue1xcclxcbiAgICAgICAgY29sb3I6IHJnYig3MCwgODIsIDMpO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTYsIDUwLCA1MCwgMC42KTtcXHJcXG4gICAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCB0aGlzLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW19pXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IG1vZHVsZXMubGVuZ3RoOyBfaTIrKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaTJdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gY3JlYXRlIEVsZW1lbnQgZnVuY3Rpb25cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQgKHRhZ05hbWUsIGNoaWxkcmVuID0gW10sIGNsYXNzZXMgPSBbXSwgYXR0cmlidXRlcyA9IHt9KSB7XG4gIGNvbnN0IG5ld0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcbiAgY2hpbGRyZW4uZm9yRWFjaCgoa2lkKSA9PiB7XG4gICAgbGV0IGNoaWxkID0ga2lkO1xuICAgIGlmICh0eXBlb2YgKGNoaWxkKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNoaWxkID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY2hpbGQpO1xuICAgIH1cbiAgICBuZXdFbC5hcHBlbmQoY2hpbGQpO1xuICB9KTtcbiAgY2xhc3Nlcy5mb3JFYWNoKChjbHMpID0+IHtcbiAgICBuZXdFbC5jbGFzc0xpc3QuYWRkKGNscyk7XG4gIH0pO1xuICBPYmplY3QuZW50cmllcyhhdHRyaWJ1dGVzKS5mb3JFYWNoKChhdHRyKSA9PiB7XG4gICAgbmV3RWwuc2V0QXR0cmlidXRlKGF0dHJbMF0sIGF0dHJbMV0pO1xuICB9KTtcbiAgcmV0dXJuIG5ld0VsO1xufVxuIiwiLy8gc2V0dGluZyBnbG9iYWwgdmFyaWFibGVzIGZvciB0aGUgZG9jdW1lbnQgZWxlbWVudHNcbmV4cG9ydCBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tzLWRpdicpO1xuZXhwb3J0IGNvbnN0IHNlYXJjaEJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gnKTtcbmV4cG9ydCBjb25zdCBzYXZlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NhdmUtYnV0dG9uJyk7XG5leHBvcnQgY29uc3QgbG9hZEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2FkLWJ1dHRvbicpO1xuZXhwb3J0IGNvbnN0IHNob3dSZWN5Y2xlQmluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3ctcmVjeWNsZScpO1xuZXhwb3J0IGNvbnN0IGxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcGktYnV0dG9ucycpLmxhc3RFbGVtZW50Q2hpbGQ7XG5leHBvcnQgY29uc3QgcmVjeWNsZUJpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWN5Y2xlLWJpbicpO1xuZXhwb3J0IGNvbnN0IHRvRG9Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG8tZG8tY29udGFpbmVyJyk7XG5leHBvcnQgY29uc3QgaW5Qcm9ncmVzc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbi1wcm9ncmVzcy1jb250YWluZXInKTtcbmV4cG9ydCBjb25zdCBkb25lQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RvbmUtY29udGFpbmVyJyk7XG5leHBvcnQgY29uc3QgdGFza0VudW1lcmF0b3JBcnJheSA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGFzay1lbnVtZXJhdG9yJykpO1xuIiwiaW1wb3J0IHsgdGFza0VudW1lcmF0b3JBcnJheSB9IGZyb20gJy4vZ2xvYmFsIHZhcmlhYmxlcyBmb3IgaW5kZXgnO1xuLy8gdG90YWwgbGlzdCBpdGVtIGNvdW50ZXIgZnVuY3Rpb25cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxpc3RDb3VudGVyICgpIHtcbiAgdGFza0VudW1lcmF0b3JBcnJheS5mb3JFYWNoKCh0YXNrRW51bWVyYXRvcikgPT4ge1xuICAgIGNvbnN0IHRhc2tFbnVtID0gdGFza0VudW1lcmF0b3I7XG4gICAgY29uc3QgbGlzdG9mRW51bWVyYXRvciA9IHRhc2tFbnVtLnBhcmVudEVsZW1lbnQubGFzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZC5jaGlsZHJlbjtcbiAgICBjb25zdCB0b3RhbFRhc2tzID0gQXJyYXkuZnJvbShsaXN0b2ZFbnVtZXJhdG9yKS5sZW5ndGg7XG4gICAgdGFza0VudW0udGV4dENvbnRlbnQgPSBgdG90YWw6ICR7dG90YWxUYXNrc31gO1xuICB9KTtcbn1cbiIsImltcG9ydCB7XG4gIHRvRG9Db250YWluZXIsIGluUHJvZ3Jlc3NDb250YWluZXIsIGRvbmVDb250YWluZXIsIHJlY3ljbGVCaW5cbn0gZnJvbSAnLi9nbG9iYWwgdmFyaWFibGVzIGZvciBpbmRleCc7XG5pbXBvcnQgbGlzdENvdW50ZXIgZnJvbSAnLi9saXN0IGNvdW50ZXIgZm9yIGluZGV4JztcbmltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gJy4vY3JlYXRlIGVsZW1lbnQgZnVuY3Rpb24nO1xuLyogbG9jYWwgc3RvcmFnZSAgKi9cbi8vIGluaXRpbGl6ZXMgdGhlIGxvY2FsIHN0b3JhZ2Ugb2JqZWN0XG5leHBvcnQgZnVuY3Rpb24gbG9hZExvY2FsU3RvcmFnZUF0QmVnaW5uaW5nICgpIHtcbiAgaWYgKCFsb2NhbFN0b3JhZ2UudGFza3MgfHwgbG9jYWxTdG9yYWdlLnRhc2tzLmxlbmd0aCA9PT0gMCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIHRvZG86IFtdLFxuICAgICAgJ2luLXByb2dyZXNzJzogW10sXG4gICAgICBkb25lOiBbXSxcbiAgICAgIGRlbGV0ZWQ6IFtdXG4gICAgfSkpO1xuICB9XG59XG4vLyBvYmplY3QgZm9yIHNhdmluZyB0byBsb2NhbCBzdG9yYWdlXG5leHBvcnQgY29uc3QgbG9jYWxTdG9yYWdlT2JqZWN0Rm9yVXBkYXRlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UudGFza3MpO1xuLy8gbG9jYWwgc3RvcmFnZSBzYXZlIGZ1bmN0aW9uXG5cbi8vIGxvY2FsIHN0b3JhZ2UgY2xlYXIgYnV0dG9uIGxpc2VuZXJcbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVBbGwgKGUpIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGU7XG4gIGlmICh0YXJnZXQuY2xhc3NOYW1lID09PSAnZGVsZXRlLWJ1dHRvbicpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh7XG4gICAgICB0b2RvOiBbXSxcbiAgICAgICdpbi1wcm9ncmVzcyc6IFtdLFxuICAgICAgZG9uZTogW10sXG4gICAgICBkZWxldGVkOiBbXVxuICAgIH0pKTtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGRlbGV0ZUFsbDtcblxuLy8gbG9jYWxzdG9yYWdlIGxvYWRpbmcgYWZ0ZXIgcmVmcmVzaFxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZFRvQ29udGFpbmVyIChjb250YWluZXJQciwgdWwpIHtcbiAgY29uc3QgY29udGFpbmVyID0gY29udGFpbmVyUHI7XG4gIGlmIChsb2NhbFN0b3JhZ2VPYmplY3RGb3JVcGRhdGVbdWxdWzBdID09IG51bGwpIHtcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgY3VycmVudFVsID0gbG9jYWxTdG9yYWdlT2JqZWN0Rm9yVXBkYXRlW3VsXVswXTtcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gY3VycmVudFVsO1xuICB9XG59XG4vLyBpbm5lciBsb2NhbCBzdG9yYWdlIHNhdmVcbmV4cG9ydCBmdW5jdGlvbiBpbm5lckxvY2FsU3RvcmFnZVNhdmUgKGxpc3ROYW1lLCB1bCkge1xuICBsb2NhbFN0b3JhZ2VPYmplY3RGb3JVcGRhdGVbbGlzdE5hbWVdWzBdID0gdWwub3V0ZXJIVE1MO1xufVxuXG4vLyBsb2NhbHN0b3JhZ2UgbG9hZGluZyBhZnRlciByZWZyZXNoXG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkTG9jYWxTdG9yYWdlVG9Eb20gKCkge1xuICBpZiAobG9jYWxTdG9yYWdlT2JqZWN0Rm9yVXBkYXRlLnRvZG9bMF0gIT0gbnVsbCB8fCBsb2NhbFN0b3JhZ2VPYmplY3RGb3JVcGRhdGVbJ2luLXByb2dyZXNzJ11bMF0gIT0gbnVsbCB8fCBsb2NhbFN0b3JhZ2VPYmplY3RGb3JVcGRhdGUuZG9uZVswXSAhPSBudWxsIHx8IGxvY2FsU3RvcmFnZU9iamVjdEZvclVwZGF0ZS5kZWxldGVkWzBdICE9IG51bGwpIHtcbiAgICBhcHBlbmRUb0NvbnRhaW5lcih0b0RvQ29udGFpbmVyLCAndG9kbycpO1xuICAgIGFwcGVuZFRvQ29udGFpbmVyKGluUHJvZ3Jlc3NDb250YWluZXIsICdpbi1wcm9ncmVzcycpO1xuICAgIGFwcGVuZFRvQ29udGFpbmVyKGRvbmVDb250YWluZXIsICdkb25lJyk7XG4gICAgYXBwZW5kVG9Db250YWluZXIocmVjeWNsZUJpbiwgJ2RlbGV0ZWQnKTtcbiAgICBsaXN0Q291bnRlcigpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHRvRG9UYXNrc1VsaW5uZXIgPSBjcmVhdGVFbGVtZW50KCd1bCcsIFtdLCBbJ3RvLWRvLXRhc2tzJ10sIHt9KTtcbiAgICBjb25zdCBpblByb2dyZXNzVGFza3NVbGlubmVyID0gY3JlYXRlRWxlbWVudCgndWwnLCBbXSwgWydpbi1wcm9ncmVzcy10YXNrcyddLCB7fSk7XG4gICAgY29uc3QgZG9uZVRhc2tzVWxpbm5lciA9IGNyZWF0ZUVsZW1lbnQoJ3VsJywgW10sIFsnZG9uZS10YXNrcyddLCB7fSk7XG4gICAgY29uc3QgZGVsZXRlZFRhc2tzVWxpbm5lciA9IGNyZWF0ZUVsZW1lbnQoJ3VsJywgW10sIFsncmVjeWNsZS1VbCddLCB7fSk7XG4gICAgdG9Eb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b0RvVGFza3NVbGlubmVyKTtcbiAgICBpblByb2dyZXNzQ29udGFpbmVyLmFwcGVuZENoaWxkKGluUHJvZ3Jlc3NUYXNrc1VsaW5uZXIpO1xuICAgIGRvbmVDb250YWluZXIuYXBwZW5kQ2hpbGQoZG9uZVRhc2tzVWxpbm5lcik7XG4gICAgcmVjeWNsZUJpbi5hcHBlbmRDaGlsZChkZWxldGVkVGFza3NVbGlubmVyKTtcbiAgICBsaXN0Q291bnRlcigpO1xuICB9XG59XG5leHBvcnQgY29uc3QgdG9Eb1Rhc2tzVWwgPSBbXTtcbmV4cG9ydCBjb25zdCBpblByb2dyZXNzVGFza3NVbCA9IFtdO1xuZXhwb3J0IGNvbnN0IGRvbmVUYXNrc1VsID0gW107XG5leHBvcnQgY29uc3QgZGVsZXRlZFRhc2tzVWwgPSBbXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGxvY2FsU3RvcmFnZVNhdmUgKCkge1xuICBpbm5lckxvY2FsU3RvcmFnZVNhdmUoJ3RvZG8nLCAuLi50b0RvVGFza3NVbCk7XG4gIGlubmVyTG9jYWxTdG9yYWdlU2F2ZSgnaW4tcHJvZ3Jlc3MnLCAuLi5pblByb2dyZXNzVGFza3NVbCk7XG4gIGlubmVyTG9jYWxTdG9yYWdlU2F2ZSgnZG9uZScsIC4uLmRvbmVUYXNrc1VsKTtcbiAgaW5uZXJMb2NhbFN0b3JhZ2VTYXZlKCdkZWxldGVkJywgLi4uZGVsZXRlZFRhc2tzVWwpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeShsb2NhbFN0b3JhZ2VPYmplY3RGb3JVcGRhdGUpKTtcbn1cbiIsImltcG9ydCB7IHNlYXJjaEJhciB9IGZyb20gJy4vZ2xvYmFsIHZhcmlhYmxlcyBmb3IgaW5kZXgnO1xuLyogc2VhcmNoIGJhciAqL1xuXG4vLyBzZWFyY2ggYmFyIGZ1bmN0aW9uc1xuZXhwb3J0IGZ1bmN0aW9uIGhpZGVUYXNrICh0YXNrc0xpc3QsIHZhbHVlKSB7XG4gIHRhc2tzTGlzdC5mb3JFYWNoKChsaVByKSA9PiB7XG4gICAgY29uc3QgbGkgPSBsaVByO1xuICAgIGxpLmhpZGRlbiA9IGZhbHNlO1xuICAgIGlmICghbGkudGV4dENvbnRlbnQudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh2YWx1ZS50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgbGkuaGlkZGVuID0gdHJ1ZTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoVGFzayAoZSkge1xuICBjb25zdCB7IHZhbHVlIH0gPSBlLnRhcmdldDtcbiAgY29uc3QgdGFza0FycmF5ID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbGknKSk7XG4gIGhpZGVUYXNrKHRhc2tBcnJheSwgdmFsdWUpO1xufVxuXG5zZWFyY2hCYXIuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCAoKSA9PiB7XG4gIGNvbnN0IHBsYWNlaG9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYWNlaG9sZGVyJyk7XG4gIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYWNlaG9sZGVyLWxhYmVsJyk7XG4gIHBsYWNlaG9sZGVyLnN0eWxlID0gJ3RyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTUwJSk7IGNvbG9yOmJsdWU7IGZvbnQtc2l6ZToxMnB4JztcbiAgbGFiZWwuc3R5bGUgPSAnYm9yZGVyLWJvdHRvbTogc29saWQgM3B4IGJsdWU7Jztcbn0pO1xuc2VhcmNoQmFyLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB7XG4gIGlmIChzZWFyY2hCYXIudmFsdWUgPT09ICcnKSB7XG4gICAgY29uc3QgcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxhY2Vob2xkZXInKTtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGFjZWhvbGRlci1sYWJlbCcpO1xuICAgIHBsYWNlaG9sZGVyLnN0eWxlID0gJ3RyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7IGNvbG9yOmJsYWNrOyBmb250LXNpemU6MTZweCc7XG4gICAgbGFiZWwuc3R5bGUgPSAnYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IGJsYWNrOyc7XG4gIH1cbn0pO1xuIiwiLy8gZ2FpbmluZyBmb2N1cyBmdW5jdGlvblxuZXhwb3J0IGZ1bmN0aW9uIGdhaW5Gb2N1cyAoZSkge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZTtcbiAgaWYgKHRhcmdldC50YWdOYW1lID09PSAnTEknKSB7XG4gICAgdGFyZ2V0LnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgJ3RydWUnKTtcbiAgICB0YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYmEoNTAsNTAsMjAwLDAuNSknO1xuICB9XG59XG5cbi8vIGRyYWdJdGVtIGZ1bmN0aW9uXG5leHBvcnQgZnVuY3Rpb24gZHJhZ0l0ZW0gKGUpIHtcbiAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnZHJhZ2dpbmcnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrTGlzdEF0QWx0IChldmVudEtleSwgdGFyZ2V0LCBrZXlOdW0sIHVsVG9JbnNlcnQpIHtcbiAgaWYgKGV2ZW50S2V5LnRvU3RyaW5nKCkgPT09IGtleU51bS50b1N0cmluZygpKSB7XG4gICAgdWxUb0luc2VydC5pbnNlcnRCZWZvcmUodGFyZ2V0LCB1bFRvSW5zZXJ0LmZpcnN0Q2hpbGQpO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCBzdHlsZSBmcm9tICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IHtcbiAgZGVsZXRlQWxsLCBsb2FkTG9jYWxTdG9yYWdlQXRCZWdpbm5pbmcsIGxvY2FsU3RvcmFnZU9iamVjdEZvclVwZGF0ZVxuICAsIGlubmVyTG9jYWxTdG9yYWdlU2F2ZSwgbG9hZExvY2FsU3RvcmFnZVRvRG9tLCB0b0RvVGFza3NVbCwgaW5Qcm9ncmVzc1Rhc2tzVWwsXG4gIGRvbmVUYXNrc1VsLCBkZWxldGVkVGFza3NVbCwgbG9jYWxTdG9yYWdlU2F2ZVxufSBmcm9tICcuL2xvY2FsU3RvcmFnZSc7XG5pbXBvcnQgeyBnYWluRm9jdXMsIGRyYWdJdGVtLCBjaGVja0xpc3RBdEFsdCB9IGZyb20gJy4vdGFza3MgZXZlbnQgbGlzdGVuZXJzJztcbmltcG9ydCB7IHNlYXJjaFRhc2sgfSBmcm9tICcuL3NlYXJjaGJhciBmdW5jdGlvbmFsaXR5JztcbmltcG9ydCB7XG4gIHRhc2tEaXYsIHNlYXJjaEJhciwgc2F2ZUJ1dHRvbiwgbG9hZEJ1dHRvbiwgc2hvd1JlY3ljbGVCaW4sIGxvYWRlcixcbiAgcmVjeWNsZUJpbiwgdG9Eb0NvbnRhaW5lciwgaW5Qcm9ncmVzc0NvbnRhaW5lciwgZG9uZUNvbnRhaW5lclxufSBmcm9tICcuL2dsb2JhbCB2YXJpYWJsZXMgZm9yIGluZGV4JztcbmltcG9ydCBsaXN0Q291bnRlciBmcm9tICcuL2xpc3QgY291bnRlciBmb3IgaW5kZXgnO1xuaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnLi9jcmVhdGUgZWxlbWVudCBmdW5jdGlvbic7XG4vKiBsb2NhbCBzdG9yYWdlICAqL1xuXG4vLyBpbml0aWxpemVzIHRoZSBsb2NhbCBzdG9yYWdlIG9iamVjdFxubG9hZExvY2FsU3RvcmFnZUF0QmVnaW5uaW5nKCk7XG4vLyBvYmplY3QgZm9yIHNhdmluZyB0byBsb2NhbCBzdG9yYWdlXG5cbi8vIGxvY2FsIHN0b3JhZ2Ugc2F2ZSBmdW5jdGlvblxuLy8gZnVuY3Rpb24gbG9jYWxTdG9yYWdlU2F2ZSAoKSB7XG4vLyAgIGlubmVyTG9jYWxTdG9yYWdlU2F2ZSgndG9kbycsIC4uLnRvRG9UYXNrc1VsKTtcbi8vICAgaW5uZXJMb2NhbFN0b3JhZ2VTYXZlKCdpbi1wcm9ncmVzcycsIC4uLmluUHJvZ3Jlc3NUYXNrc1VsKTtcbi8vICAgaW5uZXJMb2NhbFN0b3JhZ2VTYXZlKCdkb25lJywgLi4uZG9uZVRhc2tzVWwpO1xuLy8gICBpbm5lckxvY2FsU3RvcmFnZVNhdmUoJ2RlbGV0ZWQnLCAuLi5kZWxldGVkVGFza3NVbCk7XG4vLyAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KGxvY2FsU3RvcmFnZU9iamVjdEZvclVwZGF0ZSkpO1xuLy8gfVxuXG4vKiBkb20gbWFuaXB1bGF0aW9uICovXG5cbi8vIHNldHRpbmcgZ2xvYmFsIHZhcmlhYmxlcyBmb3IgdGhlIGRvY3VtZW50IGVsZW1lbnRzXG5cbi8vIGxvY2Fsc3RvcmFnZSBsb2FkaW5nIGFmdGVyIHJlZnJlc2hcbmxvYWRMb2NhbFN0b3JhZ2VUb0RvbSgpO1xuLy8gc2V0cyB0aGUgbGlzdHMgb2JqZWN0cyBmb3IgdXBkYXRpbmdcbnRvRG9UYXNrc1VsWzBdID0gdG9Eb0NvbnRhaW5lci5maXJzdENoaWxkO1xuaW5Qcm9ncmVzc1Rhc2tzVWxbMF0gPSBpblByb2dyZXNzQ29udGFpbmVyLmZpcnN0Q2hpbGQ7XG5kb25lVGFza3NVbFswXSA9IGRvbmVDb250YWluZXIuZmlyc3RDaGlsZDtcbmRlbGV0ZWRUYXNrc1VsWzBdID0gcmVjeWNsZUJpbi5maXJzdENoaWxkO1xuXG4vKiogZXZlbnQgbGlzdGVuZXJzKiovXG5cbi8qIHRhc2tzICovXG5cbi8vIGRvdWJsZSBjbGljayBmdW5jdGlvbmFsaXR5XG5cbi8vIGdhaW5pbmcgZm9jdXMgZnVuY3Rpb25cblxuLy8gZ2V0dGluZyBvdXQgb2YgZm9jdXMgYWZ0ZXIgYmx1clxuZnVuY3Rpb24gc2F2ZVZhbHVlQmx1ciAoZSkge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZTtcbiAgaWYgKHRhcmdldC50YWdOYW1lICE9PSAnTEknKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRhcmdldC5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsICdmYWxzZScpO1xuICB0YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYmEoMCwwLDAsMCknO1xuICBsb2NhbFN0b3JhZ2VTYXZlKCk7XG4gIGxpc3RDb3VudGVyKCk7XG59XG4vL1xuXG4vLyBob3ZlciArIGFsdCArIDEvMi8zIGZ1bmN0aW9uYWxpdHlcblxuZnVuY3Rpb24gaG92ZXJSZXBsYWNlIChlKSB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBlO1xuICBmdW5jdGlvbiBpbm5lcktleVJlcGxhY2UgKGV2KSB7XG4gICAgaWYgKGV2LmFsdEtleSkge1xuICAgICAgY2hlY2tMaXN0QXRBbHQoZXYua2V5LCB0YXJnZXQsIDEsIHRvRG9UYXNrc1VsWzBdKTtcbiAgICAgIGNoZWNrTGlzdEF0QWx0KGV2LmtleSwgdGFyZ2V0LCAyLCBpblByb2dyZXNzVGFza3NVbFswXSk7XG4gICAgICBjaGVja0xpc3RBdEFsdChldi5rZXksIHRhcmdldCwgMywgZG9uZVRhc2tzVWxbMF0pO1xuICAgIH1cbiAgICAvLyBsb2NhbCBzdG9yYWdlIGluc2VydGlvblxuICAgIGxvY2FsU3RvcmFnZVNhdmUoKTtcbiAgICBsaXN0Q291bnRlcigpO1xuICB9XG4gIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaW5uZXJLZXlSZXBsYWNlKTtcbiAgfSk7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaW5uZXJLZXlSZXBsYWNlKTtcbn1cbi8vIGFkZCBhZGRIb3ZlclJlcGxhY2VcbmZ1bmN0aW9uIGFkZEhvdmVyUmVwbGFjZSAoZSkge1xuICBpZiAoZS50YXJnZXQudGFnTmFtZSAhPT0gJ0xJJykge1xuICAgIHJldHVybjtcbiAgfVxuICBlLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgaG92ZXJSZXBsYWNlKTtcbn1cblxuLy8gZHJhZ0l0ZW0gZnVuY3Rpb25cblxuZnVuY3Rpb24gZW5kRHJhZyAoZSkge1xuICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZ2luZycpO1xuICBsb2NhbFN0b3JhZ2VTYXZlKCk7XG4gIGxpc3RDb3VudGVyKCk7XG59XG4vLyBhZGRpbmcgZXZlbnQgbGlzdGVuZXJzIGZvciBkcmFnTmRyb3BcbkFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2snKSkuZm9yRWFjaCgobGkpID0+IHtcbiAgbGkuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgZHJhZ0l0ZW0pO1xuICBsaS5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgZW5kRHJhZyk7XG59KTtcblxuLy8gYWRkaW5nIHRoZSBkcm9wIGV2ZW50IHRvIHRoZSBzZWN0aW9uc1xuY29uc3Qgc2VjdGlvbnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlY3Rpb24nKSk7XG5zZWN0aW9ucy5mb3JFYWNoKChzZWN0aW9uKSA9PiB7XG4gIHNlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCAoZSkgPT4ge1xuICAgIGNvbnN0IGFmdGVyRWxlbWVudCA9IGVsZW1lbnRBZnRlckRyYWdnaW5nKHNlY3Rpb24sIGUuY2xpZW50WSk7XG4gICAgaWYgKGFmdGVyRWxlbWVudCA9PSBudWxsKSB7XG4gICAgICBzZWN0aW9uLmxhc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyYWdnaW5nJykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWN0aW9uLmxhc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQuaW5zZXJ0QmVmb3JlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcmFnZ2luZycpLCBhZnRlckVsZW1lbnQpO1xuICAgIH1cbiAgfSk7XG59KTtcbi8vIGNvbnRyb2xzIHdoYXQgbGkgdG8gc3dpdGNoXG5mdW5jdGlvbiBlbGVtZW50QWZ0ZXJEcmFnZ2luZyAoY29udGFpbmVyLCB5KSB7XG4gIGNvbnN0IGRyYWdnYWJsZUVsZW1lbnRzID0gWy4uLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdbZHJhZ2dhYmxlID0gdHJ1ZV06bm90KC5kcmFnZ2luZyknKV07XG4gIHJldHVybiBkcmFnZ2FibGVFbGVtZW50cy5yZWR1Y2UoKGNsb3Nlc3QsIGNoaWxkKSA9PiB7XG4gICAgY29uc3QgYm94ID0gY2hpbGQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3Qgb2Zmc2V0ID0geSAtIGJveC50b3AgLSBib3guaGVpZ2h0IC8gMjtcbiAgICBpZiAob2Zmc2V0IDwgMCAmJiBvZmZzZXQgPiBjbG9zZXN0Lm9mZnNldCkge1xuICAgICAgcmV0dXJuIHsgb2Zmc2V0LCBlbGVtZW50OiBjaGlsZCB9O1xuICAgIH1cbiAgICByZXR1cm4gY2xvc2VzdDtcbiAgfSwgeyBvZmZzZXQ6IE51bWJlci5ORUdBVElWRV9JTkZJTklUWSB9KS5lbGVtZW50O1xufVxuXG4vKiBsaXN0cyAqL1xuXG4vLyBhZGRpbmcgZXZlbnQgbGlzdGVuZXJzIHRvIHRoZSBib2R5XG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGFkZEhvdmVyUmVwbGFjZSk7XG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2RibGNsaWNrJywgZ2FpbkZvY3VzKTtcbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCBzYXZlVmFsdWVCbHVyKTtcbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY29udGV4dG1lbnUnLCByZW1vdmVMaSk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNvcnRBeik7XG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlQWxsKTtcblxuLy8gdG90YWwgbGlzdCBpdGVtIGNvdW50ZXIgZnVuY3Rpb25cblxuLy8gYWRkaW5nIGEgbGlzdCBpdGVtIGZ1bmN0aW9uYWxpdHlcblxuLy8gaW5uZXIgYWRkIHRhc2sgZnVuY3Rpb25cbmZ1bmN0aW9uIGlubmVyQWRkVGFza1RvdWwgKHRhcmdldFByKSB7XG4gIGNvbnN0IHRhcmdldCA9IHRhcmdldFByO1xuICBjb25zdCBuZXdUYXNrID0gY3JlYXRlRWxlbWVudCgnbGknLCBbYCR7dGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmcudmFsdWV9YF0sIFsndGFzayddLCB7IGRyYWdnYWJsZTogJ3RydWUnIH0pO1xuICBjb25zdCBpbnNldGVyID0gdGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5maXJzdENoaWxkLmZpcnN0Q2hpbGQ7XG4gIHRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuZmlyc3RDaGlsZC5pbnNlcnRCZWZvcmUobmV3VGFzaywgaW5zZXRlcik7XG4gIC8vIGxvY2FsIHN0b3JhZ2UgaW5zZXJ0aW9uXG4gIGxvY2FsU3RvcmFnZVNhdmUoKTtcbiAgLy8gaW5kaXZpZHVhbCBldmVudExpc3RlbmVycyBmb3IgZHJhZyBhbmQgRHJvcFxuICBuZXdUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIGRyYWdJdGVtKTtcbiAgbmV3VGFzay5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgZW5kRHJhZyk7XG4gIHRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnZhbHVlID0gJyc7XG4gIGxpc3RDb3VudGVyKCk7XG59XG4vLyBhZGQgdGFzayBmdW5jdGlvblxuZnVuY3Rpb24gYWRkVGFzayAoZSkge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZTtcbiAgaWYgKHRhcmdldC5jbGFzc05hbWUgPT09ICdhZGQtdGFzaycpIHtcbiAgICBjb25zdCBpbnB1dFRleHQgPSB0YXJnZXQucHJldmlvdXNFbGVtZW50U2libGluZy52YWx1ZTtcbiAgICBpZiAoaW5wdXRUZXh0ID09PSAnJykge1xuICAgICAgYWxlcnQoXCJZb3UgaGF2ZW4ndCBlbnRlcmVkIGFueSB0ZXh0XCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbm5lckFkZFRhc2tUb3VsKHRhcmdldCk7XG4gICAgfVxuICB9XG59XG50YXNrRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkVGFzayk7XG4vKlxuLy8gY3JlYXRlIEVsZW1lbnQgZnVuY3Rpb25cblxuLyogc2VhcmNoIGJhciAqL1xuXG4vLyBzZWFyY2ggYmFyIGZ1bmN0aW9uc1xuXG4vLyBzZWFyY2ggYmFyIGFuaW1hdGlvbnNcbi8vXG5zZWFyY2hCYXIuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBzZWFyY2hUYXNrKTtcblxuLy8gZ2FtZSB0cmlnZ2VyIGV2ZW50XG5sZXQgYXNDb3VudGVyID0gMDtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICBpZiAoZS5rZXkgPT09ICdhJykge1xuICAgIGFzQ291bnRlciArPSAxO1xuICAgIGlmIChhc0NvdW50ZXIgPT09IDEwMCkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnLi9odG1sZ2FtZS5odG1sJztcbiAgICB9XG4gIH1cbn0pO1xuXG4vLyBjaGFuZ2UgdGhlbWUgZXZlbnRcbmNvbnN0IHRoZW1lQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy10aGVtZS1idG4nKTtcbmNvbnN0IGNzc0xpbmsgPSBkb2N1bWVudC5oZWFkLnF1ZXJ5U2VsZWN0b3IoJ2xpbmsnKTtcbnRoZW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgaWYgKGNzc0xpbmsuaHJlZiA9PT0gJ2h0dHA6Ly8xMjcuMC4wLjE6NTUwMC9zb2x1dGlvbi9zdHlsZXMuY3NzJyB8fCBjc3NMaW5rLmhyZWYgPT09ICcuL3N0eWxlcy5jc3MnKSB7XG4gICAgY3NzTGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnLi9jc3NGb3JuZXdUaGVtZS5jc3MnKTtcbiAgfSBlbHNlIHtcbiAgICBjc3NMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsICcuL3N0eWxlcy5jc3MnKTtcbiAgfVxufSk7XG5cbi8vIHJpZ2h0IGNsaWNrIGZvciBlcmFzaW5nIGxpIGZ1bmN0aW9uXG5mdW5jdGlvbiByZW1vdmVMaSAoZSkge1xuICBpZiAoZS50YXJnZXQudGFnTmFtZSA9PT0gJ0xJJykge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBkZWxldGVkVGFza3NVbFswXS5hcHBlbmRDaGlsZChlLnRhcmdldCk7XG4gICAgbG9jYWxTdG9yYWdlU2F2ZSgpO1xuICAgIGxpc3RDb3VudGVyKCk7XG4gIH1cbn1cbi8vIHJlY3ljbGUgYmluIGJ1dHRvbiBldmVudCBsaXN0ZW5lclxuc2hvd1JlY3ljbGVCaW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICByZWN5Y2xlQmluLmhpZGRlbiA9ICFyZWN5Y2xlQmluLmhpZGRlbjtcbn0pO1xuXG4vLyBzb3J0IExJIGFscGhhYmV0aWNhbGx5XG5sZXQgYXpDb3VudGVyID0gMTtcblxuZnVuY3Rpb24gc29ydEF6VXAgKHRhcmdldCkge1xuICBBcnJheS5mcm9tKHRhcmdldC5wYXJlbnRFbGVtZW50Lmxhc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQuY2hpbGRyZW4pLnNvcnQoKGEsIGIpID0+IHtcbiAgICBpZiAoYS50ZXh0Q29udGVudCA+IGIudGV4dENvbnRlbnQpIHtcbiAgICAgIHRhcmdldC5wYXJlbnRFbGVtZW50Lmxhc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQuaW5zZXJ0QmVmb3JlKGEsIGIpO1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIGlmIChiLnRleHRDb250ZW50IDwgYS50ZXh0Q29udGVudCkge1xuICAgICAgdGFyZ2V0LnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3IoYiwgYSk7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIHRhcmdldC5wYXJlbnRFbGVtZW50Lmxhc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQuaW5zZXJ0QmVmb3JlKGEsIGIpO1xuICAgIHJldHVybiAwO1xuICB9KTtcbn1cbmZ1bmN0aW9uIHNvcnRBekRvd24gKHRhcmdldCkge1xuICBBcnJheS5mcm9tKHRhcmdldC5wYXJlbnRFbGVtZW50Lmxhc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQuY2hpbGRyZW4pLnNvcnQoKGEsIGIpID0+IHtcbiAgICBpZiAoYS50ZXh0Q29udGVudCA8IGIudGV4dENvbnRlbnQpIHtcbiAgICAgIHRhcmdldC5wYXJlbnRFbGVtZW50Lmxhc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQuaW5zZXJ0QmVmb3JlKGEsIGIpO1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIGlmIChiLnRleHRDb250ZW50ID4gYS50ZXh0Q29udGVudCkge1xuICAgICAgdGFyZ2V0LnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3IoYiwgYSk7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIHRhcmdldC5wYXJlbnRFbGVtZW50Lmxhc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQuaW5zZXJ0QmVmb3JlKGEsIGIpO1xuICAgIHJldHVybiAwO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gaW5uZXJTb3J0QXogKGNvdW50ZXIsIHRhcmdldCkge1xuICBpZiAoY291bnRlciAlIDIgPT09IDApIHtcbiAgICBzb3J0QXpVcCh0YXJnZXQpO1xuICB9IGVsc2Uge1xuICAgIHNvcnRBekRvd24odGFyZ2V0KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzb3J0QXogKGUpIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGU7XG4gIGlmICh0YXJnZXQuY2xhc3NOYW1lICE9PSAnc29ydC1heicpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaW5uZXJTb3J0QXooYXpDb3VudGVyLCB0YXJnZXQpO1xuICBhekNvdW50ZXIgKz0gMTtcbn1cblxuLyogQXBpIEZ1bmN0aW9ucyAqL1xuXG4vLyBBUEkgZnVuY3Rpb25zXG5hc3luYyBmdW5jdGlvbiBzYXZlQXBpICgpIHtcbiAgbG9hZGVyLmNsYXNzTGlzdC5hZGQoJ2xvYWRlcicpO1xuICBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9qc29uLWJpbnMuaGVyb2t1YXBwLmNvbS9iaW4vNjE0YWRiNmM0MDIxYWMwZTZjMDgwYzE1Jywge1xuICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICB9LFxuICAgIC8vIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsndGFza3MnOnsndG9kbyc6W10sICdpbi1wcm9ncmVzcyc6IFtdLCAnZG9uZScgOiBbXX0gLy8gcmVzZXRzIHRoZSBBUElcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHRhc2tzOiB7IHRvZG86IFt0b0RvVGFza3NVbFswXS5vdXRlckhUTUxdLCAnaW4tcHJvZ3Jlc3MnOiBbaW5Qcm9ncmVzc1Rhc2tzVWxbMF0ub3V0ZXJIVE1MXSwgZG9uZTogW2RvbmVUYXNrc1VsWzBdLm91dGVySFRNTF0gfSB9KVxuICB9KS50aGVuKChyZXNwb25zZSkgPT4geyBpZiAocmVzcG9uc2Uuc3RhdHVzID4gNDAwKSB7IGFsZXJ0KFwiaSdtIGEgdGVhcG90XCIpOyB9IH0pO1xuICBsb2FkZXIuY2xhc3NMaXN0LnJlbW92ZSgnbG9hZGVyJyk7XG59XG5cbi8vIGxvYWQgQVBJIGZ1bmN0aW9uXG5hc3luYyBmdW5jdGlvbiBsb2FkQXBpICgpIHtcbiAgbG9hZGVyLmNsYXNzTGlzdC5hZGQoJ2xvYWRlcicpO1xuICBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9qc29uLWJpbnMuaGVyb2t1YXBwLmNvbS9iaW4vNjE0YWRiNmM0MDIxYWMwZTZjMDgwYzE1JykudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGxvYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdsb2FkZXInKTtcbiAgICAgIGNvbnN0IHRvRG9UYXNrc1VsQVBJID0gZGF0YS50YXNrcy50b2RvWzBdO1xuICAgICAgY29uc3QgaW5Qcm9ncmVzc1Rhc2tzVWxBUEkgPSBkYXRhLnRhc2tzWydpbi1wcm9ncmVzcyddWzBdO1xuICAgICAgY29uc3QgZG9uZVRhc2tzVWxBUEkgPSBkYXRhLnRhc2tzLmRvbmVbMF07XG5cbiAgICAgIGZ1bmN0aW9uIGxvYWRUYXNrc0Zyb21BcGkgKHRhc2tMaXN0LCBzZWN0aW9uUHIpIHtcbiAgICAgICAgY29uc3Qgc2VjdGlvbiA9IHNlY3Rpb25QcjtcbiAgICAgICAgaWYgKHRhc2tMaXN0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBzZWN0aW9uLmlubmVySFRNTCA9ICcnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlY3Rpb24uaW5uZXJIVE1MID0gdGFza0xpc3Q7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxvYWRUYXNrc0Zyb21BcGkodG9Eb1Rhc2tzVWxBUEksIHRvRG9Db250YWluZXIpO1xuICAgICAgbG9hZFRhc2tzRnJvbUFwaShpblByb2dyZXNzVGFza3NVbEFQSSwgaW5Qcm9ncmVzc0NvbnRhaW5lcik7XG4gICAgICBsb2FkVGFza3NGcm9tQXBpKGRvbmVUYXNrc1VsQVBJLCBkb25lQ29udGFpbmVyKTtcblxuICAgICAgdG9Eb1Rhc2tzVWxbMF0gPSB0b0RvQ29udGFpbmVyLmZpcnN0Q2hpbGQ7XG4gICAgICBpblByb2dyZXNzVGFza3NVbFswXSA9IGluUHJvZ3Jlc3NDb250YWluZXIuZmlyc3RDaGlsZDtcbiAgICAgIGRvbmVUYXNrc1VsWzBdID0gZG9uZUNvbnRhaW5lci5maXJzdENoaWxkO1xuICAgICAgLy8gc2F2aW5nIGNoYW5nZXMgdG8gbG9jYWwgc3RvcmFnZVxuICAgICAgbG9jYWxTdG9yYWdlU2F2ZSgpO1xuICAgICAgbGlzdENvdW50ZXIoKTtcblxuICAgICAgLy8gcmVzZXR0aW5nIHRoZSBpbmRpdmlkdWFsIGRhcmdOZHJvcCBldmVudExpc3RlbmVyc1xuICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzaycpKS5mb3JFYWNoKChsaSkgPT4ge1xuICAgICAgICBsaS5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBkcmFnSXRlbSk7XG4gICAgICAgIGxpLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCBlbmREcmFnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xufVxuLy8gYWRkaW5nIHRoZSBldmVudCBsaXN0ZW5lcnMgdG8gdGhlIGxvYWQgYW5kIHNhdmUgYnV0dG9uc1xuc2F2ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNhdmVBcGkpO1xubG9hZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRBcGkpO1xuLy9cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==