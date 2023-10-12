import { createContext, useReducer } from "react";

export const TasksContext = createContext();

const tasksReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      const id = Math.random() * 100 + "-" + Math.random() * 100;
      let task = { ...action.payload, id };
      return { ...state, taskList: [...state.taskList, task] };
    case "REMOVE_TASK":
      let list = state.taskList.filter((task) => task.id !== action.payload.id);
      return { ...state, taskList: list };
    case "UPDATE_TASK":
      let updateList = state.taskList.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );
      return { ...state, taskList: updateList };
    case "GET_TASKS":
      return state.taskList;
    case "SET_SELECTED_TASK":
      return { ...state, selectedTask: { ...action.payload } };
    case "GET_SELECTED_TASK":
      return state.selectedTask;
    default:
      return state;
  }
};
export const TasksContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(tasksReducer, {
    taskList: [],
    selectedTask: {},
  });
  return (
    <TasksContext.Provider value={{ state, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
};
