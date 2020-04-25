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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "0iUn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "1lU9":
/***/ (function(module, exports) {

module.exports = require("react-wow");

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "2Eek":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ltjX");

/***/ }),

/***/ "3PpT":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExpandMore");

/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "AT/M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "DRgV":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ExpansionPanel");

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "FbiP":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Gf4D");

/***/ }),

/***/ "Gf4D":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/freeze");

/***/ }),

/***/ "Hd3h":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ExpansionPanelSummary");

/***/ }),

/***/ "I/1N":
/***/ (function(module, exports) {

module.exports = require("react-scroll");

/***/ }),

/***/ "MI3g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("XVgq");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("Z7t5");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js



function typeof_typeof2(obj) { if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") { typeof_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { typeof_typeof2 = function _typeof2(obj) { return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj; }; } return typeof_typeof2(obj); }

function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof_typeof2(obj);
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
    };
  }

  return typeof_typeof(obj);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(assertThisInitialized["a" /* default */])(self);
}

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js
var define_properties = __webpack_require__("2Eek");
var define_properties_default = /*#__PURE__*/__webpack_require__.n(define_properties);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js
var freeze = __webpack_require__("FbiP");
var freeze_default = /*#__PURE__*/__webpack_require__.n(freeze);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js


function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return freeze_default()(define_properties_default()(strings, {
    raw: {
      value: freeze_default()(raw)
    }
  }));
}
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__("faye");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("0iUn");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("sLSF");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__("MI3g");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("a7VT");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("Tit0");

// CONCATENATED MODULE: ./components/Header.js









var Header_Header =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(Header, _Component);

  function Header() {
    Object(classCallCheck["a" /* default */])(this, Header);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Header).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(Header, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("title", null, "My page title"), external_react_default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), external_react_default.a.createElement("link", {
        rel: "stylesheet",
        href: "/static/css/style.css"
      }), external_react_default.a.createElement("script", {
        dangerouslySetInnerHTML: {
          __html: "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n      })(window,document,'script','dataLayer','GTM-NW8s3JTW');"
        }
      }));
    }
  }]);

  return Header;
}(external_react_["Component"]);

/* harmony default export */ var components_Header = (Header_Header);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__("oL/c");

// CONCATENATED MODULE: ./components/Navbar.js










var Navbar_NavbarMineshaft =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(NavbarMineshaft, _React$Component);

  function NavbarMineshaft(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, NavbarMineshaft);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(NavbarMineshaft).call(this, props));
    _this.toggle = _this.toggle.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.state = {
      isOpen: false
    };
    return _this;
  }

  Object(createClass["a" /* default */])(NavbarMineshaft, [{
    key: "toggle",
    value: function toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(external_reactstrap_["Navbar"], {
        color: "mineshaft",
        className: "navbar-mineshaft position-fixed w-100",
        expand: "lg"
      }, external_react_default.a.createElement("div", {
        className: "container"
      }, external_react_default.a.createElement(external_reactstrap_["NavbarBrand"], {
        className: "navbar-brand",
        href: "/"
      }, external_react_default.a.createElement("img", {
        className: "logo mr-3",
        src: "/static/media/logo.svg"
      }), "infinity", external_react_default.a.createElement("span", null, "designs")), external_react_default.a.createElement(external_reactstrap_["NavbarToggler"], {
        className: "ripple",
        onClick: this.toggle
      }), external_react_default.a.createElement(external_reactstrap_["Collapse"], {
        isOpen: this.state.isOpen,
        navbar: true
      }, external_react_default.a.createElement(external_reactstrap_["Nav"], {
        className: "ml-auto",
        navbar: true
      }, external_react_default.a.createElement(external_reactstrap_["NavItem"], null, external_react_default.a.createElement(external_reactstrap_["NavLink"], {
        href: "/"
      }, "Home")), external_react_default.a.createElement(external_reactstrap_["NavItem"], null, external_react_default.a.createElement(external_reactstrap_["NavLink"], {
        href: "/blog"
      }, "Blog"))))));
    }
  }]);

  return NavbarMineshaft;
}(external_react_default.a.Component);


// CONCATENATED MODULE: ./components/Sidebar.js








