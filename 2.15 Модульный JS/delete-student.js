
import { students } from "./data.js"

import { getListStudentsEdit } from "./listStudents.js";

const listElement = document.getElementById("list");
import renderStudents from "./renderStudents.js";



renderStudents(listElement, getListStudentsEdit);




