export const messageBody = (message)=> {
return `
<container>
<div> ${message.user.userName}: ${message.message}<button id=edit--${message.id}>Edit</button> <button id= deleteMessage>Delete</button></div> 
</container>
`
}
