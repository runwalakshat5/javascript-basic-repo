function getName(){
    return "Scott" + " " + "Desatnick"
 }
 
 console.log(getName())
 
 function getFullName(){
     return "Adam" + " " + "Colson"  
 }
 
 console.log(getFullName())
 
 
 function getCompleteName(firstName, lastName){
     return firstName + " " + lastName
 }
 
 console.log(getCompleteName('Scott', 'Desatnick'))
 console.log(getCompleteName('Adam', 'Colson'))
 console.log(getCompleteName('Tuan', 'Bui'))
 console.log(getCompleteName())
 function display(message, name){
     return message + ' ' + name
 }
 function display(){
    return "Hello"
}

 
 console.log(display("Welcome", "Uma")) // It will take the latest declaration of the same function name since it overrides
 
 console.log(display())