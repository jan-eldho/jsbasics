let numbers=[10,20,30,10,30,40,10,50,60,70,40,80,20]
//find obj of each number is the above array

let obj={}

for(let num of numbers)
{
    if(num in obj)
    {
        obj[num]+=1

    }else{
        obj[num]=1
    }
}
console.log(obj);

// {
//     '10': 3,
//     '20': 2,
//     '30': 2,
//     '40': 2,
//     '50': 1,
//     '60': 1,
//     '70': 1,
//     '80': 1
//   }

//which numbers is repeated more and how many times repeated
let maxCount=0;
let mostFrequentNumber;
for(let number in obj)
{
    if(obj[number]>maxCount)
    {
        maxCount=obj[number]
        mostFrequentNumber=number
    }
}
console.log(`the number which maximum count is ${mostFrequentNumber} with count of ${maxCount}`);
