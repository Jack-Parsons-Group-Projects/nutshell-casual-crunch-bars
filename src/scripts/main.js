
// const message = "Time to build an application that gives you all the information you need in a Nutshell"

// document.querySelector("#container").innerHTML = `<h1>${message}</h1>`

// console.log(message)
import apiActions from "./messages/messageAPI.js"
import renderMessages from "./messages/messagesDom.js"
import createMessages from "./messages/createMessages.js"

apiActions.getAllMessages().then(renderMessages).then(createMessages)
