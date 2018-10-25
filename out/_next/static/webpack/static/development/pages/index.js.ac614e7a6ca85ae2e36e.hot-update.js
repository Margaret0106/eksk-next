webpackHotUpdate("static/development/pages/index.js",{

/***/ "./app/pages/MainPage/AddKsk.js":
/*!**************************************!*\
  !*** ./app/pages/MainPage/AddKsk.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Icons */ "./app/components/Icons.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
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
      var formData = _this.state.formData;

      _this.setState({
        formData: _objectSpread({}, formData, _defineProperty({}, event.target.getAttribute('name'), event.target.value))
      }, function () {
        console.log('onchange', this.state.formData);
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_handleSubmit", function (event) {
      event.preventDefault();
      var formData = _this.state.formData;
      console.log('formData', JSON.stringify(formData));
      fetch("http://eksk-landing.rocketfirm.net/en/api/v1/feedback/create", {
        method: 'POST',
        headers: {
          // 'Authorization': 'Bearer GZavaFROL7WLxUEISqQRv-9_9XHfG01N',           
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        //   body: JSON.stringify(formData)
        body: {
          "email": "dsfdsfdsf@mail.ru",
          "city": "авпвапв",
          "street": "Курмангазы"
        }
      }).then(function (res) {
        return res.json();
      }).then(function (data) {
        console.log('data', data);
      });
    });

    _this.state = {
      formData: {}
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

/***/ })

})
//# sourceMappingURL=index.js.ac614e7a6ca85ae2e36e.hot-update.js.map