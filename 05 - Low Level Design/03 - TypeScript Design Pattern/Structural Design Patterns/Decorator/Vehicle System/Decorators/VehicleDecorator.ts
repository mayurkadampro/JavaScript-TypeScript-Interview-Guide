import { Vehicle } from "../Vehicle";

export class VehicleDecorator implements Vehicle {
    decoratedVehicle: Vehicle;

    constructor(decoratedVehicle: Vehicle) {
        this.decoratedVehicle = decoratedVehicle;
    }

    getCost(): number {
        return this.decoratedVehicle.getCost();
    }
    getDescription(): string {
        return this.decoratedVehicle.getDescription();
    }
}