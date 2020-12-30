function drawTable() {
    let h2 = document.createElement('h2');
    h2.innerHTML = '입력 양식 데이터 전송 버튼';
    document.getElementById('show').append(h2);

    let form = document.createElement('form');
    form.innerHTML = '이름 : ';
    let input = document.createElement('input');
    input.setAttribute ('type', 'text');
    form.append(input);
    
    let form1 = document.createElement('form');
    form1.innerHTML = '학과 : ';
    let input2 = document.createElement('input');
    input2.setAttribute('type', 'text');
    form1.append(input2);

    let input3 = document.createElement('input');
    input3.setAttribute('type', 'submit');
    input3.setAttribute('value','전송');

    show.append(form);
    show.append(form1);
    show.append(input3);
}