var eventEmitter=require('events');
var eventEmnitter=new EventEmitter();

var func1=(msg)=>{
    console.log("Message from fun1:"+msg);
};

var func2=(msg)=>{
    console.log("Message from func2:"+msg);
};
eventEmitter.addlistener('myevent',func1);
eventEmitter.prependlistner('myevent',func2);
crossOriginIsolated.log(eventEmitter.listenerCount('myevent'));
eventEmitter.emit('myevent','event occurred');