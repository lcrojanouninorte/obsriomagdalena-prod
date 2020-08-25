(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-obs-obs-module~pages-pages-module"],{

/***/ "./node_modules/ngx-lightbox/__ivy_ngcc__/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/ngx-lightbox/__ivy_ngcc__/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var lightbox_service_1 = __webpack_require__(/*! ./lightbox.service */ "./node_modules/ngx-lightbox/__ivy_ngcc__/lightbox.service.js");

exports.Lightbox = lightbox_service_1.Lightbox;

var lightbox_config_service_1 = __webpack_require__(/*! ./lightbox-config.service */ "./node_modules/ngx-lightbox/__ivy_ngcc__/lightbox-config.service.js");

exports.LightboxConfig = lightbox_config_service_1.LightboxConfig;

var lightbox_event_service_1 = __webpack_require__(/*! ./lightbox-event.service */ "./node_modules/ngx-lightbox/__ivy_ngcc__/lightbox-event.service.js");

exports.LightboxEvent = lightbox_event_service_1.LightboxEvent;
exports.LIGHTBOX_EVENT = lightbox_event_service_1.LIGHTBOX_EVENT;

var lightbox_module_1 = __webpack_require__(/*! ./lightbox.module */ "./node_modules/ngx-lightbox/__ivy_ngcc__/lightbox.module.js");

exports.LightboxModule = lightbox_module_1.LightboxModule;

/***/ }),

/***/ "./node_modules/ngx-lightbox/__ivy_ngcc__/lightbox-config.service.js":
/*!***************************************************************************!*\
  !*** ./node_modules/ngx-lightbox/__ivy_ngcc__/lightbox-config.service.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ɵngcc0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = this && this.__metadata || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

var LightboxConfig =
/** @class */
function () {
  function LightboxConfig() {
    this.fadeDuration = 0.7;
    this.resizeDuration = 0.5;
    this.fitImageInViewPort = true;
    this.positionFromTop = 20;
    this.showImageNumberLabel = false;
    this.alwaysShowNavOnTouchDevices = false;
    this.wrapAround = false;
    this.disableKeyboardNav = false;
    this.disableScrolling = false;
    this.centerVertically = false;
    this.enableTransition = true;
    this.albumLabel = 'Image %1 of %2';
    this.showZoom = false;
    this.showRotation = false;
  }

  LightboxConfig = __decorate([__metadata("design:paramtypes", [])], LightboxConfig);

  LightboxConfig.ɵfac = function LightboxConfig_Factory(t) {
    return new (t || LightboxConfig)();
  };

  LightboxConfig.ɵprov = ɵngcc0.ɵɵdefineInjectable({
    token: LightboxConfig,
    factory: function factory(t) {
      return LightboxConfig.ɵfac(t);
    }
  });
  /*@__PURE__*/

  (function () {
    ɵngcc0.ɵsetClassMetadata(LightboxConfig, [{
      type: core_1.Injectable
    }], function () {
      return [];
    }, null);
  })();

  return LightboxConfig;
}();

exports.LightboxConfig = LightboxConfig;

/***/ }),

/***/ "./node_modules/ngx-lightbox/__ivy_ngcc__/lightbox-event.service.js":
/*!**************************************************************************!*\
  !*** ./node_modules/ngx-lightbox/__ivy_ngcc__/lightbox-event.service.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ɵngcc0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = this && this.__metadata || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");

var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

exports.LIGHTBOX_EVENT = {
  CHANGE_PAGE: 1,
  CLOSE: 2,
  OPEN: 3,
  ZOOM_IN: 4,
  ZOOM_OUT: 5,
  ROTATE_LEFT: 6,
  ROTATE_RIGHT: 7
};

var LightboxEvent =
/** @class */
function () {
  function LightboxEvent() {
    this._lightboxEventSource = new rxjs_1.Subject();
    this.lightboxEvent$ = this._lightboxEventSource.asObservable();
  }

  LightboxEvent.prototype.broadcastLightboxEvent = function (event) {
    this._lightboxEventSource.next(event);
  };

  LightboxEvent = __decorate([__metadata("design:paramtypes", [])], LightboxEvent);

  LightboxEvent.ɵfac = function LightboxEvent_Factory(t) {
    return new (t || LightboxEvent)();
  };

  LightboxEvent.ɵprov = ɵngcc0.ɵɵdefineInjectable({
    token: LightboxEvent,
    factory: function factory(t) {
      return LightboxEvent.ɵfac(t);
    }
  });
  /*@__PURE__*/

  (function () {
    ɵngcc0.ɵsetClassMetadata(LightboxEvent, [{
      type: core_1.Injectable
    }], function () {
      return [];
    }, null);
  })();

  return LightboxEvent;
}();

exports.LightboxEvent = LightboxEvent;

function getWindow() {
  return window;
}

var LightboxWindowRef =
/** @class */
function () {
  function LightboxWindowRef() {}

  Object.defineProperty(LightboxWindowRef.prototype, "nativeWindow", {
    get: function get() {
      return getWindow();
    },
    enumerable: true,
    configurable: true
  });

  LightboxWindowRef.ɵfac = function LightboxWindowRef_Factory(t) {
    return new (t || LightboxWindowRef)();
  };

  LightboxWindowRef.ɵprov = ɵngcc0.ɵɵdefineInjectable({
    token: LightboxWindowRef,
    factory: function factory(t) {
      return LightboxWindowRef.ɵfac(t);
    }
  });
  /*@__PURE__*/

  (function () {
    ɵngcc0.ɵsetClassMetadata(LightboxWindowRef, [{
      type: core_1.Injectable
    }], function () {
      return [];
    }, null);
  })();

  return LightboxWindowRef;
}();

exports.LightboxWindowRef = LightboxWindowRef;

/***/ }),

/***/ "./node_modules/ngx-lightbox/__ivy_ngcc__/lightbox-overlay.component.js":
/*!******************************************************************************!*\
  !*** ./node_modules/ngx-lightbox/__ivy_ngcc__/lightbox-overlay.component.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ɵngcc0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

var _c0 = ["lb-overlay", ""];

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = this && this.__metadata || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

var lightbox_event_service_1 = __webpack_require__(/*! ./lightbox-event.service */ "./node_modules/ngx-lightbox/__ivy_ngcc__/lightbox-event.service.js");

