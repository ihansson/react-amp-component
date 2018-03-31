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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
		value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _Amp = __webpack_require__(3);

var _Amp2 = _interopRequireDefault(_Amp);

var _AmpHead = __webpack_require__(5);

var _AmpHead2 = _interopRequireDefault(_AmpHead);

var _Amp3 = __webpack_require__(7);

var _Amp4 = _interopRequireDefault(_Amp3);

var _Amp5 = __webpack_require__(8);

var _Amp6 = _interopRequireDefault(_Amp5);

var _Amp7 = __webpack_require__(6);

var _Amp8 = _interopRequireDefault(_Amp7);

var _Amp9 = __webpack_require__(4);

var _Amp10 = _interopRequireDefault(_Amp9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ampStyle = {
		background: '#333',
		backgroundImage: "linear-gradient(to bottom, #222, #444)",
		padding: '6px',
		display: 'inline-block',
		borderRadius: '5px',
		border: '1px solid #222',
		boxShadow: '2px 5px 15px 3px rgba(0,0,0,0.2)'
};

var ampLiningStyle = {
		borderRadius: '5px',
		padding: '1.5px',
		backgroundImage: "linear-gradient(to bottom, #fff, #ddd)"
};

var Amp = function (_React$Component) {
		_inherits(Amp, _React$Component);

		function Amp() {
				_classCallCheck(this, Amp);

				return _possibleConstructorReturn(this, (Amp.__proto__ || Object.getPrototypeOf(Amp)).apply(this, arguments));
		}

		_createClass(Amp, [{
				key: 'render',
				value: function render() {
						return _react2.default.createElement(
								'div',
								{ className: 'Amp', style: ampStyle },
								_react2.default.createElement(
										'div',
										{ className: 'AmpLining', style: ampLiningStyle },
										this.props.children
								)
						);
				}
		}]);

		return Amp;
}(_react2.default.Component);

Amp.Head = _Amp2.default;
Amp.Head.Section = _AmpHead2.default;
Amp.Label = _Amp4.default;
Amp.Switch = _Amp6.default;
Amp.Knob = _Amp8.default;
Amp.Cabinet = _Amp10.default;

exports.default = Amp;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ampHeadStyle = {
  backgroundImage: "linear-gradient(to bottom, #c9b89e, #b3966c)",
  borderTopLeftRadius: '4px',
  borderTopRightRadius: '4px',
  boxShadow: 'inset 2px 5px 15px rgba(0,0,0,0.5)',
  padding: '0px 15px'
};

var Head = function (_React$Component) {
  _inherits(Head, _React$Component);

  function Head() {
    _classCallCheck(this, Head);

    return _possibleConstructorReturn(this, (Head.__proto__ || Object.getPrototypeOf(Head)).apply(this, arguments));
  }

  _createClass(Head, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'AmpHead', style: ampHeadStyle },
        this.props.children
      );
    }
  }]);

  return Head;
}(_react2.default.Component);

exports.default = Head;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ampCabinetStyle = {
	background: '#000',
	borderBottomLeftRadius: '4px',
	borderBottomRightRadius: '4px',
	overflow: 'hidden'
};

var ampCabinetNoiseStyle = {
	backgroundImage: 'url(data:image/png;base64,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)',
	minHeight: '200px',
	boxShadow: 'inset 2px 5px 15px rgba(0,0,0,0.8)'
};

var Cabinet = function (_React$Component) {
	_inherits(Cabinet, _React$Component);

	function Cabinet() {
		_classCallCheck(this, Cabinet);

		return _possibleConstructorReturn(this, (Cabinet.__proto__ || Object.getPrototypeOf(Cabinet)).apply(this, arguments));
	}

	_createClass(Cabinet, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'AmpCabinet', style: ampCabinetStyle },
				_react2.default.createElement(
					'div',
					{ className: 'AmpCabinetNoise', style: ampCabinetNoiseStyle },
					this.props.children
				)
			);
		}
	}]);

	return Cabinet;
}(_react2.default.Component);

exports.default = Cabinet;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ampHeadSectionStyle = {
  width: '80px',
  display: 'inline-block',
  padding: '5px',
  textAlign: 'center',
  verticalAlign: 'top'
};

var Section = function (_React$Component) {
  _inherits(Section, _React$Component);

  function Section() {
    _classCallCheck(this, Section);

    return _possibleConstructorReturn(this, (Section.__proto__ || Object.getPrototypeOf(Section)).apply(this, arguments));
  }

  _createClass(Section, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'AmpHeadSection', style: ampHeadSectionStyle },
        this.props.children
      );
    }
  }]);

  return Section;
}(_react2.default.Component);

exports.default = Section;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _knobInsetStyle;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var knobWrapperStyle = {
  textAlign: 'center'
};

var knobInsetStyle = (_knobInsetStyle = {
  display: 'inline-block',
  margin: '0',
  border: '1px solid #c7ac84',
  borderRadius: '5px',
  boxShadow: 'inset 0 0 15px rgba(0,0,0,0.8)'
}, _defineProperty(_knobInsetStyle, 'borderRadius', '50%'), _defineProperty(_knobInsetStyle, 'padding', '4px'), _knobInsetStyle);

var knobStyle = {
  borderRadius: '50%',
  border: '1px solid #e6bd6d',
  backgroundImage: "linear-gradient(to bottom, #93621d, #c59a3b)",
  padding: '5px'
};

var knobAngleStyle = {
  borderRadius: '50%',
  width: '35px',
  height: '35px',
  backgroundImage: "linear-gradient(to bottom, #93621d, #e6bd6d)",
  position: 'relative'
};

