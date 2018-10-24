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

/***/ "./app/common/Footer.js":
/*!******************************!*\
  !*** ./app/common/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RfLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RfLink */ "./app/common/RfLink.js");



var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    className: "footer"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer-content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "copyright"
  }, "\xA9 \u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0435 \u041A\u0421\u041A 2017\u20132018"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "footer-menu"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "footer-menu__item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "",
    className: "footer-menu__link"
  }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "footer-menu__item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "",
    className: "footer-menu__link"
  }, "FAQ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "footer-menu__item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "",
    className: "footer-menu__link"
  }, "\u041E \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0438"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "copyright-logo"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RfLink__WEBPACK_IMPORTED_MODULE_1__["default"], null)))));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./app/common/Header.js":
/*!******************************!*\
  !*** ./app/common/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-select */ "react-select");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store */ "./store.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var linkStyle = {
  marginRight: 15
};
var selectOptions = [{
  value: 'citizen-page',
  label: 'Жителям'
}, {
  value: 'represent-page',
  label: 'Представителям'
}, {
  value: 'partner-page',
  label: 'Партнерам'
}];
var customStyles = {
  option: function option(styles, _ref) {
    var data = _ref.data,
        isDisabled = _ref.isDisabled,
        isFocused = _ref.isFocused,
        isSelected = _ref.isSelected;
    var color = 'rgba(137,207,172,.5)';
    return _objectSpread({}, styles, {
      color: '#56bb8a',
      backgroundColor: isDisabled ? null : isSelected ? color : isFocused ? color : null
    });
  }
};

var Header =
/*#__PURE__*/
function (_Component) {
  _inherits(Header, _Component);

  function Header(props) {
    var _this;

    _classCallCheck(this, Header);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Header).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "changeBodyClass", function (className) {
      var _this$props = _this.props,
          representClass = _this$props.representClass,
          citizenClass = _this$props.citizenClass,
          partnerClass = _this$props.partnerClass,
          activeClass = _this$props.activeClass;
      console.log('ACTIVE CLASS', activeClass);
      document.body.classList.remove('partner-page', 'represent-page', 'citizen-page');
      document.body.classList.add(className);

      if (_this.state.activeClass !== className) {
        _this.setState({
          activeClass: className
        });

        console.log(className);

        if (className === 'represent-page') {
          representClass();
          console.log('here'); // store.dispatch({type: actionTypes.REPRESENT});
          // console.log(store.getState())
        } else if (className === 'partner-page') {
          partnerClass();
          console.log('there'); // store.dispatch({type: actionTypes.PARTNER});
          // console.log(store.getState())
        } else if (className === 'citizen-page') {
          citizenClass(); // store.dispatch({type: actionTypes.CITIZEN});
          // console.log(store.getState())
        }
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (selectedOption) {
      _this.setState({
        selectedOption: selectedOption
      });

      var _this$props2 = _this.props,
          representClass = _this$props2.representClass,
          citizenClass = _this$props2.citizenClass,
          partnerClass = _this$props2.partnerClass,
          activeClass = _this$props2.activeClass;
      console.log('selectedOption', selectedOption);
      document.body.classList.remove('partner-page', 'represent-page', 'citizen-page');
      document.body.classList.add(selectedOption.value);

      if (_this.state.activeClass !== selectedOption.value) {
        _this.setState({
          activeClass: selectedOption.value
        });

        console.log(selectedOption.value);

        if (selectedOption.value === 'represent-page') {
          representClass();
          console.log('here'); // store.dispatch({type: actionTypes.REPRESENT});
          // console.log(store.getState())
        } else if (selectedOption.value === 'partner-page') {
          partnerClass();
          console.log('there'); // store.dispatch({type: actionTypes.PARTNER});
          // console.log(store.getState())
        } else if (selectedOption.value === 'citizen-page') {
          citizenClass(); // store.dispatch({type: actionTypes.CITIZEN});
          // console.log(store.getState())
        }
      }
    });

    _this.changeBodyClass = _this.changeBodyClass.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = {
      activeClass: 'citizen-page',
      isDesktop: true,
      selectedOption: {
        value: "citizen-page",
        label: "Жителям"
      }
    };
    return _this;
  }
  /**
   * Calculate & Update state of new dimensions
   */


  _createClass(Header, [{
    key: "updateDimensions",
    value: function updateDimensions() {
      if (window.innerWidth < 767) {
        this.setState({
          isDesktop: false
        });
      } else {
        this.setState({
          isDesktop: true
        });
      }
    }
    /**
     * Add event listener
     */

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateDimensions();
      window.addEventListener("resize", this.updateDimensions.bind(this));
    }
    /**
     * Remove event listener
     */
    // componentWillUnmount() {
    //   window.removeEventListener("resize", this.updateDimensions.bind(this));
    // }

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var activeClass = this.props.activeClass;
      var _this$state = this.state,
          selectedOption = _this$state.selectedOption,
          isDesktop = _this$state.isDesktop;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
        className: "header"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "header-content"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "logo"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        width: "100",
        height: "42",
        viewBox: "0 0 100 42",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M22.32 0H5.67C4.16703 0.00264374 2.72638 0.600866 1.66362 1.66362C0.600866 2.72638 0.00264374 4.16703 0 5.67L0 36.37C0.0131675 37.866 0.616032 39.2964 1.67766 40.3506C2.73928 41.4047 4.17393 41.9974 5.67 42H22.32C23.8178 42.0001 25.255 41.4085 26.3188 40.3541C27.3826 39.2997 27.9868 37.8677 28 36.37V5.67C27.9974 4.1653 27.3978 2.72314 26.3328 1.6601C25.2679 0.597052 23.8247 -2.33196e-06 22.32 0V0Z",
        fill: "url(#paint0_linear)"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M41.6201 26.61V14.3H49.2301L48.8601 16.24H43.7101V19.4H48.5401L48.1901 21.29H43.7101V24.67H49.2301L48.8601 26.61H41.6201Z",
        fill: "#282828"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M22.19 5.27002H5.8C5.05465 5.27792 4.34251 5.57957 3.81825 6.10944C3.294 6.63931 2.99996 7.35463 3 8.10002V32.67C2.99996 33.4154 3.294 34.1307 3.81825 34.6606C4.34251 35.1905 5.05465 35.4921 5.8 35.5H9L20 40.81V35.5H22.14C22.5142 35.504 22.8854 35.4337 23.2322 35.2933C23.579 35.1528 23.8946 34.945 24.1605 34.6818C24.4265 34.4186 24.6377 34.1053 24.7817 33.76C24.9258 33.4147 25 33.0442 25 32.67V8.10002C25 7.35291 24.7046 6.6361 24.1782 6.10595C23.6518 5.57579 22.9371 5.2753 22.19 5.27002ZM21.33 10.44V11.73H18.24V10.44H21.33ZM15.53 10.44V11.73H12.45V10.44H15.53ZM9.74 27.44H6.66V27.79H9.74V31.31H6.66V26.12H9.74V27.44ZM9.74 19.62H6.66V20H9.74V23.5H6.66V18.28H9.74V19.62ZM6.66 15.62V10.44H9.74V11.73H6.66V12.08H9.74V15.65L6.66 15.62ZM15.53 31.3H12.45V27.81H15.53V31.3ZM15.53 27.43H12.45V26.12H15.53V27.43ZM15.53 23.43H12.45V20H15.53V23.43ZM15.53 19.58H12.45V18.28H15.53V19.58ZM12.45 15.58V12.08H15.53V15.65L12.45 15.58ZM21.33 31.26H18.24V27.81H21.33V31.26ZM21.33 27.39H18.24V26.12H21.33V27.39ZM21.33 23.39H18.24V20H21.33V23.39ZM21.33 19.54H18.24V18.28H21.33V19.54ZM18.24 15.54V12.08H21.33V15.65L18.24 15.54Z",
        fill: "white"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M10.75 2.21997H17.3C17.4989 2.21997 17.6897 2.29899 17.8303 2.43964C17.971 2.58029 18.05 2.77106 18.05 2.96997C18.05 3.16888 17.971 3.35965 17.8303 3.5003C17.6897 3.64095 17.4989 3.71997 17.3 3.71997H10.75C10.5511 3.71997 10.3603 3.64095 10.2197 3.5003C10.079 3.35965 10 3.16888 10 2.96997C10 2.77106 10.079 2.58029 10.2197 2.43964C10.3603 2.29899 10.5511 2.21997 10.75 2.21997Z",
        fill: "#009C7F"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M65.5999 21.27L63.9999 23.06V26.6H61.8799V14.29H63.9999V20.2L69.2999 14.29H71.9999L66.9999 19.73L71.9999 26.6H69.4299L65.5999 21.27Z",
        fill: "#282828"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M73.84 20.46C73.8008 19.6265 73.931 18.7937 74.2229 18.012C74.5147 17.2303 74.9621 16.5159 75.5379 15.912C76.1137 15.3082 76.8061 14.8274 77.573 14.4987C78.34 14.1701 79.1656 14.0004 80 14C81.2442 13.9199 82.4775 14.2753 83.4883 15.0051C84.4991 15.735 85.2245 16.7938 85.54 18L83.54 18.66C83.3594 17.8698 82.9048 17.1691 82.2568 16.6822C81.6088 16.1953 80.8092 15.9536 80 16C79.4384 16.0115 78.8851 16.1383 78.3745 16.3726C77.8639 16.6068 77.4069 16.9435 77.0318 17.3617C76.6568 17.7799 76.3716 18.2707 76.1942 18.8037C76.0167 19.3366 75.9506 19.9004 76 20.46C75.9543 21.0237 76.0262 21.5908 76.2113 22.1252C76.3964 22.6597 76.6906 23.1498 77.0752 23.5645C77.4598 23.9791 77.9264 24.3093 78.4454 24.5341C78.9644 24.7588 79.5244 24.8732 80.09 24.87C80.9157 24.8946 81.7257 24.6407 82.3896 24.1491C83.0535 23.6576 83.5326 22.9569 83.75 22.16L85.66 22.78C85.3341 23.9929 84.6049 25.0588 83.5925 25.8021C82.5802 26.5455 81.3449 26.9221 80.09 26.87C79.2497 26.8918 78.4139 26.7396 77.6351 26.423C76.8563 26.1065 76.1514 25.6324 75.5645 25.0305C74.9777 24.4286 74.5215 23.7119 74.2248 22.9254C73.928 22.1389 73.797 21.2995 73.84 20.46Z",
        fill: "#282828"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M93.2 21.27L91.56 23.06V26.6H89.48V14.29H91.56V20.2L96.86 14.29H99.6L94.6 19.73L99.6 26.6H97L93.2 21.27Z",
        fill: "#282828"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M55.8798 21.71C55.7194 21.7121 55.5603 21.6813 55.4124 21.6193C55.2644 21.5574 55.1308 21.4657 55.0198 21.35C54.9038 21.2371 54.812 21.1017 54.7501 20.9521C54.6882 20.8025 54.6575 20.6418 54.6598 20.48C54.6546 20.318 54.6821 20.1566 54.7405 20.0055C54.7989 19.8543 54.8871 19.7164 54.9998 19.6C55.1128 19.4848 55.2485 19.3942 55.3982 19.334C55.5479 19.2738 55.7085 19.2452 55.8698 19.25C56.031 19.2458 56.1914 19.2746 56.3411 19.3348C56.4907 19.395 56.6264 19.4853 56.7398 19.6C56.9576 19.8393 57.0783 20.1513 57.0783 20.475C57.0783 20.7986 56.9576 21.1106 56.7398 21.35C56.5115 21.5782 56.2026 21.7075 55.8798 21.71Z",
        fill: "#282828"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M21.0499 35.5H17.6899V35.79H21.0499V35.5Z",
        fill: "url(#paint1_linear)"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("linearGradient", {
        id: "paint0_linear",
        x1: "13.59",
        y1: "0.68",
        x2: "14.42",
        y2: "42.53",
        gradientUnits: "userSpaceOnUse"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
        stopColor: "#35B98E"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
        offset: "1",
        stopColor: "#47BB8F"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("linearGradient", {
        id: "paint1_linear",
        x1: "77.1283",
        y1: "45.8385",
        x2: "88.4179",
        y2: "45.8385",
        gradientUnits: "userSpaceOnUse"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
        stopColor: "#35B98E"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
        offset: "1",
        stopColor: "#47BB8F"
      })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "slogan"
      }, "\u0417\u0443-\u0437\u0443 \u0435\u0442i\u043F \u0436\u04E9\u043D\u0434\u0435\u0439\u043C\u0456\u0437"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "main-tabs"
      }, isDesktop ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "main-tabs-ul"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()({
          active: activeClass === 'citizen-page'
        }),
        onClick: function onClick() {
          _this2.changeBodyClass('citizen-page');
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "\u0416\u0438\u0442\u0435\u043B\u044F\u043C")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()({
          active: activeClass === 'represent-page'
        }),
        onClick: function onClick() {
          _this2.changeBodyClass('represent-page');
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "\u041F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043B\u044F\u043C \u041A\u0421\u041A")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()({
          active: activeClass === 'partner-page'
        }),
        onClick: function onClick() {
          _this2.changeBodyClass('partner-page');
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "\u041F\u0430\u0440\u0442\u043D\u0435\u0440\u0430\u043C"))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_1___default.a, {
        value: selectedOption,
        onChange: this.handleChange,
        options: selectOptions,
        isSearchable: false,
        styles: customStyles
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "lang-menu"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "active"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: ""
      }, "\u0420\u0443")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: ""
      }, "\u049A\u049B"))))))));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(function (_ref2) {
  var activeClass = _ref2.activeClass;
  return {
    activeClass: activeClass
  };
}, function (dispatch) {
  return {
    representClass: Object(redux__WEBPACK_IMPORTED_MODULE_4__["bindActionCreators"])(_store__WEBPACK_IMPORTED_MODULE_6__["representClass"], dispatch),
    citizenClass: Object(redux__WEBPACK_IMPORTED_MODULE_4__["bindActionCreators"])(_store__WEBPACK_IMPORTED_MODULE_6__["citizenClass"], dispatch),
    partnerClass: Object(redux__WEBPACK_IMPORTED_MODULE_4__["bindActionCreators"])(_store__WEBPACK_IMPORTED_MODULE_6__["partnerClass"], dispatch)
  };
})(Header));

/***/ }),

/***/ "./app/common/MyLayout.js":
/*!********************************!*\
  !*** ./app/common/MyLayout.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./app/common/Header.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ "./app/common/Footer.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var Layout =
/*#__PURE__*/
function (_Component) {
  _inherits(Layout, _Component);

  function Layout(props) {
    _classCallCheck(this, Layout);

    return _possibleConstructorReturn(this, _getPrototypeOf(Layout).call(this, props));
  }

  _createClass(Layout, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "EKSK Landing"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], null), this.props.children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], null));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./app/common/RfLink.js":
