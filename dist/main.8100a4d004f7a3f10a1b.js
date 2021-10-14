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
  // eslint-disable-next-line no-alert
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
/* harmony export */   "endDrag": () => (/* binding */ endDrag),
/* harmony export */   "saveValueBlur": () => (/* binding */ saveValueBlur),
/* harmony export */   "addHoverReplace": () => (/* binding */ addHoverReplace)
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

function saveValueBlur (e) {
  const { target } = e;
  if (target.tagName !== 'LI') {
    return;
  }
  target.setAttribute('contenteditable', 'false');
  target.style.backgroundColor = 'rgba(0,0,0,0)';
  (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.localStorageSave)();
  (0,_list_counter_for_index__WEBPACK_IMPORTED_MODULE_1__["default"])();
}

function hoverReplace (e) {
  const { target } = e;
  function innerKeyReplace (ev) {
    if (ev.altKey) {
      checkListAtAlt(ev.key, target, 1, _localStorage__WEBPACK_IMPORTED_MODULE_0__.toDoTasksUl[0]);
      checkListAtAlt(ev.key, target, 2, _localStorage__WEBPACK_IMPORTED_MODULE_0__.inProgressTasksUl[0]);
      checkListAtAlt(ev.key, target, 3, _localStorage__WEBPACK_IMPORTED_MODULE_0__.doneTasksUl[0]);
    }
    // local storage insertion
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.localStorageSave)();
    (0,_list_counter_for_index__WEBPACK_IMPORTED_MODULE_1__["default"])();
  }
  target.addEventListener('mouseleave', () => {
    window.removeEventListener('keydown', innerKeyReplace);
  });
  window.addEventListener('keydown', innerKeyReplace);
}

