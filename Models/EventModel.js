
export default class EventModel {

   // State of the model, the attributes of an event, prepoulated with some data
    constructor(){
        this.event_ = JSON.parse(localStorage.getItem('event_')) || localStorage.setItem("event_", JSON.stringify({
            eventId: 0, 
            eventName: "", 
            eventDay:"",
            eventTime: "",
            eventLabTechs: []
        }))
        
    }
   // Adding a Lab Tech to a given event
    addLabTech(labtech){
        this.event_.eventLabTechs.push(labtech)
    }

    editEventName(name){
        this.event_.eventName = name
        this._commit(this.event_)
    }

     editEventDay(day){
         this.event_.eventDay = day
         this._commit(this.event_)
     }
     editEventTime(time){
         this.event_.eventTime = time
         this._commit(this.event_)
     }
     bindChanges(callback){
         this.onEventChanged = callback
     }
     _commit(event) {
        this.onEventChanged(event)
        localStorage.setItem('event_', JSON.stringify(event))
      }
}

