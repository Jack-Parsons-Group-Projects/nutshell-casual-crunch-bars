const messageHTML = {
  messBoardHtml() {
    return `
<section>
<h1>Message Board</h1>
<div class="messagesContainer"></div>
  `},
  messageBody(message) {
    return `
    <container>
    <div><span id="messageEdit"> ${message.user.userName}: ${message.message}</span><button id="edit--${message.id}">Edit</button> <button id="delete--${message.id}">Delete</button></div> 
    </container>
    `
  }}
export default messageHTML 