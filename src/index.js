import TaskListController from "./taskListController.js";

let todoList = new TaskListController();

todoList.addNewTask('CS HW', 'Revise graph theory', '01.01.2024', 2);
todoList.addNewTask('Math HW', 'Linear Algebra HW', '21.04.2024', 2);
todoList.addNewTask('Gym', 'Back workout', '11.11.2023', 2);
todoList.addNewTask('German', 'Lektion 8', '13.05.2021', 1);


todoList.logInfo('all');

