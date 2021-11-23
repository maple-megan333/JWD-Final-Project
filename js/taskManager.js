// this is the HTML code to populate task cards with new task form feild inputs 

  const createTaskHtml2 = (id, name, description, assignedTo, dueDate, status) => { 
    let cardHtml = `<div class="col-lg-6 gx-3" data-task-id=${id}>
            <div class="card">
            <div class="card-header">
              <h3 class="card-title">${name}</h3>
              </div>
            <div class="cardcontent">
            <div class="row gy">
              <h4 class="card-subtitle col-sm-4 col-lg-6 ">Description:</h4>
              <p class="card-text col">${description}</p>
              
              <div class="row">
              <h4 class="card-subtitle col-4 col-lg-6">Assigned To:</h4>
              <p class="card-text col">${assignedTo}</p>
              </div>
              </div>

            <div class="row row-cols-2 row-cols-lg-1">
              <div class="col">
                <div class="row">
                  <h4 class="card-subtitle col">Due Date:</h4>
                  <p class="card-text col">${dueDate}</p>
                </div>
              </div>
                
                <div class="col">
                  <div class="row">
                  <h4 class="card-subtitle col">Status:</h4>
                  <div class="card-text col ">`;
                  
                  if(status == "Assigned"){
                    cardHtml += `<p class="sign completed">${status}</p>`;
                  }
                  else if(status == "Completed"){
                    cardHtml += `<p class="sign1">${status}</p>`;
                  } else if(status == "In Progress"){
                    cardHtml += `<p class="sign2">${status}</p>`;
                  };
                  
                  cardHtml += `</div>
                </div>
                  </div>
              </div>
              </div>
              <div class="btn-group">
                <button class="start">Start</button>
                <button class="done">Completed</button>
                <button class="remove">Remove</button>
              </div>
            
            </div>
          </div>`;

          return cardHtml;
  };

// this is the task manger function

class TaskManager {
  // this is the code for the task IDs and task arrays
  constructor(currentId = 0) {
    this.tasks = [];
    this.currentId = currentId;
  };


  // this is a method that creates the array to add new tasks based on form values and pushes them to the array 
  addTask(name, description, assignedTo, dueDate, status) {
    const task = {
      id: this.currentId++,
      name: name,
      description: description,
      assignedTo: assignedTo,
      dueDate: dueDate,
      status: 'Assigned'
    };
    this.tasks.push(task);
  };

   // step 7 get task id
   getTaskById(taskId) {
     let foundTask;
     for(let i = 0; i < this.tasks.length; i++) {
       
       const task = this.tasks[i];

       if(task.id === taskId){
         foundTask = task;
       }
     }
     return foundTask;
   }

  // this renders the cards on the page

  render() {
    // an array where the HTML is input for all the cards with the information collected on the form. 
    const tasksHtmlList = [];

    // this loops through the tasks collected by add tasks and collects the data to put it in the HTML format. 

    for (let i = 0; i < this.tasks.length; i++) {

      // declares the varaible to work with based on the task being worked on in the array. 
      const taskNum = this.tasks[i];

      //formats the date from the array nicely or the card. 
      const date = new Date(taskNum.dueDate);
      const formattedDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();

      // this takes the current task in the array and gathers the information and variables for the form. 
      const taskHtml = createTaskHtml2(taskNum.id,taskNum.name, taskNum.description, taskNum.assignedTo, formattedDate, taskNum.status);

      // this pushes the card collected to the tasks arry. 

      tasksHtmlList.push(taskHtml);
    }
    //this joins the array and puts new lines between each html code of the array. 
    const tasksHtml = tasksHtmlList.join('\n');

    //this declares and selects the HTML 
    const taskLists = document.querySelector('#taskLists');
    // this changes the HTML 
    taskLists.innerHTML = tasksHtml;
  };

 
  

  //task 8 create a save method
  /*save() {
    const tasksJson = JSON.stringify(this.tasks);
    localStorage.setItem('tasks', tasksJson);
    const currentId = String(this.currentId);
    localStorage.setItem('currentId', currentId);
  };

  //task 8 create a load method
  load() {
    if (localStorage.getItem('tasks')) {
      const tasksJson = localStorage.getItem('tasks');
      this.tasks = JSON.parse(tasksJson);
    }

    if (localStorage.getItem('currentId')) {
      const currentId = localStorage.getItem('currentId')
      this.currentId = Number(currentId);
    }
  }*/

  /*task 9 create a deleteTask method
  deleteTask(taskId) {
    let newTasks = [];
    for (let i = 0; i++) {
      const task = this.tasks[i];
      if (task.id !== taskId) {
        newTasks.push(task);
      }
    }

    this.tasks = newTasks;
  }
  */
}

//export {TaskManager}; 
