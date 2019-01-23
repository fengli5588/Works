// JS 的作者：布兰登

// 1. JS 是基于对象（一切皆对象）的动态语言，对象是一种近似字典的可随意扩展的结构
// number, string, object, null, undefined

// 创建一个空对象
let obj = {}

// 为对象动态添加属性：
obj.name = "mwc"

// 2. function

// ES6 的新语法（声明类）
class MyClass {
	constructor() {

	}

	//name = "mwc"

	// dosome() {

	// }
}

// 等价于下方的 function
function MyClass() {
	this.name = "mwc"
	this.dosome = () => { }
}

// 要支持函数式，必须支持高阶函数
// 如：
function f() {
	return (x) => {
		return 10
	}
}

// 1. function 的本质是对象，可以这样理解(一种类似的说法):
// 			class Function extends Object

function f() {
}

"abc".toUpperCase()

1..toString()

// 函数是一个对象

// 可以随意增加属性
f.a = 20

// 如果某个属性的值是一个函数，如下：
f.doing = function () {

}

// 则 doing "可以" 称为 f 对象的 "成员方法"
// 但是 JS 实际上是没有方法的，因为 function 本质上是一个对象，也是一种值

// 2. new 操作
function NEW(f) {
	let THIS = {}
	let RETURN = f.apply(THIS)
	return RETURN instanceof Object ? RETURN : THIS
}
