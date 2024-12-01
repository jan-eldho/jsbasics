//find double of the below arrray using foreach()

let numbers=[1,2,3,4,5,6,7,8,9,20]
let double=[]
numbers.forEach((item)=>{
    double.push(item*2)
})

console.log('double ofthe given array is ',double);
