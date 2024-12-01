//fiter out the elements from the array which starts with 'j'
const names=['jane','sean','todd','john']

const namesStartwith=names.filter((strt)=>strt.startsWith('j'))
console.log(namesStartwith);

const fruits=['bennea','apple','orange','jack fruit','kiwi']
//fiterout elemmnts from the above array whose word lenght >=6
const longwords=fruits.filter((frut)=>{
    return frut.length>=6
})
console.log(longwords);
