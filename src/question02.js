// 禁止使用 for


// 1. 平铺数组 flat
// 有如下数组：

let arrOne = [
	[1, 4, 8],
	5,
	[9],
	7
]

// 输出以下结果:   [1, 4, 8, 5, 9, 7]
function flat_arr(arr) {
	let result = []
	arr.forEach((item, index) => {
		if (Array.isArray(item)) {
			item.forEach(x => result.push(x))		
		}
		else {
			result.push(item)
		}
	});
	return result
}

let result01 = flat_arr(arrOne)
console.log(result01)
console.log("============================")

// 2. 有如下数组

let arrTwo = [
	1, 3,
	2, 4
]

// 要求通过转换后，分别得到下方的两个数组, 先纵加再横加

// result one:
// [
// 	1, 3, 4,
// 	2, 4, 6,
// 	3, 7, 10
// ]

// and:

// [
// 	1, 3, 4, 8,
// 	2, 4, 6, 12,
// 	3, 7, 10, 20,
//  6, 14, 20, 40
// ]


// 3. 补全以下 range 函数

// @start - 开始数字
// @end - 个数

// @description: 指定开始数字 start，然后生成指定个数(count) 的数组

function range(start, count) {

}

// range()    =====>   []
// range(3, 5)   ====>  [3, 4, 5, 6, 7]
//range(2, 6) ===> [2, 3, 4, 5, 6, 7, 8]

// 4. 有以下变量
let starCount = 6

// 输出

// <ul>
// 	  <li>*</li>
// 	  <li>*</li>
// 	  <li>*</li>
// 	  <li>*</li>
// 	  <li>*</li>
// 	  <li>*</li>
// </ul>