// Class
function Student(){

}

// instance of the class

function Person(){

}

var person1 = new Person() // person1 is an instance
var person2 = new Person() // person2 is an instance

// constructor 
function Order(id, name){
    console.log(id, name)
}

var order1 = new Order(1, "laptop") // Order() is constructor

// properties 

function Customer(gender){
    this.gender = gender
}

var customer1 = new Customer('Male')
var customer2 = new Customer('Female')
console.log(customer1) 
console.log(customer2) 
