import { VehicleFactory } from "./VehicleFactory";

const myVehicle = VehicleFactory.getVehicleObject("Bicycle");

console.log(myVehicle.isEngine());       // false
console.log(myVehicle.isElectric());     // true
console.log(myVehicle.getEngineCount()); // 0
console.log()


const myNewVehicle = VehicleFactory.getVehicleObject("Lambo-Car");

console.log(myNewVehicle.isEngine());       // false - default value return
console.log(myNewVehicle.isElectric());     // false - default value return
console.log(myNewVehicle.getEngineCount()); // 0     - default value return
