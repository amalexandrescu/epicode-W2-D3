/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/

const arr = [1, 2, 3, 4, 5];
console.log(arr);

/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/

const obj = {
  name: "Alexandra",
  surname: "Alexandrescu",
  email: "alexandrescu.alexandra.maria@gmail.com",
  age: 26,
};
console.log(obj);

/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/

obj.drivingLicense = true;
console.log(obj);

/* EXERCISE 4
 Remove from the previously created object the age property.
*/

delete obj.age;
console.log(obj);

/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/

const anotherObj = {
  name: "Horia",
  surname: "Ion",
  email: "horia@gmail.com",
};

if (obj.email === anotherObj.email) {
  console.log("Same emails");
} else {
  console.log("Different mails");
}

/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

let totalShoppingCart = 45;
let shippingCost = 10;
let totalCost =
  totalShoppingCart > 50 ? totalShoppingCart : totalShoppingCart + shippingCost;
console.log("The total cost including the shipping", totalCost);

/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

let blackFridayTotalShoppingCart =
  totalShoppingCart - (20 * totalShoppingCart) / 100;
console.log(
  "Total price of the shopping cart after applying the 20% BF discount",
  blackFridayTotalShoppingCart
);
let blackFridayTotalCost =
  blackFridayTotalShoppingCart > 50
    ? blackFridayTotalShoppingCart
    : blackFridayTotalShoppingCart + shippingCost;

console.log(
  "The total cost on BF including shipping is: ",
  blackFridayTotalCost
);

/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/

const car = {
  brand: "audi",
  model: "A5",
  licensePlate: "BV01AAA",
};

const car1 = Object.assign({}, car);
car1.licensePlate = "BV01BBB";
const car2 = Object.assign({}, car);
car2.licensePlate = "BV01CCC";
const car3 = Object.assign({}, car);
car3.licensePlate = "BV01DDD";
const car4 = Object.assign({}, car);
car4.licensePlate = "BV01EEE";

console.log(car);
console.log(car1);
console.log(car2);
console.log(car3);
console.log(car4);

/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/

const carsForRent = [car, car1, car2, car3, car4];
console.log(carsForRent);

/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/

carsForRent.shift();
console.log("CarsForRent array after removing the first element", carsForRent);

carsForRent.pop();
console.log("CarsForRent array after removing the last element", carsForRent);

/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/

console.log(car.brand, car.model, car.licensePlate);

//OR

console.log(typeof car);
console.log(typeof car.brand);
console.log(typeof car.licensePlate);

/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/

let carsForSale = [];
carsForSale = ["audi", "bmw", "porsche"];
let totalCars = carsForSale.length + carsForRent.length;
console.log("This is the actual form of carsForRent array", carsForRent);
console.log(totalCars);

/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/

for (let i = 0; i < carsForSale.length; i++) {
  console.log(carsForSale[i]);
}

//If the array called carsForSale would have car objects as elements, the solution would be:

const carsForSale1 = [car, car1, car2];
console.log(carsForSale1);

for (let i = 0; i < carsForSale1.length; i++) {
  console.log(carsForSale1[i].brand);
  console.log(carsForSale1[i].model);
  console.log(carsForSale1[i].licensePlate);
}
