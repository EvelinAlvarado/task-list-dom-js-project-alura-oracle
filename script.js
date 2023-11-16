import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";

// !Objetivo:crear este HTML con DOM js
/* 
<li class="card" data-task>
  <div>
    <i class="far fa-check-square icon"></i>
    <span class="task">Hacer curso de DOM</span>
  </div>
  <i class="fas fa-trash-alt trashIcon icon"></i>
</li>
*/

// ?"Immediately Invoked Function Expression" (IIFE) es una expresión de función que se invoca inmediatamente después de ser definida. En otras palabras, es una forma de encapsular una función y ejecutarla de inmediato.
/* 
(function() {
  // Código de la función
})();
o
(()=>{
  //codigo arrowfunction
})();
Esta expresión de función se envuelve entre paréntesis externos para que el intérprete de JavaScript la interprete como una expresión en lugar de una declaración de función normal. Luego, se agregan paréntesis adicionales al final de la expresión para invocar la función inmediatamente después de su definición.
*/

(() => {
  const btn = document.querySelector("[data-form-btn]");

  // variable createTask y arrow function para capturar el valor del input
  const createTask = (evento) => {
    // preventDefault para que la pagia no se recargue al presionar el button
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    const list = document.querySelector("[data-list]");
    const task = document.createElement("li");
    // Adiconar clases a task
    task.classList.add("card");

    input.value = "";
    const taskContent = document.createElement("div");
    taskContent.appendChild(checkComplete());
    const titleTask = document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerText = value;

    //se agrega el hijo al padre div
    taskContent.appendChild(titleTask);

    //A traves del innerHTML de task, le atribuimos el valor de content
    // task.innerHTML = content;
    task.appendChild(taskContent);

    // Adicicnar un hijo (task) al padre (list)
    list.appendChild(task);
    //console.log(list);
    // Adicicnar un hijo (deleteIcon()) al padre (task)
    task.appendChild(deleteIcon());
  };

  btn.addEventListener("click", createTask);
})();
