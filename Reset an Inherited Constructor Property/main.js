function Animal() { }
function Bird() { }
function Dog() { }

//In following, Bird and Dog are inheriting from Animal
Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

//Dont want duck, and beagle to show that they are made of ANIMAL, but made of BIRD and DOG, so reset the inherited constructor property
Bird.prototype.constructor=Bird;
Dog.prototype.constructor=Dog;

let duck = new Bird();
let beagle = new Dog();
