function compose(f, g) {
	return (x) => {
		return f(g(x))
	}
}


let users = [
	{
		name: "mwc",
		age: 29,
		addr: "xxxxxxx"
	},
	{
		name: "linda",
		age: 30,
		addr: "qqqqqqq" 
	},
	{
		name: "jemery",
		age: 28,
		addr: "uuuuuuu" 
	},
	{
		name: "plume",
		age: 31,
		addr: "cccccc" 
	},
	{
		name: "luc",
		age: 13,
		addr: "mmmmmmm" 
	},
	{
		name: "lif",
		age: 21,
		addr: "tttttttttt" 
	}
]

let scores = [
	{
		name: "mwc",
		score: 80
	},
	{
		name: "linda",
		score: 70
	},
	{
		name: "jemery",
		score: 95
	},
	{
		name: "plume",
		score: 30
	},
	{
		name: "luc",
		score: 40
	},
	{
		name: "lif",
		score: null
	}
]

function user_scores(name, score) {
	this.name = name
	this.score = score
}


// 1. 筛选出 30 岁以下的人
// 2. 从筛选结果中，为每个人添加其对应的成绩
// 3. 分别显示及格人总数，所有及格的人的列表
// 4. avg

function below_30_age(user_infos) {
	// return user_infos.map((x) => {
	// 	 if (x.age < 30)
	// 		 return x
	// 	else
	// 		return null	
	// })
	return user_infos.filter(x => x.age < 30)
}

function add_scores(user_infos) {
	// return user_infos.map((x) => {
	// 	scores.filter((y) => y.name == x.name)
	// 	x.score = y.score
	// 	return x
	// })

	return user_infos.map(u => {
		u.score = scores.find(x=>x.name == u.name).score
		return u
	})
	
	// var my_scores = []
	// for (var i = 0; i < scores.length; i++) {
	// 	for (var j = 0; j < user_infos.length; j++) {
	// 		if (user_infos[j].name == scores[i].name) {
	// 			console.log(user_infos[j].name, scores[i].score)
	// 			// var user_score_v = Object.create(user_scores.prototype)
	// 			// user_score_v.name =　user_infos[j].name
	// 			// user_score_v.score = scores[i].score
	// 			// my_scores.push(user_score_v)
	// 			user_infos[j].score = scores[i].score
	// 			my_scores.push(user_infos[j])
	// 		}
	// 	}		
	// }
	// return my_scores
}



function get_standard_score(user_infos) {
	return user_infos.filter((x) => {
		return (x.score >= 60)
	})  
}

function print_standard_info(user_infos) {
	console.log("Number of Above Standard:", user_infos.length)
	user_infos.forEach((x) => {
		console.log(x)
	})
	return user_infos
}

function print_sum(user_infos) {
	return user_infos.map(u=>u.score).reduce((pre, cur) => pre + cur)
}

function print_average(user_infos) {
	console.log("Number of Above Standard:", user_infos.length)
	return  print_sum(user_infos) / user_infos.length
}

let abc = below_30_age(users)

//r1 = tmp1(users)
// //r2 = tmp2(users)
let tmp3 = compose(print_standard_info, 
				compose(get_standard_score, 
					compose(add_scores, below_30_age)))
//r3 = tmp3(users)
let tmp4 = compose(print_average, tmp3)
r4 = tmp4(users)
console.log(r4)
console.log("=========== end ============")

