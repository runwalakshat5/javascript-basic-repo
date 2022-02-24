var array=[0,1,2,4,-9]

console.log(array)
array.push(6)
console.log(array)
array.unshift(-8)
console.log(array)
array.pop()
console.log(array)
array.shift()
console.log(array)

// splice

array.splice(1,0,4)
array.splice(0,1,'Scott')
console.log(array)
// [0, 'Scott', 4, 1, 2, 4, -9]
array.splice(1,2)

console.log(array)

//slice
var fruits=["B","o","A","m"]
var citrus=fruits.slice(1,3)
console.log(citrus)