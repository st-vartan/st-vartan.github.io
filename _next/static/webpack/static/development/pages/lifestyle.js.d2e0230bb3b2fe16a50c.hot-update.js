webpackHotUpdate("static/development/pages/lifestyle.js",{

/***/ "./components/util/magnificPopup.js":
/*!******************************************!*\
  !*** ./components/util/magnificPopup.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/bigfatdog/open-source/st-vartan-website/components/util/magnificPopup.js";



var magnificPopup = function magnificPopup(_ref) {
  var data = _ref.data;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    $(".lightbox").magnificPopup({
      type: 'image',
      gallery: {
        enabled: true
      },
      mainClass: 'mfp-fade',
      image: {
        titleSrc: 'title'
      }
    });
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container relative",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row multi-columns-row mb-xs-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, data.map(function (_ref2, i) {
    var thumbnail = _ref2.thumbnail,
        caption = _ref2.caption,
        source = _ref2.source;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-md-3 col-lg-3 mb-md-10  mb-30",
      key: source + i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "post-prev-img lightbox",
      href: source,
      title: caption,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      style: {
        cursor: 'pointer'
      },
      src: thumbnail,
      alt: caption,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    })));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (magnificPopup);

/***/ })

})
//# sourceMappingURL=lifestyle.js.d2e0230bb3b2fe16a50c.hot-update.js.map