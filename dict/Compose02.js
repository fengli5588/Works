function compose(f, g) {
    return (x) => {
        return f(g(x));
    };
}
//////////////////////////////////////////////////////////////
// "lihan feng stephanie" -> LiFeSt
// 1. remove space between word
// 2. Make first letter of word is upper case
// 3. Get two letter for each word
//////////////////////////////////////////////////////////////
var map_01 = ["lihan", "feng", "stephanie"].map(x => x.substr(0, 2).toUpperCase() + x.substr(2));
// var a = b = " /var/www/site/Brand new   document.docx ";
// console.log( a.split(' ').join('') );
// console.log( b.replace( /\s/g, '') ); 
// var input = b.replace(/\s/g, '')
// input = input.toUpperCase()
// console.log(input)
//var y = "This @is a #long $string. Alright, lets split this.";
var str1 = "   lihan feng stephanie  ";
function trim(str) {
    return str.trim();
}
function my_tokenizer(str) {
    // var regex = /[^\s]+/g; // This is "multiple not space characters, which should be searched not once in string"
    // var match = str.match(regex);
    // for (var i = 0; i<match.length; i++)
    // {
    // 	console.log(match[i])
    // }
    // return match
    return str.split(/\s+/g);
}
function remove_whitespace(arr) {
    return arr.map(str => trim(str));
}
function my_to_upper(match) {
    var match2 = [];
    for (var i = 0; i < match.length; i++) {
        var first_letter = match[i];
        var cap_letter = first_letter[0].toUpperCase() + first_letter.substr(1);
        match2[i] = cap_letter;
    }
    return match2;
    //return match.map((str) => str[ 0 ].toUpperCase() + str.substr(1))
}
function my_concat_str(match) {
    var str = "";
    for (i = 0; i < match.length; i++) {
        str += match[i].substr(0, 2);
    }
    return str;
    //return match.map((str) => str.substr(0, 2)).join('')
}
////////////////////////////////////////////////////////////////////////
// Lambda expression
// var my_concat_str = (match) =>{
// 	var str = ""
// 	for (i = 0; i < match.length; i++) {
// 		str += match[ i ].substr(0, 2)
// 	}
// 	return str
// 	//return match.map((str) => str.substr(0, 2)).join('')
// }
var tmp0 = compose(my_tokenizer, trim);
var tmp1 = compose(my_to_upper, tmp0);
res1 = tmp1(str1);
//console.log(res1);
var tmp2 = compose(my_concat_str, tmp1);
result = tmp2(str1);
console.log(result);
//# sourceMappingURL=Compose02.js.map