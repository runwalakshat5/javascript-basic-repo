var names = ["Scott", "Adam","Tuan"]


// for loop
for(var i=0; i<names.length; i++){
    console.log(i, names[i])
}


// forEach
names.forEach(function(name, index, array){
    console.log(name, index, array)
})

// map

names.map(function(name, index){
    console.log(index, name)
})

// forEach -- doesn't return anything it loops through values
var namesForEach = names.forEach(function(name, index){
    console.log(index, name)
    return name
})

// map -- It will return an array/object

var namesMap = names.map(function(name, index){
    console.log(index, name)
    return index + ' ' +name
})

console.log(namesForEach)
console.log(namesMap)

// using for..of
for(var name of names){
    console.log(name)
}

// using for..in -- for index
for(var index in names){
    console.log(index)
}

// getting name. index using for..of
for(var [name, index] of names.entries()){
    console.log(name, index)
}