var fruits=['kiwi','benana','apple','orange','pineapple']
fruits.sort()
console.log(fruits);

var num=[2,4,6,9,0,3,1]
num.sort()
console.log(num);

var num1=[2,4,6,19,30,13,1]

num1.sort((a,b)=>a-b)
console.log("Acending: ",num1);

num1.sort((a,b)=>b-a)
console.log("Dcending: ",num1);

//sorting string array decending array
fruits.sort((a, b) => b.localeCompare(a) )

console.log(fruits);

