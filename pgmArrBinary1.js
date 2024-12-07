var arr=[4,7,8,1,5,67,23,45,56,43]

let newArray=arr.sort((a,b)=>a-b)
console.log(newArray);

function binarySearch(ary,target)
{
    let left=0;
    let right=ary.length-1
    while(left<=right)
    {
        const mid=Math.floor((left+right)/2)
        if(ary[mid]===target)
        {
            return mid
        }
        else if(ary[mid]<target)
        {
            left=mid+1
        }
        else
        {
            right=mid-1
        }
    }
    return -1
}
const result= binarySearch(newArray,56)
console.log("target index is:",result);

