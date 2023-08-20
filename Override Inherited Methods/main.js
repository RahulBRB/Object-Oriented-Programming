function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

//Overriding the FLY method of bird in penguin
Penguin.prototype.fly = function(){
  return "Alas, this is a flightless bird.";
}


let penguin = new Penguin();
console.log(penguin.fly());
