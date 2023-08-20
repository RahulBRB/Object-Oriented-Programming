/*
There's a principle in programming called Don't Repeat Yourself (DRY). 
The reason repeated code is a problem is because any change requires fixing code in multiple places. 
This usually means more work for programmers and more room for errors.
*/

function Cat(name) {
  this.name = name;
}

function Bear(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat
};

Bear.prototype = {
  constructor: Bear
};

function Animal() {
  
}

Animal.prototype = {
  constructor: Animal,
  eat: function(){
    console.log("nom nom nom")
  }
};
