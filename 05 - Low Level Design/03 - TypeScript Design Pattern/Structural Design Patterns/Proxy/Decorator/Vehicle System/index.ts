import { BaseBike } from "./Base/BaseBike";
import { BaseCar } from "./Base/BaseCar";
import { GPS } from "./Features/GPS";
import { SportsMode } from "./Features/SportsMode";
import { Sunroof } from "./Features/Sunroof";


// CAR
let myCar = new BaseCar();

console.log(`${myCar.getDescription()} costs ₹${myCar.getCost()}`);
console.log();

myCar = new GPS(myCar);
console.log(`${myCar.getDescription()} costs ₹${myCar.getCost()}`);
console.log();

myCar = new Sunroof(myCar);
console.log(`${myCar.getDescription()} costs ₹${myCar.getCost()}`);
console.log();

myCar = new SportsMode(myCar);
console.log(`${myCar.getDescription()} costs ₹${myCar.getCost()}`);
console.log();

// BIKE
let myBike = new BaseBike();
console.log(`${myBike.getDescription()} costs ₹${myBike.getCost()}`);
console.log();

myBike = new GPS(myBike);
console.log(`${myBike.getDescription()} costs ₹${myBike.getCost()}`);
console.log();

myBike = new SportsMode(myBike);
console.log(`${myBike.getDescription()} costs ₹${myBike.getCost()}`);
console.log();