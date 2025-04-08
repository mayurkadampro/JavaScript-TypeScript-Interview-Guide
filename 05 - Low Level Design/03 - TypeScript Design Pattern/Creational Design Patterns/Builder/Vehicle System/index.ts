import { VehicleBuilder } from './VehicleBuilder';

const sportsCar = new VehicleBuilder()
  .setType('Sports Car')
  .setEngine('V8')
  .setWheels(4)
  .setColor('Red')
  .build();

sportsCar.showSpecs();

const bike = new VehicleBuilder()
  .setType('Bike')
  .setEngine('150cc')
  .setWheels(2)
  .setColor('Black')
  .build();

bike.showSpecs();
