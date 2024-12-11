var student=[
    {name:'john', branch:'cse',age:23},
    {name:'todd', branch:'eee',age:24},
    {name:'stachia', branch:'ece',age:22}
   ]

   console.log(student[0]);
   console.log(student[0].name);

   student.forEach((item)=>{
    console.log(`student name is ${item.name} is ${item.age} years old and department is ${item.branch}`);
    
   })
console.log(".................................................");

   //crete an array of object that store employee details

   var employees=[
    {empName:'Sean',empId:1024,empSalary:230000},
    {empName:'Todd',empId:1014,empSalary:235000},
    {empName:'Scharia',empId:1004,empSalary:555000},
   ]

   employees.forEach((emp)=>{
    console.log(`Employee name is ${emp.empName} and ID is ${emp.empId} with salary ${emp.empSalary} `);
    
   })
   employees.push( {empName:'Leo',empId:1224,empSalary:130000})
   console.log(employees);
   