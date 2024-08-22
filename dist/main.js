(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory((function webpackLoadOptionalExternalModule() { try { return require("sharp"); } catch(e) {} }()), (function webpackLoadOptionalExternalModule() { try { return require("canvas"); } catch(e) {} }()), (function webpackLoadOptionalExternalModule() { try { return require("electron/common"); } catch(e) {} }()));
	else if(typeof define === 'function' && define.amd)
		define(["sharp", "canvas", "electron/common"], factory);
	else if(typeof exports === 'object')
		exports["vos"] = factory((function webpackLoadOptionalExternalModule() { try { return require("sharp"); } catch(e) {} }()), (function webpackLoadOptionalExternalModule() { try { return require("canvas"); } catch(e) {} }()), (function webpackLoadOptionalExternalModule() { try { return require("electron/common"); } catch(e) {} }()));
	else
		root["vos"] = factory(root["sharp"], root["canvas"], root["electron/common"]);
})(self, (__WEBPACK_EXTERNAL_MODULE_sharp__, __WEBPACK_EXTERNAL_MODULE_canvas__, __WEBPACK_EXTERNAL_MODULE_electron_common__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./asset/data/ability-border-3.data.png":
/*!**********************************************!*\
  !*** ./asset/data/ability-border-3.data.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports=(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js").ImageDetect).imageDataFromBase64("iVBORw0KGgoAAAANSUhEUgAAACQAAAAiBAMAAADFd2a2AAAAAW5vUEUAYtdMlAAAAAlub1BFAAAAAAAAAAAAoYpy1QAAACpQTFRFAAAAy60FzK8Gy60Eyq0Ey64FzK4GzbAGzK4Fza8GzrEIzK8F0LMKzbAH5LhAMwAAAA50Uk5TAP////////////////9XStsUAAAAWUlEQVR4nGNkAAEhBQZhwfPcF8AcRgYMMKSFCjCFGhg5v2MIcX3D0IghhFUj91c0oQOMHD/QhDZg04ihagI2IfafGBoxhBgwNQ6KsMctxHoumfuP2uZXYA4AzOgYky4g02wAAAAASUVORK5CYII=")

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./A1Sauce/Patches/Style/style.css":
/*!********************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./A1Sauce/Patches/Style/style.css ***!
  \********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "../node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../NIS/images/nis-bg.png */ "./A1Sauce/NIS/images/nis-bg.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body:has(#PatchNotes) {
	overflow: hidden !important;
}

body:has(#PatchNotes)::before {
    content: '';
    display: block;
    width: 500vh;
    height: 500vh;
    z-index: 95;
    background-color: rgba(0,0,0,.7);
    position: fixed;
    top: 0;
    left: 0;
}

#PatchNotes {
	position: fixed;
	z-index: 99;
	top: 2rem;
	left: 5%;
	width: 100vw;
	max-width: 80%;
	background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
	padding: 2rem;
	border: solid 2px #ffcb05;
}

#PatchNotes .title-row {
	display: flex;
	align-items: center;
	justify-content: flex-start;
	position: sticky;
	top: 0;
	background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
	border-bottom: solid 2px #ffcb05;
}

#PatchNotes .patch-notes {
	max-height: 80vh;
	overflow-y: auto;
	margin-top: 2rem;
}

#PatchNotes .note {
	max-width: 90%;
}

#PatchNotes h2, #PatchNotes h3 {
	color: #ffcb05;
    text-shadow: 1px 1px #000000;
	letter-spacing: 1px;
}

#PatchNotes .close-button {
	white-space: nowrap;
	margin-left: 3rem;
}

#PatchNotes .close-button:hover {
	cursor: pointer;
}

#PatchNotes li {
	margin-bottom: .35rem;
	max-width: 80vw;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./A1Sauce/Settings/Library/Styles/alarm.css":
/*!******************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./A1Sauce/Settings/Library/Styles/alarm.css ***!
  \******************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#Settings .alarm-setting,
#Settings .alarm-setting .alarm-volume {
	background-color: transparent !important;
}

#Settings .alarm-setting span.checkbox {
	margin-left: 0.5rem;
}

#Settings .alarm-setting .alarm-active,
#Settings .alarm-setting .alarm-looping {
	background-color: #071820 !important;
}

#Settings .alarm-setting .alarm-active:hover,
#Settings .alarm-setting .alarm-looping:hover {
	background-color: #03282d !important;
}

#Settings .alarm-setting p {
    font-family: sans-serif;
    font-size: 14px;
    color: #94afbd;
    text-shadow: 1px 1px #000000;
	margin-bottom: 3px;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./A1Sauce/Settings/Library/Styles/range.css":
/*!******************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./A1Sauce/Settings/Library/Styles/range.css ***!
  \******************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "../node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../Nis/images/range-input-tab.png */ "./A1Sauce/Nis/images/range-input-tab.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../Nis/images/nis-range-minus.png */ "./A1Sauce/Nis/images/nis-range-minus.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../Nis/images/nis-range-plus.png */ "./A1Sauce/Nis/images/nis-range-plus.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#Settings input[type="range"] {
   -webkit-appearance: none;
    appearance: none;
	transition: background 450ms ease-in;
    cursor: pointer;
	height: 8px;
	border: solid 1px #697479;
	border-radius: 3px;
	position: relative;
}

#Settings input[type="range"]::before {
	position: absolute;
	display: block;
	content: '';
	width: calc(100% - 6px);
	height: 1px;
	top: auto;
	bottom: -3px;
	background-color: #3e5765;
	z-index: 5;
	left: 50%;
    transform: translate(-50%);
}

#Settings input[type="range"]::after {
	position: absolute;
	display: block;
	content: '';
	width: calc(100% - 1px);
	height: 2px;
	top: 1px;
	bottom: auto;
	background-color: #09141b;
	z-index: 2;
	left: 50%;
    transform: translate(-50%);
	box-shadow: 0px 19px 0px #09141b;
}

#Settings input[type="range"]:focus {
  outline: none;
}

#Settings input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
   appearance: none;


   background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
   background-position: 50% 50%;
   background-repeat: no-repeat;
   width: 9px;
   height: 20px;
   position: relative;
   z-index: 6;
}

#Settings .flex-between-middle {
	display: flex;
	align-items: center;
	justify-content: space-between
}

#Settings .minus-btn {
	width: 16px;
	height: 16px;
	background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
	background-position: 0px 0px;
	margin-top: 2px;
}

#Settings .plus-btn {
	width: 16px;
	height: 16px;
	background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
	background-position: 0px 0px;
	margin-top: 2px;
	margin-right: 5px;
}
#Settings .minus-btn:hover,
#Settings .plus-btn:hover {
	cursor: pointer;
	background-position: 16px 0px;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./css/styles.css":
/*!***************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./css/styles.css ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "../node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../asset/resource/bg.png */ "./asset/resource/bg.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../asset/resource/checkmark.png */ "./asset/resource/checkmark.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../asset/resource/imgbutton.png */ "./asset/resource/imgbutton.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! data:font/opentype;base64,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 */ "data:font/opentype;base64,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"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../../../asset/resource/scroll.png */ "./asset/resource/scroll.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../../../asset/resource/scrollhor.png */ "./asset/resource/scrollhor.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../../../asset/resource/button.png */ "./asset/resource/button.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --brightness: ,75;
}

body {
  display: block;
  padding: 0 .5rem;
  background-color: #0F0F0F;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  color: #FFFFFF;
  overflow-x: hidden;
  overflow-y: auto;
  margin: 0;
  opacity: 1;
}

#app {
  text-align: center;
  transform-origin: top;
  white-space: nowrap;
}

#abilityHistory {
  display: flex;
  justify-content: flex-end;
  list-style: none;
  width: 100%;
  max-width: 100%;
  padding: 0 !important;
  margin: 1rem 0 0 !important;
}

#abilityHistory.reverse {
  flex-direction: row-reverse;
}

#abilityHistory li {
  min-width: 32px;
  max-width: 32px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1px;
  margin: 1px;
}

#abilityHistory > li:last-child::before {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: yellow;
  z-index: -1;
}

#abilityHistory li img {
  width: 100%;
}

#current,
#last {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

#current p,
#last p {
  margin: 0;
  font-size: .85rem;
}

#current img,
#last img {
  margin: 0 1rem;


}

#get {
  margin-top: 1.5rem;

}

#Settings {
  display: block;
  color: #F1F1F1;
}

#Settings {
  padding: .5rem;
}

#Settings a {
  color: #CEFC92;
}

#Settings a:visited,
#Settings a:hover {
  color: #57799e;
}

#Settings h2 {
  text-transform: uppercase;
  letter-spacing: 2px;
  text-align: center;
}

#Settings h2 + p {
  text-align: center;
}

#Settings h3 {
  letter-spacing: 1px;
}

#Settings h2,
#Settings h3 {
  color: #ffcb05;
  text-shadow: 1px 1px #000000;
}

#Settings label {
  font-family: sans-serif;
  font-size: 14px;
  color: #94afbd;
  text-shadow: 1px 1px #000000;
}

#Settings .setting:nth-child(2n+0) {
  background-color: #1c2c34;
  padding: 4px;
}

#Settings .setting:nth-child(2n+0):hover {
  background-color: #1c3b40;
}

#Settings .setting:nth-child(2n+1) {
  background-color: #071820;
  padding: 4px;
}

#Settings .setting:nth-child(2n+1):hover {
  background-color: #03282d;
}

#Settings .reverse-setting {
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
}

#Settings .flex u,
#Settings .reverse-setting u {
  display: block;
  text-decoration: none;
  color: #a4c2d1;
  margin-bottom: 2px;
}

li.disabled {
  display: none !important;
  height: 0 !important;
  width: 0 !important;
  visibility: hidden;
  opacity: 0;
  border: none !important;
  pointer-events: none;
}

hr {
  opacity: .5;
}

h3 {
  margin-top: .75rem;
  margin-bottom: .35rem;
}

.flex {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.flex-wrap { flex-wrap: wrap; }
.full { width: 100%; text-align: left; }

#Settings .setting {
  margin-bottom: .65rem;
}

#Settings input[type="range"] ~ output {
  font-size: 14px;
  color: #94afbd;
  text-shadow: 1px 1px #000000;
  margin-top: .4rem;
}

input[type="color"] {
  margin-right: .5rem;
  width: 21px;
  height: 24px;
  background-color: transparent;
  padding: 0;
  border: none;
}

input[type="text"],
input[type="checkbox"],
select {
  margin-right: .5rem;
}

input[type="checkbox"] {
  display: none;
}

.reverse-setting label {
  position: relative;
}

input[type="checkbox"] ~ span.checkbox {
  display: block;
  content: '';
  width: 12px;
  height: 12px;
  background-color: #181616;
  border: solid 2px #3a5462;
  margin-left: 2.5rem;
  border-radius: 2px;
}

.reverse-setting:hover input[type="checkbox"] ~ span.checkbox {
  background-color: #2a2a29;
}

input[type="checkbox"]:checked ~ span.checkbox::after {
  position: absolute;
  content: '';
  display: block;
  width: 12px;
  height: 11px;
  top: 50%;
  right: 2px;
  transform: translateY(-50%);
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  z-index: 2;
}

.reverse-setting:hover input[type="checkbox"]:checked ~ span.checkbox {
  background-color: #232323;
  border-color: #56788b;
}

input[type="color"]:hover {
  cursor: pointer;
}

input[type="number"] {
  margin: 0 .5rem;
  max-width: 40px;
  margin-left: 0;
}

input[type="number"].per-row {
  margin-left: 0;
}

small {
  display: block;
  margin: 1rem 0;
}

.nisimgbutton {
    width: 20px;
    height: 20px;
    border: 3px solid #212B2D;
    box-sizing: border-box;
    border-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) 3 fill;
    cursor: pointer;
}

.nisimgbutton:hover {
    filter: brightness(1.2);
}

/*font stolen from jagex*/
@font-face{
	font-family:'trajan-pro-3';
	src:url(${___CSS_LOADER_URL_REPLACEMENT_3___});
}

/*Chromium custom scrollbars, will only work on chromium browsers (such as alt1) */
body::-webkit-scrollbar,
body *:not(.normalscroll)::-webkit-scrollbar
{width:10px; height:10px;}

body::-webkit-scrollbar-button:start:vertical,
body *:not(.normalscroll)::-webkit-scrollbar-button:start:vertical
{background-image:url(${___CSS_LOADER_URL_REPLACEMENT_4___}); background-position:0px 0px; height:15px;}

body::-webkit-scrollbar-button:end:vertical,
body *:not(.normalscroll)::-webkit-scrollbar-button:end:vertical
{background-image:url(${___CSS_LOADER_URL_REPLACEMENT_4___}); background-position:-45px 0px; height:15px;}

body::-webkit-scrollbar-track:vertical,
body *:not(.normalscroll)::-webkit-scrollbar-track:vertical
{background-image:url(${___CSS_LOADER_URL_REPLACEMENT_4___}); background-position:-15px 0px;}

body::-webkit-scrollbar-thumb:vertical,
body *:not(.normalscroll)::-webkit-scrollbar-thumb:vertical
{background-image:url(${___CSS_LOADER_URL_REPLACEMENT_4___}); background-position:-30px 0px; border-radius:5px;}

body::-webkit-scrollbar-button:start:horizontal,
body *:not(.normalscroll)::-webkit-scrollbar-button:start:horizontal
{background-image:url(${___CSS_LOADER_URL_REPLACEMENT_5___}); background-position:0px 0px; width:15px;}

body::-webkit-scrollbar-button:end:horizontal,
body *:not(.normalscroll)::-webkit-scrollbar-button:end:horizontal
{background-image:url(${___CSS_LOADER_URL_REPLACEMENT_5___}); background-position:0px -45px; width:15px;}

body::-webkit-scrollbar-track:horizontal,
body *:not(.normalscroll)::-webkit-scrollbar-track:horizontal
{background-image:url(${___CSS_LOADER_URL_REPLACEMENT_5___}); background-position:0px -15px;}

body::-webkit-scrollbar-thumb:horizontal,
body *:not(.normalscroll)::-webkit-scrollbar-thumb:horizontal
{background-image:url(${___CSS_LOADER_URL_REPLACEMENT_5___}); background-position:0px -30px; border-radius:5px;}

body::-webkit-scrollbar-corner,
body *:not(.normalscroll)::-webkit-scrollbar-corner
{background:#060d11;}

input[type="text"],
input[type="number"],
input[type="input"],
select
	{height:20px; cursor:text; color:#B1AFAE; outline:none; position:relative; padding:0px 4px; box-sizing:border-box; background:linear-gradient(to bottom, #191714,#292222,#100C0C); border:1px solid #514949; font-family:sans-serif; font-size:13px;}

select{height:19px; cursor:pointer; outline:none; box-sizing:border-box; padding:0px 0px 0px 4px;}
select>option{background:#1D190D;}

hr {
  width:100%; height:0px; border-top:1px solid #000; border-bottom:1px solid #41555F;
}

.nisbutton {
    height: 32px;
    position: relative;
    background: url(${___CSS_LOADER_URL_REPLACEMENT_6___}) 0px -100%/24px 400% repeat content-box;
    cursor: pointer;
    text-align: center;
    color: #000;
    font-family: 'trajan-pro-3';
    text-shadow: 1px 1px 2px #ecc622;
    font-size: 18px;
    margin: 5px;
    padding: 0px 12px;
    line-height: 32px;
    user-select: none;
    -webkit-user-select: none;
}

.nisbutton::before {
    width: 12px;
    height: 100%;
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    background: url(${___CSS_LOADER_URL_REPLACEMENT_6___}) 0px 0px / 24px 400%;
}

.nisbutton::after {
    width: 12px;
    height: 100%;
    content: "";
    position: absolute;
    top: 0px;
    right: 0px;
    background: url(${___CSS_LOADER_URL_REPLACEMENT_6___}) -12px 0px / 24px 400%;
}

.nisbutton:not([disabled]):hover {
    background-position: 0px -300%;
}

.nisbutton:not([disabled]):hover::before {
    background-position: 0px -200%;
}

.nisbutton:not([disabled]):hover::after {
    background-position: -12px -200%;
}

.nisbutton[disabled] {
  opacity: .5;
  cursor: default;
  pointer-events: none;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

/***/ "../node_modules/css-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!***************************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ "./A1Sauce/Patches/Style/style.css":
/*!*****************************************!*\
  !*** ./A1Sauce/Patches/Style/style.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./style.css */ "../node_modules/css-loader/dist/cjs.js!./A1Sauce/Patches/Style/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./A1Sauce/Settings/Library/Styles/alarm.css":
/*!***************************************************!*\
  !*** ./A1Sauce/Settings/Library/Styles/alarm.css ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_alarm_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!./alarm.css */ "../node_modules/css-loader/dist/cjs.js!./A1Sauce/Settings/Library/Styles/alarm.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_alarm_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_alarm_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_alarm_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_alarm_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./A1Sauce/Settings/Library/Styles/range.css":
/*!***************************************************!*\
  !*** ./A1Sauce/Settings/Library/Styles/range.css ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_range_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!./range.css */ "../node_modules/css-loader/dist/cjs.js!./A1Sauce/Settings/Library/Styles/range.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_range_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_range_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_range_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_range_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./css/styles.css":
/*!************************!*\
  !*** ./css/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "../node_modules/css-loader/dist/cjs.js!./css/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";


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

/***/ "../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!*********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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

/***/ "../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!***********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!****************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";


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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!**********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


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

/***/ "./A1Sauce/Patches/patchNotes.ts":
/*!***************************************!*\
  !*** ./A1Sauce/Patches/patchNotes.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Patches: () => (/* binding */ Patches)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./A1Sauce/index.ts");
/* harmony import */ var _Settings_Storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Settings/Storage */ "./A1Sauce/Settings/Storage/index.ts");
/* harmony import */ var _Utils_tempTooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Utils/tempTooltip */ "./A1Sauce/Utils/tempTooltip.ts");
/* harmony import */ var _Style_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Style/style.css */ "./A1Sauce/Patches/Style/style.css");




const sauce = ___WEBPACK_IMPORTED_MODULE_0__.A1Sauce.instance;
class Patches {
    constructor() {
        this._notes = [];
        this.checkForNewVersion = () => {
            // [0] = Major ; [1] = Minor ; [2] = Patch
            const lastKnownVersion = (0,_Settings_Storage__WEBPACK_IMPORTED_MODULE_1__.getSetting)('lastKnownVersion');
            const currentVersion = sauce.getVersion();
            (0,_Settings_Storage__WEBPACK_IMPORTED_MODULE_1__.updateSetting)('lastKnownVersion', currentVersion);
            console.log(lastKnownVersion);
            console.log(currentVersion);
            return lastKnownVersion !== currentVersion;
        };
        this.setNotes = (notes) => {
            this._notes = notes;
            return this;
        };
        this.getNotes = () => {
            return this._notes;
        };
        this.createPatchContainer = () => {
            const container = document.createElement('div');
            container.id = 'PatchNotes';
            return container;
        };
        this.createPatchHeader = () => {
            const headerContainer = document.createElement('div');
            headerContainer.classList.add('title-row');
            let header = document.createElement('h2');
            header.innerText = 'Patch Notes';
            let closeButton = document.createElement('button');
            closeButton.innerText = 'Close Patch Notes';
            closeButton.title = 'Close patch notes';
            closeButton.classList.add('nisbutton');
            closeButton.classList.add('close-button');
            headerContainer.appendChild(header);
            headerContainer.appendChild(closeButton);
            return headerContainer;
        };
        this.addNotesToContainer = (notes, container) => {
            const noteContainer = document.createElement('div');
            noteContainer.classList.add('patch-notes');
            for (let i = 0; i < notes.length; i++) {
                let noteType = notes[i];
                const noteDate = document.createElement('h3');
                noteDate.innerText = noteType.date;
                const notesList = document.createElement('ul');
                notesList.classList.add('note');
                for (let j = 0; j < noteType.note.length; j++) {
                    const noteText = document.createElement('li');
                    noteText.innerText = noteType.note[j];
                    notesList.appendChild(noteText);
                }
                noteContainer.appendChild(noteDate);
                noteContainer.appendChild(notesList);
                container.appendChild(noteContainer);
            }
        };
        this.showPatchNotes = async () => {
            if (this.checkForNewVersion()) {
                const container = this.createPatchContainer();
                const headerContainer = this.createPatchHeader();
                headerContainer.querySelector('.close-button').addEventListener('click', () => {
                    container.remove();
                });
                container.appendChild(headerContainer);
                let notes = this.getNotes();
                this.addNotesToContainer(notes, container);
                document.body.appendChild(container);
                (0,_Utils_tempTooltip__WEBPACK_IMPORTED_MODULE_2__.tempTooltip)(`New update! See ${sauce.getPublicName()} window for patch notes.`, 5000);
            }
        };
    }
}


/***/ }),

/***/ "./A1Sauce/Settings/Components/Builders/container.ts":
/*!***********************************************************!*\
  !*** ./A1Sauce/Settings/Components/Builders/container.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createFlexContainer: () => (/* binding */ createFlexContainer),
/* harmony export */   createOutput: () => (/* binding */ createOutput)
/* harmony export */ });
const createFlexContainer = (classes) => {
    const container = document.createElement('div');
    container.classList.add('flex');
    container.classList.add('setting');
    if (classes !== undefined && classes.length) {
        for (let i = 0; i < classes.length; i++) {
            container.classList.add(classes[i]);
        }
    }
    return container;
};
const createOutput = () => {
    const output = document.createElement('output');
    return output;
};


/***/ }),

/***/ "./A1Sauce/Settings/Components/Builders/input.ts":
/*!*******************************************************!*\
  !*** ./A1Sauce/Settings/Components/Builders/input.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCheckboxInput: () => (/* binding */ createCheckboxInput),
/* harmony export */   createDropdown: () => (/* binding */ createDropdown),
/* harmony export */   createInput: () => (/* binding */ createInput),
/* harmony export */   createLabel: () => (/* binding */ createLabel)
/* harmony export */ });
/* harmony import */ var _Storage_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Storage/index */ "./A1Sauce/Settings/Storage/index.ts");

const createLabel = (name, description) => {
    const label = document.createElement('label');
    label.setAttribute('for', name);
    label.innerHTML = description;
    return label;
};
const createInput = (type, name, defaultValue) => {
    var _a;
    const input = document.createElement('input');
    input.id = name;
    input.type = type;
    input.dataset.setting = name;
    input.dataset.defaultValue = defaultValue === null || defaultValue === void 0 ? void 0 : defaultValue.toString();
    input.value = String(input.dataset.defaultValue);
    if (_Storage_index__WEBPACK_IMPORTED_MODULE_0__.getSetting(name)) {
        input.value = (_a = _Storage_index__WEBPACK_IMPORTED_MODULE_0__.getSetting(name)) !== null && _a !== void 0 ? _a : input.dataset.defaultValue;
    }
    else {
        _Storage_index__WEBPACK_IMPORTED_MODULE_0__.updateSetting(name, input.dataset.defaultValue);
    }
    input.addEventListener('change', () => {
        if (type == 'text' || type == 'color') {
            _Storage_index__WEBPACK_IMPORTED_MODULE_0__.updateSetting(name, input.value);
        }
        else if (type == 'number' || type == 'range') {
            _Storage_index__WEBPACK_IMPORTED_MODULE_0__.updateSetting(name, parseInt(input.value, 10));
        }
    });
    return input;
};
const createCheckboxInput = (name, defaultValue) => {
    const input = document.createElement('input');
    input.id = name;
    input.type = 'checkbox';
    input.dataset.setting = name;
    input.dataset.defaultValue = defaultValue === null || defaultValue === void 0 ? void 0 : defaultValue.toString();
    input.checked = Boolean(defaultValue);
    if (_Storage_index__WEBPACK_IMPORTED_MODULE_0__.getSetting(name)) {
        input.checked = _Storage_index__WEBPACK_IMPORTED_MODULE_0__.getSetting(name);
    }
    else {
        _Storage_index__WEBPACK_IMPORTED_MODULE_0__.updateSetting(name, input.checked);
    }
    input.addEventListener('change', () => {
        _Storage_index__WEBPACK_IMPORTED_MODULE_0__.updateSetting(name, input.checked);
    });
    return input;
};
const createDropdown = (name, defaultValue, options) => {
    const select = document.createElement('select');
    select.id = name;
    select.dataset.setting = name;
    select.dataset.defaultValue = defaultValue === null || defaultValue === void 0 ? void 0 : defaultValue.toString();
    select.value = String(defaultValue);
    if (_Storage_index__WEBPACK_IMPORTED_MODULE_0__.getSetting(name)) {
        select.value = _Storage_index__WEBPACK_IMPORTED_MODULE_0__.getSetting(name);
    }
    for (let i = 0; i < options.length; i++) {
        const option = document.createElement('option');
        option.value = options[i].value;
        option.text = options[i].name;
        select.appendChild(option);
    }
    if (_Storage_index__WEBPACK_IMPORTED_MODULE_0__.getSetting(name)) {
        select.value = _Storage_index__WEBPACK_IMPORTED_MODULE_0__.getSetting(name);
    }
    else {
        _Storage_index__WEBPACK_IMPORTED_MODULE_0__.updateSetting(name, select.value);
    }
    select.addEventListener('change', () => {
        _Storage_index__WEBPACK_IMPORTED_MODULE_0__.updateSetting(name, select.value);
    });
    return select;
};


/***/ }),

/***/ "./A1Sauce/Settings/Components/index.ts":
/*!**********************************************!*\
  !*** ./A1Sauce/Settings/Components/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCheckboxInput: () => (/* reexport safe */ _Builders_input__WEBPACK_IMPORTED_MODULE_2__.createCheckboxInput),
/* harmony export */   createDropdown: () => (/* reexport safe */ _Builders_input__WEBPACK_IMPORTED_MODULE_2__.createDropdown),
/* harmony export */   createFlexContainer: () => (/* reexport safe */ _Builders_container__WEBPACK_IMPORTED_MODULE_0__.createFlexContainer),
/* harmony export */   createInput: () => (/* reexport safe */ _Builders_input__WEBPACK_IMPORTED_MODULE_2__.createInput),
/* harmony export */   createLabel: () => (/* reexport safe */ _Builders_input__WEBPACK_IMPORTED_MODULE_2__.createLabel),
/* harmony export */   createOutput: () => (/* reexport safe */ _Builders_container__WEBPACK_IMPORTED_MODULE_0__.createOutput),
/* harmony export */   createSeperator: () => (/* reexport safe */ _Library_Controls_seperator__WEBPACK_IMPORTED_MODULE_1__.createSeperator)
/* harmony export */ });
/* harmony import */ var _Builders_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Builders/container */ "./A1Sauce/Settings/Components/Builders/container.ts");
/* harmony import */ var _Library_Controls_seperator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Library/Controls/seperator */ "./A1Sauce/Settings/Library/Controls/seperator.ts");
/* harmony import */ var _Builders_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Builders/input */ "./A1Sauce/Settings/Components/Builders/input.ts");
/*
 *
 * Builders are building blocks used to create Controls in Library/Controls
 *
 */





/***/ }),

/***/ "./A1Sauce/Settings/Library/Controls/alarm.ts":
/*!****************************************************!*\
  !*** ./A1Sauce/Settings/Library/Controls/alarm.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createAlarmSetting: () => (/* binding */ createAlarmSetting)
/* harmony export */ });
/* harmony import */ var _Components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Components */ "./A1Sauce/Settings/Components/index.ts");
/* harmony import */ var _checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkbox */ "./A1Sauce/Settings/Library/Controls/checkbox.ts");
/* harmony import */ var _range__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./range */ "./A1Sauce/Settings/Library/Controls/range.ts");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./text */ "./A1Sauce/Settings/Library/Controls/text.ts");
/* harmony import */ var _Styles_alarm_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Styles/alarm.css */ "./A1Sauce/Settings/Library/Styles/alarm.css");





const alarms = [
    { name: 'alarm2', value: './resource/alarms/alarm2.wav' },
    { name: 'notification1', value: './resource/alarms/notification1.wav' },
    { name: 'notification2', value: './resource/alarms/notification2.wav' },
    { name: 'notification3', value: './resource/alarms/notification3.wav' },
    { name: 'bell', value: './resource/alarms/bell.wav' },
    { name: 'elevator', value: './resource/alarms/elevator.wav' },
    { name: 'nuclear', value: './resource/alarms/nuclear.wav' },
];
const createAlarmSetting = (name, description, options = {}) => {
    var _a;
    const { classes = (_a = options.classes) !== null && _a !== void 0 ? _a : '', } = options;
    const shortDescription = (0,_text__WEBPACK_IMPORTED_MODULE_3__.createText)(description);
    const activeCheckbox = (0,_checkbox__WEBPACK_IMPORTED_MODULE_1__.createCheckboxSetting)(name + 'Active', 'Active', false);
    activeCheckbox.classList.add('alarm-active');
    activeCheckbox.style.marginRight = '20px';
    const alertDropdown = (0,_Components__WEBPACK_IMPORTED_MODULE_0__.createDropdown)(name + 'AlertSound', '', alarms);
    alertDropdown.classList.add('full');
    alertDropdown.style.marginBottom = '5px';
    const loopCheckbox = (0,_checkbox__WEBPACK_IMPORTED_MODULE_1__.createCheckboxSetting)(name + 'Loop', 'Loop', false);
    loopCheckbox.classList.add('alarm-looping');
    const volumeSlider = (0,_range__WEBPACK_IMPORTED_MODULE_2__.createRangeSetting)(name + 'Volume', '', {
        defaultValue: '100',
        unit: '%',
        min: 0,
        max: 100,
    });
    volumeSlider.classList.add('half');
    volumeSlider.classList.add('alarm-volume');
    const alarmSoundText = (0,_text__WEBPACK_IMPORTED_MODULE_3__.createText)('Alarm Sound');
    alarmSoundText.classList.add('full');
    alarmSoundText.classList.add('alarm-sound');
    alarmSoundText.style.paddingTop = '0px';
    alarmSoundText.style.marginTop = '0px';
    const volumeText = (0,_text__WEBPACK_IMPORTED_MODULE_3__.createText)('Volume');
    volumeText.style.marginTop = '-1px';
    volumeText.style.marginRight = '5px';
    volumeText.classList.add('half');
    volumeText.style.paddingTop = '0px';
    const container = (0,_Components__WEBPACK_IMPORTED_MODULE_0__.createFlexContainer)(['flex-wrap']);
    container.classList.add('alarm-setting');
    if (classes.length) {
        for (let i = classes.length; i--; i >= 0) {
            container.classList.add(classes[i]);
        }
    }
    container.appendChild(shortDescription);
    const innerContainer = (0,_Components__WEBPACK_IMPORTED_MODULE_0__.createFlexContainer)();
    innerContainer.appendChild(activeCheckbox);
    innerContainer.appendChild(loopCheckbox);
    innerContainer.classList.remove('setting');
    container.appendChild(innerContainer);
    container.appendChild(alarmSoundText);
    container.appendChild(alertDropdown);
    container.appendChild(volumeText);
    container.appendChild(volumeSlider);
    return container;
};


/***/ }),

/***/ "./A1Sauce/Settings/Library/Controls/button.ts":
/*!*****************************************************!*\
  !*** ./A1Sauce/Settings/Library/Controls/button.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createButton: () => (/* binding */ createButton)
/* harmony export */ });
const createButton = (name, content, 
// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
fn, options) => {
    const { classes = options.classes } = options;
    const button = document.createElement('button');
    button.id = name;
    button.innerHTML = content;
    if (classes.length) {
        for (let i = classes.length; i--; i >= 0) {
            button.classList.add(classes[i]);
        }
    }
    button.addEventListener('click', () => {
        fn();
    });
    return button;
};


/***/ }),

/***/ "./A1Sauce/Settings/Library/Controls/checkbox.ts":
/*!*******************************************************!*\
  !*** ./A1Sauce/Settings/Library/Controls/checkbox.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCheckboxSetting: () => (/* binding */ createCheckboxSetting)
