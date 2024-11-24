for(var i=5;i>=1;i--)
{
    var str=''
    for(var j=1;j<=i;j++)
    {
        str+=' '+ '*'
    }
    console.log(str);
    
}

// * * * * *
// * * * *
// * * *  
// * *    
// *     

console.log(">>>>>>>>>>>>>");

for(var i=1;i<=5;i++)
{
    var str=''

    for(var j=1;j<=i;j++)
    {
        str+=' ' + '*'
    }
    console.log(str);
    
}
for(var x=4;x>=1;x--)
{
    var str1=''
    for(var y=1;y<=x;y++)
    {
        str1+=' ' + '*'
    }
    console.log(str1);
    
}

// *
// * *
// * * *
// * * * *
// * * * * *
// * * * *
// * * *
// * *
// *

console.log("<<<<<<<<<<<<<");

let n = 4; // Number of rows

for (let i = 1; i <= n; i++) {
    let row = "";

    // Add spaces for left alignment
    for (let j = 1; j <= n - i; j++) {
        row += " ";
    }

    // Add stars with spaces in between
    for (let k = 1; k <= i; k++) {
        row += "* ";
    }

    console.log(row); // Print the row
}

//    *
//   * *
//  * * *
// * * * *

console.log(">>>>>>>>>>");



