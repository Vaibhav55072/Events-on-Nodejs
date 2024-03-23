var eventEmitter=require('events');
var eventEmitter=new EventEmitter();
eventEmitter.on('myevent',(msg)=>{
    console.log(msg);
});
eventEmitter.emit('myevents',"Hello vaibhav");