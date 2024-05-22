// the Events object is pretty awesome, you can use it for pretty much anything within your project! you can make new events on the fly and detect when built in events are fired as well.

var file = require('fs');
var read = file.createReadStream('./test.txt');
// the 'on' listener is waiting for the text file to be opened within the terminal, it triggers once it does.
read.on('open', function(){
    console.log('Hey! Whyd you open that text file??')
});