//타이틀 영역
var tableTag = document.getElementById('tbl');

trTag1 = document.createElement('tr'); //<tr> </tr>
tdTag1 = document.createElement('td'); //<td> </td>

tdTag1.innerHTML = 'Name';
tdTag1.setAttribute('id','first'); //setAttribute > 옵션
tdTag1.setAttribute('class','title');

tdTag2 = document.createElement('td');
tdTag2.innerHTML = 'Age';
tdTag2.setAttribute('class','title');

trTag1.append(tdTag1);
trTag1.append(tdTag2);

tableTag.append(trTag1);



//Data 영역
trTag2 = document.createElement('tr');
tdTag3 = document.createElement('td');

tdTag3.innerHTML = 'Hong';
tdTag3.setAttribute('class','data');

tdTag4 = document.createElement('td');
tdTag4.innerHTML = '15';
tdTag4.setAttribute('class','data');

trTag2.append(tdTag3);
trTag2.append(tdTag4);

console.log(trTag1);

tableTag.append(trTag2);


