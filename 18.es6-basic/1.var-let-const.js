function sample(){
   
    if(true){
        var foo = "hello"
        let bar ="How are you"
        const baz = "I am fine"

        console.log(foo)
        console.log(bar)
        console.log(baz)
    }

    console.log(foo)
    // console.log(bar)
    // console.log(baz)
}

sample()

// var
// for(var i=0;i<3;i++){
//     console.log(i)
// }
// console.log(i)

// let 

for(let i=0;i<3;i++){
    console.log(i)
}
//console.log(i) //Reference i is not defined

// Re-Define let
// function display(){
//     let foo=1;

//     foo=10;

//     let foo=100 // Can't use let keyword again

//     console.log(foo)
// }

//display()

function testConst(){
    const foo=1;

    //foo=10;

    //let foo=100 // Can't use let keyword again

    console.log(foo)
}

testConst()

// const

if(true){
    const names= ["scott", "Adam", "Tuan"]

     names.push('Uma')

    console.log(names)
}
