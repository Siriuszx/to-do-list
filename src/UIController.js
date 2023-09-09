class UIController {
    constructor() {
        // UI Task Container
        this.todoContainer = document.querySelector('.todo-container');
        // Provided to the Storage Control in order to get relevant task group
        this.currentTaskGroup = 'inbox';

        this.currentTab = document.querySelector('.tab-active');
        this.taskGroups = document.querySelectorAll('.tab-item');
        
        // Form elements
        this.taskModal = document.querySelector('#modal-add-task');
        this.taskForm = document.querySelector('#new-task-form');
        this.submitTaskBtn = document.querySelector('#submit-task-btn');
        this.openTaskModalBtn = document.querySelector('#open-task-modal');
        this.closeTaskModalBtn = document.querySelector('#close-task-modal');
        
        // Add New Task(From data)  
        this.formTitle = document.querySelector('#form-title');
        this.formDesc = document.querySelector('#form-desc');
        this.formDueDate = document.querySelector('#form-due-date');
        this.formPrio = document.querySelector('#form-priority');
        this.formGroup = document.querySelector('#group-select');
    }

    #addTaskEl(taskObj) {
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

    // Returns Task Data provided in the form
    getFormTask() {
        if(this.taskForm.reportValidity()) {
            return {
                title: this.formTitle.value,
                description: this.formDesc.value,
                dueDate: this.formDueDate.value,
                priority: this.formPrio.value,
                taskGroup: this.formGroup.value,
            };
        }
    }   

    getCurrentTaskGroup() {
        return this.currentTaskGroup;
    }

    #switchTaskGroup(event) {
        this.currentTab.classList.toggle('tab-active');
        event.currentTarget.classList.toggle('tab-active');
        this.currentTab = event.currentTarget;
        this.currentTaskGroup = event.currentTarget.textContent.toLowerCase();
    }

    updateUIListeners(submitHandler, taskList) {
        this.submitTaskBtn.addEventListener('click', submitHandler);
        this.openTaskModalBtn.addEventListener('click', () => this.taskModal.showModal());
        this.closeTaskModalBtn.addEventListener('click', () => this.taskModal.close());

        this.taskGroups.forEach((taskTab) => {
            taskTab.addEventListener('click', this.#switchTaskGroup.bind(this));
            taskTab.addEventListener('click', taskList.switchTaskGroup.bind(taskList));
        }); 

    }

    // Wipes current container to fill it with up-to-date task list
    updateTaskList(taskArr) {
        this.todoContainer.innerHTML = '';

        taskArr.forEach((taskObj) => {
            this.#addTaskEl(taskObj);
        });
    }
}

export default UIController;