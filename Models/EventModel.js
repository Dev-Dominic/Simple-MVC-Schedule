localStorage.setItem("event_", JSON.stringify({
    eventId: 0, 
    eventName: "D", 
    eventDay:"B",
    eventTime: "C",
    eventLabTechs: []
}))
export default class EventModel {

   // State of the model, the attributes of an event, prepoulated with some data
    constructor(){
        this.event_ = JSON.parse(localStorage.getItem('event_'))
        
    }
   // Adding a Lab Tech to a given event
    addLabTech(labtech){
        this.event_.eventLabTechs.push(labtech)
    }

    editEventName(name){
        this.event_.eventName = name
    }

     editEventDay(day){
         this.event_.eventDay = day
     }
     editEventTime(time){
         this.event_.eventTime = time
     }
     bindChanges(callback){
         this.onEventChanged = callback
     }
     _commit(event) {
        this.onEventChanged(event)
        localStorage.setItem('todos', JSON.stringify(event))
      }
}

