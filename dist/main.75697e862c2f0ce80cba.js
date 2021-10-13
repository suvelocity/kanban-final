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
___CSS_LOADER_EXPORT___.push([module.id, "body{\r\n    font-family: 'Gemunu Libre', sans-serif;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    color: rgb(167, 56, 56);\r\n}\r\nsection::-webkit-scrollbar{\r\n    width: 5px;\r\n    height: 5px;\r\n}\r\nsection::-webkit-scrollbar-thumb{\r\n    background-color: black;\r\n}\r\nsection::-webkit-scrollbar-track{\r\n    background-color: none;\r\n}\r\n\r\nh1{\r\n    text-align: center;\r\n}\r\nul{\r\n  list-style: none;  \r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: flex-start;\r\n}\r\nli{\r\n    min-width: 180px;\r\n    width: fit-content;\r\n    height: 15px;\r\n    padding: 4px;\r\n    margin-top: 5px;\r\n    margin-left: 0;\r\n    margin-right: 0;\r\n    border: solid 1px black;\r\n    border-radius: 8%;\r\n}\r\nsection {\r\n    background-color: rgba(240, 240, 240, 0.7);\r\n    border-radius: 8%;\r\n    overflow: scroll;\r\n}\r\nh2{\r\n    text-align: center;\r\n}\r\n.api-buttons{\r\n   display: flex;\r\n   justify-content: end;\r\n}\r\n#search{\r\n    display: flex;\r\n    justify-content: center;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-bottom: 50px;\r\n}\r\n\r\n.main-div{\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n.task-section, .recycle-bin{\r\n    width: 300px;\r\n    height: 300px;\r\n    border: 1px solid;\r\n    margin: 10px;\r\n}\r\n\r\n.task-section input{\r\n    width: 150px;\r\n    margin-top: 10px;\r\n}\r\n\r\n.task-section h2{\r\n    margin-top: 0;\r\n}\r\n.dragging{\r\n    opacity: 0.5;\r\n}\r\n\r\ninput{\r\n    border: none;\r\n    appearance: none;\r\n    background-color: rgb(240,240,240);\r\n    height:30px;\r\n    width: 200px;\r\n    border-radius: 3px;\r\n    outline: none;\r\n    margin:0;\r\n}\r\n\r\n.search-bar{\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    position: relative;\r\n    width: 220px;\r\n    height: 30px;\r\n}\r\n#search{\r\n    display: inline;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: white;\r\n}\r\n.search-bar label{\r\n    content: \"\";\r\n    position: absolute;\r\n    left: 0px;\r\n    bottom: 0px;\r\n    height: 100%;\r\n    width: 100%;\r\n    pointer-events: none;\r\n    border-bottom: solid 1px black;\r\n    transition: all 0.3s ease;\r\n}\r\n\r\n.placeholder{\r\n    position: absolute;\r\n    bottom: 5px;\r\n    left: 0%;\r\n    transition: all 0.3s ease;\r\n}\r\n\r\n.api-button,.add-task{\r\n   width: 70px;\r\n   height: 35px;\r\n   color: white;\r\n   background-color: teal;\r\n   border-radius: 4px;\r\n   transition: ease-out 0.3s;\r\n   outline: none;\r\n   box-shadow: inset 0 0 0 0 yellow;\r\n}\r\n\r\n.api-button:hover{\r\n    box-shadow: inset 70px 0 0 0 yellow;\r\n}\r\n\r\n.add-task{\r\n    width: 55px;\r\n    height: 28px;\r\n    color: white;\r\n    background-color: rgb(128, 0, 70);\r\n    border-radius: 4px;\r\n    transition: ease-out 0.3s;\r\n    outline: none;\r\n    box-shadow: inset 0 0 0 0 yellow;\r\n}\r\n\r\n.add-task:hover{\r\n    box-shadow: inset 70px 0 0 0 rgb(7, 148, 190);\r\n}\r\n\r\n\r\n\r\n.loader {\r\n  border: 16px solid #f3f3f3; /* Light grey */\r\n  border-top: 16px solid #3498db; /* Blue */\r\n  border-radius: 50%;\r\n  width: 30px;\r\n  height: 30px;\r\n  animation: spin 2s linear infinite;\r\n}\r\n\r\n@keyframes spin {\r\n  0% { transform: rotate(0deg); }\r\n  100% { transform: rotate(360deg); }\r\n}\r\n\r\n#new-theme-btn{\r\n    display: flex;\r\n    justify-self: center;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n\r\n\r\n#new-theme-btn{\r\n    font-size: 20px;\r\n    font-weight: 200;\r\n    letter-spacing: 1px;\r\n    padding: 13px 50px 13px;\r\n    outline: 0;\r\n    border: 1px solid black;\r\n    cursor: pointer;\r\n    position: relative;\r\n    background-color: rgba(0, 0, 0, 0);\r\n  }\r\n  \r\n  #new-theme-btn::after {\r\n    content: \"\";\r\n    background-color: #ffe54c;\r\n    width: 100%;\r\n    z-index: -1;\r\n    position: absolute;\r\n    height: 100%;\r\n    top: 7px;\r\n    left: 7px;\r\n    transition: 0.2s;\r\n  }\r\n  \r\n  #new-theme-btn::after {\r\n    top: 0px;\r\n    left: 0px;\r\n  }\r\n\r\n  #show-recycle {\r\n    width: 220px;\r\n    height: 50px;\r\n    border: none;\r\n    outline: none;\r\n    color: #fff;\r\n    background: #111;\r\n    cursor: pointer;\r\n    position: relative;\r\n    z-index: 0;\r\n    border-radius: 10px;\r\n}\r\n\r\n.sort-az{\r\n    display: inline;\r\n    width: 100px;\r\n    height: 20px;\r\n    line-height: 20px;\r\n    font-size: 12px;\r\n    text-decoration: none;\r\n    color: #333;\r\n    border: 2px solid #333;\r\n    letter-spacing: 2px;\r\n    text-align: center;\r\n    position: relative;\r\n  }\r\n\r\n\r\n\r\n  .delete-button{\r\n    display:inline-block;\r\n    padding:0.7em 1.4em;\r\n    margin:0 0.3em 0.3em 0;\r\n    border-radius:0.15em;\r\n    font-size: 12px;\r\n    box-sizing: border-box;\r\n    text-decoration:none;\r\n    font-family:'Roboto',sans-serif;\r\n    text-transform:uppercase;\r\n    font-weight:400;\r\n    color:#FFFFFF;\r\n    background-color:#cf2008;\r\n    box-shadow:inset 0 -0.6em 0 -0.35em rgba(0,0,0,0.17);\r\n    text-align:center;\r\n    position:relative;\r\n    }\r\n\r\n    .delete-button:active{\r\n        top:0.1em;\r\n        }\r\n        @media all and (max-width:30em){\r\n         .delete-button{\r\n        display:block;\r\n        margin:0.4em auto;\r\n        }\r\n    }\r\n\r\n    #to-do-section{\r\n        color: rgb(35, 5, 83);\r\n        background-color: rgba(50, 256, 50, 0.6);\r\n    }\r\n    #in-progress-section{\r\n        color: rgb(109, 2, 2);\r\n        background-color: rgba(50, 50, 256, 0.6);\r\n    }\r\n    #done-section{\r\n        color: rgb(70, 82, 3);\r\n        background-color: rgba(256, 50, 50, 0.6);\r\n    }", "",{"version":3,"sources":["webpack://./solution/styles.css"],"names":[],"mappings":"AAEA;IACI,uCAAuC;IACvC,yDAAoD;IACpD,uBAAuB;AAC3B;AACA;IACI,UAAU;IACV,WAAW;AACf;AACA;IACI,uBAAuB;AAC3B;AACA;IACI,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;AACtB;AACA;EACE,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,2BAA2B;EAC3B,uBAAuB;AACzB;AACA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,YAAY;IACZ,YAAY;IACZ,eAAe;IACf,cAAc;IACd,eAAe;IACf,uBAAuB;IACvB,iBAAiB;AACrB;AACA;IACI,0CAA0C;IAC1C,iBAAiB;IACjB,gBAAgB;AACpB;AACA;IACI,kBAAkB;AACtB;AACA;GACG,aAAa;GACb,oBAAoB;AACvB;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B;AACA;IACI,YAAY;IACZ,aAAa;IACb,iBAAiB;IACjB,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,aAAa;AACjB;AACA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,gBAAgB;IAChB,kCAAkC;IAClC,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,aAAa;IACb,QAAQ;AACZ;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,kBAAkB;IAClB,YAAY;IACZ,YAAY;AAChB;AACA;IACI,eAAe;IACf,WAAW;IACX,YAAY;IACZ,uBAAuB;AAC3B;AACA;IACI,WAAW;IACX,kBAAkB;IAClB,SAAS;IACT,WAAW;IACX,YAAY;IACZ,WAAW;IACX,oBAAoB;IACpB,8BAA8B;IAC9B,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,QAAQ;IACR,yBAAyB;AAC7B;;AAEA;GACG,WAAW;GACX,YAAY;GACZ,YAAY;GACZ,sBAAsB;GACtB,kBAAkB;GAClB,yBAAyB;GACzB,aAAa;GACb,gCAAgC;AACnC;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,iCAAiC;IACjC,kBAAkB;IAClB,yBAAyB;IACzB,aAAa;IACb,gCAAgC;AACpC;;AAEA;IACI,6CAA6C;AACjD;;;;AAIA;EACE,0BAA0B,EAAE,eAAe;EAC3C,8BAA8B,EAAE,SAAS;EACzC,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,kCAAkC;AACpC;;AAEA;EACE,KAAK,uBAAuB,EAAE;EAC9B,OAAO,yBAAyB,EAAE;AACpC;;AAEA;IACI,aAAa;IACb,oBAAoB;IACpB,iBAAiB;IACjB,kBAAkB;AACtB;;;;AAIA;IACI,eAAe;IACf,gBAAgB;IAChB,mBAAmB;IACnB,uBAAuB;IACvB,UAAU;IACV,uBAAuB;IACvB,eAAe;IACf,kBAAkB;IAClB,kCAAkC;EACpC;;EAEA;IACE,WAAW;IACX,yBAAyB;IACzB,WAAW;IACX,WAAW;IACX,kBAAkB;IAClB,YAAY;IACZ,QAAQ;IACR,SAAS;IACT,gBAAgB;EAClB;;EAEA;IACE,QAAQ;IACR,SAAS;EACX;;EAEA;IACE,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,WAAW;IACX,gBAAgB;IAChB,eAAe;IACf,kBAAkB;IAClB,UAAU;IACV,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,YAAY;IACZ,iBAAiB;IACjB,eAAe;IACf,qBAAqB;IACrB,WAAW;IACX,sBAAsB;IACtB,mBAAmB;IACnB,kBAAkB;IAClB,kBAAkB;EACpB;;;;EAIA;IACE,oBAAoB;IACpB,mBAAmB;IACnB,sBAAsB;IACtB,oBAAoB;IACpB,eAAe;IACf,sBAAsB;IACtB,oBAAoB;IACpB,+BAA+B;IAC/B,wBAAwB;IACxB,eAAe;IACf,aAAa;IACb,wBAAwB;IACxB,oDAAoD;IACpD,iBAAiB;IACjB,iBAAiB;IACjB;;IAEA;QACI,SAAS;QACT;QACA;QACA;QACA,aAAa;QACb,iBAAiB;QACjB;IACJ;;IAEA;QACI,qBAAqB;QACrB,wCAAwC;IAC5C;IACA;QACI,qBAAqB;QACrB,wCAAwC;IAC5C;IACA;QACI,qBAAqB;QACrB,wCAAwC;IAC5C","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Gemunu+Libre:wght@300&display=swap');\r\n\r\nbody{\r\n    font-family: 'Gemunu Libre', sans-serif;\r\n    background-image: url(milky-way-2695569_960_720.jpg);\r\n    color: rgb(167, 56, 56);\r\n}\r\nsection::-webkit-scrollbar{\r\n    width: 5px;\r\n    height: 5px;\r\n}\r\nsection::-webkit-scrollbar-thumb{\r\n    background-color: black;\r\n}\r\nsection::-webkit-scrollbar-track{\r\n    background-color: none;\r\n}\r\n\r\nh1{\r\n    text-align: center;\r\n}\r\nul{\r\n  list-style: none;  \r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: flex-start;\r\n}\r\nli{\r\n    min-width: 180px;\r\n    width: fit-content;\r\n    height: 15px;\r\n    padding: 4px;\r\n    margin-top: 5px;\r\n    margin-left: 0;\r\n    margin-right: 0;\r\n    border: solid 1px black;\r\n    border-radius: 8%;\r\n}\r\nsection {\r\n    background-color: rgba(240, 240, 240, 0.7);\r\n    border-radius: 8%;\r\n    overflow: scroll;\r\n}\r\nh2{\r\n    text-align: center;\r\n}\r\n.api-buttons{\r\n   display: flex;\r\n   justify-content: end;\r\n}\r\n#search{\r\n    display: flex;\r\n    justify-content: center;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-bottom: 50px;\r\n}\r\n\r\n.main-div{\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n.task-section, .recycle-bin{\r\n    width: 300px;\r\n    height: 300px;\r\n    border: 1px solid;\r\n    margin: 10px;\r\n}\r\n\r\n.task-section input{\r\n    width: 150px;\r\n    margin-top: 10px;\r\n}\r\n\r\n.task-section h2{\r\n    margin-top: 0;\r\n}\r\n.dragging{\r\n    opacity: 0.5;\r\n}\r\n\r\ninput{\r\n    border: none;\r\n    appearance: none;\r\n    background-color: rgb(240,240,240);\r\n    height:30px;\r\n    width: 200px;\r\n    border-radius: 3px;\r\n    outline: none;\r\n    margin:0;\r\n}\r\n\r\n.search-bar{\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    position: relative;\r\n    width: 220px;\r\n    height: 30px;\r\n}\r\n#search{\r\n    display: inline;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: white;\r\n}\r\n.search-bar label{\r\n    content: \"\";\r\n    position: absolute;\r\n    left: 0px;\r\n    bottom: 0px;\r\n    height: 100%;\r\n    width: 100%;\r\n    pointer-events: none;\r\n    border-bottom: solid 1px black;\r\n    transition: all 0.3s ease;\r\n}\r\n\r\n.placeholder{\r\n    position: absolute;\r\n    bottom: 5px;\r\n    left: 0%;\r\n    transition: all 0.3s ease;\r\n}\r\n\r\n.api-button,.add-task{\r\n   width: 70px;\r\n   height: 35px;\r\n   color: white;\r\n   background-color: teal;\r\n   border-radius: 4px;\r\n   transition: ease-out 0.3s;\r\n   outline: none;\r\n   box-shadow: inset 0 0 0 0 yellow;\r\n}\r\n\r\n.api-button:hover{\r\n    box-shadow: inset 70px 0 0 0 yellow;\r\n}\r\n\r\n.add-task{\r\n    width: 55px;\r\n    height: 28px;\r\n    color: white;\r\n    background-color: rgb(128, 0, 70);\r\n    border-radius: 4px;\r\n    transition: ease-out 0.3s;\r\n    outline: none;\r\n    box-shadow: inset 0 0 0 0 yellow;\r\n}\r\n\r\n.add-task:hover{\r\n    box-shadow: inset 70px 0 0 0 rgb(7, 148, 190);\r\n}\r\n\r\n\r\n\r\n.loader {\r\n  border: 16px solid #f3f3f3; /* Light grey */\r\n  border-top: 16px solid #3498db; /* Blue */\r\n  border-radius: 50%;\r\n  width: 30px;\r\n  height: 30px;\r\n  animation: spin 2s linear infinite;\r\n}\r\n\r\n@keyframes spin {\r\n  0% { transform: rotate(0deg); }\r\n  100% { transform: rotate(360deg); }\r\n}\r\n\r\n#new-theme-btn{\r\n    display: flex;\r\n    justify-self: center;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n\r\n\r\n#new-theme-btn{\r\n    font-size: 20px;\r\n    font-weight: 200;\r\n    letter-spacing: 1px;\r\n    padding: 13px 50px 13px;\r\n    outline: 0;\r\n    border: 1px solid black;\r\n    cursor: pointer;\r\n    position: relative;\r\n    background-color: rgba(0, 0, 0, 0);\r\n  }\r\n  \r\n  #new-theme-btn::after {\r\n    content: \"\";\r\n    background-color: #ffe54c;\r\n    width: 100%;\r\n    z-index: -1;\r\n    position: absolute;\r\n    height: 100%;\r\n    top: 7px;\r\n    left: 7px;\r\n    transition: 0.2s;\r\n  }\r\n  \r\n  #new-theme-btn::after {\r\n    top: 0px;\r\n    left: 0px;\r\n  }\r\n\r\n  #show-recycle {\r\n    width: 220px;\r\n    height: 50px;\r\n    border: none;\r\n    outline: none;\r\n    color: #fff;\r\n    background: #111;\r\n    cursor: pointer;\r\n    position: relative;\r\n    z-index: 0;\r\n    border-radius: 10px;\r\n}\r\n\r\n.sort-az{\r\n    display: inline;\r\n    width: 100px;\r\n    height: 20px;\r\n    line-height: 20px;\r\n    font-size: 12px;\r\n    text-decoration: none;\r\n    color: #333;\r\n    border: 2px solid #333;\r\n    letter-spacing: 2px;\r\n    text-align: center;\r\n    position: relative;\r\n  }\r\n\r\n\r\n\r\n  .delete-button{\r\n    display:inline-block;\r\n    padding:0.7em 1.4em;\r\n    margin:0 0.3em 0.3em 0;\r\n    border-radius:0.15em;\r\n    font-size: 12px;\r\n    box-sizing: border-box;\r\n    text-decoration:none;\r\n    font-family:'Roboto',sans-serif;\r\n    text-transform:uppercase;\r\n    font-weight:400;\r\n    color:#FFFFFF;\r\n    background-color:#cf2008;\r\n    box-shadow:inset 0 -0.6em 0 -0.35em rgba(0,0,0,0.17);\r\n    text-align:center;\r\n    position:relative;\r\n    }\r\n\r\n    .delete-button:active{\r\n        top:0.1em;\r\n        }\r\n        @media all and (max-width:30em){\r\n         .delete-button{\r\n        display:block;\r\n        margin:0.4em auto;\r\n        }\r\n    }\r\n\r\n    #to-do-section{\r\n        color: rgb(35, 5, 83);\r\n        background-color: rgba(50, 256, 50, 0.6);\r\n    }\r\n    #in-progress-section{\r\n        color: rgb(109, 2, 2);\r\n        background-color: rgba(50, 50, 256, 0.6);\r\n    }\r\n    #done-section{\r\n        color: rgb(70, 82, 3);\r\n        background-color: rgba(256, 50, 50, 0.6);\r\n    }"],"sourceRoot":""}]);
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

