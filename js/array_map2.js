let students = [];

for(let i = 1; i <= 5; i++){
    let std = {};
    std.sno = i;
    std.sname = 'Hong' + i;
    std.sgen = i % 2 == 0 ? 'M' : 'F';
    std.score = 80 + i;
    students.push(std);
}

let result = students.some(function(a,b,c){
    return a.score > 81;
});
// every - 모두 만족하면 true, 하나라도 다르면 false
// sum - 하나라도 충족하면 true, 하나라도 다르면 false

result = students.map(function(a){
    return a.sname;
}).indexOf('Hong');
console.log(result);
//indexOf >> 몇번째 위치인지 알려줌.
// console.log(students);



//**************************************reduce**************************************************** */

// let result = students.map(function(a,b,c){
//     return a.score;
// }).reduce(function(a,b,c,d){
//     return a < b ? a : b;
// });

// console.log('result: ', result);
//************************************************************************************************ */