/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./solution/styles.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./solution/styles.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! milky-way-2695569_960_720.jpg */ \"./solution/milky-way-2695569_960_720.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Gemunu+Libre:wght@300&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body{\\r\\n    font-family: 'Gemunu Libre', sans-serif;\\r\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n    color: rgb(167, 56, 56);\\r\\n}\\r\\nsection::-webkit-scrollbar{\\r\\n    width: 5px;\\r\\n    height: 5px;\\r\\n}\\r\\nsection::-webkit-scrollbar-thumb{\\r\\n    background-color: black;\\r\\n}\\r\\nsection::-webkit-scrollbar-track{\\r\\n    background-color: none;\\r\\n}\\r\\n\\r\\nh1{\\r\\n    text-align: center;\\r\\n}\\r\\nul{\\r\\n  list-style: none;  \\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: flex-start;\\r\\n  align-items: flex-start;\\r\\n}\\r\\nli{\\r\\n    min-width: 180px;\\r\\n    width: fit-content;\\r\\n    height: 15px;\\r\\n    padding: 4px;\\r\\n    margin-top: 5px;\\r\\n    margin-left: 0;\\r\\n    margin-right: 0;\\r\\n    border: solid 1px black;\\r\\n    border-radius: 8%;\\r\\n}\\r\\nsection {\\r\\n    background-color: rgba(240, 240, 240, 0.7);\\r\\n    border-radius: 8%;\\r\\n    overflow: scroll;\\r\\n}\\r\\nh2{\\r\\n    text-align: center;\\r\\n}\\r\\n.api-buttons{\\r\\n   display: flex;\\r\\n   justify-content: end;\\r\\n}\\r\\n#search{\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    margin-left: auto;\\r\\n    margin-right: auto;\\r\\n    margin-bottom: 50px;\\r\\n}\\r\\n\\r\\n.main-div{\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n}\\r\\n.task-section, .recycle-bin{\\r\\n    width: 300px;\\r\\n    height: 300px;\\r\\n    border: 1px solid;\\r\\n    margin: 10px;\\r\\n}\\r\\n\\r\\n.task-section input{\\r\\n    width: 150px;\\r\\n    margin-top: 10px;\\r\\n}\\r\\n\\r\\n.task-section h2{\\r\\n    margin-top: 0;\\r\\n}\\r\\n.dragging{\\r\\n    opacity: 0.5;\\r\\n}\\r\\n\\r\\ninput{\\r\\n    border: none;\\r\\n    appearance: none;\\r\\n    background-color: rgb(240,240,240);\\r\\n    height:30px;\\r\\n    width: 200px;\\r\\n    border-radius: 3px;\\r\\n    outline: none;\\r\\n    margin:0;\\r\\n}\\r\\n\\r\\n.search-bar{\\r\\n    margin-left: auto;\\r\\n    margin-right: auto;\\r\\n    position: relative;\\r\\n    width: 220px;\\r\\n    height: 30px;\\r\\n}\\r\\n#search{\\r\\n    display: inline;\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    background-color: white;\\r\\n}\\r\\n.search-bar label{\\r\\n    content: \\\"\\\";\\r\\n    position: absolute;\\r\\n    left: 0px;\\r\\n    bottom: 0px;\\r\\n    height: 100%;\\r\\n    width: 100%;\\r\\n    pointer-events: none;\\r\\n    border-bottom: solid 1px black;\\r\\n    transition: all 0.3s ease;\\r\\n}\\r\\n\\r\\n.placeholder{\\r\\n    position: absolute;\\r\\n    bottom: 5px;\\r\\n    left: 0%;\\r\\n    transition: all 0.3s ease;\\r\\n}\\r\\n\\r\\n.api-button,.add-task{\\r\\n   width: 70px;\\r\\n   height: 35px;\\r\\n   color: white;\\r\\n   background-color: teal;\\r\\n   border-radius: 4px;\\r\\n   transition: ease-out 0.3s;\\r\\n   outline: none;\\r\\n   box-shadow: inset 0 0 0 0 yellow;\\r\\n}\\r\\n\\r\\n.api-button:hover{\\r\\n    box-shadow: inset 70px 0 0 0 yellow;\\r\\n}\\r\\n\\r\\n.add-task{\\r\\n    width: 55px;\\r\\n    height: 28px;\\r\\n    color: white;\\r\\n    background-color: rgb(128, 0, 70);\\r\\n    border-radius: 4px;\\r\\n    transition: ease-out 0.3s;\\r\\n    outline: none;\\r\\n    box-shadow: inset 0 0 0 0 yellow;\\r\\n}\\r\\n\\r\\n.add-task:hover{\\r\\n    box-shadow: inset 70px 0 0 0 rgb(7, 148, 190);\\r\\n}\\r\\n\\r\\n\\r\\n\\r\\n.loader {\\r\\n  border: 16px solid #f3f3f3; /* Light grey */\\r\\n  border-top: 16px solid #3498db; /* Blue */\\r\\n  border-radius: 50%;\\r\\n  width: 30px;\\r\\n  height: 30px;\\r\\n  animation: spin 2s linear infinite;\\r\\n}\\r\\n\\r\\n@keyframes spin {\\r\\n  0% { transform: rotate(0deg); }\\r\\n  100% { transform: rotate(360deg); }\\r\\n}\\r\\n\\r\\n#new-theme-btn{\\r\\n    display: flex;\\r\\n    justify-self: center;\\r\\n    margin-left: auto;\\r\\n    margin-right: auto;\\r\\n}\\r\\n\\r\\n\\r\\n\\r\\n#new-theme-btn{\\r\\n    font-size: 20px;\\r\\n    font-weight: 200;\\r\\n    letter-spacing: 1px;\\r\\n    padding: 13px 50px 13px;\\r\\n    outline: 0;\\r\\n    border: 1px solid black;\\r\\n    cursor: pointer;\\r\\n    position: relative;\\r\\n    background-color: rgba(0, 0, 0, 0);\\r\\n  }\\r\\n  \\r\\n  #new-theme-btn::after {\\r\\n    content: \\\"\\\";\\r\\n    background-color: #ffe54c;\\r\\n    width: 100%;\\r\\n    z-index: -1;\\r\\n    position: absolute;\\r\\n    height: 100%;\\r\\n    top: 7px;\\r\\n    left: 7px;\\r\\n    transition: 0.2s;\\r\\n  }\\r\\n  \\r\\n  #new-theme-btn::after {\\r\\n    top: 0px;\\r\\n    left: 0px;\\r\\n  }\\r\\n\\r\\n  #show-recycle {\\r\\n    width: 220px;\\r\\n    height: 50px;\\r\\n    border: none;\\r\\n    outline: none;\\r\\n    color: #fff;\\r\\n    background: #111;\\r\\n    cursor: pointer;\\r\\n    position: relative;\\r\\n    z-index: 0;\\r\\n    border-radius: 10px;\\r\\n}\\r\\n\\r\\n.sort-az{\\r\\n    display: inline;\\r\\n    width: 100px;\\r\\n    height: 20px;\\r\\n    line-height: 20px;\\r\\n    font-size: 12px;\\r\\n    text-decoration: none;\\r\\n    color: #333;\\r\\n    border: 2px solid #333;\\r\\n    letter-spacing: 2px;\\r\\n    text-align: center;\\r\\n    position: relative;\\r\\n  }\\r\\n\\r\\n\\r\\n\\r\\n  .delete-button{\\r\\n    display:inline-block;\\r\\n    padding:0.7em 1.4em;\\r\\n    margin:0 0.3em 0.3em 0;\\r\\n    border-radius:0.15em;\\r\\n    font-size: 12px;\\r\\n    box-sizing: border-box;\\r\\n    text-decoration:none;\\r\\n    font-family:'Roboto',sans-serif;\\r\\n    text-transform:uppercase;\\r\\n    font-weight:400;\\r\\n    color:#FFFFFF;\\r\\n    background-color:#cf2008;\\r\\n    box-shadow:inset 0 -0.6em 0 -0.35em rgba(0,0,0,0.17);\\r\\n    text-align:center;\\r\\n    position:relative;\\r\\n    }\\r\\n\\r\\n    .delete-button:active{\\r\\n        top:0.1em;\\r\\n        }\\r\\n        @media all and (max-width:30em){\\r\\n         .delete-button{\\r\\n        display:block;\\r\\n        margin:0.4em auto;\\r\\n        }\\r\\n    }\\r\\n\\r\\n    #to-do-section{\\r\\n        color: rgb(35, 5, 83);\\r\\n        background-color: rgba(50, 256, 50, 0.6);\\r\\n    }\\r\\n    #in-progress-section{\\r\\n        color: rgb(109, 2, 2);\\r\\n        background-color: rgba(50, 50, 256, 0.6);\\r\\n    }\\r\\n    #done-section{\\r\\n        color: rgb(70, 82, 3);\\r\\n        background-color: rgba(256, 50, 50, 0.6);\\r\\n    }\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://final/./solution/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var _i = 0; _i < this.length; _i++) {\n        var id = this[_i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i2 = 0; _i2 < modules.length; _i2++) {\n      var item = [].concat(modules[_i2]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://final/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://final/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://final/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./solution/styles.css":
/*!*****************************!*\
  !*** ./solution/styles.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./solution/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://final/./solution/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://final/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://final/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://final/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://final/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://final/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://final/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./solution/index.js":
/*!***************************!*\
  !*** ./solution/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./solution/styles.css\");\n\n/* local storage  */\n// initilizes the local storage object\nif (!localStorage.tasks || localStorage.tasks.length === 0) {\n  localStorage.setItem('tasks', JSON.stringify({\n    todo: [],\n    'in-progress': [],\n    done: [],\n    deleted: []\n  }));\n}\nconst localStorageObjectForUpdate = JSON.parse(localStorage.tasks);\n// local storage clear button lisener\nfunction deleteAll (e) {\n  const { target } = e;\n  if (target.className === 'delete-button') {\n    localStorage.setItem('tasks', JSON.stringify({\n      todo: [],\n      'in-progress': [],\n      done: [],\n      deleted: []\n    }));\n    window.location.reload();\n  }\n}\n\n// local storage save function\nfunction innerLocalStorageSave (listName, ul) {\n  localStorageObjectForUpdate[listName][0] = ul.outerHTML;\n}\nfunction localStorageSave () {\n  innerLocalStorageSave('todo', toDoTasksUl);\n  innerLocalStorageSave('in-progress', inProgressTasksUl);\n  innerLocalStorageSave('done', doneTasksUl);\n  innerLocalStorageSave('deleted', deletedTasksUl);\n  localStorage.setItem('tasks', JSON.stringify(localStorageObjectForUpdate));\n}\n\n/* dom manipulation */\n\n// setting global variables for the document elements\nconst taskDiv = document.getElementById('tasks-div');\nconst searchBar = document.getElementById('search');\nconst saveButton = document.getElementById('save-button');\nconst loadButton = document.getElementById('load-button');\nconst showRecycleBin = document.getElementById('show-recycle');\nconst loader = document.querySelector('.api-buttons').lastElementChild;\nconst recycleBin = document.querySelector('.recycle-bin');\nconst toDoContainer = document.getElementById('to-do-container');\nconst inProgressContainer = document.getElementById('in-progress-container');\nconst doneContainer = document.getElementById('done-container');\nconst taskEnumeratorArray = Array.from(document.getElementsByClassName('task-enumerator'));\n\n// localstorage loading after refresh\nfunction appendToContainer (containerPr, ul) {\n  const container = containerPr;\n  if (localStorageObjectForUpdate[ul][0] == null) {\n    container.innerHTML = '';\n  } else {\n    const currentUl = localStorageObjectForUpdate[ul][0];\n    container.innerHTML = currentUl;\n  }\n}\nif (localStorageObjectForUpdate.todo[0] != null || localStorageObjectForUpdate['in-progress'][0] != null || localStorageObjectForUpdate.done[0] != null || localStorageObjectForUpdate.deleted[0] != null) {\n  appendToContainer(toDoContainer, 'todo');\n  appendToContainer(inProgressContainer, 'in-progress');\n  appendToContainer(doneContainer, 'done');\n  appendToContainer(recycleBin, 'deleted');\n  listCounter();\n} else {\n  const toDoTasksUl = createElement('ul', [], ['to-do-tasks'], {});\n  const inProgressTasksUl = createElement('ul', [], ['in-progress-tasks'], {});\n  const doneTasksUl = createElement('ul', [], ['done-tasks'], {});\n  const deletedTasksUl = createElement('ul', [], ['recycle-Ul'], {});\n  toDoContainer.appendChild(toDoTasksUl);\n  inProgressContainer.appendChild(inProgressTasksUl);\n  doneContainer.appendChild(doneTasksUl);\n  recycleBin.appendChild(deletedTasksUl);\n  listCounter();\n}\n\nlet toDoTasksUl = toDoContainer.firstChild;\nlet inProgressTasksUl = inProgressContainer.firstChild;\nlet doneTasksUl = doneContainer.firstChild;\nlet deletedTasksUl = recycleBin.firstChild;\n\n/** event listeners**/\n\n/* tasks */\n\n// double click functionality\n\n// gaining focus function\nfunction gainFocus (e) {\n  const { target } = e;\n  if (target.tagName === 'LI') {\n    target.setAttribute('contenteditable', 'true');\n    target.style.backgroundColor = 'rgba(50,50,200,0.5)';\n  }\n}\n\n// getting out of focus after blur\nfunction saveValueBlur (e) {\n  const { target } = e;\n  if (target.tagName !== 'LI') {\n    return;\n  }\n  target.setAttribute('contenteditable', 'false');\n  target.style.backgroundColor = 'rgba(0,0,0,0)';\n  localStorageSave();\n  listCounter();\n}\n//\n\n// hover + alt + 1/2/3 functionality\nfunction checkListAtAlt (eventKey, target, keyNum, ulToInsert) {\n  if (eventKey === keyNum) {\n    ulToInsert.insertBefore(target, ulToInsert.firstChild);\n  }\n}\nfunction hoverReplace (e) {\n  const { target } = e;\n  function innerKeyReplace (ev) {\n    if (ev.altKey) {\n      checkListAtAlt(ev.key, target, 1, toDoTasksUl);\n      checkListAtAlt(ev.key, target, 2, inProgressTasksUl);\n      checkListAtAlt(ev.key, target, 3, doneTasksUl);\n    }\n    // local storage insertion\n    localStorageSave();\n    listCounter();\n  }\n  target.addEventListener('mouseleave', () => {\n    window.removeEventListener('keydown', innerKeyReplace);\n  });\n  window.addEventListener('keydown', innerKeyReplace);\n}\n// add addHoverReplace\nfunction addHoverReplace (e) {\n  if (e.target.tagName !== 'LI') {\n    return;\n  }\n  e.target.addEventListener('mouseenter', hoverReplace);\n}\n\n// dragItem function\nfunction dragItem (e) {\n  e.target.classList.add('dragging');\n}\n\nfunction endDrag (e) {\n  e.target.classList.remove('dragging');\n  localStorageSave();\n  listCounter();\n}\n// adding event listeners for dragNdrop\nArray.from(document.querySelectorAll('.task')).forEach((li) => {\n  li.addEventListener('dragstart', dragItem);\n  li.addEventListener('dragend', endDrag);\n});\n\n// adding the drop event to the sections\nconst sections = Array.from(document.querySelectorAll('section'));\nsections.forEach((section) => {\n  section.addEventListener('dragover', (e) => {\n    const afterElement = elementAfterDragging(section, e.clientY);\n    if (afterElement == null) {\n      section.lastElementChild.firstElementChild.appendChild(document.querySelector('.dragging'));\n    } else {\n      section.lastElementChild.firstElementChild.insertBefore(document.querySelector('.dragging'), afterElement);\n    }\n  });\n});\n// controls what li to switch\nfunction elementAfterDragging (container, y) {\n  const draggableElements = [...container.querySelectorAll('[draggable = true]:not(.dragging)')];\n  return draggableElements.reduce((closest, child) => {\n    const box = child.getBoundingClientRect();\n    const offset = y - box.top - box.height / 2;\n    if (offset < 0 && offset > closest.offset) {\n      return { offset, element: child };\n    }\n    return closest;\n  }, { offset: Number.NEGATIVE_INFINITY }).element;\n}\n\n/* lists */\n\n// adding event listeners to the body\ndocument.body.addEventListener('mouseover', addHoverReplace);\ndocument.body.addEventListener('dblclick', gainFocus);\ndocument.body.addEventListener('focusout', saveValueBlur);\ndocument.body.addEventListener('contextmenu', removeLi);\ndocument.addEventListener('click', sortAz);\ndocument.body.addEventListener('click', deleteAll);\n\n// total list item counter function\nfunction listCounter () {\n  taskEnumeratorArray.forEach((taskEnumerator) => {\n    const taskEnum = taskEnumerator;\n    const listofEnumerator = taskEnum.parentElement.lastElementChild.firstElementChild.children;\n    const totalTasks = Array.from(listofEnumerator).length;\n    taskEnum.textContent = `total: ${totalTasks}`;\n  });\n}\n\n// adding a list item functionality\n\n// inner add task function\nfunction innerAddTaskToul (targetPr) {\n  const target = targetPr;\n  const newTask = createElement('li', [`${target.previousElementSibling.value}`], ['task'], { draggable: 'true' });\n  const inseter = target.nextElementSibling.firstChild.firstChild;\n  target.nextElementSibling.firstChild.insertBefore(newTask, inseter);\n  // local storage insertion\n  localStorageSave();\n  // individual eventListeners for drag and Drop\n  newTask.addEventListener('dragstart', dragItem);\n  newTask.addEventListener('dragend', endDrag);\n  target.previousElementSibling.value = '';\n  listCounter();\n}\n// add task function\nfunction addTask (e) {\n  const { target } = e;\n  if (target.className === 'add-task') {\n    const inputText = target.previousElementSibling.value;\n    if (inputText === '') {\n      alert(\"You haven't entered any text\");\n    } else {\n      innerAddTaskToul(target);\n    }\n  }\n}\ntaskDiv.addEventListener('click', addTask);\n\n// create Element function\nfunction createElement (tagName, children = [], classes = [], attributes = {}) {\n  const newEl = document.createElement(tagName);\n  children.forEach((kid) => {\n    let child = kid;\n    if (typeof (child) === 'string') {\n      child = document.createTextNode(child);\n    }\n    newEl.append(child);\n  });\n  classes.forEach((cls) => {\n    newEl.classList.add(cls);\n  });\n  Object.entries(attributes).forEach((attr) => {\n    newEl.setAttribute(attr[0], attr[1]);\n  });\n  /*\n  for (const attr in attributes) {\n    newEl.setAttribute(attr, attributes[attr]);\n  }\n  */\n  return newEl;\n}\n\n/* search bar */\n\n// search bar functions\nfunction hideTask (tasksList, value) {\n  tasksList.forEach((liPr) => {\n    const li = liPr;\n    li.hidden = false;\n    if (!li.textContent.toLowerCase().includes(value.toLowerCase())) {\n      li.hidden = true;\n    }\n  });\n  /*\n  for (const li of tasksList) {\n    li.hidden = false;\n    if (!li.textContent.toLowerCase().includes(value.toLowerCase())) {\n      li.hidden = true;\n    }\n  }\n  */\n}\nfunction searchTask (e) {\n  const { value } = e.target;\n  const taskArray = Array.from(document.getElementsByTagName('li'));\n  hideTask(taskArray, value);\n}\n// search bar animations\nsearchBar.addEventListener('focus', () => {\n  const placeholder = document.querySelector('.placeholder');\n  const label = document.querySelector('.placeholder-label');\n  placeholder.style = 'transform: translateY(-150%); color:blue; font-size:12px';\n  label.style = 'border-bottom: solid 3px blue;';\n});\nsearchBar.addEventListener('blur', () => {\n  if (searchBar.value === '') {\n    const placeholder = document.querySelector('.placeholder');\n    const label = document.querySelector('.placeholder-label');\n    placeholder.style = 'transform: translateY(0%); color:black; font-size:16px';\n    label.style = 'border-bottom: solid 1px black;';\n  }\n});\n//\nsearchBar.addEventListener('keyup', searchTask);\n\n// game trigger event\nlet asCounter = 0;\ndocument.addEventListener('keydown', (e) => {\n  if (e.key === 'a') {\n    asCounter += 1;\n    if (asCounter === 100) {\n      window.location.href = './htmlgame.html';\n    }\n  }\n});\n\n// change theme event\nconst themeButton = document.getElementById('new-theme-btn');\nconst cssLink = document.head.querySelector('link');\nthemeButton.addEventListener('click', (e) => {\n  if (cssLink.href === 'http://127.0.0.1:5500/solution/styles.css' || cssLink.href === './styles.css') {\n    cssLink.setAttribute('href', './cssFornewTheme.css');\n  } else {\n    cssLink.setAttribute('href', './styles.css');\n  }\n});\n\n// right click for erasing li function\nfunction removeLi (e) {\n  if (e.target.tagName === 'LI') {\n    e.preventDefault();\n    deletedTasksUl.appendChild(e.target);\n    localStorageSave();\n    listCounter();\n  }\n}\n// recycle bin button event listener\nshowRecycleBin.addEventListener('click', (e) => {\n  recycleBin.hidden = !recycleBin.hidden;\n});\n\n// sort LI alphabetically\nlet azCounter = 1;\n\nfunction sortAzUp (target) {\n  Array.from(target.parentElement.lastElementChild.firstElementChild.children).sort((a, b) => {\n    if (a.textContent > b.textContent) {\n      target.parentElement.lastElementChild.firstElementChild.insertBefore(a, b);\n      return 1;\n    }\n    if (b.textContent < a.textContent) {\n      target.parentElement.insertBefor(b, a);\n      return -1;\n    }\n    return 0;\n  });\n}\nfunction sortAzDown (target) {\n  Array.from(target.parentElement.lastElementChild.firstElementChild.children).sort((a, b) => {\n    if (a.textContent < b.textContent) {\n      target.parentElement.lastElementChild.firstElementChild.insertBefore(a, b);\n      return 1;\n    }\n    if (b.textContent > a.textContent) {\n      target.parentElement.insertBefor(b, a);\n      return -1;\n    }\n    return 0;\n  });\n}\n\nfunction innerSortAz (counter, target) {\n  if (counter % 2 === 0) {\n    sortAzUp(target);\n  } else {\n    sortAzDown(target);\n  }\n}\n\nfunction sortAz (e) {\n  const { target } = e;\n  if (target.className !== 'sort-az') {\n    return;\n  }\n  innerSortAz(azCounter, target);\n  azCounter += 1;\n}\n\n/* Api Functions */\n\n// API functions\nasync function saveApi () {\n  loader.classList.add('loader');\n  await fetch('https://json-bins.herokuapp.com/bin/614adb6c4021ac0e6c080c15', {\n    method: 'PUT',\n    headers: {\n      Accept: 'application/json', 'Content-Type': 'application/json'\n    },\n    // body: JSON.stringify({'tasks':{'todo':[], 'in-progress': [], 'done' : []} // resets the API\n    body: JSON.stringify({ tasks: { todo: [toDoTasksUl.outerHTML], 'in-progress': [inProgressTasksUl.outerHTML], done: [doneTasksUl.outerHTML] } })\n  }).then((response) => { if (response.status > 400) { alert(\"i'm a teapot\"); } });\n  loader.classList.remove('loader');\n}\n\n// load API function\nasync function loadApi () {\n  loader.classList.add('loader');\n  await fetch('https://json-bins.herokuapp.com/bin/614adb6c4021ac0e6c080c15').then(response => response.json())\n    .then((data) => {\n      loader.classList.remove('loader');\n      const toDoTasksUlAPI = data.tasks.todo[0];\n      const inProgressTasksUlAPI = data.tasks['in-progress'][0];\n      const doneTasksUlAPI = data.tasks.done[0];\n\n      function loadTasksFromApi (taskList, sectionPr) {\n        const section = sectionPr;\n        if (taskList === undefined) {\n          section.innerHTML = '';\n        } else {\n          section.innerHTML = taskList;\n        }\n      }\n      loadTasksFromApi(toDoTasksUlAPI, toDoContainer);\n      loadTasksFromApi(inProgressTasksUlAPI, inProgressContainer);\n      loadTasksFromApi(doneTasksUlAPI, doneContainer);\n\n      toDoTasksUl = toDoContainer.firstChild;\n      inProgressTasksUl = inProgressContainer.firstChild;\n      doneTasksUl = doneContainer.firstChild;\n      // saving changes to local storage\n      localStorageSave();\n      listCounter();\n\n      // resetting the individual dargNdrop eventListeners\n      Array.from(document.querySelectorAll('.task')).forEach((li) => {\n        li.addEventListener('dragstart', dragItem);\n        li.addEventListener('dragend', endDrag);\n      });\n    });\n}\n// adding the event listeners to the load and save buttons\nsaveButton.addEventListener('click', saveApi);\nloadButton.addEventListener('click', loadApi);\n//\n\n\n//# sourceURL=webpack://final/./solution/index.js?");

/***/ }),

/***/ "./solution/milky-way-2695569_960_720.jpg":
/*!************************************************!*\
  !*** ./solution/milky-way-2695569_960_720.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"74653ab6b71a9ba27aed.jpg\";\n\n//# sourceURL=webpack://final/./solution/milky-way-2695569_960_720.jpg?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./solution/index.js");
/******/ 	
/******/ })()
;