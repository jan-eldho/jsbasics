var student=[
    {name:'john', branch:'cse',age:23},
    {name:'todd', branch:'eee',age:24},
    {name:'clara', branch:'ece',age:22},
    {name:'David', branch:'mech',age:15},
    {name:'stachia', branch:'ece',age:18}
   ];

   //print student details whose age <22
   let resultArray=[]
   student.forEach((item)=>{
    if(item.age<22)
    {
        resultArray.push(item)

    }
   })
   console.log(resultArray);
   //print name of students whose age>18 as arry
let rstArry=[]
   student.filter((nme)=>{
    if(nme.age>18)
    {
        rstArry.push(nme.name)
        
    }
   })
   console.log(rstArry);
  let stt= student.filter(it=>it.age<=18)
  console.log("ssss: ",stt);
  
   //find object with name of student is david

   let st=student.find(item=>item.name=='David')
   console.log(st); //{ name: 'David', branch: 'mech', age: 21 }

   let res1=student.sort((a,b)=>a.age-b.age)
   console.log(res1);
   
   
   