console.log(this)

// Global function
function sample(){
    console.log(this)
}

sample()

// Local 
var person ={
    name:'Scott',
    getName: function(){
        console.log(this)
        this.name="Desatnick"
        console.log(this)
        // 'this' looses focus if it goes to inner function since it again goes to global variable
         var updateName= function(){
             this.name="Scotty"
             console.log(this)
         }
         updateName()
    }

}

person.getName()

// Solution using saving this in a variable

var person ={
    name:'Scott',
    getName: function(){
        var self=this
        self.name="Desatnick"
        console.log(self)
         var updateName= function(){
             self.name="Scotty"
             console.log(self)
         }
         updateName()
    }

}

person.getName()


// Solution using bind
var person ={
    name:'Scott',
    getName: function(){
        console.log(this)
        this.name="Desatnick"
        console.log(this)
        
         var updateName= function(){
             this.name="Scotty"
             console.log(this)
         }
         updateName.bind(this)()
    }

}
person.getName()

// Solution using bind
var person ={
    name:'Scott',
    getName: function(){
        console.log(this)
        this.name="Desatnick"
        console.log(this)
         var updateName= function(){
             this.name="Scotty"
             console.log(this)
         }.bind(this)
         updateName()
    }

}
person.getName()