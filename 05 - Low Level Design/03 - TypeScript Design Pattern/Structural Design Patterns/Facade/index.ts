import { VehicleFacade } from "./VehicleFacade";

const vehicle = new VehicleFacade();
vehicle.startVehicle();

console.log("\n--- Some time later ---\n");

vehicle.stopVehicle();
