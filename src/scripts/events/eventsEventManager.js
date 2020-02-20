import evnetAPI from "./eventsData.js";
import renderEvents from "./eventsDom.js";

const eventsContainer = document.querySelector("#eventsContainer");

const clearForm = () => {
  const hidden = document.getElementById("eventsId");
  const name = document.getElementById("name");
  const date = document.getElementById("date");
  const location = document.getElementById("location");

  hidden.value = "";
  name.value = "";
  date.value = "";
  location.value = "";
};

const updateFormFields = eventsId => {
  const hidden = document.getElementById("eventsId");
  const name = document.getElementById("name");
  const date = document.getElementById("date");
  const location = document.getElementById("location");
  
  eventsEventManager.showEventsInput();

  fetch(`http://localhost:3000/events/${eventsId}`)
    .then(response => response.json())
    .then(events => {
      hidden.value = events.id;
      name.value = events.name;
      date.value = events.date;
      location.value = events.location;
      
    });
};

const eventsEventManager = {
  hideEventsInput() {
    document.getElementById("nameForm").style = "display:none";
    document.getElementById("dateForm").style = "display:none";
    document.getElementById("locationForm").style = "display:none";
    document.getElementById("saveEventsBtn").style = "display:none";
  },
  showEventsInput() {
    document.getElementById("nameForm").style = "";
    document.getElementById("dateForm").style = "";
    document.getElementById("locationForm").style = "";
    document.getElementById("saveEventsBtn").style = "";
  },
  addEventsEventListener() {
    const button = document.querySelector(".addEventsBtn");
    button.addEventListener("click", () => {
      this.showEventsInput();
    });
  },
  saveEventsEventListener() {
    const saveButton = document.querySelector("#saveEventsBtn");
    saveButton.addEventListener("click", () => {
      const hidden = document.getElementById("eventsId").value;
      const name = document.getElementById("name").value;
      const date = document.getElementById("date").value;
      const location = document.getElementById("location").value;
      const userId = parseInt(sessionStorage.getItem("userId"));
      

      if (name == false || date == false || location == false) {
        window.alert("Please fill out all entry fields");
      } else {
          
        const eventsEntry = {
          userId: userId,
          location: location,
          name: name,
          date: date,
          
        };
        if (hidden !== "") {
          eventsEntry.id = parseInt(hidden);
          evnetAPI.editEvents(eventsEntry).then(() => {
            evnetAPI.getEvents()
              .then(renderEvents)
              .then(clearForm)
              .then(eventsEventManager.hideEventsInput);
          });
        } else {
          evnetAPI.postEvents(eventsEntry).then(() => {
            evnetAPI.getEvents()
              .then(renderEvents)
              .then(clearForm)
              .then(eventsEventManager.hideEventsInput);
          });
        }
      }
    });
  },
  deleteEventsEventListener() {
    eventsContainer.addEventListener("click", event => {
      if (event.target.id.startsWith("deleteEventsBtn--")) {
        const eventsIdToDelete = event.target.id.split("--")[1];
        evnetAPI.deleteEvents(eventsIdToDelete).then(() => {
          evnetAPI.getEvents().then(renderEvents);
        });
      } else if (event.target.id.startsWith("editEventsBtn--")) {
        const eventsToEdit = event.target.id.split("--")[1];
        updateFormFields(eventsToEdit);
      }
    });
  }
};

export default eventsEventManager;