module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/DatePopover.js":
/*!***********************************!*\
  !*** ./components/DatePopover.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _OrderProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OrderProvider */ "./components/OrderProvider.js");
/* harmony import */ var _OrderDatePicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OrderDatePicker */ "./components/OrderDatePicker.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers */ "./helpers.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var DatePopover =
/*#__PURE__*/
function (_Component) {
  _inherits(DatePopover, _Component);

  function DatePopover() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DatePopover);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DatePopover)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      active: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "togglePopover", function () {
      _this.setState(function (_ref) {
        var active = _ref.active;
        return {
          active: !active
        };
      });
    });

    return _this;
  }

  _createClass(DatePopover, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var activator = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OrderProvider__WEBPACK_IMPORTED_MODULE_2__["OrderConsumer"], null, function (_ref2) {
        var dates = _ref2.dates;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          onClick: _this2.togglePopover,
          disclosure: true
        }, dates === null ? 'Choose date' : Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(dates.start));
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          display: "inline-block"
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
        active: this.state.active,
        activator: activator,
        onClose: this.togglePopover,
        sectioned: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OrderDatePicker__WEBPACK_IMPORTED_MODULE_3__["default"], {
        togglePopover: this.togglePopover
      })));
    }
  }]);

  return DatePopover;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (DatePopover);

/***/ }),

/***/ "./components/IngredientTotalsTable.js":
/*!*********************************************!*\
  !*** ./components/IngredientTotalsTable.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _OrderProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OrderProvider */ "./components/OrderProvider.js");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var IngredientTotalsTable =
/*#__PURE__*/
function (_Component) {
  _inherits(IngredientTotalsTable, _Component);

  function IngredientTotalsTable() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, IngredientTotalsTable);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(IngredientTotalsTable)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSort", function (headingIndex, direction) {
      var ingredients = _this.state.ingredients;

      if (direction === "ascending") {
        ingredients.sort(function (a, b) {
          if (a[headingIndex] < b[headingIndex]) {
            return -1;
          }

          if (a[headingIndex] > b[headingIndex]) {
            return 1;
          }

          return 0;
        });
      } else {
        ingredients.sort(function (a, b) {
          if (a[headingIndex] < b[headingIndex]) {
            return 1;
          }

          if (a[headingIndex] > b[headingIndex]) {
            return -1;
          }

          return 0;
        });
      }
    });

    return _this;
  }

  _createClass(IngredientTotalsTable, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Card"].Section, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OrderProvider__WEBPACK_IMPORTED_MODULE_1__["OrderConsumer"], null, function (_ref) {
        var ingredients = _ref.ingredients;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["DataTable"], {
          columnContentTypes: ["text", "numeric", "text"],
          headings: ["Ingredient", "Quantity", "Measurement"],
          sortable: [true, true],
          defaultSortDirection: "descending",
          onSort: _this2.onSort,
          rows: ingredients // totals={["", "", totalProducts]}
          ,
          footerContent: "by David Lopez"
        });
      }));
    }
  }]);

  return IngredientTotalsTable;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (IngredientTotalsTable);

/***/ }),

/***/ "./components/OrderDatePicker.js":
/*!***************************************!*\
  !*** ./components/OrderDatePicker.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_OrderProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/OrderProvider */ "./components/OrderProvider.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var today = new Date();

var OrderDatePicker =
/*#__PURE__*/
function (_Component) {
  _inherits(OrderDatePicker, _Component);

  function OrderDatePicker() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, OrderDatePicker);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(OrderDatePicker)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      month: today.getMonth(),
      year: today.getFullYear()
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleMonthChange", function (month, year) {
      _this.setState({
        month: month,
        year: year
      });
    });

    return _this;
  }

  _createClass(OrderDatePicker, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          month = _this$state.month,
          year = _this$state.year;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["FormLayout"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_OrderProvider__WEBPACK_IMPORTED_MODULE_2__["OrderConsumer"], null, function (_ref) {
        var updatePath = _ref.updatePath,
            updateDates = _ref.updateDates;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["DatePicker"], {
          month: month,
          year: year,
          onChange: function onChange(value) {
            updatePath(value);
            updateDates(value);

            _this2.props.togglePopover();
          },
          onMonthChange: _this2.handleMonthChange,
          allowRange: false
        });
      }));
    }
  }]);

  return OrderDatePicker;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (OrderDatePicker);

/***/ }),

/***/ "./components/OrderProvider.js":
/*!*************************************!*\
  !*** ./components/OrderProvider.js ***!
  \*************************************/
