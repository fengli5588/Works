function foo3() {
    let p = 8;
    this.r = 20;
    let f = (a, b) => {
        return a * b + p + this.r;
    };
    // return {
    // 	w: f
    // }
    return f;
}
function NewClass() {
    this.r = 20;
    return () => {
        return this.r + 10;
    };
}
//let d = new foo2(1)
let x = foo3();
let y = x(5, 10);
console;
//# sourceMappingURL=ClosureTest.js.map