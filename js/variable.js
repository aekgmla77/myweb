//undefined 상태 (변수에 값을 정하지 않으면)
let something;
something = 1 > 2;
something = "";

if (something) {
    console.log("참입니다.");
} else {
    console.log("거짓입니다.");
}

//object
something = {
    name: 'Hong',
    age: 20,
    phone: '010-1111-2222'
}
let name = something.name;
let age = something['age'];
// .name, ['age']  >> 두 가지 방법.

for (field in something) {
    console.log(field, something[field]);
    // java의 class와 비슷함.
}

let nameAry = ['Hong','Park','Kim', 'Hwang', 'Lee'];
let name1 = nameAry[0];
let name2 = nameAry[1];
nameAry[2] = 'Choi';

for (let i = 0; i < nameAry.length; i++) {
    console.log('nameAry[' + i + '] => ' + nameAry[i]);
}

document.write('<table border="1">');
document.write('<tr><td>순번</td><td>이름</td></tr>');
for(let i = 0; i < nameAry.length; i++) {
    document.write('<tr><td>' + i + '</td><td>' + nameAry[i] + '</td></tr>');
    // console.log(str);
}
document.write('</table>');
// 배열은 of 
// 두 가지 방법. 골라서 쓰기