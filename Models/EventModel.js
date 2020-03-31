class EventModel {
    event_ = {
        eventId: 0, 
        eventName: "", 
        eventDay:"",
        eventTime: "",
        eventLabTechs: []
    }
   // State of the model, the attributes of an event, prepoulated with some data
    constructor(name, day, time){
        this.event_ = 
            {
                eventId: this.event_.id + 1, 
                eventName: name, 
                eventDay: day,
                eventTime: time,
                eventLabTechs: []
            }
        
    }
   get event_(){
       return this.event_
   }
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
}

