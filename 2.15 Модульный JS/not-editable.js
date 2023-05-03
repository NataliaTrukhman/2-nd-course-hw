
import { students } from "./data.js"   //импортировать переменную в нужное место. из файла data.js
// Данные о студентах в JS-коде импортированы из /data.js


import { getListStudentsNotEdit } from "./listStudents.js"; // убрали callback для возврата нередактируемого списка


// Т. к. renderStudents экспортировалась по умолчанию default,
// то имя функции мы не берем в фигурные скобки
// рендер функцию  renderStudents, она импортируется из renderStudents.js
import renderStudents from "./renderStudents.js";

const listElement = document.getElementById("list");

renderStudents(listElement, getListStudentsNotEdit);



