import { Observer } from "./interface";

export class Vehicle implements Observer {
    constructor(private name: string) { }

    update(signal: string): void {
        if (signal === "GREEN") {
            console.log(`✅ ${this.name} starts moving.`);
        } else {
            console.log(`⛔ ${this.name} stops.`);
        }
    }
}