/*!******************************!*\
  !*** ./app/common/RfLink.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var RfLink = function RfLink() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "rf-link ",
    href: "http://rocketfirm.com",
    target: "_blank"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "rf-link__logo",
    width: "120",
    height: "17",
    viewBox: "0 0 105 14.47",
    xmlns: "http://www.w3.org/2000/svg"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    className: "rf-link__letters",
    d: "M5 11.67L3.28 8.51H1.89v3.16H0V2.78h4.17A3.44 3.44 0 0 1 5.41 3a2.6 2.6 0 0 1 1.54 1.51 3.08 3.08 0 0 1 .21 1.14 3 3 0 0 1-.17 1 2.51 2.51 0 0 1-.45.78 2.54 2.54 0 0 1-.63.57 2.39 2.39 0 0 1-.71.29l2 3.38H5zM3.88 6.85a1.43 1.43 0 0 0 1-.32 1.09 1.09 0 0 0 .38-.88 1.09 1.09 0 0 0-.38-.88 1.43 1.43 0 0 0-1-.32h-2v2.4h2zm9.23 4.98a5 5 0 0 1-1.85-.34 4.29 4.29 0 0 1-2.44-2.41 4.82 4.82 0 0 1-.35-1.85 4.82 4.82 0 0 1 .35-1.85A4.29 4.29 0 0 1 11.26 3 5.25 5.25 0 0 1 15 3a4.29 4.29 0 0 1 2.44 2.41 4.82 4.82 0 0 1 .35 1.85 4.82 4.82 0 0 1-.35 1.85A4.29 4.29 0 0 1 15 11.49a5 5 0 0 1-1.89.34zm0-1.68a2.67 2.67 0 0 0 1.11-.23 2.6 2.6 0 0 0 .85-.61 2.73 2.73 0 0 0 .55-.92 3.58 3.58 0 0 0 0-2.32 2.8 2.8 0 0 0-.55-.93 2.46 2.46 0 0 0-.85-.61 2.93 2.93 0 0 0-2.23 0 2.39 2.39 0 0 0-.85.61 2.85 2.85 0 0 0-.54.93 3.57 3.57 0 0 0 0 2.32 2.77 2.77 0 0 0 .54.92 2.52 2.52 0 0 0 .85.61 2.67 2.67 0 0 0 1.12.23zm10.56 1.68a5.15 5.15 0 0 1-1.87-.33 4.35 4.35 0 0 1-2.5-2.39 4.66 4.66 0 0 1-.37-1.87 4.66 4.66 0 0 1 .37-1.87A4.35 4.35 0 0 1 21.8 3a5.15 5.15 0 0 1 1.87-.33 4.34 4.34 0 0 1 1.33.15 4.14 4.14 0 0 1 1 .49 3.68 3.68 0 0 1 .79.69 5.6 5.6 0 0 1 .57.81l-1.63.8a2.43 2.43 0 0 0-.84-.92 2.21 2.21 0 0 0-1.25-.37 2.8 2.8 0 0 0-1.11.22 2.63 2.63 0 0 0-.89.61 2.79 2.79 0 0 0-.58.93 3.19 3.19 0 0 0-.21 1.16 3.23 3.23 0 0 0 .21 1.17 2.71 2.71 0 0 0 .58.93 2.68 2.68 0 0 0 .89.61 2.8 2.8 0 0 0 1.11.22 2.24 2.24 0 0 0 1.25-.37 2.36 2.36 0 0 0 .84-.93l1.63.79a5.54 5.54 0 0 1-.57.81 3.87 3.87 0 0 1-.79.7 4 4 0 0 1-1 .49 4.34 4.34 0 0 1-1.33.17zm10.86-.16l-2.69-3.56-.69.83v2.73h-1.9V2.78h1.89v4l3.15-4h2.33L33.09 7l3.77 4.72h-2.33zm4 0V2.78h6.29v1.67h-4.4v1.88h4.3V8h-4.3v2h4.4v1.67h-6.29zm10.68 0V4.45h-2.6V2.78h7.08v1.67h-2.58v7.22h-1.9zm24.35 0V2.78h6.29v1.67h-4.4v1.88h4.3V8h-4.3v3.68h-1.89zm8.44 0V2.78h1.89v8.89H82zm9.18 0l-1.75-3.16H88v3.16h-1.85V2.78h4.17a3.44 3.44 0 0 1 1.25.22 2.6 2.6 0 0 1 1.53 1.51 3.08 3.08 0 0 1 .21 1.14 3 3 0 0 1-.17 1 2.51 2.51 0 0 1-.45.78 2.54 2.54 0 0 1-.63.53 2.39 2.39 0 0 1-.71.29l2 3.38h-2.17zM90 6.85a1.43 1.43 0 0 0 1-.32 1.09 1.09 0 0 0 .38-.88 1.09 1.09 0 0 0-.38-.88 1.43 1.43 0 0 0-1-.32h-2v2.4h2zm12.92 4.82V5.45l-2.51 6.22h-.82l-2.51-6.22v6.22h-1.89V2.78h2.65L100 8.16l2.16-5.37h2.66v8.89h-1.89z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    className: "rf-link__icon",
    d: "M70.57 7.23a7.24 7.24 0 1 0-7.24 7.24 7.23 7.23 0 0 0 7.24-7.24zM61.75 12c-.36.07-.32-.1-.21-.25l.15-.17c.77-.87 1.37-1.19.37-1.19s-1.32 0-1.59-.28a2.62 2.62 0 0 1-.28-1.59c0-1-.32-.4-1.2.37l-.18.11c-.15.11-.32.15-.25-.21A5.23 5.23 0 0 1 60 6.14a12 12 0 0 1 2.38-.89c2.29-1.65 4.48-2.31 4.95-2s-.32 2.65-2 4.95a12 12 0 0 1-.89 2.38A5.23 5.23 0 0 1 61.75 12z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    className: "rf-link__icon",
    d: "M65.08 6.78A1.24 1.24 0 0 1 63.79 8a1.25 1.25 0 1 1 1.29-1.22z"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "rf-link__logo rf-link__logo--mobile",
    width: "39",
    height: "17",
    viewBox: "0 0 39 17",
    xmlns: "http://www.w3.org/2000/svg"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    className: "rf-link__letters",
    d: "M5.0793 7.208c.5002 0 .9163-.1444 1.2481-.4324.3316-.2878.4974-.6842.4974-1.1884 0-.504-.1658-.9004-.4974-1.1884-.3318-.288-.748-.4323-1.248-.4323H2.4785v3.2414h2.6007zm1.5012 6.5183L4.2938 9.4586H2.4786v4.2677H0V1.7158h5.4562c.6056 0 1.1509.0963 1.6348.288.4838.192.8944.4625 1.2327.8104.3383.3482.5975.7592.7784 1.2335.1806.4742.271.9876.271 1.5395 0 .5284-.0734.9967-.2199 1.4046-.1462.4081-.3422.759-.5886 1.0532-.2458.2945-.5213.5344-.826.7205-.3044.186-.615.315-.931.3871l2.6179 4.5737h-2.845zm4.9129 0V1.7158h8.2382v2.2506H13.972v2.5392h5.6375v2.2507H13.972v4.97h-2.4786z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    className: "rf-link__icon",
    d: "M29.6176 12.849c-.3382.0622-.3097-.1025-.1956-.2389.0399-.0509.0868-.0957.145-.154.7148-.787.9836-1.1376.0609-1.2294-.5593-.0546-.8855-.1166-1.3963-.619-.0045-.0045-.0036-.0043-.0075-.0064 0 .001 0 .0013.0004.002l.0026.0001c.3575 1.6647-1.6919 2.037-2.5602 2.5618-.0274.0162-.0465.017-.06.01-.0066-.013-.006-.0325.0108-.0592.5335-.8527.9126-2.8656 2.6045-2.5157a.1945.1945 0 0 1-.0054-.0065c-.51-.5012-.5757-.8285-.6286-1.3803-.0877-.9068-.4422-.6437-1.2507.0546-.0604.056-.1056.1007-.1579.1417-.1413.105-.3.1398-.2377-.1926.1108-.5662.6524-2.0204 1.3162-2.4479.9718-.635 2.089-.4148 2.3965-.6373 2.1366-1.5157 5.2252-2.7981 5.6507-2.4839l.0018-.0023c-.0002.0006.0058.0027.0081.0055 0 0-.0039.0013.001.0013l.0011.0039s.0016.0021-.0004.0032c.0056 0 .0075.0004.0088.0046a.01.01 0 0 0 .0028.0017c0-.0008-.0005-.0008-.0005-.0017l.0009.0017h-.0004c.0004.0036.0034.0061.0034.0096v-.001c.3177.4185-1.0044 3.4492-2.5574 5.5378-.2262.305-.008 1.4016-.6586 2.354-.4426.647-1.9243 1.1718-2.4983 1.2827m9.33-4.6996c.0037-4.4681-3.6837-8.0903-8.23-8.091-4.5502-.0013-8.2382 3.6243-8.2373 8.0922 0 4.4683 3.6855 8.0938 8.2338 8.0928 4.5512-.001 8.2372-3.623 8.2336-8.094"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    className: "rf-link__icon",
    d: "M32.6597 7.1148c-.0148-.5475-.4778-.975-1.0411-.9537-.5507.0219-.9887.4797-.9652 1.0286.0172.5445.4867.968 1.042.9508.5561-.021.989-.4825.9643-1.0257"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "rf-link__year"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "2018")));
};

/* harmony default export */ __webpack_exports__["default"] = (RfLink);

/***/ }),

/***/ "./app/components/Icons.js":
/*!*********************************!*\
  !*** ./app/components/Icons.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_react_loader_name_Icon_static_images_svg_road_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svg-react-loader?name=Icon!../../static/images/svg/road.svg */ "./node_modules/svg-react-loader/lib/loader.js?name=Icon!./static/images/svg/road.svg");
/* harmony import */ var svg_react_loader_name_Icon_static_images_svg_road_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_react_loader_name_Icon_static_images_svg_road_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var svg_react_loader_name_Icon_static_images_svg_snowflake_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! svg-react-loader?name=Icon!../../static/images/svg/snowflake.svg */ "./node_modules/svg-react-loader/lib/loader.js?name=Icon!./static/images/svg/snowflake.svg");
/* harmony import */ var svg_react_loader_name_Icon_static_images_svg_snowflake_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(svg_react_loader_name_Icon_static_images_svg_snowflake_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var svg_react_loader_name_Icon_static_images_svg_water_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! svg-react-loader?name=Icon!../../static/images/svg/water.svg */ "./node_modules/svg-react-loader/lib/loader.js?name=Icon!./static/images/svg/water.svg");
/* harmony import */ var svg_react_loader_name_Icon_static_images_svg_water_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(svg_react_loader_name_Icon_static_images_svg_water_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var svg_react_loader_name_Icon_static_images_svg_garbage_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! svg-react-loader?name=Icon!../../static/images/svg/garbage.svg */ "./node_modules/svg-react-loader/lib/loader.js?name=Icon!./static/images/svg/garbage.svg");
/* harmony import */ var svg_react_loader_name_Icon_static_images_svg_garbage_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(svg_react_loader_name_Icon_static_images_svg_garbage_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var svg_react_loader_name_Icon_static_images_svg_repair_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! svg-react-loader?name=Icon!../../static/images/svg/repair.svg */ "./node_modules/svg-react-loader/lib/loader.js?name=Icon!./static/images/svg/repair.svg");
/* harmony import */ var svg_react_loader_name_Icon_static_images_svg_repair_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(svg_react_loader_name_Icon_static_images_svg_repair_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var svg_react_loader_name_Icon_static_images_svg_plants_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! svg-react-loader?name=Icon!../../static/images/svg/plants.svg */ "./node_modules/svg-react-loader/lib/loader.js?name=Icon!./static/images/svg/plants.svg");
/* harmony import */ var svg_react_loader_name_Icon_static_images_svg_plants_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(svg_react_loader_name_Icon_static_images_svg_plants_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var svg_react_loader_name_Icon_static_images_svg_neighbours_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! svg-react-loader?name=Icon!../../static/images/svg/neighbours.svg */ "./node_modules/svg-react-loader/lib/loader.js?name=Icon!./static/images/svg/neighbours.svg");
/* harmony import */ var svg_react_loader_name_Icon_static_images_svg_neighbours_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(svg_react_loader_name_Icon_static_images_svg_neighbours_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var svg_react_loader_name_Icon_static_images_svg_arrow_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! svg-react-loader?name=Icon!../../static/images/svg/arrow.svg */ "./node_modules/svg-react-loader/lib/loader.js?name=Icon!./static/images/svg/arrow.svg");
/* harmony import */ var svg_react_loader_name_Icon_static_images_svg_arrow_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(svg_react_loader_name_Icon_static_images_svg_arrow_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var svg_react_loader_name_Icon_static_images_svg_apple_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! svg-react-loader?name=Icon!../../static/images/svg/apple.svg */ "./node_modules/svg-react-loader/lib/loader.js?name=Icon!./static/images/svg/apple.svg");
/* harmony import */ var svg_react_loader_name_Icon_static_images_svg_apple_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(svg_react_loader_name_Icon_static_images_svg_apple_svg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var svg_react_loader_name_Icon_static_images_svg_google_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! svg-react-loader?name=Icon!../../static/images/svg/google.svg */ "./node_modules/svg-react-loader/lib/loader.js?name=Icon!./static/images/svg/google.svg");
/* harmony import */ var svg_react_loader_name_Icon_static_images_svg_google_svg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(svg_react_loader_name_Icon_static_images_svg_google_svg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var svg_react_loader_name_Icon_static_images_svg_city_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! svg-react-loader?name=Icon!../../static/images/svg/city.svg */ "./node_modules/svg-react-loader/lib/loader.js?name=Icon!./static/images/svg/city.svg");
/* harmony import */ var svg_react_loader_name_Icon_static_images_svg_city_svg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(svg_react_loader_name_Icon_static_images_svg_city_svg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var svg_react_loader_name_Icon_static_images_svg_alert_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! svg-react-loader?name=Icon!../../static/images/svg/alert.svg */ "./node_modules/svg-react-loader/lib/loader.js?name=Icon!./static/images/svg/alert.svg");
/* harmony import */ var svg_react_loader_name_Icon_static_images_svg_alert_svg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(svg_react_loader_name_Icon_static_images_svg_alert_svg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var svg_react_loader_name_Icon_static_images_svg_orange_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! svg-react-loader?name=Icon!../../static/images/svg/orange.svg */ "./node_modules/svg-react-loader/lib/loader.js?name=Icon!./static/images/svg/orange.svg");
/* harmony import */ var svg_react_loader_name_Icon_static_images_svg_orange_svg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(svg_react_loader_name_Icon_static_images_svg_orange_svg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var svg_react_loader_name_Icon_static_images_svg_ok_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! svg-react-loader?name=Icon!../../static/images/svg/ok.svg */ "./node_modules/svg-react-loader/lib/loader.js?name=Icon!./static/images/svg/ok.svg");
/* harmony import */ var svg_react_loader_name_Icon_static_images_svg_ok_svg__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(svg_react_loader_name_Icon_static_images_svg_ok_svg__WEBPACK_IMPORTED_MODULE_14__);















var ICONS = {
  road: svg_react_loader_name_Icon_static_images_svg_road_svg__WEBPACK_IMPORTED_MODULE_1___default.a,
  snowflake: svg_react_loader_name_Icon_static_images_svg_snowflake_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
  water: svg_react_loader_name_Icon_static_images_svg_water_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
  garbage: svg_react_loader_name_Icon_static_images_svg_garbage_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
  repair: svg_react_loader_name_Icon_static_images_svg_repair_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
  plants: svg_react_loader_name_Icon_static_images_svg_plants_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
  neighbours: svg_react_loader_name_Icon_static_images_svg_neighbours_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
  arrow: svg_react_loader_name_Icon_static_images_svg_arrow_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
  apple: svg_react_loader_name_Icon_static_images_svg_apple_svg__WEBPACK_IMPORTED_MODULE_9___default.a,
  google: svg_react_loader_name_Icon_static_images_svg_google_svg__WEBPACK_IMPORTED_MODULE_10___default.a,
  city: svg_react_loader_name_Icon_static_images_svg_city_svg__WEBPACK_IMPORTED_MODULE_11___default.a,
  alert: svg_react_loader_name_Icon_static_images_svg_alert_svg__WEBPACK_IMPORTED_MODULE_12___default.a,
  orange: svg_react_loader_name_Icon_static_images_svg_orange_svg__WEBPACK_IMPORTED_MODULE_13___default.a,
  ok: svg_react_loader_name_Icon_static_images_svg_ok_svg__WEBPACK_IMPORTED_MODULE_14___default.a
};
/* harmony default export */ __webpack_exports__["default"] = (function (name) {
  var Icon = ICONS[name];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    className: "svg-icon svg-icon-".concat(name)
  });
});

/***/ }),

/***/ "./app/pages/MainPage/AddKsk.js":
/*!**************************************!*\
  !*** ./app/pages/MainPage/AddKsk.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Icons */ "./app/components/Icons.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var AddKsk =
/*#__PURE__*/
function (_Component) {
  _inherits(AddKsk, _Component);

  function AddKsk(props) {
    var _this;

    _classCallCheck(this, AddKsk);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AddKsk).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_handleChange", function (event) {
      var formValues = _this.state.formValues;

      _this.setState({
        formValues: _objectSpread({}, formValues, _defineProperty({}, event.target.getAttribute('name'), event.target.value))
      }, function () {
        console.log('onchange', this.state.formValues);
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_handleSubmit", function (event) {
      event.preventDefault();
      var formData = new FormData(event.target);
      console.log('formValues', JSON.stringify(formData));
      fetch("http://eksk-landing.rocketfirm.net/api/v1/feedback/create", {
        method: 'post',
        headers: {
          'Authorization': 'Bearer GZavaFROL7WLxUEISqQRv-9_9XHfG01N'
        } //   body: JSON.stringify(formData)

      }).then(function (res) {
        return res.json();
      }).then(function (data) {
        console.log('data', data);
      });
    });

    _this.state = {
      formValues: {}
    };
    return _this;
  }

  _createClass(AddKsk, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "section section6"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "feedback-content"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "section-left"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "\u0421\u0434\u0435\u043B\u0430\u0439\u0442\u0435 \u0441\u0432\u043E\u044E ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " \u0436\u0438\u0437\u043D\u044C \u043F\u0440\u043E\u0449\u0435 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u0421 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435\u043C \u0441\u0442\u0430\u043D\u0435\u0442 \u0433\u043E\u0440\u0430\u0437\u0434\u0435 \u043B\u0435\u0433\u0447\u0435 \u0440\u0435\u0448\u0430\u0442\u044C \u0431\u044B\u0442\u043E\u0432\u044B\u0435 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u044B"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "download-apps"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u0421\u043A\u0430\u0447\u0430\u0439\u0442\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435, \u043E\u043D\u043E \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E\u0435"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "app-links"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "",
        className: "app-link"
      }, Object(_components_Icons__WEBPACK_IMPORTED_MODULE_1__["default"])('apple'), "  App Store"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "",
        className: "app-link"
      }, Object(_components_Icons__WEBPACK_IMPORTED_MODULE_1__["default"])('google'), " Google Play")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "section-right"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u043D\u0430\u043C, \u0435\u0441\u043B\u0438 \u0432\u0430\u0448\u0435\u0433\u043E ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " \u041A\u0421\u041A \u043D\u0435\u0442 \u0432 \u0431\u0430\u0437\u0435 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        className: "form-transparent form-flex",
        onSubmit: this._handleSubmit
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group form-group--half"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        onChange: this._handleChange,
        type: "text",
        name: "email",
        className: "form-control",
        placeholder: "\u041F\u043E\u0447\u0442\u0430"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group form-group--half"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        onChange: this._handleChange,
        type: "text",
        name: "city",
        className: "form-control",
        placeholder: "\u0413\u043E\u0440\u043E\u0434"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        onChange: this._handleChange,
        type: "text",
        name: "street",
        className: "form-control",
        placeholder: "\u0423\u043B\u0438\u0446\u0430"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "submit",
        className: "btn btn--transparent"
      }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443 ", Object(_components_Icons__WEBPACK_IMPORTED_MODULE_1__["default"])('arrow'), " "))))));
    }
  }]);

  return AddKsk;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AddKsk);

/***/ }),

/***/ "./app/pages/MainPage/CheckKsk.js":
/*!****************************************!*\
  !*** ./app/pages/MainPage/CheckKsk.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_autosuggest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-autosuggest */ "react-autosuggest");
/* harmony import */ var react_autosuggest__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_autosuggest__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-select */ "react-select");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Icons */ "./app/components/Icons.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var downshift__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! downshift */ "downshift");
/* harmony import */ var downshift__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(downshift__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _node_modules_ansi_colors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../node_modules/ansi-colors */ "./node_modules/ansi-colors/index.js");
/* harmony import */ var _node_modules_ansi_colors__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_node_modules_ansi_colors__WEBPACK_IMPORTED_MODULE_8__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









 // Teach Autosuggest how to calculate suggestions for any given input value.

var getSuggestions = function getSuggestions(data, value) {
  var inputValue = value.trim().toLowerCase();
  var inputLength = inputValue.length;
  return inputLength === 0 ? [] : data.filter(function (city) {
    return city.title.toLowerCase().slice(0, inputLength) === inputValue;
  });
}; // When suggestion is clicked, Autosuggest needs to populate the input based on
// the clicked suggestion. Teach Autosuggest how to calculate the input value
// for every given suggestion.


var getSuggestionValue = function getSuggestionValue(suggestion) {
  return suggestion.title;
}; // Use your imagination to render suggestions.


