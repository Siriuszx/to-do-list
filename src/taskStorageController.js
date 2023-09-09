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
                taskObj.priority,
                taskObj.taskGroup,
            );

            this.taskLibrary.push(newTask);
        }
    }

    getTaskArr(taskGroup) {
        return this.taskLibrary.filter((taskObj) => {
            return taskObj.taskGroup === taskGroup;
        });
    }
}

export default TaskStorageController;