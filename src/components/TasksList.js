import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import MyVerticallyCenteredModal from "./UpdateTask";
import { TasksContext } from "./context/TasksContext";

const TasksList = () => {
  const { state, dispatch } = useContext(TasksContext);
  const updateTask = (task) => {
    console.log("update Task");
    setModalShow(true);
    dispatch({ type: "SET_SELECTED_TASK", payload: task });
  };

  const deleteTask = (task) => {
    console.log("delete task");
    dispatch({ type: "REMOVE_TASK", payload: task });
  };

  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>#</th>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {state.taskList &&
            state.taskList.map((task, id) => (
              <tr className="text-center" key={id}>
                <td>{id + 1}</td>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td>
                  <Button
                    variant="primary"
                    className="mx-3"
                    onClick={() => updateTask(task)}
                  >
                    <i className="bi bi-pencil-square"></i>
                  </Button>
                  <Button variant="primary">
                    <i
                      className="bi bi-trash3"
                      onClick={() => deleteTask(task)}
                    ></i>
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default TasksList;
