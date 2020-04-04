import EventModel from '/Models/EventModel.js'
import EventView from '/Views/EventView.js'

class EventController{

    constructor(model, view){
        this.model= model
        this.view = view

        this.onEventChanged(this.model.event_)
        this.view.bindChanges(this.handleEditEventName.bind(this),this.handleEditEventTime.bind(this),this.handleEditEventDay.bind(this))
        this.model.bindChanges(this.onEventChanged.bind(this))
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