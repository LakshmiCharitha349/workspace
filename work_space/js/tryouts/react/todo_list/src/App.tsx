import { useReducer } from "react";
import { useState } from "react";
import { reducer , Task, Action} from "./todo_reducers";
// import "./App.css"

const AddTask = ({ task, onToggle }: ({ task: Task, onToggle: ({ type, id }: Action) => void })) => {
  return <div
     className="task"
    onClick={() => onToggle({ type: "toggle-status", id: task.id })}
  >
    <h2>{task.title}</h2>
    <h3>{task.isDone ? "✅" : "❌"}</h3>
    <button type="button"> delete </button>
  </div>
}

const InputForm = ({ addNewTask }: ({ addNewTask: ({ type, title }: Action) => void })) => {
  const [newTask, setNewTask] = useState("");

  return <form onSubmit={(e: Event) => {
    e.preventDefault();
    addNewTask({ type: "add-task", title: newTask })
  }}>
    <input type="text" onChange={(e) => setNewTask(e.target.value)} />
  </form>
}

const App = () => {
  const [todoList, dispatch] = useReducer(reducer, {
    nextId: 2,
    tasks: [{ id: 1, title: "task1", isDone: false }]
  })

  return <div>
    {todoList.tasks.map(t => <AddTask key={t.id} task={t} onToggle={dispatch} />)}
    <InputForm addNewTask={dispatch} />
  </div>
}

export default App;