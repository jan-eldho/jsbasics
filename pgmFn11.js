//fun to add sum of 3 numbers
//normal method
function name(a,b,c) {

    var sum=0;
   return sum =a+b+c
    
}

console.log(name(2,3,4));

//Arrow function

var sumOfThree = (a,b,c)=>{
    return a+b+c
}
console.log(sumOfThree(1,2,3));

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

//to find the cube of a number using Arrow fun

var cubeOfaNum= (a)=>a**3

console.log("cube of 4 is: ",cubeOfaNum(4));


