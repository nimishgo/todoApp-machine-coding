import { useState } from "react";

const AddForm = ({ addTask }) => {
  const [msg, setmsg] = useState("");
  const taskMsg = (e) => {
    console.log(e.target.value);
    setmsg(e.target.value);
  };
  return (
    <form className="flex items-center" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        value={msg}
        className="px-2 border-2 border-black border-solid h-10 rounded-lg"
        onChange={taskMsg}
      />
      <button
        className="m-4 bg-sky-500 text-white font-bold p-2 rounded-lg"
        onClick={() => {
          addTask(msg);
          setmsg("");
        }}
      >
        Add +
      </button>
    </form>
  );
};
export default AddForm;
