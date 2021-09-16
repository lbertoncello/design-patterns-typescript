import { Vehicle } from '../vehicles/vehicle';

export abstract class VehicleFactory {
	// Factory Method
	abstract getVehicle(vehicleName: string): Vehicle;

	// A Factory também pode implementar lógica!
	pickUp(customerName: string, vehicleName: string): Vehicle {
		const car = this.getVehicle(vehicleName);
		car.pickUp(customerName);

		return car;
	}
}
