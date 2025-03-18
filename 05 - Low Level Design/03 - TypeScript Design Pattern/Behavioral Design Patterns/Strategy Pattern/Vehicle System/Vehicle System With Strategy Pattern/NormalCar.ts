import { Car } from "./Car";
import { NormalDrive } from "./DriveStrategy/NormalDrive";

class NormalCar extends Car {
    constructor() {
        super(new NormalDrive());
    }
};

export { NormalCar };