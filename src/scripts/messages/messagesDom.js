import messageHTML from "./messageHTML.js"


const messagesList = document.querySelector("#messagesList");

const renderMessages = messages => {
    messagesList.innerHTML = ""
    const activeUser = parseInt(sessionStorage.getItem("userId"))

    const messBoardHtml = messageHTML.messBoardHtml()
    messagesList.innerHTML += messBoardHtml

    messages.forEach(message => {
        const oneMessage = messageHTML.messageBody(message)
        document.querySelector(".messagesContainer").innerHTML += oneMessage

    });
}
export default renderMessages;

