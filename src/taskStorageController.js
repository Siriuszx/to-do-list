import Task from "./task.js";

class TaskStorageController {
    #taskLibrary = [];
    #UID = 0;
    
    constructor() {
    }

    addNewTask(taskObj) {
        if (taskObj) {
            let newTask = new Task(
                taskObj.title,
                taskObj.description,
                taskObj.dueDate,
                taskObj.priority,
                taskObj.taskGroup,
                this.#UID
            );

            this.#UID++;
            this.#taskLibrary.push(newTask);
        }
    }

    deleteTask(UID) {
        let taskIndex = this.#taskLibrary.findIndex((element) => element.UID === UID);

        this.#taskLibrary.splice(taskIndex, 1);
    }

    getTaskArr(taskGroupName) {
        if(taskGroupName === 'inbox') return this.#taskLibrary;
        
        return this.#taskLibrary.filter((taskObj) => {
            return taskObj.taskGroup === taskGroupName;
        });
    }
}

export default TaskStorageController;