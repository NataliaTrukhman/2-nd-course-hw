//1
// function getResult(arr, func) {
//     return Math.round(func(arr));
//   }

//   let mult = (arr) => arr.reduce((a, b) => a * b);
//   let sum = (arr) => arr.reduce((a, b) => a + b);

// console.log(getResult ([3, 4, 1, 9], mult));

//2

// const users = [
// 	{name: 'Jon', age: 22},
// 	{name: 'Richard', age: 18},
// 	{name: 'Anton', age: 32},
// 	{name: 'Lida', age: 23},
// 	{name: 'Bob', age: 44}
// ];

// function compareUser(a, b) { 
// 	if (a.age > b.age) return 1;
// 	if (a.age < b.age) return -1;
// 	return 0;
// }

// users.sort(compareUser);  

// function getSortedArrayObj() {
//     users.sort(compareUser);
//     console.log(users);
// } 

//  getSortedArrayObj();


//3

// function each(arr, func) {
//     return func(arr);

// }


// //1.1
// const arr = [1, '4', 9, 'two'];
// function reversArr(arr) {           //  let reversArr = (arr) =>
//     return arr.reverse();           //      arr.reverse();

// }

//1.2
// const arr = [1, '4', false, 9, 'two'];

// function toNumberArr(arr) {  
//         let result = []; 
//     for ( i = 0; i < arr.length; i++ ) {

//         if(isNaN(Number(arr[i])) == false ) 

//          result.push(Number(arr[i]));
//     }
//     return result;
// }


//console.log(each(arr, reversArr));
//console.log(each(arr, toNumberArr));

//4
// Напишите программу, которая на протяжении 30 секунд, каждые 3 секунды, будет выводить в консоль текущую дату. 
// Последней строкой должно выводиться сообщение «30 секунд прошло».

// function showDate() {
//     let currentDate = new Date();
//     console.log(currentDate);
// }

// showDate();

// function displayDate() {
// const interval = setInterval(showDate, 3000);   //
// setTimeout(() => {
//     clearInterval(interval);
//     console.log('Время истекло!')
// }, 30000);
// };
// displayDate();

//5
// function calling() {
//     console.log('Звоню!')
// };

// function beeps() {
//     setTimeout(talk, 1000);
//     console.log('Идут гудки...');
    
// }

// function talk() {
//     console.log('Разговор')
// }

// calling();
// beeps(talk);
