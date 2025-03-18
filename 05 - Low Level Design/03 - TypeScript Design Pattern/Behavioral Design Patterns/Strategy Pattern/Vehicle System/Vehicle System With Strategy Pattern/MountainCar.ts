import { Car } from "./Car";
import { NotANormalDrive } from "./DriveStrategy/NotANormalDrive";

class MountainCar extends Car {

    constructor() {
        super(new NotANormalDrive());
    }
};

export { MountainCar };