/*! exports provided: default, OrderConsumer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderConsumer", function() { return OrderConsumer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var OrderContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();

var OrderProvider =
/*#__PURE__*/
function (_Component) {
  _inherits(OrderProvider, _Component);

  function OrderProvider() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, OrderProvider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(OrderProvider)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      path: "",
      dates: null,
      orders: [],
      ingredients: [],
      requestInProgress: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "buildIngredientRows", function () {
      var orders = _this.state.orders;
      var promises = [];
      orders.forEach(function (row) {
        var p = _this.getProductMetafields(row[1]);

        promises.push(p);
      }); // TODO Finish ingredient totalling

      Promise.all(promises).then(function (metafields) {
        var ingredientTotals = metafields.reduce(function (obj, metafield) {
          if (metafield) {
            var value = JSON.parse(metafield[0].value);
            var ingredients = Object.keys(value).map(function (key) {
              return value[key];
            });
            return obj.concat(ingredients);
          }

          return obj;
        }, []).reduce(function (obj, item) {
          var name = item.name,
              quantity = item.quantity,
              measurement = item.measurement;

          if (!obj[name]) {
            obj[name] = {};
            obj[name].quantity = 0;
            obj[name].measurement = measurement;
          }

          obj[name].quantity += parseInt(quantity, 10);
          return obj;
        }, {});
        var rows = Object.keys(ingredientTotals).map(function (key) {
          return [key, ingredientTotals[key].quantity, ingredientTotals[key].measurement];
        });

        _this.setState({
          ingredients: rows
        });
      }).catch(function (error) {
        return console.error(error);
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "buildOrderRows", function (orders) {
      var productQuantities = orders.reduce(function (obj, order) {
        return _toConsumableArray(obj).concat(_toConsumableArray(order.line_items));
      }, []).reduce(function (obj, item) {
        var name = item.name,
            quantity = item.quantity,
            product_id = item.product_id;

        if (!obj[name]) {
          obj[name] = {};
          obj[name].quantity = 0;
          obj[name].product_id = product_id;
        }

        obj[name].quantity += quantity;
        return obj;
      }, {});
      var rows = Object.keys(productQuantities).map(function (key) {
        return [key, productQuantities[key].product_id, productQuantities[key].quantity];
      });

      _this.setState({
        orders: rows,
        requestInProgress: false
      });

      _this.buildIngredientRows();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getOrders", function () {
      _this.setState({
        requestInProgress: true
      });

      var fetchOptions = {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      };
      fetch("/api".concat(_this.state.path), fetchOptions).then(function (response) {
        return response.json();
      }).then(function (json) {
        _this.buildOrderRows(json.orders);
      }).catch(function (error) {
        console.error(error);
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getProductMetafields", function (id) {
      _this.setState({
        requestInProgress: true
      });

      var fetchOptions = {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      };
      return fetch("/api/products/".concat(id, "/metafields.json"), fetchOptions).then(function (response) {
        return response.json();
      }).then(function (json) {
        var ingredients = json.metafields.filter(function (metafield) {
          return metafield.namespace === "sousChef";
        });

        if (ingredients.length > 0) {
          return ingredients;
        }
      }).catch(function (error) {
        console.error(error);
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updatePath", function (dates) {
      var path = "/orders.json?processed_at_min=".concat(dates.start.toISOString());

      _this.setState({
        path: path
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateDates", function (dates) {
      _this.setState({
        dates: dates
      });
    });

    return _this;
  }

  _createClass(OrderProvider, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(OrderContext.Provider, {
        value: {
          path: this.state.path,
          dates: this.state.dates,
          ingredients: this.state.ingredients,
          orders: this.state.orders,
          getOrders: this.getOrders,
          getProductMetafields: this.getProductMetafields,
          updateDates: this.updateDates,
          updatePath: this.updatePath
        }
      }, this.props.children);
    }
  }]);

  return OrderProvider;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var OrderConsumer = OrderContext.Consumer;
/* harmony default export */ __webpack_exports__["default"] = (OrderProvider);


/***/ }),

/***/ "./components/OrderTotalsTable.js":
/*!****************************************!*\
  !*** ./components/OrderTotalsTable.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var OrderTotalsTable =
/*#__PURE__*/
function (_Component) {
  _inherits(OrderTotalsTable, _Component);

  function OrderTotalsTable() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, OrderTotalsTable);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(OrderTotalsTable)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSort", function (headingIndex, direction) {
      var orders = _this.props.orders;

      if (direction === "ascending") {
        orders.sort(function (a, b) {
          if (a[headingIndex] < b[headingIndex]) {
            return -1;
          }

          if (a[headingIndex] > b[headingIndex]) {
            return 1;
          }

          return 0;
        });
      } else {
        orders.sort(function (a, b) {
          if (a[headingIndex] < b[headingIndex]) {
            return 1;
          }

          if (a[headingIndex] > b[headingIndex]) {
            return -1;
          }

          return 0;
        });
      }
    });

    return _this;
  }

  _createClass(OrderTotalsTable, [{
    key: "renderTable",
    value: function renderTable() {
      var orders = this.props.orders;
      var totalProducts = orders.reduce(function (total, row) {
        return total += row[2];
      }, 0);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["DataTable"], {
        columnContentTypes: ["text", "text", "numeric"],
        headings: ["Meal", "Product Id", "Quantity"],
        sortable: [true, false, true],
        defaultSortDirection: "descending",
        onSort: this.onSort,
        rows: orders,
        totals: ["", "", totalProducts],
        footerContent: "by David Lopez"
      });
    }
  }, {
    key: "render",
    value: function render() {
      var orders = this.props.orders;
      var requestInProgress = this.props.requestInProgress;

      if (requestInProgress) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"].Section, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: {
            textAlign: "center"
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Spinner"], {
          size: "large",
          color: "teal",
          accessibilityLabel: "loading"
        })));
      }

      if (orders === "" || orders.length <= 0) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"].Section, {
          title: "No meals found"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Try selecting or changing the date"));
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"].Section, null, this.renderTable());
    }
  }]);

  return OrderTotalsTable;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (OrderTotalsTable);

