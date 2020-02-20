import HTMLFactories from "./HTMLfactory.js";
import tasksAPI from "./dataHandler.js";
import DOMrender from "./DOMrender.js";

const taskEvents = {
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

        const newTask = HTMLFactories.taskMaker(
          taskName.value,
          taskExpectedComplete.value,
          parseInt(sessionStorage.getItem("userId"))
        );

        if (hiddenId.value !== "") {
          newTask.id = parseInt(hiddenId.value);
          tasksAPI.updateTask(newTask).then(() => {
            tasksAPI.getTasks()
              .then(DOMrender.putTasksOnDom)
              .then((taskAddForm.innerHTML = ""));
          });
        } else {
          tasksAPI.postNewTask(newTask).then(() => {
            tasksAPI.getTasks()
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
            userId.value = parseInt(task.userId);
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
          parseInt(editedTaskUserId.value),
          editTaskName.value,
          editTaskExpectedComplete.value
        );

        tasksAPI.updateTask(editedTask)
          .then(tasksAPI.getTasks)
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
              tasksAPI.updateTask(task)
                .then(tasksAPI.getTasks)
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

        tasksAPI.deleteTask(taskToDelete)
          .then(tasksAPI.getTasks)
          .then(DOMrender.putTasksOnDom);
      }
    });
  }
};

export default taskEvents;
