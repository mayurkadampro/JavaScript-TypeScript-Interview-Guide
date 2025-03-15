import { Bicycle } from "./Bicycle";
import { Bike } from "./Bike";
import { Car } from "./Car";
import { Vehicle } from "./Vehicle";
import { NullVehicle } from "./NullVehicle";

class VehicleFactory {
    static getVehicleObject(vehicleType: string): Vehicle {
        switch (vehicleType) {
            case "Car":
                return new Car();
            case "Bike":
                return new Bike();
            case "Bicycle":
                return new Bicycle();
            default:
                console.warn(`Warning: ${vehicleType} is not a valid vehicle type. Returning NullVehicle.`);
                return NullVehicle.getInstance();
        }
    }
}

export { VehicleFactory };