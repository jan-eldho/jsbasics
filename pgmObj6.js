let car={
    name:'innova',
    model:'SUV',
    manufacturer:'Toyotta',
    price:2500000
}

//array of o/ps

console.log(Object.keys(car)); //[ 'name', 'model', 'manufacturer', 'price' ]

console.log(Object.values(car)); //[ 'innova', 'SUV', 'Toyotta', 2500000 ]

console.log(Object.entries(car));

// [
//     [ 'name', 'innova' ],
//     [ 'model', 'SUV' ],
//     [ 'manufacturer', 'Toyotta' ],
//     [ 'price', 2500000 ]
//   ]