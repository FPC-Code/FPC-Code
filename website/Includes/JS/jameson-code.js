var date = new Date();
var day = date.getDate();
var month = (date.getMonth() + 1)
var fullYear = date.getFullYear();
var charArr = ("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
console.log("month is " + month);
console.log("day is " + day);
console.log("full year is " + fullYear);

var spin = (fullYear - (Math.pow((day + month), 2)));
console.log("spin is " + spin);

function newSpinFunct(spin, length) {
	var divisor = Math.floor(spin / length);
	console.log("divisor is " + divisor);

	if (divisor == 0) {
		console.log("divisor is 0");
		return spin;
	}else {
		console.log("divisor is " + divisor);
		var subtractor = divisor * length;
		var newspin = spin - subtractor
		return newspin;
	}
}

console.log("before function start");
var length = charArr.length;
console.log("length is "+length);
var actSpin = newSpinFunct(spin, length);

var str = prompt("please enter string");
function spinChars(spin, str) {
	var code0 = "0".charCodeAt(0);
	var codeH = "H".charCodeAt(0);
	var codeZ = "Z".charCodeAt(0);
	var newArr = [];
		
	for(var i = 0; i < str.length; i++){
		var code = str[i].charCodeAt(0);
		if(code>=code0 && code<=codeZ){
			if(code>=codeH)
				newArr.push(String.fromCharCode(code-spin));
			else
				newArr.push(String.fromCharCode(code+spin));
		}else{
		newArr.push(str[i]);
		}
	}
	return newArr.join("");
}
var str2 = spinChars(actSpin, str);
alert(str2);
