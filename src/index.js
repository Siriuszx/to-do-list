import TaskListController from "./taskListController.js";
import './style.css';

const taskCollection = [
    {
        title: 'CS HW', 
        description: 'Revise graph theory', 
        dueDate: '01.01.2024', 
        priority: 2,
        taskGroup: 'inbox',
    },
    {
        title: 'Math HW', 
        description: 'Linear Algebra HW', 
        dueDate: '21.04.2024', 
        priority: 2,
        taskGroup: 'inbox',
    },
    {
        title: 'Gym', 
        description: 'Back workout', 
        dueDate: '11.11.2023', 
        priority: 2,
        taskGroup: 'inbox',
    },
    {
        title: 'German', 
        description: 'Lektion 8', 
        dueDate: '13.05.2021', 
        priority: 1,
        taskGroup: 'inbox',
    },
];

let todoList = new TaskListController();

// todoList.addNewTask(taskCollection[0]);
// todoList.addNewTask(taskCollection[1]);
// todoList.addNewTask(taskCollection[2]);
// todoList.addNewTask(taskCollection[3]);


