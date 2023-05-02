// Импортируем список студентов
import { students } from "./data.js";

const renderStudents = (listElement, getListStudents) => {
    const studentsHtml = students
        .map((student, index) => getListStudents(student, index)).join("");  // В callback передаем параметры из map

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

// Обратите внимание на еще один вариант экспорта

export default renderStudents;