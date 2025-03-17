import { VehicleFactory } from "./VehicleFactory";

const myVehicle = VehicleFactory.getVehicleObject("Bicycle");

console.log(myVehicle?.isEngine());       // false
console.log(myVehicle?.isElectric());     // true
console.log(myVehicle?.getEngineCount()); // 0
console.log()


const myNewVehicle = VehicleFactory.getVehicleObject("Lambo-Car");

console.log(myNewVehicle?.isEngine());       // undefined 
console.log(myNewVehicle?.isElectric());     // undefined
console.log(myNewVehicle?.getEngineCount()); // undefined