/* harmony export */ });
/* harmony import */ var _Components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Components */ "./A1Sauce/Settings/Components/index.ts");
/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Storage */ "./A1Sauce/Settings/Storage/index.ts");


const createCheckboxSetting = (name, description, defaultValue) => {
    const input = (0,_Components__WEBPACK_IMPORTED_MODULE_0__.createCheckboxInput)(name, defaultValue);
    const label = (0,_Components__WEBPACK_IMPORTED_MODULE_0__.createLabel)(name, description);
    const checkboxLabel = (0,_Components__WEBPACK_IMPORTED_MODULE_0__.createLabel)(name, '');
    const checkbox = document.createElement('span');
    checkbox.classList.add('checkbox');
    checkbox.id = name;
    const container = (0,_Components__WEBPACK_IMPORTED_MODULE_0__.createFlexContainer)(['reverse-setting']);
    checkboxLabel.appendChild(input);
    checkboxLabel.appendChild(checkbox);
    container.appendChild(checkboxLabel);
    container.appendChild(label);
    container.addEventListener('click', (e) => {
        if (e.target == container) {
            input.checked = !input.checked;
            input.dispatchEvent(new CustomEvent('change', { bubbles: true }));
            (0,_Storage__WEBPACK_IMPORTED_MODULE_1__.updateSetting)(name, input.checked);
        }
    });
    return container;
};


/***/ }),

/***/ "./A1Sauce/Settings/Library/Controls/color.ts":
/*!****************************************************!*\
  !*** ./A1Sauce/Settings/Library/Controls/color.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createColorSetting: () => (/* binding */ createColorSetting)
/* harmony export */ });
/* harmony import */ var _Components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Components */ "./A1Sauce/Settings/Components/index.ts");

const createColorSetting = (name, description, defaultValue) => {
    const input = (0,_Components__WEBPACK_IMPORTED_MODULE_0__.createInput)('color', name, defaultValue);
    input.id = name;
    const label = (0,_Components__WEBPACK_IMPORTED_MODULE_0__.createLabel)(name, description);
    label.setAttribute('for', name);
    const container = (0,_Components__WEBPACK_IMPORTED_MODULE_0__.createFlexContainer)();
    container.appendChild(input);
    container.appendChild(label);
    return container;
};


/***/ }),

/***/ "./A1Sauce/Settings/Library/Controls/dropdown.ts":
/*!*******************************************************!*\
  !*** ./A1Sauce/Settings/Library/Controls/dropdown.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createDropdownSetting: () => (/* binding */ createDropdownSetting)
/* harmony export */ });
/* harmony import */ var _Components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Components */ "./A1Sauce/Settings/Components/index.ts");

const createDropdownSetting = (name, description, defaultValue, options) => {
    const select = (0,_Components__WEBPACK_IMPORTED_MODULE_0__.createDropdown)(name, defaultValue, options);
    const label = (0,_Components__WEBPACK_IMPORTED_MODULE_0__.createLabel)(name, description);
    select.id = name;
    select.selectedIndex = defaultValue;
    const container = (0,_Components__WEBPACK_IMPORTED_MODULE_0__.createFlexContainer)(['reverse-setting']);
    container.appendChild(select);
    container.appendChild(label);
    return container;
};


/***/ }),

/***/ "./A1Sauce/Settings/Library/Controls/input.ts":
/*!****************************************************!*\
  !*** ./A1Sauce/Settings/Library/Controls/input.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTextSetting: () => (/* binding */ createTextSetting)
/* harmony export */ });
/* harmony import */ var _Components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Components */ "./A1Sauce/Settings/Components/index.ts");

const createTextSetting = (name, description, defaultValue) => {
    const input = (0,_Components__WEBPACK_IMPORTED_MODULE_0__.createInput)('text', name, defaultValue);
    input.id = name;
    const label = (0,_Components__WEBPACK_IMPORTED_MODULE_0__.createLabel)(name, description);
    label.setAttribute('for', name);
    const container = (0,_Components__WEBPACK_IMPORTED_MODULE_0__.createFlexContainer)();
    container.appendChild(input);
    container.appendChild(label);
    return container;
};


/***/ }),

/***/ "./A1Sauce/Settings/Library/Controls/number.ts":
/*!*****************************************************!*\
  !*** ./A1Sauce/Settings/Library/Controls/number.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createNumberSetting: () => (/* binding */ createNumberSetting)
/* harmony export */ });
/* harmony import */ var _Components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Components */ "./A1Sauce/Settings/Components/index.ts");

const createNumberSetting = (name, description, options = {}) => {
    var _a, _b, _c;
    const { defaultValue = (_a = options.defaultValue) !== null && _a !== void 0 ? _a : 10, min = (_b = options.min) !== null && _b !== void 0 ? _b : 1, max = (_c = options.max) !== null && _c !== void 0 ? _c : 20, } = options;
    const input = (0,_Components__WEBPACK_IMPORTED_MODULE_0__.createInput)('number', name, defaultValue);
    input.id = name;
    input.style.minWidth = '75px';
    input.setAttribute('min', min.toString());
    input.setAttribute('max', max.toString());
    const label = (0,_Components__WEBPACK_IMPORTED_MODULE_0__.createLabel)(name, description);
    const container = (0,_Components__WEBPACK_IMPORTED_MODULE_0__.createFlexContainer)(['reverse-setting']);
    container.appendChild(input);
    container.appendChild(label);
    return container;
};


/***/ }),

/***/ "./A1Sauce/Settings/Library/Controls/range.ts":
/*!****************************************************!*\
  !*** ./A1Sauce/Settings/Library/Controls/range.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createRangeSetting: () => (/* binding */ createRangeSetting)
/* harmony export */ });
/* harmony import */ var _Utils_timeout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Utils/timeout */ "./A1Sauce/Utils/timeout.ts");
/* harmony import */ var _Components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Components */ "./A1Sauce/Settings/Components/index.ts");
/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Storage */ "./A1Sauce/Settings/Storage/index.ts");
/* harmony import */ var _Styles_range_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Styles/range.css */ "./A1Sauce/Settings/Library/Styles/range.css");




let isMouseDown = false;
async function updateRangeValue(e, rangeInput, add) {
    if (add) {
        rangeInput.value = String(parseInt(rangeInput.value, 10) + 1);
    }
    else {
        rangeInput.value = String(parseInt(rangeInput.value, 10) - 1);
    }
    rangeInput.dispatchEvent(new Event('input', { bubbles: true }));
    (0,_Storage__WEBPACK_IMPORTED_MODULE_2__.updateSetting)(rangeInput.id, rangeInput.value);
    await (0,_Utils_timeout__WEBPACK_IMPORTED_MODULE_0__.timeout)(50);
    if (isMouseDown)
        updateRangeValue(e, rangeInput, add);
}
const createRangeSetting = (name, description, options = {}) => {
    var _a, _b, _c, _d, _e;
    const { classes = (_a = options.classes) !== null && _a !== void 0 ? _a : '', defaultValue = (_b = options.defaultValue) !== null && _b !== void 0 ? _b : '100', min = (_c = options.min) !== null && _c !== void 0 ? _c : 0, max = (_d = options.max) !== null && _d !== void 0 ? _d : 100, unit = (_e = options.unit) !== null && _e !== void 0 ? _e : '%', } = options;
    const rangeInput = (0,_Components__WEBPACK_IMPORTED_MODULE_1__.createInput)('range', name, defaultValue);
    rangeInput.setAttribute('min', min.toString());
    rangeInput.setAttribute('max', max.toString());
    const value = ((parseInt(rangeInput.value, 10) - parseInt(rangeInput.min, 10)) /
        (parseInt(rangeInput.max, 10) - parseInt(rangeInput.min))) *
        100;
    rangeInput.style.background =
        'linear-gradient(to right, #3e5765 0%, #3e5765 ' +
            value +
            '%, #0d1c24 ' +
            value +
            '%, #0d1c24 100%)';
    rangeInput.oninput = function () {
        const value = ((parseInt(rangeInput.value, 10) - parseInt(rangeInput.min, 10)) /
            (parseInt(rangeInput.max, 10) - parseInt(rangeInput.min))) *
            100;
        rangeInput.style.background =
            'linear-gradient(to right, #3e5765 0%, #3e5765 ' +
                value +
                '%, #0d1c24 ' +
                value +
                '%, #0d1c24 100%)';
    };
    const minusButton = document.createElement('div');
    minusButton.classList.add('minus-btn');
    minusButton.classList.add('nis-btn');
    minusButton.addEventListener('mousedown', (e) => {
        isMouseDown = true;
        updateRangeValue(e, rangeInput, false);
    });
    const plusButton = document.createElement('div');
    plusButton.classList.add('plus-btn');
    plusButton.classList.add('nis-btn');
    plusButton.addEventListener('mousedown', (e) => {
        isMouseDown = true;
        updateRangeValue(e, rangeInput, true);
    });
    minusButton.addEventListener('mouseleave', () => {
        isMouseDown = false;
        console.log('Mouse is now up: minus leave');
    });
    plusButton.addEventListener('mouseleave', () => {
        isMouseDown = false;
        console.log('Mouse is now up: plus leave');
    });
    document.addEventListener('mouseleave', () => {
        isMouseDown = false;
        console.log('Mouse is now up: document leave');
    });
    minusButton.onmouseup = () => {
        isMouseDown = false;
        console.log('Mouse is now up: minus up');
    };
    plusButton.onmouseup = () => {
        isMouseDown = false;
        console.log('Mouse is now up: plus up');
    };
    document.addEventListener('mouseup', () => {
        isMouseDown = false;
        console.log('Mouse is now up: document up');
    });
    const flexcontainer = document.createElement('div');
    flexcontainer.classList.add('flex');
    flexcontainer.classList.add('flex-between-center');
    const label = (0,_Components__WEBPACK_IMPORTED_MODULE_1__.createLabel)(name, description);
    label.classList.add('full');
    if ((0,_Storage__WEBPACK_IMPORTED_MODULE_2__.getSetting)(name) != undefined) {
        rangeInput.value = (0,_Storage__WEBPACK_IMPORTED_MODULE_2__.getSetting)(name);
    }
    const output = (0,_Components__WEBPACK_IMPORTED_MODULE_1__.createOutput)();
    output.setAttribute('id', `${name}Output`);
    output.setAttribute('for', name);
    output.innerHTML = rangeInput.value + unit;
    output.after(unit);
    const container = (0,_Components__WEBPACK_IMPORTED_MODULE_1__.createFlexContainer)();
    if (classes.length) {
        for (let i = classes.length; i--; i >= 0) {
            container.classList.add(classes[i]);
        }
    }
    container.classList.add('flex-wrap');
    container.appendChild(label);
    flexcontainer.appendChild(minusButton);
    flexcontainer.appendChild(rangeInput);
    flexcontainer.appendChild(plusButton);
    container.appendChild(flexcontainer);
    container.appendChild(output);
    rangeInput.addEventListener('input', () => {
        output.innerHTML = rangeInput.value + unit;
    });
    return container;
};


/***/ }),

/***/ "./A1Sauce/Settings/Library/Controls/seperator.ts":
/*!********************************************************!*\
  !*** ./A1Sauce/Settings/Library/Controls/seperator.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createSeperator: () => (/* binding */ createSeperator)
/* harmony export */ });
const createSeperator = () => {
    return document.createElement('hr');
};


/***/ }),

/***/ "./A1Sauce/Settings/Library/Controls/text.ts":
/*!***************************************************!*\
  !*** ./A1Sauce/Settings/Library/Controls/text.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createHeading: () => (/* binding */ createHeading),
/* harmony export */   createSmallText: () => (/* binding */ createSmallText),
/* harmony export */   createText: () => (/* binding */ createText)
/* harmony export */ });
const createHeading = (size, content) => {
    const header = document.createElement(size);
    header.innerHTML = content;
    return header;
};
const createText = (content) => {
    const text = document.createElement('p');
    text.innerHTML = content;
    return text;
};
const createSmallText = (content) => {
    const text = document.createElement('small');
    text.innerHTML = content;
    return text;
};


/***/ }),

/***/ "./A1Sauce/Settings/Library/index.ts":
/*!*******************************************!*\
  !*** ./A1Sauce/Settings/Library/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createAlarmSetting: () => (/* reexport safe */ _Controls_alarm__WEBPACK_IMPORTED_MODULE_0__.createAlarmSetting),
/* harmony export */   createButton: () => (/* reexport safe */ _Controls_button__WEBPACK_IMPORTED_MODULE_1__.createButton),
/* harmony export */   createCheckboxSetting: () => (/* reexport safe */ _Controls_checkbox__WEBPACK_IMPORTED_MODULE_2__.createCheckboxSetting),
/* harmony export */   createColorSetting: () => (/* reexport safe */ _Controls_color__WEBPACK_IMPORTED_MODULE_3__.createColorSetting),
/* harmony export */   createDropdownSetting: () => (/* reexport safe */ _Controls_dropdown__WEBPACK_IMPORTED_MODULE_4__.createDropdownSetting),
/* harmony export */   createHeading: () => (/* reexport safe */ _Controls_text__WEBPACK_IMPORTED_MODULE_9__.createHeading),
/* harmony export */   createNumberSetting: () => (/* reexport safe */ _Controls_number__WEBPACK_IMPORTED_MODULE_6__.createNumberSetting),
/* harmony export */   createRangeSetting: () => (/* reexport safe */ _Controls_range__WEBPACK_IMPORTED_MODULE_7__.createRangeSetting),
/* harmony export */   createSeperator: () => (/* reexport safe */ _Controls_seperator__WEBPACK_IMPORTED_MODULE_8__.createSeperator),
/* harmony export */   createSmallText: () => (/* reexport safe */ _Controls_text__WEBPACK_IMPORTED_MODULE_9__.createSmallText),
/* harmony export */   createText: () => (/* reexport safe */ _Controls_text__WEBPACK_IMPORTED_MODULE_9__.createText),
/* harmony export */   createTextSetting: () => (/* reexport safe */ _Controls_input__WEBPACK_IMPORTED_MODULE_5__.createTextSetting)
/* harmony export */ });
/* harmony import */ var _Controls_alarm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Controls/alarm */ "./A1Sauce/Settings/Library/Controls/alarm.ts");
/* harmony import */ var _Controls_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Controls/button */ "./A1Sauce/Settings/Library/Controls/button.ts");
/* harmony import */ var _Controls_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Controls/checkbox */ "./A1Sauce/Settings/Library/Controls/checkbox.ts");
/* harmony import */ var _Controls_color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Controls/color */ "./A1Sauce/Settings/Library/Controls/color.ts");
/* harmony import */ var _Controls_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Controls/dropdown */ "./A1Sauce/Settings/Library/Controls/dropdown.ts");
/* harmony import */ var _Controls_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Controls/input */ "./A1Sauce/Settings/Library/Controls/input.ts");
/* harmony import */ var _Controls_number__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Controls/number */ "./A1Sauce/Settings/Library/Controls/number.ts");
/* harmony import */ var _Controls_range__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Controls/range */ "./A1Sauce/Settings/Library/Controls/range.ts");
/* harmony import */ var _Controls_seperator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Controls/seperator */ "./A1Sauce/Settings/Library/Controls/seperator.ts");
/* harmony import */ var _Controls_text__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Controls/text */ "./A1Sauce/Settings/Library/Controls/text.ts");







//export * from './Controls/profile';





/***/ }),

/***/ "./A1Sauce/Settings/Storage/index.ts":
/*!*******************************************!*\
  !*** ./A1Sauce/Settings/Storage/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSetting: () => (/* binding */ getSetting),
/* harmony export */   loadSettings: () => (/* binding */ loadSettings),
/* harmony export */   setDefaultCheckbox: () => (/* binding */ setDefaultCheckbox),
/* harmony export */   setDefaultNumberOrRange: () => (/* binding */ setDefaultNumberOrRange),
/* harmony export */   setDefaultOther: () => (/* binding */ setDefaultOther),
/* harmony export */   setDefaultSettings: () => (/* binding */ setDefaultSettings),
/* harmony export */   settingsExist: () => (/* binding */ settingsExist),
/* harmony export */   updateSetting: () => (/* binding */ updateSetting)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../index */ "./A1Sauce/index.ts");

const setDefaultSettings = () => {
    const settings = document.querySelectorAll('[data-setting]');
    settings.forEach((setting) => {
        if (setting.dataset.setting === undefined)
            throw Error(`Setting (${setting.id}) is missing a data-setting`);
        switch (setting.type) {
            case 'number':
            case 'range':
                setDefaultNumberOrRange(setting);
                break;
            case 'checkbox':
                setDefaultCheckbox(setting);
                break;
            default:
                setDefaultOther(setting);
        }
    });
};
const setDefaultNumberOrRange = (setting) => {
    if (setting.dataset.defaultValue === undefined)
        throw Error('Range input value is undefined');
    updateSetting(setting.dataset.setting, parseInt(setting.dataset.defaultValue, 10));
};
const setDefaultCheckbox = (setting) => {
    if (setting.dataset.defaultValue == 'false') {
        updateSetting(setting.dataset.setting, false);
    }
    else {
        updateSetting(setting.dataset.setting, true);
    }
};
const setDefaultOther = (setting) => {
    updateSetting(setting.dataset.setting, setting.dataset.defaultValue);
};
const loadSettings = () => {
    const settings = document.querySelectorAll('[data-setting]');
    settings.forEach((setting) => {
        var _a;
        if (setting.dataset.setting === undefined)
            throw Error(`Setting (${setting.id}) is missing a data-setting`);
        switch (setting.type) {
            case 'number':
            case 'range':
                setting.value =
                    (_a = getSetting(setting.dataset.setting)) !== null && _a !== void 0 ? _a : setting.dataset.defaultValue;
                break;
            case 'checkbox':
                setting.checked =
                    getSetting(setting.dataset.setting) ||
                        setting.dataset.defaultValue;
                break;
            default:
                setting.value =
                    getSetting(setting.dataset.setting) ||
                        setting.dataset.defaultValue;
        }
    });
};
const settingsExist = () => {
    const sauce = _index__WEBPACK_IMPORTED_MODULE_0__.A1Sauce.instance;
    if (!localStorage[sauce.getName()]) {
        setDefaultSettings();
    }
    else {
        loadSettings();
    }
};
const getSetting = (setting) => {
    const sauce = _index__WEBPACK_IMPORTED_MODULE_0__.A1Sauce.instance;
    if (!localStorage[sauce.getName()]) {
        localStorage.setItem(sauce.getName(), JSON.stringify({}));
        setDefaultSettings();
    }
    return JSON.parse(localStorage[sauce.getName()])[setting];
};
const updateSetting = (setting, value) => {
    const sauce = _index__WEBPACK_IMPORTED_MODULE_0__.A1Sauce.instance;
    if (!localStorage.getItem(sauce.getName())) {
        localStorage.setItem(sauce.getName(), JSON.stringify({}));
    }
    const save_data = JSON.parse(localStorage[sauce.getName()]);
    save_data[setting] = value;
    localStorage.setItem(sauce.getName(), JSON.stringify(save_data));
};


/***/ }),

/***/ "./A1Sauce/Settings/index.ts":
/*!***********************************!*\
  !*** ./A1Sauce/Settings/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Settings: () => (/* binding */ Settings),
/* harmony export */   SettingsManager: () => (/* binding */ SettingsManager),
/* harmony export */   SettingsType: () => (/* binding */ SettingsType)
/* harmony export */ });
/* harmony import */ var _Library_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Library/index */ "./A1Sauce/Settings/Library/index.ts");
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _a, _SettingsManager_instance;

var SettingsType;
(function (SettingsType) {
    SettingsType["Alarm"] = "alarm";
    SettingsType["Button"] = "button";
    SettingsType["Checkbox"] = "checkbox";
    SettingsType["Dropdown"] = "dropdown";
    SettingsType["Input"] = "input";
    SettingsType["Number"] = "number";
    SettingsType["Profile"] = "profile";
    SettingsType["Range"] = "range";
})(SettingsType || (SettingsType = {}));
/*
 *
 * Settings Manager is your access point to localStorage and building your Settings UI.
 *
*/
class SettingsManager {
    constructor() {
        this.name = '';
        this.majorVersion = 0;
        this.minorVersion = 0;
        this.patchVersion = 0;
        this.settings = [];
        this.setName = (name) => {
            this.name = name;
            return this;
        };
        this.getName = () => {
            return this.name;
        };
        this.addAlarmSetting = (name, description, options) => {
            var _b;
            (_b = this.settings) === null || _b === void 0 ? void 0 : _b.push(_Library_index__WEBPACK_IMPORTED_MODULE_0__.createAlarmSetting(name, description, options));
            return this;
        };
        this.addButton = (name, content, 
        // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
        fn, options) => {
            var _b;
            (_b = this.settings) === null || _b === void 0 ? void 0 : _b.push(_Library_index__WEBPACK_IMPORTED_MODULE_0__.createButton(name, content, fn, options));
            return this;
        };
        this.addCheckboxSetting = (name, description, defaultValue) => {
            var _b;
            (_b = this.settings) === null || _b === void 0 ? void 0 : _b.push(_Library_index__WEBPACK_IMPORTED_MODULE_0__.createCheckboxSetting(name, description, defaultValue));
            return this;
        };
        this.addDropdownSetting = (name, description, defaultValue, options) => {
            var _b;
            (_b = this.settings) === null || _b === void 0 ? void 0 : _b.push(_Library_index__WEBPACK_IMPORTED_MODULE_0__.createDropdownSetting(name, description, defaultValue, options));
            return this;
        };
        this.addHeader = (size, content) => {
            var _b;
            (_b = this.settings) === null || _b === void 0 ? void 0 : _b.push(_Library_index__WEBPACK_IMPORTED_MODULE_0__.createHeading(size, content));
            console.log(this.settings);
            return this;
        };
        this.addText = (content) => {
            var _b;
            (_b = this.settings) === null || _b === void 0 ? void 0 : _b.push(_Library_index__WEBPACK_IMPORTED_MODULE_0__.createText(content));
            return this;
        };
        this.addSmallText = (content) => {
            var _b;
            (_b = this.settings) === null || _b === void 0 ? void 0 : _b.push(_Library_index__WEBPACK_IMPORTED_MODULE_0__.createSmallText(content));
            return this;
        };
        this.addSeperator = () => {
            var _b;
            (_b = this.settings) === null || _b === void 0 ? void 0 : _b.push(_Library_index__WEBPACK_IMPORTED_MODULE_0__.createSeperator());
            return this;
        };
        this.addTextSetting = (name, description, defaultValue) => {
            var _b;
            (_b = this.settings) === null || _b === void 0 ? void 0 : _b.push(_Library_index__WEBPACK_IMPORTED_MODULE_0__.createTextSetting(name, description, defaultValue));
            return this;
        };
        this.addColorSetting = (name, description, defaultValue) => {
            var _b;
            (_b = this.settings) === null || _b === void 0 ? void 0 : _b.push(_Library_index__WEBPACK_IMPORTED_MODULE_0__.createColorSetting(name, description, defaultValue));
            return this;
        };
        this.addNumberSetting = (name, description, options = {}) => {
            var _b;
            (_b = this.settings) === null || _b === void 0 ? void 0 : _b.push(_Library_index__WEBPACK_IMPORTED_MODULE_0__.createNumberSetting(name, description, options));
            return this;
        };
        this.addRangeSetting = (name, description, options = {}) => {
            var _b;
            (_b = this.settings) === null || _b === void 0 ? void 0 : _b.push(_Library_index__WEBPACK_IMPORTED_MODULE_0__.createRangeSetting(name, description, options));
            return this;
        };
        this.getSettings = () => {
            return this.settings;
        };
        this.build = () => {
            const settings = this.getSettings();
            if (settings === null)
                throw new Error('Settings are empty - add settings before calling build()');
            const container = document.createElement('div');
            container.id = 'Settings';
            for (let i = 0; i < settings.length; i++) {
                container.append(settings[i]);
            }
            document.body.append(container);
        };
    }
    static get instance() {
        if (!__classPrivateFieldGet(_a, _a, "f", _SettingsManager_instance)) {
            __classPrivateFieldSet(_a, _a, new _a(), "f", _SettingsManager_instance);
        }
        return __classPrivateFieldGet(_a, _a, "f", _SettingsManager_instance);
    }
}
_a = SettingsManager;
_SettingsManager_instance = { value: void 0 };
const Settings = SettingsManager.instance;


/***/ }),

/***/ "./A1Sauce/Utils/capitalizeName.ts":
/*!*****************************************!*\
  !*** ./A1Sauce/Utils/capitalizeName.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   capitalizeAppName: () => (/* binding */ capitalizeAppName)
/* harmony export */ });
const capitalizeAppName = (str) => {
    let split_str = [];
    if (str.includes('-') && str.includes(')')) {
        throw new Error('AppName must use either a hyphen or underscore as seperator - not both!');
    }
    if (str.includes('-')) {
        // 'job-gauges'
        split_str = str.split('-');
    }
    // 'job_gauges'
    else if (str.includes('_')) {
        split_str = str.split('_');
    }
    // 'JobGauges'
    else {
        split_str = str.split(/(?=[A-Z])/);
    }
    for (let i = 0; i < split_str.length; i++) {
        split_str[i] = split_str[i][0].toUpperCase() + split_str[i].substr(1);
    }
    return split_str.join(' ');
};


/***/ }),

/***/ "./A1Sauce/Utils/getById.ts":
/*!**********************************!*\
  !*** ./A1Sauce/Utils/getById.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getById: () => (/* binding */ getById)
/* harmony export */ });
const getById = (id) => {
    let el = document.getElementById(id);
    if (el)
        return el;
    return null;
};


/***/ }),

/***/ "./A1Sauce/Utils/hextoRgb.ts":
/*!***********************************!*\
  !*** ./A1Sauce/Utils/hextoRgb.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hexToRgb: () => (/* binding */ hexToRgb)
/* harmony export */ });
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
        }
        : null;
}


/***/ }),

/***/ "./A1Sauce/Utils/tempTooltip.ts":
/*!**************************************!*\
  !*** ./A1Sauce/Utils/tempTooltip.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tempTooltip: () => (/* binding */ tempTooltip)
/* harmony export */ });
/* harmony import */ var _timeout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timeout */ "./A1Sauce/Utils/timeout.ts");

/* Must only be called after `window.onload` checks for `window.alt1` */
const tempTooltip = (msg, time) => {
    if (window.alt1 === undefined)
        throw new Error('Alt1 not detected in window object');
    /*
     * It isn't possible to mock the alt1 call and since window.alt1 must exist
     * for apps to work the below code is guaranteed to work if we get past the above check
     */
    /* c8 ignore start */
    alt1.setTooltip(msg);
    (0,_timeout__WEBPACK_IMPORTED_MODULE_0__.timeout)(time).then(() => {
        alt1.clearTooltip();
    });
    /* c8 ignore end */
};


/***/ }),

/***/ "./A1Sauce/Utils/timeout.ts":
/*!**********************************!*\
  !*** ./A1Sauce/Utils/timeout.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   timeout: () => (/* binding */ timeout)
/* harmony export */ });
const timeout = async (millis) => {
    return new Promise(function (resolve) {
        setTimeout(resolve, millis);
    });
};


/***/ }),

/***/ "./A1Sauce/index.ts":
/*!**************************!*\
  !*** ./A1Sauce/index.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A1Sauce: () => (/* binding */ A1Sauce)
/* harmony export */ });
/* harmony import */ var _Settings_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Settings/index */ "./A1Sauce/Settings/index.ts");
/* harmony import */ var _Utils_capitalizeName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils/capitalizeName */ "./A1Sauce/Utils/capitalizeName.ts");
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _a, _A1Sauce_instance;


class A1Sauce {
    constructor() {
        this.Settings = _Settings_index__WEBPACK_IMPORTED_MODULE_0__.SettingsManager.instance;
        this.createSettings = () => {
            this.Settings = _Settings_index__WEBPACK_IMPORTED_MODULE_0__.SettingsManager.instance;
            return this.Settings;
        };
        this.setName = (name) => {
            this.Settings.setName(name);
            this.setPublicName(name);
            return this;
        };
        this.setPublicName = (name) => {
            this.publicName = (0,_Utils_capitalizeName__WEBPACK_IMPORTED_MODULE_1__.capitalizeAppName)(name);
            return this;
        };
        this.getName = () => {
            return this.Settings.getName();
        };
        this.getPublicName = () => {
            return this.publicName;
        };
        this.setVersion = (major, minor, patch) => {
            this.Settings.majorVersion = major;
            this.Settings.minorVersion = minor;
            this.Settings.patchVersion = patch;
            return this;
        };
        this.getVersion = () => {
            const major = this.Settings.majorVersion;
            const minor = this.Settings.minorVersion;
            const patch = this.Settings.patchVersion;
            return `${major}.${minor}.${patch}`;
        };
    }
    static get instance() {
        if (!__classPrivateFieldGet(_a, _a, "f", _A1Sauce_instance)) {
            __classPrivateFieldSet(_a, _a, new _a(), "f", _A1Sauce_instance);
            __classPrivateFieldGet(_a, _a, "f", _A1Sauce_instance).Settings = _Settings_index__WEBPACK_IMPORTED_MODULE_0__.SettingsManager.instance;
        }
        return __classPrivateFieldGet(_a, _a, "f", _A1Sauce_instance);
    }
}
_a = A1Sauce;
_A1Sauce_instance = { value: void 0 };


/***/ }),

/***/ "./data/constants.ts":
/*!***************************!*\
  !*** ./data/constants.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appName: () => (/* binding */ appName),
/* harmony export */   majorVersion: () => (/* binding */ majorVersion),
/* harmony export */   minorVersion: () => (/* binding */ minorVersion),
/* harmony export */   patchVersion: () => (/* binding */ patchVersion),
/* harmony export */   versionUrl: () => (/* binding */ versionUrl)
/* harmony export */ });
const appName = 'action-bar-tracker';
const versionUrl = 'https://raw.githubusercontent.com/NadyaNayme/NyusActionBarTracker/master/dist/version.json';
const majorVersion = 1;
const minorVersion = 0;
const patchVersion = 0;


/***/ }),

/***/ "./patchnotes.ts":
/*!***********************!*\
  !*** ./patchnotes.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   notes: () => (/* binding */ notes)
/* harmony export */ });
const notes = [
    // Add patch notes to top
    {
        date: '8/21/2024 - Now With Overlay v1.0.0',
        note: [
            `Abilities now render as an Alt1 Overlay instead of in the app window`,
            `You can now change the color of the border around the most recently used ability`,
            `If it looks weird - refresh. Sorry the UX is mediocre - I hope to clean it up eventually`
        ],
    },
];


/***/ }),

