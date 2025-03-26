import { TrafficLightState } from "./interface";

export class GreenLight implements TrafficLightState {
    getState(): void {
        console.log("🚦 Green Light - GO!");
    }
}