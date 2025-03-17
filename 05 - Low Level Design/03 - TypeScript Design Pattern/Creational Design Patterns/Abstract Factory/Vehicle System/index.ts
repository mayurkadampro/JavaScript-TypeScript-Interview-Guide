import { NormalVehicleFactory } from "./NormalVehicleFactory";
import { SportsVehicleFactory } from "./SportsVehicleFactory";
import { VehicleFactory } from "./interfaces";

function testFactory(factory: VehicleFactory) {
    const car = factory.createCar();
    const bike = factory.createBike();
    const bicycle = factory.createBicycle();

    car.drive();
    bike.ride();
    bicycle.ride();
} 

// Example Usage
console.log("Normal Vehicles:");
testFactory(new NormalVehicleFactory());
console.log();

console.log("Sports Vehicles:");
testFactory(new SportsVehicleFactory());