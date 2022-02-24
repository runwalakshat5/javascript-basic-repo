//  => // fat arrow
//  -> // thin arrow

// let add = function(x, y){
//     return x+y;
// }

// let sum = (x, y) =>{
//     return x+y;
// }

// let sum = (x, y) => x+y

// let sum = (x, y) =>{ x+y} It will give undefined since with fower bracket return should be used

// console.log(sum(40,60))

/**
 *  ? () => expression
 *  ? () => {return expression}
 */

// sort an array

// let numbers = [4,2,6]

// numbers.sort(function(a,b){
//     return b-a
// })

// console.log(numbers)

// With return 
let numbers = [4,2,6]

numbers.sort((a,b) =>{
    return b-a
})

console.log(numbers)

// Taking Single parameters
/**
 * ? (p1) => statements
 * ? p1 => statements
 */
 
let names=["Scott","Adam","tuan"]

// let length= names.map(function(name){
//     return name.length
// })

let length = names.map(name =>name.length)


console.log(length)

// With no params
 let logDocument = () => console.log(window.document)

 logDocument()

 // Line breaks

 let multiply = (x,y) => 
 x*y // Valid Syntax

 // object literal 

// let setColor = function(color){
//     return {value: color}
// }

// let backGorundColor = setColor('green')
// console.log(backGorundColor)

// let setColor = (color) =>{
//     return {value: color}
// }

// let backGorundColor = setColor('green')
// console.log(backGorundColor)

let setColor = (color) =>({value: color})


 