var renderSuggestion = function renderSuggestion(suggestion) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, suggestion.title);
};

var CheckKsk =
/*#__PURE__*/
function (_Component) {
  _inherits(CheckKsk, _Component);

  function CheckKsk(props) {
    var _this;

    _classCallCheck(this, CheckKsk);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CheckKsk).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setStatePromise", function (state) {
      return new Promise(function (resolve) {
        _this.setState(state, resolve);
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "hideKskModal", function () {
      _this.setState({
        kskModalOpen: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChange", function (event, _ref) {
      var newValue = _ref.newValue,
          method = _ref.method;

      _this.setState({
        value: newValue
      });

      if (getSuggestions(_this.state.cities, newValue).length) {
        _this.setState({
          noMatchesMessage: false
        });
      } else {
        _this.setState({
          noMatchesMessage: true
        });
      }

      if (newValue.length == 0) {
        _this.setState({
          noMatchesMessage: false
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onBlur", function (event, _ref2) {
      var highlightedSuggestion = _ref2.highlightedSuggestion;
      console.log('highlightedSuggestion', highlightedSuggestion);

      if (_this.state.noMatchesMessage) {
        _this.setState({
          value: ''
        });
      }

      _this.setState({
        noMatchesMessage: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSuggestionsFetchRequested", function (_ref3) {
      var value = _ref3.value;

      _this.setState({
        suggestions: getSuggestions(_this.state.cities, value)
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSuggestionSelected", function (event, _ref4) {
      var method = _ref4.method;
      console.log('here');

      if (method === 'enter') {
        event.preventDefault();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSuggestionsClearRequested", function () {
      _this.setState({
        suggestions: []
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_handleChange", function (event) {
      var formData = _this.state.formData;

      _this.setState({
        formData: _objectSpread({}, formData, _defineProperty({}, event.target.getAttribute('name'), event.target.value))
      }, function () {
        console.log('onchange', this.state.formData.street);
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_handleSubmit", function (event) {
      event.preventDefault();
      console.log('beforesend', _this.state.value, _this.state.formData.street);
      var city = encodeURI(_this.state.value);
      var street = encodeURI(_this.state.formData.street);
      var number = encodeURI(_this.state.formData.house);
      fetch("https://dev.e-kck.kz/api/v1/landing/search/?city=".concat(city, "&street=").concat(street, "&number=").concat(number), {
        method: 'get',
        headers: {
          'Authorization': 'Bearer GZavaFROL7WLxUEISqQRv-9_9XHfG01N'
        }
      }).then(function (res) {
        return res.json();
      }).then(function (data) {
        console.log('data', data);
        data.data && data.data.ksk ? _this.setState({
          successKsk: true,
          ksk: data.data.ksk.title,
          kskCityId: data.data.city.id
        }) : _this.setState({
          successKsk: false,
          ksk: null,
          kskCityId: null
        });
        data.data ? _this.setState({
          kskModalOpen: true,
          kskCityId: lodash__WEBPACK_IMPORTED_MODULE_6___default.a.findKey(_this.props.cities, {
            'title': 'Астана'
          })
        }) : _this.setState({
          kskModalOpen: false
        });
        console.log('kskModalOpen', _this.state.kskModalOpen, _this.state.ksk);
      });
    });

    _this.inputs = {
      name: {
        error: false,
        success: false
      },
      email: {
        error: false,
        success: false
      }
    };
    _this.state = {
      value: '',
      cities: _this.props.data.cities,
      noMatchesMessage: false,
      suggestions: [],
      submitting: false,
      submitted: false,
      formData: {},
      kskModalOpen: false,
      states: _this.inputs,
      fetching: false,
      ksk: null,
      successKsk: false,
      kskCityId: null
    };
    return _this;
  }

  _createClass(CheckKsk, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log('cities', this.state.cities);
    }
  }, {
    key: "render",
    // submit (e) {
    //   e.preventDefault()
    //   const formData = new FormData(e.target)
    //   console.log('data', formData)
    // fetch(`http://dev.e-kck.kz/api/v1/landing/search`, {
    //   method: 'get',
    //   headers: {
    //     'Accept': 'application/json, text/plain, */*',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(data)
    // }).then((res) => {
    //   res.status === 200 ? this.setState({ submitted: true }) : ''
    // })
    // }
    value: function render() {
      var _this$state = this.state,
          formData = _this$state.formData,
          update = _this$state.update,
          loading = _this$state.loading,
          autoComplete = _this$state.autoComplete;
      var _this$state2 = this.state,
          selectedOption = _this$state2.selectedOption,
          kskCityId = _this$state2.kskCityId,
          noMatchesMessage = _this$state2.noMatchesMessage,
          kskModalOpen = _this$state2.kskModalOpen,
          states = _this$state2.states,
          fetching = _this$state2.fetching,
          value = _this$state2.value,
          suggestions = _this$state2.suggestions,
          ksk = _this$state2.ksk,
          successKsk = _this$state2.successKsk;

      var inputClasses = lodash__WEBPACK_IMPORTED_MODULE_6___default.a.mapValues(states, function (_ref5) {
        var error = _ref5.error,
            success = _ref5.success;
        return classnames__WEBPACK_IMPORTED_MODULE_1___default()('input-container', {
          error: error,
          success: success
        });
      });

      var buttonClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
        fetching: fetching
      });
      var inputProps = {
        placeholder: 'Город',
        name: 'city',
        value: value,
        className: 'form-control',
        onChange: this.onChange,
        onBlur: this.onBlur,
        autoComplete: 'off'
      };
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "section section5"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "map"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/images/map.png",
        alt: ""
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ksk-modal', {
          'ksk-modal--open': kskModalOpen == true
        }, {
          'ksk-modal--success': successKsk == true,
          'ksk-modal--error': successKsk == false
        }, _defineProperty({}, "ksk-modal--city".concat(kskCityId), this.state.kskCityId))
      }, successKsk ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u041A\u0421\u041A \xAB", ksk, "\xBB ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442"), "  \u0441 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435\u043C"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "app-links app-links--dark"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "",
        className: "app-link"
      }, Object(_components_Icons__WEBPACK_IMPORTED_MODULE_4__["default"])('apple'), "App Store"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "",
        className: "app-link"
      }, Object(_components_Icons__WEBPACK_IMPORTED_MODULE_4__["default"])('google'), "Google Play"))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u0412\u0430\u0448 \u041A\u0421\u041A  ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u043D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442"), "  \u0441 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435\u043C")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "check-form"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0443", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "\u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u0432 \u0432\u0430\u0448\u0435\u043C \u041A\u0421\u041A"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        className: "form-inline",
        onSubmit: this._handleSubmit
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_autosuggest__WEBPACK_IMPORTED_MODULE_2___default.a, {
        suggestions: suggestions,
        onSuggestionsFetchRequested: this.onSuggestionsFetchRequested,
        onSuggestionsClearRequested: this.onSuggestionsClearRequested,
        onSuggestionSelected: this.onSuggestionSelected,
        getSuggestionValue: getSuggestionValue,
        renderSuggestion: renderSuggestion,
        inputProps: inputProps
      }), noMatchesMessage && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "no-matches"
      }, "\u0413\u043E\u0440\u043E\u0434\u0430 \u043D\u0435\u0442 \u0432 \u0441\u043F\u0438\u0441\u043A\u0435")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        name: "street",
        type: "text",
        className: "form-control",
        id: "",
        placeholder: "\u0423\u043B\u0438\u0446\u0430",
        onChange: this._handleChange
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        name: "house",
        type: "text",
        className: "form-control",
        id: "",
        placeholder: "\u0414\u043E\u043C",
        onChange: this._handleChange
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "submit",
        disabled: fetching,
        className: "btn btn--primary"
      }, "\u041F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C"))));
    }
  }]);

  return CheckKsk;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CheckKsk);

/***/ }),

/***/ "./app/pages/MainPage/Facts.js":
/*!*************************************!*\
  !*** ./app/pages/MainPage/Facts.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Facts =
/*#__PURE__*/
function (_Component) {
  _inherits(Facts, _Component);

  function Facts(props) {
    _classCallCheck(this, Facts);

    return _possibleConstructorReturn(this, _getPrototypeOf(Facts).call(this, props));
  }

  _createClass(Facts, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log('facts', this.props);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "section section4"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "\u041F\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0435 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "\u0432 \u041A\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043D\u0435"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "facts-list"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "fact-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "fact-item__number"
      }, "600"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "fact-item__text"
      }, "\u041A\u0421\u041A ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "\u0432 \u0431\u0430\u0437\u0435")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "fact-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "fact-item__number"
      }, "4"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "fact-item__text"
      }, "\u0433\u043E\u0440\u043E\u0434\u0430 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "\u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044E\u0442\u0441\u044F")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "fact-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "fact-item__number"
      }, "7 000"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "fact-item__text"
      }, "\u0437\u0430\u044F\u0432\u043E\u043A ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "\u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043E"))));
    }
  }]);

  return Facts;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Facts);

/***/ }),

/***/ "./app/pages/MainPage/ProblemSlide.js":
/*!********************************************!*\
  !*** ./app/pages/MainPage/ProblemSlide.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Icons */ "./app/components/Icons.js");




var ProblemSlide = function ProblemSlide(_ref) {
  var id = _ref.id,
      className = _ref.className,
      _onClick = _ref.onClick,
      iconName = _ref.iconName,
      iconText = _ref.iconText;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: className,
    onClick: function onClick(e) {
      return _onClick(id);
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#problem".concat(id),
    "aria-controls": "problem".concat(id),
    "data-toggle": "tab"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "problems-list__icon"
  }, Object(_components_Icons__WEBPACK_IMPORTED_MODULE_2__["default"])("".concat(iconName))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "problems-list__title"
  }, iconText));
};

ProblemSlide.propTypes = {
  iconName: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],
  iconText: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"]
};
/* harmony default export */ __webpack_exports__["default"] = (ProblemSlide);

/***/ }),

/***/ "./app/pages/MainPage/Problems.js":
/*!****************************************!*\
  !*** ./app/pages/MainPage/Problems.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_problems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../data/problems */ "./data/problems.js");
/* harmony import */ var _ProblemSlide_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProblemSlide.js */ "./app/pages/MainPage/ProblemSlide.js");
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-id-swiper */ "react-id-swiper");
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_id_swiper__WEBPACK_IMPORTED_MODULE_5__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }








var Problems =
/*#__PURE__*/
function (_Component) {
  _inherits(Problems, _Component);

  function Problems(props) {
    var _this;

    _classCallCheck(this, Problems);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Problems).call(this, props));
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = {
      activeTab: '1',
      isDesktop: true
    };
    return _this;
  }

  _createClass(Problems, [{
    key: "toggle",
    value: function toggle(tab) {
      if (this.state.activeTab !== tab) {
        this.setState({
          activeTab: tab
        });
      }
    }
    /**
     * Calculate & Update state of new dimensions
     */

  }, {
    key: "updateDimensions",
    value: function updateDimensions() {
      if (window.innerWidth < 991) {
        this.setState({
          isDesktop: false
        });
      } else {
        this.setState({
          isDesktop: true
        });
      }
    }
    /**
     * Add event listener
     */

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateDimensions();
      window.addEventListener("resize", this.updateDimensions.bind(this));
    }
    /**
     * Remove event listener
     */
    // componentWillUnmount() {
    //   window.removeEventListener("resize", this.updateDimensions.bind(this));
    // }

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var params = {
        slidesPerView: 'auto'
      };
      var isDesktop = this.state.isDesktop;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "section section1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "section-half"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "iphone-perfomance"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/images/iphone.png",
        alt: ""
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["TabContent"], {
        activeTab: this.state.activeTab
      }, _data_problems__WEBPACK_IMPORTED_MODULE_3__["default"].map(function (el, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["TabPane"], {
          tabId: el.id,
          key: el.id
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          src: el.image,
          alt: ""
        }));
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "section-half"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "section-content"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "\u0421 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435\u043C \u043B\u0435\u0433\u0447\u0435 \u0440\u0435\u0448\u0430\u0442\u044C \u0431\u044B\u0442\u043E\u0432\u044B\u0435 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u044B"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u041C\u0435\u043D\u044F\u0439\u0442\u0435 \u0441\u0432\u043E\u0439 \u0436\u0438\u043B\u043E\u0439", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "\u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441 \u043A \u043B\u0443\u0447\u0448\u0435\u043C\u0443")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "swiper-container problems-slider"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "swiper-wrapper problems-list"
      }, isDesktop ? _data_problems__WEBPACK_IMPORTED_MODULE_3__["default"].map(function (el, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProblemSlide_js__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({
          onClick: _this2.toggle,
          className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('swiper-slide', 'problems-list__item', {
            active: _this2.state.activeTab === el.id
          }),
          key: el.id
        }, el));
      }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_id_swiper__WEBPACK_IMPORTED_MODULE_5___default.a, params, _data_problems__WEBPACK_IMPORTED_MODULE_3__["default"].map(function (el, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProblemSlide_js__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({
          onClick: _this2.toggle,
          className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('swiper-slide', 'problems-list__item', {
            active: _this2.state.activeTab === el.id
          }),
          key: el.id
        }, el));
      }))))));
    }
  }]);

  return Problems;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Problems);

/***/ }),

/***/ "./app/pages/MainPage/ReviewSlide.js":
/*!*******************************************!*\
  !*** ./app/pages/MainPage/ReviewSlide.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var ReviewSlide = function ReviewSlide(_ref) {
  var reviewName = _ref.reviewName,
      reviewAuthor = _ref.reviewAuthor,
      reviewText = _ref.reviewText,
      image = _ref.image;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "swiper-slide reviews-list__item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "reviews-list__text"
  }, reviewText), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "reviews-list__author"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: image,
    alt: ""
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "reviews-list__author-info"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "reviews-list__author-name"
  }, reviewName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "reviews-list__author-status"
  }, reviewAuthor))));
};

ReviewSlide.propTypes = {
  stepTitle: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],
  stepText: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"]
};
/* harmony default export */ __webpack_exports__["default"] = (ReviewSlide);

/***/ }),

/***/ "./app/pages/MainPage/Reviews.js":
/*!***************************************!*\
  !*** ./app/pages/MainPage/Reviews.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-id-swiper */ "react-id-swiper");
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_id_swiper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_reviews__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../data/reviews */ "./data/reviews.js");
/* harmony import */ var _ReviewSlide_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ReviewSlide.js */ "./app/pages/MainPage/ReviewSlide.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var Reviews =
/*#__PURE__*/
function (_Component) {
  _inherits(Reviews, _Component);

  function Reviews(props) {
    var _this;

    _classCallCheck(this, Reviews);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Reviews).call(this, props));
    _this.goNext = _this.goNext.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.goPrev = _this.goPrev.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.swiper = null, _this.state = {
      activeIndex: null,
      imagesLoaded: null,
      isBeginning: true,
      isEnd: false
    };
    return _this;
  }

  _createClass(Reviews, [{
    key: "goNext",
    value: function goNext() {
      if (this.swiper) this.swiper.slideNext();
    }
  }, {
    key: "goPrev",
    value: function goPrev() {
      if (this.swiper) this.swiper.slidePrev();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        activeIndex: this.swiper.activeIndex,
        imagesLoaded: this.swiper.imagesLoaded,
        isBeginning: this.swiper.isBeginning,
        isEnd: this.swiper.isEnd
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var params = {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 30,
        speed: 600,
        breakpoints: {
          900: {
            slidesPerView: 2,
            slidesPerGroup: 2
          },
          640: {
            slidesPerView: 1,
            slidesPerGroup: 1
          }
        },
        on: {
          init: function init(swiper) {
            _this2.swiper = swiper;
          },
          slideChangeTransitionStart: function slideChangeTransitionStart() {
            return _this2.swiper && _this2.setState({
              activeIndex: _this2.swiper.activeIndex,
              isBeginning: _this2.swiper.isBeginning,
              isEnd: _this2.swiper.isEnd
            });
          }
        }
      };
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "section section3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "\u041E\u0442\u0437\u044B\u0432\u044B \u043E\u0442 \u0440\u0435\u0430\u043B\u044C\u043D\u044B\u0445 \u0436\u0438\u043B\u044C\u0446\u043E\u0432 \u0416\u041A"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "reviews-list"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_id_swiper__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({}, params, {
        ref: function ref(node) {
          if (node) _this2.swiper = node.swiper;
        }
      }), _data_reviews__WEBPACK_IMPORTED_MODULE_2__["default"].map(function (el, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ReviewSlide_js__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
          key: el.id
        }, el));
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "swiper-pagination my-pagination"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, this.swiper && Math.ceil((Number(this.state.activeIndex) + 3) / 3)), "/", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, this.swiper && Math.ceil(Number(this.state.imagesLoaded) / 3))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "swiper-button-prev ".concat(this.state.isBeginning ? 'swiper-button-disabled' : ''),
        onClick: this.goPrev
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "swiper-button-next ".concat(this.state.isEnd ? 'swiper-button-disabled' : ''),
        onClick: this.goNext
      })));
    }
  }]);

  return Reviews;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Reviews);

/***/ }),

/***/ "./app/pages/MainPage/StepSlide.js":
/*!*****************************************!*\
  !*** ./app/pages/MainPage/StepSlide.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var StepSlide = function StepSlide(_ref) {
  var id = _ref.id,
      className = _ref.className,
      _onClick = _ref.onClick,
      stepTitle = _ref.stepTitle,
      stepText = _ref.stepText;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: className,
    onClick: function onClick(e) {
      return _onClick(id);
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#step".concat(id),
    "aria-controls": "step".concat(id),
    "data-toggle": "tab"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "steps-list__title"
  }, stepTitle), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "steps-list__text"
  }, stepText)));
};

StepSlide.propTypes = {
  stepTitle: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],
  stepText: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"]
};
/* harmony default export */ __webpack_exports__["default"] = (StepSlide);

/***/ }),

/***/ "./app/pages/MainPage/Steps.js":
/*!*************************************!*\
  !*** ./app/pages/MainPage/Steps.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_steps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../data/steps */ "./data/steps.js");
/* harmony import */ var _StepSlide_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StepSlide.js */ "./app/pages/MainPage/StepSlide.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







