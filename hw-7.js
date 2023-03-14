// //1
// const str = "js";
// console.log(str.toLocaleUpperCase());
// или 
// console.log('js'.toUpperCase());

//2

function newArr(arr, str) {

    arr.forEach((find) => {
        if(find.toLowerCase().includes(str.toLowerCase())){
            console.log (find);
        }
        arr.push(find);
    });
}

//newArr(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко');
//newArr (['яблоко', 'груша', 'гриб', 'огурец'], 'гру');
//newArr (['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'); //тут не знаю, как получить пустой массив, может в  if добавит else ток не понимаю какое условие и действие
