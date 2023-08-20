function Bird(name) {
  this.name = name;
}

let duck = new Bird("Donald");
//duck inherits its prototype from the Bird constructor function. We can check this relationship with isPrototypeOf method
Bird.prototype.isPrototypeOf(duck);
