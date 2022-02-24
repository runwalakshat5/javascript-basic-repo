
var employee ={
    id:1,
    greet: function(){
        console.log(this.id)
    }
}

employee.greet()

// fix this using bind
var employee ={
    id:1,
    greet: function(){
        setTimeout(function(){
            console.log(this.id)
        }.bind(this),1000)
    }
}

employee.greet()

// // fix this using self

var employee ={
    id:1,
    greet: function(){
        var self = this;
        setTimeout(function(){
            console.log(self.id)
        },1000)
    }
}

employee.greet()

// using fat-arrow

var employee ={
    id:1,
    greet: function(){
        setTimeout(() =>{
            console.log(this.id)
        },1000)
    }
}

employee.greet()
