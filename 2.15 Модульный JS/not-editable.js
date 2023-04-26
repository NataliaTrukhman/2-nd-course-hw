import { students } from "./data.js"   //импортировать переменную в нужное место. из файла data.js

const listElement = document.getElementById("list");

// Данные о студентах в JS-коде импортированы из /data.js


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
}


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
            renderStudents(element, getListStudents);
        });
    }
};

renderStudents(listElement, getListStudentsNotEdit);