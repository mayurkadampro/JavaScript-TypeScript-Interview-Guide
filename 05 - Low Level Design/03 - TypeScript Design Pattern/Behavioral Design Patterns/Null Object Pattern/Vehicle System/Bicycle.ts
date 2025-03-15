import { Vehicle } from "./Vehicle";

class Bicycle extends Vehicle {
    isEngine(): boolean {
        return false;
    }

    isElectric(): boolean {
        return true;
    }

    getEngineCount(): number {
        return 0;
    }
}

export { Bicycle };