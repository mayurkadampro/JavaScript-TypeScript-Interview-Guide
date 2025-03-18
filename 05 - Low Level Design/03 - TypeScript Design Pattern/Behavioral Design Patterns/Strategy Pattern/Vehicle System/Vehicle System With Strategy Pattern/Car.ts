import { DriveStrategy } from "./DriveStrategy/DriveStrategy";

class Car {
    protected driveStrategy: DriveStrategy;
    constructor(driveStrategy: DriveStrategy) {
        this.driveStrategy = driveStrategy;
    }

    drive(): void {
        this.driveStrategy.drive();
    }

    hasEngine(): void {
        console.log("Yes, engine present.");
    }
};

export { Car };