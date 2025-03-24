import { VehicleDecorator } from "../Decorators/VehicleDecorator";

export class Sunroof extends VehicleDecorator {
    getDescription(): string {
        return `${this.decoratedVehicle.getDescription()}, Sunroof`;
    }

    getCost(): number {
        return this.decoratedVehicle.getCost() + 50000;
    }
}