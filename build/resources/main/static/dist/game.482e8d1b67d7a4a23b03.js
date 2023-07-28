/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main/resources/static/src/client/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/** Built-in value references. */\nvar Symbol = root.Symbol;\n\nmodule.exports = Symbol;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_Symbol.js?");

/***/ }),

/***/ "./node_modules/lodash/_arrayMap.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_arrayMap.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * A specialized version of `_.map` for arrays without support for iteratee\n * shorthands.\n *\n * @private\n * @param {Array} [array] The array to iterate over.\n * @param {Function} iteratee The function invoked per iteration.\n * @returns {Array} Returns the new mapped array.\n */\nfunction arrayMap(array, iteratee) {\n  var index = -1,\n      length = array == null ? 0 : array.length,\n      result = Array(length);\n\n  while (++index < length) {\n    result[index] = iteratee(array[index], index, array);\n  }\n  return result;\n}\n\nmodule.exports = arrayMap;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_arrayMap.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\"),\n    getRawTag = __webpack_require__(/*! ./_getRawTag */ \"./node_modules/lodash/_getRawTag.js\"),\n    objectToString = __webpack_require__(/*! ./_objectToString */ \"./node_modules/lodash/_objectToString.js\");\n\n/** `Object#toString` result references. */\nvar nullTag = '[object Null]',\n    undefinedTag = '[object Undefined]';\n\n/** Built-in value references. */\nvar symToStringTag = Symbol ? Symbol.toStringTag : undefined;\n\n/**\n * The base implementation of `getTag` without fallbacks for buggy environments.\n *\n * @private\n * @param {*} value The value to query.\n * @returns {string} Returns the `toStringTag`.\n */\nfunction baseGetTag(value) {\n  if (value == null) {\n    return value === undefined ? undefinedTag : nullTag;\n  }\n  return (symToStringTag && symToStringTag in Object(value))\n    ? getRawTag(value)\n    : objectToString(value);\n}\n\nmodule.exports = baseGetTag;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_baseGetTag.js?");

/***/ }),

/***/ "./node_modules/lodash/_basePropertyOf.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_basePropertyOf.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * The base implementation of `_.propertyOf` without support for deep paths.\n *\n * @private\n * @param {Object} object The object to query.\n * @returns {Function} Returns the new accessor function.\n */\nfunction basePropertyOf(object) {\n  return function(key) {\n    return object == null ? undefined : object[key];\n  };\n}\n\nmodule.exports = basePropertyOf;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_basePropertyOf.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseToString.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseToString.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\"),\n    arrayMap = __webpack_require__(/*! ./_arrayMap */ \"./node_modules/lodash/_arrayMap.js\"),\n    isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\"),\n    isSymbol = __webpack_require__(/*! ./isSymbol */ \"./node_modules/lodash/isSymbol.js\");\n\n/** Used as references for various `Number` constants. */\nvar INFINITY = 1 / 0;\n\n/** Used to convert symbols to primitives and strings. */\nvar symbolProto = Symbol ? Symbol.prototype : undefined,\n    symbolToString = symbolProto ? symbolProto.toString : undefined;\n\n/**\n * The base implementation of `_.toString` which doesn't convert nullish\n * values to empty strings.\n *\n * @private\n * @param {*} value The value to process.\n * @returns {string} Returns the string.\n */\nfunction baseToString(value) {\n  // Exit early for strings to avoid a performance hit in some environments.\n  if (typeof value == 'string') {\n    return value;\n  }\n  if (isArray(value)) {\n    // Recursively convert values (susceptible to call stack limits).\n    return arrayMap(value, baseToString) + '';\n  }\n  if (isSymbol(value)) {\n    return symbolToString ? symbolToString.call(value) : '';\n  }\n  var result = (value + '');\n  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;\n}\n\nmodule.exports = baseToString;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_baseToString.js?");

/***/ }),

/***/ "./node_modules/lodash/_escapeHtmlChar.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_escapeHtmlChar.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var basePropertyOf = __webpack_require__(/*! ./_basePropertyOf */ \"./node_modules/lodash/_basePropertyOf.js\");\n\n/** Used to map characters to HTML entities. */\nvar htmlEscapes = {\n  '&': '&amp;',\n  '<': '&lt;',\n  '>': '&gt;',\n  '\"': '&quot;',\n  \"'\": '&#39;'\n};\n\n/**\n * Used by `_.escape` to convert characters to HTML entities.\n *\n * @private\n * @param {string} chr The matched character to escape.\n * @returns {string} Returns the escaped character.\n */\nvar escapeHtmlChar = basePropertyOf(htmlEscapes);\n\nmodule.exports = escapeHtmlChar;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_escapeHtmlChar.js?");

/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */\nvar freeGlobal = typeof global == 'object' && global && global.Object === Object && global;\n\nmodule.exports = freeGlobal;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./node_modules/lodash/_freeGlobal.js?");

/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Used to resolve the\n * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar nativeObjectToString = objectProto.toString;\n\n/** Built-in value references. */\nvar symToStringTag = Symbol ? Symbol.toStringTag : undefined;\n\n/**\n * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.\n *\n * @private\n * @param {*} value The value to query.\n * @returns {string} Returns the raw `toStringTag`.\n */\nfunction getRawTag(value) {\n  var isOwn = hasOwnProperty.call(value, symToStringTag),\n      tag = value[symToStringTag];\n\n  try {\n    value[symToStringTag] = undefined;\n    var unmasked = true;\n  } catch (e) {}\n\n  var result = nativeObjectToString.call(value);\n  if (unmasked) {\n    if (isOwn) {\n      value[symToStringTag] = tag;\n    } else {\n      delete value[symToStringTag];\n    }\n  }\n  return result;\n}\n\nmodule.exports = getRawTag;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_getRawTag.js?");

/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/**\n * Used to resolve the\n * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar nativeObjectToString = objectProto.toString;\n\n/**\n * Converts `value` to a string using `Object.prototype.toString`.\n *\n * @private\n * @param {*} value The value to convert.\n * @returns {string} Returns the converted string.\n */\nfunction objectToString(value) {\n  return nativeObjectToString.call(value);\n}\n\nmodule.exports = objectToString;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_objectToString.js?");

/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ \"./node_modules/lodash/_freeGlobal.js\");\n\n/** Detect free variable `self`. */\nvar freeSelf = typeof self == 'object' && self && self.Object === Object && self;\n\n/** Used as a reference to the global object. */\nvar root = freeGlobal || freeSelf || Function('return this')();\n\nmodule.exports = root;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_root.js?");

/***/ }),

