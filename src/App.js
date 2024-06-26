import { useState } from "react";
import AddForm from "./components/AddForm";
import ShowList from "./components/ShowList";

function App() {
  const [list, setList] = useState([]);
  const addTask = (msg) => {
    const task = {
      id: list.length + 1 + msg,
      task: msg,
      done: false,
    };
    setList((prev) => [...prev, task]);
  };

  const removeTask = (id) => {
    setList(list.filter((x) => id !== x.id));
  };

  const modifyTask = (task) => {
    setList(
      list.map((x) => {
        if (x.id === task.id) {
          return task;
        } else {
          return x;
        }
      })
    );
  };
  return (
    <>
      <div className="h-[50vh] flex flex-col justify-center items-center ">
        <h1>To Do list</h1>
        <AddForm addTask={addTask} />
        <ShowList list={list} removeTask={removeTask} modifyTask={modifyTask} />
      </div>
    </>
  );
}

export default App;
