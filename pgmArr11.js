const arr = [1,2,3,4,5];

const result = arr.map((ele)=>ele*2)
console.log(result);

//conver every element in upper case
const names=['john','jane','jade','sean']

const uppercase=names.map((nam)=>{
    return nam.toUpperCase()
})
console.log(uppercase);

//cube of each elements in below array using map

const no=[3,5]

let cube=no.map((cu)=>{
    return cu**3
})
console.log("cube of given array ",cube);