/***/ "./node_modules/lodash/escape.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/escape.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var escapeHtmlChar = __webpack_require__(/*! ./_escapeHtmlChar */ \"./node_modules/lodash/_escapeHtmlChar.js\"),\n    toString = __webpack_require__(/*! ./toString */ \"./node_modules/lodash/toString.js\");\n\n/** Used to match HTML entities and HTML characters. */\nvar reUnescapedHtml = /[&<>\"']/g,\n    reHasUnescapedHtml = RegExp(reUnescapedHtml.source);\n\n/**\n * Converts the characters \"&\", \"<\", \">\", '\"', and \"'\" in `string` to their\n * corresponding HTML entities.\n *\n * **Note:** No other characters are escaped. To escape additional\n * characters use a third-party library like [_he_](https://mths.be/he).\n *\n * Though the \">\" character is escaped for symmetry, characters like\n * \">\" and \"/\" don't need escaping in HTML and have no special meaning\n * unless they're part of a tag or unquoted attribute value. See\n * [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)\n * (under \"semi-related fun fact\") for more details.\n *\n * When working with HTML you should always\n * [quote attribute values](http://wonko.com/post/html-escaping) to reduce\n * XSS vectors.\n *\n * @static\n * @since 0.1.0\n * @memberOf _\n * @category String\n * @param {string} [string=''] The string to escape.\n * @returns {string} Returns the escaped string.\n * @example\n *\n * _.escape('fred, barney, & pebbles');\n * // => 'fred, barney, &amp; pebbles'\n */\nfunction escape(string) {\n  string = toString(string);\n  return (string && reHasUnescapedHtml.test(string))\n    ? string.replace(reUnescapedHtml, escapeHtmlChar)\n    : string;\n}\n\nmodule.exports = escape;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/escape.js?");

/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Checks if `value` is classified as an `Array` object.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an array, else `false`.\n * @example\n *\n * _.isArray([1, 2, 3]);\n * // => true\n *\n * _.isArray(document.body.children);\n * // => false\n *\n * _.isArray('abc');\n * // => false\n *\n * _.isArray(_.noop);\n * // => false\n */\nvar isArray = Array.isArray;\n\nmodule.exports = isArray;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/isArray.js?");

/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Checks if `value` is object-like. A value is object-like if it's not `null`\n * and has a `typeof` result of \"object\".\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is object-like, else `false`.\n * @example\n *\n * _.isObjectLike({});\n * // => true\n *\n * _.isObjectLike([1, 2, 3]);\n * // => true\n *\n * _.isObjectLike(_.noop);\n * // => false\n *\n * _.isObjectLike(null);\n * // => false\n */\nfunction isObjectLike(value) {\n  return value != null && typeof value == 'object';\n}\n\nmodule.exports = isObjectLike;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/isObjectLike.js?");

/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ \"./node_modules/lodash/_baseGetTag.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"./node_modules/lodash/isObjectLike.js\");\n\n/** `Object#toString` result references. */\nvar symbolTag = '[object Symbol]';\n\n/**\n * Checks if `value` is classified as a `Symbol` primitive or object.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.\n * @example\n *\n * _.isSymbol(Symbol.iterator);\n * // => true\n *\n * _.isSymbol('abc');\n * // => false\n */\nfunction isSymbol(value) {\n  return typeof value == 'symbol' ||\n    (isObjectLike(value) && baseGetTag(value) == symbolTag);\n}\n\nmodule.exports = isSymbol;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/isSymbol.js?");

/***/ }),

/***/ "./node_modules/lodash/toString.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toString.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseToString = __webpack_require__(/*! ./_baseToString */ \"./node_modules/lodash/_baseToString.js\");\n\n/**\n * Converts `value` to a string. An empty string is returned for `null`\n * and `undefined` values. The sign of `-0` is preserved.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to convert.\n * @returns {string} Returns the converted string.\n * @example\n *\n * _.toString(null);\n * // => ''\n *\n * _.toString(-0);\n * // => '-0'\n *\n * _.toString([1, 2, 3]);\n * // => '1,2,3'\n */\nfunction toString(value) {\n  return value == null ? '' : baseToString(value);\n}\n\nmodule.exports = toString;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/toString.js?");

/***/ }),

