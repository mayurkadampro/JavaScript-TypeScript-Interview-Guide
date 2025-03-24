import { Vehicle } from "../Vehicle";

export class BaseCar implements Vehicle {
    getDescription(): string {
        return "Base Car";
    }

    getCost(): number {
        return 500000; // Base price
    }
}
