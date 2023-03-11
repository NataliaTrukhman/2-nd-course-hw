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
// for (const arrIn = 0; arrIn < 3; arrIn++) {
// arr [arrIn] = [];
// for (const item = 0; item < 3; item++) {
// arrIn = [item];
//  }
// }
// console.log(arr);

//5
// const arr = [1, 1, 1]; //методом push
// arr.push (2, 2, 2);
// console.log(arr); // почему если записать короче: console.log(arr.push(2, 2, 2)); - выводит другой результат

// const arr = [1, 1, 1]; // методом contact 
// console.log(arr.concat([2, 2, 2]));  

//6
const arr = [9, 8, 7, 'a', 6, 5];
arr.sort();
arr.pop();
arr.reverse();
console.log(arr);  // неверный скорее всего способ
