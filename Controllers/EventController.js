
class EventController{

    constructor(model, view){
        console.log(this.model)
        this.model= model
        this.view = view

        this.onEventChanged(this.model.event_)
        this.view.bindChanges(this.handleEditEventName,this.handleEditEventTime,this.handleEditEventDay)
        this.model.bindChanges(this.onEventChanged)
    }

    onEventChanged (event) {
        this.view.displayEvent(event)
    }


    handleEditEventName(eventName){
        this.model.editEventName(eventName)
    }

    handleEditEventDay(eventDay){
        this.model.editEventDay(eventDay)
    }
    handleEditEventTime(eventTime){
        this.model.editEventTime(eventTime)
    }

    
}

const app = new EventController(new EventModel(), new EventView())