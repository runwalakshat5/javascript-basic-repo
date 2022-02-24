var person1 ={ firstName: 'Scott', lastName: 'Desatnick'}
var person2 ={ firstName: 'Adam', lastName: 'Colson'}
var person3 ={ firstName: 'Tuan', lastName: 'Bui'}


function sample(message, city){
   return message + ' ' + this.firstName + " " + this.lastName +  ' to ' + city
}



// var output = sample.bind(person1, "Welcome", "Hyderabad") //
// console.log(output())


var outputUsingBind = sample.bind(person1) // bind will return that function
console.log(outputUsingBind("Welcome", "Hyderabad"))

var outputUsingCall = sample.call(person2, "Welcome", "Delhi" )
console.log(outputUsingCall)

var outputUsingCall = sample.apply(person3, ["Welcome", "Bengaluru"] )
console.log(outputUsingCall)