import Task from "./task.js";

class TaskStorageController {
    constructor() {
        this.taskLibrary = [];
    }

    addNewTask(taskObj) {
        if (taskObj) {
            let newTask = new Task(
                taskObj.title,
                taskObj.description,
                taskObj.dueDate,
                taskObj.priority
            );

            this.taskLibrary.push(newTask);
        }
    }

    removeTask(taskIndex) {
        this.taskLibrary.splice(taskIndex, 1);
    }

    getTaskObj(index) {
        return this.taskLibrary[index];
    }

    getTaskLibrary() {
        return this.taskLibrary;
    }
}

export default TaskStorageController;