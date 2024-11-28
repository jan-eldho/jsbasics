//Array looping through index

var fruits=["benana","orange","apple"]
for( i in fruits)
{
    // console.log(i);
    console.log(fruits[i]);
    
    
}

console.log("<<<<<<<<<<<<<<<<<<<<<");
// looping through each item 

for(item of fruits)
{

    console.log(item);
    
}

var marks=[34,45,65,55,45]
var isFound;
isFound=marks.indexOf(65)
console.log(isFound); //o/p will the item index , i.e case 65 index is 2

isFound=marks.indexOf(22)
console.log(isFound); // 22 item not in marks list so it index will -1

isFound=marks.indexOf(45)
console.log(isFound); //in this case 45 in two timein array so it take frst item postion index, so that item index is 1



