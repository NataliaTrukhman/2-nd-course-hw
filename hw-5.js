//1

function min(a, b) {
    if (a<=b) {
       return a ;
    } else {
        return b;
    }
}
console.log (min(8, 4));
console.log (min(6, 6));

//2

function EvenOdd(n) {
    if (n % 2 == 0) {
         console.log('Число четное');
         } else {
        console.log('Число нечетное');
  }
}
EvenOdd(1)

//3
let z = Number(prompt('Введите число'));
function degree(z) {
   return z ** 2 ;
}
console.log(degree(z));
//

let x = Number(prompt('Введите число'));
function degree(x) {
   return x ** 2 ;
}
alert(degree(x));

//4

let age = Number(prompt('Сколько вам лет?'));
function userAge(age) {
    if (age < 0) {      //нужно ли  и как если нужно добавить проверку, если введет не числовые значения
    alert("Вы ввели неправильное значение");
} else if (age <= 12) {
    alert("Привет, друг!");
} else if (age >= 13) {
        alert("Добро пожаловать!");
}
}
userAge(age);



//5

let m = prompt('Введите первое число');
let n = prompt('Введите первое число');

function examination(m, n) {
    
if (isNaN(m) || isNaN(n)) {
         console.log('Одно или оба значения не являются числом');
 } else {
         console.log(m * n);
           }
 }
 examination(m, n);

//6