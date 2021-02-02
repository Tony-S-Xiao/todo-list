/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/buckets-js/dist/buckets.min.js":
/*!*****************************************************!*\
  !*** ./node_modules/buckets-js/dist/buckets.min.js ***!
  \*****************************************************/
/***/ (function(module, exports) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! buckets - version: 1.98.2 - (c) 2013 - 2016 Mauricio Santos - https://github.com/mauriciosantos/Buckets-JS*/\n!function(a,b){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):0}(this,function(){\"use strict\";var a={};return a.defaultCompare=function(a,b){return a<b?-1:a===b?0:1},a.defaultEquals=function(a,b){return a===b},a.defaultToString=function(b){return null===b?\"BUCKETS_NULL\":a.isUndefined(b)?\"BUCKETS_UNDEFINED\":a.isString(b)?b:b.toString()},a.isFunction=function(a){return\"function\"==typeof a},a.isUndefined=function(a){return void 0===a},a.isString=function(a){return\"[object String]\"===Object.prototype.toString.call(a)},a.reverseCompareFunction=function(b){return a.isFunction(b)?function(a,c){return b(a,c)*-1}:function(a,b){return a<b?1:a===b?0:-1}},a.compareToEquals=function(a){return function(b,c){return 0===a(b,c)}},a.arrays={},a.arrays.indexOf=function(b,c,d){var e,f=d||a.defaultEquals,g=b.length;for(e=0;e<g;e+=1)if(f(b[e],c))return e;return-1},a.arrays.lastIndexOf=function(b,c,d){var e,f=d||a.defaultEquals,g=b.length;for(e=g-1;e>=0;e-=1)if(f(b[e],c))return e;return-1},a.arrays.contains=function(b,c,d){return a.arrays.indexOf(b,c,d)>=0},a.arrays.remove=function(b,c,d){var e=a.arrays.indexOf(b,c,d);return!(e<0)&&(b.splice(e,1),!0)},a.arrays.frequency=function(b,c,d){var e,f=d||a.defaultEquals,g=b.length,h=0;for(e=0;e<g;e+=1)f(b[e],c)&&(h+=1);return h},a.arrays.equals=function(b,c,d){var e,f=d||a.defaultEquals,g=b.length;if(b.length!==c.length)return!1;for(e=0;e<g;e+=1)if(!f(b[e],c[e]))return!1;return!0},a.arrays.copy=function(a){return a.concat()},a.arrays.swap=function(a,b,c){var d;return!(b<0||b>=a.length||c<0||c>=a.length)&&(d=a[b],a[b]=a[c],a[c]=d,!0)},a.arrays.forEach=function(a,b){var c,d=a.length;for(c=0;c<d;c+=1)if(b(a[c])===!1)return},a.Bag=function(b){var c={},d=b||a.defaultToString,e=new a.Dictionary(d),f=0;return c.add=function(b,d){var g;return(isNaN(d)||a.isUndefined(d))&&(d=1),!(a.isUndefined(b)||d<=0)&&(c.contains(b)?e.get(b).copies+=d:(g={value:b,copies:d},e.set(b,g)),f+=d,!0)},c.count=function(a){return c.contains(a)?e.get(a).copies:0},c.contains=function(a){return e.containsKey(a)},c.remove=function(b,d){var g;return(isNaN(d)||a.isUndefined(d))&&(d=1),!(a.isUndefined(b)||d<=0)&&(!!c.contains(b)&&(g=e.get(b),f-=d>g.copies?g.copies:d,g.copies-=d,g.copies<=0&&e.remove(b),!0))},c.toArray=function(){var a,b,c,d,f,g=[],h=e.values(),i=h.length;for(d=0;d<i;d+=1)for(a=h[d],b=a.value,c=a.copies,f=0;f<c;f+=1)g.push(b);return g},c.toSet=function(){var b,c=new a.Set(d),f=e.values(),g=f.length;for(b=0;b<g;b+=1)c.add(f[b].value);return c},c.forEach=function(a){e.forEach(function(b,c){var d,e=c.value,f=c.copies;for(d=0;d<f;d+=1)if(a(e)===!1)return!1;return!0})},c.size=function(){return f},c.isEmpty=function(){return 0===f},c.clear=function(){f=0,e.clear()},c.equals=function(b){var d;return!a.isUndefined(b)&&\"function\"==typeof b.toSet&&(c.size()===b.size()&&(d=!0,b.forEach(function(a){return d=c.count(a)===b.count(a)}),d))},c},a.BSTree=function(b){function c(a,b){for(var c,d=a;void 0!==d&&0!==c;)c=g(b,d.element),c<0?d=d.leftCh:c>0&&(d=d.rightCh);return d}function d(a){for(var b=a;void 0!==b.leftCh;)b=b.leftCh;return b}var e,f={},g=b||a.defaultCompare,h=0;return f.add=function(b){function c(a){for(var b,c,d=e;void 0!==d;){if(c=g(a.element,d.element),0===c)return;c<0?(b=d,d=d.leftCh):(b=d,d=d.rightCh)}return a.parent=b,void 0===b?e=a:g(a.element,b.element)<0?b.leftCh=a:b.rightCh=a,a}if(a.isUndefined(b))return!1;var d={element:b,leftCh:void 0,rightCh:void 0,parent:void 0};return void 0!==c(d)&&(h+=1,!0)},f.clear=function(){e=void 0,h=0},f.isEmpty=function(){return 0===h},f.size=function(){return h},f.contains=function(b){return!a.isUndefined(b)&&void 0!==c(e,b)},f.remove=function(a){function b(a,b){void 0===a.parent?e=b:a===a.parent.leftCh?a.parent.leftCh=b:a.parent.rightCh=b,void 0!==b&&(b.parent=a.parent)}function f(a){if(void 0===a.leftCh)b(a,a.rightCh);else if(void 0===a.rightCh)b(a,a.leftCh);else{var c=d(a.rightCh);c.parent!==a&&(b(c,c.rightCh),c.rightCh=a.rightCh,c.rightCh.parent=c),b(a,c),c.leftCh=a.leftCh,c.leftCh.parent=c}}var g;return g=c(e,a),void 0!==g&&(f(g),h-=1,!0)},f.inorderTraversal=function(a){function b(a,c,d){void 0===a||d.stop||(b(a.leftCh,c,d),d.stop||(d.stop=c(a.element)===!1,d.stop||b(a.rightCh,c,d)))}b(e,a,{stop:!1})},f.preorderTraversal=function(a){function b(a,c,d){void 0===a||d.stop||(d.stop=c(a.element)===!1,d.stop||(b(a.leftCh,c,d),d.stop||b(a.rightCh,c,d)))}b(e,a,{stop:!1})},f.postorderTraversal=function(a){function b(a,c,d){void 0===a||d.stop||(b(a.leftCh,c,d),d.stop||(b(a.rightCh,c,d),d.stop||(d.stop=c(a.element)===!1)))}b(e,a,{stop:!1})},f.levelTraversal=function(b){function c(b,c){var d=a.Queue();for(void 0!==b&&d.enqueue(b);!d.isEmpty();){if(b=d.dequeue(),c(b.element)===!1)return;void 0!==b.leftCh&&d.enqueue(b.leftCh),void 0!==b.rightCh&&d.enqueue(b.rightCh)}}c(e,b)},f.minimum=function(){if(!f.isEmpty())return d(e).element},f.maximum=function(){function a(a){for(;void 0!==a.rightCh;)a=a.rightCh;return a}if(!f.isEmpty())return a(e).element},f.forEach=function(a){f.inorderTraversal(a)},f.toArray=function(){var a=[];return f.inorderTraversal(function(b){a.push(b)}),a},f.height=function(){function a(b){return void 0===b?-1:Math.max(a(b.leftCh),a(b.rightCh))+1}function b(b){return void 0===b?-1:Math.max(a(b.leftCh),a(b.rightCh))+1}return b(e)},f.equals=function(b){var c;return!a.isUndefined(b)&&\"function\"==typeof b.levelTraversal&&(f.size()===b.size()&&(c=!0,b.forEach(function(a){return c=f.contains(a)}),c))},f},a.Dictionary=function(b){var c={},d={},e=0,f=b||a.defaultToString,g=\"/$ \";return c.get=function(b){var c=d[g+f(b)];if(!a.isUndefined(c))return c.value},c.set=function(b,c){var h,i,j;if(!a.isUndefined(b)&&!a.isUndefined(c))return i=g+f(b),j=d[i],a.isUndefined(j)?(e+=1,h=void 0):h=j.value,d[i]={key:b,value:c},h},c.remove=function(b){var c=g+f(b),h=d[c];if(!a.isUndefined(h))return delete d[c],e-=1,h.value},c.keys=function(){var a,b=[];for(a in d)Object.prototype.hasOwnProperty.call(d,a)&&b.push(d[a].key);return b},c.values=function(){var a,b=[];for(a in d)Object.prototype.hasOwnProperty.call(d,a)&&b.push(d[a].value);return b},c.forEach=function(a){var b,c,e;for(b in d)if(Object.prototype.hasOwnProperty.call(d,b)&&(c=d[b],e=a(c.key,c.value),e===!1))return},c.containsKey=function(b){return!a.isUndefined(c.get(b))},c.clear=function(){d={},e=0},c.size=function(){return e},c.isEmpty=function(){return e<=0},c.equals=function(b,d){var e,f;return!a.isUndefined(b)&&\"function\"==typeof b.keys&&(c.size()===b.size()&&(e=d||a.defaultEquals,f=!0,b.forEach(function(a,b){return f=e(c.get(a),b)}),f))},c},a.Heap=function(b){function c(b){function c(a){return Math.floor((a-1)/2)}var d;for(d=c(b);b>0&&g(f[d],f[b])>0;)a.arrays.swap(f,d,b),b=d,d=c(b)}function d(b){function c(a){return 2*a+1}function d(a){return 2*a+2}function e(a,b){return b>=f.length?a>=f.length?-1:a:g(f[a],f[b])<=0?a:b}var h;for(h=e(c(b),d(b));h>=0&&g(f[b],f[h])>0;)a.arrays.swap(f,h,b),b=h,h=e(c(b),d(b))}var e={},f=[],g=b||a.defaultCompare;return e.peek=function(){if(f.length>0)return f[0]},e.add=function(b){if(!a.isUndefined(b))return f.push(b),c(f.length-1),!0},e.removeRoot=function(){var a;if(f.length>0)return a=f[0],f[0]=f[f.length-1],f.splice(f.length-1,1),f.length>0&&d(0),a},e.contains=function(b){var c=a.compareToEquals(g);return a.arrays.contains(f,b,c)},e.size=function(){return f.length},e.isEmpty=function(){return f.length<=0},e.clear=function(){f.length=0},e.forEach=function(b){a.arrays.forEach(f,b)},e.toArray=function(){return a.arrays.copy(f)},e.equals=function(b){var c,d,f;return!a.isUndefined(b)&&\"function\"==typeof b.removeRoot&&(e.size()===b.size()&&(c=e.toArray(),d=b.toArray(),f=a.compareToEquals(g),c.sort(g),d.sort(g),a.arrays.equals(c,d,f)))},e},a.LinkedList=function(){function b(a){var b,e;if(!(a<0||a>=f)){if(a===f-1)return d;for(b=c,e=0;e<a;e+=1)b=b.next;return b}}var c,d,e={},f=0;return e.add=function(e,g){var h,i;return a.isUndefined(g)&&(g=f),!(g<0||g>f||a.isUndefined(e))&&(h={element:e,next:void 0},0===f?(c=h,d=h):g===f?(d.next=h,d=h):0===g?(h.next=c,c=h):(i=b(g-1),h.next=i.next,i.next=h),f+=1,!0)},e.first=function(){if(void 0!==c)return c.element},e.last=function(){if(void 0!==d)return d.element},e.elementAtIndex=function(a){var c=b(a);if(void 0!==c)return c.element},e.indexOf=function(b,d){var e=d||a.defaultEquals,f=c,g=0;if(a.isUndefined(b))return-1;for(;void 0!==f;){if(e(f.element,b))return g;g+=1,f=f.next}return-1},e.contains=function(a,b){return e.indexOf(a,b)>=0},e.remove=function(b,e){var g,h=e||a.defaultEquals,i=c;if(f<1||a.isUndefined(b))return!1;for(;void 0!==i;){if(h(i.element,b))return i===c?(c=c.next,i===d&&(d=void 0)):i===d?(d=g,g.next=i.next,i.next=void 0):(g.next=i.next,i.next=void 0),f-=1,!0;g=i,i=i.next}return!1},e.clear=function(){c=void 0,d=void 0,f=0},e.equals=function(b,d){var f=d||a.defaultEquals,g=!0,h=c;return!a.isUndefined(b)&&\"function\"==typeof b.elementAtIndex&&(e.size()===b.size()&&(b.forEach(function(a){return g=f(a,h.element),h=h.next,g}),g))},e.removeElementAtIndex=function(a){var e,g;if(!(a<0||a>=f))return 1===f?(e=c.element,c=void 0,d=void 0):(g=b(a-1),void 0===g?(e=c.element,c=c.next):g.next===d&&(e=d.element,d=g),void 0!==g&&(e=g.next.element,g.next=g.next.next)),f-=1,e},e.forEach=function(a){for(var b=c;void 0!==b&&a(b.element)!==!1;)b=b.next},e.reverse=function(){for(var a,b,e=c;void 0!==e;)b=e.next,e.next=a,a=e,e=b;b=c,c=d,d=b},e.toArray=function(){var a=[];return e.forEach(function(b){a.push(b)}),a},e.size=function(){return f},e.isEmpty=function(){return f<=0},e},a.MultiDictionary=function(b,c){var d={},e=new a.Dictionary(b),f=c||a.defaultEquals;return d.get=function(b){var c=e.get(b);return a.isUndefined(c)?[]:a.arrays.copy(c)},d.set=function(b,c){var g;return!a.isUndefined(b)&&!a.isUndefined(c)&&(d.containsKey(b)?(g=e.get(b),!a.arrays.contains(g,c,f)&&(g.push(c),!0)):(e.set(b,[c]),!0))},d.remove=function(b,c){var d,g;return a.isUndefined(c)?(d=e.remove(b),!a.isUndefined(d)):(g=e.get(b),!!a.arrays.remove(g,c,f)&&(0===g.length&&e.remove(b),!0))},d.keys=function(){return e.keys()},d.values=function(){var a,b,c,d=e.values(),f=[];for(a=0;a<d.length;a+=1)for(c=d[a],b=0;b<c.length;b+=1)f.push(c[b]);return f},d.containsKey=function(a){return e.containsKey(a)},d.clear=function(){return e.clear()},d.size=function(){return e.size()},d.isEmpty=function(){return e.isEmpty()},d.forEach=function(a){return e.forEach(a)},d.equals=function(b){var c,e=!0;return!a.isUndefined(b)&&\"function\"==typeof b.values&&(d.size()===b.size()&&(b.forEach(function(b,g){return c=d.get(b)||[],c.length!==g.length?e=!1:a.arrays.forEach(c,function(b){return e=a.arrays.contains(g,b,f)}),e}),e))},d},a.PriorityQueue=function(b){var c={},d=a.reverseCompareFunction(b),e=new a.Heap(d);return c.enqueue=function(a){return e.add(a)},c.add=function(a){return e.add(a)},c.dequeue=function(){var a;if(0!==e.size())return a=e.peek(),e.removeRoot(),a},c.peek=function(){return e.peek()},c.contains=function(a){return e.contains(a)},c.isEmpty=function(){return e.isEmpty()},c.size=function(){return e.size()},c.clear=function(){e.clear()},c.forEach=function(a){e.forEach(a)},c.toArray=function(){return e.toArray()},c.equals=function(b){var e,f,g;return!a.isUndefined(b)&&\"function\"==typeof b.dequeue&&(c.size()===b.size()&&(e=c.toArray(),f=b.toArray(),g=a.compareToEquals(d),e.sort(d),f.sort(d),a.arrays.equals(e,f,g)))},c},a.Queue=function(){var b={},c=new a.LinkedList;return b.enqueue=function(a){return c.add(a)},b.add=function(a){return c.add(a)},b.dequeue=function(){var a;if(0!==c.size())return a=c.first(),c.removeElementAtIndex(0),a},b.peek=function(){if(0!==c.size())return c.first()},b.size=function(){return c.size()},b.contains=function(a,b){return c.contains(a,b)},b.isEmpty=function(){return c.size()<=0},b.clear=function(){c.clear()},b.forEach=function(a){c.forEach(a)},b.toArray=function(){return c.toArray()},b.equals=function(c,d){var e,f,g;return!a.isUndefined(c)&&\"function\"==typeof c.dequeue&&(b.size()===c.size()&&(e=d||a.defaultEquals,f=!0,c.forEach(function(a){return g=b.dequeue(),b.enqueue(g),f=e(g,a)}),f))},b},a.Set=function(b){var c={},d=new a.Dictionary(b);return c.contains=function(a){return d.containsKey(a)},c.add=function(b){return!c.contains(b)&&!a.isUndefined(b)&&(d.set(b,b),!0)},c.intersection=function(a){c.forEach(function(b){a.contains(b)||c.remove(b)})},c.union=function(a){a.forEach(function(a){c.add(a)})},c.difference=function(a){a.forEach(function(a){c.remove(a)})},c.isSubsetOf=function(a){var b=!0;return!(c.size()>a.size())&&(c.forEach(function(c){if(!a.contains(c))return b=!1,!1}),b)},c.remove=function(a){return!!c.contains(a)&&(d.remove(a),!0)},c.forEach=function(a){d.forEach(function(b,c){return a(c)})},c.toArray=function(){return d.values()},c.isEmpty=function(){return d.isEmpty()},c.size=function(){return d.size()},c.clear=function(){d.clear()},c.equals=function(b){var d;return!a.isUndefined(b)&&\"function\"==typeof b.isSubsetOf&&(c.size()===b.size()&&(d=!0,b.forEach(function(a){return d=c.contains(a)}),d))},c},a.Stack=function(){var b={},c=new a.LinkedList;return b.push=function(a){return c.add(a,0)},b.add=function(a){return c.add(a,0)},b.pop=function(){return c.removeElementAtIndex(0)},b.peek=function(){return c.first()},b.size=function(){return c.size()},b.contains=function(a,b){return c.contains(a,b)},b.isEmpty=function(){return c.isEmpty()},b.clear=function(){c.clear()},b.forEach=function(a){c.forEach(a)},b.toArray=function(){return c.toArray()},b.equals=function(d,e){var f,g,h;return!a.isUndefined(d)&&\"function\"==typeof d.peek&&(b.size()===d.size()&&(f=e||a.defaultEquals,g=!0,d.forEach(function(a){return h=b.pop(),c.add(h),g=f(h,a)}),g))},b},a});\n//# sourceMappingURL=buckets.min.js.map\n\n//# sourceURL=webpack://todo-list/./node_modules/buckets-js/dist/buckets.min.js?");

/***/ }),

