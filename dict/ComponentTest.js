var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Component(title) {
    var html = function (children) { return "<div><h1>" + title + "</h1>" + children + "</div>"; };
    return function (target) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            class_1.prototype.render = function () {
                return html(_super.prototype.render.call(this));
            };
            return class_1;
        }(target));
    };
}
var Greeter = /** @class */ (function () {
    function Greeter() {
    }
    Greeter.prototype.render = function () {
        return "<img src='' />";
    };
    Greeter = __decorate([
        Component("My Pic")
    ], Greeter);
    return Greeter;
}());
var Article = /** @class */ (function () {
    function Article() {
    }
    Article.prototype.render = function () {
    };
    Article = __decorate([
        Component("My Articles")
    ], Article);
    return Article;
}());
// Componet("My Pic")(class Greeter{})
var g = new Greeter();
console.log(g.render());
//# sourceMappingURL=ComponentTest.js.map