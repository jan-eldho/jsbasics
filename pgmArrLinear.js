//Linear Search
function linearSearch(arr,target)
{
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]===target)
        {
            return i
        }
    }
    return -1
}

let array=[1,3,5,44,7,29,34,11]
let result=linearSearch(array,34)

if(result=== -1)
{
    console.log("Target element not found ");

}else{
    console.log("Target element found in index is: ",result);
}

