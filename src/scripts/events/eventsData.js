const eventsUrl = "http://localhost:3000";

const API = {
  getEvents() {
    return fetch(`${eventsUrl}/events`).then(response => response.json());
  },
  postEvents(event) {
    return fetch(`${eventsUrl}/events`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(event)
    });
  },
  deleteEvents(eventId) {
    return fetch(`${eventsUrl}/events/${eventId}`, {
      method: "DELETE"
    });
  },
  editEvents(event) {
      return fetch(`${eventsUrl}/events/${event.id}`, {
          method:"PUT",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(event)
      })
  }
};

export default API;