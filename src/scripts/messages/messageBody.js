export const messageBody = (message)=> {
return `
<div> ${message.user.userName}: ${message.message}</div>
`
}
