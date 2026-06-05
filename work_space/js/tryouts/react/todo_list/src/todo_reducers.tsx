export type Action = { type: string, id: number, title: string }
export type TodoList = { nextId: number, tasks: Task[] }
export type Task = { id: number, title: string, isDone: boolean };


export const reducer = (todoList: TodoList, action: Action) => {
  switch (action.type) {
    case "toggle-status": {
      const updatedTask: any = todoList.tasks.find(task => task.id === action.id);
      updatedTask.isDone = !updatedTask.isDone;
      return { ...todoList, tasks: [...todoList.tasks] };
    }
    case "add-task": {
      const newTask = { id: todoList.nextId, title: action.title, isDone: false };
      return { nextId: ++todoList.nextId, "tasks": [...todoList.tasks, newTask] }
    }
    case "delete-task": {
      const updatedTasks = todoList.tasks.filter(task => task.id !== action.id);
      return { ...todoList, tasks: [...updatedTasks] };
    }

    default: {
      return { ...todoList }
    }
  }
}