/***/ "data:font/opentype;base64,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":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:font/opentype;base64,d09GRk9UVE8AAIM0AAwAAAAAr4QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABCQVNFAAABHAAAAEYAAABGZUtdvUNGRiAAAAQUAABlnQAAeRVADJxBR1BPUwAAabQAABT4AAAobCmytThPUy8yAAADlAAAAFYAAABgYne5h1NLVFAAAH6sAAAAVAAAASc5p19jY21hcAAAgUgAAAHpAAADrjnVGzBoZWFkAAABZAAAADQAAAA2/EU1FWhoZWEAAAPsAAAAIAAAACQK0gF4aG10eAAAfwAAAAI0AAADTAaVISxtYXhwAAAEDAAAAAYAAAAGANNQAG5hbWUAAAGYAAAB/AAAA+TxlNPocG9zdAAAgTQAAAATAAAAIP+4ADIAAQAAAAgAAAAEAA4AAmlkZW9yb21uAARERkxUABpjeXJsABpncmVrABpsYXRuABoABgAAAAAAAQACAAgADAAB/4MAAQAAAAB42mNgZGBgYGTyPZDooxnPb/OVgZn5BVCE4XT298Uw+j/vvxR2TxY7IJeZgQkkCgBxRA0aeNqNkc1u00AUhY/TtAgWERJiP0KIBVL9EysliVeJGolKSI2aqns7niZubE9kTwN5B9Y8ALvueADWvANvwpKT8RQqtYt4NJ7v3nvuj8cAXuIXHDTPB+6GHbym1XALz/DJ8gHeYma5Tc1ny4cY4qvlI7z6V7ODAL+Z5bSf0yqdF5YdvHe+WG6h43y3fICPzg/LbWr+WD6Ebr2xfIR3rW+WO0haP+9E1w8CMUpVIsVsW2tZ1OKsnKtqrapYy9QVozwXVbZY6lpUspbVhs7LKr6JSzGtlAjFTBZZovL0Qi5u87gKXN8fRKPT8SRqZFSFx/ciBs7Hkyfzr2RVZ6oUTYHpzIAfLZWeq3Kzs9yTQVTEK6n0tZtnSdftuWGvH/Sf6LPUej30PL1dy1Wm3bkqPMnpas9//ARdOQhxB4EufN56QBohhUICSZ5hixqaXPAUOEOJOaMV1uYdm1gK1+TlXILeDAssGamNJXlKnhurvDR5N9wl41Naimdouu36ZOytWCnFBe0FbskxVQFzfa4BIvY6xRgT0sNqTa0Qx48qNRnnJmf//ldm7poeZbQPJ5hS/d/j07OkSpvbKfmt9zEXJ0ZfsN+K9Xaaa3pz06dL6nGHfPeZ0d/ze3a3q/kPhvC4NP/SmooVFZrVdjMU9Et7dzXZ32sFnEhy3vAviB24oHjaY2BhmsIUwcDKwMDUBaQZGLwhNGMcgxFjHVCUiY2JlZWZiZlRgYGpHSjPyAAFji5OrgwODAqKSkzv/rMxMLBUMm5WYGCcD5JjqmV6B6SAWgAQmwwQAAB42mNgZGBgqfzny8DA+u8/759Idk8GoAgKuAwAjB4GUgAAUAAA0wAAeNqcuwd8E8e6PixhbC+7RhgLUXbZXdwJpBMSCOQkkARCCaGFFjoYbIN7L7JkldWutLvqkpuMG930bprpBEhCEpITCKSc9HbS88pnyc03Mjnnnv+997u///fZP6zV7M7szDvv+7zPMzOoVX2jVGq1etD8wlXZq3JnF+aNeWBeRk7W6ryNayPl44arJdVwtawernbGoQtXn+Fqd1SY7KvY7j4yPHbaP96KplWqB1IGRP7uGThc9QS6mNeVoCL6qNSqaFWcSqsiVYmq0aqHVftUv6sT1MzzJYV5JblZDz886bl7Hw/3fkweG/l4dPKz6OOR58ePebBozSMPPvzww/c6NiKraERGVnFmRuGIVSMKM9ZnFRVnFGasHVFcuGptRs6qwg0j8iJ3/u3ruhGT1uatzhgxrwI9mlM0YlrumrzC/LzCVcWoWlbuCNTWiJdzsyLf5hWjwqIRq3LXPoRayet9yxrUx+LCrIyiB5f+l5+SKVOmPDdixKMPP/LI//KKB0dM2rhxRGHW+sziItThoozCUlT452CQmUeMGfFPO/97YZ/oiN2eUhnUK9R3+ozp835UdZQ+6lbfvX2/6ftt3++i2egR0YnRSdG3Yjwxl2IuY0swH3ax35J+hn7GfrX4bPwY3oUDkUgEiTriA+LDuLlxi+L+I+6P/mn97+8/rv/4/k/2n9n/xf4b+u/u39X/XP9f+/f0/4dmjGanpktzXHNRE46PjcfiU+Onxq+LN8bXxtvjW+JPxZ+OvxB/Mf6T+J/if47/Jf7X+N8SjAm1CdYELuF4womEkwmnEk4nnNP+Piht0P2DHhg0aVDJoNJBZTq7zqVz6zw6r86n8+sCutO6N3TXde/rPhr89eCfBv88+JchsUOwIf2G4EOIIXFD+g/RDBkw5MEhDw15eMgjQ54ZMmnIzCFVQ6qHOIaIQ6Qh8hDPkE1Dfhzy05Cfh/wy9PbQO0N/HHZi2Mlhp4adHtY97Pywa8NeG6aQNPkI+Sg5jhxPPkmuI9eTx8lz5DXyLfIOFUPFUhjVj8IpikqnRlL3UaOo0dT91APUNeo2dYf6gPqE+pr6ngoP7zccHx4Y3jS8bfjW4buHHxx+avjF4ZeGX6an0zPoq/QN+h1mFvMSs5BZzmQx2UwRU8zUMhxjY3hmJ3OYOc2cZ15lH2YD7A52D3uQPcQeZo+wp9hX2SvsdfZN9l32ffb2iEdGmEc4RtwZ8cGILxLHJc5LXJa4PjE/sTixOtGcyCfWJYYStyR2Ju5PPJB4MLErsTvxQuIbSdokKmlE0n1JDyY9ljQ2aULSxKRJSVOSpia9kDQtaXrS3KQlSSuSMpLWJa1PykkqTtqddD7pStLNpK+TfkqC5Ojk+GRd8uDkxOSk5OTkh5KnJE9NfiF5WvKC5FeSlyavSl6dvD55Y3JJcmvy1uRtyduTLyV/kvxpck+KKiU6BU8hUuJTBqYkpFApw1MSU9JS0lNGpjyQ8mDKYylPpjydMiNldsrSlGUpq1NMKeYUS4o1xZ6yI2VnSmfKrpQDKUdTjqV0p5xJuZzyWsrrKTdSbqb8lqKkqlKjU4nUoanDUpNTU1JTU0eljk69P/WR1MdTn0idnPps6gup01Jnpc5LzUotTC1KrUitTeVS5VRnqivVnRpIbUxtSW1N3ZK6O/Vg6qHUi6lXUz9M/Sj149SvUr9O/Sb129RfU39LhdRw6u+p/5H6R1rftMFpI9IS05LSktNGpj2Y9lDaY2lj0x5Pm5g2KW1y2tS0mWlz0uamzUubn/ZK2pq0zLSstOy0DWn5aSVppWllaeVpFWmVaVVpxjRrGpfmSPOmNadtSmtJ2512JO1k2qm0c2mvpl1Ju5p2Pe1O2tdpP6T9nvYfaX+kq9LV6X3So9Lx9AHpg9Op9BHpielJ6cnpD6Y/mT4hfWL6U+mT06emz0yfkz43fV76/PSX05emr0/PTM9Kz03PS89PL0kvTa9KN6bXpnPhobBWBwHcduUX6RBk0UrmXaF4jt4w0zoMVuKbTupsdkkW2Vuw0umXBdk87KayMpoXHQJHEZ++y/2N6vQ6Wt2sq8lzuZX0ObwWi8CZBMayvray2IjVlqxzFFMP1dRdFFj7ZvHNbeS1WLgfhzWxbkl2MgTk4XpHFr+esReaKsp4M2901MLbuM1GWjxCHdN5UW7tuHw+Lingggl0LVsDFXiebN0ktGPCbseuevKN2HbH1rqdTMMeiIfl23aFWv2+Zl+9u1HyiljA43S7LHItW/kSX5GftzEuyeCwCQ6rg/PyQlxqk81pMZNGW7WpnKnJG6lMqMjUtytxsMywGbMEbT4P6fG4AhJTJ4fvx12cbGJWreErc6aWxSUZHTabg3NYvbwjLtVvD9r83Kba5qr2rB3Loa8yJVCCBQt95ctJ4vtPrJ9S+3yOzR7Wtcn7Rhvpd3jNFsFmRBZabSgtMGCGglWOAiq1quE6stA28Ytd5K1Yt+h0tf/dHo7CrWItxklGj88R8HrkA+ImxnnK2egm3bxk42yc2cKYaqv5IgETipVYRwlltTs9LLhjPZLsYggdb+XNtay+Rhl8vxFNhkE0eyiPS/IE2f3tJ3Zsq8d8Lpcoy27BHZfSWnNy/bZCF+d0uJwHtwx1yqIskbLgNHiZ0oaJ50vqMa/BJtoo4iYtFFgrKm1mmEXbIIa+LDfUvdmN5sjtdDt5p5k1iBUOg5wvW5uFDsy223HxPTIU65IlJ/OWEO122W0yW1e9d8Gexcdmdq7dXY7VdHRYL1AfxgTcssdpQw1YRIvDJFY5s52vnFrY/eKtSV9gf7u2/fxV8sK6w3khZtvy2e6XqJzn+PzKWcvjkmqskIQH7EF7QNjCeWskUOhyZTBJ6OB9WryGN3Y4Me3egOSCv9Je1EVWe93NSTVMzjS+ojxSHz6kWe1eeB1ngnY0l/ABrZfyMSnPUaYMhq04X8hXFttML+C7rspNzVdOwSTa5rKwRrHcYZCKnOamiDPucVz/K/le7NtjvlOir87AlpzorP2RuhUTdMJIWq4RkUnMjipXvrekbvLrKw8qo2EMpOJEAqQCAaNo7fSVN3DtqJWTHdNtmQyfw5VXFOFa+0oDz9lYdBOepRktufLQHnkPpZ25MpHWzpz9MK6dNlvaLDaJjZi0xx10k067E7kEb+fCqfQcnIBtMFlX5VjFwx3cVFJmwwSTQdBTRo7nzF6hnt17Re7YcuVKXFKdV/Yg9zbCXNrUCgdwx6FG8k5sp2NHwx4mdBhGgKHzQOuWQLDFj3kbmp1+KoAqQAfOlk/jS3I3ZKOw4gSL1Sf4BBbFlLGWrLFV1pYw+o1KgpJfW1S1VRkBVv12zFLPBb2k1+X1SUyD0yMiN+bkWmb5ar40+5kK1IyFt6Kw9wabrJY6ttnYUdixbvdCIJV8TxVWl+sveRlNqsdklTnKVsvV1rCFFdNn5mRiNqsNAQYsxGWnmznatr/59CbM09TmdFHwPc6xhlZDXW0A0xCEbT2U0BXlNrNQ63ifttmsbluQ3XVZ3tR6+UJ4AI3cl3PW/kDny1wz34bZ9joI9NMTRHY86TggbmfE3f7wA7gU9IheyhMmcYtUw2Yv4DfmzFwYl6S3CGarW/DVd+GdFl+VmIWJOY6MxeQDsZW2mmoLYyzKRIGurFdoGAsbYMCed891sRfevOE8S0H0+8s2bGc357k2yMWYWZQ4D+WVXY0sDPRsDZAeFIQiUyxmukudmLNsTHAK9cSjljmj2Yfnj1P6Ko+RyjbIUTAQbn4X2HWNQd2TtpBEVE9ZD65r5jlfeBRu1ptYxXJ3g8KFM6LbajiXmbJw5kob+/jdw1yWZWMBN8xgtzgsdszE2WxmNAnstsNyqPnAPuQfHsmLDGNma0Wjo0rGqpy13hBZ5whKm5jD8O7WOaeTfOXDGnJfVwa0rcHyGr1VPgQynoObWJgf1py4q3LmCxYLP8wqIMiCHXiznbF1QV9hJ1XnR470Dm4QKx2FngKvqc3cjRHhpyGgc8kCJ7HvK5kug8VkEYbV2sFEW132kJ0R3n/fsYfa65O8KIzNhmpRrmYJAl7kTi0JuUvh8HFwdcllW8oSwmMhFmY2ahcb4SR8rrMKotfJehq+gdGhrZgo8TZWmRPL2QUL80pftyRw7OpY7XjjJPuLfCZjy+HLynkM1bXAGJxD81rHHuiUO197lwM1tas35Wnrjc4/s57HYuVttXbGkmnszXrF61HWe0QfvCSwXvGjbeShWJfodLZ+KAghZhdfV+Msl2vDqTiCdovb6/AjaO8Umxj5oDOEYsIm8xxvM1sZs6mGLxAwe8n9jjKKsyPoAn1v3mz+NNLQEc5rcldhTqOot5BmUba5KZfsdomsdp5RbJR2iQFM3iPX9QKDjUPAYGPQeMz2aqESNVqpPIfcUfuysbRC1lMW3mbhWd7Cm6qLDWXK3rt/yc/Elq/LWjKXMjmsvbnOFcl1B0/LTU3dF+OS/B4ZfqFrRbY4U94S8LZtP842tL8JhL8ec8lOFB8aHUolJh+zau/cM1WtZq/Nw4s2O+cwC5W2YlO1BTNznGAjbX5L0MRcWgexs9rtqKossxpG2u3tjTOvCNNxrxskPGM2X5g7MyMuqcosWM1uwR+ss/MBtpXzV0IGTYCO/iIBkj4fA8QnXzharM3a6SMjiDryvyDqyD8RdeQ9RB35J6KOjCBqSgRRU/5nRGXQ7ds4uOGObltTy9bN5aGCjVX55aX1BTtRa5eVzMHbQqi4rKlgo76otDSIijUBOejwi1gQzQnk0mzWs3x5wcurIjjBW61u3s/CBhrBC5z1lPbEh/iyhMJ/mLXXwd6iK/Q5axHKugO7Gtl9t6EP7Gg5AzPujh2aU+8yohuu4PYA2wXDPoPGg782n/Jva/X4nUEgaI8LrHgtm7OKt5rXvoJeZUXz7rF593gN1Qa+ylLC5o6apmSUz0QJUZkRHh+9xcDVmSiLxVKE4OGpu1PKz04Eu/7UMON+0+YA6ZM9XonRXvfLTocX3LTL6jSwi1fyRtPipSjtWniIpX2s195o91vrzb6y4AaM+DkFBilDrryEGQNBY4DyOX2trBPWy5CB/ornvC1bvZgcRD5PBcNq5D817JIM3lj6CgLQaqPdbHXywfp2h7WBba/1lYuz/HeXDK1sRPnjvqlvKGmQqtwPTxjqsFAlQei8ZqtspWxGm1HPFlQ8O2NDJsahAdtIB0oFkjcupavtUPPZZszd3I5SgcslBznW2FFTZwxiGp1XktwyK3vlVtGNuUQ7yinKwRibYLfZWcHCFdlNGCcKTkajm+1YIRQw9jKuthTl0GqDw0yZBBSgTt7L7rouudyX9yLuI7ucLpvDIrImBJK1YrnEBYQmjN8sHr9IQp/YO/LrTtLtcNlsYQpn1pdOzV5ahnECz4cpmnfKHofsY1xNre4A5ZHMlQjP2tohCmIOHDx2tC3Q6a93BuWQhAVE2S2TLl7WMzVz+DWrq1DuNaHcF36AtrPNnMhZSaO+PGMls3zxfUmr1mEEkWfrXnIivK/LV5ZwKLxLuw2WnNBBHLwAQ2EB+pyLOT1Olxu+xk2MsjkmY5VDHsdq68QSK0oQaIwGgdVmLsRRvRkw0gbpVKPL04BAtC34ZogM2Z0WFB5whDZweksNlqfPLnmQIubhKHYJ3V5xh5dsFFxWi9lsNDKzZynjlfmlBZjJyHMcyXkQX2OEzb/ZT1MbHWX2CsZewesLebPdJHJ2DGkIweoSPOzOXVKo/uTuuCSfAzmh7PBwEkIhzugQLWypbK+zhzDkfps6yU3bHGKQRZ7qlFmXz7dNdIteTrLaTFYzX2LH7NU1jmpq7ODlzzpEPdsQ+hT6bNmG7PPfw/l/jOVPcYuHJ67IbVuvXItLCs7FUeBuKju1pKXiGLQfh5IufZOnDBX9IghN7Emr3+CpwFwGscpGGiSrxyMhVGYI+2O23AIzZtNX2GuoWqtgNfnsdezpLtnXfAC1Wh/JaFbJWFUuuivZMk/NZuGmMTxhaKgcYpRBoFZUGMHnWiNM7ggu0USzzaeX8oqRqV2cy+hjlu998Wx5G+a1cB6e4lBeM7OVXGFttTmS0sM6GuJf6qDcvQDLzULIA5MlyedhXO6dcoh67WvDpL+y+zKOvJBKPlb1zPxlzPKF86ueoGasa2qsZU319s329oilr3yGKNhhvxSUWU+z/69e0m13I4S0WgTGlGesWs1j/PoX7UYqI4a3S6LMfvImRF8DnLwxt1tRz1tTU1vIWFGMcZXyfCtpka1O9BMQGXGTu6WhDqtvavO2UUcPlz+maJSYR8c8z5rMFrON5GXew2j+mbmqlBmOfIoguFWMLZeL2IPYe0ZuP3yr9ioF4z++dOAge+JE1+1fyR9Xv7XiMPPVA8pwp4JTcxbxufkvrYKxNMJe4hAfcpX2FIcSNvZI2r0/fq3LeqW8PBfNTnW13UKZI5Ki84Tc3HGlvZcAedwIa8wmUbSyJsnktvvsAVeDvxFGgnmoNv/YM+dHnr3PU2MzId+NgIOV1O61eIXNyMXfu+U408uY0dxaTAbRVckWeKuDla2FO5XHoX3DCRgHxqHbj2za2ubGnPVBCWpx2e22yEZ23WpEQlatvZcyLEikeesdqO9+3mNGCZ+vMuuZ6ryHFDZ3xdo3lt9Y+T5mDdhQ1kIqyiczsrdOdIc1dFiFr5vH65c+WRSBbMFqcfJuf6PANbK7je1F7WvgGWXfUA3hsiJ9W42IWLWrwl3bIlwzwfdD2wu/S/5kPEZYOStibjbaY2cuWzcV5pKrs0oXmBm9IPA2FMq8l9i0qtxdTGWuXL84j621OjmZckkOj5ttamjbtIsiUvhH5s9n1qx5Wb+Cylrm3LucXXIg9zKkksgNn8Plt/B2JyEFpSOiH5OPhYfiKO9y1kjeJcJx4b/pztr32tuFd+wtxVIxhjQoTxpEEULIiWfhiG6jRo7gTMDeYPfYt1k9RsihSxQdWRFr4wWeISAZt7byWzHusOPWF2SE0hOw3XpmUYQtfnMKLp6Uy7YitrgO4eHKVluzdvEz8F6Y0VkERHtZXzPC4amt+zDJKTtspGKKRahtYRb1dcuClX0FMcZnnsNRlT/FlYAmyoXEFeKGRxC3ePMTKxD/9/rfJQK2i+z6U/8LSP/X9Op/23/T/57/Vf/vu6f/Ubf+KyJVWkgTUhf3EEk775l/Gd0JO+h/WR1VNAtVQjkKtnJliWMDoonPlFTLVZTFZjULkfxYU12kL1HeuStuWI0tXr1u5nNU7b2lFYscoYmnz8uhTRevorwYcXxOqs1f7eys92/ZdZ5t2vo+JAUaMbfTFWGJRHUmmsaWAtdGE2mQrR6v7G1lbjq31ZEeTjZJjFGukStlzFmU48ygFPahiUqfJ/c9D33Gsr0T2YavJcIT9CfWnLqHwxuPGSLUvxuGhjMR+0fSensLvAg/6OAlUL/1K4z7VBmuPKtMGv+YMlChlIRfYQ2jLegONys/6D698f9nNQsRe1frh3bEx3fz/hpXuVTr4EQzhjrv9oo+ZOk9EWZ/2NnkJl2ChJI1/yezL4ww+9GOUsTsZcTs/1wR0xa0IB66puX/jYcWtCymtRkt1UWyhbIKPMeiARbJxfnkqWUTDysEpZiV/spjyjPKAyhrTAM7xL67/1Q3q81qyeKLqyJI6o4MONAi11GannYd/ETztru7f/cP5W0OXha2lA+VBNkhy+HdPYGhskuQBREjpCxM2kAQsZMdMyJ0OttaVcpZhFo4jBOXuEvzz/YM7vaXJVwM/6Dd9gaO+EOh1W2iEBfTCyyXU/1wMYpXzsNoM7to7bYzEdYbTtEVZ4sWGEjX8AbBKvPh/rQYpD54fn5McbZk+ZH+IOYJx0JuLdThlX8uXVTDGHpL92tQhBurDTAet4TAjx9wnP6QbI45fF5AilkUI5TO466T3FjAKUgWS7l9OTX5zX/ed4huJ+vyOAP37jvv3Z8es+PSx/Dg7ktbjtQFurxYQPaKDkTVLCJy5PKlfGlOblZckqHWznFem9/ObrV6OQNZYy4xljBFixePXD+1dP8j8FjZIczaUFvvIb1uT7OTaZIivP9rvJZZPpc3ZC9fH1neEDgOSReB9dlR2rTvMNeV7pm/d+51ZcDe5zENGmMlTtz70V2+1HleZHflbX752cVrlmRvzzvNbPirbteW+rY9oaKivIqSrLyi5h2MBsWWgVk/g68omQ1DcBQTp/+FdcQUWgoScFH3vxlHKY5BWb2pyeNwe0iY/r8aSqmJcd9senNfF7Z7a1fnO9Q7h4s3bGHrqv0bCkm9y+ZCEd0gMpscbVInI+50NnoQOZCtTJlY7s72Yt7Mdc4sSsHGrpr2MrtkdtEk4wxMrKx2hHX4ny4Ah3DE2+oou8GBKLTD4DDUxKWK5RUi9yMdiPE9s/np7pnYxOvf5/xEHe/2NG5n6zwuj9SAeU74TjaSPg7JZk6osjHWHHNeTTWWV7TStIRSUiYBBg+XsxplEJkY+2TEwlanLcAE7XUOj7AdpQspFyP++XP04IlDbaxbdgYtFM87OI7N3GCozaTKKjyN63sh5z+B8RUEjGiqnsPNdB174IpMAA4lSFg4PRIj+0NiB3Xxq9VK0vjcZTklbE1FjW0NVZgje0pZiyw4AygRCebyh6tII8Jjt/wb3dv4KZqQSsxeCyLfVkS+CZ0kSbJESjbZGGBWHnn0g/KtLdu//XX/Mczp9PpdcIK2IY5byyxYgRhT9IZ8zFBrNTt4h81tMcSltpZ8m9yRi+W1eSxOCjE/l6t3COHROm1JVW+gIQxxIOFvM5mreQNk4DulILUvxvhktYIVK8RfKoYh2WMzkxa/sImB5THaA2/BIO4CdU6Wm5ystiR4zPNRA1nHy1YrzyOcNM7YWJZmV+r4oXbp/de2Ae59Y5joF32iDzuJfMsW8UPZI7NOr6teioQakhCUtshSzi+n7ovxXnLtdh/AYGDo7Pk3qYO7aoqa2YYKb45YgBllzo0CyouS1ga50XX6JNkguMwiYxLNUq2EaYs8pdmu9dTcl8yvzGOff6lwtP5BTEPYEGkKsjvOy9v3HD+DGDZ00MR8vhHYZji5D4gGNXxNw3MQEwUNwOtgeaxfcrtFxumpF+up9k4+fyt7dIX8cjb51Ow58yvNPKLWSBIKzqDDScGAv9+C+GPF+8qa2MaKNbuUvlRmuV0oZuvEreIORtzsr9/iwqRgneSlPKJHcpHQgTMrZ/BlpbOWIxJqDw+ia6S8yDpzcTiJ7l2ZrETYZuNhG777MsqfV7oR9XTLbqdVjiw3VzhqpAIn18R3YNx+x2vvkZrIXOZdpIlOi7cqsgpCuJ3OeomV20J7O0NYaOdl+RQFi2IUUlmvjFRKlUQF+UcFz1lIS3g0TXSf8+08yb7d1Xr9Avn1yutK/8+ZvJbocVeKdx8jLx09/A5DGHrXuPOd1pCAXrrHcel2xGuNIPUuXCyHiRxMoEIeb8jFejrqru0k2wWPGQmbWoHh9dYKUxWWU7W2MBVFSZ4y94eP/iVFoekH7fz/Kyk68/+Qoo8hKXoD1uGKWQeLcb6s5KXMuCTiov0gkiebcSKyYE8SsZGArGf3z6AJXZXNbuDZmmnRJuTmyPmCTl87e6Lx45abIWw7ys1Iv1ichcw9Tvg57nd/Slez62fyRTm3aMIjBqCe9nlQdv4THWCxboO43LaCETZaSjJQWqoqsZtQ53gLIn0B9uwZeWvL1XOR3SrJ47HJXG2pKOvZbI81xO/AbEfEozvJrbsdHVSTy+lDJqvzH/SRXpuTY6w1tfkFhYgHws3Ya+KbDSTi+KZas8lkZsy1d/vdrbUgZcKZTAbSWGcLMgdgoeNt6mbfyYmOpdSuo/AkVG3ei2k2y9dbyAa722IzC3x1ZFQ38E9oYuaCuKRCmgiPom0ETKSVgbGraeI0deGq/+Rl9q+v+n74mvwsliCUeWdBA5m4OkKeXgEyKrzPpQN2QvR4SPkqC4ZSMOTn/VvPInB0uVykCw2P58JqvHjui9ZXqJlKbOBz5UVWmfS36IsHPvsC0kh4WYmsBWUrgSTlJSVJeeAHZSYEjp70BHcxo7bqUEk/6AcLYfH310ANgwAfoSxU7MqggqmspiKUAKmEYgMVTdzCj9LERMcMLpMhkFktEoFYg56vRWhFQBMOqRDB9MFXGuUtXta/q/nLRtJv90UWZA08Y1ianTUFsbF1Cm6vpKbGcILsdLGg+wk2wFOwgIR+z3yjPDfm5YqytYzRYreZyFzXONHEiAbZ4vLLPkdcyuZQV3sbs3V7p/cwdfJvG5RHUTS9ojysjFAGsLWmWpOZNHusSJ4SPQ/qbnsK8syS1Y18xi2y2qP+K/IRNCWC08wj2WtktO8Jxkohj1KEGKOFr7WzxUqTvcbDBYVht4wweVpkLX/w4wsmPD9ty28BwW2JbN8JDJctvpRNlkqmJhNj6Nhr3UlB9bdIeg6Dycr0O8p97Ww9aKI1mbP54mJoQdZQ9CP/oVXDxK+i4Eg4Svdc2fxn/7JBnr6IfGhl7iIjY0YKlSN5l833FmBnIIU5Zb65n7x+MLTdzfjEOtFDImg1SsxqT3bowjlv+ynyo9IDWZ3M7vWzglmUCYlIm5v3COxJ/dESRTOVt24kR13POK9HNmBrxArRIBGf0TsdQYrw0lK+o1jRbUGdOsmHqjaB+SRBOL0SI3ldQX9DQyvBw4zI/PVc1hXk2GqMO56tV+5jSyQZ5Qq30xsSWT+k7H4PPqUJSNF3QXMTHD5GhCpajaU9A0KojN5NWK0unugx6bR7E4v9VsQ7bbWs9notymHryFrRgrKrByUOqbFuRyiINbYfkrZSEIxRGKVKGaQczxuNcVVCdS1pkvnA0dsHN9XZ66QQUwf94ZFw4geAYzLKtYi9c3I5o+nx6pSxo1MV7Ygbj8Lgc4cbOztZSXK6nKRD5pEytQqWuBRLdQmXR82deBCS7xx47a+fnU9RHlEyFVyZrIybwBo41EOSdwput1eSfAw8vgf0MBs2k3D/EzBcmcBoztN6K8JpF+9jA/aA3SfMowmHDxFxr7DF2otE0TT0xQnKyjssNtZmRYUzdLAG4fKTL9PfEOGPUtClTkACXSAFUQgamcPLPx8XyivLTVfU61Zh5trIKhwvCZLL6/T6mDNHEQT33bkVC/g8XoeM2K8nEJda0jrqp8Lt2JYii4+nbEhtcKzmf2Ykv9xjJIF7jIT/JyOJ+e+M5KvkzblYfrvXHGEkEmIkmvYIlS+iCcXzYFPPZyE1xL8fBStRNHWJO9wBpt5/ynVAxoJep9tjFM2s8nyMXhCM7O/fxFaL9gYGno/x+sWIyjSI7Cp5gdvgx7gWYdchlCC7jp2ZF5rjYVDbD4R6PmtSw3zU9vwduqX2jVYjo69dxK3hMYPZZrUE7F4WNVUvSQG255vYBrtYzaBXmWvtFqtLCNrZQ3y3NViLuUqlrFWkpqpe6QsxkEojFOtfVY81VJv9JqqWN5QT8D4tvYV3uDAiZCrtMYVgKU74wUd7hG0c8RMeIDib1c0HWGL6q0oykESEBBBCdQm/gbo7IiY7Q5JzWUJ2u2yE9jaMgwNtyPVfaLE2E0Ye1YxM/uN0FkbYMUBJPC7J5yFgcFT4fn0KXkbcnRg+DFvVhz+JOhz+Rlflqm02MY3mLuN2EfPIHifHVjZVhs6T51vOdhxkXF7RKZFO5B+cBTFA5pUlU8dOIjXTEZ0FESf0KBkQke11AQUY8StehRM6mXaLBCqEE5FVl9W4C2X2+++tqcQl+SNkhVAe0R8O3zxEoDEGI0NFsYkeHYOjrsMsHjkuAR2Vuk8utoa2s3636HST++1X+XrGK9hdET7Kmewst9ZcXpKLlVVlly+jHs67duG1phNvfcISH0z4LeXcIqyyuc4YoLwubxsrwxQiAVkpgfiJjmzr1sBDtCeywLcrPHR3wqEmmPLtxB+1X8J9iLc4auxYLeFpaHcSoZ4nz/sjKwVwFAYS5xaE3KU9RVAVGXRyZGTGylNwIwTfIbQi2Bwn0lTbMO6Qg1iEa2//97WuyPDF9lZHgOrYzfP7WNSjB1ErHliG/i6PS9ITTbDgJLGShn4XgUapuP//sI00v0Op/h+Wnlfi9wysC7nQbLFuv9wpuDGnXZBLqbt0TAU8hndQGqouctLAaTRVOyQTW+osrNvw7mS8tnxpBeIukbMRHngIr4EcOkKRlFE1aBJm08C3EzAKdxBuTtYThGMityoyVX78sOPWt+idDF/IEQjtIz4nQgtCFEoPpaj7I/E8B7pbwBHX4Iddaqj9MQoOIZuuDREmmEUjE9CyEb3YhtIMgfASEYGhYIJq6PchDAEGRimYwinHlNGZE9gIiyVtboHwPBPNS3aJsTs3292UWxQlURBtrBBTa5MbhF4KduyNxWcojcNgR4KtgkY0LR91DPMhtyN2vyqH0FQhVWdHTkcipvMcCTXKk5CqmNGb+inFyhPKCxCj5MCxbgL24oUEmqMoQvQiVNXmwC6c6MqIeMGCroqIHxAcyj+SyydGXoz5RWfEModwP+FGXk8QfAgunAZHSwV6aQjaUEkQZU3C7LUHkB06dFnFRdkb2op2HmjqbO+o2rGW1YyCPb1LGaiZqzSMI0LhPmegO0RwiO4T8FjlhZ7xJ3qRfbCjDYlMhifQ8GYShBrqaKIr/HEIbtAEKQsSCqc6ez2a0A9oPeTgJRHOCxzEEf++4qr99tCVV05GHPNr9R7ojroRafq97a9dubRv/KTe1zyJqyMjE/MdxOc7/lA9ZFR1Hf9DxRpVX2lPEWaYSrv4OnZv5FE1lOCE2yobEKN0RMxFEFt4SMQjXW0miO6el0KEsJXzEHqEFL1tD8KH2c1EgAzmuPIZAp7H6yPFFbAd1UmFfn+yacTdawg0HgcSLm6rRCjO3zFAfLVAtoTC/fCLtyJuv8HDNfA7EXl2fPQN8qW37+pjxWejiRwMEQsCxdnXiOWPQ+QQPYrcwEv8oSowqu77DTo3a4tQlpz0M1T/+iRg2k8JyIItNDHa8Tji7/wGTr/B8mc/Ko/2TD+qJqCd3klQPjfimAjLgu7IAZqEyH0/8qp6hxcFEBFZ7g5YgmZm3dV7ltmEE6ugDidQPpeIpXFJ1fd0wmRafetLojfUYic6pkV6x2hnzkYfAmYWCAJ5sJFAOQBZlEM0jFCr1DEqLE6li1ZRU1VrVap1Mao8laqwj6o0SlXVR2VQq8wqlVWlElQqh0rlVKnsKpWkVjWoVCGVyqVSedWqrSpVm0rlV6s6VKrtKlWzStWoUrWrVE0q1TaVapNaFVSpWlWqzSpVvUq1Q6c6E626PEj1QbTaplLzarVdpXao1KJK9XbkePCLqtmqo6pv1EvVuer3+1zp836fD/p8HLU96mpfou+Qvvf1XdV3d/R90ROip0cvjS6I5qMbo3dGd0d/Hf1dzICY+2NmxXwTezP2G6wJO9wP79e/3/l+b+Ov4Jn4caKcqCMaiDPE23ET4/z9h/V/un9e/y7No5qnNE9rpmte1MzW2DWS5qDmouZVzQ3Nu5pfB9w/4KEB8oD6AZcH3Bjw9/io+AHxZDwdnxY/Mn5U/JPxz8VPiZ8bPz9+Yfzi+LXx6+Oz4o3xpvjX49+M/zj+h/i7A39L6JdAJgQTOhNOJryW8EHCd9oT2kvaN7W3tT8OGjLooUHPDJo7KG+QYZB70IFB53Urde26zYPHDv5oSN7QAUMHDtUO1Q0dMnTYUGpo+tBHhz41dPVQbtj4YWuG1Q+7OewfpJZ8kXpw+HSaoBPpCfQiOpcW6X30p/S3tMLMYOYxGUw1U8/sZP7O9mUZdiI7ly1jL42gRjSM+HrEPxIHJSYnjk2cnrg4MS9RTrya+Hbi3xI/Tfw28fekgUmjkyYkGZLEpJak40mXk+4k/T25b/LzyQuS1yUbk+XkhuRQyqyUFSmrlMGOU+FfTqkdp8NjuqMcfcNNPUvuNsV88Hu6Dp6HADyvBKKVNDivg+cgGH23IfbumHADuqUEFfQvekf4kg5+i1Eij2mUnzRKVyVE94wpU0M69I2CpTBDF5D8LTLr7DgU7iuFMP8dNxKsHl62Zo9fk13A8JzdYSGtrgoEDb51QSVWrJaqW5VXXMuwYlmsCVCSslS3q21L586ilg1rqrKLChs37mc1ii18CHGUM3A6CvpAFA2zBvdS/32TPcpItlR0cQj+nc5Wia2DtB3vIuqvkVtKoeI2jLoDmWXq4+GDUeFPwyt1dxRV7A7IjJ4Vs1HJjFbSYyJfZt77Qo2HATElyqhoZciTQMRkKRXRV2J2QUU0pPd+uXTvi/a2EhvTCqOixyujdKiFyCV6QrPYcaxnzCEH4gf94Q0aTN045Dp2FZbCd7sadsHp3Y6ycAKu3dndM3wwDDv5/ee3Fn6raJWEOaMeeKr7PtCyrl262Ws+uPHeVoS4B8ZPemLj7Fmstqpb+SYD9PhTJ9EjMPjs95+z2rJuKMBZ1BJcohn07YnM2bMYDcytvJpbGk4MwdUjCRcgzvwzOLZD9Gfa4/BppQ7oK2e3d6K60z4+wEGM56rDQ7UiyenhRJPI5kjL6zc05zcu3/LCWez86we/fI8M1rqLJMY1b41URCFBabb6BTfbYG8W6gxYQ42zopqclTe9LI8pb1IGQFTWfmzCp2Pf/4r86Nq2Q+d2lxZtYloLPBsKyGrR5nY7pQaJkRu873eSQYe30s0E8pf7l1DK5OeTJoqsuNy16tA8THv8pdz0cUo/8sGrCgXZzL6ruhGP3oKB7+88tquD/Ubpe+V50CpxWFnpnOy/UBrEWiMe8fUnUTCjxwt9cKBwGIYrbT3DG/QfJMD0Bu1KqOzZp/PysqVybnWNVbbJVka2tM+XN2AWG29zMkHjc+dyEAEXjKWuxR6nUxR9rF88J7XaMI/I2TjWaJo8x6jHLCa7wJHm3RU7PS7J7ZW9kodxNrZecCId5DSLgrtw0xxfGVbjdtldlLbFf3Jvg8sm1jpZo3P2Yf0mzMk7nB5qp3CJb3OilpGEIVuqz5mQXOM4xly7Zv3KGk7gRdmDaVc27mu61kFqOuDm22o4eyMqfAtu6t5W1kLmZCQH1z4LGUreDciL1dwdojwO3Uj5vBv19hs6Tua9ZmZTWUteMbnesHHtEoa31Ro40iYJTldjoC7InD1z9PXXyX25J8vXr1xRwGiUneCBczT8eJlGbVmAVl8FKgqGWHQwGNcosWU929WXwo9GXW3VcbV2q8uG8fK2ciflRPrTxcLdnnJ3wO60ScNkW0HIQiFz1SKptykcR1+CgdANA6PCv4WTdDBmOqxTlitzHlCmKXol6TWlHJbB1J9hLHgYZeBanVI4T1GPU2KXwVyYBOWXfnoP4g4rLygzUBdX8h09egQuEyAuCg6EkRs/4P67l/QLAZO51mI1MZkFyjNKrE3AOGRLK2l122WnS5JcjK/1zOZmqsFhKGKVo7HhaLrCliMY7ZjJjtQ2aXELAebqm3Lblq6//rn0ZpXMImsWS6VqGXpozSTH7R5tl/rKVtgHQ6LCE76iF1Se6Hn2eMLpMHK1/I/war4Zpt0MG8vUYfWvUWH1O/RjlSd7+n/oKUu42A5noJ/2vXCfb2hj5ZFw1Al4q0wdscoWGBAFfwUCf9xZ2vPEFw/9mHAkLGqvw0rA6IrKYz0zDidcCEfR4eEQi+fD18fho6Pqs9APGmFQFFyDfrTyfSXQEJmsDyOTNboyMlnh/n33bd9+4EDuloxlJRkbc1ozjrIaGIhv+CS8Sf1l+LmocOsnupuxCsBMAJgefSv27nNKWfQLscjLprwDSTfCQ3CYonvnrn5SbFgPG3U37uonx2o2fPpn9S/DYd1TsQDKTAWU6dETY8PPQVn067GaJyLgH30sAVbengF9j8Ig7XvQ1ePVjZldUpGDdI7dZiXXijNkPWOWInvvrv3e5tZt2KbGzuZj1Odbp8+ZVrnkuTGs9svSgpK84lysuoyr0pMVYsWeXKaibavBS7lll+wUXFYfa2zgNjWSTU07dh1gbn7+xRvQn9S+d33px8p4puL3DpQy2jt3FrdvWFP5z5QBu589Ak+fn/sOXN0HY3YnvPkGxP4dHvgSNh7XfmjsyYF5ug8vnfgS+pAwCenyYUq+YlBKlAylQ6mBx5BEfxEGAXHxbDfT2ODyuUm3WayqYWY/PzZTiaeUiUoCSkSroB4eR3kzB+b+pgxTRiljH3py2try7Sd/6ARy+3lW8vBus73MVlJda8Gc+mJnGbV4YvbK5az2tPHZF1Y8NIp8JbRy36kvbr7ZzaBOJZr2rzpHHTzZ0NnFKuPgHV3V6sq5pmIMPT1i1ZQXMqkaQ9vRQ94TLafZ69v37zhPoTqbtlpMflbzCw2ncO3eMbQ2/0X0mYprjlmPrgqF4w5C50H4ioY4mPDLShgADbStvNyK8SZ9JV7HHj0oH+g+Zj1GaXfBzA8g6jfol/7W+K2sNvfska4Td8juDd8q05istfySsidwbSlqpRIl+MhuleT3Oeqpj/ePeWFJ9fqCUra6ssSWTRVXi0hL2kRe8pIv9kWR6GzwO+whRrtrv9BmaanG/rqg5YkXyeSni5YXF4uBfGZDHd/02knHa12kBvbTyNkTw80dUeHmSt0z+MTPITYHaArdMUAjHV4OpHYWTMa1Dz6HowsduoCltFbm9x3k91Dw4s9vdR1jz53v/gYSSCCWfrD4NIPEm1qZ4FAGUi/N5DfmPYHDwEadNiDimtG4Jg8psv84CR2nwIbvKIMZNGSGtJ+gFwj47VgPQpGmXx18B7PD1lDh0mNOg2RAyCFZ3H6H3+eRjkmbGHmHqwN5hiDbrILNyjHl+irHnPXT7fmUtXeDXo4NyLKb2W7/1L7bvs/eUu3RY269o8oMOO6hPCiXiKz2khSULkYOVGwOD8X5yLFbm2BltJ/U8gZHuR2zFysrHBmU9m0Yjmuvwi0c5kfsxIQXQULUI7QG3uFhL62GcTAwzCDUhePhqTqel1xsS+w8vHmLExO9daKX8vngQVra4IgsvijPxT6H926QUwYkuC0epNsOzKA/iXXJosyEE2JkWbCxYy7R8Fws3O/YKu2MnK9t6t2c8qG2gu7/bKs0loscmdEoS2APDfFRMG4kSh81PUUhNfyAR8HB8Bp4gg6gOr3yu+AJXDkQqywS05/+C1NWVm2ssWCVJpQ9SM7JO12RrVCmxd/orfN+c7H7estlLHRKfhsWIvcoRI3t723MT3ndbXgWaq0ItfavscAYuuPKOSjCzTUlkqRnC52mVmErxvee4fki9oMUQMzuvYnYnHO7jRBNfRxT74oc0pL0IqtHkrLctcGX2zDmwxWHlEkwc8GNzVtBB0zXie6z7XW7g43uBrlNwoKi6HRGZryKqZ7Br1pRghRprSOy7etAKViIS23hJM5MGqqKlr3MLF+oEAq5fDWmWW6FObR2ERwKr9GtiXRZOw758KLILrC2biOuKcThJDTif/RRG1VXtUeBhRQdqlD+FG2qMyKGoi9jUel9uAa0eO/k74ERUeHllY/gGhfy4hst8NvhSJQPgNUoXdxHt22GKbj223AKckC3C5EvX4PYQLUdsWbvYc8tdkzLJlOfmjGv1MKbLR67y87YXQGHi4Kkn3+GAaz29vWCAyWtTGvxmn0ocpbN4VejyNFAp5J/EVLgVzyMMB4eeSh6FIz/bS2MplAh0bXtEutBaO0mXbbekyfIh/OnPGtdSE1VhgVApaxnlWU/RV85BGr0G6Av+BsOMEpMB5jpX3hYjsMGwFHHmxveuRA5PSd7XDbZbEDzWA0L6VtfkvWxbsSbmA+FaI8bsRG2rvrY1APzz/1l39LDxZh+cwd3jvouJuiRvJF6ZpMoGdlqeY1n3oXZr0757FHoi/1wZ/vr75CvrzmV18zsffkF90xq49N8VimCtW/bURTV4PDyLytatJ+CoVKnfe84rb1xbVtOeQNbTGu/LMdReQjXdPOwkdZeC4/teVF3gdZ2vou+QDqtbfobrr22mW53XZBOiK9K+0RsOY58TgM0Hh5Gh5P/FgUSmvn/M5Reo0/hv8VGVkf/GRwG+8xFcUn6WXigyS542cgebe8pGsdtWvMOYgyWkHp+z3tR8N4R3dJmt76Oqnc3XtjMtp7sAkTe0s7AgC1n9n+15WpDU50PC4ZaHDAd93hAwnOW8pU1qxbHJZWbBLPFa/fVNdhtQdbHO81m0mSr5mqYomnKUOX9lUqfhcC8AM/PhxQMZuKYBs7h6orhfXOn4Zpl9Ca4Sofj6aj7aI0B2Yyi79HEy4gmQmwPp/NzNhdHWQoqeBsbORftNsLd38uHmlyIhVLOLU2yzLrdDjfnR+0y9Mvh6PBA9dVwZhTU9Zh0yqK7A6M/jIH74BKMVi6hS2VReCCSmaOUgSfVjjAf9UzfxWH+ZKwGHqUhBlcv6ymIGkFrxuJQjatPAhlegDJHhl53H/5E2wN/m8xMufNTMcSh9DGlFp7Gw4MhQTvrBkoaCukcm4UQdtZnuFZeSu/it/PuCilvmJTvKFEGkYAHUIpowJNwzf18I5w7DqVdhgZYQcPsRu3nN/Dxjjm2taCnyytsYKRn49rXxXqpKwLgrc7IwSveyXM2W+Tg1ecmBOGV9sjBj9mOjZT23RWr5VVQRXsi+wankAG/w8NaRG2TcU24Lx35n104fArIIaG1Dtfefp3WfmtHn2mo5E7kO/p00Nrb2bTmYzpyDiEKUhMR1naE/2ipgG00EjyNYUanbYER6Ho6rjnHh8I/tPRujAKGaGZ9mEmjU7jPaa2Inhx+HYfN/CZ1/T/SH6U141CAf4uH79fDBPwv+Ic03KIRA4rW3k5FvViKOphIw5PfR6Xjmon4b3o4TsNXH0SNwDWv4RNpzYM4uHA1nKajkmjN87TmO1x5VJH/Ua2G/O4o2KzIun9UL/iP6ljN32kXtLxT/07Cx9fg12vafBgNbborUkvbHmr7jqrCo6z2h8xXtxiOUq+d2w8anp0eI0wvL84Qc8T8hlc6MG3+rhfz65ZTE5fOT3QjiofhiyH6eHjSEcSu46PCqa/i4MH/UOUYVeE+NPTfQ4ejccSWUVJ60US/qIw91PPJvpqyhEtvv9Ae+gQe+rzoBorfp8IVOu1b8/NfXvA8+eiZpX+fzrRXRt+ev7NgLjlv0appjPbKsy9tu2Bi7X6hLki6hKDFyltqBIYvt2cvJI2SIWhhqnaeNZ6g4L73Pv7mUM2O9ftZLRrAoRPvkr/+5cgDl5gab5Vf78UW7sltP05279998Y2OitIQ01AlFUoVmEmULS7KI/tQMth+1b2zjnSJgsxR1ipZqma111y5OfIaSiEmTH9oed26E6tY7ZvtFbrN5VvL2qq3lw397Rl/1mpyXXFWvp6pasxqLWzIbBs68vWCLcfI3aHOwx2MZjGMPAvvnFX//QpsvRYVPgL98LuT/lxQib63oKJReFSwTX34ky8QWBWFv9RVuUwhE2Nu7DJtRzQcwXFkH6jpPHm+7Vz7QcaJEnXvPhBvM0WOlC5dMvXRSaTywuB/Vjtu2kZFUDyyfVT1b9X+tX3UW23ZkimommbqZ+Fn1YfCpVFIbdE7aWjZvxP1qPvzSCnIkVIGhtFK999QwQVUcC2cDUNphYFzl9U7wguiwvPhHGTSd4dAJTyg/vn7qFthbSv+Rc+K3Zn7KpsSLsHLkHjpvUva+8PMO7rRwv221Qyfx5sFxDnszsazzc02xnZI/P4bMjwsVjsTHrZvkvYzW6RGfxu1zV1Ryt79KXY0P0koYeylNiSqeVFwNXc1tjH8IfECqkTHau+Hh3fju7x1mz2Y5A2IPipySt3NyUZWK66fKtg3stUx2okl98nllNJ/yvq1q9nM7Kw5z5MKCaoxkORvcwQDFqEywKzZXPD2F6R2aaf79W1HmX3texo2UyFJX8BqlEJYClvw8ONncUVQ0sM0/t4v6Cp8CF31+H/Bp0bMdSFixJPhvJ240rJ2J4pp9k9lj8RM779/KnxoHPyvvxq4iWt/gGko08EsdDWlayyMZ6CTVuSeucigW6EiCvw9ix6PFLwCo9XwEKyPgg96vhwVKck9bzqfsBl+QMDT1pOrW4RrV66i0ZdncXRTf1p9FC5Hwcc9+mciDxd8oT7xORBfRMGFnoJpqESpBr0a1n0YBdmibuz06JWIxZwAmm6s69yypQUlioNwAc3yP1RRPb/BBViPKxPhRvfCfXCmK+HGbRh8R3s03CfcpbtVcFNRFRXwxo1MJVdj1VswMy/YDdVCtp60yJzkklxuiTni69x0inrHPyuTLYtV+lc9lPkMuWDv8jcO723cuZXRlpc4g4WnqY4t3uYmVpIlp0zKdpeFZxBRslupfEvbXkTEJnh0Rt5qszCVNRWGHGrjxqb9ezdv/bUBzdEDcP0QXD6kPvw1FHwdBQJc18Gg258ABupxtxAbHD1nxCP3v5UOQ1iIgZd0CvZS7qoXFr7x7Q9HDl1449SMkYwmn/53jtfzZk+NThJFmZfzNw+19Z4XeHbC0MPTHm9Pp5RuJVopUJ4etVtR3XyK/ctYG2cXnLZhW/LR46IkDbvzWfSyVz/I/ZUCDzwG06AC+q356tlr7F3fXb1u/ZXymx+RIMGQqxB7553MmaeZ7St1u+dseuZRUjmkPJ71/APP7L+2gNGE91aeyDjzyvGc0vCAk7Dl5IYT+sjp97NAhzuRIkTkyJ4J88OjdJALMV+BFub+ovxFWausv2+UkogSAYs8z8xoR2WG/3Z3lE47Mz+Z1s7MnE1rX/gyI3LVQmunZZaVyGYq8t892Y1yTjaJmrzy8tNnlPspZYfST1mlzFKmQj8lG7YD8/7hK9dYLZm5wlZaRtqckdPJozKDLXIApfoTht4tuXDMIejqimS+yUgWRYTjQpgcfliXGmMWeKud5QujObvIuynoMy5G+wTi4gsjevKJiJ4M/n/Tkw/qICMmcvxVYl2bo90O2cIoOa/HaBvFe9x8XAv8dAiSQxGFNgBWRFayDvU8qRO3BUM73ZhU3yh5KW9kJdaMKOvCmXxh/n/RNJuvXILxtIuTzTUbaDDF+pFokRinr0lqotr32bN2sWdell7IJh+Y/MIcxO9MFo/g+k9C/w0knS44VryJbahEwmYgtbZcEHLYRnGPuI/RjKU/xCvpGfh+eg+u/Bguht14z8hJCHqbwqVQQ4dLF9GKL7wRXqTDG1fg0MQ1/nwcHm4ITy5TQ8pX4RkfR/VsrKLv/qaEJtHhP5S3piJOc9J2DQIN7+6Cd+491PpjVM9L6KGbkYd6xvz+yCIajvc2NDKy324rS7hyb8cd7nys/c7YI1fRrrtjp9J3d9UinLp57eZfJ2xe4GcF0SFKIqb9zXg48HrHm+T+dWeUqJdX1JhKGRTnSHLVSMukKsYqipyLcsouL7tfat57kbrckrF+VlbZfDNrtlvAT7tt9XYGveec5Vj+FPLZZRvnv5iz5wjP2L2CzNt43h6XItQIy8USzOK0+DnGUr/T3EVpOna8DTv/uSK7A/5Bh6vh59512eWTleX31mUzbkBGZE2NCS9QQ3T45aiwCIm6c+eU8fAkTICJc88rE9Evup4zByYqEyLXF+agOxOiUa1Bv33+9ue/qmHvb1HwWViv29natmNHUcuGnNLS7I0tJTtFVlA8uj+/bd/V2t57lwXH56g3GhRmz/Z8/iffgps6+GmB8lNs913+zyv0gvdvqMOetyMLyqQOmu/qJ4fHKi/HapSPwiX74P5d6qMHIfkIqh3+Qndx5annpy9ePGP20UWvXzzX9brIrBi8cmP26jUbOw/u7Th49FTr6kxGc3d2+E79W94D3q11CXWNh5q3btrfqL3zU/iO7tT+A6e61+5btGhtxoJF+9ecYsV63YqNnUeP7dhx+PCOjcuWb8xexWa/pau222yk1e7gzZRgcwiC0yGynqAoO32uuCRJdkgiClKzXXbaWbvbIQZJd6z2j7qYYHl0RZ3PEaRcTrH3Ec7iCZrYmubogNMT8JGtpc5qRvu7mbObeYM5Lkmw2+2CZJdZj12yi1ZMNDhkPdm8WSdJLodIaf+od5tqLDbOxrMCb7MLFMeLIs9q7sb1YDBIwbcdOlJbV9NoLUvo6jji0Wrbengdb3aIHCvyDlGgIs2zditfHaEG9sgpBKfIeCSnK0htmR5T4TDZrYzdYhesgtU+1Ga3Oxx2hyDaHXGp3noE05s8cUlONFaH5ECFnHgyLpkTozmR/39a++64KK69bxuyzsAiLIsyw8xZE0uiSfTeqNE0jS0xlihixd6xAALShGVhy8zuTtm+9CqKiIoNsWOJiTVqTGKMMdcUSe41uelnyfjcPOcsmpvnyX2f930+7/WPlTlnTp3zq+d3vkfyUn/dGlomchYBCJYQVIYXkSywh/XXkJJQLVCyTbDhf1ZWo7FZLXYzrVlxbqFW6Nk8IQSJPPgzoTFCntFM0X8b4rTZRSuNpsLCg4XDQzShiXdDrLJNQkLSiha9xpivCzFYOauR5nCKYJOByyuIUokz7DGpM7KCB5rHi0ReFpxILNfm7oBP7g70aID9G7qe3QeZdlhXCqfvQ8pYrhYmwfHwRZgO52FLIFmZrwyFz8FENvCYkqTdvUf21gAvIlLBrXJucx3yoIE4MO0V8aw5y5xTWKjKyswwIZ1XNefrr0+VnmzaAaqqtpUdo9v2bMmpBGV5UnY2FuoyEupugfXZG4QKVigTy2RKssuW/C2SnMY60tLEZPr5+PQ1K8DcRP3UVdTssmltiezyo1dybtJ/9Jje7Og3hvmRCVy/gTMaUMZalNE6gJjfQQ8n0PuBmvYo+Oo9CNo1TSh3A8o9NoA4EqgxEH+oLCNQnoAr4+q/ro+CRcd/OK45gXL1KPfEAOLZAGfDuZXnit7EBbeirJUo68AAoiJQqS1nNE070BMUGBzlEX+2Y/QxJG77weOfQWar5lhgKNQwfk9VeXW5SrCjFTyW0OR9NPGbDbCXSaUeQsBzAfMYJkck4J9uvELAsQEH6j96/KYdTmEUNR6Bu4Kr1CRMwN7U4ROQ+EuY0OmLeg17hJF8njcByeeZE1bhv5B8Tpgwd5G0iE5jNPE3WhnYBFcyqBl9oGsC83u/H1wRsIzBKc8T8LEbnf4/lHwjIKIOBJM/ao+6dM8Ne7vaNW/jLM2PcGKgp4H4L7V0gzCBgcf5zli4m3iSFj7yjW175Btb/Xvf2Db4JKFpCYzqGIcnbzeavBY8ef/dWfbZL6PG4FTY98Z/zdj0y5jhQefa7XacAbviOYJdHmV/2HHGQPyhtsaO1gRc2y3UwaiHOZr7wax9HadwR27vwMY86si/zQ8EL3VEjcH1wcE3/l1Vzu7ohwfPEPfR+q4i6vHYT3yq+fn/u+LTgbp/EbT2j38Zs/ZvnCIuYEz4nasKruuYgqasnbiDhjf1ngCj/GjxPcmgpTc1cBN9199cSe8G7g3GnqVA6bWHKUkwBqk0KCWlHelvQbtFx5wIpEz+nQMqPzBnZLDUa4jWu8J1iNZR6rjAa7Zg6lJsHaE3NV/qmJrAUmwe3VyGLa3xxLX8tnknAhcPRx2HFCz8BGoRbcN2+Gei0wLye2sra8pVTofdSaPlndfp1bo6807a3xCZP0bAvYGZg5nnZzPwyWtPMHBIYF5/Rj2KQRlz4Nsjmd/5iGBiIGEwSoBx135Lux58/S7zSXvUiXsS7GXDFInS0bSMhHcm/774fXgFjfA15gs0FJhLaGZ9QGjcBXwebCGw5x5oZuWghCWM5tnBKFPpYVFWWZXXWE1igAz8iAc8Fw04EQ2408PUn7jT8Raa6OEM7HOtaxvUIgX9T0zH26g7KO12eyCC+ABP9UePYlSvd8xAE/6wbG3Hc6gz17B3Gz/u6ZimhUilbGPUv3NLwcbAB6gFNYFGDG88Snw5cA23oSa+RCthM+HEjTTd0fyMskrRl/njUv3mX57s/307mwKvot785vyCiR09BuPnD1ELI+4VwjAPmtbH8FobH+AnM4EeRB2MCERUd4fvyszvt+CV79VHDMcXvBuFjPQecB7sqUlFf03XKkNMyvSJ1GbZ6POdLGnay7ocNgfvyNpX9DnXrlpb22Kuod862nRuH9A0v+I5mH2Ibt1X2lAP3B7Rk8+pLHo9X0Cvz6i8DGCv0Pvit/IhFh+xs7H85gTrGtps480CkJZLSp9nqLWhmtT4RTOnTsloucqeDr0vwRDpECsE31fxm2c/fB+9LuPX/xiDcYbJLe+ILP26vKeS6630hirZFSXlvdjqCZFyWC97GFlBQPRz0BUWBsOqwsI7LkZ3sNq4Ls9pOgEm87vYunzbtbbr3W7Pd8vpHtl9WPe93f/e4889nu0xKWR2yPKQgpAzIWdD3uxJ93wQOjz0xdDk0JRQa6gt9EboT6pKVVWvwb2W9krrld4rp1dury298nqZiVeJBrIP2ZccQb5EvkzuJQ+TZ8gL5PvkB+TNsIiwZ8KGhg0L+1PY0rBlYRvDfg77JUwJexAeHa4NjwmnwunwuHBdeL/wAeFLwpeGLwtfHr4iPEk9Qj1a/bJ6jHqsepI6U21R29VOtUvtVnvUXvUx9XH1FfU76qvqa+rr6nfVNyJCIiIjoiLiI+ZEzI2YFzE/YkFEYsTCiEURiyOWRKREmCLMEXyENcIWYY8QIvwRxRG3I+5GfBnxVe9uvdW9I3r37j2097Dept7W3rbejsj8SH1kQaQhsjCyKNIYaYqUIuVIR6Qn0hvpi/RHNkQ2RWVGGaPeiroUdTnqStTHUXeiPtF4NT6NX1Me/Vr09OiM6Kzo7Oi8aGO0NdoWbY8ujt4aXR/dGN0c3Rp9MrpNO157RXtX+432B2R2hcQQMWRMWEx4jCYmOkYbI8ZIMXKMI8YXUx5T0SesT58+/fo81mdQn8V9VvdJ6ZPaJ7PPJ30n9d3ZtzlWExsbS8X2ix0SOyxWiBVjvbHlsdtiW2OPx56mtFQclUzlUUbKRJkpC+WifFQZVU01UDuoPVQzdZRqo96kw2k1HUPT9Cv0OPpVehq9mF5Jr6JX02voDfQmOoPeTGfS+bSdFmgPXUpX0/X0DnoP3UzvpffRh+hj9Pf0D3GD44bGDYt7Pm5M3Ni4V+Nei4uPmx8nxJXHVcRVBiE0j8adivt73I9xHXG/xClMd2YoM42JZ2YxCcwSZimzhlnLJDMpjJ+pYnYwB5jDzBGmjTnHXGLeZz5iPmV7slGsho1mY1mKpdk49jH2CfZp9hl2ODuCHcm+wI5lZ7EJ7Hx2MZvH5rN61shWszvY3ewetpk9yB5hT7FvshfYd9ir7PvsbfYue4/9jn0AuoFQEAbCgRpoAQsGgCfBYDAE/An8GTwHXgSvgHFgPJgAJoLXwRQwA8wE88B8sAAsBytACkgFm0AaSAc5oAAYAAcEIAIJlIBSUA1qwHbQAHaARnAUnAAnQRt4E1wAF8ElcBlcAe8EIUBvgo/BHfAZ+BJ8Bb4DHeAfuu46lS5cF6Xro+urG6gbrhuhG6cbr5ugm6ibopuqm6mL183VLdQl6TJ1Rp1D59S5dG5dqa5aV6Or1dXptup26Bp1O3WHdK26w7oTupO6t3SXdJd113Uf6G7qPtN9rvtCd0/Xrvu77lvdd7qfdUq/Lv1C+vXsR/YL6xfZLwbmBlgt7G3fKm5jBdiV8IouwQOdjNMs5YMNr/PZ8AIRIAgcZVtmg2GMUw97E0pkqNJ717TWVezs859YPmZgtFCDyos7nMW1sk9yYGQln+MjQg/WJPAF/Cy4jLHw+BwQfIxxwDcIIVXMdDAk5OEwAkrEDEgw5PMWDNkC3ySCiHttGB+q7b/hQ7U9xIdq68SHanuID9WG8aHwufzJ/4dz+fAbYj6u82mC7JgAB2pb7E0CtBBlWyWfINp9gsolOKTOE6DrEq0pqfHwFcLi5Nwwi3DbdnDuLcI6eIXZuJwaH5rPG/QWtjA72Z5JK9OVHlAHJ3zb8PaR/eDY2QvOk/T311esqwPVGVK6lKMyCYLFRbskuQTALq6tXsppcxQKbKawwZElqRybx3veoMePNi8YAV5Y+MrTCkMp+XDGIJh27VPvttOszymK2zFO4mbIwKfhXDhFoSCtpCplg5SpymBlyA/KZCiD3Ue0yvNPoX6Mg6tht+Nfw4E/KL2VyQqvxKVNByT8iSmwFdH43KcRw6SdPC35Glt2YjxI0e3kxQLAme0WekNRcYXfUefdCk7Bx0NQy6KDDqKLSrKA1HOb7Jd5qSj2C8Ueguxu3kKTcCoDXUxN8EClKwj/WQBzCLiegFeZs1Jl7fk3wx5rIlCqkGUvEDf9dkr14i0KDg4l4ep87eETrm2t4OL+mnMnqdtrzik9PmBTKkPGH8tpaqaO7d1z+ez2zRmlbHG2M10wqAyCZHbifY5K8I5cV0I5rbJRYAuFAilfVMlp6Q5kw0Y+P/HpiTvjvxkLDq4PeW+2f9UKasmaBS/EJ2y7lMNaSuylNp/KZbO5jLSJN+bbgC2Pnz+PypXMJWZ2y9795lNoWPu1cBfzG6LBBUj9MzLjOYY8c9lRshuUOmVZLlV5Gn0f+CgX7zSbeD6PY7mcwvS8LapVSUuML9FKlDLoOzj/k8pbb58GTXuPld+gb1/ZvKEB1KW7NwppqgLZ5HKLrmKBFSvsx4TtKnGHCBsZTi4S2FRpkzPJoXKuSJJm00rMyPXxk8HIsdkDZ1IkfJ0RYbqMKO6ou7ze5fmOcATdmcvW8IbNi5cEoRBMFtkCnUSVvZirK3LlCvPcD3r2hYABJDZUpzDYj5xQHTRIq7FBWt1pkLY9MkirsUFajQ3SamyQVv9mkFa3MiS5ZIW0jM4PHjviA9GMIYsgk3h8NqNbRVRyx8ua5s9vazcuy9GnmVS8Xm8z00ZEhYGnGVB/WKqsO1cdiGBEp8PsMAOTYAwMIESjw+a2eWSfpxipYQv6alKb3zg1ovUlp4E3mQNPMBwOWHFaq22sppm/9K79PI3Wm5kwgSKh0J4vZ7jyvfmVaQ0KgOkbD8P+cH7fhgMVVdUOL6Juj6ByOx0O+B6RtIrPzlkBv2N4zmJ28w7gtnntHl7lsaKvR5mtBcYCNm/Ty0qPtDXr21aeW31FZfZafHan3Sk5xLABLtEnOGAOmnsrsXY2r583JQtSGHbKCTyo96XczqKqrJo18CnF2FdNK9+Evmif8jRz5QOKrPoCY7y0dKIBOgx2PQcJwkm7cWgnIu5HuwU5ylA4QBEf7TMoE6FKWQ/3g4PHtUqCEgpHw5UP9w/gKKhVgJLRuXGAD8D8E0hW++T/Ckh2/47/AUg2GzHkluXV8NI+mLfvL8jAgoO+nQ9JzcgucAAU4D+YVSy/yZy3BXFmX5dOzjzSYA4MYQ42S3taTlr20XDUza/avxnx9pitQPNcl+O7Ww5cow5v/FgZxW5cxS/KmJMYRN0ww0MEeAgPxLnzBKgwmUo0pXmhC2oyXutF/cYHUt32Yvr9XRNnrCjYuDkX6POy+FQ6e0swBo4XXSC+hyyKUrHPbitjNXMMO6015up81ZUlvtfmUcOnZC3PyhI8GWyqz1pygrIdtJ/eT6lfIjTCV7ctn9OHZKnKCVx17nd8lNfmMplsRniIyTRkFBhUmRlJtkX0xM3OknyQU2o/9yMVPLGdV0WQsI34tesJQ5e3NQuRlVb+eyttIbLSypGV9iKy0hb+ZqWR5HDbiwsWseuSFhWuplNWSg2rwOJd6SdgBEWSWTyMIDSXVjOaJj/636rP5lNo5eeeG9eIUjrQlDcyKNGwZYItR1UoYrgFGW9N4B0Kn7+mVD4hq6T9l+1NQwm1VuOBfe2VQYHsKqmTVZqpoxmNcJPQPHUAfRqajOcrYGUlPHkgpwL+BwMnwpcJPtWSm8sVBZFXYU/mglRedeEcHIZBVznZEGTtm6RHLBwta819+FkokvQOxL5cfqGYrmnmUhvB4RXCrCRq5LQ5s3PhPwirbA3ujsg07P31X2A3oLl9Ln1XdgUOd2pUutPL5/GrkXphDiIuegA+N+W21lvc+TCPSVHUlJq8+IGrbD8od8kOR7nKu8v/qZ9yW10mo5XbwiN2q0/OzVYtWjG78M+0QiFpSMCi+5V/vXEF7D90tuZTuv3D1LVNYOum4rXCBlW+WIQNtVLU4SrbabFJJe6W/BghzWEQ2I3SWs8qxHAXrZan0cqTT62YPB4MeTZTIV6lBtcrPb4ewZKP+OaMIN+cgfnmjE6+ufQR35yB+eYMzDdnYL454xRBzoLRyhPwq9xjqppCi8dIG0hyqP3FxCCciNWEJ3svQ3aH+6u0mzyywUv7Hf4DlaClHcbCn6tOwVUPhL6rS50FXrrY4d/tA8fg4B/h9cMwqvqsb3+dRyX7SgQv7XF0Iv6uW8qbipbh1Wm0mswu3rvPk78ln880ZYC1Sq8XlPLsCcrqgNx3p95SaqCNJmNKIVDmPajJfusZeCb3cmxBa+GuYsonujwyK7u8djftdQtupwlpgjOX8EVFCRhHF1VtdNq8niqryQdKCn3p/tUq0is+1PlkJ/yeAEmBQcRUrPRhIQHrCPxdt1vc8A4hHGIUY6gyyf7S1Klsbm5ekd6kyjfy0MtIvOxwiZKTrfQUO/2uz04efavylKrisHAFDkZib0bhodUYEuzCPmg/lFseBYfCzjijuTC0o4sWxxUFgcWiqcWjQh/uPG5+uPN4b3JPzXOPQpHmfkFo/AsZmKBc1sLxj7YTax9uJ04501NTVkqQmY7kklVfTEH8fHjgqfTTqtpCE/p6RSZDcgEgTVYTDmsnyWPMlSAuVPkXNmstu4MvzpPzVFKRWGihTKLZ6ba73S5hv1jBSvXyVowwJfEW1DULu6VAb59Hr7fNtKUJKotNdAK4MtQtSQ52m+2WrdG2y1pucOlVjgK73kQVCiLnxMcd3QIgsSL7F6TIPkSFTkJs6KndxG43KZVXnz2HVS58tJO0pOpfyKYKUUH4d0Ji3bu8W7f7Vf7tp8SjiC33VFTKq0qMMlsJV6aoCvM4sxk2Eh6WPNjccqAaA+z4TLQ1CLCzMdlQtJ7OznWWrQOdR9vhdC3GLxNZyV0mVNPH76xXwl9NX52WAwx5+dx6OmOT5MoBZtEquxFbe/BM6FB8dJWNZ8h/tcn47b9jj/HL/+UW43oiBQ1FYsoeOjnHwVYmEMdMJ4r9n2LSLA/+5mEE2DzGTmL6/rnd3E6fdDhqnMDd4HrfR/ltDsSHzEU21ppdkFKgV6WmrbTNoV/a5CrNBZkV9qsw+iGaXSjjBWSA4Styq6JKf6nQVHdc78jTVvNmbxFdZDFuMQJl64N3lPrA2yH1eoynYjQX5fJAs/SJ/9BZkowrU8yxmmo+z2Q3YlxKS5Hb6gU7j0qVFa0Hwx4rRTzNYRKNhfmCnANyZb2nkioTMERCW+DJ3WMvKLGezFjNUn/KLeXpukWqjWXeLA9iGJ4jtQBuCiwN0VS//SBeTuH1Zmusiccwzk6+1sry+yHLb6VL/BKif6FIj6RnMtjoKWwouqBSczsYUiUewnMkpkA/QR5eE3Ln9dJFC6g5S6b/adqMbe9tZi3lXHUxhfS6IiNvyLOxti3cGwnUZslSZkK8dCfDthyWfLW7T8LRSC215r3eiZMjduJr/RH281/5sckgSGAgDAdKBOPKH54YHWIfm9ipwdMGjrcYXdYSsPeCVF+P4dRLO+Nd9fk4bhnOZd7/G2IuyQx7nzEgVQQt8Vv2T4VdLBJtmAm6m6Uq+kPYs+DZdtCyvG20oqH6Zw2bksDOfePVrAH0iyurK/XA6LPut21V2SptN3+iSHMR8RteFVkjny+nSm0Os8VktepZMqDC8eIyqAiFkfat8AumTlKR5FwmCBb0kK2UrEYVaA2ICjiHzckBL1eRt5ZKseabMlmrxYrRGngR72hKLqfsAE2NO7fX7lYhLuR2UMWZolFkHelTfUW0+nMmH5CXkXl2BlX4uXVbirhJxQsWnsoTRIsbMRSnFzEUfAgW+hlzdg6HYVMXbXam0auWrJm7ARiCp+edwXPL2+vKfc30P0ErZN5nYFuWfD6qMiVz4+B+KxepOM5YGMSsQIqJ7PGybYegGobs3Kbye50Ys0I2u/xBzIof0hpU2zNMLo7meYxZQXpd91AH7dthX4K8oD+4vipwtyUKaiFxrQGpnCt+0OShB16rkNYN/FrWmmYuyLQU2fR2o01ltGFseYvM+dn6DyWPY7v1AO22OmUrMBZb9sJpFIwPPSncraBcAmLzrORtloppGHdw5vR565Yp6g2ggLNwZsriMnk4VnOkacuptFPLVJfm+1YvpxZtWDhxYeK2lgKW99sla7HKY+NkC81beGw56rlNc6lCqdBvZgvqmk1H6P1HnNtawLndDafOUfemvqWEnWc1eedrz+6/Sp2bfVN5Y9BLhoIlrJm320yUtEgYMa8TIQrrAQ+Nze2Y89wKrp67xKV3fW9fB5+860NKTXeKvFBHkCO1NqPIO4VGZ18MNiA4PLf73oLMSfgM7Db5wqArQHOnEdaFlO0xZleAbalSqrBJlSdxDock+ZCqWOm+WkOV8XK+gy2Uc2UMVp+9QSqgffcEBydYbLEbTZzNbLWZY4teCBnMK6GzlQjqqbYZsNtz7HrlaEjy8pLGFJBeb9wrblNVCxgOwmIxbeEAry+YF0+lOrntyITae8VcTbcFUrQL9y5rPk19dauimRUeDNYeT9q7bDo1fv7cyRyr/s2gvIoMSm0eWtQWl9VjASXm+s3zqZV8ZuFG1mriDHbOzklWtNQdHo/TDY60HD7QdEyFtE6/k6rcKBkk1pU0rFRPq98lNmIIgFBszbDwZk9JsnFYXAXuas9xtVkluaXZ4iYxVyUYJLMD74aH9RdL5Gu1lNsummQ2sWKxc51YDLugibUKFtqcbbUiCWMVrDaLYVDf50enLZ4DktNmTRtCKSNg6GgYlcXmKgNDbGbJ5kJGZqnkQn0URElwlcA+fZF2ZPfRB8+4ipuAG5GD5FPJlb73XJTX6oA/EPk8Oz1vbspMOhdJ9jywyK+dXjvtPKSpH87dhT1kFq0L2J9wkY4g9HjXFR1Z3WFrs3ZFucPgR+LKf7wWVLUc+OIMjDj6U/2RXR/WnSouLXaXesogyXhdQXRaPdi0hM8zLF8IvyKQdu3i3dDD+LC1iy9VMXF6rpBNn650U0pXDVsMe86Ejy+CpCp/p6nWR7kx6AzrkkvEYmw9B+srAImL+fT18xYFL1IwIYJzu3w23g92GkuKqhNVau93hBOQMO20FvaD6+FTyKJlYQYGDXMivcckFbLKmz2XJ9rkpwA5klCTl4hSrML8TACMOcBrsZyMgGqt7RVuc5pJRRbaLDhexcX7kdWEtx1J1A+zFFR/mpH6A1sY2B1DgdwnOlI61FpBEBDnSa/py8lWO8dPmdS3OX5c9XD6obNsVOPQa5PBq+MsXDBqry5Dskp2UYx998OQVadvpLXTj5xsf11z+/Wz4MG0B89oN7ZtuXyd6nSqvXt+45xDbP1q7Y75ZVPHU53OteenNp1azKpztXAuDIe9oA6GP37ulXJgs4sCrbl5te7mm19Qp9d+qySMeiMzL4nVmzGCVYa0WF7PGgSk79JoKfrPvXXk1neNk6cpvZRuyxcXAQOaXhNldHL1Flbz+bEiGLZQoSiFHD33iYELrl50806zmTcVWFluMz9rIVUgGkuNrL72rOE6rW5llIGhyoC9r5xYxE6+8Te+jSbFtEKvkUYmlp4HJD6BRNKfEaTVUGgrpAstcALjR19gCOHAXAdDO1jJ3wCqnrvbHUYFempvVLVdvrmTbzxBtbc0tPlZtxh4ipA4qWiC0muu0p+d516xkpqUnLfYzBbZCjkTZXFyPit7wrQ1b+Ys48x51IjqxbuS2KQ9FwuaaK8s4ns8zAKY6V25E6rfkfY3Uvcn7Y0vweuehI8zskyKLrSUkbAps3hzPOwW90JPMkYdN3EyKMstz4mn4jcnpC9nLYj9WylOsEmyR/a42SPHrnz2HgVfiykze3NxuURPCirHmzjHo3IZuBz3qJzoCJY7fOwdVE4NZWbqbLTA1zIkVq3zsIZAkg3wDSbYk+xgT3wbH9VY3llj5uy033oiWUXEbb0+9sSRC8EaJxLFWMJHwZhfu4wxdCHJIh4uZ8jAK1rNzdPV7ed+pO6POqOolZdf6//SyPMJd5aiTz545fBXlO6UEvH9OPgEfPH+D0gC9Fa6n5+wl+0/X/v53I8WDqKGTp3x0vOvX/n8u4tvn2pkNTcP39AOO7H0wHnqzO7zn751fMnYgZNWJutZtXJazux4FoZ0vY8xA4YFLmoN1sJMHnBpyx70sOaoCkeblxdRJol3Nn28v6meRZzR7qKclgpEd0XNBTDUVmot3QwTLYdVtbyt2EBb4UJtUkbquvV1mTv3lz1CTwm8o13WMvaFkIbkBWUL6MQFWzZuAOM/Xrbko7Eh6etzFsVTc0sT69exL4/bv+z6rZDkHSfzWuiDp0qamsC7ow62PP9BSG1DResF6sSWo5sb2FQlRquoXl84ftKkY7D7F8evf9beOmY0q6bgMoJExDYQhnwDh/5tIuym9Bm3Mi0nDRjNFjNHIcp3iay3cqvcQH98fooCHk94Y9Kg+RC7q9yoFIBDLoEyV7HbRSFxLpnNBVZDWH+lYAoyhRKVNEqZ+fPjcBirTiDgHMRZfs7HsC5kReDdwGMETKolxdQMglT+Dh9AJuoTSI9+X9MGh8AH2j8cCNZUT1ZatRaJc5vYuqzy5GxqhT551Xy2UM9zFrRIbNLvj4kfS9738Jg4CXfkHu8Yd5TMmp+dtMhMYu9CVb1YS5O4iX3J24NNbKhZ3QrIBZAiSBy1QSpu3S+Pd4Wbf+qOeFi7Vpk5UXli+DCW54N3LfACj2xySQ7r//4pOB4OgxYK2pQX4IDRZ1iJC97Vg97kZKTZgJ/6nVAGKHModdhjBRgrRnHhmi+hisfAX7Rw5jX4xKf3WEmSXThUW+QsZlSUHTtbGa8MUyyUYoMvKAM+nsXyspN30A6kkaJqEaHoYJf58HGIKoYXCaPVaHZZvRgXHC7OhR8HPSEV0NoKDx36CwNDSH4TQW6GowlyGys2kEvOqTRXxyP9eChMZZAosCqxnGLnlbUqEg5kUpFUkDny/wLyzLqkPeWUdECu/J9BnkmyM0AihrRuM7s6gWvWsNZ0Y14uZ7SaMLCRgQuig/nB7rdgGIH3Mcgp2qUMeYIxIM7KISYAzAZurcipcFgjCQcRXDIeoAiXECQPCxiyP4HFe4jm9ocMGfRoBL48lFsexChK7ETzIjGqmJYMIgSpYYy9ihQvoW/NPERHh4WEiFblDxVk/p6i7cX4GhCXg3W6S4WygJoxiAVgfiKftjZ+zsMrOyTe4y6zc6VgT2G5oTaBJKvra7bXNqhKqxxlJVSFrWJNA1uRkeLHQsLCc6LFWQR8eY6sLVRu7oakFexLw4a+qoRTZH4QiPevRC2MJy59RJEqbo+NJI/kl8Ml6BvqhQK7XoIzCdLisImyi4TpyjPwZUWvpCsvIgJbp2TAP6N1lw+UHwNxWrgCkeMwmASXwIHKCGWxslTpQ+6o3lq/PaMmZX1OSno6rCQwgNATv3YZh/hmVvAuLrRODh+F3x/Bxy/RjOQDpPThOy6C8J6Hj0vexj2NcBgjumReLsjeIGz1Oqrd1eAQ7BriEEVRpkkDsnzwmsGQP1azxME6hvx/vzxjGKndJgv4CguvvKsT5ktcQ/9Hc89UOJzYS6uPBK634i/0M/PBOWIcDKARoEkLQiFBC3wSKTkXN55KqmLF0AoB9vO+7SjMVFY9yHlCSbMUiHyxqEoOjNXOWHPnBomUpz0MVJOdEO1IGpHHE6tzWgPXanIqSNgVhpMkKMZgWnBlBVdJYvRZiYQ9Hvqj0Tw9IMhr+W2Bi4dJLdJLRckD93ek9nWWOjwOSuIFE5uiTM1QXqaV2FmDhpJP5h7tmHQ46to28zcYUYn2OvFKk5wOs4zIUGhwkXkVPDKvnRR8DxPs/gtSLWkU9YBcyXhFGQlr7IJE3SwAScicxbigPuC3kfMtv3aZZejy66970U+X6eina19Dl6PwWktuFgZv4repOFKWrJwA3lFechaY+CI+1mLlrBze8fHYWDIIwIsxtFg+GaNX8bAf+mIZRBSZ3dJqepMm4XeEGmlf0eRMRD5k8M42guTwdjXpNIkGshUeQQWSMbDF491hH/IR5tNaluTgeAaQFVFwFImaC+LgjSPgCAIjD/f+qjvsjTHXAhRDfsZgrcjaoOIPojkQVAJpN9hUpNnB+YIGnB99I9T0lI6LZBBEr3cQQ/3V4DFSRG8PbyGBCZ2OgYzpcBlDzl0UGIiej3iy6tFUoKq8uP3hzIc48GsRqgADaKBlim9+CDreHs893BECQ6LegtGtsMeU22Qr9hosY63JJL4Q75HHQfTjyD2yCmIsbcQCzCQlm0WSRNLsOqxHTLcHgyFkMeBVNemQZR9mN73JirSdgHSaRT2J2CNHklgOdT0NQaAJ6rqTFglRjxTWf8/1EKEnMrNesk+1rIX5TE7QZxBE+ItEvc9k0DSYEV2SVquZJbe56uBWqH4aRmk+J62VbDNXgviKpLeT83NPwK0t11pg2cGu5Hy+Aubgh5+yugbN4TqVpdmOa3MGaydx3BpupfkunPWXq+jnLnZwwkg0SV2/DOR3D9wiHbARAyyLTjdZZEGcmMSxUp9++Wl3+HqnD+4yAb0Q/2U3C0YSWZ955BQ+O4vEVwkirYw2oqYkyUGROAaS/E/QVAACAAAAeNq1mglwVVWax897L8u9L3vyEhbJYw15bAoBBCE6skVbUCMiYrSoHhs3oBCRsqZtG3FtxrJ6epAuEQE3xA1lUXFpuscFUQFR0bZxZ9Go8MJOgiB95nf+7yZ5tOJMVc/cU/9zt3O/851vPy8xIWNM1CwIDTcZI2vGjDPtf/XrGVNN4qoZV0wxp07915nTzEiTwRhjrQlz8tLuQsZPuwtDp4PJGFY3qpPpPmLYuE6m74ix9IPHjR3dyQwPRkVMTnCVYXJ1FTKZwZMskxdcZZt8UzDlihnTzGXqL1d/tfpp6meqv1H9bPV3Xn/NjVeYu9X/Qf089fPVL1T/oPolsOzW/XN96Lgn40AtGAPOBiPBmaAaZGjdCdNX8skyg6NntCtrN7LdzPK1SMuYSPna8i3lyRTF8oPB+UjoatN8uKdOjneEYqGyUIdQl1AidHJoQGhIaELo1tDjoXWhveGscCI8NjwzfFf47vDc8Pzw4vCS8JPhV8LrwhvDm8Nbwl+EvwrvDP8QKY60jcQj3SI9I2dGaiITIhMjkyKTI9MjN0RuitwamRP5fWRe5sSseVkLvN5elTfYO8Mb6Z3j1Xrjvcu8y72rvWneTO9Gb7Z3p3e3N9eb7y32lnhPeiu81d4a7zXvLW+T96H3ibfVq/eS3n7vsPd3P8OP+oV+md/B7+In/JP9Af4Q/0y/xh/jj/Un+BP9Sf5kf7p/g3+Tf6s/x/+9P89f4D/oL/WX+av8F/2/+Gv99f57/kf+Z/52/1t/t3/QPxJNyX203ap+u+uRsrtuVJ8MnmebYiyqxO43MbvPlHJfZg+YtvaIaW+b+KLIHjTFdo8p4Tpm95pSKJbZBtPGfsOoLaad3c3Iv2HHRVhcMfZXYjqaGK0UOy3jSRussy16bMe7bEZFoHeEtz50foDGPt540NjnZjOFfJEJjTgUfEaVQCMLGiWM3MnINozcyogi9F3KF6LOmtoDD26PQb2Rb7N4m88MB+H0GCP+yohNWk8DM5RBz/HosZ4nGNXEqHfgsj3r2UXvidZRaB1kZCSglw2dPfCQAa0dzOskF0OGpUjTzeRkIanzxkl3m/oGPcnU9YecnZd3MgVmkOmtJ1MDvWgcdFv7/fqy73FUMvg+xvcxvu/Bt3GenQqPy8DT4BmwHLjRiTQujgZ03fxVfF/H933MachoNDJ37w630C7heYznosKaWm0nZUeerr9Rfyz4tnUF36nfY2ZopRH7qfGgEUUrOSAP+eaj/wL7lenC+67YTjd7yFRw7g4qQYL7Hpx7gl5835tzH3Ay3/flXT+uqzj35zwAngZiGadCdxB6HMx6h3AeyndnMH4YGI4+RnI+G4xm3lrOY8E4cDHvLoGPOlZ8Kd9N5NmVfHsV56sZew2YzPUUeJ6Knq9lnums5zqezeDdjTz/DXK9CcyCp5vBbPi6BdzGmNvBHN79O7gL3MP9PPBHcC/zzgf3ufwB7gcLwSJoLOb7B8CD4CHwMHgELAGPgscY8zh4AjwJngLL4O1p8AxYDlawnpVgFWt8FjwHngerwQvgRXh4DbwO1oI3wDqwAVlsBJtY22a+P1d2EZGHRdHgNrS3He3F0N520w0/r+DcHVSCBPc9OPcEvfCK3pz7gL4878e5inN/zgOwnYHY2CB8+DT8eQheORQJDcOmh5MPnFVdxHzjGTNBWipCQ4fQTqO5ijHXwsd03s+A1ixo3gxmc30LuBfe5oP7wAJwP1gIFjFmMe8fAA+Ch8DD4BGwBDwKHmPM4+AJ8CR4CqyAt5VgFXw9C54Dz4PV4AXwJjy+Bd4G68Fm+HSecpKZhJzqkFM9Vn4UOdUjp3rkVI+VH0VO9cipHjk1Iqd65FRvTub7vrzrx3UV5/6cBxA7B9pFWPl3WPlSrHwxMjsdS19qhuK3w8mrI9DWKFADzgK/AOeA0WhwDOdzwXnI4ALOF4JxyPQiu86MR0cXEx8ngEuISXX2E3Mpsp7F3DeD2cx/C7iDb+4EvwP3sqb54D6wANwPFoJFjF/M2AfAg+Ah8DB4BCwBj4LHGPM4eAI8CZ4Cy1jX0+AZsBysYF0rwSrW9Sx4DjwPVoMXwEvw8DL4E1gD/gz+Av4LvALeZE1vgbfBerCBNW0Em1mXi07Sjj2YFruOSF/x1lgZRLym1pyZehI8T8urQdxrSKPpsuugINM2po08mHadDDJCenZovW74UVw93Bp1U/nl5/vgqw9P0O/46T41+4n6E37l/c99kCkaTtCn6+JEfdMJ+mQg53BsmasCSye3ycWOe5GLe+M3He0Ldi/YSNR6zVSYcjuLurnG5NqVWGy1nUsNGiMqxbF8YoQ9ZpebU+wa+wbVTdS+zZt/PLrZI/ao/R6uOnAXQ97GXeE/xn4LNwn7vclUFULNpIq2VDX+AfJUMe8KyITbbSNUDjB+r/1cVNszYrf9hPm/xkIMXmCoQV63n0LJ0Y7ZHdbZcz+ed4TOx0SHpP0YOh/ZPcxquPuOjGTs16CJ6sEdFep9MJD6pYQcephnccYk+CbKVSMrN0TtAlVE/VhvjHfHkFEVT7sRhxqZVQf8pw6qciSw2+02uNoDdkHXSBpu1Qn4OggvCdFI0c8xUe2UyrmnAuK9q/ig42pO0dnCCpPi1Whsb/uVfYR1vwO2asRCJLdUewJHTVLlyd/gtgzPzmHe9yW7L8Ea5Pge7xllD+PfhnkccuA3E0k1QCHfaQkdNCIttxPpwV0jvBqeHMW6coJ1f+1WR/VrpPXUs0bb0Hyt+4N65voG8VDPXVK6S0rb7uoIVztcHcRVExo0dp+kp7ccbdXnIqGiFsIZqrvdzI7Cx2js8xYJJYK5mQ/dOnl0ctpnhiZHNaDQDnSmSj0iy2qrefph+Y1kJ3fcQLxP6HoS89ahISO9DcMam2QfJdKhkaWbYNXnuqrYroXqB/jWAPFwjl2IfVeZQrsWDyul7whXcWcHdoXjmb7U/tmusK+b03lbSpWSOnKxhuZVGfsm89ZT5SBLbsvsi86WkMAmaLWzq2QvjqO4fclJnj5iX7PvMSpKVWDkDd/Jnz5t0c83LXo7AM+fN+vMSY9n21PnNF386ODN93Z/4Ffu/gP7rSy+WXO98ILHWOke8RZjVzVLiGqmONZlAr4rkM4QU0lVesB5JzIz2ls5GXZB2gm8HvuTrTgvHUEscvvnYmQ2yUyzf6L3uS8l2293noCPnGm/tIeQZ5WzYHyziLrKyL/cUU4UwpZ4l6v7rq4W5+0X0kojc30luXV03qudkeIe0eiHwCrZGcm68aRmKSABJ7M+xK4609/0pLZosqvh6RDWtcHRQd81aDsp74qbEaCad0nWfrb5F2QwirEmoPYR63hfV3t52jZN8kn8P45m424VzLGYkc+3vC5RX2o/421cO8NCYgnVqvTZwBqwIvsWFpZtxgZRSr6DJf2bs3riGvzZ/6S2fEjz7UayZ2nkBXxVhaRr6MemceTip/PfzfB6mNrWrc4P8sAadhiHyCY7GbMd/ddaV/XHWXXcjJJv1bCeBDSHkaVGtUTXY+gyJsss06o662l9MGV3ybCa2XK4qqJVB2/cfi61qgr83u2bY8xU1hoBtC912kqizRrRL1S0c7zOgNdaPJh4QHyts4v4qkqWWAvHtfTb4BWtod+aNAl8werWcTEguD9quorrSqRdSdbd6qSciora/aV8uyjIiZHAKnOQWGf8kcwiSzgY8Fwuv/8Pu83e7yKHXYBlnmInM76G6P0y3PSzv8V+slMSgHPHwxyq62ftS3hDrn2L6voAttKk6HJI0qzUqH3Ob+HMU5bsRB/Eac2fZGw0FYdS63L8i3uXx8uQ0kbiwFbl8x/cL28/eZSRuV0eyHYWTR5bih3FU2uzm8hHW+yrTobM9jXrSTbbQNrRL6DTqPxdjgz3KnOzj1aubo6WMeXTmGzQZddMtNuPKNKLHYKBz6h0aYK8WsTcu9E6mYQI+619l8qigLzbqHrFcfcusedjVQFxeVZCmvGUl7LwrWLWvQ07/UrZtDiIoDtcJGNccUq30P6Amfc5mQaZ2yEWSLaN5nJ5rcScooqgLxn57VQmQ2MZitY9yOtOI8dUa5RgJUni1i6qnUbW4axqi+KP+62oJLCzA0j9CFotQDdZSH8/8s0J7P9wi+9XKs+XB9VbHN9yv3pUs55S+lre1Ggn61bfw1V0jOlF3bfT7cnE2fagblJV0GIra5HDJuWttapRjIvsP3+wmm2q2PaSB7azVklMee+nx3+vVR6TbBqRQFKxDtnTp6zFWUou1I7y7Kj0dDyFLfK2ppRM7FbwkWS/K7CouJ0D5VnSlotr8eBsJIXuJp99+mG72bQPYpMv+VYjwRKsXdkE+TY4i5PtTWvOkvZdSdRRysPiEymfO463Q+yZTVotJB3gcTuR68tcvYH8e1v3y0Yt1cfrLjIj61rFVmdRnyAP6i3GfIal1FPtH8Bmkk5aAf1CVUNBXhGiWntn7GSf8khTqgrAXuIBL8Upb4NKBNsoxEp6IIH3Awrft2QpR8t5TrVssg/yf4f7bPg64uSIB6TqoJhkWSO5VhM541RTZ1Chj1VcigUxsEuqesGiG+SJMf3GnY+VHDbnsa4qNNEBPlegjzfgMSYbr1UNfjpVSHmajX2Obpp98bA8toGIejYznw+3Lr6X2PVUFY5/z9GA1xpF1Srk0clMkYbHQ/l87opAb2W8eOscYIf0UC0JJJg/gcw+0O/+CXh3Ofb+gGpC66lNZUOkOooaQvWr/DjlWQewkiMtOb6S55XYdUytyAx1eVB1VYLM1F11j/uuj+qLGE9ibveDdE8lInZEis11XaYsM8m64mT5GPNXa6cSI6fViSP9fUK1y1JoVSGrruZyvq+mUnZclyB5aiiirAkk4Ae2PCCoZg8GNYbLfBX6bd1VOX4qSgV+lhPkQkUKqrEeSL6b6Y/VvO92Ci0RK5zVyWk+WhedyE63gOczlQETqrDmkvXSj3Bmo0Z/FP2E0Vg7O9xa5yPIZS1W5r6q4RlWRu/Gr3fjc8bnetLrP39UK3fE5QWTJF1nk9XsqMkzrrrleVXz3uX/4RiqPV5L1U7UaFTMbgziWCLQTFJe3vSjen8cseY7csdv7XKkOxeN3IcFVJExXdZfyh5nKTQXsp7DivlNzpvszJYZb+a+ya40pxPL6uirqaqSdha79/eIWJWqpeL47C70nAx2hlvS5j+f+d911Qxxbo69g5nnygr/KrpwhAcRS6hoqZbsq5o/iU1MbllxlVYW7Ga0/1TDT1zET8r/k82Z4R9j8D991Mgnos0eoP1ENNgTNR+JtOsffx8L6loT/HYQU5zcFegvRs04gDXuDKq0WPO+MThi7peRIDZvl4RTmv4yyEIHUrHa/UrQ/KtGUJltkde57LcbDxtKTK1TrV2Hribbd9Df9qAWroCfHdQsjrKrWzfr++F2uOZPtNqUtPCNeGlojZbBm1j6qP+zozbIL80VYo14qj5O/tWpCuwnK4w5bjXsMUex1l9BbQQ7pP32l3YD+/C12sNUEatGkZM/bJVza/wJrXXxxB/nTwj+ChwxodBqsCZ1dmP07GHwTOrc8mwxmJc668tw6A/kz5DtYab+/Xuez8AvB5pqrsPkr7D2ER5xNUz8LGDeItbkqrj2xNROylRdyFTF5mRaOTXyac7zFDuHmV/gD6PNBexcLySzDSG2X0Z8/CXtTHOlmcyIKbQaM5V2lrnWzCBf3kgbY35LO9fMMrPNeeZW2gXmNnMH2ft3tIvMveZR6D1mlpsrzCqzhvrnVbPe/Npsot1mNtNuh99cOHM1fn/4KTTDod0OymPg+Tw46cwMs6mNHfX+oj5A1AdBfY0ZDMWNZqJoTdZfzcP6y2NXScTJI8r689z/ABCDOkCzmpUNY30TWd2V5ipztbmGL6ewsmvNdHMda7ueld1j5pk/wmUo+At+H/VTW+7PDe7D2EBXzdaNFsEbKpB9d1qI+FZJhnVZJgsr6Yk2etE8tNAbvvrQotJGDqs7BSn0pWUgiX7w25+Wz0oHwPdAWiG5+1R0OIhWzKoH62+T7q+TQ2ilSG4ouX04rQ1WOgIJjqS1h7tRrLuG1hbNnYUEzqaVS75x5HsetnO+Khn2t4y8gNYZ/Y1FJxfSuppxtG7o8iJWNp7W3VxMqzQTaAlzCa0HsaGO9V1K6yWLCGERs1jLzbQQ2pvNtdNfW/R3G7PcTmuLJu/g2umynVlEi5jF5iHGP4zVZJultFxs5ym+XYYFFZkVZiUrXWVeYI0v0tqbl7CAtljAq/D/mlkHtTexr+5mAzbRUzbRC81cqv8oKYN+BKm5v2h30O4rH8nnMEcerZi7fKgXaEfpLKVIXnMScugie+oqDXeThis5O71WSK/dpNfuaLUP106jYWm0UhqtkEa76XeKCum1m/QakV4zpNdM6TVLes2WXj3p1Zdeo1jsGXA3jNZOOs6RjvOk4wI0fBbXTq8FePI5XI/BPvOk3Z7SbkLaLZB286TdAmk3T9otl3bj0m4PabejtNtJ2u0s7XaRdrviNRPh5EpaCb5zFfw4/2mDB01GEy5KlCpKtMebrkWq02kd8KrreDuDFlPcKDW/MTdh07Owjwqs4xZkchs2UYBF3AlXzibyzBxzF2PuwQ9z8fWFaMFZSQVW8ijjnX1Uyj4qZB+Zsg9f9pEj+yjAPl6BjrOPhOyjQPbRQ/bRRVGoVFbSNYgcJ8lSsmQpvizFk6XkyVJCspQMWUpUlpIpS4lIP3nST7YklCcJ+ZJQtiSUKwnlSEJRSShfEsqQhDxJKEcSypSEopJQWDIISwYh8RsNOO0gTn1xmiU+88VpOI3TTHHqidNscZohm84Tv2HxmyN+w+I3S/zmiN8C8RsVv574zRW/meI3X/xGxW+2+PXEb0T8RtL49aBdLl498ZopXgvh3GdEiuNWqWaL16xAqo7XfNUYoTSOc4ndl/EkxbfLUb64zxT3ueI+mibtbHGflybtwjRpZxHtr2dOt4ZscUyOhcMN+ouWafmduuP/qt4IYU9hUNpyjqjPwEPCwbMyOM1ilubc1HqUKxblSx7NZxP0J+k+X7m9EF8qwrfcf+60OwEn5Xhg+7T7uNZzolWEA26NtJAXzPnzK21tzStubW1EMRx4U6o5XeemteZ5WttJmj3V2gYtdlxl1q45w/83vt32jXjaY2BkAEEGXRWGSwxr/v+p3/8fCur/ntw7u+mdYn89kHO/////9+0MVAQ8jCBSgVztDSAi8z92UA9XxgzEAiAGBwMTiTZsmGsIJFkcwBwAjDY1fHjabZNLaFNBFIb/OSfgA6poKkJR0Rahtg011iQmvWlSrMFCNmJasjC66UIqWESor6Lo0gcVoVYotGpURNz4ggqiIkEogooPdKELW9CNCqLuhPGfgULQLj7Onblnzj3/+efKfMC0kD4cNaOIyxmslyKK2oe1uhUpTKPZnEanOYXADCEqZZTMPD7vRwNjVpajXca5foh6yWKJ9GCjHMEaaeP+MQQSQ4scREoGkDCtKJBu6UfJ1fExjn69gpw8sI9lEhltQkKvI8MzGdnL9SDXz5AxFeTNRYS1lvslbAmFsVjvoFUnkJBh5l1m/Ml3jaz1CAu0gFp5Y6dCaftd7tpPMm5fyFO0U8sQew4YAykga34BTqMct6/kADbJS2zQgDHJnpuR1DrEdBeSnE2XOcyaT5CUBqR1DIu0C+s0gZhsY56LV5n3DWkZxEL5zdxh+14n7RfZbWek176lniZzCTnzFR8YA/bdY3Ygz3kHUrTvyIzk3TPS+Ii4Oc++cjyz05MSYBVn3imf2f9NDJgRejPic1K6jF7Uc/8sVpAxUkciJEr26A2enUa3+YFmnbBlN7fQNc72NvW4+W2295yGUJR6c9zbzu9NIWYiaDQnEDYnqfUcAs480Fvo8P6Vsc/fB+rxsQMRPEeNWWr/6AXWcJ7OgfPY+1uF97dCzRXetQpWznr7H/S1Gu+rw/k3F/TTe1mF93IUq0kbqZn18V+8h9U4Dx1F+9rff/43ch+H/P2ht38BjZvLIHjaY2BmAIP/WxmMGLAAACzCAeoAeNrV0tePlkUUBvDfuyxdpS19hZdFll4FgUWKdGRBegfpmNBDESkqXXoNvUvvvfciTYEQwoUhEf4KuOJz+NZ4wZ3hymdyzsmZPDOZZ86DXHIiXRSy6GzoomSfGm0KtZZYqk9kquxzjX1rsB/t8KtE1D2alnI55UWcFpeOy8UZcWacFR+ukJFIhHNx4FdRX1bgDwn8nXZH3f7hF4tLxelJfuMcfuKV5olX75a0ELUT1yTxtrh/8TL7ZR3+mpTzzveQ7qlnoT5N1uf+TO4+T+YRhllluGnWmeE7qz2y1vfWWG6RxaZ4YqwxfvCLmSZaYqllJtlkvQ222GizWbYGBdtsD0r22BXU7/azvQ7aZ79DDlgRfuWYw4446rjZFjrjpFPOOe2sOc677IKLLrnuiquume+GO2665Te3rTTXA3fdc99DC/zuJ/OcMNVo030ln1EmGG+cP+SJ3gRd+b323xBJCdNNlVseeY0MNxRQ0Ec+DvMtpLAiiiomTXEllFRKaWWUDX/7qXLKh4lWkKGiz1RKuqGKqqqproaawSW11VFXveCR+hr4QkONgluyNPGlpppproXJWmqltTbaaqe9Dr7WUbZOOvtGF111010PPfXSWx999dPfAAMNCr77cDxOenHo/9URfwPFRbymAAAA ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:font/opentype;base64,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";

