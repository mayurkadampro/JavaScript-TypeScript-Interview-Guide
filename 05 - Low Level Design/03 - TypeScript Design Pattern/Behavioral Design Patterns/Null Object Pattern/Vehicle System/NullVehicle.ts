import { Vehicle } from "./Vehicle";

class NullVehicle extends Vehicle {
    private static instance: NullVehicle | null = null; // Explicitly declare static property

    isEngine(): boolean {
        return false;
    }
    isElectric(): boolean {
        return false;
    }
    getEngineCount(): number {
        return 0;
    }

    // OPTIONAL BELOW METHOD : Since NullVehicle does not store any state, we can make it a singleton to avoid creating multiple redundant instances.
    static getInstance(): NullVehicle {
        if (!NullVehicle.instance) {
            NullVehicle.instance = new NullVehicle();
        }
        return NullVehicle.instance;
    }
}

export { NullVehicle };