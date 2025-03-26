import { TrafficLightState } from "./interface";

export class TrafficLight {
    state: TrafficLightState;

    constructor(state: TrafficLightState) {
        this.state = state;
    }

    setState(state: TrafficLightState): void {
        this.state = state;
    }

    getState(){
        this.state.getState();
    }
}
