import { useContext } from "react";
import { listStore } from "../utils/itemStore";
import Task from "./Task";

const ShowList = () => {
  const list = useContext(listStore);
  return (
    <>
      <ul>
        {list.map((x) => (
          <Task key={x.id} x={x} />
        ))}
      </ul>
    </>
  );
};
export default ShowList;
