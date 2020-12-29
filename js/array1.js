let fruits = ['Apple','Banana'];
fruits[2] = 'Mango';
fruits[fruits.length] = 'Tomato';
// 배열 추가 방법.
fruits[fruits.length] = 'Lemon';
fruits[2] = 'WaterMelon';
delete fruits[2];

// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }

fruits = [];
fruits.push('Apple');
fruits.push('Banana');
fruits.unshift('Mango');
fruits.unshift('Orange');
// unshift >> 맨 앞에 넣기

// fruits.pop();
// // 맨 뒤에 있는 걸 지우기
// fruits.shift();
// // 맨 앞에 있는 거 지움
let fruit = fruits.splice(1, 0, 'New Orange', 'New Apple');
// 2번째 위치에 하나 지움.(1,1), 추가도 가능.
console.log(fruit);
for(fru of fruits){
     console.log(fru);
}

fruits = ['Apple', 'Banana', 'Mango'];
fruit = {
    name : 'Apple',
    price : 2000,
    weight : 50
}

fruit['name']; // name based ; fruit.name;
fruits[0]; //index based