/***/ }),

/***/ "./A1Sauce/NIS/images/nis-bg.png":
/*!***************************************!*\
  !*** ./A1Sauce/NIS/images/nis-bg.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "nis-bg.png";

/***/ }),

/***/ "./A1Sauce/Nis/images/nis-range-minus.png":
/*!************************************************!*\
  !*** ./A1Sauce/Nis/images/nis-range-minus.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "nis-range-minus.png";

/***/ }),

/***/ "./A1Sauce/Nis/images/nis-range-plus.png":
/*!***********************************************!*\
  !*** ./A1Sauce/Nis/images/nis-range-plus.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "nis-range-plus.png";

/***/ }),

/***/ "./A1Sauce/Nis/images/range-input-tab.png":
/*!************************************************!*\
  !*** ./A1Sauce/Nis/images/range-input-tab.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "range-input-tab.png";

/***/ }),

/***/ "./appconfig.json":
/*!************************!*\
  !*** ./appconfig.json ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "appconfig.json";

/***/ }),

/***/ "./asset/resource/bg.png":
/*!*******************************!*\
  !*** ./asset/resource/bg.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "bg.png";

/***/ }),

/***/ "./asset/resource/button.png":
/*!***********************************!*\
  !*** ./asset/resource/button.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "button.png";

/***/ }),

