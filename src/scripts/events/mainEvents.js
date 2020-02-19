import evnetAPI from "./eventsData.js"
import renderEvents from "./eventsDom.js"
import eventsEventManager from "./eventsEventManager.js"

eventsEventManager.hideEventsInput()
eventsEventManager.addEventsEventListener()
eventsEventManager.saveEventsEventListener()
eventsEventManager.deleteEventsEventListener()
evnetAPI.getEvents().then(renderEvents)