let numbers = [34, 55, 22, 10, 100, 6, 7];
numbers.sort(function (a, b) {
    return a - b;
    // if(a > b) {
    //     return 1;
    // }else {
    //     return -1;
    // }
});

// console.log(numbers);
let ulTag = document.createElement('ul');
document.getElementById('show').append(ulTag);
let sum = 0;
numbers.forEach(function (item, idx, ary) {
    sum += item;
    console.log(item, idx);
    let liTag = document.createElement('li');
    liTag.innerHTML = item;
    ulTag.append(liTag);
    // 1  >>  배열의 요소  2>> index 값
});

let liTag = document.createElement('li');
liTag.innerHTML = '합계: ' + sum;
ulTag.append(liTag);