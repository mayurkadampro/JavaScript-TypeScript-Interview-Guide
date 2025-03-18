import { DriveStrategy } from "./DriveStrategy";

class NormalDrive implements DriveStrategy {
  drive(): void {
    console.log("Car can normally drive.");
  }
}

export { NormalDrive };