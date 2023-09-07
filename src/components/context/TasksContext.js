import { createContext, useReducer } from "react";

export const TasksContext = createContext();

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