/***/ "./node_modules/throttle-debounce/index.umd.js":
/*!*****************************************************!*\
  !*** ./node_modules/throttle-debounce/index.umd.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("(function (global, factory) {\n\t true ? factory(exports) :\n\tundefined;\n}(this, (function (exports) { 'use strict';\n\n\t/* eslint-disable no-undefined,no-param-reassign,no-shadow */\n\n\t/**\n\t * Throttle execution of a function. Especially useful for rate limiting\n\t * execution of handlers on events like resize and scroll.\n\t *\n\t * @param  {number}    delay -          A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.\n\t * @param  {boolean}   [noTrailing] -   Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds while the\n\t *                                    throttled-function is being called. If noTrailing is false or unspecified, callback will be executed one final time\n\t *                                    after the last throttled-function call. (After the throttled-function has not been called for `delay` milliseconds,\n\t *                                    the internal counter is reset).\n\t * @param  {Function}  callback -       A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,\n\t *                                    to `callback` when the throttled-function is executed.\n\t * @param  {boolean}   [debounceMode] - If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is false (at end),\n\t *                                    schedule `callback` to execute after `delay` ms.\n\t *\n\t * @returns {Function}  A new, throttled, function.\n\t */\n\tfunction throttle (delay, noTrailing, callback, debounceMode) {\n\t  /*\n\t   * After wrapper has stopped being called, this timeout ensures that\n\t   * `callback` is executed at the proper times in `throttle` and `end`\n\t   * debounce modes.\n\t   */\n\t  var timeoutID;\n\t  var cancelled = false; // Keep track of the last time `callback` was executed.\n\n\t  var lastExec = 0; // Function to clear existing timeout\n\n\t  function clearExistingTimeout() {\n\t    if (timeoutID) {\n\t      clearTimeout(timeoutID);\n\t    }\n\t  } // Function to cancel next exec\n\n\n\t  function cancel() {\n\t    clearExistingTimeout();\n\t    cancelled = true;\n\t  } // `noTrailing` defaults to falsy.\n\n\n\t  if (typeof noTrailing !== 'boolean') {\n\t    debounceMode = callback;\n\t    callback = noTrailing;\n\t    noTrailing = undefined;\n\t  }\n\t  /*\n\t   * The `wrapper` function encapsulates all of the throttling / debouncing\n\t   * functionality and when executed will limit the rate at which `callback`\n\t   * is executed.\n\t   */\n\n\n\t  function wrapper() {\n\t    for (var _len = arguments.length, arguments_ = new Array(_len), _key = 0; _key < _len; _key++) {\n\t      arguments_[_key] = arguments[_key];\n\t    }\n\n\t    var self = this;\n\t    var elapsed = Date.now() - lastExec;\n\n\t    if (cancelled) {\n\t      return;\n\t    } // Execute `callback` and update the `lastExec` timestamp.\n\n\n\t    function exec() {\n\t      lastExec = Date.now();\n\t      callback.apply(self, arguments_);\n\t    }\n\t    /*\n\t     * If `debounceMode` is true (at begin) this is used to clear the flag\n\t     * to allow future `callback` executions.\n\t     */\n\n\n\t    function clear() {\n\t      timeoutID = undefined;\n\t    }\n\n\t    if (debounceMode && !timeoutID) {\n\t      /*\n\t       * Since `wrapper` is being called for the first time and\n\t       * `debounceMode` is true (at begin), execute `callback`.\n\t       */\n\t      exec();\n\t    }\n\n\t    clearExistingTimeout();\n\n\t    if (debounceMode === undefined && elapsed > delay) {\n\t      /*\n\t       * In throttle mode, if `delay` time has been exceeded, execute\n\t       * `callback`.\n\t       */\n\t      exec();\n\t    } else if (noTrailing !== true) {\n\t      /*\n\t       * In trailing throttle mode, since `delay` time has not been\n\t       * exceeded, schedule `callback` to execute `delay` ms after most\n\t       * recent execution.\n\t       *\n\t       * If `debounceMode` is true (at begin), schedule `clear` to execute\n\t       * after `delay` ms.\n\t       *\n\t       * If `debounceMode` is false (at end), schedule `callback` to\n\t       * execute after `delay` ms.\n\t       */\n\t      timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);\n\t    }\n\t  }\n\n\t  wrapper.cancel = cancel; // Return the wrapper function.\n\n\t  return wrapper;\n\t}\n\n\t/* eslint-disable no-undefined */\n\t/**\n\t * Debounce execution of a function. Debouncing, unlike throttling,\n\t * guarantees that a function is only executed a single time, either at the\n\t * very beginning of a series of calls, or at the very end.\n\t *\n\t * @param  {number}   delay -         A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.\n\t * @param  {boolean}  [atBegin] -     Optional, defaults to false. If atBegin is false or unspecified, callback will only be executed `delay` milliseconds\n\t *                                  after the last debounced-function call. If atBegin is true, callback will be executed only at the first debounced-function call.\n\t *                                  (After the throttled-function has not been called for `delay` milliseconds, the internal counter is reset).\n\t * @param  {Function} callback -      A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,\n\t *                                  to `callback` when the debounced-function is executed.\n\t *\n\t * @returns {Function} A new, debounced function.\n\t */\n\n\tfunction debounce (delay, atBegin, callback) {\n\t  return callback === undefined ? throttle(delay, atBegin, false) : throttle(delay, callback, atBegin !== false);\n\t}\n\n\texports.debounce = debounce;\n\texports.throttle = throttle;\n\n\tObject.defineProperty(exports, '__esModule', { value: true });\n\n})));\n//# sourceMappingURL=index.umd.js.map\n\n\n//# sourceURL=webpack:///./node_modules/throttle-debounce/index.umd.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./src/main/resources/static/src/client/assets.js":
/*!********************************************************!*\
  !*** ./src/main/resources/static/src/client/assets.js ***!
  \********************************************************/
/*! exports provided: downloadAssets, getAsset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"downloadAssets\", function() { return downloadAssets; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAsset\", function() { return getAsset; });\n// 정의된 asset 이름들의 목록\nvar ASSET_NAMES = ['ship.svg', 'bullet.svg', 'icon64.png', 'plane.png', 'octagon.png', 'circle.png', 'target.png', 'meteor.png', 'meteorv.png', 'shield1.png', 'shield2.png', 'shield3.png', 'icon_sound_off.png', 'icon_sound_on.png', 'dirty-bomb.png', 'bomb.svg', 'missile.svg'];\n\n// assets을 저장할 객체\nvar assets = {};\n\n// 모든 asset을 다운로드하는 프로미스. Promise.all은 주어진 모든 프로미스가 이행되면 이행되는 \n// 새로운 프로미스를 반환합니다. 이 경우, 모든 asset이 다운로드되면 이 프로미스가 이행됩니다.\nvar downloadPromise = Promise.all(ASSET_NAMES.map(downloadAsset));\n\n// asset을 다운로드하는 함수. 이 함수는 주어진 자산 이름에 대한 이미지를 생성하고, \n// 이미지가 로드되면 assets 객체에 이미지를 저장하고 프로미스를 이행하는 새로운 프로미스를 반환합니다.\nfunction downloadAsset(assetName) {\n  return new Promise(function (resolve) {\n    var asset = new Image();\n    asset.onload = function () {\n      console.log(\"Downloaded \".concat(assetName));\n      assets[assetName] = asset;\n      resolve();\n    };\n    asset.src = \"/assets/\".concat(assetName);\n  });\n}\n\n// 모든 자산을 다운로드하는 프로미스를 반환하는 함수\nvar downloadAssets = function downloadAssets() {\n  return downloadPromise;\n};\n\n// 주어진 자산 이름에 대한 자산을 반환하는 함수\nvar getAsset = function getAsset(assetName) {\n  return assets[assetName];\n};\n\n//# sourceURL=webpack:///./src/main/resources/static/src/client/assets.js?");

/***/ }),

/***/ "./src/main/resources/static/src/client/css/bootstrap-reboot.css":
/*!***********************************************************************!*\
  !*** ./src/main/resources/static/src/client/css/bootstrap-reboot.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/main/resources/static/src/client/css/bootstrap-reboot.css?");

/***/ }),

/***/ "./src/main/resources/static/src/client/css/main.css":
/*!***********************************************************!*\
  !*** ./src/main/resources/static/src/client/css/main.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/main/resources/static/src/client/css/main.css?");

/***/ }),

