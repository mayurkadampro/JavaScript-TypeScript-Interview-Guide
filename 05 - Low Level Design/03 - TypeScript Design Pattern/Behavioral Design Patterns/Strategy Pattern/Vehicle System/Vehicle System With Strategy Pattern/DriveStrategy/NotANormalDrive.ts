import { DriveStrategy } from "./DriveStrategy";

class NotANormalDrive implements DriveStrategy {
  drive(): void {
    console.log("Car can't normally drive.");
  }
}

export { NotANormalDrive };