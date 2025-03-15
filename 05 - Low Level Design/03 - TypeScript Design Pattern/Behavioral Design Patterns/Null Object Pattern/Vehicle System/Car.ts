import { Vehicle } from "./Vehicle";

class Car extends Vehicle {
    isEngine(): boolean {
        return true;
    }

    isElectric(): boolean {
        return false;
    }

    getEngineCount(): number {
        return 1;
    }
}

export { Car };