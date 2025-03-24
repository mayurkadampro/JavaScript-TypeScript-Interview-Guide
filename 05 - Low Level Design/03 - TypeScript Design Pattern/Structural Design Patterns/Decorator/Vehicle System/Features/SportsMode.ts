import { VehicleDecorator } from "../Decorators/VehicleDecorator";

export class SportsMode extends VehicleDecorator {
    getDescription(): string {
        return `${this.decoratedVehicle.getDescription()}, Sport Mode.`;
    }

    getCost(): number {
        return this.decoratedVehicle.getCost() + 70000;
    }
}