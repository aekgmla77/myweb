let x = 10;
let y = '5';

let result = x * y;
// result = x / 0;
// * / 는 알아서 숫자로 인식함.
console.log(result);

//parseint >> 정수, parsefloat >> 소수

function sum() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    console.log(parseInt(num1)+parseInt(num2));
}