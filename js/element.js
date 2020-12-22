let show = document.getElementById('show');
console.log(show.id);
// <div id="show">Hello</div> console.log(show)  >>  값인 hello만 가지고 오는 게 아니라, 전체를 가져옴
// console.log(show.innerHTML);  >> 값만 가져옴.
// console.log(show.getAttribute('id'));   >>  id의 속성값을 읽어옴.
function turnOn() {
    let img1 = document.getElementsByTagName('img');
    img1[0].src = 'https://www.w3schools.com/js/pic_bulbon.gif';
    console.log(img1[0]);
}
function turnOff() {
    let img1 = document.getElementsByTagName('img');
    img1[0].src = 'https://www.w3schools.com/js/pic_bulboff.gif';
    console.log(img1[0]);
}