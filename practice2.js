// const numbers = [52, 53, 49, 77, 21, 32]; // исходный массив

// // создадим переменную в которую будем сохранять текущее минимальное значение
// // установим в нее значение из первого элемента массива
// let minimum = numbers[3];

// for (const item of numbers) {
//   if(item < minimum) {
//     minimum = item; // если находим другое минимальное число, то сохраняем в переменную
//   }
// }



// const goods = [
//   {
//     name: "AirPods",
//     description: "Классные беспроводные наушники",
//   },
//   {
//     name: "MacBook Pro",
//     description: "Ноутбук на все случаи жизни",
//   },
//   {
//     name: "iPhone",
//     description: "",
//   },
//   {
//     name: "Дошик",
//   },
// ]

// // Просто возвращаем значения описания
// const withDescription = goods.filter(function (item) {
//   return item.description
// })
// console.log(withDescription);


//Давайте реализуем функцию, которая будет принимать на вход количество секунд
// и в консоли выводить обратный отсчет с интервалом в 1 секунду, после чего выводить сообщение «Время истекло!».

// const timer = (deadline) => {
//     if (isNaN(+deadline)) { // + - приводим значение к number, если это NaN,
//         console.log('Передано некорректное число'); // выводим сообщение
//         return; // выходим из функции
//     }

//     let time = deadline;
//     const interval = setInterval(() => {
//         time -= 1;
//         console.log(time);
//     }, 1000);

//     setTimeout(() => {
//         clearInterval(interval);
//         console.log('Время истекло!')
//     }, deadline * 1000)
// };

// //const deadline = prompt('На сколько секунд вы хотите поставить таймер?');
// timer(deadline);

