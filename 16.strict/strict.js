'use strict' 

 // Strict mode helps to ensure that we are doing code properly
console.log(this)

function sample(){
    console.log(this)
} // Also 'this' wouldchange into local variable not windows as which was case previously in function

sample()