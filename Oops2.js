class Student{
    stName;
    stBatch;
    stRollNo;
    stCollage='Modal Engineering College'
    constructor(name,batch,rollno){
        this.stName=name;
        this.stBatch=batch;
        this.stRollNo=rollno;
    }
    printCollageName()
    {
        console.log("College Name is :",this.stCollage);  

    }
    printStudentDetails(){
        console.log(`student name is ${this.stName} belongs to ${this.stBatch} and Roll no is ${this.stRollNo}`);
        
    }
    printMarks(mark1,mark2,mark3){
        console.log(`${this.stName} marks are ${mark1},${mark2} and ${mark3}`);
        
    }
}

const obj= new Student()
obj.printCollageName()

const student1= new Student("Clara",'CES','ST121');
student1.printStudentDetails();
student1.printMarks(34,45,44)

console.log("......................");

const student2=new Student("kennths",'eee',34)
student2.printStudentDetails();
student2.printMarks(34,44,50)