/***/ }),

/***/ "./helpers.js":
/*!********************!*\
  !*** ./helpers.js ***!
  \********************/
/*! exports provided: formatDate, getMetafields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMetafields", function() { return getMetafields; });
function formatDate(date) {
  var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var d = new Date(date);
  var month = monthNames[d.getMonth()];
  var day = d.getDate();
  var year = d.getFullYear();
  return "".concat(month, " ").concat(day, ", ").concat(year);
}
function getMetafields(productId) {
  var fetchOptions = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  };
  return fetch("/api/products/".concat(productId, "/metafields.json"), fetchOptions).then(function (response) {
    return response.json();
  }).then(function (json) {
    var metafields = json.metafields.filter(function (metafield) {
      return metafield.namespace === 'sousChef';
    });

    if (metafields.length > 0) {
      var ingredients = JSON.parse(metafields[0].value);
      return ingredients;
    } else {
      return null;
    }
  }).catch(function (error) {
    console.error(error);
  });
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_DatePopover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/DatePopover */ "./components/DatePopover.js");
/* harmony import */ var _components_OrderTotalsTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/OrderTotalsTable */ "./components/OrderTotalsTable.js");
/* harmony import */ var _components_IngredientTotalsTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/IngredientTotalsTable */ "./components/IngredientTotalsTable.js");
/* harmony import */ var _components_OrderProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/OrderProvider */ "./components/OrderProvider.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var App =
/*#__PURE__*/
function (_Component) {
  _inherits(App, _Component);

  function App() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(App)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      selected: 0,
      tabs: [{
        id: "order-totals",
        content: "Order totals",
        accessibilityLabel: "Order totals",
        panelID: "order-totals"
      }, {
        id: "ingredient-totals",
        content: "Ingredient totals",
        accessibilityLabel: "Ingredient totals",
        panelID: "ingredient-totals"
      }]
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleTabChange", function (selectedTabIndex) {
      _this.setState({
        selected: selectedTabIndex
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderTabContent", function (orders, requestInProgress) {
      var selected = _this.state.selected;

      if (selected === 0) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_OrderTotalsTable__WEBPACK_IMPORTED_MODULE_3__["default"], {
          orders: orders,
          requestInProgress: requestInProgress
        });
      } else {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_IngredientTotalsTable__WEBPACK_IMPORTED_MODULE_4__["default"], {
          orders: orders,
          requestInProgress: requestInProgress
        });
      }
    });

    return _this;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Page"], {
        title: "Meal Totals"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_OrderProvider__WEBPACK_IMPORTED_MODULE_5__["OrderConsumer"], null, function (_ref) {
        var getOrders = _ref.getOrders,
            orders = _ref.orders,
            requestInProgress = _ref.requestInProgress;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].Section, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
          title: "Search criteria",
          primaryFooterAction: {
            content: "Total meals",
            onAction: getOrders
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"].Section, {
          title: "Choose date"
        }, "Select meals ordered from ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_DatePopover__WEBPACK_IMPORTED_MODULE_2__["default"], null), " to today.", " "))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].Section, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Tabs"], {
          tabs: _this2.state.tabs,
          selected: _this2.state.selected,
          onSelect: _this2.handleTabChange,
          fitted: false
        }), _this2.renderTabContent(orders, requestInProgress))));
      }));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, null);
});

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@shopify/polaris":
/*!***********************************!*\
  !*** external "@shopify/polaris" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/polaris");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map