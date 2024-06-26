import Task from "./Task";

const ShowList = ({ list, removeTask, modifyTask }) => {
  return (
    <div>
      <ul>
        {list.map((x) => (
          <Task x={x} removeTask={removeTask} modifyTask={modifyTask} />
        ))}
      </ul>
    </div>
  );
};
export default ShowList;
