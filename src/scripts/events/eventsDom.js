import createEventsEntry from "./eventsComponent.js";
const eventsContainer = document.querySelector("#eventsContainer");

const removeUpcomingClass = () => {
  const removes = document.querySelectorAll(".upcoming");

  for (const remove of removes) {
    remove.classList.remove("upcoming");
  }
};

const addUpcomingClass = () => {
  const adds = document.querySelector("#eventCard");
  adds.classList.add("upcoming");
};
const renderEvents = events => {
  eventsContainer.innerHTML = "";
  const activeUser = parseInt(sessionStorage.getItem("userId"));

  events.sort(function(a, b) {
    var dateA = new Date(a.date),
      dateB = new Date(b.date);
    return dateA - dateB;
  });

  for (const event of events) {
    
    if (event.userId === activeUser) {
      const eventsCard = createEventsEntry(event);
      eventsContainer.innerHTML += eventsCard;
    }
  }
  removeUpcomingClass();
  addUpcomingClass();
};

export default renderEvents;
