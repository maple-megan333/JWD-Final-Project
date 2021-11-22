//imports
//import { TaskManager } from "./taskManager";
const taskManager = new TaskManager();

const newTaskform = document.querySelector('#newTask');

newTaskform.addEventListener('submit', (event) => {

  event.preventDefault();

  const newName = document.querySelector('#newName');
  const newDescription = document.querySelector('#newDescription');
  const newAssignedTo = document.querySelector('#newAssignedTo');
  const newDueDate = document.querySelector('#newDueDate');

  const name = newName.value;
  const description = newDescription.value;
  const assignedTo = newAssignedTo.value;
  const dueDate = newDueDate.value;

  taskManager.addTask(name, description, assignedTo, dueDate);

  newName.value = '';
  newDescription.value = '';
  newAssignedTo.value = '';
  newDueDate.value = '';


  //console.log(taskManager.tasks);


});

