//For unrelated objects, it's better to use mixins. A mixin allows other objects to use a collection of functions.
//Mixin adds comman behaviour to unrelated objects like BIRD and AIRPLANE, both can fly

let flyMixin = function(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  }
};

//The flyMixin takes any object and gives it the fly method.

//Example
let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};


let glideMixin = function(obj){
    obj.glide = function(){
      console.log("Gliding, wooosh!");
    }
}

glideMixin(bird);
glideMixin(boat);
