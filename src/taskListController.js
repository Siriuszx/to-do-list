import UIController from './UIController.js';
import TaskStorageController from './taskStorageController.js';

class TaskListController {
    constructor() {
        this.storage = new TaskStorageController();
        this.UI = new UIController();
    }

    addNewTask(title, description, dueDate, priority) {
        this.storage.addNewTask(title, description, dueDate, priority);
    }

    logInfo(type) {
        if (type === 'all') {
            let taskLibrary = this.storage.getTaskLibrary();

            this.UI.logTaskArr(taskLibrary);
        } else if (Number.isInteger(type) && type > 0) {
            this.UI.logTask(this.storage.getTaskObj(type));
        }

    }
}

export default TaskListController;
