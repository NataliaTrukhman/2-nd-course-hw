// //1
// const str = "js";
// console.log(str.toLocaleUpperCase());
// или 
// console.log('js'.toUpperCase());

//2





// function searchStart  (array, str)  {
//     const newArray = []
//     array.map((find) => {
       
//         if (find.toLowerCase().startsWith(str.toLowerCase())) {
//             newArray.push(find)
//         }
//     });
//     return newArray
// }

//function searchStart  (array, str)  {
        //const newArray = []
        // return array.filter((find) => find.toLowerCase().startsWith(str.toLowerCase()))};
        


// console.log (searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'));
// //console.log(searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'));
//console.log (searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино')); 

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
//  console.log(randomNumber (1,10)); //так было написано в интернете, если честно не до конца понимаю принцип

//return Math.floor(Math.random() * max);?

//6

//функция, которая будет принимать на вход целое число, а возвращать массив случайных целых чисел от 0 до переданного числа.
// Длина массива должна быть в 2 раза меньше переданного числа.

// function randomNumber (min, max) {

//     return Math.floor(Math.random() * (max - min +1 )) + min;
   
//    };
   
//    function Integer(max) {
   
//    const arr = [];
   
//    for (let i = 0; i < (Math.floor(max)-1) / 2; i++ ) {   ///делали c вместе с проверяющим под темами - не до конца понимаю эту строчку -1 потому что не надо включать в длину max?
   
//        arr.push(randomNumber( 0, max));
   
//        };
   
//        return arr;
//    }
//    console.log(Integer(9));


//7  Напишите функцию, которая на вход принимает 2 целых числа,
// а в качестве результата возвращает случайное целое число в этом диапазоне.


// function randomNumber (min, max) {
 
//     return Math.floor(Math.random() * (max - min +1 )) + min;
// }
// randomNumber ();

// console.log(randomNumber (8,18))  // не понимаю разницы с заданием  c 5 - м заданием



//8
// let myDate = new Date();
// console.log(myDate);


//9
//let currentDate = new Date();

//currentDate.setDate(73);
//console.log(currentDate); // не поняла про подсказку и getDate(), так вроде тоже вышло....?


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

//  function memorizeWords() {

// const arrFruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
// //console.log(arrFruits);
//  arrFruits = arrFruits.sort(() => Math.random() - 0.5);   // можно обьяснить как работает метод??/взято из подсказки в домашке
//  alert (arrFruits);

//  let fistQuestion = prompt('Чему равнялся первый элемент массива?');
//  let secondQuestion = prompt ('Чему равнялся последний элемент массива?');

// if (fistQuestion.toLowerCase() == arrFruits[0].toLowerCase() && secondQuestion.toLowerCase() == arrFruits[arrFruits.length-1].toLowerCase()){
//     alert('Поздравляю, вы угадали оба элемента!');
// } else if (fistQuestion.toLowerCase() == arrFruits[0].toLowerCase() || secondQuestion.toLowerCase() == arrFruits[arrFruits.length-1].toLowerCase()) {
//     alert( 'Вы близки к победе');
// } else 
//     alert ('Пользователь ничего не угадал');
//  }

// arrFruits();
