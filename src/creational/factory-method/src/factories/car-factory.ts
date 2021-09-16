import { Car } from '../vehicles/car';
import { Vehicle } from '../vehicles/vehicle';
import { VehicleFactory } from './vehicle-factory';

export class CarFactory extends VehicleFactory {
	getVehicle(vehicleName: string): Vehicle {
		return new Car(vehicleName);
	}
}
