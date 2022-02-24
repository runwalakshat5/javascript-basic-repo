function sayHello(message){
    var city ="Boston"
    return function(name){
        return message + " to " + city + " "  + name
    }
}

var wishMe = sayHello("Welcome")
var message1 = wishMe("Scott")
var message2 = wishMe("Adam")
var message3 = wishMe("Tuan")
var message4 = wishMe("Uma")

console.log(wishMe)
console.log(message1)
console.log(message2)
console.log(message3)
console.log(message4)