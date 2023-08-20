//In addition to what is inherited from PARENT, you want to add behavior that is unique to CHILD objects. 

function Animal() { } //PARENT
Animal.prototype.eat = function() { 
  console.log("nom nom nom"); 
  };

function Dog() { } //CHILD


Dog.prototype = Object.create(Animal.prototype); // Dog inherits from Animal
Dog.prototype.constructor = Dog; // Reseted the constructor of from Animal to Dog
Dog.prototype.bark = function(){   //Added new method/function to this Dog (child)
  console.log("Woof!");
}

let beagle = new Dog(); //Dog creating new instance of Dog named beagle
