import { Bike } from "./Bike";
import { Bus } from "./Bus";
import { Car } from "./Car";
import { TrafficSignal } from "./TrafficSignal";

const trafficSignal = new TrafficSignal();

const car = new Car();
const bike = new Bike();
const bus = new Bus();

trafficSignal.addObserver(car);
trafficSignal.addObserver(bike);
trafficSignal.addObserver(bus);

trafficSignal.changeSignal("GREEN");  // 🚦 Vehicles start moving
trafficSignal.changeSignal("RED");    // 🚦 Vehicles stop