

function Person(name, age){
    this.name = name;
    this.age = age;

    this.Describe = function(){
        console.log(name +" is " + age +" years old!");
    }
}