///Object seal
var person={
    fristname:'sean',
    age:23
}
console.log(person);
Object.seal(person) //we seal object prpty, we can't add/removing new property,only modifies existing prpty

person.lastname='sean Todd' //it not work
delete person.age //it not work
console.log(person);

//only works
person.fristname='clara'
console.log(person);
console.log("...........................");


//object freeze

Object.freeze(person)
person.fristname='todd' //we can't add/remove and modifiy the prpty
console.log(person);
// { fristname: 'clara', age: 23 }