var LightboxOverlayComponent =
/** @class */
function () {
  function LightboxOverlayComponent(_elemRef, _rendererRef, _lightboxEvent) {
    var _this = this;

    this._elemRef = _elemRef;
    this._rendererRef = _rendererRef;
    this._lightboxEvent = _lightboxEvent;
    this.classList = 'lightboxOverlay animation fadeInOverlay';
    this._subscription = this._lightboxEvent.lightboxEvent$.subscribe(function (event) {
      return _this._onReceivedEvent(event);
    });
    this._documentRef = window.document;
  }

  LightboxOverlayComponent.prototype.close = function () {
    // broadcast to itself and all others subscriber including the components
    this._lightboxEvent.broadcastLightboxEvent({
      id: lightbox_event_service_1.LIGHTBOX_EVENT.CLOSE,
      data: null
    });
  };

  LightboxOverlayComponent.prototype.ngAfterViewInit = function () {
    var fadeDuration = this.options.fadeDuration;

    this._rendererRef.setStyle(this._elemRef.nativeElement, '-webkit-animation-duration', fadeDuration + "s");

    this._rendererRef.setStyle(this._elemRef.nativeElement, 'animation-duration', fadeDuration + "s");

    this._sizeOverlay();
  };

  LightboxOverlayComponent.prototype.onResize = function () {
    this._sizeOverlay();
  };

  LightboxOverlayComponent.prototype.ngOnDestroy = function () {
    this._subscription.unsubscribe();
  };

  LightboxOverlayComponent.prototype._sizeOverlay = function () {
    var width = this._getOverlayWidth();

    var height = this._getOverlayHeight();

    this._rendererRef.setStyle(this._elemRef.nativeElement, 'width', width + "px");

    this._rendererRef.setStyle(this._elemRef.nativeElement, 'height', height + "px");
  };

  LightboxOverlayComponent.prototype._onReceivedEvent = function (event) {
    switch (event.id) {
      case lightbox_event_service_1.LIGHTBOX_EVENT.CLOSE:
        this._end();

        break;

      default:
        break;
    }
  };

  LightboxOverlayComponent.prototype._end = function () {
    var _this = this;

    this.classList = 'lightboxOverlay animation fadeOutOverlay'; // queue self destruction after the animation has finished
    // FIXME: not sure if there is any way better than this

    setTimeout(function () {
      _this.cmpRef.destroy();
    }, this.options.fadeDuration * 1000);
  };

  LightboxOverlayComponent.prototype._getOverlayWidth = function () {
    return Math.max(this._documentRef.body.scrollWidth, this._documentRef.body.offsetWidth, this._documentRef.documentElement.clientWidth, this._documentRef.documentElement.scrollWidth, this._documentRef.documentElement.offsetWidth);
  };

  LightboxOverlayComponent.prototype._getOverlayHeight = function () {
    return Math.max(this._documentRef.body.scrollHeight, this._documentRef.body.offsetHeight, this._documentRef.documentElement.clientHeight, this._documentRef.documentElement.scrollHeight, this._documentRef.documentElement.offsetHeight);
  };

  __decorate([core_1.Input(), __metadata("design:type", Object)], LightboxOverlayComponent.prototype, "options", void 0);

  __decorate([core_1.Input(), __metadata("design:type", Object)], LightboxOverlayComponent.prototype, "cmpRef", void 0);

  __decorate([core_1.HostListener('click'), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", void 0)], LightboxOverlayComponent.prototype, "close", null);

  __decorate([core_1.HostListener('window:resize'), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", void 0)], LightboxOverlayComponent.prototype, "onResize", null);

  LightboxOverlayComponent = __decorate([__metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer2, lightbox_event_service_1.LightboxEvent])], LightboxOverlayComponent);

  LightboxOverlayComponent.ɵfac = function LightboxOverlayComponent_Factory(t) {
    return new (t || LightboxOverlayComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(lightbox_event_service_1.LightboxEvent));
  };

  LightboxOverlayComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({
    type: LightboxOverlayComponent,
    selectors: [["", "lb-overlay", ""]],
    hostVars: 2,
    hostBindings: function LightboxOverlayComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function LightboxOverlayComponent_click_HostBindingHandler() {
          return ctx.close();
        })("resize", function LightboxOverlayComponent_resize_HostBindingHandler() {
          return ctx.onResize();
        }, false, ɵngcc0.ɵɵresolveWindow);
      }

      if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.classList);
      }
    },
    inputs: {
      options: "options",
      cmpRef: "cmpRef"
    },
    attrs: _c0,
    decls: 0,
    vars: 0,
    template: function LightboxOverlayComponent_Template(rf, ctx) {},
    encapsulation: 2
  });
  /*@__PURE__*/

  (function () {
    ɵngcc0.ɵsetClassMetadata(LightboxOverlayComponent, [{
      type: core_1.Component,
      args: [{
        selector: '[lb-overlay]',
        template: '',
        host: {
          '[class]': 'classList'
        }
      }]
    }], function () {
      return [{
        type: ɵngcc0.ElementRef
      }, {
        type: ɵngcc0.Renderer2
      }, {
        type: lightbox_event_service_1.LightboxEvent
      }];
    }, {
      close: [{
        type: core_1.HostListener,
        args: ['click']
      }],
      onResize: [{
        type: core_1.HostListener,
        args: ['window:resize']
      }],
      options: [{
        type: core_1.Input
      }],
      cmpRef: [{
        type: core_1.Input
      }]
    });
  })();

  return LightboxOverlayComponent;
}();

exports.LightboxOverlayComponent = LightboxOverlayComponent;

/***/ }),

/***/ "./node_modules/ngx-lightbox/__ivy_ngcc__/lightbox.component.js":
/*!**********************************************************************!*\
  !*** ./node_modules/ngx-lightbox/__ivy_ngcc__/lightbox.component.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ɵngcc0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

var ɵngcc1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

var _c0 = ["outerContainer"];
var _c1 = ["container"];
var _c2 = ["leftArrow"];
var _c3 = ["rightArrow"];
var _c4 = ["navArrow"];
var _c5 = ["dataContainer"];
var _c6 = ["image"];
var _c7 = ["caption"];
var _c8 = ["number"];
var _c9 = ["lb-content", ""];

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = this && this.__metadata || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

var lightbox_event_service_1 = __webpack_require__(/*! ./lightbox-event.service */ "./node_modules/ngx-lightbox/__ivy_ngcc__/lightbox-event.service.js");

