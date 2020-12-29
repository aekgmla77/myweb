  
let friends = [];
let i = 0;
// 밖에 빼는 이유는 안에 넣으면 계속 초기화가 되기 때문.

function input_friend() {
    let names = document.getElementById('name').value;
    let ages = document.getElementById('age').value;
    let hobs = document.getElementById('hobby').value;
    let trs = document.createElement('tr');
    

    let friend = {};
    friend.name = names;
    friend.age = ages;
    friend.hobby = hobs;

    
    document.getElementById(trs);
    let tds = document.createElement('td');
    tds.innerHTML = names;
    
    let tds1 = document.createElement('td');
    tds1.innerHTML = ages;

    let tds2 = document.createElement('td');
    tds2.innerHTML = hobs;
    trs.append(tds);
    trs.append(tds1);
    trs.append(tds2);

    document.getElementById('friends').append(trs);
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('hobby').value = '';
    
    // friends[i++] = friend;
    // console.clear();
    // // clear >> 전에 있는 걸 다 지움.

    // for(friend of friends) {
    //     for(field in friend) {
    //         console.log(friend[field]);
    //     }
    // }



    // console.log(names.value, age.value, hob.value);
    // document.getElementById('show').innerHTML = names.value + ',' +  age.value + ',' + hob.value;
    // document.getElementById('result').value = names.value + ',' +  age.value + ',' + hob.value;
}
