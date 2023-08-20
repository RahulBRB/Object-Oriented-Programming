/*
Because a prototype is an object, a prototype can have its own prototype!
*/

function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  
Object.prototype.isPrototypeOf(Dog.prototype);
