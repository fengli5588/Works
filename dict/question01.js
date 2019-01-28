// 1. 有下方这样一个数字类型的二维数组，要求将元素纵向相加，得到的最终结果是一个一维数组
let s1 = [
    [2, 6, 9],
    [8, 3, 6],
    [4, 7, 2],
    [5, 1, 5]
];
function rotate(arr) {
    if (Array.isArray(arr), Array.isArray(arr[0])) {
        return arr.reduce((prev, cur) => {
            cur.forEach((item, index) => prev[index].push(item));
            return prev;
        }, arr[0].map(x => []));
    }
    return arr;
}
function arr_add(arr) {
    return arr.reduce((prev, cur) => prev + cur);
}
// 1. Find sublist and conosle.log
// 2. Get value of index 0, index 1 and index 2
// var i = 0
// var sum_0 = 0
// var sum_1 = 0
// var sum_2 = 0
// function foo(val, len) {
// 	console.log(val)
// 	if (i % len == 0) {
// 		sum_0 += val
// 		console.log("Index 0 sum", sum_0)
// 	}
// 	else if (i % len == 1) {
// 		sum_1 += val
// 		console.log("Index 1 sum", sum_1)
// 	}
// 	if (i % len == 2) {
// 		sum_2 += val
// 		console.log("Index 2 sum", sum_2)
// 	}
// 	i = i + 1
// 	if ( i % len == 0) {
// 		console.log("========================")
// 	}	
// }
// be a pure function
// 1. 不依赖外部或全局变量，一切所需从参数获得
// 2. 同样的参数必然获得同样的输出
// let m = 20
// function add(a,b, q) {
// 	return a+b + q
// }
// add(1,2, m)
// function get_result() {
// 	var result = []
// 	result.push(sum_0)
// 	result.push(sum_1)
// 	result.push(sum_2)
// 	return result
// }
// let s2 = s1.map((x) => {
// 	var len = x.length
// 	var i = 0
// 	return x.map((y) => {
// 		return foo(y, len)
// 	})
// })
// //s2.forEach(x => console.log(x))
// console.log(JSON.stringify(s2))
// let r1 = get_result()
// console.log(r1)
// 2. 服务端返回以下JSON，整理其格式为模板中所需要的样子
// data.map((d) => Object.assign({
// 	"account": d.account,
// 	"createTime": d.created,
// 	"address": d.details.addr
// }, d.details)
// )
data.map((d) => Object.assign({
    "account": d.account,
    "createTime": d.created,
    "address": d.details.addr,
    "hello": d.details.inner.att1,
    "test": d.details.inner.att2
}, d.details, d.details.inner));
let data = [
    {
        "account": "test1",
        "created": "2019-01-25",
        "group": "some group",
        "details": {
            "addr": "hightech nanshan shenzhen",
            "howlong": 3,
            "inner": {
                "att1": "hello",
                "att2": "richard"
            }
        }
    },
    {
        "account": "test2",
        "created": "2019-01-25",
        "group": "some group",
        "details": {
            "addr": "hightech nanshan shenzhen",
            "howlong": 3,
            "inner": {
                "att1": "hello",
                "att2": "richard"
            }
        }
    },
    {
        "account": "test3",
        "created": "2019-01-25",
        "group": "some group",
        "details": {
            "addr": "hightech nanshan shenzhen",
            "howlong": 3,
            "inner": {
                "att1": "hello",
                "att2": "richard"
            }
        }
    },
];
// data  ==>  d
/*
<div>
    <h1>account: { d.account }</h1>
    <hr />
    <h2>created: { d.createTime }</h2>
    <div>
        More Info:
        <div>address: { d.address }</div>
        <div>groups: { d.group }</div>
    </div>
</div>

*/
function objToStrMap(obj) {
    let strMap = new Map();
    for (let k of Object.keys(obj)) {
        strMap.set(k, obj[k]);
    }
    return strMap;
}
//let result = objToStrMap({yes: true, no: false})
let result = objToStrMap(data);
for (let item of result.entries()) {
    console.log(item[0], item[1]);
}
//# sourceMappingURL=question01.js.map