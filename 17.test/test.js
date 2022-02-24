function multiply(x){
    return function(y){
     return  function(z){
        return x*y*z
     }
    }
}
console.log(multiply(2)(3)(4))

var a =10; // ValueType
var b = a;
    a =20;

 console.log(a)
 console.log(b)

 var x =[1,2] //  Object Type : Referenece  Hence change in x will be reflected in y
 var y = x
x.push(3)

  console.log(x)
  console.log(y)

var m =[1,2]
var n = m
m =[1,2,3] // Here again new object is created so reference to n is lost as new reference is created
 
console.log(m)
console.log(n)
 

var output = 1+ 2+ "Akshat" + 3+ 4 + null + undefined  //Expression evaluated from LtoR

console.log(output, typeof output)

var output1 = (function(x){
    console.log(delete x)
    delete x
    return x
})(0)
// Delete only works with object, it only deletes property of objects

console.log(output1)

var x =1

var output2 =(function(){
    delete x;
    return x
})()

console.log(output2)

var output3 =(function(x){
    delete x.id
    return x
})({id:1})

console.log(output3)

var output4 =(function(x){
    delete x
    return x
})({id:1})
console.log(output4) // Nothing will be deleted it will return an object because still we are not deleting any property of object

var array =['a', 'b', 'c' ,'d', 'e', 'f']

//Method 1
//array.length =0;

// Method 2
//array =[]

// Method 3
//array.splice(0, array.length)


//Method-4
// array = array.slice(1,1)
// console.log(array)

// Method 5
// var size = array.length
// for(var i=0; i<=size; i++){
//     array.pop()
// }


// Method 6
// var size = array.length
// for(var i=0; i<=size; i++){
//     array.shift()
// }

// Method 7 : First write condition in and after that write while
while(array.length){
    console.log('using while loop')
    array.pop()
}

console.log(array)
console.log(array.length)

console.error('There is an error')
console.warn('This is warning')
console.info('This is information')
console.table([{
    a:1,b:2
}])

