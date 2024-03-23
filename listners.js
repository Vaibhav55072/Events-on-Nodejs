//Program for getMaxlistner(),setMaxlistner(),defaultMaxlistner().
var eventEmitter=require('events');
var eventEmitter1= new EventEmitter();
var eventEmitter2= new EventEmitter();
//Getting max listner
console.log("Default Max listner for eventlistner1 is:",eventEmitter1.getMaxlistners());
console.log("Default Max listner for eventlistner2 is:",eventEmitter2.getMaxlisters());
//set global defaultMaxlistners to 2
EventEmitter.defaultMaxlistners=2;
//Getting max listner
console.log("Default Max listner for eventlistner1 is:",eventEmitter1.getMaxlistners());
console.log("Default Max listner for eventlistner2 is:",eventEmitter.getMaxlisters());
//set Maxlistner of eventEmitter1 to 5
eventEmitter.setMaxlistner(5);
//Getting max listner
console.log("Default Max listner for eventlistner1 is:",eventEmitter1.getMaxlistners());
console.log("Default Max listner for eventlistner2 is:",eventEmitter.getMaxlisters());


