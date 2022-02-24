var user = {
    "name" : "Scott",
    "city" : "Desatnick"
}
// Keys in JSON should be in double quotes

var JSONStringify=JSON.stringify(user)

console.log(JSONStringify ,typeof(JSONStringify))

var JSONParse=JSON.parse(JSONStringify)
console.log(JSONParse ,typeof(JSONParse))
console.log(user)