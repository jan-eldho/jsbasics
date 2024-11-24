//fibnocci series
//0 1 1 2 3 5 8 13 21 
var a=0
var b=1
var nextTrem
for(var i=1;i<=10;i++)
{
    console.log(a);
    
    nextTrem= a+ b
    a=b
    b= nextTrem

}