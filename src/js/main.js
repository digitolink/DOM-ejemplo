/*
-Variables: 
tasks, array con los objetos con los datos de las tareas

Funciones:
data2HTML(taskName, completed)
    Crea una cadena genérica con una lista HTML para una tarea.
taskListHTML()
    Crea una cadena con una lista HTML para todas las 
    tareas. Obtiene los datos de las tareas de un array de 
    objetos.
insertTasksHTML()
    Selecciona el elemento de lista de nuestro HTML actual
    y le graba la cadena con la lista. 

-Algoritmo:

-Añadimos un listener al objeto window para que al 
iniciarse la carga de la página ejecute la función 
insertTasksHTML().

-La función insertTasksHTML() selecciona el elemento 
con id #tasksList en el documento html actual (que es un
elemento ul), lo graba en una constante y ,con la 
propiedad innerHTML, guarda el resultado de la función 
taskListHTML en la misma.  

-La función taskListHTML() recorre el array "tasks", que 
contiene los objetos con los datos de la aplicación, con 
la función data2HTML(), los va añadiendo en una cadena y 
los devuelve.

-La función data2HTML() crea el HTML (en este caso una lista)
necesario para una sola tarea en una cadena pasándole como 
parámetros las propiedades de los objetos y devuelve esa cadena. 

*/
const tasks = [
    {
    taskName: "Sacar al perro",
    completed: true,
    },
    {
    taskName: "Ir a clase",
    completed: false,
    },
]

/**
 * Recibe descripción y estado de la tarea
 * y me entrega el HTML de UNA tarea
 * @param {string} taskName - Descripcion de la tarea
 * @param {boolean} completed - Estado de tarea
 * @returns {string} - <li> HTML resultante
 */
function data2HTML (taskName, completed) {
    let completedHTML = completed ? "checked" : "";
    const taskHTML = `
    <li>
        <p>${taskName}</p>
        <input type="checkbox" name="completed" id="" ${completedHTML}>
    </li>
    `;
    return taskHTML
}

function taskListHTML (taskArray) {
    let HTMLtext = "";
    for ( let item of taskArray ) {
        const HTMLelemento = data2HTML(item.taskName, item.completed)
        HTMLtext += HTMLelemento;
    }
    return HTMLtext
}

function insertTasksHTML () {
    const ul = document.querySelector("#tasksList");
    ul.innerHTML = taskListHTML(tasks);
}

window.addEventListener('load',insertTasksHTML)

