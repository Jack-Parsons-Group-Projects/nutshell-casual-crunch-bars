import API from "./tasks/dataHandler.js"
import DOMrender from "./tasks/DOMrender.js"
import events from "./tasks/eventListeners.js"

API.getTasks().then(DOMrender.putTasksOnDom)
events.renderNewTaskForm();
events.saveNewTask();
events.deleteTask();
events.editTask();