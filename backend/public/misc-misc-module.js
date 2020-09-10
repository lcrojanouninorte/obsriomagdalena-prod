(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["misc-misc-module"],{

/***/ "./src/app/pages/misc/misc-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/misc/misc-routing.module.ts ***!
  \***************************************************/
/*! exports provided: MiscRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiscRoutingModule", function() { return MiscRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _misc_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./misc.component */ "./src/app/pages/misc/misc.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/pages/misc/not-found/not-found.component.ts");






var routes = [
    {
        path: '',
        component: _misc_component__WEBPACK_IMPORTED_MODULE_2__["MiscComponent"],
        children: [
            {
                path: '404',
                component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"],
            },
            {
                path: '',
                redirectTo: '404',
                pathMatch: 'full',
            },
        ],
    },
];
var MiscRoutingModule = /** @class */ (function () {
    function MiscRoutingModule() {
    }
    MiscRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MiscRoutingModule });
    MiscRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MiscRoutingModule_Factory(t) { return new (t || MiscRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return MiscRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MiscRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MiscRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/misc/misc.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/misc/misc.component.ts ***!
  \**********************************************/
/*! exports provided: MiscComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiscComponent", function() { return MiscComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



var MiscComponent = /** @class */ (function () {
    function MiscComponent() {
    }
    MiscComponent.ɵfac = function MiscComponent_Factory(t) { return new (t || MiscComponent)(); };
    MiscComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MiscComponent, selectors: [["ngx-misc"]], decls: 1, vars: 0, template: function MiscComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
    return MiscComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MiscComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-misc',
                template: "\n    <router-outlet></router-outlet>\n  ",
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/misc/misc.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/misc/misc.module.ts ***!
  \*******************************************/
/*! exports provided: MiscModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiscModule", function() { return MiscModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/pages/misc/not-found/not-found.component.ts");
/* harmony import */ var _misc_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./misc-routing.module */ "./src/app/pages/misc/misc-routing.module.ts");
/* harmony import */ var _misc_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./misc.component */ "./src/app/pages/misc/misc.component.ts");







var MiscModule = /** @class */ (function () {
    function MiscModule() {
    }
    MiscModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MiscModule });
    MiscModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MiscModule_Factory(t) { return new (t || MiscModule)(); }, imports: [[
                _theme_theme_module__WEBPACK_IMPORTED_MODULE_2__["ThemeModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonModule"],
                _misc_routing_module__WEBPACK_IMPORTED_MODULE_4__["MiscRoutingModule"],
            ]] });
    return MiscModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MiscModule, { declarations: [_misc_component__WEBPACK_IMPORTED_MODULE_5__["MiscComponent"],
        _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"]], imports: [_theme_theme_module__WEBPACK_IMPORTED_MODULE_2__["ThemeModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonModule"],
        _misc_routing_module__WEBPACK_IMPORTED_MODULE_4__["MiscRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MiscModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _theme_theme_module__WEBPACK_IMPORTED_MODULE_2__["ThemeModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonModule"],
                    _misc_routing_module__WEBPACK_IMPORTED_MODULE_4__["MiscRoutingModule"],
                ],
                declarations: [
                    _misc_component__WEBPACK_IMPORTED_MODULE_5__["MiscComponent"],
                    _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/misc/not-found/not-found.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/misc/not-found/not-found.component.ts ***!
  \*************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");




var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent(menuService) {
        this.menuService = menuService;
    }
    NotFoundComponent.prototype.ngOnInit = function () {
        throw new Error("Method not implemented.");
    };
    NotFoundComponent.prototype.goToHome = function () {
        this.menuService.navigateHome();
    };
    NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbMenuService"])); };
    NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["ngx-not-found"]], decls: 11, vars: 0, consts: [[1, "row"], [1, "col-md-12"], [1, "flex-centered", "col-xl-4", "col-lg-6", "col-md-8", "col-sm-12"], [1, "title"], [1, "sub-title"], ["nbButton", "", "fullWidth", "", "type", "button", 1, "home-button", 3, "click"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "404 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "small", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "La pagina que estas buscando no existe!");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotFoundComponent_Template_button_click_9_listener() { return ctx.goToHome(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Volver al Visor! ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardBodyComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonComponent"]], styles: [".flex-centered[_ngcontent-%COMP%] {\n  margin: auto;\n}\n\nnb-card-body[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.title[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.sub-title[_ngcontent-%COMP%] {\n  text-align: center;\n  display: block;\n  margin-bottom: 3rem;\n}\n\n.home-button[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWlzYy9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtBQUNoQjs7QUFFQTtFQUNJLGFBQWE7QUFDakI7O0FBRUE7RUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7RUFDSSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLG1CQUFtQjtBQUN2Qjs7QUFFQTtFQUNJLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21pc2Mvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGV4LWNlbnRlcmVkIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxubmItY2FyZC1ib2R5IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zdWItdGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG59XHJcblxyXG4uaG9tZS1idXR0b24ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxufSJdfQ== */"] });
    return NotFoundComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-not-found',
                templateUrl: './not-found.component.html',
                styleUrls: ['./not-found.component.scss']
            }]
    }], function () { return [{ type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbMenuService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=misc-misc-module.js.map