var LightboxComponent =
/** @class */
function () {
  function LightboxComponent(_elemRef, _rendererRef, _lightboxEvent, _lightboxElem, _lightboxWindowRef, _sanitizer) {
    var _this = this;

    this._elemRef = _elemRef;
    this._rendererRef = _rendererRef;
    this._lightboxEvent = _lightboxEvent;
    this._lightboxElem = _lightboxElem;
    this._lightboxWindowRef = _lightboxWindowRef;
    this._sanitizer = _sanitizer; // initialize data

    this.options = this.options || {};
    this.album = this.album || [];
    this.currentImageIndex = this.currentImageIndex || 0;
    this._windowRef = this._lightboxWindowRef.nativeWindow; // control the interactive of the directive

    this.ui = {
      // control the appear of the reloader
      // false: image has loaded completely and ready to be shown
      // true: image is still loading
      showReloader: true,
      // control the appear of the nav arrow
      // the arrowNav is the parent of both left and right arrow
      // in some cases, the parent shows but the child does not show
      showLeftArrow: false,
      showRightArrow: false,
      showArrowNav: false,
      //control the appear of the zoom and rotate buttons
      showZoomButton: false,
      showRotateButton: false,
      // control whether to show the
      // page number or not
      showPageNumber: false,
      showCaption: false,
      classList: 'lightbox animation fadeIn'
    };
    this.content = {
      pageNumber: ''
    };
    this._event = {};
    this._lightboxElem = this._elemRef;
    this._event.subscription = this._lightboxEvent.lightboxEvent$.subscribe(function (event) {
      return _this._onReceivedEvent(event);
    });
    this._documentRef = window.document;
    this.rotate = 0;
  }

  LightboxComponent.prototype.ngOnInit = function () {
    var _this = this;

    this.album.forEach(function (album) {
      if (album.caption) {
        album.caption = _this._sanitizer.sanitize(core_1.SecurityContext.HTML, album.caption);
      }
    });
  };

  LightboxComponent.prototype.ngAfterViewInit = function () {
    // need to init css value here, after the view ready
    // actually these values are always 0
    this._cssValue = {
      containerTopPadding: Math.round(this._getCssStyleValue(this._containerElem, 'padding-top')),
      containerRightPadding: Math.round(this._getCssStyleValue(this._containerElem, 'padding-right')),
      containerBottomPadding: Math.round(this._getCssStyleValue(this._containerElem, 'padding-bottom')),
      containerLeftPadding: Math.round(this._getCssStyleValue(this._containerElem, 'padding-left')),
      imageBorderWidthTop: Math.round(this._getCssStyleValue(this._imageElem, 'border-top-width')),
      imageBorderWidthBottom: Math.round(this._getCssStyleValue(this._imageElem, 'border-bottom-width')),
      imageBorderWidthLeft: Math.round(this._getCssStyleValue(this._imageElem, 'border-left-width')),
      imageBorderWidthRight: Math.round(this._getCssStyleValue(this._imageElem, 'border-right-width'))
    };

    if (this._validateInputData()) {
      this._prepareComponent();

      this._registerImageLoadingEvent();
    }
  };

  LightboxComponent.prototype.ngOnDestroy = function () {
    if (!this.options.disableKeyboardNav) {
      // unbind keyboard event
      this._disableKeyboardNav();
    }

    this._event.subscription.unsubscribe();
  };

  LightboxComponent.prototype.close = function ($event) {
    $event.stopPropagation();

    if ($event.target.classList.contains('lightbox') || $event.target.classList.contains('lb-loader') || $event.target.classList.contains('lb-close')) {
      this._lightboxEvent.broadcastLightboxEvent({
        id: lightbox_event_service_1.LIGHTBOX_EVENT.CLOSE,
        data: null
      });
    }
  };

  LightboxComponent.prototype.control = function ($event) {
    $event.stopPropagation();

    if ($event.target.classList.contains('lb-turnLeft')) {
      this.rotate = this.rotate - 90;

      this._rotateContainer();

      this._calcTransformPoint();

      document.getElementById('image').style.transform = "rotate(" + this.rotate + "deg)";
      document.getElementById('image').style.webkitTransform = "rotate(" + this.rotate + "deg)";

      this._lightboxEvent.broadcastLightboxEvent({
        id: lightbox_event_service_1.LIGHTBOX_EVENT.ROTATE_LEFT,
        data: null
      });
    } else if ($event.target.classList.contains('lb-turnRight')) {
      this.rotate = this.rotate + 90;

      this._rotateContainer();

      this._calcTransformPoint();

      document.getElementById('image').style.transform = "rotate(" + this.rotate + "deg)";
      document.getElementById('image').style.webkitTransform = "rotate(" + this.rotate + "deg)";

      this._lightboxEvent.broadcastLightboxEvent({
        id: lightbox_event_service_1.LIGHTBOX_EVENT.ROTATE_RIGHT,
        data: null
      });
    } else if ($event.target.classList.contains('lb-zoomOut')) {
      var height = parseInt(document.getElementById('outerContainer').style.height) / 1.5;
      var width = parseInt(document.getElementById('outerContainer').style.width) / 1.5;
      document.getElementById('outerContainer').style.height = height + "px";
      document.getElementById('outerContainer').style.width = width + "px";
      var height = parseInt(document.getElementById('image').style.height) / 1.5;
      var width = parseInt(document.getElementById('image').style.width) / 1.5;
      document.getElementById('image').style.height = height + "px";
      document.getElementById('image').style.width = width + "px";

      this._lightboxEvent.broadcastLightboxEvent({
        id: lightbox_event_service_1.LIGHTBOX_EVENT.ZOOM_OUT,
        data: null
      });
    } else if ($event.target.classList.contains('lb-zoomIn')) {
      var height = parseInt(document.getElementById('outerContainer').style.height) * 1.5;
      var width = parseInt(document.getElementById('outerContainer').style.width) * 1.5;
      document.getElementById('outerContainer').style.height = height + "px";
      document.getElementById('outerContainer').style.width = width + "px";
      var height = parseInt(document.getElementById('image').style.height) * 1.5;
      var width = parseInt(document.getElementById('image').style.width) * 1.5;
      document.getElementById('image').style.height = height + "px";
      document.getElementById('image').style.width = width + "px";

      this._lightboxEvent.broadcastLightboxEvent({
        id: lightbox_event_service_1.LIGHTBOX_EVENT.ZOOM_IN,
        data: null
      });
    }
  };

  LightboxComponent.prototype._rotateContainer = function () {
    var temp = this.rotate;
    if (temp < 0) temp *= -1;

    if (temp / 90 % 4 == 1 || temp / 90 % 4 == 3) {
      document.getElementById('outerContainer').style.height = document.getElementById('image').style.width;
      document.getElementById('outerContainer').style.width = document.getElementById('image').style.height;
      document.getElementById('container').style.height = document.getElementById('image').style.width;
      document.getElementById('container').style.width = document.getElementById('image').style.height;
    } else {
      document.getElementById('outerContainer').style.height = document.getElementById('image').style.height;
      document.getElementById('outerContainer').style.width = document.getElementById('image').style.width;
      document.getElementById('container').style.height = document.getElementById('image').style.width;
      document.getElementById('container').style.width = document.getElementById('image').style.height;
    }
  };

  LightboxComponent.prototype._resetImage = function () {
    this.rotate = 0;
    document.getElementById('image').style.transform = "rotate(" + this.rotate + "deg)";
    document.getElementById('image').style.webkitTransform = "rotate(" + this.rotate + "deg)";
  };

  LightboxComponent.prototype._calcTransformPoint = function () {
    var height = parseInt(document.getElementById('image').style.height);
    var width = parseInt(document.getElementById('image').style.width);
    var temp = this.rotate % 360;
    if (temp < 0) temp = 360 + temp;
    if (temp == 90) document.getElementById('image').style.transformOrigin = height / 2 + "px " + height / 2 + "px";else if (temp == 180) document.getElementById('image').style.transformOrigin = width / 2 + "px " + height / 2 + "px";else if (temp == 270) document.getElementById('image').style.transformOrigin = width / 2 + "px " + width / 2 + "px";
  };

  LightboxComponent.prototype.nextImage = function () {
    if (this.album.length === 1) {
      return;
    } else if (this.currentImageIndex === this.album.length - 1) {
      this._changeImage(0);
    } else {
      this._changeImage(this.currentImageIndex + 1);
    }
  };

  LightboxComponent.prototype.prevImage = function () {
    if (this.album.length === 1) {
      return;
    } else if (this.currentImageIndex === 0 && this.album.length > 1) {
      this._changeImage(this.album.length - 1);
    } else {
      this._changeImage(this.currentImageIndex - 1);
    }
  };

  LightboxComponent.prototype._validateInputData = function () {
    if (this.album && this.album instanceof Array && this.album.length > 0) {
      for (var i = 0; i < this.album.length; i++) {
        // check whether each _nside
        // album has src data or not
        if (this.album[i].src) {
          continue;
        }

        throw new Error('One of the album data does not have source data');
      }
    } else {
      throw new Error('No album data or album data is not correct in type');
    } // to prevent data understand as string
    // convert it to number


    if (isNaN(this.currentImageIndex)) {
      throw new Error('Current image index is not a number');
    } else {
      this.currentImageIndex = Number(this.currentImageIndex);
    }

    return true;
  };

  LightboxComponent.prototype._registerImageLoadingEvent = function () {
    var _this = this;

    var preloader = new Image();

    preloader.onload = function () {
      _this._onLoadImageSuccess();
    };

    var src = this.album[this.currentImageIndex].src;
    preloader.src = this._sanitizer.sanitize(core_1.SecurityContext.URL, src);
  };
  /**
   * Fire when the image is loaded
   */


  LightboxComponent.prototype._onLoadImageSuccess = function () {
    if (!this.options.disableKeyboardNav) {
      // unbind keyboard event during transition
      this._disableKeyboardNav();
    }

    var imageHeight;
    var imageWidth;
    var maxImageHeight;
    var maxImageWidth;
    var windowHeight;
    var windowWidth;
    var naturalImageWidth;
    var naturalImageHeight; // set default width and height of image to be its natural

    imageWidth = naturalImageWidth = this._imageElem.nativeElement.naturalWidth;
    imageHeight = naturalImageHeight = this._imageElem.nativeElement.naturalHeight;

    if (this.options.fitImageInViewPort) {
      windowWidth = this._windowRef.innerWidth;
      windowHeight = this._windowRef.innerHeight;
      maxImageWidth = windowWidth - this._cssValue.containerLeftPadding - this._cssValue.containerRightPadding - this._cssValue.imageBorderWidthLeft - this._cssValue.imageBorderWidthRight - 20;
      maxImageHeight = windowHeight - this._cssValue.containerTopPadding - this._cssValue.containerTopPadding - this._cssValue.imageBorderWidthTop - this._cssValue.imageBorderWidthBottom - 120;

      if (naturalImageWidth > maxImageWidth || naturalImageHeight > maxImageHeight) {
        if (naturalImageWidth / maxImageWidth > naturalImageHeight / maxImageHeight) {
          imageWidth = maxImageWidth;
          imageHeight = Math.round(naturalImageHeight / (naturalImageWidth / imageWidth));
        } else {
          imageHeight = maxImageHeight;
          imageWidth = Math.round(naturalImageWidth / (naturalImageHeight / imageHeight));
        }
      }

      this._rendererRef.setStyle(this._imageElem.nativeElement, 'width', imageWidth + "px");

      this._rendererRef.setStyle(this._imageElem.nativeElement, 'height', imageHeight + "px");
    }

    this._sizeContainer(imageWidth, imageHeight);

    if (this.options.centerVertically) {
      this._centerVertically(imageWidth, imageHeight);
    }
  };

  LightboxComponent.prototype._centerVertically = function (imageWidth, imageHeight) {
    var scrollOffset = this._documentRef.documentElement.scrollTop;
    var windowHeight = this._windowRef.innerHeight;
    var viewOffset = windowHeight / 2 - imageHeight / 2;
    var topDistance = scrollOffset + viewOffset;

    this._rendererRef.setStyle(this._lightboxElem.nativeElement, 'top', topDistance + "px");
  };

  LightboxComponent.prototype._sizeContainer = function (imageWidth, imageHeight) {
    var _this = this;

    var oldWidth = this._outerContainerElem.nativeElement.offsetWidth;
    var oldHeight = this._outerContainerElem.nativeElement.offsetHeight;
    var newWidth = imageWidth + this._cssValue.containerRightPadding + this._cssValue.containerLeftPadding + this._cssValue.imageBorderWidthLeft + this._cssValue.imageBorderWidthRight;
    var newHeight = imageHeight + this._cssValue.containerTopPadding + this._cssValue.containerBottomPadding + this._cssValue.imageBorderWidthTop + this._cssValue.imageBorderWidthBottom; // make sure that distances are large enough for transitionend event to be fired, at least 5px.

    if (Math.abs(oldWidth - newWidth) + Math.abs(oldHeight - newHeight) > 5) {
      this._rendererRef.setStyle(this._outerContainerElem.nativeElement, 'width', newWidth + "px");

      this._rendererRef.setStyle(this._outerContainerElem.nativeElement, 'height', newHeight + "px"); // bind resize event to outer container
      // use enableTransition to prevent infinite loader


      if (this.options.enableTransition) {
        this._event.transitions = [];
        ['transitionend', 'webkitTransitionEnd', 'oTransitionEnd', 'MSTransitionEnd'].forEach(function (eventName) {
          _this._event.transitions.push(_this._rendererRef.listen(_this._outerContainerElem.nativeElement, eventName, function (event) {
            if (event.target === event.currentTarget) {
              _this._postResize(newWidth, newHeight);
            }
          }));
        });
      } else {
        this._postResize(newWidth, newHeight);
      }
    } else {
      this._postResize(newWidth, newHeight);
    }
  };

  LightboxComponent.prototype._postResize = function (newWidth, newHeight) {
    // unbind resize event
    if (Array.isArray(this._event.transitions)) {
      this._event.transitions.forEach(function (eventHandler) {
        eventHandler();
      });

      this._event.transitions = [];
    }

    this._rendererRef.setStyle(this._dataContainerElem.nativeElement, 'width', newWidth + "px");

    this._showImage();
  };

  LightboxComponent.prototype._showImage = function () {
    this.ui.showReloader = false;

    this._updateNav();

    this._updateDetails();

    if (!this.options.disableKeyboardNav) {
      this._enableKeyboardNav();
    }
  };

  LightboxComponent.prototype._prepareComponent = function () {
    // add css3 animation
    this._addCssAnimation(); // position the image according to user's option


    this._positionLightBox(); // update Controls visibility


    this.ui.showZoomButton = this.options.showZoom;
    this.ui.showRotateButton = this.options.showRotate;
  };

  LightboxComponent.prototype._positionLightBox = function () {
    // @see https://stackoverflow.com/questions/3464876/javascript-get-window-x-y-position-for-scroll
    var top = (this._windowRef.pageYOffset || this._documentRef.documentElement.scrollTop) + this.options.positionFromTop;
    var left = this._windowRef.pageXOffset || this._documentRef.documentElement.scrollLeft;

    if (!this.options.centerVertically) {
      this._rendererRef.setStyle(this._lightboxElem.nativeElement, 'top', top + "px");
    }

    this._rendererRef.setStyle(this._lightboxElem.nativeElement, 'left', left + "px");

    this._rendererRef.setStyle(this._lightboxElem.nativeElement, 'display', 'block'); // disable scrolling of the page while open


    if (this.options.disableScrolling) {
      this._rendererRef.addClass(this._documentRef.documentElement, 'lb-disable-scrolling');
    }
  };
  /**
   * addCssAnimation add css3 classes for animate lightbox
   */


  LightboxComponent.prototype._addCssAnimation = function () {
    var resizeDuration = this.options.resizeDuration;
    var fadeDuration = this.options.fadeDuration;

    this._rendererRef.setStyle(this._lightboxElem.nativeElement, '-webkit-animation-duration', fadeDuration + "s");

    this._rendererRef.setStyle(this._lightboxElem.nativeElement, 'animation-duration', fadeDuration + "s");

    this._rendererRef.setStyle(this._outerContainerElem.nativeElement, '-webkit-transition-duration', resizeDuration + "s");

    this._rendererRef.setStyle(this._outerContainerElem.nativeElement, 'transition-duration', resizeDuration + "s");

    this._rendererRef.setStyle(this._dataContainerElem.nativeElement, '-webkit-animation-duration', fadeDuration + "s");

    this._rendererRef.setStyle(this._dataContainerElem.nativeElement, 'animation-duration', fadeDuration + "s");

    this._rendererRef.setStyle(this._imageElem.nativeElement, '-webkit-animation-duration', fadeDuration + "s");

    this._rendererRef.setStyle(this._imageElem.nativeElement, 'animation-duration', fadeDuration + "s");

    this._rendererRef.setStyle(this._captionElem.nativeElement, '-webkit-animation-duration', fadeDuration + "s");

    this._rendererRef.setStyle(this._captionElem.nativeElement, 'animation-duration', fadeDuration + "s");

    this._rendererRef.setStyle(this._numberElem.nativeElement, '-webkit-animation-duration', fadeDuration + "s");

    this._rendererRef.setStyle(this._numberElem.nativeElement, 'animation-duration', fadeDuration + "s");
  };

  LightboxComponent.prototype._end = function () {
    var _this = this;

    this.ui.classList = 'lightbox animation fadeOut';

    if (this.options.disableScrolling) {
      this._rendererRef.removeClass(this._documentRef.documentElement, 'lb-disable-scrolling');
    }

    setTimeout(function () {
      _this.cmpRef.destroy();
    }, this.options.fadeDuration * 1000);
  };

  LightboxComponent.prototype._updateDetails = function () {
    // update the caption
    if (typeof this.album[this.currentImageIndex].caption !== 'undefined' && this.album[this.currentImageIndex].caption !== '') {
      this.ui.showCaption = true;
    } // update the page number if user choose to do so
    // does not perform numbering the page if the
    // array length in album <= 1


    if (this.album.length > 1 && this.options.showImageNumberLabel) {
      this.ui.showPageNumber = true;
      this.content.pageNumber = this._albumLabel();
    }
  };

  LightboxComponent.prototype._albumLabel = function () {
    // due to {this.currentImageIndex} is set from 0 to {this.album.length} - 1
    return this.options.albumLabel.replace(/%1/g, Number(this.currentImageIndex + 1)).replace(/%2/g, this.album.length);
  };

  LightboxComponent.prototype._changeImage = function (newIndex) {
    this._resetImage();

    this.currentImageIndex = newIndex;

    this._hideImage();

    this._registerImageLoadingEvent();

    this._lightboxEvent.broadcastLightboxEvent({
      id: lightbox_event_service_1.LIGHTBOX_EVENT.CHANGE_PAGE,
      data: newIndex
    });
  };

  LightboxComponent.prototype._hideImage = function () {
    this.ui.showReloader = true;
    this.ui.showArrowNav = false;
    this.ui.showLeftArrow = false;
    this.ui.showRightArrow = false;
    this.ui.showPageNumber = false;
    this.ui.showCaption = false;
  };

  LightboxComponent.prototype._updateNav = function () {
    var alwaysShowNav = false; // check to see the browser support touch event

    try {
      this._documentRef.createEvent('TouchEvent');

      alwaysShowNav = this.options.alwaysShowNavOnTouchDevices ? true : false;
    } catch (e) {// noop
    } // initially show the arrow nav
    // which is the parent of both left and right nav


    this._showArrowNav();

    if (this.album.length > 1) {
      if (this.options.wrapAround) {
        if (alwaysShowNav) {
          // alternatives this.$lightbox.find('.lb-prev, .lb-next').css('opacity', '1');
          this._rendererRef.setStyle(this._leftArrowElem.nativeElement, 'opacity', '1');

          this._rendererRef.setStyle(this._rightArrowElem.nativeElement, 'opacity', '1');
        } // alternatives this.$lightbox.find('.lb-prev, .lb-next').show();


        this._showLeftArrowNav();

        this._showRightArrowNav();
      } else {
        if (this.currentImageIndex > 0) {
          // alternatives this.$lightbox.find('.lb-prev').show();
          this._showLeftArrowNav();

          if (alwaysShowNav) {
            // alternatives this.$lightbox.find('.lb-prev').css('opacity', '1');
            this._rendererRef.setStyle(this._leftArrowElem.nativeElement, 'opacity', '1');
          }
        }

        if (this.currentImageIndex < this.album.length - 1) {
          // alternatives this.$lightbox.find('.lb-next').show();
          this._showRightArrowNav();

          if (alwaysShowNav) {
            // alternatives this.$lightbox.find('.lb-next').css('opacity', '1');
            this._rendererRef.setStyle(this._rightArrowElem.nativeElement, 'opacity', '1');
          }
        }
      }
    }
  };

  LightboxComponent.prototype._showLeftArrowNav = function () {
    this.ui.showLeftArrow = true;
  };

  LightboxComponent.prototype._showRightArrowNav = function () {
    this.ui.showRightArrow = true;
  };

  LightboxComponent.prototype._showArrowNav = function () {
    this.ui.showArrowNav = this.album.length !== 1;
  };

  LightboxComponent.prototype._enableKeyboardNav = function () {
    var _this = this;

    this._event.keyup = this._rendererRef.listen('document', 'keyup', function (event) {
      _this._keyboardAction(event);
    });
  };

  LightboxComponent.prototype._disableKeyboardNav = function () {
    if (this._event.keyup) {
      this._event.keyup();
    }
  };

  LightboxComponent.prototype._keyboardAction = function ($event) {
    var KEYCODE_ESC = 27;
    var KEYCODE_LEFTARROW = 37;
    var KEYCODE_RIGHTARROW = 39;
    var keycode = $event.keyCode;
    var key = String.fromCharCode(keycode).toLowerCase();

    if (keycode === KEYCODE_ESC || key.match(/x|o|c/)) {
      this._lightboxEvent.broadcastLightboxEvent({
        id: lightbox_event_service_1.LIGHTBOX_EVENT.CLOSE,
        data: null
      });
    } else if (key === 'p' || keycode === KEYCODE_LEFTARROW) {
      if (this.currentImageIndex !== 0) {
        this._changeImage(this.currentImageIndex - 1);
      } else if (this.options.wrapAround && this.album.length > 1) {
        this._changeImage(this.album.length - 1);
      }
    } else if (key === 'n' || keycode === KEYCODE_RIGHTARROW) {
      if (this.currentImageIndex !== this.album.length - 1) {
        this._changeImage(this.currentImageIndex + 1);
      } else if (this.options.wrapAround && this.album.length > 1) {
        this._changeImage(0);
      }
    }
  };

  LightboxComponent.prototype._getCssStyleValue = function (elem, propertyName) {
    return parseFloat(this._windowRef.getComputedStyle(elem.nativeElement, null).getPropertyValue(propertyName));
  };

  LightboxComponent.prototype._onReceivedEvent = function (event) {
    switch (event.id) {
      case lightbox_event_service_1.LIGHTBOX_EVENT.CLOSE:
        this._end();

        break;

      default:
        break;
    }
  };

  __decorate([core_1.Input(), __metadata("design:type", Array)], LightboxComponent.prototype, "album", void 0);

  __decorate([core_1.Input(), __metadata("design:type", Number)], LightboxComponent.prototype, "currentImageIndex", void 0);

  __decorate([core_1.Input(), __metadata("design:type", Object)], LightboxComponent.prototype, "options", void 0);

  __decorate([core_1.Input(), __metadata("design:type", Object)], LightboxComponent.prototype, "cmpRef", void 0);

  __decorate([core_1.ViewChild('outerContainer', {
    static: false
  }), __metadata("design:type", core_1.ElementRef)], LightboxComponent.prototype, "_outerContainerElem", void 0);

  __decorate([core_1.ViewChild('container', {
    static: false
  }), __metadata("design:type", core_1.ElementRef)], LightboxComponent.prototype, "_containerElem", void 0);

  __decorate([core_1.ViewChild('leftArrow', {
    static: false
  }), __metadata("design:type", core_1.ElementRef)], LightboxComponent.prototype, "_leftArrowElem", void 0);

  __decorate([core_1.ViewChild('rightArrow', {
    static: false
  }), __metadata("design:type", core_1.ElementRef)], LightboxComponent.prototype, "_rightArrowElem", void 0);

  __decorate([core_1.ViewChild('navArrow', {
    static: false
  }), __metadata("design:type", core_1.ElementRef)], LightboxComponent.prototype, "_navArrowElem", void 0);

  __decorate([core_1.ViewChild('dataContainer', {
    static: false
  }), __metadata("design:type", core_1.ElementRef)], LightboxComponent.prototype, "_dataContainerElem", void 0);

  __decorate([core_1.ViewChild('image', {
    static: false
  }), __metadata("design:type", core_1.ElementRef)], LightboxComponent.prototype, "_imageElem", void 0);

  __decorate([core_1.ViewChild('caption', {
    static: false
  }), __metadata("design:type", core_1.ElementRef)], LightboxComponent.prototype, "_captionElem", void 0);

  __decorate([core_1.ViewChild('number', {
    static: false
  }), __metadata("design:type", core_1.ElementRef)], LightboxComponent.prototype, "_numberElem", void 0);

  LightboxComponent = __decorate([__metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer2, lightbox_event_service_1.LightboxEvent, core_1.ElementRef, lightbox_event_service_1.LightboxWindowRef, platform_browser_1.DomSanitizer])], LightboxComponent);

  LightboxComponent.ɵfac = function LightboxComponent_Factory(t) {
    return new (t || LightboxComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(lightbox_event_service_1.LightboxEvent), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(lightbox_event_service_1.LightboxWindowRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.DomSanitizer));
  };

  LightboxComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({
    type: LightboxComponent,
    selectors: [["", "lb-content", ""]],
    viewQuery: function LightboxComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
        ɵngcc0.ɵɵviewQuery(_c1, true);
        ɵngcc0.ɵɵviewQuery(_c2, true);
        ɵngcc0.ɵɵviewQuery(_c3, true);
        ɵngcc0.ɵɵviewQuery(_c4, true);
        ɵngcc0.ɵɵviewQuery(_c5, true);
        ɵngcc0.ɵɵviewQuery(_c6, true);
        ɵngcc0.ɵɵviewQuery(_c7, true);
        ɵngcc0.ɵɵviewQuery(_c8, true);
      }

      if (rf & 2) {
        var _t;

        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._outerContainerElem = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._containerElem = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._leftArrowElem = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._rightArrowElem = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._navArrowElem = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._dataContainerElem = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._imageElem = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._captionElem = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._numberElem = _t.first);
      }
    },
    hostVars: 2,
    hostBindings: function LightboxComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function LightboxComponent_click_HostBindingHandler($event) {
          return ctx.close($event);
        });
      }

      if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.ui.classList);
      }
    },
    inputs: {
      options: "options",
      album: "album",
      currentImageIndex: "currentImageIndex",
      cmpRef: "cmpRef"
    },
    attrs: _c9,
    decls: 32,
    vars: 13,
    consts: [["id", "outerContainer", 1, "lb-outerContainer", "transition"], ["outerContainer", ""], ["id", "container", 1, "lb-container"], ["container", ""], ["id", "image", 1, "lb-image", "animation", "fadeIn", 3, "src", "hidden"], ["image", ""], [1, "lb-nav", 3, "hidden"], ["navArrow", ""], [1, "lb-prev", 3, "hidden", "click"], ["leftArrow", ""], [1, "lb-next", 3, "hidden", "click"], ["rightArrow", ""], [1, "lb-loader", 3, "hidden", "click"], [1, "lb-cancel"], [1, "lb-dataContainer", 3, "hidden"], ["dataContainer", ""], [1, "lb-data"], [1, "lb-details"], [1, "lb-caption", "animation", "fadeIn", 3, "hidden", "innerHtml"], ["caption", ""], [1, "lb-number", "animation", "fadeIn", 3, "hidden"], ["number", ""], [1, "lb-controlContainer"], [1, "lb-closeContainer"], [1, "lb-close", 3, "click"], [1, "lb-turnContainer", 3, "hidden"], [1, "lb-turnLeft", 3, "click"], [1, "lb-turnRight", 3, "click"], [1, "lb-zoomContainer", 3, "hidden"], [1, "lb-zoomOut", 3, "click"], [1, "lb-zoomIn", 3, "click"]],
    template: function LightboxComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0, 1);
        ɵngcc0.ɵɵelementStart(2, "div", 2, 3);
        ɵngcc0.ɵɵelement(4, "img", 4, 5);
        ɵngcc0.ɵɵelementStart(6, "div", 6, 7);
        ɵngcc0.ɵɵelementStart(8, "a", 8, 9);
        ɵngcc0.ɵɵlistener("click", function LightboxComponent_Template_a_click_8_listener() {
          return ctx.prevImage();
        });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(10, "a", 10, 11);
        ɵngcc0.ɵɵlistener("click", function LightboxComponent_Template_a_click_10_listener() {
          return ctx.nextImage();
        });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(12, "div", 12);
        ɵngcc0.ɵɵlistener("click", function LightboxComponent_Template_div_click_12_listener($event) {
          return ctx.close($event);
        });
        ɵngcc0.ɵɵelement(13, "a", 13);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(14, "div", 14, 15);
        ɵngcc0.ɵɵelementStart(16, "div", 16);
        ɵngcc0.ɵɵelementStart(17, "div", 17);
        ɵngcc0.ɵɵelement(18, "span", 18, 19);
        ɵngcc0.ɵɵelementStart(20, "span", 20, 21);
        ɵngcc0.ɵɵtext(22);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(23, "div", 22);
        ɵngcc0.ɵɵelementStart(24, "div", 23);
        ɵngcc0.ɵɵelementStart(25, "a", 24);
        ɵngcc0.ɵɵlistener("click", function LightboxComponent_Template_a_click_25_listener($event) {
          return ctx.close($event);
        });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(26, "div", 25);
        ɵngcc0.ɵɵelementStart(27, "a", 26);
        ɵngcc0.ɵɵlistener("click", function LightboxComponent_Template_a_click_27_listener($event) {
          return ctx.control($event);
        });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(28, "a", 27);
        ɵngcc0.ɵɵlistener("click", function LightboxComponent_Template_a_click_28_listener($event) {
          return ctx.control($event);
        });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(29, "div", 28);
        ɵngcc0.ɵɵelementStart(30, "a", 29);
        ɵngcc0.ɵɵlistener("click", function LightboxComponent_Template_a_click_30_listener($event) {
          return ctx.control($event);
        });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(31, "a", 30);
        ɵngcc0.ɵɵlistener("click", function LightboxComponent_Template_a_click_31_listener($event) {
          return ctx.control($event);
        });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
      }

      if (rf & 2) {
        ɵngcc0.ɵɵadvance(4);
        ɵngcc0.ɵɵproperty("src", ctx.album[ctx.currentImageIndex].src, ɵngcc0.ɵɵsanitizeUrl)("hidden", ctx.ui.showReloader);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("hidden", !ctx.ui.showArrowNav);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("hidden", !ctx.ui.showLeftArrow);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("hidden", !ctx.ui.showRightArrow);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("hidden", !ctx.ui.showReloader);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("hidden", ctx.ui.showReloader);
        ɵngcc0.ɵɵadvance(4);
        ɵngcc0.ɵɵproperty("hidden", !ctx.ui.showCaption)("innerHtml", ctx.album[ctx.currentImageIndex].caption, ɵngcc0.ɵɵsanitizeHtml);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("hidden", !ctx.ui.showPageNumber);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.content.pageNumber);
        ɵngcc0.ɵɵadvance(4);
        ɵngcc0.ɵɵproperty("hidden", !ctx.ui.showRotateButton);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("hidden", !ctx.ui.showZoomButton);
      }
    },
    encapsulation: 2
  });
  /*@__PURE__*/

  (function () {
    ɵngcc0.ɵsetClassMetadata(LightboxComponent, [{
      type: core_1.Component,
      args: [{
        template: "\n    <div class=\"lb-outerContainer transition\" #outerContainer id=\"outerContainer\">\n      <div class=\"lb-container\" #container id=\"container\">\n        <img class=\"lb-image\" id=\"image\" [src]=\"album[currentImageIndex].src\" class=\"lb-image animation fadeIn\" [hidden]=\"ui.showReloader\" #image>\n        <div class=\"lb-nav\" [hidden]=\"!ui.showArrowNav\" #navArrow>\n          <a class=\"lb-prev\" [hidden]=\"!ui.showLeftArrow\" (click)=\"prevImage()\" #leftArrow></a>\n          <a class=\"lb-next\" [hidden]=\"!ui.showRightArrow\" (click)=\"nextImage()\" #rightArrow></a>\n        </div>\n        <div class=\"lb-loader\" [hidden]=\"!ui.showReloader\" (click)=\"close($event)\">\n          <a class=\"lb-cancel\"></a>\n        </div>\n      </div>\n    </div>\n    <div class=\"lb-dataContainer\" [hidden]=\"ui.showReloader\" #dataContainer>\n      <div class=\"lb-data\">\n        <div class=\"lb-details\">\n          <span class=\"lb-caption animation fadeIn\" [hidden]=\"!ui.showCaption\" [innerHtml]=\"album[currentImageIndex].caption\" #caption>\n          </span>\n          <span class=\"lb-number animation fadeIn\" [hidden]=\"!ui.showPageNumber\" #number>{{ content.pageNumber }}</span>\n        </div>\n        <div class=\"lb-controlContainer\">\n          <div class=\"lb-closeContainer\">\n            <a class=\"lb-close\" (click)=\"close($event)\"></a>\n          </div>\n          <div class=\"lb-turnContainer\" [hidden]=\"!ui.showRotateButton\">\n            <a class=\"lb-turnLeft\" (click)=\"control($event)\"></a>\n            <a class=\"lb-turnRight\" (click)=\"control($event)\"></a>\n          </div>\n          <div class=\"lb-zoomContainer\" [hidden]=\"!ui.showZoomButton\">\n            <a class=\"lb-zoomOut\" (click)=\"control($event)\"></a>\n            <a class=\"lb-zoomIn\" (click)=\"control($event)\"></a>\n          </div>\n        </div>\n      </div>\n    </div>",
        selector: '[lb-content]',
        host: {
          '(click)': 'close($event)',
          '[class]': 'ui.classList'
        }
      }]
    }], function () {
      return [{
        type: ɵngcc0.ElementRef
      }, {
        type: ɵngcc0.Renderer2
      }, {
        type: lightbox_event_service_1.LightboxEvent
      }, {
        type: ɵngcc0.ElementRef
      }, {
        type: lightbox_event_service_1.LightboxWindowRef
      }, {
        type: ɵngcc1.DomSanitizer
      }];
    }, {
      options: [{
        type: core_1.Input
      }],
      album: [{
        type: core_1.Input
      }],
      currentImageIndex: [{
        type: core_1.Input
      }],
      cmpRef: [{
        type: core_1.Input
      }],
      _outerContainerElem: [{
        type: core_1.ViewChild,
        args: ['outerContainer', {
          static: false
        }]
      }],
      _containerElem: [{
        type: core_1.ViewChild,
        args: ['container', {
          static: false
        }]
      }],
      _leftArrowElem: [{
        type: core_1.ViewChild,
        args: ['leftArrow', {
          static: false
        }]
      }],
      _rightArrowElem: [{
        type: core_1.ViewChild,
        args: ['rightArrow', {
          static: false
        }]
      }],
      _navArrowElem: [{
        type: core_1.ViewChild,
        args: ['navArrow', {
          static: false
        }]
      }],
      _dataContainerElem: [{
        type: core_1.ViewChild,
        args: ['dataContainer', {
          static: false
        }]
      }],
      _imageElem: [{
        type: core_1.ViewChild,
        args: ['image', {
          static: false
        }]
      }],
      _captionElem: [{
        type: core_1.ViewChild,
        args: ['caption', {
          static: false
        }]
      }],
      _numberElem: [{
        type: core_1.ViewChild,
        args: ['number', {
          static: false
        }]
      }]
    });
  })();

  return LightboxComponent;
}();

