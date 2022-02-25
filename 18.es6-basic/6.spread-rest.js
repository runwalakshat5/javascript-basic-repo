// ... -> spread operator
const odd =[1,3,5]

const combined = [2,4,6,...odd]

console.log(combined)


// ... -> Rest operator- if used as parameter of a function
// ... -> Rest element packs elements into array
function display(a,b,c, ...args){
    console.log(args)
}

display(1,2,3,4,5)

// invalid
// function display( ...args, a,b,c){
//     console.log(args)
// }

// display(1,2,3,4,5)

// constructing array literal

let inititalChars = ['A', 'B']

let chars = [...inititalChars, 'C','D']

console.log(chars)

// Concatenate

let numbers =[1,2]
let morenumbers= [3,4]

let allNumbers =[...numbers, ...morenumbers]
console.log(allNumbers)

// strings  - It will unpack each character of B,C,D,E in given eg.
let newChars=['A',...'BCDE','F']
console.log(newChars)

// Copy array

let scores =[80, 70, 90]
let copiedScores = [...scores]

console.log(copiedScores)