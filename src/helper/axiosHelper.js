const rootUrl = "http://localhost:8000/api/v1";
const taskApi = `${rootUrl}/task`;
//fetch  all tasks
export const fetchTasks = (data) => {};

//fetch a task
//post new task
export const postTask = (data) => {
  fetch(taskApi, {
    method: "POST",
    header: { "content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log("error:", error);
    });
};
//delete task
