import apiActions from "./messageAPI.js"
const createMessages = () => `
<container>
<h1>Message Board</h1>
<section id="user-id"> 
<div class="userId">
<div class="messagesContainer"></div>
<h3> New Message</h3>
<input type="text">
<button id="sendMessage--">
    Send Message
</button>
<button id="deleteMessage--" class="deleteBtn">Delete</button>
</container>
  `;

export default createMessages