/***/ "./asset/resource/checkmark.png":
/*!**************************************!*\
  !*** ./asset/resource/checkmark.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "checkmark.png";

/***/ }),

/***/ "./asset/resource/imgbutton.png":
/*!**************************************!*\
  !*** ./asset/resource/imgbutton.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "imgbutton.png";

/***/ }),

/***/ "./asset/resource/scroll.png":
/*!***********************************!*\
  !*** ./asset/resource/scroll.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "scroll.png";

/***/ }),

/***/ "./asset/resource/scrollhor.png":
/*!**************************************!*\
  !*** ./asset/resource/scrollhor.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "scrollhor.png";

/***/ }),

/***/ "./icon.png":
/*!******************!*\
  !*** ./icon.png ***!
  \******************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "icon.png";

/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "index.html";

/***/ }),

/***/ "canvas":
/*!*************************!*\
  !*** external "canvas" ***!
  \*************************/
/***/ ((module) => {

"use strict";
if(typeof __WEBPACK_EXTERNAL_MODULE_canvas__ === 'undefined') { var e = new Error("Cannot find module 'canvas'"); e.code = 'MODULE_NOT_FOUND'; throw e; }

module.exports = __WEBPACK_EXTERNAL_MODULE_canvas__;

/***/ }),

/***/ "electron/common":
/*!**********************************!*\
  !*** external "electron/common" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
if(typeof __WEBPACK_EXTERNAL_MODULE_electron_common__ === 'undefined') { var e = new Error("Cannot find module 'electron/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }

module.exports = __WEBPACK_EXTERNAL_MODULE_electron_common__;

/***/ }),

