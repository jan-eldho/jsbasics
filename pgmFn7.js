//CallBack funtion
//-----------------

function doSometing(CallBack) {

    console.log("step1");
    
    CallBack(5);
}

function doAnotherThing(n) {
    console.log("step 2: ",n);
    
}

doSometing(doAnotherThing)

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>");

function sumOfNumber(a,b,secondFn) {
    var result;
    result = a+b
    console.log(result);

    secondFn(result);
}

function cubeOfResult(rs) {

    var result=rs**3
    console.log(result);
    
}

sumOfNumber(3,2,cubeOfResult)