/***/ "./src/controller/controller.js":
/*!**************************************!*\
  !*** ./src/controller/controller.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getTaskInput\": () => (/* binding */ getTaskInput),\n/* harmony export */   \"resetTaskInput\": () => (/* binding */ resetTaskInput)\n/* harmony export */ });\n/* harmony import */ var _model_tasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/tasks.js */ \"./src/model/tasks.js\");\n\n/**\n * @return \n */\nfunction getTaskInput() {\n    let inputs = document.getElementById('task-input');\n    let input = inputs.querySelectorAll('input, textarea');\n    input = Array.from(input).map((node) => node.value);\n\n    let option = document.getElementById('priority').value;\n\n    let task = new _model_tasks_js__WEBPACK_IMPORTED_MODULE_0__.default(0, ...input, option);\n    resetTaskInput();\n    return task;\n}\nfunction resetTaskInput() {\n    let inputs = document.getElementById('task-input');\n    let input = inputs.querySelectorAll('input, textarea');\n    for(let node of input) {\n        node.value = '';\n    }\n    document.getElementById('priority').value = '0';\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/controller/controller.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controller_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller/controller.js */ \"./src/controller/controller.js\");\n/* harmony import */ var _model_timeline_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/timeline.js */ \"./src/model/timeline.js\");\n\n\n\nlet curr_timeline = _model_timeline_js__WEBPACK_IMPORTED_MODULE_1__.default;\ndocument.getElementById(\"task-submit-button\").addEventListener('click', (e) => {\n    let curr = (0,_controller_controller_js__WEBPACK_IMPORTED_MODULE_0__.getTaskInput)();\n    curr_timeline.appendTask(curr);\n    console.log(curr);\n    (0,_controller_controller_js__WEBPACK_IMPORTED_MODULE_0__.resetTaskInput)();\n    console.log(curr_timeline.getTimeline());\n});\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/model/tasks.js":