/***/ "./src/main/resources/static/src/client/htmlComponent/checkbox.js":
/*!************************************************************************!*\
  !*** ./src/main/resources/static/src/client/htmlComponent/checkbox.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../input */ \"./src/main/resources/static/src/client/input.js\");\n\nvar checkbox = document.getElementById('checkbox');\n\n// - 플레이어 긍정, 부정 \n// true -> 긍정 -> 방어\n// false -> 부정 -> 공격\n\n// - 운석 유사도\n// true -> 맞춘거다\n// false -> 못맞춘거다\n\nfunction renderCheckbox(targetID, contexts, result) {\n  // 긍정 입력\n  var targetType = targetID >> 24 & 0x7F;\n\n  // 락온이 안된 상태\n  if (targetID === -1) {\n    if (result === true) {\n      checkbox.innerText = contexts + \" => 긍정! \\n 방어막 생성!\";\n      checkbox.style.backgroundColor = \"green\";\n      console.log(\"hi\");\n\n      // 부정 입력\n    } else if (result === false) {\n      checkbox.innerText = contexts + \" => 부정! \\n 락온이 된 상태에서만 미사일 발사가 가능합니다!\";\n      checkbox.style.backgroundColor = \"gray\";\n      console.log(\"hi\");\n    }\n\n    // 플레이어 일경우\n  } else {\n    if (targetType === 1) {\n      if (result === true) {\n        checkbox.innerText = contexts + \" => 긍정! \\n 방어막 생성!\";\n        checkbox.style.backgroundColor = \"green\";\n        console.log(\"hi\");\n\n        // 부정 입력\n      } else if (result === false) {\n        checkbox.innerText = contexts + \" => 부정! \\n 미사일 공격!\";\n        checkbox.style.backgroundColor = \"red\";\n        console.log(\"hi\");\n      }\n\n      // 운석 일경우\n    } else if (targetType === 2) {\n      if (result === true) {\n        checkbox.innerText = contexts + \" => 유사도 성공! \\n 미사일 발사!\";\n        checkbox.style.backgroundColor = \"red\";\n        console.log(\"hi\");\n\n        // 부정 입력\n      } else if (result === false) {\n        checkbox.innerText = contexts + \" => 유사도 실패! \\n 다른 단어를 입력해 주세요!\";\n        checkbox.style.backgroundColor = \"gray\";\n        console.log(\"hi\");\n      }\n    }\n  }\n\n  // Clear the message after 3 seconds\n  setTimeout(function () {\n    checkbox.innerText = \"\";\n    checkbox.style.backgroundColor = \"\";\n  }, 5000);\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderCheckbox);\n\n/* ----------------------------------------------------------- */\n\n{/* <div id=\"checkbox\"></div>\n #checkbox {\n     position: fixed;\n    bottom: 20%;\n    left: 0;\n    right: 0;\n    width: 300px;\n    margin: auto;\n    background-color: gray;\n    padding: 10px;\n    border-radius: 5px;\n    color: white;\n  \n } */}\n\n//# sourceURL=webpack:///./src/main/resources/static/src/client/htmlComponent/checkbox.js?");

/***/ }),

/***/ "./src/main/resources/static/src/client/htmlComponent/leaderboard.js":
/*!***************************************************************************!*\
  !*** ./src/main/resources/static/src/client/htmlComponent/leaderboard.js ***!
  \***************************************************************************/
/*! exports provided: updateLeaderboard, setLeaderboardHidden */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateLeaderboard\", function() { return updateLeaderboard; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setLeaderboardHidden\", function() { return setLeaderboardHidden; });\n/* harmony import */ var lodash_escape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/escape */ \"./node_modules/lodash/escape.js\");\n/* harmony import */ var lodash_escape__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_escape__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var throttle_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! throttle-debounce */ \"./node_modules/throttle-debounce/index.umd.js\");\n/* harmony import */ var throttle_debounce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(throttle_debounce__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _networking__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../networking */ \"./src/main/resources/static/src/client/networking.js\");\n\n\n\nvar leaderboard = document.getElementById('leaderboard');\nvar rows = document.querySelectorAll('#leaderboard table tr');\nvar updateLeaderboard = Object(throttle_debounce__WEBPACK_IMPORTED_MODULE_1__[\"throttle\"])(1500, function () {\n  var roomId = 1;\n  Object(_networking__WEBPACK_IMPORTED_MODULE_2__[\"requestLeaderBoard\"])(roomId).then(function (data) {\n    var minLenth = Math.min(data.length, 5);\n    var playerRank;\n    for (var i = 0; i < data.length; i++) {\n      if (_networking__WEBPACK_IMPORTED_MODULE_2__[\"playerName\"] === data[i].username) {\n        playerRank = i;\n      }\n    }\n    if (playerRank < 5) {\n      for (var _i = 0; _i < minLenth; _i++) {\n        rows[_i + 1].innerHTML = \"<td>\".concat(_i + 1, \" \").concat(lodash_escape__WEBPACK_IMPORTED_MODULE_0___default()(data[_i].username.slice(0, 15)) || 'Anonymous', \"</td><td>\").concat(data[_i].score, \"</td>\");\n      }\n    } else {\n      for (var _i2 = 0; _i2 < 3; _i2++) {\n        rows[_i2 + 1].innerHTML = \"<td>\".concat(_i2 + 1, \" \").concat(lodash_escape__WEBPACK_IMPORTED_MODULE_0___default()(data[_i2].username.slice(0, 15)) || 'Anonymous', \"</td><td>\").concat(data[_i2].score, \"</td>\");\n      }\n      rows[4].innerHTML = '<td>...</td><td>...</td>';\n      rows[5].innerHTML = \"<td>\".concat(playerRank + 1, \" \").concat(lodash_escape__WEBPACK_IMPORTED_MODULE_0___default()(data[playerRank].username.slice(0, 15)) || 'Anonymous', \"</td><td>\").concat(data[playerRank].score, \"</td>\");\n    }\n    for (var _i3 = data.length; _i3 < 5; _i3++) {\n      rows[_i3 + 1].innerHTML = '<td>-</td><td>-</td>';\n    }\n  });\n});\nfunction setLeaderboardHidden(hidden) {\n  if (hidden) {\n    leaderboard.classList.add('hidden');\n  } else {\n    leaderboard.classList.remove('hidden');\n  }\n}\n\n//# sourceURL=webpack:///./src/main/resources/static/src/client/htmlComponent/leaderboard.js?");

/***/ }),

