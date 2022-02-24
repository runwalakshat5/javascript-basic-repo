function Student(firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName
    // this.getfullName = function(){
    //     return this.firstName +  " " + this.lastName
    // }
}

// Student.getStaticMethod = function(){
//    return this.firstName ='Uma'
// }

// Student.message = 'Hello'

// console.log(Student.getStaticMethod())
// console.log(Student.message)

Student.prototype.getfullName = function(){
    return this.firstName +  " " + this.lastName 
}

Student.prototype.City = 'Boston'

Student.getfullName = function(){
    return "Welcome"  + " " + this.firstName +  " " + this.lastName 
}

var student1 = new Student("Scott", "Desatnick")
console.log(student1)

var student2 = new Student("Adam", "Colson")
console.log(student2)

var student3 = new Student("Tuan", "Bui")
console.log(student3)

console.log(student1.getfullName())
console.log(student2.getfullName())
console.log(student3.getfullName())


function Person() {
    this.name = 'John Galt'
    this.gender = 'M'
}

var personObj = new Person();

console.log(Person.prototype)
console.log(personObj.prototype)
console.log(personObj.__proto__)

console.log(typeof Person.prototype)
console.log(typeof personObj.__proto__)
console.log(Person.prototype === personObj.__proto__)
