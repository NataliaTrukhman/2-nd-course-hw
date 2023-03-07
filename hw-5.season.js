


function playseason() {
    
    let monthNumber = prompt('Введите номер месяца');

if (monthNumber >= 1 && monthNumber <=2 || monthNumber === 12) { //почему то 12 не проходит проверку
    console.log('Зима');
} else if (monthNumber >= 3 && monthNumber <= 5) {
    console.log('Весна');
} else if (monthNumber >= 6 && monthNumber <= 8) {
    console.log('Лето');
} else if (monthNumber >= 9 && monthNumber <= 11) {
    console.log('Осень');
    monthNumber++;
}else {
    console.log('Некорректный ввод числа. Попробуйте еще раз.'); 
}
}

playseason();