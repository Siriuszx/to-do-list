import UIController from './UIController.js';
import TaskStorageController from './taskStorageController.js';

class TaskListController {
    constructor() {
        this.storage = new TaskStorageController();
        this.UI = new UIController();

        this.UI.updateUIListeners(this.addNewTask.bind(this), this.switchTaskGroup.bind(this), this.addNewGroup.bind(this));
    }

    addNewTask() {
        this.storage.addNewTask(this.UI.submitFormTask());
        this.UI.updateTaskList(this.storage.getTaskArr(this.UI.getCurrentTaskGroup()));
    }

    addNewGroup() {
        this.UI.addGroup(this.switchTaskGroup.bind(this));
        this.UI.updateTaskList(this.storage.getTaskArr(this.UI.getCurrentTaskGroup()))
    }

    switchTaskGroup() {
       this.UI.updateTaskList(this.storage.getTaskArr(this.UI.getCurrentTaskGroup())); 
    }
}

export default TaskListController;