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


//Код ниже получает из массива строк новый массив, содержащий их длины:

//const arr = ["Есть", "жизнь", "на", "Марсе"];
// const arrLength = [];
// for (var i = 0; i < arr.length; i++) {
//   arrLength[i] = arr[i].length;
// }
// const arrLength = arr.map(function(item) {
//     return item.length;
//  });

// filter 
//  const nums = [1, 2, 3, 4, 5, 6]                       //const nums = [1, 2, 3, 4, 5, 6]
//                                                          //const odds = nums.filter(function (num) {
// const odds = []                                             //return num % 2 !== 0
//                                                              //});
// for (let i = 0; i < nums.length; i++) {
//   if (nums[i] % 2 !== 0) {
//     odds.push(nums[i])
//   }
// }

// console.log(odds)

//Так как filter возвращает массив, 
//то у полученного массива мы можем продолжать по цепочке вызывать другие методы массива.
//const result = nums.filter(num => num >= 5).map(...).reduce(...)







////practice Codewars


//1
// const strCount =(str, letter)=> str.split(letter).length -1;    //Используем метод split, filter и свойство length:

  //console.log (strCount("Hello", "o"));               // arr.map(function(item) {
                                                             //return item.length;
                                                               //       });

//   console.log (strCount ("Hello", "l"));
//  console.log (strCount("", "z" ));


//2 Complete the square sum function so that it squares each number passed into it and then sums the results together.
// function squareSum(numbers) {
//     let sum = 0
//   for( let i = 0; i < numbers.length; i++) {
//     sum += numbers[i] **2                                                
//    }
//     return sum
//  }
//  console.log(squareSum([0, 3, 4, 5])); //Использовать map и reduce: // function squareSum(numbers) {
                                                                       //return numbers.map(n => n ** 2).reduce((a, b) => a + b, 0);
                                                                        //}  



//3

//our task is to find the nearest square number, nearest_sq(n) or nearestSq(n), of a positive integer n.

//For example, if n = 111, then nearest\_sq(n) (nearestSq(n)) equals 121, since 111 is closer to 121, the square of 11, than 100, the square of 10.

//If the n is already the perfect square (e.g. n = 144, n = 81, etc.), you need to just return n.
//const nearestSq = n => Math.pow(Math.round(Math.sqrt(n)), 2); //Math.sqrt и условное ветвление:


// function nearestSq(n) {
//     let nearstLow = nearst_low(n);
//     let nearstHigh = nearst_high(n);
  
//     return nearestSq < nearstHigh-n ? nearstLow : nearstHigh;
//   }
  
//   function nearst_high(n) {
//     if (Math.sqrt(n)%1 === 0) {
//       return n;
//     }
  
//     return nearst_high(++n);
//   }
  
//   function nearst_low(n) {
//     if (Math.sqrt(n)%1 === 0) {
//       return n;
//     }
  
//     return nearst_low(--n);
//   }
// console.log(nearestSq(9999));


//4
// function nearestSq(n){
//     let sqrt = Math.sqrt(n);
//  let sqrtCeil = Math.ceil(sqrt) ;
//  let floorsqrt = Math.floor(sqrt);
 
//  if ((sqrtCeil**2 - n) > (n - floorsqrt **2)) {
//      return floorsqrt**2;
//  } else if ( (sqrtCeil**2 - n) < (n - floorsqrt **2) ) {
//      return sqrtCeil**2;
//  }else {
//    return n
//  }
//  }

//5 
//  function solution(str){

// let resuiltText =str.split ('').reverse().join('');
//      return resuiltText;
//    }

//  console.log(resuiltText);

// //6
// What if we need the length of the words separated
//  by a space to be added at the end of that same word and have it returned as an array?
//  let text = "apple ban";
//  const resultText = text.split (' ');


//  let result = resultText.map(function (item) {
//     return  item = item + ' ' + item.length;
// })

//  console.log(result);

//
//  function addLength(str) {

//     const resultText = str.split (' ');
    
    
//      let result = resultText.map(function (item) {
//         return  item = item + ' ' + item.length;
//     })
    
//      return result;
//  }

//function addLength(str) {
    //return str.split(' ').map(word => word + ' ' + word.length)
  //}



    
//6
//There's a "3 for 2" (or "2+1" if you like) offer on mangoes. 
//For a given quantity and price (per mango), calculate the total cost of the mangoes.


// function mango(quantity, price){
//     let resuiltQuantity = quantity - Math.floor (quantity/3);
//     return resuiltQuantity *  price
  
//   }
//   console.log(mango(9, 5));

//7
// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// function litres(time) {
//     let litr = time * 0.5
//     return Math.floor(litr);
//   }

//   console.log(litres(0));


//7
// Given a set of numbers, return the additive inverse of each.
//  Each positive becomes negatives, and the negatives become positives.

//1 
// function invert(array) {
//     return array.map(item => item * -1);     //2  const invert = a => a.map(item => x!==0 ?-x : x )
//  }


//  //3
//  function invert(array) {
//     for (let i = 0; i < array.length; i++) {
//       if (array[item] != 0) {
//         array[item] = array[item] * -1;
//       }
//     }
  
//     return array ;
//   }

//  console.log(invert([]))


//8
// Complete the function that takes a non-negative integer n as input, 
// and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

// function powersOfTwo(n){
//     let arr = [];
//     for(let i=0; i<=n; i++)
//       arr[i] = 2**i;
//     return arr;
//   }
//   console.log(powersOfTwo(2))

 
  
  //2
//   function powersOfTwo(n){
//   let arr = [];
//   for (let i=0; i<=n; ++i){
//     arr.push(Math.pow(2, i));
//   }
  
//   return arr;
// }

// console.log(powersOfTwo(2))


//10
// Given a non-empty array of integers, return the result of multiplying the values together in order.
//  Example:[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
//Дан непустой массив целых чисел, вернуть результат умножения значений по порядку.


// function grow(x){
//     return x.reduce(function(product, n){
//         return product * n;
//     }, 1)
//   }

 //*
//   const grow = x => {
//     let res = 1;
//     for (let i = 0; i < x.length; i++) {
//       res *= x[i];
//     }
//     return res;
//   };

// *
//function grow(x){
//     return x.reduce((a, b)=> a * b,1);
//   }