var Steps =
/*#__PURE__*/
function (_Component) {
  _inherits(Steps, _Component);

  function Steps(props) {
    var _this;

    _classCallCheck(this, Steps);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Steps).call(this, props));
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = {
      activeTab: '1'
    };
    return _this;
  }

  _createClass(Steps, [{
    key: "toggle",
    value: function toggle(tab) {
      if (this.state.activeTab !== tab) {
        this.setState({
          activeTab: tab
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "section section2"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "section-half"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "section-content"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "\u041A\u0430\u043A \u044D\u0442\u043E \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u043D\u0430 \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0435"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u041F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u044C\u0442\u0435, \u0447\u0442\u043E \u0443 \u0432\u0430\u0441 \u043D\u0430 \u044D\u0442\u0430\u0436\u0435 \u0441\u0433\u043E\u0440\u0435\u043B\u0430 \u043B\u0430\u043C\u043F\u043E\u0447\u043A\u0430, \u0430 \u0432\u0430\u0448 \u0441\u044B\u043D \u0441\u0438\u043B\u044C\u043D\u043E \u0431\u043E\u0438\u0442\u0441\u044F \u0442\u0435\u043C\u043D\u043E\u0442\u044B")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "steps-list"
      }, _data_steps__WEBPACK_IMPORTED_MODULE_3__["default"].map(function (el, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StepSlide_js__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({
          onClick: _this2.toggle,
          className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('steps-list__item', {
            active: _this2.state.activeTab === el.id
          }),
          key: el.id
        }, el));
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "section-half"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "iphone-perfomance"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/images/iphone.png",
        alt: ""
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["TabContent"], {
        activeTab: this.state.activeTab
      }, _data_steps__WEBPACK_IMPORTED_MODULE_3__["default"].map(function (el, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["TabPane"], {
          tabId: el.id,
          key: el.id
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          src: el.image,
          alt: ""
        }));
      })))));
    }
  }]);

  return Steps;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Steps);

/***/ }),

/***/ "./app/pages/MainPage/TopMain.js":
/*!***************************************!*\
  !*** ./app/pages/MainPage/TopMain.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Icons */ "./app/components/Icons.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store */ "./store.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var TopMain =
/*#__PURE__*/
function (_Component) {
  _inherits(TopMain, _Component);

  // export default class TopMain extends Component {
  function TopMain(props, context) {
    var _this;

    _classCallCheck(this, TopMain);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TopMain).call(this, props, context));
    _this.state = _objectSpread({}, props, {
      activeClass: 'citizen-page'
    });
    return _this;
  }

  _createClass(TopMain, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log('state', this.state);
    }
  }, {
    key: "render",
    value: function render() {
      var activeClass = this.props.activeClass;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "top-main-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "top-main"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "top-main__content"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "section-left"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('tab-pane', 'citizen-block', {
          active: activeClass === 'citizen-page'
        }),
        id: "citizen-page"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "\u0423\u043F\u0440\u043E\u0449\u0430\u0435\u043C \u043E\u0431\u0449\u0435\u043D\u0438\u0435", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), "\u043C\u0435\u0436\u0434\u0443 \u041A\u0421\u041A \u0438 \u0436\u0438\u0442\u0435\u043B\u044F\u043C\u0438"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0439\u0442\u0435 \u0437\u0430\u044F\u0432\u043A\u0438, \u043F\u043E\u043B\u0443\u0447\u0430\u0439\u0442\u0435 \u043E\u0442\u0447\u0435\u0442\u044B \u0438 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0443\u0439\u0442\u0435 \u0441\u043E\u0431\u0440\u0430\u043D\u0438\u044F \u0441 \u0441\u043E\u0441\u0435\u0434\u044F\u043C\u0438"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "download-apps"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "\u0421\u043A\u0430\u0447\u0430\u0439\u0442\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435, \u043E\u043D\u043E \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E\u0435"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "app-links"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "",
        className: "app-link"
      }, Object(_components_Icons__WEBPACK_IMPORTED_MODULE_0__["default"])('apple'), "App Store"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "",
        className: "app-link"
      }, Object(_components_Icons__WEBPACK_IMPORTED_MODULE_0__["default"])('google'), "Google Play")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('tab-pane', 'represent-block', {
          active: activeClass === 'represent-page'
        }),
        id: "represent-page"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "\u041F\u0440\u0438\u0441\u043E\u0435\u0434\u0438\u043D\u044F\u0439\u0442\u0435\u0441\u044C \u043A \u0446\u0438\u0444\u0440\u043E\u0432\u0438\u0437\u0430\u0446\u0438\u0438!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "tab-pane__content"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "tab-pane__left"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "\u0414\u043B\u044F \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u043E\u0432 \u041A\u0421\u041A \u043C\u044B \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043B\u0438 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u0443\u044E \u0430\u0434\u043C\u0438\u043D-\u043F\u0430\u043D\u0435\u043B\u044C, \u0443\u0434\u043E\u0431\u043D\u0443\u044E \u0434\u043B\u044F \u043E\u0442\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0437\u0430\u043F\u0440\u043E\u0441\u043E\u0432 \u0436\u0438\u043B\u044C\u0446\u043E\u0432."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "about-text"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "\u0412 \u0430\u0434\u043C\u0438\u043D-\u043F\u0430\u043D\u0435\u043B\u0438 \u0435\u0441\u0442\u044C \u0440\u0430\u0437\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u0435 \u043F\u0440\u0430\u0432 \u0434\u043E\u0441\u0442\u0443\u043F\u0430 (\u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440 \u041A\u0421\u041A \u0432\u0438\u0434\u0438\u0442 \u0432\u0441\u0451, \u0430 \u0438\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C \u2014 \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0435 \u0435\u043C\u0443). \u0420\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u0441 \u0437\u0430\u044F\u0432\u043A\u0430\u043C\u0438 \u0443\u0434\u043E\u0431\u043D\u043E \u0438 \u043D\u0430 \u043D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u043E\u043C \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u0435 \u0438\u043B\u0438 \u043D\u043E\u0443\u0442\u0431\u0443\u043A\u0435, \u0438 \u0447\u0435\u0440\u0435\u0437 \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0439 \u0442\u0435\u043B\u0435\u0444\u043E\u043D."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "\u0414\u043B\u044F \u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438 \u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445 \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u0439, \u0432 \u0430\u0434\u043C\u0438\u043D-\u043F\u0430\u043D\u0435\u043B\u044C \u0432\u0441\u0442\u0440\u043E\u0435\u043D \u043C\u0435\u0445\u0430\u043D\u0438\u0437\u043C \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0438 \u0438 \u0441\u0434\u0430\u0447\u0438 \u043E\u0442\u0447\u0435\u0442\u043E\u0432. \u0427\u0442\u043E\u0431\u044B \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u043E\u0442\u0447\u0435\u0442, \u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E \u043D\u0430\u0436\u0430\u0442\u044C \u0442\u0440\u0438 \u043A\u043D\u043E\u043F\u043A\u0438!"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "tab-pane__right"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "facts-list"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "fact-item"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "fact-item__number"
      }, "900"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "fact-item__text"
      }, "\u0436\u0438\u043B\u044C\u0446\u043E\u0432", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), "\u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043E")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "fact-item"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "fact-item__number"
      }, "4"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "fact-item__text"
      }, "\u0433\u043E\u0440\u043E\u0434\u0430", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), "\u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044E\u0442\u0441\u044F")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "fact-item"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "fact-item__number"
      }, "10 000"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "fact-item__text"
      }, "\u0437\u0430\u044F\u0432\u043E\u043A \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043E")))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('tab-pane', 'partner-block', {
          active: activeClass === 'partner-page'
        }),
        id: "partner-page"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u0447\u0430\u0435\u043C \u0441 \u0431\u0438\u0437\u043D\u0435\u0441\u043E\u043C"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "tab-pane__content"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "tab-pane__left"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "\u0415\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u043E \u0441\u0435\u0440\u0432\u0438\u0441\u043E\u043C \u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442\u0441\u044F \u0442\u044B\u0441\u044F\u0447\u0438 \u043A\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043D\u0441\u0446\u0435\u0432, \u0436\u0438\u043B\u044C\u0446\u043E\u0432 \u043C\u043D\u043E\u0433\u043E\u043A\u0432\u0430\u0440\u0442\u0438\u0440\u043D\u044B\u0445 \u0434\u043E\u043C\u043E\u0432."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "about-text"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "\u0412 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0438 \u0443\u0434\u043E\u0431\u043D\u0430\u044F \u0441\u0435\u0433\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439 \u043F\u043E \u0433\u043E\u0440\u043E\u0434\u0430\u043C, \u0440\u0430\u0439\u043E\u043D\u0430\u043C \u0433\u043E\u0440\u043E\u0434\u0430 \u0438 \u0434\u0430\u0436\u0435 \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u044B\u043C \u0416\u041A!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "\u0413\u043E\u0442\u043E\u0432\u044B \u0440\u0430\u0441\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043F\u043E \u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438 \u0432\u0430\u0448\u0438\u0445 \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u0438\u043B\u0438 \u0443\u0441\u043B\u0443\u0433 \u0432 \u043D\u0430\u0448\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "tab-pane__right"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "facts-list"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "fact-item"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "fact-item__number"
      }, "50 000"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "fact-item__text"
      }, "\u043F\u043E\u0441\u0435\u0442\u0438\u0442\u0435\u043B\u0435\u0439", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), "\u0435\u0436\u0435\u043C\u0435\u0441\u044F\u0447\u043D\u043E")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "fact-item"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "fact-item__number"
      }, "4"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "fact-item__text"
      }, "\u0433\u043E\u0440\u043E\u0434\u0430", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), "\u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044E\u0442\u0441\u044F"))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "phone-block"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "/static/images/iphone-cut.png",
        alt: "",
        "data-aos": "fade-up",
        "data-aos-duration": "1000"
      }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "svg-border"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "phone-messages"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "message accepted",
        id: "message1",
        "data-aos": "fade",
        "data-aos-delay": "1000",
        "data-aos-duration": "1000"
      }, Object(_components_Icons__WEBPACK_IMPORTED_MODULE_0__["default"])('alert'), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "message-text"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "\u0412\u0430\u0448\u0443 \u0437\u0430\u044F\u0432\u043A\u0443 \u0432\u0437\u044F\u043B\u0438 \u0432 \u0440\u0430\u0431\u043E\u0442\u0443"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "\u041A\u0421\u041A \"\u0410\u0439\u0434\u0430\u0440\""))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "message process",
        id: "message2",
        "data-aos": "fade-left",
        "data-aos-delay": "1100",
        "data-aos-duration": "1000"
      }, Object(_components_Icons__WEBPACK_IMPORTED_MODULE_0__["default"])('orange'), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "message-text"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "\u0421\u0433\u043E\u0440\u0435\u043B\u0430 \u043B\u0430\u043C\u043F\u043E\u0447\u043A\u0430"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "\u0440\u0430\u0441\u0441\u043C\u0430\u0442\u0440\u0438\u0432\u0430\u0435\u043C"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "message done",
        id: "message3",
        "data-aos": "fade-down",
        "data-aos-delay": "1200",
        "data-aos-duration": "1000"
      }, Object(_components_Icons__WEBPACK_IMPORTED_MODULE_0__["default"])('ok'), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "message-text"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "\u0414\u0430\u0432\u0430\u0439\u0442\u0435 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u043C \u0448\u043B\u0430\u0433\u0431\u0430\u0443\u043C \u0432\u043E \u0434\u0432\u043E\u0440\u0435, \u043D\u0430\u0434\u043E\u0435\u043B\u043E!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "\u0438\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u043E"))))));
    }
  }]);

  return TopMain;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

function mapStateToProps(state) {
  return {
    activeClass: state.activeClass
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps)(TopMain));

/***/ }),

/***/ "./data/problems.js":
/*!**************************!*\
  !*** ./data/problems.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var problems = [{
  id: '1',
  iconName: 'road',
  iconText: 'ремонт \n асфальта',
  image: '/static/images/scene1.jpg'
}, {
  id: '2',
  iconName: 'snowflake',
  iconText: 'чистка двора от снега',
  image: '/static/images/scene1.jpg'
}, {
  id: '3',
  iconName: 'water',
  iconText: 'устранение течи',
  image: '/static/images/scene1.jpg'
}, {
  id: '4',
  iconName: 'garbage',
  iconText: 'уборка мусора \n со двора',
  image: '/static/images/scene1.jpg'
}, {
  id: '5',
  iconName: 'repair',
  iconText: 'ремонт \n и замена перил',
  image: '/static/images/scene1.jpg'
}, {
  id: '6',
  iconName: 'plants',
  iconText: 'посадка и полив \n растений',
  image: '/static/images/scene1.jpg'
}, {
  id: '7',
  iconName: 'neighbours',
  iconText: 'собрания \n с соседями',
  image: '/static/images/scene1.jpg'
}];
/* harmony default export */ __webpack_exports__["default"] = (problems);

/***/ }),

/***/ "./data/reviews.js":
/*!*************************!*\
  !*** ./data/reviews.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var reviews = [{
  id: '1',
  reviewName: 'Арман',
  reviewAuthor: 'Агашка',
  reviewText: '«Отправили заявку, на следующий день пришел электрик и всё починил, очень круто!»',
  image: '/static/images/author1.png'
}, {
  id: '2',
  reviewName: 'Айгерим',
  reviewAuthor: 'Апашка',
  reviewText: '«Давно мы с соседями так не работали сообща, смогли выгнать наглых хулиганов со двора!»',
  image: '/static/images/author2.png'
}, {
  id: '3',
  reviewName: 'Сабина',
  reviewAuthor: 'Келинка',
  reviewText: '«Наши сады выглядели ужасно, и благодаря приложению узнала, что КСК может садить цветы»',
  image: '/static/images/author3.png'
}, {
  id: '4',
  reviewName: 'Айгерим',
  reviewAuthor: 'Апашка',
  reviewText: '«Давно мы с соседями так не работали сообща, смогли выгнать наглых хулиганов со двора!»',
  image: '/static/images/author2.png'
}, {
  id: '5',
  reviewName: 'Сабина',
  reviewAuthor: 'Келинка',
  reviewText: '«Наши сады выглядели ужасно, и благодаря приложению узнала, что КСК может садить цветы»',
  image: '/static/images/author3.png'
}];
/* harmony default export */ __webpack_exports__["default"] = (reviews);

/***/ }),

/***/ "./data/steps.js":
/*!***********************!*\
  !*** ./data/steps.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var steps = [{
  id: '1',
  stepTitle: 'Создаете заявку',
  stepText: 'Детально опишите свою проблему',
  image: '/static/images/step1.jpg'
}, {
  id: '2',
  stepTitle: 'Ждете ответа',
  stepText: 'КСК свяжется с вами и отправит электрика',
  image: '/static/images/step1.jpg'
}];
/* harmony default export */ __webpack_exports__["default"] = (steps);

/***/ }),

/***/ "./node_modules/ansi-colors/index.js":
/*!*******************************************!*\
  !*** ./node_modules/ansi-colors/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const colors = { enabled: true, visible: true, styles: {}, keys: {} };

if ('FORCE_COLOR' in process.env) {
  colors.enabled = process.env.FORCE_COLOR !== '0' ? true : false;
}

const ansi = codes => {
  codes.open = `\u001b[${codes[0]}m`;
  codes.close = `\u001b[${codes[1]}m`;
  codes.regex = new RegExp(`\\u001b\\[${codes[1]}m`, 'g');
  return codes;
};

const wrap = (style, str, nl) => {
  let { open, close, regex } = style;
  str = open + (str.includes(close) ? str.replace(regex, open) : str) + close;
  // see https://github.com/chalk/chalk/pull/92, thanks to the
  // chalk contributors for this fix. However, we've confirmed that
  // this issue is also present in Windows terminals
  return nl ? str.replace(/\r?\n/g, `${close}$&${open}`) : str;
};

const style = (input, stack) => {
  if (input === '' || input == null) return '';
  if (colors.enabled === false) return input;
  if (colors.visible === false) return '';
  let str = '' + input;
  let nl = str.includes('\n');
  let n = stack.length;
  while (n-- > 0) str = wrap(colors.styles[stack[n]], str, nl);
  return str;
};

const define = (name, codes, type) => {
  colors.styles[name] = ansi(codes);
  let t = colors.keys[type] || (colors.keys[type] = []);
  t.push(name);

  Reflect.defineProperty(colors, name, {
    get() {
      let color = input => style(input, color.stack);
      Reflect.setPrototypeOf(color, colors);
      color.stack = this.stack ? this.stack.concat(name) : [name];
      return color;
    }
  });
};

define('reset', [0, 0], 'modifier');
define('bold', [1, 22], 'modifier');
define('dim', [2, 22], 'modifier');
define('italic', [3, 23], 'modifier');
define('underline', [4, 24], 'modifier');
define('inverse', [7, 27], 'modifier');
define('hidden', [8, 28], 'modifier');
define('strikethrough', [9, 29], 'modifier');

define('black', [30, 39], 'color');
define('red', [31, 39], 'color');
define('green', [32, 39], 'color');
define('yellow', [33, 39], 'color');
define('blue', [34, 39], 'color');
define('magenta', [35, 39], 'color');
define('cyan', [36, 39], 'color');
define('white', [37, 39], 'color');
define('gray', [90, 39], 'color');
define('grey', [90, 39], 'color');

define('bgBlack', [40, 49], 'bg');
define('bgRed', [41, 49], 'bg');
define('bgGreen', [42, 49], 'bg');
define('bgYellow', [43, 49], 'bg');
define('bgBlue', [44, 49], 'bg');
define('bgMagenta', [45, 49], 'bg');
define('bgCyan', [46, 49], 'bg');
define('bgWhite', [47, 49], 'bg');

define('blackBright', [90, 39], 'bright');
define('redBright', [91, 39], 'bright');
define('greenBright', [92, 39], 'bright');
define('yellowBright', [93, 39], 'bright');
define('blueBright', [94, 39], 'bright');
define('magentaBright', [95, 39], 'bright');
define('cyanBright', [96, 39], 'bright');
define('whiteBright', [97, 39], 'bright');

define('bgBlackBright', [100, 49], 'bgBright');
define('bgRedBright', [101, 49], 'bgBright');
define('bgGreenBright', [102, 49], 'bgBright');
define('bgYellowBright', [103, 49], 'bgBright');
define('bgBlueBright', [104, 49], 'bgBright');
define('bgMagentaBright', [105, 49], 'bgBright');
define('bgCyanBright', [106, 49], 'bgBright');
define('bgWhiteBright', [107, 49], 'bgBright');

/* eslint-disable no-control-regex */
// ansiRegex modified from node.js readline: https://git.io/fNWFP, which itself
// is adopted from regex used for ansi escape code splitting in ansi-regex
// Adopted from https://github.com/chalk/ansi-regex/blob/master/index.js
// License: MIT, authors: @sindresorhus, Qix-, and arjunmehta Matches all
// ansi escape code sequences in a string
colors.ansiRegex = /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/gm;
colors.hasAnsi = str => str && typeof str === 'string' && colors.ansiRegex.test(str);
colors.unstyle = str => typeof str === 'string' ? str.replace(colors.ansiRegex, '') : str;
colors.none = colors.clear = str => str; // noop, for programmatic usage
colors.stripColor = colors.unstyle;
colors.hasColor = colors.hasAnsi;
colors.symbols = __webpack_require__(/*! ./symbols */ "./node_modules/ansi-colors/symbols.js");
module.exports = colors;


