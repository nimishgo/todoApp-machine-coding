import Task from "./Task";

const ShowList = ({ list, removeTask, modifyTask }) => {
  return (
    <>
      <ul>
        {list.map((x) => (
          <Task
            x={x}
            key={x.id}
            removeTask={removeTask}
            modifyTask={modifyTask}
          />
        ))}
      </ul>
    </>
  );
};
export default ShowList;