exports.LightboxComponent = LightboxComponent;

/***/ }),

/***/ "./node_modules/ngx-lightbox/__ivy_ngcc__/lightbox.module.js":
/*!*******************************************************************!*\
  !*** ./node_modules/ngx-lightbox/__ivy_ngcc__/lightbox.module.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ɵngcc0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

var ɵngcc1 = __webpack_require__(/*! ./lightbox-overlay.component */ "./node_modules/ngx-lightbox/__ivy_ngcc__/lightbox-overlay.component.js");

var ɵngcc2 = __webpack_require__(/*! ./lightbox.component */ "./node_modules/ngx-lightbox/__ivy_ngcc__/lightbox.component.js");

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var lightbox_service_1 = __webpack_require__(/*! ./lightbox.service */ "./node_modules/ngx-lightbox/__ivy_ngcc__/lightbox.service.js");

var lightbox_component_1 = __webpack_require__(/*! ./lightbox.component */ "./node_modules/ngx-lightbox/__ivy_ngcc__/lightbox.component.js");

var lightbox_config_service_1 = __webpack_require__(/*! ./lightbox-config.service */ "./node_modules/ngx-lightbox/__ivy_ngcc__/lightbox-config.service.js");

var lightbox_event_service_1 = __webpack_require__(/*! ./lightbox-event.service */ "./node_modules/ngx-lightbox/__ivy_ngcc__/lightbox-event.service.js");

