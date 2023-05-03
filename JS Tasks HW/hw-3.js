//1
let password = 'пароль';
let ask = prompt ('Введите пароль');
if ( ask === password ) {
    console.log ('Пароль введен верно');
} else {
    console.log ('Пароль введен неправильно');
}
//2
let c = 5;
if (c > 0 && c < 10 ) {
    console.log ('Верно');
} else {
    console.log ('Неверно');
}
//3
let d = 777;
let e = 7;
if (d > 100 || e > 100) {
    console.log ('Верно');
} else {
    console.log ('Неверно');
}
//4
let a = Number ('2');
let b = Number ('3');
alert(a + b)

//5
let monthNumber = Number(prompt('Введите номер месяца'));
switch (monthNumber) {
    case 12:
    case 1 :
    case 2 :
        console.log ('зима');
        break;
    case 3 :
    case 4 :
    case 5 :
            console.log ('весна');
            break;
    case 6 :
    case 7 :
    case 8:
            console.log ('лето');
            break;
    case 9 :
    case 10 :
    case 11 :
                console.log ('осень');
                break;
    default:console.log ('нет такого');
        break;
}


 


