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

// function randomNumber (min, max) {
 
//     return Math.floor(Math.random() * (max - min +1 )) + min;
// }
//  console.log(randomNumber (1,10)); //так было написано в интернете, если честно не понимаю принцип

//6

//функция, которая будет принимать на вход целое число, а возвращать массив случайных целых чисел от 0 до переданного числа.
// Длина массива должна быть в 2 раза меньше переданного числа.

function randomNumber (min, max) {

    return Math.floor(Math.random() * (max - min +1 )) + min;
   
   };
   
   function Integer(max) {
   
   const arr = [];
   
   for (let i = 0; i < (Math.floor(max)-1) / 2; i++ ) {
   
       arr.push(randomNumber( 0, max));
   
       };
   
       return arr;
   }
   console.log(Integer(9));







//8
// let myDate = new Date();
// console.log(myDate);


//9
// let currentDate = new Date();
// currentDate.setDate(73);
// console.log(currentDate); // не поняла про подсказку и getDate(), так вроде тоже вышло....?


//10
//Дата: <число> <месяц на русском> <год> - это <день недели на русском>.
//Время: <часы>:<минуты>:<секунды></секунды>

// const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
// const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
// "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
// let myDate = new Date();

// let fullDate = myDate.getDate()+  ' ' + months[myDate.getMonth()] + ' ' + myDate.getFullYear() + ' - ' + 'это'+  ' ' + days[myDate.getDay()]
//  + ' ' + myDate.getHours()+ ':' + myDate.getMinutes() + ':' + myDate.getSeconds();
//  console.log(fullDate);


//11

const arrFruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
//console.log(arrFruits);
const arrFruitsNew = arrFruits.sort(() => Math.random() - 0.5);
 console.log(...[arrFruitsNew]);