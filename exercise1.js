// Create a Car class with private properties for make, model, and year.
// Include a method getCarInfo() that returns the car info as a string.
// Add a method setYear(newYear) that updates the year only if newYear >= the current year.

class Car {
  // YOUR CODE HERE
  #make
  #model
  #year

  constructor(make, model, year) {
    this.#make = make
    this.#model = model
    this.#year = year
  }

  getCarInfo() {
    return `Make: ${this.#make}, Model: ${this.#model}, Year: ${this.#year}`
  }

  setYear(newYear) {
    if (newYear >= this.#year) {
      this.#year = newYear;
    } else {
      console.log(`Year ${newYear} is not valid. The year cannot be updated.`)
    }
  }
}


// TEST CASE / DRIVER CODE
const car1 = new Car("Toyota", "Corolla", 2010);
console.log(car1.getCarInfo()); // Expected output: "Make: Toyota, Model: Corolla, Year: 2010"
car1.setYear(2015); // Should update the year
console.log(car1.getCarInfo()); // Expected output: "Make: Toyota, Model: Corolla, Year: 2015"
car1.setYear(2005); // Should not update the year
console.log(car1.getCarInfo()); // Expected output: "Make: Toyota, Model: Corolla, Year: 2015"