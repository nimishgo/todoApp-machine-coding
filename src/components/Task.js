import { useContext, useState } from "react";
import { listDispatch } from "../utils/itemStore";

const Task = ({ x }) => {
  const [showEdit, setEdit] = useState(false);
  const [text, setText] = useState(x.task);
  const dispatch = useContext(listDispatch);

  const handleCheckboxChange = () => {
    dispatch({
      type: "modify",
      task: { ...x, done: !x.done },
    });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    setEdit(false);
    dispatch({
      type: "modify",
      task: { id: x.id, task: text, done: x.done },
    });
  };

  const handleDelete = () => {
    dispatch({
      type: "remove",
      id: x.id,
    });
  };

  return (
    <li className="flex gap-4 items-center bg-sky-200 p-2 rounded-lg">
      <input
        type="checkbox"
        className="w-8 h-8"
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
            className="px-2 border-2 border-black border-solid h-10 rounded-lg mx-4"
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
      <button className="button_class" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

export default Task;