/***/ }),

/***/ "./node_modules/ansi-colors/symbols.js":
/*!*********************************************!*\
  !*** ./node_modules/ansi-colors/symbols.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const isWindows = process.platform === 'win32';
const isLinux = process.platform === 'linux';

const windows = {
  bullet: '•',
  check: '√',
  cross: '×',
  ellipsis: '...',
  heart: '❤',
  info: 'i',
  line: '─',
  middot: '·',
  minus: '－',
  plus: '＋',
  question: '?',
  questionSmall: '﹖',
  pointer: '>',
  pointerSmall: '»',
  warning: '‼'
};

const other = {
  ballotCross: '✘',
  bullet: '•',
  check: '✔',
  cross: '✖',
  ellipsis: '…',
  heart: '❤',
  info: 'ℹ',
  line: '─',
  middot: '·',
  minus: '－',
  plus: '＋',
  question: '?',
  questionFull: '？',
  questionSmall: '﹖',
  pointer: isLinux ? '▸' : '❯',
  pointerSmall: isLinux ? '‣' : '›',
  warning: '⚠'
};

module.exports = isWindows ? windows : other;
Reflect.defineProperty(module.exports, 'windows', { enumerable: false, value: windows });
Reflect.defineProperty(module.exports, 'other', { enumerable: false, value: other });


/***/ }),

/***/ "./node_modules/aos/src/sass/aos.scss":
/*!********************************************!*\
  !*** ./node_modules/aos/src/sass/aos.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/svg-react-loader/lib/loader.js?name=Icon!./static/images/svg/alert.svg":
/*!*********************************************************************************************!*\
  !*** ./node_modules/svg-react-loader/lib/loader.js?name=Icon!./static/images/svg/alert.svg ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(/*! react */ "react");

function Icon (props) {
    return React.createElement("svg",props,React.createElement("path",{"fillRule":"evenodd","clipRule":"evenodd","d":"M10.9924 10.899C10.9924 11.4015 10.4511 11.8851 10.0001 11.8851C9.54912 11.8851 9.00781 11.4015 9.00781 10.899V4.9887C9.00781 4.48712 9.45496 4.00297 10.0001 4.00513C10.5453 4.0073 10.9924 4.48712 10.9924 4.9887V10.899ZM9.99951 15.8063C9.4514 15.8063 9.00781 15.3644 9.00781 14.8226C9.00781 14.2796 9.4514 13.8389 9.99951 13.8389C10.5476 13.8389 10.9924 14.2796 10.9924 14.8226C10.9924 15.3644 10.5476 15.8063 9.99951 15.8063ZM0 9.90499C0 15.328 4.485 19.7399 9.999 19.7399C15.514 19.7399 20 15.328 20 9.90499C20 4.48201 15.514 0.0700684 9.999 0.0700684C4.486 0.0700684 0 4.48201 0 9.90499Z","fill":"#1365AA"}));
}

Icon.defaultProps = {"width":"20","height":"20","viewBox":"0 0 20 20","fill":"none"};

module.exports = Icon;

Icon.default = Icon;


/***/ }),

/***/ "./node_modules/svg-react-loader/lib/loader.js?name=Icon!./static/images/svg/apple.svg":
/*!*********************************************************************************************!*\
  !*** ./node_modules/svg-react-loader/lib/loader.js?name=Icon!./static/images/svg/apple.svg ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(/*! react */ "react");

function Icon (props) {
    return React.createElement("svg",props,[React.createElement("path",{"d":"M0.928913 7.87075C-0.93319 11.0983 0.250583 15.9962 2.30976 18.966C3.33762 20.4507 4.37826 21.7835 5.8036 21.7835C5.83046 21.7835 5.8574 21.783 5.88499 21.7819C6.55465 21.7552 7.03857 21.5493 7.50646 21.3503C8.03177 21.1267 8.57505 20.8955 9.42721 20.8955C10.2379 20.8955 10.7553 21.1192 11.2556 21.3354C11.7487 21.5485 12.2566 21.7689 13.0071 21.7548C14.6126 21.725 15.5983 20.2868 16.468 19.0181C17.3756 17.6934 17.8308 16.4073 17.9844 15.9158L17.9906 15.8962C18.0199 15.8089 17.9786 15.7135 17.8947 15.6751C17.8924 15.674 17.8839 15.6704 17.8815 15.6694C17.5988 15.5539 15.1187 14.455 15.0927 11.4599C15.0685 9.02643 16.9532 7.73781 17.3312 7.50425L17.3488 7.49329C17.3897 7.46696 17.4183 7.42519 17.4279 7.37744C17.4376 7.32976 17.4275 7.28014 17.4001 7.24003C16.0991 5.33851 14.1052 5.05193 13.3025 5.01746C13.186 5.00584 13.0658 5 12.945 5C12.0022 5 11.0989 5.35568 10.3733 5.64146C9.87242 5.83874 9.43977 6.00911 9.14137 6.00911C8.80607 6.00911 8.37097 5.83665 7.86711 5.63699C7.19333 5.36989 6.42964 5.06723 5.62118 5.06723C5.6019 5.06723 5.58291 5.06744 5.5642 5.0678C3.68441 5.09543 1.90817 6.16961 0.928913 7.87075Z","fill":"currentColor","key":0}),React.createElement("path",{"d":"M13.304 0.000138595C12.1656 0.0464468 10.8001 0.746335 9.98389 1.70121C9.29025 2.50381 8.61264 3.84199 8.79116 5.19084C8.80235 5.27523 8.8711 5.34037 8.9561 5.34693C9.03294 5.35292 9.11137 5.35595 9.18951 5.35602C10.3026 5.35602 11.5033 4.74096 12.3233 3.7506C13.1864 2.70484 13.6228 1.36277 13.4908 0.16063C13.4804 0.0664271 13.3974 -0.00354009 13.304 0.000138595Z","fill":"currentColor","key":1})]);
}

Icon.defaultProps = {"width":"18","height":"22","viewBox":"0 0 18 22","fill":"none"};

module.exports = Icon;

Icon.default = Icon;


/***/ }),

/***/ "./node_modules/svg-react-loader/lib/loader.js?name=Icon!./static/images/svg/arrow.svg":
/*!*********************************************************************************************!*\
  !*** ./node_modules/svg-react-loader/lib/loader.js?name=Icon!./static/images/svg/arrow.svg ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(/*! react */ "react");

function Icon (props) {
    return React.createElement("svg",props,[React.createElement("defs",{"key":0}),React.createElement("g",{"id":"Page-1","stroke":"none","strokeWidth":"1","fill":"none","fillRule":"evenodd","key":1},React.createElement("g",{"id":"arrow","transform":"translate(0.000000, 1.000000)","stroke":"currentColor","strokeWidth":"3"},React.createElement("path",{"d":"M0,7.5 L21.5,7.5 M22.5,8.5 L14,0 M22.5,6.5 L14,15","id":"Shape"})))]);
}

Icon.defaultProps = {"width":"24px","height":"17px","viewBox":"0 0 24 17","version":"1.1"};

module.exports = Icon;

Icon.default = Icon;


/***/ }),

/***/ "./node_modules/svg-react-loader/lib/loader.js?name=Icon!./static/images/svg/city.svg":
/*!********************************************************************************************!*\
  !*** ./node_modules/svg-react-loader/lib/loader.js?name=Icon!./static/images/svg/city.svg ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(/*! react */ "react");

function Icon (props) {
    return React.createElement("svg",props,[React.createElement("path",{"d":"M1494.7 231.976L1.00013 786.847","stroke":"#72DDAF","strokeWidth":"5","key":0}),React.createElement("path",{"d":"M1519 254.153L25.3014 809.024","stroke":"#72DDAF","strokeWidth":"5","key":1}),React.createElement("path",{"d":"M452.86 634.061C452.86 641.138 458.585 646.866 465.636 646.866C472.688 646.866 478.412 641.138 478.412 634.061C478.412 626.984 472.688 621.255 465.636 621.255C458.585 621.255 452.86 626.984 452.86 634.061Z","fill":"#51BB8F","stroke":"#72DDAF","strokeWidth":"5","key":2}),React.createElement("path",{"d":"M427.862 634.061C427.862 641.138 433.587 646.866 440.638 646.866C447.69 646.866 453.415 641.138 453.415 634.061C453.415 626.984 447.69 621.255 440.638 621.255C433.587 621.255 427.862 626.984 427.862 634.061Z","fill":"#51BB8F","stroke":"#72DDAF","strokeWidth":"5","key":3}),React.createElement("rect",{"x":"-2.5","y":"2.5","width":"92.2114","height":"111.879","rx":"3.5","transform":"matrix(-1 0 0 1 495.577 647.149)","fill":"#51BB8F","stroke":"#72DDAF","strokeWidth":"5","key":4}),React.createElement("rect",{"width":"11.1099","height":"47.308","rx":"2","transform":"matrix(-1 0 0 1 470.025 663.585)","fill":"#72DDAF","key":5}),React.createElement("rect",{"width":"11.1099","height":"47.308","rx":"2","transform":"matrix(-1 0 0 1 445.027 663.585)","fill":"#72DDAF","key":6}),React.createElement("rect",{"x":"1258.97","y":"680.754","width":"103.532","height":"165.926","rx":"2.5","fill":"#4EBA94","stroke":"#72DDAF","strokeWidth":"5","key":7}),React.createElement("rect",{"x":"1033.76","y":"767.574","width":"103.532","height":"165.926","rx":"2.5","stroke":"#72DDAF","strokeWidth":"5","key":8}),React.createElement("rect",{"x":"966.93","y":"680.754","width":"103.532","height":"165.926","rx":"2.5","fill":"#4FBA92","stroke":"#72DDAF","strokeWidth":"5","key":9}),React.createElement("rect",{"x":"1101.6","y":"555.951","width":"163.225","height":"290.73","rx":"2.5","fill":"#4EBA94","stroke":"#72DDAF","strokeWidth":"5","key":10}),React.createElement("rect",{"x":"1204.92","y":"591.434","width":"24.4198","height":"24.418","rx":"2","fill":"#72DDAF","key":11}),React.createElement("rect",{"x":"1139.8","y":"642.984","width":"24.4198","height":"24.418","rx":"2","fill":"#72DDAF","key":12}),React.createElement("rect",{"x":"1204.92","y":"710.812","width":"24.4198","height":"24.418","rx":"2","fill":"#72DDAF","key":13}),React.createElement("path",{"d":"M797.918 800.344L968.846 801.701","stroke":"#72DDAF","strokeWidth":"5","key":14}),React.createElement("path",{"d":"M572.5 724C572.5 722.619 573.619 721.5 575 721.5H635.5V844C635.5 845.381 634.381 846.5 633 846.5H575C573.619 846.5 572.5 845.381 572.5 844V724Z","stroke":"#72DDAF","strokeWidth":"5","key":15}),React.createElement("path",{"d":"M615.913 657.549C615.913 656.168 617.032 655.049 618.413 655.049H703.379C704.76 655.049 705.879 656.168 705.879 657.549V715.377C705.879 716.758 704.76 717.877 703.379 717.877H615.913V657.549Z","stroke":"#72DDAF","strokeWidth":"5","key":16}),React.createElement("path",{"d":"M706.452 680.754H793.918C795.299 680.754 796.418 681.873 796.418 683.254V844.18C796.418 845.561 795.299 846.68 793.918 846.68H708.952C707.571 846.68 706.452 845.561 706.452 844.18V680.754Z","stroke":"#72DDAF","strokeWidth":"5","key":17}),React.createElement("rect",{"x":"624","y":"711","width":"60","height":"94","fill":"#51BB90","key":18}),React.createElement("rect",{"x":"623","y":"702","width":"157","height":"103","fill":"#51BB90","key":19}),React.createElement("rect",{"x":"618","y":"658","width":"59","height":"147","fill":"#51BB90","key":20}),React.createElement("rect",{"x":"670","y":"754","width":"118","height":"95","fill":"#51BB90","key":21}),React.createElement("rect",{"x":"614","y":"787","width":"37","height":"70","fill":"#51BB90","key":22}),React.createElement("rect",{"x":"684","y":"683","width":"49","height":"71","fill":"#51BB90","key":23}),React.createElement("rect",{"x":"678.533","y":"735.229","width":"27.1331","height":"24.418","rx":"2","fill":"#72DDAF","key":24}),React.createElement("rect",{"x":"633","y":"681","width":"27.1331","height":"24.418","rx":"2","fill":"#72DDAF","key":25})]);
}

Icon.defaultProps = {"viewBox":"0 0 1520 847","fill":"none"};

module.exports = Icon;

Icon.default = Icon;


/***/ }),

/***/ "./node_modules/svg-react-loader/lib/loader.js?name=Icon!./static/images/svg/garbage.svg":
/*!***********************************************************************************************!*\
  !*** ./node_modules/svg-react-loader/lib/loader.js?name=Icon!./static/images/svg/garbage.svg ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(/*! react */ "react");

function Icon (props) {
    return React.createElement("svg",props,[React.createElement("rect",{"className":"stroked-svg","x":"6","y":"10","width":"32","height":"42","rx":"1","fill":"white","stroke":"","strokeWidth":"2","key":0}),React.createElement("circle",{"cx":"22.5","cy":"6.5","r":"5.5","stroke":"","strokeWidth":"2","key":1}),React.createElement("rect",{"className":"color-stroke color-svg","x":"1","y":"8","width":"42","height":"10","rx":"5","fill":"","stroke":"","strokeWidth":"2","key":2}),React.createElement("rect",{"x":"14","y":"31","width":"2","height":"13","rx":"1","fill":"","key":3}),React.createElement("rect",{"x":"21","y":"31","width":"2","height":"13","rx":"1","fill":"","key":4}),React.createElement("rect",{"x":"28","y":"31","width":"2","height":"13","rx":"1","fill":"","key":5})]);
}

Icon.defaultProps = {"width":"44","height":"53","viewBox":"0 0 44 53","fill":"none"};

module.exports = Icon;

Icon.default = Icon;


/***/ }),

/***/ "./node_modules/svg-react-loader/lib/loader.js?name=Icon!./static/images/svg/google.svg":
/*!**********************************************************************************************!*\
  !*** ./node_modules/svg-react-loader/lib/loader.js?name=Icon!./static/images/svg/google.svg ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(/*! react */ "react");

function Icon (props) {
    return React.createElement("svg",props,[React.createElement("path",{"d":"M8.71815 8.5015L0.601797 16.722C0.22172 16.4488 -0.00393826 15.9944 5.20501e-05 15.5102V1.49279C-0.00393826 1.0086 0.22172 0.554155 0.601797 0.280945L8.71815 8.5015Z","fill":"currentColor","key":0}),React.createElement("path",{"d":"M11.5584 5.6301L8.7184 8.5015L0.602051 0.280952C0.632632 0.256023 0.664485 0.23283 0.69744 0.211483C1.1264 -0.0619806 1.6622 -0.070809 2.0991 0.188327L11.5584 5.6301Z","fill":"currentColor","key":1}),React.createElement("path",{"d":"M15 8.5015C15.0053 9.0481 14.7229 9.55299 14.2662 9.81371L11.5583 11.3729L8.71826 8.5015L11.5583 5.6301L14.2662 7.18929C14.7229 7.45002 15.0053 7.9549 15 8.5015Z","fill":"currentColor","key":2}),React.createElement("path",{"d":"M11.5584 11.3729L2.0991 16.8147C1.66124 17.0698 1.12746 17.061 0.69744 16.7915C0.664485 16.7702 0.632632 16.747 0.602051 16.722L8.71844 8.5015L11.5584 11.3729Z","fill":"currentColor","key":3})]);
}

Icon.defaultProps = {"width":"15","height":"17","viewBox":"0 0 15 17","fill":"none"};

module.exports = Icon;

Icon.default = Icon;


/***/ }),

/***/ "./node_modules/svg-react-loader/lib/loader.js?name=Icon!./static/images/svg/neighbours.svg":
/*!**************************************************************************************************!*\
  !*** ./node_modules/svg-react-loader/lib/loader.js?name=Icon!./static/images/svg/neighbours.svg ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(/*! react */ "react");

