import UIController from './UIController.js';
import TaskStorageController from './taskStorageController.js';

class TaskListController {
    constructor() {
        this.storage = new TaskStorageController();
        this.UI = new UIController();
    }

    addNewTask(taskObj) {
        this.storage.addNewTask(this.UI.getFormTask());
        this.UI.updateTaskList(this.storage.getTaskArr(this.UI.getCurrentTaskGroup()));
    }

    updateListeners() {
        this.UI.updateUIListeners(this.addNewTask.bind(this));
    }
}

export default TaskListController;