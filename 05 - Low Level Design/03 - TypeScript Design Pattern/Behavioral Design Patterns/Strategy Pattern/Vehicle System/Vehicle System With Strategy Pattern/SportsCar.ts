import { Car } from "./Car";
import { NotANormalDrive } from "./DriveStrategy/NotANormalDrive";

class SportsCar extends Car {
    constructor() {
        super(new NotANormalDrive());
    }
};

export { SportsCar };