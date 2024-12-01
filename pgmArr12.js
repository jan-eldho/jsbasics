const numbers=[1,2,3,4,5,6,7,8,9,10]

const evenNumbers=numbers.filter((num)=>{
    if(num % 2===0)
    {
        return num
    }
})
console.log(evenNumbers);

//odd numbers
console.log("odd numbers");

const oddNo= numbers.filter((odd)=> {
    return odd % 2 !==0
})
console.log(oddNo);

