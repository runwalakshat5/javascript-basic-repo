// Function is of type object

function uniqueName(){


}

uniqueName.name="sample function"
uniqueName.getValue=function(){
    return "Here is your value"
}
console.log(uniqueName["name"])
console.log(uniqueName.getValue())
