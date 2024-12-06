//Seleccionar los elementos


//variables para capturar elemento texbos de DOM
const taskInput = document.getElementById('taskInput');
// variable amacena id boton agregar tarea, posterio usar para dar clik DOM
const addTaskButton = document.querySelector('#addTaskButton');
// variable almacena equiqueta li de DOM
const taskList = document.querySelector('#taskList');
// variable almacena segundo UL para generar lsita de tareas ok
const taskDone = document.querySelector('#taskDone')

// Funcion de agegar tarea con boton y cheklist
function addTask() {
    // captura tarea cliente
    const taskText = taskInput.value.trim();
    // evalua si esta vacio
    if (taskText === '') {
        alert("Por favor, agrega una tarea");
        return;
    }
    
    //Crear las tareas dentro li
    const taskItem = document.createElement('li'); // creamos el elemento li en una variable
    taskItem.textContent = taskText; // le pasamos lo que escribio el cliente

    // Crear el botón de eliminar 
    const deleteButton = document.createElement('button');  // creamos el elemnto button
    deleteButton.textContent = '❌'; // como texto X

    // creamos la funcion de eliminar tarea
    deleteButton.onclick = function() { 
        // borra el item o tarea
        taskList.removeChild(taskItem); 
    }; 

    // crear el boton de cheklist
    const checkButton = document.createElement('button'); // crea elemento button
    checkButton.textContent = '☑️'; // texto en el boton
     
    // crear funcion con activacion clic del boton check
    checkButton.onclick = function() {
        //funcion para subrallar la tarea
         if (taskItem.style.textDecoration === 'line-through') {
            //condicional si la tarea ya fue completada 
             taskItem.style.textDecoration = 'none';
             checkButton.textContent = '☑️'; // cambiar contenido activa
             taskList.appendChild(taskItem); // uso nodo hijo taskTem para retornar
             } else {
                // si la tarea y se cumplio
                 taskItem.style.textDecoration = 'line-through';
                 checkButton.textContent = '✅'; // cambiar contenido finalizada
                 taskDone.appendChild(taskItem); // hijo tasItem pasar a TaskDone Nueva lista
                 }
    };


       
    // añadir la tarea a lista
    taskList.appendChild(taskItem); // funcion para añadir nodo hijo (li a ul)
   

    // Añadir el botón de eliminar a la tarea    
    taskItem.appendChild(deleteButton);   //  nodo hijo (deleteButton) a nodo padre (taskItem)

    // Añadir el botón checklist
    taskItem.appendChild(checkButton);  // checkList a taskItem 


    
    //limpiar input
    taskInput.value='';
    
}
    


// Evento al boton
addTaskButton.addEventListener('click', addTask)


//Configurar las tareas

// deleteButton.textContent = "Eliminar";
// deleteButton.addEventListener('click', deleteTask);

//const taskTextNode = document.createTextNode(taskText);
//const deleteButton = document.createElement('button');

