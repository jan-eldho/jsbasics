//to find a whether a number is positive or negative

function numberPostiveNegative(n) {
    if(n===0)
    {
        return "not a positive or negative"
    }else if(n>0)
    {
        return "return postive number"
    }
    else{
        return "negative number"
    }
}

//using terinary operator
var res=numberPostiveNegative(4)
console.log(res);
console.log('>>>>>>>>>>');

function numberPostiveNegative1(n) {
   return n===0 ? "netheir positive or negative number" : n>0 ? "positive" : "Negative"
}

var res1=numberPostiveNegative1(-10)
console.log(res1);

