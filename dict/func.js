// 1. function 的本质是对象，可以这样理解(一种类似的说法):
// 			class Function extends Object
function f() {
}
// 函数是一个对象
// 可以随意增加属性
f.a = 20;
// 如果某个属性的值是一个函数，如下：
f.doing = function () {
};
// 则 doing "可以" 称为 f 对象的 "成员方法"
// 但是 JS 实际上是没有方法的，因为 function 本质上是一个对象，也是一种值
// 2. new 操作
function NEW(f) {
    var THIS = {};
    f.apply(THIS);
    return THIS;
}
//# sourceMappingURL=func.js.map