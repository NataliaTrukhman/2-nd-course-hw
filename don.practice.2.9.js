const person = {
    // name, family, age — это свойства, или ключи, объекта person
    name: 'Анатолий',
    age: 29,
    // Объекты могут быть вложенными, в ключе family лежит объект со свойствами mother, father и children
    family: {
       mother: 'Елена',
       father: 'Антон',
       // В ключах объекта могут лежать массивы, в ключе children лежат дети Анатолия
       children: ['Варвара', 'Леонид']
   } 
 };
 
 // Так мы получаем значение свойства объекта
 console.log(person.name); // => Анатолий
 console.log(person.family.father); // => Антон
 
 // Так мы можем изменить значение свойства в объекте
 person.name = 'Иван'
 console.log(person.name); // => Иван
 
 
 // Так мы вызываем метод join у массива children
 console.log(person.family.children.join(' и ')); // => Варвара и Леонид
 
 // Так мы подставляем значения в строку с помощью шаблонных строк
 console.log(`Имя: ${person.name}. Дети: ${person.family.children.join(' и ')}`); // => Имя: Иван. Дети: Варвара и Леонид

// добавьте в children ребенка "Сергей" и выведите детей через запятую, чтобы получилось "Дети: Варвара, Леонид, Сергей.".
person.family.children.push("Сергей");
console.log(`Дети: ${person.family.children.join(', ')}.`);