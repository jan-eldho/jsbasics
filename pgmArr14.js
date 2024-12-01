//reduce
//need single o/p from multiple i/p

const numbers=[1,2,3,4,5,6]

const sum=numbers.reduce((ac,cur)=>{
    return ac+=cur

},0) //initially fixed accumulator (ac) value 0

console.log("sum of the array",sum);

//biggest value
const arr=[1,2,3,4,5,6,7,23,24,15,40,35]
const maxValue=arr.reduce((ac,cur)=>{
    return Math.max(ac,cur)
},0)
console.log("biggest value",maxValue);

