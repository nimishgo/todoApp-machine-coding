// App.js
import React from "react";
import TaskApp from "./components/TaskApp";
import AddForm from "./components/AddForm";
import ShowList from "./components/ShowList";

function App() {
  return (
    <div className="App">
      <TaskApp>
        <div className="h-[50vh] flex flex-col justify-center items-center">
          <h1>To Do list</h1>
          <AddForm />
          <ShowList />
        </div>
      </TaskApp>
    </div>
  );
}

export default App;
