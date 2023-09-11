import UIController from './UIController.js';
import TaskStorageController from './taskStorageController.js';

class TaskListController {
    constructor() {
        this.storage = new TaskStorageController();
        this.UI = new UIController(this.addNewTask.bind(this), this.switchTaskGroup.bind(this), this.addNewGroupHandler.bind(this));

        this.UI.setInitialListeners();
    }

    addNewTask() {
        this.storage.addNewTask(this.UI.submitFormTask());
        this.UI.updateTaskList(this.storage.getTaskArr(this.UI.getCurrentTaskGroup()), this.removeTaskHandler.bind(this));
    }

    switchTaskGroup() {
       this.UI.updateTaskList(this.storage.getTaskArr(this.UI.getCurrentTaskGroup()), this.removeTaskHandler.bind(this)); 
    }

    removeTaskHandler(event) {
        let taskElement = event.currentTarget.parentNode;

        this.UI.removeTask(taskElement);
        this.storage.deleteTask(taskElement.getAttribute('data-uid'));
    }

    addNewGroupHandler(event) {
        this.UI.addGroup(this.switchTaskGroup.bind(this));
        this.UI.updateTaskList(this.storage.getTaskArr(this.UI.getCurrentTaskGroup()))
    }
}

export default TaskListController;