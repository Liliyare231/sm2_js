//запрос у пользователя
let a = prompt('Введите число блоков');

a = Number(a);
let box = '<div class="box"></div>';
let for_box = document.querySelector('.for_box');
let x;
for ( x = 1; x <= a; x++) {
    let box = '<div class="box">' + x + '</div>';
    let for_box = document.querySelector('.for_box');
 

    for_box.insertAdjacentHTML('beforeend',box);
}


