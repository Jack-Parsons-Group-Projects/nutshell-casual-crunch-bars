import API from "./eventsData.js"
import renderEvents from "./eventsDom.js"
import eventsEventManager from "./eventsEventManager.js"

eventsEventManager.hideEventsInput()
eventsEventManager.addEventsEventListener()
eventsEventManager.saveEventsEventListener()
eventsEventManager.deleteEventsEventListener()
API.getEvents().then(renderEvents)