
const createMessages = () => `
<container>
<h1>Message Board</h1>
<section id="user-id"> 
<div class="userId">
<div class="messagesContainer"></div>
<h3> New Message </h3>
<input type="text" id="messagetextbox">
<button id="sendMessage--">Send Message</button>
</container>
  `;
const messageBody = (message) => {
  return `
    <container>
    <div> ${message.user.userName}: ${message.message}<button id=edit--${message.id}>Edit</button> <button id= deleteMessage>Delete</button></div> 
    </container>
    `
}
const editMessageBoard = (message)=>{
  
}

export default createMessages
export default messageBody
