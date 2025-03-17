import { Bike } from "../interfaces";

class SportsBike implements Bike {
    ride(): void {
        console.log("Riding a sports bike!");
    }
}

export { SportsBike };