function addHoverReplace (e) {
  if (e.target.tagName !== 'LI') {
    return;
  }
  e.target.addEventListener('mouseenter', hoverReplace);
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

// hover + alt + 1/2/3 functionality

// add addHoverReplace
// function addHoverReplace (e) {
//   if (e.target.tagName !== 'LI') {
//     return;
//   }
//   e.target.addEventListener('mouseenter', hoverReplace);
// }

// dragItem function

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
document.body.addEventListener('mouseover', _tasks_event_listeners__WEBPACK_IMPORTED_MODULE_2__.addHoverReplace);
document.body.addEventListener('dblclick', _tasks_event_listeners__WEBPACK_IMPORTED_MODULE_2__.gainFocus);
document.body.addEventListener('focusout', _tasks_event_listeners__WEBPACK_IMPORTED_MODULE_2__.saveValueBlur);
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
      // eslint-disable-next-line no-alert
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTZCLGtDQUFrQyxxREFBcUQsU0FBUyxzQkFBc0Isa0NBQWtDLHFEQUFxRCxTQUFTLE9BQU8sc0ZBQXNGLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksU0FBUyxLQUFLLHNCQUFzQix1QkFBdUIsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssc0JBQXNCLHVCQUF1QixPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxTQUFTLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxTQUFTLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsS0FBSyxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEscUhBQXFILGFBQWEsZ0RBQWdELDZEQUE2RCxnQ0FBZ0MsS0FBSywrQkFBK0IsbUJBQW1CLG9CQUFvQixLQUFLLHFDQUFxQyxnQ0FBZ0MsS0FBSyxxQ0FBcUMsK0JBQStCLEtBQUssV0FBVywyQkFBMkIsS0FBSyxPQUFPLHlCQUF5QixvQkFBb0IsNkJBQTZCLGtDQUFrQyw4QkFBOEIsS0FBSyxPQUFPLHlCQUF5QiwyQkFBMkIscUJBQXFCLHFCQUFxQix3QkFBd0IsdUJBQXVCLHdCQUF3QixnQ0FBZ0MsMEJBQTBCLEtBQUssYUFBYSxtREFBbUQsMEJBQTBCLHlCQUF5QixLQUFLLE9BQU8sMkJBQTJCLEtBQUssaUJBQWlCLHFCQUFxQiw0QkFBNEIsS0FBSyxZQUFZLHNCQUFzQixnQ0FBZ0MsMEJBQTBCLDJCQUEyQiw0QkFBNEIsS0FBSyxrQkFBa0Isc0JBQXNCLGdDQUFnQyxLQUFLLGdDQUFnQyxxQkFBcUIsc0JBQXNCLDBCQUEwQixxQkFBcUIsS0FBSyw0QkFBNEIscUJBQXFCLHlCQUF5QixLQUFLLHlCQUF5QixzQkFBc0IsS0FBSyxjQUFjLHFCQUFxQixLQUFLLGNBQWMscUJBQXFCLHlCQUF5QiwyQ0FBMkMsb0JBQW9CLHFCQUFxQiwyQkFBMkIsc0JBQXNCLGlCQUFpQixLQUFLLG9CQUFvQiwwQkFBMEIsMkJBQTJCLDJCQUEyQixxQkFBcUIscUJBQXFCLEtBQUssWUFBWSx3QkFBd0Isb0JBQW9CLHFCQUFxQixnQ0FBZ0MsS0FBSyxzQkFBc0Isc0JBQXNCLDJCQUEyQixrQkFBa0Isb0JBQW9CLHFCQUFxQixvQkFBb0IsNkJBQTZCLHVDQUF1QyxrQ0FBa0MsS0FBSyxxQkFBcUIsMkJBQTJCLG9CQUFvQixpQkFBaUIsa0NBQWtDLEtBQUssOEJBQThCLG1CQUFtQixvQkFBb0Isb0JBQW9CLDhCQUE4QiwwQkFBMEIsaUNBQWlDLHFCQUFxQix3Q0FBd0MsS0FBSywwQkFBMEIsNENBQTRDLEtBQUssa0JBQWtCLG9CQUFvQixxQkFBcUIscUJBQXFCLDBDQUEwQywyQkFBMkIsa0NBQWtDLHNCQUFzQix5Q0FBeUMsS0FBSyx3QkFBd0Isc0RBQXNELEtBQUsseUJBQXlCLGtDQUFrQyxzREFBc0QsbUNBQW1DLGtCQUFrQixtQkFBbUIseUNBQXlDLEtBQUsseUJBQXlCLFdBQVcsMEJBQTBCLGFBQWEsNEJBQTRCLEtBQUssdUJBQXVCLHNCQUFzQiw2QkFBNkIsMEJBQTBCLDJCQUEyQixLQUFLLCtCQUErQix3QkFBd0IseUJBQXlCLDRCQUE0QixnQ0FBZ0MsbUJBQW1CLGdDQUFnQyx3QkFBd0IsMkJBQTJCLDJDQUEyQyxPQUFPLG1DQUFtQyxzQkFBc0Isa0NBQWtDLG9CQUFvQixvQkFBb0IsMkJBQTJCLHFCQUFxQixpQkFBaUIsa0JBQWtCLHlCQUF5QixPQUFPLG1DQUFtQyxpQkFBaUIsa0JBQWtCLE9BQU8seUJBQXlCLHFCQUFxQixxQkFBcUIscUJBQXFCLHNCQUFzQixvQkFBb0IseUJBQXlCLHdCQUF3QiwyQkFBMkIsbUJBQW1CLDRCQUE0QixLQUFLLGlCQUFpQix3QkFBd0IscUJBQXFCLHFCQUFxQiwwQkFBMEIsd0JBQXdCLDhCQUE4QixvQkFBb0IsK0JBQStCLDRCQUE0QiwyQkFBMkIsMkJBQTJCLE9BQU8saUNBQWlDLDZCQUE2Qiw0QkFBNEIsK0JBQStCLDZCQUE2Qix3QkFBd0IsK0JBQStCLDZCQUE2Qix3Q0FBd0MsaUNBQWlDLHdCQUF3QixzQkFBc0IsaUNBQWlDLDZEQUE2RCwwQkFBMEIsMEJBQTBCLFNBQVMsa0NBQWtDLHNCQUFzQixhQUFhLDRDQUE0Qyw0QkFBNEIsMEJBQTBCLDhCQUE4QixhQUFhLFNBQVMsMkJBQTJCLGtDQUFrQyxxREFBcUQsU0FBUyw2QkFBNkIsa0NBQWtDLHFEQUFxRCxTQUFTLHNCQUFzQixrQ0FBa0MscURBQXFELFNBQVMsbUJBQW1CO0FBQzkvYjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1gxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLHFGQUFxRjtBQUNyRjs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHVCQUF1QixrQkFBa0I7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0Isc0JBQXNCO0FBQzVDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3JHYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0RBQW9EOztBQUVwRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUM1QmE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFvRztBQUNwRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHVGQUFPOzs7O0FBSThDO0FBQ3RFLE9BQU8saUVBQWUsdUZBQU8sSUFBSSw4RkFBYyxHQUFHLDhGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2J3QjtBQUdjO0FBQ2E7QUFDUztBQUM1RDs7QUFFQTtBQUNPO0FBQ1AsRUFBRSw2RUFBb0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsNkJBQTZCLFNBQVMsMkNBQTJDO0FBQ2pGLDJCQUEyQixTQUFTLE9BQU8sbUVBQXdCLG1CQUFtQix5RUFBOEIsVUFBVSxtRUFBd0IsS0FBSztBQUMzSjtBQUNBLEdBQUcsdUJBQXVCLDZCQUE2QiwwQkFBMEI7QUFDakYsRUFBRSxnRkFBdUI7QUFDekI7O0FBRUE7QUFDTztBQUNQLEVBQUUsNkVBQW9CO0FBQ3RCO0FBQ0E7QUFDQSxNQUFNLGdGQUF1QjtBQUM3QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLHNFQUFhO0FBQ3BELDZDQUE2Qyw0RUFBbUI7QUFDaEUsdUNBQXVDLHNFQUFhOztBQUVwRCxNQUFNLHlEQUFjLEdBQUcsaUZBQXdCO0FBQy9DLE1BQU0sK0RBQW9CLEdBQUcsdUZBQThCO0FBQzNELE1BQU0seURBQWMsR0FBRyxpRkFBd0I7QUFDL0M7QUFDQSxNQUFNLCtEQUFnQjtBQUN0QixNQUFNLG1FQUFXOztBQUVqQjtBQUNBO0FBQ0EseUNBQXlDLDREQUFRO0FBQ2pELHVDQUF1QywyREFBTztBQUM5QyxPQUFPO0FBQ1AsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7QUM1REE7QUFDZSw2RUFBNkU7QUFDNUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFDTztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDWDREO0FBQ25FO0FBQ2U7QUFDZixFQUFFLG9GQUEyQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsV0FBVztBQUNoRCxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHNDO0FBQ2E7QUFDRztBQUN0RDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ087QUFDUDs7QUFFQTtBQUNPO0FBQ1AsVUFBVSxTQUFTO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxTQUFTLEVBQUM7O0FBRXpCO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFTztBQUNQO0FBQ0Esc0JBQXNCLHNFQUFhO0FBQ25DLHNCQUFzQiw0RUFBbUI7QUFDekMsc0JBQXNCLHNFQUFhO0FBQ25DLHNCQUFzQixtRUFBVTtBQUNoQyxJQUFJLG1FQUFXO0FBQ2YsSUFBSTtBQUNKLDZCQUE2QixvRUFBYSw4QkFBOEI7QUFDeEUsbUNBQW1DLG9FQUFhLG9DQUFvQztBQUNwRiw2QkFBNkIsb0VBQWEsNkJBQTZCO0FBQ3ZFLGdDQUFnQyxvRUFBYSw2QkFBNkI7QUFDMUUsSUFBSSxrRkFBeUI7QUFDN0IsSUFBSSx3RkFBK0I7QUFDbkMsSUFBSSxrRkFBeUI7QUFDN0IsSUFBSSwrRUFBc0I7QUFDMUIsSUFBSSxtRUFBVztBQUNmO0FBQ0E7QUFDTztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRnlEO0FBQ3pEOztBQUVBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRU87QUFDUCxVQUFVLFFBQVE7QUFDbEI7QUFDQTtBQUNBOztBQUVBLG1GQUEwQjtBQUMxQjtBQUNBO0FBQ0EscURBQXFELFlBQVk7QUFDakUsK0NBQStDO0FBQy9DLENBQUM7QUFDRCxtRkFBMEI7QUFDMUIsTUFBTSx3RUFBZTtBQUNyQjtBQUNBO0FBQ0Esb0RBQW9ELGFBQWE7QUFDakUsa0RBQWtEO0FBQ2xEO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CdUI7QUFDMkI7O0FBRW5EO0FBQ087QUFDUCxVQUFVLFNBQVM7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQSxFQUFFLCtEQUFnQjtBQUNsQixFQUFFLG1FQUFXO0FBQ2I7O0FBRU87QUFDUCxVQUFVLFNBQVM7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0RBQWdCO0FBQ2xCLEVBQUUsbUVBQVc7QUFDYjs7QUFFQTtBQUNBLFVBQVUsU0FBUztBQUNuQjtBQUNBO0FBQ0Esd0NBQXdDLHlEQUFjO0FBQ3RELHdDQUF3QywrREFBb0I7QUFDNUQsd0NBQXdDLHlEQUFjO0FBQ3REO0FBQ0E7QUFDQSxJQUFJLCtEQUFnQjtBQUNwQixJQUFJLG1FQUFXO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2pFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCaUM7QUFJVDtBQUdTO0FBQ3NCO0FBSWpCO0FBQ2E7QUFDRztBQUNIO0FBQ25EOztBQUVBO0FBQ0EsMEVBQTJCO0FBQzNCOztBQUVBOztBQUVBOztBQUVBO0FBQ0Esb0VBQXFCO0FBQ3JCO0FBQ0EseURBQWMsR0FBRyxpRkFBd0I7QUFDekMsK0RBQW9CLEdBQUcsdUZBQThCO0FBQ3JELHlEQUFjLEdBQUcsaUZBQXdCO0FBQ3pDLDREQUFpQixHQUFHLDhFQUFxQjs7QUFFekM7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLG1DQUFtQyw0REFBUTtBQUMzQyxpQ0FBaUMsMkRBQU87QUFDeEMsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsR0FBRyxJQUFJLGtDQUFrQztBQUN6Qzs7QUFFQTs7QUFFQTtBQUNBLDRDQUE0QyxtRUFBZTtBQUMzRCwyQ0FBMkMsNkRBQVM7QUFDcEQsMkNBQTJDLGlFQUFhO0FBQ3hEO0FBQ0E7QUFDQSx3Q0FBd0Msb0RBQVM7O0FBRWpEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixvRUFBYSxXQUFXLG9DQUFvQyxnQkFBZ0IsbUJBQW1CO0FBQ2pIO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0RBQWdCO0FBQ2xCO0FBQ0Esd0NBQXdDLDREQUFRO0FBQ2hELHNDQUFzQywyREFBTztBQUM3QztBQUNBLEVBQUUsbUVBQVc7QUFDYjtBQUNBO0FBQ0E7QUFDQSxVQUFVLFNBQVM7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlGQUF3QjtBQUN4QjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxtRkFBMEIsVUFBVSxnRUFBVTs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHdFQUE2QjtBQUNqQyxJQUFJLCtEQUFnQjtBQUNwQixJQUFJLG1FQUFXO0FBQ2Y7QUFDQTtBQUNBO0FBQ0Esd0ZBQStCO0FBQy9CLEVBQUUsMEVBQWlCLElBQUksMEVBQWlCO0FBQ3hDLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVUsU0FBUztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvRkFBMkIsVUFBVSxtREFBTztBQUM1QyxvRkFBMkIsVUFBVSxtREFBTztBQUM1QyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZpbmFsLy4vc29sdXRpb24vc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9maW5hbC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZmluYWwvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2ZpbmFsLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZmluYWwvLi9zb2x1dGlvbi9zdHlsZXMuY3NzPzU5Y2YiLCJ3ZWJwYWNrOi8vZmluYWwvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZmluYWwvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2ZpbmFsLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2ZpbmFsLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2ZpbmFsLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZmluYWwvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9maW5hbC8uL3NvbHV0aW9uL0FwaSBmdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vZmluYWwvLi9zb2x1dGlvbi9jcmVhdGUgZWxlbWVudCBmdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly9maW5hbC8uL3NvbHV0aW9uL2dsb2JhbCB2YXJpYWJsZXMgZm9yIGluZGV4LmpzIiwid2VicGFjazovL2ZpbmFsLy4vc29sdXRpb24vbGlzdCBjb3VudGVyIGZvciBpbmRleC5qcyIsIndlYnBhY2s6Ly9maW5hbC8uL3NvbHV0aW9uL2xvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9maW5hbC8uL3NvbHV0aW9uL3NlYXJjaGJhciBmdW5jdGlvbmFsaXR5LmpzIiwid2VicGFjazovL2ZpbmFsLy4vc29sdXRpb24vdGFza3MgZXZlbnQgbGlzdGVuZXJzLmpzIiwid2VicGFjazovL2ZpbmFsL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2ZpbmFsL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2ZpbmFsL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9maW5hbC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2ZpbmFsL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZmluYWwvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9maW5hbC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9maW5hbC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9maW5hbC8uL3NvbHV0aW9uL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJtaWxreS13YXktMjY5NTU2OV85NjBfNzIwLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9R2VtdW51K0xpYnJlOndnaHRAMzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5e1xcclxcbiAgICBmb250LWZhbWlseTogJ0dlbXVudSBMaWJyZScsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuICAgIGNvbG9yOiByZ2IoMTY3LCA1NiwgNTYpO1xcclxcbn1cXHJcXG5zZWN0aW9uOjotd2Via2l0LXNjcm9sbGJhcntcXHJcXG4gICAgd2lkdGg6IDVweDtcXHJcXG4gICAgaGVpZ2h0OiA1cHg7XFxyXFxufVxcclxcbnNlY3Rpb246Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1ie1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuc2VjdGlvbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2t7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmgxe1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbnVse1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTsgIFxcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG59XFxyXFxubGl7XFxyXFxuICAgIG1pbi13aWR0aDogMTgwcHg7XFxyXFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gICAgaGVpZ2h0OiAxNXB4O1xcclxcbiAgICBwYWRkaW5nOiA0cHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDVweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMDtcXHJcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDglO1xcclxcbn1cXHJcXG5zZWN0aW9uIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDI0MCwgMjQwLCAwLjcpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA4JTtcXHJcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXHJcXG59XFxyXFxuaDJ7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLmFwaS1idXR0b25ze1xcclxcbiAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxyXFxufVxcclxcbiNzZWFyY2h7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1kaXZ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG4udGFzay1zZWN0aW9uLCAucmVjeWNsZS1iaW57XFxyXFxuICAgIHdpZHRoOiAzMDBweDtcXHJcXG4gICAgaGVpZ2h0OiAzMDBweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XFxyXFxuICAgIG1hcmdpbjogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stc2VjdGlvbiBpbnB1dHtcXHJcXG4gICAgd2lkdGg6IDE1MHB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1zZWN0aW9uIGgye1xcclxcbiAgICBtYXJnaW4tdG9wOiAwO1xcclxcbn1cXHJcXG4uZHJhZ2dpbmd7XFxyXFxuICAgIG9wYWNpdHk6IDAuNTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXR7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwyNDAsMjQwKTtcXHJcXG4gICAgaGVpZ2h0OjMwcHg7XFxyXFxuICAgIHdpZHRoOiAyMDBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBtYXJnaW46MDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1iYXJ7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgd2lkdGg6IDIyMHB4O1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxufVxcclxcbiNzZWFyY2h7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxufVxcclxcbi5zZWFyY2gtYmFyIGxhYmVse1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBsZWZ0OiAwcHg7XFxyXFxuICAgIGJvdHRvbTogMHB4O1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IGJsYWNrO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4ucGxhY2Vob2xkZXJ7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgYm90dG9tOiA1cHg7XFxyXFxuICAgIGxlZnQ6IDAlO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4uYXBpLWJ1dHRvbiwuYWRkLXRhc2t7XFxyXFxuICAgd2lkdGg6IDcwcHg7XFxyXFxuICAgaGVpZ2h0OiAzNXB4O1xcclxcbiAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiB0ZWFsO1xcclxcbiAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICB0cmFuc2l0aW9uOiBlYXNlLW91dCAwLjNzO1xcclxcbiAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMCB5ZWxsb3c7XFxyXFxufVxcclxcblxcclxcbi5hcGktYnV0dG9uOmhvdmVye1xcclxcbiAgICBib3gtc2hhZG93OiBpbnNldCA3MHB4IDAgMCAwIHllbGxvdztcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC10YXNre1xcclxcbiAgICB3aWR0aDogNTVweDtcXHJcXG4gICAgaGVpZ2h0OiAyOHB4O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjgsIDAsIDcwKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiBlYXNlLW91dCAwLjNzO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAwIHllbGxvdztcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC10YXNrOmhvdmVye1xcclxcbiAgICBib3gtc2hhZG93OiBpbnNldCA3MHB4IDAgMCAwIHJnYig3LCAxNDgsIDE5MCk7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi5sb2FkZXIge1xcclxcbiAgYm9yZGVyOiAxNnB4IHNvbGlkICNmM2YzZjM7IC8qIExpZ2h0IGdyZXkgKi9cXHJcXG4gIGJvcmRlci10b3A6IDE2cHggc29saWQgIzM0OThkYjsgLyogQmx1ZSAqL1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgd2lkdGg6IDMwcHg7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxuICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHNwaW4ge1xcclxcbiAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxcclxcbiAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cXHJcXG59XFxyXFxuXFxyXFxuI25ldy10aGVtZS1idG57XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4jbmV3LXRoZW1lLWJ0bntcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICBmb250LXdlaWdodDogMjAwO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcclxcbiAgICBwYWRkaW5nOiAxM3B4IDUwcHggMTNweDtcXHJcXG4gICAgb3V0bGluZTogMDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAjbmV3LXRoZW1lLWJ0bjo6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZTU0YztcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHotaW5kZXg6IC0xO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgdG9wOiA3cHg7XFxyXFxuICAgIGxlZnQ6IDdweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4ycztcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgI25ldy10aGVtZS1idG46OmFmdGVyIHtcXHJcXG4gICAgdG9wOiAwcHg7XFxyXFxuICAgIGxlZnQ6IDBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNzaG93LXJlY3ljbGUge1xcclxcbiAgICB3aWR0aDogMjIwcHg7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgYmFja2dyb3VuZDogIzExMTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHotaW5kZXg6IDA7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5zb3J0LWF6e1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxyXFxuICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMjBweDtcXHJcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGNvbG9yOiAjMzMzO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMzMzO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4gIC5kZWxldGUtYnV0dG9ue1xcclxcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcXHJcXG4gICAgcGFkZGluZzowLjdlbSAxLjRlbTtcXHJcXG4gICAgbWFyZ2luOjAgMC4zZW0gMC4zZW0gMDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czowLjE1ZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XFxyXFxuICAgIGZvbnQtZmFtaWx5OidSb2JvdG8nLHNhbnMtc2VyaWY7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6NDAwO1xcclxcbiAgICBjb2xvcjojRkZGRkZGO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNjZjIwMDg7XFxyXFxuICAgIGJveC1zaGFkb3c6aW5zZXQgMCAtMC42ZW0gMCAtMC4zNWVtIHJnYmEoMCwwLDAsMC4xNyk7XFxyXFxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xcclxcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZGVsZXRlLWJ1dHRvbjphY3RpdmV7XFxyXFxuICAgICAgICB0b3A6MC4xZW07XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICBAbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOjMwZW0pe1xcclxcbiAgICAgICAg4oCDLmRlbGV0ZS1idXR0b257XFxyXFxuICAgICAgICBkaXNwbGF5OmJsb2NrO1xcclxcbiAgICAgICAgbWFyZ2luOjAuNGVtIGF1dG87XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI3RvLWRvLXNlY3Rpb257XFxyXFxuICAgICAgICBjb2xvcjogcmdiKDM1LCA1LCA4Myk7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUwLCAyNTYsIDUwLCAwLjYpO1xcclxcbiAgICB9XFxyXFxuICAgICNpbi1wcm9ncmVzcy1zZWN0aW9ue1xcclxcbiAgICAgICAgY29sb3I6IHJnYigxMDksIDIsIDIpO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1MCwgNTAsIDI1NiwgMC42KTtcXHJcXG4gICAgfVxcclxcbiAgICAjZG9uZS1zZWN0aW9ue1xcclxcbiAgICAgICAgY29sb3I6IHJnYig3MCwgODIsIDMpO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTYsIDUwLCA1MCwgMC42KTtcXHJcXG4gICAgfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NvbHV0aW9uL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSx1Q0FBdUM7SUFDdkMseURBQW9EO0lBQ3BELHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7QUFDZjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxzQkFBc0I7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O0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtFQUNwQjs7OztFQUlBO0lBQ0Usb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLCtCQUErQjtJQUMvQix3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsb0RBQW9EO0lBQ3BELGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakI7O0lBRUE7UUFDSSxTQUFTO1FBQ1Q7UUFDQTtRQUNBO1FBQ0EsYUFBYTtRQUNiLGlCQUFpQjtRQUNqQjtJQUNKOztJQUVBO1FBQ0kscUJBQXFCO1FBQ3JCLHdDQUF3QztJQUM1QztJQUNBO1FBQ0kscUJBQXFCO1FBQ3JCLHdDQUF3QztJQUM1QztJQUNBO1FBQ0kscUJBQXFCO1FBQ3JCLHdDQUF3QztJQUM1Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1HZW11bnUrTGlicmU6d2dodEAzMDAmZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuYm9keXtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdHZW11bnUgTGlicmUnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwobWlsa3ktd2F5LTI2OTU1NjlfOTYwXzcyMC5qcGcpO1xcclxcbiAgICBjb2xvcjogcmdiKDE2NywgNTYsIDU2KTtcXHJcXG59XFxyXFxuc2VjdGlvbjo6LXdlYmtpdC1zY3JvbGxiYXJ7XFxyXFxuICAgIHdpZHRoOiA1cHg7XFxyXFxuICAgIGhlaWdodDogNXB4O1xcclxcbn1cXHJcXG5zZWN0aW9uOjotd2Via2l0LXNjcm9sbGJhci10aHVtYntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxufVxcclxcbnNlY3Rpb246Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNre1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5oMXtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG51bHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7ICBcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcbmxpe1xcclxcbiAgICBtaW4td2lkdGg6IDE4MHB4O1xcclxcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIGhlaWdodDogMTVweDtcXHJcXG4gICAgcGFkZGluZzogNHB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XFxyXFxuICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA4JTtcXHJcXG59XFxyXFxuc2VjdGlvbiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAyNDAsIDI0MCwgMC43KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOCU7XFxyXFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxyXFxufVxcclxcbmgye1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5hcGktYnV0dG9uc3tcXHJcXG4gICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgIGp1c3RpZnktY29udGVudDogZW5kO1xcclxcbn1cXHJcXG4jc2VhcmNoe1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tZGl2e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuLnRhc2stc2VjdGlvbiwgLnJlY3ljbGUtYmlue1xcclxcbiAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgIGhlaWdodDogMzAwcHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xcclxcbiAgICBtYXJnaW46IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrLXNlY3Rpb24gaW5wdXR7XFxyXFxuICAgIHdpZHRoOiAxNTBweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stc2VjdGlvbiBoMntcXHJcXG4gICAgbWFyZ2luLXRvcDogMDtcXHJcXG59XFxyXFxuLmRyYWdnaW5ne1xcclxcbiAgICBvcGFjaXR5OiAwLjU7XFxyXFxufVxcclxcblxcclxcbmlucHV0e1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsMjQwLDI0MCk7XFxyXFxuICAgIGhlaWdodDozMHB4O1xcclxcbiAgICB3aWR0aDogMjAwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgbWFyZ2luOjA7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtYmFye1xcclxcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHdpZHRoOiAyMjBweDtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbn1cXHJcXG4jc2VhcmNoe1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG4uc2VhcmNoLWJhciBsYWJlbHtcXHJcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbGVmdDogMHB4O1xcclxcbiAgICBib3R0b206IDBweDtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCBibGFjaztcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLnBsYWNlaG9sZGVye1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJvdHRvbTogNXB4O1xcclxcbiAgICBsZWZ0OiAwJTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFwaS1idXR0b24sLmFkZC10YXNre1xcclxcbiAgIHdpZHRoOiA3MHB4O1xcclxcbiAgIGhlaWdodDogMzVweDtcXHJcXG4gICBjb2xvcjogd2hpdGU7XFxyXFxuICAgYmFja2dyb3VuZC1jb2xvcjogdGVhbDtcXHJcXG4gICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgdHJhbnNpdGlvbjogZWFzZS1vdXQgMC4zcztcXHJcXG4gICBvdXRsaW5lOiBub25lO1xcclxcbiAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDAgeWVsbG93O1xcclxcbn1cXHJcXG5cXHJcXG4uYXBpLWJ1dHRvbjpob3ZlcntcXHJcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgNzBweCAwIDAgMCB5ZWxsb3c7XFxyXFxufVxcclxcblxcclxcbi5hZGQtdGFza3tcXHJcXG4gICAgd2lkdGg6IDU1cHg7XFxyXFxuICAgIGhlaWdodDogMjhweDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI4LCAwLCA3MCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogZWFzZS1vdXQgMC4zcztcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMCB5ZWxsb3c7XFxyXFxufVxcclxcblxcclxcbi5hZGQtdGFzazpob3ZlcntcXHJcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgNzBweCAwIDAgMCByZ2IoNywgMTQ4LCAxOTApO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4ubG9hZGVyIHtcXHJcXG4gIGJvcmRlcjogMTZweCBzb2xpZCAjZjNmM2YzOyAvKiBMaWdodCBncmV5ICovXFxyXFxuICBib3JkZXItdG9wOiAxNnB4IHNvbGlkICMzNDk4ZGI7IC8qIEJsdWUgKi9cXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIHdpZHRoOiAzMHB4O1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBzcGluIHtcXHJcXG4gIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cXHJcXG4gIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XFxyXFxufVxcclxcblxcclxcbiNuZXctdGhlbWUtYnRue1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuI25ldy10aGVtZS1idG57XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXHJcXG4gICAgcGFkZGluZzogMTNweCA1MHB4IDEzcHg7XFxyXFxuICAgIG91dGxpbmU6IDA7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgI25ldy10aGVtZS1idG46OmFmdGVyIHtcXHJcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmU1NGM7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB6LWluZGV4OiAtMTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHRvcDogN3B4O1xcclxcbiAgICBsZWZ0OiA3cHg7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuMnM7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gICNuZXctdGhlbWUtYnRuOjphZnRlciB7XFxyXFxuICAgIHRvcDogMHB4O1xcclxcbiAgICBsZWZ0OiAwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjc2hvdy1yZWN5Y2xlIHtcXHJcXG4gICAgd2lkdGg6IDIyMHB4O1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMxMTE7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB6LWluZGV4OiAwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc29ydC1hentcXHJcXG4gICAgZGlzcGxheTogaW5saW5lO1xcclxcbiAgICB3aWR0aDogMTAwcHg7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBjb2xvcjogIzMzMztcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzMzMztcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuICAuZGVsZXRlLWJ1dHRvbntcXHJcXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XFxyXFxuICAgIHBhZGRpbmc6MC43ZW0gMS40ZW07XFxyXFxuICAgIG1hcmdpbjowIDAuM2VtIDAuM2VtIDA7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6MC4xNWVtO1xcclxcbiAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xcclxcbiAgICBmb250LWZhbWlseTonUm9ib3RvJyxzYW5zLXNlcmlmO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OjQwMDtcXHJcXG4gICAgY29sb3I6I0ZGRkZGRjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojY2YyMDA4O1xcclxcbiAgICBib3gtc2hhZG93Omluc2V0IDAgLTAuNmVtIDAgLTAuMzVlbSByZ2JhKDAsMCwwLDAuMTcpO1xcclxcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcXHJcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmRlbGV0ZS1idXR0b246YWN0aXZle1xcclxcbiAgICAgICAgdG9wOjAuMWVtO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDozMGVtKXtcXHJcXG4gICAgICAgIOKAgy5kZWxldGUtYnV0dG9ue1xcclxcbiAgICAgICAgZGlzcGxheTpibG9jaztcXHJcXG4gICAgICAgIG1hcmdpbjowLjRlbSBhdXRvO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICN0by1kby1zZWN0aW9ue1xcclxcbiAgICAgICAgY29sb3I6IHJnYigzNSwgNSwgODMpO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1MCwgMjU2LCA1MCwgMC42KTtcXHJcXG4gICAgfVxcclxcbiAgICAjaW4tcHJvZ3Jlc3Mtc2VjdGlvbntcXHJcXG4gICAgICAgIGNvbG9yOiByZ2IoMTA5LCAyLCAyKTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTAsIDUwLCAyNTYsIDAuNik7XFxyXFxuICAgIH1cXHJcXG4gICAgI2RvbmUtc2VjdGlvbntcXHJcXG4gICAgICAgIGNvbG9yOiByZ2IoNzAsIDgyLCAzKTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU2LCA1MCwgNTAsIDAuNik7XFxyXFxuICAgIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgdGhpcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1tfaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBtb2R1bGVzLmxlbmd0aDsgX2kyKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2kyXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7XG4gIHRvRG9UYXNrc1VsLCBpblByb2dyZXNzVGFza3NVbCwgZG9uZVRhc2tzVWwsIGxvY2FsU3RvcmFnZVNhdmVcbn0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UnO1xuaW1wb3J0IHtcbiAgdG9Eb0NvbnRhaW5lciwgaW5Qcm9ncmVzc0NvbnRhaW5lciwgZG9uZUNvbnRhaW5lciwgbG9hZGVyXG59IGZyb20gJy4vZ2xvYmFsIHZhcmlhYmxlcyBmb3IgaW5kZXgnO1xuaW1wb3J0IGxpc3RDb3VudGVyIGZyb20gJy4vbGlzdCBjb3VudGVyIGZvciBpbmRleCc7XG5pbXBvcnQgeyBkcmFnSXRlbSwgZW5kRHJhZyB9IGZyb20gJy4vdGFza3MgZXZlbnQgbGlzdGVuZXJzJztcbi8qIEFwaSBGdW5jdGlvbnMgKi9cblxuLy8gQVBJIGZ1bmN0aW9uc1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNhdmVBcGkgKCkge1xuICBsb2FkZXIuY2xhc3NMaXN0LmFkZCgnbG9hZGVyJyk7XG4gIGF3YWl0IGZldGNoKCdodHRwczovL2pzb24tYmlucy5oZXJva3VhcHAuY29tL2Jpbi82MTRhZGI2YzQwMjFhYzBlNmMwODBjMTUnLCB7XG4gICAgbWV0aG9kOiAnUFVUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJywgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgIH0sXG4gICAgLy8gYm9keTogSlNPTi5zdHJpbmdpZnkoeyd0YXNrcyc6eyd0b2RvJzpbXSwgJ2luLXByb2dyZXNzJzogW10sICdkb25lJyA6IFtdfSAvLyByZXNldHMgdGhlIEFQSVxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdGFza3M6IHsgdG9kbzogW3RvRG9UYXNrc1VsWzBdLm91dGVySFRNTF0sICdpbi1wcm9ncmVzcyc6IFtpblByb2dyZXNzVGFza3NVbFswXS5vdXRlckhUTUxdLCBkb25lOiBbZG9uZVRhc2tzVWxbMF0ub3V0ZXJIVE1MXSB9IH0pXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hbGVydFxuICB9KS50aGVuKChyZXNwb25zZSkgPT4geyBpZiAocmVzcG9uc2Uuc3RhdHVzID4gNDAwKSB7IGFsZXJ0KFwiaSdtIGEgdGVhcG90XCIpOyB9IH0pO1xuICBsb2FkZXIuY2xhc3NMaXN0LnJlbW92ZSgnbG9hZGVyJyk7XG59XG5cbi8vIGxvYWQgQVBJIGZ1bmN0aW9uXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEFwaSAoKSB7XG4gIGxvYWRlci5jbGFzc0xpc3QuYWRkKCdsb2FkZXInKTtcbiAgYXdhaXQgZmV0Y2goJ2h0dHBzOi8vanNvbi1iaW5zLmhlcm9rdWFwcC5jb20vYmluLzYxNGFkYjZjNDAyMWFjMGU2YzA4MGMxNScpLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICBsb2FkZXIuY2xhc3NMaXN0LnJlbW92ZSgnbG9hZGVyJyk7XG4gICAgICBjb25zdCB0b0RvVGFza3NVbEFQSSA9IGRhdGEudGFza3MudG9kb1swXTtcbiAgICAgIGNvbnN0IGluUHJvZ3Jlc3NUYXNrc1VsQVBJID0gZGF0YS50YXNrc1snaW4tcHJvZ3Jlc3MnXVswXTtcbiAgICAgIGNvbnN0IGRvbmVUYXNrc1VsQVBJID0gZGF0YS50YXNrcy5kb25lWzBdO1xuXG4gICAgICBmdW5jdGlvbiBsb2FkVGFza3NGcm9tQXBpICh0YXNrTGlzdCwgc2VjdGlvblByKSB7XG4gICAgICAgIGNvbnN0IHNlY3Rpb24gPSBzZWN0aW9uUHI7XG4gICAgICAgIGlmICh0YXNrTGlzdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgc2VjdGlvbi5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWN0aW9uLmlubmVySFRNTCA9IHRhc2tMaXN0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsb2FkVGFza3NGcm9tQXBpKHRvRG9UYXNrc1VsQVBJLCB0b0RvQ29udGFpbmVyKTtcbiAgICAgIGxvYWRUYXNrc0Zyb21BcGkoaW5Qcm9ncmVzc1Rhc2tzVWxBUEksIGluUHJvZ3Jlc3NDb250YWluZXIpO1xuICAgICAgbG9hZFRhc2tzRnJvbUFwaShkb25lVGFza3NVbEFQSSwgZG9uZUNvbnRhaW5lcik7XG5cbiAgICAgIHRvRG9UYXNrc1VsWzBdID0gdG9Eb0NvbnRhaW5lci5maXJzdENoaWxkO1xuICAgICAgaW5Qcm9ncmVzc1Rhc2tzVWxbMF0gPSBpblByb2dyZXNzQ29udGFpbmVyLmZpcnN0Q2hpbGQ7XG4gICAgICBkb25lVGFza3NVbFswXSA9IGRvbmVDb250YWluZXIuZmlyc3RDaGlsZDtcbiAgICAgIC8vIHNhdmluZyBjaGFuZ2VzIHRvIGxvY2FsIHN0b3JhZ2VcbiAgICAgIGxvY2FsU3RvcmFnZVNhdmUoKTtcbiAgICAgIGxpc3RDb3VudGVyKCk7XG5cbiAgICAgIC8vIHJlc2V0dGluZyB0aGUgaW5kaXZpZHVhbCBkYXJnTmRyb3AgZXZlbnRMaXN0ZW5lcnNcbiAgICAgIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2snKSkuZm9yRWFjaCgobGkpID0+IHtcbiAgICAgICAgbGkuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgZHJhZ0l0ZW0pO1xuICAgICAgICBsaS5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgZW5kRHJhZyk7XG4gICAgICB9KTtcbiAgICB9KTtcbn1cbiIsIi8vIGNyZWF0ZSBFbGVtZW50IGZ1bmN0aW9uXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50ICh0YWdOYW1lLCBjaGlsZHJlbiA9IFtdLCBjbGFzc2VzID0gW10sIGF0dHJpYnV0ZXMgPSB7fSkge1xuICBjb25zdCBuZXdFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG4gIGNoaWxkcmVuLmZvckVhY2goKGtpZCkgPT4ge1xuICAgIGxldCBjaGlsZCA9IGtpZDtcbiAgICBpZiAodHlwZW9mIChjaGlsZCkgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjaGlsZCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNoaWxkKTtcbiAgICB9XG4gICAgbmV3RWwuYXBwZW5kKGNoaWxkKTtcbiAgfSk7XG4gIGNsYXNzZXMuZm9yRWFjaCgoY2xzKSA9PiB7XG4gICAgbmV3RWwuY2xhc3NMaXN0LmFkZChjbHMpO1xuICB9KTtcbiAgT2JqZWN0LmVudHJpZXMoYXR0cmlidXRlcykuZm9yRWFjaCgoYXR0cikgPT4ge1xuICAgIG5ld0VsLnNldEF0dHJpYnV0ZShhdHRyWzBdLCBhdHRyWzFdKTtcbiAgfSk7XG4gIHJldHVybiBuZXdFbDtcbn1cbiIsIi8vIHNldHRpbmcgZ2xvYmFsIHZhcmlhYmxlcyBmb3IgdGhlIGRvY3VtZW50IGVsZW1lbnRzXG5leHBvcnQgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrcy1kaXYnKTtcbmV4cG9ydCBjb25zdCBzZWFyY2hCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoJyk7XG5leHBvcnQgY29uc3Qgc2F2ZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzYXZlLWJ1dHRvbicpO1xuZXhwb3J0IGNvbnN0IGxvYWRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9hZC1idXR0b24nKTtcbmV4cG9ydCBjb25zdCBzaG93UmVjeWNsZUJpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaG93LXJlY3ljbGUnKTtcbmV4cG9ydCBjb25zdCBsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXBpLWJ1dHRvbnMnKS5sYXN0RWxlbWVudENoaWxkO1xuZXhwb3J0IGNvbnN0IHJlY3ljbGVCaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVjeWNsZS1iaW4nKTtcbmV4cG9ydCBjb25zdCB0b0RvQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvLWRvLWNvbnRhaW5lcicpO1xuZXhwb3J0IGNvbnN0IGluUHJvZ3Jlc3NDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW4tcHJvZ3Jlc3MtY29udGFpbmVyJyk7XG5leHBvcnQgY29uc3QgZG9uZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkb25lLWNvbnRhaW5lcicpO1xuZXhwb3J0IGNvbnN0IHRhc2tFbnVtZXJhdG9yQXJyYXkgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Rhc2stZW51bWVyYXRvcicpKTtcbiIsImltcG9ydCB7IHRhc2tFbnVtZXJhdG9yQXJyYXkgfSBmcm9tICcuL2dsb2JhbCB2YXJpYWJsZXMgZm9yIGluZGV4Jztcbi8vIHRvdGFsIGxpc3QgaXRlbSBjb3VudGVyIGZ1bmN0aW9uXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsaXN0Q291bnRlciAoKSB7XG4gIHRhc2tFbnVtZXJhdG9yQXJyYXkuZm9yRWFjaCgodGFza0VudW1lcmF0b3IpID0+IHtcbiAgICBjb25zdCB0YXNrRW51bSA9IHRhc2tFbnVtZXJhdG9yO1xuICAgIGNvbnN0IGxpc3RvZkVudW1lcmF0b3IgPSB0YXNrRW51bS5wYXJlbnRFbGVtZW50Lmxhc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQuY2hpbGRyZW47XG4gICAgY29uc3QgdG90YWxUYXNrcyA9IEFycmF5LmZyb20obGlzdG9mRW51bWVyYXRvcikubGVuZ3RoO1xuICAgIHRhc2tFbnVtLnRleHRDb250ZW50ID0gYHRvdGFsOiAke3RvdGFsVGFza3N9YDtcbiAgfSk7XG59XG4iLCJpbXBvcnQge1xuICB0b0RvQ29udGFpbmVyLCBpblByb2dyZXNzQ29udGFpbmVyLCBkb25lQ29udGFpbmVyLCByZWN5Y2xlQmluXG59IGZyb20gJy4vZ2xvYmFsIHZhcmlhYmxlcyBmb3IgaW5kZXgnO1xuaW1wb3J0IGxpc3RDb3VudGVyIGZyb20gJy4vbGlzdCBjb3VudGVyIGZvciBpbmRleCc7XG5pbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tICcuL2NyZWF0ZSBlbGVtZW50IGZ1bmN0aW9uJztcbi8qIGxvY2FsIHN0b3JhZ2UgICovXG4vLyBpbml0aWxpemVzIHRoZSBsb2NhbCBzdG9yYWdlIG9iamVjdFxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRMb2NhbFN0b3JhZ2VBdEJlZ2lubmluZyAoKSB7XG4gIGlmICghbG9jYWxTdG9yYWdlLnRhc2tzIHx8IGxvY2FsU3RvcmFnZS50YXNrcy5sZW5ndGggPT09IDApIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh7XG4gICAgICB0b2RvOiBbXSxcbiAgICAgICdpbi1wcm9ncmVzcyc6IFtdLFxuICAgICAgZG9uZTogW10sXG4gICAgICBkZWxldGVkOiBbXVxuICAgIH0pKTtcbiAgfVxufVxuLy8gb2JqZWN0IGZvciBzYXZpbmcgdG8gbG9jYWwgc3RvcmFnZVxuZXhwb3J0IGNvbnN0IGxvY2FsU3RvcmFnZU9iamVjdEZvclVwZGF0ZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLnRhc2tzKTtcbi8vIGxvY2FsIHN0b3JhZ2Ugc2F2ZSBmdW5jdGlvblxuXG4vLyBsb2NhbCBzdG9yYWdlIGNsZWFyIGJ1dHRvbiBsaXNlbmVyXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlQWxsIChlKSB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBlO1xuICBpZiAodGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2RlbGV0ZS1idXR0b24nKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgdG9kbzogW10sXG4gICAgICAnaW4tcHJvZ3Jlc3MnOiBbXSxcbiAgICAgIGRvbmU6IFtdLFxuICAgICAgZGVsZXRlZDogW11cbiAgICB9KSk7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBkZWxldGVBbGw7XG5cbi8vIGxvY2Fsc3RvcmFnZSBsb2FkaW5nIGFmdGVyIHJlZnJlc2hcbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRUb0NvbnRhaW5lciAoY29udGFpbmVyUHIsIHVsKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGNvbnRhaW5lclByO1xuICBpZiAobG9jYWxTdG9yYWdlT2JqZWN0Rm9yVXBkYXRlW3VsXVswXSA9PSBudWxsKSB7XG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGN1cnJlbnRVbCA9IGxvY2FsU3RvcmFnZU9iamVjdEZvclVwZGF0ZVt1bF1bMF07XG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IGN1cnJlbnRVbDtcbiAgfVxufVxuLy8gaW5uZXIgbG9jYWwgc3RvcmFnZSBzYXZlXG5leHBvcnQgZnVuY3Rpb24gaW5uZXJMb2NhbFN0b3JhZ2VTYXZlIChsaXN0TmFtZSwgdWwpIHtcbiAgbG9jYWxTdG9yYWdlT2JqZWN0Rm9yVXBkYXRlW2xpc3ROYW1lXVswXSA9IHVsLm91dGVySFRNTDtcbn1cblxuLy8gbG9jYWxzdG9yYWdlIGxvYWRpbmcgYWZ0ZXIgcmVmcmVzaFxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZExvY2FsU3RvcmFnZVRvRG9tICgpIHtcbiAgaWYgKGxvY2FsU3RvcmFnZU9iamVjdEZvclVwZGF0ZS50b2RvWzBdICE9IG51bGwgfHwgbG9jYWxTdG9yYWdlT2JqZWN0Rm9yVXBkYXRlWydpbi1wcm9ncmVzcyddWzBdICE9IG51bGwgfHwgbG9jYWxTdG9yYWdlT2JqZWN0Rm9yVXBkYXRlLmRvbmVbMF0gIT0gbnVsbCB8fCBsb2NhbFN0b3JhZ2VPYmplY3RGb3JVcGRhdGUuZGVsZXRlZFswXSAhPSBudWxsKSB7XG4gICAgYXBwZW5kVG9Db250YWluZXIodG9Eb0NvbnRhaW5lciwgJ3RvZG8nKTtcbiAgICBhcHBlbmRUb0NvbnRhaW5lcihpblByb2dyZXNzQ29udGFpbmVyLCAnaW4tcHJvZ3Jlc3MnKTtcbiAgICBhcHBlbmRUb0NvbnRhaW5lcihkb25lQ29udGFpbmVyLCAnZG9uZScpO1xuICAgIGFwcGVuZFRvQ29udGFpbmVyKHJlY3ljbGVCaW4sICdkZWxldGVkJyk7XG4gICAgbGlzdENvdW50ZXIoKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB0b0RvVGFza3NVbGlubmVyID0gY3JlYXRlRWxlbWVudCgndWwnLCBbXSwgWyd0by1kby10YXNrcyddLCB7fSk7XG4gICAgY29uc3QgaW5Qcm9ncmVzc1Rhc2tzVWxpbm5lciA9IGNyZWF0ZUVsZW1lbnQoJ3VsJywgW10sIFsnaW4tcHJvZ3Jlc3MtdGFza3MnXSwge30pO1xuICAgIGNvbnN0IGRvbmVUYXNrc1VsaW5uZXIgPSBjcmVhdGVFbGVtZW50KCd1bCcsIFtdLCBbJ2RvbmUtdGFza3MnXSwge30pO1xuICAgIGNvbnN0IGRlbGV0ZWRUYXNrc1VsaW5uZXIgPSBjcmVhdGVFbGVtZW50KCd1bCcsIFtdLCBbJ3JlY3ljbGUtVWwnXSwge30pO1xuICAgIHRvRG9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9Eb1Rhc2tzVWxpbm5lcik7XG4gICAgaW5Qcm9ncmVzc0NvbnRhaW5lci5hcHBlbmRDaGlsZChpblByb2dyZXNzVGFza3NVbGlubmVyKTtcbiAgICBkb25lQ29udGFpbmVyLmFwcGVuZENoaWxkKGRvbmVUYXNrc1VsaW5uZXIpO1xuICAgIHJlY3ljbGVCaW4uYXBwZW5kQ2hpbGQoZGVsZXRlZFRhc2tzVWxpbm5lcik7XG4gICAgbGlzdENvdW50ZXIoKTtcbiAgfVxufVxuZXhwb3J0IGNvbnN0IHRvRG9UYXNrc1VsID0gW107XG5leHBvcnQgY29uc3QgaW5Qcm9ncmVzc1Rhc2tzVWwgPSBbXTtcbmV4cG9ydCBjb25zdCBkb25lVGFza3NVbCA9IFtdO1xuZXhwb3J0IGNvbnN0IGRlbGV0ZWRUYXNrc1VsID0gW107XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2NhbFN0b3JhZ2VTYXZlICgpIHtcbiAgaW5uZXJMb2NhbFN0b3JhZ2VTYXZlKCd0b2RvJywgLi4udG9Eb1Rhc2tzVWwpO1xuICBpbm5lckxvY2FsU3RvcmFnZVNhdmUoJ2luLXByb2dyZXNzJywgLi4uaW5Qcm9ncmVzc1Rhc2tzVWwpO1xuICBpbm5lckxvY2FsU3RvcmFnZVNhdmUoJ2RvbmUnLCAuLi5kb25lVGFza3NVbCk7XG4gIGlubmVyTG9jYWxTdG9yYWdlU2F2ZSgnZGVsZXRlZCcsIC4uLmRlbGV0ZWRUYXNrc1VsKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkobG9jYWxTdG9yYWdlT2JqZWN0Rm9yVXBkYXRlKSk7XG59XG4iLCJpbXBvcnQgeyBzZWFyY2hCYXIgfSBmcm9tICcuL2dsb2JhbCB2YXJpYWJsZXMgZm9yIGluZGV4Jztcbi8qIHNlYXJjaCBiYXIgKi9cblxuLy8gc2VhcmNoIGJhciBmdW5jdGlvbnNcbmV4cG9ydCBmdW5jdGlvbiBoaWRlVGFzayAodGFza3NMaXN0LCB2YWx1ZSkge1xuICB0YXNrc0xpc3QuZm9yRWFjaCgobGlQcikgPT4ge1xuICAgIGNvbnN0IGxpID0gbGlQcjtcbiAgICBsaS5oaWRkZW4gPSBmYWxzZTtcbiAgICBpZiAoIWxpLnRleHRDb250ZW50LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModmFsdWUudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgIGxpLmhpZGRlbiA9IHRydWU7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFRhc2sgKGUpIHtcbiAgY29uc3QgeyB2YWx1ZSB9ID0gZS50YXJnZXQ7XG4gIGNvbnN0IHRhc2tBcnJheSA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2xpJykpO1xuICBoaWRlVGFzayh0YXNrQXJyYXksIHZhbHVlKTtcbn1cblxuc2VhcmNoQmFyLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKCkgPT4ge1xuICBjb25zdCBwbGFjZWhvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGFjZWhvbGRlcicpO1xuICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGFjZWhvbGRlci1sYWJlbCcpO1xuICBwbGFjZWhvbGRlci5zdHlsZSA9ICd0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE1MCUpOyBjb2xvcjpibHVlOyBmb250LXNpemU6MTJweCc7XG4gIGxhYmVsLnN0eWxlID0gJ2JvcmRlci1ib3R0b206IHNvbGlkIDNweCBibHVlOyc7XG59KTtcbnNlYXJjaEJhci5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xuICBpZiAoc2VhcmNoQmFyLnZhbHVlID09PSAnJykge1xuICAgIGNvbnN0IHBsYWNlaG9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYWNlaG9sZGVyJyk7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxhY2Vob2xkZXItbGFiZWwnKTtcbiAgICBwbGFjZWhvbGRlci5zdHlsZSA9ICd0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpOyBjb2xvcjpibGFjazsgZm9udC1zaXplOjE2cHgnO1xuICAgIGxhYmVsLnN0eWxlID0gJ2JvcmRlci1ib3R0b206IHNvbGlkIDFweCBibGFjazsnO1xuICB9XG59KTtcbiIsImltcG9ydCB7XG4gIGxvY2FsU3RvcmFnZVNhdmUsIHRvRG9UYXNrc1VsLCBpblByb2dyZXNzVGFza3NVbCwgZG9uZVRhc2tzVWxcbn0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UnO1xuaW1wb3J0IGxpc3RDb3VudGVyIGZyb20gJy4vbGlzdCBjb3VudGVyIGZvciBpbmRleCc7XG5cbi8vIGdhaW5pbmcgZm9jdXMgZnVuY3Rpb25cbmV4cG9ydCBmdW5jdGlvbiBnYWluRm9jdXMgKGUpIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGU7XG4gIGlmICh0YXJnZXQudGFnTmFtZSA9PT0gJ0xJJykge1xuICAgIHRhcmdldC5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsICd0cnVlJyk7XG4gICAgdGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2JhKDUwLDUwLDIwMCwwLjUpJztcbiAgfVxufVxuXG4vLyBkcmFnSXRlbSBmdW5jdGlvblxuZXhwb3J0IGZ1bmN0aW9uIGRyYWdJdGVtIChlKSB7XG4gIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2RyYWdnaW5nJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0xpc3RBdEFsdCAoZXZlbnRLZXksIHRhcmdldCwga2V5TnVtLCB1bFRvSW5zZXJ0KSB7XG4gIGlmIChldmVudEtleS50b1N0cmluZygpID09PSBrZXlOdW0udG9TdHJpbmcoKSkge1xuICAgIHVsVG9JbnNlcnQuaW5zZXJ0QmVmb3JlKHRhcmdldCwgdWxUb0luc2VydC5maXJzdENoaWxkKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZW5kRHJhZyAoZSkge1xuICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZ2luZycpO1xuICBsb2NhbFN0b3JhZ2VTYXZlKCk7XG4gIGxpc3RDb3VudGVyKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXZlVmFsdWVCbHVyIChlKSB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBlO1xuICBpZiAodGFyZ2V0LnRhZ05hbWUgIT09ICdMSScpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdGFyZ2V0LnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgJ2ZhbHNlJyk7XG4gIHRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiYSgwLDAsMCwwKSc7XG4gIGxvY2FsU3RvcmFnZVNhdmUoKTtcbiAgbGlzdENvdW50ZXIoKTtcbn1cblxuZnVuY3Rpb24gaG92ZXJSZXBsYWNlIChlKSB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBlO1xuICBmdW5jdGlvbiBpbm5lcktleVJlcGxhY2UgKGV2KSB7XG4gICAgaWYgKGV2LmFsdEtleSkge1xuICAgICAgY2hlY2tMaXN0QXRBbHQoZXYua2V5LCB0YXJnZXQsIDEsIHRvRG9UYXNrc1VsWzBdKTtcbiAgICAgIGNoZWNrTGlzdEF0QWx0KGV2LmtleSwgdGFyZ2V0LCAyLCBpblByb2dyZXNzVGFza3NVbFswXSk7XG4gICAgICBjaGVja0xpc3RBdEFsdChldi5rZXksIHRhcmdldCwgMywgZG9uZVRhc2tzVWxbMF0pO1xuICAgIH1cbiAgICAvLyBsb2NhbCBzdG9yYWdlIGluc2VydGlvblxuICAgIGxvY2FsU3RvcmFnZVNhdmUoKTtcbiAgICBsaXN0Q291bnRlcigpO1xuICB9XG4gIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaW5uZXJLZXlSZXBsYWNlKTtcbiAgfSk7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaW5uZXJLZXlSZXBsYWNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEhvdmVyUmVwbGFjZSAoZSkge1xuICBpZiAoZS50YXJnZXQudGFnTmFtZSAhPT0gJ0xJJykge1xuICAgIHJldHVybjtcbiAgfVxuICBlLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgaG92ZXJSZXBsYWNlKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0IHN0eWxlIGZyb20gJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQge1xuICBkZWxldGVBbGwsIGxvYWRMb2NhbFN0b3JhZ2VBdEJlZ2lubmluZywgbG9hZExvY2FsU3RvcmFnZVRvRG9tLCB0b0RvVGFza3NVbCwgaW5Qcm9ncmVzc1Rhc2tzVWwsXG4gIGRvbmVUYXNrc1VsLCBkZWxldGVkVGFza3NVbCwgbG9jYWxTdG9yYWdlU2F2ZVxufSBmcm9tICcuL2xvY2FsU3RvcmFnZSc7XG5pbXBvcnQge1xuICBnYWluRm9jdXMsIGRyYWdJdGVtLCBlbmREcmFnLCBzYXZlVmFsdWVCbHVyLCBhZGRIb3ZlclJlcGxhY2Vcbn0gZnJvbSAnLi90YXNrcyBldmVudCBsaXN0ZW5lcnMnO1xuaW1wb3J0IHsgc2VhcmNoVGFzayB9IGZyb20gJy4vc2VhcmNoYmFyIGZ1bmN0aW9uYWxpdHknO1xuaW1wb3J0IHtcbiAgdGFza0Rpdiwgc2VhcmNoQmFyLCBzYXZlQnV0dG9uLCBsb2FkQnV0dG9uLCBzaG93UmVjeWNsZUJpbixcbiAgcmVjeWNsZUJpbiwgdG9Eb0NvbnRhaW5lciwgaW5Qcm9ncmVzc0NvbnRhaW5lciwgZG9uZUNvbnRhaW5lclxufSBmcm9tICcuL2dsb2JhbCB2YXJpYWJsZXMgZm9yIGluZGV4JztcbmltcG9ydCBsaXN0Q291bnRlciBmcm9tICcuL2xpc3QgY291bnRlciBmb3IgaW5kZXgnO1xuaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnLi9jcmVhdGUgZWxlbWVudCBmdW5jdGlvbic7XG5pbXBvcnQgeyBzYXZlQXBpLCBsb2FkQXBpIH0gZnJvbSAnLi9BcGkgZnVuY3Rpb25zJztcbi8qIGxvY2FsIHN0b3JhZ2UgICovXG5cbi8vIGluaXRpbGl6ZXMgdGhlIGxvY2FsIHN0b3JhZ2Ugb2JqZWN0XG5sb2FkTG9jYWxTdG9yYWdlQXRCZWdpbm5pbmcoKTtcbi8vIG9iamVjdCBmb3Igc2F2aW5nIHRvIGxvY2FsIHN0b3JhZ2VcblxuLyogZG9tIG1hbmlwdWxhdGlvbiAqL1xuXG4vLyBzZXR0aW5nIGdsb2JhbCB2YXJpYWJsZXMgZm9yIHRoZSBkb2N1bWVudCBlbGVtZW50c1xuXG4vLyBsb2NhbHN0b3JhZ2UgbG9hZGluZyBhZnRlciByZWZyZXNoXG5sb2FkTG9jYWxTdG9yYWdlVG9Eb20oKTtcbi8vIHNldHMgdGhlIGxpc3RzIG9iamVjdHMgZm9yIHVwZGF0aW5nXG50b0RvVGFza3NVbFswXSA9IHRvRG9Db250YWluZXIuZmlyc3RDaGlsZDtcbmluUHJvZ3Jlc3NUYXNrc1VsWzBdID0gaW5Qcm9ncmVzc0NvbnRhaW5lci5maXJzdENoaWxkO1xuZG9uZVRhc2tzVWxbMF0gPSBkb25lQ29udGFpbmVyLmZpcnN0Q2hpbGQ7XG5kZWxldGVkVGFza3NVbFswXSA9IHJlY3ljbGVCaW4uZmlyc3RDaGlsZDtcblxuLyoqIGV2ZW50IGxpc3RlbmVycyoqL1xuXG4vKiB0YXNrcyAqL1xuXG4vLyBkb3VibGUgY2xpY2sgZnVuY3Rpb25hbGl0eVxuXG4vLyBnYWluaW5nIGZvY3VzIGZ1bmN0aW9uXG5cbi8vIGhvdmVyICsgYWx0ICsgMS8yLzMgZnVuY3Rpb25hbGl0eVxuXG4vLyBhZGQgYWRkSG92ZXJSZXBsYWNlXG4vLyBmdW5jdGlvbiBhZGRIb3ZlclJlcGxhY2UgKGUpIHtcbi8vICAgaWYgKGUudGFyZ2V0LnRhZ05hbWUgIT09ICdMSScpIHtcbi8vICAgICByZXR1cm47XG4vLyAgIH1cbi8vICAgZS50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGhvdmVyUmVwbGFjZSk7XG4vLyB9XG5cbi8vIGRyYWdJdGVtIGZ1bmN0aW9uXG5cbi8vIGFkZGluZyBldmVudCBsaXN0ZW5lcnMgZm9yIGRyYWdOZHJvcFxuQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzaycpKS5mb3JFYWNoKChsaSkgPT4ge1xuICBsaS5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBkcmFnSXRlbSk7XG4gIGxpLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCBlbmREcmFnKTtcbn0pO1xuXG4vLyBhZGRpbmcgdGhlIGRyb3AgZXZlbnQgdG8gdGhlIHNlY3Rpb25zXG5jb25zdCBzZWN0aW9ucyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2VjdGlvbicpKTtcbnNlY3Rpb25zLmZvckVhY2goKHNlY3Rpb24pID0+IHtcbiAgc2VjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIChlKSA9PiB7XG4gICAgY29uc3QgYWZ0ZXJFbGVtZW50ID0gZWxlbWVudEFmdGVyRHJhZ2dpbmcoc2VjdGlvbiwgZS5jbGllbnRZKTtcbiAgICBpZiAoYWZ0ZXJFbGVtZW50ID09IG51bGwpIHtcbiAgICAgIHNlY3Rpb24ubGFzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZC5hcHBlbmRDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJhZ2dpbmcnKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlY3Rpb24ubGFzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZC5pbnNlcnRCZWZvcmUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyYWdnaW5nJyksIGFmdGVyRWxlbWVudCk7XG4gICAgfVxuICB9KTtcbn0pO1xuLy8gY29udHJvbHMgd2hhdCBsaSB0byBzd2l0Y2hcbmZ1bmN0aW9uIGVsZW1lbnRBZnRlckRyYWdnaW5nIChjb250YWluZXIsIHkpIHtcbiAgY29uc3QgZHJhZ2dhYmxlRWxlbWVudHMgPSBbLi4uY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkcmFnZ2FibGUgPSB0cnVlXTpub3QoLmRyYWdnaW5nKScpXTtcbiAgcmV0dXJuIGRyYWdnYWJsZUVsZW1lbnRzLnJlZHVjZSgoY2xvc2VzdCwgY2hpbGQpID0+IHtcbiAgICBjb25zdCBib3ggPSBjaGlsZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBvZmZzZXQgPSB5IC0gYm94LnRvcCAtIGJveC5oZWlnaHQgLyAyO1xuICAgIGlmIChvZmZzZXQgPCAwICYmIG9mZnNldCA+IGNsb3Nlc3Qub2Zmc2V0KSB7XG4gICAgICByZXR1cm4geyBvZmZzZXQsIGVsZW1lbnQ6IGNoaWxkIH07XG4gICAgfVxuICAgIHJldHVybiBjbG9zZXN0O1xuICB9LCB7IG9mZnNldDogTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZIH0pLmVsZW1lbnQ7XG59XG5cbi8qIGxpc3RzICovXG5cbi8vIGFkZGluZyBldmVudCBsaXN0ZW5lcnMgdG8gdGhlIGJvZHlcbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgYWRkSG92ZXJSZXBsYWNlKTtcbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCBnYWluRm9jdXMpO1xuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIHNhdmVWYWx1ZUJsdXIpO1xuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjb250ZXh0bWVudScsIHJlbW92ZUxpKTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc29ydEF6KTtcbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWxldGVBbGwpO1xuXG4vLyB0b3RhbCBsaXN0IGl0ZW0gY291bnRlciBmdW5jdGlvblxuXG4vLyBhZGRpbmcgYSBsaXN0IGl0ZW0gZnVuY3Rpb25hbGl0eVxuXG4vLyBpbm5lciBhZGQgdGFzayBmdW5jdGlvblxuZnVuY3Rpb24gaW5uZXJBZGRUYXNrVG91bCAodGFyZ2V0UHIpIHtcbiAgY29uc3QgdGFyZ2V0ID0gdGFyZ2V0UHI7XG4gIGNvbnN0IG5ld1Rhc2sgPSBjcmVhdGVFbGVtZW50KCdsaScsIFtgJHt0YXJnZXQucHJldmlvdXNFbGVtZW50U2libGluZy52YWx1ZX1gXSwgWyd0YXNrJ10sIHsgZHJhZ2dhYmxlOiAndHJ1ZScgfSk7XG4gIGNvbnN0IGluc2V0ZXIgPSB0YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLmZpcnN0Q2hpbGQuZmlyc3RDaGlsZDtcbiAgdGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5maXJzdENoaWxkLmluc2VydEJlZm9yZShuZXdUYXNrLCBpbnNldGVyKTtcbiAgLy8gbG9jYWwgc3RvcmFnZSBpbnNlcnRpb25cbiAgbG9jYWxTdG9yYWdlU2F2ZSgpO1xuICAvLyBpbmRpdmlkdWFsIGV2ZW50TGlzdGVuZXJzIGZvciBkcmFnIGFuZCBEcm9wXG4gIG5ld1Rhc2suYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgZHJhZ0l0ZW0pO1xuICBuZXdUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCBlbmREcmFnKTtcbiAgdGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmcudmFsdWUgPSAnJztcbiAgbGlzdENvdW50ZXIoKTtcbn1cbi8vIGFkZCB0YXNrIGZ1bmN0aW9uXG5mdW5jdGlvbiBhZGRUYXNrIChlKSB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBlO1xuICBpZiAodGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2FkZC10YXNrJykge1xuICAgIGNvbnN0IGlucHV0VGV4dCA9IHRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnZhbHVlO1xuICAgIGlmIChpbnB1dFRleHQgPT09ICcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYWxlcnRcbiAgICAgIGFsZXJ0KFwiWW91IGhhdmVuJ3QgZW50ZXJlZCBhbnkgdGV4dFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5uZXJBZGRUYXNrVG91bCh0YXJnZXQpO1xuICAgIH1cbiAgfVxufVxudGFza0Rpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFRhc2spO1xuLypcbi8vIGNyZWF0ZSBFbGVtZW50IGZ1bmN0aW9uXG5cbi8qIHNlYXJjaCBiYXIgKi9cblxuLy8gc2VhcmNoIGJhciBmdW5jdGlvbnNcblxuLy8gc2VhcmNoIGJhciBhbmltYXRpb25zXG4vL1xuc2VhcmNoQmFyLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgc2VhcmNoVGFzayk7XG5cbi8vIGdhbWUgdHJpZ2dlciBldmVudFxubGV0IGFzQ291bnRlciA9IDA7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgaWYgKGUua2V5ID09PSAnYScpIHtcbiAgICBhc0NvdW50ZXIgKz0gMTtcbiAgICBpZiAoYXNDb3VudGVyID09PSAxMDApIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy4vaHRtbGdhbWUuaHRtbCc7XG4gICAgfVxuICB9XG59KTtcblxuLy8gY2hhbmdlIHRoZW1lIGV2ZW50XG5jb25zdCB0aGVtZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctdGhlbWUtYnRuJyk7XG5jb25zdCBjc3NMaW5rID0gZG9jdW1lbnQuaGVhZC5xdWVyeVNlbGVjdG9yKCdsaW5rJyk7XG50aGVtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIGlmIChjc3NMaW5rLmhyZWYgPT09ICdodHRwOi8vMTI3LjAuMC4xOjU1MDAvc29sdXRpb24vc3R5bGVzLmNzcycgfHwgY3NzTGluay5ocmVmID09PSAnLi9zdHlsZXMuY3NzJykge1xuICAgIGNzc0xpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgJy4vY3NzRm9ybmV3VGhlbWUuY3NzJyk7XG4gIH0gZWxzZSB7XG4gICAgY3NzTGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnLi9zdHlsZXMuY3NzJyk7XG4gIH1cbn0pO1xuXG4vLyByaWdodCBjbGljayBmb3IgZXJhc2luZyBsaSBmdW5jdGlvblxuZnVuY3Rpb24gcmVtb3ZlTGkgKGUpIHtcbiAgaWYgKGUudGFyZ2V0LnRhZ05hbWUgPT09ICdMSScpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZGVsZXRlZFRhc2tzVWxbMF0uYXBwZW5kQ2hpbGQoZS50YXJnZXQpO1xuICAgIGxvY2FsU3RvcmFnZVNhdmUoKTtcbiAgICBsaXN0Q291bnRlcigpO1xuICB9XG59XG4vLyByZWN5Y2xlIGJpbiBidXR0b24gZXZlbnQgbGlzdGVuZXJcbnNob3dSZWN5Y2xlQmluLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgcmVjeWNsZUJpbi5oaWRkZW4gPSAhcmVjeWNsZUJpbi5oaWRkZW47XG59KTtcblxuLy8gc29ydCBMSSBhbHBoYWJldGljYWxseVxubGV0IGF6Q291bnRlciA9IDE7XG5cbmZ1bmN0aW9uIHNvcnRBelVwICh0YXJnZXQpIHtcbiAgQXJyYXkuZnJvbSh0YXJnZXQucGFyZW50RWxlbWVudC5sYXN0RWxlbWVudENoaWxkLmZpcnN0RWxlbWVudENoaWxkLmNoaWxkcmVuKS5zb3J0KChhLCBiKSA9PiB7XG4gICAgaWYgKGEudGV4dENvbnRlbnQgPiBiLnRleHRDb250ZW50KSB7XG4gICAgICB0YXJnZXQucGFyZW50RWxlbWVudC5sYXN0RWxlbWVudENoaWxkLmZpcnN0RWxlbWVudENoaWxkLmluc2VydEJlZm9yZShhLCBiKTtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICBpZiAoYi50ZXh0Q29udGVudCA8IGEudGV4dENvbnRlbnQpIHtcbiAgICAgIHRhcmdldC5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yKGIsIGEpO1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICB0YXJnZXQucGFyZW50RWxlbWVudC5sYXN0RWxlbWVudENoaWxkLmZpcnN0RWxlbWVudENoaWxkLmluc2VydEJlZm9yZShhLCBiKTtcbiAgICByZXR1cm4gMDtcbiAgfSk7XG59XG5mdW5jdGlvbiBzb3J0QXpEb3duICh0YXJnZXQpIHtcbiAgQXJyYXkuZnJvbSh0YXJnZXQucGFyZW50RWxlbWVudC5sYXN0RWxlbWVudENoaWxkLmZpcnN0RWxlbWVudENoaWxkLmNoaWxkcmVuKS5zb3J0KChhLCBiKSA9PiB7XG4gICAgaWYgKGEudGV4dENvbnRlbnQgPCBiLnRleHRDb250ZW50KSB7XG4gICAgICB0YXJnZXQucGFyZW50RWxlbWVudC5sYXN0RWxlbWVudENoaWxkLmZpcnN0RWxlbWVudENoaWxkLmluc2VydEJlZm9yZShhLCBiKTtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICBpZiAoYi50ZXh0Q29udGVudCA+IGEudGV4dENvbnRlbnQpIHtcbiAgICAgIHRhcmdldC5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yKGIsIGEpO1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICB0YXJnZXQucGFyZW50RWxlbWVudC5sYXN0RWxlbWVudENoaWxkLmZpcnN0RWxlbWVudENoaWxkLmluc2VydEJlZm9yZShhLCBiKTtcbiAgICByZXR1cm4gMDtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGlubmVyU29ydEF6IChjb3VudGVyLCB0YXJnZXQpIHtcbiAgaWYgKGNvdW50ZXIgJSAyID09PSAwKSB7XG4gICAgc29ydEF6VXAodGFyZ2V0KTtcbiAgfSBlbHNlIHtcbiAgICBzb3J0QXpEb3duKHRhcmdldCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc29ydEF6IChlKSB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBlO1xuICBpZiAodGFyZ2V0LmNsYXNzTmFtZSAhPT0gJ3NvcnQtYXonKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlubmVyU29ydEF6KGF6Q291bnRlciwgdGFyZ2V0KTtcbiAgYXpDb3VudGVyICs9IDE7XG59XG5cbi8vIGFkZGluZyB0aGUgZXZlbnQgbGlzdGVuZXJzIHRvIHRoZSBsb2FkIGFuZCBzYXZlIGJ1dHRvbnNcbnNhdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzYXZlQXBpKTtcbmxvYWRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkQXBpKTtcbi8vXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=