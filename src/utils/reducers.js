const taskReducer = (tasks, action) => {
  switch (action.type) {
    case "add": {
      return [
        ...tasks,
        {
          id: action.id,
          task: action.text,
          done: false,
        },
      ];
    }
    case "modify": {
      return tasks.map((t) => {
        if (action.task.id === t.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case "remove": {
      return tasks.filter((x) => x.id !== action.id);
    }
    default: {
      throw Error("unknown action: " + action.type);
    }
  }
};
export const initialState = [];

export default taskReducer;
