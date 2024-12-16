function sum(...num) {
    console.log(num);
    //num in array format [ 1, 2, 3, 4, 5, 6 ]
    let sum=0;
    for(i=0;i<num.length;i++)
    {
        sum +=num[i]
    }
    return sum
    
}
console.log(sum(1,2,3,4,5,6));
