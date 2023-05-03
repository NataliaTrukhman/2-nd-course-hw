

function playseason() {
    
    let monthNumber =  Number(prompt('Введите номер месяца'));

if (monthNumber >= 1 && monthNumber <=2 || monthNumber === 12) { 
    console.log('Зима');
} else if (monthNumber >= 3 && monthNumber <= 5) {
    console.log('Весна');
} else if (monthNumber >= 6 && monthNumber <= 8) {
    console.log('Лето');
} else if (monthNumber >= 9 && monthNumber <= 11) {
    console.log('Осень');

}else {
    console.log('Некорректный ввод числа. Попробуйте еще раз.'); 
}
}

// playseason();

  function memorizeWords() {

const arrFruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
//console.log(arrFruits);
 arrFruits = arrFruits.sort(() => Math.random() - 0.5);   // можно обьяснить как работает метод??/взято из подсказки в домашке
 alert (arrFruits);

 let fistQuestion = prompt('Чему равнялся первый элемент массива?');
 let secondQuestion = prompt ('Чему равнялся последний элемент массива?');

if (fistQuestion.toLowerCase() == arrFruits[0].toLowerCase() && secondQuestion.toLowerCase() == arrFruits[arrFruits.length-1].toLowerCase()){
    alert('Поздравляю, вы угадали оба элемента!');
} else if (fistQuestion.toLowerCase() == arrFruits[0].toLowerCase() || secondQuestion.toLowerCase() == arrFruits[arrFruits.length-1].toLowerCase()) {
    alert( 'Вы близки к победе');
} else 
    alert ('Пользователь ничего не угадал');
 }

// arrFruits();