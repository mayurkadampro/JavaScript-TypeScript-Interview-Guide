import { Car } from "./Car";

class MountainCar extends Car {
    /*
        The SportsCar class already contains an overridden and wrote the similar function.
        To eliminate this duplication, we should implement the Strategy Pattern for better code maintainability.
    */
    drive() {
        console.log("Car can't normally drive.");
    }
};

export { MountainCar };