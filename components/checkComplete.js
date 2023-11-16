// -------Funcionalidad del icono check-------
// --Creacion del elemento
const checkComplete = () => {
  // Se crea el elemento y sus clases
  const i = document.createElement("i");
  i.classList.add("far", "fa-check-square", "icon");
  i.addEventListener("click", completeTask);
  return i;
};

// --Funcion del icono check
const completeTask = (event) => {
  // capturamos el target del evento
  const element = event.target;
  element.classList.toggle("fas");
  element.classList.toggle("completeIcon");
  element.classList.toggle("far");
};

export default checkComplete;
