import React, { useContext } from "react";
import { TasksContext } from "./context/TasksContext";

const Navbar = () => {
  const { state } = useContext(TasksContext);
  return (
    <>
      <h1 className="text-center my-4 text-primary">Project Management</h1>
      <p className="text-center lead">
        Currently {state.taskList.length} task(s) pending
      </p>
    </>
  );
};

export default Navbar;
