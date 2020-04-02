import EventModel from '/Models/EventModel.js'
import EventView from '/Views/EventView.js'

class EventController{

    constructor(model, view){
        this.model= model
        this.view = view

        this.onEventChanged(this.model.event_)
        this.view.bindChanges.bind(this, this.handleEditEventName,this.handleEditEventTime,this.handleEditEventDay)
        this.model.bindChanges.bind(this,this.onEventChanged)
    }

    onEventChanged (event) {
        this.view.displayEvent(event)
    }


    handleEditEventName(eventName){
        console.log(eventName)
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