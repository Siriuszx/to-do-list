import Task from "./task.js";

class TaskStorageController {
    constructor() {
        this.taskLibrary = [];
        this.UID = 0;
    }

    addNewTask(taskObj) {
        if (taskObj) {
            let newTask = new Task(
                taskObj.title,
                taskObj.description,
                taskObj.dueDate,
                taskObj.priority,
                taskObj.taskGroup,
                this.UID
            );

            this.UID++;
            this.taskLibrary.push(newTask);
        }
    }

    deleteTask(UID) {
        let taskIndex = this.taskLibrary.findIndex((element) => element.UID === UID);

        this.taskLibrary.splice(taskIndex, 1);
    }

    getTaskArr(taskGroup) {
        return this.taskLibrary.filter((taskObj) => {
            return taskObj.taskGroup === taskGroup;
        });
    }
}

export default TaskStorageController;