let pattern='abcdghbeabdjklmnadscb'

// print first repeating characher using object method

let characters=pattern.split('')
console.log(characters);


let obj={}

for(chara of  characters)
{
    if(chara in obj)
    {
        console.log(`first repeating characher: ${chara}`)
        break;

    }else{
        obj[chara]=1
    }
}