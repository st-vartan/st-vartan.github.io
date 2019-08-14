webpackHotUpdate(1,{

/***/ "./components/nav/menuSideEffects.js":
/*!*******************************************!*\
  !*** ./components/nav/menuSideEffects.js ***!
  \*******************************************/
/*! exports provided: default, init_classic_menu, init_classic_menu_resize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init_classic_menu", function() { return init_classic_menu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init_classic_menu_resize", function() { return init_classic_menu_resize; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _easing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./easing */ "./components/nav/easing.js");

 // Function for block height 100%

var height_line = function height_line(height_object, height_donor) {
  height_object.height(height_donor.height());
  height_object.css({
    'line-height': height_donor.height() + 'px'
  });
};

var init_classic_menu = function init_classic_menu() {
  var mobile_nav = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.mobile-nav');
  var desktop_nav = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.desktop-nav');
  height_line(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.inner-nav > ul > li > a'), jquery__WEBPACK_IMPORTED_MODULE_0___default()('.main-nav'));
  height_line(mobile_nav, jquery__WEBPACK_IMPORTED_MODULE_0___default()('.main-nav'));
  mobile_nav.css({
    width: jquery__WEBPACK_IMPORTED_MODULE_0___default()('.main-nav').height() + 'px'
  }); // Transpaner menu

  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.main-nav').hasClass('transparent')) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.main-nav').addClass('js-transparent');
  }

  jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scroll(function () {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop() > 10) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-transparent').removeClass('transparent');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.main-nav, .nav-logo-wrap .logo, .mobile-nav').addClass('small-height');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-transparent').addClass('transparent');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.main-nav, .nav-logo-wrap .logo, .mobile-nav').removeClass('small-height');
    }
  }); // Mobile menu toggle

  mobile_nav.click(function () {
    if (desktop_nav.hasClass('js-opened')) {
      desktop_nav.slideUp('slow', 'easeOutExpo').removeClass('js-opened');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).removeClass('active');
    } else {
      desktop_nav.slideDown('slow', 'easeOutQuart').addClass('js-opened');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('active'); // Fix for responsive menu

      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.main-nav').hasClass('not-top')) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTo('.main-nav', 'slow');
      }
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.desktop-nav').find('a:not(.mn-has-sub)').click(function () {
    if (mobile_nav.hasClass('active')) {
      desktop_nav.slideUp('slow', 'easeOutExpo').removeClass('js-opened');
      mobile_nav.removeClass('active');
    }
  }); // Sub menu

  var mnHasSub = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.mn-has-sub');
  var mnThisLi;
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.mobile-on .mn-has-sub').find('.fa:first').removeClass('fa-angle-right').addClass('fa-angle-down');
  mnHasSub.click(function () {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.main-nav').hasClass('mobile-on')) {
      mnThisLi = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent('li:first');

      if (mnThisLi.hasClass('js-opened')) {
        mnThisLi.find('.mn-sub:first').slideUp(function () {
          mnThisLi.removeClass('js-opened');
          mnThisLi.find('.mn-has-sub').find('.fa:first').removeClass('fa-angle-up').addClass('fa-angle-down');
        });
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('.fa:first').removeClass('fa-angle-down').addClass('fa-angle-up');
        mnThisLi.addClass('js-opened');
        mnThisLi.find('.mn-sub:first').slideDown();
      }

      return false;
    } else {}
  });
  mnThisLi = mnHasSub.parent('li');
  mnThisLi.hover(function () {
    if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('.main-nav').hasClass('mobile-on')) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('.mn-sub:first').stop(true, true).fadeIn('fast');
    }
  }, function () {
    if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('.main-nav').hasClass('mobile-on')) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('.mn-sub:first').stop(true, true).delay(100).fadeOut('fast');
    }
  });
  /* Keyboard navigation for main menu */

  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.inner-nav a').focus(function () {
    if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('.main-nav').hasClass('mobile-on')) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent('li').parent().children().find('.mn-sub:first').stop(true, true).delay(100).fadeOut('fast');
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.inner-nav a').first().keydown(function (e) {
    if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('.main-nav').hasClass('mobile-on')) {
      if (e.shiftKey && e.keyCode == 9) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent('li').find('.mn-sub:first').stop(true, true).delay(100).fadeOut('fast');
      }
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.mn-sub li:last a').keydown(function (e) {
    if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('.main-nav').hasClass('mobile-on')) {
      if (!e.shiftKey && e.keyCode == 9) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent('li').parent().stop(true, true).delay(100).fadeOut('fast');
      }
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).keydown(function (e) {
    if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('.main-nav').hasClass('mobile-on')) {
      if (e.keyCode == 27) {
        if (mnHasSub.parent('li').find('.mn-sub:first li .mn-sub').is(':visible')) {
          mnHasSub.parent('li').find('.mn-sub:first li .mn-sub').stop(true, true).delay(100).fadeOut('fast');
        } else {
          mnHasSub.parent('li').find('.mn-sub:first').stop(true, true).delay(100).fadeOut('fast');
        }
      }
    }
  });
  mnHasSub.focus(function () {
    if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('.main-nav').hasClass('mobile-on')) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent('li').find('.mn-sub:first').stop(true, true).fadeIn('fast');
    }
  });
};

var init_classic_menu_resize = function init_classic_menu_resize() {
  // Mobile menu max height
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.mobile-on .desktop-nav > ul').css('max-height', jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height() - jquery__WEBPACK_IMPORTED_MODULE_0___default()('.main-nav').height() - 20 + 'px'); // Mobile menu style toggle

  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width() <= 1024) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.main-nav').addClass('mobile-on');
  } else if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width() > 1024) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.main-nav').removeClass('mobile-on');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.desktop-nav').show();
  }
};

var menuSideEffects = function menuSideEffects() {
  if ( false || typeof document === 'undefined') {
    return;
  }

  if (!jquery__WEBPACK_IMPORTED_MODULE_0___default.a.easing.easeInCubic) {
    Object(_easing__WEBPACK_IMPORTED_MODULE_1__["default"])(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);
  } //


  jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).resize(function () {
    init_classic_menu_resize();
  });

  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').hasClass('mobile')) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').addClass('mobile');
    }
  } else {
    if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').hasClass('no-mobile')) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').addClass('no-mobile');
    }
  }

  if (!('ontouchstart' in document.documentElement)) {
    if (!document.documentElement.className.includes('no-touch')) {
      document.documentElement.className += ' no-touch';
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (menuSideEffects);


/***/ })

})
//# sourceMappingURL=1.05301016201a45a4d560.hot-update.js.map