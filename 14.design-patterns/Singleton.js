// function Student(){
//     console.log('created new instance')
// }

// var student1 = new Student()
// student1.name="Akshat"
// console.log(student1)
// var student2 = new Student()
// console.log(student2)
// var student3 = new Student()
// console.log(student3)
// var student4 = new Student()
// console.log(student4)

var Singleton = (function(){
        var instance=null
        
        var createInstance = function(){
            var obj= Object.create(null)
            console.log("Instance is created")
            return obj
        }

        var getInstance = function() {
            if(!instance){
                instance=createInstance()
            }
            return instance

        }
    var obj = {
        getInstance:getInstance
    }
    return obj
})()

console.log(Singleton.getInstance())
console.log(Singleton.getInstance())
console.log(Singleton.getInstance())
console.log(Singleton.getInstance())

var singleton1 = Singleton.getInstance()
singleton1.name="connection is created"
console.log(singleton1)


singleton2 = Singleton.getInstance()
singleton2.name="connection is created again"
console.log(singleton2)

var singleton3 = Singleton.getInstance()
singleton3.name="connection is created again and agian"
console.log(singleton3)

var singleton4 = Singleton.getInstance()
console.log(singleton4)