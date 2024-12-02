//nested Array
let m= [1,2,[3,4],5,6,[7,8]];
let result=m.flat(1)
console.log(result);

// [
//     1, 2, 3, 4,
//     5, 6, 7, 8 
//   ]

let arr1= [1,2,[1,2,[1,2,3]]]
// let rst=arr1.flat(2)
console.log(arr1.flat(2));

// [
//     1, 2, 1, 2,
//     1, 2, 3
//   ]

let x= [1,[1,[1,[1,[1]]]]]
let n=x.flat(Infinity)
console.log(n);
//[ 1, 1, 1, 1, 1 ]