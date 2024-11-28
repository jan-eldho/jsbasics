var cars=['innova','swift','polo','vitara']

//using forloop

for(var i=0;i<cars.length;i++)
{
    console.log(cars[i]);
    
}
console.log(">>>>>>>>>>>>>>>>>");


// need to print even numbers

var numbers=[1,2,3,4,5,6,7,8,9,10]
var result =[];

for(var i=0;i<numbers.length;i++)
{
    if(numbers[i] % 2===0)
    {
        console.log(numbers[i]);
        result.push(numbers[i])
    }
   
}
console.log(result);
//result [2,4,6,8,10]
console.log("<<<<<<<<<<<<<<<<<<<");

var mul=[]
for(var i=0;i<numbers.length;i++)
{
  mul.push(numbers[i]*2)
}
console.log(mul);
