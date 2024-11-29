//find the lowest expense from the below array

var expense=[1200,2400,3400,1100,1250,1050,1550]
var lowestExpense=expense[0]

for(var num of expense)
{
    if(num<=lowestExpense)
    {
        lowestExpense=num
        
    }
    
}
console.log("lowest value in the array: ",lowestExpense);

//find the highest of expense array

console.log('find the highest of expense array');

var higestExpense=expense[0]

for(var nume of expense)
{
    if(nume>=higestExpense)
    {
        higestExpense=nume
    }
}
console.log("highest value: ",higestExpense);
