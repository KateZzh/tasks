// Создайте класс TodoList, который содержит свойство tasks (список задач) и методы
// addTask() (добавление задачи), removeTask() (удаление задачи) и getTasks()
// (получение списка задач). Создайте экземпляр класса TodoList и выполните
// несколько операций.

interface iTodoList {
  tasks: string[];
  addTask(newTask: string): void;
  removeTask(): void;
  getTasks(): string[];
}

class TodoList {
  public tasks: string[] = ["walk", "sleep"];

  public addTask(newTask: string) {
    this.tasks.push(newTask);
  }

  public removeTask(): void {
    this.tasks.pop();
  }

  public getTasks(): string[] {
    return this.tasks;
  }
}

const todoList: iTodoList = new TodoList();
console.log(todoList.getTasks());
todoList.addTask("watch");
todoList.removeTask();
