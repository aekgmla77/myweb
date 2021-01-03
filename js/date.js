let today = new Date('2020-12-01'); //GMT:00:00:00 -> 09:00:00
// today.setMonth(0);
// console.log(today.getDay());

function setCal(yyyy, mm, dd) {
    let today = new Date(yyyy + '-' + mm + '-' + dd);
    today = new Date(yyyy, mm, 1);
    new Date(yyyy, mm, 0)
    // >> 1이면 그 달의 첫날. 0이면 마지막날 가져옴.
    console.log(today.getDate());
}

// setCal('2020', '06', '05');

let table = document.createElement('table');
table.setAttribute('border', '1');
let tr = document.createElement('tr');
function showCal(yyyy, mm) {
    let days = ['일', '월', '화', '수', '목', '금', '토'];
    for (day of days) {
        let th = document.createElement('th');
        th.innerHTML = day;
        tr.append(th);
    }
    let cnt = 0;
    table.append(tr);
    let dates = [];
    let first = new Date(1900, 01, 01);
    let today = new Date(yyyy + '-' + mm + -1);
    today= new Date(yyyy, mm, 0);
    console.log(first);
    for (let i = 1; i <= today.getDate(); i++) {
        for(let n = first.getDate(); n <= i; n++) {
        if (i % 7 == 1) {
            tr = document.createElement('tr');
        } else if (n % 7 == 0){
            dates.unshift('*');
        }
    }
        
        dates.push[i];
        dates.unshift[i];
        let td = document.createElement('td');
        td.innerHTML = i;
        tr.append(td);
        table.append(tr);
    }
    document.getElementById('show').append(table);
    console.info(table);
}

showCal(1900, 4);