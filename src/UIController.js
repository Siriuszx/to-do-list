class UIController {

    // UI Task Container
    #todoContainer = document.querySelector('.todo-container');
    #navGroupsContainer = document.querySelector('.nav-tabs');
    // Provided to the Storage Control in order to get relevant task group
    #currentTaskGroup = 'inbox';
    #listenersInitialized = false;

    #groupSelect = document.querySelector('#group-select');
    #tabsContainer = document.querySelector('.nav-tabs');
    #currentTab = document.querySelector('.tab-active');
    #inboxTab = document.querySelector('#inbox-tab');

    // Form elements: new group
    #groupModal = document.querySelector('#modal-add-group');
    #groupForm = document.querySelector('#new-group-form');
    #submitGroupBtn = document.querySelector('#submit-group-btn');
    #openGroupModalBtn = document.querySelector('#open-group-modal');
    #closeGroupModalBtn = document.querySelector('#close-group-modal');

    // Add New Group: Group Data
    #formGroupField = document.querySelector('#group-name-field');

    // Form elements: New Task
    #taskModal = document.querySelector('#modal-add-task');
    #taskForm = document.querySelector('#new-task-form');
    #submitTaskBtn = document.querySelector('#submit-task-btn');
    #openTaskModalBtn = document.querySelector('#open-task-modal');
    #closeTaskModalBtn = document.querySelector('#close-task-modal');

    // Add New Task: From Data
    #formTitle = document.querySelector('#form-title');
    #formDescription = document.querySelector('#form-desc');
    #formDueDate = document.querySelector('#form-due-date');
    #formPriority = document.querySelector('#form-priority');
    #formGroup = document.querySelector('#group-select');

    constructor(submitTaskHandler, switchHandler, submitGroupHandler) {
        this.#setInitialListeners(submitTaskHandler, switchHandler, submitGroupHandler);
        this.#resetAllFormInput();
    }

    #addTaskElement(taskObj, removeTaskHandler) {
        const newTaskEl = document.createElement('li');
        newTaskEl.classList.add('task-item');
        newTaskEl.setAttribute('data-uid', taskObj.UID);

        const taskTitle = document.createElement('h3');
        taskTitle.classList.add('item-title');
        taskTitle.textContent = taskObj.title;
        taskTitle.addEventListener('click', this.#taskMinimizeHandler);

        // Info container(<ul>)
        const taskInfoContainer = document.createElement('ul');
        taskInfoContainer.classList.add('item-info');
        taskInfoContainer.style.display = 'none';

        const taskRemoveBtn = document.createElement('button');
        taskRemoveBtn.classList.add('action-btn');
        taskRemoveBtn.classList.add('item-remove-btn');
        taskRemoveBtn.textContent = 'Remove Task';
        taskRemoveBtn.addEventListener('click', removeTaskHandler);

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
        infoDueDate.textContent = taskObj.timeLeft;

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
        newTaskEl.appendChild(taskRemoveBtn);


        this.#todoContainer.appendChild(newTaskEl);
    }

    removeTask(element) {
        element.remove();
    }

    #taskMinimizeHandler(event) {
        let taskInfo = event.currentTarget.parentNode.querySelector('.item-info');

        if (taskInfo.style.display !== 'none') {
            taskInfo.style.display = 'none';
        } else {
            taskInfo.style.display = 'flex';
        }
    }

    addGroupElement(groupName, switchHandler, currentTaskGroup) {
        let newGroup = document.createElement('li');

        newGroup.classList.add('tab-item');
        newGroup.addEventListener('click', this.#switchTaskGroup.bind(this));
        newGroup.addEventListener('click', switchHandler);
        newGroup.textContent = groupName;

        if (groupName === currentTaskGroup) {
            newGroup.classList.add('tab-active');
            this.#currentTaskGroup = newGroup.textContent;
        }

        this.#tabsContainer.appendChild(newGroup);
    }

    // Returns Task Data provided in the form
    submitFormTask() {
        if (this.#taskForm.reportValidity()) {
            let newTaskObj = {
                title: this.#formTitle.value,
                description: this.#formDescription.value,
                dueDate: this.#formDueDate.value,
                priority: this.#formPriority.value,
                taskGroup: this.#groupSelect.value.toLowerCase(),
            }

            console.log(this.#groupSelect.value);
            this.#taskModal.close();

            return newTaskObj;
        }
        return null;
    }

    submitFormGroup() {
        if (this.#groupForm.reportValidity()) {
            this.#groupModal.close();
            return this.#formGroupField.value;
        }

        return null;
    }

    #resetAllFormInput() {
        const formInputFields = document.querySelectorAll('.form-input-field');
        const formDueDate = document.querySelector('#form-due-date');

        formDueDate.value = UIController.#getFormattedDate();

        formInputFields.forEach((element) => {
            if (element.getAttribute('type') === 'text' ||
                element.getAttribute('type') === 'number') element.value = '';
        });
    }

    static #getFormattedDate(dateObj = new Date()) {
        let [year, month, day] = [dateObj.getFullYear().toString(), (dateObj.getMonth() + 1).toString(), dateObj.getDate().toString()];

        if (month.length === 1) month = `0${month}`;
        if (day.length === 1) day = `0${day}`;

        return `${year}-${month}-${day}`;
    }

    get currentTaskGroup() {
        return this.#currentTaskGroup;
    }

    #switchTaskGroup(event) {
        this.#currentTab.classList.toggle('tab-active');
        event.currentTarget.classList.toggle('tab-active');
        this.#currentTab = event.currentTarget;
        this.#currentTaskGroup = event.currentTarget.textContent.toLowerCase();
    }

    #setInitialListeners(submitTaskHandler, switchHandler, submitGroupHandler) {
        if (!this.#listenersInitialized) {
            // Add task form, modal
            this.#submitTaskBtn.addEventListener('click', submitTaskHandler);
            this.#submitTaskBtn.addEventListener('click', this.#resetAllFormInput);
            this.#openTaskModalBtn.addEventListener('click', () => this.#taskModal.showModal());
            this.#closeTaskModalBtn.addEventListener('click', () => this.#taskModal.close());
            this.#closeTaskModalBtn.addEventListener('click', this.#resetAllFormInput);

            // Add group form, modal
            this.#submitGroupBtn.addEventListener('click', submitGroupHandler);
            this.#submitGroupBtn.addEventListener('click', this.#resetAllFormInput);
            this.#openGroupModalBtn.addEventListener('click', () => this.#groupModal.showModal());
            this.#closeGroupModalBtn.addEventListener('click', () => this.#groupModal.close());
            this.#closeGroupModalBtn.addEventListener('click', this.#resetAllFormInput);

            // Default group 'inbox'
            this.#inboxTab.addEventListener('click', this.#switchTaskGroup.bind(this));
            this.#inboxTab.addEventListener('click', switchHandler);
        }
    }

    #addNewOption(optionName) {
        let newOption = document.createElement('option');
        newOption.textContent = optionName.charAt(0).toUpperCase() + optionName.slice(1);;
        newOption.value = optionName;

        this.#groupSelect.appendChild(newOption);
    }

    // Wipes current container to fill it with up-to-date task list
    updateUI(appData, removeTaskHandler, switchGroupHandler) {
        this.#todoContainer.innerHTML = '';
        this.#navGroupsContainer.innerHTML = '';
        this.#groupSelect.innerHTML = '';

        appData.taskData.forEach((taskObj) => {
            this.#addTaskElement(taskObj, removeTaskHandler);
        });

        appData.groupData.forEach((groupName) => {
            this.addGroupElement(groupName, switchGroupHandler, appData.currentTaskGroup);
        });

        appData.groupData.forEach((optionName) => {
            this.#addNewOption(optionName);
        });
        
    }
}

export default UIController;