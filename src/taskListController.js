import UIController from './UIController';
import TaskStorageController from './taskStorageController';

class TaskListController {
    #storage = new TaskStorageController();

    #UI = new UIController(
        this.#addNewTaskHandler.bind(this),
        this.#switchTaskGroupHandler.bind(this),
        this.#addNewGroupHandler.bind(this)
    );

    constructor() {
        this.#updateUI();
    }

    #addNewTaskHandler() {
        this.#storage.addNewTask(this.#UI.submitFormTask());
        this.#updateUI();
    }

    #switchTaskGroupHandler() {
        this.#storage.switchCurrentTaskGroup(this.#UI.currentTaskGroup);
        this.#updateUI();
    }

    #removeTaskHandler(event) {
        let taskElement = event.currentTarget.parentNode;

        this.#UI.removeTask(taskElement);
        this.#storage.deleteTask(taskElement.getAttribute('data-uid'));
    }

    #addNewGroupHandler() {
        this.#storage.addTaskGroup(this.#UI.submitFormGroup());
        this.#updateUI();
    }

    #updateUI() {
        this.#UI.updateUI(
            this.#storage.getAppData(),
            this.#removeTaskHandler.bind(this),
            this.#switchTaskGroupHandler.bind(this)
        );
    }
}

export default TaskListController;
