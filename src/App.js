import { createContext, useState } from "react";
import "./App.css";
import Heading from "./Pages/Heading";
import TodoLogic from "./Pages/TodoLogic";
import { v4 as newId } from "uuid";

const UserContext = createContext();

function App() {


  const [task, setTask] = useState([]);

  const isAddTask = (newTask) => {
      setTask([...task, {id: newId(), task: newTask, complete: false}]);
  }

  const isCompleted = (id, status) => {
      setTask(task.map((item) => (item.id === id ? {...item, complete: status} : item)))
  }

  const isEdit = (id, upDatedTask) => {
      setTask(task.map((item) => (item.id === id ? {...item, task: upDatedTask} : (item)) ));
  }

  const isDelete = (id) => {
      setTask(task.filter((item) => item.id !== id ));
  }

  return (
    <>
      <UserContext.Provider value={{task, isAddTask, isEdit, isDelete, isCompleted}}>
        <div className="container">
          <Heading />
          <TodoLogic />
        </div>
      </UserContext.Provider>
    </>
  );
}

export { App, UserContext };
