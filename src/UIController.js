class UIController {
    constructor() {
        this.todoContainer = document.querySelector('.todo-container');
        
        this.taskModal = document.querySelector('#modal-add-task');
        this.taskForm = document.querySelector('#new-task-form');
        this.submitTaskBtn = document.querySelector('#submit-task-btn');
        this.openTaskModalBtn = document.querySelector('#open-task-modal');
        this.closeTaskModalBtn = document.querySelector('#close-task-modal');
        
        this.formTitle = document.querySelector('#form-title');
        this.formDesc = document.querySelector('#form-desc');
        this.formDueDate = document.querySelector('#form-due-date');
        this.formPrio = document.querySelector('#form-priority');
    }

    #addNewTaskEl(taskObj) {
        const newTaskEl = document.createElement('li');
        newTaskEl.classList.add('task-item');


        const taskTitle = document.createElement('h3');
        taskTitle.classList.add('item-title');
        taskTitle.textContent = taskObj.title;

        // Info container(<ul>)
        const taskInfoContainer = document.createElement('ul');
        taskInfoContainer.classList.add('item-info');
        

        // Info Item: Description
        const infoItem1 = document.createElement('li');
        infoItem1.classList.add('info-item');

        const infoDescTitle = document.createElement('span');
        infoDescTitle.classList.add('info-title');
        infoDescTitle.textContent = 'Description: ';

        const infoDescData = document.createElement('span');
        infoDescData.classList.add('info-data', 'info-desc');
        infoDescData.textContent = taskObj.description;

        infoItem1.appendChild(infoDescTitle);
        infoItem1.appendChild(infoDescData);

        // Info Item: Due date
        const infoItem2 = document.createElement('li');
        infoItem2.classList.add('info-item');

        const infoDueTitle = document.createElement('span');
        infoDueTitle.classList.add('info-title');
        infoDueTitle.textContent = 'Due date: ';

        const infoDueDate = document.createElement('span');
        infoDueDate.classList.add('info-data', 'info-due-date');
        infoDueDate.textContent = taskObj.dueDate;

        infoItem2.appendChild(infoDueTitle);
        infoItem2.appendChild(infoDueDate);

        // Info Item: Priority
        const infoItem3 = document.createElement('li');
        infoItem3.classList.add('info-item');

        const infoPrioTitle = document.createElement('span');
        infoPrioTitle.classList.add('info-title');
        infoPrioTitle.textContent = 'Priority: ';

        const infoPrioData = document.createElement('span');
        infoPrioData.classList.add('info-data', 'info-priority');
        infoPrioData.textContent = taskObj.priority;

        infoItem3.appendChild(infoPrioTitle);
        infoItem3.appendChild(infoPrioData);


        taskInfoContainer.appendChild(infoItem1);
        taskInfoContainer.appendChild(infoItem2);
        taskInfoContainer.appendChild(infoItem3);


        newTaskEl.appendChild(taskTitle);
        newTaskEl.appendChild(taskInfoContainer);


        this.todoContainer.appendChild(newTaskEl);
    }

    getFormTask() {
        if(this.taskForm.reportValidity()) {
            return {
                title: this.formTitle.value,
                description: this.formDesc.value,
                dueDate: this.formDueDate.value,
                priority: this.formPrio.value
            };
        }
    }

    updateUIListeners(listeners) {
        this.submitTaskBtn.addEventListener('click', listeners);
        this.openTaskModalBtn.addEventListener('click', () => this.taskModal.showModal());
        this.closeTaskModalBtn.addEventListener('click', () => this.taskModal.close());
    }

    updateTaskContainer(taskArr) {
        this.todoContainer.innerHTML = '';

        taskArr.forEach((taskObj) => {
            this.#addNewTaskEl(taskObj);
        });
    }

    // For debugging purposes
    logTask(taskObj) {
        console.log(`Title: ${taskObj.title}
Description: ${taskObj.description}
Due Date: ${taskObj.dueDate}
Task Priority: ${taskObj.priority}\n`);
    }

    logAllTasks(tasksArr) {
        tasksArr.forEach(taskObj => {
            this.logTask(taskObj);
        });
    }
}

export default UIController;