// //1
// const str = "js";
// console.log(str.toLocaleUpperCase());
// или 
// console.log('js'.toUpperCase());

//2

// function newArr(arr, str) {

//     arr.forEach((find) => {
//         if(find.toLowerCase().includes(str.toLowerCase())){
//             console.log (find);
//         }
//         arr.push(find);
//     });
// }

//newArr(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко');
//newArr (['яблоко', 'груша', 'гриб', 'огурец'], 'гру');
//newArr (['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'); //тут не знаю, как получить пустой массив, может в  if добавит else ток не понимаю какое условие и действие


//3

// let numb = 32.58884;
// //console.log(Math.floor(numb)); //До меньшего целого
// //console.log(Math.ceil(numb));  //До большего целого
// //console.log(Math.round(numb)); // До ближайшего целого


//4

// const arrNumber = [52, 53, 49, 77, 21, 32];
// console.log(Math.max(...arrNumber));
// console.log(Math.min(...arrNumber));   //можно ли еще каким-нибудь вариантом записать и найти значения ????

//5

function randomNumber (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.random() * (max - min +1 ) + min;
}
 
console.log(randomNumber (1,10)); //так было написано в интернете, но целое число не выхолит, если честно не понимаю принцип

