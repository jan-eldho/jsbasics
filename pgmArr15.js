//find
// it iterate over each element in the array and returns the first element for which the condition is true

const arr=[1,3,4,8,2,9]
const firstEven=arr.find((num)=>num%2===0)
console.log("Given frst even number",firstEven);
//Given frst even number 4