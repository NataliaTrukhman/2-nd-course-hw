//function showTextButton() {
 // alert('Работает скрипт');
 //  let userAnswer = prompt ('Загадка');
 //  if (userAnswer=== 'елка') {
 //   alert('Молодец!');
 //  } else {
//    alert('НЕМолодец!');
//   }}

//function delMessage() {
//   let del = confirm('Вы правда хотите удалить?');//true false

 //   if (del) {        
 //       alert('Ок, удалено!');
//    } else {
//    alert('Не удалено!');
 //   }
//}

//можно через тернарный оператор:

// del ? alert('Ок, удалено!'): alert('Не удалено!');
// }


//стрелочные функции

//const mult = (a,b) => a * b;
//    muit (2, 3)

const puzzle = (a,b) => {
    if (a>b) {
        return a + b;
    } else {
        return a * b;
    }
}
console.log(puzzle(2, 3));
