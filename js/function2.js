// function nameFunc() {
// let name1;
// let name1 = window.prompt('숫자를 입력하세요.');
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

// let numAry = [];
// for (let i = 0; i < 5; i++) {
//     name1 = window.prompt('숫자를 입력하세요.');
//     numAry[i] = parseInt(name1);
// }
// document.write(numAry);

// checkMax(name1);
// function checkMax(name1) {
//     let Max = 0;
//     for (num of numAry) {
//         if (num > Max) {
//             Max = num;
//         }
//     }
//     document.write('<p>Max: <b>' + Max + '</b></p>');
// }

// let friend1 = { }
// friend1.name = 'Hong';
// friend1.age = 20;
// friend1.hobby = 'reading';

// let friend2 = {
//     name : 'Hwang',
//     age : 22
// }
// fri of friends >> 뒤에걸 앞에 담는다는 뜻, field in fri  >> 담긴 변수를 뒤에 써줘야 함. for in >> 필드를 하나씩 가지고 옴.
// let friends = [];
// friends[0] = friend1;
// friends[1] = friend2;
// for (fri of friends) {
//     for(field in fri) {
//         console.log(fri[field])
//     }
// }





// document.write("======================ME========================================")
// let friends = [];
// for (let i = 0; i <= 3; i++) {
//     let name1 = window.prompt('이름을 입력하세요.');
//     let age2 = window.prompt('나이를 입력하세요.');
//     let friend = {};
//     friend.name = name1;
//     friend.age = age2;
//     friends[i] = friend;
// }
// document.write('<table border = "1">');
// document.write('<tr><th>이름</th><th>나이</th>');
// for (fri of friends) {
//     document.write('<tr>');
//     for (fro in fri) {
//         document.write('<td>' + fri[fro] + '</td>');
//     }
//     document.write('</tr>');
// }
// document.write('</table>');





// document.write('========================교수님=====================');

// let friends = [];
// for (let i = 0; i < 3; i++) {
//     let name1 = window.prompt('이름을 입력하세요.');
//     let age = window.prompt('나이를 입력하세요.');
//     let friend = {}; //object;
//     friend.name = name1;
//     friend.age = age;
//     friends[i] = friend;
// }
// document.write('<table border = "1">');
// for(friend of friends){
//     document.write('<tr>');
//     for(frend in friend){
//         document.write('<td>' + friends[frend] + '</td>');
//     }
//     document.write('</tr>');
// }
// document.write('</table>');
