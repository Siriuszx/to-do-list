import Task from "./task.js";

class TaskStorageController {
    constructor() {
        this.taskLibrary = [];
    }

    addNewTask(title, description, dueDate, priority) {
        let newTask = new Task(title, description, dueDate, priority);
        this.taskLibrary.push(newTask);
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