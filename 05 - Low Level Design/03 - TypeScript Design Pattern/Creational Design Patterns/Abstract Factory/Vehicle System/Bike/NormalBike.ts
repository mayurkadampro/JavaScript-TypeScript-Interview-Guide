import { Bike } from "../interfaces";

class NormalBike implements Bike {
    ride(): void {
        console.log("Riding a normal bike!");
    }
}

export { NormalBike };