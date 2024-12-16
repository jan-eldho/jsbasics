// var exp="10*5+50"
// console.log("exception handling");
// const result=eval(exp)
// console.log(result);
// console.log("pgm completed");

var exp="10*5+50"
console.log("exception handling");
try{
    const result=eval(exp)
    console.log(result); 
}catch{
    console.log("error occured");
    
}finally{
    console.log("pgm completed");

}
