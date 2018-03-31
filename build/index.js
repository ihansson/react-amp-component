module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Amp = function (_React$Component) {
  _inherits(Amp, _React$Component);

  function Amp() {
    _classCallCheck(this, Amp);

    return _possibleConstructorReturn(this, (Amp.__proto__ || Object.getPrototypeOf(Amp)).apply(this, arguments));
  }

  _createClass(Amp, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "Amp" },
        this.props.children
      );
    }
  }]);

  return Amp;
}(_react2.default.Component);

Amp.Head = function (_React$Component2) {
  _inherits(Head, _React$Component2);

  function Head() {
    _classCallCheck(this, Head);

    return _possibleConstructorReturn(this, (Head.__proto__ || Object.getPrototypeOf(Head)).apply(this, arguments));
  }

  _createClass(Head, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "AmpHead" },
        this.props.children
      );
    }
  }]);

  return Head;
}(_react2.default.Component);

Amp.Head.Section = function (_React$Component3) {
  _inherits(Section, _React$Component3);

  function Section() {
    _classCallCheck(this, Section);

    return _possibleConstructorReturn(this, (Section.__proto__ || Object.getPrototypeOf(Section)).apply(this, arguments));
  }

  _createClass(Section, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "AmpHeadSection" },
        this.props.children
      );
    }
  }]);

  return Section;
}(_react2.default.Component);

Amp.Label = function (_React$Component4) {
  _inherits(Label, _React$Component4);

  function Label() {
    _classCallCheck(this, Label);

    return _possibleConstructorReturn(this, (Label.__proto__ || Object.getPrototypeOf(Label)).apply(this, arguments));
  }

  _createClass(Label, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "label",
        { className: "AmpLabel" },
        this.props.children
      );
    }
  }]);

  return Label;
}(_react2.default.Component);

Amp.Switch = function (_React$Component5) {
  _inherits(Switch, _React$Component5);

  function Switch(props) {
    _classCallCheck(this, Switch);

    var _this5 = _possibleConstructorReturn(this, (Switch.__proto__ || Object.getPrototypeOf(Switch)).call(this, props));

    _this5.onInteract = _this5.onInteract.bind(_this5);
    _this5.getValue = _this5.getValue.bind(_this5);
    _this5.changePosition = _this5.changePosition.bind(_this5);
    _this5.upValue = _this5.props.upValue || false;
    _this5.downValue = _this5.props.downValue || true;
    _this5.position = _this5.props.defaultPosition || 'up';
    return _this5;
  }

  _createClass(Switch, [{
    key: "onInteract",
    value: function onInteract(value) {
      this.changePosition();
      if (this.props.onChange) {
        this.props.onChange(this.getValue());
      }
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this.position == 'up' ? this.upValue : this.downValue;
    }
  }, {
    key: "changePosition",
    value: function changePosition() {
      this.position = this.position == 'up' ? 'down' : 'up';
      return this.position;
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { onClick: this.onInteract },
        "Switch"
      );
    }
  }]);

  return Switch;
}(_react2.default.Component);

Amp.Knob = function (_React$Component6) {
  _inherits(Knob, _React$Component6);

  function Knob(props) {
    _classCallCheck(this, Knob);

    var _this6 = _possibleConstructorReturn(this, (Knob.__proto__ || Object.getPrototypeOf(Knob)).call(this, props));

    _this6.onInteract = _this6.onInteract.bind(_this6);
    _this6.getValue = _this6.getValue.bind(_this6);
    _this6.setValue = _this6.setValue.bind(_this6);
    _this6.value = parseInt(_this6.props.defaultValue || 5);
    return _this6;
  }

  _createClass(Knob, [{
    key: "onInteract",
    value: function onInteract(value) {
      this.setValue(this.value + 1);
      if (this.props.onChange) {
        this.props.onChange(this.getValue());
      }
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this.value;
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      this.value = value;
      return value;
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { onClick: this.onInteract },
        "Knob"
      );
    }
  }]);

  return Knob;
}(_react2.default.Component);

Amp.Cabinet = function (_React$Component7) {
  _inherits(Knob, _React$Component7);

  function Knob() {
    _classCallCheck(this, Knob);

    return _possibleConstructorReturn(this, (Knob.__proto__ || Object.getPrototypeOf(Knob)).apply(this, arguments));
  }

  _createClass(Knob, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "AmpCabinet" },
        this.props.children
      );
    }
  }]);

  return Knob;
}(_react2.default.Component);

exports.default = Amp;

/***/ })
/******/ ]);