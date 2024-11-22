//check whther given number panindrome or not

var num=121
var result=0;
rem=0
temp=num
while(num>0)
{
    rem= num%10;
    result = result*10+rem

    num=parseInt(num/10)
}
console.log(result);

temp==result ? console.log(`${result} is palindrome`):console.log("not a palindrome number");