/***/ "sharp":
/*!************************!*\
  !*** external "sharp" ***!
  \************************/
/***/ ((module) => {

"use strict";
if(typeof __WEBPACK_EXTERNAL_MODULE_sharp__ === 'undefined') { var e = new Error("Cannot find module 'sharp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }

module.exports = __WEBPACK_EXTERNAL_MODULE_sharp__;

/***/ }),

/***/ "../node_modules/alt1/dist/base/index.js":
/*!***********************************************!*\
  !*** ../node_modules/alt1/dist/base/index.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory((function webpackLoadOptionalExternalModule() { try { return __webpack_require__(/*! sharp */ "sharp"); } catch(e) {} }()), (function webpackLoadOptionalExternalModule() { try { return __webpack_require__(/*! canvas */ "canvas"); } catch(e) {} }()), (function webpackLoadOptionalExternalModule() { try { return __webpack_require__(/*! electron/common */ "electron/common"); } catch(e) {} }()));
	else {}
})(globalThis, (__WEBPACK_EXTERNAL_MODULE_sharp__, __WEBPACK_EXTERNAL_MODULE_canvas__, __WEBPACK_EXTERNAL_MODULE_electron_common__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/base/alt1api.ts":
/*!*****************************!*\
  !*** ./src/base/alt1api.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/base/declarations.ts":
/*!**********************************!*\
  !*** ./src/base/declarations.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/base/imagedata-extensions.ts":
/*!******************************************!*\
  !*** ./src/base/imagedata-extensions.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_2062__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ImageData = void 0;
const a1lib = __importStar(__nested_webpack_require_2062__(/*! ./index */ "./src/base/index.ts"));
const nodeimports = __importStar(__nested_webpack_require_2062__(/*! ./nodepolyfill */ "./src/base/nodepolyfill.ts"));
(function () {
    var globalvar = (typeof self != "undefined" ? self : (typeof __nested_webpack_require_2062__.g != "undefined" ? __nested_webpack_require_2062__.g : null));
    var filltype = typeof globalvar.ImageData == "undefined";
    var fillconstr = filltype;
    if (!filltype) {
        var oldconstr = globalvar.ImageData;
        try {
            let data = new Uint8ClampedArray(4);
            data[0] = 1;
            let a = new globalvar.ImageData(data, 1, 1);
            fillconstr = a.data[0] != 1;
        }
        catch (e) {
            fillconstr = true;
        }
    }
    if (fillconstr) {
        var constr = function ImageDataShim() {
            var i = 0;
            var data = (arguments[i] instanceof Uint8ClampedArray ? arguments[i++] : null);
            var width = arguments[i++];
            var height = arguments[i++];
            if (filltype) {
                if (!data) {
                    data = new Uint8ClampedArray(width * height * 4);
                }
                this.width = width;
                this.height = height;
                this.data = data;
            }
            else if (fillconstr) {
                //WARNING This branch of code does not use the same pixel data backing store
                //(problem with wasm, however all wasm browser have a native constructor (unless asm.js is used))
                var canvas = document.createElement('canvas');
                canvas.width = width;
                canvas.height = height;
                var ctx = canvas.getContext("2d");
                var imageData = ctx.createImageData(width, height);
                if (data) {
                    imageData.data.set(data);
                }
                return imageData;
            }
            // else {
            // 	//oh no...
            // 	//we need this monstrocity in order to call the native constructor with variable number of args
            // 	//when es5 transpile is enable (that strips the spread operator)
            // 	return new (Function.prototype.bind.apply(oldconstr, [null,...arguments]));
            // }
        };
        if (!filltype) {
            constr.prototype = globalvar.ImageData.prototype;
        }
        globalvar.ImageData = constr;
        exports.ImageData = constr;
    }
    else {
        exports.ImageData = globalvar.ImageData;
    }
})();
//Recast into a drawable imagedata class on all platforms, into a normal browser ImageData on browsers or a node-canvas imagedata on nodejs
exports.ImageData.prototype.toDrawableData = function () {
    if (typeof document == "undefined") {
        return nodeimports.imageDataToDrawable(this);
    }
    else {
        return this;
    }
};
exports.ImageData.prototype.putImageData = function (buf, cx, cy) {
    for (var dx = 0; dx < buf.width; dx++) {
        for (var dy = 0; dy < buf.height; dy++) {
            var i1 = (dx + cx) * 4 + (dy + cy) * 4 * this.width;
            var i2 = dx * 4 + dy * 4 * buf.width;
            this.data[i1] = buf.data[i2];
            this.data[i1 + 1] = buf.data[i2 + 1];
            this.data[i1 + 2] = buf.data[i2 + 2];
            this.data[i1 + 3] = buf.data[i2 + 3];
        }
    }
};
exports.ImageData.prototype.pixelOffset = function (x, y) {
    return x * 4 + y * this.width * 4;
};
//creates a hash of a portion of the buffer used to check for changes
exports.ImageData.prototype.getPixelHash = function (rect) {
    if (!rect) {
        rect = new a1lib.Rect(0, 0, this.width, this.height);
    }
    var hash = 0;
    for (var x = rect.x; x < rect.x + rect.width; x++) {
        for (var y = rect.y; y < rect.y + rect.height; y++) {
            var i = x * 4 + y * 4 * this.width;
            hash = (((hash << 5) - hash) + this.data[i]) | 0;
            hash = (((hash << 5) - hash) + this.data[i + 1]) | 0;
            hash = (((hash << 5) - hash) + this.data[i + 2]) | 0;
            hash = (((hash << 5) - hash) + this.data[i + 3]) | 0;
        }
    }
    return hash;
};
exports.ImageData.prototype.clone = function (rect) {
    let res = new exports.ImageData(rect.width, rect.height);
    this.copyTo(res, rect.x, rect.y, rect.width, rect.height, 0, 0);
    return res;
};
exports.ImageData.prototype.show = function (x = 5, y = 5, zoom = 1) {
    if (typeof document == "undefined") {
        console.error("need a document to show an imagedata object");
        return;
    }
    var imgs = document.getElementsByClassName("debugimage");
    while (imgs.length > exports.ImageData.prototype.show.maxImages) {
        imgs[0].remove();
    }
    var el = this.toImage();
    el.classList.add("debugimage");
    el.style.position = "absolute";
    el.style.zIndex = "1000";
    el.style.left = x / zoom + "px";
    el.style.top = y / zoom + "px";
    el.style.background = "purple";
    el.style.cursor = "pointer";
    el.style.imageRendering = "pixelated";
    el.style.outline = "1px solid #0f0";
    el.style.width = (this.width == 1 ? 100 : this.width) * zoom + "px";
    el.style.height = (this.height == 1 ? 100 : this.height) * zoom + "px";
    el.onclick = function () { el.remove(); };
    document.body.appendChild(el);
    return el;
};
exports.ImageData.prototype.show.maxImages = 10;
exports.ImageData.prototype.toImage = function (rect) {
    if (!rect) {
        rect = new a1lib.Rect(0, 0, this.width, this.height);
    }
    if (typeof document != "undefined") {
        var el = document.createElement("canvas");
        el.width = rect.width;
        el.height = rect.height;
    }
    else {
        el = nodeimports.createCanvas(rect.width, rect.height);
    }
    var ctx = el.getContext("2d");
    ctx.putImageData(this.toDrawableData(), -rect.x, -rect.y);
    return el;
};
exports.ImageData.prototype.getPixel = function (x, y) {
    var i = x * 4 + y * 4 * this.width;
    return [this.data[i], this.data[i + 1], this.data[i + 2], this.data[i + 3]];
};
exports.ImageData.prototype.getPixelValueSum = function (x, y) {
    var i = x * 4 + y * 4 * this.width;
    return this.data[i] + this.data[i + 1] + this.data[i + 2];
};
exports.ImageData.prototype.getPixelInt = function (x, y) {
    var i = x * 4 + y * 4 * this.width;
    return (this.data[i + 3] << 24) + (this.data[i + 0] << 16) + (this.data[i + 1] << 8) + (this.data[i + 2] << 0);
};
exports.ImageData.prototype.getColorDifference = function (x, y, r, g, b, a = 255) {
    var i = x * 4 + y * 4 * this.width;
    return Math.abs(this.data[i] - r) + Math.abs(this.data[i + 1] - g) + Math.abs(this.data[i + 2] - b) * a / 255;
};
exports.ImageData.prototype.setPixel = function (x, y, ...color) {
    var r, g, b, a;
    var [r, g, b, a] = (Array.isArray(color[0]) ? color[0] : color);
    var i = x * 4 + y * 4 * this.width;
    this.data[i] = r;
    this.data[i + 1] = g;
    this.data[i + 2] = b;
    this.data[i + 3] = a == undefined ? 255 : a;
};
exports.ImageData.prototype.setPixelInt = function (x, y, color) {
    var i = x * 4 + y * 4 * this.width;
    this.data[i] = (color >> 24) & 0xff;
    this.data[i + 1] = (color >> 16) & 0xff;
    this.data[i + 2] = (color >> 8) & 0xff;
    this.data[i + 3] = (color >> 0) & 0xff;
};
exports.ImageData.prototype.toFileBytes = function (format, quality) {
    if (typeof HTMLCanvasElement != "undefined") {
        return new Promise(d => this.toImage().toBlob(b => {
            var r = new FileReader();
            r.readAsArrayBuffer(b);
            r.onload = () => d(new Uint8Array(r.result));
        }, format, quality));
    }
    else {
        return nodeimports.imageDataToFileBytes(this, format, quality);
    }
};
exports.ImageData.prototype.toPngBase64 = function () {
    if (typeof HTMLCanvasElement != "undefined") {
        var str = this.toImage().toDataURL("image/png");
        return str.slice(str.indexOf(",") + 1);
    }
    else {
        throw new Error("synchronous image conversion not supported in nodejs, try using ImageData.prototype.toFileBytes");
    }
};
exports.ImageData.prototype.pixelCompare = function (buf, x = 0, y = 0, max) {
    return a1lib.ImageDetect.simpleCompare(this, buf, x, y, max);
};
exports.ImageData.prototype.copyTo = function (target, sourcex, sourcey, width, height, targetx, targety) {
    //convince v8 that these are 31bit uints
    const targetwidth = target.width | 0;
    const thiswidth = this.width | 0;
    const copywidth = width | 0;
    const fastwidth = Math.floor(width / 4) * 4;
    const thisdata = new Int32Array(this.data.buffer, this.data.byteOffset, this.data.byteLength / 4);
    const targetdata = new Int32Array(target.data.buffer, target.data.byteOffset, target.data.byteLength / 4);
    for (let cy = 0; cy < height; cy++) {
        let cx = 0;
        let it = (cx + targetx) + (cy + targety) * targetwidth;
        let is = (cx + sourcex) + (cy + sourcey) * thiswidth;
        //copy 4 pixels per iter (xmm)
        for (; cx < fastwidth; cx += 4) {
            targetdata[it] = thisdata[is];
            targetdata[it + 1] = thisdata[is + 1];
            targetdata[it + 2] = thisdata[is + 2];
            targetdata[it + 3] = thisdata[is + 3];
            it += 4;
            is += 4;
        }
        //copy remainder per pixel
        for (; cx < copywidth; cx++) {
            targetdata[it] = thisdata[is];
            it += 1;
            is += 1;
        }
    }
};


/***/ }),

/***/ "./src/base/imagedetect.ts":
/*!*********************************!*\
  !*** ./src/base/imagedetect.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_12931__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ImageDataSet = exports.webpackImages = exports.asyncMap = exports.coldif = exports.simpleCompareRMSE = exports.simpleCompare = exports.findSubbuffer = exports.findSubimage = exports.clearPngColorspace = exports.isPngBuffer = exports.imageDataFromFileBuffer = exports.imageDataFromBase64 = exports.imageDataFromUrl = void 0;
const imgref_1 = __nested_webpack_require_12931__(/*! ./imgref */ "./src/base/imgref.ts");
const wapper = __importStar(__nested_webpack_require_12931__(/*! ./wrapper */ "./src/base/wrapper.ts"));
const nodeimports = __importStar(__nested_webpack_require_12931__(/*! ./nodepolyfill */ "./src/base/nodepolyfill.ts"));
const _1 = __nested_webpack_require_12931__(/*! . */ "./src/base/index.ts");
/**
* Downloads an image and returns the ImageData.
* Cleans sRGB headers from downloaded png images. Assumes that data url's are already cleaned from sRGB and other headers
* @param url http(s) or data url to the image
*/
async function imageDataFromUrl(url) {
    var hdr = "data:image/png;base64,";
    var isdataurl = url.startsWith(hdr);
    if (typeof Image != "undefined") {
        if (isdataurl) {
            return loadImageDataFromUrl(url);
        }
        else {
            let res = await fetch(url);
            if (!res.ok) {
                throw new Error("failed to load image: " + url);
            }
            let file = new Uint8Array(await res.arrayBuffer());
            return imageDataFromFileBuffer(file);
        }
    }
    else {
        if (isdataurl) {
            return imageDataFromBase64(url.slice(hdr.length));
        }
        throw new Error("loading remote images in nodejs has been disabled, load the raw bytes and use imageDataFromNodeBuffer instead");
    }
}
exports.imageDataFromUrl = imageDataFromUrl;
function loadImageDataFromUrl(url) {
    if (typeof Image == "undefined") {
        throw new Error("Browser environment expected");
    }
    return new Promise((done, fail) => {
        var img = new Image();
        img.crossOrigin = "crossorigin";
        img.onload = function () { done(new imgref_1.ImgRefCtx(img).toData()); };
        img.onerror = fail;
        img.src = url;
    });
}
/**
* Loads an ImageData object from a base64 encoded png image
* Make sure the png image does not have a sRGB chunk or the resulting pixels will differ for different users!!!
* @param data a base64 encoded png image
*/
async function imageDataFromBase64(data) {
    if (typeof Image != "undefined") {
        return imageDataFromUrl("data:image/png;base64," + data);
    }
    else {
        return nodeimports.imageDataFromBase64(data);
    }
}
exports.imageDataFromBase64 = imageDataFromBase64;
/**
 * Loads an ImageData object directly from a png encoded file buffer
 * This method ensures that png color space headers are taken care off
 * @param data The bytes of a png file
 */
async function imageDataFromFileBuffer(data) {
    if (isPngBuffer(data)) {
        clearPngColorspace(data);
    }
    if (typeof Image != "undefined") {
        let blob = new Blob([data], { type: "image/png" });
        let url = URL.createObjectURL(blob);
        let r = await loadImageDataFromUrl(url);
        URL.revokeObjectURL(url);
        return r;
    }
    else {
        return nodeimports.imageDataFromBuffer(data);
    }
}
exports.imageDataFromFileBuffer = imageDataFromFileBuffer;
/**
* Checks if a given byte array is a png file (by checking for ?PNG as first 4 bytes)
* @param bytes Raw bytes of the png file
*/
function isPngBuffer(bytes) {
    return bytes[0] == 137 && bytes[1] == 80 && bytes[2] == 78 && bytes[3] == 71;
}
exports.isPngBuffer = isPngBuffer;
/**
* Resets the colorspace data in the png file.
* This makes sure the browser renders the exact colors in the file instead of filtering it in order to obtain the best real life representation of
* what it looked like on the authors screen. (this feature is often broken and not supported)
* For example a round trip printscreen -> open in browser results in different colors than the original
* @param data Raw bytes of the png file
*/
function clearPngColorspace(data) {
    if (!isPngBuffer(data)) {
        throw new Error("non-png image received");
    }
    var i = 8;
    while (i < data.length) {
        var length = data[i++] * 0x1000000 + data[i++] * 0x10000 + data[i++] * 0x100 + data[i++];
        var ancillary = !!((data[i] >> 5) & 1);
        var chunkname = String.fromCharCode(data[i], data[i + 1], data[i + 2], data[i + 3]);
        var chunkid = chunkname.toLowerCase();
        if (chunkid != "trns" && ancillary) {
            data[i + 0] = "n".charCodeAt(0);
            data[i + 1] = "o".charCodeAt(0);
            data[i + 2] = "P".charCodeAt(0);
            data[i + 3] = "E".charCodeAt(0);
            //calculate new chunk checksum
            //http://www.libpng.org/pub/png/spec/1.2/PNG-CRCAppendix.html
            var end = i + 4 + length;
            var crc = 0xffffffff;
            //should be fast enough like this
            var bitcrc = function (bit) {
                for (var k = 0; k < 8; k++) {
                    if (bit & 1) {
                        bit = 0xedb88320 ^ (bit >>> 1);
                    }
                    else {
                        bit = bit >>> 1;
                    }
                }
                return bit;
            };
            for (var a = i; a < end; a++) {
                if (a >= i + 4) {
                    data[a] = 0;
                }
                var bit = data[a];
                crc = bitcrc((crc ^ bit) & 0xff) ^ (crc >>> 8);
            }
            crc = crc ^ 0xffffffff;
            //new chunk checksum
            data[i + 4 + length + 0] = (crc >> 24) & 0xff;
            data[i + 4 + length + 1] = (crc >> 16) & 0xff;
            data[i + 4 + length + 2] = (crc >> 8) & 0xff;
            data[i + 4 + length + 3] = (crc >> 0) & 0xff;
        }
        if (chunkname == "IEND") {
            break;
        }
        i += 4; //type
        i += length; //data
        i += 4; //crc
    }
}
exports.clearPngColorspace = clearPngColorspace;
/**
* finds the given needle ImageBuffer in the given haystack ImgRef this function uses the best optimized available
* code depending on the type of the haystack. It will use fast c# searching if the haystack is an ImgRefBind, js searching
* is used otherwise.
* the checklist argument is no longer used and should ignored or null/undefined
* The optional sx,sy,sw,sh arguments indicate a bounding rectangle in which to search the needle. The rectangle should be bigger than the needle
* @returns An array of points where the needle is found. The array is empty if none are found
*/
function findSubimage(haystackImgref, needleBuffer, sx = 0, sy = 0, sw = haystackImgref.width, sh = haystackImgref.height) {
    if (!haystackImgref) {
        throw new TypeError();
    }
    if (!needleBuffer) {
        throw new TypeError();
    }
    var max = 30;
    //check if we can do this in alt1
    if (haystackImgref instanceof imgref_1.ImgRefBind && wapper.hasAlt1 && alt1.bindFindSubImg) {
        var needlestr = wapper.encodeImageString(needleBuffer);
        var r = alt1.bindFindSubImg(haystackImgref.handle, needlestr, needleBuffer.width, sx, sy, sw, sh);
        if (!r) {
            throw new wapper.Alt1Error();
        }
        return JSON.parse(r);
    }
    return findSubbuffer(haystackImgref.read(), needleBuffer, sx, sy, sw, sh);
}
exports.findSubimage = findSubimage;
/**
* Uses js to find the given needle ImageBuffer in the given haystack ImageBuffer. It is better to use the alt1.bind- functions in
* combination with a1nxt.findsubimg.
* the optional sx,sy,sw,sh arguments indicate a bounding rectangle in which to search.
* @returns An array of points where the needle is found. The array is empty if none are found
*/
function findSubbuffer(haystack, needle, sx = 0, sy = 0, sw = haystack.width, sh = haystack.height) {
    var r = [];
    var maxdif = 30;
    var maxresults = 50;
    var needlestride = needle.width * 4;
    var heystackstride = haystack.width * 4;
    //built list of non trans pixel to check
    var checkList = [];
    for (var y = 0; y < needle.height; y++) {
        for (var x = 0; x < needle.width; x++) {
            var i = x * 4 + y * needlestride;
            if (needle.data[i + 3] == 255) {
                checkList.push({ x: x, y: y });
            }
            if (checkList.length == 10) {
                break;
            }
        }
        if (checkList.length == 10) {
            break;
        }
    }
    var cw = (sx + sw) - needle.width;
    var ch = (sy + sh) - needle.height;
    var checklength = checkList.length;
    for (var y = sy; y <= ch; y++) {
        outer: for (var x = sx; x <= cw; x++) {
            for (var a = 0; a < checklength; a++) {
                var i1 = (x + checkList[a].x) * 4 + (y + checkList[a].y) * heystackstride;
                var i2 = checkList[a].x * 4 + checkList[a].y * needlestride;
                var d = 0;
                d = d + Math.abs(haystack.data[i1 + 0] - needle.data[i2 + 0]) | 0;
                d = d + Math.abs(haystack.data[i1 + 1] - needle.data[i2 + 1]) | 0;
                d = d + Math.abs(haystack.data[i1 + 2] - needle.data[i2 + 2]) | 0;
                d *= 255 / needle.data[i2 + 3];
                if (d > maxdif) {
                    continue outer;
                }
            }
            if (simpleCompare(haystack, needle, x, y, maxdif) != Infinity) {
                r.push({ x, y });
                if (r.length > maxresults) {
                    return r;
                }
            }
        }
    }
    return r;
}
exports.findSubbuffer = findSubbuffer;
/**
* Compares two images and returns the average color difference per pixel between them
* @param max The max color difference at any point in the image before short circuiting the function and returning Infinity. set to -1 to always continue.
* @returns The average color difference per pixel or Infinity if the difference is more than max at any point in the image
*/
function simpleCompare(bigbuf, checkbuf, x, y, max = 30) {
    if (x < 0 || y < 0) {
        throw new RangeError();
    }
    if (x + checkbuf.width > bigbuf.width || y + checkbuf.height > bigbuf.height) {
        throw new RangeError();
    }
    if (max == -1) {
        max = 255 * 4;
    }
    var dif = 0;
    for (var step = 8; step >= 1; step /= 2) {
        for (var cx = 0; cx < checkbuf.width; cx += step) {
            for (var cy = 0; cy < checkbuf.height; cy += step) {
                var i1 = (x + cx) * 4 + (y + cy) * bigbuf.width * 4;
                var i2 = cx * 4 + cy * checkbuf.width * 4;
                var d = 0;
                d = d + Math.abs(bigbuf.data[i1 + 0] - checkbuf.data[i2 + 0]) | 0;
                d = d + Math.abs(bigbuf.data[i1 + 1] - checkbuf.data[i2 + 1]) | 0;
                d = d + Math.abs(bigbuf.data[i1 + 2] - checkbuf.data[i2 + 2]) | 0;
                d *= checkbuf.data[i2 + 3] / 255;
                if (step == 1) {
                    dif += d;
                }
                if (d > max) {
                    return Infinity;
                }
            }
        }
    }
    return dif / checkbuf.width / checkbuf.height;
}
exports.simpleCompare = simpleCompare;
/**
* Calculates the root mean square error between the two buffers at the given coordinate, this method can be used in situations with significant blur or
* transparency, it does not bail early on non-matching images like simpleCompare does so it can be expected to be much slower when called often.
* @returns The root mean square error beteen the images, high single pixel errors are penalized more than consisten low errors. return of 0 means perfect match.
*/
function simpleCompareRMSE(bigbuf, checkbuf, x, y) {
    if (x < 0 || y < 0) {
        throw new RangeError();
    }
    if (x + checkbuf.width > bigbuf.width || y + checkbuf.height > bigbuf.height) {
        throw new RangeError();
    }
    var dif = 0;
    var numpix = 0;
    for (var cx = 0; cx < checkbuf.width; cx++) {
        for (var cy = 0; cy < checkbuf.height; cy++) {
            var i1 = (x + cx) * 4 + (y + cy) * bigbuf.width * 4;
            var i2 = cx * 4 + cy * checkbuf.width * 4;
            var d = 0;
            d = d + Math.abs(bigbuf.data[i1 + 0] - checkbuf.data[i2 + 0]) | 0;
            d = d + Math.abs(bigbuf.data[i1 + 1] - checkbuf.data[i2 + 1]) | 0;
            d = d + Math.abs(bigbuf.data[i1 + 2] - checkbuf.data[i2 + 2]) | 0;
            var weight = checkbuf.data[i2 + 3] / 255;
            numpix += weight;
            dif += d * d * weight;
        }
    }
    return Math.sqrt(dif / numpix);
}
exports.simpleCompareRMSE = simpleCompareRMSE;
/**
* Returns the difference between two colors (scaled to the alpha of the second color)
*/
function coldif(r1, g1, b1, r2, g2, b2, a2) {
    return (Math.abs(r1 - r2) + Math.abs(g1 - g2) + Math.abs(b1 - b2)) * a2 / 255; //only applies alpha for 2nd buffer!
}
exports.coldif = coldif;
/**
 * Turns map of promises into a map that contains the resolved values after loading.
 * @param input
 */
