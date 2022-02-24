// Method Overloading is not possible in js - function with diff parameters, same name
// Method Overriding - over riding the parent's method

// Shape
function Shape(){

}

Shape.prototype.draw = function(){
    return "I am genric Shape"
}


// Circle
function Circle(){

}

Circle.prototype = new Shape()
//Circle.prototype = Object.create(Shape.prototype)

Circle.prototype.draw = function(){
    return "I am Circle"
}

// Square
function Square(){

}

Square.prototype = new Shape()

Square.prototype.draw = function(){
    return "I am Square"
}

// Triangle
function Triangle(){

}

Triangle.prototype = new Shape()

// Triangle.prototype.draw = function(){
//     return "I am Triangle"
// }

var shape = new Shape()
console.log(shape.draw())

var circle = new Circle()
console.log(circle.draw())

var square = new Square()
console.log(square.draw())

var triangle = new Triangle()
console.log(triangle.draw())

