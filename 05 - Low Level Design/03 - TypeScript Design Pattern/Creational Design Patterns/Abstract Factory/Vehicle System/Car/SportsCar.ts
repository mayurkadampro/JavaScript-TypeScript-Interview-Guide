import { Car } from "../interfaces";

class SportsCar implements Car {
    drive(): void {
        console.log("Driving a fast sports car!");
    }
}

export { SportsCar };