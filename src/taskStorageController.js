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

            localStorage.setItem('nextUID', `${++this.#UID}`);
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
        const localStorageKeys = Object.keys(localStorage);
        const taskUIDs = localStorageKeys.filter(el => el !== 'nextUID').sort();

        taskUIDs.forEach(UID => {
            const taskDataDeserialized = JSON.parse(localStorage.getItem(UID));
            const taskTemp = new Task(
                taskDataDeserialized.title,
                taskDataDeserialized.description,
                taskDataDeserialized.dueDate,
                taskDataDeserialized.priority,
                taskDataDeserialized.taskGroup,
                taskDataDeserialized.UID
            );
            
            this.#taskLibrary.push(taskTemp);
        });

        this.#UID = localStorage.getItem('nextUID') || 0;
    }
}

export default TaskStorageController;