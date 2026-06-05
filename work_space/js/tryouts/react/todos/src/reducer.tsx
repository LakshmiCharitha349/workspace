// enum actions  {
//   ADD_TASK , DELETE_TASK , TOGGLE_STATUS
// }

export type Action = { type: "toggle-status", id: number }
  | { type: "add-task", title: string }
  | { type: "delete-task", id: number }

export type TodoList = { nextId: number, tasks: Task[] }
export type Task = { id: number, title: string, isDone: boolean };


export const reducer = (todoList: TodoList, action: Action) => {
  switch (action.type) {
    case "toggle-status": {
      const updatedTasks = todoList.tasks.map(t => {
        const isDone = t.id === action.id ? !t.isDone : t.isDone;
        return { ...t, isDone };
      })

      return { ...todoList, tasks: [...updatedTasks] };
    }
    case "add-task": {
      const newTask = { id: todoList.nextId, title: action.title, isDone: false };
      return { nextId: todoList.nextId + 1, "tasks": [...todoList.tasks, newTask] }
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
