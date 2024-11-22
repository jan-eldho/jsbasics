//give number amstong
// 153=1**3+5**3+3**3

var num=153
rais=num.toString().length
var rem=0;
var result=0
temp=num

while(num>0)
{
    rem=num%10;
    result+=rem**rais
    num=parseInt(num/10)
}
console.log(result);
console.log(rais);

result==temp ? console.log(`${temp} is an amstrong number`):console.log(`${temp} is not an amstrong number`);