var lightbox_overlay_component_1 = __webpack_require__(/*! ./lightbox-overlay.component */ "./node_modules/ngx-lightbox/__ivy_ngcc__/lightbox-overlay.component.js");

var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

var LightboxModule =
/** @class */
function () {
  function LightboxModule() {}

  LightboxModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({
    type: LightboxModule
  });
  LightboxModule.ɵinj = ɵngcc0.ɵɵdefineInjector({
    factory: function LightboxModule_Factory(t) {
      return new (t || LightboxModule)();
    },
    providers: [lightbox_service_1.Lightbox, lightbox_config_service_1.LightboxConfig, lightbox_event_service_1.LightboxEvent, lightbox_event_service_1.LightboxWindowRef]
  });

  (function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(LightboxModule, {
      declarations: [ɵngcc1.LightboxOverlayComponent, ɵngcc2.LightboxComponent]
    });
  })();
  /*@__PURE__*/


  (function () {
    ɵngcc0.ɵsetClassMetadata(LightboxModule, [{
      type: core_1.NgModule,
      args: [{
        declarations: [lightbox_overlay_component_1.LightboxOverlayComponent, lightbox_component_1.LightboxComponent],
        providers: [lightbox_service_1.Lightbox, lightbox_config_service_1.LightboxConfig, lightbox_event_service_1.LightboxEvent, lightbox_event_service_1.LightboxWindowRef],
        entryComponents: [lightbox_overlay_component_1.LightboxOverlayComponent, lightbox_component_1.LightboxComponent]
      }]
    }], function () {
      return [];
    }, null);
  })();

  return LightboxModule;
}();

