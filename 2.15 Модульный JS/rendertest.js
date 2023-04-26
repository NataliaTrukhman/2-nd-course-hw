//main.js
import { students } from "./data.js";

const buttonElement = document.getElementById("add-button");
const listElement = document.getElementById("list");
const nameInputElement = document.getElementById("name-input");
const colorInputElement = document.getElementById("color-input");




// Рендер-функция изначальная

// const renderStudents = () => {
//     // Преобразование данных в HTML-разметку с помощью map и join
//     const studentsHtml = students
//         .map((student, index) => {
//             return `
//       <li class="student" data-color="${student.color}">
//         <p class="student-name">
//           ${student.name}
//         </p>
//         <p>Любимый цвет студента: ${student.color}</p>
//         <button data-index="${index}" class="button delete-button">Удалить</button>
//       </li>`;
//         })
//         .join("");

//     // Рендер HTML-строки в браузер
//     listElement.innerHTML = studentsHtml;

//     // Поиск динамически создаваемых элементов разметки
//     const deleteButtons = document.querySelectorAll(".delete-button");


//     // Добавление обработчиков клика на динамически созданные элементы
//     for (const deleteButton of deleteButtons) {
//         deleteButton.addEventListener("click", (event) => {
//             // Отключение всплытия у события через stopPropagation,
//             // обработчики клика на родительских элементах не будут вызываться после отключения
//             event.stopPropagation();

//             // Получение значения из data-* атрибутов разметки 
//             const index = deleteButton.dataset.index;


//             // Удаляем студента из данных
//             students.splice(index, 1);
//             // Делаем ререндер, чтобы после обновления данных обновить разметку
//             renderStudents();
//         });
//     }
// };

// renderStudents();


//#################################################################################

//2.15 Модульный JS

//1 Чтобы переиспользовать функцию, заменим возвращаемое значение на переменную, к примеру,
 //studentInfo — эту переменную будем принимать в качестве параметра функции:
// const renderStudents = (studentInfo) => {
//     const studentsHtml = students
//         .map((student, index) => studentInfo);

//     listElement.innerHTML = studentsHtml; //// Рендер HTML-строки в браузер

//     const deleteButtons = document.querySelectorAll(".delete-button");


//     for (const deleteButton of deleteButtons) {
//         deleteButton.addEventListener("click", (event) => {
//             event.stopPropagation();

//             const index = deleteButton.dataset.index;


//             students.splice(index, 1);
//             renderStudents(studentInfo);
//         });
//     }
// };

// renderStudents();

// //2 Вызовем данную функцию в main.js для отображения редактируемого списка:
// const studentInfo = `
//       <li class="student" data-color="${student.color}">
//         <p class="student-name">
//           ${student.name}
//         </p>
//         <p>Любимый цвет студента: ${student.color}</p>
//         <button data-index="${index}" class="button delete-button">Удалить</button>
//       </li>`;

// renderStudents(studentInfo);

//3  При такой реализации мы сразу видим несколько недостатков:

// 1 В качестве параметра мы передаем многострочную строку, что приводит к усложнению понимания кода.
// 2 Теперь мы не можем использовать переменные из области map.
// 3 Если запустить данный код, он выдаст ошибку.

//#################################################################################

// 4 Чтобы решить данные проблемы, давайте в качестве параметра будем передавать callback - функцию (getListStudents?):
//getListStudents — его название callback функции, которую передают при вызове метода renderStudents
//Для этого немного поменяем функцию renderStudents:

// const renderStudents = (getListStudents) => {    //тут любое название callback
//     const studentsHtml = students
//         .map((student, index) => getListStudents(student, index)).join("");
// 		// В callback передаем параметры из map

// 	    listElement.innerHTML = studentsHtml; //// Рендер HTML-строки в браузер

//     const deleteButtons = document.querySelectorAll(".delete-button");


//     for (const deleteButton of deleteButtons) {
//         deleteButton.addEventListener("click", (event) => {
//             event.stopPropagation();

//     const index = deleteButton.dataset.index;


// students.splice(index, 1);
// renderStudents(getListStudents);
//     });
//   }
// };

// Реализуем callback для возврата редактируемого списка
const getListStudentsEdit = (student, index) => {
    return `
  <li class="student" data-color="${student.color}">
    <p class="student-name">
      ${student.name}
    </p>
    <p>Любимый цвет студента: ${student.color}</p>
    <button data-index="${index}" class="button delete-button">Удалить</button>
  </li>`;
};

renderStudents(getListStudentsEdit);


// В ./not - editable.js:

// Реализуем callback для возврата нередактируемого списка
const getListStudentsNotEdit = (student, index) => {
    return `
  <li class="student" data-color="${student.color}">
    <p class="student-name">
      ${student.name}
    </p>
    <p>Любимый цвет: ${student.color} <span style="
      display:inline-block;
      width: 15px;
      height: 15px;
      background-color: ${student.color};">
    </span></p>
  </li>`;
};

renderStudents(getListStudentsNotEdit);
//#################################################################################
//5 Если запустить наше приложение, то сейчас всё работает отлично.
// Но нам нужно сделать функцию renderStudents более универсальной. Сейчас в нашей функции есть строка:
//listElement.innerHTML = studentsHtml;
//Здесь listElement используется из глобальной области видимости, что усложняет переиспользование функции. 
//Давайте элемент, к которому применяется innerHTML, будем принимать в качестве параметра.   //не поняла??????
// Теперь наша функция renderStudents принимает 2 параметра:
// listElement — HTML-элемент, в котором рендерится список,
// callback-функцию getListStudents, к данной функции есть следующие
// требования: 
//1. Функция должна принимать два параметра, первый объект
// со свойствами name и color, второй индекс — числовой параметр.
// 2. Функция должна возвращать строковое представление HTML-фрагмента.

const renderStudents = (listElement, getListStudents) => {
    // Преобразование данных в HTML-разметку с помощью map и join
    const studentsHtml = students
        // Здесь вместо конкретного HTML-фрагмента мы вызываем callback-функцию
        .map((student, index) => getListStudents(student, index)).join("");

    // Теперь здесь element из параметра
    listElement.innerHTML = studentsHtml;

    const deleteButtons = document.querySelectorAll(".delete-button");


    for (const deleteButton of deleteButtons) {
        deleteButton.addEventListener("click", (event) => {
            event.stopPropagation();

            const index = deleteButton.dataset.index;


            students.splice(index, 1);
            // Помним, теперь функция renderStudents принимает параметры listElement и callback
            renderStudents(listElement, getListStudents);
        });
    }
};




buttonElement.addEventListener("click", () => {

    nameInputElement.classList.remove("input-error");
    if (nameInputElement.value === "") {
        nameInputElement.classList.add("input-error");
        return;
    }

    students.push({
        name: nameInputElement.value
            .replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")
            .replaceAll('"', "&quot;"),
        color: colorInputElement.value,
    });

    renderStudents();

    nameInputElement.value = "";
});