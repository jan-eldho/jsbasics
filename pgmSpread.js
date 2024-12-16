var array1=[1,2,3,4];
var array2 = [...array1,5,6,7,8]
console.log(array2);

var arr3=[...array1,...array2,9,10]
console.log(arr3);  //

// [
//     1, 2, 3, 4, 1, 2,
//     3, 4, 5, 6, 7, 8,
//     9, 10
//   ]

var obj1={a:1,b:2}
var obj2={...obj1,c:3,d:4}
console.log(obj2);
var obj3={
    e:5,
    f:6,
    g:7
}
var result={...obj2,...obj3}
console.log(result);  //{ a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7 }
