let text='hi hello all hello world all hi all'

//find numbr of occurance of each word
// hi:2, hello:2, all: 3, world:1

let words=text.split(' ')

// [
//     'hi',    'hello',
//     'all',   'hello',
//     'world', 'all',  
//     'hi',    'all'   
//   ]

console.log(words);

let wc={}

for(let word of words)
{
    if(word in wc)
    {
        wc[word] +=1

    }
    else{
        wc[word]=1
    }
}
console.log(wc);  //{ hi: 2, hello: 2, all: 3, world: 1 }