/***/ "./solution/Api functions.js":
/*!***********************************!*\
  !*** ./solution/Api functions.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "saveApi": () => (/* binding */ saveApi),
/* harmony export */   "loadApi": () => (/* binding */ loadApi)
/* harmony export */ });
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage */ "./solution/localStorage.js");
/* harmony import */ var _global_variables_for_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global variables for index */ "./solution/global variables for index.js");
/* harmony import */ var _list_counter_for_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list counter for index */ "./solution/list counter for index.js");
/* harmony import */ var _tasks_event_listeners__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tasks event listeners */ "./solution/tasks event listeners.js");




/* Api Functions */

// API functions
async function saveApi () {
  _global_variables_for_index__WEBPACK_IMPORTED_MODULE_1__.loader.classList.add('loader');
  await fetch('https://json-bins.herokuapp.com/bin/614adb6c4021ac0e6c080c15', {
    method: 'PUT',
    headers: {
      Accept: 'application/json', 'Content-Type': 'application/json'
    },
    // body: JSON.stringify({'tasks':{'todo':[], 'in-progress': [], 'done' : []} // resets the API
    body: JSON.stringify({ tasks: { todo: [_localStorage__WEBPACK_IMPORTED_MODULE_0__.toDoTasksUl[0].outerHTML], 'in-progress': [_localStorage__WEBPACK_IMPORTED_MODULE_0__.inProgressTasksUl[0].outerHTML], done: [_localStorage__WEBPACK_IMPORTED_MODULE_0__.doneTasksUl[0].outerHTML] } })
  }).then((response) => { if (response.status > 400) { alert("i'm a teapot"); } });
  _global_variables_for_index__WEBPACK_IMPORTED_MODULE_1__.loader.classList.remove('loader');
}

