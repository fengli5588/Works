function compose(f, g) {
    return (x) => {
        return f(g(x));
    };
}
//////////////////////////////////////////////////////////////
// "lihan feng stephanie" -> LiFeSt
// 1. First letter of word is upper case
// 2. get two letter for each word
// 3. remove space between word
//////////////////////////////////////////////////////////////
// var a = b = " /var/www/site/Brand new   document.docx ";
// console.log( a.split(' ').join('') );
// console.log( b.replace( /\s/g, '') ); 
// var input = b.replace(/\s/g, '')
// input = input.toUpperCase()
// console.log(input)
//var y = "This @is a #long $string. Alright, lets split this.";
var str1 = "lihan feng stephanie";
function my_tokenizer(str) {
    var regex = /[^\s]+/g; // This is "multiple not space characters, which should be searched not once in string"
    var match = y.match(regex);
    for (var i = 0; i < match.length; i++) {
        console.log(match[i]);
    }
    return match;
}
function my_to_upper(match) {
    for (var i = 0; i < match.length; i++) {
        var first_letter = match[i];
        var letter = first_letter[0].toUpperCase();
        console.log(match[i]);
    }
}
tmp1 = compose(my_to_upper, my_tokenizer(str1));
//# sourceMappingURL=Composr02.js.map