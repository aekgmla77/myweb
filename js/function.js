function sum(num1, num2) {
    let result = num1 + num2;
    console.log(result);
    return result;
}
// 위에는 실행문 이걸 실행하는 명령문을 써줘야 함. return 타입은 따로 없음.
let result = sum('10', '20');
// funtion 호출해야 함.
document.write('<h1>' + result + '</h1>');

let myfunc = function(a, b) {
    let result = a * b;
    console.log('Hello');
    return result;
}
result = myfunc(4,6);

let yourfunc = myfunc;
result = yourfunc(5,7);
// let myfunc = function() {
//     console.log("반갑습니다.");
// }
console.log(result);
// myfunc()  >>  실행하겠다는 뜻. () 빠지면 안 나옴.

let theotherfunc = function(n1, n2){
    return n1 / n2;
}
function otherfunc(a, b, funcdef) {
    let result = funcdef(a, b);
    console.log('result: ' + result);
}
otherfunc(20, 30, theotherfunc);
// myfunc ==> a*b 라서 값이 600이 나옴.
// >>fallback function이라고 부름 . function이 매개값으로도 쓰일 수 있음.