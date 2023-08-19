/*
Own properties are defined directly on the object instance itself. And prototype properties are defined on the prototype.
*/

function Dog(name) {
  this.name = name; //own property
}

Dog.prototype.numLegs = 4; // prototype property

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

for(let property in beagle){
  if(beagle.hasOwnProperty(property)){
    ownProps.push(property);
  }else{
    prototypeProps.push(property);
  }
}
