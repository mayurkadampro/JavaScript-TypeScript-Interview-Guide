// index.ts - Client Code
import { FuelCar } from "./FuelCar";
import { ElectricCar } from "./ElectricCar";
import { ElectricCarAdapter } from "./ElectricCarAdapter";
import { Vehicle } from "./interface";


const fuelCar: Vehicle = new FuelCar();
const electricCarAdapter: Vehicle = new ElectricCarAdapter(new ElectricCar());

console.log("Using FuelCar:");
fuelCar.refuel();

console.log("\nUsing ElectricCar through Adapter:");
electricCarAdapter.refuel(); // Internally calls chargeBattery()
