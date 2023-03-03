//1
let a = 10;
a = 20 ;
alert(a);
//2
let year = "год выпуска первого iPhone";
alert(year);
//3
let text = "Brendan Eich";
alert (text);
//4
let x = 10;
let y = 2;
let sum = x + y;
alert (sum);
let sub = x - y;
alert (sub);
let multipl = x * y;
alert (multipl);
let division = x/y;
alert (division);
//5
let degree = 2;
let result = degree ** 5;
alert (result);
//6
let h = 9;
let d = 2;
alert (9 % 2);
//7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num ++ ;
num -- ;
//8
let age = prompt ('Сколько вам лет?');
alert (age);
//9
let user = {
    name: "Bob",
    age: 15,
    isAdmin: true
}
user ['city of residence'];
user [age] = "hobby";
delete ['city of residence'];
let info = prompt ('Какую информацию хотите узнать о пользователе?')
alert (user[info]);
//10
let yourName = prompt('Ваше имя?')
alert(`Привет,`+ yourName`!`)



let n = 1000; 
let num = 0; 
while (n >= 50) { 
    num++; 
    n /= 2; 
}; 
alert(n) 
alert(num)


//5

let numFriday = 3;
for (; numFriday <= 31; numFriday += 7) {
    console.log(`Сегодня пятница, ${numFriday} число `);
}

