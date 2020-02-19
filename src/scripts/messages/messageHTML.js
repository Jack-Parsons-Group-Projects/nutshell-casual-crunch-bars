const messageHTML = {
  createMessages() {
    return `
<section>
<h1>Message Board</h1>
<div class="messagesContainer"></div>
<h3> New Message </h3>
<input type="text" id="messagetextbox">
<button id="sendMessage--">Send Message</button>
</section>
  `},
  messageBody (message) {
    return `
    <container>
    <div> ${message.user.userName}: ${message.message}<button id="edit--${message.id}">Edit</button> <button id="delete--${message.id}">Delete</button></div> 
    </container>
    `
  }
}

export default messageHTML 