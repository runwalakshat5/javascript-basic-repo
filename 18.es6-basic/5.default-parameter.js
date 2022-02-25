function say(message){
    console.log(message)
}

//say()

//ES5

function say(message){
    message = typeof message !=='undefined' ? message : 'hi'
    console.log(message)
}
//say()
//say('Welcome')

//ES6

function say(message="Hi"){
    console.log(message)
}

say()
say('ES6 Way')