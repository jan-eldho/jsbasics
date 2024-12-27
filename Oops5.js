//polymorphsm
//method overloading
class A{
    methodA(){
        console.log("Calling method A");
        
    }
    methodA(num1)
    {
        console.log("callling method with arugment",num1);
        
    }
}

const obj = new A() 
 //js not support method overloading
obj.methodA();
obj.methodA(23)
console.log(".................");

//method overriding
console.log("....Method overriding.........");

class Parent{
    commonMethod(){
        console.log("calling common method in parent");
        
    }
}

class Child extends Parent{
    commonMethod(){
        console.log("calling common method in child");
        
    }
}

const obj1=new Child()
obj1.commonMethod()

console.log("......Abstraction.....");

const now = new Date()
console.log(now);
console.log(now.getFullYear());
console.log(now.getDate());
console.log(now.getMonth());
console.log(now.getDay());
console.log(now.getHours());








