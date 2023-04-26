
import { students } from "./data.js"  //импортировать переменную в нужное место. из файла data.js





// Поиск статичных элементов по id с помощью getElementById
// Статичные элементы можно искать и другими методами: querySelector, querySelectorAll
const buttonElement = document.getElementById("add-button");
const listElement = document.getElementById("list");
const nameInputElement = document.getElementById("name-input");
const colorInputElement = document.getElementById("color-input");

// Данные о студентах в JS-коде импортированы из /data.js

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


const renderStudents = (listElement, getListStudents) => {
    const studentsHtml = students

        .map((student, index) => getListStudents(student, index)).join("");

    listElement.innerHTML = studentsHtml;

    const deleteButtons = document.querySelectorAll(".delete-button");


    for (const deleteButton of deleteButtons) {
        deleteButton.addEventListener("click", (event) => {
            event.stopPropagation();

            const index = deleteButton.dataset.index;


            students.splice(index, 1);
            renderStudents(listElement, getListStudents);
        });
    }
};

// Передаем в рендер-функцию callback редактируемого списка 
renderStudents(listElement, getListStudentsEdit);



buttonElement.addEventListener("click", () => {

    // Управляем классами на элементах с помощью classList
    nameInputElement.classList.remove("input-error");
    if (nameInputElement.value === "") {
        nameInputElement.classList.add("input-error");
        return;
    }

    // Добавляем нового студента в данные
    students.push({
        // Получаем значение из инпута через свойство value
        // Делаем HTML-строку безопасной для рендера, заменяя управляющие символы HTML на спец. символы
        name: nameInputElement.value
            .replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")
            .replaceAll('"', "&quot;"),
        color: colorInputElement.value,
    });

    // Делаем ререндер, чтобы после обновления данных обновить разметку
    renderStudents();

    // Очищаем поле ввода имени, записывая в .value элемента пустую строку
    nameInputElement.value = "";
});
