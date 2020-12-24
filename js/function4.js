function input_friend() {
    let fruit = document.getElementById('fruit').value;
    let liTag3 = document.createElement('li');
    liTag3.innerHTML = fruit;
    console.log(fruit);

    document.getElementById('ul').append(liTag3);
    document.getElementById('fruit').value = '';
}

let ulTag = document.createElement('ul');
ulTag.innerHTML = 'Apple'
ulTag.id = 'ul';

let liTag = document.createElement('li');
liTag.innerHTML = 'Banana';
let liTag1 = document.createElement('li');
liTag1.innerHTML = 'Orange';

ulTag.append(liTag);
ulTag.append(liTag1);

document.getElementById('show').append(ulTag);

console.log(ulTag);