// load API function
async function loadApi () {
  _global_variables_for_index__WEBPACK_IMPORTED_MODULE_1__.loader.classList.add('loader');
  await fetch('https://json-bins.herokuapp.com/bin/614adb6c4021ac0e6c080c15').then(response => response.json())
    .then((data) => {
      _global_variables_for_index__WEBPACK_IMPORTED_MODULE_1__.loader.classList.remove('loader');
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
      loadTasksFromApi(toDoTasksUlAPI, _global_variables_for_index__WEBPACK_IMPORTED_MODULE_1__.toDoContainer);
      loadTasksFromApi(inProgressTasksUlAPI, _global_variables_for_index__WEBPACK_IMPORTED_MODULE_1__.inProgressContainer);
      loadTasksFromApi(doneTasksUlAPI, _global_variables_for_index__WEBPACK_IMPORTED_MODULE_1__.doneContainer);

      _localStorage__WEBPACK_IMPORTED_MODULE_0__.toDoTasksUl[0] = _global_variables_for_index__WEBPACK_IMPORTED_MODULE_1__.toDoContainer.firstChild;
      _localStorage__WEBPACK_IMPORTED_MODULE_0__.inProgressTasksUl[0] = _global_variables_for_index__WEBPACK_IMPORTED_MODULE_1__.inProgressContainer.firstChild;
      _localStorage__WEBPACK_IMPORTED_MODULE_0__.doneTasksUl[0] = _global_variables_for_index__WEBPACK_IMPORTED_MODULE_1__.doneContainer.firstChild;
      // saving changes to local storage
      (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.localStorageSave)();
      (0,_list_counter_for_index__WEBPACK_IMPORTED_MODULE_2__["default"])();

      // resetting the individual dargNdrop eventListeners
      Array.from(document.querySelectorAll('.task')).forEach((li) => {
        li.addEventListener('dragstart', _tasks_event_listeners__WEBPACK_IMPORTED_MODULE_3__.dragItem);
        li.addEventListener('dragend', _tasks_event_listeners__WEBPACK_IMPORTED_MODULE_3__.endDrag);
      });
    });
}


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
/* harmony export */   "checkListAtAlt": () => (/* binding */ checkListAtAlt),
/* harmony export */   "endDrag": () => (/* binding */ endDrag)
/* harmony export */ });
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage */ "./solution/localStorage.js");
/* harmony import */ var _list_counter_for_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list counter for index */ "./solution/list counter for index.js");



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

function endDrag (e) {
  e.target.classList.remove('dragging');
  (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.localStorageSave)();
  (0,_list_counter_for_index__WEBPACK_IMPORTED_MODULE_1__["default"])();
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
/* harmony import */ var _Api_functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Api functions */ "./solution/Api functions.js");








/* local storage  */

// initilizes the local storage object
(0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.loadLocalStorageAtBeginning)();
// object for saving to local storage

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

