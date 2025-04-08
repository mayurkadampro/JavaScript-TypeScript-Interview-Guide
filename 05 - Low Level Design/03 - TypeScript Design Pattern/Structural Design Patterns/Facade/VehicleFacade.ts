import { Engine } from "./Engine";
import { FuelPump } from "./FuelPump";
import { Dashboard } from "./Dashboard";

export class VehicleFacade {
    private engine: Engine;
    private fuelPump: FuelPump;
    private dashboard: Dashboard;

    constructor() {
        this.engine = new Engine();
        this.fuelPump = new FuelPump();
        this.dashboard = new Dashboard();
    }

    startVehicle(): void {
        console.log("Starting vehicle...");
        this.dashboard.turnOn();
        this.fuelPump.pump();
        this.engine.start();
        console.log("Vehicle started ✅");
    }

    stopVehicle(): void {
        console.log("Stopping vehicle...");
        this.engine.stop();
        this.dashboard.turnOff();
        console.log("Vehicle stopped ❌");
    }
}
