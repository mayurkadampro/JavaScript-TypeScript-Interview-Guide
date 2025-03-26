import { Vehicle } from "./interface";

export class FuelCar implements Vehicle {
    refuel(): void {
        console.log("Refueling the fuel car...");
    }
}