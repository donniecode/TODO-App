/* getting all variables needed */
let body = document.body;
let todoApp = document.querySelector('.todo-app');
let lightMode = document.querySelector('.light-mode-icon');
let darkMode = document.querySelector('.dark-mode-icon');
let addTask = document.querySelector('.add-task-bar');
let addTaskBtn = document.querySelector('.add-task-btn');
let input = document.querySelector('.input-value');
let allTasks = document.querySelector('.all-tasks');
let taskRows = document.querySelectorAll('.task-row');
let taskNames = document.querySelectorAll('.task-name');
let deleteBtns = document.querySelectorAll('.delete-task');

/* app mode toggling */
lightMode.addEventListener('click', ()=>{
    body.classList.add('light-mode');
    lightMode.style.display="none";
    darkMode.style.display="block";
    addTask.classList.add('add-light-mode');
    addTask.classList.remove('add-task-bar');
    allTasks.classList.add('tasks-light-mode');
    allTasks.classList.remove('all-tasks');
})
darkMode.addEventListener('click', ()=>{
    body.classList.remove('light-mode');
    lightMode.style.display="block";
    darkMode.style.display="none";
    addTask.classList.remove('add-light-mode');
    addTask.classList.add('add-task-bar');
    allTasks.classList.remove('tasks-light-mode');
    allTasks.classList.add('all-tasks');
})

/* delete task function */
let deleteTask = ()=>{
        allTasks.addEventListener('click', (event)=>{
            let clicked = event.target;
            if(clicked.classList.contains('delete-task')){
                const taskRow = clicked.parentElement;
                allTasks.removeChild(taskRow);
            }
        })
}
deleteTask();

/* let deleteTask = ()=>{
    deleteBtns.forEach((deleteBtn)=>{
        deleteBtn.addEventListener('click', (event)=>{
            let btn = event.target;
            let taskRow = btn.parentElement;
            let taskWrapper = btn.parentElement.parentElement;
            taskWrapper.removeChild(taskRow);
        })
    })
}
deleteTask(); */

/* check completed tasks function */
let completedTasks = ()=>{
        allTasks.addEventListener('click', (event)=>{
            let clicked = event.target;
            if(clicked.className == 'task-name'){
                clicked.classList.toggle('line-through');
            }
        })
}
completedTasks();

/* add a new task function */
let addNewTask = ()=>{
    addTaskBtn.addEventListener('click', (event)=>{
        let taskTerm = input.value;
        let taskParent = allTasks;
        let newTaskRow = document.createElement('li');
        newTaskRow.classList.add('task-row');
        newTaskRow.innerHTML = `
         <label for="task-check" class="checkbox-circle">
            <input type="checkbox" class="task-checkbox">
            <div class="task-toggle toggle-fill"></div>
          </label>
          <div class="task-name">${taskTerm}</div>
          <img src="images/icon-cross.svg" alt="" class="delete-task">
        </li>
        `;
        taskParent.prepend(newTaskRow);
    })
}
addNewTask();