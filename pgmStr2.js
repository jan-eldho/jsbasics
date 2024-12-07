//to find whether string is palindrome or not 
//using split reverse and join

var lan ='malayalam'
var temp1=lan.split('')
var temp2=temp1.reverse()
var temp3=temp2.join('')
console.log(temp1);
console.log(temp2);
if(temp3==lan)
{
    console.log("string is palindrome",temp3);
    
}
//single step
var res=lan.split('').reverse('').join('')
console.log(res);
