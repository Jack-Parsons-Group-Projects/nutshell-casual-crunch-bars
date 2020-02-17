const createMessages = message => `
<container>
<h1>Message Board</h1>
<section> 
<h3> New Message</h3>
<input type="text">
<button id="editMessage--">
    Edit Message
</button>
<button id="deleteMessage--" class="deleteBtn">Delete</button>
</container>
  `;
export default createMessages
