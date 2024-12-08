let employee={
    firstName:'stechia',
    age:34,
    email:'stechia@gmail.com'
}
             //key     //object_name
console.log('email' in employee); //true
console.log('location' in employee); //false

//getting all keys

for(let item in employee)
{
    console.log(item);
    
}

// firstName
// age      
// email

//check whether 'gender' is present .otherwise add 'gender'

'gender' in employee ? console.log('gender present'): console.log(employee.gender='female');

console.log(employee);

// {
//     firstName: 'stechia',
//     age: 34,
//     email: 'stechia@gmail.com',
//     gender: 'female'
//   }

Object.assign(employee,{isvaccinated:true})
console.log(".........................");
console.log(employee);

// {
//     firstName: 'stechia',
//     age: 34,
//     email: 'stechia@gmail.com',
//     gender: 'female'
//   }