/***/ "./src/main/resources/static/src/client/index.js":
/*!*******************************************************!*\
  !*** ./src/main/resources/static/src/client/index.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _networking__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./networking */ \"./src/main/resources/static/src/client/networking.js\");\n/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input */ \"./src/main/resources/static/src/client/input.js\");\n/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets */ \"./src/main/resources/static/src/client/assets.js\");\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state */ \"./src/main/resources/static/src/client/state.js\");\n/* harmony import */ var _htmlComponent_leaderboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./htmlComponent/leaderboard */ \"./src/main/resources/static/src/client/htmlComponent/leaderboard.js\");\n/* harmony import */ var _css_bootstrap_reboot_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./css/bootstrap-reboot.css */ \"./src/main/resources/static/src/client/css/bootstrap-reboot.css\");\n/* harmony import */ var _css_bootstrap_reboot_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_bootstrap_reboot_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./css/main.css */ \"./src/main/resources/static/src/client/css/main.css\");\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _pixi_app_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pixi/app.js */ \"./src/main/resources/static/src/client/pixi/app.js\");\n// Learn more about this file at:\n// https://victorzhou.com/blog/build-an-io-game-part-1/#3-client-entrypoints\n\n\n\n\n\n// I'm using a tiny subset of Bootstrap here for convenience - there's some wasted CSS,\n// but not much. In general, you should be careful using Bootstrap because it makes it\n// easy to unnecessarily bloat your site.\n\n\n\nvar gamecanvers = document.getElementById('game-canvas');\nvar playMenu = document.getElementById('play-menu');\nvar playButton = document.getElementById('play-button');\nvar usernameInput = document.getElementById('username-input');\nvar gameoverMenu = document.getElementById('game-over');\nvar replayButton = document.getElementById('replay-button');\nvar usernamereInput = document.getElementById('username-reinput');\nvar flag = true;\nPromise.all([Object(_networking__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(onGameOver), Object(_assets__WEBPACK_IMPORTED_MODULE_2__[\"downloadAssets\"])(), Object(_pixi_app_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])()]).then(function () {\n  window.addEventListener('keydown', handleEnterKey);\n  playMenu.classList.remove('hidden');\n  usernameInput.focus();\n  playButton.onclick = function () {\n    gamecanvers.classList.remove('hidden');\n    window.removeEventListener('keydown', handleEnterKey);\n    // Play!\n    Object(_networking__WEBPACK_IMPORTED_MODULE_0__[\"play\"])(usernameInput.value);\n    playMenu.classList.add('hidden');\n    Object(_state__WEBPACK_IMPORTED_MODULE_3__[\"initState\"])();\n    Object(_input__WEBPACK_IMPORTED_MODULE_1__[\"startCapturingInput\"])();\n    Object(_htmlComponent_leaderboard__WEBPACK_IMPORTED_MODULE_4__[\"setLeaderboardHidden\"])(false);\n  };\n})[\"catch\"](console.error);\nfunction onGameOver(obj) {\n  gamecanvers.classList.add('hidden');\n  window.addEventListener('keydown', handleEnterKey);\n  Object(_input__WEBPACK_IMPORTED_MODULE_1__[\"stopCapturingInput\"])();\n  Object(_htmlComponent_leaderboard__WEBPACK_IMPORTED_MODULE_4__[\"setLeaderboardHidden\"])(true);\n  gameoverMenu.classList.remove('hidden');\n  if (flag) {\n    // 전판과 똑같은 이름으로 복사\n    usernamereInput.value = usernameInput.value;\n    flag = false;\n  }\n  usernamereInput.focus();\n  replayButton.onclick = function () {\n    gamecanvers.classList.remove('hidden');\n    window.removeEventListener('keydown', handleEnterKey);\n    Object(_networking__WEBPACK_IMPORTED_MODULE_0__[\"play\"])(usernamereInput.value);\n    gameoverMenu.classList.add('hidden');\n    Object(_state__WEBPACK_IMPORTED_MODULE_3__[\"initState\"])();\n    Object(_input__WEBPACK_IMPORTED_MODULE_1__[\"startCapturingInput\"])();\n    Object(_htmlComponent_leaderboard__WEBPACK_IMPORTED_MODULE_4__[\"setLeaderboardHidden\"])(false);\n  };\n}\n\n// 엔터 키 이벤트를 감지하는 함수\nfunction handleEnterKey(event) {\n  // event.keyCode는 Enter 키의 키코드가 13입니다.\n  if (event.keyCode === 13) {\n    // 엔터 키를 누른 경우, playButton을 클릭한 것과 같은 동작을 수행합니다.\n    if (flag) {\n      playButton.click();\n    } else {\n      replayButton.click();\n    }\n  }\n}\n\n//# sourceURL=webpack:///./src/main/resources/static/src/client/index.js?");

/***/ }),

/***/ "./src/main/resources/static/src/client/input.js":
/*!*******************************************************!*\
  !*** ./src/main/resources/static/src/client/input.js ***!
  \*******************************************************/
/*! exports provided: startCapturingInput, stopCapturingInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"startCapturingInput\", function() { return startCapturingInput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"stopCapturingInput\", function() { return stopCapturingInput; });\nfunction onkeyDown() {\n  return;\n}\nfunction onkeyUp() {\n  return;\n}\n\n/* ------------------------------------------------------------ */\n\nfunction startCapturingInput() {\n  window.addEventListener('keydown', onkeyDown);\n  window.addEventListener('keyup', onkeyUp);\n}\nfunction stopCapturingInput() {\n  window.removeEventListener('keydown', onkeyDown);\n  window.removeEventListener('keyup', onkeyUp);\n}\n\n/* ------------------------------------------------------------ */\n\n//# sourceURL=webpack:///./src/main/resources/static/src/client/input.js?");

/***/ }),

/***/ "./src/main/resources/static/src/client/networking.js":
/*!************************************************************!*\
  !*** ./src/main/resources/static/src/client/networking.js ***!
  \************************************************************/
