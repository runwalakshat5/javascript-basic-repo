// Array destructuring

let array = ["Scott", "Adam", "Tuan"]

let [firstName, lastName, anothername] = array

console.log(firstName) // sets firstName as arr[0]
console.log(lastName) // sets firstName as arr[1]
console.log(anothername)


// Converting string into array using split()
let message="Who are you".split(' ')

console.log(message)

 // Converting array into string
let newMessage=message.join(' ')
console.log(newMessage)


let [fName, lName] ="John Galt".split(" ")
console.log(fName, lName)

let [name1, ,name3] = ["Scott", "Adam", "Tuan"]

console.log(name1)
console.log(name3)

// Object destructuring

let user = {
    name: 'Scott',
    age: 30, 

}

for(let [key, value] of Object.entries(user)){
    console.log(`${key} : ${value}`)
}

let {fullName, age} = user // key should be name here instead of full name

console.log(fullName) // undefined because object's key shouls match with the defined key i.e fullname should noe be there, name should be there.
console.log(age)

 let student = {
    id: 1,
    firstName: 'Adam',
    lastName: 'Colson',
    city: 'sydney',
    address: {
        state: 'New South Wales"',
        country: 'Australia'
    },
    company: {
        name: 'Education First',
        website: 'https://education-first.com/'
    },
    getFullName: function(){
        return this.firstName + " " + this.lastName
    },
    colors: ["red", "blue", "yellow"],
    isAdmin : true,
    product: null,
    secretKey: undefined
}

let {city, address, company,getFullName} = student
let {name, website} = company

console.log(city)
console.log(getFullName)
console.log(address)
console.log(name)
console.log(website)