exports.LightboxModule = LightboxModule;

/***/ }),

/***/ "./node_modules/ngx-lightbox/__ivy_ngcc__/lightbox.service.js":
/*!********************************************************************!*\
  !*** ./node_modules/ngx-lightbox/__ivy_ngcc__/lightbox.service.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ɵngcc0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = this && this.__metadata || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

var lightbox_component_1 = __webpack_require__(/*! ./lightbox.component */ "./node_modules/ngx-lightbox/__ivy_ngcc__/lightbox.component.js");

var lightbox_config_service_1 = __webpack_require__(/*! ./lightbox-config.service */ "./node_modules/ngx-lightbox/__ivy_ngcc__/lightbox-config.service.js");

var lightbox_event_service_1 = __webpack_require__(/*! ./lightbox-event.service */ "./node_modules/ngx-lightbox/__ivy_ngcc__/lightbox-event.service.js");

var lightbox_overlay_component_1 = __webpack_require__(/*! ./lightbox-overlay.component */ "./node_modules/ngx-lightbox/__ivy_ngcc__/lightbox-overlay.component.js");

var Lightbox =
/** @class */
function () {
  function Lightbox(_componentFactoryResolver, _injector, _applicationRef, _lightboxConfig, _lightboxEvent) {
    this._componentFactoryResolver = _componentFactoryResolver;
    this._injector = _injector;
    this._applicationRef = _applicationRef;
    this._lightboxConfig = _lightboxConfig;
    this._lightboxEvent = _lightboxEvent;
    this._documentRef = window.document;
  }

  Lightbox.prototype.open = function (album, curIndex, options) {
    var _this = this;

    if (curIndex === void 0) {
      curIndex = 0;
    }

    if (options === void 0) {
      options = {};
    }

    var overlayComponentRef = this._createComponent(lightbox_overlay_component_1.LightboxOverlayComponent);

    var componentRef = this._createComponent(lightbox_component_1.LightboxComponent);

    var newOptions = {}; // broadcast open event

    this._lightboxEvent.broadcastLightboxEvent({
      id: lightbox_event_service_1.LIGHTBOX_EVENT.OPEN
    });

    Object.assign(newOptions, this._lightboxConfig, options); // attach input to lightbox

    componentRef.instance.album = album;
    componentRef.instance.currentImageIndex = curIndex;
    componentRef.instance.options = newOptions;
    componentRef.instance.cmpRef = componentRef; // attach input to overlay

    overlayComponentRef.instance.options = newOptions;
    overlayComponentRef.instance.cmpRef = overlayComponentRef; // FIXME: not sure why last event is broadcasted (which is CLOSED) and make
    // lightbox can not be opened the second time.
    // Need to timeout so that the OPEN event is set before component is initialized

    setTimeout(function () {
      _this._applicationRef.attachView(overlayComponentRef.hostView);

      _this._applicationRef.attachView(componentRef.hostView);

      overlayComponentRef.onDestroy(function () {
        _this._applicationRef.detachView(overlayComponentRef.hostView);
      });
      componentRef.onDestroy(function () {
        _this._applicationRef.detachView(componentRef.hostView);
      });

      _this._documentRef.querySelector('body').appendChild(overlayComponentRef.location.nativeElement);

      _this._documentRef.querySelector('body').appendChild(componentRef.location.nativeElement);
    });
  };

  Lightbox.prototype.close = function () {
    if (this._lightboxEvent) {
      this._lightboxEvent.broadcastLightboxEvent({
        id: lightbox_event_service_1.LIGHTBOX_EVENT.CLOSE
      });
    }
  };

  Lightbox.prototype._createComponent = function (ComponentClass) {
    var factory = this._componentFactoryResolver.resolveComponentFactory(ComponentClass);

    var component = factory.create(this._injector);
    return component;
  };

  Lightbox = __decorate([__metadata("design:paramtypes", [core_1.ComponentFactoryResolver, core_1.Injector, core_1.ApplicationRef, lightbox_config_service_1.LightboxConfig, lightbox_event_service_1.LightboxEvent])], Lightbox);

  Lightbox.ɵfac = function Lightbox_Factory(t) {
    return new (t || Lightbox)(ɵngcc0.ɵɵinject(ɵngcc0.ComponentFactoryResolver), ɵngcc0.ɵɵinject(ɵngcc0.Injector), ɵngcc0.ɵɵinject(ɵngcc0.ApplicationRef), ɵngcc0.ɵɵinject(lightbox_config_service_1.LightboxConfig), ɵngcc0.ɵɵinject(lightbox_event_service_1.LightboxEvent));
  };

  Lightbox.ɵprov = ɵngcc0.ɵɵdefineInjectable({
    token: Lightbox,
    factory: function factory(t) {
      return Lightbox.ɵfac(t);
    }
  });
  /*@__PURE__*/

  (function () {
    ɵngcc0.ɵsetClassMetadata(Lightbox, [{
      type: core_1.Injectable
    }], function () {
      return [{
        type: ɵngcc0.ComponentFactoryResolver
      }, {
        type: ɵngcc0.Injector
      }, {
        type: ɵngcc0.ApplicationRef
      }, {
        type: lightbox_config_service_1.LightboxConfig
      }, {
        type: lightbox_event_service_1.LightboxEvent
      }];
    }, null);
  })();

  return Lightbox;
}();