var Sidebar_Sidebar =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(Sidebar, _Component);

  function Sidebar() {
    Object(classCallCheck["a" /* default */])(this, Sidebar);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Sidebar).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(Sidebar, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", {
        className: "col-12 col-lg-3 order-2 order-lg-1 order-2"
      }, external_react_default.a.createElement("div", {
        className: "card bg-cerulean rounded-0 border-0 shadow"
      }, external_react_default.a.createElement("div", {
        className: "py-4 d-flex justify-content-center"
      }, external_react_default.a.createElement("img", {
        className: "card-img rounded-circle",
        src: "/static/media/moustafa-omar.jpg",
        width: "200",
        height: "200"
      })), external_react_default.a.createElement("div", {
        className: "card-body"
      }, external_react_default.a.createElement("h5", {
        className: "card-title text-center"
      }, "Moustafa Omar"), external_react_default.a.createElement("ul", {
        className: "list-inline m-0 py-4 text-center social-media"
      }, external_react_default.a.createElement("li", {
        className: "list-inline-item px-2"
      }, external_react_default.a.createElement("a", {
        className: "ripple",
        href: "#"
      }, external_react_default.a.createElement("img", {
        className: "icon",
        src: "/static/media/linkedin.svg",
        alt: "linkedin"
      }))), external_react_default.a.createElement("li", {
        className: "list-inline-item px-2"
      }, external_react_default.a.createElement("a", {
        className: "ripple",
        href: "#"
      }, external_react_default.a.createElement("img", {
        className: "icon",
        src: "/static/media/gmail.svg",
        alt: "gmail"
      }))))), external_react_default.a.createElement("div", {
        className: "bg-mineshaft text-center p-4"
      }, external_react_default.a.createElement("button", {
        type: "button",
        className: "btn ripple btn-tundora btn-lg"
      }, "Download Resume"))));
    }
  }]);

  return Sidebar;
}(external_react_["Component"]);

/* harmony default export */ var components_Sidebar = (Sidebar_Sidebar);
// EXTERNAL MODULE: external "react-wow"
var external_react_wow_ = __webpack_require__("1lU9");
var external_react_wow_default = /*#__PURE__*/__webpack_require__.n(external_react_wow_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core/ExpansionPanel"
var ExpansionPanel_ = __webpack_require__("DRgV");
var ExpansionPanel_default = /*#__PURE__*/__webpack_require__.n(ExpansionPanel_);

// EXTERNAL MODULE: external "@material-ui/core/ExpansionPanelDetails"
var ExpansionPanelDetails_ = __webpack_require__("h1YJ");
var ExpansionPanelDetails_default = /*#__PURE__*/__webpack_require__.n(ExpansionPanelDetails_);

// EXTERNAL MODULE: external "@material-ui/core/ExpansionPanelSummary"
var ExpansionPanelSummary_ = __webpack_require__("Hd3h");
var ExpansionPanelSummary_default = /*#__PURE__*/__webpack_require__.n(ExpansionPanelSummary_);

// EXTERNAL MODULE: external "@material-ui/core/Typography"
var Typography_ = __webpack_require__("UVoM");
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);

// EXTERNAL MODULE: external "@material-ui/icons/ExpandMore"
var ExpandMore_ = __webpack_require__("3PpT");
var ExpandMore_default = /*#__PURE__*/__webpack_require__.n(ExpandMore_);

// CONCATENATED MODULE: ./components/Accordion.js















var styles = function styles(theme) {
  return {
    root: {
      width: '100%'
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
      flexShrink: 0
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary
    }
  };
};

