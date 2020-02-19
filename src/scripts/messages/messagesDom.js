import createMessages from "./messageHTML.js/index.js.js"
import {messageBody} from "./messageBody.js"

const messagesList = document.querySelector("#messagesList");

const renderMessages = messages => {

    const createMessage = createMessages()
       messagesList.innerHTML += createMessage
   
       messages.forEach(message=> {
       const oneMessage = messageBody(message) 
       document.querySelector(".messagesContainer").innerHTML += oneMessage
       
   });
}
export default renderMessages ;

