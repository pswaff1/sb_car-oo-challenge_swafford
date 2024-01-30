import Vehicle from "./classes/Vehicle.js";
import Car from "./classes/Car.js";
import Motorcycle from "./classes/Motorcycle.js";
import Garage from "./classes/Garage.js";

try {
  let newVehicle = new Vehicle("Dodge", "Ram 1500", 2001);
  console.log(newVehicle.honk());
  console.log(newVehicle.toString());
} catch (e) {
  console.log("Type Error: year must be numeric");
}

try {
    let newCar = new Car("Ford", "F150", 2004)
    console.log(newCar.honk());
    console.log(newCar.toString());
    console.log(newCar.numWheels);
} catch(e) {
    console.log("Type Error: year must be numeric");
}

try {
    let newMotorcycle = new Motorcycle("Harley-Davidson", "Super Glide", 1999);
    console.log(newMotorcycle.honk());
    console.log(newMotorcycle.toString());
    console.log(newMotorcycle.numWheels);
    console.log(newMotorcycle.revEngine());
} catch(e) {
    console.log("Type Error: year must be numeric");
}

let garage = new Garage(2);
console.log(garage.add(new Car("Hyundai", "Elantra", 2015)));
console.log(garage.vehicles);
console.log(garage.add("Taco"));
console.log(garage.add(new Motorcycle("Honda", "Nighthawk", 2000)));
console.log(garage.vehicles);
console.log(garage.add(new Motorcycle("Honda", "Nighthawk", 2001)));
console.log(garage.vehicles)