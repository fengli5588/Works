// 1. 有下方这样一个数字类型的二维数组，要求将元素纵向相加，得到的最终结果是一个一维数组
let s1 = [
    [2, 6, 9],
    [8, 3, 6],
    [4, 7, 2],
    [5, 1, 5]
];
// 2. 服务端返回以下JSON，整理其格式为模板中所需要的样子
let data = {
    "account": "test1",
    "created": "2019-01-25",
    "group": "some group",
    "details": {
        "addr": "hightech nanshan shenzhen",
        "howlong": 3
    }
};
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
//# sourceMappingURL=question.js.map