/**
 * ? Private Methods 
 */
var Module =(function(){
    var privateMethod = function(){
        // do something
    }

    var publicMethod = function(){
        // do something
    }
})()

var Module =(function(){

    var openToPublic = function(){

    }

    return {
        privateMethod: function(){

        },
        highlySecret: function(){

        },
        open: openToPublic
    }
})()

console.log(Module)

// Anoynymous Object Literal

var Module=(function(){

    var privateMethod = function(){

    }

    return {
        publicMethodOne: function(){

        },
        publicMethodTwo: function(){

        },
        publicMethodThree: function(){

        },
    }

})()

//console.log(Module)

// Locally Scoped Object Literal 

var Module = (function(){

    var myObj = {}

    var privateFunction = function(){

    }

    var publicFunction = function(){

    }

    obj = {
        public: publicFunction
    }

    return obj


})()

//console.log(Module)

// Revealing Module Pattern 

var Module = (function(){

    var privateMethod = function(){

    }

    var someMethod = function(){

    }

    var anotherMethod = function(){

    }

    var letsRevealThisMethod = function(){

    }

    return {
        some : someMethod,
        another: anotherMethod,
        reveal: letsRevealThisMethod
    }

})()

console.log(Module)

// Accessing Private Method 

var Module = (function(){

    var privateMethod = function(message){
        return message
    }

    var publicMethod = function(text){
        return privateMethod(text)
    }

    return {
        publicMethod : publicMethod
    }

})()

console.log(Module.publicMethod('This is calling private Method'))