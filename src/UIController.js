class UIController {
    constructor() {
        this.todoContainer = document.querySelector('.todo-container');
    }

    #addNewTaskEl(taskObj) {
        const newTaskEl = document.createElement('li');
        newTaskEl.classList.add('task-item');
        newTaskEl.textContent = taskObj.title;

        this.todoContainer.appendChild(newTaskEl);
    }

    updateTaskContainer(taskArr) {
        this.todoContainer.innerHTML = '';

        taskArr.forEach((taskObj) => {
            this.#addNewTaskEl(taskObj);
         });
    }

     // For debugging purposes
     logTask(taskObj) {
        console.log(`Title: ${taskObj.title}
Description: ${taskObj.description}
Due Date: ${taskObj.dueDate}
Task Priority: ${taskObj.priority}\n`);
    }

    logAllTasks(tasksArr) {
        tasksArr.forEach(taskObj => {
            this.logTask(taskObj);
        });
    }
}

export default UIController;