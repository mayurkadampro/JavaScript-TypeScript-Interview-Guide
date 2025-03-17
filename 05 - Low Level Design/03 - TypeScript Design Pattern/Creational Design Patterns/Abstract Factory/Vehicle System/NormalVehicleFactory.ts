import { NormalBicycle } from "./Bicycle/NormalBicycle";
import { NormalBike } from "./Bike/NormalBike";
import { NormalCar } from "./Car/NormalCar";
import { Bicycle, Bike, Car, VehicleFactory } from "./interfaces";

class NormalVehicleFactory implements VehicleFactory {
    createBike(): Bike {
        return new NormalBike();
    }

    createCar(): Car {
        return new NormalCar();
    }

    createBicycle(): Bicycle {
        return new NormalBicycle();
    }
}

export { NormalVehicleFactory };