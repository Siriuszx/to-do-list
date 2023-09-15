import { formatDistanceToNow } from 'date-fns';

class Task {
    constructor(title, description, dueDate, priority, taskGroup, UID) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.taskGroup = taskGroup;
        this.UID = UID;
    }

    get timeLeft() {
        let [year, month, day] = this.dueDate.split('-');

        return `in ${formatDistanceToNow(new Date(year, month - 1, day))}`;
    }
}

export default Task;
