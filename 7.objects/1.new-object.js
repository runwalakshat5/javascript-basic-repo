var person = new Object()

person["firstName"]='Scott'
person["lastName"]="Desatnick"

console.log(person)

var cityName="city"

person[cityName]="Boston"

person.address = new Object() 

person.address.state = "Massecchusets"
person.address.country = "USA"

console.log(person)
console.log(person[cityName])
console.log(person["firstName"])
console.log(person["lastName"])
console.log(person["city"])

console.log(person.firstName)
console.log(person.lastName)
console.log(person.city)

console.log(person.address.state)
console.log(person.address.country)
console.log(person["address"])
console.log(person["address"]["country"])

person.getName= function(){
    return "My name is Scott Desatnick"
}

person.isAdmin=true
person.colors=["red","yellow","blue"]
person.id=1
person.property=undefined
person.total=null
