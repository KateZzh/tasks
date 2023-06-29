// Создайте класс TodoList, который содержит свойство tasks (список задач) и методы
// addTask() (добавление задачи), removeTask() (удаление задачи) и getTasks()
// (получение списка задач). Создайте экземпляр класса TodoList и выполните
// несколько операций.
class TodoList {
    tasks = ["walk", "sleep"];
    addTask(newTask) {
        this.tasks.push(newTask);
    }
    removeTask() {
        this.tasks.pop();
    }
    getTasks() {
        return this.tasks;
    }
}
const todoList = new TodoList();
console.log(todoList.getTasks());
todoList.addTask("watch");
todoList.removeTask();
