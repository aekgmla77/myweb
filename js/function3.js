let name1 = window.prompt('숫자를 입력하세요.');
checkMax(name1);
function checkMax(name1) {
   let numAry = [];
    for (let i = 0; i <= 5; i++) {
        let name1 = window.prompt('숫자를 입력하세요.');
        numAry[i] = parseInt(name1);
    }
    document.write(numAry);
    let Max = 0;
    for (num of numAry) {
        if (num > Max) {
            Max = num;
        }
    }
    document.write("Max: " + Max);
}