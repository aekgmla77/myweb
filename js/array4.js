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

let title = ['이름', '나이', '점수'];
let table = document.createElement('table');
table.setAttribute('border', '1');
function drawTable() {
    let tr = document.createElement('tr');
    for (titl of title) {
        let th = document.createElement('th');
        th.innerHTML = titl;
        tr.append(th);
        table.append(tr);
    }
    persons1.forEach(function(a,b,c)  {
        let tr1 = document.createElement('tr');
        for(field in a){
            let td = document.createElement('td');
            td.innerHTML = a[field];
            tr1.append(td);
            table.append(tr1);
        }
    });
}

document.getElementById('show').append(table);