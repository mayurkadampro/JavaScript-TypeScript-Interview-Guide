import { VehicleDecorator } from "../Decorators/VehicleDecorator";

export class GPS extends VehicleDecorator {
    getDescription(): string {
        return `${this.decoratedVehicle.getDescription()}, GPS`;
    }

    getCost(): number {
        return this.decoratedVehicle.getCost() + 30000;
    }
}