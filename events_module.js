// const EventEmitter = require('events');
// const emitter = new EventEmitter() ;

const School = require('./events-school')

//step2 register a listener for bellRing event, 
//step1 er bell bajle ai func ta call hobe and step1 sara ata run korbe na
/*  emitter.on('bellRing', (period)=>{
console.log(`We need to run ${period}`)
})

//step 1 , raise on event , jokhon bell bajbe, chaile parameter nea jai tobe akta parameter nia valo
emitter.emit('bellRing', 'second period ended')
 */

//uporer require kora School akta obj so sei class er akta obj create kortye hobe. 
const school =  new School();
//step2 register a listener for bellRing event, 
//step1 er bell bajle ai func ta call hobe and step1 sara ata run korbe na
school.on('ring', ({period, time})=>{
    console.log(`We need to run ${period} and ${time}`)
    })
school.startPeriod();