var Accordion_ControlledExpansionPanels =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(ControlledExpansionPanels, _React$Component);

  function ControlledExpansionPanels() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, ControlledExpansionPanels);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(ControlledExpansionPanels)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      expanded: null
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleChange", function (panel) {
      return function (event, expanded) {
        _this.setState({
          expanded: expanded ? panel : false
        });
      };
    });

    return _this;
  }

  Object(createClass["a" /* default */])(ControlledExpansionPanels, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      var expanded = this.state.expanded;
      return external_react_default.a.createElement("div", {
        className: classes.root
      }, external_react_default.a.createElement(ExpansionPanel_default.a, {
        expanded: expanded === 'panel1',
        onChange: this.handleChange('panel1')
      }, external_react_default.a.createElement(ExpansionPanelSummary_default.a, {
        expandIcon: external_react_default.a.createElement(ExpandMore_default.a, null)
      }, external_react_default.a.createElement(Typography_default.a, {
        className: classes.heading
      }, "General settings"), external_react_default.a.createElement(Typography_default.a, {
        className: classes.secondaryHeading
      }, "I am an expansion panel")), external_react_default.a.createElement(ExpansionPanelDetails_default.a, null, external_react_default.a.createElement(Typography_default.a, null, "Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam."))), external_react_default.a.createElement(ExpansionPanel_default.a, {
        expanded: expanded === 'panel2',
        onChange: this.handleChange('panel2')
      }, external_react_default.a.createElement(ExpansionPanelSummary_default.a, {
        expandIcon: external_react_default.a.createElement(ExpandMore_default.a, null)
      }, external_react_default.a.createElement(Typography_default.a, {
        className: classes.heading
      }, "Users"), external_react_default.a.createElement(Typography_default.a, {
        className: classes.secondaryHeading
      }, "You are currently not an owner")), external_react_default.a.createElement(ExpansionPanelDetails_default.a, null, external_react_default.a.createElement(Typography_default.a, null, "Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet."))), external_react_default.a.createElement(ExpansionPanel_default.a, {
        expanded: expanded === 'panel3',
        onChange: this.handleChange('panel3')
      }, external_react_default.a.createElement(ExpansionPanelSummary_default.a, {
        expandIcon: external_react_default.a.createElement(ExpandMore_default.a, null)
      }, external_react_default.a.createElement(Typography_default.a, {
        className: classes.heading
      }, "Advanced settings"), external_react_default.a.createElement(Typography_default.a, {
        className: classes.secondaryHeading
      }, "Filtering has been entirely disabled for whole web server")), external_react_default.a.createElement(ExpansionPanelDetails_default.a, null, external_react_default.a.createElement(Typography_default.a, null, "Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue."))), external_react_default.a.createElement(ExpansionPanel_default.a, {
        expanded: expanded === 'panel4',
        onChange: this.handleChange('panel4')
      }, external_react_default.a.createElement(ExpansionPanelSummary_default.a, {
        expandIcon: external_react_default.a.createElement(ExpandMore_default.a, null)
      }, external_react_default.a.createElement(Typography_default.a, {
        className: classes.heading
      }, "Personal data")), external_react_default.a.createElement(ExpansionPanelDetails_default.a, null, external_react_default.a.createElement(Typography_default.a, null, "Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue."))));
    }
  }]);

  return ControlledExpansionPanels;
}(external_react_default.a.Component);

/* harmony default export */ var Accordion = (Object(styles_["withStyles"])(styles)(Accordion_ControlledExpansionPanels));
// EXTERNAL MODULE: external "react-scroll"
var external_react_scroll_ = __webpack_require__("I/1N");

// CONCATENATED MODULE: ./components/Jumbotron.js













