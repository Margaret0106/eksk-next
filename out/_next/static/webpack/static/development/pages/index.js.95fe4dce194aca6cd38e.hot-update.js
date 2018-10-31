webpackHotUpdate("static/development/pages/index.js",{

/***/ "./app/pages/MainPage/TopMain.js":
/*!***************************************!*\
  !*** ./app/pages/MainPage/TopMain.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Icons */ "./app/components/Icons.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store */ "./store.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
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
      activeClass: props.activeClass
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
      console.log('top active class', activeClass);
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
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "big-text"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "\u0414\u043B\u044F \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u043E\u0432 \u041A\u0421\u041A \u043C\u044B \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043B\u0438 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u0443\u044E \u0430\u0434\u043C\u0438\u043D-\u043F\u0430\u043D\u0435\u043B\u044C, \u0443\u0434\u043E\u0431\u043D\u0443\u044E \u0434\u043B\u044F \u043E\u0442\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0437\u0430\u043F\u0440\u043E\u0441\u043E\u0432 \u0436\u0438\u043B\u044C\u0446\u043E\u0432.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "\u0412 \u0430\u0434\u043C\u0438\u043D-\u043F\u0430\u043D\u0435\u043B\u0438 \u0435\u0441\u0442\u044C \u0440\u0430\u0437\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u0435 \u043F\u0440\u0430\u0432 \u0434\u043E\u0441\u0442\u0443\u043F\u0430 (\u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440 \u041A\u0421\u041A \u0432\u0438\u0434\u0438\u0442 \u0432\u0441\u0451, \u0430 \u0438\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C \u2014 \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0435 \u0435\u043C\u0443). \u0420\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u0441 \u0437\u0430\u044F\u0432\u043A\u0430\u043C\u0438 \u0443\u0434\u043E\u0431\u043D\u043E \u0438 \u043D\u0430 \u043D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u043E\u043C \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u0435 \u0438\u043B\u0438 \u043D\u043E\u0443\u0442\u0431\u0443\u043A\u0435, \u0438 \u0447\u0435\u0440\u0435\u0437 \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0439 \u0442\u0435\u043B\u0435\u0444\u043E\u043D."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "\u0414\u043B\u044F \u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438 \u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445 \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u0439, \u0432 \u0430\u0434\u043C\u0438\u043D-\u043F\u0430\u043D\u0435\u043B\u044C \u0432\u0441\u0442\u0440\u043E\u0435\u043D \u043C\u0435\u0445\u0430\u043D\u0438\u0437\u043C \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0438 \u0438 \u0441\u0434\u0430\u0447\u0438 \u043E\u0442\u0447\u0435\u0442\u043E\u0432. \u0427\u0442\u043E\u0431\u044B \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u043E\u0442\u0447\u0435\u0442, \u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E \u043D\u0430\u0436\u0430\u0442\u044C \u0442\u0440\u0438 \u043A\u043D\u043E\u043F\u043A\u0438!")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
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
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "big-text"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "\u0415\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u043E \u0441\u0435\u0440\u0432\u0438\u0441\u043E\u043C \u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442\u0441\u044F \u0442\u044B\u0441\u044F\u0447\u0438 \u043A\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043D\u0441\u0446\u0435\u0432, \u0436\u0438\u043B\u044C\u0446\u043E\u0432 \u043C\u043D\u043E\u0433\u043E\u043A\u0432\u0430\u0440\u0442\u0438\u0440\u043D\u044B\u0445 \u0434\u043E\u043C\u043E\u0432.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "\u0412 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0438 \u0443\u0434\u043E\u0431\u043D\u0430\u044F \u0441\u0435\u0433\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439 \u043F\u043E \u0433\u043E\u0440\u043E\u0434\u0430\u043C, \u0440\u0430\u0439\u043E\u043D\u0430\u043C \u0433\u043E\u0440\u043E\u0434\u0430 \u0438 \u0434\u0430\u0436\u0435 \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u044B\u043C \u0416\u041A!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "\u0413\u043E\u0442\u043E\u0432\u044B \u0440\u0430\u0441\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043F\u043E \u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438 \u0432\u0430\u0448\u0438\u0445 \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u0438\u043B\u0438 \u0443\u0441\u043B\u0443\u0433 \u0432 \u043D\u0430\u0448\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
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
    activeClass: state.classReducer.activeClass
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps)(TopMain));

/***/ })

})
//# sourceMappingURL=index.js.95fe4dce194aca6cd38e.hot-update.js.map