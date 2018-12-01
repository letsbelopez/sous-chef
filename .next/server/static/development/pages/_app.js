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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./node_modules/@shopify/polaris/styles.css":
/*!**************************************************!*\
  !*** ./node_modules/@shopify/polaris/styles.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/app */ "next/app");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_OrderProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/OrderProvider */ "./components/OrderProvider.js");
/* harmony import */ var _shopify_polaris_styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shopify/polaris/styles.css */ "./node_modules/@shopify/polaris/styles.css");
/* harmony import */ var _shopify_polaris_styles_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris_styles_css__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






global.isClient = typeof window !== 'undefined';

var MyApp =
/*#__PURE__*/
function (_App) {
  _inherits(MyApp, _App);

  function MyApp() {
    _classCallCheck(this, MyApp);

    return _possibleConstructorReturn(this, _getPrototypeOf(MyApp).apply(this, arguments));
  }

  _createClass(MyApp, [{
    key: "render",
    value: function render() {
      var _ref = isClient ? window : {
        apiKey: '',
        shopOrigin: ''
      },
          apiKey = _ref.apiKey,
          shopOrigin = _ref.shopOrigin,
          _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_0__["Container"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["AppProvider"], {
        shopOrigin: shopOrigin,
        apiKey: apiKey
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_OrderProvider__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, pageProps))));
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_0___default.a);

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./pages/_app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@shopify/polaris":
/*!***********************************!*\
  !*** external "@shopify/polaris" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/polaris");

/***/ }),

/***/ "next/app":
/*!***************************!*\
  !*** external "next/app" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/app");

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
//# sourceMappingURL=_app.js.map