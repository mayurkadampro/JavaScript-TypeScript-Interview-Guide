import { TrafficLightState } from "./interface";

export class YellowLight implements TrafficLightState {    
    getState(): void {
        console.log("🚦 Yellow Light - GET READY!");
    }
}