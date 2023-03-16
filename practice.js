//функция для нечетных чисел из массива

//  function numb(numberArray) {
//     for (let i = 0; i < numberArray.length; i++) {
//         if (numberArray[i] % 2 !== 0) {
//             console.log(numberArray[i]);
//            }
         
//         }
// }

// numb(numberArray);


// let i = 0; //счетчик цикла
// while (i < 5) {
// 	/*
// 		С помощью оператора ++ увеличиваем i на единицу 
// 		при каждом проходе цикла.
// 	*/
// 	i++;
// 	console.log(i);
// }

//****** от 1 до 100
// let i = 1;
// while (i <= 100) {
//     i++;
//     console.log(i);
// }

// for ( i = 1; i <= 100; i++){
//     console.log(i);
// }

// //от 11 до 33//
// let i = 11;                   ///?почему не выводит 11
// while (i <= 33) {
//     i++;
//     console.log(i);
// }

// for (let i = 11; i <= 33; i++) {
//     console.log(i);
// }    
    

//3  ряд четных чисел в промежутке от 0 до 100.

// for ( let i = 0; i <= 100; i++ ){         ///как через while
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

//4 С помощью цикла найдите сумму чисел от 1 до 100.   
   
// let sum = 0;
// for (let i = 1; i <= 100; i++) {         /// если вывести одну сумму как отдельную цифру -console.log(sum)? за циклом?
//     sum += i;  
//      console.log(sum);  
//     }

// //5 Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.
// const arr = [1, 2, 3, 4, 5];
// for (i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }


//6 Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for найдите сумму элементов этого массива. Запишите ее в переменную result.

// const arr = [1, 2, 3, 4, 5];
// let result = 0;                                     //если просто let result; то NaN

// for (i = 0; i < arr.length; i++) {
//     result += arr[i];
//     console.log(result);
    
// }


// var result = 1;                               //почему тут 1 не 0, как в примере выше
// var arr = [2, 3, 4, 5];
// for (var i = 0; i < arr.length; i++) {
// 	result *= arr[i];
// }
// alert(result);


//7  Дан объект obj. С помощью цикла for-in выведите на экран ключи и элементы этого объекта.

// let arr = {
//     green: 'зеленый', 
//     red: 'красный', 
//     blue: 'голубой'};

//for (color in arr) {           ///arr[color]; почему нельзя вывести после цикла внутри это
//     //console.log (color);                  
//     //console.log (arr[color]);     //arr.color   arr['color']
//     //console.log (color, arr [color]);
//     // console.log (color + ' - это ' + arr[color] + '.') ; 
//     //console.log (`$ {color} - это $ {arr[color]}`) ;      // ???почему в консоле ерунда                          
//  }



// let obj = {Коля: 200, Вася: 300, Петя: 400};
// for (key in obj) {
// 	//console.log(`$ {key} - зарплата $ {obj[key]} долларов.`)   ????//не пишет в консоле имена
//     console.log(key + ' - зарплата ' + obj[key] + ' долларов.');

// }

//7  Дан массив с элементами 2, 5, 9, 15, 0, 4. С помощью цикла for и 
//оператора if выведите на экран столбец тех элементов массива, 
//которые больше 3-х, но меньше 10.
// const arr =  [2, 5, 9, 15, 0, 4];
// for (let i = 0; i < arr.length; i++) {
//     if ( i < 3 && i < 10 ) {
//         console.log(arr[i]);
//     }
// }


//10  Дан массив с числами. Числа могут быть положительными и отрицательными.
// Найдите сумму положительных элементов массива.