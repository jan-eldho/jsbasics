//reverse a number
//123=321

var num=1234;
var rem=0;
var sum=0;
 while(num>0)
 {
    rem=num%10;
    sum=sum*10+rem
    num=parseInt(num/10)
 }
 console.log(sum);
 