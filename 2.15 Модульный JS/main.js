
import { students } from "./data.js"  //импортировать переменную в нужное место. из файла data.js
import { getListStudentsEdit } from "./listStudents.js";

// Т. к. renderStudents экспортировалась по умолчанию default,
// то имя функции мы не берем в фигурные скобки
import renderStudents from "./renderStudents.js";
//#################################################################################

// Поиск статичных элементов по id с помощью getElementById
// Статичные элементы можно искать и другими методами: querySelector, querySelectorAll
const buttonElement = document.getElementById("add-button");
const listElement = document.getElementById("list");
const nameInputElement = document.getElementById("name-input");
const colorInputElement = document.getElementById("color-input");

// Данные о студентах в JS-коде импортированы из /data.js
// убрали callback для возврата редактируемого списка
// рендер функцию  renderStudents, она импортируется из renderStudents.js

renderStudents(listElement, getListStudentsEdit); // Функция должна возвращать строковое представление HTML-фрагмента и callback



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
