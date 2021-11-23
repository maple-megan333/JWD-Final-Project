const createTaskHtml = (name, description, assignedTo, dueDate, status) => `
  <div class="col-lg-6 gx-3">
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
                  <div class="card-text col ">
                  <p class="sign">${status}</p>
                  </div>
                </div>
                  </div>
              </div>
              </div>
              <div class="btn-group">
                <button class="start">Start</button>
                <button class="done">Completed</button>
                <button class="arch">Archive</button>
              </div>
            
            </div>
          </div>
  `
;


class TaskManager {
  constructor(currentId = 0) {
    this.tasks = [];
    this.currentId = currentId;
      };

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

  render() {
    const tasksHtmlList = [];

    for(let i = 0; i < this.tasks.length; i++){
      const taskNum = this.tasks[i];

      const date = new Date(taskNum.dueDate);
      const formattedDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
      
      const taskHtml = createTaskHtml(taskNum.name, taskNum.description, taskNum.assignedTo, formattedDate, taskNum.status);

      tasksHtmlList.push(taskHtml);
    }
    const tasksHtml = tasksHtmlList.join('\n');

    const taskLists = document.querySelector('#taskLists');
    
    taskLists.innerHTML = tasksHtml;
  };
}

//export {TaskManager}; 