// function endDrag (e) {
//   e.target.classList.remove('dragging');
//   localStorageSave();
//   listCounter();
// }
// adding event listeners for dragNdrop
Array.from(document.querySelectorAll('.task')).forEach((li) => {
  li.addEventListener('dragstart', _tasks_event_listeners__WEBPACK_IMPORTED_MODULE_2__.dragItem);
  li.addEventListener('dragend', _tasks_event_listeners__WEBPACK_IMPORTED_MODULE_2__.endDrag);
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
  newTask.addEventListener('dragend', _tasks_event_listeners__WEBPACK_IMPORTED_MODULE_2__.endDrag);
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

// adding the event listeners to the load and save buttons
_global_variables_for_index__WEBPACK_IMPORTED_MODULE_4__.saveButton.addEventListener('click', _Api_functions__WEBPACK_IMPORTED_MODULE_7__.saveApi);
_global_variables_for_index__WEBPACK_IMPORTED_MODULE_4__.loadButton.addEventListener('click', _Api_functions__WEBPACK_IMPORTED_MODULE_7__.loadApi);
//

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTZCLGtDQUFrQyxxREFBcUQsU0FBUyxzQkFBc0Isa0NBQWtDLHFEQUFxRCxTQUFTLE9BQU8sc0ZBQXNGLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksU0FBUyxLQUFLLHNCQUFzQix1QkFBdUIsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssc0JBQXNCLHVCQUF1QixPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxTQUFTLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZ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LCJ3ZWJwYWNrOi8vZmluYWwvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2ZpbmFsLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9maW5hbC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2ZpbmFsLy4vc29sdXRpb24vc3R5bGVzLmNzcz81OWNmIiwid2VicGFjazovL2ZpbmFsLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2ZpbmFsLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9maW5hbC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9maW5hbC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9maW5hbC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2ZpbmFsLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZmluYWwvLi9zb2x1dGlvbi9BcGkgZnVuY3Rpb25zLmpzIiwid2VicGFjazovL2ZpbmFsLy4vc29sdXRpb24vY3JlYXRlIGVsZW1lbnQgZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vZmluYWwvLi9zb2x1dGlvbi9nbG9iYWwgdmFyaWFibGVzIGZvciBpbmRleC5qcyIsIndlYnBhY2s6Ly9maW5hbC8uL3NvbHV0aW9uL2xpc3QgY291bnRlciBmb3IgaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmluYWwvLi9zb2x1dGlvbi9sb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vZmluYWwvLi9zb2x1dGlvbi9zZWFyY2hiYXIgZnVuY3Rpb25hbGl0eS5qcyIsIndlYnBhY2s6Ly9maW5hbC8uL3NvbHV0aW9uL3Rhc2tzIGV2ZW50IGxpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly9maW5hbC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9maW5hbC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9maW5hbC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZmluYWwvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9maW5hbC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2ZpbmFsL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZmluYWwvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZmluYWwvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vZmluYWwvLi9zb2x1dGlvbi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwibWlsa3ktd2F5LTI2OTU1NjlfOTYwXzcyMC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUdlbXVudStMaWJyZTp3Z2h0QDMwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keXtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdHZW11bnUgTGlicmUnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbiAgICBjb2xvcjogcmdiKDE2NywgNTYsIDU2KTtcXHJcXG59XFxyXFxuc2VjdGlvbjo6LXdlYmtpdC1zY3JvbGxiYXJ7XFxyXFxuICAgIHdpZHRoOiA1cHg7XFxyXFxuICAgIGhlaWdodDogNXB4O1xcclxcbn1cXHJcXG5zZWN0aW9uOjotd2Via2l0LXNjcm9sbGJhci10aHVtYntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxufVxcclxcbnNlY3Rpb246Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNre1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5oMXtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG51bHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7ICBcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcbmxpe1xcclxcbiAgICBtaW4td2lkdGg6IDE4MHB4O1xcclxcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIGhlaWdodDogMTVweDtcXHJcXG4gICAgcGFkZGluZzogNHB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XFxyXFxuICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA4JTtcXHJcXG59XFxyXFxuc2VjdGlvbiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAyNDAsIDI0MCwgMC43KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOCU7XFxyXFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxyXFxufVxcclxcbmgye1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5hcGktYnV0dG9uc3tcXHJcXG4gICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgIGp1c3RpZnktY29udGVudDogZW5kO1xcclxcbn1cXHJcXG4jc2VhcmNoe1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tZGl2e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuLnRhc2stc2VjdGlvbiwgLnJlY3ljbGUtYmlue1xcclxcbiAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgIGhlaWdodDogMzAwcHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xcclxcbiAgICBtYXJnaW46IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrLXNlY3Rpb24gaW5wdXR7XFxyXFxuICAgIHdpZHRoOiAxNTBweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stc2VjdGlvbiBoMntcXHJcXG4gICAgbWFyZ2luLXRvcDogMDtcXHJcXG59XFxyXFxuLmRyYWdnaW5ne1xcclxcbiAgICBvcGFjaXR5OiAwLjU7XFxyXFxufVxcclxcblxcclxcbmlucHV0e1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsMjQwLDI0MCk7XFxyXFxuICAgIGhlaWdodDozMHB4O1xcclxcbiAgICB3aWR0aDogMjAwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgbWFyZ2luOjA7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtYmFye1xcclxcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHdpZHRoOiAyMjBweDtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbn1cXHJcXG4jc2VhcmNoe1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG4uc2VhcmNoLWJhciBsYWJlbHtcXHJcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbGVmdDogMHB4O1xcclxcbiAgICBib3R0b206IDBweDtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCBibGFjaztcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLnBsYWNlaG9sZGVye1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJvdHRvbTogNXB4O1xcclxcbiAgICBsZWZ0OiAwJTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFwaS1idXR0b24sLmFkZC10YXNre1xcclxcbiAgIHdpZHRoOiA3MHB4O1xcclxcbiAgIGhlaWdodDogMzVweDtcXHJcXG4gICBjb2xvcjogd2hpdGU7XFxyXFxuICAgYmFja2dyb3VuZC1jb2xvcjogdGVhbDtcXHJcXG4gICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgdHJhbnNpdGlvbjogZWFzZS1vdXQgMC4zcztcXHJcXG4gICBvdXRsaW5lOiBub25lO1xcclxcbiAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDAgeWVsbG93O1xcclxcbn1cXHJcXG5cXHJcXG4uYXBpLWJ1dHRvbjpob3ZlcntcXHJcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgNzBweCAwIDAgMCB5ZWxsb3c7XFxyXFxufVxcclxcblxcclxcbi5hZGQtdGFza3tcXHJcXG4gICAgd2lkdGg6IDU1cHg7XFxyXFxuICAgIGhlaWdodDogMjhweDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI4LCAwLCA3MCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogZWFzZS1vdXQgMC4zcztcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMCB5ZWxsb3c7XFxyXFxufVxcclxcblxcclxcbi5hZGQtdGFzazpob3ZlcntcXHJcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgNzBweCAwIDAgMCByZ2IoNywgMTQ4LCAxOTApO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4ubG9hZGVyIHtcXHJcXG4gIGJvcmRlcjogMTZweCBzb2xpZCAjZjNmM2YzOyAvKiBMaWdodCBncmV5ICovXFxyXFxuICBib3JkZXItdG9wOiAxNnB4IHNvbGlkICMzNDk4ZGI7IC8qIEJsdWUgKi9cXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIHdpZHRoOiAzMHB4O1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBzcGluIHtcXHJcXG4gIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cXHJcXG4gIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XFxyXFxufVxcclxcblxcclxcbiNuZXctdGhlbWUtYnRue1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuI25ldy10aGVtZS1idG57XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXHJcXG4gICAgcGFkZGluZzogMTNweCA1MHB4IDEzcHg7XFxyXFxuICAgIG91dGxpbmU6IDA7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgI25ldy10aGVtZS1idG46OmFmdGVyIHtcXHJcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmU1NGM7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB6LWluZGV4OiAtMTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHRvcDogN3B4O1xcclxcbiAgICBsZWZ0OiA3cHg7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuMnM7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gICNuZXctdGhlbWUtYnRuOjphZnRlciB7XFxyXFxuICAgIHRvcDogMHB4O1xcclxcbiAgICBsZWZ0OiAwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjc2hvdy1yZWN5Y2xlIHtcXHJcXG4gICAgd2lkdGg6IDIyMHB4O1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMxMTE7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB6LWluZGV4OiAwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc29ydC1hentcXHJcXG4gICAgZGlzcGxheTogaW5saW5lO1xcclxcbiAgICB3aWR0aDogMTAwcHg7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBjb2xvcjogIzMzMztcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzMzMztcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuICAuZGVsZXRlLWJ1dHRvbntcXHJcXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XFxyXFxuICAgIHBhZGRpbmc6MC43ZW0gMS40ZW07XFxyXFxuICAgIG1hcmdpbjowIDAuM2VtIDAuM2VtIDA7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6MC4xNWVtO1xcclxcbiAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xcclxcbiAgICBmb250LWZhbWlseTonUm9ib3RvJyxzYW5zLXNlcmlmO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OjQwMDtcXHJcXG4gICAgY29sb3I6I0ZGRkZGRjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojY2YyMDA4O1xcclxcbiAgICBib3gtc2hhZG93Omluc2V0IDAgLTAuNmVtIDAgLTAuMzVlbSByZ2JhKDAsMCwwLDAuMTcpO1xcclxcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcXHJcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmRlbGV0ZS1idXR0b246YWN0aXZle1xcclxcbiAgICAgICAgdG9wOjAuMWVtO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDozMGVtKXtcXHJcXG4gICAgICAgIOKAgy5kZWxldGUtYnV0dG9ue1xcclxcbiAgICAgICAgZGlzcGxheTpibG9jaztcXHJcXG4gICAgICAgIG1hcmdpbjowLjRlbSBhdXRvO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICN0by1kby1zZWN0aW9ue1xcclxcbiAgICAgICAgY29sb3I6IHJnYigzNSwgNSwgODMpO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1MCwgMjU2LCA1MCwgMC42KTtcXHJcXG4gICAgfVxcclxcbiAgICAjaW4tcHJvZ3Jlc3Mtc2VjdGlvbntcXHJcXG4gICAgICAgIGNvbG9yOiByZ2IoMTA5LCAyLCAyKTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTAsIDUwLCAyNTYsIDAuNik7XFxyXFxuICAgIH1cXHJcXG4gICAgI2RvbmUtc2VjdGlvbntcXHJcXG4gICAgICAgIGNvbG9yOiByZ2IoNzAsIDgyLCAzKTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU2LCA1MCwgNTAsIDAuNik7XFxyXFxuICAgIH1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zb2x1dGlvbi9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksdUNBQXVDO0lBQ3ZDLHlEQUFvRDtJQUNwRCx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLFVBQVU7SUFDVixXQUFXO0FBQ2Y7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFC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Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQkFBa0I7RUFDcEI7Ozs7RUFJQTtJQUNFLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQiwrQkFBK0I7SUFDL0Isd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLG9EQUFvRDtJQUNwRCxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCOztJQUVBO1FBQ0ksU0FBUztRQUNUO1FBQ0E7UUFDQTtRQUNBLGFBQWE7UUFDYixpQkFBaUI7UUFDakI7SUFDSjs7SUFFQTtRQUNJLHFCQUFxQjtRQUNyQix3Q0FBd0M7SUFDNUM7SUFDQTtRQUNJLHFCQUFxQjtRQUNyQix3Q0FBd0M7SUFDNUM7SUFDQTtRQUNJLHFCQUFxQjtRQUNyQix3Q0FBd0M7SUFDNUNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9R2VtdW51K0xpYnJlOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbmJvZHl7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnR2VtdW51IExpYnJlJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKG1pbGt5LXdheS0yNjk1NTY5Xzk2MF83MjAuanBnKTtcXHJcXG4gICAgY29sb3I6IHJnYigxNjcsIDU2LCA1Nik7XFxyXFxufVxcclxcbnNlY3Rpb246Oi13ZWJraXQtc2Nyb2xsYmFye1xcclxcbiAgICB3aWR0aDogNXB4O1xcclxcbiAgICBoZWlnaHQ6IDVweDtcXHJcXG59XFxyXFxuc2VjdGlvbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWJ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5zZWN0aW9uOjotd2Via2l0LXNjcm9sbGJhci10cmFja3tcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaDF7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxudWx7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lOyAgXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5saXtcXHJcXG4gICAgbWluLXdpZHRoOiAxODBweDtcXHJcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgICBoZWlnaHQ6IDE1cHg7XFxyXFxuICAgIHBhZGRpbmc6IDRweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogMDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xcclxcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOCU7XFxyXFxufVxcclxcbnNlY3Rpb24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMjQwLCAyNDAsIDAuNyk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDglO1xcclxcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcclxcbn1cXHJcXG5oMntcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4uYXBpLWJ1dHRvbnN7XFxyXFxuICAgZGlzcGxheTogZmxleDtcXHJcXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXHJcXG59XFxyXFxuI3NlYXJjaHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWRpdntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcbi50YXNrLXNlY3Rpb24sIC5yZWN5Y2xlLWJpbntcXHJcXG4gICAgd2lkdGg6IDMwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDMwMHB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcXHJcXG4gICAgbWFyZ2luOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1zZWN0aW9uIGlucHV0e1xcclxcbiAgICB3aWR0aDogMTUwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrLXNlY3Rpb24gaDJ7XFxyXFxuICAgIG1hcmdpbi10b3A6IDA7XFxyXFxufVxcclxcbi5kcmFnZ2luZ3tcXHJcXG4gICAgb3BhY2l0eTogMC41O1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLDI0MCwyNDApO1xcclxcbiAgICBoZWlnaHQ6MzBweDtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIG1hcmdpbjowO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLWJhcntcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB3aWR0aDogMjIwcHg7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG59XFxyXFxuI3NlYXJjaHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuLnNlYXJjaC1iYXIgbGFiZWx7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGxlZnQ6IDBweDtcXHJcXG4gICAgYm90dG9tOiAwcHg7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggYmxhY2s7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi5wbGFjZWhvbGRlcntcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBib3R0b206IDVweDtcXHJcXG4gICAgbGVmdDogMCU7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi5hcGktYnV0dG9uLC5hZGQtdGFza3tcXHJcXG4gICB3aWR0aDogNzBweDtcXHJcXG4gICBoZWlnaHQ6IDM1cHg7XFxyXFxuICAgY29sb3I6IHdoaXRlO1xcclxcbiAgIGJhY2tncm91bmQtY29sb3I6IHRlYWw7XFxyXFxuICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgIHRyYW5zaXRpb246IGVhc2Utb3V0IDAuM3M7XFxyXFxuICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAwIHllbGxvdztcXHJcXG59XFxyXFxuXFxyXFxuLmFwaS1idXR0b246aG92ZXJ7XFxyXFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDcwcHggMCAwIDAgeWVsbG93O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXRhc2t7XFxyXFxuICAgIHdpZHRoOiA1NXB4O1xcclxcbiAgICBoZWlnaHQ6IDI4cHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyOCwgMCwgNzApO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgIHRyYW5zaXRpb246IGVhc2Utb3V0IDAuM3M7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDAgeWVsbG93O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXRhc2s6aG92ZXJ7XFxyXFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDcwcHggMCAwIDAgcmdiKDcsIDE0OCwgMTkwKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLmxvYWRlciB7XFxyXFxuICBib3JkZXI6IDE2cHggc29saWQgI2YzZjNmMzsgLyogTGlnaHQgZ3JleSAqL1xcclxcbiAgYm9yZGVyLXRvcDogMTZweCBzb2xpZCAjMzQ5OGRiOyAvKiBCbHVlICovXFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICB3aWR0aDogMzBweDtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG4gIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgc3BpbiB7XFxyXFxuICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XFxyXFxuICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxcclxcbn1cXHJcXG5cXHJcXG4jbmV3LXRoZW1lLWJ0bntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbiNuZXctdGhlbWUtYnRue1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxyXFxuICAgIHBhZGRpbmc6IDEzcHggNTBweCAxM3B4O1xcclxcbiAgICBvdXRsaW5lOiAwO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gICNuZXctdGhlbWUtYnRuOjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlNTRjO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgei1pbmRleDogLTE7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB0b3A6IDdweDtcXHJcXG4gICAgbGVmdDogN3B4O1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAjbmV3LXRoZW1lLWJ0bjo6YWZ0ZXIge1xcclxcbiAgICB0b3A6IDBweDtcXHJcXG4gICAgbGVmdDogMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgI3Nob3ctcmVjeWNsZSB7XFxyXFxuICAgIHdpZHRoOiAyMjBweDtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMTExO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgei1pbmRleDogMDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNvcnQtYXp7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZTtcXHJcXG4gICAgd2lkdGg6IDEwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xcclxcbiAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY29sb3I6ICMzMzM7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMzMzM7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgfVxcclxcblxcclxcblxcclxcblxcclxcbiAgLmRlbGV0ZS1idXR0b257XFxyXFxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xcclxcbiAgICBwYWRkaW5nOjAuN2VtIDEuNGVtO1xcclxcbiAgICBtYXJnaW46MCAwLjNlbSAwLjNlbSAwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOjAuMTVlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcXHJcXG4gICAgZm9udC1mYW1pbHk6J1JvYm90bycsc2Fucy1zZXJpZjtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1xcclxcbiAgICBmb250LXdlaWdodDo0MDA7XFxyXFxuICAgIGNvbG9yOiNGRkZGRkY7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6I2NmMjAwODtcXHJcXG4gICAgYm94LXNoYWRvdzppbnNldCAwIC0wLjZlbSAwIC0wLjM1ZW0gcmdiYSgwLDAsMCwwLjE3KTtcXHJcXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5kZWxldGUtYnV0dG9uOmFjdGl2ZXtcXHJcXG4gICAgICAgIHRvcDowLjFlbTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIEBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6MzBlbSl7XFxyXFxuICAgICAgICDigIMuZGVsZXRlLWJ1dHRvbntcXHJcXG4gICAgICAgIGRpc3BsYXk6YmxvY2s7XFxyXFxuICAgICAgICBtYXJnaW46MC40ZW0gYXV0bztcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjdG8tZG8tc2VjdGlvbntcXHJcXG4gICAgICAgIGNvbG9yOiByZ2IoMzUsIDUsIDgzKTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTAsIDI1NiwgNTAsIDAuNik7XFxyXFxuICAgIH1cXHJcXG4gICAgI2luLXByb2dyZXNzLXNlY3Rpb257XFxyXFxuICAgICAgICBjb2xvcjogcmdiKDEwOSwgMiwgMik7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUwLCA1MCwgMjU2LCAwLjYpO1xcclxcbiAgICB9XFxyXFxuICAgICNkb25lLXNlY3Rpb257XFxyXFxuICAgICAgICBjb2xvcjogcmdiKDcwLCA4MiwgMyk7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NiwgNTAsIDUwLCAwLjYpO1xcclxcbiAgICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHRoaXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNbX2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgbW9kdWxlcy5sZW5ndGg7IF9pMisrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pMl0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQge1xuICB0b0RvVGFza3NVbCwgaW5Qcm9ncmVzc1Rhc2tzVWwsIGRvbmVUYXNrc1VsLCBsb2NhbFN0b3JhZ2VTYXZlXG59IGZyb20gJy4vbG9jYWxTdG9yYWdlJztcbmltcG9ydCB7XG4gIHRvRG9Db250YWluZXIsIGluUHJvZ3Jlc3NDb250YWluZXIsIGRvbmVDb250YWluZXIsIGxvYWRlclxufSBmcm9tICcuL2dsb2JhbCB2YXJpYWJsZXMgZm9yIGluZGV4JztcbmltcG9ydCBsaXN0Q291bnRlciBmcm9tICcuL2xpc3QgY291bnRlciBmb3IgaW5kZXgnO1xuaW1wb3J0IHsgZHJhZ0l0ZW0sIGVuZERyYWcgfSBmcm9tICcuL3Rhc2tzIGV2ZW50IGxpc3RlbmVycyc7XG4vKiBBcGkgRnVuY3Rpb25zICovXG5cbi8vIEFQSSBmdW5jdGlvbnNcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzYXZlQXBpICgpIHtcbiAgbG9hZGVyLmNsYXNzTGlzdC5hZGQoJ2xvYWRlcicpO1xuICBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9qc29uLWJpbnMuaGVyb2t1YXBwLmNvbS9iaW4vNjE0YWRiNmM0MDIxYWMwZTZjMDgwYzE1Jywge1xuICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICB9LFxuICAgIC8vIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsndGFza3MnOnsndG9kbyc6W10sICdpbi1wcm9ncmVzcyc6IFtdLCAnZG9uZScgOiBbXX0gLy8gcmVzZXRzIHRoZSBBUElcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHRhc2tzOiB7IHRvZG86IFt0b0RvVGFza3NVbFswXS5vdXRlckhUTUxdLCAnaW4tcHJvZ3Jlc3MnOiBbaW5Qcm9ncmVzc1Rhc2tzVWxbMF0ub3V0ZXJIVE1MXSwgZG9uZTogW2RvbmVUYXNrc1VsWzBdLm91dGVySFRNTF0gfSB9KVxuICB9KS50aGVuKChyZXNwb25zZSkgPT4geyBpZiAocmVzcG9uc2Uuc3RhdHVzID4gNDAwKSB7IGFsZXJ0KFwiaSdtIGEgdGVhcG90XCIpOyB9IH0pO1xuICBsb2FkZXIuY2xhc3NMaXN0LnJlbW92ZSgnbG9hZGVyJyk7XG59XG5cbi8vIGxvYWQgQVBJIGZ1bmN0aW9uXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEFwaSAoKSB7XG4gIGxvYWRlci5jbGFzc0xpc3QuYWRkKCdsb2FkZXInKTtcbiAgYXdhaXQgZmV0Y2goJ2h0dHBzOi8vanNvbi1iaW5zLmhlcm9rdWFwcC5jb20vYmluLzYxNGFkYjZjNDAyMWFjMGU2YzA4MGMxNScpLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICBsb2FkZXIuY2xhc3NMaXN0LnJlbW92ZSgnbG9hZGVyJyk7XG4gICAgICBjb25zdCB0b0RvVGFza3NVbEFQSSA9IGRhdGEudGFza3MudG9kb1swXTtcbiAgICAgIGNvbnN0IGluUHJvZ3Jlc3NUYXNrc1VsQVBJID0gZGF0YS50YXNrc1snaW4tcHJvZ3Jlc3MnXVswXTtcbiAgICAgIGNvbnN0IGRvbmVUYXNrc1VsQVBJID0gZGF0YS50YXNrcy5kb25lWzBdO1xuXG4gICAgICBmdW5jdGlvbiBsb2FkVGFza3NGcm9tQXBpICh0YXNrTGlzdCwgc2VjdGlvblByKSB7XG4gICAgICAgIGNvbnN0IHNlY3Rpb24gPSBzZWN0aW9uUHI7XG4gICAgICAgIGlmICh0YXNrTGlzdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgc2VjdGlvbi5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWN0aW9uLmlubmVySFRNTCA9IHRhc2tMaXN0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsb2FkVGFza3NGcm9tQXBpKHRvRG9UYXNrc1VsQVBJLCB0b0RvQ29udGFpbmVyKTtcbiAgICAgIGxvYWRUYXNrc0Zyb21BcGkoaW5Qcm9ncmVzc1Rhc2tzVWxBUEksIGluUHJvZ3Jlc3NDb250YWluZXIpO1xuICAgICAgbG9hZFRhc2tzRnJvbUFwaShkb25lVGFza3NVbEFQSSwgZG9uZUNvbnRhaW5lcik7XG5cbiAgICAgIHRvRG9UYXNrc1VsWzBdID0gdG9Eb0NvbnRhaW5lci5maXJzdENoaWxkO1xuICAgICAgaW5Qcm9ncmVzc1Rhc2tzVWxbMF0gPSBpblByb2dyZXNzQ29udGFpbmVyLmZpcnN0Q2hpbGQ7XG4gICAgICBkb25lVGFza3NVbFswXSA9IGRvbmVDb250YWluZXIuZmlyc3RDaGlsZDtcbiAgICAgIC8vIHNhdmluZyBjaGFuZ2VzIHRvIGxvY2FsIHN0b3JhZ2VcbiAgICAgIGxvY2FsU3RvcmFnZVNhdmUoKTtcbiAgICAgIGxpc3RDb3VudGVyKCk7XG5cbiAgICAgIC8vIHJlc2V0dGluZyB0aGUgaW5kaXZpZHVhbCBkYXJnTmRyb3AgZXZlbnRMaXN0ZW5lcnNcbiAgICAgIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2snKSkuZm9yRWFjaCgobGkpID0+IHtcbiAgICAgICAgbGkuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgZHJhZ0l0ZW0pO1xuICAgICAgICBsaS5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgZW5kRHJhZyk7XG4gICAgICB9KTtcbiAgICB9KTtcbn1cbiIsIi8vIGNyZWF0ZSBFbGVtZW50IGZ1bmN0aW9uXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50ICh0YWdOYW1lLCBjaGlsZHJlbiA9IFtdLCBjbGFzc2VzID0gW10sIGF0dHJpYnV0ZXMgPSB7fSkge1xuICBjb25zdCBuZXdFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG4gIGNoaWxkcmVuLmZvckVhY2goKGtpZCkgPT4ge1xuICAgIGxldCBjaGlsZCA9IGtpZDtcbiAgICBpZiAodHlwZW9mIChjaGlsZCkgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjaGlsZCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNoaWxkKTtcbiAgICB9XG4gICAgbmV3RWwuYXBwZW5kKGNoaWxkKTtcbiAgfSk7XG4gIGNsYXNzZXMuZm9yRWFjaCgoY2xzKSA9PiB7XG4gICAgbmV3RWwuY2xhc3NMaXN0LmFkZChjbHMpO1xuICB9KTtcbiAgT2JqZWN0LmVudHJpZXMoYXR0cmlidXRlcykuZm9yRWFjaCgoYXR0cikgPT4ge1xuICAgIG5ld0VsLnNldEF0dHJpYnV0ZShhdHRyWzBdLCBhdHRyWzFdKTtcbiAgfSk7XG4gIHJldHVybiBuZXdFbDtcbn1cbiIsIi8vIHNldHRpbmcgZ2xvYmFsIHZhcmlhYmxlcyBmb3IgdGhlIGRvY3VtZW50IGVsZW1lbnRzXG5leHBvcnQgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrcy1kaXYnKTtcbmV4cG9ydCBjb25zdCBzZWFyY2hCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoJyk7XG5leHBvcnQgY29uc3Qgc2F2ZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzYXZlLWJ1dHRvbicpO1xuZXhwb3J0IGNvbnN0IGxvYWRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9hZC1idXR0b24nKTtcbmV4cG9ydCBjb25zdCBzaG93UmVjeWNsZUJpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaG93LXJlY3ljbGUnKTtcbmV4cG9ydCBjb25zdCBsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXBpLWJ1dHRvbnMnKS5sYXN0RWxlbWVudENoaWxkO1xuZXhwb3J0IGNvbnN0IHJlY3ljbGVCaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVjeWNsZS1iaW4nKTtcbmV4cG9ydCBjb25zdCB0b0RvQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvLWRvLWNvbnRhaW5lcicpO1xuZXhwb3J0IGNvbnN0IGluUHJvZ3Jlc3NDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW4tcHJvZ3Jlc3MtY29udGFpbmVyJyk7XG5leHBvcnQgY29uc3QgZG9uZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkb25lLWNvbnRhaW5lcicpO1xuZXhwb3J0IGNvbnN0IHRhc2tFbnVtZXJhdG9yQXJyYXkgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Rhc2stZW51bWVyYXRvcicpKTtcbiIsImltcG9ydCB7IHRhc2tFbnVtZXJhdG9yQXJyYXkgfSBmcm9tICcuL2dsb2JhbCB2YXJpYWJsZXMgZm9yIGluZGV4Jztcbi8vIHRvdGFsIGxpc3QgaXRlbSBjb3VudGVyIGZ1bmN0aW9uXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsaXN0Q291bnRlciAoKSB7XG4gIHRhc2tFbnVtZXJhdG9yQXJyYXkuZm9yRWFjaCgodGFza0VudW1lcmF0b3IpID0+IHtcbiAgICBjb25zdCB0YXNrRW51bSA9IHRhc2tFbnVtZXJhdG9yO1xuICAgIGNvbnN0IGxpc3RvZkVudW1lcmF0b3IgPSB0YXNrRW51bS5wYXJlbnRFbGVtZW50Lmxhc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQuY2hpbGRyZW47XG4gICAgY29uc3QgdG90YWxUYXNrcyA9IEFycmF5LmZyb20obGlzdG9mRW51bWVyYXRvcikubGVuZ3RoO1xuICAgIHRhc2tFbnVtLnRleHRDb250ZW50ID0gYHRvdGFsOiAke3RvdGFsVGFza3N9YDtcbiAgfSk7XG59XG4iLCJpbXBvcnQge1xuICB0b0RvQ29udGFpbmVyLCBpblByb2dyZXNzQ29udGFpbmVyLCBkb25lQ29udGFpbmVyLCByZWN5Y2xlQmluXG59IGZyb20gJy4vZ2xvYmFsIHZhcmlhYmxlcyBmb3IgaW5kZXgnO1xuaW1wb3J0IGxpc3RDb3VudGVyIGZyb20gJy4vbGlzdCBjb3VudGVyIGZvciBpbmRleCc7XG5pbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tICcuL2NyZWF0ZSBlbGVtZW50IGZ1bmN0aW9uJztcbi8qIGxvY2FsIHN0b3JhZ2UgICovXG4vLyBpbml0aWxpemVzIHRoZSBsb2NhbCBzdG9yYWdlIG9iamVjdFxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRMb2NhbFN0b3JhZ2VBdEJlZ2lubmluZyAoKSB7XG4gIGlmICghbG9jYWxTdG9yYWdlLnRhc2tzIHx8IGxvY2FsU3RvcmFnZS50YXNrcy5sZW5ndGggPT09IDApIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh7XG4gICAgICB0b2RvOiBbXSxcbiAgICAgICdpbi1wcm9ncmVzcyc6IFtdLFxuICAgICAgZG9uZTogW10sXG4gICAgICBkZWxldGVkOiBbXVxuICAgIH0pKTtcbiAgfVxufVxuLy8gb2JqZWN0IGZvciBzYXZpbmcgdG8gbG9jYWwgc3RvcmFnZVxuZXhwb3J0IGNvbnN0IGxvY2FsU3RvcmFnZU9iamVjdEZvclVwZGF0ZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLnRhc2tzKTtcbi8vIGxvY2FsIHN0b3JhZ2Ugc2F2ZSBmdW5jdGlvblxuXG4vLyBsb2NhbCBzdG9yYWdlIGNsZWFyIGJ1dHRvbiBsaXNlbmVyXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlQWxsIChlKSB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBlO1xuICBpZiAodGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2RlbGV0ZS1idXR0b24nKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgdG9kbzogW10sXG4gICAgICAnaW4tcHJvZ3Jlc3MnOiBbXSxcbiAgICAgIGRvbmU6IFtdLFxuICAgICAgZGVsZXRlZDogW11cbiAgICB9KSk7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBkZWxldGVBbGw7XG5cbi8vIGxvY2Fsc3RvcmFnZSBsb2FkaW5nIGFmdGVyIHJlZnJlc2hcbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRUb0NvbnRhaW5lciAoY29udGFpbmVyUHIsIHVsKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGNvbnRhaW5lclByO1xuICBpZiAobG9jYWxTdG9yYWdlT2JqZWN0Rm9yVXBkYXRlW3VsXVswXSA9PSBudWxsKSB7XG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGN1cnJlbnRVbCA9IGxvY2FsU3RvcmFnZU9iamVjdEZvclVwZGF0ZVt1bF1bMF07XG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IGN1cnJlbnRVbDtcbiAgfVxufVxuLy8gaW5uZXIgbG9jYWwgc3RvcmFnZSBzYXZlXG5leHBvcnQgZnVuY3Rpb24gaW5uZXJMb2NhbFN0b3JhZ2VTYXZlIChsaXN0TmFtZSwgdWwpIHtcbiAgbG9jYWxTdG9yYWdlT2JqZWN0Rm9yVXBkYXRlW2xpc3ROYW1lXVswXSA9IHVsLm91dGVySFRNTDtcbn1cblxuLy8gbG9jYWxzdG9yYWdlIGxvYWRpbmcgYWZ0ZXIgcmVmcmVzaFxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZExvY2FsU3RvcmFnZVRvRG9tICgpIHtcbiAgaWYgKGxvY2FsU3RvcmFnZU9iamVjdEZvclVwZGF0ZS50b2RvWzBdICE9IG51bGwgfHwgbG9jYWxTdG9yYWdlT2JqZWN0Rm9yVXBkYXRlWydpbi1wcm9ncmVzcyddWzBdICE9IG51bGwgfHwgbG9jYWxTdG9yYWdlT2JqZWN0Rm9yVXBkYXRlLmRvbmVbMF0gIT0gbnVsbCB8fCBsb2NhbFN0b3JhZ2VPYmplY3RGb3JVcGRhdGUuZGVsZXRlZFswXSAhPSBudWxsKSB7XG4gICAgYXBwZW5kVG9Db250YWluZXIodG9Eb0NvbnRhaW5lciwgJ3RvZG8nKTtcbiAgICBhcHBlbmRUb0NvbnRhaW5lcihpblByb2dyZXNzQ29udGFpbmVyLCAnaW4tcHJvZ3Jlc3MnKTtcbiAgICBhcHBlbmRUb0NvbnRhaW5lcihkb25lQ29udGFpbmVyLCAnZG9uZScpO1xuICAgIGFwcGVuZFRvQ29udGFpbmVyKHJlY3ljbGVCaW4sICdkZWxldGVkJyk7XG4gICAgbGlzdENvdW50ZXIoKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB0b0RvVGFza3NVbGlubmVyID0gY3JlYXRlRWxlbWVudCgndWwnLCBbXSwgWyd0by1kby10YXNrcyddLCB7fSk7XG4gICAgY29uc3QgaW5Qcm9ncmVzc1Rhc2tzVWxpbm5lciA9IGNyZWF0ZUVsZW1lbnQoJ3VsJywgW10sIFsnaW4tcHJvZ3Jlc3MtdGFza3MnXSwge30pO1xuICAgIGNvbnN0IGRvbmVUYXNrc1VsaW5uZXIgPSBjcmVhdGVFbGVtZW50KCd1bCcsIFtdLCBbJ2RvbmUtdGFza3MnXSwge30pO1xuICAgIGNvbnN0IGRlbGV0ZWRUYXNrc1VsaW5uZXIgPSBjcmVhdGVFbGVtZW50KCd1bCcsIFtdLCBbJ3JlY3ljbGUtVWwnXSwge30pO1xuICAgIHRvRG9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9Eb1Rhc2tzVWxpbm5lcik7XG4gICAgaW5Qcm9ncmVzc0NvbnRhaW5lci5hcHBlbmRDaGlsZChpblByb2dyZXNzVGFza3NVbGlubmVyKTtcbiAgICBkb25lQ29udGFpbmVyLmFwcGVuZENoaWxkKGRvbmVUYXNrc1VsaW5uZXIpO1xuICAgIHJlY3ljbGVCaW4uYXBwZW5kQ2hpbGQoZGVsZXRlZFRhc2tzVWxpbm5lcik7XG4gICAgbGlzdENvdW50ZXIoKTtcbiAgfVxufVxuZXhwb3J0IGNvbnN0IHRvRG9UYXNrc1VsID0gW107XG5leHBvcnQgY29uc3QgaW5Qcm9ncmVzc1Rhc2tzVWwgPSBbXTtcbmV4cG9ydCBjb25zdCBkb25lVGFza3NVbCA9IFtdO1xuZXhwb3J0IGNvbnN0IGRlbGV0ZWRUYXNrc1VsID0gW107XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2NhbFN0b3JhZ2VTYXZlICgpIHtcbiAgaW5uZXJMb2NhbFN0b3JhZ2VTYXZlKCd0b2RvJywgLi4udG9Eb1Rhc2tzVWwpO1xuICBpbm5lckxvY2FsU3RvcmFnZVNhdmUoJ2luLXByb2dyZXNzJywgLi4uaW5Qcm9ncmVzc1Rhc2tzVWwpO1xuICBpbm5lckxvY2FsU3RvcmFnZVNhdmUoJ2RvbmUnLCAuLi5kb25lVGFza3NVbCk7XG4gIGlubmVyTG9jYWxTdG9yYWdlU2F2ZSgnZGVsZXRlZCcsIC4uLmRlbGV0ZWRUYXNrc1VsKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkobG9jYWxTdG9yYWdlT2JqZWN0Rm9yVXBkYXRlKSk7XG59XG4iLCJpbXBvcnQgeyBzZWFyY2hCYXIgfSBmcm9tICcuL2dsb2JhbCB2YXJpYWJsZXMgZm9yIGluZGV4Jztcbi8qIHNlYXJjaCBiYXIgKi9cblxuLy8gc2VhcmNoIGJhciBmdW5jdGlvbnNcbmV4cG9ydCBmdW5jdGlvbiBoaWRlVGFzayAodGFza3NMaXN0LCB2YWx1ZSkge1xuICB0YXNrc0xpc3QuZm9yRWFjaCgobGlQcikgPT4ge1xuICAgIGNvbnN0IGxpID0gbGlQcjtcbiAgICBsaS5oaWRkZW4gPSBmYWxzZTtcbiAgICBpZiAoIWxpLnRleHRDb250ZW50LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModmFsdWUudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgIGxpLmhpZGRlbiA9IHRydWU7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFRhc2sgKGUpIHtcbiAgY29uc3QgeyB2YWx1ZSB9ID0gZS50YXJnZXQ7XG4gIGNvbnN0IHRhc2tBcnJheSA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2xpJykpO1xuICBoaWRlVGFzayh0YXNrQXJyYXksIHZhbHVlKTtcbn1cblxuc2VhcmNoQmFyLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKCkgPT4ge1xuICBjb25zdCBwbGFjZWhvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGFjZWhvbGRlcicpO1xuICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGFjZWhvbGRlci1sYWJlbCcpO1xuICBwbGFjZWhvbGRlci5zdHlsZSA9ICd0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE1MCUpOyBjb2xvcjpibHVlOyBmb250LXNpemU6MTJweCc7XG4gIGxhYmVsLnN0eWxlID0gJ2JvcmRlci1ib3R0b206IHNvbGlkIDNweCBibHVlOyc7XG59KTtcbnNlYXJjaEJhci5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xuICBpZiAoc2VhcmNoQmFyLnZhbHVlID09PSAnJykge1xuICAgIGNvbnN0IHBsYWNlaG9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYWNlaG9sZGVyJyk7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxhY2Vob2xkZXItbGFiZWwnKTtcbiAgICBwbGFjZWhvbGRlci5zdHlsZSA9ICd0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpOyBjb2xvcjpibGFjazsgZm9udC1zaXplOjE2cHgnO1xuICAgIGxhYmVsLnN0eWxlID0gJ2JvcmRlci1ib3R0b206IHNvbGlkIDFweCBibGFjazsnO1xuICB9XG59KTtcbiIsImltcG9ydCB7IGxvY2FsU3RvcmFnZVNhdmUgfSBmcm9tICcuL2xvY2FsU3RvcmFnZSc7XG5pbXBvcnQgbGlzdENvdW50ZXIgZnJvbSAnLi9saXN0IGNvdW50ZXIgZm9yIGluZGV4JztcblxuLy8gZ2FpbmluZyBmb2N1cyBmdW5jdGlvblxuZXhwb3J0IGZ1bmN0aW9uIGdhaW5Gb2N1cyAoZSkge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZTtcbiAgaWYgKHRhcmdldC50YWdOYW1lID09PSAnTEknKSB7XG4gICAgdGFyZ2V0LnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgJ3RydWUnKTtcbiAgICB0YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYmEoNTAsNTAsMjAwLDAuNSknO1xuICB9XG59XG5cbi8vIGRyYWdJdGVtIGZ1bmN0aW9uXG5leHBvcnQgZnVuY3Rpb24gZHJhZ0l0ZW0gKGUpIHtcbiAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnZHJhZ2dpbmcnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrTGlzdEF0QWx0IChldmVudEtleSwgdGFyZ2V0LCBrZXlOdW0sIHVsVG9JbnNlcnQpIHtcbiAgaWYgKGV2ZW50S2V5LnRvU3RyaW5nKCkgPT09IGtleU51bS50b1N0cmluZygpKSB7XG4gICAgdWxUb0luc2VydC5pbnNlcnRCZWZvcmUodGFyZ2V0LCB1bFRvSW5zZXJ0LmZpcnN0Q2hpbGQpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmREcmFnIChlKSB7XG4gIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdnaW5nJyk7XG4gIGxvY2FsU3RvcmFnZVNhdmUoKTtcbiAgbGlzdENvdW50ZXIoKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0IHN0eWxlIGZyb20gJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQge1xuICBkZWxldGVBbGwsIGxvYWRMb2NhbFN0b3JhZ2VBdEJlZ2lubmluZywgbG9hZExvY2FsU3RvcmFnZVRvRG9tLCB0b0RvVGFza3NVbCwgaW5Qcm9ncmVzc1Rhc2tzVWwsXG4gIGRvbmVUYXNrc1VsLCBkZWxldGVkVGFza3NVbCwgbG9jYWxTdG9yYWdlU2F2ZVxufSBmcm9tICcuL2xvY2FsU3RvcmFnZSc7XG5pbXBvcnQge1xuICBnYWluRm9jdXMsIGRyYWdJdGVtLCBjaGVja0xpc3RBdEFsdCwgZW5kRHJhZ1xufSBmcm9tICcuL3Rhc2tzIGV2ZW50IGxpc3RlbmVycyc7XG5pbXBvcnQgeyBzZWFyY2hUYXNrIH0gZnJvbSAnLi9zZWFyY2hiYXIgZnVuY3Rpb25hbGl0eSc7XG5pbXBvcnQge1xuICB0YXNrRGl2LCBzZWFyY2hCYXIsIHNhdmVCdXR0b24sIGxvYWRCdXR0b24sIHNob3dSZWN5Y2xlQmluLFxuICByZWN5Y2xlQmluLCB0b0RvQ29udGFpbmVyLCBpblByb2dyZXNzQ29udGFpbmVyLCBkb25lQ29udGFpbmVyXG59IGZyb20gJy4vZ2xvYmFsIHZhcmlhYmxlcyBmb3IgaW5kZXgnO1xuaW1wb3J0IGxpc3RDb3VudGVyIGZyb20gJy4vbGlzdCBjb3VudGVyIGZvciBpbmRleCc7XG5pbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tICcuL2NyZWF0ZSBlbGVtZW50IGZ1bmN0aW9uJztcbmltcG9ydCB7IHNhdmVBcGksIGxvYWRBcGkgfSBmcm9tICcuL0FwaSBmdW5jdGlvbnMnO1xuLyogbG9jYWwgc3RvcmFnZSAgKi9cblxuLy8gaW5pdGlsaXplcyB0aGUgbG9jYWwgc3RvcmFnZSBvYmplY3RcbmxvYWRMb2NhbFN0b3JhZ2VBdEJlZ2lubmluZygpO1xuLy8gb2JqZWN0IGZvciBzYXZpbmcgdG8gbG9jYWwgc3RvcmFnZVxuXG4vKiBkb20gbWFuaXB1bGF0aW9uICovXG5cbi8vIHNldHRpbmcgZ2xvYmFsIHZhcmlhYmxlcyBmb3IgdGhlIGRvY3VtZW50IGVsZW1lbnRzXG5cbi8vIGxvY2Fsc3RvcmFnZSBsb2FkaW5nIGFmdGVyIHJlZnJlc2hcbmxvYWRMb2NhbFN0b3JhZ2VUb0RvbSgpO1xuLy8gc2V0cyB0aGUgbGlzdHMgb2JqZWN0cyBmb3IgdXBkYXRpbmdcbnRvRG9UYXNrc1VsWzBdID0gdG9Eb0NvbnRhaW5lci5maXJzdENoaWxkO1xuaW5Qcm9ncmVzc1Rhc2tzVWxbMF0gPSBpblByb2dyZXNzQ29udGFpbmVyLmZpcnN0Q2hpbGQ7XG5kb25lVGFza3NVbFswXSA9IGRvbmVDb250YWluZXIuZmlyc3RDaGlsZDtcbmRlbGV0ZWRUYXNrc1VsWzBdID0gcmVjeWNsZUJpbi5maXJzdENoaWxkO1xuXG4vKiogZXZlbnQgbGlzdGVuZXJzKiovXG5cbi8qIHRhc2tzICovXG5cbi8vIGRvdWJsZSBjbGljayBmdW5jdGlvbmFsaXR5XG5cbi8vIGdhaW5pbmcgZm9jdXMgZnVuY3Rpb25cblxuLy8gZ2V0dGluZyBvdXQgb2YgZm9jdXMgYWZ0ZXIgYmx1clxuZnVuY3Rpb24gc2F2ZVZhbHVlQmx1ciAoZSkge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZTtcbiAgaWYgKHRhcmdldC50YWdOYW1lICE9PSAnTEknKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRhcmdldC5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsICdmYWxzZScpO1xuICB0YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYmEoMCwwLDAsMCknO1xuICBsb2NhbFN0b3JhZ2VTYXZlKCk7XG4gIGxpc3RDb3VudGVyKCk7XG59XG4vL1xuXG4vLyBob3ZlciArIGFsdCArIDEvMi8zIGZ1bmN0aW9uYWxpdHlcblxuZnVuY3Rpb24gaG92ZXJSZXBsYWNlIChlKSB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBlO1xuICBmdW5jdGlvbiBpbm5lcktleVJlcGxhY2UgKGV2KSB7XG4gICAgaWYgKGV2LmFsdEtleSkge1xuICAgICAgY2hlY2tMaXN0QXRBbHQoZXYua2V5LCB0YXJnZXQsIDEsIHRvRG9UYXNrc1VsWzBdKTtcbiAgICAgIGNoZWNrTGlzdEF0QWx0KGV2LmtleSwgdGFyZ2V0LCAyLCBpblByb2dyZXNzVGFza3NVbFswXSk7XG4gICAgICBjaGVja0xpc3RBdEFsdChldi5rZXksIHRhcmdldCwgMywgZG9uZVRhc2tzVWxbMF0pO1xuICAgIH1cbiAgICAvLyBsb2NhbCBzdG9yYWdlIGluc2VydGlvblxuICAgIGxvY2FsU3RvcmFnZVNhdmUoKTtcbiAgICBsaXN0Q291bnRlcigpO1xuICB9XG4gIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaW5uZXJLZXlSZXBsYWNlKTtcbiAgfSk7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaW5uZXJLZXlSZXBsYWNlKTtcbn1cbi8vIGFkZCBhZGRIb3ZlclJlcGxhY2VcbmZ1bmN0aW9uIGFkZEhvdmVyUmVwbGFjZSAoZSkge1xuICBpZiAoZS50YXJnZXQudGFnTmFtZSAhPT0gJ0xJJykge1xuICAgIHJldHVybjtcbiAgfVxuICBlLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgaG92ZXJSZXBsYWNlKTtcbn1cblxuLy8gZHJhZ0l0ZW0gZnVuY3Rpb25cblxuLy8gZnVuY3Rpb24gZW5kRHJhZyAoZSkge1xuLy8gICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZ2luZycpO1xuLy8gICBsb2NhbFN0b3JhZ2VTYXZlKCk7XG4vLyAgIGxpc3RDb3VudGVyKCk7XG4vLyB9XG4vLyBhZGRpbmcgZXZlbnQgbGlzdGVuZXJzIGZvciBkcmFnTmRyb3BcbkFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2snKSkuZm9yRWFjaCgobGkpID0+IHtcbiAgbGkuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgZHJhZ0l0ZW0pO1xuICBsaS5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgZW5kRHJhZyk7XG59KTtcblxuLy8gYWRkaW5nIHRoZSBkcm9wIGV2ZW50IHRvIHRoZSBzZWN0aW9uc1xuY29uc3Qgc2VjdGlvbnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlY3Rpb24nKSk7XG5zZWN0aW9ucy5mb3JFYWNoKChzZWN0aW9uKSA9PiB7XG4gIHNlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCAoZSkgPT4ge1xuICAgIGNvbnN0IGFmdGVyRWxlbWVudCA9IGVsZW1lbnRBZnRlckRyYWdnaW5nKHNlY3Rpb24sIGUuY2xpZW50WSk7XG4gICAgaWYgKGFmdGVyRWxlbWVudCA9PSBudWxsKSB7XG4gICAgICBzZWN0aW9uLmxhc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyYWdnaW5nJykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWN0aW9uLmxhc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQuaW5zZXJ0QmVmb3JlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcmFnZ2luZycpLCBhZnRlckVsZW1lbnQpO1xuICAgIH1cbiAgfSk7XG59KTtcbi8vIGNvbnRyb2xzIHdoYXQgbGkgdG8gc3dpdGNoXG5mdW5jdGlvbiBlbGVtZW50QWZ0ZXJEcmFnZ2luZyAoY29udGFpbmVyLCB5KSB7XG4gIGNvbnN0IGRyYWdnYWJsZUVsZW1lbnRzID0gWy4uLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdbZHJhZ2dhYmxlID0gdHJ1ZV06bm90KC5kcmFnZ2luZyknKV07XG4gIHJldHVybiBkcmFnZ2FibGVFbGVtZW50cy5yZWR1Y2UoKGNsb3Nlc3QsIGNoaWxkKSA9PiB7XG4gICAgY29uc3QgYm94ID0gY2hpbGQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3Qgb2Zmc2V0ID0geSAtIGJveC50b3AgLSBib3guaGVpZ2h0IC8gMjtcbiAgICBpZiAob2Zmc2V0IDwgMCAmJiBvZmZzZXQgPiBjbG9zZXN0Lm9mZnNldCkge1xuICAgICAgcmV0dXJuIHsgb2Zmc2V0LCBlbGVtZW50OiBjaGlsZCB9O1xuICAgIH1cbiAgICByZXR1cm4gY2xvc2VzdDtcbiAgfSwgeyBvZmZzZXQ6IE51bWJlci5ORUdBVElWRV9JTkZJTklUWSB9KS5lbGVtZW50O1xufVxuXG4vKiBsaXN0cyAqL1xuXG4vLyBhZGRpbmcgZXZlbnQgbGlzdGVuZXJzIHRvIHRoZSBib2R5XG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGFkZEhvdmVyUmVwbGFjZSk7XG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2RibGNsaWNrJywgZ2FpbkZvY3VzKTtcbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCBzYXZlVmFsdWVCbHVyKTtcbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY29udGV4dG1lbnUnLCByZW1vdmVMaSk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNvcnRBeik7XG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlQWxsKTtcblxuLy8gdG90YWwgbGlzdCBpdGVtIGNvdW50ZXIgZnVuY3Rpb25cblxuLy8gYWRkaW5nIGEgbGlzdCBpdGVtIGZ1bmN0aW9uYWxpdHlcblxuLy8gaW5uZXIgYWRkIHRhc2sgZnVuY3Rpb25cbmZ1bmN0aW9uIGlubmVyQWRkVGFza1RvdWwgKHRhcmdldFByKSB7XG4gIGNvbnN0IHRhcmdldCA9IHRhcmdldFByO1xuICBjb25zdCBuZXdUYXNrID0gY3JlYXRlRWxlbWVudCgnbGknLCBbYCR7dGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmcudmFsdWV9YF0sIFsndGFzayddLCB7IGRyYWdnYWJsZTogJ3RydWUnIH0pO1xuICBjb25zdCBpbnNldGVyID0gdGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5maXJzdENoaWxkLmZpcnN0Q2hpbGQ7XG4gIHRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuZmlyc3RDaGlsZC5pbnNlcnRCZWZvcmUobmV3VGFzaywgaW5zZXRlcik7XG4gIC8vIGxvY2FsIHN0b3JhZ2UgaW5zZXJ0aW9uXG4gIGxvY2FsU3RvcmFnZVNhdmUoKTtcbiAgLy8gaW5kaXZpZHVhbCBldmVudExpc3RlbmVycyBmb3IgZHJhZyBhbmQgRHJvcFxuICBuZXdUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIGRyYWdJdGVtKTtcbiAgbmV3VGFzay5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgZW5kRHJhZyk7XG4gIHRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnZhbHVlID0gJyc7XG4gIGxpc3RDb3VudGVyKCk7XG59XG4vLyBhZGQgdGFzayBmdW5jdGlvblxuZnVuY3Rpb24gYWRkVGFzayAoZSkge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZTtcbiAgaWYgKHRhcmdldC5jbGFzc05hbWUgPT09ICdhZGQtdGFzaycpIHtcbiAgICBjb25zdCBpbnB1dFRleHQgPSB0YXJnZXQucHJldmlvdXNFbGVtZW50U2libGluZy52YWx1ZTtcbiAgICBpZiAoaW5wdXRUZXh0ID09PSAnJykge1xuICAgICAgYWxlcnQoXCJZb3UgaGF2ZW4ndCBlbnRlcmVkIGFueSB0ZXh0XCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbm5lckFkZFRhc2tUb3VsKHRhcmdldCk7XG4gICAgfVxuICB9XG59XG50YXNrRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkVGFzayk7XG4vKlxuLy8gY3JlYXRlIEVsZW1lbnQgZnVuY3Rpb25cblxuLyogc2VhcmNoIGJhciAqL1xuXG4vLyBzZWFyY2ggYmFyIGZ1bmN0aW9uc1xuXG4vLyBzZWFyY2ggYmFyIGFuaW1hdGlvbnNcbi8vXG5zZWFyY2hCYXIuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBzZWFyY2hUYXNrKTtcblxuLy8gZ2FtZSB0cmlnZ2VyIGV2ZW50XG5sZXQgYXNDb3VudGVyID0gMDtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICBpZiAoZS5rZXkgPT09ICdhJykge1xuICAgIGFzQ291bnRlciArPSAxO1xuICAgIGlmIChhc0NvdW50ZXIgPT09IDEwMCkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnLi9odG1sZ2FtZS5odG1sJztcbiAgICB9XG4gIH1cbn0pO1xuXG4vLyBjaGFuZ2UgdGhlbWUgZXZlbnRcbmNvbnN0IHRoZW1lQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy10aGVtZS1idG4nKTtcbmNvbnN0IGNzc0xpbmsgPSBkb2N1bWVudC5oZWFkLnF1ZXJ5U2VsZWN0b3IoJ2xpbmsnKTtcbnRoZW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgaWYgKGNzc0xpbmsuaHJlZiA9PT0gJ2h0dHA6Ly8xMjcuMC4wLjE6NTUwMC9zb2x1dGlvbi9zdHlsZXMuY3NzJyB8fCBjc3NMaW5rLmhyZWYgPT09ICcuL3N0eWxlcy5jc3MnKSB7XG4gICAgY3NzTGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnLi9jc3NGb3JuZXdUaGVtZS5jc3MnKTtcbiAgfSBlbHNlIHtcbiAgICBjc3NMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsICcuL3N0eWxlcy5jc3MnKTtcbiAgfVxufSk7XG5cbi8vIHJpZ2h0IGNsaWNrIGZvciBlcmFzaW5nIGxpIGZ1bmN0aW9uXG5mdW5jdGlvbiByZW1vdmVMaSAoZSkge1xuICBpZiAoZS50YXJnZXQudGFnTmFtZSA9PT0gJ0xJJykge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBkZWxldGVkVGFza3NVbFswXS5hcHBlbmRDaGlsZChlLnRhcmdldCk7XG4gICAgbG9jYWxTdG9yYWdlU2F2ZSgpO1xuICAgIGxpc3RDb3VudGVyKCk7XG4gIH1cbn1cbi8vIHJlY3ljbGUgYmluIGJ1dHRvbiBldmVudCBsaXN0ZW5lclxuc2hvd1JlY3ljbGVCaW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICByZWN5Y2xlQmluLmhpZGRlbiA9ICFyZWN5Y2xlQmluLmhpZGRlbjtcbn0pO1xuXG4vLyBzb3J0IExJIGFscGhhYmV0aWNhbGx5XG5sZXQgYXpDb3VudGVyID0gMTtcblxuZnVuY3Rpb24gc29ydEF6VXAgKHRhcmdldCkge1xuICBBcnJheS5mcm9tKHRhcmdldC5wYXJlbnRFbGVtZW50Lmxhc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQuY2hpbGRyZW4pLnNvcnQoKGEsIGIpID0+IHtcbiAgICBpZiAoYS50ZXh0Q29udGVudCA+IGIudGV4dENvbnRlbnQpIHtcbiAgICAgIHRhcmdldC5wYXJlbnRFbGVtZW50Lmxhc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQuaW5zZXJ0QmVmb3JlKGEsIGIpO1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIGlmIChiLnRleHRDb250ZW50IDwgYS50ZXh0Q29udGVudCkge1xuICAgICAgdGFyZ2V0LnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3IoYiwgYSk7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIHRhcmdldC5wYXJlbnRFbGVtZW50Lmxhc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQuaW5zZXJ0QmVmb3JlKGEsIGIpO1xuICAgIHJldHVybiAwO1xuICB9KTtcbn1cbmZ1bmN0aW9uIHNvcnRBekRvd24gKHRhcmdldCkge1xuICBBcnJheS5mcm9tKHRhcmdldC5wYXJlbnRFbGVtZW50Lmxhc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQuY2hpbGRyZW4pLnNvcnQoKGEsIGIpID0+IHtcbiAgICBpZiAoYS50ZXh0Q29udGVudCA8IGIudGV4dENvbnRlbnQpIHtcbiAgICAgIHRhcmdldC5wYXJlbnRFbGVtZW50Lmxhc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQuaW5zZXJ0QmVmb3JlKGEsIGIpO1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIGlmIChiLnRleHRDb250ZW50ID4gYS50ZXh0Q29udGVudCkge1xuICAgICAgdGFyZ2V0LnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3IoYiwgYSk7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIHRhcmdldC5wYXJlbnRFbGVtZW50Lmxhc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQuaW5zZXJ0QmVmb3JlKGEsIGIpO1xuICAgIHJldHVybiAwO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gaW5uZXJTb3J0QXogKGNvdW50ZXIsIHRhcmdldCkge1xuICBpZiAoY291bnRlciAlIDIgPT09IDApIHtcbiAgICBzb3J0QXpVcCh0YXJnZXQpO1xuICB9IGVsc2Uge1xuICAgIHNvcnRBekRvd24odGFyZ2V0KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzb3J0QXogKGUpIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGU7XG4gIGlmICh0YXJnZXQuY2xhc3NOYW1lICE9PSAnc29ydC1heicpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaW5uZXJTb3J0QXooYXpDb3VudGVyLCB0YXJnZXQpO1xuICBhekNvdW50ZXIgKz0gMTtcbn1cblxuLy8gYWRkaW5nIHRoZSBldmVudCBsaXN0ZW5lcnMgdG8gdGhlIGxvYWQgYW5kIHNhdmUgYnV0dG9uc1xuc2F2ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNhdmVBcGkpO1xubG9hZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRBcGkpO1xuLy9cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==