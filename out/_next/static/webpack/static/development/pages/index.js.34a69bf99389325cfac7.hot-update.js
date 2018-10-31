webpackHotUpdate("static/development/pages/index.js",{

/***/ "./app/components/Form.js":
/*!********************************!*\
  !*** ./app/components/Form.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Icons */ "./app/components/Icons.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_getFormData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getFormData */ "./app/utils/getFormData.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");
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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }









var validate = function validate(values) {
  var errors = {};

  if (!values.city) {
    errors.city = 'Не ввели город';
  }

  if (!values.email) {
    errors.email = 'Не ввели почту';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Неправильно ввели почту';
  }

  if (!values.street) {
    errors.street = 'Не ввели улицу';
  }

  return errors;
};

var InputHalf = function InputHalf(_ref) {
  var input = _ref.input,
      label = _ref.label,
      type = _ref.type,
      placeholder = _ref.placeholder,
      _ref$meta = _ref.meta,
      touched = _ref$meta.touched,
      error = _ref$meta.error;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('form-group form-group--half', {
      error: touched && error,
      success: touched && !error
    })
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _extends({}, input, {
    type: type,
    className: "form-control",
    placeholder: placeholder
  })));
};

var Input = function Input(_ref2) {
  var input = _ref2.input,
      label = _ref2.label,
      type = _ref2.type,
      placeholder = _ref2.placeholder,
      _ref2$meta = _ref2.meta,
      touched = _ref2$meta.touched,
      error = _ref2$meta.error;
  console.log('meta', {
    touched: touched,
    error: error
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('form-group', {
      error: touched && error,
      success: touched && !error
    })
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _extends({}, input, {
    type: type,
    className: "form-control",
    placeholder: placeholder
  })));
};

var FeedbackForm =
/*#__PURE__*/
function (_Component) {
  _inherits(FeedbackForm, _Component);

  function FeedbackForm(props) {
    var _this;

    _classCallCheck(this, FeedbackForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FeedbackForm).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_handleSubmit", function (values) {
      // event.preventDefault();
      //console.log('onsubmit', this.props)
      var _this$props = _this.props,
          dispatch = _this$props.dispatch,
          form = _this$props.form,
          stop = _this$props.stop;
      var formData = values; //console.log('formData', JSON.stringify(formData))

      fetch("http://eksk-landing.rocketfirm.net/api/v1/feedback/create", {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer GZavaFROL7WLxUEISqQRv-9_9XHfG01N',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: Object(_utils_getFormData__WEBPACK_IMPORTED_MODULE_3__["default"])(formData)
      }).then(function (res) {
        return res.json();
      }).then(function (data) {
        //console.log('data', data);
        if (data.success) {
          _this.setState({
            successMessage: 'Заявка успешно отправлена'
          }, function () {
            var _this2 = this;

            setTimeout(function () {
              dispatch(Object(redux_form__WEBPACK_IMPORTED_MODULE_6__["reset"])(form));

              _this2.setState({
                successMessage: null
              });
            }, 3000);
          });
        } else {}
      });
    });

    _this.state = {
      successModalOpen: false,
      fetching: false,
      successMessage: null
    };
    return _this;
  }

  _createClass(FeedbackForm, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps() {// console.log ('componentWillReceiveProps', this.props)
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          handleSubmit = _this$props2.handleSubmit,
          pristine = _this$props2.pristine,
          reset = _this$props2.reset,
          submitting = _this$props2.submitting,
          errors = _this$props2.errors,
          isTouched = _this$props2.isTouched;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        className: "form-transparent form-flex",
        onSubmit: handleSubmit(this._handleSubmit)
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_6__["Field"], {
        name: "email",
        type: "email",
        component: InputHalf,
        placeholder: "\u041F\u043E\u0447\u0442\u0430"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_6__["Field"], {
        name: "city",
        type: "text",
        component: InputHalf,
        placeholder: "\u0413\u043E\u0440\u043E\u0434"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_6__["Field"], {
        name: "street",
        type: "text",
        component: Input,
        placeholder: "\u0423\u043B\u0438\u0446\u0430"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "submit",
        disabled: submitting,
        className: "btn btn--transparent"
      }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443 ", Object(_Icons__WEBPACK_IMPORTED_MODULE_1__["default"])('arrow')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-messages"
      }, isTouched && errors && Object.keys(errors).map(function (item, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "error-message",
          key: i
        }, errors[item]);
      }), this.state.successMessage && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "success-message"
      }, this.state.successMessage)));
    }
  }]);

  return FeedbackForm;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  var _state$form$syncValid = state.form.syncValidation,
      syncErrors = _state$form$syncValid.syncErrors,
      fields = _state$form$syncValid.fields;
  var errors = syncErrors ? Object.keys(syncErrors).reduce(function (carry, key) {
    var item = syncErrors[key];

    if (fields && fields[key]) {
      if (!fields[key].active && (fields[key].visited || fields[key].touched)) {
        carry[key] = item;
      }
    }

    return carry;
  }, {}) : {};
  return {
    errors: errors,
    isTouched: state.form.syncValidation.anyTouched
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(redux_form__WEBPACK_IMPORTED_MODULE_6__["reduxForm"])({
  form: 'syncValidation',
  // a unique identifier for this form
  validate: validate // <--- validation function given to redux-form

})(Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps)(FeedbackForm)));

/***/ })

})
//# sourceMappingURL=index.js.34a69bf99389325cfac7.hot-update.js.map