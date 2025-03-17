import { SportsBicycle } from "./Bicycle/SportsBicycle";
import { SportsBike } from "./Bike/SportsBike";
import { SportsCar } from "./Car/SportsCar";
import { Bicycle, Bike, Car, VehicleFactory } from "./interfaces";

class SportsVehicleFactory implements VehicleFactory {
    createBike(): Bike {
        return new SportsBike();
    }

    createCar(): Car {
        return new SportsCar();
    }

    createBicycle(): Bicycle {
        return new SportsBicycle();
    }
}

export { SportsVehicleFactory };