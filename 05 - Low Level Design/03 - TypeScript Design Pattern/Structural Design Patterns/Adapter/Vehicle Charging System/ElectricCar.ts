import { Vehicle } from "./interface";

export class ElectricCar implements Vehicle {
    refuel(): void {
        throw new Error("Don't Support the refuel...");
    }

    chargeBattery(): void {
        console.log("Charging the batteries of electric car...");
    }
}