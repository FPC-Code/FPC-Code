var dateArr = console.log(Date());
var day = dateArr[3];
var fullYear = dateArr[4];
var monthArr = ("", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
var charArr = ("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");

var month = function month(){
	for (var i = 0; i < monthArr.length; i++) {
		if (dateArr[2] == monthArr[i]) {
			return i;
		}
	}
};
console.log(month);
console.log(day);
console.log(fullYear);

var spin = (fullYear - (Math.pow((day + month), 2)));

function newSpinFunct(spin) {
	while (true) {
		if (spin < charArr.length){
			return spin;
		}
		else {
			spin = spin - charArr.length;
		}
	}
}
var actSpin = newSpinFunct(spin);

var str = prompt("please enter string");
function spinChars(spin, str) {
	var code0 = "0".charCodeAt(0);
	var codeH = "H".charCodeAt(0);
	var codeZ = "Z".charCodeAt(0);
	var newArr = [];
		
	for(var i = 0; i < str.length; i++){
		var code = str.charCodeAt(i);
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
