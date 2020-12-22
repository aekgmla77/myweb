let num = 10, num3 = 20;

let result = num + num3;
console.log("result: " + result + "입니다."); 

if (result > 30) {
    console.log("30보다 크다.");
} else {
    document.write("<h1>30보다 작거나 같다.</h1>");
}
// document > console에 출력되는 게 아니라 html에 출력됨. 태그도 사용 가능.



var str = 'Hello, World';
str = 25;
str = 1 < 2;
str = null;
str = function(){
    console.log('function');
}
str = 10 + 20;
console.log(typeof str, str);

num1 = 10;
console.log(num1);

var str = "reload";
console.log(str);

let num2 = 20;
console.log(num2);
// var > 중복으로 선언 가능, let은 하나만 가능.
