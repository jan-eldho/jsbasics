//self invoking function
// -----------------

(function () {
    console.log("hello");
    
})();

// setInterval()
// -----------------

setInterval(function () {
    console.log("setInterval fn executed");
    
},3000)


// setTimeout()
// -----------------

setTimeout (function () {
    console.log("settimeout fn executed ");
    
},3000)