/*! exports provided: playerId, playerName, connect, play, updateInputKeyBoardDown, updateInputKeyBoardUp, analysisResult, performSentimentAnalysisPlayer, performSentimentAnalysisMeteor, handleChatAttack, requestLeaderBoard, requestTodayRanking */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"playerId\", function() { return playerId; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"playerName\", function() { return playerName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"connect\", function() { return connect; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"play\", function() { return play; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateInputKeyBoardDown\", function() { return updateInputKeyBoardDown; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateInputKeyBoardUp\", function() { return updateInputKeyBoardUp; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"analysisResult\", function() { return analysisResult; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"performSentimentAnalysisPlayer\", function() { return performSentimentAnalysisPlayer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"performSentimentAnalysisMeteor\", function() { return performSentimentAnalysisMeteor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleChatAttack\", function() { return handleChatAttack; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"requestLeaderBoard\", function() { return requestLeaderBoard; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"requestTodayRanking\", function() { return requestTodayRanking; });\n/* harmony import */ var throttle_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! throttle-debounce */ \"./node_modules/throttle-debounce/index.umd.js\");\n/* harmony import */ var throttle_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(throttle_debounce__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ \"./src/main/resources/static/src/client/state.js\");\n/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/constants */ \"./src/main/resources/static/src/shared/constants.js\");\n/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shared_constants__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _htmlComponent_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./htmlComponent/checkbox */ \"./src/main/resources/static/src/client/htmlComponent/checkbox.js\");\n// Learn more about this file at:\n// https://victorzhou.com/blog/build-an-io-game-part-1/#4-client-networking\n// import io from 'socket.io-client';\n\n\n\n\n\n// import redis from 'redis';\n\n// websocket connection\nvar roomId = 1;\nvar devaddr = 'localhost';\nvar prodaddr = '3.35.214.100';\nvar addr = \"localhost\";\n// const websocket = new WebSocket(`ws://13.124.67.137:8080/room/${roomId}`);\nvar websocket = new WebSocket(\"ws://\".concat(addr, \":8080/room/\").concat(roomId));\nvar wsconnectedPromise = new Promise(function (resolve) {\n  // to websocket, 이벤트 핸들러 변경\n  // io 와는 다르게 WebSocket 을 사용할 때는 이벤트 핸들러를 직접 등록해야 한다.\n  websocket.onopen = function () {\n    console.log('Connected to web socket game server!');\n    resolve();\n  };\n});\nvar playerId;\nvar playerName;\n\n// connect 이후 콜백 등록\nvar connect = function connect(onGameOver) {\n  return wsconnectedPromise.then(function () {\n    // Register callbacks\n    // socket.on(Constants.MSG_TYPES.GAME_UPDATE, processGameUpdate);\n    // 이벤트 핸들러 등록 (open, close, error 제외한 일반적인 메시지에 대한 이벤트 핸들러)\n    // \n    websocket.onmessage = function (event) {\n      var message = JSON.parse(event.data);\n      if (message.type === 'sentergame') {\n        playerId = message.player.objectId;\n        playerName = message.player.name;\n        console.log(\"enter game!! \".concat(playerId));\n      } else if (message.type === 'sspawn') {\n        console.log('spawn!!');\n      } else if (message.type === 'supdate') {\n        // update (움직임 패킷)\n        // 플레이어 update\n        // me 와 others 구분\n        var meItem = message.update.others.find(function (item) {\n          return item['id'] === playerId;\n        });\n        var idx = message.update.others.indexOf(meItem);\n        if (idx > -1) message.update.others.splice(idx, 1);\n        var update = {\n          t: message.update.t,\n          me: meItem,\n          others: message.update.others,\n          bullets: message.update.bullets,\n          meteors: message.update.meteors,\n          leaderboard: message.update.leaderboard\n        };\n        // console.log(update);\n        Object(_state__WEBPACK_IMPORTED_MODULE_1__[\"processGameUpdate\"])(update);\n      } else if (message.type === 'smove') {// move update (움직임 패킷)\n        // processGameUpdate(message.update);\n        // 일단은 무시 (나중에 bullet, meteor 처리 시에 사용될 무브)\n      } else if (message.type === 'schat') {\n        // console.log('schat');\n      } else if (message.type === 'sskill') {\n        // console.log('sskill');\n      } else if (message.type === 'sdie') {\n        console.log('sdie');\n        if (message.objectId === playerId) onGameOver(message.attackerId);\n      }\n    };\n    websocket.onclose = function () {\n      console.log('Disconnected from server.');\n      document.getElementById('disconnect-modal').classList.remove('hidden');\n      document.getElementById('reconnect-button').onclick = function () {\n        window.location.reload();\n      };\n    };\n  });\n};\n\n// send data << 어차피 이거 아님\nvar play = function play(name) {\n  var message = {\n    type: 'centergame',\n    protocol: 'C_EnterGame',\n    username: name\n  };\n  websocket.send(JSON.stringify(message));\n};\nvar updateInputKeyBoardDown = Object(throttle_debounce__WEBPACK_IMPORTED_MODULE_0__[\"throttle\"])(20, function (key) {\n  var dir;\n  if (key === 38) {\n    dir = 'North';\n  } else if (key === 40) {\n    dir = 'South';\n  } else if (key === 39) {\n    dir = 'East';\n  } else if (key === 37) {\n    dir = 'West';\n  }\n  var message = {\n    type: 'cmove',\n    protocol: 'C_Move',\n    posInfo: {\n      pos: {},\n      dirs: [],\n      state: null\n    },\n    dir: dir,\n    updown: true\n  };\n  websocket.send(JSON.stringify(message));\n});\nvar updateInputKeyBoardUp = function updateInputKeyBoardUp(key) {\n  var dir;\n  if (key === 38) {\n    dir = 'North';\n  } else if (key === 40) {\n    dir = 'South';\n  } else if (key === 39) {\n    dir = 'East';\n  } else if (key === 37) {\n    dir = 'West';\n  }\n  var message = {\n    type: 'cmove',\n    protocol: 'C_Move',\n    posInfo: {\n      pos: {},\n      dirs: [],\n      state: null\n    },\n    dir: dir,\n    updown: false\n  };\n  websocket.send(JSON.stringify(message));\n};\nvar analysisResult = {\n  result: null,\n  percentage: null\n};\n\nvar performSentimentAnalysisPlayer = function performSentimentAnalysisPlayer(playerID, targetID, inputValue) {\n  var url = \"http://localhost:5050/sentiment-analysis-player\"; // Adjust the URL to match your Python server\n  var dataString = playerID + '|' + targetID + '|' + inputValue;\n  // Send the input value to the Python server using fetch API\n  sendContent(url, dataString, targetID, inputValue);\n};\nvar performSentimentAnalysisMeteor = function performSentimentAnalysisMeteor(meteorWord, targetID, inputValue) {\n  var url = \"http://localhost:5050/sentiment-analysis-meteor\"; // Adjust the URL to match your Python server\n  var dataString = meteorWord + '|' + targetID + '|' + inputValue;\n  // Send the input value to the Python server using fetch API\n  sendContent(url, dataString, targetID, inputValue);\n};\nfunction sendContent(url, dataString, targetID, inputValue) {\n  fetch(url, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'text/plain',\n      'Connection': 'keep-alive'\n    },\n    body: dataString\n  }).then(function (response) {\n    return response.json();\n  }).then(function (data) {\n    var result = data.result;\n    handleChatAttack(targetID, inputValue, result, data.percentage);\n    console.log(result);\n    analysisResult.result = data.result;\n    analysisResult.percentage = data.percentage;\n    // Update the UI with the sentiment analysis result as needed\n    Object(_htmlComponent_checkbox__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(targetID, inputValue, result);\n  })[\"catch\"](function (error) {\n    console.error('Error:', error);\n  });\n}\nvar bullletInstance = {\n  skillId: 1,\n  name: 'bullet',\n  damage: _shared_constants__WEBPACK_IMPORTED_MODULE_2___default.a.BULLET_DAMAGE,\n  skillType: 'BULLET',\n  projectile: {\n    speed: _shared_constants__WEBPACK_IMPORTED_MODULE_2___default.a.BULLET_SPEED,\n    range: _shared_constants__WEBPACK_IMPORTED_MODULE_2___default.a.BULLET_RADIUS\n  }\n};\nvar shieldInstance = {\n  skillId: 2,\n  name: 'shield',\n  damage: 0,\n  skillType: 'SHIELD'\n};\nvar handleChatAttack = function handleChatAttack(targetID, content, result, percent) {\n  if (targetID == -1 && !result) {\n    // \n    console.log('타겟이 없는 상태에서 부정이면 방어할 수 없습니다.');\n    return;\n  }\n  var targetType = targetID >> 24 & 0x7F;\n  if (targetType == 2 && !result) {\n    console.log('70% 의 유사도를 넘지 못했으므로 공격할 수 없습니다.');\n    return;\n  }\n  if (targetID == -1) {\n    sendSkill(targetID, true);\n  } else if (targetType == 1) {\n    sendSkill(targetID, result);\n  } else if (targetType == 2) {\n    sendSkill(targetID, false);\n  } else {\n    console.log('굉장히 잘못되었다.');\n  }\n};\nfunction sendSkill(targetID, result) {\n  // false 이면 공격, true 이면 쉴드\n  var info = result === false ? bullletInstance : shieldInstance;\n  var skillPacket = {\n    type: 'cskill',\n    protocol: 'C_Skill',\n    target: targetID,\n    info: info\n  };\n  // skill\n  websocket.send(JSON.stringify(skillPacket));\n}\nvar requestLeaderBoard = function requestLeaderBoard(roomId) {\n  var url = \"http://\".concat(addr, \":8080/get/leaderboard?roomId=\") + roomId;\n  return fetch(url, {\n    method: 'GET'\n  }).then(function (response) {\n    return response.json();\n  }).then(function (data) {\n    return data;\n  });\n};\nvar requestTodayRanking = function requestTodayRanking() {\n  var url = \"http://\".concat(addr, \":8080/get/today_ranking\");\n  fetch(url, {\n    method: 'GET'\n  }).then(function (response) {\n    return response.json();\n  }).then(function (data) {\n    console.log(data);\n  });\n};\n\n//# sourceURL=webpack:///./src/main/resources/static/src/client/networking.js?");

