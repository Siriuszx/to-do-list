class UIController {
    constructor() {
        this.todoContainer = document.querySelector('.todo-container');
    }

    logTask(taskObj){
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

    addNewTaskEl(taskObj) {
        const newTaskEl = document.createElement('li');
        newTaskEl.classList.add('task-item');
        newTaskEl.textContent = taskObj.title;

        this.todoContainer.appendChild(newTaskEl);
    }
}

export default UIController;