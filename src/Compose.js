function compose(f, g) {
	return (x) => {
		return f(g(x))
    }
}
 
let bf = compose( (y) => y * 20 ,(x) => x + 10)
let v1 = bf(10)
console.log(v1)

let nbf = compose((x) => x*8, bf)
let v2 = nbf(10)
console.log(v2)
//compose((x) => x*8, compose( (y) => y * 20 ,(x) => x + 10))

//////////////////////////////////////////////////////////////////////////////
// (( x + 10 ) * 20 * 8 + 9) / 2
//////////////////////////////////////////////////////////////////////////////
tmp1 = compose((y) => (y* 20), (x) => x + 10)         

tmp2 = compose((y) => y * 8, tmp1)

tmp3 = compose((y) => y + 9, tmp2)  

result = compose((y) => y / 2, tmp3)   
let v3 = result(20)
console.log(v3)
console.log("===================================")


