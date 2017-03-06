"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ScrollSpyComponent = (function () {
    function ScrollSpyComponent() {
        /*@HostListener('document:scroll',['$event'])*/
        this.scrollSpyWidth = "0%";
        this.progressColor = 'red';
    }
    ScrollSpyComponent.prototype.onScroll = function ($event) {
        this.setWidth();
    };
    ScrollSpyComponent.prototype.setWidth = function () {
        this.scrollSpyWidth = "0%";
        if (this.getWidth() > 0) {
            this.scrollSpyWidth = this.getWidth() + "%";
        }
    };
    ScrollSpyComponent.prototype.ngOnInit = function () {
        this.setWidth();
    };
    ScrollSpyComponent.prototype.getMax = function () {
        return document.body.scrollHeight - window.innerHeight;
    };
    ScrollSpyComponent.prototype.getValue = function () {
        return window.scrollY;
    };
    ScrollSpyComponent.prototype.getWidth = function () {
        var max = this.getMax();
        var scrollValue = this.getValue();
        var width = (scrollValue / max) * 100;
        return width;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ScrollSpyComponent.prototype, "progressColor", void 0);
    ScrollSpyComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'scroll-spy',
            template: "<div class=\"scroll-spy\">\n<div [style.width]=\"scrollSpyWidth\" [style.background-color]=\"progressColor\" class=\"progress\"></div>\n</div>",
            host: {
                '(document:scroll)': 'onScroll($event)'
            },
            styles: ["\n.scroll-spy{\n    height: 10px;\n    width: 100%;\n}\n.scroll-spy > .progress{\n \n  height: inherit;\n  position: fixed;\n  z-index: 1;\n}"]
        }), 
        __metadata('design:paramtypes', [])
    ], ScrollSpyComponent);
    return ScrollSpyComponent;
}());
exports.ScrollSpyComponent = ScrollSpyComponent;
//# sourceMappingURL=scroll-spy.component.js.map