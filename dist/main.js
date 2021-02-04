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

/***/ "./src/controller/controller.js":
/*!**************************************!*\
  !*** ./src/controller/controller.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getTaskInput\": () => (/* binding */ getTaskInput),\n/* harmony export */   \"resetTaskInput\": () => (/* binding */ resetTaskInput),\n/* harmony export */   \"completeButtonHandler\": () => (/* binding */ completeButtonHandler)\n/* harmony export */ });\n/* harmony import */ var _model_tasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/tasks.js */ \"./src/model/tasks.js\");\n\n/**\n * @return \n */\nlet id_unique = 0;\nfunction getTaskInput() {\n    let inputs = document.getElementById('task-input');\n    let input = inputs.querySelectorAll('input, textarea');\n    input = Array.from(input).map((node) => node.value);\n    let option = document.getElementById('priority').value;\n    let task = new _model_tasks_js__WEBPACK_IMPORTED_MODULE_0__.default(id_unique++, ...input, option);\n    resetTaskInput();\n    return task;\n}\nfunction resetTaskInput() {\n    let inputs = document.getElementById('task-input');\n    let input = inputs.querySelectorAll('input, textarea');\n    for(let node of input) {\n        node.value = '';\n    }\n    document.getElementById('priority').value = '0';\n}\nfunction completeButtonHandler(e) {\n    e.target.closest('.task-card').remove();\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/controller/controller.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controller_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller/controller.js */ \"./src/controller/controller.js\");\n/* harmony import */ var _model_timeline_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/timeline.js */ \"./src/model/timeline.js\");\n/* harmony import */ var _view_display_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/display.js */ \"./src/view/display.js\");\n\n\n\n\nlet curr_timeline = _model_timeline_js__WEBPACK_IMPORTED_MODULE_1__.default;\ndocument.getElementById(\"task-submit-button\").addEventListener('click', (e) => {\n    let curr = (0,_controller_controller_js__WEBPACK_IMPORTED_MODULE_0__.getTaskInput)();\n    curr_timeline.appendTask(curr);\n    (0,_controller_controller_js__WEBPACK_IMPORTED_MODULE_0__.resetTaskInput)();\n    (0,_view_display_js__WEBPACK_IMPORTED_MODULE_2__.displayTask)(curr);\n});\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/model/tasks.js":
/*!****************************!*\
  !*** ./src/model/tasks.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/** Class representing a task. */\nclass Task {\n    /**\n     * Create a task.\n     * @param {number} id Number representing id of the task. id must be unique and a positive integer.\n     * @param {string} title Name of the task.\n     * @param {string} description Description of task or additional notes about the task.\n     * @param {Date} start_date Date object representing the start date of the task.\n     * @param {Date} due_date Date object representing the due date of the task.\n     * @param {number} priority Number representing the priority of the task from highest(0) to lowest(4).\n     */\n    constructor(id = -1, title = '', description = '', start_date = new Date(), due_date = new Date(), priority = 0) {\n        this._id = id;\n        this._title = title;\n        this._description = description;\n        this._dueDate = new Date(due_date);\n        this._startDate = new Date(start_date);\n        this._priority = priority;\n    }\n    /**\n     * Getters and setters.\n     */\n    get id() {\n        return this._id;\n    }\n    get title() {\n        return this._title;\n    }\n    get description() {\n        return this._description;\n    }\n    get dueDate() {\n        return this._dueDate;\n    }\n    get startDate() {\n        return this._startDate;\n    }\n    get priority() {\n        return this._priority;\n    }\n    set title(title) {\n        this._title = title;\n    }\n    set description(description) {\n        this._description = description;\n    }\n    set dueDate(due_date) {\n        this._dueDate = due_date;\n    }\n    set startDate(start_date) {\n        this._startDate = start_date;\n    }\n    set priority(priority) {\n        this._priority = priority;\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);\n\n//# sourceURL=webpack://todo-list/./src/model/tasks.js?");

/***/ }),

/***/ "./src/model/timeline.js":
/*!*******************************!*\
  !*** ./src/model/timeline.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\n * A timeline singleton. \n */\nconst timeline = (() => {\n    /**\n     * Array representing the timeline of tasks.\n     */\n    let arr = [];\n    /**\n     * Add a new task to the timeline.\n     * @param {Date} date Date object representing the time \n     * on the timeline(usually equals to the start date of task).\n     * @param {Task} task Task object representing the task.\n     */\n    const appendTask = (task) => {\n        arr.push(task);\n    };\n    const getTimeline = () => {\n        return arr;\n    };\n    return {appendTask, getTimeline};\n})();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timeline);\n\n//# sourceURL=webpack://todo-list/./src/model/timeline.js?");

/***/ }),

/***/ "./src/view/display.js":
/*!*****************************!*\
  !*** ./src/view/display.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayTimeline\": () => (/* binding */ displayTimeline),\n/* harmony export */   \"displayTask\": () => (/* binding */ displayTask)\n/* harmony export */ });\n/* harmony import */ var _controller_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controller/controller.js */ \"./src/controller/controller.js\");\n\n\nconst displayTimeline = (timeline) => {\n    let task_arr = timeline.getTimeline();\n    for(let i = 0; i < task_arr.length; ++i) {\n        displayTask(task_arr[i]);\n    }\n}\nconst displayTask = (task) => {\n    let node = document.createElement('div');\n    node.classList = 'task-card';\n    node.id = \"task-card-\"+task.id;\n    let title = document.createElement('h1');\n    title.classList = 'task-title';\n    title.textContent = task.title;\n    let description = document.createElement('div');\n    description.classList = 'task-description';\n    description.textContent = task.description;\n    let complete_button = document.createElement('button');\n    complete_button.classList = \"complete-button\";\n    complete_button.textContent = \"Complete\";\n    complete_button.addEventListener('click', _controller_controller_js__WEBPACK_IMPORTED_MODULE_0__.completeButtonHandler);\n    node.appendChild(title);\n    node.appendChild(description);\n    node.appendChild(complete_button);\n    document.querySelector('body').appendChild(node);\n}\nconst hideTimeline = (timeline) => {\n\n}\nconst hideTask = (task) => {\n\n}\n\n\n//# sourceURL=webpack://todo-list/./src/view/display.js?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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