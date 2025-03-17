import { Vehicle } from "./Vehicle";

class Car implements Vehicle {

    isEngine(): boolean {
        return true;
    }
    isElectric(): boolean {
        return true;
    }
    getEngineCount(): number {
        return 1;
    }
}


export { Car };