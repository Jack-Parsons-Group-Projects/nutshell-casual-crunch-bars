import apiActions from "./messageAPI.js"
import renderMessages from "./messagesDom.js"
import messageHTML from "./messageHTML.js"
const updateMessageField = messageId => {
    const messHidden = document.getElementById("hiddenMessid")
    const messageEdited = document.getElementById("messageTextBox")
    console.log(messageId)
    fetch (`http://localhost:3000/messages?_expand=user/${messageId}`)
    .then(resp=>resp.json)
    .then(message => {
        messHidden.value = message.id 
        messageEdited.value = message.message
    })
}

const messEventManager = {
    addDeleteListener() {
        document.querySelector("#messagesList").addEventListener("click", (event) => {
            if (event.target.id.startsWith("delete--")) {
                const deleteBtn = event.target.id.split("--")
                const deleteId = deleteBtn[1]
                apiActions.deleteMessage(deleteId)
                    .then(() => {
                        apiActions.getAllMessages().then(renderMessages)
                    })
            }
            else if (event.target.id.startsWith("edit--")) {
                const messToEdit = event.target.id.split("--")[1]
                updateMessageField(messToEdit)
            }
        })
    },

    addEditListener() {
        document.querySelector("#messagesList").addEventListener("click", (event) => {
            if (event.target.id.startsWith("edit--")) {
                messageHTML.makeEditMessForm();
                const messageToEdit = event.target.id.split("--")[1]
                const hiddenMessId = document.querySelector("#editMessageId")
                const messUserId = document.querySelector("#editMessageUserId")
                const messageBoard = document.querySelector("#editMessageBoard")
            }
        })
    },

    sendMessageListener() {
        document.querySelector("#sendMessage--").addEventListener("click", () => {
            const messField = document.querySelector("#messageTextBox").value
            const hidden = document.querySelector("#hiddenMessid").value
            const messageUserId = parseInt(sessionStorage.getItem("userId"))
            console.log(hidden)
            const messageEntry = {
                userId: messageUserId,
                message: messField
            } 
            if (hidden !== ""){
                messageEntry.userId = parseInt(hidden)
                apiActions.editMessages(messageEntry)
                // .then(()=>{
                // apiActions.getAllMessages()
                // .then(renderMessages)
                // })
            }
            apiActions.addNewMessage(messageEntry)
            .then(() => {
                apiActions.getAllMessages()
                    .then(renderMessages)
            })
        })
    }
}
export default messEventManager
