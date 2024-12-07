//Binary search (only in sorted array)
let numbers=[3,5,7,8,10,23,56,78,99,100]

function binarySearch(arr,target)
{
    let left=0;
    let right=arr.length-1;
    while(left<=right)
    {
        const mid=Math.floor((left+right)/2)
        if(arr[mid]===target)
        {
            return mid
        }
        else if(arr[mid]<target)
        {
            left=mid+1
        }
        else{
            right=mid-1
        }
    }
return-1
}
const result=binarySearch(numbers,56)
console.log(result);
