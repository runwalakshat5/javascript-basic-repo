var person = {
    firstName : 'Uma',
    lastName: 'Mahesh',
    age: 39
}

 person.city = 'Hyd'    // ADD city property
 person.firstName='Meka' // UPDATE
 delete person.age      // DELETE the age property
console.log(person)    // READ

/**
 *  ? Object.preventExtensions()
 *  ? WE can't add new properties
 *  ? but we can edit and delete existing properties
 */

var preventObject = {
    name: 'Scott',
    city: 'Boston',
    age: 45
}

Object.preventExtensions(preventObject)

preventObject.email = 'scott@ef.com' // ADD
preventObject.name = 'Desatnick' // UPDATE
delete preventObject.city // DELETE
console.log(preventObject) // READ

/**
 *  ? Object.seal()
 *  ? We can edit the existing properties
 *  ? we can't delete the existing properties 
 *  ? we can't add new properties
 */

 var sealObject = {
    name: 'Scott',
    city: 'Boston',
    age: 45
}

Object.seal(sealObject)

sealObject.email = 'scott@ef.com' // ADD
sealObject.name = 'Desatnick' // UPDATE
delete sealObject.city // DELETE
console.log(sealObject) // READ

/**
 *  ? Object.freeze()
 *  ? We can't edit the existing properties
 *  ? we can't delete the existing properties 
 *  ? we can't add new properties
 */

 var freezeObject = {
    name: 'Scott',
    city: 'Boston',
    age: 45,
    address : {
        state: 'massachusetts'
    }
}

Object.freeze(freezeObject)
Object.freeze(freezeObject.address)

freezeObject.email = 'scott@ef.com' // ADD
freezeObject.name = 'Desatnick' // UPDATE
delete freezeObject.city // DELETE

console.log(freezeObject) // READ
freezeObject.address.state ='USA'

console.log(freezeObject)

// Way to edit the object inspite of freeze,seal and prevent extension by  stringify(creating new object)

var studentStringify=JSON.stringify(freezeObject)
var studentParse= JSON.parse(studentStringify)
console.log(studentStringify)
console.log(studentParse)

studentParse.name="Akshat"

console.log(studentParse)