/***/ }),

/***/ "./src/main/resources/static/src/client/pixi/app.js":
/*!**********************************************************!*\
  !*** ./src/main/resources/static/src/client/pixi/app.js ***!
  \**********************************************************/
/*! exports provided: pixiApp, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pixiApp\", function() { return pixiApp; });\n/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ \"pixi.js\");\n/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pixi_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _background_background__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./background/background */ \"./src/main/resources/static/src/client/pixi/background/background.js\");\n/* harmony import */ var _playground_playground__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./playground/playground */ \"./src/main/resources/static/src/client/pixi/playground/playground.js\");\n\n\n\nfunction pixiApp() {\n  var app = new pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"Application\"]({\n    resizeTo: window\n  });\n  document.body.appendChild(app.view);\n  Object(_background_background__WEBPACK_IMPORTED_MODULE_1__[\"makestar\"])(app);\n  // playground(app);\n\n  app.ticker.add(function (delta) {\n    Object(_background_background__WEBPACK_IMPORTED_MODULE_1__[\"renderBackground\"])(app, delta);\n  });\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (pixiApp);\n\n//# sourceURL=webpack:///./src/main/resources/static/src/client/pixi/app.js?");

/***/ }),

/***/ "./src/main/resources/static/src/client/pixi/background/background.js":
/*!****************************************************************************!*\
  !*** ./src/main/resources/static/src/client/pixi/background/background.js ***!
  \****************************************************************************/
/*! exports provided: randomizeStar, makestar, renderBackground */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"randomizeStar\", function() { return randomizeStar; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"makestar\", function() { return makestar; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderBackground\", function() { return renderBackground; });\n/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ \"pixi.js\");\n/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pixi_js__WEBPACK_IMPORTED_MODULE_0__);\n\nvar cameraZ = 0;\nvar fov = 20;\nvar baseSpeed = 0.05;\nvar speed = 0;\nvar warpSpeed = 0;\nvar starStretch = 5;\nvar starBaseSize = 0.05;\nvar starAmount = 1000;\nvar starTexture = pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"Texture\"].from('https://pixijs.com/assets/star.png');\nvar stars = [];\n\n// 별의 위치를 무작위로 설정하는 함수\nfunction randomizeStar(star, initial) {\n  star.z = initial ? Math.random() * 2000 : cameraZ + Math.random() * 1000 + 2000;\n  var deg = Math.random() * Math.PI * 2;\n  var distance = Math.random() * 50 + 1;\n  star.x = Math.cos(deg) * distance;\n  star.y = Math.sin(deg) * distance;\n}\nfunction makestar(app) {\n  for (var i = 0; i < starAmount; i++) {\n    var star = {\n      sprite: new pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"Sprite\"](starTexture),\n      z: 0,\n      x: 0,\n      y: 0\n    };\n    star.sprite.anchor.x = 0.5;\n    star.sprite.anchor.y = 0.7;\n    randomizeStar(star, true);\n    app.stage.addChild(star.sprite);\n    stars.push(star);\n  }\n}\nfunction renderBackground(app, delta) {\n  speed += (warpSpeed - speed) / 20;\n  cameraZ += delta * 10 * (speed + baseSpeed);\n  for (var i = 0; i < starAmount; i++) {\n    var star = stars[i];\n    if (star.z < cameraZ) randomizeStar(star);\n    var z = star.z - cameraZ;\n    star.sprite.x = star.x * (fov / z) * app.renderer.screen.width + app.renderer.screen.width / 2;\n    star.sprite.y = star.y * (fov / z) * app.renderer.screen.width + app.renderer.screen.height / 2;\n    var dxCenter = star.sprite.x - app.renderer.screen.width / 2;\n    var dyCenter = star.sprite.y - app.renderer.screen.height / 2;\n    var distanceCenter = Math.sqrt(dxCenter * dxCenter + dyCenter * dyCenter);\n    var distanceScale = Math.max(0, (2000 - z) / 2000);\n    star.sprite.scale.x = distanceScale * starBaseSize;\n    star.sprite.scale.y = distanceScale * starBaseSize + distanceScale * speed * starStretch * distanceCenter / app.renderer.screen.width;\n    star.sprite.rotation = Math.atan2(dyCenter, dxCenter) + Math.PI / 2;\n  }\n}\n\n//# sourceURL=webpack:///./src/main/resources/static/src/client/pixi/background/background.js?");

/***/ }),

/***/ "./src/main/resources/static/src/client/pixi/playground/playground.js":
/*!****************************************************************************!*\
  !*** ./src/main/resources/static/src/client/pixi/playground/playground.js ***!
  \****************************************************************************/
/*! exports provided: playground, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"playground\", function() { return playground; });\nfunction playground(app) {\n  var playgroundApp = new PIXI.Application({\n    width: 1000,\n    height: 1000,\n    antialias: true,\n    transparent: true\n  });\n  playgroundApp.view.style.position = \"absolute\";\n  playgroundApp.view.style.top = \"50%\";\n  playgroundApp.view.style.left = \"5%\";\n  playgroundApp.view.style.transform = \"translateY(-50%)\";\n  playgroundApp.view.style.border = \"2px solid gray\";\n  document.body.appendChild(playgroundApp.view);\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (playground);\n\n//# sourceURL=webpack:///./src/main/resources/static/src/client/pixi/playground/playground.js?");

/***/ }),

/***/ "./src/main/resources/static/src/client/state.js":
/*!*******************************************************!*\
  !*** ./src/main/resources/static/src/client/state.js ***!
  \*******************************************************/
