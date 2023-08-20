function Animal() { }

//PARENT
Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

//CHILD
function Dog() { }

// Dog will inherit from ANIMAL using following line
Dog.prototype = Object.create(Animal.prototype)


let beagle = new Dog();
