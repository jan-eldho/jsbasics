//object is key value pairs,key always string data type it hold all type of values
let employee={
    empName:'sean',
    empId:1012,
    empRole:'Supervisor',
    location:function()
                      {
                    console.log('kochi');
        
                    },
    regions:['TVM','KOCHI','KOLLAM']
}
console.log(employee);
console.log(">>>>>>>>>>>>>>>>>>");

//another method
let person = new Object();
person.name= "Todd";
person.age= 27;
person.email='abc@gmail.com'

console.log(person);

// these two method to acess data
console.log(person.name) 
console.log(person['age']);

