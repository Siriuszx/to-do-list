import Task from "./task.js";

class TaskStorageController {
    #taskLibrary = [];
    #UID = 0;

    constructor() {
        this.#loadFromLocalStorage();
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
            this.#saveToLocalStorage(newTask);
            this.#taskLibrary.push(newTask);
        }
    }

    deleteTask(UID) {
        let taskIndex = this.#taskLibrary.findIndex((element) => element.UID === UID);
        this.#deleteFromLocalStorage(UID);
        this.#taskLibrary.splice(taskIndex, 1);
    }

    getTaskArr(taskGroupName) {
        if (taskGroupName === 'inbox') return this.#taskLibrary;

        return this.#taskLibrary.filter((taskObj) => {
            return taskObj.taskGroup === taskGroupName;
        });
    }

    #saveToLocalStorage(taskObj) {
        let taskSerialized = JSON.stringify(taskObj);
        localStorage.setItem(`${taskObj.UID}`, taskSerialized);
    }

    #deleteFromLocalStorage(UID) {
        localStorage.removeItem(UID.toString());
    }

    #loadFromLocalStorage() {
        const keys = Object.keys(localStorage);

        keys.forEach(UID => {
            const taskDeserialized = JSON.parse(localStorage.getItem(UID));
            this.#taskLibrary.push(taskDeserialized);
            this.#UID++;
        });
    }
}

export default TaskStorageController;