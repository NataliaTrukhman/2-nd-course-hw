//function showTextButton() {
 // alert('Работает скрипт');
 //  let userAnswer = prompt ('Загадка');
 //  if (userAnswer=== 'елка') {
 //   alert('Молодец!');
 //  } else {
//    alert('НЕМолодец!');
//   }}

//function delMessage() {
//   let del = confirm('Вы правда хотите удалить?');//true false

 //   if (del) {
 //       alert('Ок, удалено!');
//    } else {
//    alert('Не удалено!');
 //   }
//}

//можно через тернарный оператор:

// del ? alert('Ок, удалено!'): alert('Не удалено!');
// }


//стрелочные функции

//const mult = (a,b) => a * b;
//    muit (2, 3)

 //const puzzle = (a,b) => {
   //if (a>b) {
   //     return a + b;
   // } else {
   //     return a * b;
   // }
//}
//console.log(puzzle(2, 3));


//const numbs = [2, 4, 5, 6, 8];

//numbs.forEach((el, index) => {
	//console.log(`${index}: ${el}`);
//});


// let arrSum = [3, 4, 5, 6];

// const sum = (a, b, ...rest) => {
//    let result = a + b;
//    console.log (result);
// console.log (rest);
// }
// console.log(sum(1, 4, ...arrSum));

 //let numbers = [5, 100, 99, 4, 23];
// numbers = numbers.sort();
 //console.log(numbers);



//  let arrSum = [3, 4, 5, 6];


// const sum = (a, b, ...rest) => {
//   let result = a + b;
//   return result;
// };

// console.log(sum(1, 4, ...arrSum));


// let currentDate = new Date();
// console.log(currentDate);


// let now = new Date();
// let formattedDate = now.toLocaleString("ru", {
//  day: "numeric",
//  month: "numeric",
//  year: "numeric",
//  hour: "numeric",
//  minute: "numeric",
//  hour12: false,
// });

// console.log(formattedDate); // Например: "26.03.2022 16:50"


// let formattedDate = new Date().toLocaleString("ru", {
//    year: "2-digit",
//    month: "2-digit",
//    day: "2-digit",
//    hour: "2-digit",
//    minute: "2-digit",
//   }).replace(", ", " ");
//   console.log(formattedDate);


