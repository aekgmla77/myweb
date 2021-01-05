
let s1 = document.getElementById('show');
        
        let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'];
        let table = document.createElement('table');
        table.setAttribute('border', '1');
        let tr = document.createElement('tr');
        for(day of days){
            let td = document.createElement('td');
            td.innerHTML += day;
            tr.append(td);
            td.style.background = 'lightblue';
        }
        table.append(tr);
        s1.append(table);
        console.log(table);

        let tr1 = document.createElement('tr');
        for(let i = 1; i <= 31; i++){
            let td1 = document.createElement('td');
            td1.innerHTML += i;
            tr1.append(td1);
            if(i % 7 == 0){
                td1.setAttribute('style', 'color:blue; text-align : center;')
                // td1.style.color = 'blue';
                table.append(tr1);
                tr1 = document.createElement('tr');
            } else if (i % 7 == 1) {
                td1.style.color = 'red';
            }
        }
        table.setAttribute('style', 'text-align : center;')
        table.append(tr1);
        
        // 날짜만 반복문
        // for(let i = 0; i < days.length; i++){
        //     let h = document.createElement('h1');
        //     h.innerHTML += days[i];
        //     console.log(h);
        //     s1.append(h);
        // }




        <div id="show"></div>
        <!-- <table border="1">
            <tr>
                <td><label for="id">ID</label>
                    <input type="checkbox" name="id" id="id">
                </td>
                <td>홍길동</td>
                <td>20세</td>
                <td>독서</td>
                <td><button>OK</button></td>
            </tr>
            <tr>
                <td><label for="id">ID</label>
                    <input type="checkbox" name="id" id="id"></td>
                <td>홍길동</td>
                <td>20세</td>
                <td>독서</td>
                <td><button>OK</button></td>
            </tr>
        </table> -->
        <script>
            // let table = document.createElement('table');
            // table.setAttribute('border','1');
            // let tr = document.createElement('tr');
    
            // let td = document.createElement('td');
            // let label = document.createElement('label');
            // label.setAttribute('for','id');
            // label.innerHTML = 'ID';
            // td.append(label);
    
            // let td1 = document.createElement('td');
            // td1.innerHTML = '홍길동';
    
            // let td2 = document.createElement('td');
            // td2.innerHTML = '20세';
    
            // let td3 = document.createElement('td');
            // td3.innerHTML = '독서';
    
            // let td4 = document.createElement('td');
            // let button = document.createElement('button');
            // button.innerHTML = 'OK';
            // td4.append(button);
    
            // tr.append(td);
            // tr.append(td1);
            // tr.append(td2);
            // tr.append(td3);
            // tr.append(td4);
            // table.append(tr);
            // console.log(table);

            document.getElementsByClassName('left')[0].innerHTML = 'JS 튜토리얼';

            function makeMulti(val) {
            let show = document.getElementsByClassName('show');
            let table = document.createElement('table');
            table.setAttribute('border', '1');
            let tr = document.createElement('tr');
            for (let i = val; i <= val; i++) {
                for (let n = 1; n <= 9; n++) {
                    tr = document.createElement('tr');
                    let td = document.createElement('td');
                    let td1 = document.createElement('td');
                    let td2 = document.createElement('td');
                    let td3 = document.createElement('td');
                    let td4 = document.createElement('td');
                    td.innerHTML += i;
                    td2.innerHTML += n;
                    td4.innerHTML = i * n;
                    td1.innerHTML = '*'
                    td3.innerHTML = '=';
                    tr.append(td);
                    tr.append(td1);
                    tr.append(td2);
                    tr.append(td3);
                    tr.append(td4);
                    table.append(tr);
                }
            };
            console.log(table);
            return table;
        }
        result = makeMulti(3);
        show.append(result);



        <!-- let show = document.getElementById('show');
// show = document.getElementsByClassName('show');
// // class name = show 인 걸 가져오는 거
// show = document.getElementsByTagName('div');

// show = document.querySelectorAll('div>h3');
// // innerHTML(getElement~~) 과 비슷함.
// for(let i = 0; i < show.length; i++){
//     show[i].innerHTML = "World";
// }
// console.log(show); --></script>


<script>
let numbers = [4, 3, 9, 3, 2, 27, 1];
let x = numbers[0];
for(let i = 0; i < numbers.length; i++){
    if(x < numbers[i] || x > numbers[i]){
        x = numbers[i];
    }
    console.log(x);
}
</script>



if(xhtp.readyState == 4 && xhtp.status ==200) {
    // console.log(xhtp.responseXML);
    let doc = xhtp.responseXML;
    let result = doc.querySelectorAll('dataset > record');
    let ulTag = document.createElement('ul');
    let table = document.createElement('table');
    table.setAttribute('border', '1');
    let tr = document.createElement('tr');
    let names = ['번호', '성', '이름', '이메일', '성별', 'IP'];
    for(name of names){
        let th = document.createElement('th');
        th.innerHTML += name;
        tr.appendChild(th);
    }
    table.appendChild(tr);
    for(let i = 0; i < result.length; i++){
        tr = document.createElement('tr');
        for(let j = 0; j < result[i].childNodes.length; j++){
            let td = document.createElement('td');
            let str = result[i].childNodes[j].childNodes[0].nodeValue;
            let textNode = document.createTextNode(str);
            td.appendChild(textNode);
            tr.appendChild(td);
        }
        table.appendChild(tr);
        // result[i].childNodes[1].childNodes[0].nodeValue;
    }
    let show = document.getElementById('show');
    show.appendChild(table);
    // show.innerHTML = xhtp.responseText;
}