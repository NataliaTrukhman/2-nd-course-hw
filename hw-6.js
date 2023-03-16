//1
// const numbers = [1, 5, 4, 10, 0, 3];
// for (let i = 0; i < numbers.length; i++ ) {
//     console.log(numbers[i]);
//     if(numbers[i] == 10) break;

// };

//2
// const numb = [1, 5, 4, 10, 0, 3];
// console.log(numb.indexOf(4));


//3
//  const numbs = [1, 3, 5, 10, 20];
//  console.log(numbs.join(' '));

//4


// const arr = [];
// for (let i = 0; i < 3; i++) {
//     arr.push([]);
//     for (let k = 1; k <= 3; k++) {
//         arr[i].push('1');
//     }
// }
// console.log(arr);

//5
// const arr = [1, 1, 1]; //методом push
// arr.push (2, 2, 2);
// console.log(arr); // почему если записать короче: console.log(arr.push(2, 2, 2)); - выводит другой результат

// const arr = [1, 1, 1]; // методом contact 
// console.log(arr.concat([2, 2, 2]));  

//6
// const arr = [9, 8, 7, 'a', 6, 5];
// arr.sort();
// arr.pop();
// arr.reverse(); // если нужно вернуть начальный порядок цифр
// console.log(arr);  // неверный скорее всего способ


//7
// const arr = [9, 8, 7, 6, 5];
// let ask = Number(prompt('Введите число от 0 до 10'));
// let search = arr.includes(ask);
// console.log(search);


//8
// let text = 'abcdef';
// const arr = text.split ('');
// arr.reverse(); // почему если  arr.join(''); и потом console.log(arr) не выводит строку, а только через console.log(arr.join(''));
// console.log(arr.join(''));


//9


// const arr = [[1, 2, 3,],[4, 5, 6]];
// function together(arr) {
//     let result = [];
//     for (let a = 0; a < arr.length; a++) {
//     for (let b = 0; b < arr[a].length; b++) {
//         result.push(arr[a][b]);   
//      }
//     }
//   return result;
// }
// console.log(together(arr));


//10
// const arr = [2, 3, 6, 7, 9];
// for (let i = 0; i < arr.length; i++) {
// 	result = arr[i] + arr[i + 1]
//     console.log(result);      // не понимаю почему последнее значение NAN
// }




//
// const numberArray = [-7, -11, 1, 3, 6, 7, 11 , 22];
 

    
 