function Icon (props) {
    return React.createElement("svg",props,[React.createElement("path",{"d":"M39.4463 16.0588L39.9799 15.5181L39.4662 14.9976L38.9334 15.4979L39.4463 16.0588ZM46.2344 25.4632L45.4823 25.4017L45.4821 25.4044L46.2344 25.4632ZM45.2595 27.7527L45.7316 28.3493L45.7317 28.3491L45.2595 27.7527ZM26.4178 28.2941L25.905 27.7332L24.4934 29.0588H26.4178V28.2941ZM29.3035 2.65353L28.808 2.07682L28.5147 2.3356L28.5525 2.72782L29.3035 2.65353ZM29.9992 2.106L29.5735 1.47457L29.5691 1.47769L29.9992 2.106ZM30.7507 1.64259L30.3965 0.967414L30.3963 0.967521L30.7507 1.64259ZM31.5566 1.26941L31.8262 1.98365L31.8296 1.98234L31.5566 1.26941ZM32.4063 0.992588L32.225 0.25025L32.2197 0.251634L32.4063 0.992588ZM35.7672 0.925294L35.9237 0.177221L35.9194 0.176326L35.7672 0.925294ZM37.2039 1.39024L36.9033 2.09167L36.9044 2.09215L37.2039 1.39024ZM38.5032 2.12282L38.0725 2.75072L38.0736 2.75147L38.5032 2.12282ZM40.5708 4.27012L41.2014 3.85022L41.2007 3.84915L40.5708 4.27012ZM41.277 5.62212L41.9748 5.33107L41.974 5.32916L41.277 5.62212ZM41.277 12.5748L42.0035 12.7813L42.0041 12.7794L41.277 12.5748ZM38.5032 18.642L37.8914 18.1944L37.8912 18.1947L38.5032 18.642ZM37.2039 20.1546L37.7161 20.7161L37.717 20.7153L37.2039 20.1546ZM33.8475 21.5173L33.9388 20.7582L33.9298 20.7572L33.8475 21.5173ZM33.4763 21.4515L33.3039 22.196L33.306 22.1965L33.4763 21.4515ZM33.1111 21.3445L32.8617 22.0663L32.8697 22.069L33.1111 21.3445ZM32.7519 21.1961L33.0719 20.5036L33.0648 20.5002L32.7519 21.1961ZM32.3972 21.0126L32.7716 20.3486L32.768 20.3465L32.3972 21.0126ZM32.0501 20.7954L31.624 21.4265L31.6297 21.4304L32.0501 20.7954ZM30.953 19.7784L30.202 19.8527L30.2294 20.1376L30.4347 20.3342L30.953 19.7784ZM7.55367 16.0588L8.06656 15.4979L7.53375 14.9976L7.02011 15.5181L7.55367 16.0588ZM0.765504 25.4632L0.0133454 25.5243L0.0133605 25.5244L0.765504 25.4632ZM1.74192 27.7527L2.21505 27.157L2.21368 27.1559L1.74192 27.7527ZM20.5821 28.2941V29.0588H22.5065L21.095 27.7332L20.5821 28.2941ZM38.9127 16.5995C39.3081 17.0003 39.9743 17.582 40.6791 18.2264C41.4031 18.8882 42.2114 19.6542 42.9601 20.4791C43.7113 21.3069 44.3831 22.1733 44.8471 23.0316C45.3135 23.8943 45.5388 24.6911 45.4823 25.4017L46.9865 25.5247C47.0756 24.4045 46.7139 23.3017 46.1706 22.2968C45.625 21.2874 44.8644 20.3183 44.0709 19.4439C43.2748 18.5666 42.4258 17.7635 41.69 17.0908C40.9351 16.4006 40.339 15.8821 39.9799 15.5181L38.9127 16.5995ZM45.4821 25.4044C45.4437 25.9081 45.3518 26.6971 44.7872 27.1563L45.7317 28.3491C46.8634 27.4288 46.9526 25.9696 46.9867 25.522L45.4821 25.4044ZM44.7874 27.1562C44.508 27.3833 44.1182 27.5294 43.5874 27.5294V29.0588C44.4026 29.0588 45.1417 28.8287 45.7316 28.3493L44.7874 27.1562ZM43.5874 27.5294H26.4178V29.0588H43.5874V27.5294ZM38.9334 15.4979L25.905 27.7332L26.9307 28.855L39.9592 16.6197L38.9334 15.4979ZM29.799 3.23027C29.9987 3.05405 30.209 2.88916 30.4293 2.73431L29.5691 1.47769C29.3063 1.66237 29.052 1.86148 28.808 2.07682L29.799 3.23027ZM30.4249 2.7374C30.6479 2.58297 30.8747 2.442 31.1053 2.31766L30.3963 0.967521C30.1106 1.12153 29.8364 1.29256 29.5735 1.4746L30.4249 2.7374ZM31.105 2.31776C31.3408 2.19069 31.5812 2.07863 31.8262 1.98365L31.287 0.555176C30.9797 0.67431 30.6828 0.813074 30.3965 0.967414L31.105 2.31776ZM31.8296 1.98234C32.0792 1.88419 32.3341 1.80047 32.5929 1.73354L32.2197 0.251634C31.8989 0.334589 31.5864 0.437457 31.2837 0.556484L31.8296 1.98234ZM32.5875 1.73491C32.8553 1.66777 33.1215 1.61569 33.3913 1.58168L33.2051 0.0639677C32.8682 0.106424 32.5428 0.170583 32.225 0.250265L32.5875 1.73491ZM33.3913 1.58168C33.6642 1.54728 33.941 1.52941 34.2233 1.52941V0C33.8778 0 33.5388 0.0218936 33.2051 0.0639677L33.3913 1.58168ZM34.2233 1.52941C34.6984 1.52941 35.165 1.58032 35.6149 1.67426L35.9194 0.176326C35.3733 0.0622699 34.8046 0 34.2233 0V1.52941ZM35.6106 1.67335C36.0591 1.76977 36.4908 1.91014 36.9033 2.09167L37.5044 0.688801C36.9994 0.466562 36.4712 0.294932 35.9237 0.177236L35.6106 1.67335ZM36.9044 2.09215C37.3155 2.27229 37.7077 2.49371 38.0725 2.75072L38.9339 1.49493C38.4868 1.17993 38.0067 0.908883 37.5033 0.688319L36.9044 2.09215ZM38.0736 2.75147C38.4414 3.00961 38.7845 3.30361 39.0962 3.62769L40.177 2.56031C39.7975 2.16558 39.38 1.80804 38.9329 1.49417L38.0736 2.75147ZM39.0962 3.62769C39.4086 3.95261 39.6925 4.3095 39.9408 4.69109L41.2007 3.84915C40.8997 3.3865 40.5557 2.95418 40.177 2.56031L39.0962 3.62769ZM39.9401 4.69002C40.1887 5.07344 40.4035 5.48363 40.58 5.91508L41.974 5.32916C41.7612 4.80931 41.5021 4.31409 41.2014 3.85022L39.9401 4.69002ZM40.5792 5.91317C40.7544 6.34446 40.8907 6.79525 40.982 7.2631L42.4625 6.96655C42.3515 6.39745 42.186 5.85107 41.9748 5.33107L40.5792 5.91317ZM40.982 7.2631C41.0741 7.73576 41.1246 8.22135 41.1246 8.71765H42.6338C42.6338 8.11582 42.5725 7.53082 42.4625 6.96655L40.982 7.2631ZM41.1246 8.71765C41.1246 9.21669 41.0736 9.78739 40.9768 10.4112L42.4676 10.6488C42.573 9.96955 42.6338 9.31672 42.6338 8.71765H41.1246ZM40.9768 10.4112C40.8808 11.0298 40.7365 11.6892 40.5499 12.3703L42.0041 12.7794C42.2038 12.0503 42.3614 11.3332 42.4676 10.6488L40.9768 10.4112ZM40.5505 12.3684C40.3626 13.0473 40.1337 13.7417 39.8685 14.4256L41.273 14.985C41.5571 14.2527 41.8021 13.5094 42.0035 12.7813L40.5505 12.3684ZM39.8685 14.4256C39.6034 15.1089 39.301 15.782 38.9693 16.4192L40.3039 17.133C40.6633 16.4427 40.9887 15.7179 41.273 14.985L39.8685 14.4256ZM38.9693 16.4192C38.6379 17.0555 38.2758 17.6548 37.8914 18.1944L39.115 19.0896C39.5455 18.4852 39.9441 17.8242 40.3039 17.133L38.9693 16.4192ZM37.8912 18.1947C37.509 18.7317 37.1052 19.2044 36.6908 19.5939L37.717 20.7153C38.217 20.2453 38.6855 19.6932 39.1153 19.0893L37.8912 18.1947ZM36.6917 19.5931C36.2751 19.9833 35.8578 20.2808 35.4446 20.4787L36.0897 21.8615C36.6726 21.5822 37.2151 21.1854 37.7161 20.7161L36.6917 19.5931ZM35.4446 20.4787C35.0332 20.6759 34.6252 20.7755 34.2233 20.7755V22.3049C34.8778 22.3049 35.5051 22.1415 36.0897 21.8615L35.4446 20.4787ZM34.2233 20.7755C34.1266 20.7755 34.0318 20.7697 33.9388 20.7582L33.7561 22.2763C33.9108 22.2955 34.0665 22.3049 34.2233 22.3049V20.7755ZM33.9298 20.7572C33.8419 20.7474 33.7481 20.7304 33.6466 20.7066L33.306 22.1965C33.452 22.2308 33.6057 22.2597 33.7652 22.2774L33.9298 20.7572ZM33.6486 20.707C33.5545 20.6847 33.4557 20.6552 33.3524 20.6199L32.8697 22.069C33.0078 22.1163 33.1535 22.1603 33.3039 22.196L33.6486 20.707ZM33.3603 20.6227C33.2628 20.5881 33.1673 20.5489 33.0719 20.5036L32.4318 21.8886C32.5749 21.9565 32.7178 22.0152 32.8617 22.0663L33.3603 20.6227ZM33.0648 20.5002C32.9645 20.454 32.866 20.4033 32.7716 20.3487L32.0228 21.6765C32.1608 21.7565 32.3007 21.8281 32.439 21.892L33.0648 20.5002ZM32.768 20.3465C32.668 20.2894 32.57 20.228 32.4706 20.1604L31.6297 21.4304C31.7597 21.5188 31.891 21.6012 32.0265 21.6786L32.768 20.3465ZM32.4762 20.1643C32.4921 20.1753 32.4743 20.1632 32.3981 20.0952C32.3347 20.0386 32.252 19.9626 32.1546 19.8715C31.9599 19.6896 31.7173 19.4582 31.4711 19.2225L30.4347 20.3342C30.6806 20.5696 30.9293 20.807 31.1315 20.9959C31.3076 21.1605 31.5095 21.3471 31.624 21.4265L32.4762 20.1643ZM28.5525 2.72782L30.202 19.8527L31.704 19.704L30.0545 2.57924L28.5525 2.72782ZM7.02011 15.5181C6.66086 15.8822 6.0649 16.4006 5.31008 17.0909C4.57439 17.7636 3.72556 18.5667 2.92956 19.4439C2.13608 20.3183 1.37565 21.2874 0.829952 22.2967C0.286614 23.3016 -0.0752868 24.4044 0.0133454 25.5243L1.51766 25.4021C1.46142 24.6913 1.68695 23.8944 2.15343 23.0316C2.61753 22.1733 3.28928 21.3069 4.04041 20.4791C4.78902 19.6541 5.59723 18.8882 6.32108 18.2263C7.02577 17.582 7.69183 17.0002 8.08723 16.5995L7.02011 15.5181ZM0.0133605 25.5244C0.0485613 25.9683 0.136409 27.4292 1.27016 28.3496L2.21368 27.1559C1.64814 26.6967 1.5579 25.9094 1.51765 25.4019L0.0133605 25.5244ZM1.2688 28.3484C1.85793 28.829 2.5993 29.0588 3.41254 29.0588V27.5294C2.88265 27.5294 2.49216 27.383 2.21505 27.157L1.2688 28.3484ZM3.41254 29.0588H20.5821V27.5294H3.41254V29.0588ZM7.04079 16.6197L20.0692 28.855L21.095 27.7332L8.06656 15.4979L7.04079 16.6197Z","fill":"","key":0}),React.createElement("path",{"fillRule":"evenodd","clipRule":"evenodd","d":"M28.9577 23.0222C27.3942 25.3469 25.4776 27.0033 23.3995 27.0033C21.3637 27.0033 19.4833 25.4157 17.9379 23.1675C13.1434 25.9327 9.35691 31.5655 9.48972 34.866C9.57725 37.0836 10.8102 39 12.7676 39H34.0314C35.9903 39 37.2414 37.0836 37.3108 34.866C37.4421 30.6662 33.7085 25.5121 28.9577 23.0222Z","fill":"#fff","key":1}),React.createElement("path",{"className":"color-stroke","fillRule":"evenodd","clipRule":"evenodd","d":"M28.9577 23.0222C27.3942 25.3469 25.4776 27.0033 23.3995 27.0033C21.3637 27.0033 19.4833 25.4157 17.9379 23.1675C13.1434 25.9327 9.35691 31.5655 9.48972 34.866C9.57725 37.0836 10.8102 39 12.7676 39H34.0314C35.9903 39 37.2414 37.0836 37.3108 34.866C37.4421 30.6662 33.7085 25.5121 28.9577 23.0222Z","stroke":"","key":2}),React.createElement("path",{"d":"M17.6963 2.65347C17.4744 2.45771 17.242 2.27571 17.0021 2.10594C16.7591 1.93771 16.5086 1.78171 16.249 1.64253C15.9894 1.50182 15.7193 1.37641 15.4446 1.26935C15.1685 1.16077 14.8832 1.06747 14.5935 0.992531C14.3037 0.919119 14.0049 0.861002 13.7031 0.822766C13.3997 0.784531 13.0904 0.764648 12.7765 0.764648C12.2483 0.764648 11.7321 0.821237 11.2341 0.925237C10.7361 1.0323 10.2547 1.1883 9.7974 1.39018C9.34013 1.59053 8.90399 1.83677 8.49652 2.12277C8.09056 2.40877 7.71026 2.73453 7.36466 3.09394C7.01756 3.45335 6.70516 3.84794 6.4305 4.27006C6.15433 4.69371 5.91739 5.14641 5.72422 5.62206C5.53105 6.09771 5.38013 6.5963 5.27902 7.11477C5.1764 7.63324 5.12207 8.16853 5.12207 8.71759C5.12207 9.26665 5.1764 9.87841 5.27902 10.5299C5.38013 11.1815 5.53105 11.8697 5.72422 12.5748C5.91739 13.2783 6.15433 13.9971 6.4305 14.7052C6.70516 15.4134 7.01756 16.1123 7.36466 16.7761C7.71026 17.4398 8.09056 18.0699 8.49652 18.6419C8.90399 19.2124 9.34013 19.7248 9.7974 20.1545C10.2547 20.5843 10.7361 20.9315 11.2341 21.1701C11.7321 21.4086 12.2483 21.5402 12.7765 21.5402C12.9032 21.5402 13.0285 21.5325 13.1522 21.5172C13.2775 21.5035 13.4012 21.4805 13.5235 21.4515C13.6472 21.4224 13.768 21.3857 13.8887 21.3444C14.0109 21.3016 14.1302 21.2526 14.2494 21.1961C14.3686 21.141 14.4863 21.0798 14.604 21.0125C14.7202 20.9452 14.8364 20.8734 14.9511 20.7954C15.0658 20.7158 15.5578 20.2494 16.0468 19.7783","fill":"white","key":3}),React.createElement("path",{"className":"color-stroke","d":"M17.6963 2.65347C17.4744 2.45771 17.242 2.27571 17.0021 2.10594C16.7591 1.93771 16.5086 1.78171 16.249 1.64253C15.9894 1.50182 15.7193 1.37641 15.4446 1.26935C15.1685 1.16077 14.8832 1.06747 14.5935 0.992531C14.3037 0.919119 14.0049 0.861002 13.7031 0.822766C13.3997 0.784531 13.0904 0.764648 12.7765 0.764648C12.2483 0.764648 11.7321 0.821237 11.2341 0.925237C10.7361 1.0323 10.2547 1.1883 9.7974 1.39018C9.34013 1.59053 8.90399 1.83677 8.49652 2.12277C8.09056 2.40877 7.71026 2.73453 7.36466 3.09394C7.01756 3.45335 6.70516 3.84794 6.4305 4.27006C6.15433 4.69371 5.91739 5.14641 5.72422 5.62206C5.53105 6.09771 5.38013 6.5963 5.27902 7.11477C5.1764 7.63324 5.12207 8.16853 5.12207 8.71759C5.12207 9.26665 5.1764 9.87841 5.27902 10.5299C5.38013 11.1815 5.53105 11.8697 5.72422 12.5748C5.91739 13.2783 6.15433 13.9971 6.4305 14.7052C6.70516 15.4134 7.01756 16.1123 7.36466 16.7761C7.71026 17.4398 8.09056 18.0699 8.49652 18.6419C8.90399 19.2124 9.34013 19.7248 9.7974 20.1545C10.2547 20.5843 10.7361 20.9315 11.2341 21.1701C11.7321 21.4086 12.2483 21.5402 12.7765 21.5402C12.9032 21.5402 13.0285 21.5325 13.1522 21.5172C13.2775 21.5035 13.4012 21.4805 13.5235 21.4515C13.6472 21.4224 13.768 21.3857 13.8887 21.3444C14.0109 21.3016 14.1302 21.2526 14.2494 21.1961C14.3686 21.141 14.4863 21.0798 14.604 21.0125C14.7202 20.9452 14.8364 20.8734 14.9511 20.7954C15.0658 20.7158 15.5578 20.2494 16.0468 19.7783","stroke":"","key":4}),React.createElement("path",{"className":"color-stroke","d":"M4.53516 28.2941H12.0809","stroke":"","strokeLinecap":"round","key":5}),React.createElement("path",{"className":"color-stroke color-svg","fillRule":"evenodd","clipRule":"evenodd","d":"M32.9624 10.8494C32.9624 16.2896 28.7172 26.7308 23.4805 26.7308C18.2452 26.7308 14 16.2896 14 10.8494C14 5.40933 18.2452 1 23.4805 1C28.7172 1 32.9624 5.40933 32.9624 10.8494Z","fill":"","stroke":"","key":6})]);
}

Icon.defaultProps = {"width":"47","height":"40","viewBox":"0 0 47 40","fill":"none"};

module.exports = Icon;

Icon.default = Icon;


/***/ }),

/***/ "./node_modules/svg-react-loader/lib/loader.js?name=Icon!./static/images/svg/ok.svg":
/*!******************************************************************************************!*\
  !*** ./node_modules/svg-react-loader/lib/loader.js?name=Icon!./static/images/svg/ok.svg ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(/*! react */ "react");

