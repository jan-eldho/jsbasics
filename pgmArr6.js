//find douplicate elements from the array
var a=[3,4,9,5,2,7,8,4,9,2,1]

for(var i=0;i<a.length;i++)
{
    for(var j=i+1;j<a.length;j++)
    {
        if(a[i]==a[j])
        {
            console.log(a[i]);
            
        }
    }
}