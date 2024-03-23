var eventEmitter=require('events');

var eventEmitter= new EventEmitter();

var func1=(msg)=>{
    console.log("Message From func1:"+msg);
};
var func2=(msg)=>{
    console.log("Message from func2:"+msg);
};
 eventEmitter.on('myevent',func1);
 eventEmitter.on('myevent',func2);

 eventEmitter.removelistner('myevent',func1);
 eventEmitter.emit('myevent',"Event occured");
 eventEmitter.removeAllistners('myevent');
 eventEmitter.emit('myevent',"Event Occured");