var Jumbotron_JumbotronMineshaft =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(JumbotronMineshaft, _Component);

  function JumbotronMineshaft() {
    Object(classCallCheck["a" /* default */])(this, JumbotronMineshaft);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(JumbotronMineshaft).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(JumbotronMineshaft, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", {
        className: "col-12 col-lg-8 order-3 order-lg-2 order-1"
      }, external_react_default.a.createElement(external_reactstrap_["Jumbotron"], {
        className: "mt-4 mt-lg-0 jumbotron bg-mineshaft rounded-0 box-shadow-block"
      }, external_react_default.a.createElement("h2", {
        className: "display-4"
      }, "About me"), external_react_default.a.createElement("p", {
        className: "lead"
      }, "Hello! I\u2019m Moustafa Omar a web Developer specializing in front end development Experienced with all stages of the development for dynamic web projects."), external_react_default.a.createElement("div", {
        className: "addthis_inline_share_toolbox"
      }), external_react_default.a.createElement("hr", {
        className: "my-2"
      }), external_react_default.a.createElement("div", {
        className: "row"
      }, external_react_default.a.createElement("div", {
        className: "col-12 col-lg-6"
      }, external_react_default.a.createElement("h3", null, "Personal information"), external_react_default.a.createElement("dl", {
        className: "row"
      }, external_react_default.a.createElement("dt", {
        className: "col-auto"
      }, "Name"), external_react_default.a.createElement("dd", {
        className: "col-sm-10"
      }, "Moustafa"), external_react_default.a.createElement("dt", {
        className: "col-auto"
      }, "Last name"), external_react_default.a.createElement("dd", {
        className: "col-sm-10"
      }, "Omar"), external_react_default.a.createElement("dt", {
        className: "col-auto"
      }, "Address"), external_react_default.a.createElement("dd", {
        className: "col-sm-10"
      }, "Schiedam, Netherlands"), external_react_default.a.createElement("dt", {
        className: "col-auto"
      }, "E-Mail"), external_react_default.a.createElement("dd", {
        className: "col-sm-10"
      }, "moustafa.omar@infinitydesigns.nl"), external_react_default.a.createElement("dt", {
        className: "col-auto"
      }, "Phone"), external_react_default.a.createElement("dd", {
        className: "col-sm-10"
      }, "+31 6 43 91 54 52"))), external_react_default.a.createElement("div", {
        className: "col-12 col-lg-6"
      }, external_react_default.a.createElement("h3", null, "Languages"), external_react_default.a.createElement("dl", {
        className: "row"
      }, external_react_default.a.createElement("dt", {
        className: "col-auto"
      }, "Dutch"), external_react_default.a.createElement("dd", {
        className: "col-sm-10"
      }, external_react_default.a.createElement("div", {
        className: "bullet-progress"
      }, external_react_default.a.createElement("span", {
        className: "progress-bar "
      }, external_react_default.a.createElement(external_react_wow_default.a, {
        animation: "fadeIn"
      }, external_react_default.a.createElement("span", {
        className: "bullet fill",
        "data-wow-offset": "1",
        "data-wow-iteration": "1"
      }), external_react_default.a.createElement("span", {
        className: "bullet fill",
        "data-wow-offset": "2",
        "data-wow-iteration": "1"
      }), external_react_default.a.createElement("span", {
        className: "bullet fill",
        "data-wow-offset": "3",
        "data-wow-iteration": "1"
      }), external_react_default.a.createElement("span", {
        className: "bullet fill",
        "data-wow-offset": "4",
        "data-wow-iteration": "1"
      }), external_react_default.a.createElement("span", {
        className: "bullet fill",
        "data-wow-offset": "5",
        "data-wow-iteration": "1"
      }), external_react_default.a.createElement("span", {
        className: "bullet fill",
        "data-wow-offset": "6",
        "data-wow-iteration": "1"
      }), external_react_default.a.createElement("span", {
        className: "bullet fill",
        "data-wow-offset": "7",
        "data-wow-iteration": "1"
      }), external_react_default.a.createElement("span", {
        className: "bullet fill",
        "data-wow-offset": "8",
        "data-wow-iteration": "1"
      }), external_react_default.a.createElement("span", {
        className: "bullet fill",
        "data-wow-offset": "9",
        "data-wow-iteration": "1"
      }), external_react_default.a.createElement("span", {
        className: "bullet fill",
        "data-wow-offset": "10",
        "data-wow-iteration": "1"
      }))))), external_react_default.a.createElement("dt", {
        className: "col-auto"
      }, "English"), external_react_default.a.createElement("dd", {
        className: "col-sm-10"
      }, external_react_default.a.createElement("div", {
        className: "bullet-progress"
      }, external_react_default.a.createElement("span", {
        className: "progress-bar"
      }, external_react_default.a.createElement(external_react_wow_default.a, {
        animation: "fadeIn"
      }, external_react_default.a.createElement("span", {
        className: "bullet fill",
        "data-wow-offset": "1",
        "data-wow-iteration": "1"
      }), external_react_default.a.createElement("span", {
        className: "bullet fill",
        "data-wow-offset": "2",
        "data-wow-iteration": "1"
      }), external_react_default.a.createElement("span", {
        className: "bullet fill",
        "data-wow-offset": "3",
        "data-wow-iteration": "1"
      }), external_react_default.a.createElement("span", {
        className: "bullet fill",
        "data-wow-offset": "4",
        "data-wow-iteration": "1"
      }), external_react_default.a.createElement("span", {
        className: "bullet fill",
        "data-wow-offset": "5",
        "data-wow-iteration": "1"
      }), external_react_default.a.createElement("span", {
        className: "bullet fill",
        "data-wow-offset": "6",
        "data-wow-iteration": "1"
      }), external_react_default.a.createElement("span", {
        className: "bullet",
        "data-wow-offset": "7",
        "data-wow-iteration": "1"
      }), external_react_default.a.createElement("span", {
        className: "bullet",
        "data-wow-offset": "8",
        "data-wow-iteration": "1"
      }), external_react_default.a.createElement("span", {
        className: "bullet",
        "data-wow-offset": "9",
        "data-wow-iteration": "1"
      }), external_react_default.a.createElement("span", {
        className: "bullet",
        "data-wow-offset": "10",
        "data-wow-iteration": "1"
      }))))), external_react_default.a.createElement("dt", {
        className: "col-auto"
      }, "Arabic"), external_react_default.a.createElement("dd", {
        className: "col-sm-10"
      }, external_react_default.a.createElement("div", {
        className: "bullet-progress"
      }, external_react_default.a.createElement("span", {
        className: "progress-bar"
      }, external_react_default.a.createElement(external_react_wow_default.a, {
        animation: "fadeIn"
      }, external_react_default.a.createElement("span", {
        className: "bullet fill",
        "data-wow-offset": "1",
        "data-wow-iteration": "1"
      }), external_react_default.a.createElement("span", {
        className: "bullet fill",
        "data-wow-offset": "2",
        "data-wow-iteration": "1"
      }), external_react_default.a.createElement("span", {
        className: "bullet fill",
        "data-wow-offset": "3",
        "data-wow-iteration": "1"
      }), external_react_default.a.createElement("span", {
        className: "bullet fill",
        "data-wow-offset": "4",
        "data-wow-iteration": "1"
      }), external_react_default.a.createElement("span", {
        className: "bullet",
        "data-wow-offset": "5",
        "data-wow-iteration": "1"
      }), external_react_default.a.createElement("span", {
        className: "bullet",
        "data-wow-offset": "6",
        "data-wow-iteration": "1"
      }), external_react_default.a.createElement("span", {
        className: "bullet",
        "data-wow-offset": "7",
        "data-wow-iteration": "1"
      }), external_react_default.a.createElement("span", {
        className: "bullet",
        "data-wow-offset": "8",
        "data-wow-iteration": "1"
      }), external_react_default.a.createElement("span", {
        className: "bullet",
        "data-wow-offset": "9",
        "data-wow-iteration": "1"
      }), external_react_default.a.createElement("span", {
        className: "bullet",
        "data-wow-offset": "10",
        "data-wow-iteration": "1"
      }))))))))), external_react_default.a.createElement(external_react_scroll_["Element"], {
        name: "work-experience",
        className: "element"
      }, external_react_default.a.createElement(external_reactstrap_["Jumbotron"], {
        className: "mt-4 mt-lg-0 jumbotron bg-mineshaft rounded-0 box-shadow-block"
      }, external_react_default.a.createElement("h2", {
        className: "display-4 mb-4"
      }, "Work Experience"), external_react_default.a.createElement("div", {
        className: "education"
      }, external_react_default.a.createElement("div", {
        className: "education-box"
      }, external_react_default.a.createElement("time", {
        className: "education-date",
        dateTime: "2014-01T2016-03"
      }, external_react_default.a.createElement("span", null, "Jan ", external_react_default.a.createElement("strong", {
        className: "text-upper"
      }, "2014"), " - Mar ", external_react_default.a.createElement("strong", null, "2016"))), external_react_default.a.createElement("div", {
        className: "education-logo"
      }, external_react_default.a.createElement("img", {
        src: "/static/media/capptions.svg",
        alt: "capptions"
      })), external_react_default.a.createElement("span", {
        className: "education-company"
      }, "Front-end developers"), external_react_default.a.createElement("p", null, "Your brand is the core of your marketing, the central theme around your products and services. Your brand is not your Logo or your Company Name")), external_react_default.a.createElement("div", {
        className: "education-box"
      }, external_react_default.a.createElement("time", {
        className: "education-date",
        dateTime: "2014-01T2016-03"
      }, external_react_default.a.createElement("span", null, "Jan ", external_react_default.a.createElement("strong", {
        className: "text-upper"
      }, "2014"), " - Mar ", external_react_default.a.createElement("strong", null, "2016"))), external_react_default.a.createElement("div", {
        className: "education-logo"
      }, external_react_default.a.createElement("img", {
        src: "/static/media/tappan.svg",
        alt: "Tappan"
      })), external_react_default.a.createElement("span", {
        className: "education-company"
      }, "Front-end developers"), external_react_default.a.createElement("p", null, "Your brand is the core of your marketing, the central theme around your products and services.")), external_react_default.a.createElement("div", {
        className: "education-box"
      }, external_react_default.a.createElement("time", {
        className: "education-date",
        dateTime: "2014-01T2016-03"
      }, external_react_default.a.createElement("span", null, "Jan ", external_react_default.a.createElement("strong", {
        className: "text-upper"
      }, "2014"), " - Mar ", external_react_default.a.createElement("strong", null, "2016"))), external_react_default.a.createElement("div", {
        className: "education-logo"
      }, external_react_default.a.createElement("img", {
        src: "/static/media/yorcom.png",
        alt: "Yorcom"
      })), external_react_default.a.createElement("span", {
        className: "education-company"
      }, "Front-end developers"), external_react_default.a.createElement("p", null, "Your brand is the core of your marketing, the central theme around your products and services."))))), external_react_default.a.createElement(external_react_scroll_["Element"], {
        name: "portfolio",
        className: "element"
      }, external_react_default.a.createElement(external_reactstrap_["Jumbotron"], {
        className: "mt-4 mt-lg-0 jumbotron bg-mineshaft rounded-0 box-shadow-block"
      }, external_react_default.a.createElement("h2", {
        className: "display-4"
      }, "Hello, world!"), external_react_default.a.createElement("p", {
        className: "lead"
      }, "This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information."), external_react_default.a.createElement("hr", {
        className: "my-2"
      }), external_react_default.a.createElement("p", null, "It uses utility classes for typography and spacing to space content out within the larger container."))), external_react_default.a.createElement(external_react_scroll_["Element"], {
        name: "references",
        className: "element"
      }, external_react_default.a.createElement(external_reactstrap_["Jumbotron"], {
        className: "mt-4 mt-lg-0 jumbotron bg-mineshaft rounded-0 box-shadow-block"
      }, external_react_default.a.createElement("h2", {
        className: "display-4"
      }, "Hello, world!"), external_react_default.a.createElement("p", {
        className: "lead"
      }, "This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information."), external_react_default.a.createElement("hr", {
        className: "my-2"
      }), external_react_default.a.createElement("p", null, "It uses utility classes for typography and spacing to space content out within the larger container."))), external_react_default.a.createElement(external_react_scroll_["Element"], {
        name: "contact",
        className: "element"
      }, external_react_default.a.createElement(external_reactstrap_["Jumbotron"], {
        className: "mt-4 mt-lg-0 jumbotron bg-mineshaft rounded-0 box-shadow-block"
      }, external_react_default.a.createElement("h2", {
        className: "display-4"
      }, "Hello, world!"), external_react_default.a.createElement("p", {
        className: "lead"
      }, "This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information."), external_react_default.a.createElement("hr", {
        className: "my-2"
      }), external_react_default.a.createElement("p", null, "It uses utility classes for typography and spacing to space content out within the larger container."))));
    }
  }]);

  return JumbotronMineshaft;
}(external_react_["Component"]);

