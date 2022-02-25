// In ES6 we have classes unlike in javascript

class Person {
    constructor(){

    }

    getPerson(){ //No use of function keyword in class to make a separate function
        return "This is Parents getPerson Method"
    }

    getFullName =()=>{
        return `${this.firstName} ${this.lastName}`
    }

    getMessage=function(){
        return "Hello"
    }
}
class Student extends Person {
    constructor(firstName, lastName){
        super() // To call cinstructor of parent's class
        this.firstName = firstName
        this.lastName =lastName
    }
}

const student1 = new Student("Scott", "Desatnick")
const student2 = new Student("Adam", "Colson")
const student3 = new Student("Tuan", "Bui")

console.log(student1)
console.log(student2)
console.log(student3)
console.log(student3.getPerson())
console.log(student3.getFullName())
console.log(student3.getMessage())