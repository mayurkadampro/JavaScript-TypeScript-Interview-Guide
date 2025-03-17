import { Bicycle } from "../interfaces";

class NormalBicycle implements Bicycle {
    ride(): void {
        console.log("Riding a normal bicycle!");
    }
}

export { NormalBicycle };