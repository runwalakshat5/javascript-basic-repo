function Student(firstName,lastName){
    this.fName = firstName
    this.lName = lastName
    this.getFullName= function(){
        return this.fName + ' '  + this.lName
    }
}

var student= new Student("Scott","Desatnick")

console.log(student)
console.log(student.fName)
console.log(student.lName)
console.log(student.getFullName())


