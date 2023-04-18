const buttonElement = document.getElementById("add-button");
const listElement = document.getElementById("list");
const nameInputElement = document.getElementById("name-input");
const colorInputElement = document.getElementById("color-input");
const yearInputElement = document.getElementById("year-input");

const studentElements = document.querySelectorAll(".student")
const students = [
    {
        name: "Глеб",
        color: "#ff2600",
        year: 1993
    },
    {
        name: "Иван",
        color: "#00f900",
        year: 1999
    },
    {
        name: "Люси",
        color: "#0432ff",
        year: 2000
    }
];

const renderStudents = () => {      //превращает массив данных в html разметку и используем значение не из iput, а из обьекта student
    const studentsHtml = students.map((student, index) => {    //второй аргумент index  в функции для удаления 
        return `<li class="student"   data-color=" ${student.color}">  
        <p class="student-name">
          ${student.name}, родился(acь) в ${student.year}, любимый цвет
          <span style="color: ${student.color}"> ${student.color}</span>
        </p>
        <button data-index="${index}"   class="delete-button">Удалить</button>
      
        
            <!-- <button class="hello" data-name="${nameInputElement.value}">Привет</button><!-->

      </li>`;

    })
        .join("")     //преобразовываем массив строк в 1 строчку. при помощи метода join, который склеит все элементы массива в одну строчку с разделителем " " пустая строка
    //console.log(studentsHtml)
    listElement.innerHTML = studentsHtml;  //в список положили полученную строку

    initEventListeners();     //перенесли 2 функции в функцию рендер, т к подписываться на события нужно после нового рендера
    initDeleteButtonsListeners()
};


//const greetingButtonElements = document.querySelectorAll(".hello")
// const greetingButton = () => {
//     const greetingButtonElements = document.querySelectorAll(".hello");
//     //console.log(greetingButtonElements) ;

//     for (const greetingButtonElement of greetingButtonElements) {
//         //console.log(greetingButtonElement);               
//         greetingButtonElement.addEventListener('click', () => {

//             //console.log(greetingButtonElement.innerHTML)       
//             alert(`Привет, ${greetingButtonElement.dataset.name}`)
//             //console.log(greetingButtonElement.dataset.name)
//         });
//     }
// };
// greetingButton();



// const spanElements = document.querySelectorAll("span")
// //console.log (spanElements)

// const colorOnclick = () => {
//     const spanElements = document.querySelectorAll("span")
//     //console.log (spanElements)
//     const bodyElement = document.querySelector("body");
//     for (const spanElement of spanElements) {  //перебрать коллекцию
//         //console.log(spanElement);               //вывелись три отдельных элемента для проверки
//         spanElement.addEventListener('click', () => {      //на каждый элемент добавим обработчик клика
//             //console.log(1);        //при клике в консоль 1 работает
//             bodyElement.style.backgroundColor = "red";
//         })
//     }
// }
// colorOnclick()


//функция добавляет обработчики кликов ко всем элементам с классом.student


const initEventListeners = () => {
    const studentElements = document.querySelectorAll(".student")//(находит все элементы с классом student ) передадим в селектор query..  селектор по классу "student" и сохраним в переменную
    //console.log(studentElements) //возвращает список найденных элементов, возвращает структуру данных как массив

    for (const studentElement of studentElements) {  //перебрать коллекцию(проходит по каждому элементу в цикле)
        //console.log(studentElement);               //вывелись три отдельных элемента для проверки
        studentElement.addEventListener('click', () => {      //на каждый(конкретный) элемент в списке добавим обработчик клика

            //console.log(studentElement.innerHTML)       //при клике в консоль 1 работает //по .innerHTML мы можем получить данные элемента разметки 
            // console.log(studentElement.dataset.color)      //внутри обработчика клика мы можем получить доступ к data атрибутам

        });
    }
};

const initDeleteButtonsListeners = () => {
    const deleteButtonsElements = document.querySelectorAll(".delete-button");
    for (const deleteButtonsElement of deleteButtonsElements) {
        deleteButtonsElement.addEventListener('click', () => {
            //console.log(deleteButtonsElement);
            //console.log('Удаляю элемент....');
            //console.log(listElement.innerHTML);
          //План удаления
          //1.Мы храним список студентов оы массиве
        //2. При клике мы удаляем нужный элемент из массива 
        //3. На основе нового массива в js формируем html разметку списка
        const index = deleteButtonsElement.dataset.index;       // можем индекс вывести, у элемента кнопки мы обратимся к полю dataset.index
         // console.log(index); //при клике на кнопку удалить в консоль выводится иднекс элемента с которым связана кнопка 
          students.splice(index,1);
          renderStudents(); //вызывать функцию рендер чтобы новую разметку сформировать для новых данных
        });
    }
}

renderStudents();


buttonElement.addEventListener("click", () => {
    nameInputElement.classList.remove("input-error");

    if (nameInputElement.value === "") {
        nameInputElement.classList.add("input-error");
        return;
    }
    students.push({                       //добавление нового студента в массив студентов
        name: nameInputElement.value,
        color: colorInputElement.value,
        year: yearInputElement.value,

    });

    //после push убрать ниже
    // listElement.innerHTML =
    //     listElement.innerHTML +     //добавляем в разметку data атрибут
    //     `<li class="student"   data-color=" ${colorInputElement.value}">  
    //     <p class="student-name">
    //       ${nameInputElement.value}, любимый цвет
    //       <span style="color: ${colorInputElement.value}"> ${colorInputElement.value}</span>
    //     </p>
    //     <button class="delete-button">Удалить</button>
    //     <!-- <button class="hello" data-name="${nameInputElement.value}">Привет</button><!-->

    //   </li>`;


    //добавляем сюда внутрь изменения разметки страницы при получении нового элемента в списка из формы, оформив функцию

    // initEventListeners();    //тоже скрываем так как в функции рендера есть вызов двух этих
    // initDeleteButtonsListeners();
    renderStudents();
    // colorOnclick()
    // greetingButton();

    nameInputElement.value = "";
});










