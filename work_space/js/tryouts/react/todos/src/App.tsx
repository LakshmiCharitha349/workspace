import { // @ts-types="react"
  useEffect, useReducer
} from "react";
import { useState } from "react";
import { reducer, Task, Action } from "./reducer.tsx";
import "./App.css"

const AddTask = ({ task, onToggle }: ({ task: Task, onToggle: (action: Action) => void })) => {
  return <div
    className="task">
    <h2 onClick={() => onToggle({ type: "toggle-status", id: task.id })}>{task.title}</h2>
    <h3>{task.isDone ? "✅" : "❌"}</h3>
    <button type="button" id="delete-btn" onClick={() => onToggle({ type: "delete-task", id: task.id })}> delete </button>
  </div>
}

const InputForm = ({ addNewTask }: ({ addNewTask: (action: Action) => void })) => {
  const [newTask, setNewTask] = useState("");
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch("/add-task", { method: "POST", body : newTask }) // /add-task returns task that added
    const resData = await res.json();
    addNewTask({type:"add-task", title: resData})
  }

  return <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => onSubmit(e)}>
    <input type="text" onChange={(e) => setNewTask(e.target.value)} />
  </form>
}

const App = () => {
  const [todoList, dispatch] = useReducer(reducer, {
    nextId: 2,
    tasks: [{ id: 1, title: "task1", isDone: false }]
  })

  useEffect(() => {

  }, [todoList])
  return <div>
    {todoList.tasks.map(t => <AddTask key={t.id} task={t} onToggle={dispatch} />)}
    <InputForm addNewTask={dispatch} />
  </div>
}

export default App;


// if i don't update state ater ui action then how do i know when do i have to fetch data from backend 