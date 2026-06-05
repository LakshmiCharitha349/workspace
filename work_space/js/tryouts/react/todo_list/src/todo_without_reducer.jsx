import { useState } from "react";
import "./App.css";

const Button = ({ name, onClick, type }) => {
  return <button type="button" className={`${name}-${type}`} onClick={() => onClick()}>{name}</button>
}

const AddTask = ({ task, updateTasks }) => {
  const [taskName, setTask] = useState(task);
  const [isStatus, setStatus] = useState(false);


  const toggleStatus = () => setStatus(!isStatus);

  const ediTaskTitle = () => {
    const newTitle = prompt("Enter title");
    setTask(newTitle);
  }

  const deleteTask = () => {
    updateTasks(tasks => tasks.filter(t => t !== taskName));
  }

  return <div className={`task ${isStatus ? "done-task" : ""}`}>
    <h2 class="task-title">{taskName}</h2>
    <section className="btns">
      <Button name="toggle" type="task" onClick={toggleStatus} />
      <Button name="edit" type="task" onClick={ediTaskTitle} />
      <Button name="deleteTask" type="task" onClick={deleteTask} />
    </section>
  </div>
}

const CreateTodo = ({ name, updateTodoList }) => {
  const [todoName, setTodo] = useState(name);
  const [tasks, updateTasks] = useState([]);

  const editTitle = () => {
    const newTitle = prompt("Enter title");
    setTodo(newTitle);
  }

  const addTask = () => {
    const newTitle = prompt("Entre title");
    updateTasks([newTitle, ...tasks]);
  }

  const updateTodos = () => {
    console.log(updateTodoList)
    updateTodoList(todos => todos.filter(t => t !== todoName));
  }

  console.log("tasks", tasks);
  return <div className="todo">
    <h2 id="todo-title">{todoName}</h2>
    <section className="btns">
      <Button name="add" onClick={addTask} />
      <Button name="edit" onClick={editTitle} />
      <Button name="delete" onClick={updateTodos} />
    </section>
    <div className="task-container">
      {tasks.map((taskName) => <AddTask task={taskName} updateTasks={updateTasks} />)}
    </div>
  </div>
}

const App = () => {
  const [todoList, updateTodoList] = useState([]);
  
  const todoList = {
    nextId: 2,
    todoList: [{ id: 1, title: "todo1", tasks}]
  }




  const addTodo = () => {
    const newTitle = prompt("Entre title");
    updateTodoList([newTitle, ...todoList]);
  }

  return <main>
    <section class="page-header">
      <header>
        <h1>Todo app</h1>
      </header>
      <section>
        <button type="button" id="add-todo" onClick={addTodo}>add</button>
      </section>
    </section>
    <section>
      <div class="todo-container">
        {todoList.map((todo) => <CreateTodo name={todo} updateTodoList={updateTodoList} />)}
      </div>
    </section>
  </main>
}

export default App;