var getKnobIndicatorStyle = function getKnobIndicatorStyle(value) {
  return {
    position: 'absolute',
    top: '50%',
    marginTop: '-2px',
    height: '3px',
    width: '100%',
    borderRadius: '2px',
    backgroundImage: "linear-gradient(to bottom, #93621d, #e6bd6d)",
    transform: 'rotate(' + parseInt(value) * 36 + 'deg)'
  };
};

var Knob = function (_React$Component) {
  _inherits(Knob, _React$Component);

  function Knob(props) {
    _classCallCheck(this, Knob);

    var _this = _possibleConstructorReturn(this, (Knob.__proto__ || Object.getPrototypeOf(Knob)).call(this, props));

    _this.onInteract = _this.onInteract.bind(_this);
    _this.getValue = _this.getValue.bind(_this);
    _this.setValue = _this.setValue.bind(_this);
    _this.value = parseInt(_this.props.defaultValue || 5);
    return _this;
  }

  _createClass(Knob, [{
    key: 'onInteract',
    value: function onInteract(value) {
      this.setValue(this.value + 1);
      if (this.props.onChange) {
        this.props.onChange(this.getValue());
      }
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.value;
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      this.value = value;
      this.forceUpdate();
      return value;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'KnobWrapper', style: knobWrapperStyle },
        _react2.default.createElement(
          'div',
          { className: 'KnobInset', style: knobInsetStyle, onClick: this.onInteract },
          _react2.default.createElement(
            'div',
            { className: 'Knob', style: knobStyle },
            _react2.default.createElement(
              'div',
              { className: 'KnobAngle', style: knobAngleStyle },
              _react2.default.createElement('div', { className: 'KnobIndicator', style: getKnobIndicatorStyle(this.getValue()) })
            )
          )
        )
      );
    }
  }]);

  return Knob;
}(_react2.default.Component);

exports.default = Knob;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
		value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ampLabelStyle = {
		textTransform: 'uppercase',
		fontSize: '9px',
		fontWeight: 'bold',
		letterSpacing: '1px',
		opacity: 0.8,
		padding: '12px 0',
		display: 'block',
		textShadow: '0px 0px 1px #e6bd6d'
};

var Label = function (_React$Component) {
		_inherits(Label, _React$Component);

		function Label() {
				_classCallCheck(this, Label);

				return _possibleConstructorReturn(this, (Label.__proto__ || Object.getPrototypeOf(Label)).apply(this, arguments));
		}

		_createClass(Label, [{
				key: 'render',
				value: function render() {
						return _react2.default.createElement(
								'label',
								{ className: 'AmpLabel', style: ampLabelStyle },
								this.props.children
						);
				}
		}]);

		return Label;
}(_react2.default.Component);

exports.default = Label;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var switchInsetStyle = {
  margin: '0 auto',
  width: '20px',
  padding: '3px 2px',
  border: '1px solid #c7ac84',
  borderRadius: '5px',
  boxShadow: 'inset 0 0 15px rgba(0,0,0,0.8)',
  height: '48px',
  cursor: 'pointer'
};

var switchStyle = {
  height: '22px',
  border: '1px solid #e6bd6d',
  backgroundImage: "linear-gradient(to bottom, #93621d, #c59a3b)"
};

var switchActiveStyle = Object.assign({}, switchStyle, {
  height: '15px'
});

var upSwitchStyle = Object.assign({}, switchStyle, {
  borderBottom: '1px solid #7f6120'
});
var upSwitchActiveStyle = Object.assign({}, switchActiveStyle, {
  borderBottom: '1px solid #7f6120',
  marginTop: '7px',
  backgroundImage: "linear-gradient(to bottom, #e6bd6d, #93621d)"
});
var downSwitchStyle = Object.assign({}, switchStyle, {
  borderTop: '1px solid #7f6120'
});
var downSwitchActiveStyle = Object.assign({}, switchActiveStyle, {
  borderTop: '1px solid #7f6120',
  backgroundImage: "linear-gradient(to bottom, #93621d, #e6bd6d)"
});

var Switch = function (_React$Component) {
  _inherits(Switch, _React$Component);

  function Switch(props) {
    _classCallCheck(this, Switch);

    var _this = _possibleConstructorReturn(this, (Switch.__proto__ || Object.getPrototypeOf(Switch)).call(this, props));

    _this.onInteract = _this.onInteract.bind(_this);
    _this.getValue = _this.getValue.bind(_this);
    _this.changePosition = _this.changePosition.bind(_this);
    _this.upValue = _this.props.upValue || false;
    _this.downValue = _this.props.downValue || true;
    _this.position = _this.props.defaultPosition || 'up';
    return _this;
  }

  _createClass(Switch, [{
    key: 'onInteract',
    value: function onInteract(value) {
      this.changePosition();
      if (this.props.onChange) {
        this.props.onChange(this.getValue());
      }
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.position == 'up' ? this.upValue : this.downValue;
    }
  }, {
    key: 'changePosition',
    value: function changePosition() {
      this.position = this.position == 'up' ? 'down' : 'up';
      this.forceUpdate();
      return this.position;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { onClick: this.onInteract },
        _react2.default.createElement(
          'div',
          { className: 'SwitchInset', style: switchInsetStyle },
          _react2.default.createElement('div', { className: 'SwitchUp', style: this.position == 'up' ? upSwitchActiveStyle : upSwitchStyle }),
          _react2.default.createElement('div', { className: 'SwitchDown', style: this.position == 'down' ? downSwitchActiveStyle : downSwitchStyle })
        )
      );
    }
  }]);

  return Switch;
}(_react2.default.Component);

exports.default = Switch;

/***/ })
/******/ ]);