/******/ (() => {
    // webpackBootstrap
    /******/ 'use strict';
    /******/ var __webpack_modules__ = {
        /***/ './node_modules/css-loader/dist/cjs.js!./src/style.css':
            /*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
            /***/ (module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ default: () =>
                            __WEBPACK_DEFAULT_EXPORT__,
                        /* harmony export */
                    }
                );
                /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ './node_modules/css-loader/dist/runtime/sourceMaps.js'
                    );
                /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
                    /*#__PURE__*/ __webpack_require__.n(
                        _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
                    );
                /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        /*! ../node_modules/css-loader/dist/runtime/api.js */ './node_modules/css-loader/dist/runtime/api.js'
                    );
                /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default =
                    /*#__PURE__*/ __webpack_require__.n(
                        _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
                    );
                // Imports

                var ___CSS_LOADER_EXPORT___ =
                    _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(
                        _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
                    );
                // Module
                ___CSS_LOADER_EXPORT___.push([
                    module.id,
                    `* {
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    box-sizing: border-box;
}

body {
    padding: 0;
    margin: 0;
    height: 100vh;
    display: grid;
    grid-template-columns: minmax(150px, 275px) 1fr;
    grid-template-rows: 1fr;
}

.todo-nav {
    display: grid;
    grid-template-rows: auto 1fr auto;
    background-color: #d3d3d3;
    padding: 1.5em 2em;
}

.nav-logo {
    color: #5b5b5b;
    font-size: 3rem;
    font-weight: 700;
}

.nav-tabs {
    padding: 0;
    margin: 0;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 1em;
}

.tab-item {
    padding: 0.5em;
    margin: 0;
    text-align: center;
    font-size: 1.1em;
    text-transform: uppercase;
    cursor: pointer;
    background-color: #c1c1c1;
    user-select: none;
}

.tab-active {
    background-color: #939393;
}

.todo-main {
    background-color: white;
    display: grid;
    grid-template-rows: 1fr;
}

.todo-container {
    padding: 1.5em 2em;
    list-style-type: disc;
}

.task-item {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.item-title {
    margin: 0.3em 0;
    font-size: 1.2rem;
    cursor: pointer;
}

.item-info {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.item-remove-btn {
    max-width: 15ch;
}

.info-item {}

.info-title {}

.info-data {
    text-decoration: none;
    font-weight: 700;
}

.info-desc {}

.app-modal {
    border: none;
    border-radius: 6px;
    box-shadow: 0 0 1em rgb(0 0 0 / 0.3);
}

#modal-add-task {}

#new-task-form {
    display: flex;
    flex-direction: column;
    gap: 1em;
}

#modal-add-group {}

.form-input {
    display: flex;
    flex-direction: column;
    gap: 0.1em;
}

.form-input-field {}

.modal-controls {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.8em;
}

.action-btn {
    padding: 0.5em;
    color: rgb(255 255 255);
    border: none;
    border-radius: 6px;
    background-color: rgb(0 0 0);
    text-transform: uppercase;
    font-weight: 600;
}

.action-btn:hover {
    color: rgb(0 0 0);
    background-color: #d3d3d3;
    cursor: pointer;
}

.nav-controls {
    width: 100%;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.controls-btn {
    padding: 0.7em;
    color: #fff;
    background-color: #000;
    border: none;
    border-radius: 4px;
}

#new-group-form {
    display: flex;
    flex-direction: column;
    gap: 1em;
}`,
                    '',
                    {
                        version: 3,
                        sources: ['webpack://./src/style.css'],
                        names: [],
                        mappings:
                            'AAAA;IACI,mDAAmD;IACnD,sBAAsB;AAC1B;;AAEA;IACI,UAAU;IACV,SAAS;IACT,aAAa;IACb,aAAa;IACb,+CAA+C;IAC/C,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,iCAAiC;IACjC,yBAAyB;IACzB,kBAAkB;AACtB;;AAEA;IACI,cAAc;IACd,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,UAAU;IACV,SAAS;IACT,qBAAqB;IACrB,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ;;AAEA;IACI,cAAc;IACd,SAAS;IACT,kBAAkB;IAClB,gBAAgB;IAChB,yBAAyB;IACzB,eAAe;IACf,yBAAyB;IACzB,iBAAiB;AACrB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,uBAAuB;IACvB,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;IAClB,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ;;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,qBAAqB;IACrB,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,eAAe;AACnB;;AAEA,YAAY;;AAEZ,aAAa;;AAEb;IACI,qBAAqB;IACrB,gBAAgB;AACpB;;AAEA,YAAY;;AAEZ;IACI,YAAY;IACZ,kBAAkB;IAClB,oCAAoC;AACxC;;AAEA,iBAAiB;;AAEjB;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ;;AAEA,kBAAkB;;AAElB;IACI,aAAa;IACb,sBAAsB;IACtB,UAAU;AACd;;AAEA,mBAAmB;;AAEnB;IACI,aAAa;IACb,8BAA8B;IAC9B,UAAU;AACd;;AAEA;IACI,cAAc;IACd,uBAAuB;IACvB,YAAY;IACZ,kBAAkB;IAClB,4BAA4B;IAC5B,yBAAyB;IACzB,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,yBAAyB;IACzB,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,SAAS;IACT,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,WAAW;IACX,sBAAsB;IACtB,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ',
                        sourcesContent: [
                            "* {\n    font-family: 'Roboto', Arial, Helvetica, sans-serif;\n    box-sizing: border-box;\n}\n\nbody {\n    padding: 0;\n    margin: 0;\n    height: 100vh;\n    display: grid;\n    grid-template-columns: minmax(150px, 275px) 1fr;\n    grid-template-rows: 1fr;\n}\n\n.todo-nav {\n    display: grid;\n    grid-template-rows: auto 1fr auto;\n    background-color: #d3d3d3;\n    padding: 1.5em 2em;\n}\n\n.nav-logo {\n    color: #5b5b5b;\n    font-size: 3rem;\n    font-weight: 700;\n}\n\n.nav-tabs {\n    padding: 0;\n    margin: 0;\n    list-style-type: none;\n    display: flex;\n    flex-direction: column;\n    gap: 1em;\n}\n\n.tab-item {\n    padding: 0.5em;\n    margin: 0;\n    text-align: center;\n    font-size: 1.1em;\n    text-transform: uppercase;\n    cursor: pointer;\n    background-color: #c1c1c1;\n    user-select: none;\n}\n\n.tab-active {\n    background-color: #939393;\n}\n\n.todo-main {\n    background-color: white;\n    display: grid;\n    grid-template-rows: 1fr;\n}\n\n.todo-container {\n    padding: 1.5em 2em;\n    list-style-type: disc;\n}\n\n.task-item {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n}\n\n.item-title {\n    margin: 0.3em 0;\n    font-size: 1.2rem;\n    cursor: pointer;\n}\n\n.item-info {\n    list-style-type: none;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.item-remove-btn {\n    max-width: 15ch;\n}\n\n.info-item {}\n\n.info-title {}\n\n.info-data {\n    text-decoration: none;\n    font-weight: 700;\n}\n\n.info-desc {}\n\n.app-modal {\n    border: none;\n    border-radius: 6px;\n    box-shadow: 0 0 1em rgb(0 0 0 / 0.3);\n}\n\n#modal-add-task {}\n\n#new-task-form {\n    display: flex;\n    flex-direction: column;\n    gap: 1em;\n}\n\n#modal-add-group {}\n\n.form-input {\n    display: flex;\n    flex-direction: column;\n    gap: 0.1em;\n}\n\n.form-input-field {}\n\n.modal-controls {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 0.8em;\n}\n\n.action-btn {\n    padding: 0.5em;\n    color: rgb(255 255 255);\n    border: none;\n    border-radius: 6px;\n    background-color: rgb(0 0 0);\n    text-transform: uppercase;\n    font-weight: 600;\n}\n\n.action-btn:hover {\n    color: rgb(0 0 0);\n    background-color: #d3d3d3;\n    cursor: pointer;\n}\n\n.nav-controls {\n    width: 100%;\n    bottom: 0;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.controls-btn {\n    padding: 0.7em;\n    color: #fff;\n    background-color: #000;\n    border: none;\n    border-radius: 4px;\n}\n\n#new-group-form {\n    display: flex;\n    flex-direction: column;\n    gap: 1em;\n}",
                        ],
                        sourceRoot: '',
                    },
                ]);
                // Exports
                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
                    ___CSS_LOADER_EXPORT___;

                /***/
            },

        /***/ './node_modules/css-loader/dist/runtime/api.js':
            /*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
            /***/ (module) => {
                /*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
                module.exports = function (cssWithMappingToString) {
                    var list = [];

                    // return the list of modules as css string
                    list.toString = function toString() {
                        return this.map(function (item) {
                            var content = '';
                            var needLayer = typeof item[5] !== 'undefined';
                            if (item[4]) {
                                content += '@supports ('.concat(item[4], ') {');
                            }
                            if (item[2]) {
                                content += '@media '.concat(item[2], ' {');
                            }
                            if (needLayer) {
                                content += '@layer'.concat(
                                    item[5].length > 0
                                        ? ' '.concat(item[5])
                                        : '',
                                    ' {'
                                );
                            }
                            content += cssWithMappingToString(item);
                            if (needLayer) {
                                content += '}';
                            }
                            if (item[2]) {
                                content += '}';
                            }
                            if (item[4]) {
                                content += '}';
                            }
                            return content;
                        }).join('');
                    };

                    // import a list of modules into the list
                    list.i = function i(
                        modules,
                        media,
                        dedupe,
                        supports,
                        layer
                    ) {
                        if (typeof modules === 'string') {
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
                            if (typeof layer !== 'undefined') {
                                if (typeof item[5] === 'undefined') {
                                    item[5] = layer;
                                } else {
                                    item[1] = '@layer'
                                        .concat(
                                            item[5].length > 0
                                                ? ' '.concat(item[5])
                                                : '',
                                            ' {'
                                        )
                                        .concat(item[1], '}');
                                    item[5] = layer;
                                }
                            }
                            if (media) {
                                if (!item[2]) {
                                    item[2] = media;
                                } else {
                                    item[1] = '@media '
                                        .concat(item[2], ' {')
                                        .concat(item[1], '}');
                                    item[2] = media;
                                }
                            }
                            if (supports) {
                                if (!item[4]) {
                                    item[4] = ''.concat(supports);
                                } else {
                                    item[1] = '@supports ('
                                        .concat(item[4], ') {')
                                        .concat(item[1], '}');
                                    item[4] = supports;
                                }
                            }
                            list.push(item);
                        }
                    };
                    return list;
                };

                /***/
            },

        /***/ './node_modules/css-loader/dist/runtime/sourceMaps.js':
            /*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
            /***/ (module) => {
                module.exports = function (item) {
                    var content = item[1];
                    var cssMapping = item[3];
                    if (!cssMapping) {
                        return content;
                    }
                    if (typeof btoa === 'function') {
                        var base64 = btoa(
                            unescape(
                                encodeURIComponent(JSON.stringify(cssMapping))
                            )
                        );
                        var data =
                            'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                                base64
                            );
                        var sourceMapping = '/*# '.concat(data, ' */');
                        return [content].concat([sourceMapping]).join('\n');
                    }
                    return [content].join('\n');
                };

                /***/
            },

        /***/ './node_modules/date-fns/esm/_lib/assign/index.js':
            /*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/assign/index.js ***!
  \********************************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ default: () =>
                            /* binding */ assign,
                        /* harmony export */
                    }
                );
                function assign(target, object) {
                    if (target == null) {
                        throw new TypeError(
                            'assign requires that input parameter not be null or undefined'
                        );
                    }
                    for (var property in object) {
                        if (
                            Object.prototype.hasOwnProperty.call(
                                object,
                                property
                            )
                        ) {
                            target[property] = object[property];
                        }
                    }
                    return target;
                }

                /***/
            },

        /***/ './node_modules/date-fns/esm/_lib/cloneObject/index.js':
            /*!*************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/cloneObject/index.js ***!
  \*************************************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ default: () =>
                            /* binding */ cloneObject,
                        /* harmony export */
                    }
                );
                /* harmony import */ var _assign_index_js__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! ../assign/index.js */ './node_modules/date-fns/esm/_lib/assign/index.js'
                    );

                function cloneObject(object) {
                    return (0,
                    _assign_index_js__WEBPACK_IMPORTED_MODULE_0__['default'])(
                        {},
                        object
                    );
                }

                /***/
            },

        /***/ './node_modules/date-fns/esm/_lib/defaultLocale/index.js':
            /*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultLocale/index.js ***!
  \***************************************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ default: () =>
                            __WEBPACK_DEFAULT_EXPORT__,
                        /* harmony export */
                    }
                );
                /* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! ../../locale/en-US/index.js */ './node_modules/date-fns/esm/locale/en-US/index.js'
                    );

                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
                    _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__[
                        'default'
                    ];

                /***/
            },

        /***/ './node_modules/date-fns/esm/_lib/defaultOptions/index.js':
            /*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ getDefaultOptions: () =>
                            /* binding */ getDefaultOptions,
                        /* harmony export */ setDefaultOptions: () =>
                            /* binding */ setDefaultOptions,
                        /* harmony export */
                    }
                );
                var defaultOptions = {};
                function getDefaultOptions() {
                    return defaultOptions;
                }
                function setDefaultOptions(newOptions) {
                    defaultOptions = newOptions;
                }

                /***/
            },

        /***/ './node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js':
            /*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ default: () =>
                            /* binding */ getTimezoneOffsetInMilliseconds,
                        /* harmony export */
                    }
                );
                /**
                 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
                 * They usually appear for dates that denote time before the timezones were introduced
                 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
                 * and GMT+01:00:00 after that date)
                 *
                 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
                 * which would lead to incorrect calculations.
                 *
                 * This function returns the timezone offset in milliseconds that takes seconds in account.
                 */
                function getTimezoneOffsetInMilliseconds(date) {
                    var utcDate = new Date(
                        Date.UTC(
                            date.getFullYear(),
                            date.getMonth(),
                            date.getDate(),
                            date.getHours(),
                            date.getMinutes(),
                            date.getSeconds(),
                            date.getMilliseconds()
                        )
                    );
                    utcDate.setUTCFullYear(date.getFullYear());
                    return date.getTime() - utcDate.getTime();
                }

                /***/
            },

        /***/ './node_modules/date-fns/esm/_lib/requiredArgs/index.js':
            /*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ default: () =>
                            /* binding */ requiredArgs,
                        /* harmony export */
                    }
                );
                function requiredArgs(required, args) {
                    if (args.length < required) {
                        throw new TypeError(
                            required +
                                ' argument' +
                                (required > 1 ? 's' : '') +
                                ' required, but only ' +
                                args.length +
                                ' present'
                        );
                    }
                }

                /***/
            },

        /***/ './node_modules/date-fns/esm/_lib/roundingMethods/index.js':
            /*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/roundingMethods/index.js ***!
  \*****************************************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ getRoundingMethod: () =>
                            /* binding */ getRoundingMethod,
                        /* harmony export */
                    }
                );
                var roundingMap = {
                    ceil: Math.ceil,
                    round: Math.round,
                    floor: Math.floor,
                    trunc: function trunc(value) {
                        return value < 0 ? Math.ceil(value) : Math.floor(value);
                    }, // Math.trunc is not supported by IE
                };

                var defaultRoundingMethod = 'trunc';
                function getRoundingMethod(method) {
                    return method
                        ? roundingMap[method]
                        : roundingMap[defaultRoundingMethod];
                }

                /***/
            },

        /***/ './node_modules/date-fns/esm/compareAsc/index.js':
            /*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/compareAsc/index.js ***!
  \*******************************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ default: () =>
                            /* binding */ compareAsc,
                        /* harmony export */
                    }
                );
                /* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        /*! ../toDate/index.js */ './node_modules/date-fns/esm/toDate/index.js'
                    );
                /* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! ../_lib/requiredArgs/index.js */ './node_modules/date-fns/esm/_lib/requiredArgs/index.js'
                    );

                /**
                 * @name compareAsc
                 * @category Common Helpers
                 * @summary Compare the two dates and return -1, 0 or 1.
                 *
                 * @description
                 * Compare the two dates and return 1 if the first date is after the second,
                 * -1 if the first date is before the second or 0 if dates are equal.
                 *
                 * @param {Date|Number} dateLeft - the first date to compare
                 * @param {Date|Number} dateRight - the second date to compare
                 * @returns {Number} the result of the comparison
                 * @throws {TypeError} 2 arguments required
                 *
                 * @example
                 * // Compare 11 February 1987 and 10 July 1989:
                 * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
                 * //=> -1
                 *
                 * @example
                 * // Sort the array of dates:
                 * const result = [
                 *   new Date(1995, 6, 2),
                 *   new Date(1987, 1, 11),
                 *   new Date(1989, 6, 10)
                 * ].sort(compareAsc)
                 * //=> [
                 * //   Wed Feb 11 1987 00:00:00,
                 * //   Mon Jul 10 1989 00:00:00,
                 * //   Sun Jul 02 1995 00:00:00
                 * // ]
                 */
                function compareAsc(dirtyDateLeft, dirtyDateRight) {
                    (0,
                    _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[
                        'default'
                    ])(2, arguments);
                    var dateLeft = (0,
                    _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__['default'])(
                        dirtyDateLeft
                    );
                    var dateRight = (0,
                    _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__['default'])(
                        dirtyDateRight
                    );
                    var diff = dateLeft.getTime() - dateRight.getTime();
                    if (diff < 0) {
                        return -1;
                    } else if (diff > 0) {
                        return 1;
                        // Return 0 if diff is 0; return NaN if diff is NaN
                    } else {
                        return diff;
                    }
                }

                /***/
            },

        /***/ './node_modules/date-fns/esm/differenceInCalendarMonths/index.js':
            /*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInCalendarMonths/index.js ***!
  \***********************************************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ default: () =>
                            /* binding */ differenceInCalendarMonths,
                        /* harmony export */
                    }
                );
                /* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        /*! ../toDate/index.js */ './node_modules/date-fns/esm/toDate/index.js'
                    );
                /* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! ../_lib/requiredArgs/index.js */ './node_modules/date-fns/esm/_lib/requiredArgs/index.js'
                    );

                /**
                 * @name differenceInCalendarMonths
                 * @category Month Helpers
                 * @summary Get the number of calendar months between the given dates.
                 *
                 * @description
                 * Get the number of calendar months between the given dates.
                 *
                 * @param {Date|Number} dateLeft - the later date
                 * @param {Date|Number} dateRight - the earlier date
                 * @returns {Number} the number of calendar months
                 * @throws {TypeError} 2 arguments required
                 *
                 * @example
                 * // How many calendar months are between 31 January 2014 and 1 September 2014?
                 * const result = differenceInCalendarMonths(
                 *   new Date(2014, 8, 1),
                 *   new Date(2014, 0, 31)
                 * )
                 * //=> 8
                 */
                function differenceInCalendarMonths(
                    dirtyDateLeft,
                    dirtyDateRight
                ) {
                    (0,
                    _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[
                        'default'
                    ])(2, arguments);
                    var dateLeft = (0,
                    _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__['default'])(
                        dirtyDateLeft
                    );
                    var dateRight = (0,
                    _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__['default'])(
                        dirtyDateRight
                    );
                    var yearDiff =
                        dateLeft.getFullYear() - dateRight.getFullYear();
                    var monthDiff = dateLeft.getMonth() - dateRight.getMonth();
                    return yearDiff * 12 + monthDiff;
                }

                /***/
            },

        /***/ './node_modules/date-fns/esm/differenceInMilliseconds/index.js':
            /*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInMilliseconds/index.js ***!
  \*********************************************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ default: () =>
                            /* binding */ differenceInMilliseconds,
                        /* harmony export */
                    }
                );
                /* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        /*! ../toDate/index.js */ './node_modules/date-fns/esm/toDate/index.js'
                    );
                /* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! ../_lib/requiredArgs/index.js */ './node_modules/date-fns/esm/_lib/requiredArgs/index.js'
                    );

                /**
                 * @name differenceInMilliseconds
                 * @category Millisecond Helpers
                 * @summary Get the number of milliseconds between the given dates.
                 *
                 * @description
                 * Get the number of milliseconds between the given dates.
                 *
                 * @param {Date|Number} dateLeft - the later date
                 * @param {Date|Number} dateRight - the earlier date
                 * @returns {Number} the number of milliseconds
                 * @throws {TypeError} 2 arguments required
                 *
                 * @example
                 * // How many milliseconds are between
                 * // 2 July 2014 12:30:20.600 and 2 July 2014 12:30:21.700?
                 * const result = differenceInMilliseconds(
                 *   new Date(2014, 6, 2, 12, 30, 21, 700),
                 *   new Date(2014, 6, 2, 12, 30, 20, 600)
                 * )
                 * //=> 1100
                 */
                function differenceInMilliseconds(dateLeft, dateRight) {
                    (0,
                    _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[
                        'default'
                    ])(2, arguments);
                    return (
                        (0,
                        _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[
                            'default'
                        ])(dateLeft).getTime() -
                        (0,
                        _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[
                            'default'
                        ])(dateRight).getTime()
                    );
                }

                /***/
            },

        /***/ './node_modules/date-fns/esm/differenceInMonths/index.js':
            /*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInMonths/index.js ***!
  \***************************************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ default: () =>
                            /* binding */ differenceInMonths,
                        /* harmony export */
                    }
                );
                /* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        /*! ../toDate/index.js */ './node_modules/date-fns/esm/toDate/index.js'
                    );
                /* harmony import */ var _differenceInCalendarMonths_index_js__WEBPACK_IMPORTED_MODULE_3__ =
                    __webpack_require__(
                        /*! ../differenceInCalendarMonths/index.js */ './node_modules/date-fns/esm/differenceInCalendarMonths/index.js'
                    );
                /* harmony import */ var _compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        /*! ../compareAsc/index.js */ './node_modules/date-fns/esm/compareAsc/index.js'
                    );
                /* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! ../_lib/requiredArgs/index.js */ './node_modules/date-fns/esm/_lib/requiredArgs/index.js'
                    );
                /* harmony import */ var _isLastDayOfMonth_index_js__WEBPACK_IMPORTED_MODULE_4__ =
                    __webpack_require__(
                        /*! ../isLastDayOfMonth/index.js */ './node_modules/date-fns/esm/isLastDayOfMonth/index.js'
                    );

                /**
                 * @name differenceInMonths
                 * @category Month Helpers
                 * @summary Get the number of full months between the given dates.
                 *
                 * @description
                 * Get the number of full months between the given dates using trunc as a default rounding method.
                 *
                 * @param {Date|Number} dateLeft - the later date
                 * @param {Date|Number} dateRight - the earlier date
                 * @returns {Number} the number of full months
                 * @throws {TypeError} 2 arguments required
                 *
                 * @example
                 * // How many full months are between 31 January 2014 and 1 September 2014?
                 * const result = differenceInMonths(new Date(2014, 8, 1), new Date(2014, 0, 31))
                 * //=> 7
                 */
                function differenceInMonths(dirtyDateLeft, dirtyDateRight) {
                    (0,
                    _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[
                        'default'
                    ])(2, arguments);
                    var dateLeft = (0,
                    _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__['default'])(
                        dirtyDateLeft
                    );
                    var dateRight = (0,
                    _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__['default'])(
                        dirtyDateRight
                    );
                    var sign = (0,
                    _compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__[
                        'default'
                    ])(dateLeft, dateRight);
                    var difference = Math.abs(
                        (0,
                        _differenceInCalendarMonths_index_js__WEBPACK_IMPORTED_MODULE_3__[
                            'default'
                        ])(dateLeft, dateRight)
                    );
                    var result;

                    // Check for the difference of less than month
                    if (difference < 1) {
                        result = 0;
                    } else {
                        if (
                            dateLeft.getMonth() === 1 &&
                            dateLeft.getDate() > 27
                        ) {
                            // This will check if the date is end of Feb and assign a higher end of month date
                            // to compare it with Jan
                            dateLeft.setDate(30);
                        }
                        dateLeft.setMonth(
                            dateLeft.getMonth() - sign * difference
                        );

                        // Math.abs(diff in full months - diff in calendar months) === 1 if last calendar month is not full
                        // If so, result must be decreased by 1 in absolute value
                        var isLastMonthNotFull =
                            (0,
                            _compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__[
                                'default'
                            ])(dateLeft, dateRight) === -sign;

                        // Check for cases of one full calendar month
                        if (
                            (0,
                            _isLastDayOfMonth_index_js__WEBPACK_IMPORTED_MODULE_4__[
                                'default'
                            ])(
                                (0,
                                _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[
                                    'default'
                                ])(dirtyDateLeft)
                            ) &&
                            difference === 1 &&
                            (0,
                            _compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__[
                                'default'
                            ])(dirtyDateLeft, dateRight) === 1
                        ) {
                            isLastMonthNotFull = false;
                        }
                        result =
                            sign * (difference - Number(isLastMonthNotFull));
                    }

                    // Prevent negative zero
                    return result === 0 ? 0 : result;
                }

                /***/
            },

        /***/ './node_modules/date-fns/esm/differenceInSeconds/index.js':
            /*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInSeconds/index.js ***!
  \****************************************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ default: () =>
                            /* binding */ differenceInSeconds,
                        /* harmony export */
                    }
                );
                /* harmony import */ var _differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        /*! ../differenceInMilliseconds/index.js */ './node_modules/date-fns/esm/differenceInMilliseconds/index.js'
                    );
                /* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! ../_lib/requiredArgs/index.js */ './node_modules/date-fns/esm/_lib/requiredArgs/index.js'
                    );
                /* harmony import */ var _lib_roundingMethods_index_js__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        /*! ../_lib/roundingMethods/index.js */ './node_modules/date-fns/esm/_lib/roundingMethods/index.js'
                    );

                /**
                 * @name differenceInSeconds
                 * @category Second Helpers
                 * @summary Get the number of seconds between the given dates.
                 *
                 * @description
                 * Get the number of seconds between the given dates.
                 *
                 * @param {Date|Number} dateLeft - the later date
                 * @param {Date|Number} dateRight - the earlier date
                 * @param {Object} [options] - an object with options.
                 * @param {String} [options.roundingMethod='trunc'] - a rounding method (`ceil`, `floor`, `round` or `trunc`)
                 * @returns {Number} the number of seconds
                 * @throws {TypeError} 2 arguments required
                 *
                 * @example
                 * // How many seconds are between
                 * // 2 July 2014 12:30:07.999 and 2 July 2014 12:30:20.000?
                 * const result = differenceInSeconds(
                 *   new Date(2014, 6, 2, 12, 30, 20, 0),
                 *   new Date(2014, 6, 2, 12, 30, 7, 999)
                 * )
                 * //=> 12
                 */
                function differenceInSeconds(dateLeft, dateRight, options) {
                    (0,
                    _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[
                        'default'
                    ])(2, arguments);
                    var diff =
                        (0,
                        _differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__[
                            'default'
                        ])(dateLeft, dateRight) / 1000;
                    return (0,
                    _lib_roundingMethods_index_js__WEBPACK_IMPORTED_MODULE_2__.getRoundingMethod)(
                        options === null || options === void 0
                            ? void 0
                            : options.roundingMethod
                    )(diff);
                }

                /***/
            },

        /***/ './node_modules/date-fns/esm/endOfDay/index.js':
            /*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfDay/index.js ***!
  \*****************************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ default: () =>
                            /* binding */ endOfDay,
                        /* harmony export */
                    }
                );
                /* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        /*! ../toDate/index.js */ './node_modules/date-fns/esm/toDate/index.js'
                    );
                /* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! ../_lib/requiredArgs/index.js */ './node_modules/date-fns/esm/_lib/requiredArgs/index.js'
                    );

                /**
                 * @name endOfDay
                 * @category Day Helpers
                 * @summary Return the end of a day for the given date.
                 *
                 * @description
                 * Return the end of a day for the given date.
                 * The result will be in the local timezone.
                 *
                 * @param {Date|Number} date - the original date
                 * @returns {Date} the end of a day
                 * @throws {TypeError} 1 argument required
                 *
                 * @example
                 * // The end of a day for 2 September 2014 11:55:00:
                 * const result = endOfDay(new Date(2014, 8, 2, 11, 55, 0))
                 * //=> Tue Sep 02 2014 23:59:59.999
                 */
                function endOfDay(dirtyDate) {
                    (0,
                    _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[
                        'default'
                    ])(1, arguments);
                    var date = (0,
                    _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__['default'])(
                        dirtyDate
                    );
                    date.setHours(23, 59, 59, 999);
                    return date;
                }

                /***/
            },

        /***/ './node_modules/date-fns/esm/endOfMonth/index.js':
            /*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfMonth/index.js ***!
  \*******************************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ default: () =>
                            /* binding */ endOfMonth,
                        /* harmony export */
                    }
                );
                /* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        /*! ../toDate/index.js */ './node_modules/date-fns/esm/toDate/index.js'
                    );
                /* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! ../_lib/requiredArgs/index.js */ './node_modules/date-fns/esm/_lib/requiredArgs/index.js'
                    );

                /**
                 * @name endOfMonth
                 * @category Month Helpers
                 * @summary Return the end of a month for the given date.
                 *
                 * @description
                 * Return the end of a month for the given date.
                 * The result will be in the local timezone.
                 *
                 * @param {Date|Number} date - the original date
                 * @returns {Date} the end of a month
                 * @throws {TypeError} 1 argument required
                 *
                 * @example
                 * // The end of a month for 2 September 2014 11:55:00:
                 * const result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
                 * //=> Tue Sep 30 2014 23:59:59.999
                 */
                function endOfMonth(dirtyDate) {
                    (0,
                    _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[
                        'default'
                    ])(1, arguments);
                    var date = (0,
                    _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__['default'])(
                        dirtyDate
                    );
                    var month = date.getMonth();
                    date.setFullYear(date.getFullYear(), month + 1, 0);
                    date.setHours(23, 59, 59, 999);
                    return date;
                }

                /***/
            },

        /***/ './node_modules/date-fns/esm/formatDistance/index.js':
            /*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/formatDistance/index.js ***!
  \***********************************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ default: () =>
                            /* binding */ formatDistance,
                        /* harmony export */
                    }
                );
                /* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        /*! ../_lib/defaultOptions/index.js */ './node_modules/date-fns/esm/_lib/defaultOptions/index.js'
                    );
                /* harmony import */ var _compareAsc_index_js__WEBPACK_IMPORTED_MODULE_3__ =
                    __webpack_require__(
                        /*! ../compareAsc/index.js */ './node_modules/date-fns/esm/compareAsc/index.js'
                    );
                /* harmony import */ var _differenceInMonths_index_js__WEBPACK_IMPORTED_MODULE_9__ =
                    __webpack_require__(
                        /*! ../differenceInMonths/index.js */ './node_modules/date-fns/esm/differenceInMonths/index.js'
                    );
                /* harmony import */ var _differenceInSeconds_index_js__WEBPACK_IMPORTED_MODULE_7__ =
                    __webpack_require__(
                        /*! ../differenceInSeconds/index.js */ './node_modules/date-fns/esm/differenceInSeconds/index.js'
                    );
                /* harmony import */ var _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        /*! ../_lib/defaultLocale/index.js */ './node_modules/date-fns/esm/_lib/defaultLocale/index.js'
                    );
                /* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_6__ =
                    __webpack_require__(
                        /*! ../toDate/index.js */ './node_modules/date-fns/esm/toDate/index.js'
                    );
                /* harmony import */ var _lib_cloneObject_index_js__WEBPACK_IMPORTED_MODULE_5__ =
                    __webpack_require__(
                        /*! ../_lib/cloneObject/index.js */ './node_modules/date-fns/esm/_lib/cloneObject/index.js'
                    );
                /* harmony import */ var _lib_assign_index_js__WEBPACK_IMPORTED_MODULE_4__ =
                    __webpack_require__(
                        /*! ../_lib/assign/index.js */ './node_modules/date-fns/esm/_lib/assign/index.js'
                    );
                /* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_8__ =
                    __webpack_require__(
                        /*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ './node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js'
                    );
                /* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! ../_lib/requiredArgs/index.js */ './node_modules/date-fns/esm/_lib/requiredArgs/index.js'
                    );

                var MINUTES_IN_DAY = 1440;
                var MINUTES_IN_ALMOST_TWO_DAYS = 2520;
                var MINUTES_IN_MONTH = 43200;
                var MINUTES_IN_TWO_MONTHS = 86400;

                /**
                 * @name formatDistance
                 * @category Common Helpers
                 * @summary Return the distance between the given dates in words.
                 *
                 * @description
                 * Return the distance between the given dates in words.
                 *
                 * | Distance between dates                                            | Result              |
                 * |-------------------------------------------------------------------|---------------------|
                 * | 0 ... 30 secs                                                     | less than a minute  |
                 * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
                 * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
                 * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
                 * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
                 * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
                 * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
                 * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
                 * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
                 * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
                 * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
                 * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
                 * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
                 * | N yrs ... N yrs 3 months                                          | about N years       |
                 * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
                 * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
                 *
                 * With `options.includeSeconds == true`:
                 * | Distance between dates | Result               |
                 * |------------------------|----------------------|
                 * | 0 secs ... 5 secs      | less than 5 seconds  |
                 * | 5 secs ... 10 secs     | less than 10 seconds |
                 * | 10 secs ... 20 secs    | less than 20 seconds |
                 * | 20 secs ... 40 secs    | half a minute        |
                 * | 40 secs ... 60 secs    | less than a minute   |
                 * | 60 secs ... 90 secs    | 1 minute             |
                 *
                 * @param {Date|Number} date - the date
                 * @param {Date|Number} baseDate - the date to compare with
                 * @param {Object} [options] - an object with options.
                 * @param {Boolean} [options.includeSeconds=false] - distances less than a minute are more detailed
                 * @param {Boolean} [options.addSuffix=false] - result indicates if the second date is earlier or later than the first
                 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
                 * @returns {String} the distance in words
                 * @throws {TypeError} 2 arguments required
                 * @throws {RangeError} `date` must not be Invalid Date
                 * @throws {RangeError} `baseDate` must not be Invalid Date
                 * @throws {RangeError} `options.locale` must contain `formatDistance` property
                 *
                 * @example
                 * // What is the distance between 2 July 2014 and 1 January 2015?
                 * const result = formatDistance(new Date(2014, 6, 2), new Date(2015, 0, 1))
                 * //=> '6 months'
                 *
                 * @example
                 * // What is the distance between 1 January 2015 00:00:15
                 * // and 1 January 2015 00:00:00, including seconds?
                 * const result = formatDistance(
                 *   new Date(2015, 0, 1, 0, 0, 15),
                 *   new Date(2015, 0, 1, 0, 0, 0),
                 *   { includeSeconds: true }
                 * )
                 * //=> 'less than 20 seconds'
                 *
                 * @example
                 * // What is the distance from 1 January 2016
                 * // to 1 January 2015, with a suffix?
                 * const result = formatDistance(new Date(2015, 0, 1), new Date(2016, 0, 1), {
                 *   addSuffix: true
                 * })
                 * //=> 'about 1 year ago'
                 *
                 * @example
                 * // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?
                 * import { eoLocale } from 'date-fns/locale/eo'
                 * const result = formatDistance(new Date(2016, 7, 1), new Date(2015, 0, 1), {
                 *   locale: eoLocale
                 * })
                 * //=> 'pli ol 1 jaro'
                 */

                function formatDistance(dirtyDate, dirtyBaseDate, options) {
                    var _ref, _options$locale;
                    (0,
                    _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[
                        'default'
                    ])(2, arguments);
                    var defaultOptions = (0,
                    _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
                    var locale =
                        (_ref =
                            (_options$locale =
                                options === null || options === void 0
                                    ? void 0
                                    : options.locale) !== null &&
                            _options$locale !== void 0
                                ? _options$locale
                                : defaultOptions.locale) !== null &&
                        _ref !== void 0
                            ? _ref
                            : _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__[
                                  'default'
                              ];
                    if (!locale.formatDistance) {
                        throw new RangeError(
                            'locale must contain formatDistance property'
                        );
                    }
                    var comparison = (0,
                    _compareAsc_index_js__WEBPACK_IMPORTED_MODULE_3__[
                        'default'
                    ])(dirtyDate, dirtyBaseDate);
                    if (isNaN(comparison)) {
                        throw new RangeError('Invalid time value');
                    }
                    var localizeOptions = (0,
                    _lib_assign_index_js__WEBPACK_IMPORTED_MODULE_4__[
                        'default'
                    ])(
                        (0,
                        _lib_cloneObject_index_js__WEBPACK_IMPORTED_MODULE_5__[
                            'default'
                        ])(options),
                        {
                            addSuffix: Boolean(
                                options === null || options === void 0
                                    ? void 0
                                    : options.addSuffix
                            ),
                            comparison: comparison,
                        }
                    );
                    var dateLeft;
                    var dateRight;
                    if (comparison > 0) {
                        dateLeft = (0,
                        _toDate_index_js__WEBPACK_IMPORTED_MODULE_6__[
                            'default'
                        ])(dirtyBaseDate);
                        dateRight = (0,
                        _toDate_index_js__WEBPACK_IMPORTED_MODULE_6__[
                            'default'
                        ])(dirtyDate);
                    } else {
                        dateLeft = (0,
                        _toDate_index_js__WEBPACK_IMPORTED_MODULE_6__[
                            'default'
                        ])(dirtyDate);
                        dateRight = (0,
                        _toDate_index_js__WEBPACK_IMPORTED_MODULE_6__[
                            'default'
                        ])(dirtyBaseDate);
                    }
                    var seconds = (0,
                    _differenceInSeconds_index_js__WEBPACK_IMPORTED_MODULE_7__[
                        'default'
                    ])(dateRight, dateLeft);
                    var offsetInSeconds =
                        ((0,
                        _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_8__[
                            'default'
                        ])(dateRight) -
                            (0,
                            _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_8__[
                                'default'
                            ])(dateLeft)) /
                        1000;
                    var minutes = Math.round((seconds - offsetInSeconds) / 60);
                    var months;

                    // 0 up to 2 mins
                    if (minutes < 2) {
                        if (
                            options !== null &&
                            options !== void 0 &&
                            options.includeSeconds
                        ) {
                            if (seconds < 5) {
                                return locale.formatDistance(
                                    'lessThanXSeconds',
                                    5,
                                    localizeOptions
                                );
                            } else if (seconds < 10) {
                                return locale.formatDistance(
                                    'lessThanXSeconds',
                                    10,
                                    localizeOptions
                                );
                            } else if (seconds < 20) {
                                return locale.formatDistance(
                                    'lessThanXSeconds',
                                    20,
                                    localizeOptions
                                );
                            } else if (seconds < 40) {
                                return locale.formatDistance(
                                    'halfAMinute',
                                    0,
                                    localizeOptions
                                );
                            } else if (seconds < 60) {
                                return locale.formatDistance(
                                    'lessThanXMinutes',
                                    1,
                                    localizeOptions
                                );
                            } else {
                                return locale.formatDistance(
                                    'xMinutes',
                                    1,
                                    localizeOptions
                                );
                            }
                        } else {
                            if (minutes === 0) {
                                return locale.formatDistance(
                                    'lessThanXMinutes',
                                    1,
                                    localizeOptions
                                );
                            } else {
                                return locale.formatDistance(
                                    'xMinutes',
                                    minutes,
                                    localizeOptions
                                );
                            }
                        }

                        // 2 mins up to 0.75 hrs
                    } else if (minutes < 45) {
                        return locale.formatDistance(
                            'xMinutes',
                            minutes,
                            localizeOptions
                        );

                        // 0.75 hrs up to 1.5 hrs
                    } else if (minutes < 90) {
                        return locale.formatDistance(
                            'aboutXHours',
                            1,
                            localizeOptions
                        );

                        // 1.5 hrs up to 24 hrs
                    } else if (minutes < MINUTES_IN_DAY) {
                        var hours = Math.round(minutes / 60);
                        return locale.formatDistance(
                            'aboutXHours',
                            hours,
                            localizeOptions
                        );

                        // 1 day up to 1.75 days
                    } else if (minutes < MINUTES_IN_ALMOST_TWO_DAYS) {
                        return locale.formatDistance(
                            'xDays',
                            1,
                            localizeOptions
                        );

                        // 1.75 days up to 30 days
                    } else if (minutes < MINUTES_IN_MONTH) {
                        var days = Math.round(minutes / MINUTES_IN_DAY);
                        return locale.formatDistance(
                            'xDays',
                            days,
                            localizeOptions
                        );

                        // 1 month up to 2 months
                    } else if (minutes < MINUTES_IN_TWO_MONTHS) {
                        months = Math.round(minutes / MINUTES_IN_MONTH);
                        return locale.formatDistance(
                            'aboutXMonths',
                            months,
                            localizeOptions
                        );
                    }
                    months = (0,
                    _differenceInMonths_index_js__WEBPACK_IMPORTED_MODULE_9__[
                        'default'
                    ])(dateRight, dateLeft);

                    // 2 months up to 12 months
                    if (months < 12) {
                        var nearestMonth = Math.round(
                            minutes / MINUTES_IN_MONTH
                        );
                        return locale.formatDistance(
                            'xMonths',
                            nearestMonth,
                            localizeOptions
                        );

                        // 1 year up to max Date
                    } else {
                        var monthsSinceStartOfYear = months % 12;
                        var years = Math.floor(months / 12);

                        // N years up to 1 years 3 months
                        if (monthsSinceStartOfYear < 3) {
                            return locale.formatDistance(
                                'aboutXYears',
                                years,
                                localizeOptions
                            );

                            // N years 3 months up to N years 9 months
                        } else if (monthsSinceStartOfYear < 9) {
                            return locale.formatDistance(
                                'overXYears',
                                years,
                                localizeOptions
                            );

                            // N years 9 months up to N year 12 months
                        } else {
                            return locale.formatDistance(
                                'almostXYears',
                                years + 1,
                                localizeOptions
                            );
                        }
                    }
                }

                /***/
            },

        /***/ './node_modules/date-fns/esm/formatDistanceToNow/index.js':
            /*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/formatDistanceToNow/index.js ***!
  \****************************************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ default: () =>
                            /* binding */ formatDistanceToNow,
                        /* harmony export */
                    }
                );
                /* harmony import */ var _formatDistance_index_js__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        /*! ../formatDistance/index.js */ './node_modules/date-fns/esm/formatDistance/index.js'
                    );
                /* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! ../_lib/requiredArgs/index.js */ './node_modules/date-fns/esm/_lib/requiredArgs/index.js'
                    );

                /**
                 * @name formatDistanceToNow
                 * @category Common Helpers
                 * @summary Return the distance between the given date and now in words.
                 * @pure false
                 *
                 * @description
                 * Return the distance between the given date and now in words.
                 *
                 * | Distance to now                                                   | Result              |
                 * |-------------------------------------------------------------------|---------------------|
                 * | 0 ... 30 secs                                                     | less than a minute  |
                 * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
                 * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
                 * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
                 * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
                 * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
                 * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
                 * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
                 * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
                 * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
                 * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
                 * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
                 * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
                 * | N yrs ... N yrs 3 months                                          | about N years       |
                 * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
                 * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
                 *
                 * With `options.includeSeconds == true`:
                 * | Distance to now     | Result               |
                 * |---------------------|----------------------|
                 * | 0 secs ... 5 secs   | less than 5 seconds  |
                 * | 5 secs ... 10 secs  | less than 10 seconds |
                 * | 10 secs ... 20 secs | less than 20 seconds |
                 * | 20 secs ... 40 secs | half a minute        |
                 * | 40 secs ... 60 secs | less than a minute   |
                 * | 60 secs ... 90 secs | 1 minute             |
                 *
                 * > ⚠️ Please note that this function is not present in the FP submodule as
                 * > it uses `Date.now()` internally hence impure and can't be safely curried.
                 *
                 * @param {Date|Number} date - the given date
                 * @param {Object} [options] - the object with options
                 * @param {Boolean} [options.includeSeconds=false] - distances less than a minute are more detailed
                 * @param {Boolean} [options.addSuffix=false] - result specifies if now is earlier or later than the passed date
                 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
                 * @returns {String} the distance in words
                 * @throws {TypeError} 1 argument required
                 * @throws {RangeError} `date` must not be Invalid Date
                 * @throws {RangeError} `options.locale` must contain `formatDistance` property
                 *
                 * @example
                 * // If today is 1 January 2015, what is the distance to 2 July 2014?
                 * const result = formatDistanceToNow(
                 *   new Date(2014, 6, 2)
                 * )
                 * //=> '6 months'
                 *
                 * @example
                 * // If now is 1 January 2015 00:00:00,
                 * // what is the distance to 1 January 2015 00:00:15, including seconds?
                 * const result = formatDistanceToNow(
                 *   new Date(2015, 0, 1, 0, 0, 15),
                 *   {includeSeconds: true}
                 * )
                 * //=> 'less than 20 seconds'
                 *
                 * @example
                 * // If today is 1 January 2015,
                 * // what is the distance to 1 January 2016, with a suffix?
                 * const result = formatDistanceToNow(
                 *   new Date(2016, 0, 1),
                 *   {addSuffix: true}
                 * )
                 * //=> 'in about 1 year'
                 *
                 * @example
                 * // If today is 1 January 2015,
                 * // what is the distance to 1 August 2016 in Esperanto?
                 * const eoLocale = require('date-fns/locale/eo')
                 * const result = formatDistanceToNow(
                 *   new Date(2016, 7, 1),
                 *   {locale: eoLocale}
                 * )
                 * //=> 'pli ol 1 jaro'
                 */
                function formatDistanceToNow(dirtyDate, options) {
                    (0,
                    _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[
                        'default'
                    ])(1, arguments);
                    return (0,
                    _formatDistance_index_js__WEBPACK_IMPORTED_MODULE_1__[
                        'default'
                    ])(dirtyDate, Date.now(), options);
                }

                /***/
            },

        /***/ './node_modules/date-fns/esm/isLastDayOfMonth/index.js':
            /*!*************************************************************!*\
  !*** ./node_modules/date-fns/esm/isLastDayOfMonth/index.js ***!
  \*************************************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ default: () =>
                            /* binding */ isLastDayOfMonth,
                        /* harmony export */
                    }
                );
                /* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        /*! ../toDate/index.js */ './node_modules/date-fns/esm/toDate/index.js'
                    );
                /* harmony import */ var _endOfDay_index_js__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        /*! ../endOfDay/index.js */ './node_modules/date-fns/esm/endOfDay/index.js'
                    );
                /* harmony import */ var _endOfMonth_index_js__WEBPACK_IMPORTED_MODULE_3__ =
                    __webpack_require__(
                        /*! ../endOfMonth/index.js */ './node_modules/date-fns/esm/endOfMonth/index.js'
                    );
                /* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! ../_lib/requiredArgs/index.js */ './node_modules/date-fns/esm/_lib/requiredArgs/index.js'
                    );

                /**
                 * @name isLastDayOfMonth
                 * @category Month Helpers
                 * @summary Is the given date the last day of a month?
                 *
                 * @description
                 * Is the given date the last day of a month?
                 *
                 * @param {Date|Number} date - the date to check
                 * @returns {Boolean} the date is the last day of a month
                 * @throws {TypeError} 1 argument required
                 *
                 * @example
                 * // Is 28 February 2014 the last day of a month?
                 * const result = isLastDayOfMonth(new Date(2014, 1, 28))
                 * //=> true
                 */
                function isLastDayOfMonth(dirtyDate) {
                    (0,
                    _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[
                        'default'
                    ])(1, arguments);
                    var date = (0,
                    _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__['default'])(
                        dirtyDate
                    );
                    return (
                        (0,
                        _endOfDay_index_js__WEBPACK_IMPORTED_MODULE_2__[
                            'default'
                        ])(date).getTime() ===
                        (0,
                        _endOfMonth_index_js__WEBPACK_IMPORTED_MODULE_3__[
                            'default'
                        ])(date).getTime()
                    );
                }

                /***/
            },

        /***/ './node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js':
            /*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ default: () =>
                            /* binding */ buildFormatLongFn,
                        /* harmony export */
                    }
                );
                function buildFormatLongFn(args) {
                    return function () {
                        var options =
                            arguments.length > 0 && arguments[0] !== undefined
                                ? arguments[0]
                                : {};
                        // TODO: Remove String()
                        var width = options.width
                            ? String(options.width)
                            : args.defaultWidth;
                        var format =
                            args.formats[width] ||
                            args.formats[args.defaultWidth];
                        return format;
                    };
                }

                /***/
            },

        /***/ './node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js':
            /*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ default: () =>
                            /* binding */ buildLocalizeFn,
                        /* harmony export */
                    }
                );
                function buildLocalizeFn(args) {
                    return function (dirtyIndex, options) {
                        var context =
                            options !== null &&
                            options !== void 0 &&
                            options.context
                                ? String(options.context)
                                : 'standalone';
                        var valuesArray;
                        if (context === 'formatting' && args.formattingValues) {
                            var defaultWidth =
                                args.defaultFormattingWidth ||
                                args.defaultWidth;
                            var width =
                                options !== null &&
                                options !== void 0 &&
                                options.width
                                    ? String(options.width)
                                    : defaultWidth;
                            valuesArray =
                                args.formattingValues[width] ||
                                args.formattingValues[defaultWidth];
                        } else {
                            var _defaultWidth = args.defaultWidth;
                            var _width =
                                options !== null &&
                                options !== void 0 &&
                                options.width
                                    ? String(options.width)
                                    : args.defaultWidth;
                            valuesArray =
                                args.values[_width] ||
                                args.values[_defaultWidth];
                        }
                        var index = args.argumentCallback
                            ? args.argumentCallback(dirtyIndex)
                            : dirtyIndex;
                        // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
                        return valuesArray[index];
                    };
                }

                /***/
            },

        /***/ './node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js':
            /*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ default: () =>
                            /* binding */ buildMatchFn,
                        /* harmony export */
                    }
                );
                function buildMatchFn(args) {
                    return function (string) {
                        var options =
                            arguments.length > 1 && arguments[1] !== undefined
                                ? arguments[1]
                                : {};
                        var width = options.width;
                        var matchPattern =
                            (width && args.matchPatterns[width]) ||
                            args.matchPatterns[args.defaultMatchWidth];
                        var matchResult = string.match(matchPattern);
                        if (!matchResult) {
                            return null;
                        }
                        var matchedString = matchResult[0];
                        var parsePatterns =
                            (width && args.parsePatterns[width]) ||
                            args.parsePatterns[args.defaultParseWidth];
                        var key = Array.isArray(parsePatterns)
                            ? findIndex(parsePatterns, function (pattern) {
                                  return pattern.test(matchedString);
                              })
                            : findKey(parsePatterns, function (pattern) {
                                  return pattern.test(matchedString);
                              });
                        var value;
                        value = args.valueCallback
                            ? args.valueCallback(key)
                            : key;
                        value = options.valueCallback
                            ? options.valueCallback(value)
                            : value;
                        var rest = string.slice(matchedString.length);
                        return {
                            value: value,
                            rest: rest,
                        };
                    };
                }
                function findKey(object, predicate) {
                    for (var key in object) {
                        if (
                            object.hasOwnProperty(key) &&
                            predicate(object[key])
                        ) {
                            return key;
                        }
                    }
                    return undefined;
                }
                function findIndex(array, predicate) {
                    for (var key = 0; key < array.length; key++) {
                        if (predicate(array[key])) {
                            return key;
                        }
                    }
                    return undefined;
                }

                /***/
            },

        /***/ './node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js':
            /*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ default: () =>
                            /* binding */ buildMatchPatternFn,
                        /* harmony export */
                    }
                );
                function buildMatchPatternFn(args) {
                    return function (string) {
                        var options =
                            arguments.length > 1 && arguments[1] !== undefined
                                ? arguments[1]
                                : {};
                        var matchResult = string.match(args.matchPattern);
                        if (!matchResult) return null;
                        var matchedString = matchResult[0];
                        var parseResult = string.match(args.parsePattern);
                        if (!parseResult) return null;
                        var value = args.valueCallback
                            ? args.valueCallback(parseResult[0])
                            : parseResult[0];
                        value = options.valueCallback
                            ? options.valueCallback(value)
                            : value;
                        var rest = string.slice(matchedString.length);
                        return {
                            value: value,
                            rest: rest,
                        };
                    };
                }

                /***/
            },

        /***/ './node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js':
            /*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ default: () =>
                            __WEBPACK_DEFAULT_EXPORT__,
                        /* harmony export */
                    }
                );
                var formatDistanceLocale = {
                    lessThanXSeconds: {
                        one: 'less than a second',
                        other: 'less than {{count}} seconds',
                    },
                    xSeconds: {
                        one: '1 second',
                        other: '{{count}} seconds',
                    },
                    halfAMinute: 'half a minute',
                    lessThanXMinutes: {
                        one: 'less than a minute',
                        other: 'less than {{count}} minutes',
                    },
                    xMinutes: {
                        one: '1 minute',
                        other: '{{count}} minutes',
                    },
                    aboutXHours: {
                        one: 'about 1 hour',
                        other: 'about {{count}} hours',
                    },
                    xHours: {
                        one: '1 hour',
                        other: '{{count}} hours',
                    },
                    xDays: {
                        one: '1 day',
                        other: '{{count}} days',
                    },
                    aboutXWeeks: {
                        one: 'about 1 week',
                        other: 'about {{count}} weeks',
                    },
                    xWeeks: {
                        one: '1 week',
                        other: '{{count}} weeks',
                    },
                    aboutXMonths: {
                        one: 'about 1 month',
                        other: 'about {{count}} months',
                    },
                    xMonths: {
                        one: '1 month',
                        other: '{{count}} months',
                    },
                    aboutXYears: {
                        one: 'about 1 year',
                        other: 'about {{count}} years',
                    },
                    xYears: {
                        one: '1 year',
                        other: '{{count}} years',
                    },
                    overXYears: {
                        one: 'over 1 year',
                        other: 'over {{count}} years',
                    },
                    almostXYears: {
                        one: 'almost 1 year',
                        other: 'almost {{count}} years',
                    },
                };
                var formatDistance = function formatDistance(
                    token,
                    count,
                    options
                ) {
                    var result;
                    var tokenValue = formatDistanceLocale[token];
                    if (typeof tokenValue === 'string') {
                        result = tokenValue;
                    } else if (count === 1) {
                        result = tokenValue.one;
                    } else {
                        result = tokenValue.other.replace(
                            '{{count}}',
                            count.toString()
                        );
                    }
                    if (
                        options !== null &&
                        options !== void 0 &&
                        options.addSuffix
                    ) {
                        if (options.comparison && options.comparison > 0) {
                            return 'in ' + result;
                        } else {
                            return result + ' ago';
                        }
                    }
                    return result;
                };
                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
                    formatDistance;

                /***/
            },

        /***/ './node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js':
            /*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ default: () =>
                            __WEBPACK_DEFAULT_EXPORT__,
                        /* harmony export */
                    }
                );
                /* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! ../../../_lib/buildFormatLongFn/index.js */ './node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js'
                    );

                var dateFormats = {
                    full: 'EEEE, MMMM do, y',
                    long: 'MMMM do, y',
                    medium: 'MMM d, y',
                    short: 'MM/dd/yyyy',
                };
                var timeFormats = {
                    full: 'h:mm:ss a zzzz',
                    long: 'h:mm:ss a z',
                    medium: 'h:mm:ss a',
                    short: 'h:mm a',
                };
                var dateTimeFormats = {
                    full: "{{date}} 'at' {{time}}",
                    long: "{{date}} 'at' {{time}}",
                    medium: '{{date}}, {{time}}',
                    short: '{{date}}, {{time}}',
                };
                var formatLong = {
                    date: (0,
                    _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__[
                        'default'
                    ])({
                        formats: dateFormats,
                        defaultWidth: 'full',
                    }),
                    time: (0,
                    _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__[
                        'default'
                    ])({
                        formats: timeFormats,
                        defaultWidth: 'full',
                    }),
                    dateTime: (0,
                    _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__[
                        'default'
                    ])({
                        formats: dateTimeFormats,
                        defaultWidth: 'full',
                    }),
                };
                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
                    formatLong;

                /***/
            },

        /***/ './node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js':
            /*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ default: () =>
                            __WEBPACK_DEFAULT_EXPORT__,
                        /* harmony export */
                    }
                );
                var formatRelativeLocale = {
                    lastWeek: "'last' eeee 'at' p",
                    yesterday: "'yesterday at' p",
                    today: "'today at' p",
                    tomorrow: "'tomorrow at' p",
                    nextWeek: "eeee 'at' p",
                    other: 'P',
                };
                var formatRelative = function formatRelative(
                    token,
                    _date,
                    _baseDate,
                    _options
                ) {
                    return formatRelativeLocale[token];
                };
                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
                    formatRelative;

                /***/
            },

        /***/ './node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js':
            /*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ default: () =>
                            __WEBPACK_DEFAULT_EXPORT__,
                        /* harmony export */
                    }
                );
                /* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! ../../../_lib/buildLocalizeFn/index.js */ './node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js'
                    );

                var eraValues = {
                    narrow: ['B', 'A'],
                    abbreviated: ['BC', 'AD'],
                    wide: ['Before Christ', 'Anno Domini'],
                };
                var quarterValues = {
                    narrow: ['1', '2', '3', '4'],
                    abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
                    wide: [
                        '1st quarter',
                        '2nd quarter',
                        '3rd quarter',
                        '4th quarter',
                    ],
                };

                // Note: in English, the names of days of the week and months are capitalized.
                // If you are making a new locale based on this one, check if the same is true for the language you're working on.
                // Generally, formatted dates should look like they are in the middle of a sentence,
                // e.g. in Spanish language the weekdays and months should be in the lowercase.
                var monthValues = {
                    narrow: [
                        'J',
                        'F',
                        'M',
                        'A',
                        'M',
                        'J',
                        'J',
                        'A',
                        'S',
                        'O',
                        'N',
                        'D',
                    ],
                    abbreviated: [
                        'Jan',
                        'Feb',
                        'Mar',
                        'Apr',
                        'May',
                        'Jun',
                        'Jul',
                        'Aug',
                        'Sep',
                        'Oct',
                        'Nov',
                        'Dec',
                    ],
                    wide: [
                        'January',
                        'February',
                        'March',
                        'April',
                        'May',
                        'June',
                        'July',
                        'August',
                        'September',
                        'October',
                        'November',
                        'December',
                    ],
                };
                var dayValues = {
                    narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
                    short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
                    abbreviated: [
                        'Sun',
                        'Mon',
                        'Tue',
                        'Wed',
                        'Thu',
                        'Fri',
                        'Sat',
                    ],
                    wide: [
                        'Sunday',
                        'Monday',
                        'Tuesday',
                        'Wednesday',
                        'Thursday',
                        'Friday',
                        'Saturday',
                    ],
                };
                var dayPeriodValues = {
                    narrow: {
                        am: 'a',
                        pm: 'p',
                        midnight: 'mi',
                        noon: 'n',
                        morning: 'morning',
                        afternoon: 'afternoon',
                        evening: 'evening',
                        night: 'night',
                    },
                    abbreviated: {
                        am: 'AM',
                        pm: 'PM',
                        midnight: 'midnight',
                        noon: 'noon',
                        morning: 'morning',
                        afternoon: 'afternoon',
                        evening: 'evening',
                        night: 'night',
                    },
                    wide: {
                        am: 'a.m.',
                        pm: 'p.m.',
                        midnight: 'midnight',
                        noon: 'noon',
                        morning: 'morning',
                        afternoon: 'afternoon',
                        evening: 'evening',
                        night: 'night',
                    },
                };
                var formattingDayPeriodValues = {
                    narrow: {
                        am: 'a',
                        pm: 'p',
                        midnight: 'mi',
                        noon: 'n',
                        morning: 'in the morning',
                        afternoon: 'in the afternoon',
                        evening: 'in the evening',
                        night: 'at night',
                    },
                    abbreviated: {
                        am: 'AM',
                        pm: 'PM',
                        midnight: 'midnight',
                        noon: 'noon',
                        morning: 'in the morning',
                        afternoon: 'in the afternoon',
                        evening: 'in the evening',
                        night: 'at night',
                    },
                    wide: {
                        am: 'a.m.',
                        pm: 'p.m.',
                        midnight: 'midnight',
                        noon: 'noon',
                        morning: 'in the morning',
                        afternoon: 'in the afternoon',
                        evening: 'in the evening',
                        night: 'at night',
                    },
                };
                var ordinalNumber = function ordinalNumber(
                    dirtyNumber,
                    _options
                ) {
                    var number = Number(dirtyNumber);

                    // If ordinal numbers depend on context, for example,
                    // if they are different for different grammatical genders,
                    // use `options.unit`.
                    //
                    // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
                    // 'day', 'hour', 'minute', 'second'.

                    var rem100 = number % 100;
                    if (rem100 > 20 || rem100 < 10) {
                        switch (rem100 % 10) {
                            case 1:
                                return number + 'st';
                            case 2:
                                return number + 'nd';
                            case 3:
                                return number + 'rd';
                        }
                    }
                    return number + 'th';
                };
                var localize = {
                    ordinalNumber: ordinalNumber,
                    era: (0,
                    _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__[
                        'default'
                    ])({
                        values: eraValues,
                        defaultWidth: 'wide',
                    }),
                    quarter: (0,
                    _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__[
                        'default'
                    ])({
                        values: quarterValues,
                        defaultWidth: 'wide',
                        argumentCallback: function argumentCallback(quarter) {
                            return quarter - 1;
                        },
                    }),
                    month: (0,
                    _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__[
                        'default'
                    ])({
                        values: monthValues,
                        defaultWidth: 'wide',
                    }),
                    day: (0,
                    _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__[
                        'default'
                    ])({
                        values: dayValues,
                        defaultWidth: 'wide',
                    }),
                    dayPeriod: (0,
                    _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__[
                        'default'
                    ])({
                        values: dayPeriodValues,
                        defaultWidth: 'wide',
                        formattingValues: formattingDayPeriodValues,
                        defaultFormattingWidth: 'wide',
                    }),
                };
                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
                    localize;

                /***/
            },

        /***/ './node_modules/date-fns/esm/locale/en-US/_lib/match/index.js':
            /*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ default: () =>
                            __WEBPACK_DEFAULT_EXPORT__,
                        /* harmony export */
                    }
                );
                /* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        /*! ../../../_lib/buildMatchFn/index.js */ './node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js'
                    );
                /* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! ../../../_lib/buildMatchPatternFn/index.js */ './node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js'
                    );

                var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
                var parseOrdinalNumberPattern = /\d+/i;
                var matchEraPatterns = {
                    narrow: /^(b|a)/i,
                    abbreviated:
                        /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
                    wide: /^(before christ|before common era|anno domini|common era)/i,
                };
                var parseEraPatterns = {
                    any: [/^b/i, /^(a|c)/i],
                };
                var matchQuarterPatterns = {
                    narrow: /^[1234]/i,
                    abbreviated: /^q[1234]/i,
                    wide: /^[1234](th|st|nd|rd)? quarter/i,
                };
                var parseQuarterPatterns = {
                    any: [/1/i, /2/i, /3/i, /4/i],
                };
                var matchMonthPatterns = {
                    narrow: /^[jfmasond]/i,
                    abbreviated:
                        /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
                    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
                };
                var parseMonthPatterns = {
                    narrow: [
                        /^j/i,
                        /^f/i,
                        /^m/i,
                        /^a/i,
                        /^m/i,
                        /^j/i,
                        /^j/i,
                        /^a/i,
                        /^s/i,
                        /^o/i,
                        /^n/i,
                        /^d/i,
                    ],
                    any: [
                        /^ja/i,
                        /^f/i,
                        /^mar/i,
                        /^ap/i,
                        /^may/i,
                        /^jun/i,
                        /^jul/i,
                        /^au/i,
                        /^s/i,
                        /^o/i,
                        /^n/i,
                        /^d/i,
                    ],
                };
                var matchDayPatterns = {
                    narrow: /^[smtwf]/i,
                    short: /^(su|mo|tu|we|th|fr|sa)/i,
                    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
                    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
                };
                var parseDayPatterns = {
                    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
                    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
                };
                var matchDayPeriodPatterns = {
                    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
                    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
                };
                var parseDayPeriodPatterns = {
                    any: {
                        am: /^a/i,
                        pm: /^p/i,
                        midnight: /^mi/i,
                        noon: /^no/i,
                        morning: /morning/i,
                        afternoon: /afternoon/i,
                        evening: /evening/i,
                        night: /night/i,
                    },
                };
                var match = {
                    ordinalNumber: (0,
                    _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__[
                        'default'
                    ])({
                        matchPattern: matchOrdinalNumberPattern,
                        parsePattern: parseOrdinalNumberPattern,
                        valueCallback: function valueCallback(value) {
                            return parseInt(value, 10);
                        },
                    }),
                    era: (0,
                    _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__[
                        'default'
                    ])({
                        matchPatterns: matchEraPatterns,
                        defaultMatchWidth: 'wide',
                        parsePatterns: parseEraPatterns,
                        defaultParseWidth: 'any',
                    }),
                    quarter: (0,
                    _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__[
                        'default'
                    ])({
                        matchPatterns: matchQuarterPatterns,
                        defaultMatchWidth: 'wide',
                        parsePatterns: parseQuarterPatterns,
                        defaultParseWidth: 'any',
                        valueCallback: function valueCallback(index) {
                            return index + 1;
                        },
                    }),
                    month: (0,
                    _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__[
                        'default'
                    ])({
                        matchPatterns: matchMonthPatterns,
                        defaultMatchWidth: 'wide',
                        parsePatterns: parseMonthPatterns,
                        defaultParseWidth: 'any',
                    }),
                    day: (0,
                    _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__[
                        'default'
                    ])({
                        matchPatterns: matchDayPatterns,
                        defaultMatchWidth: 'wide',
                        parsePatterns: parseDayPatterns,
                        defaultParseWidth: 'any',
                    }),
                    dayPeriod: (0,
                    _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__[
                        'default'
                    ])({
                        matchPatterns: matchDayPeriodPatterns,
                        defaultMatchWidth: 'any',
                        parsePatterns: parseDayPeriodPatterns,
                        defaultParseWidth: 'any',
                    }),
                };
                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
                    match;

                /***/
            },

        /***/ './node_modules/date-fns/esm/locale/en-US/index.js':
            /*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ default: () =>
                            __WEBPACK_DEFAULT_EXPORT__,
                        /* harmony export */
                    }
                );
                /* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! ./_lib/formatDistance/index.js */ './node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js'
                    );
                /* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        /*! ./_lib/formatLong/index.js */ './node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js'
                    );
                /* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        /*! ./_lib/formatRelative/index.js */ './node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js'
                    );
                /* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ =
                    __webpack_require__(
                        /*! ./_lib/localize/index.js */ './node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js'
                    );
                /* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ =
                    __webpack_require__(
                        /*! ./_lib/match/index.js */ './node_modules/date-fns/esm/locale/en-US/_lib/match/index.js'
                    );

                /**
                 * @type {Locale}
                 * @category Locales
                 * @summary English locale (United States).
                 * @language English
                 * @iso-639-2 eng
                 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
                 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
                 */
                var locale = {
                    code: 'en-US',
                    formatDistance:
                        _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__[
                            'default'
                        ],
                    formatLong:
                        _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__[
                            'default'
                        ],
                    formatRelative:
                        _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__[
                            'default'
                        ],
                    localize:
                        _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__[
                            'default'
                        ],
                    match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__[
                        'default'
                    ],
                    options: {
                        weekStartsOn: 0 /* Sunday */,
                        firstWeekContainsDate: 1,
                    },
                };
                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
                    locale;

                /***/
            },

        /***/ './node_modules/date-fns/esm/toDate/index.js':
            /*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ default: () =>
                            /* binding */ toDate,
                        /* harmony export */
                    }
                );
                /* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! @babel/runtime/helpers/esm/typeof */ './node_modules/@babel/runtime/helpers/esm/typeof.js'
                    );
                /* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        /*! ../_lib/requiredArgs/index.js */ './node_modules/date-fns/esm/_lib/requiredArgs/index.js'
                    );

                /**
                 * @name toDate
                 * @category Common Helpers
                 * @summary Convert the given argument to an instance of Date.
                 *
                 * @description
                 * Convert the given argument to an instance of Date.
                 *
                 * If the argument is an instance of Date, the function returns its clone.
                 *
                 * If the argument is a number, it is treated as a timestamp.
                 *
                 * If the argument is none of the above, the function returns Invalid Date.
                 *
                 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
                 *
                 * @param {Date|Number} argument - the value to convert
                 * @returns {Date} the parsed date in the local time zone
                 * @throws {TypeError} 1 argument required
                 *
                 * @example
                 * // Clone the date:
                 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
                 * //=> Tue Feb 11 2014 11:30:30
                 *
                 * @example
                 * // Convert the timestamp to date:
                 * const result = toDate(1392098430000)
                 * //=> Tue Feb 11 2014 11:30:30
                 */
                function toDate(argument) {
                    (0,
                    _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__[
                        'default'
                    ])(1, arguments);
                    var argStr = Object.prototype.toString.call(argument);

                    // Clone the date
                    if (
                        argument instanceof Date ||
                        ((0,
                        _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[
                            'default'
                        ])(argument) === 'object' &&
                            argStr === '[object Date]')
                    ) {
                        // Prevent the date to lose the milliseconds when passed to new Date() in IE10
                        return new Date(argument.getTime());
                    } else if (
                        typeof argument === 'number' ||
                        argStr === '[object Number]'
                    ) {
                        return new Date(argument);
                    } else {
                        if (
                            (typeof argument === 'string' ||
                                argStr === '[object String]') &&
                            typeof console !== 'undefined'
                        ) {
                            // eslint-disable-next-line no-console
                            console.warn(
                                "Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"
                            );
                            // eslint-disable-next-line no-console
                            console.warn(new Error().stack);
                        }
                        return new Date(NaN);
                    }
                }

                /***/
            },

        /***/ './src/style.css':
            /*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ default: () =>
                            __WEBPACK_DEFAULT_EXPORT__,
                        /* harmony export */
                    }
                );
                /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'
                    );
                /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default =
                    /*#__PURE__*/ __webpack_require__.n(
                        _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__
                    );
                /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        /*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ './node_modules/style-loader/dist/runtime/styleDomAPI.js'
                    );
                /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default =
                    /*#__PURE__*/ __webpack_require__.n(
                        _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__
                    );
                /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        /*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ './node_modules/style-loader/dist/runtime/insertBySelector.js'
                    );
                /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default =
                    /*#__PURE__*/ __webpack_require__.n(
                        _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__
                    );
                /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ =
                    __webpack_require__(
                        /*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js'
                    );
                /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default =
                    /*#__PURE__*/ __webpack_require__.n(
                        _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__
                    );
                /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ =
                    __webpack_require__(
                        /*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ './node_modules/style-loader/dist/runtime/insertStyleElement.js'
                    );
                /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default =
                    /*#__PURE__*/ __webpack_require__.n(
                        _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__
                    );
                /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ =
                    __webpack_require__(
                        /*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ './node_modules/style-loader/dist/runtime/styleTagTransform.js'
                    );
                /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default =
                    /*#__PURE__*/ __webpack_require__.n(
                        _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__
                    );
                /* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ =
                    __webpack_require__(
                        /*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ './node_modules/css-loader/dist/cjs.js!./src/style.css'
                    );

                var options = {};

                options.styleTagTransform =
                    _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default();
                options.setAttributes =
                    _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default();

                options.insert =
                    _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(
                        null,
                        'head'
                    );

                options.domAPI =
                    _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default();
                options.insertStyleElement =
                    _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();

                var update =
                    _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(
                        _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[
                            'default'
                        ],
                        options
                    );

                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
                    _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[
                        'default'
                    ] &&
                    _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[
                        'default'
                    ].locals
                        ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[
                              'default'
                          ].locals
                        : undefined;

                /***/
            },

        /***/ './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js':
            /*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
            /***/ (module) => {
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
                        var id = options.base
                            ? item[0] + options.base
                            : item[0];
                        var count = idCountMap[id] || 0;
                        var identifier = ''.concat(id, ' ').concat(count);
                        idCountMap[id] = count + 1;
                        var indexByIdentifier =
                            getIndexByIdentifier(identifier);
                        var obj = {
                            css: item[1],
                            media: item[2],
                            sourceMap: item[3],
                            supports: item[4],
                            layer: item[5],
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
                                references: 1,
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
                            if (
                                newObj.css === obj.css &&
                                newObj.media === obj.media &&
                                newObj.sourceMap === obj.sourceMap &&
                                newObj.supports === obj.supports &&
                                newObj.layer === obj.layer
                            ) {
                                return;
                            }
                            api.update((obj = newObj));
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

                /***/
            },

        /***/ './node_modules/style-loader/dist/runtime/insertBySelector.js':
            /*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
            /***/ (module) => {
                var memo = {};

                /* istanbul ignore next  */
                function getTarget(target) {
                    if (typeof memo[target] === 'undefined') {
                        var styleTarget = document.querySelector(target);

                        // Special case to return head of iframe instead of iframe itself
                        if (
                            window.HTMLIFrameElement &&
                            styleTarget instanceof window.HTMLIFrameElement
                        ) {
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
                        throw new Error(
                            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
                        );
                    }
                    target.appendChild(style);
                }
                module.exports = insertBySelector;

                /***/
            },

        /***/ './node_modules/style-loader/dist/runtime/insertStyleElement.js':
            /*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
            /***/ (module) => {
                /* istanbul ignore next  */
                function insertStyleElement(options) {
                    var element = document.createElement('style');
                    options.setAttributes(element, options.attributes);
                    options.insert(element, options.options);
                    return element;
                }
                module.exports = insertStyleElement;

                /***/
            },

        /***/ './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js':
            /*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
            /***/ (module, __unused_webpack_exports, __webpack_require__) => {
                /* istanbul ignore next  */
                function setAttributesWithoutAttributes(styleElement) {
                    var nonce = true ? __webpack_require__.nc : 0;
                    if (nonce) {
                        styleElement.setAttribute('nonce', nonce);
                    }
                }
                module.exports = setAttributesWithoutAttributes;

                /***/
            },

        /***/ './node_modules/style-loader/dist/runtime/styleDomAPI.js':
            /*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
            /***/ (module) => {
                /* istanbul ignore next  */
                function apply(styleElement, options, obj) {
                    var css = '';
                    if (obj.supports) {
                        css += '@supports ('.concat(obj.supports, ') {');
                    }
                    if (obj.media) {
                        css += '@media '.concat(obj.media, ' {');
                    }
                    var needLayer = typeof obj.layer !== 'undefined';
                    if (needLayer) {
                        css += '@layer'.concat(
                            obj.layer.length > 0 ? ' '.concat(obj.layer) : '',
                            ' {'
                        );
                    }
                    css += obj.css;
                    if (needLayer) {
                        css += '}';
                    }
                    if (obj.media) {
                        css += '}';
                    }
                    if (obj.supports) {
                        css += '}';
                    }
                    var sourceMap = obj.sourceMap;
                    if (sourceMap && typeof btoa !== 'undefined') {
                        css +=
                            '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                                btoa(
                                    unescape(
                                        encodeURIComponent(
                                            JSON.stringify(sourceMap)
                                        )
                                    )
                                ),
                                ' */'
                            );
                    }

                    // For old IE
                    /* istanbul ignore if  */
                    options.styleTagTransform(
                        css,
                        styleElement,
                        options.options
                    );
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
                    if (typeof document === 'undefined') {
                        return {
                            update: function update() {},
                            remove: function remove() {},
                        };
                    }
                    var styleElement = options.insertStyleElement(options);
                    return {
                        update: function update(obj) {
                            apply(styleElement, options, obj);
                        },
                        remove: function remove() {
                            removeStyleElement(styleElement);
                        },
                    };
                }
                module.exports = domAPI;

                /***/
            },

        /***/ './node_modules/style-loader/dist/runtime/styleTagTransform.js':
            /*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
            /***/ (module) => {
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

                /***/
            },

        /***/ './src/UIController.js':
            /*!*****************************!*\
  !*** ./src/UIController.js ***!
  \*****************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ default: () =>
                            __WEBPACK_DEFAULT_EXPORT__,
                        /* harmony export */
                    }
                );
                class UIController {
                    // UI Task Container
                    #todoContainer = document.querySelector('.todo-container');
                    #navGroupsContainer = document.querySelector('.nav-tabs');
                    // Provided to the Storage Control in order to get relevant task group
                    #currentTaskGroup = 'inbox';
                    #listenersInitialized = false;

                    #groupSelect = document.querySelector('#group-select');
                    #tabsContainer = document.querySelector('.nav-tabs');
                    #currentTab = document.querySelector('.tab-active');
                    #inboxTab = document.querySelector('#inbox-tab');

                    // Form elements: new group
                    #groupModal = document.querySelector('#modal-add-group');
                    #groupForm = document.querySelector('#new-group-form');
                    #submitGroupBtn =
                        document.querySelector('#submit-group-btn');
                    #openGroupModalBtn =
                        document.querySelector('#open-group-modal');
                    #closeGroupModalBtn =
                        document.querySelector('#close-group-modal');

                    // Add New Group: Group Data
                    #formGroupField =
                        document.querySelector('#group-name-field');

                    // Form elements: New Task
                    #taskModal = document.querySelector('#modal-add-task');
                    #taskForm = document.querySelector('#new-task-form');
                    #submitTaskBtn = document.querySelector('#submit-task-btn');
                    #openTaskModalBtn =
                        document.querySelector('#open-task-modal');
                    #closeTaskModalBtn =
                        document.querySelector('#close-task-modal');

                    // Add New Task: From Data
                    #formTitle = document.querySelector('#form-title');
                    #formDescription = document.querySelector('#form-desc');
                    #formDueDate = document.querySelector('#form-due-date');
                    #formPriority = document.querySelector('#form-priority');
                    #formGroup = document.querySelector('#group-select');

                    constructor(
                        submitTaskHandler,
                        switchHandler,
                        submitGroupHandler
                    ) {
                        this.#setInitialListeners(
                            submitTaskHandler,
                            switchHandler,
                            submitGroupHandler
                        );
                        this.#resetAllFormInput();
                    }

                    #addTaskElement(taskObj, removeTaskHandler) {
                        const newTaskEl = document.createElement('li');
                        newTaskEl.classList.add('task-item');
                        newTaskEl.setAttribute('data-uid', taskObj.UID);

                        const taskTitle = document.createElement('h3');
                        taskTitle.classList.add('item-title');
                        taskTitle.textContent = taskObj.title;
                        taskTitle.addEventListener(
                            'click',
                            this.#taskMinimizeHandler
                        );

                        // Info container(<ul>)
                        const taskInfoContainer = document.createElement('ul');
                        taskInfoContainer.classList.add('item-info');
                        taskInfoContainer.style.display = 'none';

                        const taskRemoveBtn = document.createElement('button');
                        taskRemoveBtn.classList.add('action-btn');
                        taskRemoveBtn.classList.add('item-remove-btn');
                        taskRemoveBtn.textContent = 'Remove Task';
                        taskRemoveBtn.addEventListener(
                            'click',
                            removeTaskHandler
                        );

                        // Info Item: Description
                        const infoItem1 = document.createElement('li');
                        infoItem1.classList.add('info-item');

                        const infoDescTitle = document.createElement('span');
                        infoDescTitle.classList.add('info-title');
                        infoDescTitle.textContent = 'Description: ';

                        const infoDescData = document.createElement('span');
                        infoDescData.classList.add('info-data', 'info-desc');
                        infoDescData.textContent = taskObj.description;

                        infoItem1.appendChild(infoDescTitle);
                        infoItem1.appendChild(infoDescData);

                        // Info Item: Due date
                        const infoItem2 = document.createElement('li');
                        infoItem2.classList.add('info-item');

                        const infoDueTitle = document.createElement('span');
                        infoDueTitle.classList.add('info-title');
                        infoDueTitle.textContent = 'Due date: ';

                        const infoDueDate = document.createElement('span');
                        infoDueDate.classList.add('info-data', 'info-due-date');
                        infoDueDate.textContent = taskObj.timeLeft;

                        infoItem2.appendChild(infoDueTitle);
                        infoItem2.appendChild(infoDueDate);

                        // Info Item: Priority
                        const infoItem3 = document.createElement('li');
                        infoItem3.classList.add('info-item');

                        const infoPrioTitle = document.createElement('span');
                        infoPrioTitle.classList.add('info-title');
                        infoPrioTitle.textContent = 'Priority: ';

                        const infoPrioData = document.createElement('span');
                        infoPrioData.classList.add(
                            'info-data',
                            'info-priority'
                        );
                        infoPrioData.textContent = taskObj.priority;

                        infoItem3.appendChild(infoPrioTitle);
                        infoItem3.appendChild(infoPrioData);

                        taskInfoContainer.appendChild(infoItem1);
                        taskInfoContainer.appendChild(infoItem2);
                        taskInfoContainer.appendChild(infoItem3);

                        newTaskEl.appendChild(taskTitle);
                        newTaskEl.appendChild(taskInfoContainer);
                        newTaskEl.appendChild(taskRemoveBtn);

                        this.#todoContainer.appendChild(newTaskEl);
                    }

                    removeTask(element) {
                        element.remove();
                    }

                    #taskMinimizeHandler(event) {
                        let taskInfo =
                            event.currentTarget.parentNode.querySelector(
                                '.item-info'
                            );

                        if (taskInfo.style.display !== 'none') {
                            taskInfo.style.display = 'none';
                        } else {
                            taskInfo.style.display = 'flex';
                        }
                    }

                    addGroupElement(
                        groupName,
                        switchHandler,
                        currentTaskGroup
                    ) {
                        let newGroup = document.createElement('li');

                        newGroup.classList.add('tab-item');
                        newGroup.addEventListener(
                            'click',
                            this.#switchTaskGroup.bind(this)
                        );
                        newGroup.addEventListener('click', switchHandler);
                        newGroup.textContent = groupName;

                        if (groupName === currentTaskGroup) {
                            newGroup.classList.add('tab-active');
                            this.#currentTaskGroup = groupName;
                            this.#currentTab = newGroup;
                        }

                        this.#tabsContainer.appendChild(newGroup);
                    }

                    // Returns Task Data provided in the form
                    submitFormTask() {
                        if (this.#taskForm.reportValidity()) {
                            let newTaskObj = {
                                title: this.#formTitle.value,
                                description: this.#formDescription.value,
                                dueDate: this.#formDueDate.value,
                                priority: this.#formPriority.value,
                                taskGroup:
                                    this.#groupSelect.value.toLowerCase(),
                            };

                            console.log(this.#groupSelect.value);
                            this.#taskModal.close();

                            return newTaskObj;
                        }
                        return null;
                    }

                    submitFormGroup() {
                        if (this.#groupForm.reportValidity()) {
                            this.#groupModal.close();
                            return this.#formGroupField.value.toLowerCase();
                        }

                        return null;
                    }

                    #resetAllFormInput() {
                        const formInputFields =
                            document.querySelectorAll('.form-input-field');
                        const formDueDate =
                            document.querySelector('#form-due-date');

                        formDueDate.value = UIController.#getFormattedDate();

                        formInputFields.forEach((element) => {
                            if (
                                element.getAttribute('type') === 'text' ||
                                element.getAttribute('type') === 'number'
                            )
                                element.value = '';
                        });
                    }

                    static #getFormattedDate(dateObj = new Date()) {
                        let [year, month, day] = [
                            dateObj.getFullYear().toString(),
                            (dateObj.getMonth() + 1).toString(),
                            dateObj.getDate().toString(),
                        ];

                        if (month.length === 1) month = `0${month}`;
                        if (day.length === 1) day = `0${day}`;

                        return `${year}-${month}-${day}`;
                    }

                    get currentTaskGroup() {
                        return this.#currentTaskGroup;
                    }

                    #switchTaskGroup(event) {
                        this.#currentTaskGroup =
                            event.currentTarget.textContent.toLowerCase();
                    }

                    #setInitialListeners(
                        submitTaskHandler,
                        switchHandler,
                        submitGroupHandler
                    ) {
                        if (!this.#listenersInitialized) {
                            // Add task form, modal
                            this.#submitTaskBtn.addEventListener(
                                'click',
                                submitTaskHandler
                            );
                            this.#submitTaskBtn.addEventListener(
                                'click',
                                this.#resetAllFormInput
                            );
                            this.#openTaskModalBtn.addEventListener(
                                'click',
                                () => this.#taskModal.showModal()
                            );
                            this.#closeTaskModalBtn.addEventListener(
                                'click',
                                () => this.#taskModal.close()
                            );
                            this.#closeTaskModalBtn.addEventListener(
                                'click',
                                this.#resetAllFormInput
                            );

                            // Add group form, modal
                            this.#submitGroupBtn.addEventListener(
                                'click',
                                submitGroupHandler
                            );
                            this.#submitGroupBtn.addEventListener(
                                'click',
                                this.#resetAllFormInput
                            );
                            this.#openGroupModalBtn.addEventListener(
                                'click',
                                () => this.#groupModal.showModal()
                            );
                            this.#closeGroupModalBtn.addEventListener(
                                'click',
                                () => this.#groupModal.close()
                            );
                            this.#closeGroupModalBtn.addEventListener(
                                'click',
                                this.#resetAllFormInput
                            );

                            // Default group 'inbox'
                            this.#inboxTab.addEventListener(
                                'click',
                                this.#switchTaskGroup.bind(this)
                            );
                            this.#inboxTab.addEventListener(
                                'click',
                                switchHandler
                            );
                        }
                    }

                    #addNewOption(optionName) {
                        let newOption = document.createElement('option');
                        newOption.textContent =
                            optionName.charAt(0).toUpperCase() +
                            optionName.slice(1);
                        newOption.value = optionName;

                        this.#groupSelect.appendChild(newOption);
                    }

                    // Wipes current container to fill it with up-to-date task list
                    updateUI(appData, removeTaskHandler, switchGroupHandler) {
                        this.#todoContainer.innerHTML = '';
                        this.#navGroupsContainer.innerHTML = '';
                        this.#groupSelect.innerHTML = '';

                        this.#currentTaskGroup = appData.currentTaskGroup;

                        appData.taskData.forEach((taskObj) => {
                            this.#addTaskElement(taskObj, removeTaskHandler);
                        });

                        appData.groupData.forEach((groupName) => {
                            this.addGroupElement(
                                groupName,
                                switchGroupHandler,
                                appData.currentTaskGroup
                            );
                        });

                        appData.groupData.forEach((optionName) => {
                            this.#addNewOption(optionName);
                        });
                    }
                }

                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
                    UIController;

                /***/
            },

        /***/ './src/task.js':
            /*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ default: () =>
                            __WEBPACK_DEFAULT_EXPORT__,
                        /* harmony export */
                    }
                );
                /* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! date-fns */ './node_modules/date-fns/esm/formatDistanceToNow/index.js'
                    );

                class Task {
                    constructor(
                        title,
                        description,
                        dueDate,
                        priority,
                        taskGroup,
                        UID
                    ) {
                        this.title = title;
                        this.description = description;
                        this.dueDate = dueDate;
                        this.priority = priority;
                        this.taskGroup = taskGroup;
                        this.UID = UID;
                    }

                    get timeLeft() {
                        let [year, month, day] = this.dueDate.split('-');

                        return `in ${(0,
                        date_fns__WEBPACK_IMPORTED_MODULE_0__['default'])(
                            new Date(year, month - 1, day)
                        )}`;
                    }
                }

                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
                    Task;

                /***/
            },

        /***/ './src/taskListController.js':
            /*!***********************************!*\
  !*** ./src/taskListController.js ***!
  \***********************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ default: () =>
                            __WEBPACK_DEFAULT_EXPORT__,
                        /* harmony export */
                    }
                );
                /* harmony import */ var _UIController_js__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! ./UIController.js */ './src/UIController.js'
                    );
                /* harmony import */ var _taskStorageController_js__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        /*! ./taskStorageController.js */ './src/taskStorageController.js'
                    );

                class TaskListController {
                    #storage =
                        new _taskStorageController_js__WEBPACK_IMPORTED_MODULE_1__[
                            'default'
                        ]();
                    #UI = new _UIController_js__WEBPACK_IMPORTED_MODULE_0__[
                        'default'
                    ](
                        this.#addNewTaskHandler.bind(this),
                        this.#switchTaskGroupHandler.bind(this),
                        this.#addNewGroupHandler.bind(this)
                    );

                    constructor() {
                        this.#updateUI();
                    }

                    #addNewTaskHandler(event) {
                        this.#storage.addNewTask(this.#UI.submitFormTask());
                        this.#updateUI();
                    }

                    #switchTaskGroupHandler(event) {
                        this.#storage.switchCurrentTaskGroup(
                            this.#UI.currentTaskGroup
                        );
                        this.#updateUI();
                    }

                    #removeTaskHandler(event) {
                        let taskElement = event.currentTarget.parentNode;

                        this.#UI.removeTask(taskElement);
                        this.#storage.deleteTask(
                            taskElement.getAttribute('data-uid')
                        );
                    }

                    #addNewGroupHandler(event) {
                        this.#storage.addTaskGroup(this.#UI.submitFormGroup());
                        this.#updateUI();
                    }

                    #updateUI() {
                        this.#UI.updateUI(
                            this.#storage.getAppData(),
                            this.#removeTaskHandler.bind(this),
                            this.#switchTaskGroupHandler.bind(this)
                        );
                    }
                }

                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
                    TaskListController;

                /***/
            },

        /***/ './src/taskStorageController.js':
            /*!**************************************!*\
  !*** ./src/taskStorageController.js ***!
  \**************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ default: () =>
                            __WEBPACK_DEFAULT_EXPORT__,
                        /* harmony export */
                    }
                );
                /* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(/*! ./task.js */ './src/task.js');

                class TaskStorageController {
                    #taskLibrary = [];
                    #taskGroups = ['inbox'];
                    #currentTaskGroup = 'inbox';
                    #UID = 0;

                    constructor() {
                        this.#loadFromLocalStorage();
                        console.log(`tasks --> ${this.#taskLibrary}`);
                        console.log(`groups --> ${this.#taskGroups}`);
                        console.log(
                            `currentTaskGroup --> ${this.#currentTaskGroup}`
                        );
                    }

                    addNewTask(taskObj) {
                        if (taskObj) {
                            let newTask =
                                new _task_js__WEBPACK_IMPORTED_MODULE_0__[
                                    'default'
                                ](
                                    taskObj.title,
                                    taskObj.description,
                                    taskObj.dueDate,
                                    taskObj.priority,
                                    taskObj.taskGroup,
                                    this.#UID
                                );

                            localStorage.setItem('nextUID', `${++this.#UID}`);
                            this.#saveToLocalStorage(newTask);
                            this.#taskLibrary.push(newTask);
                        }
                    }

                    deleteTask(UID) {
                        let taskIndex = this.#taskLibrary.findIndex(
                            (element) => element.UID === UID
                        );
                        this.#deleteFromLocalStorage(UID);
                        this.#taskLibrary.splice(taskIndex, 1);
                    }

                    addTaskGroup(groupName) {
                        if (
                            groupName &&
                            !this.#taskGroups.some(
                                (taskName) => taskName === groupName
                            )
                        ) {
                            this.#taskGroups.push(groupName);
                        }
                        localStorage.setItem(
                            'groupNames',
                            JSON.stringify(this.#taskGroups)
                        );
                    }

                    getAppData() {
                        let appTaskData = {
                            taskData: [],
                            groupData: [],
                            currentTaskGroup: '',
                        };

                        if (this.#currentTaskGroup === 'inbox') {
                            appTaskData.taskData = this.#taskLibrary;
                        } else {
                            appTaskData.taskData = this.#taskLibrary.filter(
                                (taskObj) => {
                                    return (
                                        taskObj.taskGroup ===
                                        this.#currentTaskGroup
                                    );
                                }
                            );
                        }

                        appTaskData.groupData = this.#taskGroups;
                        appTaskData.currentTaskGroup = this.#currentTaskGroup;

                        return appTaskData;
                    }

                    switchCurrentTaskGroup(taskGroupName) {
                        this.#currentTaskGroup = taskGroupName;
                        localStorage.setItem(
                            'currentTaskGroup',
                            this.#currentTaskGroup
                        );
                    }

                    #saveToLocalStorage(taskObj) {
                        let taskSerialized = JSON.stringify(taskObj);
                        localStorage.setItem(`${taskObj.UID}`, taskSerialized);
                    }

                    #deleteFromLocalStorage(UID) {
                        localStorage.removeItem(UID.toString());
                    }

                    #loadFromLocalStorage() {
                        const localStorageKeys = Object.keys(localStorage);
                        const taskUIDs = localStorageKeys
                            .filter(
                                (el) => Boolean(Number.parseInt(el)) || el == 0
                            )
                            .sort();

                        taskUIDs.forEach((UID) => {
                            const taskDataDeserialized = JSON.parse(
                                localStorage.getItem(UID)
                            );
                            const taskTemp =
                                new _task_js__WEBPACK_IMPORTED_MODULE_0__[
                                    'default'
                                ](
                                    taskDataDeserialized.title,
                                    taskDataDeserialized.description,
                                    taskDataDeserialized.dueDate,
                                    taskDataDeserialized.priority,
                                    taskDataDeserialized.taskGroup,
                                    taskDataDeserialized.UID
                                );

                            this.#taskLibrary.push(taskTemp);
                        });

                        this.#taskGroups = JSON.parse(
                            localStorage.getItem('groupNames')
                        ) || ['inbox'];
                        this.#UID = localStorage.getItem('nextUID') || 0;
                        this.#currentTaskGroup =
                            localStorage.getItem('currentTaskGroup') || 'inbox';
                    }
                }

                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
                    TaskStorageController;

                /***/
            },

        /***/ './node_modules/@babel/runtime/helpers/esm/typeof.js':
            /*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
            /***/ (
                __unused_webpack___webpack_module__,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ default: () =>
                            /* binding */ _typeof,
                        /* harmony export */
                    }
                );
                function _typeof(o) {
                    '@babel/helpers - typeof';

                    return (
                        (_typeof =
                            'function' == typeof Symbol &&
                            'symbol' == typeof Symbol.iterator
                                ? function (o) {
                                      return typeof o;
                                  }
                                : function (o) {
                                      return o &&
                                          'function' == typeof Symbol &&
                                          o.constructor === Symbol &&
                                          o !== Symbol.prototype
                                          ? 'symbol'
                                          : typeof o;
                                  }),
                        _typeof(o)
                    );
                }

                /***/
            },

        /******/
    };
    /************************************************************************/
    /******/ // The module cache
    /******/ var __webpack_module_cache__ = {};
    /******/
    /******/ // The require function
    /******/ function __webpack_require__(moduleId) {
        /******/ // Check if module is in cache
        /******/ var cachedModule = __webpack_module_cache__[moduleId];
        /******/ if (cachedModule !== undefined) {
            /******/ return cachedModule.exports;
            /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/ var module = (__webpack_module_cache__[moduleId] = {
            /******/ id: moduleId,
            /******/ // no module.loaded needed
            /******/ exports: {},
            /******/
        });
        /******/
        /******/ // Execute the module function
        /******/ __webpack_modules__[moduleId](
            module,
            module.exports,
            __webpack_require__
        );
        /******/
        /******/ // Return the exports of the module
        /******/ return module.exports;
        /******/
    }
    /******/
    /************************************************************************/
    /******/ /* webpack/runtime/compat get default export */
    /******/ (() => {
        /******/ // getDefaultExport function for compatibility with non-harmony modules
        /******/ __webpack_require__.n = (module) => {
            /******/ var getter =
                module && module.__esModule
                    ? /******/ () => module['default']
                    : /******/ () => module;
            /******/ __webpack_require__.d(getter, { a: getter });
            /******/ return getter;
            /******/
        };
        /******/
    })();
    /******/
    /******/ /* webpack/runtime/define property getters */
    /******/
    (() => {
        /******/ // define getter functions for harmony exports
        /******/ __webpack_require__.d = (exports, definition) => {
            /******/ for (var key in definition) {
                /******/ if (
                    __webpack_require__.o(definition, key) &&
                    !__webpack_require__.o(exports, key)
                ) {
                    /******/ Object.defineProperty(exports, key, {
                        enumerable: true,
                        get: definition[key],
                    });
                    /******/
                }
                /******/
            }
            /******/
        };
        /******/
    })();
    /******/
    /******/ /* webpack/runtime/hasOwnProperty shorthand */
    /******/
    (() => {
        /******/ __webpack_require__.o = (obj, prop) =>
            Object.prototype.hasOwnProperty.call(obj, prop);
        /******/
    })();
    /******/
    /******/ /* webpack/runtime/make namespace object */
    /******/
    (() => {
        /******/ // define __esModule on exports
        /******/ __webpack_require__.r = (exports) => {
            /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                /******/ Object.defineProperty(exports, Symbol.toStringTag, {
                    value: 'Module',
                });
                /******/
            }
            /******/ Object.defineProperty(exports, '__esModule', {
                value: true,
            });
            /******/
        };
        /******/
    })();
    /******/
    /******/ /* webpack/runtime/nonce */
    /******/
    (() => {
        /******/ __webpack_require__.nc = undefined;
        /******/
    })();
    /******/
    /************************************************************************/
    var __webpack_exports__ = {};
    // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
    (() => {
        /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _taskListController_js__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
                /*! ./taskListController.js */ './src/taskListController.js'
            );
        /* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(/*! ./style.css */ './src/style.css');

        new _taskListController_js__WEBPACK_IMPORTED_MODULE_0__['default']();
    })();

    /******/
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxHQUFHO0FBQ0g7Ozs7OztVQ1JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQXlEO0FBQ3BDOztBQUVyQixJQUFJLDhEQUFrQixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvYXNzaWduL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvY2xvbmVPYmplY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9kZWZhdWx0TG9jYWxlL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcm91bmRpbmdNZXRob2RzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2NvbXBhcmVBc2MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2RpZmZlcmVuY2VJbk1vbnRocy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9kaWZmZXJlbmNlSW5TZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2VuZE9mRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2VuZE9mTW9udGgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZm9ybWF0RGlzdGFuY2VUb05vdy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc0xhc3REYXlPZk1vbnRoL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXREaXN0YW5jZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRMb25nL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2xvY2FsaXplL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL21hdGNoL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvVUlDb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Rhc2tMaXN0Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Rhc2tTdG9yYWdlQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDE1MHB4LCAyNzVweCkgMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xufVxuXG4udG9kby1uYXYge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkM2QzZDM7XG4gICAgcGFkZGluZzogMS41ZW0gMmVtO1xufVxuXG4ubmF2LWxvZ28ge1xuICAgIGNvbG9yOiAjNWI1YjViO1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuXG4ubmF2LXRhYnMge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxZW07XG59XG5cbi50YWItaXRlbSB7XG4gICAgcGFkZGluZzogMC41ZW07XG4gICAgbWFyZ2luOiAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEuMWVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjMWMxYzE7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi50YWItYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTM5MzkzO1xufVxuXG4udG9kby1tYWluIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xufVxuXG4udG9kby1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDEuNWVtIDJlbTtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IGRpc2M7XG59XG5cbi50YXNrLWl0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDhweDtcbn1cblxuLml0ZW0tdGl0bGUge1xuICAgIG1hcmdpbjogMC4zZW0gMDtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5pdGVtLWluZm8ge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAyMHB4O1xufVxuXG4uaXRlbS1yZW1vdmUtYnRuIHtcbiAgICBtYXgtd2lkdGg6IDE1Y2g7XG59XG5cbi5pbmZvLWl0ZW0ge31cblxuLmluZm8tdGl0bGUge31cblxuLmluZm8tZGF0YSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5pbmZvLWRlc2Mge31cblxuLmFwcC1tb2RhbCB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBib3gtc2hhZG93OiAwIDAgMWVtIHJnYigwIDAgMCAvIDAuMyk7XG59XG5cbiNtb2RhbC1hZGQtdGFzayB7fVxuXG4jbmV3LXRhc2stZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMWVtO1xufVxuXG4jbW9kYWwtYWRkLWdyb3VwIHt9XG5cbi5mb3JtLWlucHV0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAwLjFlbTtcbn1cblxuLmZvcm0taW5wdXQtZmllbGQge31cblxuLm1vZGFsLWNvbnRyb2xzIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBnYXA6IDAuOGVtO1xufVxuXG4uYWN0aW9uLWJ0biB7XG4gICAgcGFkZGluZzogMC41ZW07XG4gICAgY29sb3I6IHJnYigyNTUgMjU1IDI1NSk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCAwIDApO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmFjdGlvbi1idG46aG92ZXIge1xuICAgIGNvbG9yOiByZ2IoMCAwIDApO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkM2QzZDM7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubmF2LWNvbnRyb2xzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3R0b206IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNvbnRyb2xzLWJ0biB7XG4gICAgcGFkZGluZzogMC43ZW07XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4jbmV3LWdyb3VwLWZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDFlbTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxtREFBbUQ7SUFDbkQsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxhQUFhO0lBQ2IsYUFBYTtJQUNiLCtDQUErQztJQUMvQyx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUNBQWlDO0lBQ2pDLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1QscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksY0FBYztJQUNkLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQSxZQUFZOztBQUVaLGFBQWE7O0FBRWI7SUFDSSxxQkFBcUI7SUFDckIsZ0JBQWdCO0FBQ3BCOztBQUVBLFlBQVk7O0FBRVo7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG9DQUFvQztBQUN4Qzs7QUFFQSxpQkFBaUI7O0FBRWpCO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixRQUFRO0FBQ1o7O0FBRUEsa0JBQWtCOztBQUVsQjtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsVUFBVTtBQUNkOztBQUVBLG1CQUFtQjs7QUFFbkI7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIseUJBQXlCO0lBQ3pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxTQUFTO0lBQ1QsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixRQUFRO0FBQ1pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMTUwcHgsIDI3NXB4KSAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbn1cXG5cXG4udG9kby1uYXYge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkM2QzZDM7XFxuICAgIHBhZGRpbmc6IDEuNWVtIDJlbTtcXG59XFxuXFxuLm5hdi1sb2dvIHtcXG4gICAgY29sb3I6ICM1YjViNWI7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLm5hdi10YWJzIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMWVtO1xcbn1cXG5cXG4udGFiLWl0ZW0ge1xcbiAgICBwYWRkaW5nOiAwLjVlbTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS4xZW07XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MxYzFjMTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi50YWItYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzkzOTM5MztcXG59XFxuXFxuLnRvZG8tbWFpbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG59XFxuXFxuLnRvZG8tY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogMS41ZW0gMmVtO1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IGRpc2M7XFxufVxcblxcbi50YXNrLWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDhweDtcXG59XFxuXFxuLml0ZW0tdGl0bGUge1xcbiAgICBtYXJnaW46IDAuM2VtIDA7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5pdGVtLWluZm8ge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLml0ZW0tcmVtb3ZlLWJ0biB7XFxuICAgIG1heC13aWR0aDogMTVjaDtcXG59XFxuXFxuLmluZm8taXRlbSB7fVxcblxcbi5pbmZvLXRpdGxlIHt9XFxuXFxuLmluZm8tZGF0YSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmluZm8tZGVzYyB7fVxcblxcbi5hcHAtbW9kYWwge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgYm94LXNoYWRvdzogMCAwIDFlbSByZ2IoMCAwIDAgLyAwLjMpO1xcbn1cXG5cXG4jbW9kYWwtYWRkLXRhc2sge31cXG5cXG4jbmV3LXRhc2stZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMWVtO1xcbn1cXG5cXG4jbW9kYWwtYWRkLWdyb3VwIHt9XFxuXFxuLmZvcm0taW5wdXQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDAuMWVtO1xcbn1cXG5cXG4uZm9ybS1pbnB1dC1maWVsZCB7fVxcblxcbi5tb2RhbC1jb250cm9scyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ2FwOiAwLjhlbTtcXG59XFxuXFxuLmFjdGlvbi1idG4ge1xcbiAgICBwYWRkaW5nOiAwLjVlbTtcXG4gICAgY29sb3I6IHJnYigyNTUgMjU1IDI1NSk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCAwIDApO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uYWN0aW9uLWJ0bjpob3ZlciB7XFxuICAgIGNvbG9yOiByZ2IoMCAwIDApO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDNkM2QzO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5uYXYtY29udHJvbHMge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb250cm9scy1idG4ge1xcbiAgICBwYWRkaW5nOiAwLjdlbTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4jbmV3LWdyb3VwLWZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFlbTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBvYmplY3QpIHtcbiAgaWYgKHRhcmdldCA9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYXNzaWduIHJlcXVpcmVzIHRoYXQgaW5wdXQgcGFyYW1ldGVyIG5vdCBiZSBudWxsIG9yIHVuZGVmaW5lZCcpO1xuICB9XG4gIGZvciAodmFyIHByb3BlcnR5IGluIG9iamVjdCkge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSkpIHtcbiAgICAgIDtcbiAgICAgIHRhcmdldFtwcm9wZXJ0eV0gPSBvYmplY3RbcHJvcGVydHldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdGFyZ2V0O1xufSIsImltcG9ydCBhc3NpZ24gZnJvbSBcIi4uL2Fzc2lnbi9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2xvbmVPYmplY3Qob2JqZWN0KSB7XG4gIHJldHVybiBhc3NpZ24oe30sIG9iamVjdCk7XG59IiwiaW1wb3J0IGRlZmF1bHRMb2NhbGUgZnJvbSBcIi4uLy4uL2xvY2FsZS9lbi1VUy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZGVmYXVsdExvY2FsZTsiLCJ2YXIgZGVmYXVsdE9wdGlvbnMgPSB7fTtcbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0T3B0aW9ucygpIHtcbiAgcmV0dXJuIGRlZmF1bHRPcHRpb25zO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHRPcHRpb25zKG5ld09wdGlvbnMpIHtcbiAgZGVmYXVsdE9wdGlvbnMgPSBuZXdPcHRpb25zO1xufSIsIi8qKlxuICogR29vZ2xlIENocm9tZSBhcyBvZiA2Ny4wLjMzOTYuODcgaW50cm9kdWNlZCB0aW1lem9uZXMgd2l0aCBvZmZzZXQgdGhhdCBpbmNsdWRlcyBzZWNvbmRzLlxuICogVGhleSB1c3VhbGx5IGFwcGVhciBmb3IgZGF0ZXMgdGhhdCBkZW5vdGUgdGltZSBiZWZvcmUgdGhlIHRpbWV6b25lcyB3ZXJlIGludHJvZHVjZWRcbiAqIChlLmcuIGZvciAnRXVyb3BlL1ByYWd1ZScgdGltZXpvbmUgdGhlIG9mZnNldCBpcyBHTVQrMDA6NTc6NDQgYmVmb3JlIDEgT2N0b2JlciAxODkxXG4gKiBhbmQgR01UKzAxOjAwOjAwIGFmdGVyIHRoYXQgZGF0ZSlcbiAqXG4gKiBEYXRlI2dldFRpbWV6b25lT2Zmc2V0IHJldHVybnMgdGhlIG9mZnNldCBpbiBtaW51dGVzIGFuZCB3b3VsZCByZXR1cm4gNTcgZm9yIHRoZSBleGFtcGxlIGFib3ZlLFxuICogd2hpY2ggd291bGQgbGVhZCB0byBpbmNvcnJlY3QgY2FsY3VsYXRpb25zLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgdGltZXpvbmUgb2Zmc2V0IGluIG1pbGxpc2Vjb25kcyB0aGF0IHRha2VzIHNlY29uZHMgaW4gYWNjb3VudC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlKSB7XG4gIHZhciB1dGNEYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpLCBkYXRlLmdldEhvdXJzKCksIGRhdGUuZ2V0TWludXRlcygpLCBkYXRlLmdldFNlY29uZHMoKSwgZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSkpO1xuICB1dGNEYXRlLnNldFVUQ0Z1bGxZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSk7XG4gIHJldHVybiBkYXRlLmdldFRpbWUoKSAtIHV0Y0RhdGUuZ2V0VGltZSgpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsInZhciByb3VuZGluZ01hcCA9IHtcbiAgY2VpbDogTWF0aC5jZWlsLFxuICByb3VuZDogTWF0aC5yb3VuZCxcbiAgZmxvb3I6IE1hdGguZmxvb3IsXG4gIHRydW5jOiBmdW5jdGlvbiB0cnVuYyh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA8IDAgPyBNYXRoLmNlaWwodmFsdWUpIDogTWF0aC5mbG9vcih2YWx1ZSk7XG4gIH0gLy8gTWF0aC50cnVuYyBpcyBub3Qgc3VwcG9ydGVkIGJ5IElFXG59O1xuXG52YXIgZGVmYXVsdFJvdW5kaW5nTWV0aG9kID0gJ3RydW5jJztcbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3VuZGluZ01ldGhvZChtZXRob2QpIHtcbiAgcmV0dXJuIG1ldGhvZCA/IHJvdW5kaW5nTWFwW21ldGhvZF0gOiByb3VuZGluZ01hcFtkZWZhdWx0Um91bmRpbmdNZXRob2RdO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgY29tcGFyZUFzY1xuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb21wYXJlIHRoZSB0d28gZGF0ZXMgYW5kIHJldHVybiAtMSwgMCBvciAxLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29tcGFyZSB0aGUgdHdvIGRhdGVzIGFuZCByZXR1cm4gMSBpZiB0aGUgZmlyc3QgZGF0ZSBpcyBhZnRlciB0aGUgc2Vjb25kLFxuICogLTEgaWYgdGhlIGZpcnN0IGRhdGUgaXMgYmVmb3JlIHRoZSBzZWNvbmQgb3IgMCBpZiBkYXRlcyBhcmUgZXF1YWwuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjb21wYXJlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY29tcGFyZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIHJlc3VsdCBvZiB0aGUgY29tcGFyaXNvblxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb21wYXJlIDExIEZlYnJ1YXJ5IDE5ODcgYW5kIDEwIEp1bHkgMTk4OTpcbiAqIGNvbnN0IHJlc3VsdCA9IGNvbXBhcmVBc2MobmV3IERhdGUoMTk4NywgMSwgMTEpLCBuZXcgRGF0ZSgxOTg5LCA2LCAxMCkpXG4gKiAvLz0+IC0xXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFNvcnQgdGhlIGFycmF5IG9mIGRhdGVzOlxuICogY29uc3QgcmVzdWx0ID0gW1xuICogICBuZXcgRGF0ZSgxOTk1LCA2LCAyKSxcbiAqICAgbmV3IERhdGUoMTk4NywgMSwgMTEpLFxuICogICBuZXcgRGF0ZSgxOTg5LCA2LCAxMClcbiAqIF0uc29ydChjb21wYXJlQXNjKVxuICogLy89PiBbXG4gKiAvLyAgIFdlZCBGZWIgMTEgMTk4NyAwMDowMDowMCxcbiAqIC8vICAgTW9uIEp1bCAxMCAxOTg5IDAwOjAwOjAwLFxuICogLy8gICBTdW4gSnVsIDAyIDE5OTUgMDA6MDA6MDBcbiAqIC8vIF1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcGFyZUFzYyhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0ID0gdG9EYXRlKGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0ID0gdG9EYXRlKGRpcnR5RGF0ZVJpZ2h0KTtcbiAgdmFyIGRpZmYgPSBkYXRlTGVmdC5nZXRUaW1lKCkgLSBkYXRlUmlnaHQuZ2V0VGltZSgpO1xuICBpZiAoZGlmZiA8IDApIHtcbiAgICByZXR1cm4gLTE7XG4gIH0gZWxzZSBpZiAoZGlmZiA+IDApIHtcbiAgICByZXR1cm4gMTtcbiAgICAvLyBSZXR1cm4gMCBpZiBkaWZmIGlzIDA7IHJldHVybiBOYU4gaWYgZGlmZiBpcyBOYU5cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZGlmZjtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHNcbiAqIEBjYXRlZ29yeSBNb250aCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBtb250aHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBtb250aHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIGVhcmxpZXIgZGF0ZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIG51bWJlciBvZiBjYWxlbmRhciBtb250aHNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgY2FsZW5kYXIgbW9udGhzIGFyZSBiZXR3ZWVuIDMxIEphbnVhcnkgMjAxNCBhbmQgMSBTZXB0ZW1iZXIgMjAxND9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzKFxuICogICBuZXcgRGF0ZSgyMDE0LCA4LCAxKSxcbiAqICAgbmV3IERhdGUoMjAxNCwgMCwgMzEpXG4gKiApXG4gKiAvLz0+IDhcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eURhdGVSaWdodCk7XG4gIHZhciB5ZWFyRGlmZiA9IGRhdGVMZWZ0LmdldEZ1bGxZZWFyKCkgLSBkYXRlUmlnaHQuZ2V0RnVsbFllYXIoKTtcbiAgdmFyIG1vbnRoRGlmZiA9IGRhdGVMZWZ0LmdldE1vbnRoKCkgLSBkYXRlUmlnaHQuZ2V0TW9udGgoKTtcbiAgcmV0dXJuIHllYXJEaWZmICogMTIgKyBtb250aERpZmY7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHNcbiAqIEBjYXRlZ29yeSBNaWxsaXNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIGVhcmxpZXIgZGF0ZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgbWlsbGlzZWNvbmRzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxNCAxMjozMDoyMC42MDAgYW5kIDIgSnVseSAyMDE0IDEyOjMwOjIxLjcwMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcyhcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMiwgMTIsIDMwLCAyMSwgNzAwKSxcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMiwgMTIsIDMwLCAyMCwgNjAwKVxuICogKVxuICogLy89PiAxMTAwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICByZXR1cm4gdG9EYXRlKGRhdGVMZWZ0KS5nZXRUaW1lKCkgLSB0b0RhdGUoZGF0ZVJpZ2h0KS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMgZnJvbSBcIi4uL2RpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzL2luZGV4LmpzXCI7XG5pbXBvcnQgY29tcGFyZUFzYyBmcm9tIFwiLi4vY29tcGFyZUFzYy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBpc0xhc3REYXlPZk1vbnRoIGZyb20gXCIuLi9pc0xhc3REYXlPZk1vbnRoL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJbk1vbnRoc1xuICogQGNhdGVnb3J5IE1vbnRoIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIGZ1bGwgbW9udGhzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgZnVsbCBtb250aHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMgdXNpbmcgdHJ1bmMgYXMgYSBkZWZhdWx0IHJvdW5kaW5nIG1ldGhvZC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgZWFybGllciBkYXRlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbnVtYmVyIG9mIGZ1bGwgbW9udGhzXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IGZ1bGwgbW9udGhzIGFyZSBiZXR3ZWVuIDMxIEphbnVhcnkgMjAxNCBhbmQgMSBTZXB0ZW1iZXIgMjAxND9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbk1vbnRocyhuZXcgRGF0ZSgyMDE0LCA4LCAxKSwgbmV3IERhdGUoMjAxNCwgMCwgMzEpKVxuICogLy89PiA3XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJbk1vbnRocyhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0ID0gdG9EYXRlKGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0ID0gdG9EYXRlKGRpcnR5RGF0ZVJpZ2h0KTtcbiAgdmFyIHNpZ24gPSBjb21wYXJlQXNjKGRhdGVMZWZ0LCBkYXRlUmlnaHQpO1xuICB2YXIgZGlmZmVyZW5jZSA9IE1hdGguYWJzKGRpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpKTtcbiAgdmFyIHJlc3VsdDtcblxuICAvLyBDaGVjayBmb3IgdGhlIGRpZmZlcmVuY2Ugb2YgbGVzcyB0aGFuIG1vbnRoXG4gIGlmIChkaWZmZXJlbmNlIDwgMSkge1xuICAgIHJlc3VsdCA9IDA7XG4gIH0gZWxzZSB7XG4gICAgaWYgKGRhdGVMZWZ0LmdldE1vbnRoKCkgPT09IDEgJiYgZGF0ZUxlZnQuZ2V0RGF0ZSgpID4gMjcpIHtcbiAgICAgIC8vIFRoaXMgd2lsbCBjaGVjayBpZiB0aGUgZGF0ZSBpcyBlbmQgb2YgRmViIGFuZCBhc3NpZ24gYSBoaWdoZXIgZW5kIG9mIG1vbnRoIGRhdGVcbiAgICAgIC8vIHRvIGNvbXBhcmUgaXQgd2l0aCBKYW5cbiAgICAgIGRhdGVMZWZ0LnNldERhdGUoMzApO1xuICAgIH1cbiAgICBkYXRlTGVmdC5zZXRNb250aChkYXRlTGVmdC5nZXRNb250aCgpIC0gc2lnbiAqIGRpZmZlcmVuY2UpO1xuXG4gICAgLy8gTWF0aC5hYnMoZGlmZiBpbiBmdWxsIG1vbnRocyAtIGRpZmYgaW4gY2FsZW5kYXIgbW9udGhzKSA9PT0gMSBpZiBsYXN0IGNhbGVuZGFyIG1vbnRoIGlzIG5vdCBmdWxsXG4gICAgLy8gSWYgc28sIHJlc3VsdCBtdXN0IGJlIGRlY3JlYXNlZCBieSAxIGluIGFic29sdXRlIHZhbHVlXG4gICAgdmFyIGlzTGFzdE1vbnRoTm90RnVsbCA9IGNvbXBhcmVBc2MoZGF0ZUxlZnQsIGRhdGVSaWdodCkgPT09IC1zaWduO1xuXG4gICAgLy8gQ2hlY2sgZm9yIGNhc2VzIG9mIG9uZSBmdWxsIGNhbGVuZGFyIG1vbnRoXG4gICAgaWYgKGlzTGFzdERheU9mTW9udGgodG9EYXRlKGRpcnR5RGF0ZUxlZnQpKSAmJiBkaWZmZXJlbmNlID09PSAxICYmIGNvbXBhcmVBc2MoZGlydHlEYXRlTGVmdCwgZGF0ZVJpZ2h0KSA9PT0gMSkge1xuICAgICAgaXNMYXN0TW9udGhOb3RGdWxsID0gZmFsc2U7XG4gICAgfVxuICAgIHJlc3VsdCA9IHNpZ24gKiAoZGlmZmVyZW5jZSAtIE51bWJlcihpc0xhc3RNb250aE5vdEZ1bGwpKTtcbiAgfVxuXG4gIC8vIFByZXZlbnQgbmVnYXRpdmUgemVyb1xuICByZXR1cm4gcmVzdWx0ID09PSAwID8gMCA6IHJlc3VsdDtcbn0iLCJpbXBvcnQgZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9kaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXRSb3VuZGluZ01ldGhvZCB9IGZyb20gXCIuLi9fbGliL3JvdW5kaW5nTWV0aG9kcy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5TZWNvbmRzXG4gKiBAY2F0ZWdvcnkgU2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIHNlY29uZHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBzZWNvbmRzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBlYXJsaWVyIGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLnJvdW5kaW5nTWV0aG9kPSd0cnVuYyddIC0gYSByb3VuZGluZyBtZXRob2QgKGBjZWlsYCwgYGZsb29yYCwgYHJvdW5kYCBvciBgdHJ1bmNgKVxuICogQHJldHVybnMge051bWJlcn0gdGhlIG51bWJlciBvZiBzZWNvbmRzXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IHNlY29uZHMgYXJlIGJldHdlZW5cbiAqIC8vIDIgSnVseSAyMDE0IDEyOjMwOjA3Ljk5OSBhbmQgMiBKdWx5IDIwMTQgMTI6MzA6MjAuMDAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluU2Vjb25kcyhcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMiwgMTIsIDMwLCAyMCwgMCksXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIsIDEyLCAzMCwgNywgOTk5KVxuICogKVxuICogLy89PiAxMlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5TZWNvbmRzKGRhdGVMZWZ0LCBkYXRlUmlnaHQsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkaWZmID0gZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpIC8gMTAwMDtcbiAgcmV0dXJuIGdldFJvdW5kaW5nTWV0aG9kKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5yb3VuZGluZ01ldGhvZCkoZGlmZik7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBlbmRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIGVuZCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGVuZCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBlbmQgb2YgYSBkYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgZW5kIG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gZW5kT2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDIzOjU5OjU5Ljk5OVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlbmRPZkRheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIGRhdGUuc2V0SG91cnMoMjMsIDU5LCA1OSwgOTk5KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBlbmRPZk1vbnRoXG4gKiBAY2F0ZWdvcnkgTW9udGggSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBlbmQgb2YgYSBtb250aCBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGVuZCBvZiBhIG1vbnRoIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIGVuZCBvZiBhIG1vbnRoXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIGVuZCBvZiBhIG1vbnRoIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gZW5kT2ZNb250aChuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDMwIDIwMTQgMjM6NTk6NTkuOTk5XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVuZE9mTW9udGgoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgbW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG4gIGRhdGUuc2V0RnVsbFllYXIoZGF0ZS5nZXRGdWxsWWVhcigpLCBtb250aCArIDEsIDApO1xuICBkYXRlLnNldEhvdXJzKDIzLCA1OSwgNTksIDk5OSk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbmltcG9ydCBjb21wYXJlQXNjIGZyb20gXCIuLi9jb21wYXJlQXNjL2luZGV4LmpzXCI7XG5pbXBvcnQgZGlmZmVyZW5jZUluTW9udGhzIGZyb20gXCIuLi9kaWZmZXJlbmNlSW5Nb250aHMvaW5kZXguanNcIjtcbmltcG9ydCBkaWZmZXJlbmNlSW5TZWNvbmRzIGZyb20gXCIuLi9kaWZmZXJlbmNlSW5TZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgZGVmYXVsdExvY2FsZSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0TG9jYWxlL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBjbG9uZU9iamVjdCBmcm9tIFwiLi4vX2xpYi9jbG9uZU9iamVjdC9pbmRleC5qc1wiO1xuaW1wb3J0IGFzc2lnbiBmcm9tIFwiLi4vX2xpYi9hc3NpZ24vaW5kZXguanNcIjtcbmltcG9ydCBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlOVVRFU19JTl9EQVkgPSAxNDQwO1xudmFyIE1JTlVURVNfSU5fQUxNT1NUX1RXT19EQVlTID0gMjUyMDtcbnZhciBNSU5VVEVTX0lOX01PTlRIID0gNDMyMDA7XG52YXIgTUlOVVRFU19JTl9UV09fTU9OVEhTID0gODY0MDA7XG5cbi8qKlxuICogQG5hbWUgZm9ybWF0RGlzdGFuY2VcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcyBpbiB3b3Jkcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMgaW4gd29yZHMuXG4gKlxuICogfCBEaXN0YW5jZSBiZXR3ZWVuIGRhdGVzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJlc3VsdCAgICAgICAgICAgICAgfFxuICogfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAwIC4uLiAzMCBzZWNzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGxlc3MgdGhhbiBhIG1pbnV0ZSAgfFxuICogfCAzMCBzZWNzIC4uLiAxIG1pbiAzMCBzZWNzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDEgbWludXRlICAgICAgICAgICAgfFxuICogfCAxIG1pbiAzMCBzZWNzIC4uLiA0NCBtaW5zIDMwIHNlY3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFsyLi40NF0gbWludXRlcyAgICAgfFxuICogfCA0NCBtaW5zIC4uLiAzMCBzZWNzIC4uLiA4OSBtaW5zIDMwIHNlY3MgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFib3V0IDEgaG91ciAgICAgICAgfFxuICogfCA4OSBtaW5zIDMwIHNlY3MgLi4uIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgICAgICAgICAgICAgICAgICAgICAgICB8IGFib3V0IFsyLi4yNF0gaG91cnMgfFxuICogfCAyMyBocnMgNTkgbWlucyAzMCBzZWNzIC4uLiA0MSBocnMgNTkgbWlucyAzMCBzZWNzICAgICAgICAgICAgICAgICB8IDEgZGF5ICAgICAgICAgICAgICAgfFxuICogfCA0MSBocnMgNTkgbWlucyAzMCBzZWNzIC4uLiAyOSBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgICAgICAgICB8IFsyLi4zMF0gZGF5cyAgICAgICAgfFxuICogfCAyOSBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgLi4uIDQ0IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyB8IGFib3V0IDEgbW9udGggICAgICAgfFxuICogfCA0NCBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgLi4uIDU5IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyB8IGFib3V0IDIgbW9udGhzICAgICAgfFxuICogfCA1OSBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgLi4uIDEgeXIgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFsyLi4xMl0gbW9udGhzICAgICAgfFxuICogfCAxIHlyIC4uLiAxIHlyIDMgbW9udGhzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFib3V0IDEgeWVhciAgICAgICAgfFxuICogfCAxIHlyIDMgbW9udGhzIC4uLiAxIHlyIDkgbW9udGggcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG92ZXIgMSB5ZWFyICAgICAgICAgfFxuICogfCAxIHlyIDkgbW9udGhzIC4uLiAyIHlycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFsbW9zdCAyIHllYXJzICAgICAgfFxuICogfCBOIHlycyAuLi4gTiB5cnMgMyBtb250aHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFib3V0IE4geWVhcnMgICAgICAgfFxuICogfCBOIHlycyAzIG1vbnRocyAuLi4gTiB5cnMgOSBtb250aHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG92ZXIgTiB5ZWFycyAgICAgICAgfFxuICogfCBOIHlycyA5IG1vbnRocyAuLi4gTisxIHlycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFsbW9zdCBOKzEgeWVhcnMgICAgfFxuICpcbiAqIFdpdGggYG9wdGlvbnMuaW5jbHVkZVNlY29uZHMgPT0gdHJ1ZWA6XG4gKiB8IERpc3RhbmNlIGJldHdlZW4gZGF0ZXMgfCBSZXN1bHQgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8IDAgc2VjcyAuLi4gNSBzZWNzICAgICAgfCBsZXNzIHRoYW4gNSBzZWNvbmRzICB8XG4gKiB8IDUgc2VjcyAuLi4gMTAgc2VjcyAgICAgfCBsZXNzIHRoYW4gMTAgc2Vjb25kcyB8XG4gKiB8IDEwIHNlY3MgLi4uIDIwIHNlY3MgICAgfCBsZXNzIHRoYW4gMjAgc2Vjb25kcyB8XG4gKiB8IDIwIHNlY3MgLi4uIDQwIHNlY3MgICAgfCBoYWxmIGEgbWludXRlICAgICAgICB8XG4gKiB8IDQwIHNlY3MgLi4uIDYwIHNlY3MgICAgfCBsZXNzIHRoYW4gYSBtaW51dGUgICB8XG4gKiB8IDYwIHNlY3MgLi4uIDkwIHNlY3MgICAgfCAxIG1pbnV0ZSAgICAgICAgICAgICB8XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBiYXNlRGF0ZSAtIHRoZSBkYXRlIHRvIGNvbXBhcmUgd2l0aFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmluY2x1ZGVTZWNvbmRzPWZhbHNlXSAtIGRpc3RhbmNlcyBsZXNzIHRoYW4gYSBtaW51dGUgYXJlIG1vcmUgZGV0YWlsZWRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuYWRkU3VmZml4PWZhbHNlXSAtIHJlc3VsdCBpbmRpY2F0ZXMgaWYgdGhlIHNlY29uZCBkYXRlIGlzIGVhcmxpZXIgb3IgbGF0ZXIgdGhhbiB0aGUgZmlyc3RcbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHJldHVybnMge1N0cmluZ30gdGhlIGRpc3RhbmNlIGluIHdvcmRzXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgZGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgYmFzZURhdGVgIG11c3Qgbm90IGJlIEludmFsaWQgRGF0ZVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGZvcm1hdERpc3RhbmNlYCBwcm9wZXJ0eVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGF0IGlzIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIDIgSnVseSAyMDE0IGFuZCAxIEphbnVhcnkgMjAxNT9cbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlKG5ldyBEYXRlKDIwMTQsIDYsIDIpLCBuZXcgRGF0ZSgyMDE1LCAwLCAxKSlcbiAqIC8vPT4gJzYgbW9udGhzJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGF0IGlzIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIDEgSmFudWFyeSAyMDE1IDAwOjAwOjE1XG4gKiAvLyBhbmQgMSBKYW51YXJ5IDIwMTUgMDA6MDA6MDAsIGluY2x1ZGluZyBzZWNvbmRzP1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2UoXG4gKiAgIG5ldyBEYXRlKDIwMTUsIDAsIDEsIDAsIDAsIDE1KSxcbiAqICAgbmV3IERhdGUoMjAxNSwgMCwgMSwgMCwgMCwgMCksXG4gKiAgIHsgaW5jbHVkZVNlY29uZHM6IHRydWUgfVxuICogKVxuICogLy89PiAnbGVzcyB0aGFuIDIwIHNlY29uZHMnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoYXQgaXMgdGhlIGRpc3RhbmNlIGZyb20gMSBKYW51YXJ5IDIwMTZcbiAqIC8vIHRvIDEgSmFudWFyeSAyMDE1LCB3aXRoIGEgc3VmZml4P1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2UobmV3IERhdGUoMjAxNSwgMCwgMSksIG5ldyBEYXRlKDIwMTYsIDAsIDEpLCB7XG4gKiAgIGFkZFN1ZmZpeDogdHJ1ZVxuICogfSlcbiAqIC8vPT4gJ2Fib3V0IDEgeWVhciBhZ28nXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoYXQgaXMgdGhlIGRpc3RhbmNlIGJldHdlZW4gMSBBdWd1c3QgMjAxNiBhbmQgMSBKYW51YXJ5IDIwMTUgaW4gRXNwZXJhbnRvP1xuICogaW1wb3J0IHsgZW9Mb2NhbGUgfSBmcm9tICdkYXRlLWZucy9sb2NhbGUvZW8nXG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXREaXN0YW5jZShuZXcgRGF0ZSgyMDE2LCA3LCAxKSwgbmV3IERhdGUoMjAxNSwgMCwgMSksIHtcbiAqICAgbG9jYWxlOiBlb0xvY2FsZVxuICogfSlcbiAqIC8vPT4gJ3BsaSBvbCAxIGphcm8nXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0RGlzdGFuY2UoZGlydHlEYXRlLCBkaXJ0eUJhc2VEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfb3B0aW9ucyRsb2NhbGU7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgbG9jYWxlID0gKF9yZWYgPSAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmxvY2FsZSkgIT09IG51bGwgJiYgX29wdGlvbnMkbG9jYWxlICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRsb2NhbGUgOiBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiBkZWZhdWx0TG9jYWxlO1xuICBpZiAoIWxvY2FsZS5mb3JtYXREaXN0YW5jZSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdsb2NhbGUgbXVzdCBjb250YWluIGZvcm1hdERpc3RhbmNlIHByb3BlcnR5Jyk7XG4gIH1cbiAgdmFyIGNvbXBhcmlzb24gPSBjb21wYXJlQXNjKGRpcnR5RGF0ZSwgZGlydHlCYXNlRGF0ZSk7XG4gIGlmIChpc05hTihjb21wYXJpc29uKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHRpbWUgdmFsdWUnKTtcbiAgfVxuICB2YXIgbG9jYWxpemVPcHRpb25zID0gYXNzaWduKGNsb25lT2JqZWN0KG9wdGlvbnMpLCB7XG4gICAgYWRkU3VmZml4OiBCb29sZWFuKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5hZGRTdWZmaXgpLFxuICAgIGNvbXBhcmlzb246IGNvbXBhcmlzb25cbiAgfSk7XG4gIHZhciBkYXRlTGVmdDtcbiAgdmFyIGRhdGVSaWdodDtcbiAgaWYgKGNvbXBhcmlzb24gPiAwKSB7XG4gICAgZGF0ZUxlZnQgPSB0b0RhdGUoZGlydHlCYXNlRGF0ZSk7XG4gICAgZGF0ZVJpZ2h0ID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIH0gZWxzZSB7XG4gICAgZGF0ZUxlZnQgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgICBkYXRlUmlnaHQgPSB0b0RhdGUoZGlydHlCYXNlRGF0ZSk7XG4gIH1cbiAgdmFyIHNlY29uZHMgPSBkaWZmZXJlbmNlSW5TZWNvbmRzKGRhdGVSaWdodCwgZGF0ZUxlZnQpO1xuICB2YXIgb2Zmc2V0SW5TZWNvbmRzID0gKGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZVJpZ2h0KSAtIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZUxlZnQpKSAvIDEwMDA7XG4gIHZhciBtaW51dGVzID0gTWF0aC5yb3VuZCgoc2Vjb25kcyAtIG9mZnNldEluU2Vjb25kcykgLyA2MCk7XG4gIHZhciBtb250aHM7XG5cbiAgLy8gMCB1cCB0byAyIG1pbnNcbiAgaWYgKG1pbnV0ZXMgPCAyKSB7XG4gICAgaWYgKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuaW5jbHVkZVNlY29uZHMpIHtcbiAgICAgIGlmIChzZWNvbmRzIDwgNSkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdsZXNzVGhhblhTZWNvbmRzJywgNSwgbG9jYWxpemVPcHRpb25zKTtcbiAgICAgIH0gZWxzZSBpZiAoc2Vjb25kcyA8IDEwKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2xlc3NUaGFuWFNlY29uZHMnLCAxMCwgbG9jYWxpemVPcHRpb25zKTtcbiAgICAgIH0gZWxzZSBpZiAoc2Vjb25kcyA8IDIwKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2xlc3NUaGFuWFNlY29uZHMnLCAyMCwgbG9jYWxpemVPcHRpb25zKTtcbiAgICAgIH0gZWxzZSBpZiAoc2Vjb25kcyA8IDQwKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2hhbGZBTWludXRlJywgMCwgbG9jYWxpemVPcHRpb25zKTtcbiAgICAgIH0gZWxzZSBpZiAoc2Vjb25kcyA8IDYwKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2xlc3NUaGFuWE1pbnV0ZXMnLCAxLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgneE1pbnV0ZXMnLCAxLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAobWludXRlcyA9PT0gMCkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdsZXNzVGhhblhNaW51dGVzJywgMSwgbG9jYWxpemVPcHRpb25zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ3hNaW51dGVzJywgbWludXRlcywgbG9jYWxpemVPcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAyIG1pbnMgdXAgdG8gMC43NSBocnNcbiAgfSBlbHNlIGlmIChtaW51dGVzIDwgNDUpIHtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCd4TWludXRlcycsIG1pbnV0ZXMsIGxvY2FsaXplT3B0aW9ucyk7XG5cbiAgICAvLyAwLjc1IGhycyB1cCB0byAxLjUgaHJzXG4gIH0gZWxzZSBpZiAobWludXRlcyA8IDkwKSB7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnYWJvdXRYSG91cnMnLCAxLCBsb2NhbGl6ZU9wdGlvbnMpO1xuXG4gICAgLy8gMS41IGhycyB1cCB0byAyNCBocnNcbiAgfSBlbHNlIGlmIChtaW51dGVzIDwgTUlOVVRFU19JTl9EQVkpIHtcbiAgICB2YXIgaG91cnMgPSBNYXRoLnJvdW5kKG1pbnV0ZXMgLyA2MCk7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnYWJvdXRYSG91cnMnLCBob3VycywgbG9jYWxpemVPcHRpb25zKTtcblxuICAgIC8vIDEgZGF5IHVwIHRvIDEuNzUgZGF5c1xuICB9IGVsc2UgaWYgKG1pbnV0ZXMgPCBNSU5VVEVTX0lOX0FMTU9TVF9UV09fREFZUykge1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ3hEYXlzJywgMSwgbG9jYWxpemVPcHRpb25zKTtcblxuICAgIC8vIDEuNzUgZGF5cyB1cCB0byAzMCBkYXlzXG4gIH0gZWxzZSBpZiAobWludXRlcyA8IE1JTlVURVNfSU5fTU9OVEgpIHtcbiAgICB2YXIgZGF5cyA9IE1hdGgucm91bmQobWludXRlcyAvIE1JTlVURVNfSU5fREFZKTtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCd4RGF5cycsIGRheXMsIGxvY2FsaXplT3B0aW9ucyk7XG5cbiAgICAvLyAxIG1vbnRoIHVwIHRvIDIgbW9udGhzXG4gIH0gZWxzZSBpZiAobWludXRlcyA8IE1JTlVURVNfSU5fVFdPX01PTlRIUykge1xuICAgIG1vbnRocyA9IE1hdGgucm91bmQobWludXRlcyAvIE1JTlVURVNfSU5fTU9OVEgpO1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2Fib3V0WE1vbnRocycsIG1vbnRocywgbG9jYWxpemVPcHRpb25zKTtcbiAgfVxuICBtb250aHMgPSBkaWZmZXJlbmNlSW5Nb250aHMoZGF0ZVJpZ2h0LCBkYXRlTGVmdCk7XG5cbiAgLy8gMiBtb250aHMgdXAgdG8gMTIgbW9udGhzXG4gIGlmIChtb250aHMgPCAxMikge1xuICAgIHZhciBuZWFyZXN0TW9udGggPSBNYXRoLnJvdW5kKG1pbnV0ZXMgLyBNSU5VVEVTX0lOX01PTlRIKTtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCd4TW9udGhzJywgbmVhcmVzdE1vbnRoLCBsb2NhbGl6ZU9wdGlvbnMpO1xuXG4gICAgLy8gMSB5ZWFyIHVwIHRvIG1heCBEYXRlXG4gIH0gZWxzZSB7XG4gICAgdmFyIG1vbnRoc1NpbmNlU3RhcnRPZlllYXIgPSBtb250aHMgJSAxMjtcbiAgICB2YXIgeWVhcnMgPSBNYXRoLmZsb29yKG1vbnRocyAvIDEyKTtcblxuICAgIC8vIE4geWVhcnMgdXAgdG8gMSB5ZWFycyAzIG1vbnRoc1xuICAgIGlmIChtb250aHNTaW5jZVN0YXJ0T2ZZZWFyIDwgMykge1xuICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnYWJvdXRYWWVhcnMnLCB5ZWFycywgbG9jYWxpemVPcHRpb25zKTtcblxuICAgICAgLy8gTiB5ZWFycyAzIG1vbnRocyB1cCB0byBOIHllYXJzIDkgbW9udGhzXG4gICAgfSBlbHNlIGlmIChtb250aHNTaW5jZVN0YXJ0T2ZZZWFyIDwgOSkge1xuICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnb3ZlclhZZWFycycsIHllYXJzLCBsb2NhbGl6ZU9wdGlvbnMpO1xuXG4gICAgICAvLyBOIHllYXJzIDkgbW9udGhzIHVwIHRvIE4geWVhciAxMiBtb250aHNcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnYWxtb3N0WFllYXJzJywgeWVhcnMgKyAxLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgIH1cbiAgfVxufSIsImltcG9ydCBkaXN0YW5jZUluV29yZHMgZnJvbSBcIi4uL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBmb3JtYXREaXN0YW5jZVRvTm93XG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZSBhbmQgbm93IGluIHdvcmRzLlxuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZSBhbmQgbm93IGluIHdvcmRzLlxuICpcbiAqIHwgRGlzdGFuY2UgdG8gbm93ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSZXN1bHQgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgMCAuLi4gMzAgc2VjcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBsZXNzIHRoYW4gYSBtaW51dGUgIHxcbiAqIHwgMzAgc2VjcyAuLi4gMSBtaW4gMzAgc2VjcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAxIG1pbnV0ZSAgICAgICAgICAgIHxcbiAqIHwgMSBtaW4gMzAgc2VjcyAuLi4gNDQgbWlucyAzMCBzZWNzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBbMi4uNDRdIG1pbnV0ZXMgICAgIHxcbiAqIHwgNDQgbWlucyAuLi4gMzAgc2VjcyAuLi4gODkgbWlucyAzMCBzZWNzICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYm91dCAxIGhvdXIgICAgICAgIHxcbiAqIHwgODkgbWlucyAzMCBzZWNzIC4uLiAyMyBocnMgNTkgbWlucyAzMCBzZWNzICAgICAgICAgICAgICAgICAgICAgICAgfCBhYm91dCBbMi4uMjRdIGhvdXJzIHxcbiAqIHwgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAuLi4gNDEgaHJzIDU5IG1pbnMgMzAgc2VjcyAgICAgICAgICAgICAgICAgfCAxIGRheSAgICAgICAgICAgICAgIHxcbiAqIHwgNDEgaHJzIDU5IG1pbnMgMzAgc2VjcyAuLi4gMjkgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzICAgICAgICAgfCBbMi4uMzBdIGRheXMgICAgICAgIHxcbiAqIHwgMjkgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIC4uLiA0NCBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgfCBhYm91dCAxIG1vbnRoICAgICAgIHxcbiAqIHwgNDQgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIC4uLiA1OSBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgfCBhYm91dCAyIG1vbnRocyAgICAgIHxcbiAqIHwgNTkgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIC4uLiAxIHlyICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBbMi4uMTJdIG1vbnRocyAgICAgIHxcbiAqIHwgMSB5ciAuLi4gMSB5ciAzIG1vbnRocyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYm91dCAxIHllYXIgICAgICAgIHxcbiAqIHwgMSB5ciAzIG1vbnRocyAuLi4gMSB5ciA5IG1vbnRoIHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBvdmVyIDEgeWVhciAgICAgICAgIHxcbiAqIHwgMSB5ciA5IG1vbnRocyAuLi4gMiB5cnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhbG1vc3QgMiB5ZWFycyAgICAgIHxcbiAqIHwgTiB5cnMgLi4uIE4geXJzIDMgbW9udGhzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYm91dCBOIHllYXJzICAgICAgIHxcbiAqIHwgTiB5cnMgMyBtb250aHMgLi4uIE4geXJzIDkgbW9udGhzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBvdmVyIE4geWVhcnMgICAgICAgIHxcbiAqIHwgTiB5cnMgOSBtb250aHMgLi4uIE4rMSB5cnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhbG1vc3QgTisxIHllYXJzICAgIHxcbiAqXG4gKiBXaXRoIGBvcHRpb25zLmluY2x1ZGVTZWNvbmRzID09IHRydWVgOlxuICogfCBEaXN0YW5jZSB0byBub3cgICAgIHwgUmVzdWx0ICAgICAgICAgICAgICAgfFxuICogfC0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAwIHNlY3MgLi4uIDUgc2VjcyAgIHwgbGVzcyB0aGFuIDUgc2Vjb25kcyAgfFxuICogfCA1IHNlY3MgLi4uIDEwIHNlY3MgIHwgbGVzcyB0aGFuIDEwIHNlY29uZHMgfFxuICogfCAxMCBzZWNzIC4uLiAyMCBzZWNzIHwgbGVzcyB0aGFuIDIwIHNlY29uZHMgfFxuICogfCAyMCBzZWNzIC4uLiA0MCBzZWNzIHwgaGFsZiBhIG1pbnV0ZSAgICAgICAgfFxuICogfCA0MCBzZWNzIC4uLiA2MCBzZWNzIHwgbGVzcyB0aGFuIGEgbWludXRlICAgfFxuICogfCA2MCBzZWNzIC4uLiA5MCBzZWNzIHwgMSBtaW51dGUgICAgICAgICAgICAgfFxuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGdpdmVuIGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSB0aGUgb2JqZWN0IHdpdGggb3B0aW9uc1xuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5pbmNsdWRlU2Vjb25kcz1mYWxzZV0gLSBkaXN0YW5jZXMgbGVzcyB0aGFuIGEgbWludXRlIGFyZSBtb3JlIGRldGFpbGVkXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmFkZFN1ZmZpeD1mYWxzZV0gLSByZXN1bHQgc3BlY2lmaWVzIGlmIG5vdyBpcyBlYXJsaWVyIG9yIGxhdGVyIHRoYW4gdGhlIHBhc3NlZCBkYXRlXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEByZXR1cm5zIHtTdHJpbmd9IHRoZSBkaXN0YW5jZSBpbiB3b3Jkc1xuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgZGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgZm9ybWF0RGlzdGFuY2VgIHByb3BlcnR5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDEgSmFudWFyeSAyMDE1LCB3aGF0IGlzIHRoZSBkaXN0YW5jZSB0byAyIEp1bHkgMjAxND9cbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlVG9Ob3coXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIpXG4gKiApXG4gKiAvLz0+ICc2IG1vbnRocydcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgbm93IGlzIDEgSmFudWFyeSAyMDE1IDAwOjAwOjAwLFxuICogLy8gd2hhdCBpcyB0aGUgZGlzdGFuY2UgdG8gMSBKYW51YXJ5IDIwMTUgMDA6MDA6MTUsIGluY2x1ZGluZyBzZWNvbmRzP1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2VUb05vdyhcbiAqICAgbmV3IERhdGUoMjAxNSwgMCwgMSwgMCwgMCwgMTUpLFxuICogICB7aW5jbHVkZVNlY29uZHM6IHRydWV9XG4gKiApXG4gKiAvLz0+ICdsZXNzIHRoYW4gMjAgc2Vjb25kcydcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMSBKYW51YXJ5IDIwMTUsXG4gKiAvLyB3aGF0IGlzIHRoZSBkaXN0YW5jZSB0byAxIEphbnVhcnkgMjAxNiwgd2l0aCBhIHN1ZmZpeD9cbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlVG9Ob3coXG4gKiAgIG5ldyBEYXRlKDIwMTYsIDAsIDEpLFxuICogICB7YWRkU3VmZml4OiB0cnVlfVxuICogKVxuICogLy89PiAnaW4gYWJvdXQgMSB5ZWFyJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyAxIEphbnVhcnkgMjAxNSxcbiAqIC8vIHdoYXQgaXMgdGhlIGRpc3RhbmNlIHRvIDEgQXVndXN0IDIwMTYgaW4gRXNwZXJhbnRvP1xuICogY29uc3QgZW9Mb2NhbGUgPSByZXF1aXJlKCdkYXRlLWZucy9sb2NhbGUvZW8nKVxuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2VUb05vdyhcbiAqICAgbmV3IERhdGUoMjAxNiwgNywgMSksXG4gKiAgIHtsb2NhbGU6IGVvTG9jYWxlfVxuICogKVxuICogLy89PiAncGxpIG9sIDEgamFybydcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0RGlzdGFuY2VUb05vdyhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBkaXN0YW5jZUluV29yZHMoZGlydHlEYXRlLCBEYXRlLm5vdygpLCBvcHRpb25zKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBlbmRPZkRheSBmcm9tIFwiLi4vZW5kT2ZEYXkvaW5kZXguanNcIjtcbmltcG9ydCBlbmRPZk1vbnRoIGZyb20gXCIuLi9lbmRPZk1vbnRoL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc0xhc3REYXlPZk1vbnRoXG4gKiBAY2F0ZWdvcnkgTW9udGggSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdGhlIGxhc3QgZGF5IG9mIGEgbW9udGg/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB0aGUgbGFzdCBkYXkgb2YgYSBtb250aD9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB0aGUgbGFzdCBkYXkgb2YgYSBtb250aFxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElzIDI4IEZlYnJ1YXJ5IDIwMTQgdGhlIGxhc3QgZGF5IG9mIGEgbW9udGg/XG4gKiBjb25zdCByZXN1bHQgPSBpc0xhc3REYXlPZk1vbnRoKG5ldyBEYXRlKDIwMTQsIDEsIDI4KSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0xhc3REYXlPZk1vbnRoKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgcmV0dXJuIGVuZE9mRGF5KGRhdGUpLmdldFRpbWUoKSA9PT0gZW5kT2ZNb250aChkYXRlKS5nZXRUaW1lKCk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRGb3JtYXRMb25nRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICAvLyBUT0RPOiBSZW1vdmUgU3RyaW5nKClcbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgdmFyIGZvcm1hdCA9IGFyZ3MuZm9ybWF0c1t3aWR0aF0gfHwgYXJncy5mb3JtYXRzW2FyZ3MuZGVmYXVsdFdpZHRoXTtcbiAgICByZXR1cm4gZm9ybWF0O1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTG9jYWxpemVGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZGlydHlJbmRleCwgb3B0aW9ucykge1xuICAgIHZhciBjb250ZXh0ID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5jb250ZXh0ID8gU3RyaW5nKG9wdGlvbnMuY29udGV4dCkgOiAnc3RhbmRhbG9uZSc7XG4gICAgdmFyIHZhbHVlc0FycmF5O1xuICAgIGlmIChjb250ZXh0ID09PSAnZm9ybWF0dGluZycgJiYgYXJncy5mb3JtYXR0aW5nVmFsdWVzKSB7XG4gICAgICB2YXIgZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0Rm9ybWF0dGluZ1dpZHRoIHx8IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgdmFyIHdpZHRoID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGRlZmF1bHRXaWR0aDtcbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy5mb3JtYXR0aW5nVmFsdWVzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbZGVmYXVsdFdpZHRoXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF9kZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICAgIHZhciBfd2lkdGggPSBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MudmFsdWVzW193aWR0aF0gfHwgYXJncy52YWx1ZXNbX2RlZmF1bHRXaWR0aF07XG4gICAgfVxuICAgIHZhciBpbmRleCA9IGFyZ3MuYXJndW1lbnRDYWxsYmFjayA/IGFyZ3MuYXJndW1lbnRDYWxsYmFjayhkaXJ0eUluZGV4KSA6IGRpcnR5SW5kZXg7XG4gICAgLy8gQHRzLWlnbm9yZTogRm9yIHNvbWUgcmVhc29uIFR5cGVTY3JpcHQganVzdCBkb24ndCB3YW50IHRvIG1hdGNoIGl0LCBubyBtYXR0ZXIgaG93IGhhcmQgd2UgdHJ5LiBJIGNoYWxsZW5nZSB5b3UgdG8gdHJ5IHRvIHJlbW92ZSBpdCFcbiAgICByZXR1cm4gdmFsdWVzQXJyYXlbaW5kZXhdO1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGg7XG4gICAgdmFyIG1hdGNoUGF0dGVybiA9IHdpZHRoICYmIGFyZ3MubWF0Y2hQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5tYXRjaFBhdHRlcm5zW2FyZ3MuZGVmYXVsdE1hdGNoV2lkdGhdO1xuICAgIHZhciBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChtYXRjaFBhdHRlcm4pO1xuICAgIGlmICghbWF0Y2hSZXN1bHQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICB2YXIgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuICAgIHZhciBwYXJzZVBhdHRlcm5zID0gd2lkdGggJiYgYXJncy5wYXJzZVBhdHRlcm5zW3dpZHRoXSB8fCBhcmdzLnBhcnNlUGF0dGVybnNbYXJncy5kZWZhdWx0UGFyc2VXaWR0aF07XG4gICAgdmFyIGtleSA9IEFycmF5LmlzQXJyYXkocGFyc2VQYXR0ZXJucykgPyBmaW5kSW5kZXgocGFyc2VQYXR0ZXJucywgZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZyk7XG4gICAgfSkgOiBmaW5kS2V5KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgIH0pO1xuICAgIHZhciB2YWx1ZTtcbiAgICB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhrZXkpIDoga2V5O1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuICAgIHZhciByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgcmVzdDogcmVzdFxuICAgIH07XG4gIH07XG59XG5mdW5jdGlvbiBmaW5kS2V5KG9iamVjdCwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICBpZiAob2JqZWN0Lmhhc093blByb3BlcnR5KGtleSkgJiYgcHJlZGljYXRlKG9iamVjdFtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGZpbmRJbmRleChhcnJheSwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGtleSA9IDA7IGtleSA8IGFycmF5Lmxlbmd0aDsga2V5KyspIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5tYXRjaFBhdHRlcm4pO1xuICAgIGlmICghbWF0Y2hSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIHZhciBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG4gICAgdmFyIHBhcnNlUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MucGFyc2VQYXR0ZXJuKTtcbiAgICBpZiAoIXBhcnNlUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICB2YXIgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2socGFyc2VSZXN1bHRbMF0pIDogcGFyc2VSZXN1bHRbMF07XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgdmFyIHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICByZXN0OiByZXN0XG4gICAgfTtcbiAgfTtcbn0iLCJ2YXIgZm9ybWF0RGlzdGFuY2VMb2NhbGUgPSB7XG4gIGxlc3NUaGFuWFNlY29uZHM6IHtcbiAgICBvbmU6ICdsZXNzIHRoYW4gYSBzZWNvbmQnLFxuICAgIG90aGVyOiAnbGVzcyB0aGFuIHt7Y291bnR9fSBzZWNvbmRzJ1xuICB9LFxuICB4U2Vjb25kczoge1xuICAgIG9uZTogJzEgc2Vjb25kJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBzZWNvbmRzJ1xuICB9LFxuICBoYWxmQU1pbnV0ZTogJ2hhbGYgYSBtaW51dGUnLFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiAnbGVzcyB0aGFuIGEgbWludXRlJyxcbiAgICBvdGhlcjogJ2xlc3MgdGhhbiB7e2NvdW50fX0gbWludXRlcydcbiAgfSxcbiAgeE1pbnV0ZXM6IHtcbiAgICBvbmU6ICcxIG1pbnV0ZScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbWludXRlcydcbiAgfSxcbiAgYWJvdXRYSG91cnM6IHtcbiAgICBvbmU6ICdhYm91dCAxIGhvdXInLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IGhvdXJzJ1xuICB9LFxuICB4SG91cnM6IHtcbiAgICBvbmU6ICcxIGhvdXInLFxuICAgIG90aGVyOiAne3tjb3VudH19IGhvdXJzJ1xuICB9LFxuICB4RGF5czoge1xuICAgIG9uZTogJzEgZGF5JyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBkYXlzJ1xuICB9LFxuICBhYm91dFhXZWVrczoge1xuICAgIG9uZTogJ2Fib3V0IDEgd2VlaycsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gd2Vla3MnXG4gIH0sXG4gIHhXZWVrczoge1xuICAgIG9uZTogJzEgd2VlaycsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gd2Vla3MnXG4gIH0sXG4gIGFib3V0WE1vbnRoczoge1xuICAgIG9uZTogJ2Fib3V0IDEgbW9udGgnLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IG1vbnRocydcbiAgfSxcbiAgeE1vbnRoczoge1xuICAgIG9uZTogJzEgbW9udGgnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1vbnRocydcbiAgfSxcbiAgYWJvdXRYWWVhcnM6IHtcbiAgICBvbmU6ICdhYm91dCAxIHllYXInLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IHllYXJzJ1xuICB9LFxuICB4WWVhcnM6IHtcbiAgICBvbmU6ICcxIHllYXInLFxuICAgIG90aGVyOiAne3tjb3VudH19IHllYXJzJ1xuICB9LFxuICBvdmVyWFllYXJzOiB7XG4gICAgb25lOiAnb3ZlciAxIHllYXInLFxuICAgIG90aGVyOiAnb3ZlciB7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIGFsbW9zdFhZZWFyczoge1xuICAgIG9uZTogJ2FsbW9zdCAxIHllYXInLFxuICAgIG90aGVyOiAnYWxtb3N0IHt7Y291bnR9fSB5ZWFycydcbiAgfVxufTtcbnZhciBmb3JtYXREaXN0YW5jZSA9IGZ1bmN0aW9uIGZvcm1hdERpc3RhbmNlKHRva2VuLCBjb3VudCwgb3B0aW9ucykge1xuICB2YXIgcmVzdWx0O1xuICB2YXIgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcbiAgaWYgKHR5cGVvZiB0b2tlblZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWU7XG4gIH0gZWxzZSBpZiAoY291bnQgPT09IDEpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm9uZTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm90aGVyLnJlcGxhY2UoJ3t7Y291bnR9fScsIGNvdW50LnRvU3RyaW5nKCkpO1xuICB9XG4gIGlmIChvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmFkZFN1ZmZpeCkge1xuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gJiYgb3B0aW9ucy5jb21wYXJpc29uID4gMCkge1xuICAgICAgcmV0dXJuICdpbiAnICsgcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzdWx0ICsgJyBhZ28nO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdERpc3RhbmNlOyIsImltcG9ydCBidWlsZEZvcm1hdExvbmdGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qc1wiO1xudmFyIGRhdGVGb3JtYXRzID0ge1xuICBmdWxsOiAnRUVFRSwgTU1NTSBkbywgeScsXG4gIGxvbmc6ICdNTU1NIGRvLCB5JyxcbiAgbWVkaXVtOiAnTU1NIGQsIHknLFxuICBzaG9ydDogJ01NL2RkL3l5eXknXG59O1xudmFyIHRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiAnaDptbTpzcyBhIHp6enonLFxuICBsb25nOiAnaDptbTpzcyBhIHonLFxuICBtZWRpdW06ICdoOm1tOnNzIGEnLFxuICBzaG9ydDogJ2g6bW0gYSdcbn07XG52YXIgZGF0ZVRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbG9uZzogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIG1lZGl1bTogJ3t7ZGF0ZX19LCB7e3RpbWV9fScsXG4gIHNob3J0OiAne3tkYXRlfX0sIHt7dGltZX19J1xufTtcbnZhciBmb3JtYXRMb25nID0ge1xuICBkYXRlOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIHRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiB0aW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgZGF0ZVRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlVGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXRMb25nOyIsInZhciBmb3JtYXRSZWxhdGl2ZUxvY2FsZSA9IHtcbiAgbGFzdFdlZWs6IFwiJ2xhc3QnIGVlZWUgJ2F0JyBwXCIsXG4gIHllc3RlcmRheTogXCIneWVzdGVyZGF5IGF0JyBwXCIsXG4gIHRvZGF5OiBcIid0b2RheSBhdCcgcFwiLFxuICB0b21vcnJvdzogXCIndG9tb3Jyb3cgYXQnIHBcIixcbiAgbmV4dFdlZWs6IFwiZWVlZSAnYXQnIHBcIixcbiAgb3RoZXI6ICdQJ1xufTtcbnZhciBmb3JtYXRSZWxhdGl2ZSA9IGZ1bmN0aW9uIGZvcm1hdFJlbGF0aXZlKHRva2VuLCBfZGF0ZSwgX2Jhc2VEYXRlLCBfb3B0aW9ucykge1xuICByZXR1cm4gZm9ybWF0UmVsYXRpdmVMb2NhbGVbdG9rZW5dO1xufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdFJlbGF0aXZlOyIsImltcG9ydCBidWlsZExvY2FsaXplRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzXCI7XG52YXIgZXJhVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnQicsICdBJ10sXG4gIGFiYnJldmlhdGVkOiBbJ0JDJywgJ0FEJ10sXG4gIHdpZGU6IFsnQmVmb3JlIENocmlzdCcsICdBbm5vIERvbWluaSddXG59O1xudmFyIHF1YXJ0ZXJWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWycxJywgJzInLCAnMycsICc0J10sXG4gIGFiYnJldmlhdGVkOiBbJ1ExJywgJ1EyJywgJ1EzJywgJ1E0J10sXG4gIHdpZGU6IFsnMXN0IHF1YXJ0ZXInLCAnMm5kIHF1YXJ0ZXInLCAnM3JkIHF1YXJ0ZXInLCAnNHRoIHF1YXJ0ZXInXVxufTtcblxuLy8gTm90ZTogaW4gRW5nbGlzaCwgdGhlIG5hbWVzIG9mIGRheXMgb2YgdGhlIHdlZWsgYW5kIG1vbnRocyBhcmUgY2FwaXRhbGl6ZWQuXG4vLyBJZiB5b3UgYXJlIG1ha2luZyBhIG5ldyBsb2NhbGUgYmFzZWQgb24gdGhpcyBvbmUsIGNoZWNrIGlmIHRoZSBzYW1lIGlzIHRydWUgZm9yIHRoZSBsYW5ndWFnZSB5b3UncmUgd29ya2luZyBvbi5cbi8vIEdlbmVyYWxseSwgZm9ybWF0dGVkIGRhdGVzIHNob3VsZCBsb29rIGxpa2UgdGhleSBhcmUgaW4gdGhlIG1pZGRsZSBvZiBhIHNlbnRlbmNlLFxuLy8gZS5nLiBpbiBTcGFuaXNoIGxhbmd1YWdlIHRoZSB3ZWVrZGF5cyBhbmQgbW9udGhzIHNob3VsZCBiZSBpbiB0aGUgbG93ZXJjYXNlLlxudmFyIG1vbnRoVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnSicsICdGJywgJ00nLCAnQScsICdNJywgJ0onLCAnSicsICdBJywgJ1MnLCAnTycsICdOJywgJ0QnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEZWMnXSxcbiAgd2lkZTogWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ11cbn07XG52YXIgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFsnUycsICdNJywgJ1QnLCAnVycsICdUJywgJ0YnLCAnUyddLFxuICBzaG9ydDogWydTdScsICdNbycsICdUdScsICdXZScsICdUaCcsICdGcicsICdTYSddLFxuICBhYmJyZXZpYXRlZDogWydTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnXSxcbiAgd2lkZTogWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddXG59O1xudmFyIGRheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAnbWknLFxuICAgIG5vb246ICduJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9XG59O1xudmFyIGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYScsXG4gICAgcG06ICdwJyxcbiAgICBtaWRuaWdodDogJ21pJyxcbiAgICBub29uOiAnbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfVxufTtcbnZhciBvcmRpbmFsTnVtYmVyID0gZnVuY3Rpb24gb3JkaW5hbE51bWJlcihkaXJ0eU51bWJlciwgX29wdGlvbnMpIHtcbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgLy8gSWYgb3JkaW5hbCBudW1iZXJzIGRlcGVuZCBvbiBjb250ZXh0LCBmb3IgZXhhbXBsZSxcbiAgLy8gaWYgdGhleSBhcmUgZGlmZmVyZW50IGZvciBkaWZmZXJlbnQgZ3JhbW1hdGljYWwgZ2VuZGVycyxcbiAgLy8gdXNlIGBvcHRpb25zLnVuaXRgLlxuICAvL1xuICAvLyBgdW5pdGAgY2FuIGJlICd5ZWFyJywgJ3F1YXJ0ZXInLCAnbW9udGgnLCAnd2VlaycsICdkYXRlJywgJ2RheU9mWWVhcicsXG4gIC8vICdkYXknLCAnaG91cicsICdtaW51dGUnLCAnc2Vjb25kJy5cblxuICB2YXIgcmVtMTAwID0gbnVtYmVyICUgMTAwO1xuICBpZiAocmVtMTAwID4gMjAgfHwgcmVtMTAwIDwgMTApIHtcbiAgICBzd2l0Y2ggKHJlbTEwMCAlIDEwKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnc3QnO1xuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ25kJztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICdyZCc7XG4gICAgfVxuICB9XG4gIHJldHVybiBudW1iZXIgKyAndGgnO1xufTtcbnZhciBsb2NhbGl6ZSA9IHtcbiAgb3JkaW5hbE51bWJlcjogb3JkaW5hbE51bWJlcixcbiAgZXJhOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZXJhVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBxdWFydGVyOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBhcmd1bWVudENhbGxiYWNrOiBmdW5jdGlvbiBhcmd1bWVudENhbGxiYWNrKHF1YXJ0ZXIpIHtcbiAgICAgIHJldHVybiBxdWFydGVyIC0gMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IG1vbnRoVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXk6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheVBlcmlvZDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6ICd3aWRlJ1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IGxvY2FsaXplOyIsImltcG9ydCBidWlsZE1hdGNoRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaEZuL2luZGV4LmpzXCI7XG5pbXBvcnQgYnVpbGRNYXRjaFBhdHRlcm5GbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzXCI7XG52YXIgbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9eKFxcZCspKHRofHN0fG5kfHJkKT8vaTtcbnZhciBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL1xcZCsvaTtcbnZhciBtYXRjaEVyYVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGJ8YSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGJcXC4/XFxzP2NcXC4/fGJcXC4/XFxzP2NcXC4/XFxzP2VcXC4/fGFcXC4/XFxzP2RcXC4/fGNcXC4/XFxzP2VcXC4/KS9pLFxuICB3aWRlOiAvXihiZWZvcmUgY2hyaXN0fGJlZm9yZSBjb21tb24gZXJhfGFubm8gZG9taW5pfGNvbW1vbiBlcmEpL2lcbn07XG52YXIgcGFyc2VFcmFQYXR0ZXJucyA9IHtcbiAgYW55OiBbL15iL2ksIC9eKGF8YykvaV1cbn07XG52YXIgbWF0Y2hRdWFydGVyUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bMTIzNF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9ecVsxMjM0XS9pLFxuICB3aWRlOiAvXlsxMjM0XSh0aHxzdHxuZHxyZCk/IHF1YXJ0ZXIvaVxufTtcbnZhciBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgYW55OiBbLzEvaSwgLzIvaSwgLzMvaSwgLzQvaV1cbn07XG52YXIgbWF0Y2hNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW2pmbWFzb25kXS9pLFxuICBhYmJyZXZpYXRlZDogL14oamFufGZlYnxtYXJ8YXByfG1heXxqdW58anVsfGF1Z3xzZXB8b2N0fG5vdnxkZWMpL2ksXG4gIHdpZGU6IC9eKGphbnVhcnl8ZmVicnVhcnl8bWFyY2h8YXByaWx8bWF5fGp1bmV8anVseXxhdWd1c3R8c2VwdGVtYmVyfG9jdG9iZXJ8bm92ZW1iZXJ8ZGVjZW1iZXIpL2lcbn07XG52YXIgcGFyc2VNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXmovaSwgL15mL2ksIC9ebS9pLCAvXmEvaSwgL15tL2ksIC9eai9pLCAvXmovaSwgL15hL2ksIC9ecy9pLCAvXm8vaSwgL15uL2ksIC9eZC9pXSxcbiAgYW55OiBbL15qYS9pLCAvXmYvaSwgL15tYXIvaSwgL15hcC9pLCAvXm1heS9pLCAvXmp1bi9pLCAvXmp1bC9pLCAvXmF1L2ksIC9ecy9pLCAvXm8vaSwgL15uL2ksIC9eZC9pXVxufTtcbnZhciBtYXRjaERheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW3NtdHdmXS9pLFxuICBzaG9ydDogL14oc3V8bW98dHV8d2V8dGh8ZnJ8c2EpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihzdW58bW9ufHR1ZXx3ZWR8dGh1fGZyaXxzYXQpL2ksXG4gIHdpZGU6IC9eKHN1bmRheXxtb25kYXl8dHVlc2RheXx3ZWRuZXNkYXl8dGh1cnNkYXl8ZnJpZGF5fHNhdHVyZGF5KS9pXG59O1xudmFyIHBhcnNlRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9ecy9pLCAvXm0vaSwgL150L2ksIC9edy9pLCAvXnQvaSwgL15mL2ksIC9ecy9pXSxcbiAgYW55OiBbL15zdS9pLCAvXm0vaSwgL150dS9pLCAvXncvaSwgL150aC9pLCAvXmYvaSwgL15zYS9pXVxufTtcbnZhciBtYXRjaERheVBlcmlvZFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGF8cHxtaXxufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaSxcbiAgYW55OiAvXihbYXBdXFwuP1xccz9tXFwuP3xtaWRuaWdodHxub29ufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaVxufTtcbnZhciBwYXJzZURheVBlcmlvZFBhdHRlcm5zID0ge1xuICBhbnk6IHtcbiAgICBhbTogL15hL2ksXG4gICAgcG06IC9ecC9pLFxuICAgIG1pZG5pZ2h0OiAvXm1pL2ksXG4gICAgbm9vbjogL15uby9pLFxuICAgIG1vcm5pbmc6IC9tb3JuaW5nL2ksXG4gICAgYWZ0ZXJub29uOiAvYWZ0ZXJub29uL2ksXG4gICAgZXZlbmluZzogL2V2ZW5pbmcvaSxcbiAgICBuaWdodDogL25pZ2h0L2lcbiAgfVxufTtcbnZhciBtYXRjaCA9IHtcbiAgb3JkaW5hbE51bWJlcjogYnVpbGRNYXRjaFBhdHRlcm5Gbih7XG4gICAgbWF0Y2hQYXR0ZXJuOiBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHBhcnNlUGF0dGVybjogcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiB2YWx1ZUNhbGxiYWNrKHZhbHVlKSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgICB9XG4gIH0pLFxuICBlcmE6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBxdWFydGVyOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uIHZhbHVlQ2FsbGJhY2soaW5kZXgpIHtcbiAgICAgIHJldHVybiBpbmRleCArIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5OiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICdhbnknLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgbWF0Y2g7IiwiaW1wb3J0IGZvcm1hdERpc3RhbmNlIGZyb20gXCIuL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXRMb25nIGZyb20gXCIuL19saWIvZm9ybWF0TG9uZy9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdFJlbGF0aXZlIGZyb20gXCIuL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanNcIjtcbmltcG9ydCBsb2NhbGl6ZSBmcm9tIFwiLi9fbGliL2xvY2FsaXplL2luZGV4LmpzXCI7XG5pbXBvcnQgbWF0Y2ggZnJvbSBcIi4vX2xpYi9tYXRjaC9pbmRleC5qc1wiO1xuLyoqXG4gKiBAdHlwZSB7TG9jYWxlfVxuICogQGNhdGVnb3J5IExvY2FsZXNcbiAqIEBzdW1tYXJ5IEVuZ2xpc2ggbG9jYWxlIChVbml0ZWQgU3RhdGVzKS5cbiAqIEBsYW5ndWFnZSBFbmdsaXNoXG4gKiBAaXNvLTYzOS0yIGVuZ1xuICogQGF1dGhvciBTYXNoYSBLb3NzIFtAa29zc25vY29ycF17QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2tvc3Nub2NvcnB9XG4gKiBAYXV0aG9yIExlc2hhIEtvc3MgW0BsZXNoYWtvc3Nde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9sZXNoYWtvc3N9XG4gKi9cbnZhciBsb2NhbGUgPSB7XG4gIGNvZGU6ICdlbi1VUycsXG4gIGZvcm1hdERpc3RhbmNlOiBmb3JtYXREaXN0YW5jZSxcbiAgZm9ybWF0TG9uZzogZm9ybWF0TG9uZyxcbiAgZm9ybWF0UmVsYXRpdmU6IGZvcm1hdFJlbGF0aXZlLFxuICBsb2NhbGl6ZTogbG9jYWxpemUsXG4gIG1hdGNoOiBtYXRjaCxcbiAgb3B0aW9uczoge1xuICAgIHdlZWtTdGFydHNPbjogMCAvKiBTdW5kYXkgKi8sXG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiAxXG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBsb2NhbGU7IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZlwiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpO1xuXG4gIC8vIENsb25lIHRoZSBkYXRlXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZihhcmd1bWVudCkgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNzdHJpbmctYXJndW1lbnRzXCIpO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjbGFzcyBVSUNvbnRyb2xsZXIge1xuXG4gICAgLy8gVUkgVGFzayBDb250YWluZXJcbiAgICAjdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWNvbnRhaW5lcicpO1xuICAgICNuYXZHcm91cHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LXRhYnMnKTtcbiAgICAvLyBQcm92aWRlZCB0byB0aGUgU3RvcmFnZSBDb250cm9sIGluIG9yZGVyIHRvIGdldCByZWxldmFudCB0YXNrIGdyb3VwXG4gICAgI2N1cnJlbnRUYXNrR3JvdXAgPSAnaW5ib3gnO1xuICAgICNsaXN0ZW5lcnNJbml0aWFsaXplZCA9IGZhbHNlO1xuXG4gICAgI2dyb3VwU2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dyb3VwLXNlbGVjdCcpO1xuICAgICN0YWJzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi10YWJzJyk7XG4gICAgI2N1cnJlbnRUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFiLWFjdGl2ZScpO1xuICAgICNpbmJveFRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbmJveC10YWInKTtcblxuICAgIC8vIEZvcm0gZWxlbWVudHM6IG5ldyBncm91cFxuICAgICNncm91cE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWFkZC1ncm91cCcpO1xuICAgICNncm91cEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LWdyb3VwLWZvcm0nKTtcbiAgICAjc3VibWl0R3JvdXBCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0LWdyb3VwLWJ0bicpO1xuICAgICNvcGVuR3JvdXBNb2RhbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvcGVuLWdyb3VwLW1vZGFsJyk7XG4gICAgI2Nsb3NlR3JvdXBNb2RhbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZS1ncm91cC1tb2RhbCcpO1xuXG4gICAgLy8gQWRkIE5ldyBHcm91cDogR3JvdXAgRGF0YVxuICAgICNmb3JtR3JvdXBGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNncm91cC1uYW1lLWZpZWxkJyk7XG5cbiAgICAvLyBGb3JtIGVsZW1lbnRzOiBOZXcgVGFza1xuICAgICN0YXNrTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtYWRkLXRhc2snKTtcbiAgICAjdGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXRhc2stZm9ybScpO1xuICAgICNzdWJtaXRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Ym1pdC10YXNrLWJ0bicpO1xuICAgICNvcGVuVGFza01vZGFsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI29wZW4tdGFzay1tb2RhbCcpO1xuICAgICNjbG9zZVRhc2tNb2RhbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZS10YXNrLW1vZGFsJyk7XG5cbiAgICAvLyBBZGQgTmV3IFRhc2s6IEZyb20gRGF0YVxuICAgICNmb3JtVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybS10aXRsZScpO1xuICAgICNmb3JtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybS1kZXNjJyk7XG4gICAgI2Zvcm1EdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm0tZHVlLWRhdGUnKTtcbiAgICAjZm9ybVByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm0tcHJpb3JpdHknKTtcbiAgICAjZm9ybUdyb3VwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dyb3VwLXNlbGVjdCcpO1xuXG4gICAgY29uc3RydWN0b3Ioc3VibWl0VGFza0hhbmRsZXIsIHN3aXRjaEhhbmRsZXIsIHN1Ym1pdEdyb3VwSGFuZGxlcikge1xuICAgICAgICB0aGlzLiNzZXRJbml0aWFsTGlzdGVuZXJzKHN1Ym1pdFRhc2tIYW5kbGVyLCBzd2l0Y2hIYW5kbGVyLCBzdWJtaXRHcm91cEhhbmRsZXIpO1xuICAgICAgICB0aGlzLiNyZXNldEFsbEZvcm1JbnB1dCgpO1xuICAgIH1cblxuICAgICNhZGRUYXNrRWxlbWVudCh0YXNrT2JqLCByZW1vdmVUYXNrSGFuZGxlcikge1xuICAgICAgICBjb25zdCBuZXdUYXNrRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBuZXdUYXNrRWwuY2xhc3NMaXN0LmFkZCgndGFzay1pdGVtJyk7XG4gICAgICAgIG5ld1Rhc2tFbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdWlkJywgdGFza09iai5VSUQpO1xuXG4gICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIHRhc2tUaXRsZS5jbGFzc0xpc3QuYWRkKCdpdGVtLXRpdGxlJyk7XG4gICAgICAgIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRhc2tPYmoudGl0bGU7XG4gICAgICAgIHRhc2tUaXRsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuI3Rhc2tNaW5pbWl6ZUhhbmRsZXIpO1xuXG4gICAgICAgIC8vIEluZm8gY29udGFpbmVyKDx1bD4pXG4gICAgICAgIGNvbnN0IHRhc2tJbmZvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgdGFza0luZm9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnaXRlbS1pbmZvJyk7XG4gICAgICAgIHRhc2tJbmZvQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICAgICAgY29uc3QgdGFza1JlbW92ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICB0YXNrUmVtb3ZlQnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGlvbi1idG4nKTtcbiAgICAgICAgdGFza1JlbW92ZUJ0bi5jbGFzc0xpc3QuYWRkKCdpdGVtLXJlbW92ZS1idG4nKTtcbiAgICAgICAgdGFza1JlbW92ZUJ0bi50ZXh0Q29udGVudCA9ICdSZW1vdmUgVGFzayc7XG4gICAgICAgIHRhc2tSZW1vdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW1vdmVUYXNrSGFuZGxlcik7XG5cbiAgICAgICAgLy8gSW5mbyBJdGVtOiBEZXNjcmlwdGlvblxuICAgICAgICBjb25zdCBpbmZvSXRlbTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBpbmZvSXRlbTEuY2xhc3NMaXN0LmFkZCgnaW5mby1pdGVtJyk7XG5cbiAgICAgICAgY29uc3QgaW5mb0Rlc2NUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgaW5mb0Rlc2NUaXRsZS5jbGFzc0xpc3QuYWRkKCdpbmZvLXRpdGxlJyk7XG4gICAgICAgIGluZm9EZXNjVGl0bGUudGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb246ICc7XG5cbiAgICAgICAgY29uc3QgaW5mb0Rlc2NEYXRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBpbmZvRGVzY0RhdGEuY2xhc3NMaXN0LmFkZCgnaW5mby1kYXRhJywgJ2luZm8tZGVzYycpO1xuICAgICAgICBpbmZvRGVzY0RhdGEudGV4dENvbnRlbnQgPSB0YXNrT2JqLmRlc2NyaXB0aW9uO1xuXG4gICAgICAgIGluZm9JdGVtMS5hcHBlbmRDaGlsZChpbmZvRGVzY1RpdGxlKTtcbiAgICAgICAgaW5mb0l0ZW0xLmFwcGVuZENoaWxkKGluZm9EZXNjRGF0YSk7XG5cbiAgICAgICAgLy8gSW5mbyBJdGVtOiBEdWUgZGF0ZVxuICAgICAgICBjb25zdCBpbmZvSXRlbTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBpbmZvSXRlbTIuY2xhc3NMaXN0LmFkZCgnaW5mby1pdGVtJyk7XG5cbiAgICAgICAgY29uc3QgaW5mb0R1ZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBpbmZvRHVlVGl0bGUuY2xhc3NMaXN0LmFkZCgnaW5mby10aXRsZScpO1xuICAgICAgICBpbmZvRHVlVGl0bGUudGV4dENvbnRlbnQgPSAnRHVlIGRhdGU6ICc7XG5cbiAgICAgICAgY29uc3QgaW5mb0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGluZm9EdWVEYXRlLmNsYXNzTGlzdC5hZGQoJ2luZm8tZGF0YScsICdpbmZvLWR1ZS1kYXRlJyk7XG4gICAgICAgIGluZm9EdWVEYXRlLnRleHRDb250ZW50ID0gdGFza09iai50aW1lTGVmdDtcblxuICAgICAgICBpbmZvSXRlbTIuYXBwZW5kQ2hpbGQoaW5mb0R1ZVRpdGxlKTtcbiAgICAgICAgaW5mb0l0ZW0yLmFwcGVuZENoaWxkKGluZm9EdWVEYXRlKTtcblxuICAgICAgICAvLyBJbmZvIEl0ZW06IFByaW9yaXR5XG4gICAgICAgIGNvbnN0IGluZm9JdGVtMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGluZm9JdGVtMy5jbGFzc0xpc3QuYWRkKCdpbmZvLWl0ZW0nKTtcblxuICAgICAgICBjb25zdCBpbmZvUHJpb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBpbmZvUHJpb1RpdGxlLmNsYXNzTGlzdC5hZGQoJ2luZm8tdGl0bGUnKTtcbiAgICAgICAgaW5mb1ByaW9UaXRsZS50ZXh0Q29udGVudCA9ICdQcmlvcml0eTogJztcblxuICAgICAgICBjb25zdCBpbmZvUHJpb0RhdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGluZm9QcmlvRGF0YS5jbGFzc0xpc3QuYWRkKCdpbmZvLWRhdGEnLCAnaW5mby1wcmlvcml0eScpO1xuICAgICAgICBpbmZvUHJpb0RhdGEudGV4dENvbnRlbnQgPSB0YXNrT2JqLnByaW9yaXR5O1xuXG5cbiAgICAgICAgaW5mb0l0ZW0zLmFwcGVuZENoaWxkKGluZm9QcmlvVGl0bGUpO1xuICAgICAgICBpbmZvSXRlbTMuYXBwZW5kQ2hpbGQoaW5mb1ByaW9EYXRhKTtcblxuXG4gICAgICAgIHRhc2tJbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGluZm9JdGVtMSk7XG4gICAgICAgIHRhc2tJbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGluZm9JdGVtMik7XG4gICAgICAgIHRhc2tJbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGluZm9JdGVtMyk7XG5cblxuICAgICAgICBuZXdUYXNrRWwuYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcbiAgICAgICAgbmV3VGFza0VsLmFwcGVuZENoaWxkKHRhc2tJbmZvQ29udGFpbmVyKTtcbiAgICAgICAgbmV3VGFza0VsLmFwcGVuZENoaWxkKHRhc2tSZW1vdmVCdG4pO1xuXG5cbiAgICAgICAgdGhpcy4jdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdUYXNrRWwpO1xuICAgIH1cblxuICAgIHJlbW92ZVRhc2soZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LnJlbW92ZSgpO1xuICAgIH1cblxuICAgICN0YXNrTWluaW1pemVIYW5kbGVyKGV2ZW50KSB7XG4gICAgICAgIGxldCB0YXNrSW5mbyA9IGV2ZW50LmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCcuaXRlbS1pbmZvJyk7XG5cbiAgICAgICAgaWYgKHRhc2tJbmZvLnN0eWxlLmRpc3BsYXkgIT09ICdub25lJykge1xuICAgICAgICAgICAgdGFza0luZm8uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRhc2tJbmZvLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRHcm91cEVsZW1lbnQoZ3JvdXBOYW1lLCBzd2l0Y2hIYW5kbGVyLCBjdXJyZW50VGFza0dyb3VwKSB7XG4gICAgICAgIGxldCBuZXdHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cbiAgICAgICAgbmV3R3JvdXAuY2xhc3NMaXN0LmFkZCgndGFiLWl0ZW0nKTtcbiAgICAgICAgbmV3R3JvdXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLiNzd2l0Y2hUYXNrR3JvdXAuYmluZCh0aGlzKSk7XG4gICAgICAgIG5ld0dyb3VwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3dpdGNoSGFuZGxlcik7XG4gICAgICAgIG5ld0dyb3VwLnRleHRDb250ZW50ID0gZ3JvdXBOYW1lO1xuXG4gICAgICAgIGlmIChncm91cE5hbWUgPT09IGN1cnJlbnRUYXNrR3JvdXApIHtcbiAgICAgICAgICAgIG5ld0dyb3VwLmNsYXNzTGlzdC5hZGQoJ3RhYi1hY3RpdmUnKTtcbiAgICAgICAgICAgIHRoaXMuI2N1cnJlbnRUYXNrR3JvdXAgPSBncm91cE5hbWU7XG4gICAgICAgICAgICB0aGlzLiNjdXJyZW50VGFiID0gbmV3R3JvdXA7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiN0YWJzQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0dyb3VwKTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm5zIFRhc2sgRGF0YSBwcm92aWRlZCBpbiB0aGUgZm9ybVxuICAgIHN1Ym1pdEZvcm1UYXNrKCkge1xuICAgICAgICBpZiAodGhpcy4jdGFza0Zvcm0ucmVwb3J0VmFsaWRpdHkoKSkge1xuICAgICAgICAgICAgbGV0IG5ld1Rhc2tPYmogPSB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IHRoaXMuI2Zvcm1UaXRsZS52YWx1ZSxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy4jZm9ybURlc2NyaXB0aW9uLnZhbHVlLFxuICAgICAgICAgICAgICAgIGR1ZURhdGU6IHRoaXMuI2Zvcm1EdWVEYXRlLnZhbHVlLFxuICAgICAgICAgICAgICAgIHByaW9yaXR5OiB0aGlzLiNmb3JtUHJpb3JpdHkudmFsdWUsXG4gICAgICAgICAgICAgICAgdGFza0dyb3VwOiB0aGlzLiNncm91cFNlbGVjdC52YWx1ZS50b0xvd2VyQ2FzZSgpLFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLiNncm91cFNlbGVjdC52YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLiN0YXNrTW9kYWwuY2xvc2UoKTtcblxuICAgICAgICAgICAgcmV0dXJuIG5ld1Rhc2tPYmo7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgc3VibWl0Rm9ybUdyb3VwKCkge1xuICAgICAgICBpZiAodGhpcy4jZ3JvdXBGb3JtLnJlcG9ydFZhbGlkaXR5KCkpIHtcbiAgICAgICAgICAgIHRoaXMuI2dyb3VwTW9kYWwuY2xvc2UoKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiNmb3JtR3JvdXBGaWVsZC52YWx1ZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgI3Jlc2V0QWxsRm9ybUlucHV0KCkge1xuICAgICAgICBjb25zdCBmb3JtSW5wdXRGaWVsZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9ybS1pbnB1dC1maWVsZCcpO1xuICAgICAgICBjb25zdCBmb3JtRHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtLWR1ZS1kYXRlJyk7XG5cbiAgICAgICAgZm9ybUR1ZURhdGUudmFsdWUgPSBVSUNvbnRyb2xsZXIuI2dldEZvcm1hdHRlZERhdGUoKTtcblxuICAgICAgICBmb3JtSW5wdXRGaWVsZHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCd0eXBlJykgPT09ICd0ZXh0JyB8fFxuICAgICAgICAgICAgICAgIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCd0eXBlJykgPT09ICdudW1iZXInKSBlbGVtZW50LnZhbHVlID0gJyc7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN0YXRpYyAjZ2V0Rm9ybWF0dGVkRGF0ZShkYXRlT2JqID0gbmV3IERhdGUoKSkge1xuICAgICAgICBsZXQgW3llYXIsIG1vbnRoLCBkYXldID0gW2RhdGVPYmouZ2V0RnVsbFllYXIoKS50b1N0cmluZygpLCAoZGF0ZU9iai5nZXRNb250aCgpICsgMSkudG9TdHJpbmcoKSwgZGF0ZU9iai5nZXREYXRlKCkudG9TdHJpbmcoKV07XG5cbiAgICAgICAgaWYgKG1vbnRoLmxlbmd0aCA9PT0gMSkgbW9udGggPSBgMCR7bW9udGh9YDtcbiAgICAgICAgaWYgKGRheS5sZW5ndGggPT09IDEpIGRheSA9IGAwJHtkYXl9YDtcblxuICAgICAgICByZXR1cm4gYCR7eWVhcn0tJHttb250aH0tJHtkYXl9YDtcbiAgICB9XG5cbiAgICBnZXQgY3VycmVudFRhc2tHcm91cCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2N1cnJlbnRUYXNrR3JvdXA7XG4gICAgfVxuXG4gICAgI3N3aXRjaFRhc2tHcm91cChldmVudCkge1xuICAgICAgICB0aGlzLiNjdXJyZW50VGFza0dyb3VwID0gZXZlbnQuY3VycmVudFRhcmdldC50ZXh0Q29udGVudC50b0xvd2VyQ2FzZSgpO1xuICAgIH1cblxuICAgICNzZXRJbml0aWFsTGlzdGVuZXJzKHN1Ym1pdFRhc2tIYW5kbGVyLCBzd2l0Y2hIYW5kbGVyLCBzdWJtaXRHcm91cEhhbmRsZXIpIHtcbiAgICAgICAgaWYgKCF0aGlzLiNsaXN0ZW5lcnNJbml0aWFsaXplZCkge1xuICAgICAgICAgICAgLy8gQWRkIHRhc2sgZm9ybSwgbW9kYWxcbiAgICAgICAgICAgIHRoaXMuI3N1Ym1pdFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdWJtaXRUYXNrSGFuZGxlcik7XG4gICAgICAgICAgICB0aGlzLiNzdWJtaXRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy4jcmVzZXRBbGxGb3JtSW5wdXQpO1xuICAgICAgICAgICAgdGhpcy4jb3BlblRhc2tNb2RhbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuI3Rhc2tNb2RhbC5zaG93TW9kYWwoKSk7XG4gICAgICAgICAgICB0aGlzLiNjbG9zZVRhc2tNb2RhbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuI3Rhc2tNb2RhbC5jbG9zZSgpKTtcbiAgICAgICAgICAgIHRoaXMuI2Nsb3NlVGFza01vZGFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy4jcmVzZXRBbGxGb3JtSW5wdXQpO1xuXG4gICAgICAgICAgICAvLyBBZGQgZ3JvdXAgZm9ybSwgbW9kYWxcbiAgICAgICAgICAgIHRoaXMuI3N1Ym1pdEdyb3VwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3VibWl0R3JvdXBIYW5kbGVyKTtcbiAgICAgICAgICAgIHRoaXMuI3N1Ym1pdEdyb3VwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy4jcmVzZXRBbGxGb3JtSW5wdXQpO1xuICAgICAgICAgICAgdGhpcy4jb3Blbkdyb3VwTW9kYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLiNncm91cE1vZGFsLnNob3dNb2RhbCgpKTtcbiAgICAgICAgICAgIHRoaXMuI2Nsb3NlR3JvdXBNb2RhbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuI2dyb3VwTW9kYWwuY2xvc2UoKSk7XG4gICAgICAgICAgICB0aGlzLiNjbG9zZUdyb3VwTW9kYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLiNyZXNldEFsbEZvcm1JbnB1dCk7XG5cbiAgICAgICAgICAgIC8vIERlZmF1bHQgZ3JvdXAgJ2luYm94J1xuICAgICAgICAgICAgdGhpcy4jaW5ib3hUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLiNzd2l0Y2hUYXNrR3JvdXAuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB0aGlzLiNpbmJveFRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN3aXRjaEhhbmRsZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgI2FkZE5ld09wdGlvbihvcHRpb25OYW1lKSB7XG4gICAgICAgIGxldCBuZXdPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgbmV3T3B0aW9uLnRleHRDb250ZW50ID0gb3B0aW9uTmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIG9wdGlvbk5hbWUuc2xpY2UoMSk7O1xuICAgICAgICBuZXdPcHRpb24udmFsdWUgPSBvcHRpb25OYW1lO1xuXG4gICAgICAgIHRoaXMuI2dyb3VwU2VsZWN0LmFwcGVuZENoaWxkKG5ld09wdGlvbik7XG4gICAgfVxuXG4gICAgLy8gV2lwZXMgY3VycmVudCBjb250YWluZXIgdG8gZmlsbCBpdCB3aXRoIHVwLXRvLWRhdGUgdGFzayBsaXN0XG4gICAgdXBkYXRlVUkoYXBwRGF0YSwgcmVtb3ZlVGFza0hhbmRsZXIsIHN3aXRjaEdyb3VwSGFuZGxlcikge1xuICAgICAgICB0aGlzLiN0b2RvQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICB0aGlzLiNuYXZHcm91cHNDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHRoaXMuI2dyb3VwU2VsZWN0LmlubmVySFRNTCA9ICcnO1xuXG4gICAgICAgIHRoaXMuI2N1cnJlbnRUYXNrR3JvdXAgPSBhcHBEYXRhLmN1cnJlbnRUYXNrR3JvdXA7XG5cbiAgICAgICAgYXBwRGF0YS50YXNrRGF0YS5mb3JFYWNoKCh0YXNrT2JqKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiNhZGRUYXNrRWxlbWVudCh0YXNrT2JqLCByZW1vdmVUYXNrSGFuZGxlcik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGFwcERhdGEuZ3JvdXBEYXRhLmZvckVhY2goKGdyb3VwTmFtZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hZGRHcm91cEVsZW1lbnQoZ3JvdXBOYW1lLCBzd2l0Y2hHcm91cEhhbmRsZXIsIGFwcERhdGEuY3VycmVudFRhc2tHcm91cCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGFwcERhdGEuZ3JvdXBEYXRhLmZvckVhY2goKG9wdGlvbk5hbWUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuI2FkZE5ld09wdGlvbihvcHRpb25OYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVUlDb250cm9sbGVyOyIsImltcG9ydCB7IGZvcm1hdERpc3RhbmNlVG9Ob3cgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuY2xhc3MgVGFzayB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgdGFza0dyb3VwLCBVSUQpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy50YXNrR3JvdXAgPSB0YXNrR3JvdXA7XG4gICAgICAgIHRoaXMuVUlEID0gVUlEO1xuICAgIH1cblxuICAgIGdldCB0aW1lTGVmdCgpIHtcbiAgICAgICAgbGV0IFt5ZWFyLCBtb250aCwgZGF5XSA9IHRoaXMuZHVlRGF0ZS5zcGxpdCgnLScpO1xuICAgIFxuICAgICAgICByZXR1cm4gYGluICR7Zm9ybWF0RGlzdGFuY2VUb05vdyhuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEsIGRheSkpfWA7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYXNrOyIsImltcG9ydCBVSUNvbnRyb2xsZXIgZnJvbSAnLi9VSUNvbnRyb2xsZXIuanMnO1xuaW1wb3J0IFRhc2tTdG9yYWdlQ29udHJvbGxlciBmcm9tICcuL3Rhc2tTdG9yYWdlQ29udHJvbGxlci5qcyc7XG5cbmNsYXNzIFRhc2tMaXN0Q29udHJvbGxlciB7XG4gICAgI3N0b3JhZ2UgPSBuZXcgVGFza1N0b3JhZ2VDb250cm9sbGVyKCk7XG4gICAgI1VJID0gbmV3IFVJQ29udHJvbGxlcihcbiAgICAgICAgdGhpcy4jYWRkTmV3VGFza0hhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgdGhpcy4jc3dpdGNoVGFza0dyb3VwSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICB0aGlzLiNhZGROZXdHcm91cEhhbmRsZXIuYmluZCh0aGlzKVxuICAgICk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy4jdXBkYXRlVUkoKTtcbiAgICB9XG5cbiAgICAjYWRkTmV3VGFza0hhbmRsZXIoZXZlbnQpIHtcbiAgICAgICAgdGhpcy4jc3RvcmFnZS5hZGROZXdUYXNrKHRoaXMuI1VJLnN1Ym1pdEZvcm1UYXNrKCkpO1xuICAgICAgICB0aGlzLiN1cGRhdGVVSSgpO1xuICAgIH1cblxuICAgICNzd2l0Y2hUYXNrR3JvdXBIYW5kbGVyKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuI3N0b3JhZ2Uuc3dpdGNoQ3VycmVudFRhc2tHcm91cCh0aGlzLiNVSS5jdXJyZW50VGFza0dyb3VwKTtcbiAgICAgICAgdGhpcy4jdXBkYXRlVUkoKTtcbiAgICB9XG5cbiAgICAjcmVtb3ZlVGFza0hhbmRsZXIoZXZlbnQpIHtcbiAgICAgICAgbGV0IHRhc2tFbGVtZW50ID0gZXZlbnQuY3VycmVudFRhcmdldC5wYXJlbnROb2RlO1xuXG4gICAgICAgIHRoaXMuI1VJLnJlbW92ZVRhc2sodGFza0VsZW1lbnQpO1xuICAgICAgICB0aGlzLiNzdG9yYWdlLmRlbGV0ZVRhc2sodGFza0VsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXVpZCcpKTtcbiAgICB9XG5cbiAgICAjYWRkTmV3R3JvdXBIYW5kbGVyKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuI3N0b3JhZ2UuYWRkVGFza0dyb3VwKHRoaXMuI1VJLnN1Ym1pdEZvcm1Hcm91cCgpKTtcbiAgICAgICAgdGhpcy4jdXBkYXRlVUkoKTtcbiAgICB9XG5cbiAgICAjdXBkYXRlVUkoKSB7XG4gICAgICAgIHRoaXMuI1VJLnVwZGF0ZVVJKFxuICAgICAgICAgICAgdGhpcy4jc3RvcmFnZS5nZXRBcHBEYXRhKCksXG4gICAgICAgICAgICB0aGlzLiNyZW1vdmVUYXNrSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgdGhpcy4jc3dpdGNoVGFza0dyb3VwSGFuZGxlci5iaW5kKHRoaXMpXG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYXNrTGlzdENvbnRyb2xsZXI7IiwiaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFzay5qc1wiO1xuXG5jbGFzcyBUYXNrU3RvcmFnZUNvbnRyb2xsZXIge1xuICAgICN0YXNrTGlicmFyeSA9IFtdO1xuICAgICN0YXNrR3JvdXBzID0gWydpbmJveCddO1xuICAgICNjdXJyZW50VGFza0dyb3VwID0gJ2luYm94JztcbiAgICAjVUlEID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLiNsb2FkRnJvbUxvY2FsU3RvcmFnZSgpO1xuICAgICAgICBjb25zb2xlLmxvZyhgdGFza3MgLS0+ICR7dGhpcy4jdGFza0xpYnJhcnl9YCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBncm91cHMgLS0+ICR7dGhpcy4jdGFza0dyb3Vwc31gKTtcbiAgICAgICAgY29uc29sZS5sb2coYGN1cnJlbnRUYXNrR3JvdXAgLS0+ICR7dGhpcy4jY3VycmVudFRhc2tHcm91cH1gKTtcbiAgICB9XG5cbiAgICBhZGROZXdUYXNrKHRhc2tPYmopIHtcbiAgICAgICAgaWYgKHRhc2tPYmopIHtcbiAgICAgICAgICAgIGxldCBuZXdUYXNrID0gbmV3IFRhc2soXG4gICAgICAgICAgICAgICAgdGFza09iai50aXRsZSxcbiAgICAgICAgICAgICAgICB0YXNrT2JqLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgIHRhc2tPYmouZHVlRGF0ZSxcbiAgICAgICAgICAgICAgICB0YXNrT2JqLnByaW9yaXR5LFxuICAgICAgICAgICAgICAgIHRhc2tPYmoudGFza0dyb3VwLFxuICAgICAgICAgICAgICAgIHRoaXMuI1VJRFxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ25leHRVSUQnLCBgJHsrK3RoaXMuI1VJRH1gKTtcbiAgICAgICAgICAgIHRoaXMuI3NhdmVUb0xvY2FsU3RvcmFnZShuZXdUYXNrKTtcbiAgICAgICAgICAgIHRoaXMuI3Rhc2tMaWJyYXJ5LnB1c2gobmV3VGFzayk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZWxldGVUYXNrKFVJRCkge1xuICAgICAgICBsZXQgdGFza0luZGV4ID0gdGhpcy4jdGFza0xpYnJhcnkuZmluZEluZGV4KChlbGVtZW50KSA9PiBlbGVtZW50LlVJRCA9PT0gVUlEKTtcbiAgICAgICAgdGhpcy4jZGVsZXRlRnJvbUxvY2FsU3RvcmFnZShVSUQpO1xuICAgICAgICB0aGlzLiN0YXNrTGlicmFyeS5zcGxpY2UodGFza0luZGV4LCAxKTtcbiAgICB9XG5cbiAgICBhZGRUYXNrR3JvdXAoZ3JvdXBOYW1lKSB7XG4gICAgICAgIGlmIChncm91cE5hbWUgJiYgIXRoaXMuI3Rhc2tHcm91cHMuc29tZSgodGFza05hbWUpID0+IHRhc2tOYW1lID09PSBncm91cE5hbWUpKSB7XG4gICAgICAgICAgICB0aGlzLiN0YXNrR3JvdXBzLnB1c2goZ3JvdXBOYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZ3JvdXBOYW1lcycsIEpTT04uc3RyaW5naWZ5KHRoaXMuI3Rhc2tHcm91cHMpKTtcbiAgICB9XG5cbiAgICBnZXRBcHBEYXRhKCkge1xuICAgICAgICBsZXQgYXBwVGFza0RhdGEgPSB7XG4gICAgICAgICAgICB0YXNrRGF0YTogW10sXG4gICAgICAgICAgICBncm91cERhdGE6IFtdLFxuICAgICAgICAgICAgY3VycmVudFRhc2tHcm91cDogJycsXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHRoaXMuI2N1cnJlbnRUYXNrR3JvdXAgPT09ICdpbmJveCcpIHtcbiAgICAgICAgICAgIGFwcFRhc2tEYXRhLnRhc2tEYXRhID0gdGhpcy4jdGFza0xpYnJhcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhcHBUYXNrRGF0YS50YXNrRGF0YSA9IHRoaXMuI3Rhc2tMaWJyYXJ5LmZpbHRlcigodGFza09iaikgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0YXNrT2JqLnRhc2tHcm91cCA9PT0gdGhpcy4jY3VycmVudFRhc2tHcm91cDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgYXBwVGFza0RhdGEuZ3JvdXBEYXRhID0gdGhpcy4jdGFza0dyb3VwcztcbiAgICAgICAgYXBwVGFza0RhdGEuY3VycmVudFRhc2tHcm91cCA9IHRoaXMuI2N1cnJlbnRUYXNrR3JvdXA7XG5cbiAgICAgICAgcmV0dXJuIGFwcFRhc2tEYXRhO1xuICAgIH1cblxuICAgIHN3aXRjaEN1cnJlbnRUYXNrR3JvdXAodGFza0dyb3VwTmFtZSkge1xuICAgICAgICB0aGlzLiNjdXJyZW50VGFza0dyb3VwID0gdGFza0dyb3VwTmFtZTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2N1cnJlbnRUYXNrR3JvdXAnLCB0aGlzLiNjdXJyZW50VGFza0dyb3VwKTtcbiAgICB9XG5cbiAgICAjc2F2ZVRvTG9jYWxTdG9yYWdlKHRhc2tPYmopIHtcbiAgICAgICAgbGV0IHRhc2tTZXJpYWxpemVkID0gSlNPTi5zdHJpbmdpZnkodGFza09iaik7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke3Rhc2tPYmouVUlEfWAsIHRhc2tTZXJpYWxpemVkKTtcbiAgICB9XG5cbiAgICAjZGVsZXRlRnJvbUxvY2FsU3RvcmFnZShVSUQpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oVUlELnRvU3RyaW5nKCkpO1xuICAgIH1cblxuICAgICNsb2FkRnJvbUxvY2FsU3RvcmFnZSgpIHtcbiAgICAgICAgY29uc3QgbG9jYWxTdG9yYWdlS2V5cyA9IE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSk7XG4gICAgICAgIGNvbnN0IHRhc2tVSURzID0gbG9jYWxTdG9yYWdlS2V5cy5maWx0ZXIoZWwgPT4gQm9vbGVhbihOdW1iZXIucGFyc2VJbnQoZWwpKSB8fCBlbCA9PSAwKS5zb3J0KCk7XG5cbiAgICAgICAgdGFza1VJRHMuZm9yRWFjaChVSUQgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFza0RhdGFEZXNlcmlhbGl6ZWQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFVJRCkpO1xuICAgICAgICAgICAgY29uc3QgdGFza1RlbXAgPSBuZXcgVGFzayhcbiAgICAgICAgICAgICAgICB0YXNrRGF0YURlc2VyaWFsaXplZC50aXRsZSxcbiAgICAgICAgICAgICAgICB0YXNrRGF0YURlc2VyaWFsaXplZC5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICB0YXNrRGF0YURlc2VyaWFsaXplZC5kdWVEYXRlLFxuICAgICAgICAgICAgICAgIHRhc2tEYXRhRGVzZXJpYWxpemVkLnByaW9yaXR5LFxuICAgICAgICAgICAgICAgIHRhc2tEYXRhRGVzZXJpYWxpemVkLnRhc2tHcm91cCxcbiAgICAgICAgICAgICAgICB0YXNrRGF0YURlc2VyaWFsaXplZC5VSURcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIHRoaXMuI3Rhc2tMaWJyYXJ5LnB1c2godGFza1RlbXApO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiN0YXNrR3JvdXBzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ3JvdXBOYW1lcycpKSB8fCBbJ2luYm94J107XG4gICAgICAgIHRoaXMuI1VJRCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCduZXh0VUlEJykgfHwgMDtcbiAgICAgICAgdGhpcy4jY3VycmVudFRhc2tHcm91cCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50VGFza0dyb3VwJykgfHwgJ2luYm94JztcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhc2tTdG9yYWdlQ29udHJvbGxlcjsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdHlwZW9mKG8pIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHtcbiAgICByZXR1cm4gdHlwZW9mIG87XG4gIH0gOiBmdW5jdGlvbiAobykge1xuICAgIHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvO1xuICB9LCBfdHlwZW9mKG8pO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBUYXNrTGlzdENvbnRyb2xsZXIgZnJvbSBcIi4vdGFza0xpc3RDb250cm9sbGVyLmpzXCI7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxubmV3IFRhc2tMaXN0Q29udHJvbGxlcigpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
