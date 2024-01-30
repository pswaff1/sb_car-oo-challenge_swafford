export default class Vehicle {
  constructor(make, model, year) {
    if (!Number.isFinite(year)) {
      throw new Error("typeError");
    }
    this.make = make;
    this.model = model;
    this.year = year;
  }
  honk() {
    return "Beep.";
  }
  toString() {
    return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
  }
}
