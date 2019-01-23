function ClassA() {
    this.a = 20;
    this.b = 30;
    this.bar = function inner(a, b) { return a + b; };
}
let foo = new ClassA();
foo.bar = function (a, b) { return a + b; };
console.log(foo.bar(10, 5));
//# sourceMappingURL=ClassNew.js.map