let car={
    name:'innova',
    model:'SUV',
    manufacturer:'Toyotta',
    price:2500000
}

// questions
// 1, car name is innova and its manufacturer is Toyota

console.log(`car name is ${car.name} and its manufacture is ${car.manufacturer}`);

// 2, check if vatiant is present or/not (manual/Automatic) if not add vatiant
'variant' in car ? console.log("variant is present"): console.log(car['variant']='Automatic');

if(!('engein' in car))
{
car.engein= '1nt345'   
}

console.log(car);


// 3 Add available colors (white,grey,black,silver)
car.colors=['white','grey','Silver']
car.colors.push('orange')
console.log(car);

// 4, Update price is to 2600000
car.price=2600000
console.log(car);

console.log(">>>>>>>>>>>>>>......");

let person = {
    firstName:"John",
    lastName:"Doe",
    address:{
    street:'123 main st',
    city:'Newyork',
    zipcode:34523
    }
   }

   console.log(person.address.city);
   person.address.houseNo='h34'
console.log(person);
