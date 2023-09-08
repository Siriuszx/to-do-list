import Task from "./task.js";

class TaskStorageController {
    constructor() {
        this.taskLibrary = {};
        this.currentTaskGroup = 'inbox';
    }

    addNewTask(taskObj) {
        if (taskObj) {
            let newTask = new Task(
                taskObj.title,
                taskObj.description,
                taskObj.dueDate,
                taskObj.priority,
            );

            if(!this.taskLibrary[this.currentTaskGroup]) {
                this.taskLibrary[this.currentTaskGroup] = new Array();
            }
            this.taskLibrary[this.currentTaskGroup].push(newTask);
        }
    }

    removeTask(taskIndex) {
        this.taskLibrary.splice(taskIndex, 1);
    }

    getTaskObj(index) {
        return this.taskLibrary[index];
    }

    getTaskArr() {
        return this.taskLibrary[this.currentTaskGroup];
    }
}

export default TaskStorageController;