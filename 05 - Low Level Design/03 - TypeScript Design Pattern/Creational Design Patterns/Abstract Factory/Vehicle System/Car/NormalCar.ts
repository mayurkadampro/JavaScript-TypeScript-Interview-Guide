import { Car } from "../interfaces";

class NormalCar implements Car {
    drive(): void {
        console.log("Driving a normal car!");
    }
}

export { NormalCar };