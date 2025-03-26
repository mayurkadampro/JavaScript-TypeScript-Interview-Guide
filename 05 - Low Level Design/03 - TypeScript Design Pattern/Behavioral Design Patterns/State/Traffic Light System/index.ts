import { GreenLight } from "./GreenLight";
import { RedLight } from "./RedLight";
import { TrafficLight } from "./TrafficLight";
import { YellowLight } from "./YellowLight";

// Initialize with RedLight state
const trafficLight = new TrafficLight(new RedLight());
trafficLight.getState(); // Output: 🚦 Red Light - STOP!

// Change to Yellow Light
trafficLight.setState(new YellowLight());
trafficLight.getState(); // Output: 🚦 Yellow Light - GET READY!

// Change to Green Light
trafficLight.setState(new GreenLight());
trafficLight.getState(); // Output: 🚦 Green Light - GO!