/* harmony default export */ var Jumbotron = (Jumbotron_JumbotronMineshaft);
// CONCATENATED MODULE: ./components/Sticky.js










var Sticky_Sticky =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(Sticky, _Component);

  function Sticky() {
    Object(classCallCheck["a" /* default */])(this, Sticky);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Sticky).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(Sticky, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", {
        className: "col-12 col-lg-1 order-1 order-lg-3 nav-sticky"
      }, external_react_default.a.createElement("ul", {
        className: "list-unstyled text-center",
        id: "mainNav"
      }, external_react_default.a.createElement("li", {
        className: "py-4 py-lg-0 pb-0 pb-lg-4 mx-3 mx-lg-0"
      }, external_react_default.a.createElement("a", {
        href: "#home",
        className: "ripple"
      }, external_react_default.a.createElement("img", {
        className: "rounded-circle",
        src: "/static/media/moustafa-omar.jpg",
        width: "50",
        height: "50"
      }))), external_react_default.a.createElement("li", {
        className: "py-4 mx-3 mx-lg-0"
      }, external_react_default.a.createElement(external_react_scroll_["Link"], {
        id: "Experience",
        activeClass: "active",
        className: "work-experience",
        to: "work-experience",
        spy: true,
        smooth: true,
        duration: 500
      }, external_react_default.a.createElement("img", {
        className: "ripple",
        src: "/static/media/briefcase.svg",
        width: "40",
        height: "40"
      }), external_react_default.a.createElement(external_reactstrap_["UncontrolledTooltip"], {
        placement: "right",
        target: "Experience"
      }, "Experience"))), external_react_default.a.createElement("li", {
        className: "py-4 mx-3 mx-lg-0"
      }, external_react_default.a.createElement(external_react_scroll_["Link"], {
        id: "Portfolio",
        activeClass: "active",
        className: "portfolio",
        to: "portfolio",
        spy: true,
        smooth: true,
        duration: 500
      }, external_react_default.a.createElement("img", {
        src: "/static/media/pencil-case.svg",
        width: "40",
        height: "40"
      }), external_react_default.a.createElement(external_reactstrap_["UncontrolledTooltip"], {
        placement: "right",
        target: "Portfolio"
      }, "Portfolio"))), external_react_default.a.createElement("li", {
        className: "py-4 mx-3 mx-lg-0"
      }, external_react_default.a.createElement(external_react_scroll_["Link"], {
        id: "References",
        activeClass: "active",
        className: "references",
        to: "references",
        spy: true,
        smooth: true,
        duration: 500
      }, external_react_default.a.createElement("img", {
        src: "/static/media/quotation.svg",
        width: "40",
        height: "40"
      }), external_react_default.a.createElement(external_reactstrap_["UncontrolledTooltip"], {
        placement: "right",
        target: "References"
      }, "References"))), external_react_default.a.createElement("li", {
        className: "py-4 mx-3 mx-lg-0"
      }, external_react_default.a.createElement(external_react_scroll_["Link"], {
        id: "Contact",
        activeClass: "active",
        className: "contact",
        to: "contact",
        spy: true,
        smooth: true,
        duration: 500
      }, external_react_default.a.createElement("img", {
        src: "/static/media/letters.svg",
        width: "40",
        height: "40"
      }), external_react_default.a.createElement(external_reactstrap_["UncontrolledTooltip"], {
        placement: "right",
        target: "Contact"
      }, "Contact")))));
    }
  }]);

  return Sticky;
}(external_react_["Component"]);

