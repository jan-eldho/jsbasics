//find pairs of number from above array whose sum is 7
var a=[3,4,9,5,2,7,8,4,9,2,1]

for(var i=0;i<a.length;i++)
{
    for(var j=i+1;j<a.length;j++)
    {
        if(a[i] + a[j]===7)
        {
            console.log(a[i],a[j]);
            
        }
    }
}