exports.Lightbox = Lightbox;

/***/ }),

/***/ "./src/app/@core/utils/menu.service.ts":
/*!*********************************************!*\
  !*** ./src/app/@core/utils/menu.service.ts ***!
  \*********************************************/
/*! exports provided: MenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuService", function() { return MenuService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nebular_security__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/security */ "./node_modules/@nebular/security/__ivy_ngcc__/fesm2015/index.js");




var MenuService = /** @class */ (function () {
    function MenuService(accessChecker) {
        this.accessChecker = accessChecker;
        this.getSubMenuItem = function (subMenuItems) {
            if (subMenuItems) {
                var _loop_1 = function (i) {
                    if (subMenuItems[i].data) { // Check if menu item has dada.permision
                        this_1.accessChecker.isGranted(subMenuItems[i].data.permission, 'all').subscribe(function (res) {
                            subMenuItems[i].hidden = !res;
                        });
                    }
                    this_1.getSubMenuItem(subMenuItems[i].children);
                };
                var this_1 = this;
                for (var i = 0; i < subMenuItems.length; i++) {
                    _loop_1(i);
                }
            }
        };
    }
    MenuService.prototype.setMenuItemVisibility = function (menuItems) {
        var menuItem = this.getSubMenuItem(menuItems);
        if (menuItem == null)
            return;
        // Verify freturnet menu item if user has som permision
        // this.accessChecker.isGranted(menuItem.data.permission, 'all').subscribe(res => { menuItem.hidden = !res; });
    };
    MenuService.ɵfac = function MenuService_Factory(t) { return new (t || MenuService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_nebular_security__WEBPACK_IMPORTED_MODULE_1__["NbAccessChecker"])); };
    MenuService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MenuService, factory: MenuService.ɵfac, providedIn: 'root' });
    return MenuService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _nebular_security__WEBPACK_IMPORTED_MODULE_1__["NbAccessChecker"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/pages-menu.ts":
/*!*************************************!*\
  !*** ./src/app/pages/pages-menu.ts ***!
  \*************************************/
/*! exports provided: MENU_ITEMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU_ITEMS", function() { return MENU_ITEMS; });
var MENU_ITEMS = [
    {
        title: 'Observatorio',
        group: true,
    },
    {
        title: 'visor',
        icon: 'globe-2-outline',
        link: '/',
        home: true,
    },
    {
        title: 'HERRAMIENTAS',
        group: true,
        data: { 'permission': 'Manage Stations' },
    },
    {
        title: 'Estaciones',
        icon: 'pin-outline',
        link: '/estaciones',
        data: { 'permission': 'Manage Stations' },
    },
    {
        title: 'ADMINISTRAR',
        group: true,
    },
    {
        title: 'Configuración',
        icon: 'settings-outline',
        data: { 'permission': 'View All Standard' },
        children: [
            {
                title: 'Control de Usuarios',
                icon: 'people-outline',
                hidden: false,
                children: [
                    {
                        title: 'Usuarios',
                        link: '/config/users',
                    },
                    {
                        title: 'Registrar Usuarios',
                        link: '/config/users/add',
                    },
                ],
            },
            {
                title: 'Control de Acceso',
                icon: 'shield-outline',
                data: { 'permission': 'View All Standard' },
                children: [
                    {
                        title: 'Ver Permisos',
                        link: '/config/roles/permissions/view',
                    },
                    {
                        title: 'Ver Roles',
                        link: '/config/roles',
                    },
                    {
                        title: 'Crear Roles',
                        link: '/config/roles/add',
                    },
                ],
            },
        ],
    },
];


/***/ })

}]);
//# sourceMappingURL=default~pages-obs-obs-module~pages-pages-module.js.map