/* harmony default export */ var components_Sticky = (Sticky_Sticky);
// CONCATENATED MODULE: ./components/Footer.js








var Footer_Footer =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(Footer, _Component);

  function Footer() {
    Object(classCallCheck["a" /* default */])(this, Footer);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Footer).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(Footer, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", {
        className: "container"
      }, external_react_default.a.createElement("div", {
        className: "row"
      }, external_react_default.a.createElement("div", {
        className: "col-12"
      }, external_react_default.a.createElement("div", {
        className: "text-center copyright"
      }, "\xA9 ", new Date().getFullYear(), " infinitydesigns.nl"))));
    }
  }]);

  return Footer;
}(external_react_["Component"]);

/* harmony default export */ var components_Footer = (Footer_Footer);
// CONCATENATED MODULE: ./pages/index.js


function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  overflow: hidden;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}











/* harmony default export */ var pages = __webpack_exports__["default"] = (function () {
  return external_react_default.a.createElement(StyledWrapper, null, external_react_default.a.createElement(components_Header, null), external_react_default.a.createElement(Navbar_NavbarMineshaft, null), external_react_default.a.createElement("div", {
    className: "py-5"
  }, external_react_default.a.createElement("div", {
    className: "container mt-5 pt-5"
  }, external_react_default.a.createElement("div", {
    className: "row"
  }, external_react_default.a.createElement(components_Sidebar, null), external_react_default.a.createElement(Jumbotron, null), external_react_default.a.createElement(components_Sticky, null)))), external_react_default.a.createElement(components_Footer, null));
});
var StyledWrapper = external_styled_components_default.a.div(_templateObject());

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "TRZx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "Tit0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/create.js
var create = __webpack_require__("SqZg");
var create_default = /*#__PURE__*/__webpack_require__.n(create);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js
var set_prototype_of = __webpack_require__("TRZx");
var set_prototype_of_default = /*#__PURE__*/__webpack_require__.n(set_prototype_of);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js

function _setPrototypeOf(o, p) {
  _setPrototypeOf = set_prototype_of_default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inherits; });


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = create_default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

/***/ }),

/***/ "UVoM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "a7VT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Bhuq");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TRZx");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "faye":
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "h1YJ":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ExpansionPanelDetails");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "ltjX":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "oL/c":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "sLSF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "vYYK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });