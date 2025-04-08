import { Vehicle } from './Vehicle';

export class VehicleBuilder {
    private vehicle: Vehicle;

    constructor() {
        this.vehicle = new Vehicle();
    }

    setType(type: string): VehicleBuilder {
        this.vehicle.setType(type);
        return this;
    }

    setEngine(engine: string): VehicleBuilder {
        this.vehicle.setEngine(engine);
        return this;
    }

    setWheels(wheels: number): VehicleBuilder {
        this.vehicle.setWheels(wheels);
        return this;
    }

    setColor(color: string): VehicleBuilder {
        this.vehicle.setColor(color);
        return this;
    }

    build(): Vehicle {
        return this.vehicle;
    }
}
