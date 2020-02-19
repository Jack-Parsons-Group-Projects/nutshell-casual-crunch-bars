import HTMLFactories from "./HTMLfactory.js";

const DOMrender = {
  putTasksOnDom(tasks) {
    const activeUser = parseInt(sessionStorage.getItem("userId"));
    const container = document.getElementById("tasks");
    container.innerHTML = "";

    tasks.forEach(task => {
      if (task.userId === activeUser) {
        if (task.isComplete === false) {
          container.innerHTML += HTMLFactories.makeTaskEntry(task);
        }
      }
    });
  }
};

export default DOMrender;
