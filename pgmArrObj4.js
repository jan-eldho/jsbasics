var moilePhones=[
    {name:'iphone15',
     price:60000
    },
    {name:'pixel7',
        price:40000
       },
       {name:'oneplus04',
        price:55000
       },
       {name:'sumsongsz23ultra',
        price:100000
       }
]
//list mobile names whose price greater than 55000

let res1=[]

moilePhones.forEach((item)=>{
    if(item.price>55000)
    {
        res1.push(item.name)
    }
})
console.log(res1);

console.log(`in a list ${res1} mobiles are greater than amount 55000 `);

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");





