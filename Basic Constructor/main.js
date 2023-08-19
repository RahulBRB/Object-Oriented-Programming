function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  
  this.sayHello = function() {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}.`);
  };
}

const person1 = new Person("John", "Doe", 30);
const person2 = new Person("Jane", "Smith", 25);

console.log(person1.firstName); // Output: John
console.log(person2.age);       // Output: 25
person1.sayHello();             // Output: Hello, my name is John Doe.
person2.sayHello();             // Output: Hello, my name is Jane Smith.
