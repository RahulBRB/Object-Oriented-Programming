const person = { //Object example
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isStudent: false,
  sayHello: function() {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}.`);
  }
};

console.log(person.firstName); // Output: John
console.log(person.age);       // Output: 30
person.sayHello();             // Output: Hello, my name is John Doe.
