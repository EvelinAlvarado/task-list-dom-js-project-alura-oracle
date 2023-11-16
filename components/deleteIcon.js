// -------Funcionalidad del icono delete-------
// --Creacion del elemento
const deleteIcon = () => {
  // Se crea el elemento y sus clases :<i class="fas fa-trash-alt trashIcon icon"></i>
  const i = document.createElement("i");
  i.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");
  i.addEventListener("click", deleteTask);
  return i;
};

// --Funcion del icono check
const deleteTask = (event) => {
  //console.log("Eliminar tarea");
  //console.log(event.target);
  const parent = event.target.parentElement;
  parent.remove();
};

export default deleteIcon;
