import { TrafficLightState } from "./interface";

export class RedLight implements TrafficLightState {
    getState(): void {
        console.log("🚦 Red Light - STOP!");
    }
}