function asyncMap(input) {
    var raw = {};
    var promises = [];
    for (var a in input) {
        if (input.hasOwnProperty(a)) {
            raw[a] = null;
            promises.push(input[a].then(function (a, i) { raw[a] = i; r[a] = i; }.bind(null, a)));
        }
    }
    var r = {};
    var promise = Promise.all(promises).then(() => { r.loaded = true; return r; });
    Object.defineProperty(r, "loaded", { enumerable: false, value: false, writable: true });
    Object.defineProperty(r, "promise", { enumerable: false, value: promise });
    Object.defineProperty(r, "raw", { enumerable: false, value: raw });
    return Object.assign(r, raw);
}
exports.asyncMap = asyncMap;
/**
* Same as asyncMap, but casts the properties to ImageData in typescript
*/
function webpackImages(input) {
    return asyncMap(input);
}
exports.webpackImages = webpackImages;
class ImageDataSet {
    constructor() {
        this.buffers = [];
    }
    matchBest(img, x, y, max) {
        let best = null;
        let bestscore = max;
        for (let a = 0; a < this.buffers.length; a++) {
            let score = img.pixelCompare(this.buffers[a], x, y, bestscore);
            if (isFinite(score) && (bestscore == undefined || score < bestscore)) {
                bestscore = score;
                best = a;
            }
        }
        if (best == null) {
            return null;
        }
        return { index: best, score: bestscore };
    }
    static fromFilmStrip(baseimg, width) {
        if ((baseimg.width % width) != 0) {
            throw new Error("slice size does not fit in base img");
        }
        let r = new ImageDataSet();
        for (let x = 0; x < baseimg.width; x += width) {
            r.buffers.push(baseimg.clone(new _1.Rect(x, 0, width, baseimg.height)));
        }
        return r;
    }
    static fromFilmStripUneven(baseimg, widths) {
        let r = new ImageDataSet();
        let x = 0;
        for (let w of widths) {
            r.buffers.push(baseimg.clone(new _1.Rect(x, 0, w, baseimg.height)));
            x += w;
            if (x > baseimg.width) {
                throw new Error("sampling filmstrip outside bounds");
            }
        }
        if (x != baseimg.width) {
            throw new Error("unconsumed pixels left in film strip imagedata");
        }
        return r;
    }
    static fromAtlas(baseimg, slices) {
        let r = new ImageDataSet();
        for (let slice of slices) {
            r.buffers.push(baseimg.clone(slice));
        }
        return r;
    }
}
exports.ImageDataSet = ImageDataSet;


/***/ }),

/***/ "./src/base/imgref.ts":
/*!****************************!*\
  !*** ./src/base/imgref.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __nested_webpack_require_29896__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ImgRefData = exports.ImgRefBind = exports.ImgRefCtx = exports.ImgRef = void 0;
const index_1 = __nested_webpack_require_29896__(/*! ./index */ "./src/base/index.ts");
/**
 * Represents an image that might be in different types of memory
 * This is mostly used to represent images still in Alt1 memory that have
 * not been transfered to js yet. Various a1lib api's use this type and
 * choose the most efficient approach based on the memory type
 */
class ImgRef {
    constructor(x, y, w, h) {
        this.t = "none";
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
    }
    read(x = 0, y = 0, w = this.width, h = this.height) {
        throw new Error("This imgref (" + this.t + ") does not support toData");
    }
    findSubimage(needle, sx = 0, sy = 0, w = this.width, h = this.height) {
        return index_1.ImageDetect.findSubimage(this, needle, sx, sy, w, h);
    }
    toData(x = this.x, y = this.y, w = this.width, h = this.height) {
        return this.read(x - this.x, y - this.y, w, h);
    }
    ;
    containsArea(rect) {
        return this.x <= rect.x && this.y <= rect.y && this.x + this.width >= rect.x + rect.width && this.y + this.height >= rect.y + rect.height;
    }
}
exports.ImgRef = ImgRef;
/**
 * Represents an image in js render memory (canvas/image tag)
 */
class ImgRefCtx extends ImgRef {
    constructor(img, x = 0, y = 0) {
        if (img instanceof CanvasRenderingContext2D) {
            super(x, y, img.canvas.width, img.canvas.height);
            this.ctx = img;
        }
        else {
            super(x, y, img.width, img.height);
            if (img instanceof HTMLCanvasElement) {
                this.ctx = img.getContext("2d", { willReadFrequently: true });
            }
            else {
                var cnv = document.createElement("canvas");
                cnv.width = img.width;
                cnv.height = img.height;
                this.ctx = cnv.getContext("2d", { willReadFrequently: true });
                this.ctx.drawImage(img, 0, 0);
            }
        }
        this.t = "ctx";
    }
    read(x = 0, y = 0, w = this.width, h = this.height) {
        return this.ctx.getImageData(x, y, w, h);
    }
}
exports.ImgRefCtx = ImgRefCtx;
/**
 * Represents in image in Alt1 memory, This type of image can be searched for subimages
 * very efficiently and transfering the full image to js can be avoided this way
 */
class ImgRefBind extends ImgRef {
    constructor(handle, x = 0, y = 0, w = 0, h = 0) {
        super(x, y, w, h);
        this.handle = handle;
        this.t = "bind";
    }
    read(x = 0, y = 0, w = this.width, h = this.height) {
        return (0, index_1.transferImageData)(this.handle, x, y, w, h);
    }
}
exports.ImgRefBind = ImgRefBind;
/**
 * Represents an image in js memory
 */
class ImgRefData extends ImgRef {
    constructor(buf, x = 0, y = 0) {
        super(x, y, buf.width, buf.height);
        this.buf = buf;
        this.t = "data";
    }
    read(x = 0, y = 0, w = this.width, h = this.height) {
        if (x == 0 && y == 0 && w == this.width && h == this.height) {
            return this.buf;
        }
        var r = new ImageData(w, h);
        for (var b = y; b < y + h; b++) {
            for (var a = x; a < x + w; a++) {
                var i1 = (a - x) * 4 + (b - y) * w * 4;
                var i2 = a * 4 + b * 4 * this.buf.width;
                r.data[i1] = this.buf.data[i2];
                r.data[i1 + 1] = this.buf.data[i2 + 1];
                r.data[i1 + 2] = this.buf.data[i2 + 2];
                r.data[i1 + 3] = this.buf.data[i2 + 3];
            }
        }
        return r;
    }
}
exports.ImgRefData = ImgRefData;


/***/ }),

/***/ "./src/base/index.ts":
/*!***************************!*\
  !*** ./src/base/index.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_33868__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.imageDataFromUrl = exports.ImageDataSet = exports.findSubbuffer = exports.simpleCompare = exports.findSubimage = exports.webpackImages = exports.NodePolyfill = exports.ImageData = exports.Rect = exports.PasteInput = exports.ImageDetect = void 0;
__nested_webpack_require_33868__(/*! ./declarations */ "./src/base/declarations.ts");
exports.ImageDetect = __importStar(__nested_webpack_require_33868__(/*! ./imagedetect */ "./src/base/imagedetect.ts"));
exports.PasteInput = __importStar(__nested_webpack_require_33868__(/*! ./pasteinput */ "./src/base/pasteinput.ts"));
var rect_1 = __nested_webpack_require_33868__(/*! ./rect */ "./src/base/rect.ts");
Object.defineProperty(exports, "Rect", ({ enumerable: true, get: function () { return __importDefault(rect_1).default; } }));
var imagedata_extensions_1 = __nested_webpack_require_33868__(/*! ./imagedata-extensions */ "./src/base/imagedata-extensions.ts");
Object.defineProperty(exports, "ImageData", ({ enumerable: true, get: function () { return imagedata_extensions_1.ImageData; } }));
exports.NodePolyfill = __importStar(__nested_webpack_require_33868__(/*! ./nodepolyfill */ "./src/base/nodepolyfill.ts"));
__exportStar(__nested_webpack_require_33868__(/*! ./imgref */ "./src/base/imgref.ts"), exports);
__exportStar(__nested_webpack_require_33868__(/*! ./wrapper */ "./src/base/wrapper.ts"), exports);
var imagedetect_1 = __nested_webpack_require_33868__(/*! ./imagedetect */ "./src/base/imagedetect.ts");
Object.defineProperty(exports, "webpackImages", ({ enumerable: true, get: function () { return imagedetect_1.webpackImages; } }));
Object.defineProperty(exports, "findSubimage", ({ enumerable: true, get: function () { return imagedetect_1.findSubimage; } }));
Object.defineProperty(exports, "simpleCompare", ({ enumerable: true, get: function () { return imagedetect_1.simpleCompare; } }));
Object.defineProperty(exports, "findSubbuffer", ({ enumerable: true, get: function () { return imagedetect_1.findSubbuffer; } }));
Object.defineProperty(exports, "ImageDataSet", ({ enumerable: true, get: function () { return imagedetect_1.ImageDataSet; } }));
Object.defineProperty(exports, "imageDataFromUrl", ({ enumerable: true, get: function () { return imagedetect_1.imageDataFromUrl; } }));


/***/ }),

/***/ "./src/base/nodepolyfill.ts":
/*!**********************************!*\
  !*** ./src/base/nodepolyfill.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __nested_webpack_require_37680__) => {


//nodejs and electron polyfills for web api's
//commented out type info as that breaks webpack with optional dependencies
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.imageDataFromBuffer = exports.imageDataFromBase64 = exports.imageDataToFileBytes = exports.createCanvas = exports.imageDataToDrawable = exports.requireElectronCommon = exports.requireNodeCanvas = exports.requireSharp = exports.polyfillRequire = void 0;
const index_1 = __nested_webpack_require_37680__(/*! ./index */ "./src/base/index.ts");
const imagedetect_1 = __nested_webpack_require_37680__(/*! ./imagedetect */ "./src/base/imagedetect.ts");
var requirefunction = null;
/**
 * Call this function to let the libs require extra dependencies on nodejs in order
 * to polyfill some browser api's (mostly image compression/decompression)
 * `NodePolifill.polyfillRequire(require);` should solve most cases
 */
function polyfillRequire(requirefn) {
    requirefunction = requirefn;
}
exports.polyfillRequire = polyfillRequire;
function requireSharp() {
    try {
        if (requirefunction) {
            return requirefunction("sharp");
        }
        else {
            return __nested_webpack_require_37680__(/* webpackIgnore: true */ /*! sharp */ "sharp"); // as typeof import("sharp");
        }
    }
    catch (e) { }
    return null;
}
exports.requireSharp = requireSharp;
function requireNodeCanvas() {
    //attempt to require sharp first, after loading canvas the module sharp fails to load
    requireSharp();
    try {
        if (requirefunction) {
            return requirefunction("canvas");
        }
        else {
            return __nested_webpack_require_37680__(/* webpackIgnore: true */ /*! canvas */ "canvas"); // as typeof import("sharp");
        }
    }
    catch (e) { }
    return null;
}
exports.requireNodeCanvas = requireNodeCanvas;
function requireElectronCommon() {
    try {
        if (requirefunction) {
            return requirefunction("electron/common");
        }
        else {
            return __nested_webpack_require_37680__(/* webpackIgnore: true */ /*! electron/common */ "electron/common");
        }
    }
    catch (e) { }
    return null;
}
exports.requireElectronCommon = requireElectronCommon;
function imageDataToDrawable(buf) {
    let nodecnv = requireNodeCanvas();
    if (!nodecnv) {
        throw new Error("couldn't find built-in canvas or the module 'canvas'");
    }
    return new nodecnv.ImageData(buf.data, buf.width, buf.height);
}
exports.imageDataToDrawable = imageDataToDrawable;
function createCanvas(w, h) {
    let nodecnv = requireNodeCanvas();
    if (!nodecnv) {
        throw new Error("couldn't find built-in canvas or the module 'canvas'");
    }
    return nodecnv.createCanvas(w, h);
}
exports.createCanvas = createCanvas;
function flipBGRAtoRGBA(data) {
    for (let i = 0; i < data.length; i += 4) {
        let tmp = data[i + 2];
        data[i + 2] = data[i + 0];
        data[i + 0] = tmp;
    }
}
async function imageDataToFileBytes(buf, format, quality) {
    //use the electron API if we're in electron
    var electronCommon;
    var sharp;
    if (electronCommon = requireElectronCommon()) {
        let nativeImage = electronCommon.nativeImage;
        //need to copy the buffer in order to flip it without destroying the original
        let bufcpy = Buffer.from(buf.data.slice(buf.data.byteOffset, buf.data.byteLength));
        flipBGRAtoRGBA(bufcpy);
        let nativeimg = nativeImage.createFromBitmap(bufcpy, { width: buf.width, height: buf.height });
        return nativeimg.toPNG();
    }
    else if (sharp = requireSharp()) {
        let img = sharp(Buffer.from(buf.data.buffer), { raw: { width: buf.width, height: buf.height, channels: 4 } });
        if (format == "image/png") {
            img.png();
        }
        else if (format == "image/webp") {
            var opts = { quality: 80 };
            if (typeof quality == "number") {
                opts.quality = quality * 100;
            }
            img.webp(opts);
        }
        else {
            throw new Error("unknown image format: " + format);
        }
        return await img.toBuffer({ resolveWithObject: false }).buffer;
    }
    throw new Error("coulnd't find build-in image compression methods or the module 'electron/common' or 'sharp'");
}
exports.imageDataToFileBytes = imageDataToFileBytes;
function imageDataFromBase64(base64) {
    return imageDataFromBuffer(Buffer.from(base64, "base64"));
}
exports.imageDataFromBase64 = imageDataFromBase64;
async function imageDataFromBuffer(buffer) {
    (0, imagedetect_1.clearPngColorspace)(buffer);
    //use the electron API if we're in electron
    var electronCommon;
    var nodecnv;
    if (electronCommon = requireElectronCommon()) {
        let nativeImage = electronCommon.nativeImage;
        let img = nativeImage.createFromBuffer(buffer);
        let pixels = img.toBitmap();
        let size = img.getSize();
        let pixbuf = new Uint8ClampedArray(pixels.buffer, pixels.byteOffset, pixels.byteLength);
        flipBGRAtoRGBA(pixbuf);
        return new index_1.ImageData(pixbuf, size.width, size.height);
    }
    else if (nodecnv = requireNodeCanvas()) {
        return new Promise((done, err) => {
            let img = new nodecnv.Image();
            img.onerror = err;
            img.onload = () => {
                var cnv = nodecnv.createCanvas(img.naturalWidth, img.naturalHeight);
                var ctx = cnv.getContext("2d");
                ctx.drawImage(img, 0, 0);
                var data = ctx.getImageData(0, 0, img.naturalWidth, img.naturalHeight);
                //use our own class
                done(new index_1.ImageData(data.data, data.width, data.height));
            };
            img.src = Buffer.from(buffer.buffer, buffer.byteOffset, buffer.byteLength);
        });
    }
    throw new Error("couldn't find built-in canvas, module 'electron/common' or the module 'canvas'");
}
exports.imageDataFromBuffer = imageDataFromBuffer;


/***/ }),

/***/ "./src/base/pasteinput.ts":
/*!********************************!*\
  !*** ./src/base/pasteinput.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_43872__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fileDialog = exports.start = exports.startDragNDrop = exports.triggerPaste = exports.unlisten = exports.listen = exports.lastref = void 0;
const index_1 = __nested_webpack_require_43872__(/*! ./index */ "./src/base/index.ts");
const ImageDetect = __importStar(__nested_webpack_require_43872__(/*! ./imagedetect */ "./src/base/imagedetect.ts"));
var listeners = [];
var started = false;
var dndStarted = false;
var pasting = false;
exports.lastref = null;
function listen(func, errorfunc, dragndrop) {
    listeners.push({ cb: func, error: errorfunc });
    if (!started) {
        start();
    }
    if (dragndrop && !dndStarted) {
        startDragNDrop();
    }
}
exports.listen = listen;
function unlisten(func) {
    let i = listeners.findIndex(c => c.cb == func);
    if (i != -1) {
        listeners.splice(i, 1);
    }
}
exports.unlisten = unlisten;
/**
 * currently used in multiple document situations (iframe), might be removed in the future
 */
function triggerPaste(img) {
    exports.lastref = img;
    for (var a in listeners) {
        listeners[a].cb(exports.lastref);
    }
}
exports.triggerPaste = triggerPaste;
function pasted(img) {
    pasting = false;
    triggerPaste(new index_1.ImgRefCtx(img));
}
function error(error, mes) {
    var _a, _b;
    pasting = false;
    for (var a in listeners) {
        (_b = (_a = listeners[a]).error) === null || _b === void 0 ? void 0 : _b.call(_a, mes, error);
    }
}
function startDragNDrop() {
    var getitem = function (items) {
        var foundimage = "";
        for (var a = 0; a < items.length; a++) {
            var item = items[a];
            var m = item.type.match(/^image\/(\w+)$/);
            if (m) {
                if (m[1] == "png") {
                    return item;
                }
                else {
                    foundimage = m[1];
                }
            }
        }
        if (foundimage) {
            error("notpng", "The image you uploaded is not a .png image. Other image type have compression noise and can't be used for image detection.");
        }
        return null;
    };
    window.addEventListener("dragover", function (e) {
        e.preventDefault();
    });
    window.addEventListener("drop", function (e) {
        if (!e.dataTransfer) {
            return;
        }
        var item = getitem(e.dataTransfer.items);
        e.preventDefault();
        if (!item) {
            return;
        }
        fromFile(item.getAsFile());
    });
}
exports.startDragNDrop = startDragNDrop;
function start() {
    if (started) {
        return;
    }
    started = true;
    //determine if we have a clipboard api
    //try{a=new Event("clipboard"); a="clipboardData" in a;}
    //catch(e){a=false;}
    var ischrome = !!navigator.userAgent.match(/Chrome/) && !navigator.userAgent.match(/Edge/);
    //old method breaks after chrome 41, revert to good old user agent sniffing
    //nvm, internet explorer (edge) decided that it wants to be chrome, however fails at delivering
    //turns out this one is interesting, edge is a hybrid between the paste api's
    var apipasted = function (e) {
        if (!e.clipboardData) {
            return;
        }
        for (var a = 0; a < e.clipboardData.items.length; a++) { //loop all data types
            if (e.clipboardData.items[a].type.indexOf("image") != -1) {
                var file = e.clipboardData.items[a].getAsFile();
                if (file) {
                    var img = new Image();
                    img.src = (window.URL || window.webkitURL).createObjectURL(file);
                    if (img.width > 0) {
                        pasted(img);
                    }
                    else {
                        img.onload = function () { pasted(img); };
                    }
                }
            }
        }
    };
    if (ischrome) {
        document.addEventListener("paste", apipasted);
    }
    else {
        var catcher = document.createElement("div");
        catcher.setAttribute("contenteditable", "");
        catcher.className = "forcehidden"; //retarded ie safety/bug, cant apply styles using js//TODO i don't even know what's going on
        catcher.onpaste = function (e) {
            if (e.clipboardData && e.clipboardData.items) {
                apipasted(e);
                return;
            }
            setTimeout(function () {
                var b = catcher.children[0];
                if (!b || b.tagName != "IMG") {
                    return;
                }
                var img = new Image();
                img.src = b.src;
                var a = img.src.match(/^data:([\w\/]+);/);
                if (img.width > 0) {
                    pasted(img);
                }
                else {
                    img.onload = function () { pasted(img); };
                }
                catcher.innerHTML = "";
            }, 1);
        };
        document.body.appendChild(catcher);
    }
    //detect if ctrl-v is pressed and focus catcher if needed
    document.addEventListener("keydown", function (e) {
        if (e.target.tagName == "INPUT") {
            return;
        }
        if (e.keyCode != "V".charCodeAt(0) || !e.ctrlKey) {
            return;
        }
        pasting = true;
        setTimeout(function () {
            if (pasting) {
                error("noimg", "You pressed Ctrl+V, but no image was pasted by your browser, make sure your clipboard contains an image, and not a link to an image.");
            }
        }, 1000);
        if (catcher) {
            catcher.focus();
        }
    });
}
exports.start = start;
function fileDialog() {
    var fileinput = document.createElement("input");
    fileinput.type = "file";
    fileinput.accept = "image/png";
    fileinput.onchange = function () { if (fileinput.files && fileinput.files[0]) {
        fromFile(fileinput.files[0]);
    } };
    fileinput.click();
    return fileinput;
}
exports.fileDialog = fileDialog;
function fromFile(file) {
    if (!file) {
        return;
    }
    var reader = new FileReader();
    reader.onload = function () {
        var bytearray = new Uint8Array(reader.result);
        if (ImageDetect.isPngBuffer(bytearray)) {
            ImageDetect.clearPngColorspace(bytearray);
        }
        var blob = new Blob([bytearray], { type: "image/png" });
        var img = new Image();
        var bloburl = URL.createObjectURL(blob);
        img.onerror = () => {
            URL.revokeObjectURL(bloburl);
            error("invalidfile", "The file you uploaded could not be opened as an image.");
        };
        img.src = bloburl;
        if (img.width > 0) {
            pasted(img);
            URL.revokeObjectURL(bloburl);
        }
        else {
            img.onload = function () {
                pasted(img);
                URL.revokeObjectURL(bloburl);
            };
        }
    };
    reader.readAsArrayBuffer(file);
}


/***/ }),

/***/ "./src/base/rect.ts":
/*!**************************!*\
  !*** ./src/base/rect.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {


//util class for rectangle maths
//TODO shit this sucks can we remove it again?
//more of a shorthand to get {x,y,width,height} than a class
//kinda starting to like it again
//TODO remove rant
Object.defineProperty(exports, "__esModule", ({ value: true }));
;
/**
 * Simple rectangle class with some util functions
 */
class Rect {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
    }
    static fromArgs(...args) {
        if (typeof args[0] == "object") {
            return new Rect(args[0].x, args[0].y, args[0].width, args[0].height);
        }
        else if (typeof args[0] == "number" && args.length >= 4) {
            return new Rect(args[0], args[1], args[2], args[3]);
        }
        else {
            throw new Error("invalid rect args");
        }
    }
    /**
     * Resizes this Rect to include the full size of a given second rectangle
     */
    union(r2) {
        var x = Math.min(this.x, r2.x);
        var y = Math.min(this.y, r2.y);
        this.width = Math.max(this.x + this.width, r2.x + r2.width) - x;
        this.height = Math.max(this.y + this.height, r2.y + r2.height) - y;
        this.x = x;
        this.y = y;
        return this;
    }
    /**
     * Resizes this Rect to include a given point
     */
    includePoint(x, y) {
        this.union(new Rect(x, y, 0, 0));
    }
    /**
     * Grows the rectangle with the given dimensions
     */
    inflate(w, h) {
        this.x -= w;
        this.y -= h;
        this.width += 2 * w;
        this.height += 2 * h;
    }
    /**
     * Resizes this Rect to the area that overlaps a given Rect
     * width and height will be set to 0 if the intersection does not exist
     */
    intersect(r2) {
        if (this.x < r2.x) {
            this.width -= r2.x - this.x;
            this.x = r2.x;
        }
        if (this.y < r2.y) {
            this.height -= r2.y - this.y;
            this.y = r2.y;
        }
        this.width = Math.min(this.x + this.width, r2.x + r2.width) - this.x;
        this.height = Math.min(this.y + this.height, r2.y + r2.height) - this.y;
        if (this.width <= 0 || this.height <= 0) {
            this.width = 0;
            this.height = 0;
        }
    }
    /**
     * Returns wether this Rect has at least one pixel overlap with a given Rect
     */
    overlaps(r2) {
        return this.x < r2.x + r2.width && this.x + this.width > r2.x && this.y < r2.y + r2.height && this.y + this.height > r2.y;
    }
    /**
     * Returns wether a given Rect fits completely inside this Rect
     * @param r2
     */
    contains(r2) {
        return this.x <= r2.x && this.x + this.width >= r2.x + r2.width && this.y <= r2.y && this.y + this.height >= r2.y + r2.height;
    }
    /**
     * Returns wether a given point lies inside this Rect
     */
    containsPoint(x, y) {
        return this.x <= x && this.x + this.width > x && this.y <= y && this.y + this.height > y;
    }
}
exports["default"] = Rect;


/***/ }),

/***/ "./src/base/wrapper.ts":
/*!*****************************!*\
  !*** ./src/base/wrapper.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_55275__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.captureStream = exports.captureMultiAsync = exports.captureAsync = exports.ImageStreamReader = exports.once = exports.removeListener = exports.on = exports.addResizeElement = exports.getMousePosition = exports.hasAlt1Version = exports.resetEnvironment = exports.identifyApp = exports.unmixColor = exports.mixColor = exports.encodeImageString = exports.decodeImageString = exports.transferImageData = exports.captureHoldFullRs = exports.captureHoldScreen = exports.captureHold = exports.capture = exports.getdisplaybounds = exports.requireAlt1 = exports.openbrowser = exports.skinName = exports.hasAlt1 = exports.newestversion = exports.Alt1Error = exports.NoAlt1Error = void 0;
const rect_1 = __importDefault(__nested_webpack_require_55275__(/*! ./rect */ "./src/base/rect.ts"));
const imgref_1 = __nested_webpack_require_55275__(/*! ./imgref */ "./src/base/imgref.ts");
const imagedata_extensions_1 = __nested_webpack_require_55275__(/*! ./imagedata-extensions */ "./src/base/imagedata-extensions.ts");
__nested_webpack_require_55275__(/*! ./alt1api */ "./src/base/alt1api.ts");
/**
 * Thrown when a method is called that can not be used outside of Alt1
 */
class NoAlt1Error extends Error {
    constructor() {
        super();
        this.message = "This method can not be ran outside of Alt1";
    }
}
exports.NoAlt1Error = NoAlt1Error;
;
/**
 * Thrown when the Alt1 API returns an invalid result
 * Errors of a different type are throw when internal Alt1 errors occur
 */
class Alt1Error extends Error {
}
exports.Alt1Error = Alt1Error;
/**
 * The latest Alt1 version
 */
exports.newestversion = "1.5.5";
/**
 * Whether the Alt1 API is available
 */
exports.hasAlt1 = (typeof alt1 != "undefined");
/**
 * The name of the Alt1 interface skin. (Always "default" if running in a browser)
 */
exports.skinName = exports.hasAlt1 ? alt1.skinName : "default";
/**
 * Max number of bytes that can be sent by alt1 in one function
 * Not completely sure why this number is different than window.alt1.maxtranfer
 */
var maxtransfer = 4000000;
/**
 * Open a link in the default browser
 * @deprecated use window.open instead
 */
function openbrowser(url) {
    if (exports.hasAlt1) {
        alt1.openBrowser(url);
    }
    else {
        window.open(url, '_blank');
    }
}
exports.openbrowser = openbrowser;
/**
 * Throw if Alt1 API is not available
 */
function requireAlt1() {
    if (!exports.hasAlt1) {
        throw new NoAlt1Error();
    }
}
exports.requireAlt1 = requireAlt1;
/**
 * Returns an object with a rectangle that spans all screens
 */
function getdisplaybounds() {
    if (!exports.hasAlt1) {
        return false;
    }
    return new rect_1.default(alt1.screenX, alt1.screenY, alt1.screenWidth, alt1.screenHeight);
}
exports.getdisplaybounds = getdisplaybounds;
/**
 * gets an imagebuffer with pixel data about the requested region
 */
function capture(...args) {
    //TODO change null return on error into throw instead (x3)
    if (!exports.hasAlt1) {
        throw new NoAlt1Error();
    }
    var rect = rect_1.default.fromArgs(...args);
    if (alt1.capture) {
        return new imagedata_extensions_1.ImageData(alt1.capture(rect.x, rect.y, rect.width, rect.height), rect.width, rect.height);
    }
    var buf = new imagedata_extensions_1.ImageData(rect.width, rect.height);
    if (rect.width * rect.height * 4 <= maxtransfer) {
        var data = alt1.getRegion(rect.x, rect.y, rect.width, rect.height);
        if (!data) {
            return null;
        }
        decodeImageString(data, buf, 0, 0, rect.width, rect.height);
    }
    else {
        //split up the request to to exceed the single transfer limit (for now)
        var x1 = rect.x;
        var ref = alt1.bindRegion(rect.x, rect.y, rect.width, rect.height);
        if (ref <= 0) {
            return null;
        }
        while (x1 < rect.x + rect.width) {
            var x2 = Math.min(rect.x + rect.width, Math.floor(x1 + (maxtransfer / 4 / rect.height)));
            var data = alt1.bindGetRegion(ref, x1, rect.y, x2 - x1, rect.height);
            if (!data) {
                return null;
            }
            decodeImageString(data, buf, x1 - rect.x, 0, x2 - x1, rect.height);
            x1 = x2;
        }
    }
    return buf;
}
exports.capture = capture;
/**
 * Makes alt1 bind an area of the rs client in memory without sending it to the js client
 * returns an imgref object which can be used to get pixel data using the imgreftobuf function
 * currently only one bind can exist per app and the ref in (v) will always be 1
 */
function captureHold(x, y, w, h) {
    x = Math.round(x);
    y = Math.round(y);
    w = Math.round(w);
    h = Math.round(h);
    requireAlt1();
    var r = alt1.bindRegion(x, y, w, h);
    if (r <= 0) {
        throw new Alt1Error("capturehold failed");
    }
    return new imgref_1.ImgRefBind(r, x, y, w, h);
}
exports.captureHold = captureHold;
/**
 * Same as captureHoldRegion, but captures the screen instead of the rs client. it also uses screen coordinates instead and can capture outside of the rs client
 */
function captureHoldScreen(x, y, w, h) {
    x = Math.round(x);
    y = Math.round(y);
    w = Math.round(w);
    h = Math.round(h);
    requireAlt1();
    var r = alt1.bindScreenRegion(x, y, w, h);
    if (r <= 0) {
        return false;
    }
    return new imgref_1.ImgRefBind(r, x, y, w, h);
}
exports.captureHoldScreen = captureHoldScreen;
/**
 * bind the full rs window
 */
function captureHoldFullRs() {
    return captureHold(0, 0, alt1.rsWidth, alt1.rsHeight);
}
exports.captureHoldFullRs = captureHoldFullRs;
/**
 * returns a subregion from a bound image
 * used internally in imgreftobuf if imgref is a bound image
 * @deprecated This should be handled internall by the imgrefbind.toData method
 */
