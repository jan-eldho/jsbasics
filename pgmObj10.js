let text='hi hello all hello world all hi all'

let wc={}
text.split(' ').forEach(word=>word in wc ? wc[word]+=1:wc[word]=1)
console.log(wc); //{ hi: 2, hello: 2, all: 3, world: 1 }
