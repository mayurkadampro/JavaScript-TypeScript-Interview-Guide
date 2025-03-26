import { ElectricCar } from "./ElectricCar";
import { FuelCar } from "./FuelCar";
import { Vehicle } from "./interface";

export class ElectricCarAdapter implements Vehicle {
    private electricCar: ElectricCar;

    constructor(electricCar: ElectricCar){
        this.electricCar = electricCar;
    }
    
    refuel(): void {
        console.log("Using adapter to charge the electric car instead of refueling...");
        this.electricCar.chargeBattery(); // Adapting chargeBattery() to refuel()
    }
}