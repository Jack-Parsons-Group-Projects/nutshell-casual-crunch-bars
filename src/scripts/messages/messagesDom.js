import messageHTML from "./messageHTML.js"


const messagesList = document.querySelector("#messagesList");

const renderMessages = messages => {
    messagesList.innerHTML = ""

    const createMessage = messageHTML.createMessages()
    messagesList.innerHTML += createMessage

    messages.forEach(message => {
        const oneMessage = messageHTML.messageBody(message)
        document.querySelector(".messagesContainer").innerHTML += oneMessage

    });
}
export default renderMessages;

