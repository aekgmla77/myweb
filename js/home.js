
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