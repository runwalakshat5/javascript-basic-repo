// var display = (function sample(name){
//     var firstName ="Uma"
//     return name
// })("Uma")

// var firstName = "mahesh"
// console.log(display)

// // Immediately invoked function

// function confirm(){
//     return "Hello"
// }

var confirm = (function(message){return function()
    {return "Hello"}
})("Hello World")

console.log(confirm)