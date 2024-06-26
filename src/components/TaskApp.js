import taskReducer, { initialState } from "../utils/reducers";
import { listStore, listDispatch } from "../utils/itemStore";
import { useReducer } from "react";

const TaskApp = ({ children }) => {
  const [list, dispatch] = useReducer(taskReducer, initialState);

  return (
    <listStore.Provider value={list}>
      <listDispatch.Provider value={dispatch}>{children}</listDispatch.Provider>
    </listStore.Provider>
  );
};

export default TaskApp;
