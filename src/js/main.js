/*
Algoritmo:

-Añadimos un listener al objeto window para que al 
iniciarse la carga de la página ejecute la función 
insertTasksHTML().

-La función insertTasksHTML() selecciona el elemento 
con id #tasksList en el documento html actual (que es un
elemento ul, lo graba en una constante y ,con la 
propiedad innerHTML, guarda el resultado de la función 
taskListHTML en la misma.  

-La función taskListHTML recorre el array "tasks" con 
los objetos con los datos de la aplicación con la función 
data2HTML(), los guarda en una cadena y los devuelve.

-La función data2HTML() crea el HTML necesario para una 
sola tarea en una cadena y la devuelve. 

*/

