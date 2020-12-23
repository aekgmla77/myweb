let friend1 = {
    name: '송다희',
    age: 20,
    hobby: '코딩',
    grade: 'A'
}
let friend2 = {
    name: '이나경',
    age: 22,
    hobby: '자바',
    grade: 'B'
}
let friend3 = {
    name: '이혜빈',
    age: 25,
    hobby: '오라클',
    grade: 'C'
}

let friends = [friend1, friend2, friend3];
// console.log("이름 " + "나이 " + "취미 ");
document.write('<table border="1">');
document.write('<tr><th>이름</th><th>나이</th><th>취미</th></tr>');
for (fro of friends) {
    document.write('<tr align="center"><td>' + fro.name + '</td>' + '<td>' + fro.age + '</td>' + '<td>' + fro.hobby + '</td></tr>');
}
document.write('</table>');



document.write("교수님 꺼 ================================");



document.write('<table border="1"><tr align="center">');
for (field in friend1) {
    document.write('<th>' + field + '</th>')
}
document.write('</tr>');
for (friend of friends) {
    document.write('<tr align="center">');
    for (field in friend) {
        document.write('<td>' + friend[field] + '</td>');
    }
    document.write('</tr>');
}
document.write('</table>');



let numbers = [3, 4, 8, 6, 12, 85, 64, 25, 100];
let sum = 0;
for (num of numbers) {
    if (sum < num) {
        sum = num;
        console.log(sum);
    }
}
console.log("큰수: " + sum);
