import { configureStore } from "@reduxjs/toolkit";
import tasksReducer, {
  addTaskToServer,
  getTasksFromServer,
} from "./slices/tasksSlice";
import { createStoreHook } from "react-redux";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     thunk: {
  //       extraArgument: { myCustomApiService },
  //     },
  //   }),
});
