//find the common numbers in the both array

var num1=[2,3,4,7,1,9]
var num2=[6,7,9,2,4,0,4]
 
for(var i=0;i<num1.length;i++)
{
    for(var j=0;j<num2.length;j++)
    {
        if(num1[i]===num2[j])
        {
            console.log(num1[i]);
            break
        }
    }
}