//find whether a specific value present in the array
var numbers=[45,34,67,23,89,40,88,36,20,57]
var searchItem=34
var isFound=false;

for(var item of numbers)
{
    if(searchItem===item)
    {
        isFound=true;
        break
    }
}
if(isFound)
{
    console.log(`${searchItem} is present in an array`);
    
}
else{
    console.log(`${searchItem} is not present in an array`);
    
}