function transferImageData(handle, x, y, w, h) {
    x = Math.round(x);
    y = Math.round(y);
    w = Math.round(w);
    h = Math.round(h);
    requireAlt1();
    if (alt1.bindGetRegionBuffer) {
        return new imagedata_extensions_1.ImageData(alt1.bindGetRegionBuffer(handle, x, y, w, h), w, h);
    }
    var r = new imagedata_extensions_1.ImageData(w, h);
    var x1 = x;
    while (true) { //split up the request to to exceed the single transfer limit (for now)
        var x2 = Math.min(x + w, Math.floor(x1 + (maxtransfer / 4 / h)));
        var a = alt1.bindGetRegion(handle, x1, y, x2 - x1, h);
        if (!a) {
            throw new Alt1Error();
        }
        decodeImageString(a, r, x1 - x, 0, x2 - x1, h);
        x1 = x2;
        if (x1 == x + w) {
            break;
        }
        ;
    }
    return r;
}
exports.transferImageData = transferImageData;
/**
 * decodes a returned string from alt1 to an imagebuffer. You generally never have to do this yourself
 */
function decodeImageString(imagestring, target, x, y, w, h) {
    var bin = atob(imagestring);
    var bytes = target.data;
    w |= 0;
    h |= 0;
    var offset = 4 * x + 4 * y * target.width;
    var target_width = target.width | 0;
    for (var a = 0; a < w; a++) {
        for (var b = 0; b < h; b++) {
            var i1 = (offset + (a * 4 | 0) + (b * target_width * 4 | 0)) | 0;
            var i2 = ((a * 4 | 0) + (b * 4 * w | 0)) | 0;
            bytes[i1 + 0 | 0] = bin.charCodeAt(i2 + 2 | 0); //fix weird red/blue swap in c#
            bytes[i1 + 1 | 0] = bin.charCodeAt(i2 + 1 | 0);
            bytes[i1 + 2 | 0] = bin.charCodeAt(i2 + 0 | 0);
            bytes[i1 + 3 | 0] = bin.charCodeAt(i2 + 3 | 0);
        }
    }
    return target;
}
exports.decodeImageString = decodeImageString;
/**
 * encodes an imagebuffer to a string
 */
function encodeImageString(buf, sx = 0, sy = 0, sw = buf.width, sh = buf.height) {
    var raw = "";
    for (var y = sy; y < sy + sh; y++) {
        for (var x = sx; x < sx + sw; x++) {
            var i = 4 * x + 4 * buf.width * y | 0;
            raw += String.fromCharCode(buf.data[i + 2 | 0]);
            raw += String.fromCharCode(buf.data[i + 1 | 0]);
            raw += String.fromCharCode(buf.data[i + 0 | 0]);
            raw += String.fromCharCode(buf.data[i + 3 | 0]);
        }
    }
    return btoa(raw);
}
exports.encodeImageString = encodeImageString;
/**
 * mixes the given color into a single int. This format is used by alt1
 */
function mixColor(r, g, b, a = 255) {
    return (b << 0) + (g << 8) + (r << 16) + (a << 24);
}
exports.mixColor = mixColor;
function unmixColor(col) {
    var r = (col >> 16) & 0xff;
    var g = (col >> 8) & 0xff;
    var b = (col >> 0) & 0xff;
    return [r, g, b];
}
exports.unmixColor = unmixColor;
function identifyApp(url) {
    if (exports.hasAlt1) {
        alt1.identifyAppUrl(url);
    }
}
exports.identifyApp = identifyApp;
function resetEnvironment() {
    exports.hasAlt1 = (typeof alt1 != "undefined");
    exports.skinName = exports.hasAlt1 ? alt1.skinName : "default";
}
exports.resetEnvironment = resetEnvironment;
function convertAlt1Version(str) {
    var a = str.match(/^(\d+)\.(\d+)\.(\d+)$/);
    if (!a) {
        throw new RangeError("Invalid version string");
    }
    return (+a[1]) * 1000 * 1000 + (+a[2]) * 1000 + (+a[3]) * 1;
}
var cachedVersionInt = -1;
/**
 * checks if alt1 is running and at least the given version. versionstr should be a string with the version eg: 1.3.2
 * @param versionstr
 */
function hasAlt1Version(versionstr) {
    if (!exports.hasAlt1) {
        return false;
    }
    if (cachedVersionInt == -1) {
        cachedVersionInt = alt1.versionint;
    }
    return cachedVersionInt >= convertAlt1Version(versionstr);
}
exports.hasAlt1Version = hasAlt1Version;
/**
 * Gets the current cursor position in the game, returns null if the rs window is not active (alt1.rsActive)
 */
function getMousePosition() {
    var pos = alt1.mousePosition;
    if (pos == -1) {
        return null;
    }
    return { x: pos >>> 16, y: pos & 0xFFFF };
}
exports.getMousePosition = getMousePosition;
/**
 * Registers a given HTML element as a frame border, when this element is dragged by the user the Alt1 frame will resize accordingly
 * Use the direction arguements to make a given direction stick to the mouse. eg. Only set left to true to make the element behave as the left border
 * Or set all to true to move the whole window. Not all combinations are permitted
 */
function addResizeElement(el, left, top, right, bot) {
    if (!exports.hasAlt1 || !alt1.userResize) {
        return;
    }
    el.addEventListener("mousedown", function (e) {
        alt1.userResize(left, top, right, bot);
        e.preventDefault();
    });
}
exports.addResizeElement = addResizeElement;
/**
 * Add an event listener
 */
function on(type, listener) {
    if (!exports.hasAlt1) {
        return;
    }
    if (!alt1.events) {
        alt1.events = {};
    }
    if (!alt1.events[type]) {
        alt1.events[type] = [];
    }
    alt1.events[type].push(listener);
}
exports.on = on;
/**
 * Removes an event listener
 */
function removeListener(type, listener) {
    var elist = exports.hasAlt1 && alt1.events && alt1.events[type];
    if (!elist) {
        return;
    }
    var i = elist.indexOf(listener);
    if (i == -1) {
        return;
    }
    elist.splice(i, 1);
}
exports.removeListener = removeListener;
/**
 * Listens for the event to fire once and then stops listening
 * @param event
 * @param cb
 */
function once(type, listener) {
    var fn = (e) => {
        removeListener(type, fn);
        listener(e);
    };
    on(type, fn);
}
exports.once = once;
;
/**
 * Used to read a set of images from a binary stream returned by the Alt1 API
 */
class ImageStreamReader {
    constructor(reader, ...args) {
        this.framebuffer = null;
        this.pos = 0;
        this.reading = false;
        this.closed = false;
        //paused state
        this.pausedindex = -1;
        this.pausedbuffer = null;
        this.streamreader = reader;
        if (args[0] instanceof imagedata_extensions_1.ImageData) {
            this.setFrameBuffer(args[0]);
        }
        else if (typeof args[0] == "number") {
            this.setFrameBuffer(new imagedata_extensions_1.ImageData(args[0], args[1]));
        }
    }
    /**
     *
     */
    setFrameBuffer(buffer) {
        if (this.reading) {
            throw new Error("can't change framebuffer while reading");
        }
        this.framebuffer = buffer;
    }
    /**
     * Closes the underlying stream and ends reading
     */
    close() {
        this.streamreader.cancel();
    }
    /**
     * Reads a single image from the stream
     */
    async nextImage() {
        if (this.reading) {
            throw new Error("already reading from this stream");
        }
        if (!this.framebuffer) {
            throw new Error("framebuffer not set");
        }
        this.reading = true;
        var synctime = -Date.now();
        var starttime = Date.now();
        var r = false;
        while (!r) {
            if (this.pausedindex != -1 && this.pausedbuffer) {
                r = this.readChunk(this.pausedindex, this.framebuffer.data, this.pausedbuffer);
            }
            else {
                synctime += Date.now();
                var res = await this.streamreader.read();
                synctime -= Date.now();
                if (res.done) {
                    throw new Error("Stream closed while reading");
                }
                var data = res.value;
                r = this.readChunk(0, this.framebuffer.data, data);
            }
        }
        synctime += Date.now();
        //console.log("Decoded async image, " + this.framebuffer.width + "x" + this.framebuffer.height + " time: " + (Date.now() - starttime) + "ms (" + synctime + "ms main thread)");
        this.reading = false;
        return this.framebuffer;
    }
    readChunk(i, framedata, buffer) {
        //very hot code, explicit int32 casting with |0 speeds it up by ~ x2
        i = i | 0;
        var framesize = framedata.length | 0;
        var pos = this.pos;
        var datalen = buffer.length | 0;
        //var data32 = new Float64Array(buffer.buffer);
        //var framedata32 = new Float64Array(framedata.buffer);
        //fix possible buffer misalignment
        //align to 16 for extra loop unrolling
        while (i < datalen) {
            //slow loop, fix alignment and other issues
            while (i < datalen && pos < framesize && (pos % 16 != 0 || !((i + 16 | 0) <= datalen && (pos + 16 | 0) <= framesize))) {
                var rel = pos;
                if (pos % 4 == 0) {
                    rel = rel + 2 | 0;
                }
                if (pos % 4 == 2) {
                    rel = rel - 2 | 0;
                }
                framedata[rel | 0] = buffer[i | 0];
                i = i + 1 | 0;
                pos = pos + 1 | 0;
            }
            //fast unrolled loop for large chunks i wish js had some sort of memcpy
            if (pos % 16 == 0) {
                while ((i + 16 | 0) <= datalen && (pos + 16 | 0) <= framesize) {
                    framedata[pos + 0 | 0] = buffer[i + 2 | 0];
                    framedata[pos + 1 | 0] = buffer[i + 1 | 0];
                    framedata[pos + 2 | 0] = buffer[i + 0 | 0];
                    framedata[pos + 3 | 0] = buffer[i + 3 | 0];
                    framedata[pos + 4 | 0] = buffer[i + 6 | 0];
                    framedata[pos + 5 | 0] = buffer[i + 5 | 0];
                    framedata[pos + 6 | 0] = buffer[i + 4 | 0];
                    framedata[pos + 7 | 0] = buffer[i + 7 | 0];
                    framedata[pos + 8 | 0] = buffer[i + 10 | 0];
                    framedata[pos + 9 | 0] = buffer[i + 9 | 0];
                    framedata[pos + 10 | 0] = buffer[i + 8 | 0];
                    framedata[pos + 11 | 0] = buffer[i + 11 | 0];
                    framedata[pos + 12 | 0] = buffer[i + 14 | 0];
                    framedata[pos + 13 | 0] = buffer[i + 13 | 0];
                    framedata[pos + 14 | 0] = buffer[i + 12 | 0];
                    framedata[pos + 15 | 0] = buffer[i + 15 | 0];
                    //could speed it up another x2 but wouldn't be able to swap r/b swap and possible alignment issues
                    //framedata32[pos / 8 + 0 | 0] = data32[i / 8 + 0 | 0];
                    //framedata32[pos / 8 + 1 | 0] = data32[i / 8 + 1 | 0];
                    //framedata32[pos / 4 + 2 | 0] = data32[i / 4 + 2 | 0];
                    //framedata32[pos / 4 + 3 | 0] = data32[i / 4 + 3 | 0];
                    pos = pos + 16 | 0;
                    i = i + 16 | 0;
                }
            }
            if (pos >= framesize) {
                this.pausedbuffer = null;
                this.pausedindex = -1;
                this.pos = 0;
                if (i != buffer.length - 1) {
                    this.pausedbuffer = buffer;
                    this.pausedindex = i;
                }
                return true;
            }
        }
        this.pos = pos;
        this.pausedbuffer = null;
        this.pausedindex = -1;
        return false;
    }
}
exports.ImageStreamReader = ImageStreamReader;
/**
 * Asynchronously captures a section of the game screen
 */
async function captureAsync(...args) {
    requireAlt1();
    var rect = rect_1.default.fromArgs(...args);
    if (alt1.captureAsync) {
        let img = await alt1.captureAsync(rect.x, rect.y, rect.width, rect.height);
        return new imagedata_extensions_1.ImageData(img, rect.width, rect.height);
    }
    if (!hasAlt1Version("1.4.6")) {
        return capture(rect.x, rect.y, rect.width, rect.height);
    }
    var url = "https://alt1api/pixel/getregion/" + encodeURIComponent(JSON.stringify(Object.assign(Object.assign({}, rect), { format: "raw", quality: 1 })));
    var res = await fetch(url);
    var imgreader = new ImageStreamReader(res.body.getReader(), rect.width, rect.height);
    return imgreader.nextImage();
}
exports.captureAsync = captureAsync;
/**
 * Asynchronously captures multple area's. This method captures the images in the same render frame if possible
 * @param areas
 */
async function captureMultiAsync(areas) {
    requireAlt1();
    var r = {};
    if (alt1.captureMultiAsync) {
        let bufs = await alt1.captureMultiAsync(areas);
        for (let a in areas) {
            if (!bufs[a]) {
                r[a] = null;
            }
            r[a] = new imagedata_extensions_1.ImageData(bufs[a], areas[a].width, areas[a].height);
        }
        return r;
    }
    var capts = [];
    var captids = [];
    for (var id in areas) {
        if (areas[id]) {
            capts.push(areas[id]);
            captids.push(id);
        }
        else {
            r[id] = null;
        }
    }
    if (capts.length == 0) {
        return r;
    }
    if (!hasAlt1Version("1.5.1")) {
        var proms = [];
        for (var a = 0; a < capts.length; a++) {
            proms.push(captureAsync(capts[a]));
        }
        var results = await Promise.all(proms);
        for (var a = 0; a < capts.length; a++) {
            r[captids[a]] = results[a];
        }
    }
    else {
        var res = await fetch("https://alt1api/pixel/getregionmulti/" + encodeURIComponent(JSON.stringify({ areas: capts, format: "raw", quality: 1 })));
        var imgreader = new ImageStreamReader(res.body.getReader());
        for (var a = 0; a < capts.length; a++) {
            var capt = capts[a];
            imgreader.setFrameBuffer(new imagedata_extensions_1.ImageData(capt.width, capt.height));
            r[captids[a]] = await imgreader.nextImage();
        }
    }
    return r;
}
exports.captureMultiAsync = captureMultiAsync;
/**
 * Starts capturing a realtime stream of the game. Make sure you keep reading the stream and close it when you're done or Alt1 WILL crash
 * @param framecb Called whenever a new frame is decoded
 * @param errorcb Called whenever an error occurs, the error is rethrown if not defined
 * @param fps Maximum fps of the stream
 */
function captureStream(x, y, width, height, fps, framecb, errorcb) {
    requireAlt1();
    if (!hasAlt1Version("1.4.6")) {
        throw new Alt1Error("This function is not supported in this version of Alt1");
    }
    var url = "https://alt1api/pixel/streamregion/" + encodeURIComponent(JSON.stringify({ x, y, width, height, fps, format: "raw" }));
    var res = fetch(url).then(async (res) => {
        var reader = new ImageStreamReader(res.body.getReader(), width, height);
        try {
            while (!reader.closed && !state.closed) {
                var img = await reader.nextImage();
                if (!state.closed) {
                    framecb(img);
                    state.framenr++;
                }
            }
        }
        catch (e) {
            if (!state.closed) {
                reader.close();
                if (errorcb) {
                    errorcb(e);
                }
                else {
                    throw e;
                }
            }
        }
        if (!reader.closed && state.closed) {
            reader.close();
        }
    });
    var state = {
        x, y, width, height,
        framenr: 0,
        close: () => { state.closed = true; },
        closed: false,
    };
    return state;
}
exports.captureStream = captureStream;


/***/ }),

/***/ "canvas":
/*!*************************!*\
  !*** external "canvas" ***!
  \*************************/
/***/ ((module) => {

if(typeof __WEBPACK_EXTERNAL_MODULE_canvas__ === 'undefined') { var e = new Error("Cannot find module 'canvas'"); e.code = 'MODULE_NOT_FOUND'; throw e; }

module.exports = __WEBPACK_EXTERNAL_MODULE_canvas__;

/***/ }),

/***/ "electron/common":
/*!**********************************!*\
  !*** external "electron/common" ***!
  \**********************************/
/***/ ((module) => {

if(typeof __WEBPACK_EXTERNAL_MODULE_electron_common__ === 'undefined') { var e = new Error("Cannot find module 'electron/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }

module.exports = __WEBPACK_EXTERNAL_MODULE_electron_common__;

/***/ }),

/***/ "sharp":
/*!************************!*\
  !*** external "sharp" ***!
  \************************/
/***/ ((module) => {

if(typeof __WEBPACK_EXTERNAL_MODULE_sharp__ === 'undefined') { var e = new Error("Cannot find module 'sharp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }

module.exports = __WEBPACK_EXTERNAL_MODULE_sharp__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_78005__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_78005__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__nested_webpack_require_78005__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __nested_webpack_exports__ = __nested_webpack_require_78005__("./src/base/index.ts");
/******/ 	
/******/ 	return __nested_webpack_exports__;
/******/ })()
;
});

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resizeImageData: () => (/* binding */ resizeImageData),
/* harmony export */   startApp: () => (/* binding */ startApp)
/* harmony export */ });
/* harmony import */ var alt1__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! alt1 */ "../node_modules/alt1/dist/base/index.js");
/* harmony import */ var alt1__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(alt1__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./index.html");
/* harmony import */ var _appconfig_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appconfig.json */ "./appconfig.json");
/* harmony import */ var _icon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon.png */ "./icon.png");
/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/styles.css */ "./css/styles.css");
/* harmony import */ var _A1Sauce_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./A1Sauce/index */ "./A1Sauce/index.ts");
/* harmony import */ var _data_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data/constants */ "./data/constants.ts");
/* harmony import */ var _A1Sauce_Settings_Storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./A1Sauce/Settings/Storage */ "./A1Sauce/Settings/Storage/index.ts");
/* harmony import */ var _patchnotes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./patchnotes */ "./patchnotes.ts");
/* harmony import */ var _A1Sauce_Patches_patchNotes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./A1Sauce/Patches/patchNotes */ "./A1Sauce/Patches/patchNotes.ts");
/* harmony import */ var _A1Sauce_Utils_hextoRgb__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./A1Sauce/Utils/hextoRgb */ "./A1Sauce/Utils/hextoRgb.ts");
/* harmony import */ var _A1Sauce_Utils_getById__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./A1Sauce/Utils/getById */ "./A1Sauce/Utils/getById.ts");
// alt1 base libs, provides all the commonly used methods for image matching and capture
// also gives your editor info about the window.alt1 api

// tell webpack that this file relies index.html, appconfig.json and icon.png, this makes webpack
// add these files to the output directory
// this works because in /webpack.config.js we told webpack to treat all html, json and imageimports
// as assets











function getByID(id) {
    return document.getElementById(id);
}
const sauce = _A1Sauce_index__WEBPACK_IMPORTED_MODULE_4__.A1Sauce.instance;
sauce.setName(_data_constants__WEBPACK_IMPORTED_MODULE_5__.appName);
sauce.setVersion(_data_constants__WEBPACK_IMPORTED_MODULE_5__.majorVersion, _data_constants__WEBPACK_IMPORTED_MODULE_5__.minorVersion, _data_constants__WEBPACK_IMPORTED_MODULE_5__.patchVersion);
sauce.createSettings();
let recentlyDetected = false;
let helperItems = {
    Output: getByID('output'),
    abilityHistory: getByID('abilityHistory'),
    settings: getByID('Settings'),
};
var abilityHighlight = alt1__WEBPACK_IMPORTED_MODULE_11__.webpackImages({
    highlightBorder: __webpack_require__(/*! ./asset/data/ability-border-3.data.png */ "./asset/data/ability-border-3.data.png"),
});
let history = [];
async function tryFindAbility() {
    let client_screen = alt1__WEBPACK_IMPORTED_MODULE_11__.captureHoldFullRs();
    let usedAbility = {
        abilityPosition: client_screen.findSubimage(abilityHighlight.highlightBorder),
    };
    if (usedAbility.abilityPosition[0] !== undefined && !recentlyDetected) {
        let positions = {
            x: usedAbility.abilityPosition[0].x,
            y: usedAbility.abilityPosition[0].y,
        };
        if (history.some((ability) => ability.x === positions.x && ability.y === positions.y)) {
            console.log('Repeated ability?');
            return;
        }
        recentlyDetected = true;
        captureAsImage(usedAbility.abilityPosition[0].x, usedAbility.abilityPosition[0].y);
        setTimeout(function () {
            recentlyDetected = false;
        }, 300);
    }
}
const overlays = [
    'AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/w==',
    'AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/w==',
    'AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/w==',
    'AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/w==',
    'AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/w==',
    'AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/w==',
    'AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/w==',
    'AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/w==',
    'AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/w==',
];
const transparent = new RegExp('AAA', 'g');
const darkRed = 'AAB';
async function captureAsImage(x, y) {
    if (helperItems.abilityHistory.children.length >= 10) {
        helperItems.abilityHistory.children.item(0).remove();
    }
    setTimeout(async function () {
        let abilityImage = alt1__WEBPACK_IMPORTED_MODULE_11__.captureHold(x + 2, y + 1, 32, 32);
        if (!(0,_A1Sauce_Settings_Storage__WEBPACK_IMPORTED_MODULE_6__.getSetting)('activeOverlay')) {
            let ability = document.createElement('li');
            let img = document.createElement('img');
            img.src =
                'data:image/png;base64,' + abilityImage.toData().toPngBase64();
            ability.appendChild(img);
            helperItems.abilityHistory.appendChild(ability);
            history.push({ x: x, y: y });
        }
        else {
            overlays.push(alt1__WEBPACK_IMPORTED_MODULE_11__.encodeImageString(await resizeImageData(abilityImage.toData(), loadedSettings.scale))
                .replace(transparent, darkRed));
        }
    }, 50);
    setTimeout(function () {
        clearHistory();
    }, 900);
}
async function renderOverlay() {
    const itemScale = 32 * loadedSettings.scale;
    if (overlays.length > 0) {
        if (overlays.length >= 10) {
            overlays.shift();
        }
        for (let i = 0; i < overlays.length; i++) {
            alt1.overLaySetGroup('AbilityHistory');
            alt1.overLayContinueGroup('AbilityHistory');
            alt1.overLayImage(loadedSettings.x_position +
                (itemScale + 2) *
                    i *
                    (loadedSettings.inverseDirection ? -1 : 1), loadedSettings.y_position, overlays[i], 32 * loadedSettings.scale, 2000);
            alt1.overLayFreezeGroup('AbilityHistory');
        }
    }
    alt1.overLaySetGroup('FirstAbility');
    alt1.overLayRect(alt1__WEBPACK_IMPORTED_MODULE_11__.mixColor(loadedSettings.red, loadedSettings.green, loadedSettings.blue[2]), loadedSettings.x_position +
        (itemScale + 2) * 8 * (loadedSettings.inverseDirection ? -1 : 1), loadedSettings.y_position, 32 * loadedSettings.scale, 32 * loadedSettings.scale, 3000, 1);
    alt1.overLayContinueGroup('FirstAbility');
}
async function clearHistory() {
    if (history.length > 0) {
        history.shift();
    }
}
const loadedSettings = {
    scale: 0,
    inverseDirection: false,
    red: 255,
    green: 255,
    blue: 255,
    x_position: 0,
    y_position: 0,
};
function startApp() {
    if (!window.alt1) {
        helperItems.Output.insertAdjacentHTML('beforeend', `<div>You need to run this page in alt1 to capture the screen</div>`);
        return;
    }
    if (!alt1.permissionPixel) {
        helperItems.Output.insertAdjacentHTML('beforeend', `<div><p>Page is not installed as app or capture permission is not enabled</p></div>`);
        return;
    }
    if (!alt1.permissionOverlay) {
        helperItems.Output.insertAdjacentHTML('beforeend', `<div><p>Attempted to use Overlay but app overlay permission is not enabled. Please enable "Show Overlay" permission in Alt1 settinsg (wrench icon in corner).</p></div>`);
        return;
    }
    loadSettings();
    let patchCheck = new _A1Sauce_Patches_patchNotes__WEBPACK_IMPORTED_MODULE_8__.Patches();
    patchCheck.setNotes(_patchnotes__WEBPACK_IMPORTED_MODULE_7__.notes);
    patchCheck.showPatchNotes();
    setInterval(tryFindAbility, 100);
    setInterval(renderOverlay, 300);
}
function loadSettings() {
    loadedSettings.scale = (0,_A1Sauce_Settings_Storage__WEBPACK_IMPORTED_MODULE_6__.getSetting)('scale') == true ? 2 : 1;
    loadedSettings.inverseDirection = (0,_A1Sauce_Settings_Storage__WEBPACK_IMPORTED_MODULE_6__.getSetting)('inverseDirection');
    loadedSettings.red = (0,_A1Sauce_Utils_hextoRgb__WEBPACK_IMPORTED_MODULE_9__.hexToRgb)((0,_A1Sauce_Settings_Storage__WEBPACK_IMPORTED_MODULE_6__.getSetting)('borderColor')).r;
    loadedSettings.green = (0,_A1Sauce_Utils_hextoRgb__WEBPACK_IMPORTED_MODULE_9__.hexToRgb)((0,_A1Sauce_Settings_Storage__WEBPACK_IMPORTED_MODULE_6__.getSetting)('borderColor')).g;
    loadedSettings.blue = (0,_A1Sauce_Utils_hextoRgb__WEBPACK_IMPORTED_MODULE_9__.hexToRgb)((0,_A1Sauce_Settings_Storage__WEBPACK_IMPORTED_MODULE_6__.getSetting)('borderColor')).b;
    loadedSettings.x_position = parseInt((0,_A1Sauce_Settings_Storage__WEBPACK_IMPORTED_MODULE_6__.getSetting)('x_position'), 10);
    loadedSettings.y_position = parseInt((0,_A1Sauce_Settings_Storage__WEBPACK_IMPORTED_MODULE_6__.getSetting)('y_position'), 10);
}
async function resizeImageData(imageData, scaleFactor) {
    // Create a new canvas element
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    // Calculate the dimensions of the new canvas
    const newWidth = Math.round(imageData.width * scaleFactor);
    const newHeight = Math.round(imageData.height * scaleFactor);
    // Set the canvas dimensions
    canvas.width = newWidth;
    canvas.height = newHeight;
    // Create a temporary canvas to draw the original image data
    const tempCanvas = document.createElement('canvas');
    const tempContext = tempCanvas.getContext('2d');
    tempCanvas.width = imageData.width;
    tempCanvas.height = imageData.height;
    // Draw the original image data onto the temporary canvas
    tempContext.putImageData(imageData, 0, 0);
    // Draw the temporary canvas onto the new canvas with the desired scale
    context.drawImage(tempCanvas, 0, 0, imageData.width, imageData.height, 0, 0, newWidth, newHeight);
    // Extract the new image data from the resized canvas
    return context.getImageData(0, 0, newWidth, newHeight);
}
window.onload = function () {
    var _a, _b, _c, _d;
    if (window.alt1) {
        alt1.identifyAppUrl('./appconfig.json');
        let settings = sauce.createSettings();
        settings
            .addHeader(`h2`, `Settings - v ${_data_constants__WEBPACK_IMPORTED_MODULE_5__.majorVersion}.${_data_constants__WEBPACK_IMPORTED_MODULE_5__.minorVersion}.${_data_constants__WEBPACK_IMPORTED_MODULE_5__.patchVersion}`)
            .addCheckboxSetting('inverseDirection', 'Reverse Sort (Newest->Oldest)', (_a = (0,_A1Sauce_Settings_Storage__WEBPACK_IMPORTED_MODULE_6__.getSetting)('inverseDirection')) !== null && _a !== void 0 ? _a : false)
            .addCheckboxSetting('activeOverlay', 'Use Interface instead of Overlay', (_b = (0,_A1Sauce_Settings_Storage__WEBPACK_IMPORTED_MODULE_6__.getSetting)('activeOverlay')) !== null && _b !== void 0 ? _b : false)
            .addRangeSetting('appScale', 'Image Size (App View)', { defaultValue: (_c = (0,_A1Sauce_Settings_Storage__WEBPACK_IMPORTED_MODULE_6__.getSetting)('appScale')) !== null && _c !== void 0 ? _c : '100', min: 32, max: 300, unit: 'px' })
            .addCheckboxSetting('scale', 'x2 Scale (Overlay View)', (_d = (0,_A1Sauce_Settings_Storage__WEBPACK_IMPORTED_MODULE_6__.getSetting)('scale')) !== null && _d !== void 0 ? _d : true)
            .addColorSetting('borderColor', 'Border Color', '#FF0000')
            .addRangeSetting('x_position', 'X Offset - Overlay Position', {
            defaultValue: '100',
            min: -4000,
            max: 4000,
            unit: 'px',
        })
            .addRangeSetting('y_position', 'Y Offset - Overlay Position', {
            defaultValue: '100',
            min: -2000,
            max: 2000,
            unit: 'px',
        })
            .build();
        const x_pos = (0,_A1Sauce_Utils_getById__WEBPACK_IMPORTED_MODULE_10__.getById)('x_position');
        const x_val = ((parseInt(x_pos.value, 10) - parseInt(x_pos.min, 10)) /
            (parseInt(x_pos.max, 10) - parseInt(x_pos.min))) *
            100;
        x_pos.style.background =
            'linear-gradient(to right, #3e5765 0%, #3e5765 ' +
                x_val +
                '%, #0d1c24 ' +
                x_val +
                '%, #0d1c24 100%)';
        const y_pos = (0,_A1Sauce_Utils_getById__WEBPACK_IMPORTED_MODULE_10__.getById)('y_position');
        const y_val = ((parseInt(y_pos.value, 10) - parseInt(y_pos.min, 10)) /
            (parseInt(y_pos.max, 10) - parseInt(y_pos.min))) *
            100;
        y_pos.style.background =
            'linear-gradient(to right, #3e5765 0%, #3e5765 ' +
                y_val +
                '%, #0d1c24 ' +
                y_val +
                '%, #0d1c24 100%)';
        const appScaleEl = (0,_A1Sauce_Utils_getById__WEBPACK_IMPORTED_MODULE_10__.getById)('appScale');
        const appScaleVal = ((parseInt(appScaleEl.value, 10) - parseInt(appScaleEl.min, 10)) /
            (parseInt(appScaleEl.max, 10) - parseInt(appScaleEl.min))) *
            100;
        appScaleEl.style.background =
            'linear-gradient(to right, #3e5765 0%, #3e5765 ' +
                appScaleVal +
                '%, #0d1c24 ' +
                appScaleVal +
                '%, #0d1c24 100%)';
        document.querySelectorAll('[data-setting]').forEach((el) => {
            el.addEventListener('input', () => {
                loadSettings();
            });
        });
        document.querySelectorAll('[data-setting]').forEach((el) => {
            el.addEventListener('change', () => {
                loadSettings();
            });
        });
        document.getElementById('inverseDirection').addEventListener('change', function () {
            helperItems.abilityHistory.classList.toggle('reverse');
        });
        document.getElementById('appScale').addEventListener('change', function () {
            let size = parseInt((0,_A1Sauce_Settings_Storage__WEBPACK_IMPORTED_MODULE_6__.getSetting)('appScale'), 10);
            let sheet = getByID('appScaleStyles');
            sheet.innerHTML = `#abilityHistory li { min-width: ${size}px; max-width: ${size}px;`;
            document.body.appendChild(sheet);
        });
        let size = parseInt((0,_A1Sauce_Settings_Storage__WEBPACK_IMPORTED_MODULE_6__.getSetting)('appScale'), 10);
        let sheet = document.createElement('style');
        sheet.id = 'appScaleStyles';
        sheet.innerHTML = `#abilityHistory li { min-width: ${size}px; max-width: ${size}px;`;
        document.body.appendChild(sheet);
        startApp();
    }
    else {
        let addappurl = `alt1://addapp/${new URL('./appconfig.json', document.location.href).href}`;
        helperItems.Output.insertAdjacentHTML('beforeend', `
			Alt1 not detected, click <a href='${addappurl}'>here</a> to add this app to Alt1
		`);
    }
};

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});