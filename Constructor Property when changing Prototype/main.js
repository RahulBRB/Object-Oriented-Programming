/*
There is one crucial side effect of manually setting the prototype to a new object. It erases the constructor property!
To fix this, whenever a prototype is manually set to a new object, remember to define the constructor property
*/
function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  constructor: Dog, //THIS
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
