import HTMLFactories from "./HTMLfactory.js";

const DOMrender = {
  putTasksOnDom(tasks) {
    const container = document.getElementById("tasks");
    container.innerHTML = "";

    tasks.forEach(task => {
      container.innerHTML += HTMLFactories.makeTaskEntry(task);
    });
  }
};

export default DOMrender;
