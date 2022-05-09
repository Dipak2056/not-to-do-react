const rootUrl = "http://localhost:8000/api/v1";
const taskApi = `${rootUrl}/task`;
//fetch  all tasks
export const fetchTasks = (data) => {};

//fetch a task
//post new task
export const postTask = async (data) => {
  try {
    const res = await fetch(taskApi, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const dd = await res.json();

    return dd;
  } catch (error) {
    console.log("error:", error.message);
  }
};
//delete task