/*! exports provided: initState, processGameUpdate, getCurrentState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initState\", function() { return initState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"processGameUpdate\", function() { return processGameUpdate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCurrentState\", function() { return getCurrentState; });\n/* harmony import */ var _htmlComponent_leaderboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./htmlComponent/leaderboard */ \"./src/main/resources/static/src/client/htmlComponent/leaderboard.js\");\n// Learn more about this file at:\n// https://victorzhou.com/blog/build-an-io-game-part-1/#7-client-state\n\nvar Constants = __webpack_require__(/*! ../shared/constants */ \"./src/main/resources/static/src/shared/constants.js\");\nvar MAP_SIZE = Constants.MAP_SIZE;\n// The \"current\" state will always be RENDER_DELAY ms behind server time.\n// This makes gameplay smoother and lag less noticeable.\nvar RENDER_DELAY = 100;\n\n// 게임 업데이트를 처리하기 위한 변수들\nvar gameUpdates = [];\nvar gameStart = 0;\nvar firstServerTimestamp = 0;\n\n// 초기 상태를 설정하는 함수\nfunction initState() {\n  gameStart = 0;\n  firstServerTimestamp = 0;\n}\n\n// 서버로부터 받은 게임 업데이트를 처리하는 함수\nfunction processGameUpdate(update) {\n  // 첫 업데이트라면, 서버의 타임스탬프를 기록하고 게임 시작 시간을 설정\n  if (!firstServerTimestamp) {\n    firstServerTimestamp = update.t;\n    gameStart = Date.now();\n  }\n\n  // 업데이트를 배열에 추가\n  gameUpdates.push(update);\n\n  // 리더보드 업데이트\n  Object(_htmlComponent_leaderboard__WEBPACK_IMPORTED_MODULE_0__[\"updateLeaderboard\"])(update.leaderboard);\n\n  // 현재 서버 시간 이전의 첫 번째 게임 업데이트만 유지\n  var base = getBaseUpdate();\n  if (base > 0) {\n    gameUpdates.splice(0, base);\n  }\n}\n\n// 현재 서버 시간을 계산하는 함수\nfunction currentServerTime() {\n  return firstServerTimestamp + (Date.now() - gameStart) - RENDER_DELAY;\n}\n\n// 현재 서버 시간 이전의 첫 번째 게임 업데이트의 인덱스를 반환하거나,\n// 해당하는 업데이트가 없다면 -1을 반환하는 함수\nfunction getBaseUpdate() {\n  var serverTime = currentServerTime();\n  for (var i = gameUpdates.length - 1; i >= 0; i--) {\n    if (gameUpdates[i].t <= serverTime) {\n      return i;\n    }\n  }\n  return -1;\n}\n\n// 현재 상태 반환 { me, others, bullets }\nfunction getCurrentState() {\n  if (!firstServerTimestamp) {\n    return {};\n  }\n  var base = getBaseUpdate();\n  var serverTime = currentServerTime();\n\n  // base가 가장 최근의 업데이트인 경우, 해당 업데이트의 상태를 사용\n  // 그렇지 않은 경우, base 업데이트와 (base + 1) 업데이트의 상태를 보간\n  if (base < 0 || base === gameUpdates.length - 1) {\n    return gameUpdates[gameUpdates.length - 1];\n  } else {\n    var baseUpdate = gameUpdates[base];\n    var next = gameUpdates[base + 1];\n    var ratio = (serverTime - baseUpdate.t) / (next.t - baseUpdate.t);\n    return {\n      me: interpolateObject(baseUpdate.me, next.me, ratio),\n      others: interpolateObjectArray(baseUpdate.others, next.others, ratio),\n      bullets: interpolateObjectArray(baseUpdate.bullets, next.bullets, ratio),\n      meteors: interpolateObjectArray(baseUpdate.meteors, next.meteors, ratio)\n    };\n  }\n}\n\n// 두 객체 사이를 보간하는 함수\nfunction interpolateObject(object1, object2, ratio) {\n  if (!object2) {\n    return object1;\n  }\n  var interpolated = {};\n  Object.keys(object1).forEach(function (key) {\n    if (key === 'direction') {\n      interpolated[key] = interpolateDirection(object1[key], object2[key], ratio);\n    } else if (key === 'x' || key === 'y') {\n      interpolated[key] = interpolatePosition(object1[key], object2[key], ratio);\n      //interpolated[key] = object1[key] + (object2[key] - object1[key]) * ratio;\n    } else {\n      interpolated[key] = object1[key];\n    }\n  });\n  return interpolated;\n}\n\n// 객체 배열을 보간하는 함수\nfunction interpolateObjectArray(objects1, objects2, ratio) {\n  return objects1.map(function (o) {\n    return interpolateObject(o, objects2.find(function (o2) {\n      return o.id === o2.id;\n    }), ratio);\n  });\n}\n\n// 위치 값을 보간하는 함수\nfunction interpolatePosition(p1, p2, ratio) {\n  var distance = Math.abs(p2 - p1);\n  if (distance > MAP_SIZE / 2) {\n    // 경계를 넘어가는 경우, 반대편으로 회전하여 보간\n    if (p1 < p2) {\n      p1 += MAP_SIZE;\n    } else {\n      p1 -= MAP_SIZE;\n    }\n  }\n  return p1 + (p2 - p1) * ratio;\n}\n\n// Determines the best way to rotate (cw or ccw) when interpolating a direction.\n// For example, when rotating from -3 radians to +3 radians, we should really rotate from\n// -3 radians to +3 - 2pi radians.\n// 방향을 보간할 때 회전 방향 (시계 방향 또는 반시계 방향)을 결정하는 함수\nfunction interpolateDirection(d1, d2, ratio) {\n  var absD = Math.abs(d2 - d1);\n  if (absD >= Math.PI) {\n    // 두 방향 사이의 각도가 크면, 다른 방향으로 회전\n    if (d1 > d2) {\n      return d1 + (d2 + 2 * Math.PI - d1) * ratio;\n    } else {\n      return d1 - (d2 - 2 * Math.PI - d1) * ratio;\n    }\n  } else {\n    // 일반 보간\n    return d1 + (d2 - d1) * ratio;\n  }\n}\n\n//# sourceURL=webpack:///./src/main/resources/static/src/client/state.js?");

/***/ }),

/***/ "./src/main/resources/static/src/shared/constants.js":
/*!***********************************************************!*\
  !*** ./src/main/resources/static/src/shared/constants.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = Object.freeze({\n  PLAYER_RADIUS: 15,\n  BULLET_RADIUS: 80,\n  METEOR_RADIUS: 25,\n  MAP_SIZE: 2000\n});\n\n//# sourceURL=webpack:///./src/main/resources/static/src/shared/constants.js?");

/***/ }),

/***/ "pixi.js":
/*!***********************!*\
  !*** external "PIXI" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = PIXI;\n\n//# sourceURL=webpack:///external_%22PIXI%22?");

/***/ })

/******/ });