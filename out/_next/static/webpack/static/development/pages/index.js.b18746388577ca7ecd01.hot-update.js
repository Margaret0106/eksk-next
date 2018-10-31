webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_common_MyLayout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/common/MyLayout.js */ "./app/common/MyLayout.js");
/* harmony import */ var _app_pages_MainPage_TopMain_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/pages/MainPage/TopMain.js */ "./app/pages/MainPage/TopMain.js");
/* harmony import */ var _app_pages_MainPage_Problems_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/pages/MainPage/Problems.js */ "./app/pages/MainPage/Problems.js");
/* harmony import */ var _app_pages_MainPage_Steps_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app/pages/MainPage/Steps.js */ "./app/pages/MainPage/Steps.js");
/* harmony import */ var _app_pages_MainPage_Reviews_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app/pages/MainPage/Reviews.js */ "./app/pages/MainPage/Reviews.js");
/* harmony import */ var _app_pages_MainPage_Facts_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app/pages/MainPage/Facts.js */ "./app/pages/MainPage/Facts.js");
/* harmony import */ var _app_pages_MainPage_CheckKsk_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app/pages/MainPage/CheckKsk.js */ "./app/pages/MainPage/CheckKsk.js");
/* harmony import */ var _app_pages_MainPage_AddKsk_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../app/pages/MainPage/AddKsk.js */ "./app/pages/MainPage/AddKsk.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");


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
      // console.log('props', this.props)
      aos__WEBPACK_IMPORTED_MODULE_12___default.a.init({
        duration: 2000
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {// console.log('prevProps', prevProps)
    }
  }, {
    key: "render",
    value: function render() {
      console.log('page props', this.props.activeClass);
      console.log('page props', this.props.query);
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_app_common_MyLayout_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
        data: this.props.hash
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_app_pages_MainPage_TopMain_js__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", {
        className: "main main-page"
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
    var query, res, json;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            query = _ref.query;
            _context.next = 3;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default()("https://dev.e-kck.kz/api/v1/data/", {
              method: 'get',
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
            return _context.abrupt("return", {
              data: json.data,
              query: query
            });

          case 8:
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
    activeClass: state.classReducer.activeClass
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_13__["connect"])(mapStateToProps)(Page));
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.b18746388577ca7ecd01.hot-update.js.map