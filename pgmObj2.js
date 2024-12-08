let person={
    firstname:'sean',
    age:25
}

//adding new property
person.email='sean@gmail.com';
person['mobileNo']=8345678224

console.log(person);

// {
//     firstname: 'sean',      
//     age: 25,
//     email: 'sean@gmail.com',
//     mobileNo: 8345678224    
//   }

console.log(person['age']); //25

//delete particular key value
delete person.age
console.log("<<<<<<<<<<<<<");

console.log(person);

