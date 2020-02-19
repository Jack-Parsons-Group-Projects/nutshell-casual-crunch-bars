const createEventsEntry = event => `
<div id="eventCard">
    <h3>${event.name}</h3>
    <span>${event.date}</span><br>
    <span>${event.location}</span>
    <br>
    <button id="deleteEventsBtn--${event.id}">Delete</button>
    <button id="editEventsBtn--${event.id}">Edit</button>
</div><hr/>
`

export default createEventsEntry