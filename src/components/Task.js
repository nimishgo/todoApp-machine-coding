import { useState } from "react";

const Task = ({ x, modifyTask, removeTask }) => {
  const [showEdit, setEdit] = useState(false);
  const [text, setText] = useState(x.task);

  const handleCheckboxChange = () => {
    console.log("Hi ");
    modifyTask({ ...x, done: !x.done });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    setEdit(false);
    modifyTask({ id: x.id, task: text, done: x.done });
  };

  return (
    <li key={x.id} className="flex gap-4 items-center">
      <input
        type="checkbox"
        className="w-4 h-4"
        checked={x.done}
        onChange={handleCheckboxChange}
      />
      {!showEdit ? (
        x.task
      ) : (
        <form onSubmit={handleEditSubmit}>
          <input
            type="text"
            value={text}
            className="px-2 border-2 border-black border-solid h-5"
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit" className="button_class">
            Save
          </button>
        </form>
      )}
      {!showEdit && (
        <button className="button_class" onClick={() => setEdit(true)}>
          Edit
        </button>
      )}
      <button className="button_class" onClick={() => removeTask(x.id)}>
        Delete
      </button>
    </li>
  );
};

export default Task;
