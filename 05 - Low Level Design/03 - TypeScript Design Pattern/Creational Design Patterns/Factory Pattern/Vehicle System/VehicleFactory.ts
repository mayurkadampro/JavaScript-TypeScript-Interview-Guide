import { Bicycle } from "./Bicycle";
import { Bike } from "./Bike";
import { Car } from "./Car";
import { Vehicle } from "./Vehicle";

class VehicleFactory {
    static getVehicleObject(vehicleType: string): Vehicle | null {
        switch (vehicleType) {
            case "Car":
                return new Car();
            case "Bike":
                return new Bike();
            case "Bicycle":
                return new Bicycle();
            default:
                /* 
                Here you can also implement Null Object Pattern, 
                but for this example We mainly focus on Factory 
                */
                return null;
        }
    }
}

export { VehicleFactory };