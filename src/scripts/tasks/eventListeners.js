import HTMLFactories from "./HTMLfactory.js";
import API from "./dataHandler.js";
import DOMrender from "./DOMrender.js";

const events = {
  renderNewTaskForm() {
    const formButton = document.getElementById("formButton");

    formButton.addEventListener("click", event => {
      HTMLFactories.makeTaskEntryAddForm();
    });
  },
  saveNewTask() {
    const taskAddForm = document.getElementById("taskAddForm");

    taskAddForm.addEventListener("click", event => {
      if (event.target.id === "saveTask") {
        const taskName = document.querySelector("#taskName");
        const taskExpectedComplete = document.querySelector(
          "#taskExpectedComplete"
        );
        const hiddenId = document.querySelector("#taskId");
        sessionStorage.setItem("userId", 4);

        const newTask = HTMLFactories.taskMaker(
          taskName.value,
          taskExpectedComplete.value,
          parseInt(sessionStorage.getItem("userId"))
        );

        if (hiddenId.value !== "") {
          newTask.id = parseInt(hiddenId.value);
          API.updateTask(newTask).then(() => {
            API.getTasks()
              .then(DOMrender.putTasksOnDom)
              .then((taskAddForm.innerHTML = ""));
          });
        } else {
          API.postNewTask(newTask).then(() => {
            API.getTasks()
              .then(DOMrender.putTasksOnDom)
              .then((taskAddForm.innerHTML = ""));
          });
        }
      }
    });
  },
  editTask() {
    const tasks = document.querySelector("#tasks");
    tasks.addEventListener("click", event => {
      if (event.target.id.startsWith("taskName--")) {
        const taskToEdit = event.target.id.split("--")[1];
        HTMLFactories.makeEditTaskNameForm(taskToEdit);
        const hiddenId = document.querySelector("#editTaskId");
        const userId = document.querySelector("#editTaskUserId");
        const taskName = document.querySelector("#editTaskName");
        const taskExpectedComplete = document.querySelector(
          "#editTaskExpectedComplete"
        );

        fetch(`http://localhost:3000/tasks/${taskToEdit}`)
          .then(resp => resp.json())
          .then(task => {
            hiddenId.value = task.id;
            userId.value = task.userId;
            taskName.value = task.task;
            taskExpectedComplete.value = task.expectedComplete;
          });
      }
    });
  },
  saveEditedTask() {
    const tasks = document.querySelector("#tasks");

    tasks.addEventListener("keyup", event => {
      if (event.keyCode === 13) {
        const editedTaskId = document.querySelector("#editTaskId");
        const editedTaskUserId = document.querySelector("#editTaskUserId");
        const editTaskName = document.querySelector("#editTaskName");
        const editTaskExpectedComplete = document.querySelector(
          "#editTaskExpectedComplete"
        );

        const editedTask = HTMLFactories.editedTaskMaker(
          editedTaskId.value,
          editedTaskUserId.value,
          editTaskName.value,
          editTaskExpectedComplete.value
        );

        API.updateTask(editedTask)
          .then(API.getTasks)
          .then(DOMrender.putTasksOnDom);
      }
    });
  },
  editComplete() {
    const tasks = document.querySelector("#tasks");
    tasks.addEventListener("click", event => {
      if (event.target.id.startsWith("completeTask--")) {
        const taskToEdit = event.target.id.split("--")[1];

        return fetch(`http://localhost:3000/tasks/${taskToEdit}`)
          .then(resp => resp.json())
          .then(task => {
            if (task.isComplete === false) {
              task.isComplete = true;
              API.updateTask(task)
                .then(API.getTasks)
                .then(DOMrender.putTasksOnDom);
            }
          });
      }
    });
  },
  deleteTask() {
    const tasks = document.querySelector("#tasks");
    tasks.addEventListener("click", event => {
      if (event.target.id.startsWith("taskDelete--")) {
        const deleteButtonId = event.target.id;
        const deleteButtonArray = deleteButtonId.split("--");
        const taskToDelete = deleteButtonArray[1];

        API.deleteTask(taskToDelete)
          .then(API.getTasks)
          .then(DOMrender.putTasksOnDom);
      }
    });
  }
};

export default events;