/*!****************************!*\
  !*** ./src/model/tasks.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/** Class representing a task. */\nclass Task {\n    /**\n     * Create a task.\n     * @param {number} id Number representing id of the task. id must be unique and a positive integer.\n     * @param {string} title Name of the task.\n     * @param {string} description Description of task or additional notes about the task.\n     * @param {Date} start_date Date object representing the start date of the task.\n     * @param {Date} due_date Date object representing the due date of the task.\n     * @param {number} priority Number representing the priority of the task from highest(0) to lowest(4).\n     */\n    constructor(id = -1, title = '', description = '', start_date = new Date(), due_date = new Date(), priority = 0) {\n        this._id = id;\n        this._title = title;\n        this._description = description;\n        this._dueDate = new Date(due_date);\n        this._startDate = new Date(start_date);\n        this._priority = priority;\n    }\n    /**\n     * Getters and setters.\n     */\n    get id() {\n        return this._id;\n    }\n    get title() {\n        return this._title;\n    }\n    get description() {\n        return this._description;\n    }\n    get dueDate() {\n        return this._dueDate;\n    }\n    get startDate() {\n        return this._startDate;\n    }\n    get priority() {\n        return this._priority;\n    }\n    set title(title) {\n        this._title = title;\n    }\n    set description(description) {\n        this._description = description;\n    }\n    set dueDate(due_date) {\n        this._dueDate = due_date;\n    }\n    set startDate(start_date) {\n        this._startDate = start_date;\n    }\n    set priority(priority) {\n        this._priority = priority;\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);\n\n//# sourceURL=webpack://todo-list/./src/model/tasks.js?");

/***/ }),

/***/ "./src/model/timeline.js":
/*!*******************************!*\
  !*** ./src/model/timeline.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var buckets_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! buckets-js */ \"./node_modules/buckets-js/dist/buckets.min.js\");\n/* harmony import */ var buckets_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(buckets_js__WEBPACK_IMPORTED_MODULE_0__);\n\n/**\n * A timeline singleton. \n */\nconst timeline = (() => {\n    /**\n     * BST representing the timeline of tasks. Custom comparator for dates.\n     */\n    let bst = new (buckets_js__WEBPACK_IMPORTED_MODULE_0___default().BSTree)((first, second) => {\n        if(first.date < second.date) return -1;\n        if(first.date > second.date) return 1;\n        return 0;\n    });\n    /**\n     * Add a new task to the timeline.\n     * @param {Date} date Date object representing the time \n     * on the timeline(usually equals to the start date of task).\n     * @param {Task} task Task object representing the task.\n     */\n    const appendTask = (task, date = task.startDate) => {\n        bst.add({task, date});\n    };\n    \n    const getTimeline = () => {\n        return bst.toArray();\n    };\n    return {appendTask, getTimeline};\n})();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timeline);\n\n//# sourceURL=webpack://todo-list/./src/model/timeline.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;