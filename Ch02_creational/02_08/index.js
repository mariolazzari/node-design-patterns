const PersonBuilder = require("./PersonBuilder");

// Employees
const sue = new PersonBuilder("Sue").makeEmployee().makeManager(60).build();
new PersonBuilder("Bill").makeEmployee().makePartTime().build();
new PersonBuilder("Phil").makeEmployee().build();

// Shoppers
const charles = new PersonBuilder("Charles")
  .withMoney(500)
  .withList(["jeans", "sunglasses"])
  .build();

new PersonBuilder("Tabbitha").withMoney(1000).build();

console.log(sue.toString());
console.log(charles.toString());
