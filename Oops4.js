//inherit
class Animal{
    color='grey'
    eat(){
        console.log("dog is eating");
        
    }
}
class Dog extends Animal{
    bark()
    {
        console.log("Dog is barking");
        
    }
}

const obj= new Dog()
obj.eat() //dog is eating
console.log(obj.color); //grey
