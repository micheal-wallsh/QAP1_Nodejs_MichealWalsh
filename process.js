// the Process object allows you to interact with the terminal process in different ways! you can take inputs from it or throw errors or even exit the process.

const args = process.argv;
const greeting = args[2];
var count = 4;

console.log("Hey,", greeting)

const processAbort = () => {
    console.log("Look, I can abort the process!")

    setInterval((function(){
        count = count - 1
        return console.log(count,"...")
    }), 1000);

    setTimeout((function(){
        return process.abort();
    }), 3900);
}

processAbort();