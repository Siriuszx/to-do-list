import Task from "./task.js";

class TaskStorageController {
    #taskLibrary = [];
    #taskGroups = ['inbox'];
    #currentTaskGroup = 'inbox';
    #UID = 0;

    constructor() {
        this.#loadFromLocalStorage();
        console.log(`tasks --> ${this.#taskLibrary}`);
        console.log(`groups --> ${this.#taskGroups}`);
        console.log(`currentTaskGroup --> ${this.#currentTaskGroup}`);
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

    addTaskGroup(groupName) {
        if (groupName && !this.#taskGroups.some((taskName) => taskName === groupName)) {
            this.#taskGroups.push(groupName);
        }
        localStorage.setItem('groupNames', JSON.stringify(this.#taskGroups));
    }

    getAppData() {
        let appTaskData = {
            taskData: [],
            groupData: [],
            currentTaskGroup: '',
        };

        if (this.#currentTaskGroup === 'inbox') {
            appTaskData.taskData = this.#taskLibrary;
        } else {
            appTaskData.taskData = this.#taskLibrary.filter((taskObj) => {
                return taskObj.taskGroup === this.#currentTaskGroup;
            });
        }

        appTaskData.groupData = this.#taskGroups;
        appTaskData.currentTaskGroup = this.#currentTaskGroup;

        return appTaskData;
    }

    switchCurrentTaskGroup(taskGroupName) {
        this.#currentTaskGroup = taskGroupName;
        localStorage.setItem('currentTaskGroup', this.#currentTaskGroup);
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
        const taskUIDs = localStorageKeys.filter(el => Boolean(Number.parseInt(el)) || el == 0).sort();

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

        this.#taskGroups = JSON.parse(localStorage.getItem('groupNames')) || ['inbox'];
        this.#UID = localStorage.getItem('nextUID') || 0;
        this.#currentTaskGroup = localStorage.getItem('currentTaskGroup') || 'inbox';
    }
}

export default TaskStorageController;