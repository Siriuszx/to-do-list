class UIController {
    constructor() {

    }

    logTask(taskObj){
        console.log(`Title: ${taskObj.title}
Description: ${taskObj.description}
Due Date: ${taskObj.dueDate}
Task Priority: ${taskObj.priority}\n`);
    }

    logTaskArr(tasksArr) {
        tasksArr.forEach(taskObj => {
            this.logTask(taskObj);
        });
    }
}

export default UIController;