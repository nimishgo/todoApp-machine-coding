import { useReducer } from "react";
import AddForm from "./components/AddForm";
import ShowList from "./components/ShowList";
import taskReducer, { initialState } from "./utils/reducers";
import { listDispatch, listStore } from "./utils/itemStore";
function App() {
  // const [list, setList] = useState([]);
  const [list, dispatch] = useReducer(taskReducer, initialState);
  const addTask = (msg) => {
    // const task = {
    //   id: list.length + 1 + msg,
    //   task: msg,
    //   done: false,
    // };
    // setList((prev) => [...prev, task]);
    console.log(list);
    dispatch({
      type: "add",
      id: list.length + msg,
      text: msg,
    });
  };

  const removeTask = (id) => {
    // setList(list.filter((x) => id !== x.id));
    dispatch({
      type: "remove",
      id: id,
    });
  };

  const modifyTask = (task) => {
    // setList(
    //   list.map((x) => {
    //     if (x.id === task.id) {
    //       return task;
    //     } else {
    //       return x;
    //     }
    //   })
    // );
    dispatch({
      type: "modify",
      task: task,
    });
  };
  return (
    <>
      <listStore.Provider value={list}>
        <listDispatch.Provider value={dispatch}>
          <div className="h-[50vh] flex flex-col justify-center items-center ">
            <h1>To Do list</h1>
            <AddForm addTask={addTask} />
            <ShowList
              list={list}
              removeTask={removeTask}
              modifyTask={modifyTask}
            />
          </div>
        </listDispatch.Provider>
      </listStore.Provider>
    </>
  );
}

export default App;
