//splice      0        1        2         3          4
let fruits=['apple','benana','orange','pineapple','kiwi']

            //index,count,items,.....
fruits.splice(1,2,'test1','test2')
console.log(fruits);
//[ 'apple', 'test1', 'test2', 'pineapple', 'kiwi' ]

let x=[1,2,3,4,5,6,7,8]
x.splice(4,1,100)
console.log(x);

//[1, 2, 3, 4, 100, 6, 7, 8 ]//

// reverse()

let sample=[1,2,3,4,5,6,7,8,9,0]
sample.reverse();
console.log(sample);

// [
//     0, 9, 8, 7, 6,
//     5, 4, 3, 2, 1 
//   ]