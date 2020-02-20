
import apiActions from "./messages/messageAPI.js"
import renderMessages from "./messages/messagesDom.js"
import messEventManager from "./messages/eventListeners.js"

apiActions.getAllMessages().then(renderMessages)
messEventManager.addDeleteListener()
messEventManager.sendMessageListener()


import tasksAPI from "./tasks/dataHandler.js";
import DOMrender from "./tasks/DOMrender.js";
import taskEvents from "./tasks/eventListeners.js";
import logInForm from "./auth/logInForm.js"
import authEvents from "./auth/eventListeners.js"

logInForm.makeLogInForm();
tasksAPI.getTasks().then(DOMrender.putTasksOnDom);
taskEvents.renderNewTaskForm();
taskEvents.saveNewTask();
taskEvents.deleteTask();
taskEvents.editTask();
taskEvents.saveEditedTask();
taskEvents.editComplete();
authEvents.logIn()
authEvents.newUserForm();
authEvents.addNewUser();
