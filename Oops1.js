class Employee{
    //properties
    empName;
    empId;
    empSalary=25000;

//constructor
    constructor(name,id){
        this.empName=name;
        this.empId=id;
    }
    //methods
    printEmployeeDetails(){
        console.log(`Employee Name is ${this.empName} and Employee Id is ${this.empId}`);
        
    }
    printSalary(){
        console.log("Salary is: ",this.empSalary);
        
    }
}

const obj=new Employee("Sean",'EMP12002')
obj.printEmployeeDetails();
console.log(obj.empName);
console.log(".........");

const obj1=new Employee("Den",3456)
obj1.printEmployeeDetails();
obj1.printSalary();
