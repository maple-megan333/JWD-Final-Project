////imports
//import { TaskManager } from "./taskManager";

//taskManager.load();

const taskManager = new TaskManager();

const newTaskform = document.querySelector('#newTask');




newTaskform.addEventListener('submit', (event) => {
  
  event.preventDefault();

  //input feild variable conversions

  const newName = document.querySelector('#newName');
  const newDescription = document.querySelector('#newDescription');
  const newAssignedTo = document.querySelector('#newAssignedTo');
  const newDueDate = document.querySelector('#newDueDate');

  const name = newName.value;
  const description = newDescription.value;
  const assignedTo = newAssignedTo.value;
  const dueDate = newDueDate.value;

  //adding a task

  /*if (name === '') {
    alert('This form was not filled out correctly please try again.')
  };*/

  taskManager.addTask(name, description, assignedTo, dueDate);

  // rendering the task

  taskManager.render();

  //clearing the form

  newName.value = '';
  newDescription.value = '';
  newAssignedTo.value = '';
  newDueDate.value = '';


  console.log(taskManager.tasks);


});





// creating change status functionality. 

// creates a variable contaning the task cards areas
const toDos = document.querySelector('#taskLists');

//adds event listeners for the task area and contains functions for buttons on status change. 
toDos.addEventListener('click', (event) => {
  if(event.target.classList.contains('done')){
    
  const parentTask = event.target.parentElement.parentElement.parentElement;
  
  const taskId = Number(parentTask.dataset.taskId);

  const task = taskManager.getTaskById(taskId);

  //document.getElementById('task').getElementsByClassName('.sign').style.backgroundColor = '#78D5D7';

  task.status = 'Completed';

  //taskManager.save();
  
  taskManager.render();
  
  } else if (event.target.classList.contains('start')){
      const parentTask = event.target.parentElement.parentElement.parentElement;
  
  const taskId = Number(parentTask.dataset.taskId);

  const task = taskManager.getTaskById(taskId);

  //document.getElementById('task').getElementsByClassName('.sign').style.backgroundColor = '#78D5D7';

  task.status = 'In Progress';

  //taskManager.save();
  
  taskManager.render();
  }
});

