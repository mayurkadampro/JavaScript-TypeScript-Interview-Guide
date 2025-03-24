import { Vehicle } from "../Vehicle";

export class BaseBike implements Vehicle {
    getDescription(): string {
        return "Base Bike";
    }

    getCost(): number {
        return 100000; // Base price
    }
}
