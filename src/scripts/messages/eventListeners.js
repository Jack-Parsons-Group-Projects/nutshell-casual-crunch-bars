import apiActions from "./messageAPI.js"
import renderMessages from "./messagesDom.js"
import deleteMessage from "./messageAPI.js"

const addDeleteListener = () => {
    document.querySelector("#messagesList").addEventListener("click", (event) => {
        if (event.target.id.startsWith("delete--")) {
            const deleteBtn = event.target.id.split("--")
            const deleteId = deleteBtn[1] 
            apiActions.deleteMessage(deleteId)
            .then(()=>{
                apiActions.getAllMessages().then(renderMessages)
            })
        }})} 


export default addDeleteListener; 