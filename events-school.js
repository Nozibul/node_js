const EventEmitter = require('events');

class school extends EventEmitter {
    startPeriod(){
        console.log('class Started')
     //step 1 , raise on event , jokhon bell bajbe, chaile parameter nea jai tobe akta parameter nia valo
        this.emit('ring', {
            period: '3rd',
            time: '2 hour'
        })
    }
}