//запрос у пользователя
let a = prompt ('Введите стоимость товара');
let b = prompt ('Введите количество ваших денег');
// let otvet =document.querySelector('.otvet')

a = Number(a);
b = Number(b);
let text;

if(a == b){
     text = 'Покупка прошла успешно'
}else{
    if(a > b){
        let x = a-b;
        text =('Для покупки не хватает '+ x + ' рублей')
    }else {
        let y = b-a;
       text = ('Покупка совершина! Ваша сдача '+ y + ' рублей')
    }  
}

let box = '<div class="box">'+text+'</div>';
let for_box = document.querySelector('.for_box');
for_box.style.border = '1px solid red';
for_box.style.borderRadius = '40px';
for_box.style.fontSize = '18px';
for_box.style.padding = '15px 30px';
for_box.style.width = '500px';


for_box.innerHTML = box
