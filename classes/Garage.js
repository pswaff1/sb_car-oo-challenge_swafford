import Vehicle from "./Vehicle.js";

export default class Garage {
  constructor(capacity) {
    this.capacity = capacity;
    this.vehicles = [];
  }
  add(vehicle) {
    if (!(vehicle.__proto__ instanceof Vehicle)) {
      return "Only vehicles allowed in here!";
    } else if (this.vehicles.length >= this.capacity) {
      return "Sorry, we're full.";
    } else {
      this.vehicles.push(vehicle);
      return "Vehicle added!";
    }
  }
}
