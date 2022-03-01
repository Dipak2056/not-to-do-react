import React from "react";

export const TaskList = ({
  taskList,
  handleOnDeleteTaskList,
  markAsNotToDo,
}) => {
  return (
    <div>
      <div className="col-md-6 mb-5">
        <h2 className="text-center">Task List</h2>
        <hr />
        <div className="list-items">
          <table className="table table-striped w-100">
            <tbody id="task-list">
              {taskList.map((item, i) => {
                return (
                  <tr key={i}>
                    <td>
                      <input type="checkbox" />
                      {item.task}
                    </td>
                    <td>{item.hr} hr</td>
                    <td className="text-end">
                      <div
                        className="btn btn-danger"
                        title="Delete"
                        onClick={() => handleOnDeleteTaskList(i)}
                      >
                        <i className="fa-solid fa-trash-can" title="Delete"></i>
                      </div>
                      <div
                        className="btn btn-warning "
                        title="Mark"
                        onClick={() => markAsNotToDo(i)}
                      >
                        <i className="fa-solid fa-circle-chevron-right"></i>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
