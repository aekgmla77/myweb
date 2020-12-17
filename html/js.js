 // var 이 변수는 아무 값이나 가능.
 var name = document.getElementById('show').innerHTML;
 console.log(name);
 document.getElementById('show').innerHTML = "World";
 // Element > 태그
 var divTag = document.createElement("div");
 divTag.innerHTML = "Nice"; //<div>Nice<div>
 // contents 뒤에 값을 넣어준다는 뜻 innerHTML
 document.getElementById('show').after(divTag);
 console.log("------------------------------------------");

 var li_1 = document.createElement("li");
 var li_2 = document.createElement("li");
 li_1.innerHTML = "Apple";
 li_2.innerHTML = "Orange";

 document.getElementById('fruit').append(li_1);
 document.getElementById('fruit').append(li_2);
 // append > 요소 내부의 끝 부분에서 삽입  -- append는 자식으로 붙는다는 뜻.

//  var tr = document.createElement("tr");
//  var tb = document.createElement("td");
//  var tb1 = document.createElement("td");
//  var tr1 = document.createElement("tr");
//  var tb2 = document.createElement("td");
//  var tb3 = document.createElement("td");

//  tb.innerHTML = "Name";
//  tb1.innerHTML = "age";
//  tb2.innerHTML = "Hong";
//  tb3.innerHTML = "15";
 
 
//  document.getElementById('tbl').append(tb);
//  document.getElementById('tbl').append(tb1);
//  document.getElementById('tbl').append(tb2);
//  document.getElementById('tbl').append(tb3);
//  document.getElementById('tbl').append(tb4);


 //////////////////////////////////////////////////////////////
 var grade = 3;
 for (var i = 1; i <= 9; i++) {
     var str = grade + ' * ' + i + '= ' + (grade * i);
     console.log(str);
 }
 // 결과값 : 5050
 var sum = 0;
 for (var i = 0; i <= 100; i++){
     sum += i;
 }
 console.log("결과값 : " + sum);