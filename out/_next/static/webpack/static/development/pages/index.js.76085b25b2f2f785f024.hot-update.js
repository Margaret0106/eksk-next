webpackHotUpdate("static/development/pages/index.js",{

/***/ "./app/pages/MainPage/CheckKsk.js":
/*!****************************************!*\
  !*** ./app/pages/MainPage/CheckKsk.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_autosuggest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-autosuggest */ "./node_modules/react-autosuggest/dist/index.js");
/* harmony import */ var react_autosuggest__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_autosuggest__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Icons */ "./app/components/Icons.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_ansi_colors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../node_modules/ansi-colors */ "./node_modules/ansi-colors/index.js");
/* harmony import */ var _node_modules_ansi_colors__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_node_modules_ansi_colors__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! smoothscroll-polyfill */ "./node_modules/smoothscroll-polyfill/dist/smoothscroll.js");
/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_7__);
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
      }, function () {});
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

        if (data.success) {
          smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_7___default.a.polyfill();
          var elmnt = document.getElementById('map');
          elmnt.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });

          _this.setState({
            kskModalOpen: true
          });

          if (data.data.ksk) {
            _this.setState({
              successKsk: true,
              ksk: data.data.ksk.title,
              kskCityId: data.data.city.id
            });
          } else {
            console.log(_this.state.cities); // console.log('key', _.findKey(this.props.cities, { 'title': 'Астана'})  )

            _this.setState({
              successKsk: false,
              ksk: null,
              kskCityId: null
            });
          }
        } else {
          _this.setState({
            kskModalOpen: false
          });
        } // data.data && data.data.ksk ?
        //   this.setState({ 
        //     successKsk: true, 
        //     ksk: data.data.ksk.title,
        //     kskCityId: data.data.city.id  
        //   }) : this.setState({ 
        //     successKsk: false, 
        //     ksk: null,
        //     kskCityId: null         
        // }) 
        // data.data ?        
        //   this.setState({           
        //     kskModalOpen: true,          
        //     // kskCityId: _.findKey(this.props.cities, { 'title': 'Астана'})
        //   }) : this.setState({
        //     kskModalOpen: false
        //   })


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
    _this.myRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
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

      var inputClasses = lodash__WEBPACK_IMPORTED_MODULE_5___default.a.mapValues(states, function (_ref5) {
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
        className: "map",
        id: "map"
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
      }, Object(_components_Icons__WEBPACK_IMPORTED_MODULE_3__["default"])('apple'), "App Store"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "",
        className: "app-link"
      }, Object(_components_Icons__WEBPACK_IMPORTED_MODULE_3__["default"])('google'), "Google Play"))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u0412\u0430\u0448 \u041A\u0421\u041A  ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u043D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442"), "  \u0441 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435\u043C")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "check-form"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0443", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "\u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u0432 \u0432\u0430\u0448\u0435\u043C \u041A\u0421\u041A"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        className: "form-inline",
        onSubmit: this._handleSubmit
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group form-group--medium"
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
        className: "form-group form-group--small"
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

/***/ })

})
//# sourceMappingURL=index.js.76085b25b2f2f785f024.hot-update.js.map