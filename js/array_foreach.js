// let persons = ['Hong', 'Hwang', 'Park', 'Choi'];

// persons.forEach(myCallback);


// function myCallback(a,b,c) {
//     let ulTag = document.createElement('ul');
//     let liTag = document.createElement('li');
//     // console.log(a,b,c);
//     liTag.innerHTML = a;
//     ulTag.append(liTag);
//     document.getElementById('show').append(ulTag);
// }

let persons1 = [];
let person = {
    name: '이혜빈',
    age: 20,
    score: 90
}

persons1.push(person);

let person1 = {};
person1.name = '이나경';
person1.age = 21;
person1.score = 80;
persons1.push(person1);

// persons1.push('송다희');

console.log(persons1);

let table = document.createElement('table');
table.setAttribute('border', '1');

function drawTable() {
    let titles = ['이름', '나이', '점수'];

    let tr = document.createElement('tr');
    for (title of titles) {
        let th = document.createElement('th');
        th.innerHTML = title;
        tr.append(th);
    }
    table.append(tr); // title 생성
    persons1.forEach(mycallFunc);

    persons1.forEach(function (a, b, c) {
        document.getElementById('show').append(table);
        // let table1 = document.createElement('table');
        // table1.setAttribute('border','1');
        // let tr2 = document.createElement('tr');
        // let td = document.createElement('td');
        // td.innerHTML = a.name;
        // let td1 = document.createElement('td');
        // td1.innerHTML = a.age;
        // let td2 = document.createElement('td');
        // td2.innerHTML = a.score;

        // tr2.append(td);
        // tr2.append(td1);
        // tr2.append(td2);
        // table1.append(tr2);
    });
}

function mycallFunc(a,b,c) {
    let tr = document.createElement('tr');
    for (field in a) {
        let td = document.createElement('td');
        td.innerHTML = a[field];
        tr.append(td);
    }
    table.append(tr);
}
