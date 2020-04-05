export default class EventView {
    constructor(){

        this.app = this.getElement('#root')
        this.editForm = this.createElement('form','Event_Form')
        this.EventBody = this.createElement('div','Event_Card')
        this.EventTitle = this.createElement('h1','Event_Title')
        this.EventDate = this.createElement('p','Event_Date')
        this.EventBody.append(this.EventTitle,this.EventDate)

        
        this.nameInput = this.createElement('input')
        this.dayInput = this.createElement('input')
        this.timeInput = this.createElement('input')
        this.nameInput.type = 'text'
        this.dayInput.type = 'date'
        this.timeInput.type = 'time'
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
        this.EventTitle.innerHTML = event.eventName
        this.EventDate.innerHTML =  event.eventTime
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
        this.dayInput.value = ''
        this.nameInput.value = ''
        this.timeInput.value = ''
      }
      bindChanges(nameHandler,timeHandler,dayHandler){
        this.editForm.addEventListener('submit', event => {
            event.preventDefault()
            if (this._nameText != '' && (this._dayText === '' && this._timeText === '')){
              //  this.getElement('.Event_Title').innerHTML = this._nameText
                nameHandler(this._nameText)
                this._resetInput()
            }
            else if(this._dayText != '' && (this._nameText === '' && this._timeText === '')){
               /* arr = this.getElement('.Event_Date').innerHTML.split('\n')
                arr[0] = this._dayText
                this.getElement('.Event_Date').innerHTML = arr.join('\n')*/
                dayHandler(this._dayText)
                this._resetInput()
            }
            else if(this._timeText != '' && (this._dayText === '' && this._nameText === '')){
                var arr = this.getElement('.Event_Date').innerHTML.split('\n')
                /*arr[1] = this._timeText
                this.getElement('.Event_Date').innerHTML = arr.join('\n')*/
                timeHandler(this._timeText)
                this._resetInput()
            }
            else if(this._nameText != '' && this._dayText != '' && this._timeText != ''){
              /*  var arr = ['','']
                arr[0] = this._dayText
                arr[1] = this._timeText
                this.getElement('.Event_Date').innerHTML = arr.join('\n')
                this.getElement('.Event_Title').innerHTML = this._nameText*/
                nameHandler(this._nameText)
                dayHandler(this._dayText)
                timeHandler(this._timeText)
                this._resetInput()
            }
        })
    }
}
