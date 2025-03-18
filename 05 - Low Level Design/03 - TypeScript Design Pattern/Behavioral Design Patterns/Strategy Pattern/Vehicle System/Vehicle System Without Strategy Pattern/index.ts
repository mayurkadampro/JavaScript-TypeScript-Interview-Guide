import { MountainCar } from "./MountainCar";
import { NormalCar } from "./NormalCar";
import { SportsCar } from "./SportsCar";

const myNormalCar = new NormalCar();
const mySportsCar = new SportsCar();
const myMountainCar = new MountainCar();

myNormalCar.drive();        // Car can normally drive.
myNormalCar.hasEngine();    // Yes, engine present.

mySportsCar.drive();        // Car can't normally drive.
mySportsCar.hasEngine();    // Yes, engine present.

myMountainCar.drive();      // Car can't normally drive.
mySportsCar.hasEngine();    // Yes, engine present.