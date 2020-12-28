let str = 'Please locate where "locate" occurs!';
let strLeng = str.length;

// console.log(strLeng);

//indexOf, lastIndexOf, search

strLeng = str.indexOf('locate', 13);
// 찾고자 하는 문자열 위치 , 없으면 -1 return
strLeng = str.lastIndexOf('locate');
// 뒤에서부터 찾음
console.log(strLeng);
console.log(str.search('locate'));

// slice, substring, substr
let fruit = 'Apple, Banana, Kiwi';
let result = fruit.slice(0, 5);
//5번째 값은 포함하지 않음.
let from = fruit.indexOf('Banana');
result = fruit.substring(from, from + 6);

result = fruit.substr(from, 6);
// 6개짜리 가져오는 거.
console.log(result); 

//replace
let newFruit = fruit.replace('Banana', 'Orange');
// 바꾼 결과값을 새로운 변수에 담는다는 뜻.
console.clear();
console.log(newFruit);

// toUpperCase, toLowerCase, concat, trim, padStart, padEnd
 
console.log('    good    hello     '.trim().toUpperCase());
console.log('5'.padEnd(4, '0'));
// 앞에 네글자를 0으로 채운다. padStart
// 뒤에 네글자를 0으로 채운다. padEnd

let uri = 'http://www.naver.net';
console.log(uri.replace('net', 'com'));
console.log(uri.replace(uri.substring(uri.lastIndexOf('.')), '.com'));

let fruits = fruit.split(','); //Apple, Banana, kiwi
for(f of fruits) {
    console.log(f.trim());
}


