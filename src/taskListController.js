import UIController from './UIController.js';
import TaskStorageController from './taskStorageController.js';

class TaskListController {
    constructor() {
        this.storage = new TaskStorageController();
        this.UI = new UIController();
    }

    addNewTask(taskObj) {
        this.storage.addNewTask(this.UI.getFormTask());
        this.UI.updateTaskContainer(this.storage.getTaskLibrary());
    }

    updateListeners() {
        this.UI.updateUIListeners(this.addNewTask.bind(this));
    }

    logInfo(type) {
        if (type === 'all') {
            let taskLibrary = this.storage.getTaskLibrary();

            this.UI.logAllTasks(taskLibrary);
        } else if (Number.isInteger(type) && type > 0) {
            this.UI.logTask(this.storage.getTaskObj(type));
        }

    }
}

export default TaskListController;