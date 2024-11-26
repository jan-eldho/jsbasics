// in 1st fn find sum of numbers 1 to 10
// in callback fn, find double of this sum

function sumOfNumber(callback) {
    var sum=0;
    var n=10;
    for(var i=1;i<=n;i++)
    {
        sum+=i

    }
    console.log(`sum of first ${n} numbers is: ${sum}`);

    callback(sum);
}

function doubleOfSum(val) {
    var res;
    res=val*2
    console.log("double of sum is: ",res);  
}
sumOfNumber(doubleOfSum)