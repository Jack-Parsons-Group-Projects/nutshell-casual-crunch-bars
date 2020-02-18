const API = {
  getTasks() {
    return fetch("http://localhost:3000/tasks?_expand=user").then(resp =>
      resp.json()
    );
  },
  postNewTask(newTask) {
    return fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newTask)
    });
  },
  updateTask(task) {
    return fetch(`http://localhost:3000/tasks/${task.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(task)
    });
  },
  deleteTask(entryId) {
    return fetch(`http://localhost:3000/tasks/${entryId}`, {
      method: "DELETE"
    });
  }
};

export default API;
