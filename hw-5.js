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

