(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vTranslitTeluScheme"] = factory();
	else
		root["vTranslitTeluScheme"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var vTranslitTeluScheme = exports.vTranslitTeluScheme = {
  'about': {
    'schemeCode': 'Telu',
    'schemeName': 'Telugu',
    'type': 'brahmic'
  },
  'data': {
    'consonants': ['\u0C15', '\u0C16', '\u0C17', '\u0C18', '\u0C19', '\u0C1A', '\u0C13', '\u0C1C', '\u0C1D', '\u0C1E', '\u0C1F', '\u0C20', '\u0C21', '\u0C22', '\u0C23', '\u0C24', '\u0C25', '\u0C26', '\u0C27', '\u0C28', '', '\u0C22', '\u0C23', '\u0C2C', '\u0C2D', '\u0C2E', '\u0C2F', '\u0C30', '\u0C31', '\u0C32', '\u0C33', '', '\u0C35', '\u0C36', '\u0C37', '\u0C38', '\u0C39'],
    'deadConsonants': ['\u0C15\u0C4D', '\u0C16\u0C4D', '\u0C17\u0C4D', '\u0C18\u0C4D', '\u0C19\u0C4D', '\u0C1A\u0C4D', '\u0C13\u0C4D', '\u0C1C\u0C4D', '\u0C1D\u0C4D', '\u0C1E\u0C4D', '\u0C1F\u0C4D', '\u0C20\u0C4D', '\u0C21\u0C4D', '\u0C22\u0C4D', '\u0C23\u0C4D', '\u0C24\u0C4D', '\u0C25\u0C4D', '\u0C26\u0C4D', '\u0C27\u0C4D', '\u0C28\u0C4D', '', '\u0C2A\u0C4D', '\u0C23\u0C4D', '\u0C2C\u0C4D', '\u0C2D\u0C4D', '\u0C2E\u0C4D', '\u0C2F\u0C4D', '\u0C30\u0C4D', '\u0C31\u0C4D', '\u0C32\u0C4D', '\u0C33\u0C4D', '', '\u0C35\u0C4D', '\u0C36\u0C4D', '\u0C37\u0C4D', '\u0C38\u0C4D', '\u0C39\u0C4D'],
    'symbols': ['\u0C66', '\u0C67', '\u0C68', '\u0C69', '\u0C6A', '\u0C63', '\u0C6C', '\u0C6D', '\u0C66', '\u0C6F', '।', '॥', '', '\u0C3D', '\u0C02', '\u0C03', '\u0C01'],
    'virama': ['\u0C4D'],
    'vowelMarks': ['', '\u0C3E', '\u0C3F', '\u0C40', '\u0C41', '\u0C42', '\u0C43', '\u0C44', '', '', '\u0C46', '\u0C47', '\u0C48', '\u0C4A', '\u0C43', '\u0C4C'],
    'vowels': ['\u0C05', '\u0C06', '\u0C07', '\u0C00', '\u0C09', '\u0C0A', '\u0C03', '', '\u0C0C', '', '\u0C0E', '\u0C0F', '\u0C10', '\u0C12', '\u0C13', '\u0C14']
  }
};

/***/ })
/******/ ])["vTranslitTeluScheme"];
});