class Vacation {
  constructor(destination, length) {
    this.destination = destination;
    this.length = length;
  }
  print() {
    console.log(`${this.destination} will take ${this.length} days.`);
  }
}

class Expedition extends Vacation {
  constructor(destination, length, gear) {
    super(destination, length);
    this.gear = gear;
  }
  print() {
    super.print();
    console.log(`Bring your ${this.gear.join(" and your ")}`);
  }
}

let trip = new Vacation("Santiago, Chile", 7);
trip.print();
console.log("----------------------------");

trip = new Expedition("Mt. Whitney", 3, [
  "sunglasses",
  "prayer flags",
  "camera",
]);
trip.print();

export default new Expedition("Mt. Freel", 2, ["water", "snack"]);
