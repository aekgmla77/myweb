// function nameFunc() {
let name1 = window.prompt('숫자를 입력하세요.');
// let name2 = window.prompt('숫자를 입력하세요.');
// let name1 = document.getElementById('name').value;


// diffSum(name1, name2); // 입력받은 두수 사이의 합: 1~5
// function diffSum(name1, name2){ 
//     let sum = 0;
//     let n1 = parseInt(name1);
//     let n2 = parseInt(name2);
//     for(let i = n1; i <= n2; i++) {
//         sum += i;
//     }
//     document.write(sum);
// }


// let numAry = [];

// for (let i = 0; i < 5; i++) {
//     let name1 = window.prompt('숫자를 입력하세요.');
//     numAry[i] = parseInt(name1);
// }
// document.write(numAry[i]);


// sum(name1, name2);
// }
// function sum(a, b) {
//     let n1 = parseInt(a);
//     let n2 = parseInt(b);
//     // 문자열 타입의 숫자 '30'  >>  30으로 바꿔줌
//     console.log(n1 + n2);
// }
// checkGrade(name1); //90:A, 80:B, 70:C, 그외:D
// function checkGrade(grade) {
//     if (grade >= 90) {
//         document.write("A 입니다.");
//     } else if (grade >= 80) {
//         document.write("B 입니다.");
//     } else if (grade >= 70) {
//         document.write("C 입니다.");
//     } else {
//         document.write("D 입니다.");
//     }
// }
checkMax(name1);
function checkMax(name1) {
   let numAry = [];
    for (let i = 0; i <= 5; i++) {
        let name1 = window.prompt('숫자를 입력하세요.');
        numAry[i] = parseInt(name1);
    }
    document.write(numAry);
    let Max = 0;
    for (num of numAry) {
        if (num > Max) {
            Max = num;
        }
    }
    document.write("Max: " + Max);
}


