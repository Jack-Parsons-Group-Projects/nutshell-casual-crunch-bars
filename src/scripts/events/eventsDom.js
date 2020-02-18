import createEventsEntry from "./eventsComponent.js"
const eventsContainer = document.querySelector("#eventsContainer")

// const removeUpcomingClass = () =>{
//     const remove = document.querySelectorAll("#eventCard")
    
//     remove.classList.remove("upcoming")
// }

const renderEvents = events => {
    eventsContainer.innerHTML = ""
    
    events.sort(function(a, b){
        var dateA=new Date(a.date), dateB=new Date(b.date)
        return dateA-dateB
    })
    
    for (const event of events) {
        
        const eventsCard = createEventsEntry(event)
        eventsContainer.innerHTML += eventsCard
    }
    // removeUpcomingClass()
    // events[0].classList.add("upcoming")
}

export default renderEvents