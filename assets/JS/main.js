//запрос у пользователя
let a = prompt ('Введите стоимость товара');
let b = prompt ('Введите количество ваших денег');

a = Number(a);
b = Number(b);

if(a == b){
    console.log('Покупка прошла успешно')
}else{
    if(a > b){
        let x = a-b;
        console.log('Для покупки не хватает '+ x + ' рублей')
    }else {
        let y = b-a;
        console.log('Покупка совершина! Ваша сдача '+ y + ' рублей')
    }  
}
