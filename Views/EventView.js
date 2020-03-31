class EventView {
    constructor(){

        this.app = this.getElement('#root')

        this.EventBody = this.createElement('div','Event_Card')
        this.EventTitle = this.createElement('h1')
        this.EventDate = this.createElement('p')
        this.EventBody.append(this.EventTitle,this.EventDate)

        this.editForm = this.createElement('form')
        this.nameInput = this.createElement('input')
        this.dayInput = this.createElement('input')
        this.timeInput = this.createElement('input')
        this.nameInput.type = 'text'
        this.dayInput.type = 'text'
        this.timeInput.type = 'text'
        this.nameInput.placeholder = 'Enter new event name'
        this.dayInput.placeholder = 'Enter new day of event'
        this.timeInput.placeholder = 'Enter new time of event'
        this.submitButton = this.createElement('button')
        this.submitButton.textContent = 'Make Changes'

        this.editForm.append(this.nameInput,this.dayInput,this.timeInput,this.submitButton)
        this.app.append(this.EventBody,this.editForm)
    }

    // Create an element with an optional CSS class 
    createElement(tag, className) {
        const element = document.createElement(tag)
        if (className) element.classList.add(className)
    
        return element
      }
    
      // Retrieve an element from the DOM
      getElement(selector) {
        const element = document.querySelector(selector)
    
        return element
      }
    
    

    displayEvent(event){
        this.EventTitle = event.eventName
        this.EventDate =  event.eventDay + "\n" + event.eventTime
    }

    get _nameText() {
        return this.nameInput.value
         }
    get _dayText() {
        return this.dayInput.value
      }
    get _timeText() {
        return this.timeInput.value
      }
      
      _resetInput() {
        this.input.dayInput.value = ''
        this.input.naneInput.value = ''
        this.input.timeInput.value = ''
      }
      bindChanges(nameHandler,timeHandler,dayHandler){
        this.editForm.addEventListener('submit', event => {
            event.preventDefault()
            console.log(this._dayText,this._timeText,this._nameText)
            if (this._nameText != null && (this._dayText === null && this._timeText === null)){
                nameHandler(this._nameText)
                this._resetInput()
            }
            else if(this._dayText != null && (this._nameText === null && this._timeText === null)){
                timeHandler(this._dayText)
                this._resetInput()
            }
            else if(this._timeText != null && (this._dayText === '' && this._nameText === '')){
                dayHandler(this._timeText)
                this._resetInput()
            }
            else if(this._nameText != null && this._dayText != null && this._timeText != null){
                nameHandler(this._nameText)
                timeHandler(this._dayText)
                dayHandler(this._timeText)
                this._resetInput()
            }
        })
    }
}
