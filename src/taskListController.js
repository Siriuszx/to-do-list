import UIController from './UIController.js';
import TaskStorageController from './taskStorageController.js';

class TaskListController {
    constructor() {
        this.storage = new TaskStorageController();
        this.UI = new UIController(this.addNewTaskHandler.bind(this), this.switchTaskGroupHandler.bind(this), this.addNewGroupHandler.bind(this));
    }

    addNewTaskHandler(event) {
        this.storage.addNewTask(this.UI.submitFormTask());
        this.UI.updateTaskList(this.storage.getTaskArr(this.UI.currentTaskGroup), this.removeTaskHandler.bind(this));
    }

    switchTaskGroupHandler(event) {
       this.UI.updateTaskList(this.storage.getTaskArr(this.UI.currentTaskGroup), this.removeTaskHandler.bind(this)); 
    }

    removeTaskHandler(event) {
        let taskElement = event.currentTarget.parentNode;

        this.UI.removeTask(taskElement);
        this.storage.deleteTask(taskElement.getAttribute('data-uid'));
    }

    addNewGroupHandler(event) {
        this.UI.addGroup(this.switchTaskGroupHandler.bind(this));
        this.UI.updateTaskList(this.storage.getTaskArr(this.UI.currentTaskGroup))
    }
}

export default TaskListController;