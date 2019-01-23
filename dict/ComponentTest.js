var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Component(title) {
    let html = (children) => `<div><h1>${title}</h1>${children}</div>`;
    return (target) => {
        return class extends target {
            render() {
                return html(super.render());
            }
        };
    };
}
let Greeter = class Greeter {
    render() {
        return "<img src='' />";
    }
};
Greeter = __decorate([
    Component("My Pic")
], Greeter);
let Article = class Article {
    render() {
    }
};
Article = __decorate([
    Component("My Articles")
], Article);
// Componet("My Pic")(class Greeter{})
let g = new Greeter();
console.log(g.render());
//# sourceMappingURL=ComponentTest.js.map