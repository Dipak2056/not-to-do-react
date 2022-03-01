import React, { useState } from "react";

const initialState = { task: "", hr: "" };
export const Form = ({ addNewTask }) => {
  const [newTask, setNewTask] = useState(initialState);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    addNewTask(newTask);
    setNewTask(initialState);
  };
  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setNewTask({
      ...newTask,
      [name]: name === "hr" ? +value : value,
    });
  };
  return (
    <div>
      <div className="row">
        <div className="col">
          <div className="form-box">
            <form
              onSubmit={handleOnSubmit}
              className="row row-cols-lg-auto d-flex justify-content-center g-3 align-items-center py-5"
            >
              <div className="col-12">
                <label
                  className="visually-hidden"
                  for="inlineFormInputGroupUsername"
                >
                  Your-task
                </label>
                <div className="input-group">
                  <input
                    type="text"
                    name="task"
                    onChange={handleOnChange}
                    value={newTask.task}
                    className="form-control"
                    id="task"
                    required
                    placeholder="Your-task"
                  />
                </div>
              </div>
              <div className="col-12">
                <label
                  className="visually-hidden"
                  for="inlineFormInputGroupUsername"
                >
                  Hours
                </label>
                <div className="input-group">
                  <input
                    type="number"
                    name="hr"
                    onChange={handleOnChange}
                    value={newTask.hr}
                    className="form-control"
                    id="hour"
                    required
                    placeholder="Hours"
                  />
                </div>
              </div>

              <div className="col-12">
                <button type="submit" className="btn btn-primary">
                  Add to Task List
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
