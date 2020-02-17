import createMessages from "./createMessages.js"

const messagesList = document.querySelector("#messagesList");

const renderMessages = messages => {
    for (const message of messages){
        const messageDOM = createMessages(messages)
        messagesList.innerHTML += messageDOM
    }
}
export default renderMessages ;

