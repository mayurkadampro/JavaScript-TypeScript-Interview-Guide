import { Bicycle } from "../interfaces";

class SportsBicycle implements Bicycle {
    ride(): void {
        console.log("Riding a sports bicycle!");
    }
}

export { SportsBicycle };