function Icon (props) {
    return React.createElement("svg",props,[React.createElement("path",{"d":"M26 15.5688C26 22.7058 20.3779 28.4443 13.5 28.4443C6.62212 28.4443 1 22.7058 1 15.5688C1 8.43187 6.62212 2.69336 13.5 2.69336C20.3779 2.69336 26 8.43187 26 15.5688Z","stroke":"#56BB85","strokeWidth":"2","key":0}),React.createElement("path",{"d":"M12.6628 21.112L13.7119 22.1442L14.7757 21.1267L30 6.56461L27.9022 4.44141L12.6779 19.0035L14.7909 19.0181L9.12809 13.4465L7 15.5403L12.6628 21.112Z","fill":"white","stroke":"white","strokeWidth":"5","key":1}),React.createElement("path",{"d":"M13.1704 20.2433L14.1283 21.1608L15.0996 20.2563L29 7.31233L27.0846 5.42505L13.1842 18.369L15.1134 18.3821L9.94304 13.4295L8 15.2907L13.1704 20.2433Z","fill":"#56BB85","key":2})]);
}

Icon.defaultProps = {"width":"34","height":"30","viewBox":"0 0 34 30","fill":"none"};

module.exports = Icon;

Icon.default = Icon;


/***/ }),

/***/ "./node_modules/svg-react-loader/lib/loader.js?name=Icon!./static/images/svg/orange.svg":
/*!**********************************************************************************************!*\
  !*** ./node_modules/svg-react-loader/lib/loader.js?name=Icon!./static/images/svg/orange.svg ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(/*! react */ "react");

function Icon (props) {
    return React.createElement("svg",props,[React.createElement("path",{"opacity":"0.3","fillRule":"evenodd","clipRule":"evenodd","d":"M7 14.3449C10.866 14.3449 14 11.2435 14 7.41774C14 3.59199 10.866 0.490601 7 0.490601C3.13401 0.490601 0 3.59199 0 7.41774C0 11.2435 3.13401 14.3449 7 14.3449Z","fill":"#FFA149","key":0}),React.createElement("path",{"fillRule":"evenodd","clipRule":"evenodd","d":"M7 11.3768C9.20914 11.3768 11 9.60457 11 7.41843C11 5.2323 9.20914 3.46008 7 3.46008C4.79086 3.46008 3 5.2323 3 7.41843C3 9.60457 4.79086 11.3768 7 11.3768Z","fill":"#FFA149","key":1})]);
}

Icon.defaultProps = {"width":"14","height":"15","viewBox":"0 0 14 15","fill":"none"};

module.exports = Icon;

Icon.default = Icon;


/***/ }),

/***/ "./node_modules/svg-react-loader/lib/loader.js?name=Icon!./static/images/svg/plants.svg":
/*!**********************************************************************************************!*\
  !*** ./node_modules/svg-react-loader/lib/loader.js?name=Icon!./static/images/svg/plants.svg ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(/*! react */ "react");

function Icon (props) {
    return React.createElement("svg",props,[React.createElement("path",{"className":"color-svg","d":"M9 0L12.5 1L17.5 3L21.5 6.5L23.5 13L22.5 18L15 17L9.5 14.5L7 8L6.5 1.5L9 0Z","fill":"#","key":0}),React.createElement("path",{"className":"color-svg","d":"M41 3.5L40.5 8L38 12L36.5 14.5L34.5 16L28 18L23 17L24 9.5L26.5 4L33 1.5L39.5 1L41 3.5Z","fill":"#","key":1}),React.createElement("path",{"d":"M46.6811 39.9339C44.7825 35.2261 40.391 31.9564 35.3956 31.482C34.2914 29.4513 32.6905 27.7328 30.7387 26.4896C28.8388 25.2793 26.6769 24.5706 24.4365 24.4158V19.229H28.1532C35.6092 19.229 41.6748 13.1259 41.6748 5.62406V0.942193C41.6748 0.421821 41.2556 0 40.7384 0H36.0853C30.3739 0 25.4783 3.58137 23.5 8.62936C21.5216 3.58137 16.6261 0 10.9147 0H6.26161C5.74442 0 5.32519 0.421821 5.32519 0.942193V5.62406C5.32519 13.126 11.3909 19.229 18.8468 19.229H22.5636V24.4158C20.3232 24.5706 18.1614 25.2794 16.2614 26.4896C14.3096 27.7328 12.7085 29.4512 11.6045 31.482C6.60897 31.9564 2.2175 35.2261 0.318953 39.9339C-0.226229 41.2857 -0.0656758 42.8188 0.748195 44.0349C1.5717 45.2654 2.94242 46 4.41438 46H42.5855C44.0576 46 45.4282 45.2654 46.2517 44.0349C47.0657 42.8187 47.2262 41.2857 46.6811 39.9339ZM24.4364 13.6051C24.4364 7.14223 29.662 1.88429 36.0853 1.88429H39.802V5.62397C39.802 12.0868 34.5764 17.3446 28.1531 17.3446H25.7607L35.9667 7.07573C36.3323 6.70785 36.3323 6.11128 35.9667 5.74321C35.6011 5.37533 35.0082 5.37542 34.6424 5.74321L24.4364 16.0123V13.6051ZM11.0332 7.07573L21.2392 17.3447H18.8468C12.4237 17.3447 7.19803 12.0869 7.19803 5.62397V1.88429H10.9147C17.338 1.88429 22.5636 7.14214 22.5636 13.605V16.0122L12.3576 5.7433C11.9919 5.37542 11.3991 5.37551 11.0332 5.7433C10.6676 6.11118 10.6676 6.70776 11.0332 7.07573ZM44.6983 42.9823C44.2162 43.7026 43.4461 44.1157 42.5855 44.1157H4.41447C3.55387 44.1157 2.7837 43.7026 2.30158 42.9823C1.82938 42.2767 1.73923 41.4237 2.05428 40.6423C3.74913 36.4396 7.74872 33.5668 12.2437 33.3235C12.5808 33.3052 12.8821 33.1059 13.0322 32.8016C15.0209 28.7712 19.0319 26.2674 23.5 26.2674C27.446 26.2674 31.0345 28.2212 33.1893 31.4537C32.2183 31.52 31.2597 31.6897 30.3295 31.9617C29.8328 32.1069 29.5472 32.6297 29.6916 33.1293C29.8106 33.5413 30.1844 33.8088 30.5903 33.8088C30.6767 33.8088 30.7649 33.7967 30.8521 33.7712C31.908 33.4624 33.0069 33.3058 34.1179 33.3058L34.7562 33.3236C39.2512 33.5669 43.2508 36.4397 44.9456 40.6424C45.2608 41.4237 45.1707 42.2767 44.6983 42.9823Z","fill":"","key":2})]);
}

Icon.defaultProps = {"width":"47","height":"46","viewBox":"0 0 47 46","fill":"none"};

module.exports = Icon;

Icon.default = Icon;


/***/ }),

/***/ "./node_modules/svg-react-loader/lib/loader.js?name=Icon!./static/images/svg/repair.svg":
/*!**********************************************************************************************!*\
  !*** ./node_modules/svg-react-loader/lib/loader.js?name=Icon!./static/images/svg/repair.svg ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(/*! react */ "react");

function Icon (props) {
    return React.createElement("svg",props,[React.createElement("path",{"className":"color-stroke","d":"M1 9.99418C1 9.8319 1.0395 9.67205 1.11508 9.52843L4.11508 3.82844C4.49 3.1161 5.51 3.1161 5.88492 3.82843L8.88492 9.52844C8.9605 9.67205 9 9.8319 9 9.99418V49.5C9 50.0523 8.55228 50.5 8 50.5H2C1.44772 50.5 1 50.0523 1 49.5V9.99418Z","fill":"white","stroke":"","strokeWidth":"2","key":0}),React.createElement("path",{"className":"color-stroke color-svg","d":"M21 9.94973C21 9.80167 21.0329 9.65545 21.0963 9.52165L23.7735 3.86974C24.1184 3.14152 25.1389 3.09944 25.5426 3.79679L28.8654 9.53615C28.9536 9.68841 29 9.86124 29 10.0372V49.5C29 50.0523 28.5523 50.5 28 50.5H22C21.4477 50.5 21 50.0523 21 49.5V9.94973Z","fill":"","stroke":"","strokeWidth":"2","key":1}),React.createElement("path",{"className":"color-stroke","d":"M40 9.94973C40 9.80167 40.0329 9.65545 40.0963 9.52165L42.7735 3.86974C43.1184 3.14152 44.1389 3.09944 44.5426 3.79679L47.8654 9.53615C47.9536 9.68841 48 9.86124 48 10.0372V49.5C48 50.0523 47.5523 50.5 47 50.5H41C40.4477 50.5 40 50.0523 40 49.5V9.94973Z","fill":"white","stroke":"","strokeWidth":"2","key":2})]);
}

Icon.defaultProps = {"width":"49","height":"52","viewBox":"0 0 49 52","fill":"none"};

module.exports = Icon;

Icon.default = Icon;


/***/ }),

/***/ "./node_modules/svg-react-loader/lib/loader.js?name=Icon!./static/images/svg/road.svg":
/*!********************************************************************************************!*\
  !*** ./node_modules/svg-react-loader/lib/loader.js?name=Icon!./static/images/svg/road.svg ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(/*! react */ "react");

function Icon (props) {
    return React.createElement("svg",props,[React.createElement("rect",{"className":"color-svg","x":"26","y":"1","width":"8","height":"10","fill":"#fff","key":0}),React.createElement("rect",{"className":"color-svg","x":"26","y":"17","width":"8","height":"11","fill":"#fff","key":1}),React.createElement("rect",{"className":"color-svg","x":"26","y":"35","width":"8","height":"10","fill":"#fff","key":2}),React.createElement("path",{"d":"M43.4066 0H15.5934C14.3106 0.00216898 13.2465 1.00566 13.1516 2.30233L0 42.3293V42.5133C0 43.8873 1.09876 45 2.45322 45H56.5468C57.9012 45 59 43.8873 59 42.5133V42.3293L45.8484 2.27919C45.7418 0.992288 44.6812 0.00108449 43.4066 0ZM31.8562 2.30233C31.9564 2.30233 32.0381 2.38475 32.0381 2.48632V9.47427C32.0381 9.57621 31.9564 9.65827 31.8562 9.65827H27.7458C27.6448 9.65827 27.5632 9.57621 27.5632 9.47427V2.48632C27.5632 2.38475 27.6448 2.30233 27.7458 2.30233H31.8562ZM26.9273 42.7092C26.8271 42.7092 26.7454 42.6268 26.7454 42.5249V36.4923C26.7454 36.3908 26.8271 36.3087 26.9273 36.3087H32.674C32.7749 36.3087 32.8558 36.3908 32.8558 36.4923V42.5364C32.8558 42.638 32.7749 42.7204 32.674 42.7204L26.9273 42.7092ZM56.5468 42.7092H35.0819C35.0819 42.6514 35.0819 42.5943 35.0819 42.5249V36.4923C35.0819 35.1194 33.9835 34.006 32.6287 34.006H26.9273C25.5728 34.006 24.4741 35.1194 24.4741 36.4923V42.7204H2.45322C2.39402 42.7201 2.33839 42.6897 2.30522 42.6402L15.4115 2.67068V2.48632C15.4115 2.38475 15.4928 2.30233 15.5934 2.30233H25.315V9.47427C25.315 10.8476 26.4131 11.9606 27.7682 11.9606H31.8787C33.2339 11.9606 34.3323 10.8476 34.3323 9.47427V2.48632C34.3323 2.42885 34.3323 2.37137 34.3323 2.30233H43.418C43.5182 2.30233 43.5995 2.38475 43.5995 2.48632V2.67068L56.6605 42.6286C56.6345 42.6695 56.5931 42.6988 56.5468 42.7092Z","fill":"","key":3}),React.createElement("path",{"d":"M32.674 14.7812H26.9273C25.5729 14.7812 24.4741 15.8946 24.4741 17.2679V27.7547C24.4741 29.1284 25.5729 30.2418 26.9273 30.2418H32.674C34.0113 30.2165 35.0819 29.1107 35.0819 27.7547V17.2679C35.0819 15.912 34.0113 14.8066 32.674 14.7812ZM32.8106 27.7547C32.8106 27.857 32.7293 27.9391 32.6287 27.9391H26.9273C26.8271 27.9391 26.7455 27.857 26.7455 27.7547V17.2679C26.7455 17.166 26.8271 17.0836 26.9273 17.0836H32.674C32.7749 17.0836 32.8559 17.166 32.8559 17.2679L32.8106 27.7547Z","fill":"","key":4})]);
}

Icon.defaultProps = {"width":"59","height":"45","viewBox":"0 0 59 45","fill":"none"};

module.exports = Icon;

Icon.default = Icon;


/***/ }),

/***/ "./node_modules/svg-react-loader/lib/loader.js?name=Icon!./static/images/svg/snowflake.svg":
/*!*************************************************************************************************!*\
  !*** ./node_modules/svg-react-loader/lib/loader.js?name=Icon!./static/images/svg/snowflake.svg ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(/*! react */ "react");

