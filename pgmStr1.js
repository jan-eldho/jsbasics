let str="HELLO WORLD"
console.log(str.toLowerCase());

let str2=" Hello World  "
console.log(str2.trim());

let str3="Hello how are you"
console.log(str3.startsWith('H')); //o/p  true
console.log(str3.endsWith('you'));  //o/p  true
console.log(str3.includes('how'));  //o/p  true

console.log(str3.substring(3,7)); ////o/p  lo h

console.log(str3.split(' '));  //[ 'Hello', 'how', 'are', 'you' ]
//split return an arry//

var numbers=[1,2,3,4,5,6]
console.log(numbers.join('')); //123456 (convert Arry to string)
