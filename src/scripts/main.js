
// const message = "Time to build an application that gives you all the information you need in a Nutshell"

// document.querySelector("#container").innerHTML = `<h1>${message}</h1>`

// console.log(message)
import apiActions from "./messages/messageAPI.js"
import renderMessages from "./messages/messagesDom.js"
import API from "./tasks/dataHandler.js";
import DOMrender from "./tasks/DOMrender.js";
import events from "./tasks/eventListeners.js";
import messEventManager from "./messages/eventListeners.js"

sessionStorage.setItem("userId", 3)

apiActions.getAllMessages().then(renderMessages)
messEventManager.addDeleteListener()
messEventManager.sendMessageListener()



API.getTasks().then(DOMrender.putTasksOnDom);
events.renderNewTaskForm();
events.saveNewTask();
events.deleteTask();
events.editTask();
events.saveEditedTask();
events.editComplete();