function Icon (props) {
    return React.createElement("svg",props,[React.createElement("path",{"d":"M48.5078 39.3417L45.8954 37.8018L47.4307 37.1339C48.947 36.4743 49.6511 34.6882 49.0051 33.1401C48.3606 31.5966 46.6065 30.8756 45.0934 31.533L39.4357 33.994L32.849 30.1116C32.9483 29.3846 32.9521 28.6429 32.849 27.8881L34.3967 26.976C34.7947 26.7414 34.931 26.2217 34.7012 25.8153C34.4715 25.4088 33.9623 25.27 33.5644 25.5043L31.5113 26.7145C31.1975 26.8995 31.037 27.2706 31.1145 27.6321C31.3091 28.5387 31.3091 29.4609 31.1145 30.3677C31.037 30.7291 31.1974 31.1003 31.5113 31.2854L38.9633 35.6778C39.1899 35.8114 39.465 35.8284 39.7055 35.7236L45.7454 33.0964C46.4138 32.8061 47.1891 33.1244 47.4738 33.8062C47.7589 34.49 47.4482 35.2792 46.7782 35.5706L43.7099 36.9053C43.0802 37.1791 43.0266 38.0729 43.62 38.4229L47.6755 40.8133C48.3044 41.184 48.5205 42.0082 48.1575 42.6503C47.8017 43.2792 47.0005 43.5212 46.3583 43.1425L42.303 40.7518C41.7095 40.4016 40.9782 40.8968 41.0608 41.5899L41.4628 44.9704C41.5052 45.3268 41.4091 45.6789 41.1921 45.9618C40.9752 46.2445 40.6633 46.4241 40.3147 46.4672C39.5847 46.5589 38.9345 46.0228 38.8477 45.2943L38.0564 38.6401C38.0249 38.3749 37.873 38.1403 37.6464 38.0068L30.1919 33.613C29.878 33.428 29.4829 33.4717 29.215 33.721C28.5506 34.34 27.7487 34.8137 26.8965 35.091C26.5514 35.2033 26.317 35.5307 26.317 35.9005V44.6849C26.317 44.952 26.44 45.2036 26.6492 45.3641L31.8981 49.3909C32.4799 49.8372 32.5974 50.6795 32.1597 51.2737C31.7188 51.873 30.8933 51.9843 30.3157 51.541L27.6492 49.4952C27.1 49.0742 26.317 49.4773 26.317 50.1745V54.9555C26.317 55.6969 25.7261 56.3002 24.9998 56.3002C24.2736 56.3002 23.6827 55.697 23.6827 54.9555V50.1745C23.6827 49.4747 22.8975 49.0754 22.3505 49.4952L19.6841 51.541C18.742 52.2627 17.4253 51.4533 17.5888 50.2768C17.6381 49.9212 17.8203 49.6066 18.1016 49.3909L23.3505 45.3642C23.5597 45.2037 23.6827 44.9521 23.6827 44.685V35.9005C23.6827 35.5307 23.4484 35.2034 23.1032 35.091C22.2511 34.8137 21.4493 34.3401 20.7848 33.721C20.5168 33.4716 20.1218 33.4279 19.8077 33.613L12.3532 38.0068C12.1267 38.1403 11.9748 38.3749 11.9432 38.6401L11.1519 45.2944C11.0654 46.0226 10.4171 46.5572 9.68549 46.4674C8.96316 46.3779 8.44887 45.7083 8.53675 44.9704L8.93875 41.5899C9.0213 40.8962 8.29009 40.4019 7.69647 40.7518L3.64098 43.1423C2.99965 43.5207 2.19798 43.2798 1.84181 42.6501C1.47876 42.0081 1.69502 41.1839 2.32392 40.8132L6.3793 38.4227C6.97181 38.0735 6.91999 37.1794 6.28942 36.9052L3.22101 35.5703C2.55127 35.2791 2.24026 34.4901 2.52553 33.8061C2.81102 33.1223 3.58362 32.8049 4.25358 33.0962L10.2939 35.7235C10.5343 35.8282 10.8094 35.8112 11.0361 35.6777L18.4881 31.2853C18.802 31.1003 18.9624 30.7292 18.8848 30.3676C18.6904 29.4613 18.6902 28.5389 18.8848 27.6321C18.9624 27.2707 18.802 26.8995 18.4881 26.7144L11.0361 22.3219C10.8096 22.1884 10.5345 22.1715 10.2939 22.2762L4.25358 24.9035C3.57929 25.1963 2.80936 24.8735 2.52564 24.1934C2.24093 23.5114 2.55294 22.7198 3.22101 22.4291L6.28931 21.0944C6.91999 20.8201 6.9717 19.9262 6.3793 19.5769L2.32392 17.1864C1.69346 16.8149 1.47787 15.9933 1.84181 15.3495C2.20553 14.7061 3.01052 14.4854 3.64109 14.8573L7.69669 17.2479C8.29153 17.5984 9.0213 17.1016 8.93897 16.4097L8.53697 13.0292C8.44909 12.2916 8.96283 11.6218 9.68593 11.5323C10.4066 11.4426 11.0642 11.9656 11.1521 12.7052L11.9435 19.3594C11.975 19.6246 12.1269 19.8592 12.3535 19.9928L19.8079 24.3866C20.122 24.5717 20.517 24.528 20.785 24.2785C21.4493 23.6598 22.2511 23.1859 23.1035 22.9085C23.4486 22.7962 23.683 22.4689 23.683 22.099V13.3147C23.683 13.0475 23.5599 12.7959 23.3508 12.6354L18.1018 8.60876C17.5213 8.16334 17.4038 7.31861 17.8401 6.72581C18.2772 6.13165 19.1023 6.01191 19.6842 6.45858L22.3507 8.5042C22.8988 8.92436 23.683 8.52368 23.683 7.82497V3.04408C23.683 2.30265 24.2737 1.69932 25 1.69932C25.7262 1.69932 26.3172 2.30254 26.3172 3.04408V7.8252C26.3172 8.52493 27.1023 8.92424 27.6495 8.50443L30.3157 6.45892C30.8965 6.01373 31.724 6.13358 32.1601 6.72603C32.5965 7.31883 32.479 8.16357 31.8983 8.60898L26.6495 12.6357C26.4404 12.7962 26.3173 13.0478 26.3173 13.3149V15.9404C26.3173 16.4096 26.6898 16.79 27.1495 16.79C27.6092 16.79 27.9817 16.4096 27.9817 15.9404V13.7392L32.8983 9.96745C34.2127 8.95902 34.4784 7.04696 33.4907 5.70515C32.5035 4.36391 30.6309 4.09226 29.316 5.10023L27.9818 6.12395V3.04408C27.9818 1.3656 26.6442 0 25.0001 0C23.3562 0 22.0186 1.3656 22.0186 3.04408V6.12395L20.6839 5.10023C19.3662 4.08932 17.4991 4.36006 16.5091 5.70526C15.5216 7.04718 15.7875 8.95925 17.1016 9.96745L22.0184 13.7391V21.5045C21.3466 21.7847 20.7093 22.1612 20.135 22.6174L13.5456 18.7333L12.8043 12.5006C12.6057 10.8283 11.1177 9.64154 9.4851 9.84556C7.84926 10.0481 6.68587 11.5639 6.8846 13.2342L7.08576 14.9258L4.4735 13.386C3.04692 12.5446 1.22445 13.0427 0.400478 14.5003C-0.423379 15.9572 0.0643884 17.8172 1.49185 18.6583L4.10412 20.1982L2.5688 20.8661C1.05624 21.524 0.350103 23.3155 0.994432 24.8597C1.64109 26.4093 3.39266 27.1256 4.90601 26.467L10.5639 24.006L17.1505 27.8884C17.0524 28.6075 17.0464 29.3491 17.1506 30.1118L10.5639 33.9943L4.90612 31.5332C3.39055 30.8738 1.64054 31.5917 0.994432 33.1405C0.34855 34.6883 1.05224 36.4747 2.56869 37.1341L4.10412 37.802L1.49185 39.3418C0.0681609 40.1809 -0.421382 42.0462 0.400478 43.5C1.21857 44.9469 3.04215 45.458 4.47338 44.6142L7.08576 43.0743L6.8846 44.7658C6.78862 45.5729 7.00621 46.3699 7.4973 47.0101C9.13248 49.141 12.4852 48.1842 12.8042 45.4996L13.5455 39.2666L20.1348 35.3826C20.7092 35.8387 21.3467 36.2152 22.0183 36.4955V44.2609L17.1016 48.0327C15.7872 49.0409 15.5214 50.9528 16.509 52.2947C17.499 53.6402 19.366 53.9102 20.6838 52.8999L22.0182 51.8761V54.9559C22.0182 56.6344 23.3558 58 24.9997 58C26.6437 58 27.9813 56.6344 27.9813 54.9559V51.8762L29.3156 52.8998C30.645 53.92 32.5128 53.6234 33.4904 52.2949C34.4804 50.9496 34.2154 49.0435 32.8979 48.0327L27.9812 44.2609V36.4955C28.6528 36.2152 29.2903 35.8388 29.8647 35.3826L36.454 39.2666L37.1953 45.4995C37.5157 48.1953 40.8752 49.1302 42.5022 47.0101C42.9934 46.3701 43.211 45.5729 43.1149 44.7658L42.9137 43.0743L45.5259 44.6141C46.9505 45.4543 48.7772 44.9534 49.5989 43.5C50.421 42.0462 49.9316 40.181 48.5078 39.3417Z","fill":"","key":0}),React.createElement("path",{"d":"M47.1141 21.0434L45.5787 20.3756L48.1911 18.8357C49.6182 17.9945 50.1065 16.1347 49.2824 14.6776C48.4586 13.2205 46.6367 12.7218 45.2096 13.5634L42.5972 15.1032L42.7984 13.4117C42.9967 11.7416 41.8339 10.2253 40.198 10.0227C38.5617 9.81923 37.0771 11.0073 36.8785 12.6776L36.1372 18.9104L29.5477 22.7945C28.9734 22.3385 28.3361 21.9619 27.6644 21.6816V16.904C27.6644 16.4348 27.2919 16.0544 26.8322 16.0544C26.3725 16.0544 26 16.4348 26 16.904V22.2762C26 22.6461 26.2342 22.9734 26.5794 23.0857C27.4319 23.3632 28.2336 23.8369 28.898 24.4558C29.1657 24.705 29.5607 24.7489 29.8751 24.5638L37.3295 20.17C37.5561 20.0365 37.708 19.8019 37.7395 19.5367L38.5308 12.8824C38.6178 12.1499 39.2679 11.6197 39.9973 11.7095C40.7196 11.799 41.2339 12.4685 41.146 13.2065L40.744 16.5869C40.7059 16.9065 40.8482 17.2206 41.1113 17.3982C41.3743 17.5758 41.7132 17.5861 41.9863 17.4251L46.0421 15.0346C46.6723 14.6629 47.4769 14.883 47.841 15.5269C48.2051 16.1705 47.9895 16.9922 47.359 17.3637L43.3036 19.7542C43.0305 19.9151 42.8699 20.2199 42.889 20.5412C42.9081 20.8626 43.1034 21.1454 43.3935 21.2716L46.4618 22.6062C47.1299 22.8969 47.4419 23.6885 47.1573 24.3706C46.8729 25.0516 46.1023 25.3731 45.4292 25.0806L39.3891 22.4533C39.1488 22.3487 38.8736 22.3655 38.6469 22.4991L31.5092 26.8061C31.1112 27.0407 30.9749 27.5603 31.2047 27.9667C31.4343 28.3732 31.9435 28.5121 32.3415 28.2777L39.1192 24.1829L44.7772 26.644C46.2896 27.3015 48.0412 26.5882 48.6886 25.0367C49.333 23.4929 48.6266 21.7013 47.1141 21.0434Z","fill":"","key":1}),React.createElement("circle",{"className":"color-svg","cx":"25","cy":"29","r":"5","fill":"","key":2})]);
}

Icon.defaultProps = {"width":"50","height":"58","viewBox":"0 0 50 58","fill":"none"};

module.exports = Icon;

Icon.default = Icon;


/***/ }),

/***/ "./node_modules/svg-react-loader/lib/loader.js?name=Icon!./static/images/svg/water.svg":
/*!*********************************************************************************************!*\
  !*** ./node_modules/svg-react-loader/lib/loader.js?name=Icon!./static/images/svg/water.svg ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(/*! react */ "react");

function Icon (props) {
    return React.createElement("svg",props,[React.createElement("path",{"className":"color-svg","d":"M28 3.5L31.5 4.5L34 11.5V18H25L26 10.5L28 3.5Z","fill":"","key":0}),React.createElement("path",{"className":"color-svg","d":"M50 3.5L53.5 4.5L56 11.5V18H47L48 10.5L50 3.5Z","fill":"","key":1}),React.createElement("path",{"className":"color-svg","d":"M6 3.5L9.5 4.5L12 11.5V18H3L4 10.5L6 3.5Z","fill":"","key":2}),React.createElement("path",{"d":"M8.65781 0.623377C8.4523 0.277057 8.04127 0 7.56173 0C7.08219 0 6.67116 0.277057 6.46564 0.623377C5.57507 2.28571 1.05371 10.6667 1.05371 13.7836C1.05371 17.3853 3.99944 20.3636 7.56173 20.3636C11.124 20.3636 14.0697 17.3853 14.0697 13.7836C14.0697 10.6667 9.54838 2.28571 8.65781 0.623377ZM7.56173 17.8009C5.36955 17.8009 3.58841 16 3.58841 13.7836C3.58841 12.1905 5.71208 7.54978 7.56173 3.94805C9.41137 7.54978 11.535 12.2597 11.535 13.7836C11.535 16 9.7539 17.8009 7.56173 17.8009Z","fill":"","key":3}),React.createElement("path",{"d":"M30.8536 0.692652C30.4426 -0.138517 29.0725 -0.138517 28.6614 0.692652C27.7709 2.35499 23.2495 10.7359 23.2495 13.8528C23.2495 17.4546 26.1952 20.4329 29.7575 20.4329C33.3198 20.4329 36.2655 17.4546 36.2655 13.8528C36.2655 10.7359 31.7442 2.35499 30.8536 0.692652ZM29.7575 17.8009C27.5654 17.8009 25.7842 16 25.7842 13.7836C25.7842 12.1905 27.9079 7.54979 29.7575 3.94806C31.6072 7.54979 33.7308 12.2598 33.7308 13.7836C33.7308 16 31.9497 17.8009 29.7575 17.8009Z","fill":"","key":4}),React.createElement("path",{"d":"M53.0492 0.623377C52.6381 -0.207792 51.268 -0.207792 50.857 0.623377C49.9664 2.28571 45.4451 10.6667 45.4451 13.7835C45.4451 17.4545 48.3908 20.3636 51.9531 20.3636C55.5154 20.3636 58.4611 17.3853 58.4611 13.7835C58.4611 10.6667 53.9397 2.28571 53.0492 0.623377ZM51.9531 17.8009C49.7609 17.8009 47.9798 16 47.9798 13.7835C47.9798 12.2597 50.1034 7.54978 51.9531 3.94805C53.8027 7.54978 55.9264 12.1905 55.9264 13.7835C55.9264 16 54.1453 17.8009 51.9531 17.8009Z","fill":"","key":5}),React.createElement("path",{"d":"M58.9408 29.0216C58.5982 28.2597 57.9132 27.9134 57.2281 28.1212C50.1036 30.4069 46.6098 29.2987 42.9105 28.1212C39.2797 27.013 35.5804 25.8355 29.0724 28.1212C21.9478 30.4069 18.4541 29.2987 14.7548 28.1212C11.124 27.013 7.42468 25.8355 0.848155 28.1212C0.163101 28.329 -0.179426 29.0909 0.0945953 29.7143C0.300112 30.4069 1.05367 30.7532 1.67022 30.4762C7.42468 28.4675 10.5074 29.4372 14.0012 30.5454C16.1934 31.2381 18.5226 32 21.6738 32C23.9345 32 26.6062 31.5844 29.8945 30.5454C35.6489 28.5368 38.7317 29.5065 42.2254 30.6147C44.4176 31.3073 46.7468 32.0692 49.898 32.0692C52.1587 32.0692 54.8304 31.6537 58.1187 30.6147C58.8038 30.4069 59.1463 29.7143 58.9408 29.0216Z","fill":"","key":6}),React.createElement("path",{"d":"M58.9408 36.987C58.5982 36.2251 57.9132 35.8788 57.2281 36.0866C50.1036 38.3723 46.6098 37.2641 42.9105 36.0866C39.2797 34.9783 35.5804 33.8009 29.0724 36.0866C21.9478 38.3723 18.4541 37.2641 14.7548 36.0866C11.124 34.9783 7.42468 33.8009 0.848155 36.0866C0.163101 36.2944 -0.179426 37.0563 0.0945953 37.6796C0.300112 38.3723 1.05367 38.7186 1.67022 38.4416C7.42468 36.4329 10.5074 37.4026 14.0012 38.5108C16.1934 39.2035 18.5226 39.9654 21.6738 39.9654C23.9345 39.9654 26.6062 39.5498 29.8945 38.5108C35.6489 36.5022 38.7317 37.4719 42.2254 38.5801C44.4176 39.2727 46.7468 40.0346 49.898 40.0346C52.1587 40.0346 54.8304 39.619 58.1187 38.5801C58.8038 38.3723 59.1463 37.6796 58.9408 36.987Z","fill":"","key":7}),React.createElement("path",{"d":"M58.9408 44.9524C58.5982 44.1905 57.9132 43.8442 57.2281 44.052C50.1036 46.3377 46.6098 45.2295 42.9105 44.052C39.2797 42.9437 35.5804 41.7663 29.0724 44.052C21.9478 46.3377 18.4541 45.2295 14.7548 44.052C11.124 42.9437 7.42468 41.7663 0.848155 44.052C0.163101 44.2598 -0.179426 45.0217 0.0945953 45.645C0.300112 46.3377 1.05367 46.684 1.67022 46.4069C7.42468 44.3983 10.5074 45.368 14.0012 46.4762C16.1934 47.1688 18.5226 47.9308 21.6738 47.9308C23.9345 47.9308 26.6062 47.5152 29.8945 46.4762C35.6489 44.4676 38.7317 45.4372 42.2254 46.5455C44.4176 47.2381 46.7468 48 49.898 48C52.1587 48 54.8304 47.5844 58.1187 46.5455C58.8038 46.3377 59.1463 45.645 58.9408 44.9524Z","fill":"","key":8})]);
}

Icon.defaultProps = {"width":"59","height":"48","viewBox":"0 0 59 48","fill":"none"};

module.exports = Icon;

Icon.default = Icon;


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_common_MyLayout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/common/MyLayout.js */ "./app/common/MyLayout.js");
/* harmony import */ var _app_pages_MainPage_TopMain_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/pages/MainPage/TopMain.js */ "./app/pages/MainPage/TopMain.js");
/* harmony import */ var _app_pages_MainPage_Problems_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/pages/MainPage/Problems.js */ "./app/pages/MainPage/Problems.js");
/* harmony import */ var _app_pages_MainPage_Steps_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app/pages/MainPage/Steps.js */ "./app/pages/MainPage/Steps.js");
/* harmony import */ var _app_pages_MainPage_Reviews_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app/pages/MainPage/Reviews.js */ "./app/pages/MainPage/Reviews.js");
/* harmony import */ var _app_pages_MainPage_Facts_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app/pages/MainPage/Facts.js */ "./app/pages/MainPage/Facts.js");
/* harmony import */ var _app_pages_MainPage_CheckKsk_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app/pages/MainPage/CheckKsk.js */ "./app/pages/MainPage/CheckKsk.js");
/* harmony import */ var _app_pages_MainPage_AddKsk_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../app/pages/MainPage/AddKsk.js */ "./app/pages/MainPage/AddKsk.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! aos */ "aos");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _node_modules_aos_src_sass_aos_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../node_modules/aos/src/sass/aos.scss */ "./node_modules/aos/src/sass/aos.scss");
/* harmony import */ var _node_modules_aos_src_sass_aos_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_node_modules_aos_src_sass_aos_scss__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../styles/main.scss */ "./styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_15__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

















var Page =
/*#__PURE__*/
function (_Component) {
  _inherits(Page, _Component);

  function Page(props) {
    _classCallCheck(this, Page);

    return _possibleConstructorReturn(this, _getPrototypeOf(Page).call(this, props));
  }

  _createClass(Page, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log('props', this.props);
      aos__WEBPACK_IMPORTED_MODULE_12___default.a.init({
        duration: 2000
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      console.log('prevProps', prevProps);
    }
  }, {
    key: "render",
    value: function render() {
      console.log('page props', this.props.activeClass);
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_app_common_MyLayout_js__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_app_pages_MainPage_TopMain_js__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", {
        className: "main"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_app_pages_MainPage_Problems_js__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_app_pages_MainPage_Steps_js__WEBPACK_IMPORTED_MODULE_5__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_app_pages_MainPage_Reviews_js__WEBPACK_IMPORTED_MODULE_6__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_app_pages_MainPage_Facts_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        data: this.props.data
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_app_pages_MainPage_CheckKsk_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
        data: this.props.data
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_app_pages_MainPage_AddKsk_js__WEBPACK_IMPORTED_MODULE_9__["default"], null)));
    }
  }]);

  return Page;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

;

Page.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
    var req, res, json;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            req = _ref.req;
            _context.next = 3;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default()("http://dev.e-kck.kz/api/v1/data", {
              headers: {
                'Authorization': 'Bearer GZavaFROL7WLxUEISqQRv-9_9XHfG01N'
              }
            });

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();

          case 6:
            json = _context.sent;
            console.log('data', json.data);
            return _context.abrupt("return", {
              data: json.data
            });

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

function mapStateToProps(state) {
  return {
    activeClass: state.activeClass
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_15__["connect"])(mapStateToProps)(Page));

/***/ }),

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: actionTypes, reducer, representClass, citizenClass, partnerClass, initializeStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "representClass", function() { return representClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "citizenClass", function() { return citizenClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "partnerClass", function() { return partnerClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeStore", function() { return initializeStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);



var initialState = {
  activeClass: 'citizen-page'
};
var actionTypes = {
  REPRESENT: 'REPRESENT',
  PARTNER: 'PARTNER',
  CITIZEN: 'CITIZEN' // reducer

};
var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actionTypes.REPRESENT:
      return {
        activeClass: 'represent-page'
      };

    case actionTypes.PARTNER:
      return {
        activeClass: 'partner-page'
      };

    case actionTypes.CITIZEN:
      return {
        activeClass: 'citizen-page'
      };

    default:
      return state;
  }
}; // ACTIONS
// export const representClass = () => dispatch => {
//   return dispatch({type: actionTypes.REPRESENT})
// }

var representClass = function representClass() {
  return {
    type: actionTypes.REPRESENT
  };
}; // export const citizenClass = () => dispatch => {
//   return dispatch({type: actionTypes.CITIZEN})
// }

var citizenClass = function citizenClass() {
  return {
    type: actionTypes.CITIZEN
  };
}; // export const partnerClass = () => dispatch => {
//   return dispatch({type: actionTypes.PARTNER})
// }

var partnerClass = function partnerClass() {
  return {
    type: actionTypes.PARTNER
  };
}; // export const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))

function initializeStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(reducer, initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2___default.a)));
}

/***/ }),

/***/ "./styles/main.scss":
/*!**************************!*\
  !*** ./styles/main.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "aos":
/*!**********************!*\
  !*** external "aos" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("aos");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "downshift":
/*!****************************!*\
  !*** external "downshift" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("downshift");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-autosuggest":
/*!************************************!*\
  !*** external "react-autosuggest" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-autosuggest");

/***/ }),

/***/ "react-id-swiper":
/*!**********************************!*\
  !*** external "react-id-swiper" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-id-swiper");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-select":
/*!*******************************!*\
  !*** external "react-select" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-select");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map