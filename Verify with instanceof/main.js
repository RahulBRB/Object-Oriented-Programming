//instanceof allows you to compare an object to a constructor, returning true or false based on whether or not that object was created with the constructor

let Bird = function(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}

let crow = new Bird("Alexis", "black");

crow instanceof Bird;
